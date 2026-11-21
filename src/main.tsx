/*
 *  ███████╗████████╗██╗   ██╗██████╗ ██╗ ██████╗
 *  ██╔════╝╚══██╔══╝██║   ██║██╔══██╗██║██╔═══██╗
 *  ███████╗   ██║   ██║   ██║██║  ██║██║██║   ██║
 *  ╚════██║   ██║   ██║   ██║██║  ██║██║██║   ██║
 *  ███████║   ██║   ╚██████╔╝██████╔╝██║╚██████╔╝
 *  ╚══════╝   ╚═╝    ╚═════╝ ╚═════╝ ╚═╝ ╚═════╝
 *
 *  Built with Arc Studio
 *  https://studio.arc.io
 */

import './tracing'
import './console-capture'

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Root from './Root'
import { ThemeProvider } from './paymesh/theme'
import { isPublicPath, usePath } from './paymesh/router'
import { installShareSync } from './lib/share'
import './index.css'

// Studio logo SVG
const StudioLogo = () => (
  <svg width="9" height="10" viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M0 21.5001C0.167192 16.2366 1.02308 11.3243 2.45378 7.50459C4.26573 2.66517 6.88869 0 9.83904 0C12.7894 0 15.412 2.66517 17.2243 7.50459C18.1669 10.0216 18.8605 13.0121 19.2713 16.2655C19.3081 16.556 19.3393 16.8513 19.3714 17.146C19.3819 17.1642 19.3881 17.1811 19.386 17.1949C19.386 17.1949 19.6275 18.7674 19.6788 21.5001H19.6515C19.2934 21.1937 15.0694 17.7329 8.06739 18.735C8.17304 17.4996 8.31833 16.2974 8.50603 15.1452C8.51562 15.0863 8.52671 15.0294 8.53649 14.9709C11.2828 14.8846 13.6866 15.2171 15.5299 15.6529C15.5231 15.6073 15.5173 15.5603 15.5103 15.5149C15.1314 13.0547 14.5724 10.8024 13.8517 8.87761C12.6732 5.73037 11.1354 3.77496 9.83904 3.77496C8.54269 3.77496 7.00493 5.73037 5.82649 8.87761C5.54123 9.63889 5.28154 10.4508 5.04866 11.3071C4.72126 12.507 4.44621 13.7934 4.22654 15.1451C3.90141 17.1412 3.69827 19.2821 3.62345 21.5001H0Z" fill="currentColor"/>
  </svg>
)

// Studio attribution: a minimal, low-profile pill at the very top that never covers app content.
const StudioWatermark = () => (
  <a
    href="https://studio.arc.io/"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Built with Arc Studio"
    title="Built with Arc Studio"
    style={{
      position: 'fixed',
      top: '4px',
      left: '50%',
      transform: 'translateX(-50%)',
      display: 'flex',
      alignItems: 'center',
      gap: '5px',
      padding: '2px 8px',
      fontSize: '10px',
      fontWeight: 600,
      lineHeight: 1.4,
      fontFamily: "'DM Sans', system-ui, sans-serif",
      color: 'rgba(236, 238, 243, 0.85)',
      textDecoration: 'none',
      background: 'rgba(12, 13, 17, 0.7)',
      borderRadius: '999px',
      border: '1px solid rgba(139, 144, 162, 0.35)',
      opacity: 0.8,
      zIndex: 40,
    }}
  >
    <StudioLogo />
    Arc Studio
  </a>
)

// The front page and docs stay clean: the attribution pill only appears inside the app.
const WatermarkGate = () => (isPublicPath(usePath()) ? null : <StudioWatermark />)

installShareSync()

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider>
      <Root />
      <WatermarkGate />
    </ThemeProvider>
  </StrictMode>,
)
