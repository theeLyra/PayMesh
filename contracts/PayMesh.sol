// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import {IERC20} from "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import {SafeERC20} from "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";
import {ReentrancyGuard} from "@openzeppelin/contracts/utils/ReentrancyGuard.sol";
import {Math} from "@openzeppelin/contracts/utils/math/Math.sol";

/// @title PayMesh
/// @notice Direct, link, batch, split, escrow, and scheduled USDC payments without fees or administrators.
/// @dev Categories are opaque bytes32 labels. Amounts use the supplied token's base units.
contract PayMesh is ReentrancyGuard {
    using SafeERC20 for IERC20;

    IERC20 public immutable usdc;
    uint8 public constant SOURCE_DIRECT = 0;
    uint8 public constant SOURCE_LINK = 1;
    uint8 public constant SOURCE_BATCH = 2;
    uint8 public constant SOURCE_SPLIT = 3;
    uint8 public constant SOURCE_ESCROW_RELEASE = 4;
    uint8 public constant SOURCE_SCHEDULED = 5;
    uint256 public constant MAX_BATCH_RECIPIENTS = 200;
    uint256 public constant MAX_SPLIT_RECIPIENTS = 50;
    uint256 public constant BPS_DENOMINATOR = 10_000;
    bytes32 public constant SPLIT_CATEGORY = bytes32("split");
    uint8 public constant STATUS_ACTIVE = 0;
    uint8 public constant STATUS_RELEASED = 1;
    uint8 public constant STATUS_REFUNDED = 2;
    uint64 public constant MIN_INTERVAL = 60;
    uint64 public constant MAX_INTERVAL = 366 days;
    uint32 public constant MAX_PAYMENTS = 1000;

    struct Link {
        address creator;
        uint256 amount;
        bytes32 category;
        bool active;
        uint64 createdAt;
        uint256 totalPaid;
        uint32 payments;
        string title;
    }

    struct Split {
        address creator;
        uint64 createdAt;
        uint256 totalPaid;
        string name;
        address[] recipients;
        uint16[] shareBps;
    }

    struct Escrow {
        address payer;
        address payee;
        uint256 amount;
        uint64 createdAt;
        uint64 deadline;
        uint8 status;
        bytes32 category;
        string description;
    }

    struct Plan {
        address payer;
        address payee;
        uint256 amount;
        uint64 interval;
        uint64 nextPaymentAt;
        uint32 paymentsMade;
        uint32 maxPayments;
        bytes32 category;
        bool active;
    }

    uint256 public linkCount;
    uint256 public activeLinks;
    mapping(uint256 => Link) private _links;
    mapping(address => uint256[]) private _linksOf;

    uint256 public batchCount;

    uint256 public splitCount;
    mapping(uint256 => Split) private _splits;
    mapping(address => uint256[]) private _splitsOf;

    uint256 public escrowCount;
    uint256 public activeEscrows;
    mapping(uint256 => Escrow) private _escrows;
    mapping(address => uint256[]) private _escrowsOf;

    uint256 public planCount;
    uint256 public activePlans;
    mapping(uint256 => Plan) private _plans;
    mapping(address => uint256[]) private _plansOf;

    error ZeroAddress();
    error InvalidRecipient();
    error SelfPayment();
    error ZeroAmount();
    error TextTooLong();
    error LinkNotFound();
    error LinkInactive();
    error IncorrectAmount();
    error NotCreator();
    error InvalidBatchSize();
    error LengthMismatch();
    error InvalidRecipientCount();
    error InvalidShare();
    error InvalidShareTotal();
    error NameTooLong();
    error SplitNotFound();
    error InvalidPayee();
    error InvalidDeadline();
    error DescriptionTooLong();
    error EscrowNotFound();
    error EscrowInactive();
    error NotPayer();
    error RefundNotAllowed();
    error InvalidInterval();
    error InvalidMaxPayments();
    error TimestampOverflow();
    error PlanNotFound();
    error PlanInactive();
    error PaymentNotDue();

    event Settled(address indexed from, address indexed to, uint256 amount, bytes32 indexed category, uint8 source, uint256 ref);
    event PaymentMemo(address indexed from, address indexed to, string memo);
    event LinkCreated(uint256 indexed id, address indexed creator, uint256 amount, bytes32 category, string title);
    event LinkClosed(uint256 indexed id);
    event BatchSent(uint256 indexed batchId, address indexed sender, uint256 total, uint256 count, bytes32 category);
    event SplitCreated(uint256 indexed id, address indexed creator, string name);
    event SplitPaid(uint256 indexed id, address indexed payer, uint256 amount);
    event EscrowCreated(uint256 indexed id, address indexed payer, address indexed payee, uint256 amount, uint64 deadline);
    event EscrowRefunded(uint256 indexed id);
    event PlanCreated(uint256 indexed id, address indexed payer, address indexed payee, uint256 amount, uint64 interval, uint32 maxPayments);
    event PlanExecuted(uint256 indexed id, uint32 paymentsMade);
    event PlanCancelled(uint256 indexed id);

    /// @notice Bind this contract to the ERC-20 USDC supplied by the deployer.
    constructor(IERC20 usdc_) {
        if (address(usdc_) == address(0)) revert ZeroAddress();
        usdc = usdc_;
    }

    /// @notice Pay a recipient directly; an optional memo is limited to 140 bytes.
    /// @dev Self-payments are rejected.
    function pay(address to, uint256 amount, bytes32 category, string calldata memo) external nonReentrant {
        if (to == address(0) || to == address(this)) revert InvalidRecipient();
        if (to == msg.sender) revert SelfPayment();
        if (amount == 0) revert ZeroAmount();
        if (bytes(memo).length > 140) revert TextTooLong();
        usdc.safeTransferFrom(msg.sender, to, amount);
        emit Settled(msg.sender, to, amount, category, SOURCE_DIRECT, 0);
        if (bytes(memo).length != 0) emit PaymentMemo(msg.sender, to, memo);
    }

    /// @notice Create a payment link; amount zero allows each payer to choose the amount.
    /// @return id The new link's identifier, starting at one.
    function createLink(uint256 amount, bytes32 category, string calldata title)
        external nonReentrant returns (uint256 id)
    {
        if (bytes(title).length > 100) revert TextTooLong();
        id = ++linkCount;
        ++activeLinks;
        _links[id] = Link(msg.sender, amount, category, true, uint64(block.timestamp), 0, 0, title);
        _linksOf[msg.sender].push(id);
        emit LinkCreated(id, msg.sender, amount, category, title);
    }

    /// @notice Pay an active link directly to its creator.
    /// @dev Self-payments are rejected.
    function payLink(uint256 id, uint256 amount) external nonReentrant {
        Link storage link = _requireLink(id);
        if (link.creator == msg.sender) revert SelfPayment();
        if (!link.active) revert LinkInactive();
        if (amount == 0) revert ZeroAmount();
        if (link.amount != 0 && amount != link.amount) revert IncorrectAmount();
        link.totalPaid += amount;
        ++link.payments;
        usdc.safeTransferFrom(msg.sender, link.creator, amount);
        emit Settled(msg.sender, link.creator, amount, link.category, SOURCE_LINK, id);
    }

    /// @notice Permanently close one of the caller's active links.
    function closeLink(uint256 id) external nonReentrant {
        Link storage link = _requireLink(id);
        if (msg.sender != link.creator) revert NotCreator();
        if (!link.active) revert LinkInactive();
        link.active = false;
        --activeLinks;
        emit LinkClosed(id);
    }

    /// @notice Return an existing link; unknown identifiers revert.
    function getLink(uint256 id) external view returns (Link memory) {
        return _requireLink(id);
    }

    /// @notice Return identifiers of links created by an address.
    function linksOf(address creator) external view returns (uint256[] memory) {
        return _linksOf[creator];
    }

    function _requireLink(uint256 id) private view returns (Link storage link) {
        link = _links[id];
        if (link.creator == address(0)) revert LinkNotFound();
    }

    /// @notice Pay 1 to 200 entries directly from the caller in a single atomic transaction.
    /// @dev Self-payments are rejected.
    /// @return batchId The new batch identifier, starting at one.
    function batchPay(address[] calldata recipients, uint256[] calldata amounts, bytes32 category)
        external nonReentrant returns (uint256 batchId)
    {
        uint256 count = recipients.length;
        if (count == 0 || count > MAX_BATCH_RECIPIENTS) revert InvalidBatchSize();
        if (count != amounts.length) revert LengthMismatch();
        uint256 total;
        for (uint256 i; i < count; ++i) {
            if (recipients[i] == address(0) || recipients[i] == address(this)) revert InvalidRecipient();
            if (recipients[i] == msg.sender) revert SelfPayment();
            if (amounts[i] == 0) revert ZeroAmount();
            total += amounts[i];
        }
        batchId = ++batchCount;
        for (uint256 i; i < count; ++i) {
            usdc.safeTransferFrom(msg.sender, recipients[i], amounts[i]);
            emit Settled(msg.sender, recipients[i], amounts[i], category, SOURCE_BATCH, batchId);
        }
        emit BatchSent(batchId, msg.sender, total, count, category);
    }

    /// @notice Create an immutable split of 1 to 50 entries whose basis points total 10,000.
    /// @return id The new split identifier, starting at one.
    function createSplit(address[] calldata recipients, uint16[] calldata shareBps, string calldata name)
        external nonReentrant returns (uint256 id)
    {
        uint256 count = recipients.length;
        if (count == 0 || count > MAX_SPLIT_RECIPIENTS) revert InvalidRecipientCount();
        if (count != shareBps.length) revert LengthMismatch();
        if (bytes(name).length > 100) revert NameTooLong();
        uint256 totalBps;
        for (uint256 i; i < count; ++i) {
            if (recipients[i] == address(0) || recipients[i] == address(this)) revert InvalidRecipient();
            if (shareBps[i] == 0) revert InvalidShare();
            totalBps += shareBps[i];
        }
        if (totalBps != BPS_DENOMINATOR) revert InvalidShareTotal();
        id = ++splitCount;
        Split storage split = _splits[id];
        split.creator = msg.sender;
        split.createdAt = uint64(block.timestamp);
        split.name = name;
        for (uint256 i; i < count; ++i) {
            split.recipients.push(recipients[i]);
            split.shareBps.push(shareBps[i]);
        }
        _splitsOf[msg.sender].push(id);
        emit SplitCreated(id, msg.sender, name);
    }

    /// @notice Pay a split; zero rounded shares are skipped and the last entry receives the remainder.
    /// @dev Self-payments are rejected, including recipients with zero rounded shares.
    /// @dev Math.mulDiv implements floor(amount * bps / 10,000) without intermediate overflow.
    function paySplit(uint256 id, uint256 amount) external nonReentrant {
        Split storage split = _requireSplit(id);
        if (amount == 0) revert ZeroAmount();
        split.totalPaid += amount;
        uint256 count = split.recipients.length;
        uint256 remainder = amount;
        for (uint256 i; i < count; ++i) {
            address recipient = split.recipients[i];
            if (recipient == msg.sender) revert SelfPayment();
            uint256 share = i == count - 1
                ? remainder
                : Math.mulDiv(amount, split.shareBps[i], BPS_DENOMINATOR);
            remainder -= share;
            if (share == 0) continue;
            usdc.safeTransferFrom(msg.sender, recipient, share);
            emit Settled(msg.sender, recipient, share, SPLIT_CATEGORY, SOURCE_SPLIT, id);
        }
        emit SplitPaid(id, msg.sender, amount);
    }

    /// @notice Return an existing split, including its recipients and weights.
    function getSplit(uint256 id) external view returns (Split memory) {
        return _requireSplit(id);
    }

    /// @notice Return split identifiers created by an address.
    function splitsOf(address creator) external view returns (uint256[] memory) {
        return _splitsOf[creator];
    }

    function _requireSplit(uint256 id) private view returns (Split storage split) {
        split = _splits[id];
        if (split.creator == address(0)) revert SplitNotFound();
    }

    /// @notice Deposit USDC for a distinct payee, with a future refund deadline.
    /// @return id The new escrow identifier, starting at one.
    function createEscrow(address payee, uint256 amount, uint64 deadline, bytes32 category, string calldata description)
        external nonReentrant returns (uint256 id)
    {
        if (payee == address(0) || payee == msg.sender || payee == address(this)) revert InvalidPayee();
        if (amount == 0) revert ZeroAmount();
        if (deadline <= block.timestamp) revert InvalidDeadline();
        if (bytes(description).length > 140) revert DescriptionTooLong();
        id = ++escrowCount;
        ++activeEscrows;
        _escrows[id] = Escrow(msg.sender, payee, amount, uint64(block.timestamp), deadline, STATUS_ACTIVE, category, description);
        _escrowsOf[msg.sender].push(id);
        _escrowsOf[payee].push(id);
        usdc.safeTransferFrom(msg.sender, address(this), amount);
        emit EscrowCreated(id, msg.sender, payee, amount, deadline);
    }

    /// @notice Allow only the payer to release an active escrow to its payee.
    function release(uint256 id) external nonReentrant {
        Escrow storage escrow = _requireEscrow(id);
        if (msg.sender != escrow.payer) revert NotPayer();
        if (escrow.status != STATUS_ACTIVE) revert EscrowInactive();
        escrow.status = STATUS_RELEASED;
        --activeEscrows;
        usdc.safeTransfer(escrow.payee, escrow.amount);
        emit Settled(escrow.payer, escrow.payee, escrow.amount, escrow.category, SOURCE_ESCROW_RELEASE, id);
    }

    /// @notice Return an active escrow to its payer: payee anytime, payer strictly after expiry.
    /// @dev A refund returns the payer's own funds, so it emits EscrowRefunded and no Settled event.
    function refund(uint256 id) external nonReentrant {
        Escrow storage escrow = _requireEscrow(id);
        if (escrow.status != STATUS_ACTIVE) revert EscrowInactive();
        if (msg.sender != escrow.payee && !(msg.sender == escrow.payer && block.timestamp > escrow.deadline)) {
            revert RefundNotAllowed();
        }
        escrow.status = STATUS_REFUNDED;
        --activeEscrows;
        usdc.safeTransfer(escrow.payer, escrow.amount);
        emit EscrowRefunded(id);
    }

    /// @notice Return an existing escrow; unknown identifiers revert.
    function getEscrow(uint256 id) external view returns (Escrow memory) {
        return _requireEscrow(id);
    }

    /// @notice Return escrow identifiers involving an address as payer or payee.
    function escrowsOf(address account) external view returns (uint256[] memory) {
        return _escrowsOf[account];
    }

    function _requireEscrow(uint256 id) private view returns (Escrow storage escrow) {
        escrow = _escrows[id];
        if (escrow.payer == address(0)) revert EscrowNotFound();
    }

    /// @notice Create a recurring plan paid by the caller; a past start is clamped to now.
    /// @dev Reject schedules whose timestamp arithmetic would exceed uint64.
    /// @return id The new plan identifier, starting at one.
    function createPlan(address payee, uint256 amount, uint64 interval, uint64 startAt, uint32 maxPayments, bytes32 category)
        external nonReentrant returns (uint256 id)
    {
        if (payee == address(0) || payee == msg.sender || payee == address(this)) revert InvalidPayee();
        if (amount == 0) revert ZeroAmount();
        if (interval < MIN_INTERVAL || interval > MAX_INTERVAL) revert InvalidInterval();
        if (maxPayments == 0 || maxPayments > MAX_PAYMENTS) revert InvalidMaxPayments();
        uint256 firstPaymentAt = startAt < block.timestamp ? block.timestamp : uint256(startAt);
        if (firstPaymentAt + uint256(interval) * maxPayments > type(uint64).max) revert TimestampOverflow();
        id = ++planCount;
        ++activePlans;
        _plans[id] = Plan(msg.sender, payee, amount, interval, uint64(firstPaymentAt), 0, maxPayments, category, true);
        _plansOf[msg.sender].push(id);
        _plansOf[payee].push(id);
        emit PlanCreated(id, msg.sender, payee, amount, interval, maxPayments);
    }

    /// @notice Execute exactly one due installment; anyone can call.
    /// @dev Insufficient allowance or balance reverts the transfer and all bookkeeping.
    /// The schedule advances from its previous due time, not from the execution time.
    function execute(uint256 id) external nonReentrant {
        Plan storage plan = _requirePlan(id);
        if (!plan.active) revert PlanInactive();
        if (block.timestamp < plan.nextPaymentAt) revert PaymentNotDue();
        ++plan.paymentsMade;
        plan.nextPaymentAt += plan.interval;
        if (plan.paymentsMade == plan.maxPayments) {
            plan.active = false;
            --activePlans;
        }
        usdc.safeTransferFrom(plan.payer, plan.payee, plan.amount);
        emit Settled(plan.payer, plan.payee, plan.amount, plan.category, SOURCE_SCHEDULED, id);
        emit PlanExecuted(id, plan.paymentsMade);
    }

    /// @notice Allow the payer to permanently cancel an active plan.
    function cancel(uint256 id) external nonReentrant {
        Plan storage plan = _requirePlan(id);
        if (msg.sender != plan.payer) revert NotPayer();
        if (!plan.active) revert PlanInactive();
        plan.active = false;
        --activePlans;
        emit PlanCancelled(id);
    }

    /// @notice Return an existing plan; unknown identifiers revert.
    function getPlan(uint256 id) external view returns (Plan memory) {
        return _requirePlan(id);
    }

    /// @notice Return plan identifiers involving an address as payer or payee.
    function plansOf(address account) external view returns (uint256[] memory) {
        return _plansOf[account];
    }

    /// @notice Whether a plan is active and time-due; does not check balance or allowance.
    /// @dev Unknown identifiers return false.
    function isDue(uint256 id) external view returns (bool) {
        Plan storage plan = _plans[id];
        return plan.active && block.timestamp >= plan.nextPaymentAt;
    }

    function _requirePlan(uint256 id) private view returns (Plan storage plan) {
        plan = _plans[id];
        if (plan.payer == address(0)) revert PlanNotFound();
    }
}
