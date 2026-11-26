const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-DrAshLsx-CzHzQmON.js","assets/viem-CaTTTc0T.js","assets/react-CCDOw-Dz.js","assets/wagmi-B88LVHus.js"])))=>i.map(i=>d[i]);
var Cu=Object.defineProperty;var wu=(e,t,n)=>t in e?Cu(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var Ee=(e,t,n)=>wu(e,typeof t!="symbol"?t+"":t,n);import{_ as ku,r as M,o as Oe,g as w1,j as i,b as _u}from"./react-CCDOw-Dz.js";import{d as k1}from"./index-BtU-WOzJ.js";import{p as _1,n as ju,B as Su,a as We,o as Eu,q as ts,r as Iu,s as ns,d as j1,t as Nu,v as Zo,w as S1,b as rs,g as Mu,x as Au,y as Lu,z as Tu,A as Ou,c as Fu,i as Ru}from"./wagmi-B88LVHus.js";import{G as si,H as Du,v as Ks,x as zu}from"./viem-CaTTTc0T.js";import{r as Bu}from"./dijkstra-COg3n3zL.js";import{B as Pu,P as Wu,T as Vu}from"./BackButton-D90Wvbgn.js";import{c as E1,a as $o}from"./index-BG4aHr2v.js";function Uu(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const o in r)if(o!=="default"&&!(o in e)){const a=Object.getOwnPropertyDescriptor(r,o);a&&Object.defineProperty(e,o,a.get?a:{enumerable:!0,get:()=>r[o]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zu=E1("ExternalLink",[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $u=E1("PlugZap",[["path",{d:"M6.3 20.3a2.4 2.4 0 0 0 3.4 0L12 18l-6-6-2.3 2.3a2.4 2.4 0 0 0 0 3.4Z",key:"goz73y"}],["path",{d:"m2 22 3-3",key:"19mgm9"}],["path",{d:"M7.5 13.5 10 11",key:"7xgeeb"}],["path",{d:"M10.5 16.5 13 14",key:"10btkg"}],["path",{d:"m18 3-4 4h6l-4 4",key:"16psg9"}]]);var Hu=/^-?(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?$/i,ci=Math.ceil,rt=Math.floor,qe="[BigNumber Error] ",Xs=qe+"Number primitive has more than 15 significant digits: ",lt=1e14,de=14,li=9007199254740991,di=[1,10,100,1e3,1e4,1e5,1e6,1e7,1e8,1e9,1e10,1e11,1e12,1e13],Zt=1e7,Re=1e9;function I1(e){var t,n,r,o=x.prototype={constructor:x,toString:null,valueOf:null},a=new x(1),s=20,c=4,l=-7,d=21,u=-1e7,p=1e7,m=!1,v=1,f=0,y={prefix:"",groupSize:3,secondaryGroupSize:0,groupSeparator:",",decimalSeparator:".",fractionGroupSize:0,fractionGroupSeparator:" ",suffix:""},_="0123456789abcdefghijklmnopqrstuvwxyz",k=!0;function x(h,g){var b,w,C,j,I,E,L,O,F=this;if(!(F instanceof x))return new x(h,g);if(g==null){if(h&&h._isBigNumber===!0){F.s=h.s,!h.c||h.e>p?F.c=F.e=null:h.e<u?F.c=[F.e=0]:(F.e=h.e,F.c=h.c.slice());return}if((E=typeof h=="number")&&h*0==0){if(F.s=1/h<0?(h=-h,-1):1,h===~~h){for(j=0,I=h;I>=10;I/=10,j++);j>p?F.c=F.e=null:(F.e=j,F.c=[h]);return}O=String(h)}else{if(!Hu.test(O=String(h)))return r(F,O,E);F.s=O.charCodeAt(0)==45?(O=O.slice(1),-1):1}(j=O.indexOf("."))>-1&&(O=O.replace(".","")),(I=O.search(/e/i))>0?(j<0&&(j=I),j+=+O.slice(I+1),O=O.substring(0,I)):j<0&&(j=O.length)}else{if(Ie(g,2,_.length,"Base"),g==10&&k)return F=new x(h),R(F,s+F.e+1,c);if(O=String(h),E=typeof h=="number"){if(h*0!=0)return r(F,O,E,g);if(F.s=1/h<0?(O=O.slice(1),-1):1,x.DEBUG&&O.replace(/^0\.0*|\./,"").length>15)throw Error(Xs+h)}else F.s=O.charCodeAt(0)===45?(O=O.slice(1),-1):1;for(b=_.slice(0,g),j=I=0,L=O.length;I<L;I++)if(b.indexOf(w=O.charAt(I))<0){if(w=="."){if(I>j){j=L;continue}}else if(!C&&(O==O.toUpperCase()&&(O=O.toLowerCase())||O==O.toLowerCase()&&(O=O.toUpperCase()))){C=!0,I=-1,j=0;continue}return r(F,String(h),E,g)}E=!1,O=n(O,g,10,F.s),(j=O.indexOf("."))>-1?O=O.replace(".",""):j=O.length}for(I=0;O.charCodeAt(I)===48;I++);for(L=O.length;O.charCodeAt(--L)===48;);if(O=O.slice(I,++L)){if(L-=I,E&&x.DEBUG&&L>15&&(h>li||h!==rt(h)))throw Error(Xs+F.s*h);if((j=j-I-1)>p)F.c=F.e=null;else if(j<u)F.c=[F.e=0];else{if(F.e=j,F.c=[],I=(j+1)%de,j<0&&(I+=de),I<L){for(I&&F.c.push(+O.slice(0,I)),L-=de;I<L;)F.c.push(+O.slice(I,I+=de));I=de-(O=O.slice(I)).length}else I-=L;for(;I--;O+="0");F.c.push(+O)}}else F.c=[F.e=0]}x.clone=I1,x.ROUND_UP=0,x.ROUND_DOWN=1,x.ROUND_CEIL=2,x.ROUND_FLOOR=3,x.ROUND_HALF_UP=4,x.ROUND_HALF_DOWN=5,x.ROUND_HALF_EVEN=6,x.ROUND_HALF_CEIL=7,x.ROUND_HALF_FLOOR=8,x.EUCLID=9,x.config=x.set=function(h){var g,b;if(h!=null)if(typeof h=="object"){if(h.hasOwnProperty(g="DECIMAL_PLACES")&&(b=h[g],Ie(b,0,Re,g),s=b),h.hasOwnProperty(g="ROUNDING_MODE")&&(b=h[g],Ie(b,0,8,g),c=b),h.hasOwnProperty(g="EXPONENTIAL_AT")&&(b=h[g],b&&b.pop?(Ie(b[0],-Re,0,g),Ie(b[1],0,Re,g),l=b[0],d=b[1]):(Ie(b,-Re,Re,g),l=-(d=b<0?-b:b))),h.hasOwnProperty(g="RANGE"))if(b=h[g],b&&b.pop)Ie(b[0],-Re,-1,g),Ie(b[1],1,Re,g),u=b[0],p=b[1];else if(Ie(b,-Re,Re,g),b)u=-(p=b<0?-b:b);else throw Error(qe+g+" cannot be zero: "+b);if(h.hasOwnProperty(g="CRYPTO"))if(b=h[g],b===!!b)if(b)if(typeof crypto<"u"&&crypto&&(crypto.getRandomValues||crypto.randomBytes))m=b;else throw m=!b,Error(qe+"crypto unavailable");else m=b;else throw Error(qe+g+" not true or false: "+b);if(h.hasOwnProperty(g="MODULO_MODE")&&(b=h[g],Ie(b,0,9,g),v=b),h.hasOwnProperty(g="POW_PRECISION")&&(b=h[g],Ie(b,0,Re,g),f=b),h.hasOwnProperty(g="FORMAT"))if(b=h[g],typeof b=="object")y=b;else throw Error(qe+g+" not an object: "+b);if(h.hasOwnProperty(g="ALPHABET"))if(b=h[g],typeof b=="string"&&!/^.?$|[+\-.\s]|(.).*\1/.test(b))k=b.slice(0,10)=="0123456789",_=b;else throw Error(qe+g+" invalid: "+b)}else throw Error(qe+"Object expected: "+h);return{DECIMAL_PLACES:s,ROUNDING_MODE:c,EXPONENTIAL_AT:[l,d],RANGE:[u,p],CRYPTO:m,MODULO_MODE:v,POW_PRECISION:f,FORMAT:y,ALPHABET:_}},x.isBigNumber=function(h){if(!h||h._isBigNumber!==!0)return!1;if(!x.DEBUG)return!0;var g,b,w=h.c,C=h.e,j=h.s;e:if({}.toString.call(w)=="[object Array]"){if((j===1||j===-1)&&C>=-Re&&C<=Re&&C===rt(C)){if(w[0]===0){if(C===0&&w.length===1)return!0;break e}if(g=(C+1)%de,g<1&&(g+=de),String(w[0]).length==g){for(g=0;g<w.length;g++)if(b=w[g],b<0||b>=lt||b!==rt(b))break e;if(b!==0)return!0}}}else if(w===null&&C===null&&(j===null||j===1||j===-1))return!0;throw Error(qe+"Invalid BigNumber: "+h)},x.maximum=x.max=function(){return A(arguments,-1)},x.minimum=x.min=function(){return A(arguments,1)},x.random=(function(){var h=9007199254740992,g=Math.random()*h&2097151?function(){return rt(Math.random()*h)}:function(){return(Math.random()*1073741824|0)*8388608+(Math.random()*8388608|0)};return function(b){var w,C,j,I,E,L=0,O=[],F=new x(a);if(b==null?b=s:Ie(b,0,Re),I=ci(b/de),m)if(crypto.getRandomValues){for(w=crypto.getRandomValues(new Uint32Array(I*=2));L<I;)E=w[L]*131072+(w[L+1]>>>11),E>=9e15?(C=crypto.getRandomValues(new Uint32Array(2)),w[L]=C[0],w[L+1]=C[1]):(O.push(E%1e14),L+=2);L=I/2}else if(crypto.randomBytes){for(w=crypto.randomBytes(I*=7);L<I;)E=(w[L]&31)*281474976710656+w[L+1]*1099511627776+w[L+2]*4294967296+w[L+3]*16777216+(w[L+4]<<16)+(w[L+5]<<8)+w[L+6],E>=9e15?crypto.randomBytes(7).copy(w,L):(O.push(E%1e14),L+=7);L=I/7}else throw m=!1,Error(qe+"crypto unavailable");if(!m)for(;L<I;)E=g(),E<9e15&&(O[L++]=E%1e14);for(I=O[--L],b%=de,I&&b&&(E=di[de-b],O[L]=rt(I/E)*E);O[L]===0;O.pop(),L--);if(L<0)O=[j=0];else{for(j=-1;O[0]===0;O.splice(0,1),j-=de);for(L=1,E=O[0];E>=10;E/=10,L++);L<de&&(j-=de-L)}return F.e=j,F.c=O,F}})(),x.sum=function(){for(var h=1,g=arguments,b=new x(g[0]);h<g.length;)b=b.plus(g[h++]);return b},n=(function(){var h="0123456789";function g(b,w,C,j){for(var I,E=[0],L,O=0,F=b.length;O<F;){for(L=E.length;L--;E[L]*=w);for(E[0]+=j.indexOf(b.charAt(O++)),I=0;I<E.length;I++)E[I]>C-1&&(E[I+1]==null&&(E[I+1]=0),E[I+1]+=E[I]/C|0,E[I]%=C)}return E.reverse()}return function(b,w,C,j,I){var E,L,O,F,U,q,Y,Z,V=b.indexOf("."),P=s,W=c;for(V>=0&&(F=f,f=0,b=b.replace(".",""),Z=new x(w),q=Z.pow(b.length-V),f=F,Z.c=g(At(tt(q.c),q.e,"0"),10,C,h),Z.e=Z.c.length),Y=g(b,w,C,I?(E=_,h):(E=h,_)),O=F=Y.length;Y[--F]==0;Y.pop());if(!Y[0])return E.charAt(0);if(V<0?--O:(q.c=Y,q.e=O,q.s=j,q=t(q,Z,P,W,C),Y=q.c,U=q.r,O=q.e),L=O+P+1,V=Y[L],F=C/2,U=U||L<0||Y[L+1]!=null,U=W<4?(V!=null||U)&&(W==0||W==(q.s<0?3:2)):V>F||V==F&&(W==4||U||W==6&&Y[L-1]&1||W==(q.s<0?8:7)),L<1||!Y[0])b=U?At(E.charAt(1),-P,E.charAt(0)):E.charAt(0);else{if(Y.length=L,U)for(--C;++Y[--L]>C;)Y[L]=0,L||(++O,Y=[1].concat(Y));for(F=Y.length;!Y[--F];);for(V=0,b="";V<=F;b+=E.charAt(Y[V++]));b=At(b,O,E.charAt(0))}return b}})(),t=(function(){function h(w,C,j){var I,E,L,O,F=0,U=w.length,q=C%Zt,Y=C/Zt|0;for(w=w.slice();U--;)L=w[U]%Zt,O=w[U]/Zt|0,I=Y*L+O*q,E=q*L+I%Zt*Zt+F,F=(E/j|0)+(I/Zt|0)+Y*O,w[U]=E%j;return F&&(w=[F].concat(w)),w}function g(w,C,j,I){var E,L;if(j!=I)L=j>I?1:-1;else for(E=L=0;E<j;E++)if(w[E]!=C[E]){L=w[E]>C[E]?1:-1;break}return L}function b(w,C,j,I){for(var E=0;j--;)w[j]-=E,E=w[j]<C[j]?1:0,w[j]=E*I+w[j]-C[j];for(;!w[0]&&w.length>1;w.splice(0,1));}return function(w,C,j,I,E){var L,O,F,U,q,Y,Z,V,P,W,T,J,$,me,fe,ue,oe,te=w.s==C.s?1:-1,he=w.c,ne=C.c;if(!he||!he[0]||!ne||!ne[0])return new x(!w.s||!C.s||(he?ne&&he[0]==ne[0]:!ne)?NaN:he&&he[0]==0||!ne?te*0:te/0);for(V=new x(te),P=V.c=[],O=w.e-C.e,te=j+O+1,E||(E=lt,O=ot(w.e/de)-ot(C.e/de),te=te/de|0),F=0;ne[F]==(he[F]||0);F++);if(ne[F]>(he[F]||0)&&O--,te<0)P.push(1),U=!0;else{for(me=he.length,ue=ne.length,F=0,te+=2,q=rt(E/(ne[0]+1)),q>1&&(ne=h(ne,q,E),he=h(he,q,E),ue=ne.length,me=he.length),$=ue,W=he.slice(0,ue),T=W.length;T<ue;W[T++]=0);oe=ne.slice(),oe=[0].concat(oe),fe=ne[0],ne[1]>=E/2&&fe++;do{if(q=0,L=g(ne,W,ue,T),L<0){if(J=W[0],ue!=T&&(J=J*E+(W[1]||0)),q=rt(J/fe),q>1)for(q>=E&&(q=E-1),Y=h(ne,q,E),Z=Y.length,T=W.length;g(Y,W,Z,T)==1;)q--,b(Y,ue<Z?oe:ne,Z,E),Z=Y.length,L=1;else q==0&&(L=q=1),Y=ne.slice(),Z=Y.length;if(Z<T&&(Y=[0].concat(Y)),b(W,Y,T,E),T=W.length,L==-1)for(;g(ne,W,ue,T)<1;)q++,b(W,ue<T?oe:ne,T,E),T=W.length}else L===0&&(q++,W=[0]);P[F++]=q,W[0]?W[T++]=he[$]||0:(W=[he[$]],T=1)}while(($++<me||W[0]!=null)&&te--);U=W[0]!=null,P[0]||P.splice(0,1)}if(E==lt){for(F=1,te=P[0];te>=10;te/=10,F++);R(V,j+(V.e=F+O*de-1)+1,I,U)}else V.e=O,V.r=+U;return V}})();function N(h,g,b,w){var C,j,I,E,L;if(b==null?b=c:Ie(b,0,8),!h.c)return h.toString();if(C=h.c[0],I=h.e,g==null)L=tt(h.c),L=w==1||w==2&&(I<=l||I>=d)?qr(L,I):At(L,I,"0");else if(h=R(new x(h),g,b),j=h.e,L=tt(h.c),E=L.length,w==1||w==2&&(g<=j||j<=l)){for(;E<g;L+="0",E++);L=qr(L,j)}else if(g-=I,L=At(L,j,"0"),j+1>E){if(--g>0)for(L+=".";g--;L+="0");}else if(g+=j-E,g>0)for(j+1==E&&(L+=".");g--;L+="0");return h.s<0&&C?"-"+L:L}function A(h,g){for(var b,w,C=1,j=new x(h[0]);C<h.length;C++)w=new x(h[C]),(!w.s||(b=nn(j,w))===g||b===0&&j.s===g)&&(j=w);return j}function S(h,g,b){for(var w=1,C=g.length;!g[--C];g.pop());for(C=g[0];C>=10;C/=10,w++);return(b=w+b*de-1)>p?h.c=h.e=null:b<u?h.c=[h.e=0]:(h.e=b,h.c=g),h}r=(function(){var h=/^(-?)0([xbo])(?=\w[\w.]*$)/i,g=/^([^.]+)\.$/,b=/^\.([^.]+)$/,w=/^-?(Infinity|NaN)$/,C=/^\s*\+(?=[\w.])|^\s+|\s+$/g;return function(j,I,E,L){var O,F=E?I:I.replace(C,"");if(w.test(F))j.s=isNaN(F)?null:F<0?-1:1;else{if(!E&&(F=F.replace(h,function(U,q,Y){return O=(Y=Y.toLowerCase())=="x"?16:Y=="b"?2:8,!L||L==O?q:U}),L&&(O=L,F=F.replace(g,"$1").replace(b,"0.$1")),I!=F))return new x(F,O);if(x.DEBUG)throw Error(qe+"Not a"+(L?" base "+L:"")+" number: "+I);j.s=null}j.c=j.e=null}})();function R(h,g,b,w){var C,j,I,E,L,O,F,U=h.c,q=di;if(U){e:{for(C=1,E=U[0];E>=10;E/=10,C++);if(j=g-C,j<0)j+=de,I=g,L=U[O=0],F=rt(L/q[C-I-1]%10);else if(O=ci((j+1)/de),O>=U.length)if(w){for(;U.length<=O;U.push(0));L=F=0,C=1,j%=de,I=j-de+1}else break e;else{for(L=E=U[O],C=1;E>=10;E/=10,C++);j%=de,I=j-de+C,F=I<0?0:rt(L/q[C-I-1]%10)}if(w=w||g<0||U[O+1]!=null||(I<0?L:L%q[C-I-1]),w=b<4?(F||w)&&(b==0||b==(h.s<0?3:2)):F>5||F==5&&(b==4||w||b==6&&(j>0?I>0?L/q[C-I]:0:U[O-1])%10&1||b==(h.s<0?8:7)),g<1||!U[0])return U.length=0,w?(g-=h.e+1,U[0]=q[(de-g%de)%de],h.e=-g||0):U[0]=h.e=0,h;if(j==0?(U.length=O,E=1,O--):(U.length=O+1,E=q[de-j],U[O]=I>0?rt(L/q[C-I]%q[I])*E:0),w)for(;;)if(O==0){for(j=1,I=U[0];I>=10;I/=10,j++);for(I=U[0]+=E,E=1;I>=10;I/=10,E++);j!=E&&(h.e++,U[0]==lt&&(U[0]=1));break}else{if(U[O]+=E,U[O]!=lt)break;U[O--]=0,E=1}for(j=U.length;U[--j]===0;U.pop());}h.e>p?h.c=h.e=null:h.e<u&&(h.c=[h.e=0])}return h}function z(h){var g,b=h.e;return b===null?h.toString():(g=tt(h.c),g=b<=l||b>=d?qr(g,b):At(g,b,"0"),h.s<0?"-"+g:g)}return o.absoluteValue=o.abs=function(){var h=new x(this);return h.s<0&&(h.s=1),h},o.comparedTo=function(h,g){return nn(this,new x(h,g))},o.decimalPlaces=o.dp=function(h,g){var b,w,C,j=this;if(h!=null)return Ie(h,0,Re),g==null?g=c:Ie(g,0,8),R(new x(j),h+j.e+1,g);if(!(b=j.c))return null;if(w=((C=b.length-1)-ot(this.e/de))*de,C=b[C])for(;C%10==0;C/=10,w--);return w<0&&(w=0),w},o.dividedBy=o.div=function(h,g){return t(this,new x(h,g),s,c)},o.dividedToIntegerBy=o.idiv=function(h,g){return t(this,new x(h,g),0,1)},o.exponentiatedBy=o.pow=function(h,g){var b,w,C,j,I,E,L,O,F,U=this;if(h=new x(h),h.c&&!h.isInteger())throw Error(qe+"Exponent not an integer: "+z(h));if(g!=null&&(g=new x(g)),E=h.e>14,!U.c||!U.c[0]||U.c[0]==1&&!U.e&&U.c.length==1||!h.c||!h.c[0])return F=new x(Math.pow(+z(U),E?h.s*(2-Yr(h)):+z(h))),g?F.mod(g):F;if(L=h.s<0,g){if(g.c?!g.c[0]:!g.s)return new x(NaN);w=!L&&U.isInteger()&&g.isInteger(),w&&(U=U.mod(g))}else{if(h.e>9&&(U.e>0||U.e<-1||(U.e==0?U.c[0]>1||E&&U.c[1]>=24e7:U.c[0]<8e13||E&&U.c[0]<=9999975e7)))return j=U.s<0&&Yr(h)?-0:0,U.e>-1&&(j=1/j),new x(L?1/j:j);f&&(j=ci(f/de+2))}for(E?(b=new x(.5),L&&(h.s=1),O=Yr(h)):(C=Math.abs(+z(h)),O=C%2),F=new x(a);;){if(O){if(F=F.times(U),!F.c)break;j?F.c.length>j&&(F.c.length=j):w&&(F=F.mod(g))}if(C){if(C=rt(C/2),C===0)break;O=C%2}else if(h=h.times(b),R(h,h.e+1,1),h.e>14)O=Yr(h);else{if(C=+z(h),C===0)break;O=C%2}U=U.times(U),j?U.c&&U.c.length>j&&(U.c.length=j):w&&(U=U.mod(g))}return w?F:(L&&(F=a.div(F)),g?F.mod(g):j?R(F,f,c,I):F)},o.integerValue=function(h){var g=new x(this);return h==null?h=c:Ie(h,0,8),R(g,g.e+1,h)},o.isEqualTo=o.eq=function(h,g){return nn(this,new x(h,g))===0},o.isFinite=function(){return!!this.c},o.isGreaterThan=o.gt=function(h,g){return nn(this,new x(h,g))>0},o.isGreaterThanOrEqualTo=o.gte=function(h,g){return(g=nn(this,new x(h,g)))===1||g===0},o.isInteger=function(){return!!this.c&&ot(this.e/de)>this.c.length-2},o.isLessThan=o.lt=function(h,g){return nn(this,new x(h,g))<0},o.isLessThanOrEqualTo=o.lte=function(h,g){return(g=nn(this,new x(h,g)))===-1||g===0},o.isNaN=function(){return!this.s},o.isNegative=function(){return this.s<0},o.isPositive=function(){return this.s>0},o.isZero=function(){return!!this.c&&this.c[0]==0},o.minus=function(h,g){var b,w,C,j,I=this,E=I.s;if(h=new x(h,g),g=h.s,!E||!g)return new x(NaN);if(E!=g)return h.s=-g,I.plus(h);var L=I.e/de,O=h.e/de,F=I.c,U=h.c;if(!L||!O){if(!F||!U)return F?(h.s=-g,h):new x(U?I:NaN);if(!F[0]||!U[0])return U[0]?(h.s=-g,h):new x(F[0]?I:c==3?-0:0)}if(L=ot(L),O=ot(O),F=F.slice(),E=L-O){for((j=E<0)?(E=-E,C=F):(O=L,C=U),C.reverse(),g=E;g--;C.push(0));C.reverse()}else for(w=(j=(E=F.length)<(g=U.length))?E:g,E=g=0;g<w;g++)if(F[g]!=U[g]){j=F[g]<U[g];break}if(j&&(C=F,F=U,U=C,h.s=-h.s),g=(w=U.length)-(b=F.length),g>0)for(;g--;F[b++]=0);for(g=lt-1;w>E;){if(F[--w]<U[w]){for(b=w;b&&!F[--b];F[b]=g);--F[b],F[w]+=lt}F[w]-=U[w]}for(;F[0]==0;F.splice(0,1),--O);return F[0]?S(h,F,O):(h.s=c==3?-1:1,h.c=[h.e=0],h)},o.modulo=o.mod=function(h,g){var b,w,C=this;return h=new x(h,g),!C.c||!h.s||h.c&&!h.c[0]?new x(NaN):!h.c||C.c&&!C.c[0]?new x(C):(v==9?(w=h.s,h.s=1,b=t(C,h,0,3),h.s=w,b.s*=w):b=t(C,h,0,v),h=C.minus(b.times(h)),!h.c[0]&&v==1&&(h.s=C.s),h)},o.multipliedBy=o.times=function(h,g){var b,w,C,j,I,E,L,O,F,U,q,Y,Z,V,P,W=this,T=W.c,J=(h=new x(h,g)).c;if(!T||!J||!T[0]||!J[0])return!W.s||!h.s||T&&!T[0]&&!J||J&&!J[0]&&!T?h.c=h.e=h.s=null:(h.s*=W.s,!T||!J?h.c=h.e=null:(h.c=[0],h.e=0)),h;for(w=ot(W.e/de)+ot(h.e/de),h.s*=W.s,L=T.length,U=J.length,L<U&&(Z=T,T=J,J=Z,C=L,L=U,U=C),C=L+U,Z=[];C--;Z.push(0));for(V=lt,P=Zt,C=U;--C>=0;){for(b=0,q=J[C]%P,Y=J[C]/P|0,I=L,j=C+I;j>C;)O=T[--I]%P,F=T[I]/P|0,E=Y*O+F*q,O=q*O+E%P*P+Z[j]+b,b=(O/V|0)+(E/P|0)+Y*F,Z[j--]=O%V;Z[j]=b}return b?++w:Z.splice(0,1),S(h,Z,w)},o.negated=function(){var h=new x(this);return h.s=-h.s||null,h},o.plus=function(h,g){var b,w=this,C=w.s;if(h=new x(h,g),g=h.s,!C||!g)return new x(NaN);if(C!=g)return h.s=-g,w.minus(h);var j=w.e/de,I=h.e/de,E=w.c,L=h.c;if(!j||!I){if(!E||!L)return new x(C/0);if(!E[0]||!L[0])return L[0]?h:new x(E[0]?w:C*0)}if(j=ot(j),I=ot(I),E=E.slice(),C=j-I){for(C>0?(I=j,b=L):(C=-C,b=E),b.reverse();C--;b.push(0));b.reverse()}for(C=E.length,g=L.length,C-g<0&&(b=L,L=E,E=b,g=C),C=0;g;)C=(E[--g]=E[g]+L[g]+C)/lt|0,E[g]=lt===E[g]?0:E[g]%lt;return C&&(E=[C].concat(E),++I),S(h,E,I)},o.precision=o.sd=function(h,g){var b,w,C,j=this;if(h!=null&&h!==!!h)return Ie(h,1,Re),g==null?g=c:Ie(g,0,8),R(new x(j),h,g);if(!(b=j.c))return null;if(C=b.length-1,w=C*de+1,C=b[C]){for(;C%10==0;C/=10,w--);for(C=b[0];C>=10;C/=10,w++);}return h&&j.e+1>w&&(w=j.e+1),w},o.shiftedBy=function(h){return Ie(h,-li,li),this.times("1e"+h)},o.squareRoot=o.sqrt=function(){var h,g,b,w,C,j=this,I=j.c,E=j.s,L=j.e,O=s+4,F=new x("0.5");if(E!==1||!I||!I[0])return new x(!E||E<0&&(!I||I[0])?NaN:I?j:1/0);if(E=Math.sqrt(+z(j)),E==0||E==1/0?(g=tt(I),(g.length+L)%2==0&&(g+="0"),E=Math.sqrt(+g),L=ot((L+1)/2)-(L<0||L%2),E==1/0?g="5e"+L:(g=E.toExponential(),g=g.slice(0,g.indexOf("e")+1)+L),b=new x(g)):b=new x(E+""),b.c[0]){for(L=b.e,E=L+O,E<3&&(E=0);;)if(C=b,b=F.times(C.plus(t(j,C,O,1))),tt(C.c).slice(0,E)===(g=tt(b.c)).slice(0,E))if(b.e<L&&--E,g=g.slice(E-3,E+1),g=="9999"||!w&&g=="4999"){if(!w&&(R(C,C.e+s+2,0),C.times(C).eq(j))){b=C;break}O+=4,E+=4,w=1}else{(!+g||!+g.slice(1)&&g.charAt(0)=="5")&&(R(b,b.e+s+2,1),h=!b.times(b).eq(j));break}}return R(b,b.e+s+1,c,h)},o.toExponential=function(h,g){return h!=null&&(Ie(h,0,Re),h++),N(this,h,g,1)},o.toFixed=function(h,g){return h!=null&&(Ie(h,0,Re),h=h+this.e+1),N(this,h,g)},o.toFormat=function(h,g,b){var w,C=this;if(b==null)h!=null&&g&&typeof g=="object"?(b=g,g=null):h&&typeof h=="object"?(b=h,h=g=null):b=y;else if(typeof b!="object")throw Error(qe+"Argument not an object: "+b);if(w=C.toFixed(h,g),C.c){var j,I=w.split("."),E=+b.groupSize,L=+b.secondaryGroupSize,O=b.groupSeparator||"",F=I[0],U=I[1],q=C.s<0,Y=q?F.slice(1):F,Z=Y.length;if(L&&(j=E,E=L,L=j,Z-=j),E>0&&Z>0){for(j=Z%E||E,F=Y.substr(0,j);j<Z;j+=E)F+=O+Y.substr(j,E);L>0&&(F+=O+Y.slice(j)),q&&(F="-"+F)}w=U?F+(b.decimalSeparator||"")+((L=+b.fractionGroupSize)?U.replace(new RegExp("\\d{"+L+"}\\B","g"),"$&"+(b.fractionGroupSeparator||"")):U):F}return(b.prefix||"")+w+(b.suffix||"")},o.toFraction=function(h){var g,b,w,C,j,I,E,L,O,F,U,q,Y=this,Z=Y.c;if(h!=null&&(E=new x(h),!E.isInteger()&&(E.c||E.s!==1)||E.lt(a)))throw Error(qe+"Argument "+(E.isInteger()?"out of range: ":"not an integer: ")+z(E));if(!Z)return new x(Y);for(g=new x(a),O=b=new x(a),w=L=new x(a),q=tt(Z),j=g.e=q.length-Y.e-1,g.c[0]=di[(I=j%de)<0?de+I:I],h=!h||E.comparedTo(g)>0?j>0?g:O:E,I=p,p=1/0,E=new x(q),L.c[0]=0;F=t(E,g,0,1),C=b.plus(F.times(w)),C.comparedTo(h)!=1;)b=w,w=C,O=L.plus(F.times(C=O)),L=C,g=E.minus(F.times(C=g)),E=C;return C=t(h.minus(b),w,0,1),L=L.plus(C.times(O)),b=b.plus(C.times(w)),L.s=O.s=Y.s,j=j*2,U=t(O,w,j,c).minus(Y).abs().comparedTo(t(L,b,j,c).minus(Y).abs())<1?[O,w]:[L,b],p=I,U},o.toNumber=function(){return+z(this)},o.toPrecision=function(h,g){return h!=null&&Ie(h,1,Re),N(this,h,g,2)},o.toString=function(h){var g,b=this,w=b.s,C=b.e;return C===null?w?(g="Infinity",w<0&&(g="-"+g)):g="NaN":(h==null?g=C<=l||C>=d?qr(tt(b.c),C):At(tt(b.c),C,"0"):h===10&&k?(b=R(new x(b),s+C+1,c),g=At(tt(b.c),b.e,"0")):(Ie(h,2,_.length,"Base"),g=n(At(tt(b.c),C,"0"),10,h,w,!0)),w<0&&b.c[0]&&(g="-"+g)),g},o.valueOf=o.toJSON=function(){return z(this)},o._isBigNumber=!0,o[Symbol.toStringTag]="BigNumber",o[Symbol.for("nodejs.util.inspect.custom")]=o.valueOf,e!=null&&x.set(e),x}function ot(e){var t=e|0;return e>0||e===t?t:t-1}function tt(e){for(var t,n,r=1,o=e.length,a=e[0]+"";r<o;){for(t=e[r++]+"",n=de-t.length;n--;t="0"+t);a+=t}for(o=a.length;a.charCodeAt(--o)===48;);return a.slice(0,o+1||1)}function nn(e,t){var n,r,o=e.c,a=t.c,s=e.s,c=t.s,l=e.e,d=t.e;if(!s||!c)return null;if(n=o&&!o[0],r=a&&!a[0],n||r)return n?r?0:-c:s;if(s!=c)return s;if(n=s<0,r=l==d,!o||!a)return r?0:!o^n?1:-1;if(!r)return l>d^n?1:-1;for(c=(l=o.length)<(d=a.length)?l:d,s=0;s<c;s++)if(o[s]!=a[s])return o[s]>a[s]^n?1:-1;return l==d?0:l>d^n?1:-1}function Ie(e,t,n,r){if(e<t||e>n||e!==rt(e))throw Error(qe+(r||"Argument")+(typeof e=="number"?e<t||e>n?" out of range: ":" not an integer: ":" not a primitive number: ")+String(e))}function Yr(e){var t=e.c.length-1;return ot(e.e/de)==t&&e.c[t]%2!=0}function qr(e,t){return(e.length>1?e.charAt(0)+"."+e.slice(1):e)+(t<0?"e":"e+")+t}function At(e,t,n){var r,o;if(t<0){for(o=n+".";++t;o+=n);e=o+e}else if(r=e.length,++t>r){for(o=n,t-=r;--t;o+=n);e+=o}else t<r&&(e=e.slice(0,t)+"."+e.slice(t));return e}I1();var ye;(function(e){e.assertEqual=o=>o;function t(o){}e.assertIs=t;function n(o){throw new Error}e.assertNever=n,e.arrayToEnum=o=>{const a={};for(const s of o)a[s]=s;return a},e.getValidEnumValues=o=>{const a=e.objectKeys(o).filter(c=>typeof o[o[c]]!="number"),s={};for(const c of a)s[c]=o[c];return e.objectValues(s)},e.objectValues=o=>e.objectKeys(o).map(function(a){return o[a]}),e.objectKeys=typeof Object.keys=="function"?o=>Object.keys(o):o=>{const a=[];for(const s in o)Object.prototype.hasOwnProperty.call(o,s)&&a.push(s);return a},e.find=(o,a)=>{for(const s of o)if(a(s))return s},e.isInteger=typeof Number.isInteger=="function"?o=>Number.isInteger(o):o=>typeof o=="number"&&isFinite(o)&&Math.floor(o)===o;function r(o,a=" | "){return o.map(s=>typeof s=="string"?`'${s}'`:s).join(a)}e.joinValues=r,e.jsonStringifyReplacer=(o,a)=>typeof a=="bigint"?a.toString():a})(ye||(ye={}));var la;(function(e){e.mergeShapes=(t,n)=>({...t,...n})})(la||(la={}));const K=ye.arrayToEnum(["string","nan","number","integer","float","boolean","date","bigint","symbol","function","undefined","null","array","object","unknown","promise","void","never","map","set"]),qt=e=>{switch(typeof e){case"undefined":return K.undefined;case"string":return K.string;case"number":return isNaN(e)?K.nan:K.number;case"boolean":return K.boolean;case"function":return K.function;case"bigint":return K.bigint;case"symbol":return K.symbol;case"object":return Array.isArray(e)?K.array:e===null?K.null:e.then&&typeof e.then=="function"&&e.catch&&typeof e.catch=="function"?K.promise:typeof Map<"u"&&e instanceof Map?K.map:typeof Set<"u"&&e instanceof Set?K.set:typeof Date<"u"&&e instanceof Date?K.date:K.object;default:return K.unknown}},G=ye.arrayToEnum(["invalid_type","invalid_literal","custom","invalid_union","invalid_union_discriminator","invalid_enum_value","unrecognized_keys","invalid_arguments","invalid_return_type","invalid_date","invalid_string","too_small","too_big","invalid_intersection_types","not_multiple_of","not_finite"]),Gu=e=>JSON.stringify(e,null,2).replace(/"([^"]+)":/g,"$1:");class gt extends Error{constructor(t){super(),this.issues=[],this.addIssue=r=>{this.issues=[...this.issues,r]},this.addIssues=(r=[])=>{this.issues=[...this.issues,...r]};const n=new.target.prototype;Object.setPrototypeOf?Object.setPrototypeOf(this,n):this.__proto__=n,this.name="ZodError",this.issues=t}get errors(){return this.issues}format(t){const n=t||function(a){return a.message},r={_errors:[]},o=a=>{for(const s of a.issues)if(s.code==="invalid_union")s.unionErrors.map(o);else if(s.code==="invalid_return_type")o(s.returnTypeError);else if(s.code==="invalid_arguments")o(s.argumentsError);else if(s.path.length===0)r._errors.push(n(s));else{let c=r,l=0;for(;l<s.path.length;){const d=s.path[l];l===s.path.length-1?(c[d]=c[d]||{_errors:[]},c[d]._errors.push(n(s))):c[d]=c[d]||{_errors:[]},c=c[d],l++}}};return o(this),r}toString(){return this.message}get message(){return JSON.stringify(this.issues,ye.jsonStringifyReplacer,2)}get isEmpty(){return this.issues.length===0}flatten(t=n=>n.message){const n={},r=[];for(const o of this.issues)o.path.length>0?(n[o.path[0]]=n[o.path[0]]||[],n[o.path[0]].push(t(o))):r.push(t(o));return{formErrors:r,fieldErrors:n}}get formErrors(){return this.flatten()}}gt.create=e=>new gt(e);const br=(e,t)=>{let n;switch(e.code){case G.invalid_type:e.received===K.undefined?n="Required":n=`Expected ${e.expected}, received ${e.received}`;break;case G.invalid_literal:n=`Invalid literal value, expected ${JSON.stringify(e.expected,ye.jsonStringifyReplacer)}`;break;case G.unrecognized_keys:n=`Unrecognized key(s) in object: ${ye.joinValues(e.keys,", ")}`;break;case G.invalid_union:n="Invalid input";break;case G.invalid_union_discriminator:n=`Invalid discriminator value. Expected ${ye.joinValues(e.options)}`;break;case G.invalid_enum_value:n=`Invalid enum value. Expected ${ye.joinValues(e.options)}, received '${e.received}'`;break;case G.invalid_arguments:n="Invalid function arguments";break;case G.invalid_return_type:n="Invalid function return type";break;case G.invalid_date:n="Invalid date";break;case G.invalid_string:typeof e.validation=="object"?"includes"in e.validation?(n=`Invalid input: must include "${e.validation.includes}"`,typeof e.validation.position=="number"&&(n=`${n} at one or more positions greater than or equal to ${e.validation.position}`)):"startsWith"in e.validation?n=`Invalid input: must start with "${e.validation.startsWith}"`:"endsWith"in e.validation?n=`Invalid input: must end with "${e.validation.endsWith}"`:ye.assertNever(e.validation):e.validation!=="regex"?n=`Invalid ${e.validation}`:n="Invalid";break;case G.too_small:e.type==="array"?n=`Array must contain ${e.exact?"exactly":e.inclusive?"at least":"more than"} ${e.minimum} element(s)`:e.type==="string"?n=`String must contain ${e.exact?"exactly":e.inclusive?"at least":"over"} ${e.minimum} character(s)`:e.type==="number"?n=`Number must be ${e.exact?"exactly equal to ":e.inclusive?"greater than or equal to ":"greater than "}${e.minimum}`:e.type==="date"?n=`Date must be ${e.exact?"exactly equal to ":e.inclusive?"greater than or equal to ":"greater than "}${new Date(Number(e.minimum))}`:n="Invalid input";break;case G.too_big:e.type==="array"?n=`Array must contain ${e.exact?"exactly":e.inclusive?"at most":"less than"} ${e.maximum} element(s)`:e.type==="string"?n=`String must contain ${e.exact?"exactly":e.inclusive?"at most":"under"} ${e.maximum} character(s)`:e.type==="number"?n=`Number must be ${e.exact?"exactly":e.inclusive?"less than or equal to":"less than"} ${e.maximum}`:e.type==="bigint"?n=`BigInt must be ${e.exact?"exactly":e.inclusive?"less than or equal to":"less than"} ${e.maximum}`:e.type==="date"?n=`Date must be ${e.exact?"exactly":e.inclusive?"smaller than or equal to":"smaller than"} ${new Date(Number(e.maximum))}`:n="Invalid input";break;case G.custom:n="Invalid input";break;case G.invalid_intersection_types:n="Intersection results could not be merged";break;case G.not_multiple_of:n=`Number must be a multiple of ${e.multipleOf}`;break;case G.not_finite:n="Number must be finite";break;default:n=t.defaultError,ye.assertNever(e)}return{message:n}};let N1=br;function Yu(e){N1=e}function ho(){return N1}const fo=e=>{const{data:t,path:n,errorMaps:r,issueData:o}=e,a=[...n,...o.path||[]],s={...o,path:a};let c="";const l=r.filter(d=>!!d).slice().reverse();for(const d of l)c=d(s,{data:t,defaultError:c}).message;return{...o,path:a,message:o.message||c}},qu=[];function X(e,t){const n=fo({issueData:t,data:e.data,path:e.path,errorMaps:[e.common.contextualErrorMap,e.schemaErrorMap,ho(),br].filter(r=>!!r)});e.common.issues.push(n)}class Ze{constructor(){this.value="valid"}dirty(){this.value==="valid"&&(this.value="dirty")}abort(){this.value!=="aborted"&&(this.value="aborted")}static mergeArray(t,n){const r=[];for(const o of n){if(o.status==="aborted")return le;o.status==="dirty"&&t.dirty(),r.push(o.value)}return{status:t.value,value:r}}static async mergeObjectAsync(t,n){const r=[];for(const o of n)r.push({key:await o.key,value:await o.value});return Ze.mergeObjectSync(t,r)}static mergeObjectSync(t,n){const r={};for(const o of n){const{key:a,value:s}=o;if(a.status==="aborted"||s.status==="aborted")return le;a.status==="dirty"&&t.dirty(),s.status==="dirty"&&t.dirty(),a.value!=="__proto__"&&(typeof s.value<"u"||o.alwaysSet)&&(r[a.value]=s.value)}return{status:t.value,value:r}}}const le=Object.freeze({status:"aborted"}),M1=e=>({status:"dirty",value:e}),Ye=e=>({status:"valid",value:e}),da=e=>e.status==="aborted",ua=e=>e.status==="dirty",xr=e=>e.status==="valid",go=e=>typeof Promise<"u"&&e instanceof Promise;var re;(function(e){e.errToObj=t=>typeof t=="string"?{message:t}:t||{},e.toString=t=>typeof t=="string"?t:t==null?void 0:t.message})(re||(re={}));class It{constructor(t,n,r,o){this._cachedPath=[],this.parent=t,this.data=n,this._path=r,this._key=o}get path(){return this._cachedPath.length||(this._key instanceof Array?this._cachedPath.push(...this._path,...this._key):this._cachedPath.push(...this._path,this._key)),this._cachedPath}}const Js=(e,t)=>{if(xr(t))return{success:!0,data:t.value};if(!e.common.issues.length)throw new Error("Validation failed but no issues detected.");return{success:!1,get error(){if(this._error)return this._error;const n=new gt(e.common.issues);return this._error=n,this._error}}};function pe(e){if(!e)return{};const{errorMap:t,invalid_type_error:n,required_error:r,description:o}=e;if(t&&(n||r))throw new Error(`Can't use "invalid_type_error" or "required_error" in conjunction with custom error map.`);return t?{errorMap:t,description:o}:{errorMap:(s,c)=>s.code!=="invalid_type"?{message:c.defaultError}:typeof c.data>"u"?{message:r??c.defaultError}:{message:n??c.defaultError},description:o}}class ge{constructor(t){this.spa=this.safeParseAsync,this._def=t,this.parse=this.parse.bind(this),this.safeParse=this.safeParse.bind(this),this.parseAsync=this.parseAsync.bind(this),this.safeParseAsync=this.safeParseAsync.bind(this),this.spa=this.spa.bind(this),this.refine=this.refine.bind(this),this.refinement=this.refinement.bind(this),this.superRefine=this.superRefine.bind(this),this.optional=this.optional.bind(this),this.nullable=this.nullable.bind(this),this.nullish=this.nullish.bind(this),this.array=this.array.bind(this),this.promise=this.promise.bind(this),this.or=this.or.bind(this),this.and=this.and.bind(this),this.transform=this.transform.bind(this),this.brand=this.brand.bind(this),this.default=this.default.bind(this),this.catch=this.catch.bind(this),this.describe=this.describe.bind(this),this.pipe=this.pipe.bind(this),this.readonly=this.readonly.bind(this),this.isNullable=this.isNullable.bind(this),this.isOptional=this.isOptional.bind(this)}get description(){return this._def.description}_getType(t){return qt(t.data)}_getOrReturnCtx(t,n){return n||{common:t.parent.common,data:t.data,parsedType:qt(t.data),schemaErrorMap:this._def.errorMap,path:t.path,parent:t.parent}}_processInputParams(t){return{status:new Ze,ctx:{common:t.parent.common,data:t.data,parsedType:qt(t.data),schemaErrorMap:this._def.errorMap,path:t.path,parent:t.parent}}}_parseSync(t){const n=this._parse(t);if(go(n))throw new Error("Synchronous parse encountered promise.");return n}_parseAsync(t){const n=this._parse(t);return Promise.resolve(n)}parse(t,n){const r=this.safeParse(t,n);if(r.success)return r.data;throw r.error}safeParse(t,n){var r;const o={common:{issues:[],async:(r=n==null?void 0:n.async)!==null&&r!==void 0?r:!1,contextualErrorMap:n==null?void 0:n.errorMap},path:(n==null?void 0:n.path)||[],schemaErrorMap:this._def.errorMap,parent:null,data:t,parsedType:qt(t)},a=this._parseSync({data:t,path:o.path,parent:o});return Js(o,a)}async parseAsync(t,n){const r=await this.safeParseAsync(t,n);if(r.success)return r.data;throw r.error}async safeParseAsync(t,n){const r={common:{issues:[],contextualErrorMap:n==null?void 0:n.errorMap,async:!0},path:(n==null?void 0:n.path)||[],schemaErrorMap:this._def.errorMap,parent:null,data:t,parsedType:qt(t)},o=this._parse({data:t,path:r.path,parent:r}),a=await(go(o)?o:Promise.resolve(o));return Js(r,a)}refine(t,n){const r=o=>typeof n=="string"||typeof n>"u"?{message:n}:typeof n=="function"?n(o):n;return this._refinement((o,a)=>{const s=t(o),c=()=>a.addIssue({code:G.custom,...r(o)});return typeof Promise<"u"&&s instanceof Promise?s.then(l=>l?!0:(c(),!1)):s?!0:(c(),!1)})}refinement(t,n){return this._refinement((r,o)=>t(r)?!0:(o.addIssue(typeof n=="function"?n(r,o):n),!1))}_refinement(t){return new xt({schema:this,typeName:ae.ZodEffects,effect:{type:"refinement",refinement:t}})}superRefine(t){return this._refinement(t)}optional(){return Dt.create(this,this._def)}nullable(){return un.create(this,this._def)}nullish(){return this.nullable().optional()}array(){return mt.create(this,this._def)}promise(){return Dn.create(this,this._def)}or(t){return kr.create([this,t],this._def)}and(t){return _r.create(this,t,this._def)}transform(t){return new xt({...pe(this._def),schema:this,typeName:ae.ZodEffects,effect:{type:"transform",transform:t}})}default(t){const n=typeof t=="function"?t:()=>t;return new Nr({...pe(this._def),innerType:this,defaultValue:n,typeName:ae.ZodDefault})}brand(){return new L1({typeName:ae.ZodBranded,type:this,...pe(this._def)})}catch(t){const n=typeof t=="function"?t:()=>t;return new xo({...pe(this._def),innerType:this,catchValue:n,typeName:ae.ZodCatch})}describe(t){const n=this.constructor;return new n({...this._def,description:t})}pipe(t){return Br.create(this,t)}readonly(){return Co.create(this)}isOptional(){return this.safeParse(void 0).success}isNullable(){return this.safeParse(null).success}}const Ku=/^c[^\s-]{8,}$/i,Xu=/^[a-z][a-z0-9]*$/,Ju=/^[0-9A-HJKMNP-TV-Z]{26}$/,Qu=/^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i,e2=/^(?!\.)(?!.*\.\.)([A-Z0-9_+-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i,t2="^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$";let ui;const n2=/^(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))$/,r2=/^(([a-f0-9]{1,4}:){7}|::([a-f0-9]{1,4}:){0,6}|([a-f0-9]{1,4}:){1}:([a-f0-9]{1,4}:){0,5}|([a-f0-9]{1,4}:){2}:([a-f0-9]{1,4}:){0,4}|([a-f0-9]{1,4}:){3}:([a-f0-9]{1,4}:){0,3}|([a-f0-9]{1,4}:){4}:([a-f0-9]{1,4}:){0,2}|([a-f0-9]{1,4}:){5}:([a-f0-9]{1,4}:){0,1})([a-f0-9]{1,4}|(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2})))$/,o2=e=>e.precision?e.offset?new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${e.precision}}(([+-]\\d{2}(:?\\d{2})?)|Z)$`):new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${e.precision}}Z$`):e.precision===0?e.offset?new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(([+-]\\d{2}(:?\\d{2})?)|Z)$"):new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}Z$"):e.offset?new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?(([+-]\\d{2}(:?\\d{2})?)|Z)$"):new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?Z$");function i2(e,t){return!!((t==="v4"||!t)&&n2.test(e)||(t==="v6"||!t)&&r2.test(e))}class ft extends ge{_parse(t){if(this._def.coerce&&(t.data=String(t.data)),this._getType(t)!==K.string){const a=this._getOrReturnCtx(t);return X(a,{code:G.invalid_type,expected:K.string,received:a.parsedType}),le}const r=new Ze;let o;for(const a of this._def.checks)if(a.kind==="min")t.data.length<a.value&&(o=this._getOrReturnCtx(t,o),X(o,{code:G.too_small,minimum:a.value,type:"string",inclusive:!0,exact:!1,message:a.message}),r.dirty());else if(a.kind==="max")t.data.length>a.value&&(o=this._getOrReturnCtx(t,o),X(o,{code:G.too_big,maximum:a.value,type:"string",inclusive:!0,exact:!1,message:a.message}),r.dirty());else if(a.kind==="length"){const s=t.data.length>a.value,c=t.data.length<a.value;(s||c)&&(o=this._getOrReturnCtx(t,o),s?X(o,{code:G.too_big,maximum:a.value,type:"string",inclusive:!0,exact:!0,message:a.message}):c&&X(o,{code:G.too_small,minimum:a.value,type:"string",inclusive:!0,exact:!0,message:a.message}),r.dirty())}else if(a.kind==="email")e2.test(t.data)||(o=this._getOrReturnCtx(t,o),X(o,{validation:"email",code:G.invalid_string,message:a.message}),r.dirty());else if(a.kind==="emoji")ui||(ui=new RegExp(t2,"u")),ui.test(t.data)||(o=this._getOrReturnCtx(t,o),X(o,{validation:"emoji",code:G.invalid_string,message:a.message}),r.dirty());else if(a.kind==="uuid")Qu.test(t.data)||(o=this._getOrReturnCtx(t,o),X(o,{validation:"uuid",code:G.invalid_string,message:a.message}),r.dirty());else if(a.kind==="cuid")Ku.test(t.data)||(o=this._getOrReturnCtx(t,o),X(o,{validation:"cuid",code:G.invalid_string,message:a.message}),r.dirty());else if(a.kind==="cuid2")Xu.test(t.data)||(o=this._getOrReturnCtx(t,o),X(o,{validation:"cuid2",code:G.invalid_string,message:a.message}),r.dirty());else if(a.kind==="ulid")Ju.test(t.data)||(o=this._getOrReturnCtx(t,o),X(o,{validation:"ulid",code:G.invalid_string,message:a.message}),r.dirty());else if(a.kind==="url")try{new URL(t.data)}catch{o=this._getOrReturnCtx(t,o),X(o,{validation:"url",code:G.invalid_string,message:a.message}),r.dirty()}else a.kind==="regex"?(a.regex.lastIndex=0,a.regex.test(t.data)||(o=this._getOrReturnCtx(t,o),X(o,{validation:"regex",code:G.invalid_string,message:a.message}),r.dirty())):a.kind==="trim"?t.data=t.data.trim():a.kind==="includes"?t.data.includes(a.value,a.position)||(o=this._getOrReturnCtx(t,o),X(o,{code:G.invalid_string,validation:{includes:a.value,position:a.position},message:a.message}),r.dirty()):a.kind==="toLowerCase"?t.data=t.data.toLowerCase():a.kind==="toUpperCase"?t.data=t.data.toUpperCase():a.kind==="startsWith"?t.data.startsWith(a.value)||(o=this._getOrReturnCtx(t,o),X(o,{code:G.invalid_string,validation:{startsWith:a.value},message:a.message}),r.dirty()):a.kind==="endsWith"?t.data.endsWith(a.value)||(o=this._getOrReturnCtx(t,o),X(o,{code:G.invalid_string,validation:{endsWith:a.value},message:a.message}),r.dirty()):a.kind==="datetime"?o2(a).test(t.data)||(o=this._getOrReturnCtx(t,o),X(o,{code:G.invalid_string,validation:"datetime",message:a.message}),r.dirty()):a.kind==="ip"?i2(t.data,a.version)||(o=this._getOrReturnCtx(t,o),X(o,{validation:"ip",code:G.invalid_string,message:a.message}),r.dirty()):ye.assertNever(a);return{status:r.value,value:t.data}}_regex(t,n,r){return this.refinement(o=>t.test(o),{validation:n,code:G.invalid_string,...re.errToObj(r)})}_addCheck(t){return new ft({...this._def,checks:[...this._def.checks,t]})}email(t){return this._addCheck({kind:"email",...re.errToObj(t)})}url(t){return this._addCheck({kind:"url",...re.errToObj(t)})}emoji(t){return this._addCheck({kind:"emoji",...re.errToObj(t)})}uuid(t){return this._addCheck({kind:"uuid",...re.errToObj(t)})}cuid(t){return this._addCheck({kind:"cuid",...re.errToObj(t)})}cuid2(t){return this._addCheck({kind:"cuid2",...re.errToObj(t)})}ulid(t){return this._addCheck({kind:"ulid",...re.errToObj(t)})}ip(t){return this._addCheck({kind:"ip",...re.errToObj(t)})}datetime(t){var n;return typeof t=="string"?this._addCheck({kind:"datetime",precision:null,offset:!1,message:t}):this._addCheck({kind:"datetime",precision:typeof(t==null?void 0:t.precision)>"u"?null:t==null?void 0:t.precision,offset:(n=t==null?void 0:t.offset)!==null&&n!==void 0?n:!1,...re.errToObj(t==null?void 0:t.message)})}regex(t,n){return this._addCheck({kind:"regex",regex:t,...re.errToObj(n)})}includes(t,n){return this._addCheck({kind:"includes",value:t,position:n==null?void 0:n.position,...re.errToObj(n==null?void 0:n.message)})}startsWith(t,n){return this._addCheck({kind:"startsWith",value:t,...re.errToObj(n)})}endsWith(t,n){return this._addCheck({kind:"endsWith",value:t,...re.errToObj(n)})}min(t,n){return this._addCheck({kind:"min",value:t,...re.errToObj(n)})}max(t,n){return this._addCheck({kind:"max",value:t,...re.errToObj(n)})}length(t,n){return this._addCheck({kind:"length",value:t,...re.errToObj(n)})}nonempty(t){return this.min(1,re.errToObj(t))}trim(){return new ft({...this._def,checks:[...this._def.checks,{kind:"trim"}]})}toLowerCase(){return new ft({...this._def,checks:[...this._def.checks,{kind:"toLowerCase"}]})}toUpperCase(){return new ft({...this._def,checks:[...this._def.checks,{kind:"toUpperCase"}]})}get isDatetime(){return!!this._def.checks.find(t=>t.kind==="datetime")}get isEmail(){return!!this._def.checks.find(t=>t.kind==="email")}get isURL(){return!!this._def.checks.find(t=>t.kind==="url")}get isEmoji(){return!!this._def.checks.find(t=>t.kind==="emoji")}get isUUID(){return!!this._def.checks.find(t=>t.kind==="uuid")}get isCUID(){return!!this._def.checks.find(t=>t.kind==="cuid")}get isCUID2(){return!!this._def.checks.find(t=>t.kind==="cuid2")}get isULID(){return!!this._def.checks.find(t=>t.kind==="ulid")}get isIP(){return!!this._def.checks.find(t=>t.kind==="ip")}get minLength(){let t=null;for(const n of this._def.checks)n.kind==="min"&&(t===null||n.value>t)&&(t=n.value);return t}get maxLength(){let t=null;for(const n of this._def.checks)n.kind==="max"&&(t===null||n.value<t)&&(t=n.value);return t}}ft.create=e=>{var t;return new ft({checks:[],typeName:ae.ZodString,coerce:(t=e==null?void 0:e.coerce)!==null&&t!==void 0?t:!1,...pe(e)})};function a2(e,t){const n=(e.toString().split(".")[1]||"").length,r=(t.toString().split(".")[1]||"").length,o=n>r?n:r,a=parseInt(e.toFixed(o).replace(".","")),s=parseInt(t.toFixed(o).replace(".",""));return a%s/Math.pow(10,o)}class Qt extends ge{constructor(){super(...arguments),this.min=this.gte,this.max=this.lte,this.step=this.multipleOf}_parse(t){if(this._def.coerce&&(t.data=Number(t.data)),this._getType(t)!==K.number){const a=this._getOrReturnCtx(t);return X(a,{code:G.invalid_type,expected:K.number,received:a.parsedType}),le}let r;const o=new Ze;for(const a of this._def.checks)a.kind==="int"?ye.isInteger(t.data)||(r=this._getOrReturnCtx(t,r),X(r,{code:G.invalid_type,expected:"integer",received:"float",message:a.message}),o.dirty()):a.kind==="min"?(a.inclusive?t.data<a.value:t.data<=a.value)&&(r=this._getOrReturnCtx(t,r),X(r,{code:G.too_small,minimum:a.value,type:"number",inclusive:a.inclusive,exact:!1,message:a.message}),o.dirty()):a.kind==="max"?(a.inclusive?t.data>a.value:t.data>=a.value)&&(r=this._getOrReturnCtx(t,r),X(r,{code:G.too_big,maximum:a.value,type:"number",inclusive:a.inclusive,exact:!1,message:a.message}),o.dirty()):a.kind==="multipleOf"?a2(t.data,a.value)!==0&&(r=this._getOrReturnCtx(t,r),X(r,{code:G.not_multiple_of,multipleOf:a.value,message:a.message}),o.dirty()):a.kind==="finite"?Number.isFinite(t.data)||(r=this._getOrReturnCtx(t,r),X(r,{code:G.not_finite,message:a.message}),o.dirty()):ye.assertNever(a);return{status:o.value,value:t.data}}gte(t,n){return this.setLimit("min",t,!0,re.toString(n))}gt(t,n){return this.setLimit("min",t,!1,re.toString(n))}lte(t,n){return this.setLimit("max",t,!0,re.toString(n))}lt(t,n){return this.setLimit("max",t,!1,re.toString(n))}setLimit(t,n,r,o){return new Qt({...this._def,checks:[...this._def.checks,{kind:t,value:n,inclusive:r,message:re.toString(o)}]})}_addCheck(t){return new Qt({...this._def,checks:[...this._def.checks,t]})}int(t){return this._addCheck({kind:"int",message:re.toString(t)})}positive(t){return this._addCheck({kind:"min",value:0,inclusive:!1,message:re.toString(t)})}negative(t){return this._addCheck({kind:"max",value:0,inclusive:!1,message:re.toString(t)})}nonpositive(t){return this._addCheck({kind:"max",value:0,inclusive:!0,message:re.toString(t)})}nonnegative(t){return this._addCheck({kind:"min",value:0,inclusive:!0,message:re.toString(t)})}multipleOf(t,n){return this._addCheck({kind:"multipleOf",value:t,message:re.toString(n)})}finite(t){return this._addCheck({kind:"finite",message:re.toString(t)})}safe(t){return this._addCheck({kind:"min",inclusive:!0,value:Number.MIN_SAFE_INTEGER,message:re.toString(t)})._addCheck({kind:"max",inclusive:!0,value:Number.MAX_SAFE_INTEGER,message:re.toString(t)})}get minValue(){let t=null;for(const n of this._def.checks)n.kind==="min"&&(t===null||n.value>t)&&(t=n.value);return t}get maxValue(){let t=null;for(const n of this._def.checks)n.kind==="max"&&(t===null||n.value<t)&&(t=n.value);return t}get isInt(){return!!this._def.checks.find(t=>t.kind==="int"||t.kind==="multipleOf"&&ye.isInteger(t.value))}get isFinite(){let t=null,n=null;for(const r of this._def.checks){if(r.kind==="finite"||r.kind==="int"||r.kind==="multipleOf")return!0;r.kind==="min"?(n===null||r.value>n)&&(n=r.value):r.kind==="max"&&(t===null||r.value<t)&&(t=r.value)}return Number.isFinite(n)&&Number.isFinite(t)}}Qt.create=e=>new Qt({checks:[],typeName:ae.ZodNumber,coerce:(e==null?void 0:e.coerce)||!1,...pe(e)});class en extends ge{constructor(){super(...arguments),this.min=this.gte,this.max=this.lte}_parse(t){if(this._def.coerce&&(t.data=BigInt(t.data)),this._getType(t)!==K.bigint){const a=this._getOrReturnCtx(t);return X(a,{code:G.invalid_type,expected:K.bigint,received:a.parsedType}),le}let r;const o=new Ze;for(const a of this._def.checks)a.kind==="min"?(a.inclusive?t.data<a.value:t.data<=a.value)&&(r=this._getOrReturnCtx(t,r),X(r,{code:G.too_small,type:"bigint",minimum:a.value,inclusive:a.inclusive,message:a.message}),o.dirty()):a.kind==="max"?(a.inclusive?t.data>a.value:t.data>=a.value)&&(r=this._getOrReturnCtx(t,r),X(r,{code:G.too_big,type:"bigint",maximum:a.value,inclusive:a.inclusive,message:a.message}),o.dirty()):a.kind==="multipleOf"?t.data%a.value!==BigInt(0)&&(r=this._getOrReturnCtx(t,r),X(r,{code:G.not_multiple_of,multipleOf:a.value,message:a.message}),o.dirty()):ye.assertNever(a);return{status:o.value,value:t.data}}gte(t,n){return this.setLimit("min",t,!0,re.toString(n))}gt(t,n){return this.setLimit("min",t,!1,re.toString(n))}lte(t,n){return this.setLimit("max",t,!0,re.toString(n))}lt(t,n){return this.setLimit("max",t,!1,re.toString(n))}setLimit(t,n,r,o){return new en({...this._def,checks:[...this._def.checks,{kind:t,value:n,inclusive:r,message:re.toString(o)}]})}_addCheck(t){return new en({...this._def,checks:[...this._def.checks,t]})}positive(t){return this._addCheck({kind:"min",value:BigInt(0),inclusive:!1,message:re.toString(t)})}negative(t){return this._addCheck({kind:"max",value:BigInt(0),inclusive:!1,message:re.toString(t)})}nonpositive(t){return this._addCheck({kind:"max",value:BigInt(0),inclusive:!0,message:re.toString(t)})}nonnegative(t){return this._addCheck({kind:"min",value:BigInt(0),inclusive:!0,message:re.toString(t)})}multipleOf(t,n){return this._addCheck({kind:"multipleOf",value:t,message:re.toString(n)})}get minValue(){let t=null;for(const n of this._def.checks)n.kind==="min"&&(t===null||n.value>t)&&(t=n.value);return t}get maxValue(){let t=null;for(const n of this._def.checks)n.kind==="max"&&(t===null||n.value<t)&&(t=n.value);return t}}en.create=e=>{var t;return new en({checks:[],typeName:ae.ZodBigInt,coerce:(t=e==null?void 0:e.coerce)!==null&&t!==void 0?t:!1,...pe(e)})};class yr extends ge{_parse(t){if(this._def.coerce&&(t.data=!!t.data),this._getType(t)!==K.boolean){const r=this._getOrReturnCtx(t);return X(r,{code:G.invalid_type,expected:K.boolean,received:r.parsedType}),le}return Ye(t.data)}}yr.create=e=>new yr({typeName:ae.ZodBoolean,coerce:(e==null?void 0:e.coerce)||!1,...pe(e)});class ln extends ge{_parse(t){if(this._def.coerce&&(t.data=new Date(t.data)),this._getType(t)!==K.date){const a=this._getOrReturnCtx(t);return X(a,{code:G.invalid_type,expected:K.date,received:a.parsedType}),le}if(isNaN(t.data.getTime())){const a=this._getOrReturnCtx(t);return X(a,{code:G.invalid_date}),le}const r=new Ze;let o;for(const a of this._def.checks)a.kind==="min"?t.data.getTime()<a.value&&(o=this._getOrReturnCtx(t,o),X(o,{code:G.too_small,message:a.message,inclusive:!0,exact:!1,minimum:a.value,type:"date"}),r.dirty()):a.kind==="max"?t.data.getTime()>a.value&&(o=this._getOrReturnCtx(t,o),X(o,{code:G.too_big,message:a.message,inclusive:!0,exact:!1,maximum:a.value,type:"date"}),r.dirty()):ye.assertNever(a);return{status:r.value,value:new Date(t.data.getTime())}}_addCheck(t){return new ln({...this._def,checks:[...this._def.checks,t]})}min(t,n){return this._addCheck({kind:"min",value:t.getTime(),message:re.toString(n)})}max(t,n){return this._addCheck({kind:"max",value:t.getTime(),message:re.toString(n)})}get minDate(){let t=null;for(const n of this._def.checks)n.kind==="min"&&(t===null||n.value>t)&&(t=n.value);return t!=null?new Date(t):null}get maxDate(){let t=null;for(const n of this._def.checks)n.kind==="max"&&(t===null||n.value<t)&&(t=n.value);return t!=null?new Date(t):null}}ln.create=e=>new ln({checks:[],coerce:(e==null?void 0:e.coerce)||!1,typeName:ae.ZodDate,...pe(e)});class mo extends ge{_parse(t){if(this._getType(t)!==K.symbol){const r=this._getOrReturnCtx(t);return X(r,{code:G.invalid_type,expected:K.symbol,received:r.parsedType}),le}return Ye(t.data)}}mo.create=e=>new mo({typeName:ae.ZodSymbol,...pe(e)});class Cr extends ge{_parse(t){if(this._getType(t)!==K.undefined){const r=this._getOrReturnCtx(t);return X(r,{code:G.invalid_type,expected:K.undefined,received:r.parsedType}),le}return Ye(t.data)}}Cr.create=e=>new Cr({typeName:ae.ZodUndefined,...pe(e)});class wr extends ge{_parse(t){if(this._getType(t)!==K.null){const r=this._getOrReturnCtx(t);return X(r,{code:G.invalid_type,expected:K.null,received:r.parsedType}),le}return Ye(t.data)}}wr.create=e=>new wr({typeName:ae.ZodNull,...pe(e)});class Rn extends ge{constructor(){super(...arguments),this._any=!0}_parse(t){return Ye(t.data)}}Rn.create=e=>new Rn({typeName:ae.ZodAny,...pe(e)});class sn extends ge{constructor(){super(...arguments),this._unknown=!0}_parse(t){return Ye(t.data)}}sn.create=e=>new sn({typeName:ae.ZodUnknown,...pe(e)});class Bt extends ge{_parse(t){const n=this._getOrReturnCtx(t);return X(n,{code:G.invalid_type,expected:K.never,received:n.parsedType}),le}}Bt.create=e=>new Bt({typeName:ae.ZodNever,...pe(e)});class vo extends ge{_parse(t){if(this._getType(t)!==K.undefined){const r=this._getOrReturnCtx(t);return X(r,{code:G.invalid_type,expected:K.void,received:r.parsedType}),le}return Ye(t.data)}}vo.create=e=>new vo({typeName:ae.ZodVoid,...pe(e)});class mt extends ge{_parse(t){const{ctx:n,status:r}=this._processInputParams(t),o=this._def;if(n.parsedType!==K.array)return X(n,{code:G.invalid_type,expected:K.array,received:n.parsedType}),le;if(o.exactLength!==null){const s=n.data.length>o.exactLength.value,c=n.data.length<o.exactLength.value;(s||c)&&(X(n,{code:s?G.too_big:G.too_small,minimum:c?o.exactLength.value:void 0,maximum:s?o.exactLength.value:void 0,type:"array",inclusive:!0,exact:!0,message:o.exactLength.message}),r.dirty())}if(o.minLength!==null&&n.data.length<o.minLength.value&&(X(n,{code:G.too_small,minimum:o.minLength.value,type:"array",inclusive:!0,exact:!1,message:o.minLength.message}),r.dirty()),o.maxLength!==null&&n.data.length>o.maxLength.value&&(X(n,{code:G.too_big,maximum:o.maxLength.value,type:"array",inclusive:!0,exact:!1,message:o.maxLength.message}),r.dirty()),n.common.async)return Promise.all([...n.data].map((s,c)=>o.type._parseAsync(new It(n,s,n.path,c)))).then(s=>Ze.mergeArray(r,s));const a=[...n.data].map((s,c)=>o.type._parseSync(new It(n,s,n.path,c)));return Ze.mergeArray(r,a)}get element(){return this._def.type}min(t,n){return new mt({...this._def,minLength:{value:t,message:re.toString(n)}})}max(t,n){return new mt({...this._def,maxLength:{value:t,message:re.toString(n)}})}length(t,n){return new mt({...this._def,exactLength:{value:t,message:re.toString(n)}})}nonempty(t){return this.min(1,t)}}mt.create=(e,t)=>new mt({type:e,minLength:null,maxLength:null,exactLength:null,typeName:ae.ZodArray,...pe(t)});function Cn(e){if(e instanceof Ne){const t={};for(const n in e.shape){const r=e.shape[n];t[n]=Dt.create(Cn(r))}return new Ne({...e._def,shape:()=>t})}else return e instanceof mt?new mt({...e._def,type:Cn(e.element)}):e instanceof Dt?Dt.create(Cn(e.unwrap())):e instanceof un?un.create(Cn(e.unwrap())):e instanceof Nt?Nt.create(e.items.map(t=>Cn(t))):e}class Ne extends ge{constructor(){super(...arguments),this._cached=null,this.nonstrict=this.passthrough,this.augment=this.extend}_getCached(){if(this._cached!==null)return this._cached;const t=this._def.shape(),n=ye.objectKeys(t);return this._cached={shape:t,keys:n}}_parse(t){if(this._getType(t)!==K.object){const d=this._getOrReturnCtx(t);return X(d,{code:G.invalid_type,expected:K.object,received:d.parsedType}),le}const{status:r,ctx:o}=this._processInputParams(t),{shape:a,keys:s}=this._getCached(),c=[];if(!(this._def.catchall instanceof Bt&&this._def.unknownKeys==="strip"))for(const d in o.data)s.includes(d)||c.push(d);const l=[];for(const d of s){const u=a[d],p=o.data[d];l.push({key:{status:"valid",value:d},value:u._parse(new It(o,p,o.path,d)),alwaysSet:d in o.data})}if(this._def.catchall instanceof Bt){const d=this._def.unknownKeys;if(d==="passthrough")for(const u of c)l.push({key:{status:"valid",value:u},value:{status:"valid",value:o.data[u]}});else if(d==="strict")c.length>0&&(X(o,{code:G.unrecognized_keys,keys:c}),r.dirty());else if(d!=="strip")throw new Error("Internal ZodObject error: invalid unknownKeys value.")}else{const d=this._def.catchall;for(const u of c){const p=o.data[u];l.push({key:{status:"valid",value:u},value:d._parse(new It(o,p,o.path,u)),alwaysSet:u in o.data})}}return o.common.async?Promise.resolve().then(async()=>{const d=[];for(const u of l){const p=await u.key;d.push({key:p,value:await u.value,alwaysSet:u.alwaysSet})}return d}).then(d=>Ze.mergeObjectSync(r,d)):Ze.mergeObjectSync(r,l)}get shape(){return this._def.shape()}strict(t){return re.errToObj,new Ne({...this._def,unknownKeys:"strict",...t!==void 0?{errorMap:(n,r)=>{var o,a,s,c;const l=(s=(a=(o=this._def).errorMap)===null||a===void 0?void 0:a.call(o,n,r).message)!==null&&s!==void 0?s:r.defaultError;return n.code==="unrecognized_keys"?{message:(c=re.errToObj(t).message)!==null&&c!==void 0?c:l}:{message:l}}}:{}})}strip(){return new Ne({...this._def,unknownKeys:"strip"})}passthrough(){return new Ne({...this._def,unknownKeys:"passthrough"})}extend(t){return new Ne({...this._def,shape:()=>({...this._def.shape(),...t})})}merge(t){return new Ne({unknownKeys:t._def.unknownKeys,catchall:t._def.catchall,shape:()=>({...this._def.shape(),...t._def.shape()}),typeName:ae.ZodObject})}setKey(t,n){return this.augment({[t]:n})}catchall(t){return new Ne({...this._def,catchall:t})}pick(t){const n={};return ye.objectKeys(t).forEach(r=>{t[r]&&this.shape[r]&&(n[r]=this.shape[r])}),new Ne({...this._def,shape:()=>n})}omit(t){const n={};return ye.objectKeys(this.shape).forEach(r=>{t[r]||(n[r]=this.shape[r])}),new Ne({...this._def,shape:()=>n})}deepPartial(){return Cn(this)}partial(t){const n={};return ye.objectKeys(this.shape).forEach(r=>{const o=this.shape[r];t&&!t[r]?n[r]=o:n[r]=o.optional()}),new Ne({...this._def,shape:()=>n})}required(t){const n={};return ye.objectKeys(this.shape).forEach(r=>{if(t&&!t[r])n[r]=this.shape[r];else{let a=this.shape[r];for(;a instanceof Dt;)a=a._def.innerType;n[r]=a}}),new Ne({...this._def,shape:()=>n})}keyof(){return A1(ye.objectKeys(this.shape))}}Ne.create=(e,t)=>new Ne({shape:()=>e,unknownKeys:"strip",catchall:Bt.create(),typeName:ae.ZodObject,...pe(t)});Ne.strictCreate=(e,t)=>new Ne({shape:()=>e,unknownKeys:"strict",catchall:Bt.create(),typeName:ae.ZodObject,...pe(t)});Ne.lazycreate=(e,t)=>new Ne({shape:e,unknownKeys:"strip",catchall:Bt.create(),typeName:ae.ZodObject,...pe(t)});class kr extends ge{_parse(t){const{ctx:n}=this._processInputParams(t),r=this._def.options;function o(a){for(const c of a)if(c.result.status==="valid")return c.result;for(const c of a)if(c.result.status==="dirty")return n.common.issues.push(...c.ctx.common.issues),c.result;const s=a.map(c=>new gt(c.ctx.common.issues));return X(n,{code:G.invalid_union,unionErrors:s}),le}if(n.common.async)return Promise.all(r.map(async a=>{const s={...n,common:{...n.common,issues:[]},parent:null};return{result:await a._parseAsync({data:n.data,path:n.path,parent:s}),ctx:s}})).then(o);{let a;const s=[];for(const l of r){const d={...n,common:{...n.common,issues:[]},parent:null},u=l._parseSync({data:n.data,path:n.path,parent:d});if(u.status==="valid")return u;u.status==="dirty"&&!a&&(a={result:u,ctx:d}),d.common.issues.length&&s.push(d.common.issues)}if(a)return n.common.issues.push(...a.ctx.common.issues),a.result;const c=s.map(l=>new gt(l));return X(n,{code:G.invalid_union,unionErrors:c}),le}}get options(){return this._def.options}}kr.create=(e,t)=>new kr({options:e,typeName:ae.ZodUnion,...pe(t)});const so=e=>e instanceof Sr?so(e.schema):e instanceof xt?so(e.innerType()):e instanceof Er?[e.value]:e instanceof tn?e.options:e instanceof Ir?Object.keys(e.enum):e instanceof Nr?so(e._def.innerType):e instanceof Cr?[void 0]:e instanceof wr?[null]:null;class Ho extends ge{_parse(t){const{ctx:n}=this._processInputParams(t);if(n.parsedType!==K.object)return X(n,{code:G.invalid_type,expected:K.object,received:n.parsedType}),le;const r=this.discriminator,o=n.data[r],a=this.optionsMap.get(o);return a?n.common.async?a._parseAsync({data:n.data,path:n.path,parent:n}):a._parseSync({data:n.data,path:n.path,parent:n}):(X(n,{code:G.invalid_union_discriminator,options:Array.from(this.optionsMap.keys()),path:[r]}),le)}get discriminator(){return this._def.discriminator}get options(){return this._def.options}get optionsMap(){return this._def.optionsMap}static create(t,n,r){const o=new Map;for(const a of n){const s=so(a.shape[t]);if(!s)throw new Error(`A discriminator value for key \`${t}\` could not be extracted from all schema options`);for(const c of s){if(o.has(c))throw new Error(`Discriminator property ${String(t)} has duplicate value ${String(c)}`);o.set(c,a)}}return new Ho({typeName:ae.ZodDiscriminatedUnion,discriminator:t,options:n,optionsMap:o,...pe(r)})}}function pa(e,t){const n=qt(e),r=qt(t);if(e===t)return{valid:!0,data:e};if(n===K.object&&r===K.object){const o=ye.objectKeys(t),a=ye.objectKeys(e).filter(c=>o.indexOf(c)!==-1),s={...e,...t};for(const c of a){const l=pa(e[c],t[c]);if(!l.valid)return{valid:!1};s[c]=l.data}return{valid:!0,data:s}}else if(n===K.array&&r===K.array){if(e.length!==t.length)return{valid:!1};const o=[];for(let a=0;a<e.length;a++){const s=e[a],c=t[a],l=pa(s,c);if(!l.valid)return{valid:!1};o.push(l.data)}return{valid:!0,data:o}}else return n===K.date&&r===K.date&&+e==+t?{valid:!0,data:e}:{valid:!1}}class _r extends ge{_parse(t){const{status:n,ctx:r}=this._processInputParams(t),o=(a,s)=>{if(da(a)||da(s))return le;const c=pa(a.value,s.value);return c.valid?((ua(a)||ua(s))&&n.dirty(),{status:n.value,value:c.data}):(X(r,{code:G.invalid_intersection_types}),le)};return r.common.async?Promise.all([this._def.left._parseAsync({data:r.data,path:r.path,parent:r}),this._def.right._parseAsync({data:r.data,path:r.path,parent:r})]).then(([a,s])=>o(a,s)):o(this._def.left._parseSync({data:r.data,path:r.path,parent:r}),this._def.right._parseSync({data:r.data,path:r.path,parent:r}))}}_r.create=(e,t,n)=>new _r({left:e,right:t,typeName:ae.ZodIntersection,...pe(n)});class Nt extends ge{_parse(t){const{status:n,ctx:r}=this._processInputParams(t);if(r.parsedType!==K.array)return X(r,{code:G.invalid_type,expected:K.array,received:r.parsedType}),le;if(r.data.length<this._def.items.length)return X(r,{code:G.too_small,minimum:this._def.items.length,inclusive:!0,exact:!1,type:"array"}),le;!this._def.rest&&r.data.length>this._def.items.length&&(X(r,{code:G.too_big,maximum:this._def.items.length,inclusive:!0,exact:!1,type:"array"}),n.dirty());const a=[...r.data].map((s,c)=>{const l=this._def.items[c]||this._def.rest;return l?l._parse(new It(r,s,r.path,c)):null}).filter(s=>!!s);return r.common.async?Promise.all(a).then(s=>Ze.mergeArray(n,s)):Ze.mergeArray(n,a)}get items(){return this._def.items}rest(t){return new Nt({...this._def,rest:t})}}Nt.create=(e,t)=>{if(!Array.isArray(e))throw new Error("You must pass an array of schemas to z.tuple([ ... ])");return new Nt({items:e,typeName:ae.ZodTuple,rest:null,...pe(t)})};class jr extends ge{get keySchema(){return this._def.keyType}get valueSchema(){return this._def.valueType}_parse(t){const{status:n,ctx:r}=this._processInputParams(t);if(r.parsedType!==K.object)return X(r,{code:G.invalid_type,expected:K.object,received:r.parsedType}),le;const o=[],a=this._def.keyType,s=this._def.valueType;for(const c in r.data)o.push({key:a._parse(new It(r,c,r.path,c)),value:s._parse(new It(r,r.data[c],r.path,c))});return r.common.async?Ze.mergeObjectAsync(n,o):Ze.mergeObjectSync(n,o)}get element(){return this._def.valueType}static create(t,n,r){return n instanceof ge?new jr({keyType:t,valueType:n,typeName:ae.ZodRecord,...pe(r)}):new jr({keyType:ft.create(),valueType:t,typeName:ae.ZodRecord,...pe(n)})}}class bo extends ge{get keySchema(){return this._def.keyType}get valueSchema(){return this._def.valueType}_parse(t){const{status:n,ctx:r}=this._processInputParams(t);if(r.parsedType!==K.map)return X(r,{code:G.invalid_type,expected:K.map,received:r.parsedType}),le;const o=this._def.keyType,a=this._def.valueType,s=[...r.data.entries()].map(([c,l],d)=>({key:o._parse(new It(r,c,r.path,[d,"key"])),value:a._parse(new It(r,l,r.path,[d,"value"]))}));if(r.common.async){const c=new Map;return Promise.resolve().then(async()=>{for(const l of s){const d=await l.key,u=await l.value;if(d.status==="aborted"||u.status==="aborted")return le;(d.status==="dirty"||u.status==="dirty")&&n.dirty(),c.set(d.value,u.value)}return{status:n.value,value:c}})}else{const c=new Map;for(const l of s){const d=l.key,u=l.value;if(d.status==="aborted"||u.status==="aborted")return le;(d.status==="dirty"||u.status==="dirty")&&n.dirty(),c.set(d.value,u.value)}return{status:n.value,value:c}}}}bo.create=(e,t,n)=>new bo({valueType:t,keyType:e,typeName:ae.ZodMap,...pe(n)});class dn extends ge{_parse(t){const{status:n,ctx:r}=this._processInputParams(t);if(r.parsedType!==K.set)return X(r,{code:G.invalid_type,expected:K.set,received:r.parsedType}),le;const o=this._def;o.minSize!==null&&r.data.size<o.minSize.value&&(X(r,{code:G.too_small,minimum:o.minSize.value,type:"set",inclusive:!0,exact:!1,message:o.minSize.message}),n.dirty()),o.maxSize!==null&&r.data.size>o.maxSize.value&&(X(r,{code:G.too_big,maximum:o.maxSize.value,type:"set",inclusive:!0,exact:!1,message:o.maxSize.message}),n.dirty());const a=this._def.valueType;function s(l){const d=new Set;for(const u of l){if(u.status==="aborted")return le;u.status==="dirty"&&n.dirty(),d.add(u.value)}return{status:n.value,value:d}}const c=[...r.data.values()].map((l,d)=>a._parse(new It(r,l,r.path,d)));return r.common.async?Promise.all(c).then(l=>s(l)):s(c)}min(t,n){return new dn({...this._def,minSize:{value:t,message:re.toString(n)}})}max(t,n){return new dn({...this._def,maxSize:{value:t,message:re.toString(n)}})}size(t,n){return this.min(t,n).max(t,n)}nonempty(t){return this.min(1,t)}}dn.create=(e,t)=>new dn({valueType:e,minSize:null,maxSize:null,typeName:ae.ZodSet,...pe(t)});class Mn extends ge{constructor(){super(...arguments),this.validate=this.implement}_parse(t){const{ctx:n}=this._processInputParams(t);if(n.parsedType!==K.function)return X(n,{code:G.invalid_type,expected:K.function,received:n.parsedType}),le;function r(c,l){return fo({data:c,path:n.path,errorMaps:[n.common.contextualErrorMap,n.schemaErrorMap,ho(),br].filter(d=>!!d),issueData:{code:G.invalid_arguments,argumentsError:l}})}function o(c,l){return fo({data:c,path:n.path,errorMaps:[n.common.contextualErrorMap,n.schemaErrorMap,ho(),br].filter(d=>!!d),issueData:{code:G.invalid_return_type,returnTypeError:l}})}const a={errorMap:n.common.contextualErrorMap},s=n.data;if(this._def.returns instanceof Dn){const c=this;return Ye(async function(...l){const d=new gt([]),u=await c._def.args.parseAsync(l,a).catch(v=>{throw d.addIssue(r(l,v)),d}),p=await Reflect.apply(s,this,u);return await c._def.returns._def.type.parseAsync(p,a).catch(v=>{throw d.addIssue(o(p,v)),d})})}else{const c=this;return Ye(function(...l){const d=c._def.args.safeParse(l,a);if(!d.success)throw new gt([r(l,d.error)]);const u=Reflect.apply(s,this,d.data),p=c._def.returns.safeParse(u,a);if(!p.success)throw new gt([o(u,p.error)]);return p.data})}}parameters(){return this._def.args}returnType(){return this._def.returns}args(...t){return new Mn({...this._def,args:Nt.create(t).rest(sn.create())})}returns(t){return new Mn({...this._def,returns:t})}implement(t){return this.parse(t)}strictImplement(t){return this.parse(t)}static create(t,n,r){return new Mn({args:t||Nt.create([]).rest(sn.create()),returns:n||sn.create(),typeName:ae.ZodFunction,...pe(r)})}}class Sr extends ge{get schema(){return this._def.getter()}_parse(t){const{ctx:n}=this._processInputParams(t);return this._def.getter()._parse({data:n.data,path:n.path,parent:n})}}Sr.create=(e,t)=>new Sr({getter:e,typeName:ae.ZodLazy,...pe(t)});class Er extends ge{_parse(t){if(t.data!==this._def.value){const n=this._getOrReturnCtx(t);return X(n,{received:n.data,code:G.invalid_literal,expected:this._def.value}),le}return{status:"valid",value:t.data}}get value(){return this._def.value}}Er.create=(e,t)=>new Er({value:e,typeName:ae.ZodLiteral,...pe(t)});function A1(e,t){return new tn({values:e,typeName:ae.ZodEnum,...pe(t)})}class tn extends ge{_parse(t){if(typeof t.data!="string"){const n=this._getOrReturnCtx(t),r=this._def.values;return X(n,{expected:ye.joinValues(r),received:n.parsedType,code:G.invalid_type}),le}if(this._def.values.indexOf(t.data)===-1){const n=this._getOrReturnCtx(t),r=this._def.values;return X(n,{received:n.data,code:G.invalid_enum_value,options:r}),le}return Ye(t.data)}get options(){return this._def.values}get enum(){const t={};for(const n of this._def.values)t[n]=n;return t}get Values(){const t={};for(const n of this._def.values)t[n]=n;return t}get Enum(){const t={};for(const n of this._def.values)t[n]=n;return t}extract(t){return tn.create(t)}exclude(t){return tn.create(this.options.filter(n=>!t.includes(n)))}}tn.create=A1;class Ir extends ge{_parse(t){const n=ye.getValidEnumValues(this._def.values),r=this._getOrReturnCtx(t);if(r.parsedType!==K.string&&r.parsedType!==K.number){const o=ye.objectValues(n);return X(r,{expected:ye.joinValues(o),received:r.parsedType,code:G.invalid_type}),le}if(n.indexOf(t.data)===-1){const o=ye.objectValues(n);return X(r,{received:r.data,code:G.invalid_enum_value,options:o}),le}return Ye(t.data)}get enum(){return this._def.values}}Ir.create=(e,t)=>new Ir({values:e,typeName:ae.ZodNativeEnum,...pe(t)});class Dn extends ge{unwrap(){return this._def.type}_parse(t){const{ctx:n}=this._processInputParams(t);if(n.parsedType!==K.promise&&n.common.async===!1)return X(n,{code:G.invalid_type,expected:K.promise,received:n.parsedType}),le;const r=n.parsedType===K.promise?n.data:Promise.resolve(n.data);return Ye(r.then(o=>this._def.type.parseAsync(o,{path:n.path,errorMap:n.common.contextualErrorMap})))}}Dn.create=(e,t)=>new Dn({type:e,typeName:ae.ZodPromise,...pe(t)});class xt extends ge{innerType(){return this._def.schema}sourceType(){return this._def.schema._def.typeName===ae.ZodEffects?this._def.schema.sourceType():this._def.schema}_parse(t){const{status:n,ctx:r}=this._processInputParams(t),o=this._def.effect||null,a={addIssue:s=>{X(r,s),s.fatal?n.abort():n.dirty()},get path(){return r.path}};if(a.addIssue=a.addIssue.bind(a),o.type==="preprocess"){const s=o.transform(r.data,a);return r.common.issues.length?{status:"dirty",value:r.data}:r.common.async?Promise.resolve(s).then(c=>this._def.schema._parseAsync({data:c,path:r.path,parent:r})):this._def.schema._parseSync({data:s,path:r.path,parent:r})}if(o.type==="refinement"){const s=c=>{const l=o.refinement(c,a);if(r.common.async)return Promise.resolve(l);if(l instanceof Promise)throw new Error("Async refinement encountered during synchronous parse operation. Use .parseAsync instead.");return c};if(r.common.async===!1){const c=this._def.schema._parseSync({data:r.data,path:r.path,parent:r});return c.status==="aborted"?le:(c.status==="dirty"&&n.dirty(),s(c.value),{status:n.value,value:c.value})}else return this._def.schema._parseAsync({data:r.data,path:r.path,parent:r}).then(c=>c.status==="aborted"?le:(c.status==="dirty"&&n.dirty(),s(c.value).then(()=>({status:n.value,value:c.value}))))}if(o.type==="transform")if(r.common.async===!1){const s=this._def.schema._parseSync({data:r.data,path:r.path,parent:r});if(!xr(s))return s;const c=o.transform(s.value,a);if(c instanceof Promise)throw new Error("Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.");return{status:n.value,value:c}}else return this._def.schema._parseAsync({data:r.data,path:r.path,parent:r}).then(s=>xr(s)?Promise.resolve(o.transform(s.value,a)).then(c=>({status:n.value,value:c})):s);ye.assertNever(o)}}xt.create=(e,t,n)=>new xt({schema:e,typeName:ae.ZodEffects,effect:t,...pe(n)});xt.createWithPreprocess=(e,t,n)=>new xt({schema:t,effect:{type:"preprocess",transform:e},typeName:ae.ZodEffects,...pe(n)});class Dt extends ge{_parse(t){return this._getType(t)===K.undefined?Ye(void 0):this._def.innerType._parse(t)}unwrap(){return this._def.innerType}}Dt.create=(e,t)=>new Dt({innerType:e,typeName:ae.ZodOptional,...pe(t)});class un extends ge{_parse(t){return this._getType(t)===K.null?Ye(null):this._def.innerType._parse(t)}unwrap(){return this._def.innerType}}un.create=(e,t)=>new un({innerType:e,typeName:ae.ZodNullable,...pe(t)});class Nr extends ge{_parse(t){const{ctx:n}=this._processInputParams(t);let r=n.data;return n.parsedType===K.undefined&&(r=this._def.defaultValue()),this._def.innerType._parse({data:r,path:n.path,parent:n})}removeDefault(){return this._def.innerType}}Nr.create=(e,t)=>new Nr({innerType:e,typeName:ae.ZodDefault,defaultValue:typeof t.default=="function"?t.default:()=>t.default,...pe(t)});class xo extends ge{_parse(t){const{ctx:n}=this._processInputParams(t),r={...n,common:{...n.common,issues:[]}},o=this._def.innerType._parse({data:r.data,path:r.path,parent:{...r}});return go(o)?o.then(a=>({status:"valid",value:a.status==="valid"?a.value:this._def.catchValue({get error(){return new gt(r.common.issues)},input:r.data})})):{status:"valid",value:o.status==="valid"?o.value:this._def.catchValue({get error(){return new gt(r.common.issues)},input:r.data})}}removeCatch(){return this._def.innerType}}xo.create=(e,t)=>new xo({innerType:e,typeName:ae.ZodCatch,catchValue:typeof t.catch=="function"?t.catch:()=>t.catch,...pe(t)});class yo extends ge{_parse(t){if(this._getType(t)!==K.nan){const r=this._getOrReturnCtx(t);return X(r,{code:G.invalid_type,expected:K.nan,received:r.parsedType}),le}return{status:"valid",value:t.data}}}yo.create=e=>new yo({typeName:ae.ZodNaN,...pe(e)});const s2=Symbol("zod_brand");class L1 extends ge{_parse(t){const{ctx:n}=this._processInputParams(t),r=n.data;return this._def.type._parse({data:r,path:n.path,parent:n})}unwrap(){return this._def.type}}class Br extends ge{_parse(t){const{status:n,ctx:r}=this._processInputParams(t);if(r.common.async)return(async()=>{const a=await this._def.in._parseAsync({data:r.data,path:r.path,parent:r});return a.status==="aborted"?le:a.status==="dirty"?(n.dirty(),M1(a.value)):this._def.out._parseAsync({data:a.value,path:r.path,parent:r})})();{const o=this._def.in._parseSync({data:r.data,path:r.path,parent:r});return o.status==="aborted"?le:o.status==="dirty"?(n.dirty(),{status:"dirty",value:o.value}):this._def.out._parseSync({data:o.value,path:r.path,parent:r})}}static create(t,n){return new Br({in:t,out:n,typeName:ae.ZodPipeline})}}class Co extends ge{_parse(t){const n=this._def.innerType._parse(t);return xr(n)&&(n.value=Object.freeze(n.value)),n}}Co.create=(e,t)=>new Co({innerType:e,typeName:ae.ZodReadonly,...pe(t)});const T1=(e,t={},n)=>e?Rn.create().superRefine((r,o)=>{var a,s;if(!e(r)){const c=typeof t=="function"?t(r):typeof t=="string"?{message:t}:t,l=(s=(a=c.fatal)!==null&&a!==void 0?a:n)!==null&&s!==void 0?s:!0,d=typeof c=="string"?{message:c}:c;o.addIssue({code:"custom",...d,fatal:l})}}):Rn.create(),c2={object:Ne.lazycreate};var ae;(function(e){e.ZodString="ZodString",e.ZodNumber="ZodNumber",e.ZodNaN="ZodNaN",e.ZodBigInt="ZodBigInt",e.ZodBoolean="ZodBoolean",e.ZodDate="ZodDate",e.ZodSymbol="ZodSymbol",e.ZodUndefined="ZodUndefined",e.ZodNull="ZodNull",e.ZodAny="ZodAny",e.ZodUnknown="ZodUnknown",e.ZodNever="ZodNever",e.ZodVoid="ZodVoid",e.ZodArray="ZodArray",e.ZodObject="ZodObject",e.ZodUnion="ZodUnion",e.ZodDiscriminatedUnion="ZodDiscriminatedUnion",e.ZodIntersection="ZodIntersection",e.ZodTuple="ZodTuple",e.ZodRecord="ZodRecord",e.ZodMap="ZodMap",e.ZodSet="ZodSet",e.ZodFunction="ZodFunction",e.ZodLazy="ZodLazy",e.ZodLiteral="ZodLiteral",e.ZodEnum="ZodEnum",e.ZodEffects="ZodEffects",e.ZodNativeEnum="ZodNativeEnum",e.ZodOptional="ZodOptional",e.ZodNullable="ZodNullable",e.ZodDefault="ZodDefault",e.ZodCatch="ZodCatch",e.ZodPromise="ZodPromise",e.ZodBranded="ZodBranded",e.ZodPipeline="ZodPipeline",e.ZodReadonly="ZodReadonly"})(ae||(ae={}));const l2=(e,t={message:`Input not instance of ${e.name}`})=>T1(n=>n instanceof e,t),O1=ft.create,F1=Qt.create,d2=yo.create,u2=en.create,R1=yr.create,p2=ln.create,h2=mo.create,f2=Cr.create,g2=wr.create,m2=Rn.create,v2=sn.create,b2=Bt.create,x2=vo.create,y2=mt.create,C2=Ne.create,w2=Ne.strictCreate,k2=kr.create,_2=Ho.create,j2=_r.create,S2=Nt.create,E2=jr.create,I2=bo.create,N2=dn.create,M2=Mn.create,A2=Sr.create,L2=Er.create,T2=tn.create,O2=Ir.create,F2=Dn.create,Qs=xt.create,R2=Dt.create,D2=un.create,z2=xt.createWithPreprocess,B2=Br.create,P2=()=>O1().optional(),W2=()=>F1().optional(),V2=()=>R1().optional(),U2={string:(e=>ft.create({...e,coerce:!0})),number:(e=>Qt.create({...e,coerce:!0})),boolean:(e=>yr.create({...e,coerce:!0})),bigint:(e=>en.create({...e,coerce:!0})),date:(e=>ln.create({...e,coerce:!0}))},Z2=le;var $2=Object.freeze({__proto__:null,defaultErrorMap:br,setErrorMap:Yu,getErrorMap:ho,makeIssue:fo,EMPTY_PATH:qu,addIssueToContext:X,ParseStatus:Ze,INVALID:le,DIRTY:M1,OK:Ye,isAborted:da,isDirty:ua,isValid:xr,isAsync:go,get util(){return ye},get objectUtil(){return la},ZodParsedType:K,getParsedType:qt,ZodType:ge,ZodString:ft,ZodNumber:Qt,ZodBigInt:en,ZodBoolean:yr,ZodDate:ln,ZodSymbol:mo,ZodUndefined:Cr,ZodNull:wr,ZodAny:Rn,ZodUnknown:sn,ZodNever:Bt,ZodVoid:vo,ZodArray:mt,ZodObject:Ne,ZodUnion:kr,ZodDiscriminatedUnion:Ho,ZodIntersection:_r,ZodTuple:Nt,ZodRecord:jr,ZodMap:bo,ZodSet:dn,ZodFunction:Mn,ZodLazy:Sr,ZodLiteral:Er,ZodEnum:tn,ZodNativeEnum:Ir,ZodPromise:Dn,ZodEffects:xt,ZodTransformer:xt,ZodOptional:Dt,ZodNullable:un,ZodDefault:Nr,ZodCatch:xo,ZodNaN:yo,BRAND:s2,ZodBranded:L1,ZodPipeline:Br,ZodReadonly:Co,custom:T1,Schema:ge,ZodSchema:ge,late:c2,get ZodFirstPartyTypeKind(){return ae},coerce:U2,any:m2,array:y2,bigint:u2,boolean:R1,date:p2,discriminatedUnion:_2,effect:Qs,enum:T2,function:M2,instanceof:l2,intersection:j2,lazy:A2,literal:L2,map:I2,nan:d2,nativeEnum:O2,never:b2,null:g2,nullable:D2,number:F1,object:C2,oboolean:V2,onumber:W2,optional:R2,ostring:P2,pipeline:B2,preprocess:z2,promise:F2,record:E2,set:N2,strictObject:w2,string:O1,symbol:h2,transformer:Qs,tuple:S2,undefined:f2,union:k2,unknown:v2,void:x2,NEVER:Z2,ZodIssueCode:G,quotelessJson:Gu,ZodError:gt});class H2 extends Error{constructor(n,r){super(n,r);Ee(this,"cause");r!=null&&r.cause&&(this.cause=r.cause,this.message=`${this.message}
CAUSE: ${this.cause.message}`,typeof this.cause.stack=="string"&&(this.stack=(this.stack??"")+`
CAUSE: `+this.cause.stack))}}class G2{constructor(){Ee(this,"promise");Ee(this,"resolve");Ee(this,"reject");this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}}const os=e=>e*6e4,Y2=e=>e/1e3;$2.string().regex(/^\d{10}$/,"t must be unix timestamp").transform(e=>Number(e)).refine(Number.isSafeInteger,"Must be a safe integer");class q2 extends H2{constructor(t,n){super(`InvariantError: ${t}`,n)}}function ha(e,t,n){if(!e)throw new q2(t,{cause:n})}var fa;(function(e){e.AUTHENTICATED="AUTHENTICATED",e.NOT_AUTHENTICATED="NOT_AUTHENTICATED"})(fa||(fa={}));var rr;(function(e){e.sessionInit="sessionInit",e.sessionGetCurrent="sessionGetCurrent",e.sessionClear="sessionClear",e.ethereumJsonRpcRequest="ethereumJsonRpcRequest",e.ethereumJsonRpcRequiresApproval="ethereumJsonRpcRequiresApproval"})(rr||(rr={}));var cn;(function(e){e.sessionChanged="sessionChanged",e.ethereumNetworkChanged="ethereumNetworkChanged",e.modalOpen="modalOpen",e.modalClose="modalClose",e.modalUpdate="modalUpdate"})(cn||(cn={}));var ga;(function(e){e.authStart="authStart",e.rpcRequest="rpcRequest"})(ga||(ga={}));class jt{}Ee(jt,"setExecutorWindow",t=>{var n;window.____aave_wallet_wrapper={window:t,origin:(n=window.____aave_wallet_wrapper)==null?void 0:n.origin}}),Ee(jt,"getExecutorWindow",()=>{var t;if(!((t=window.____aave_wallet_wrapper)!=null&&t.window))throw new Error("You must call `connect` to start up the sdk-web-elements");return window.____aave_wallet_wrapper.window}),Ee(jt,"setExecutorOrigin",t=>{var r;const n=window.____aave_wallet_wrapper;if(n){n.origin=t;return}window.____aave_wallet_wrapper={origin:t,window:(r=window.____aave_wallet_wrapper)==null?void 0:r.window}}),Ee(jt,"getExecutorOrigin",()=>{var t;if(!((t=window.____aave_wallet_wrapper)!=null&&t.origin))throw new Error("You must call `connect` to start up the sdk-web-elements");return window.____aave_wallet_wrapper.origin});let ma=null;const K2=async()=>{ma=await ku(()=>import("./index-DrAshLsx-CzHzQmON.js"),__vite__mapDeps([0,1,2,3])).then(function(e){return e.i})},is=()=>(ha(ma,"You need to init post robot first"),ma),X2=os(1),pi=async(e,t)=>{if(typeof window>"u")throw new Error("Can't proxy in a non browser environment");const n="data"in e?e.data:void 0;return(await is().send(jt.getExecutorWindow(),e.type,n,{timeout:X2})).data},mn=new Map,or=(e,t)=>{var n;if(typeof window>"u")throw new Error("Can't subscribe in a non browser environment");if(mn.has(e))(n=mn.get(e))==null||n.callbacks.push(t);else{const r=is().on(e,{window:jt.getExecutorWindow()},o=>{var a;return(a=mn.get(e))==null||a.callbacks.forEach(s=>s(o.data)),Promise.resolve()});mn.set(e,{listener:r,callbacks:[t]})}return()=>{const r=mn.get(e);if(!r)return;const o=r.callbacks.filter(a=>a!==t);o.length===0?(r.listener.cancel(),mn.delete(e)):r.callbacks=o}},ec=()=>jt.getExecutorOrigin()+"/injected/master";class J2{constructor(t,n){Ee(this,"unsubscribe");Ee(this,"autoHeight",!1);const r=or(cn.modalOpen,({height:s})=>{document.body.style.setProperty("overflow","hidden","important"),document.body.style.setProperty("padding-right","15px","important"),t.style.setProperty("display","flex"),this.autoHeight&&n.style.setProperty("height",s.toString()+"px")}),o=or(cn.modalClose,()=>{document.body.style.removeProperty("overflow"),document.body.style.removeProperty("padding-right"),t.style.setProperty("display","none")}),a=or(cn.modalUpdate,({height:s})=>{this.autoHeight&&n.style.setProperty("height",s.toString()+"px")});this.unsubscribe=()=>{r(),o(),a()}}disconnect(){this.unsubscribe()}}const wo="aave-account-master-iframe",tc=2e4;let ko=null;const Q2=({fullscreen:e}={})=>{if(e){const t=document.createElement("div");t.style.display="none",t.style.position="fixed",t.style.inset="0",t.style.zIndex="2147483647";const n=document.createElement("iframe");return n.style.all="initial",n.style.border="0",n.style.margin="0",n.style.padding="0",n.style.position="absolute",n.style.top="0",n.style.left="0",n.style.width="100vw",n.style.height="100vh",n.style.borderRadius="0",n.id=wo,n.src=ec(),t.appendChild(n),{container:t,iframe:n}}else{const t=document.createElement("div");t.style.display="none",t.style.alignItems="center",t.style.justifyContent="center",t.style.position="fixed",t.style.top="0",t.style.left="0",t.style.width="100vw",t.style.height="100vh",t.style.zIndex="2147483647";const n=document.createElement("div");n.style.position="absolute",n.style.inset="0",n.style.backgroundColor="rgba(0,0,0,0.5)",n.style.zIndex="-1";const r=document.createElement("iframe");return r.style.borderRadius="10px",r.style.boxShadow="0 0 10px 0 rgba(0,0,0,0.5)",r.id=wo,r.src=ec(),t.appendChild(n),t.appendChild(r),{container:t,iframe:r}}},e3=({environment:e})=>D1()?null:new Promise((n,r)=>{let o=!1;const a=setTimeout(()=>{o=!0,r(`The sdk failed to connect within ${Y2(tc)} seconds, please contact support.`)},tc),s=e.webElementsAppUrl;jt.setExecutorOrigin(s);const{container:c,iframe:l}=Q2({fullscreen:!0});l.onload=()=>{o||(o=!0,clearTimeout(a),jt.setExecutorWindow(l.contentWindow),ko=new J2(c,l),n())},K2().then(()=>{document.body.appendChild(c)})}),D1=()=>!!document.getElementById(wo)&&!!ko,t3=()=>{if(!D1())return;const t=document.getElementById(wo);ha(t,"The connector is not defined"),ha(ko,"The modal controller is not defined"),ko.disconnect(),t.remove()};class z1{constructor(t){Ee(this,"key");this.key=t}get(){const t=localStorage.getItem(this.key);if(!t)return null;try{return JSON.parse(t)}catch{return t}}set(t){const n=typeof t=="string"?t:JSON.stringify(t);localStorage.setItem(this.key,n)}remove(){localStorage.removeItem(this.key)}}const nc=new z1("aave_wallet__device_id"),hi=new z1("aave_wallet__session_key"),n3={name:"production",webElementsAppUrl:"https://app.family.co"},r3=os(1),o3=(e,t)=>{const n=window.screenX+(window.outerWidth-e)/2,r=window.screenY+(window.outerHeight-t)/2;return{left:n,top:r}},i3=e=>{switch(e){case Mr.MEDIUM:return{width:444,height:586};case Mr.INHERITED:return{width:window.outerWidth,height:window.outerHeight}}};var Mr;(function(e){e.MEDIUM="MEDIUM",e.INHERITED="INHERITED"})(Mr||(Mr={}));const a3=(e,t,n=Mr.MEDIUM)=>{const{width:r,height:o}=i3(n),{top:a,left:s}=o3(r,o),c=`width=${r},height=${o},left=${s},top=${a},menubar=no,toolbar=no,location=no,status=no`;return window.open(e,t,c)},s3=async(e,t,n)=>{const r="data"in t?t.data:void 0;return(await is().send(e,t.type,r,{timeout:(n==null?void 0:n.timeout)??r3})).data};var it;(function(e){e[e.DISCONNECTED=0]="DISCONNECTED",e[e.CONNECTING=1]="CONNECTING",e[e.CONNECTED=2]="CONNECTED"})(it||(it={}));var ir;(function(e){e.SUCCESS="SUCCESS",e.USER_CANCELLED="USER_CANCELLED",e.BROWSER_BLOCKED="BROWSER_BLOCKED"})(ir||(ir={}));class c3{constructor(){Ee(this,"connectionChangeListeners",[]);Ee(this,"sdkState",{status:it.DISCONNECTED});Ee(this,"session");Ee(this,"ethereum");this.session={create:async()=>{this.requireConnectedSdk();const t=a3(`${jt.getExecutorOrigin()}/popup/auth`,"AaveAccountAuthentication");if(!t)return{status:ir.BROWSER_BLOCKED};try{const n=await s3(t,{type:ga.authStart},{timeout:os(10)});return hi.set(n.clientSessionKey),nc.set(n.deviceId),{status:ir.SUCCESS,deviceId:n.deviceId,clientSessionKey:n.clientSessionKey,idToken:n.idToken,wallet:{address:n.wallet.address}}}catch{return{status:ir.USER_CANCELLED}}},getCurrent:()=>(this.requireConnectedSdk(),pi({type:rr.sessionGetCurrent})),onChange:t=>(this.requireConnectedSdk(),or(cn.sessionChanged,t)),clear:()=>(this.requireConnectedSdk(),hi.remove(),pi({type:rr.sessionClear}))},this.ethereum={onNetworkChange:t=>(this.requireConnectedSdk(),or(cn.ethereumNetworkChanged,t))}}async connect(t={environment:n3}){if(this.sdkState.status===it.CONNECTED)throw new Error("Aave Account is already connected. Do not call AaveAccountSdk.connect() more than once.");if(this.sdkState.status===it.CONNECTING)return this.sdkState.deferred;const n=new G2;this.sdkState={status:it.CONNECTING,deferred:n.promise},await e3(t),await this.initSession(),this.sdkState={status:it.CONNECTED},this.connectionChangeListeners.forEach(r=>r(!0)),n.resolve()}isConnected(){return this.sdkState.status===it.CONNECTED}isConnecting(){return this.sdkState.status===it.CONNECTING}async disconnect(){if(this.sdkState.status!==it.CONNECTED)throw new Error("Aave Account is not connected");(await this.session.getCurrent()).status===fa.AUTHENTICATED&&await this.session.clear(),t3(),this.sdkState={status:it.DISCONNECTED},this.connectionChangeListeners.forEach(n=>n(!1))}onConnectionChange(t){return this.connectionChangeListeners.push(t),()=>{this.connectionChangeListeners=this.connectionChangeListeners.filter(n=>n!==t)}}initSession(){const t=nc.get(),n=hi.get();return pi({type:rr.sessionInit,data:{deviceId:t,clientSessionKey:n}})}requireConnectedSdk(){if(this.sdkState.status!==it.CONNECTED)throw new Error("Aave Account is not connected. Make sure to call AaveAccountSdk.connect() first.")}}new c3;class l3{constructor(t,n=!1){Ee(this,"_value");this._value=t,n||this.validate()}get value(){if(this._value===void 0)throw this.valueNotSetError();return this._value}equals(t){return t.value===this.value}setValue(t){this._value=t,this.validate()}valueNotSetError(){return new Error("Value set is undefined")}}class d3 extends l3{constructor(t,n=!1){super(t,n)}validate(){if(typeof this._value!="string")throw new Error(`String supplied is not a string - ${String(this._value)}`)}toJSON(){return this._value}toString(){return this._value}}const $e=class $e extends d3{constructor(t,n=!1){t=t.normalize("NFKC"),super(t,n)}validate(){if(!$e.validatePassword(this.value).result)throw new Error("Invalid password format")}};Ee($e,"criteria",{minLengthAllSatisfied:8,minLengthOneNotSatisfied:16,uppercase:1,lowercase:1,specialChar:1,digit:1}),Ee($e,"supportsUnicodeClasses",(()=>{try{const t=new RegExp("\\p{Lu}","u");return t.test("A")&&!t.test("a")}catch{return!1}})()),Ee($e,"regex",$e.supportsUnicodeClasses?{uppercase:new RegExp("\\p{Lu}","u"),lowercase:new RegExp("\\p{Ll}","u"),specialChar:new RegExp("[\\p{P}\\p{S}]","u"),digit:new RegExp("\\p{N}","u")}:{uppercase:/[A-Z]/,lowercase:/[a-z]/,specialChar:/[^A-Za-z0-9]/,digit:/[0-9]/}),Ee($e,"graphemeSegmenter",typeof Intl<"u"&&typeof Intl.Segmenter=="function"?new Intl.Segmenter(void 0,{granularity:"grapheme"}):void 0),Ee($e,"graphemeLength",t=>{const n=$e.graphemeSegmenter;if(!n)return Array.from(t).length;let r=0;for(const o of n.segment(t))r++;return r}),Ee($e,"validatePassword",t=>{t=t.normalize("NFKC");const n=Object.entries($e.regex).map(([c,l])=>[c,l.test(t)]),r=$e.graphemeLength(t);if(n.filter(([,c])=>!c).length===1&&r>=$e.criteria.minLengthOneNotSatisfied)return{result:!0,breakdown:{minLength:!0,...Object.fromEntries(n)}};const a=r>=$e.criteria.minLengthAllSatisfied;return{result:n.every(([,c])=>c)&&a,breakdown:{minLength:a,...Object.fromEntries(n)}}});let rc=$e;var va=function(e,t){return va=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,r){n.__proto__=r}||function(n,r){for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(n[o]=r[o])},va(e,t)};function B1(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");va(e,t);function n(){this.constructor=e}e.prototype=t===null?Object.create(t):(n.prototype=t.prototype,new n)}var H=function(){return H=Object.assign||function(t){for(var n,r=1,o=arguments.length;r<o;r++){n=arguments[r];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a])}return t},H.apply(this,arguments)};function Qe(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]]);return n}function u3(e){var t=typeof Symbol=="function"&&Symbol.iterator,n=t&&e[t],r=0;if(n)return n.call(e);if(e&&typeof e.length=="number")return{next:function(){return e&&r>=e.length&&(e=void 0),{value:e&&e[r++],done:!e}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")}function Ae(e,t){var n=typeof Symbol=="function"&&e[Symbol.iterator];if(!n)return e;var r=n.call(e),o,a=[],s;try{for(;(t===void 0||t-- >0)&&!(o=r.next()).done;)a.push(o.value)}catch(c){s={error:c}}finally{try{o&&!o.done&&(n=r.return)&&n.call(r)}finally{if(s)throw s.error}}return a}function vt(e,t,n){if(n||arguments.length===2)for(var r=0,o=t.length,a;r<o;r++)(a||!(r in t))&&(a||(a=Array.prototype.slice.call(t,0,r)),a[r]=t[r]);return e.concat(a||Array.prototype.slice.call(t))}var Lt=function(e){return{isEnabled:function(t){return e.some(function(n){return!!t[n]})}}},Ar={measureLayout:Lt(["layout","layoutId","drag"]),animation:Lt(["animate","exit","variants","whileHover","whileTap","whileFocus","whileDrag","whileInView"]),exit:Lt(["exit"]),drag:Lt(["drag","dragControls"]),focus:Lt(["whileFocus"]),hover:Lt(["whileHover","onHoverStart","onHoverEnd"]),tap:Lt(["whileTap","onTap","onTapStart","onTapCancel"]),pan:Lt(["onPan","onPanStart","onPanSessionStart","onPanEnd"]),inView:Lt(["whileInView","onViewportEnter","onViewportLeave"])};function p3(e){for(var t in e)e[t]!==null&&(t==="projectionNodeConstructor"?Ar.projectionNodeConstructor=e[t]:Ar[t].Component=e[t])}var _o=function(){},P1=M.createContext({strict:!1}),W1=Object.keys(Ar),h3=W1.length;function f3(e,t,n){var r=[];if(M.useContext(P1),!t)return null;for(var o=0;o<h3;o++){var a=W1[o],s=Ar[a],c=s.isEnabled,l=s.Component;c(e)&&l&&r.push(M.createElement(l,H({key:a},e,{visualElement:t})))}return r}var Lr=M.createContext({transformPagePoint:function(e){return e},isStatic:!1,reducedMotion:"never"}),Go=M.createContext({});function g3(){return M.useContext(Go).visualElement}var Pr=M.createContext(null),Yn=typeof document<"u",jo=Yn?M.useLayoutEffect:M.useEffect,ba={current:null},V1=!1;function m3(){if(V1=!0,!!Yn)if(window.matchMedia){var e=window.matchMedia("(prefers-reduced-motion)"),t=function(){return ba.current=e.matches};e.addListener(t),t()}else ba.current=!1}function v3(){!V1&&m3();var e=Ae(M.useState(ba.current),1),t=e[0];return t}function b3(){var e=v3(),t=M.useContext(Lr).reducedMotion;return t==="never"?!1:t==="always"?!0:e}function x3(e,t,n,r){var o=M.useContext(P1),a=g3(),s=M.useContext(Pr),c=b3(),l=M.useRef(void 0);r||(r=o.renderer),!l.current&&r&&(l.current=r(e,{visualState:t,parent:a,props:n,presenceId:s==null?void 0:s.id,blockInitialAnimation:(s==null?void 0:s.initial)===!1,shouldReduceMotion:c}));var d=l.current;return jo(function(){d==null||d.syncRender()}),M.useEffect(function(){var u;(u=d==null?void 0:d.animationState)===null||u===void 0||u.animateChanges()}),jo(function(){return function(){return d==null?void 0:d.notifyUnmount()}},[]),d}function En(e){return typeof e=="object"&&Object.prototype.hasOwnProperty.call(e,"current")}function y3(e,t,n){return M.useCallback(function(r){var o;r&&((o=e.mount)===null||o===void 0||o.call(e,r)),t&&(r?t.mount(r):t.unmount()),n&&(typeof n=="function"?n(r):En(n)&&(n.current=r))},[t])}function U1(e){return Array.isArray(e)}function ut(e){return typeof e=="string"||U1(e)}function C3(e){var t={};return e.forEachValue(function(n,r){return t[r]=n.get()}),t}function w3(e){var t={};return e.forEachValue(function(n,r){return t[r]=n.getVelocity()}),t}function Z1(e,t,n,r,o){var a;return r===void 0&&(r={}),o===void 0&&(o={}),typeof t=="function"&&(t=t(n??e.custom,r,o)),typeof t=="string"&&(t=(a=e.variants)===null||a===void 0?void 0:a[t]),typeof t=="function"&&(t=t(n??e.custom,r,o)),t}function Yo(e,t,n){var r=e.getProps();return Z1(r,t,n??r.custom,C3(e),w3(e))}function qo(e){var t;return typeof((t=e.animate)===null||t===void 0?void 0:t.start)=="function"||ut(e.initial)||ut(e.animate)||ut(e.whileHover)||ut(e.whileDrag)||ut(e.whileTap)||ut(e.whileFocus)||ut(e.exit)}function $1(e){return!!(qo(e)||e.variants)}function k3(e,t){if(qo(e)){var n=e.initial,r=e.animate;return{initial:n===!1||ut(n)?n:void 0,animate:ut(r)?r:void 0}}return e.inherit!==!1?t:{}}function _3(e){var t=k3(e,M.useContext(Go)),n=t.initial,r=t.animate;return M.useMemo(function(){return{initial:n,animate:r}},[oc(n),oc(r)])}function oc(e){return Array.isArray(e)?e.join(" "):e}function qn(e){var t=M.useRef(null);return t.current===null&&(t.current=e()),t.current}var ar={hasAnimatedSinceResize:!0,hasEverUpdated:!1},j3=1;function S3(){return qn(function(){if(ar.hasEverUpdated)return j3++})}var as=M.createContext({}),H1=M.createContext({});function E3(e,t,n,r){var o,a=t.layoutId,s=t.layout,c=t.drag,l=t.dragConstraints,d=t.layoutScroll,u=M.useContext(H1);!r||!n||n!=null&&n.projection||(n.projection=new r(e,n.getLatestValues(),(o=n.parent)===null||o===void 0?void 0:o.projection),n.projection.setOptions({layoutId:a,layout:s,alwaysMeasureLayout:!!c||l&&En(l),visualElement:n,scheduleRender:function(){return n.scheduleRender()},animationType:typeof s=="string"?s:"both",initialPromotionConfig:u,layoutScroll:d}))}var I3=(function(e){B1(t,e);function t(){return e!==null&&e.apply(this,arguments)||this}return t.prototype.getSnapshotBeforeUpdate=function(){return this.updateProps(),null},t.prototype.componentDidUpdate=function(){},t.prototype.updateProps=function(){var n=this.props,r=n.visualElement,o=n.props;r&&r.setProps(o)},t.prototype.render=function(){return this.props.children},t})(Oe.Component);function N3(e){var t=e.preloadedFeatures,n=e.createVisualElement,r=e.projectionNodeConstructor,o=e.useRender,a=e.useVisualState,s=e.Component;t&&p3(t);function c(l,d){var u=M3(l);l=H(H({},l),{layoutId:u});var p=M.useContext(Lr),m=null,v=_3(l),f=p.isStatic?void 0:S3(),y=a(l,p.isStatic);return!p.isStatic&&Yn&&(v.visualElement=x3(s,y,H(H({},p),l),n),E3(f,l,v.visualElement,r||Ar.projectionNodeConstructor),m=f3(l,v.visualElement)),M.createElement(I3,{visualElement:v.visualElement,props:H(H({},p),l)},m,M.createElement(Go.Provider,{value:v},o(s,l,f,y3(y,v.visualElement,d),y,p.isStatic,v.visualElement)))}return M.forwardRef(c)}function M3(e){var t,n=e.layoutId,r=(t=M.useContext(as))===null||t===void 0?void 0:t.id;return r&&n!==void 0?r+"-"+n:n}function A3(e){function t(r,o){return o===void 0&&(o={}),N3(e(r,o))}if(typeof Proxy>"u")return t;var n=new Map;return new Proxy(t,{get:function(r,o){return n.has(o)||n.set(o,t(o)),n.get(o)}})}var L3=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","svg","switch","symbol","text","tspan","use","view"];function ss(e){return typeof e!="string"||e.includes("-")?!1:!!(L3.indexOf(e)>-1||/[A-Z]/.test(e))}var So={};function T3(e){Object.assign(So,e)}var xa=["","X","Y","Z"],O3=["translate","scale","rotate","skew"],Tr=["transformPerspective","x","y","z"];O3.forEach(function(e){return xa.forEach(function(t){return Tr.push(e+t)})});function F3(e,t){return Tr.indexOf(e)-Tr.indexOf(t)}var R3=new Set(Tr);function Wr(e){return R3.has(e)}var D3=new Set(["originX","originY","originZ"]);function G1(e){return D3.has(e)}function Y1(e,t){var n=t.layout,r=t.layoutId;return Wr(e)||G1(e)||(n||r!==void 0)&&(!!So[e]||e==="opacity")}var Pt=function(e){return!!(e!==null&&typeof e=="object"&&e.getVelocity)},z3={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"};function B3(e,t,n,r){var o=e.transform,a=e.transformKeys,s=t.enableHardwareAcceleration,c=s===void 0?!0:s,l=t.allowTransformNone,d=l===void 0?!0:l,u="";a.sort(F3);for(var p=!1,m=a.length,v=0;v<m;v++){var f=a[v];u+="".concat(z3[f]||f,"(").concat(o[f],") "),f==="z"&&(p=!0)}return!p&&c?u+="translateZ(0)":u=u.trim(),r?u=r(o,n?"":u):d&&n&&(u="none"),u}function P3(e){var t=e.originX,n=t===void 0?"50%":t,r=e.originY,o=r===void 0?"50%":r,a=e.originZ,s=a===void 0?0:a;return"".concat(n," ").concat(o," ").concat(s)}function q1(e){return e.startsWith("--")}var W3=function(e,t){return t&&typeof e=="number"?t.transform(e):e};const K1=(e,t)=>n=>Math.max(Math.min(n,t),e),sr=e=>e%1?Number(e.toFixed(5)):e,Or=/(-)?([\d]*\.?[\d])+/g,ya=/(#[0-9a-f]{6}|#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2,3}\s*\/*\s*[\d\.]+%?\))/gi,V3=/^(#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2,3}\s*\/*\s*[\d\.]+%?\))$/i;function Vr(e){return typeof e=="string"}const hn={test:e=>typeof e=="number",parse:parseFloat,transform:e=>e},cr=Object.assign(Object.assign({},hn),{transform:K1(0,1)}),Kr=Object.assign(Object.assign({},hn),{default:1}),Ur=e=>({test:t=>Vr(t)&&t.endsWith(e)&&t.split(" ").length===1,parse:parseFloat,transform:t=>`${t}${e}`}),Ht=Ur("deg"),Et=Ur("%"),ie=Ur("px"),U3=Ur("vh"),Z3=Ur("vw"),ic=Object.assign(Object.assign({},Et),{parse:e=>Et.parse(e)/100,transform:e=>Et.transform(e*100)}),cs=(e,t)=>n=>!!(Vr(n)&&V3.test(n)&&n.startsWith(e)||t&&Object.prototype.hasOwnProperty.call(n,t)),X1=(e,t,n)=>r=>{if(!Vr(r))return r;const[o,a,s,c]=r.match(Or);return{[e]:parseFloat(o),[t]:parseFloat(a),[n]:parseFloat(s),alpha:c!==void 0?parseFloat(c):1}},an={test:cs("hsl","hue"),parse:X1("hue","saturation","lightness"),transform:({hue:e,saturation:t,lightness:n,alpha:r=1})=>"hsla("+Math.round(e)+", "+Et.transform(sr(t))+", "+Et.transform(sr(n))+", "+sr(cr.transform(r))+")"},$3=K1(0,255),fi=Object.assign(Object.assign({},hn),{transform:e=>Math.round($3(e))}),Kt={test:cs("rgb","red"),parse:X1("red","green","blue"),transform:({red:e,green:t,blue:n,alpha:r=1})=>"rgba("+fi.transform(e)+", "+fi.transform(t)+", "+fi.transform(n)+", "+sr(cr.transform(r))+")"};function H3(e){let t="",n="",r="",o="";return e.length>5?(t=e.substr(1,2),n=e.substr(3,2),r=e.substr(5,2),o=e.substr(7,2)):(t=e.substr(1,1),n=e.substr(2,1),r=e.substr(3,1),o=e.substr(4,1),t+=t,n+=n,r+=r,o+=o),{red:parseInt(t,16),green:parseInt(n,16),blue:parseInt(r,16),alpha:o?parseInt(o,16)/255:1}}const Ca={test:cs("#"),parse:H3,transform:Kt.transform},He={test:e=>Kt.test(e)||Ca.test(e)||an.test(e),parse:e=>Kt.test(e)?Kt.parse(e):an.test(e)?an.parse(e):Ca.parse(e),transform:e=>Vr(e)?e:e.hasOwnProperty("red")?Kt.transform(e):an.transform(e)},J1="${c}",Q1="${n}";function G3(e){var t,n,r,o;return isNaN(e)&&Vr(e)&&((n=(t=e.match(Or))===null||t===void 0?void 0:t.length)!==null&&n!==void 0?n:0)+((o=(r=e.match(ya))===null||r===void 0?void 0:r.length)!==null&&o!==void 0?o:0)>0}function ed(e){typeof e=="number"&&(e=`${e}`);const t=[];let n=0;const r=e.match(ya);r&&(n=r.length,e=e.replace(ya,J1),t.push(...r.map(He.parse)));const o=e.match(Or);return o&&(e=e.replace(Or,Q1),t.push(...o.map(hn.parse))),{values:t,numColors:n,tokenised:e}}function td(e){return ed(e).values}function nd(e){const{values:t,numColors:n,tokenised:r}=ed(e),o=t.length;return a=>{let s=r;for(let c=0;c<o;c++)s=s.replace(c<n?J1:Q1,c<n?He.transform(a[c]):sr(a[c]));return s}}const Y3=e=>typeof e=="number"?0:e;function q3(e){const t=td(e);return nd(e)(t.map(Y3))}const Wt={test:G3,parse:td,createTransformer:nd,getAnimatableNone:q3},K3=new Set(["brightness","contrast","saturate","opacity"]);function X3(e){let[t,n]=e.slice(0,-1).split("(");if(t==="drop-shadow")return e;const[r]=n.match(Or)||[];if(!r)return e;const o=n.replace(r,"");let a=K3.has(t)?1:0;return r!==n&&(a*=100),t+"("+a+o+")"}const J3=/([a-z-]*)\(.*?\)/g,wa=Object.assign(Object.assign({},Wt),{getAnimatableNone:e=>{const t=e.match(J3);return t?t.map(X3).join(" "):e}});var ac=H(H({},hn),{transform:Math.round}),rd={borderWidth:ie,borderTopWidth:ie,borderRightWidth:ie,borderBottomWidth:ie,borderLeftWidth:ie,borderRadius:ie,radius:ie,borderTopLeftRadius:ie,borderTopRightRadius:ie,borderBottomRightRadius:ie,borderBottomLeftRadius:ie,width:ie,maxWidth:ie,height:ie,maxHeight:ie,size:ie,top:ie,right:ie,bottom:ie,left:ie,padding:ie,paddingTop:ie,paddingRight:ie,paddingBottom:ie,paddingLeft:ie,margin:ie,marginTop:ie,marginRight:ie,marginBottom:ie,marginLeft:ie,rotate:Ht,rotateX:Ht,rotateY:Ht,rotateZ:Ht,scale:Kr,scaleX:Kr,scaleY:Kr,scaleZ:Kr,skew:Ht,skewX:Ht,skewY:Ht,distance:ie,translateX:ie,translateY:ie,translateZ:ie,x:ie,y:ie,z:ie,perspective:ie,transformPerspective:ie,opacity:cr,originX:ic,originY:ic,originZ:ie,zIndex:ac,fillOpacity:cr,strokeOpacity:cr,numOctaves:ac};function ls(e,t,n,r){var o,a=e.style,s=e.vars,c=e.transform,l=e.transformKeys,d=e.transformOrigin;l.length=0;var u=!1,p=!1,m=!0;for(var v in t){var f=t[v];if(q1(v)){s[v]=f;continue}var y=rd[v],_=W3(f,y);if(Wr(v)){if(u=!0,c[v]=_,l.push(v),!m)continue;f!==((o=y.default)!==null&&o!==void 0?o:0)&&(m=!1)}else G1(v)?(d[v]=_,p=!0):a[v]=_}u?a.transform=B3(e,n,m,r):r?a.transform=r({},""):!t.transform&&a.transform&&(a.transform="none"),p&&(a.transformOrigin=P3(d))}var ds=function(){return{style:{},transform:{},transformKeys:[],transformOrigin:{},vars:{}}};function od(e,t,n){for(var r in t)!Pt(t[r])&&!Y1(r,n)&&(e[r]=t[r])}function Q3(e,t,n){var r=e.transformTemplate;return M.useMemo(function(){var o=ds();ls(o,t,{enableHardwareAcceleration:!n},r);var a=o.vars,s=o.style;return H(H({},a),s)},[t])}function e5(e,t,n){var r=e.style||{},o={};return od(o,r,e),Object.assign(o,Q3(e,t,n)),e.transformValues&&(o=e.transformValues(o)),o}function t5(e,t,n){var r={},o=e5(e,t,n);return e.drag&&e.dragListener!==!1&&(r.draggable=!1,o.userSelect=o.WebkitUserSelect=o.WebkitTouchCallout="none",o.touchAction=e.drag===!0?"none":"pan-".concat(e.drag==="x"?"y":"x")),r.style=o,r}var n5=new Set(["initial","animate","exit","style","variants","transition","transformTemplate","transformValues","custom","inherit","layout","layoutId","layoutDependency","onLayoutAnimationStart","onLayoutAnimationComplete","onLayoutMeasure","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","drag","dragControls","dragListener","dragConstraints","dragDirectionLock","dragSnapToOrigin","_dragX","_dragY","dragElastic","dragMomentum","dragPropagation","dragTransition","whileDrag","onPan","onPanStart","onPanEnd","onPanSessionStart","onTap","onTapStart","onTapCancel","onHoverStart","onHoverEnd","whileFocus","whileTap","whileHover","whileInView","onViewportEnter","onViewportLeave","viewport","layoutScroll"]);function Eo(e){return n5.has(e)}var id=function(e){return!Eo(e)};function ad(e){e&&(id=function(t){return t.startsWith("on")?!Eo(t):e(t)})}try{ad(require("@emotion/is-prop-valid").default)}catch{}function r5(e,t,n){var r={};for(var o in e)(id(o)||n===!0&&Eo(o)||!t&&!Eo(o)||e.draggable&&o.startsWith("onDrag"))&&(r[o]=e[o]);return r}function sc(e,t,n){return typeof e=="string"?e:ie.transform(t+n*e)}function o5(e,t,n){var r=sc(t,e.x,e.width),o=sc(n,e.y,e.height);return"".concat(r," ").concat(o)}var i5={offset:"strokeDashoffset",array:"strokeDasharray"};function a5(e,t,n,r,o){n===void 0&&(n=1),r===void 0&&(r=0),e.pathLength=1;var a=i5;e[a.offset]=ie.transform(-r);var s=ie.transform(t),c=ie.transform(n);e[a.array]="".concat(s," ").concat(c)}function us(e,t,n,r){var o=t.attrX,a=t.attrY,s=t.originX,c=t.originY,l=t.pathLength,d=t.pathSpacing,u=d===void 0?1:d,p=t.pathOffset,m=p===void 0?0:p,v=Qe(t,["attrX","attrY","originX","originY","pathLength","pathSpacing","pathOffset"]);ls(e,v,n,r),e.attrs=e.style,e.style={};var f=e.attrs,y=e.style,_=e.dimensions;f.transform&&(_&&(y.transform=f.transform),delete f.transform),_&&(s!==void 0||c!==void 0||y.transform)&&(y.transformOrigin=o5(_,s!==void 0?s:.5,c!==void 0?c:.5)),o!==void 0&&(f.x=o),a!==void 0&&(f.y=a),l!==void 0&&a5(f,l,u,m)}var sd=function(){return H(H({},ds()),{attrs:{}})};function s5(e,t){var n=M.useMemo(function(){var o=sd();return us(o,t,{enableHardwareAcceleration:!1},e.transformTemplate),H(H({},o.attrs),{style:H({},o.style)})},[t]);if(e.style){var r={};od(r,e.style,e),n.style=H(H({},r),n.style)}return n}function c5(e){e===void 0&&(e=!1);var t=function(n,r,o,a,s,c){var l=s.latestValues,d=ss(n)?s5:t5,u=d(r,l,c),p=r5(r,typeof n=="string",e),m=H(H(H({},p),u),{ref:a});return o&&(m["data-projection-id"]=o),M.createElement(n,m)};return t}var l5=/([a-z])([A-Z])/g,d5="$1-$2",cd=function(e){return e.replace(l5,d5).toLowerCase()};function ld(e,t,n,r){var o=t.style,a=t.vars;Object.assign(e.style,o,r&&r.getProjectionStyles(n));for(var s in a)e.style.setProperty(s,a[s])}var dd=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength"]);function ud(e,t,n,r){ld(e,t,void 0,r);for(var o in t.attrs)e.setAttribute(dd.has(o)?o:cd(o),t.attrs[o])}function ps(e){var t=e.style,n={};for(var r in t)(Pt(t[r])||Y1(r,e))&&(n[r]=t[r]);return n}function pd(e){var t=ps(e);for(var n in e)if(Pt(e[n])){var r=n==="x"||n==="y"?"attr"+n.toUpperCase():n;t[r]=e[n]}return t}function hs(e){return typeof e=="object"&&typeof e.start=="function"}var Fr=function(e){return Array.isArray(e)},u5=function(e){return!!(e&&typeof e=="object"&&e.mix&&e.toValue)},hd=function(e){return Fr(e)?e[e.length-1]||0:e};function co(e){var t=Pt(e)?e.get():e;return u5(t)?t.toValue():t}function cc(e,t,n,r){var o=e.scrapeMotionValuesFromProps,a=e.createRenderState,s=e.onMount,c={latestValues:p5(t,n,r,o),renderState:a()};return s&&(c.mount=function(l){return s(t,l,c)}),c}var fd=function(e){return function(t,n){var r=M.useContext(Go),o=M.useContext(Pr);return n?cc(e,t,r,o):qn(function(){return cc(e,t,r,o)})}};function p5(e,t,n,r){var o={},a=(n==null?void 0:n.initial)===!1,s=r(e);for(var c in s)o[c]=co(s[c]);var l=e.initial,d=e.animate,u=qo(e),p=$1(e);t&&p&&!u&&e.inherit!==!1&&(l??(l=t.initial),d??(d=t.animate));var m=a||l===!1,v=m?d:l;if(v&&typeof v!="boolean"&&!hs(v)){var f=Array.isArray(v)?v:[v];f.forEach(function(y){var _=Z1(e,y);if(_){var k=_.transitionEnd;_.transition;var x=Qe(_,["transitionEnd","transition"]);for(var N in x){var A=x[N];if(Array.isArray(A)){var S=m?A.length-1:0;A=A[S]}A!==null&&(o[N]=A)}for(var N in k)o[N]=k[N]}})}return o}var h5={useVisualState:fd({scrapeMotionValuesFromProps:pd,createRenderState:sd,onMount:function(e,t,n){var r=n.renderState,o=n.latestValues;try{r.dimensions=typeof t.getBBox=="function"?t.getBBox():t.getBoundingClientRect()}catch{r.dimensions={x:0,y:0,width:0,height:0}}us(r,o,{enableHardwareAcceleration:!1},e.transformTemplate),ud(t,r)}})},f5={useVisualState:fd({scrapeMotionValuesFromProps:ps,createRenderState:ds})};function g5(e,t,n,r,o){var a=t.forwardMotionProps,s=a===void 0?!1:a,c=ss(e)?h5:f5;return H(H({},c),{preloadedFeatures:n,useRender:c5(s),createVisualElement:r,projectionNodeConstructor:o,Component:e})}var je;(function(e){e.Animate="animate",e.Hover="whileHover",e.Tap="whileTap",e.Drag="whileDrag",e.Focus="whileFocus",e.InView="whileInView",e.Exit="exit"})(je||(je={}));function Ko(e,t,n,r){return r===void 0&&(r={passive:!0}),e.addEventListener(t,n,r),function(){return e.removeEventListener(t,n)}}function ka(e,t,n,r){M.useEffect(function(){var o=e.current;if(n&&o)return Ko(o,t,n,r)},[e,t,n,r])}function m5(e){var t=e.whileFocus,n=e.visualElement,r=function(){var a;(a=n.animationState)===null||a===void 0||a.setActive(je.Focus,!0)},o=function(){var a;(a=n.animationState)===null||a===void 0||a.setActive(je.Focus,!1)};ka(n,"focus",t?r:void 0),ka(n,"blur",t?o:void 0)}function gd(e){return typeof PointerEvent<"u"&&e instanceof PointerEvent?e.pointerType==="mouse":e instanceof MouseEvent}function md(e){var t=!!e.touches;return t}function v5(e){return function(t){var n=t instanceof MouseEvent,r=!n||n&&t.button===0;r&&e(t)}}var b5={pageX:0,pageY:0};function x5(e,t){t===void 0&&(t="page");var n=e.touches[0]||e.changedTouches[0],r=n||b5;return{x:r[t+"X"],y:r[t+"Y"]}}function y5(e,t){return t===void 0&&(t="page"),{x:e[t+"X"],y:e[t+"Y"]}}function fs(e,t){return t===void 0&&(t="page"),{point:md(e)?x5(e,t):y5(e,t)}}var vd=function(e,t){t===void 0&&(t=!1);var n=function(r){return e(r,fs(r))};return t?v5(n):n},C5=function(){return Yn&&window.onpointerdown===null},w5=function(){return Yn&&window.ontouchstart===null},k5=function(){return Yn&&window.onmousedown===null},_5={pointerdown:"mousedown",pointermove:"mousemove",pointerup:"mouseup",pointercancel:"mousecancel",pointerover:"mouseover",pointerout:"mouseout",pointerenter:"mouseenter",pointerleave:"mouseleave"},j5={pointerdown:"touchstart",pointermove:"touchmove",pointerup:"touchend",pointercancel:"touchcancel"};function bd(e){return C5()?e:w5()?j5[e]:k5()?_5[e]:e}function An(e,t,n,r){return Ko(e,bd(t),vd(n,t==="pointerdown"),r)}function Io(e,t,n,r){return ka(e,bd(t),n&&vd(n,t==="pointerdown"),r)}function xd(e){var t=null;return function(){var n=function(){t=null};return t===null?(t=e,n):!1}}var lc=xd("dragHorizontal"),dc=xd("dragVertical");function yd(e){var t=!1;if(e==="y")t=dc();else if(e==="x")t=lc();else{var n=lc(),r=dc();n&&r?t=function(){n(),r()}:(n&&n(),r&&r())}return t}function Cd(){var e=yd(!0);return e?(e(),!1):!0}function uc(e,t,n){return function(r,o){var a;!gd(r)||Cd()||((a=e.animationState)===null||a===void 0||a.setActive(je.Hover,t),n==null||n(r,o))}}function S5(e){var t=e.onHoverStart,n=e.onHoverEnd,r=e.whileHover,o=e.visualElement;Io(o,"pointerenter",t||r?uc(o,!0,t):void 0,{passive:!t}),Io(o,"pointerleave",n||r?uc(o,!1,n):void 0,{passive:!n})}var wd=function(e,t){return t?e===t?!0:wd(e,t.parentElement):!1};function gs(e){return M.useEffect(function(){return function(){return e()}},[])}const No=(e,t,n)=>Math.min(Math.max(n,e),t),gi=.001,E5=.01,I5=10,N5=.05,M5=1;function A5({duration:e=800,bounce:t=.25,velocity:n=0,mass:r=1}){let o,a,s=1-t;s=No(N5,M5,s),e=No(E5,I5,e/1e3),s<1?(o=d=>{const u=d*s,p=u*e,m=u-n,v=_a(d,s),f=Math.exp(-p);return gi-m/v*f},a=d=>{const p=d*s*e,m=p*n+n,v=Math.pow(s,2)*Math.pow(d,2)*e,f=Math.exp(-p),y=_a(Math.pow(d,2),s);return(-o(d)+gi>0?-1:1)*((m-v)*f)/y}):(o=d=>{const u=Math.exp(-d*e),p=(d-n)*e+1;return-gi+u*p},a=d=>{const u=Math.exp(-d*e),p=(n-d)*(e*e);return u*p});const c=5/e,l=T5(o,a,c);if(e=e*1e3,isNaN(l))return{stiffness:100,damping:10,duration:e};{const d=Math.pow(l,2)*r;return{stiffness:d,damping:s*2*Math.sqrt(r*d),duration:e}}}const L5=12;function T5(e,t,n){let r=n;for(let o=1;o<L5;o++)r=r-e(r)/t(r);return r}function _a(e,t){return e*Math.sqrt(1-t*t)}const O5=["duration","bounce"],F5=["stiffness","damping","mass"];function pc(e,t){return t.some(n=>e[n]!==void 0)}function R5(e){let t=Object.assign({velocity:0,stiffness:100,damping:10,mass:1,isResolvedFromDuration:!1},e);if(!pc(e,F5)&&pc(e,O5)){const n=A5(e);t=Object.assign(Object.assign(Object.assign({},t),n),{velocity:0,mass:1}),t.isResolvedFromDuration=!0}return t}function ms(e){var{from:t=0,to:n=1,restSpeed:r=2,restDelta:o}=e,a=Qe(e,["from","to","restSpeed","restDelta"]);const s={done:!1,value:t};let{stiffness:c,damping:l,mass:d,velocity:u,duration:p,isResolvedFromDuration:m}=R5(a),v=hc,f=hc;function y(){const _=u?-(u/1e3):0,k=n-t,x=l/(2*Math.sqrt(c*d)),N=Math.sqrt(c/d)/1e3;if(o===void 0&&(o=Math.min(Math.abs(n-t)/100,.4)),x<1){const A=_a(N,x);v=S=>{const R=Math.exp(-x*N*S);return n-R*((_+x*N*k)/A*Math.sin(A*S)+k*Math.cos(A*S))},f=S=>{const R=Math.exp(-x*N*S);return x*N*R*(Math.sin(A*S)*(_+x*N*k)/A+k*Math.cos(A*S))-R*(Math.cos(A*S)*(_+x*N*k)-A*k*Math.sin(A*S))}}else if(x===1)v=A=>n-Math.exp(-N*A)*(k+(_+N*k)*A);else{const A=N*Math.sqrt(x*x-1);v=S=>{const R=Math.exp(-x*N*S),z=Math.min(A*S,300);return n-R*((_+x*N*k)*Math.sinh(z)+A*k*Math.cosh(z))/A}}}return y(),{next:_=>{const k=v(_);if(m)s.done=_>=p;else{const x=f(_)*1e3,N=Math.abs(x)<=r,A=Math.abs(n-k)<=o;s.done=N&&A}return s.value=s.done?n:k,s},flipTarget:()=>{u=-u,[t,n]=[n,t],y()}}}ms.needsInterpolation=(e,t)=>typeof e=="string"||typeof t=="string";const hc=e=>0,Rr=(e,t,n)=>{const r=t-e;return r===0?1:(n-e)/r},Me=(e,t,n)=>-n*e+n*t+e;function mi(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*(2/3-n)*6:e}function fc({hue:e,saturation:t,lightness:n,alpha:r}){e/=360,t/=100,n/=100;let o=0,a=0,s=0;if(!t)o=a=s=n;else{const c=n<.5?n*(1+t):n+t-n*t,l=2*n-c;o=mi(l,c,e+1/3),a=mi(l,c,e),s=mi(l,c,e-1/3)}return{red:Math.round(o*255),green:Math.round(a*255),blue:Math.round(s*255),alpha:r}}const D5=(e,t,n)=>{const r=e*e,o=t*t;return Math.sqrt(Math.max(0,n*(o-r)+r))},z5=[Ca,Kt,an],gc=e=>z5.find(t=>t.test(e)),kd=(e,t)=>{let n=gc(e),r=gc(t),o=n.parse(e),a=r.parse(t);n===an&&(o=fc(o),n=Kt),r===an&&(a=fc(a),r=Kt);const s=Object.assign({},o);return c=>{for(const l in s)l!=="alpha"&&(s[l]=D5(o[l],a[l],c));return s.alpha=Me(o.alpha,a.alpha,c),n.transform(s)}},ja=e=>typeof e=="number",B5=(e,t)=>n=>t(e(n)),Xo=(...e)=>e.reduce(B5);function _d(e,t){return ja(e)?n=>Me(e,t,n):He.test(e)?kd(e,t):Sd(e,t)}const jd=(e,t)=>{const n=[...e],r=n.length,o=e.map((a,s)=>_d(a,t[s]));return a=>{for(let s=0;s<r;s++)n[s]=o[s](a);return n}},P5=(e,t)=>{const n=Object.assign(Object.assign({},e),t),r={};for(const o in n)e[o]!==void 0&&t[o]!==void 0&&(r[o]=_d(e[o],t[o]));return o=>{for(const a in r)n[a]=r[a](o);return n}};function mc(e){const t=Wt.parse(e),n=t.length;let r=0,o=0,a=0;for(let s=0;s<n;s++)r||typeof t[s]=="number"?r++:t[s].hue!==void 0?a++:o++;return{parsed:t,numNumbers:r,numRGB:o,numHSL:a}}const Sd=(e,t)=>{const n=Wt.createTransformer(t),r=mc(e),o=mc(t);return r.numHSL===o.numHSL&&r.numRGB===o.numRGB&&r.numNumbers>=o.numNumbers?Xo(jd(r.parsed,o.parsed),n):s=>`${s>0?t:e}`},W5=(e,t)=>n=>Me(e,t,n);function V5(e){if(typeof e=="number")return W5;if(typeof e=="string")return He.test(e)?kd:Sd;if(Array.isArray(e))return jd;if(typeof e=="object")return P5}function U5(e,t,n){const r=[],o=n||V5(e[0]),a=e.length-1;for(let s=0;s<a;s++){let c=o(e[s],e[s+1]);if(t){const l=Array.isArray(t)?t[s]:t;c=Xo(l,c)}r.push(c)}return r}function Z5([e,t],[n]){return r=>n(Rr(e,t,r))}function $5(e,t){const n=e.length,r=n-1;return o=>{let a=0,s=!1;if(o<=e[0]?s=!0:o>=e[r]&&(a=r-1,s=!0),!s){let l=1;for(;l<n&&!(e[l]>o||l===r);l++);a=l-1}const c=Rr(e[a],e[a+1],o);return t[a](c)}}function Ed(e,t,{clamp:n=!0,ease:r,mixer:o}={}){const a=e.length;_o(a===t.length),_o(!r||!Array.isArray(r)||r.length===a-1),e[0]>e[a-1]&&(e=[].concat(e),t=[].concat(t),e.reverse(),t.reverse());const s=U5(t,r,o),c=a===2?Z5(e,s):$5(e,s);return n?l=>c(No(e[0],e[a-1],l)):c}const Jo=e=>t=>1-e(1-t),vs=e=>t=>t<=.5?e(2*t)/2:(2-e(2*(1-t)))/2,H5=e=>t=>Math.pow(t,e),Id=e=>t=>t*t*((e+1)*t-e),G5=e=>{const t=Id(e);return n=>(n*=2)<1?.5*t(n):.5*(2-Math.pow(2,-10*(n-1)))},Nd=1.525,Y5=4/11,q5=8/11,K5=9/10,bs=e=>e,xs=H5(2),X5=Jo(xs),Md=vs(xs),Ad=e=>1-Math.sin(Math.acos(e)),ys=Jo(Ad),J5=vs(ys),Cs=Id(Nd),Q5=Jo(Cs),ep=vs(Cs),tp=G5(Nd),np=4356/361,rp=35442/1805,op=16061/1805,Mo=e=>{if(e===1||e===0)return e;const t=e*e;return e<Y5?7.5625*t:e<q5?9.075*t-9.9*e+3.4:e<K5?np*t-rp*e+op:10.8*e*e-20.52*e+10.72},ip=Jo(Mo),ap=e=>e<.5?.5*(1-Mo(1-e*2)):.5*Mo(e*2-1)+.5;function sp(e,t){return e.map(()=>t||Md).splice(0,e.length-1)}function cp(e){const t=e.length;return e.map((n,r)=>r!==0?r/(t-1):0)}function lp(e,t){return e.map(n=>n*t)}function lo({from:e=0,to:t=1,ease:n,offset:r,duration:o=300}){const a={done:!1,value:e},s=Array.isArray(t)?t:[e,t],c=lp(r&&r.length===s.length?r:cp(s),o);function l(){return Ed(c,s,{ease:Array.isArray(n)?n:sp(s,n)})}let d=l();return{next:u=>(a.value=d(u),a.done=u>=o,a),flipTarget:()=>{s.reverse(),d=l()}}}function dp({velocity:e=0,from:t=0,power:n=.8,timeConstant:r=350,restDelta:o=.5,modifyTarget:a}){const s={done:!1,value:t};let c=n*e;const l=t+c,d=a===void 0?l:a(l);return d!==l&&(c=d-t),{next:u=>{const p=-c*Math.exp(-u/r);return s.done=!(p>o||p<-o),s.value=s.done?d:d+p,s},flipTarget:()=>{}}}const vc={keyframes:lo,spring:ms,decay:dp};function up(e){if(Array.isArray(e.to))return lo;if(vc[e.type])return vc[e.type];const t=new Set(Object.keys(e));return t.has("ease")||t.has("duration")&&!t.has("dampingRatio")?lo:t.has("dampingRatio")||t.has("stiffness")||t.has("mass")||t.has("damping")||t.has("restSpeed")||t.has("restDelta")?ms:lo}const Ld=1/60*1e3,pp=typeof performance<"u"?()=>performance.now():()=>Date.now(),Td=typeof window<"u"?e=>window.requestAnimationFrame(e):e=>setTimeout(()=>e(pp()),Ld);function hp(e){let t=[],n=[],r=0,o=!1,a=!1;const s=new WeakSet,c={schedule:(l,d=!1,u=!1)=>{const p=u&&o,m=p?t:n;return d&&s.add(l),m.indexOf(l)===-1&&(m.push(l),p&&o&&(r=t.length)),l},cancel:l=>{const d=n.indexOf(l);d!==-1&&n.splice(d,1),s.delete(l)},process:l=>{if(o){a=!0;return}if(o=!0,[t,n]=[n,t],n.length=0,r=t.length,r)for(let d=0;d<r;d++){const u=t[d];u(l),s.has(u)&&(c.schedule(u),e())}o=!1,a&&(a=!1,c.process(l))}};return c}const fp=40;let Sa=!0,Dr=!1,Ea=!1;const Ln={delta:0,timestamp:0},Zr=["read","update","preRender","render","postRender"],Qo=Zr.reduce((e,t)=>(e[t]=hp(()=>Dr=!0),e),{}),bt=Zr.reduce((e,t)=>{const n=Qo[t];return e[t]=(r,o=!1,a=!1)=>(Dr||mp(),n.schedule(r,o,a)),e},{}),zn=Zr.reduce((e,t)=>(e[t]=Qo[t].cancel,e),{}),vi=Zr.reduce((e,t)=>(e[t]=()=>Qo[t].process(Ln),e),{}),gp=e=>Qo[e].process(Ln),Od=e=>{Dr=!1,Ln.delta=Sa?Ld:Math.max(Math.min(e-Ln.timestamp,fp),1),Ln.timestamp=e,Ea=!0,Zr.forEach(gp),Ea=!1,Dr&&(Sa=!1,Td(Od))},mp=()=>{Dr=!0,Sa=!0,Ea||Td(Od)},Ao=()=>Ln;function Fd(e,t,n=0){return e-t-n}function vp(e,t,n=0,r=!0){return r?Fd(t+-e,t,n):t-(e-t)+n}function bp(e,t,n,r){return r?e>=t+n:e<=-n}const xp=e=>{const t=({delta:n})=>e(n);return{start:()=>bt.update(t,!0),stop:()=>zn.update(t)}};function Rd(e){var t,n,{from:r,autoplay:o=!0,driver:a=xp,elapsed:s=0,repeat:c=0,repeatType:l="loop",repeatDelay:d=0,onPlay:u,onStop:p,onComplete:m,onRepeat:v,onUpdate:f}=e,y=Qe(e,["from","autoplay","driver","elapsed","repeat","repeatType","repeatDelay","onPlay","onStop","onComplete","onRepeat","onUpdate"]);let{to:_}=y,k,x=0,N=y.duration,A,S=!1,R=!0,z;const h=up(y);!((n=(t=h).needsInterpolation)===null||n===void 0)&&n.call(t,r,_)&&(z=Ed([0,100],[r,_],{clamp:!1}),r=0,_=100);const g=h(Object.assign(Object.assign({},y),{from:r,to:_}));function b(){x++,l==="reverse"?(R=x%2===0,s=vp(s,N,d,R)):(s=Fd(s,N,d),l==="mirror"&&g.flipTarget()),S=!1,v&&v()}function w(){k.stop(),m&&m()}function C(I){if(R||(I=-I),s+=I,!S){const E=g.next(Math.max(0,s));A=E.value,z&&(A=z(A)),S=R?E.done:s<=0}f==null||f(A),S&&(x===0&&(N??(N=s)),x<c?bp(s,N,d,R)&&b():w())}function j(){u==null||u(),k=a(C),k.start()}return o&&j(),{stop:()=>{p==null||p(),k.stop()}}}function Dd(e,t){return t?e*(1e3/t):0}function yp({from:e=0,velocity:t=0,min:n,max:r,power:o=.8,timeConstant:a=750,bounceStiffness:s=500,bounceDamping:c=10,restDelta:l=1,modifyTarget:d,driver:u,onUpdate:p,onComplete:m,onStop:v}){let f;function y(N){return n!==void 0&&N<n||r!==void 0&&N>r}function _(N){return n===void 0?r:r===void 0||Math.abs(n-N)<Math.abs(r-N)?n:r}function k(N){f==null||f.stop(),f=Rd(Object.assign(Object.assign({},N),{driver:u,onUpdate:A=>{var S;p==null||p(A),(S=N.onUpdate)===null||S===void 0||S.call(N,A)},onComplete:m,onStop:v}))}function x(N){k(Object.assign({type:"spring",stiffness:s,damping:c,restDelta:l},N))}if(y(e))x({from:e,velocity:t,to:_(e)});else{let N=o*t+e;typeof d<"u"&&(N=d(N));const A=_(N),S=A===n?-1:1;let R,z;const h=g=>{R=z,z=g,t=Dd(g-R,Ao().delta),(S===1&&g>A||S===-1&&g<A)&&x({from:g,to:A,velocity:t})};k({type:"decay",from:e,velocity:t,timeConstant:a,power:o,restDelta:l,modifyTarget:d,onUpdate:y(N)?h:void 0})}return{stop:()=>f==null?void 0:f.stop()}}const Ia=e=>e.hasOwnProperty("x")&&e.hasOwnProperty("y"),bc=e=>Ia(e)&&e.hasOwnProperty("z"),Xr=(e,t)=>Math.abs(e-t);function zd(e,t){if(ja(e)&&ja(t))return Xr(e,t);if(Ia(e)&&Ia(t)){const n=Xr(e.x,t.x),r=Xr(e.y,t.y),o=bc(e)&&bc(t)?Xr(e.z,t.z):0;return Math.sqrt(Math.pow(n,2)+Math.pow(r,2)+Math.pow(o,2))}}const Bd=(e,t)=>1-3*t+3*e,Pd=(e,t)=>3*t-6*e,Wd=e=>3*e,Lo=(e,t,n)=>((Bd(t,n)*e+Pd(t,n))*e+Wd(t))*e,Vd=(e,t,n)=>3*Bd(t,n)*e*e+2*Pd(t,n)*e+Wd(t),Cp=1e-7,wp=10;function kp(e,t,n,r,o){let a,s,c=0;do s=t+(n-t)/2,a=Lo(s,r,o)-e,a>0?n=s:t=s;while(Math.abs(a)>Cp&&++c<wp);return s}const _p=8,jp=.001;function Sp(e,t,n,r){for(let o=0;o<_p;++o){const a=Vd(t,n,r);if(a===0)return t;const s=Lo(t,n,r)-e;t-=s/a}return t}const uo=11,Jr=1/(uo-1);function Ep(e,t,n,r){if(e===t&&n===r)return bs;const o=new Float32Array(uo);for(let s=0;s<uo;++s)o[s]=Lo(s*Jr,e,n);function a(s){let c=0,l=1;const d=uo-1;for(;l!==d&&o[l]<=s;++l)c+=Jr;--l;const u=(s-o[l])/(o[l+1]-o[l]),p=c+u*Jr,m=Vd(p,e,n);return m>=jp?Sp(s,p,e,n):m===0?p:kp(s,c,c+Jr,e,n)}return s=>s===0||s===1?s:Lo(a(s),t,r)}function Ip(e){var t=e.onTap,n=e.onTapStart,r=e.onTapCancel,o=e.whileTap,a=e.visualElement,s=t||n||r||o,c=M.useRef(!1),l=M.useRef(null),d={passive:!(n||t||r||f)};function u(){var y;(y=l.current)===null||y===void 0||y.call(l),l.current=null}function p(){var y;return u(),c.current=!1,(y=a.animationState)===null||y===void 0||y.setActive(je.Tap,!1),!Cd()}function m(y,_){p()&&(wd(a.getInstance(),y.target)?t==null||t(y,_):r==null||r(y,_))}function v(y,_){p()&&(r==null||r(y,_))}function f(y,_){var k;u(),!c.current&&(c.current=!0,l.current=Xo(An(window,"pointerup",m,d),An(window,"pointercancel",v,d)),(k=a.animationState)===null||k===void 0||k.setActive(je.Tap,!0),n==null||n(y,_))}Io(a,"pointerdown",s?f:void 0,d),gs(u)}var Na=new WeakMap,bi=new WeakMap,Np=function(e){var t;(t=Na.get(e.target))===null||t===void 0||t(e)},Mp=function(e){e.forEach(Np)};function Ap(e){var t=e.root,n=Qe(e,["root"]),r=t||document;bi.has(r)||bi.set(r,{});var o=bi.get(r),a=JSON.stringify(n);return o[a]||(o[a]=new IntersectionObserver(Mp,H({root:t},n))),o[a]}function Lp(e,t,n){var r=Ap(t);return Na.set(e,n),r.observe(e),function(){Na.delete(e),r.unobserve(e)}}function Tp(e){var t=e.visualElement,n=e.whileInView,r=e.onViewportEnter,o=e.onViewportLeave,a=e.viewport,s=a===void 0?{}:a,c=M.useRef({hasEnteredView:!1,isInView:!1}),l=!!(n||r||o);s.once&&c.current.hasEnteredView&&(l=!1);var d=typeof IntersectionObserver>"u"?Rp:Fp;d(l,c.current,t,s)}var Op={some:0,all:1};function Fp(e,t,n,r){var o=r.root,a=r.margin,s=r.amount,c=s===void 0?"some":s,l=r.once;M.useEffect(function(){if(e){var d={root:o==null?void 0:o.current,rootMargin:a,threshold:typeof c=="number"?c:Op[c]},u=function(p){var m,v=p.isIntersecting;if(t.isInView!==v&&(t.isInView=v,!(l&&!v&&t.hasEnteredView))){v&&(t.hasEnteredView=!0),(m=n.animationState)===null||m===void 0||m.setActive(je.InView,v);var f=n.getProps(),y=v?f.onViewportEnter:f.onViewportLeave;y==null||y(p)}};return Lp(n.getInstance(),d,u)}},[e,o,a,c])}function Rp(e,t,n,r){var o=r.fallback,a=o===void 0?!0:o;M.useEffect(function(){!e||!a||requestAnimationFrame(function(){var s;t.hasEnteredView=!0;var c=n.getProps().onViewportEnter;c==null||c(null),(s=n.animationState)===null||s===void 0||s.setActive(je.InView,!0)})},[e])}var Xt=function(e){return function(t){return e(t),null}},Dp={inView:Xt(Tp),tap:Xt(Ip),focus:Xt(m5),hover:Xt(S5)},zp=0,Bp=function(){return zp++},Ud=function(){return qn(Bp)};function Zd(){var e=M.useContext(Pr);if(e===null)return[!0,null];var t=e.isPresent,n=e.onExitComplete,r=e.register,o=Ud();M.useEffect(function(){return r(o)},[]);var a=function(){return n==null?void 0:n(o)};return!t&&n?[!1,a]:[!0]}function $d(e,t){if(!Array.isArray(t))return!1;var n=t.length;if(n!==e.length)return!1;for(var r=0;r<n;r++)if(t[r]!==e[r])return!1;return!0}var To=function(e){return e*1e3},Pp={linear:bs,easeIn:xs,easeInOut:Md,easeOut:X5,circIn:Ad,circInOut:J5,circOut:ys,backIn:Cs,backInOut:ep,backOut:Q5,anticipate:tp,bounceIn:ip,bounceInOut:ap,bounceOut:Mo},xc=function(e){if(Array.isArray(e)){_o(e.length===4);var t=Ae(e,4),n=t[0],r=t[1],o=t[2],a=t[3];return Ep(n,r,o,a)}else if(typeof e=="string")return Pp[e];return e},Wp=function(e){return Array.isArray(e)&&typeof e[0]!="number"},yc=function(e,t){return e==="zIndex"?!1:!!(typeof t=="number"||Array.isArray(t)||typeof t=="string"&&Wt.test(t)&&!t.startsWith("url("))},rn=function(){return{type:"spring",stiffness:500,damping:25,restSpeed:10}},Qr=function(e){return{type:"spring",stiffness:550,damping:e===0?2*Math.sqrt(550):30,restSpeed:10}},xi=function(){return{type:"keyframes",ease:"linear",duration:.3}},Vp=function(e){return{type:"keyframes",duration:.8,values:e}},Cc={x:rn,y:rn,z:rn,rotate:rn,rotateX:rn,rotateY:rn,rotateZ:rn,scaleX:Qr,scaleY:Qr,scale:Qr,opacity:xi,backgroundColor:xi,color:xi,default:Qr},Up=function(e,t){var n;return Fr(t)?n=Vp:n=Cc[e]||Cc.default,H({to:t},n(t))},Zp=H(H({},rd),{color:He,backgroundColor:He,outlineColor:He,fill:He,stroke:He,borderColor:He,borderTopColor:He,borderRightColor:He,borderBottomColor:He,borderLeftColor:He,filter:wa,WebkitFilter:wa}),ws=function(e){return Zp[e]};function ks(e,t){var n,r=ws(e);return r!==wa&&(r=Wt),(n=r.getAnimatableNone)===null||n===void 0?void 0:n.call(r,t)}function $p(e){e.when,e.delay,e.delayChildren,e.staggerChildren,e.staggerDirection,e.repeat,e.repeatType,e.repeatDelay,e.from;var t=Qe(e,["when","delay","delayChildren","staggerChildren","staggerDirection","repeat","repeatType","repeatDelay","from"]);return!!Object.keys(t).length}function Hp(e){var t=e.ease,n=e.times,r=e.yoyo,o=e.flip,a=e.loop,s=Qe(e,["ease","times","yoyo","flip","loop"]),c=H({},s);return n&&(c.offset=n),s.duration&&(c.duration=To(s.duration)),s.repeatDelay&&(c.repeatDelay=To(s.repeatDelay)),t&&(c.ease=Wp(t)?t.map(xc):xc(t)),s.type==="tween"&&(c.type="keyframes"),(r||a||o)&&(r?c.repeatType="reverse":a?c.repeatType="loop":o&&(c.repeatType="mirror"),c.repeat=a||r||o||s.repeat),s.type!=="spring"&&(c.type="keyframes"),c}function Gp(e,t){var n,r,o=_s(e,t)||{};return(r=(n=o.delay)!==null&&n!==void 0?n:e.delay)!==null&&r!==void 0?r:0}function Yp(e){return Array.isArray(e.to)&&e.to[0]===null&&(e.to=vt([],Ae(e.to),!1),e.to[0]=e.from),e}function qp(e,t,n){var r;return Array.isArray(t.to)&&((r=e.duration)!==null&&r!==void 0||(e.duration=.8)),Yp(t),$p(e)||(e=H(H({},e),Up(n,t.to))),H(H({},t),Hp(e))}function Kp(e,t,n,r,o){var a,s=_s(r,e),c=(a=s.from)!==null&&a!==void 0?a:t.get(),l=yc(e,n);c==="none"&&l&&typeof n=="string"?c=ks(e,n):wc(c)&&typeof n=="string"?c=kc(n):!Array.isArray(n)&&wc(n)&&typeof c=="string"&&(n=kc(c));var d=yc(e,c);function u(){var m={from:c,to:n,velocity:t.getVelocity(),onComplete:o,onUpdate:function(v){return t.set(v)}};return s.type==="inertia"||s.type==="decay"?yp(H(H({},m),s)):Rd(H(H({},qp(s,m,e)),{onUpdate:function(v){var f;m.onUpdate(v),(f=s.onUpdate)===null||f===void 0||f.call(s,v)},onComplete:function(){var v;m.onComplete(),(v=s.onComplete)===null||v===void 0||v.call(s)}}))}function p(){var m,v,f=hd(n);return t.set(f),o(),(m=s==null?void 0:s.onUpdate)===null||m===void 0||m.call(s,f),(v=s==null?void 0:s.onComplete)===null||v===void 0||v.call(s),{stop:function(){}}}return!d||!l||s.type===!1?p:u}function wc(e){return e===0||typeof e=="string"&&parseFloat(e)===0&&e.indexOf(" ")===-1}function kc(e){return typeof e=="number"?0:ks("",e)}function _s(e,t){return e[t]||e.default||e}function js(e,t,n,r){return r===void 0&&(r={}),t.start(function(o){var a,s,c=Kp(e,t,n,r,o),l=Gp(r,e),d=function(){return s=c()};return l?a=window.setTimeout(d,To(l)):d(),function(){clearTimeout(a),s==null||s.stop()}})}var Xp=function(e){return/^\-?\d*\.?\d+$/.test(e)},Jp=function(e){return/^0[^.\s]+$/.test(e)};function Ss(e,t){e.indexOf(t)===-1&&e.push(t)}function Es(e,t){var n=e.indexOf(t);n>-1&&e.splice(n,1)}var lr=(function(){function e(){this.subscriptions=[]}return e.prototype.add=function(t){var n=this;return Ss(this.subscriptions,t),function(){return Es(n.subscriptions,t)}},e.prototype.notify=function(t,n,r){var o=this.subscriptions.length;if(o)if(o===1)this.subscriptions[0](t,n,r);else for(var a=0;a<o;a++){var s=this.subscriptions[a];s&&s(t,n,r)}},e.prototype.getSize=function(){return this.subscriptions.length},e.prototype.clear=function(){this.subscriptions.length=0},e})(),Qp=function(e){return!isNaN(parseFloat(e))},e4=(function(){function e(t){var n=this;this.version="6.5.1",this.timeDelta=0,this.lastUpdated=0,this.updateSubscribers=new lr,this.velocityUpdateSubscribers=new lr,this.renderSubscribers=new lr,this.canTrackVelocity=!1,this.updateAndNotify=function(r,o){o===void 0&&(o=!0),n.prev=n.current,n.current=r;var a=Ao(),s=a.delta,c=a.timestamp;n.lastUpdated!==c&&(n.timeDelta=s,n.lastUpdated=c,bt.postRender(n.scheduleVelocityCheck)),n.prev!==n.current&&n.updateSubscribers.notify(n.current),n.velocityUpdateSubscribers.getSize()&&n.velocityUpdateSubscribers.notify(n.getVelocity()),o&&n.renderSubscribers.notify(n.current)},this.scheduleVelocityCheck=function(){return bt.postRender(n.velocityCheck)},this.velocityCheck=function(r){var o=r.timestamp;o!==n.lastUpdated&&(n.prev=n.current,n.velocityUpdateSubscribers.notify(n.getVelocity()))},this.hasAnimated=!1,this.prev=this.current=t,this.canTrackVelocity=Qp(this.current)}return e.prototype.onChange=function(t){return this.updateSubscribers.add(t)},e.prototype.clearListeners=function(){this.updateSubscribers.clear()},e.prototype.onRenderRequest=function(t){return t(this.get()),this.renderSubscribers.add(t)},e.prototype.attach=function(t){this.passiveEffect=t},e.prototype.set=function(t,n){n===void 0&&(n=!0),!n||!this.passiveEffect?this.updateAndNotify(t,n):this.passiveEffect(t,this.updateAndNotify)},e.prototype.get=function(){return this.current},e.prototype.getPrevious=function(){return this.prev},e.prototype.getVelocity=function(){return this.canTrackVelocity?Dd(parseFloat(this.current)-parseFloat(this.prev),this.timeDelta):0},e.prototype.start=function(t){var n=this;return this.stop(),new Promise(function(r){n.hasAnimated=!0,n.stopAnimation=t(r)}).then(function(){return n.clearAnimation()})},e.prototype.stop=function(){this.stopAnimation&&this.stopAnimation(),this.clearAnimation()},e.prototype.isAnimating=function(){return!!this.stopAnimation},e.prototype.clearAnimation=function(){this.stopAnimation=null},e.prototype.destroy=function(){this.updateSubscribers.clear(),this.renderSubscribers.clear(),this.stop()},e})();function Bn(e){return new e4(e)}var Hd=function(e){return function(t){return t.test(e)}},t4={test:function(e){return e==="auto"},parse:function(e){return e}},Gd=[hn,ie,Et,Ht,Z3,U3,t4],Qn=function(e){return Gd.find(Hd(e))},n4=vt(vt([],Ae(Gd),!1),[He,Wt],!1),r4=function(e){return n4.find(Hd(e))};function o4(e,t,n){e.hasValue(t)?e.getValue(t).set(n):e.addValue(t,Bn(n))}function i4(e,t){var n=Yo(e,t),r=n?e.makeTargetAnimatable(n,!1):{},o=r.transitionEnd,a=o===void 0?{}:o;r.transition;var s=Qe(r,["transitionEnd","transition"]);s=H(H({},s),a);for(var c in s){var l=hd(s[c]);o4(e,c,l)}}function a4(e,t,n){var r,o,a,s,c=Object.keys(t).filter(function(v){return!e.hasValue(v)}),l=c.length;if(l)for(var d=0;d<l;d++){var u=c[d],p=t[u],m=null;Array.isArray(p)&&(m=p[0]),m===null&&(m=(o=(r=n[u])!==null&&r!==void 0?r:e.readValue(u))!==null&&o!==void 0?o:t[u]),m!=null&&(typeof m=="string"&&(Xp(m)||Jp(m))?m=parseFloat(m):!r4(m)&&Wt.test(p)&&(m=ks(u,p)),e.addValue(u,Bn(m)),(a=(s=n)[u])!==null&&a!==void 0||(s[u]=m),e.setBaseTarget(u,m))}}function s4(e,t){if(t){var n=t[e]||t.default||t;return n.from}}function c4(e,t,n){var r,o,a={};for(var s in e)a[s]=(r=s4(s,t))!==null&&r!==void 0?r:(o=n.getValue(s))===null||o===void 0?void 0:o.get();return a}function l4(e,t,n){n===void 0&&(n={}),e.notifyAnimationStart(t);var r;if(Array.isArray(t)){var o=t.map(function(s){return Ma(e,s,n)});r=Promise.all(o)}else if(typeof t=="string")r=Ma(e,t,n);else{var a=typeof t=="function"?Yo(e,t,n.custom):t;r=Yd(e,a,n)}return r.then(function(){return e.notifyAnimationComplete(t)})}function Ma(e,t,n){var r;n===void 0&&(n={});var o=Yo(e,t,n.custom),a=(o||{}).transition,s=a===void 0?e.getDefaultTransition()||{}:a;n.transitionOverride&&(s=n.transitionOverride);var c=o?function(){return Yd(e,o,n)}:function(){return Promise.resolve()},l=!((r=e.variantChildren)===null||r===void 0)&&r.size?function(v){v===void 0&&(v=0);var f=s.delayChildren,y=f===void 0?0:f,_=s.staggerChildren,k=s.staggerDirection;return d4(e,t,y+v,_,k,n)}:function(){return Promise.resolve()},d=s.when;if(d){var u=Ae(d==="beforeChildren"?[c,l]:[l,c],2),p=u[0],m=u[1];return p().then(m)}else return Promise.all([c(),l(n.delay)])}function Yd(e,t,n){var r,o=n===void 0?{}:n,a=o.delay,s=a===void 0?0:a,c=o.transitionOverride,l=o.type,d=e.makeTargetAnimatable(t),u=d.transition,p=u===void 0?e.getDefaultTransition():u,m=d.transitionEnd,v=Qe(d,["transition","transitionEnd"]);c&&(p=c);var f=[],y=l&&((r=e.animationState)===null||r===void 0?void 0:r.getState()[l]);for(var _ in v){var k=e.getValue(_),x=v[_];if(!(!k||x===void 0||y&&p4(y,_))){var N=H({delay:s},p);e.shouldReduceMotion&&Wr(_)&&(N=H(H({},N),{type:!1,delay:0}));var A=js(_,k,x,N);f.push(A)}}return Promise.all(f).then(function(){m&&i4(e,m)})}function d4(e,t,n,r,o,a){n===void 0&&(n=0),r===void 0&&(r=0),o===void 0&&(o=1);var s=[],c=(e.variantChildren.size-1)*r,l=o===1?function(d){return d===void 0&&(d=0),d*r}:function(d){return d===void 0&&(d=0),c-d*r};return Array.from(e.variantChildren).sort(u4).forEach(function(d,u){s.push(Ma(d,t,H(H({},a),{delay:n+l(u)})).then(function(){return d.notifyAnimationComplete(t)}))}),Promise.all(s)}function u4(e,t){return e.sortNodePosition(t)}function p4(e,t){var n=e.protectedKeys,r=e.needsAnimating,o=n.hasOwnProperty(t)&&r[t]!==!0;return r[t]=!1,o}var Is=[je.Animate,je.InView,je.Focus,je.Hover,je.Tap,je.Drag,je.Exit],h4=vt([],Ae(Is),!1).reverse(),f4=Is.length;function g4(e){return function(t){return Promise.all(t.map(function(n){var r=n.animation,o=n.options;return l4(e,r,o)}))}}function m4(e){var t=g4(e),n=b4(),r={},o=!0,a=function(u,p){var m=Yo(e,p);if(m){m.transition;var v=m.transitionEnd,f=Qe(m,["transition","transitionEnd"]);u=H(H(H({},u),f),v)}return u};function s(u){return r[u]!==void 0}function c(u){t=u(e)}function l(u,p){for(var m,v=e.getProps(),f=e.getVariantContext(!0)||{},y=[],_=new Set,k={},x=1/0,N=function(z){var h=h4[z],g=n[h],b=(m=v[h])!==null&&m!==void 0?m:f[h],w=ut(b),C=h===p?g.isActive:null;C===!1&&(x=z);var j=b===f[h]&&b!==v[h]&&w;if(j&&o&&e.manuallyAnimateOnMount&&(j=!1),g.protectedKeys=H({},k),!g.isActive&&C===null||!b&&!g.prevProp||hs(b)||typeof b=="boolean")return"continue";var I=v4(g.prevProp,b),E=I||h===p&&g.isActive&&!j&&w||z>x&&w,L=Array.isArray(b)?b:[b],O=L.reduce(a,{});C===!1&&(O={});var F=g.prevResolvedValues,U=F===void 0?{}:F,q=H(H({},U),O),Y=function(W){E=!0,_.delete(W),g.needsAnimating[W]=!0};for(var Z in q){var V=O[Z],P=U[Z];k.hasOwnProperty(Z)||(V!==P?Fr(V)&&Fr(P)?!$d(V,P)||I?Y(Z):g.protectedKeys[Z]=!0:V!==void 0?Y(Z):_.add(Z):V!==void 0&&_.has(Z)?Y(Z):g.protectedKeys[Z]=!0)}g.prevProp=b,g.prevResolvedValues=O,g.isActive&&(k=H(H({},k),O)),o&&e.blockInitialAnimation&&(E=!1),E&&!j&&y.push.apply(y,vt([],Ae(L.map(function(W){return{animation:W,options:H({type:h},u)}})),!1))},A=0;A<f4;A++)N(A);if(r=H({},k),_.size){var S={};_.forEach(function(z){var h=e.getBaseTarget(z);h!==void 0&&(S[z]=h)}),y.push({animation:S})}var R=!!y.length;return o&&v.initial===!1&&!e.manuallyAnimateOnMount&&(R=!1),o=!1,R?t(y):Promise.resolve()}function d(u,p,m){var v;if(n[u].isActive===p)return Promise.resolve();(v=e.variantChildren)===null||v===void 0||v.forEach(function(_){var k;return(k=_.animationState)===null||k===void 0?void 0:k.setActive(u,p)}),n[u].isActive=p;var f=l(m,u);for(var y in n)n[y].protectedKeys={};return f}return{isAnimated:s,animateChanges:l,setActive:d,setAnimateFunction:c,getState:function(){return n}}}function v4(e,t){return typeof t=="string"?t!==e:U1(t)?!$d(t,e):!1}function on(e){return e===void 0&&(e=!1),{isActive:e,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function b4(){var e;return e={},e[je.Animate]=on(!0),e[je.InView]=on(),e[je.Hover]=on(),e[je.Tap]=on(),e[je.Drag]=on(),e[je.Focus]=on(),e[je.Exit]=on(),e}var x4={animation:Xt(function(e){var t=e.visualElement,n=e.animate;t.animationState||(t.animationState=m4(t)),hs(n)&&M.useEffect(function(){return n.subscribe(t)},[n])}),exit:Xt(function(e){var t=e.custom,n=e.visualElement,r=Ae(Zd(),2),o=r[0],a=r[1],s=M.useContext(Pr);M.useEffect(function(){var c,l;n.isPresent=o;var d=(c=n.animationState)===null||c===void 0?void 0:c.setActive(je.Exit,!o,{custom:(l=s==null?void 0:s.custom)!==null&&l!==void 0?l:t});!o&&(d==null||d.then(a))},[o])})},qd=(function(){function e(t,n,r){var o=this,a=r===void 0?{}:r,s=a.transformPagePoint;if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.handlers={},this.updatePoint=function(){if(o.lastMoveEvent&&o.lastMoveEventInfo){var m=Ci(o.lastMoveEventInfo,o.history),v=o.startEvent!==null,f=zd(m.offset,{x:0,y:0})>=3;if(!(!v&&!f)){var y=m.point,_=Ao().timestamp;o.history.push(H(H({},y),{timestamp:_}));var k=o.handlers,x=k.onStart,N=k.onMove;v||(x&&x(o.lastMoveEvent,m),o.startEvent=o.lastMoveEvent),N&&N(o.lastMoveEvent,m)}}},this.handlePointerMove=function(m,v){if(o.lastMoveEvent=m,o.lastMoveEventInfo=yi(v,o.transformPagePoint),gd(m)&&m.buttons===0){o.handlePointerUp(m,v);return}bt.update(o.updatePoint,!0)},this.handlePointerUp=function(m,v){o.end();var f=o.handlers,y=f.onEnd,_=f.onSessionEnd,k=Ci(yi(v,o.transformPagePoint),o.history);o.startEvent&&y&&y(m,k),_&&_(m,k)},!(md(t)&&t.touches.length>1)){this.handlers=n,this.transformPagePoint=s;var c=fs(t),l=yi(c,this.transformPagePoint),d=l.point,u=Ao().timestamp;this.history=[H(H({},d),{timestamp:u})];var p=n.onSessionStart;p&&p(t,Ci(l,this.history)),this.removeListeners=Xo(An(window,"pointermove",this.handlePointerMove),An(window,"pointerup",this.handlePointerUp),An(window,"pointercancel",this.handlePointerUp))}}return e.prototype.updateHandlers=function(t){this.handlers=t},e.prototype.end=function(){this.removeListeners&&this.removeListeners(),zn.update(this.updatePoint)},e})();function yi(e,t){return t?{point:t(e.point)}:e}function _c(e,t){return{x:e.x-t.x,y:e.y-t.y}}function Ci(e,t){var n=e.point;return{point:n,delta:_c(n,Kd(t)),offset:_c(n,y4(t)),velocity:C4(t,.1)}}function y4(e){return e[0]}function Kd(e){return e[e.length-1]}function C4(e,t){if(e.length<2)return{x:0,y:0};for(var n=e.length-1,r=null,o=Kd(e);n>=0&&(r=e[n],!(o.timestamp-r.timestamp>To(t)));)n--;if(!r)return{x:0,y:0};var a=(o.timestamp-r.timestamp)/1e3;if(a===0)return{x:0,y:0};var s={x:(o.x-r.x)/a,y:(o.y-r.y)/a};return s.x===1/0&&(s.x=0),s.y===1/0&&(s.y=0),s}function Vt(e){return e.max-e.min}function jc(e,t,n){return t===void 0&&(t=0),n===void 0&&(n=.01),zd(e,t)<n}function Sc(e,t,n,r){r===void 0&&(r=.5),e.origin=r,e.originPoint=Me(t.min,t.max,e.origin),e.scale=Vt(n)/Vt(t),(jc(e.scale,1,1e-4)||isNaN(e.scale))&&(e.scale=1),e.translate=Me(n.min,n.max,e.origin)-e.originPoint,(jc(e.translate)||isNaN(e.translate))&&(e.translate=0)}function dr(e,t,n,r){Sc(e.x,t.x,n.x,r==null?void 0:r.originX),Sc(e.y,t.y,n.y,r==null?void 0:r.originY)}function Ec(e,t,n){e.min=n.min+t.min,e.max=e.min+Vt(t)}function w4(e,t,n){Ec(e.x,t.x,n.x),Ec(e.y,t.y,n.y)}function Ic(e,t,n){e.min=t.min-n.min,e.max=e.min+Vt(t)}function ur(e,t,n){Ic(e.x,t.x,n.x),Ic(e.y,t.y,n.y)}function k4(e,t,n){var r=t.min,o=t.max;return r!==void 0&&e<r?e=n?Me(r,e,n.min):Math.max(e,r):o!==void 0&&e>o&&(e=n?Me(o,e,n.max):Math.min(e,o)),e}function Nc(e,t,n){return{min:t!==void 0?e.min+t:void 0,max:n!==void 0?e.max+n-(e.max-e.min):void 0}}function _4(e,t){var n=t.top,r=t.left,o=t.bottom,a=t.right;return{x:Nc(e.x,r,a),y:Nc(e.y,n,o)}}function Mc(e,t){var n,r=t.min-e.min,o=t.max-e.max;return t.max-t.min<e.max-e.min&&(n=Ae([o,r],2),r=n[0],o=n[1]),{min:r,max:o}}function j4(e,t){return{x:Mc(e.x,t.x),y:Mc(e.y,t.y)}}function S4(e,t){var n=.5,r=Vt(e),o=Vt(t);return o>r?n=Rr(t.min,t.max-r,e.min):r>o&&(n=Rr(e.min,e.max-o,t.min)),No(0,1,n)}function E4(e,t){var n={};return t.min!==void 0&&(n.min=t.min-e.min),t.max!==void 0&&(n.max=t.max-e.min),n}var Aa=.35;function I4(e){return e===void 0&&(e=Aa),e===!1?e=0:e===!0&&(e=Aa),{x:Ac(e,"left","right"),y:Ac(e,"top","bottom")}}function Ac(e,t,n){return{min:Lc(e,t),max:Lc(e,n)}}function Lc(e,t){var n;return typeof e=="number"?e:(n=e[t])!==null&&n!==void 0?n:0}var Tc=function(){return{translate:0,scale:1,origin:0,originPoint:0}},pr=function(){return{x:Tc(),y:Tc()}},Oc=function(){return{min:0,max:0}},Ue=function(){return{x:Oc(),y:Oc()}};function kt(e){return[e("x"),e("y")]}function Xd(e){var t=e.top,n=e.left,r=e.right,o=e.bottom;return{x:{min:n,max:r},y:{min:t,max:o}}}function N4(e){var t=e.x,n=e.y;return{top:n.min,right:t.max,bottom:n.max,left:t.min}}function M4(e,t){if(!t)return e;var n=t({x:e.left,y:e.top}),r=t({x:e.right,y:e.bottom});return{top:n.y,left:n.x,bottom:r.y,right:r.x}}function wi(e){return e===void 0||e===1}function Jd(e){var t=e.scale,n=e.scaleX,r=e.scaleY;return!wi(t)||!wi(n)||!wi(r)}function Gt(e){return Jd(e)||Fc(e.x)||Fc(e.y)||e.z||e.rotate||e.rotateX||e.rotateY}function Fc(e){return e&&e!=="0%"}function Oo(e,t,n){var r=e-n,o=t*r;return n+o}function Rc(e,t,n,r,o){return o!==void 0&&(e=Oo(e,o,r)),Oo(e,n,r)+t}function La(e,t,n,r,o){t===void 0&&(t=0),n===void 0&&(n=1),e.min=Rc(e.min,t,n,r,o),e.max=Rc(e.max,t,n,r,o)}function Qd(e,t){var n=t.x,r=t.y;La(e.x,n.translate,n.scale,n.originPoint),La(e.y,r.translate,r.scale,r.originPoint)}function A4(e,t,n,r){var o,a;r===void 0&&(r=!1);var s=n.length;if(s){t.x=t.y=1;for(var c,l,d=0;d<s;d++)c=n[d],l=c.projectionDelta,((a=(o=c.instance)===null||o===void 0?void 0:o.style)===null||a===void 0?void 0:a.display)!=="contents"&&(r&&c.options.layoutScroll&&c.scroll&&c!==c.root&&In(e,{x:-c.scroll.x,y:-c.scroll.y}),l&&(t.x*=l.x.scale,t.y*=l.y.scale,Qd(e,l)),r&&Gt(c.latestValues)&&In(e,c.latestValues))}}function Yt(e,t){e.min=e.min+t,e.max=e.max+t}function Dc(e,t,n){var r=Ae(n,3),o=r[0],a=r[1],s=r[2],c=t[s]!==void 0?t[s]:.5,l=Me(e.min,e.max,c);La(e,t[o],t[a],l,t.scale)}var L4=["x","scaleX","originX"],T4=["y","scaleY","originY"];function In(e,t){Dc(e.x,t,L4),Dc(e.y,t,T4)}function e0(e,t){return Xd(M4(e.getBoundingClientRect(),t))}function O4(e,t,n){var r=e0(e,n),o=t.scroll;return o&&(Yt(r.x,o.x),Yt(r.y,o.y)),r}var F4=new WeakMap,R4=(function(){function e(t){this.openGlobalLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=Ue(),this.visualElement=t}return e.prototype.start=function(t,n){var r=this,o=n===void 0?{}:n,a=o.snapToCursor,s=a===void 0?!1:a;if(this.visualElement.isPresent!==!1){var c=function(p){r.stopAnimation(),s&&r.snapToCursor(fs(p,"page").point)},l=function(p,m){var v,f=r.getProps(),y=f.drag,_=f.dragPropagation,k=f.onDragStart;y&&!_&&(r.openGlobalLock&&r.openGlobalLock(),r.openGlobalLock=yd(y),!r.openGlobalLock)||(r.isDragging=!0,r.currentDirection=null,r.resolveConstraints(),r.visualElement.projection&&(r.visualElement.projection.isAnimationBlocked=!0,r.visualElement.projection.target=void 0),kt(function(x){var N,A,S=r.getAxisMotionValue(x).get()||0;if(Et.test(S)){var R=(A=(N=r.visualElement.projection)===null||N===void 0?void 0:N.layout)===null||A===void 0?void 0:A.actual[x];if(R){var z=Vt(R);S=z*(parseFloat(S)/100)}}r.originPoint[x]=S}),k==null||k(p,m),(v=r.visualElement.animationState)===null||v===void 0||v.setActive(je.Drag,!0))},d=function(p,m){var v=r.getProps(),f=v.dragPropagation,y=v.dragDirectionLock,_=v.onDirectionLock,k=v.onDrag;if(!(!f&&!r.openGlobalLock)){var x=m.offset;if(y&&r.currentDirection===null){r.currentDirection=D4(x),r.currentDirection!==null&&(_==null||_(r.currentDirection));return}r.updateAxis("x",m.point,x),r.updateAxis("y",m.point,x),r.visualElement.syncRender(),k==null||k(p,m)}},u=function(p,m){return r.stop(p,m)};this.panSession=new qd(t,{onSessionStart:c,onStart:l,onMove:d,onSessionEnd:u},{transformPagePoint:this.visualElement.getTransformPagePoint()})}},e.prototype.stop=function(t,n){var r=this.isDragging;if(this.cancel(),!!r){var o=n.velocity;this.startAnimation(o);var a=this.getProps().onDragEnd;a==null||a(t,n)}},e.prototype.cancel=function(){var t,n;this.isDragging=!1,this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!1),(t=this.panSession)===null||t===void 0||t.end(),this.panSession=void 0;var r=this.getProps().dragPropagation;!r&&this.openGlobalLock&&(this.openGlobalLock(),this.openGlobalLock=null),(n=this.visualElement.animationState)===null||n===void 0||n.setActive(je.Drag,!1)},e.prototype.updateAxis=function(t,n,r){var o=this.getProps().drag;if(!(!r||!eo(t,o,this.currentDirection))){var a=this.getAxisMotionValue(t),s=this.originPoint[t]+r[t];this.constraints&&this.constraints[t]&&(s=k4(s,this.constraints[t],this.elastic[t])),a.set(s)}},e.prototype.resolveConstraints=function(){var t=this,n=this.getProps(),r=n.dragConstraints,o=n.dragElastic,a=(this.visualElement.projection||{}).layout,s=this.constraints;r&&En(r)?this.constraints||(this.constraints=this.resolveRefConstraints()):r&&a?this.constraints=_4(a.actual,r):this.constraints=!1,this.elastic=I4(o),s!==this.constraints&&a&&this.constraints&&!this.hasMutatedConstraints&&kt(function(c){t.getAxisMotionValue(c)&&(t.constraints[c]=E4(a.actual[c],t.constraints[c]))})},e.prototype.resolveRefConstraints=function(){var t=this.getProps(),n=t.dragConstraints,r=t.onMeasureDragConstraints;if(!n||!En(n))return!1;var o=n.current,a=this.visualElement.projection;if(!a||!a.layout)return!1;var s=O4(o,a.root,this.visualElement.getTransformPagePoint()),c=j4(a.layout.actual,s);if(r){var l=r(N4(c));this.hasMutatedConstraints=!!l,l&&(c=Xd(l))}return c},e.prototype.startAnimation=function(t){var n=this,r=this.getProps(),o=r.drag,a=r.dragMomentum,s=r.dragElastic,c=r.dragTransition,l=r.dragSnapToOrigin,d=r.onDragTransitionEnd,u=this.constraints||{},p=kt(function(m){var v;if(eo(m,o,n.currentDirection)){var f=(v=u==null?void 0:u[m])!==null&&v!==void 0?v:{};l&&(f={min:0,max:0});var y=s?200:1e6,_=s?40:1e7,k=H(H({type:"inertia",velocity:a?t[m]:0,bounceStiffness:y,bounceDamping:_,timeConstant:750,restDelta:1,restSpeed:10},c),f);return n.startAxisValueAnimation(m,k)}});return Promise.all(p).then(d)},e.prototype.startAxisValueAnimation=function(t,n){var r=this.getAxisMotionValue(t);return js(t,r,0,n)},e.prototype.stopAnimation=function(){var t=this;kt(function(n){return t.getAxisMotionValue(n).stop()})},e.prototype.getAxisMotionValue=function(t){var n,r,o="_drag"+t.toUpperCase(),a=this.visualElement.getProps()[o];return a||this.visualElement.getValue(t,(r=(n=this.visualElement.getProps().initial)===null||n===void 0?void 0:n[t])!==null&&r!==void 0?r:0)},e.prototype.snapToCursor=function(t){var n=this;kt(function(r){var o=n.getProps().drag;if(eo(r,o,n.currentDirection)){var a=n.visualElement.projection,s=n.getAxisMotionValue(r);if(a&&a.layout){var c=a.layout.actual[r],l=c.min,d=c.max;s.set(t[r]-Me(l,d,.5))}}})},e.prototype.scalePositionWithinConstraints=function(){var t=this,n,r=this.getProps(),o=r.drag,a=r.dragConstraints,s=this.visualElement.projection;if(!(!En(a)||!s||!this.constraints)){this.stopAnimation();var c={x:0,y:0};kt(function(d){var u=t.getAxisMotionValue(d);if(u){var p=u.get();c[d]=S4({min:p,max:p},t.constraints[d])}});var l=this.visualElement.getProps().transformTemplate;this.visualElement.getInstance().style.transform=l?l({},""):"none",(n=s.root)===null||n===void 0||n.updateScroll(),s.updateLayout(),this.resolveConstraints(),kt(function(d){if(eo(d,o,null)){var u=t.getAxisMotionValue(d),p=t.constraints[d],m=p.min,v=p.max;u.set(Me(m,v,c[d]))}})}},e.prototype.addListeners=function(){var t=this,n;F4.set(this.visualElement,this);var r=this.visualElement.getInstance(),o=An(r,"pointerdown",function(d){var u=t.getProps(),p=u.drag,m=u.dragListener,v=m===void 0?!0:m;p&&v&&t.start(d)}),a=function(){var d=t.getProps().dragConstraints;En(d)&&(t.constraints=t.resolveRefConstraints())},s=this.visualElement.projection,c=s.addEventListener("measure",a);s&&!s.layout&&((n=s.root)===null||n===void 0||n.updateScroll(),s.updateLayout()),a();var l=Ko(window,"resize",function(){return t.scalePositionWithinConstraints()});return s.addEventListener("didUpdate",(function(d){var u=d.delta,p=d.hasLayoutChanged;t.isDragging&&p&&(kt(function(m){var v=t.getAxisMotionValue(m);v&&(t.originPoint[m]+=u[m].translate,v.set(v.get()+u[m].translate))}),t.visualElement.syncRender())})),function(){l(),o(),c()}},e.prototype.getProps=function(){var t=this.visualElement.getProps(),n=t.drag,r=n===void 0?!1:n,o=t.dragDirectionLock,a=o===void 0?!1:o,s=t.dragPropagation,c=s===void 0?!1:s,l=t.dragConstraints,d=l===void 0?!1:l,u=t.dragElastic,p=u===void 0?Aa:u,m=t.dragMomentum,v=m===void 0?!0:m;return H(H({},t),{drag:r,dragDirectionLock:a,dragPropagation:c,dragConstraints:d,dragElastic:p,dragMomentum:v})},e})();function eo(e,t,n){return(t===!0||t===e)&&(n===null||n===e)}function D4(e,t){t===void 0&&(t=10);var n=null;return Math.abs(e.y)>t?n="y":Math.abs(e.x)>t&&(n="x"),n}function z4(e){var t=e.dragControls,n=e.visualElement,r=qn(function(){return new R4(n)});M.useEffect(function(){return t&&t.subscribe(r)},[r,t]),M.useEffect(function(){return r.addListeners()},[r])}function B4(e){var t=e.onPan,n=e.onPanStart,r=e.onPanEnd,o=e.onPanSessionStart,a=e.visualElement,s=t||n||r||o,c=M.useRef(null),l=M.useContext(Lr).transformPagePoint,d={onSessionStart:o,onStart:n,onMove:t,onEnd:function(p,m){c.current=null,r&&r(p,m)}};M.useEffect(function(){c.current!==null&&c.current.updateHandlers(d)});function u(p){c.current=new qd(p,d,{transformPagePoint:l})}Io(a,"pointerdown",s&&u),gs(function(){return c.current&&c.current.end()})}var P4={pan:Xt(B4),drag:Xt(z4)},to=["LayoutMeasure","BeforeLayoutMeasure","LayoutUpdate","ViewportBoxUpdate","Update","Render","AnimationComplete","LayoutAnimationComplete","AnimationStart","LayoutAnimationStart","SetAxisTarget","Unmount"];function W4(){var e=to.map(function(){return new lr}),t={},n={clearAllListeners:function(){return e.forEach(function(r){return r.clear()})},updatePropListeners:function(r){to.forEach(function(o){var a,s="on"+o,c=r[s];(a=t[o])===null||a===void 0||a.call(t),c&&(t[o]=n[s](c))})}};return e.forEach(function(r,o){n["on"+to[o]]=function(a){return r.add(a)},n["notify"+to[o]]=function(){for(var a=[],s=0;s<arguments.length;s++)a[s]=arguments[s];return r.notify.apply(r,vt([],Ae(a),!1))}}),n}function V4(e,t,n){var r;for(var o in t){var a=t[o],s=n[o];if(Pt(a))e.addValue(o,a);else if(Pt(s))e.addValue(o,Bn(a));else if(s!==a)if(e.hasValue(o)){var c=e.getValue(o);!c.hasAnimated&&c.set(a)}else e.addValue(o,Bn((r=e.getStaticValue(o))!==null&&r!==void 0?r:a))}for(var o in n)t[o]===void 0&&e.removeValue(o);return t}var t0=function(e){var t=e.treeType,n=t===void 0?"":t,r=e.build,o=e.getBaseTarget,a=e.makeTargetAnimatable,s=e.measureViewportBox,c=e.render,l=e.readValueFromInstance,d=e.removeValueFromRenderState,u=e.sortNodePosition,p=e.scrapeMotionValuesFromProps;return function(m,v){var f=m.parent,y=m.props,_=m.presenceId,k=m.blockInitialAnimation,x=m.visualState,N=m.shouldReduceMotion;v===void 0&&(v={});var A=!1,S=x.latestValues,R=x.renderState,z,h=W4(),g=new Map,b=new Map,w={},C=H({},S),j;function I(){!z||!A||(E(),c(z,R,y.style,V.projection))}function E(){r(V,R,S,v,y)}function L(){h.notifyUpdate(S)}function O(P,W){var T=W.onChange(function($){S[P]=$,y.onUpdate&&bt.update(L,!1,!0)}),J=W.onRenderRequest(V.scheduleRender);b.set(P,function(){T(),J()})}var F=p(y);for(var U in F){var q=F[U];S[U]!==void 0&&Pt(q)&&q.set(S[U],!1)}var Y=qo(y),Z=$1(y),V=H(H({treeType:n,current:null,depth:f?f.depth+1:0,parent:f,children:new Set,presenceId:_,shouldReduceMotion:N,variantChildren:Z?new Set:void 0,isVisible:void 0,manuallyAnimateOnMount:!!(f!=null&&f.isMounted()),blockInitialAnimation:k,isMounted:function(){return!!z},mount:function(P){A=!0,z=V.current=P,V.projection&&V.projection.mount(P),Z&&f&&!Y&&(j=f==null?void 0:f.addVariantChild(V)),g.forEach(function(W,T){return O(T,W)}),f==null||f.children.add(V),V.setProps(y)},unmount:function(){var P;(P=V.projection)===null||P===void 0||P.unmount(),zn.update(L),zn.render(I),b.forEach(function(W){return W()}),j==null||j(),f==null||f.children.delete(V),h.clearAllListeners(),z=void 0,A=!1},addVariantChild:function(P){var W,T=V.getClosestVariantNode();if(T)return(W=T.variantChildren)===null||W===void 0||W.add(P),function(){return T.variantChildren.delete(P)}},sortNodePosition:function(P){return!u||n!==P.treeType?0:u(V.getInstance(),P.getInstance())},getClosestVariantNode:function(){return Z?V:f==null?void 0:f.getClosestVariantNode()},getLayoutId:function(){return y.layoutId},getInstance:function(){return z},getStaticValue:function(P){return S[P]},setStaticValue:function(P,W){return S[P]=W},getLatestValues:function(){return S},setVisibility:function(P){V.isVisible!==P&&(V.isVisible=P,V.scheduleRender())},makeTargetAnimatable:function(P,W){return W===void 0&&(W=!0),a(V,P,y,W)},measureViewportBox:function(){return s(z,y)},addValue:function(P,W){V.hasValue(P)&&V.removeValue(P),g.set(P,W),S[P]=W.get(),O(P,W)},removeValue:function(P){var W;g.delete(P),(W=b.get(P))===null||W===void 0||W(),b.delete(P),delete S[P],d(P,R)},hasValue:function(P){return g.has(P)},getValue:function(P,W){var T=g.get(P);return T===void 0&&W!==void 0&&(T=Bn(W),V.addValue(P,T)),T},forEachValue:function(P){return g.forEach(P)},readValue:function(P){var W;return(W=S[P])!==null&&W!==void 0?W:l(z,P,v)},setBaseTarget:function(P,W){C[P]=W},getBaseTarget:function(P){if(o){var W=o(y,P);if(W!==void 0&&!Pt(W))return W}return C[P]}},h),{build:function(){return E(),R},scheduleRender:function(){bt.render(I,!1,!0)},syncRender:I,setProps:function(P){(P.transformTemplate||y.transformTemplate)&&V.scheduleRender(),y=P,h.updatePropListeners(P),w=V4(V,p(y),w)},getProps:function(){return y},getVariant:function(P){var W;return(W=y.variants)===null||W===void 0?void 0:W[P]},getDefaultTransition:function(){return y.transition},getTransformPagePoint:function(){return y.transformPagePoint},getVariantContext:function(P){if(P===void 0&&(P=!1),P)return f==null?void 0:f.getVariantContext();if(!Y){var W=(f==null?void 0:f.getVariantContext())||{};return y.initial!==void 0&&(W.initial=y.initial),W}for(var T={},J=0;J<U4;J++){var $=n0[J],me=y[$];(ut(me)||me===!1)&&(T[$]=me)}return T}});return V}},n0=vt(["initial"],Ae(Is),!1),U4=n0.length;function Ta(e){return typeof e=="string"&&e.startsWith("var(--")}var r0=/var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;function Z4(e){var t=r0.exec(e);if(!t)return[,];var n=Ae(t,3),r=n[1],o=n[2];return[r,o]}function Oa(e,t,n){var r=Ae(Z4(e),2),o=r[0],a=r[1];if(o){var s=window.getComputedStyle(t).getPropertyValue(o);return s?s.trim():Ta(a)?Oa(a,t):a}}function $4(e,t,n){var r,o=Qe(t,[]),a=e.getInstance();if(!(a instanceof Element))return{target:o,transitionEnd:n};n&&(n=H({},n)),e.forEachValue(function(d){var u=d.get();if(Ta(u)){var p=Oa(u,a);p&&d.set(p)}});for(var s in o){var c=o[s];if(Ta(c)){var l=Oa(c,a);l&&(o[s]=l,n&&((r=n[s])!==null&&r!==void 0||(n[s]=c)))}}return{target:o,transitionEnd:n}}var H4=new Set(["width","height","top","left","right","bottom","x","y"]),o0=function(e){return H4.has(e)},G4=function(e){return Object.keys(e).some(o0)},i0=function(e,t){e.set(t,!1),e.set(t)},zc=function(e){return e===hn||e===ie},Bc;(function(e){e.width="width",e.height="height",e.left="left",e.right="right",e.top="top",e.bottom="bottom"})(Bc||(Bc={}));var Pc=function(e,t){return parseFloat(e.split(", ")[t])},Wc=function(e,t){return function(n,r){var o=r.transform;if(o==="none"||!o)return 0;var a=o.match(/^matrix3d\((.+)\)$/);if(a)return Pc(a[1],t);var s=o.match(/^matrix\((.+)\)$/);return s?Pc(s[1],e):0}},Y4=new Set(["x","y","z"]),q4=Tr.filter(function(e){return!Y4.has(e)});function K4(e){var t=[];return q4.forEach(function(n){var r=e.getValue(n);r!==void 0&&(t.push([n,r.get()]),r.set(n.startsWith("scale")?1:0))}),t.length&&e.syncRender(),t}var Vc={width:function(e,t){var n=e.x,r=t.paddingLeft,o=r===void 0?"0":r,a=t.paddingRight,s=a===void 0?"0":a;return n.max-n.min-parseFloat(o)-parseFloat(s)},height:function(e,t){var n=e.y,r=t.paddingTop,o=r===void 0?"0":r,a=t.paddingBottom,s=a===void 0?"0":a;return n.max-n.min-parseFloat(o)-parseFloat(s)},top:function(e,t){var n=t.top;return parseFloat(n)},left:function(e,t){var n=t.left;return parseFloat(n)},bottom:function(e,t){var n=e.y,r=t.top;return parseFloat(r)+(n.max-n.min)},right:function(e,t){var n=e.x,r=t.left;return parseFloat(r)+(n.max-n.min)},x:Wc(4,13),y:Wc(5,14)},X4=function(e,t,n){var r=t.measureViewportBox(),o=t.getInstance(),a=getComputedStyle(o),s=a.display,c={};s==="none"&&t.setStaticValue("display",e.display||"block"),n.forEach(function(d){c[d]=Vc[d](r,a)}),t.syncRender();var l=t.measureViewportBox();return n.forEach(function(d){var u=t.getValue(d);i0(u,c[d]),e[d]=Vc[d](l,a)}),e},J4=function(e,t,n,r){n===void 0&&(n={}),r===void 0&&(r={}),t=H({},t),r=H({},r);var o=Object.keys(t).filter(o0),a=[],s=!1,c=[];if(o.forEach(function(u){var p=e.getValue(u);if(e.hasValue(u)){var m=n[u],v=Qn(m),f=t[u],y;if(Fr(f)){var _=f.length,k=f[0]===null?1:0;m=f[k],v=Qn(m);for(var x=k;x<_;x++)y?_o(Qn(f[x])===y):y=Qn(f[x])}else y=Qn(f);if(v!==y)if(zc(v)&&zc(y)){var N=p.get();typeof N=="string"&&p.set(parseFloat(N)),typeof f=="string"?t[u]=parseFloat(f):Array.isArray(f)&&y===ie&&(t[u]=f.map(parseFloat))}else v!=null&&v.transform&&(y!=null&&y.transform)&&(m===0||f===0)?m===0?p.set(y.transform(m)):t[u]=v.transform(f):(s||(a=K4(e),s=!0),c.push(u),r[u]=r[u]!==void 0?r[u]:t[u],i0(p,f))}}),c.length){var l=c.indexOf("height")>=0?window.pageYOffset:null,d=X4(t,e,c);return a.length&&a.forEach(function(u){var p=Ae(u,2),m=p[0],v=p[1];e.getValue(m).set(v)}),e.syncRender(),l!==null&&window.scrollTo({top:l}),{target:d,transitionEnd:r}}else return{target:t,transitionEnd:r}};function Q4(e,t,n,r){return G4(t)?J4(e,t,n,r):{target:t,transitionEnd:r}}var eh=function(e,t,n,r){var o=$4(e,t,r);return t=o.target,r=o.transitionEnd,Q4(e,t,n,r)};function th(e){return window.getComputedStyle(e)}var a0={treeType:"dom",readValueFromInstance:function(e,t){if(Wr(t)){var n=ws(t);return n&&n.default||0}else{var r=th(e);return(q1(t)?r.getPropertyValue(t):r[t])||0}},sortNodePosition:function(e,t){return e.compareDocumentPosition(t)&2?1:-1},getBaseTarget:function(e,t){var n;return(n=e.style)===null||n===void 0?void 0:n[t]},measureViewportBox:function(e,t){var n=t.transformPagePoint;return e0(e,n)},resetTransform:function(e,t,n){var r=n.transformTemplate;t.style.transform=r?r({},""):"none",e.scheduleRender()},restoreTransform:function(e,t){e.style.transform=t.style.transform},removeValueFromRenderState:function(e,t){var n=t.vars,r=t.style;delete n[e],delete r[e]},makeTargetAnimatable:function(e,t,n,r){var o=n.transformValues;r===void 0&&(r=!0);var a=t.transition,s=t.transitionEnd,c=Qe(t,["transition","transitionEnd"]),l=c4(c,a||{},e);if(o&&(s&&(s=o(s)),c&&(c=o(c)),l&&(l=o(l))),r){a4(e,c,l);var d=eh(e,c,l,s);s=d.transitionEnd,c=d.target}return H({transition:a,transitionEnd:s},c)},scrapeMotionValuesFromProps:ps,build:function(e,t,n,r,o){e.isVisible!==void 0&&(t.style.visibility=e.isVisible?"visible":"hidden"),ls(t,n,r,o.transformTemplate)},render:ld},nh=t0(a0),rh=t0(H(H({},a0),{getBaseTarget:function(e,t){return e[t]},readValueFromInstance:function(e,t){var n;return Wr(t)?((n=ws(t))===null||n===void 0?void 0:n.default)||0:(t=dd.has(t)?t:cd(t),e.getAttribute(t))},scrapeMotionValuesFromProps:pd,build:function(e,t,n,r,o){us(t,n,r,o.transformTemplate)},render:ud})),oh=function(e,t){return ss(e)?rh(t,{enableHardwareAcceleration:!1}):nh(t,{enableHardwareAcceleration:!0})};function Uc(e,t){return t.max===t.min?0:e/(t.max-t.min)*100}var er={correct:function(e,t){if(!t.target)return e;if(typeof e=="string")if(ie.test(e))e=parseFloat(e);else return e;var n=Uc(e,t.target.x),r=Uc(e,t.target.y);return"".concat(n,"% ").concat(r,"%")}},Zc="_$css",ih={correct:function(e,t){var n=t.treeScale,r=t.projectionDelta,o=e,a=e.includes("var("),s=[];a&&(e=e.replace(r0,function(y){return s.push(y),Zc}));var c=Wt.parse(e);if(c.length>5)return o;var l=Wt.createTransformer(e),d=typeof c[0]!="number"?1:0,u=r.x.scale*n.x,p=r.y.scale*n.y;c[0+d]/=u,c[1+d]/=p;var m=Me(u,p,.5);typeof c[2+d]=="number"&&(c[2+d]/=m),typeof c[3+d]=="number"&&(c[3+d]/=m);var v=l(c);if(a){var f=0;v=v.replace(Zc,function(){var y=s[f];return f++,y})}return v}},ah=(function(e){B1(t,e);function t(){return e!==null&&e.apply(this,arguments)||this}return t.prototype.componentDidMount=function(){var n=this,r=this.props,o=r.visualElement,a=r.layoutGroup,s=r.switchLayoutGroup,c=r.layoutId,l=o.projection;T3(ch),l&&(a!=null&&a.group&&a.group.add(l),s!=null&&s.register&&c&&s.register(l),l.root.didUpdate(),l.addEventListener("animationComplete",function(){n.safeToRemove()}),l.setOptions(H(H({},l.options),{onExitComplete:function(){return n.safeToRemove()}}))),ar.hasEverUpdated=!0},t.prototype.getSnapshotBeforeUpdate=function(n){var r=this,o=this.props,a=o.layoutDependency,s=o.visualElement,c=o.drag,l=o.isPresent,d=s.projection;return d&&(d.isPresent=l,c||n.layoutDependency!==a||a===void 0?d.willUpdate():this.safeToRemove(),n.isPresent!==l&&(l?d.promote():d.relegate()||bt.postRender(function(){var u;!((u=d.getStack())===null||u===void 0)&&u.members.length||r.safeToRemove()}))),null},t.prototype.componentDidUpdate=function(){var n=this.props.visualElement.projection;n&&(n.root.didUpdate(),!n.currentAnimation&&n.isLead()&&this.safeToRemove())},t.prototype.componentWillUnmount=function(){var n=this.props,r=n.visualElement,o=n.layoutGroup,a=n.switchLayoutGroup,s=r.projection;s&&(s.scheduleCheckAfterUnmount(),o!=null&&o.group&&o.group.remove(s),a!=null&&a.deregister&&a.deregister(s))},t.prototype.safeToRemove=function(){var n=this.props.safeToRemove;n==null||n()},t.prototype.render=function(){return null},t})(Oe.Component);function sh(e){var t=Ae(Zd(),2),n=t[0],r=t[1],o=M.useContext(as);return Oe.createElement(ah,H({},e,{layoutGroup:o,switchLayoutGroup:M.useContext(H1),isPresent:n,safeToRemove:r}))}var ch={borderRadius:H(H({},er),{applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]}),borderTopLeftRadius:er,borderTopRightRadius:er,borderBottomLeftRadius:er,borderBottomRightRadius:er,boxShadow:ih},lh={measureLayout:sh};function dh(e,t,n){n===void 0&&(n={});var r=Pt(e)?e:Bn(e);return js("",r,t,n),{stop:function(){return r.stop()},isAnimating:function(){return r.isAnimating()}}}var s0=["TopLeft","TopRight","BottomLeft","BottomRight"],uh=s0.length,$c=function(e){return typeof e=="string"?parseFloat(e):e},Hc=function(e){return typeof e=="number"||ie.test(e)};function ph(e,t,n,r,o,a){var s,c,l,d;o?(e.opacity=Me(0,(s=n.opacity)!==null&&s!==void 0?s:1,hh(r)),e.opacityExit=Me((c=t.opacity)!==null&&c!==void 0?c:1,0,fh(r))):a&&(e.opacity=Me((l=t.opacity)!==null&&l!==void 0?l:1,(d=n.opacity)!==null&&d!==void 0?d:1,r));for(var u=0;u<uh;u++){var p="border".concat(s0[u],"Radius"),m=Gc(t,p),v=Gc(n,p);if(!(m===void 0&&v===void 0)){m||(m=0),v||(v=0);var f=m===0||v===0||Hc(m)===Hc(v);f?(e[p]=Math.max(Me($c(m),$c(v),r),0),(Et.test(v)||Et.test(m))&&(e[p]+="%")):e[p]=v}}(t.rotate||n.rotate)&&(e.rotate=Me(t.rotate||0,n.rotate||0,r))}function Gc(e,t){var n;return(n=e[t])!==null&&n!==void 0?n:e.borderRadius}var hh=c0(0,.5,ys),fh=c0(.5,.95,bs);function c0(e,t,n){return function(r){return r<e?0:r>t?1:n(Rr(e,t,r))}}function Yc(e,t){e.min=t.min,e.max=t.max}function dt(e,t){Yc(e.x,t.x),Yc(e.y,t.y)}function qc(e,t,n,r,o){return e-=t,e=Oo(e,1/n,r),o!==void 0&&(e=Oo(e,1/o,r)),e}function gh(e,t,n,r,o,a,s){if(t===void 0&&(t=0),n===void 0&&(n=1),r===void 0&&(r=.5),a===void 0&&(a=e),s===void 0&&(s=e),Et.test(t)){t=parseFloat(t);var c=Me(s.min,s.max,t/100);t=c-s.min}if(typeof t=="number"){var l=Me(a.min,a.max,r);e===a&&(l-=t),e.min=qc(e.min,t,n,l,o),e.max=qc(e.max,t,n,l,o)}}function Kc(e,t,n,r,o){var a=Ae(n,3),s=a[0],c=a[1],l=a[2];gh(e,t[s],t[c],t[l],t.scale,r,o)}var mh=["x","scaleX","originX"],vh=["y","scaleY","originY"];function Xc(e,t,n,r){Kc(e.x,t,mh,n==null?void 0:n.x,r==null?void 0:r.x),Kc(e.y,t,vh,n==null?void 0:n.y,r==null?void 0:r.y)}function Jc(e){return e.translate===0&&e.scale===1}function l0(e){return Jc(e.x)&&Jc(e.y)}function d0(e,t){return e.x.min===t.x.min&&e.x.max===t.x.max&&e.y.min===t.y.min&&e.y.max===t.y.max}var bh=(function(){function e(){this.members=[]}return e.prototype.add=function(t){Ss(this.members,t),t.scheduleRender()},e.prototype.remove=function(t){if(Es(this.members,t),t===this.prevLead&&(this.prevLead=void 0),t===this.lead){var n=this.members[this.members.length-1];n&&this.promote(n)}},e.prototype.relegate=function(t){var n=this.members.findIndex(function(s){return t===s});if(n===0)return!1;for(var r,o=n;o>=0;o--){var a=this.members[o];if(a.isPresent!==!1){r=a;break}}return r?(this.promote(r),!0):!1},e.prototype.promote=function(t,n){var r,o=this.lead;if(t!==o&&(this.prevLead=o,this.lead=t,t.show(),o)){o.instance&&o.scheduleRender(),t.scheduleRender(),t.resumeFrom=o,n&&(t.resumeFrom.preserveOpacity=!0),o.snapshot&&(t.snapshot=o.snapshot,t.snapshot.latestValues=o.animationValues||o.latestValues,t.snapshot.isShared=!0),!((r=t.root)===null||r===void 0)&&r.isUpdating&&(t.isLayoutDirty=!0);var a=t.options.crossfade;a===!1&&o.hide()}},e.prototype.exitAnimationComplete=function(){this.members.forEach(function(t){var n,r,o,a,s;(r=(n=t.options).onExitComplete)===null||r===void 0||r.call(n),(s=(o=t.resumingFrom)===null||o===void 0?void 0:(a=o.options).onExitComplete)===null||s===void 0||s.call(a)})},e.prototype.scheduleRender=function(){this.members.forEach(function(t){t.instance&&t.scheduleRender(!1)})},e.prototype.removeLeadSnapshot=function(){this.lead&&this.lead.snapshot&&(this.lead.snapshot=void 0)},e})(),xh="translate3d(0px, 0px, 0) scale(1, 1) scale(1, 1)";function Qc(e,t,n){var r=e.x.translate/t.x,o=e.y.translate/t.y,a="translate3d(".concat(r,"px, ").concat(o,"px, 0) ");if(a+="scale(".concat(1/t.x,", ").concat(1/t.y,") "),n){var s=n.rotate,c=n.rotateX,l=n.rotateY;s&&(a+="rotate(".concat(s,"deg) ")),c&&(a+="rotateX(".concat(c,"deg) ")),l&&(a+="rotateY(".concat(l,"deg) "))}var d=e.x.scale*t.x,u=e.y.scale*t.y;return a+="scale(".concat(d,", ").concat(u,")"),a===xh?"none":a}var yh=function(e,t){return e.depth-t.depth},Ch=(function(){function e(){this.children=[],this.isDirty=!1}return e.prototype.add=function(t){Ss(this.children,t),this.isDirty=!0},e.prototype.remove=function(t){Es(this.children,t),this.isDirty=!0},e.prototype.forEach=function(t){this.isDirty&&this.children.sort(yh),this.isDirty=!1,this.children.forEach(t)},e})(),el=1e3;function u0(e){var t=e.attachResizeListener,n=e.defaultParent,r=e.measureScroll,o=e.checkIsScrollRoot,a=e.resetTransform;return(function(){function s(c,l,d){var u=this;l===void 0&&(l={}),d===void 0&&(d=n==null?void 0:n()),this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.potentialNodes=new Map,this.checkUpdateFailed=function(){u.isUpdating&&(u.isUpdating=!1,u.clearAllSnapshots())},this.updateProjection=function(){u.nodes.forEach(Eh),u.nodes.forEach(Ih)},this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.id=c,this.latestValues=l,this.root=d?d.root||d:this,this.path=d?vt(vt([],Ae(d.path),!1),[d],!1):[],this.parent=d,this.depth=d?d.depth+1:0,c&&this.root.registerPotentialNode(c,this);for(var p=0;p<this.path.length;p++)this.path[p].shouldResetTransform=!0;this.root===this&&(this.nodes=new Ch)}return s.prototype.addEventListener=function(c,l){return this.eventHandlers.has(c)||this.eventHandlers.set(c,new lr),this.eventHandlers.get(c).add(l)},s.prototype.notifyListeners=function(c){for(var l=[],d=1;d<arguments.length;d++)l[d-1]=arguments[d];var u=this.eventHandlers.get(c);u==null||u.notify.apply(u,vt([],Ae(l),!1))},s.prototype.hasListeners=function(c){return this.eventHandlers.has(c)},s.prototype.registerPotentialNode=function(c,l){this.potentialNodes.set(c,l)},s.prototype.mount=function(c,l){var d=this,u;if(l===void 0&&(l=!1),!this.instance){this.isSVG=c instanceof SVGElement&&c.tagName!=="svg",this.instance=c;var p=this.options,m=p.layoutId,v=p.layout,f=p.visualElement;if(f&&!f.getInstance()&&f.mount(c),this.root.nodes.add(this),(u=this.parent)===null||u===void 0||u.children.add(this),this.id&&this.root.potentialNodes.delete(this.id),l&&(v||m)&&(this.isLayoutDirty=!0),t){var y,_=function(){return d.root.updateBlockedByResize=!1};t(c,function(){d.root.updateBlockedByResize=!0,clearTimeout(y),y=window.setTimeout(_,250),ar.hasAnimatedSinceResize&&(ar.hasAnimatedSinceResize=!1,d.nodes.forEach(Sh))})}m&&this.root.registerSharedNode(m,this),this.options.animate!==!1&&f&&(m||v)&&this.addEventListener("didUpdate",function(k){var x,N,A,S,R,z=k.delta,h=k.hasLayoutChanged,g=k.hasRelativeTargetChanged,b=k.layout;if(d.isTreeAnimationBlocked()){d.target=void 0,d.relativeTarget=void 0;return}var w=(N=(x=d.options.transition)!==null&&x!==void 0?x:f.getDefaultTransition())!==null&&N!==void 0?N:Th,C=f.getProps(),j=C.onLayoutAnimationStart,I=C.onLayoutAnimationComplete,E=!d.targetLayout||!d0(d.targetLayout,b)||g,L=!h&&g;if(!((A=d.resumeFrom)===null||A===void 0)&&A.instance||L||h&&(E||!d.currentAnimation)){d.resumeFrom&&(d.resumingFrom=d.resumeFrom,d.resumingFrom.resumingFrom=void 0),d.setAnimationOrigin(z,L);var O=H(H({},_s(w,"layout")),{onPlay:j,onComplete:I});f.shouldReduceMotion&&(O.delay=0,O.type=!1),d.startAnimation(O)}else!h&&d.animationProgress===0&&d.finishAnimation(),d.isLead()&&((R=(S=d.options).onExitComplete)===null||R===void 0||R.call(S));d.targetLayout=b})}},s.prototype.unmount=function(){var c,l;this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this),(c=this.getStack())===null||c===void 0||c.remove(this),(l=this.parent)===null||l===void 0||l.children.delete(this),this.instance=void 0,zn.preRender(this.updateProjection)},s.prototype.blockUpdate=function(){this.updateManuallyBlocked=!0},s.prototype.unblockUpdate=function(){this.updateManuallyBlocked=!1},s.prototype.isUpdateBlocked=function(){return this.updateManuallyBlocked||this.updateBlockedByResize},s.prototype.isTreeAnimationBlocked=function(){var c;return this.isAnimationBlocked||((c=this.parent)===null||c===void 0?void 0:c.isTreeAnimationBlocked())||!1},s.prototype.startUpdate=function(){var c;this.isUpdateBlocked()||(this.isUpdating=!0,(c=this.nodes)===null||c===void 0||c.forEach(Nh))},s.prototype.willUpdate=function(c){var l,d,u;if(c===void 0&&(c=!0),this.root.isUpdateBlocked()){(d=(l=this.options).onExitComplete)===null||d===void 0||d.call(l);return}if(!this.root.isUpdating&&this.root.startUpdate(),!this.isLayoutDirty){this.isLayoutDirty=!0;for(var p=0;p<this.path.length;p++){var m=this.path[p];m.shouldResetTransform=!0,m.updateScroll()}var v=this.options,f=v.layoutId,y=v.layout;if(!(f===void 0&&!y)){var _=(u=this.options.visualElement)===null||u===void 0?void 0:u.getProps().transformTemplate;this.prevTransformTemplateValue=_==null?void 0:_(this.latestValues,""),this.updateSnapshot(),c&&this.notifyListeners("willUpdate")}}},s.prototype.didUpdate=function(){var c=this.isUpdateBlocked();if(c){this.unblockUpdate(),this.clearAllSnapshots(),this.nodes.forEach(tl);return}this.isUpdating&&(this.isUpdating=!1,this.potentialNodes.size&&(this.potentialNodes.forEach(Oh),this.potentialNodes.clear()),this.nodes.forEach(jh),this.nodes.forEach(wh),this.nodes.forEach(kh),this.clearAllSnapshots(),vi.update(),vi.preRender(),vi.render())},s.prototype.clearAllSnapshots=function(){this.nodes.forEach(_h),this.sharedNodes.forEach(Mh)},s.prototype.scheduleUpdateProjection=function(){bt.preRender(this.updateProjection,!1,!0)},s.prototype.scheduleCheckAfterUnmount=function(){var c=this;bt.postRender(function(){c.isLayoutDirty?c.root.didUpdate():c.root.checkUpdateFailed()})},s.prototype.updateSnapshot=function(){if(!(this.snapshot||!this.instance)){var c=this.measure(),l=this.removeTransform(this.removeElementScroll(c));il(l),this.snapshot={measured:c,layout:l,latestValues:{}}}},s.prototype.updateLayout=function(){var c;if(this.instance&&(this.updateScroll(),!(!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))){if(this.resumeFrom&&!this.resumeFrom.instance)for(var l=0;l<this.path.length;l++){var d=this.path[l];d.updateScroll()}var u=this.measure();il(u);var p=this.layout;this.layout={measured:u,actual:this.removeElementScroll(u)},this.layoutCorrected=Ue(),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.actual),(c=this.options.visualElement)===null||c===void 0||c.notifyLayoutMeasure(this.layout.actual,p==null?void 0:p.actual)}},s.prototype.updateScroll=function(){this.options.layoutScroll&&this.instance&&(this.isScrollRoot=o(this.instance),this.scroll=r(this.instance))},s.prototype.resetTransform=function(){var c;if(a){var l=this.isLayoutDirty||this.shouldResetTransform,d=this.projectionDelta&&!l0(this.projectionDelta),u=(c=this.options.visualElement)===null||c===void 0?void 0:c.getProps().transformTemplate,p=u==null?void 0:u(this.latestValues,""),m=p!==this.prevTransformTemplateValue;l&&(d||Gt(this.latestValues)||m)&&(a(this.instance,p),this.shouldResetTransform=!1,this.scheduleRender())}},s.prototype.measure=function(){var c=this.options.visualElement;if(!c)return Ue();var l=c.measureViewportBox(),d=this.root.scroll;return d&&(Yt(l.x,d.x),Yt(l.y,d.y)),l},s.prototype.removeElementScroll=function(c){var l=Ue();dt(l,c);for(var d=0;d<this.path.length;d++){var u=this.path[d],p=u.scroll,m=u.options,v=u.isScrollRoot;if(u!==this.root&&p&&m.layoutScroll){if(v){dt(l,c);var f=this.root.scroll;f&&(Yt(l.x,-f.x),Yt(l.y,-f.y))}Yt(l.x,p.x),Yt(l.y,p.y)}}return l},s.prototype.applyTransform=function(c,l){l===void 0&&(l=!1);var d=Ue();dt(d,c);for(var u=0;u<this.path.length;u++){var p=this.path[u];!l&&p.options.layoutScroll&&p.scroll&&p!==p.root&&In(d,{x:-p.scroll.x,y:-p.scroll.y}),Gt(p.latestValues)&&In(d,p.latestValues)}return Gt(this.latestValues)&&In(d,this.latestValues),d},s.prototype.removeTransform=function(c){var l,d=Ue();dt(d,c);for(var u=0;u<this.path.length;u++){var p=this.path[u];if(p.instance&&Gt(p.latestValues)){Jd(p.latestValues)&&p.updateSnapshot();var m=Ue(),v=p.measure();dt(m,v),Xc(d,p.latestValues,(l=p.snapshot)===null||l===void 0?void 0:l.layout,m)}}return Gt(this.latestValues)&&Xc(d,this.latestValues),d},s.prototype.setTargetDelta=function(c){this.targetDelta=c,this.root.scheduleUpdateProjection()},s.prototype.setOptions=function(c){var l;this.options=H(H(H({},this.options),c),{crossfade:(l=c.crossfade)!==null&&l!==void 0?l:!0})},s.prototype.clearMeasurements=function(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1},s.prototype.resolveTargetDelta=function(){var c,l=this.options,d=l.layout,u=l.layoutId;!this.layout||!(d||u)||(!this.targetDelta&&!this.relativeTarget&&(this.relativeParent=this.getClosestProjectingParent(),this.relativeParent&&this.relativeParent.layout&&(this.relativeTarget=Ue(),this.relativeTargetOrigin=Ue(),ur(this.relativeTargetOrigin,this.layout.actual,this.relativeParent.layout.actual),dt(this.relativeTarget,this.relativeTargetOrigin))),!(!this.relativeTarget&&!this.targetDelta)&&(this.target||(this.target=Ue(),this.targetWithTransforms=Ue()),this.relativeTarget&&this.relativeTargetOrigin&&(!((c=this.relativeParent)===null||c===void 0)&&c.target)?w4(this.target,this.relativeTarget,this.relativeParent.target):this.targetDelta?(this.resumingFrom?this.target=this.applyTransform(this.layout.actual):dt(this.target,this.layout.actual),Qd(this.target,this.targetDelta)):dt(this.target,this.layout.actual),this.attemptToResolveRelativeTarget&&(this.attemptToResolveRelativeTarget=!1,this.relativeParent=this.getClosestProjectingParent(),this.relativeParent&&!!this.relativeParent.resumingFrom==!!this.resumingFrom&&!this.relativeParent.options.layoutScroll&&this.relativeParent.target&&(this.relativeTarget=Ue(),this.relativeTargetOrigin=Ue(),ur(this.relativeTargetOrigin,this.target,this.relativeParent.target),dt(this.relativeTarget,this.relativeTargetOrigin)))))},s.prototype.getClosestProjectingParent=function(){if(!(!this.parent||Gt(this.parent.latestValues)))return(this.parent.relativeTarget||this.parent.targetDelta)&&this.parent.layout?this.parent:this.parent.getClosestProjectingParent()},s.prototype.calcProjection=function(){var c,l=this.options,d=l.layout,u=l.layoutId;if(this.isTreeAnimating=!!(!((c=this.parent)===null||c===void 0)&&c.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!(!this.layout||!(d||u))){var p=this.getLead();dt(this.layoutCorrected,this.layout.actual),A4(this.layoutCorrected,this.treeScale,this.path,!!this.resumingFrom||this!==p);var m=p.target;if(m){this.projectionDelta||(this.projectionDelta=pr(),this.projectionDeltaWithTransform=pr());var v=this.treeScale.x,f=this.treeScale.y,y=this.projectionTransform;dr(this.projectionDelta,this.layoutCorrected,m,this.latestValues),this.projectionTransform=Qc(this.projectionDelta,this.treeScale),(this.projectionTransform!==y||this.treeScale.x!==v||this.treeScale.y!==f)&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",m))}}},s.prototype.hide=function(){this.isVisible=!1},s.prototype.show=function(){this.isVisible=!0},s.prototype.scheduleRender=function(c){var l,d,u;c===void 0&&(c=!0),(d=(l=this.options).scheduleRender)===null||d===void 0||d.call(l),c&&((u=this.getStack())===null||u===void 0||u.scheduleRender()),this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)},s.prototype.setAnimationOrigin=function(c,l){var d=this,u;l===void 0&&(l=!1);var p=this.snapshot,m=(p==null?void 0:p.latestValues)||{},v=H({},this.latestValues),f=pr();this.relativeTarget=this.relativeTargetOrigin=void 0,this.attemptToResolveRelativeTarget=!l;var y=Ue(),_=p==null?void 0:p.isShared,k=(((u=this.getStack())===null||u===void 0?void 0:u.members.length)||0)<=1,x=!!(_&&!k&&this.options.crossfade===!0&&!this.path.some(Lh));this.animationProgress=0,this.mixTargetDelta=function(N){var A,S=N/1e3;nl(f.x,c.x,S),nl(f.y,c.y,S),d.setTargetDelta(f),d.relativeTarget&&d.relativeTargetOrigin&&d.layout&&(!((A=d.relativeParent)===null||A===void 0)&&A.layout)&&(ur(y,d.layout.actual,d.relativeParent.layout.actual),Ah(d.relativeTarget,d.relativeTargetOrigin,y,S)),_&&(d.animationValues=v,ph(v,m,d.latestValues,S,x,k)),d.root.scheduleUpdateProjection(),d.scheduleRender(),d.animationProgress=S},this.mixTargetDelta(0)},s.prototype.startAnimation=function(c){var l=this,d,u;this.notifyListeners("animationStart"),(d=this.currentAnimation)===null||d===void 0||d.stop(),this.resumingFrom&&((u=this.resumingFrom.currentAnimation)===null||u===void 0||u.stop()),this.pendingAnimation&&(zn.update(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=bt.update(function(){ar.hasAnimatedSinceResize=!0,l.currentAnimation=dh(0,el,H(H({},c),{onUpdate:function(p){var m;l.mixTargetDelta(p),(m=c.onUpdate)===null||m===void 0||m.call(c,p)},onComplete:function(){var p;(p=c.onComplete)===null||p===void 0||p.call(c),l.completeAnimation()}})),l.resumingFrom&&(l.resumingFrom.currentAnimation=l.currentAnimation),l.pendingAnimation=void 0})},s.prototype.completeAnimation=function(){var c;this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0),(c=this.getStack())===null||c===void 0||c.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")},s.prototype.finishAnimation=function(){var c;this.currentAnimation&&((c=this.mixTargetDelta)===null||c===void 0||c.call(this,el),this.currentAnimation.stop()),this.completeAnimation()},s.prototype.applyTransformsToTarget=function(){var c=this.getLead(),l=c.targetWithTransforms,d=c.target,u=c.layout,p=c.latestValues;!l||!d||!u||(dt(l,d),In(l,p),dr(this.projectionDeltaWithTransform,this.layoutCorrected,l,p))},s.prototype.registerSharedNode=function(c,l){var d,u,p;this.sharedNodes.has(c)||this.sharedNodes.set(c,new bh);var m=this.sharedNodes.get(c);m.add(l),l.promote({transition:(d=l.options.initialPromotionConfig)===null||d===void 0?void 0:d.transition,preserveFollowOpacity:(p=(u=l.options.initialPromotionConfig)===null||u===void 0?void 0:u.shouldPreserveFollowOpacity)===null||p===void 0?void 0:p.call(u,l)})},s.prototype.isLead=function(){var c=this.getStack();return c?c.lead===this:!0},s.prototype.getLead=function(){var c,l=this.options.layoutId;return l?((c=this.getStack())===null||c===void 0?void 0:c.lead)||this:this},s.prototype.getPrevLead=function(){var c,l=this.options.layoutId;return l?(c=this.getStack())===null||c===void 0?void 0:c.prevLead:void 0},s.prototype.getStack=function(){var c=this.options.layoutId;if(c)return this.root.sharedNodes.get(c)},s.prototype.promote=function(c){var l=c===void 0?{}:c,d=l.needsReset,u=l.transition,p=l.preserveFollowOpacity,m=this.getStack();m&&m.promote(this,p),d&&(this.projectionDelta=void 0,this.needsReset=!0),u&&this.setOptions({transition:u})},s.prototype.relegate=function(){var c=this.getStack();return c?c.relegate(this):!1},s.prototype.resetRotation=function(){var c=this.options.visualElement;if(c){for(var l=!1,d={},u=0;u<xa.length;u++){var p=xa[u],m="rotate"+p;c.getStaticValue(m)&&(l=!0,d[m]=c.getStaticValue(m),c.setStaticValue(m,0))}if(l){c==null||c.syncRender();for(var m in d)c.setStaticValue(m,d[m]);c.scheduleRender()}}},s.prototype.getProjectionStyles=function(c){var l,d,u,p,m,v;c===void 0&&(c={});var f={};if(!this.instance||this.isSVG)return f;if(this.isVisible)f.visibility="";else return{visibility:"hidden"};var y=(l=this.options.visualElement)===null||l===void 0?void 0:l.getProps().transformTemplate;if(this.needsReset)return this.needsReset=!1,f.opacity="",f.pointerEvents=co(c.pointerEvents)||"",f.transform=y?y(this.latestValues,""):"none",f;var _=this.getLead();if(!this.projectionDelta||!this.layout||!_.target){var k={};return this.options.layoutId&&(k.opacity=(d=this.latestValues.opacity)!==null&&d!==void 0?d:1,k.pointerEvents=co(c.pointerEvents)||""),this.hasProjected&&!Gt(this.latestValues)&&(k.transform=y?y({},""):"none",this.hasProjected=!1),k}var x=_.animationValues||_.latestValues;this.applyTransformsToTarget(),f.transform=Qc(this.projectionDeltaWithTransform,this.treeScale,x),y&&(f.transform=y(x,f.transform));var N=this.projectionDelta,A=N.x,S=N.y;f.transformOrigin="".concat(A.origin*100,"% ").concat(S.origin*100,"% 0"),_.animationValues?f.opacity=_===this?(p=(u=x.opacity)!==null&&u!==void 0?u:this.latestValues.opacity)!==null&&p!==void 0?p:1:this.preserveOpacity?this.latestValues.opacity:x.opacityExit:f.opacity=_===this?(m=x.opacity)!==null&&m!==void 0?m:"":(v=x.opacityExit)!==null&&v!==void 0?v:0;for(var R in So)if(x[R]!==void 0){var z=So[R],h=z.correct,g=z.applyTo,b=h(x[R],_);if(g)for(var w=g.length,C=0;C<w;C++)f[g[C]]=b;else f[R]=b}return this.options.layoutId&&(f.pointerEvents=_===this?co(c.pointerEvents)||"":"none"),f},s.prototype.clearSnapshot=function(){this.resumeFrom=this.snapshot=void 0},s.prototype.resetTree=function(){this.root.nodes.forEach(function(c){var l;return(l=c.currentAnimation)===null||l===void 0?void 0:l.stop()}),this.root.nodes.forEach(tl),this.root.sharedNodes.clear()},s})()}function wh(e){e.updateLayout()}function kh(e){var t,n,r,o,a=(n=(t=e.resumeFrom)===null||t===void 0?void 0:t.snapshot)!==null&&n!==void 0?n:e.snapshot;if(e.isLead()&&e.layout&&a&&e.hasListeners("didUpdate")){var s=e.layout,c=s.actual,l=s.measured;e.options.animationType==="size"?kt(function(x){var N=a.isShared?a.measured[x]:a.layout[x],A=Vt(N);N.min=c[x].min,N.max=N.min+A}):e.options.animationType==="position"&&kt(function(x){var N=a.isShared?a.measured[x]:a.layout[x],A=Vt(c[x]);N.max=N.min+A});var d=pr();dr(d,c,a.layout);var u=pr();a.isShared?dr(u,e.applyTransform(l,!0),a.measured):dr(u,c,a.layout);var p=!l0(d),m=!1;if(!e.resumeFrom&&(e.relativeParent=e.getClosestProjectingParent(),e.relativeParent&&!e.relativeParent.resumeFrom)){var v=e.relativeParent,f=v.snapshot,y=v.layout;if(f&&y){var _=Ue();ur(_,a.layout,f.layout);var k=Ue();ur(k,c,y.actual),d0(_,k)||(m=!0)}}e.notifyListeners("didUpdate",{layout:c,snapshot:a,delta:u,layoutDelta:d,hasLayoutChanged:p,hasRelativeTargetChanged:m})}else e.isLead()&&((o=(r=e.options).onExitComplete)===null||o===void 0||o.call(r));e.options.transition=void 0}function _h(e){e.clearSnapshot()}function tl(e){e.clearMeasurements()}function jh(e){var t=e.options.visualElement;t!=null&&t.getProps().onBeforeLayoutMeasure&&t.notifyBeforeLayoutMeasure(),e.resetTransform()}function Sh(e){e.finishAnimation(),e.targetDelta=e.relativeTarget=e.target=void 0}function Eh(e){e.resolveTargetDelta()}function Ih(e){e.calcProjection()}function Nh(e){e.resetRotation()}function Mh(e){e.removeLeadSnapshot()}function nl(e,t,n){e.translate=Me(t.translate,0,n),e.scale=Me(t.scale,1,n),e.origin=t.origin,e.originPoint=t.originPoint}function rl(e,t,n,r){e.min=Me(t.min,n.min,r),e.max=Me(t.max,n.max,r)}function Ah(e,t,n,r){rl(e.x,t.x,n.x,r),rl(e.y,t.y,n.y,r)}function Lh(e){return e.animationValues&&e.animationValues.opacityExit!==void 0}var Th={duration:.45,ease:[.4,0,.1,1]};function Oh(e,t){for(var n=e.root,r=e.path.length-1;r>=0;r--)if(e.path[r].instance){n=e.path[r];break}var o=n&&n!==e.root?n.instance:document,a=o.querySelector('[data-projection-id="'.concat(t,'"]'));a&&e.mount(a,!0)}function ol(e){e.min=Math.round(e.min),e.max=Math.round(e.max)}function il(e){ol(e.x),ol(e.y)}var Fh=u0({attachResizeListener:function(e,t){return Ko(e,"resize",t)},measureScroll:function(){return{x:document.documentElement.scrollLeft||document.body.scrollLeft,y:document.documentElement.scrollTop||document.body.scrollTop}},checkIsScrollRoot:function(){return!0}}),ki={current:void 0},Rh=u0({measureScroll:function(e){return{x:e.scrollLeft,y:e.scrollTop}},defaultParent:function(){if(!ki.current){var e=new Fh(0,{});e.mount(window),e.setOptions({layoutScroll:!0}),ki.current=e}return ki.current},resetTransform:function(e,t){e.style.transform=t??"none"},checkIsScrollRoot:function(e){return window.getComputedStyle(e).position==="fixed"}}),Dh=H(H(H(H({},x4),Dp),P4),lh),B=A3(function(e,t){return g5(e,t,Dh,oh,Rh)});function p0(){var e=M.useRef(!1);return jo(function(){return e.current=!0,function(){e.current=!1}},[]),e}function zh(){var e=p0(),t=Ae(M.useState(0),2),n=t[0],r=t[1],o=M.useCallback(function(){e.current&&r(n+1)},[n]),a=M.useCallback(function(){return bt.postRender(o)},[o]);return[a,n]}var _i=function(e){var t=e.children,n=e.initial,r=e.isPresent,o=e.onExitComplete,a=e.custom,s=e.presenceAffectsLayout,c=qn(Bh),l=Ud(),d=M.useMemo(function(){return{id:l,initial:n,isPresent:r,custom:a,onExitComplete:function(u){var p,m;c.set(u,!0);try{for(var v=u3(c.values()),f=v.next();!f.done;f=v.next()){var y=f.value;if(!y)return}}catch(_){p={error:_}}finally{try{f&&!f.done&&(m=v.return)&&m.call(v)}finally{if(p)throw p.error}}o==null||o()},register:function(u){return c.set(u,!1),function(){return c.delete(u)}}}},s?void 0:[r]);return M.useMemo(function(){c.forEach(function(u,p){return c.set(p,!1)})},[r]),M.useEffect(function(){!r&&!c.size&&(o==null||o())},[r]),M.createElement(Pr.Provider,{value:d},t)};function Bh(){return new Map}var wn=function(e){return e.key||""};function Ph(e,t){e.forEach(function(n){var r=wn(n);t.set(r,n)})}function Wh(e){var t=[];return M.Children.forEach(e,function(n){M.isValidElement(n)&&t.push(n)}),t}var Se=function(e){var t=e.children,n=e.custom,r=e.initial,o=r===void 0?!0:r,a=e.onExitComplete,s=e.exitBeforeEnter,c=e.presenceAffectsLayout,l=c===void 0?!0:c,d=Ae(zh(),1),u=d[0],p=M.useContext(as).forceRender;p&&(u=p);var m=p0(),v=Wh(t),f=v,y=new Set,_=M.useRef(f),k=M.useRef(new Map).current,x=M.useRef(!0);if(jo(function(){x.current=!1,Ph(v,k),_.current=f}),gs(function(){x.current=!0,k.clear(),y.clear()}),x.current)return M.createElement(M.Fragment,null,f.map(function(h){return M.createElement(_i,{key:wn(h),isPresent:!0,initial:o?void 0:!1,presenceAffectsLayout:l},h)}));f=vt([],Ae(f),!1);for(var N=_.current.map(wn),A=v.map(wn),S=N.length,R=0;R<S;R++){var z=N[R];A.indexOf(z)===-1&&y.add(z)}return s&&y.size&&(f=[]),y.forEach(function(h){if(A.indexOf(h)===-1){var g=k.get(h);if(g){var b=N.indexOf(h),w=function(){k.delete(h),y.delete(h);var C=_.current.findIndex(function(j){return j.key===h});if(_.current.splice(C,1),!y.size){if(_.current=v,m.current===!1)return;u(),a&&a()}};f.splice(b,0,M.createElement(_i,{key:wn(g),isPresent:!1,onExitComplete:w,custom:n,presenceAffectsLayout:l},g))}}}),f=f.map(function(h){var g=h.key;return y.has(g)?h:M.createElement(_i,{key:wn(h),isPresent:!0,presenceAffectsLayout:l},h)}),M.createElement(M.Fragment,null,y.size?f:f.map(function(h){return M.cloneElement(h)}))};function al(e){var t=e.children,n=e.isValidProp,r=Qe(e,["children","isValidProp"]);n&&ad(n),r=H(H({},M.useContext(Lr)),r),r.isStatic=qn(function(){return r.isStatic});var o=M.useMemo(function(){return r},[JSON.stringify(r.transition),r.transformPagePoint,r.reducedMotion]);return M.createElement(Lr.Provider,{value:o},t)}var ji={exports:{}},we={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var sl;function Vh(){if(sl)return we;sl=1;var e=typeof Symbol=="function"&&Symbol.for,t=e?Symbol.for("react.element"):60103,n=e?Symbol.for("react.portal"):60106,r=e?Symbol.for("react.fragment"):60107,o=e?Symbol.for("react.strict_mode"):60108,a=e?Symbol.for("react.profiler"):60114,s=e?Symbol.for("react.provider"):60109,c=e?Symbol.for("react.context"):60110,l=e?Symbol.for("react.async_mode"):60111,d=e?Symbol.for("react.concurrent_mode"):60111,u=e?Symbol.for("react.forward_ref"):60112,p=e?Symbol.for("react.suspense"):60113,m=e?Symbol.for("react.suspense_list"):60120,v=e?Symbol.for("react.memo"):60115,f=e?Symbol.for("react.lazy"):60116,y=e?Symbol.for("react.block"):60121,_=e?Symbol.for("react.fundamental"):60117,k=e?Symbol.for("react.responder"):60118,x=e?Symbol.for("react.scope"):60119;function N(S){if(typeof S=="object"&&S!==null){var R=S.$$typeof;switch(R){case t:switch(S=S.type,S){case l:case d:case r:case a:case o:case p:return S;default:switch(S=S&&S.$$typeof,S){case c:case u:case f:case v:case s:return S;default:return R}}case n:return R}}}function A(S){return N(S)===d}return we.AsyncMode=l,we.ConcurrentMode=d,we.ContextConsumer=c,we.ContextProvider=s,we.Element=t,we.ForwardRef=u,we.Fragment=r,we.Lazy=f,we.Memo=v,we.Portal=n,we.Profiler=a,we.StrictMode=o,we.Suspense=p,we.isAsyncMode=function(S){return A(S)||N(S)===l},we.isConcurrentMode=A,we.isContextConsumer=function(S){return N(S)===c},we.isContextProvider=function(S){return N(S)===s},we.isElement=function(S){return typeof S=="object"&&S!==null&&S.$$typeof===t},we.isForwardRef=function(S){return N(S)===u},we.isFragment=function(S){return N(S)===r},we.isLazy=function(S){return N(S)===f},we.isMemo=function(S){return N(S)===v},we.isPortal=function(S){return N(S)===n},we.isProfiler=function(S){return N(S)===a},we.isStrictMode=function(S){return N(S)===o},we.isSuspense=function(S){return N(S)===p},we.isValidElementType=function(S){return typeof S=="string"||typeof S=="function"||S===r||S===d||S===a||S===o||S===p||S===m||typeof S=="object"&&S!==null&&(S.$$typeof===f||S.$$typeof===v||S.$$typeof===s||S.$$typeof===c||S.$$typeof===u||S.$$typeof===_||S.$$typeof===k||S.$$typeof===x||S.$$typeof===y)},we.typeOf=N,we}var cl;function h0(){return cl||(cl=1,ji.exports=Vh()),ji.exports}var f0=h0();function Uh(e){function t(Z,V,P,W,T){for(var J=0,$=0,me=0,fe=0,ue,oe,te=0,he=0,ne,Ve=ne=ue=0,Ce=0,ze=0,Xn=0,Be=0,Gr=P.length,Jn=Gr-1,ct,ce="",Le="",ii="",ai="",Ut;Ce<Gr;){if(oe=P.charCodeAt(Ce),Ce===Jn&&$+fe+me+J!==0&&($!==0&&(oe=$===47?10:47),fe=me=J=0,Gr++,Jn++),$+fe+me+J===0){if(Ce===Jn&&(0<ze&&(ce=ce.replace(m,"")),0<ce.trim().length)){switch(oe){case 32:case 9:case 59:case 13:case 10:break;default:ce+=P.charAt(Ce)}oe=59}switch(oe){case 123:for(ce=ce.trim(),ue=ce.charCodeAt(0),ne=1,Be=++Ce;Ce<Gr;){switch(oe=P.charCodeAt(Ce)){case 123:ne++;break;case 125:ne--;break;case 47:switch(oe=P.charCodeAt(Ce+1)){case 42:case 47:e:{for(Ve=Ce+1;Ve<Jn;++Ve)switch(P.charCodeAt(Ve)){case 47:if(oe===42&&P.charCodeAt(Ve-1)===42&&Ce+2!==Ve){Ce=Ve+1;break e}break;case 10:if(oe===47){Ce=Ve+1;break e}}Ce=Ve}}break;case 91:oe++;case 40:oe++;case 34:case 39:for(;Ce++<Jn&&P.charCodeAt(Ce)!==oe;);}if(ne===0)break;Ce++}switch(ne=P.substring(Be,Ce),ue===0&&(ue=(ce=ce.replace(p,"").trim()).charCodeAt(0)),ue){case 64:switch(0<ze&&(ce=ce.replace(m,"")),oe=ce.charCodeAt(1),oe){case 100:case 109:case 115:case 45:ze=V;break;default:ze=L}if(ne=t(V,ze,ne,oe,T+1),Be=ne.length,0<F&&(ze=n(L,ce,Xn),Ut=c(3,ne,ze,V,j,C,Be,oe,T,W),ce=ze.join(""),Ut!==void 0&&(Be=(ne=Ut.trim()).length)===0&&(oe=0,ne="")),0<Be)switch(oe){case 115:ce=ce.replace(R,s);case 100:case 109:case 45:ne=ce+"{"+ne+"}";break;case 107:ce=ce.replace(x,"$1 $2"),ne=ce+"{"+ne+"}",ne=E===1||E===2&&a("@"+ne,3)?"@-webkit-"+ne+"@"+ne:"@"+ne;break;default:ne=ce+ne,W===112&&(ne=(Le+=ne,""))}else ne="";break;default:ne=t(V,n(V,ce,Xn),ne,W,T+1)}ii+=ne,ne=Xn=ze=Ve=ue=0,ce="",oe=P.charCodeAt(++Ce);break;case 125:case 59:if(ce=(0<ze?ce.replace(m,""):ce).trim(),1<(Be=ce.length))switch(Ve===0&&(ue=ce.charCodeAt(0),ue===45||96<ue&&123>ue)&&(Be=(ce=ce.replace(" ",":")).length),0<F&&(Ut=c(1,ce,V,Z,j,C,Le.length,W,T,W))!==void 0&&(Be=(ce=Ut.trim()).length)===0&&(ce="\0\0"),ue=ce.charCodeAt(0),oe=ce.charCodeAt(1),ue){case 0:break;case 64:if(oe===105||oe===99){ai+=ce+P.charAt(Ce);break}default:ce.charCodeAt(Be-1)!==58&&(Le+=o(ce,ue,oe,ce.charCodeAt(2)))}Xn=ze=Ve=ue=0,ce="",oe=P.charCodeAt(++Ce)}}switch(oe){case 13:case 10:$===47?$=0:1+ue===0&&W!==107&&0<ce.length&&(ze=1,ce+="\0"),0<F*q&&c(0,ce,V,Z,j,C,Le.length,W,T,W),C=1,j++;break;case 59:case 125:if($+fe+me+J===0){C++;break}default:switch(C++,ct=P.charAt(Ce),oe){case 9:case 32:if(fe+J+$===0)switch(te){case 44:case 58:case 9:case 32:ct="";break;default:oe!==32&&(ct=" ")}break;case 0:ct="\\0";break;case 12:ct="\\f";break;case 11:ct="\\v";break;case 38:fe+$+J===0&&(ze=Xn=1,ct="\f"+ct);break;case 108:if(fe+$+J+I===0&&0<Ve)switch(Ce-Ve){case 2:te===112&&P.charCodeAt(Ce-3)===58&&(I=te);case 8:he===111&&(I=he)}break;case 58:fe+$+J===0&&(Ve=Ce);break;case 44:$+me+fe+J===0&&(ze=1,ct+="\r");break;case 34:case 39:$===0&&(fe=fe===oe?0:fe===0?oe:fe);break;case 91:fe+$+me===0&&J++;break;case 93:fe+$+me===0&&J--;break;case 41:fe+$+J===0&&me--;break;case 40:if(fe+$+J===0){if(ue===0)switch(2*te+3*he){case 533:break;default:ue=1}me++}break;case 64:$+me+fe+J+Ve+ne===0&&(ne=1);break;case 42:case 47:if(!(0<fe+J+me))switch($){case 0:switch(2*oe+3*P.charCodeAt(Ce+1)){case 235:$=47;break;case 220:Be=Ce,$=42}break;case 42:oe===47&&te===42&&Be+2!==Ce&&(P.charCodeAt(Be+2)===33&&(Le+=P.substring(Be,Ce+1)),ct="",$=0)}}$===0&&(ce+=ct)}he=te,te=oe,Ce++}if(Be=Le.length,0<Be){if(ze=V,0<F&&(Ut=c(2,Le,ze,Z,j,C,Be,W,T,W),Ut!==void 0&&(Le=Ut).length===0))return ai+Le+ii;if(Le=ze.join(",")+"{"+Le+"}",E*I!==0){switch(E!==2||a(Le,2)||(I=0),I){case 111:Le=Le.replace(A,":-moz-$1")+Le;break;case 112:Le=Le.replace(N,"::-webkit-input-$1")+Le.replace(N,"::-moz-$1")+Le.replace(N,":-ms-input-$1")+Le}I=0}}return ai+Le+ii}function n(Z,V,P){var W=V.trim().split(_);V=W;var T=W.length,J=Z.length;switch(J){case 0:case 1:var $=0;for(Z=J===0?"":Z[0]+" ";$<T;++$)V[$]=r(Z,V[$],P).trim();break;default:var me=$=0;for(V=[];$<T;++$)for(var fe=0;fe<J;++fe)V[me++]=r(Z[fe]+" ",W[$],P).trim()}return V}function r(Z,V,P){var W=V.charCodeAt(0);switch(33>W&&(W=(V=V.trim()).charCodeAt(0)),W){case 38:return V.replace(k,"$1"+Z.trim());case 58:return Z.trim()+V.replace(k,"$1"+Z.trim());default:if(0<1*P&&0<V.indexOf("\f"))return V.replace(k,(Z.charCodeAt(0)===58?"":"$1")+Z.trim())}return Z+V}function o(Z,V,P,W){var T=Z+";",J=2*V+3*P+4*W;if(J===944){Z=T.indexOf(":",9)+1;var $=T.substring(Z,T.length-1).trim();return $=T.substring(0,Z).trim()+$+";",E===1||E===2&&a($,1)?"-webkit-"+$+$:$}if(E===0||E===2&&!a(T,1))return T;switch(J){case 1015:return T.charCodeAt(10)===97?"-webkit-"+T+T:T;case 951:return T.charCodeAt(3)===116?"-webkit-"+T+T:T;case 963:return T.charCodeAt(5)===110?"-webkit-"+T+T:T;case 1009:if(T.charCodeAt(4)!==100)break;case 969:case 942:return"-webkit-"+T+T;case 978:return"-webkit-"+T+"-moz-"+T+T;case 1019:case 983:return"-webkit-"+T+"-moz-"+T+"-ms-"+T+T;case 883:if(T.charCodeAt(8)===45)return"-webkit-"+T+T;if(0<T.indexOf("image-set(",11))return T.replace(w,"$1-webkit-$2")+T;break;case 932:if(T.charCodeAt(4)===45)switch(T.charCodeAt(5)){case 103:return"-webkit-box-"+T.replace("-grow","")+"-webkit-"+T+"-ms-"+T.replace("grow","positive")+T;case 115:return"-webkit-"+T+"-ms-"+T.replace("shrink","negative")+T;case 98:return"-webkit-"+T+"-ms-"+T.replace("basis","preferred-size")+T}return"-webkit-"+T+"-ms-"+T+T;case 964:return"-webkit-"+T+"-ms-flex-"+T+T;case 1023:if(T.charCodeAt(8)!==99)break;return $=T.substring(T.indexOf(":",15)).replace("flex-","").replace("space-between","justify"),"-webkit-box-pack"+$+"-webkit-"+T+"-ms-flex-pack"+$+T;case 1005:return f.test(T)?T.replace(v,":-webkit-")+T.replace(v,":-moz-")+T:T;case 1e3:switch($=T.substring(13).trim(),V=$.indexOf("-")+1,$.charCodeAt(0)+$.charCodeAt(V)){case 226:$=T.replace(S,"tb");break;case 232:$=T.replace(S,"tb-rl");break;case 220:$=T.replace(S,"lr");break;default:return T}return"-webkit-"+T+"-ms-"+$+T;case 1017:if(T.indexOf("sticky",9)===-1)break;case 975:switch(V=(T=Z).length-10,$=(T.charCodeAt(V)===33?T.substring(0,V):T).substring(Z.indexOf(":",7)+1).trim(),J=$.charCodeAt(0)+($.charCodeAt(7)|0)){case 203:if(111>$.charCodeAt(8))break;case 115:T=T.replace($,"-webkit-"+$)+";"+T;break;case 207:case 102:T=T.replace($,"-webkit-"+(102<J?"inline-":"")+"box")+";"+T.replace($,"-webkit-"+$)+";"+T.replace($,"-ms-"+$+"box")+";"+T}return T+";";case 938:if(T.charCodeAt(5)===45)switch(T.charCodeAt(6)){case 105:return $=T.replace("-items",""),"-webkit-"+T+"-webkit-box-"+$+"-ms-flex-"+$+T;case 115:return"-webkit-"+T+"-ms-flex-item-"+T.replace(h,"")+T;default:return"-webkit-"+T+"-ms-flex-line-pack"+T.replace("align-content","").replace(h,"")+T}break;case 973:case 989:if(T.charCodeAt(3)!==45||T.charCodeAt(4)===122)break;case 931:case 953:if(b.test(Z)===!0)return($=Z.substring(Z.indexOf(":")+1)).charCodeAt(0)===115?o(Z.replace("stretch","fill-available"),V,P,W).replace(":fill-available",":stretch"):T.replace($,"-webkit-"+$)+T.replace($,"-moz-"+$.replace("fill-",""))+T;break;case 962:if(T="-webkit-"+T+(T.charCodeAt(5)===102?"-ms-"+T:"")+T,P+W===211&&T.charCodeAt(13)===105&&0<T.indexOf("transform",10))return T.substring(0,T.indexOf(";",27)+1).replace(y,"$1-webkit-$2")+T}return T}function a(Z,V){var P=Z.indexOf(V===1?":":"{"),W=Z.substring(0,V!==3?P:10);return P=Z.substring(P+1,Z.length-1),U(V!==2?W:W.replace(g,"$1"),P,V)}function s(Z,V){var P=o(V,V.charCodeAt(0),V.charCodeAt(1),V.charCodeAt(2));return P!==V+";"?P.replace(z," or ($1)").substring(4):"("+V+")"}function c(Z,V,P,W,T,J,$,me,fe,ue){for(var oe=0,te=V,he;oe<F;++oe)switch(he=O[oe].call(u,Z,te,P,W,T,J,$,me,fe,ue)){case void 0:case!1:case!0:case null:break;default:te=he}if(te!==V)return te}function l(Z){switch(Z){case void 0:case null:F=O.length=0;break;default:if(typeof Z=="function")O[F++]=Z;else if(typeof Z=="object")for(var V=0,P=Z.length;V<P;++V)l(Z[V]);else q=!!Z|0}return l}function d(Z){return Z=Z.prefix,Z!==void 0&&(U=null,Z?typeof Z!="function"?E=1:(E=2,U=Z):E=0),d}function u(Z,V){var P=Z;if(33>P.charCodeAt(0)&&(P=P.trim()),Y=P,P=[Y],0<F){var W=c(-1,V,P,P,j,C,0,0,0,0);W!==void 0&&typeof W=="string"&&(V=W)}var T=t(L,P,V,0,0);return 0<F&&(W=c(-2,T,P,P,j,C,T.length,0,0,0),W!==void 0&&(T=W)),Y="",I=0,C=j=1,T}var p=/^\0+/g,m=/[\0\r\f]/g,v=/: */g,f=/zoo|gra/,y=/([,: ])(transform)/g,_=/,\r+?/g,k=/([\t\r\n ])*\f?&/g,x=/@(k\w+)\s*(\S*)\s*/,N=/::(place)/g,A=/:(read-only)/g,S=/[svh]\w+-[tblr]{2}/,R=/\(\s*(.*)\s*\)/g,z=/([\s\S]*?);/g,h=/-self|flex-/g,g=/[^]*?(:[rp][el]a[\w-]+)[^]*/,b=/stretch|:\s*\w+\-(?:conte|avail)/,w=/([^-])(image-set\()/,C=1,j=1,I=0,E=1,L=[],O=[],F=0,U=null,q=0,Y="";return u.use=l,u.set=d,e!==void 0&&d(e),u}var Zh={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};function $h(e){var t=Object.create(null);return function(n){return t[n]===void 0&&(t[n]=e(n)),t[n]}}var Hh=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|popover|popoverTarget|popoverTargetAction|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,ll=$h(function(e){return Hh.test(e)||e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)<91}),Si,dl;function Gh(){if(dl)return Si;dl=1;var e=h0(),t={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},n={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},r={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},o={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},a={};a[e.ForwardRef]=r,a[e.Memo]=o;function s(f){return e.isMemo(f)?o:a[f.$$typeof]||t}var c=Object.defineProperty,l=Object.getOwnPropertyNames,d=Object.getOwnPropertySymbols,u=Object.getOwnPropertyDescriptor,p=Object.getPrototypeOf,m=Object.prototype;function v(f,y,_){if(typeof y!="string"){if(m){var k=p(y);k&&k!==m&&v(f,k,_)}var x=l(y);d&&(x=x.concat(d(y)));for(var N=s(f),A=s(y),S=0;S<x.length;++S){var R=x[S];if(!n[R]&&!(_&&_[R])&&!(A&&A[R])&&!(N&&N[R])){var z=u(y,R);try{c(f,R,z)}catch{}}}}return f}return Si=v,Si}var Yh=Gh();const qh=w1(Yh);var at={};function St(){return(St=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var ul=function(e,t){for(var n=[e[0]],r=0,o=t.length;r<o;r+=1)n.push(t[r],e[r+1]);return n},Fa=function(e){return e!==null&&typeof e=="object"&&(e.toString?e.toString():Object.prototype.toString.call(e))==="[object Object]"&&!f0.typeOf(e)},Fo=Object.freeze([]),Jt=Object.freeze({});function Pn(e){return typeof e=="function"}function pl(e){return e.displayName||e.name||"Component"}function Ns(e){return e&&typeof e.styledComponentId=="string"}var Wn=typeof _1<"u"&&at!==void 0&&(at.REACT_APP_SC_ATTR||at.SC_ATTR)||"data-styled",Ms=typeof window<"u"&&"HTMLElement"in window,Kh=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof _1<"u"&&at!==void 0&&(at.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&at.REACT_APP_SC_DISABLE_SPEEDY!==""?at.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&at.REACT_APP_SC_DISABLE_SPEEDY:at.SC_DISABLE_SPEEDY!==void 0&&at.SC_DISABLE_SPEEDY!==""&&at.SC_DISABLE_SPEEDY!=="false"&&at.SC_DISABLE_SPEEDY));function pn(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];throw new Error("An error occurred. See https://git.io/JUIaE#"+e+" for more information."+(n.length>0?" Args: "+n.join(", "):""))}var Xh=(function(){function e(n){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=n}var t=e.prototype;return t.indexOfGroup=function(n){for(var r=0,o=0;o<n;o++)r+=this.groupSizes[o];return r},t.insertRules=function(n,r){if(n>=this.groupSizes.length){for(var o=this.groupSizes,a=o.length,s=a;n>=s;)(s<<=1)<0&&pn(16,""+n);this.groupSizes=new Uint32Array(s),this.groupSizes.set(o),this.length=s;for(var c=a;c<s;c++)this.groupSizes[c]=0}for(var l=this.indexOfGroup(n+1),d=0,u=r.length;d<u;d++)this.tag.insertRule(l,r[d])&&(this.groupSizes[n]++,l++)},t.clearGroup=function(n){if(n<this.length){var r=this.groupSizes[n],o=this.indexOfGroup(n),a=o+r;this.groupSizes[n]=0;for(var s=o;s<a;s++)this.tag.deleteRule(o)}},t.getGroup=function(n){var r="";if(n>=this.length||this.groupSizes[n]===0)return r;for(var o=this.groupSizes[n],a=this.indexOfGroup(n),s=a+o,c=a;c<s;c++)r+=this.tag.getRule(c)+`/*!sc*/
`;return r},e})(),po=new Map,Ro=new Map,hr=1,no=function(e){if(po.has(e))return po.get(e);for(;Ro.has(hr);)hr++;var t=hr++;return po.set(e,t),Ro.set(t,e),t},Jh=function(e){return Ro.get(e)},Qh=function(e,t){t>=hr&&(hr=t+1),po.set(e,t),Ro.set(t,e)},ef="style["+Wn+'][data-styled-version="5.3.11"]',tf=new RegExp("^"+Wn+'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'),nf=function(e,t,n){for(var r,o=n.split(","),a=0,s=o.length;a<s;a++)(r=o[a])&&e.registerName(t,r)},rf=function(e,t){for(var n=(t.textContent||"").split(`/*!sc*/
`),r=[],o=0,a=n.length;o<a;o++){var s=n[o].trim();if(s){var c=s.match(tf);if(c){var l=0|parseInt(c[1],10),d=c[2];l!==0&&(Qh(d,l),nf(e,d,c[3]),e.getTag().insertRules(l,r)),r.length=0}else r.push(s)}}},of=function(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null},g0=function(e){var t=document.head,n=e||t,r=document.createElement("style"),o=(function(c){for(var l=c.childNodes,d=l.length;d>=0;d--){var u=l[d];if(u&&u.nodeType===1&&u.hasAttribute(Wn))return u}})(n),a=o!==void 0?o.nextSibling:null;r.setAttribute(Wn,"active"),r.setAttribute("data-styled-version","5.3.11");var s=of();return s&&r.setAttribute("nonce",s),n.insertBefore(r,a),r},af=(function(){function e(n){var r=this.element=g0(n);r.appendChild(document.createTextNode("")),this.sheet=(function(o){if(o.sheet)return o.sheet;for(var a=document.styleSheets,s=0,c=a.length;s<c;s++){var l=a[s];if(l.ownerNode===o)return l}pn(17)})(r),this.length=0}var t=e.prototype;return t.insertRule=function(n,r){try{return this.sheet.insertRule(r,n),this.length++,!0}catch{return!1}},t.deleteRule=function(n){this.sheet.deleteRule(n),this.length--},t.getRule=function(n){var r=this.sheet.cssRules[n];return r!==void 0&&typeof r.cssText=="string"?r.cssText:""},e})(),sf=(function(){function e(n){var r=this.element=g0(n);this.nodes=r.childNodes,this.length=0}var t=e.prototype;return t.insertRule=function(n,r){if(n<=this.length&&n>=0){var o=document.createTextNode(r),a=this.nodes[n];return this.element.insertBefore(o,a||null),this.length++,!0}return!1},t.deleteRule=function(n){this.element.removeChild(this.nodes[n]),this.length--},t.getRule=function(n){return n<this.length?this.nodes[n].textContent:""},e})(),cf=(function(){function e(n){this.rules=[],this.length=0}var t=e.prototype;return t.insertRule=function(n,r){return n<=this.length&&(this.rules.splice(n,0,r),this.length++,!0)},t.deleteRule=function(n){this.rules.splice(n,1),this.length--},t.getRule=function(n){return n<this.length?this.rules[n]:""},e})(),hl=Ms,lf={isServer:!Ms,useCSSOMInjection:!Kh},m0=(function(){function e(n,r,o){n===void 0&&(n=Jt),r===void 0&&(r={}),this.options=St({},lf,{},n),this.gs=r,this.names=new Map(o),this.server=!!n.isServer,!this.server&&Ms&&hl&&(hl=!1,(function(a){for(var s=document.querySelectorAll(ef),c=0,l=s.length;c<l;c++){var d=s[c];d&&d.getAttribute(Wn)!=="active"&&(rf(a,d),d.parentNode&&d.parentNode.removeChild(d))}})(this))}e.registerId=function(n){return no(n)};var t=e.prototype;return t.reconstructWithOptions=function(n,r){return r===void 0&&(r=!0),new e(St({},this.options,{},n),this.gs,r&&this.names||void 0)},t.allocateGSInstance=function(n){return this.gs[n]=(this.gs[n]||0)+1},t.getTag=function(){return this.tag||(this.tag=(o=(r=this.options).isServer,a=r.useCSSOMInjection,s=r.target,n=o?new cf(s):a?new af(s):new sf(s),new Xh(n)));var n,r,o,a,s},t.hasNameForId=function(n,r){return this.names.has(n)&&this.names.get(n).has(r)},t.registerName=function(n,r){if(no(n),this.names.has(n))this.names.get(n).add(r);else{var o=new Set;o.add(r),this.names.set(n,o)}},t.insertRules=function(n,r,o){this.registerName(n,r),this.getTag().insertRules(no(n),o)},t.clearNames=function(n){this.names.has(n)&&this.names.get(n).clear()},t.clearRules=function(n){this.getTag().clearGroup(no(n)),this.clearNames(n)},t.clearTag=function(){this.tag=void 0},t.toString=function(){return(function(n){for(var r=n.getTag(),o=r.length,a="",s=0;s<o;s++){var c=Jh(s);if(c!==void 0){var l=n.names.get(c),d=r.getGroup(s);if(l&&d&&l.size){var u=Wn+".g"+s+'[id="'+c+'"]',p="";l!==void 0&&l.forEach((function(m){m.length>0&&(p+=m+",")})),a+=""+d+u+'{content:"'+p+`"}/*!sc*/
`}}}return a})(this)},e})(),df=/(a)(d)/gi,fl=function(e){return String.fromCharCode(e+(e>25?39:97))};function Ra(e){var t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=fl(t%52)+n;return(fl(t%52)+n).replace(df,"$1-$2")}var Nn=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},v0=function(e){return Nn(5381,e)};function uf(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(Pn(n)&&!Ns(n))return!1}return!0}var pf=v0("5.3.11"),hf=(function(){function e(t,n,r){this.rules=t,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&uf(t),this.componentId=n,this.baseHash=Nn(pf,n),this.baseStyle=r,m0.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,r){var o=this.componentId,a=[];if(this.baseStyle&&a.push(this.baseStyle.generateAndInjectStyles(t,n,r)),this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(o,this.staticRulesId))a.push(this.staticRulesId);else{var s=Vn(this.rules,t,n,r).join(""),c=Ra(Nn(this.baseHash,s)>>>0);if(!n.hasNameForId(o,c)){var l=r(s,"."+c,void 0,o);n.insertRules(o,c,l)}a.push(c),this.staticRulesId=c}else{for(var d=this.rules.length,u=Nn(this.baseHash,r.hash),p="",m=0;m<d;m++){var v=this.rules[m];if(typeof v=="string")p+=v;else if(v){var f=Vn(v,t,n,r),y=Array.isArray(f)?f.join(""):f;u=Nn(u,y+m),p+=y}}if(p){var _=Ra(u>>>0);if(!n.hasNameForId(o,_)){var k=r(p,"."+_,void 0,o);n.insertRules(o,_,k)}a.push(_)}}return a.join(" ")},e})(),ff=/^\s*\/\/.*$/gm,gf=[":","[",".","#"];function mf(e){var t,n,r,o,a=Jt,s=a.options,c=s===void 0?Jt:s,l=a.plugins,d=l===void 0?Fo:l,u=new Uh(c),p=[],m=(function(y){function _(k){if(k)try{y(k+"}")}catch{}}return function(k,x,N,A,S,R,z,h,g,b){switch(k){case 1:if(g===0&&x.charCodeAt(0)===64)return y(x+";"),"";break;case 2:if(h===0)return x+"/*|*/";break;case 3:switch(h){case 102:case 112:return y(N[0]+x),"";default:return x+(b===0?"/*|*/":"")}case-2:x.split("/*|*/}").forEach(_)}}})((function(y){p.push(y)})),v=function(y,_,k){return _===0&&gf.indexOf(k[n.length])!==-1||k.match(o)?y:"."+t};function f(y,_,k,x){x===void 0&&(x="&");var N=y.replace(ff,""),A=_&&k?k+" "+_+" { "+N+" }":N;return t=x,n=_,r=new RegExp("\\"+n+"\\b","g"),o=new RegExp("(\\"+n+"\\b){2,}"),u(k||!_?"":_,A)}return u.use([].concat(d,[function(y,_,k){y===2&&k.length&&k[0].lastIndexOf(n)>0&&(k[0]=k[0].replace(r,v))},m,function(y){if(y===-2){var _=p;return p=[],_}}])),f.hash=d.length?d.reduce((function(y,_){return _.name||pn(15),Nn(y,_.name)}),5381).toString():"",f}var b0=Oe.createContext();b0.Consumer;var x0=Oe.createContext(),vf=(x0.Consumer,new m0),Da=mf();function bf(){return M.useContext(b0)||vf}function xf(){return M.useContext(x0)||Da}var y0=(function(){function e(t,n){var r=this;this.inject=function(o,a){a===void 0&&(a=Da);var s=r.name+a.hash;o.hasNameForId(r.id,s)||o.insertRules(r.id,s,a(r.rules,s,"@keyframes"))},this.toString=function(){return pn(12,String(r.name))},this.name=t,this.id="sc-keyframes-"+t,this.rules=n}return e.prototype.getName=function(t){return t===void 0&&(t=Da),this.name+t.hash},e})(),yf=/([A-Z])/,Cf=/([A-Z])/g,wf=/^ms-/,kf=function(e){return"-"+e.toLowerCase()};function gl(e){return yf.test(e)?e.replace(Cf,kf).replace(wf,"-ms-"):e}var ml=function(e){return e==null||e===!1||e===""};function Vn(e,t,n,r){if(Array.isArray(e)){for(var o,a=[],s=0,c=e.length;s<c;s+=1)(o=Vn(e[s],t,n,r))!==""&&(Array.isArray(o)?a.push.apply(a,o):a.push(o));return a}if(ml(e))return"";if(Ns(e))return"."+e.styledComponentId;if(Pn(e)){if(typeof(d=e)!="function"||d.prototype&&d.prototype.isReactComponent||!t)return e;var l=e(t);return Vn(l,t,n,r)}var d;return e instanceof y0?n?(e.inject(n,r),e.getName(r)):e:Fa(e)?(function u(p,m){var v,f,y=[];for(var _ in p)p.hasOwnProperty(_)&&!ml(p[_])&&(Array.isArray(p[_])&&p[_].isCss||Pn(p[_])?y.push(gl(_)+":",p[_],";"):Fa(p[_])?y.push.apply(y,u(p[_],_)):y.push(gl(_)+": "+(v=_,(f=p[_])==null||typeof f=="boolean"||f===""?"":typeof f!="number"||f===0||v in Zh||v.startsWith("--")?String(f).trim():f+"px")+";"));return m?[m+" {"].concat(y,["}"]):y})(e):e.toString()}var vl=function(e){return Array.isArray(e)&&(e.isCss=!0),e};function se(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return Pn(e)||Fa(e)?vl(Vn(ul(Fo,[e].concat(n)))):n.length===0&&e.length===1&&typeof e[0]=="string"?e:vl(Vn(ul(e,n)))}var _f=function(e,t,n){return n===void 0&&(n=Jt),e.theme!==n.theme&&e.theme||t||n.theme},jf=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,Sf=/(^-|-$)/g;function Ei(e){return e.replace(jf,"-").replace(Sf,"")}var C0=function(e){return Ra(v0(e)>>>0)};function ro(e){return typeof e=="string"&&!0}var za=function(e){return typeof e=="function"||typeof e=="object"&&e!==null&&!Array.isArray(e)},Ef=function(e){return e!=="__proto__"&&e!=="constructor"&&e!=="prototype"};function If(e,t,n){var r=e[n];za(t)&&za(r)?w0(r,t):e[n]=t}function w0(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];for(var o=0,a=n;o<a.length;o++){var s=a[o];if(za(s))for(var c in s)Ef(c)&&If(e,s[c],c)}return e}var Do=Oe.createContext();Do.Consumer;function Nf(e){var t=M.useContext(Do),n=M.useMemo((function(){return(function(r,o){if(!r)return pn(14);if(Pn(r)){var a=r(o);return a}return Array.isArray(r)||typeof r!="object"?pn(8):o?St({},o,{},r):r})(e.theme,t)}),[e.theme,t]);return e.children?Oe.createElement(Do.Provider,{value:n},e.children):null}var Ii={};function k0(e,t,n){var r=Ns(e),o=!ro(e),a=t.attrs,s=a===void 0?Fo:a,c=t.componentId,l=c===void 0?(function(x,N){var A=typeof x!="string"?"sc":Ei(x);Ii[A]=(Ii[A]||0)+1;var S=A+"-"+C0("5.3.11"+A+Ii[A]);return N?N+"-"+S:S})(t.displayName,t.parentComponentId):c,d=t.displayName,u=d===void 0?(function(x){return ro(x)?"styled."+x:"Styled("+pl(x)+")"})(e):d,p=t.displayName&&t.componentId?Ei(t.displayName)+"-"+t.componentId:t.componentId||l,m=r&&e.attrs?Array.prototype.concat(e.attrs,s).filter(Boolean):s,v=t.shouldForwardProp;r&&e.shouldForwardProp&&(v=t.shouldForwardProp?function(x,N,A){return e.shouldForwardProp(x,N,A)&&t.shouldForwardProp(x,N,A)}:e.shouldForwardProp);var f,y=new hf(n,p,r?e.componentStyle:void 0),_=y.isStatic&&s.length===0,k=function(x,N){return(function(A,S,R,z){var h=A.attrs,g=A.componentStyle,b=A.defaultProps,w=A.foldedComponentIds,C=A.shouldForwardProp,j=A.styledComponentId,I=A.target,E=(function(W,T,J){W===void 0&&(W=Jt);var $=St({},T,{theme:W}),me={};return J.forEach((function(fe){var ue,oe,te,he=fe;for(ue in Pn(he)&&(he=he($)),he)$[ue]=me[ue]=ue==="className"?(oe=me[ue],te=he[ue],oe&&te?oe+" "+te:oe||te):he[ue]})),[$,me]})(_f(S,M.useContext(Do),b)||Jt,S,h),L=E[0],O=E[1],F=(function(W,T,J,$){var me=bf(),fe=xf(),ue=T?W.generateAndInjectStyles(Jt,me,fe):W.generateAndInjectStyles(J,me,fe);return ue})(g,z,L),U=R,q=O.$as||S.$as||O.as||S.as||I,Y=ro(q),Z=O!==S?St({},S,{},O):S,V={};for(var P in Z)P[0]!=="$"&&P!=="as"&&(P==="forwardedAs"?V.as=Z[P]:(C?C(P,ll,q):!Y||ll(P))&&(V[P]=Z[P]));return S.style&&O.style!==S.style&&(V.style=St({},S.style,{},O.style)),V.className=Array.prototype.concat(w,j,F!==j?F:null,S.className,O.className).filter(Boolean).join(" "),V.ref=U,M.createElement(q,V)})(f,x,N,_)};return k.displayName=u,(f=Oe.forwardRef(k)).attrs=m,f.componentStyle=y,f.displayName=u,f.shouldForwardProp=v,f.foldedComponentIds=r?Array.prototype.concat(e.foldedComponentIds,e.styledComponentId):Fo,f.styledComponentId=p,f.target=r?e.target:e,f.withComponent=function(x){var N=t.componentId,A=(function(R,z){if(R==null)return{};var h,g,b={},w=Object.keys(R);for(g=0;g<w.length;g++)h=w[g],z.indexOf(h)>=0||(b[h]=R[h]);return b})(t,["componentId"]),S=N&&N+"-"+(ro(x)?x:Ei(pl(x)));return k0(x,St({},A,{attrs:m,componentId:S}),n)},Object.defineProperty(f,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(x){this._foldedDefaultProps=r?w0({},e.defaultProps,x):x}}),Object.defineProperty(f,"toString",{value:function(){return"."+f.styledComponentId}}),o&&qh(f,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0,withComponent:!0}),f}var fr=function(e){return(function t(n,r,o){if(o===void 0&&(o=Jt),!f0.isValidElementType(r))return pn(1,String(r));var a=function(){return n(r,o,se.apply(void 0,arguments))};return a.withConfig=function(s){return t(n,r,St({},o,{},s))},a.attrs=function(s){return t(n,r,St({},o,{attrs:Array.prototype.concat(o.attrs,s).filter(Boolean)}))},a})(k0,e)};["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","textPath","tspan"].forEach((function(e){fr[e]=fr(e)}));function ke(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var o=se.apply(void 0,[e].concat(n)).join(""),a=C0(o);return new y0(a,o)}function bl(e,t){let n;return(...r)=>{window.clearTimeout(n),n=window.setTimeout(()=>e(...r),t)}}function As({debounce:e,scroll:t,polyfill:n,offsetSize:r}={debounce:0,scroll:!1,offsetSize:!1}){const o=n||(typeof window>"u"?class{}:window.ResizeObserver);if(!o)throw new Error("This browser does not support ResizeObserver out of the box. See: https://github.com/react-spring/react-use-measure/#resize-observer-polyfills");const[a,s]=M.useState({left:0,top:0,width:0,height:0,bottom:0,right:0,x:0,y:0}),c=M.useRef({element:null,scrollContainers:null,resizeObserver:null,lastBounds:a,orientationHandler:null}),l=e?typeof e=="number"?e:e.scroll:null,d=e?typeof e=="number"?e:e.resize:null,u=M.useRef(!1);M.useEffect(()=>(u.current=!0,()=>void(u.current=!1)));const[p,m,v]=M.useMemo(()=>{const k=()=>{if(!c.current.element)return;const{left:x,top:N,width:A,height:S,bottom:R,right:z,x:h,y:g}=c.current.element.getBoundingClientRect(),b={left:x,top:N,width:A,height:S,bottom:R,right:z,x:h,y:g};c.current.element instanceof HTMLElement&&r&&(b.height=c.current.element.offsetHeight,b.width=c.current.element.offsetWidth),Object.freeze(b),u.current&&!Tf(c.current.lastBounds,b)&&s(c.current.lastBounds=b)};return[k,d?bl(k,d):k,l?bl(k,l):k]},[s,r,l,d]);function f(){c.current.scrollContainers&&(c.current.scrollContainers.forEach(k=>k.removeEventListener("scroll",v,!0)),c.current.scrollContainers=null),c.current.resizeObserver&&(c.current.resizeObserver.disconnect(),c.current.resizeObserver=null),c.current.orientationHandler&&("orientation"in screen&&"removeEventListener"in screen.orientation?screen.orientation.removeEventListener("change",c.current.orientationHandler):"onorientationchange"in window&&window.removeEventListener("orientationchange",c.current.orientationHandler))}function y(){c.current.element&&(c.current.resizeObserver=new o(v),c.current.resizeObserver.observe(c.current.element),t&&c.current.scrollContainers&&c.current.scrollContainers.forEach(k=>k.addEventListener("scroll",v,{capture:!0,passive:!0})),c.current.orientationHandler=()=>{v()},"orientation"in screen&&"addEventListener"in screen.orientation?screen.orientation.addEventListener("change",c.current.orientationHandler):"onorientationchange"in window&&window.addEventListener("orientationchange",c.current.orientationHandler))}const _=k=>{!k||k===c.current.element||(f(),c.current.element=k,c.current.scrollContainers=_0(k),y())};return Af(v,!!t),Mf(m),M.useEffect(()=>{f(),y()},[t,v,m]),M.useEffect(()=>f,[]),[_,a,p]}function Mf(e){M.useEffect(()=>{const t=e;return window.addEventListener("resize",t),()=>void window.removeEventListener("resize",t)},[e])}function Af(e,t){M.useEffect(()=>{if(t){const n=e;return window.addEventListener("scroll",n,{capture:!0,passive:!0}),()=>void window.removeEventListener("scroll",n,!0)}},[e,t])}function _0(e){const t=[];if(!e||e===document.body)return t;const{overflow:n,overflowX:r,overflowY:o}=window.getComputedStyle(e);return[n,r,o].some(a=>a==="auto"||a==="scroll")&&t.push(e),[...t,..._0(e.parentElement)]}const Lf=["x","y","top","bottom","left","right","width","height"],Tf=(e,t)=>Lf.every(n=>e[n]===t[n]);var j0=(function(){if(typeof Map<"u")return Map;function e(t,n){var r=-1;return t.some(function(o,a){return o[0]===n?(r=a,!0):!1}),r}return(function(){function t(){this.__entries__=[]}return Object.defineProperty(t.prototype,"size",{get:function(){return this.__entries__.length},enumerable:!0,configurable:!0}),t.prototype.get=function(n){var r=e(this.__entries__,n),o=this.__entries__[r];return o&&o[1]},t.prototype.set=function(n,r){var o=e(this.__entries__,n);~o?this.__entries__[o][1]=r:this.__entries__.push([n,r])},t.prototype.delete=function(n){var r=this.__entries__,o=e(r,n);~o&&r.splice(o,1)},t.prototype.has=function(n){return!!~e(this.__entries__,n)},t.prototype.clear=function(){this.__entries__.splice(0)},t.prototype.forEach=function(n,r){r===void 0&&(r=null);for(var o=0,a=this.__entries__;o<a.length;o++){var s=a[o];n.call(r,s[1],s[0])}},t})()})(),Ba=typeof window<"u"&&typeof document<"u"&&window.document===document,zo=(function(){return typeof si<"u"&&si.Math===Math?si:typeof self<"u"&&self.Math===Math?self:typeof window<"u"&&window.Math===Math?window:Function("return this")()})(),Of=(function(){return typeof requestAnimationFrame=="function"?requestAnimationFrame.bind(zo):function(e){return setTimeout(function(){return e(Date.now())},1e3/60)}})(),Ff=2;function Rf(e,t){var n=!1,r=!1,o=0;function a(){n&&(n=!1,e()),r&&c()}function s(){Of(a)}function c(){var l=Date.now();if(n){if(l-o<Ff)return;r=!0}else n=!0,r=!1,setTimeout(s,t);o=l}return c}var Df=20,zf=["top","right","bottom","left","width","height","size","weight"],Bf=typeof MutationObserver<"u",Pf=(function(){function e(){this.connected_=!1,this.mutationEventsAdded_=!1,this.mutationsObserver_=null,this.observers_=[],this.onTransitionEnd_=this.onTransitionEnd_.bind(this),this.refresh=Rf(this.refresh.bind(this),Df)}return e.prototype.addObserver=function(t){~this.observers_.indexOf(t)||this.observers_.push(t),this.connected_||this.connect_()},e.prototype.removeObserver=function(t){var n=this.observers_,r=n.indexOf(t);~r&&n.splice(r,1),!n.length&&this.connected_&&this.disconnect_()},e.prototype.refresh=function(){var t=this.updateObservers_();t&&this.refresh()},e.prototype.updateObservers_=function(){var t=this.observers_.filter(function(n){return n.gatherActive(),n.hasActive()});return t.forEach(function(n){return n.broadcastActive()}),t.length>0},e.prototype.connect_=function(){!Ba||this.connected_||(document.addEventListener("transitionend",this.onTransitionEnd_),window.addEventListener("resize",this.refresh),Bf?(this.mutationsObserver_=new MutationObserver(this.refresh),this.mutationsObserver_.observe(document,{attributes:!0,childList:!0,characterData:!0,subtree:!0})):(document.addEventListener("DOMSubtreeModified",this.refresh),this.mutationEventsAdded_=!0),this.connected_=!0)},e.prototype.disconnect_=function(){!Ba||!this.connected_||(document.removeEventListener("transitionend",this.onTransitionEnd_),window.removeEventListener("resize",this.refresh),this.mutationsObserver_&&this.mutationsObserver_.disconnect(),this.mutationEventsAdded_&&document.removeEventListener("DOMSubtreeModified",this.refresh),this.mutationsObserver_=null,this.mutationEventsAdded_=!1,this.connected_=!1)},e.prototype.onTransitionEnd_=function(t){var n=t.propertyName,r=n===void 0?"":n,o=zf.some(function(a){return!!~r.indexOf(a)});o&&this.refresh()},e.getInstance=function(){return this.instance_||(this.instance_=new e),this.instance_},e.instance_=null,e})(),S0=(function(e,t){for(var n=0,r=Object.keys(t);n<r.length;n++){var o=r[n];Object.defineProperty(e,o,{value:t[o],enumerable:!1,writable:!1,configurable:!0})}return e}),Un=(function(e){var t=e&&e.ownerDocument&&e.ownerDocument.defaultView;return t||zo}),E0=ei(0,0,0,0);function Bo(e){return parseFloat(e)||0}function xl(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return t.reduce(function(r,o){var a=e["border-"+o+"-width"];return r+Bo(a)},0)}function Wf(e){for(var t=["top","right","bottom","left"],n={},r=0,o=t;r<o.length;r++){var a=o[r],s=e["padding-"+a];n[a]=Bo(s)}return n}function Vf(e){var t=e.getBBox();return ei(0,0,t.width,t.height)}function Uf(e){var t=e.clientWidth,n=e.clientHeight;if(!t&&!n)return E0;var r=Un(e).getComputedStyle(e),o=Wf(r),a=o.left+o.right,s=o.top+o.bottom,c=Bo(r.width),l=Bo(r.height);if(r.boxSizing==="border-box"&&(Math.round(c+a)!==t&&(c-=xl(r,"left","right")+a),Math.round(l+s)!==n&&(l-=xl(r,"top","bottom")+s)),!$f(e)){var d=Math.round(c+a)-t,u=Math.round(l+s)-n;Math.abs(d)!==1&&(c-=d),Math.abs(u)!==1&&(l-=u)}return ei(o.left,o.top,c,l)}var Zf=(function(){return typeof SVGGraphicsElement<"u"?function(e){return e instanceof Un(e).SVGGraphicsElement}:function(e){return e instanceof Un(e).SVGElement&&typeof e.getBBox=="function"}})();function $f(e){return e===Un(e).document.documentElement}function Hf(e){return Ba?Zf(e)?Vf(e):Uf(e):E0}function Gf(e){var t=e.x,n=e.y,r=e.width,o=e.height,a=typeof DOMRectReadOnly<"u"?DOMRectReadOnly:Object,s=Object.create(a.prototype);return S0(s,{x:t,y:n,width:r,height:o,top:n,right:t+r,bottom:o+n,left:t}),s}function ei(e,t,n,r){return{x:e,y:t,width:n,height:r}}var Yf=(function(){function e(t){this.broadcastWidth=0,this.broadcastHeight=0,this.contentRect_=ei(0,0,0,0),this.target=t}return e.prototype.isActive=function(){var t=Hf(this.target);return this.contentRect_=t,t.width!==this.broadcastWidth||t.height!==this.broadcastHeight},e.prototype.broadcastRect=function(){var t=this.contentRect_;return this.broadcastWidth=t.width,this.broadcastHeight=t.height,t},e})(),qf=(function(){function e(t,n){var r=Gf(n);S0(this,{target:t,contentRect:r})}return e})(),Kf=(function(){function e(t,n,r){if(this.activeObservations_=[],this.observations_=new j0,typeof t!="function")throw new TypeError("The callback provided as parameter 1 is not a function.");this.callback_=t,this.controller_=n,this.callbackCtx_=r}return e.prototype.observe=function(t){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if(!(typeof Element>"u"||!(Element instanceof Object))){if(!(t instanceof Un(t).Element))throw new TypeError('parameter 1 is not of type "Element".');var n=this.observations_;n.has(t)||(n.set(t,new Yf(t)),this.controller_.addObserver(this),this.controller_.refresh())}},e.prototype.unobserve=function(t){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if(!(typeof Element>"u"||!(Element instanceof Object))){if(!(t instanceof Un(t).Element))throw new TypeError('parameter 1 is not of type "Element".');var n=this.observations_;n.has(t)&&(n.delete(t),n.size||this.controller_.removeObserver(this))}},e.prototype.disconnect=function(){this.clearActive(),this.observations_.clear(),this.controller_.removeObserver(this)},e.prototype.gatherActive=function(){var t=this;this.clearActive(),this.observations_.forEach(function(n){n.isActive()&&t.activeObservations_.push(n)})},e.prototype.broadcastActive=function(){if(this.hasActive()){var t=this.callbackCtx_,n=this.activeObservations_.map(function(r){return new qf(r.target,r.broadcastRect())});this.callback_.call(t,n,t),this.clearActive()}},e.prototype.clearActive=function(){this.activeObservations_.splice(0)},e.prototype.hasActive=function(){return this.activeObservations_.length>0},e})(),I0=typeof WeakMap<"u"?new WeakMap:new j0,N0=(function(){function e(t){if(!(this instanceof e))throw new TypeError("Cannot call a class as a function.");if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");var n=Pf.getInstance(),r=new Kf(t,n,this);I0.set(this,r)}return e})();["observe","unobserve","disconnect"].forEach(function(e){N0.prototype[e]=function(){var t;return(t=I0.get(this))[e].apply(t,arguments)}});var Xf=(function(){return typeof zo.ResizeObserver<"u"?zo.ResizeObserver:N0})(),vn={},Ni,yl;function Jf(){return yl||(yl=1,Ni=function(){return typeof Promise=="function"&&Promise.prototype&&Promise.prototype.then}),Ni}var Mi={},$t={},Cl;function fn(){if(Cl)return $t;Cl=1;let e;const t=[0,26,44,70,100,134,172,196,242,292,346,404,466,532,581,655,733,815,901,991,1085,1156,1258,1364,1474,1588,1706,1828,1921,2051,2185,2323,2465,2611,2761,2876,3034,3196,3362,3532,3706];return $t.getSymbolSize=function(r){if(!r)throw new Error('"version" cannot be null or undefined');if(r<1||r>40)throw new Error('"version" should be in range from 1 to 40');return r*4+17},$t.getSymbolTotalCodewords=function(r){return t[r]},$t.getBCHDigit=function(n){let r=0;for(;n!==0;)r++,n>>>=1;return r},$t.setToSJISFunction=function(r){if(typeof r!="function")throw new Error('"toSJISFunc" is not a valid function.');e=r},$t.isKanjiModeEnabled=function(){return typeof e<"u"},$t.toSJIS=function(r){return e(r)},$t}var Ai={},wl;function Ls(){return wl||(wl=1,(function(e){e.L={bit:1},e.M={bit:0},e.Q={bit:3},e.H={bit:2};function t(n){if(typeof n!="string")throw new Error("Param is not a string");switch(n.toLowerCase()){case"l":case"low":return e.L;case"m":case"medium":return e.M;case"q":case"quartile":return e.Q;case"h":case"high":return e.H;default:throw new Error("Unknown EC Level: "+n)}}e.isValid=function(r){return r&&typeof r.bit<"u"&&r.bit>=0&&r.bit<4},e.from=function(r,o){if(e.isValid(r))return r;try{return t(r)}catch{return o}}})(Ai)),Ai}var Li,kl;function Qf(){if(kl)return Li;kl=1;function e(){this.buffer=[],this.length=0}return e.prototype={get:function(t){const n=Math.floor(t/8);return(this.buffer[n]>>>7-t%8&1)===1},put:function(t,n){for(let r=0;r<n;r++)this.putBit((t>>>n-r-1&1)===1)},getLengthInBits:function(){return this.length},putBit:function(t){const n=Math.floor(this.length/8);this.buffer.length<=n&&this.buffer.push(0),t&&(this.buffer[n]|=128>>>this.length%8),this.length++}},Li=e,Li}var Ti,_l;function e9(){if(_l)return Ti;_l=1;function e(t){if(!t||t<1)throw new Error("BitMatrix size must be defined and greater than 0");this.size=t,this.data=new Uint8Array(t*t),this.reservedBit=new Uint8Array(t*t)}return e.prototype.set=function(t,n,r,o){const a=t*this.size+n;this.data[a]=r,o&&(this.reservedBit[a]=!0)},e.prototype.get=function(t,n){return this.data[t*this.size+n]},e.prototype.xor=function(t,n,r){this.data[t*this.size+n]^=r},e.prototype.isReserved=function(t,n){return this.reservedBit[t*this.size+n]},Ti=e,Ti}var Oi={},jl;function t9(){return jl||(jl=1,(function(e){const t=fn().getSymbolSize;e.getRowColCoords=function(r){if(r===1)return[];const o=Math.floor(r/7)+2,a=t(r),s=a===145?26:Math.ceil((a-13)/(2*o-2))*2,c=[a-7];for(let l=1;l<o-1;l++)c[l]=c[l-1]-s;return c.push(6),c.reverse()},e.getPositions=function(r){const o=[],a=e.getRowColCoords(r),s=a.length;for(let c=0;c<s;c++)for(let l=0;l<s;l++)c===0&&l===0||c===0&&l===s-1||c===s-1&&l===0||o.push([a[c],a[l]]);return o}})(Oi)),Oi}var Fi={},Sl;function n9(){if(Sl)return Fi;Sl=1;const e=fn().getSymbolSize,t=7;return Fi.getPositions=function(r){const o=e(r);return[[0,0],[o-t,0],[0,o-t]]},Fi}var Ri={},El;function r9(){return El||(El=1,(function(e){e.Patterns={PATTERN000:0,PATTERN001:1,PATTERN010:2,PATTERN011:3,PATTERN100:4,PATTERN101:5,PATTERN110:6,PATTERN111:7};const t={N1:3,N2:3,N3:40,N4:10};e.isValid=function(o){return o!=null&&o!==""&&!isNaN(o)&&o>=0&&o<=7},e.from=function(o){return e.isValid(o)?parseInt(o,10):void 0},e.getPenaltyN1=function(o){const a=o.size;let s=0,c=0,l=0,d=null,u=null;for(let p=0;p<a;p++){c=l=0,d=u=null;for(let m=0;m<a;m++){let v=o.get(p,m);v===d?c++:(c>=5&&(s+=t.N1+(c-5)),d=v,c=1),v=o.get(m,p),v===u?l++:(l>=5&&(s+=t.N1+(l-5)),u=v,l=1)}c>=5&&(s+=t.N1+(c-5)),l>=5&&(s+=t.N1+(l-5))}return s},e.getPenaltyN2=function(o){const a=o.size;let s=0;for(let c=0;c<a-1;c++)for(let l=0;l<a-1;l++){const d=o.get(c,l)+o.get(c,l+1)+o.get(c+1,l)+o.get(c+1,l+1);(d===4||d===0)&&s++}return s*t.N2},e.getPenaltyN3=function(o){const a=o.size;let s=0,c=0,l=0;for(let d=0;d<a;d++){c=l=0;for(let u=0;u<a;u++)c=c<<1&2047|o.get(d,u),u>=10&&(c===1488||c===93)&&s++,l=l<<1&2047|o.get(u,d),u>=10&&(l===1488||l===93)&&s++}return s*t.N3},e.getPenaltyN4=function(o){let a=0;const s=o.data.length;for(let l=0;l<s;l++)a+=o.data[l];return Math.abs(Math.ceil(a*100/s/5)-10)*t.N4};function n(r,o,a){switch(r){case e.Patterns.PATTERN000:return(o+a)%2===0;case e.Patterns.PATTERN001:return o%2===0;case e.Patterns.PATTERN010:return a%3===0;case e.Patterns.PATTERN011:return(o+a)%3===0;case e.Patterns.PATTERN100:return(Math.floor(o/2)+Math.floor(a/3))%2===0;case e.Patterns.PATTERN101:return o*a%2+o*a%3===0;case e.Patterns.PATTERN110:return(o*a%2+o*a%3)%2===0;case e.Patterns.PATTERN111:return(o*a%3+(o+a)%2)%2===0;default:throw new Error("bad maskPattern:"+r)}}e.applyMask=function(o,a){const s=a.size;for(let c=0;c<s;c++)for(let l=0;l<s;l++)a.isReserved(l,c)||a.xor(l,c,n(o,l,c))},e.getBestMask=function(o,a){const s=Object.keys(e.Patterns).length;let c=0,l=1/0;for(let d=0;d<s;d++){a(d),e.applyMask(d,o);const u=e.getPenaltyN1(o)+e.getPenaltyN2(o)+e.getPenaltyN3(o)+e.getPenaltyN4(o);e.applyMask(d,o),u<l&&(l=u,c=d)}return c}})(Ri)),Ri}var oo={},Il;function M0(){if(Il)return oo;Il=1;const e=Ls(),t=[1,1,1,1,1,1,1,1,1,1,2,2,1,2,2,4,1,2,4,4,2,4,4,4,2,4,6,5,2,4,6,6,2,5,8,8,4,5,8,8,4,5,8,11,4,8,10,11,4,9,12,16,4,9,16,16,6,10,12,18,6,10,17,16,6,11,16,19,6,13,18,21,7,14,21,25,8,16,20,25,8,17,23,25,9,17,23,34,9,18,25,30,10,20,27,32,12,21,29,35,12,23,34,37,12,25,34,40,13,26,35,42,14,28,38,45,15,29,40,48,16,31,43,51,17,33,45,54,18,35,48,57,19,37,51,60,19,38,53,63,20,40,56,66,21,43,59,70,22,45,62,74,24,47,65,77,25,49,68,81],n=[7,10,13,17,10,16,22,28,15,26,36,44,20,36,52,64,26,48,72,88,36,64,96,112,40,72,108,130,48,88,132,156,60,110,160,192,72,130,192,224,80,150,224,264,96,176,260,308,104,198,288,352,120,216,320,384,132,240,360,432,144,280,408,480,168,308,448,532,180,338,504,588,196,364,546,650,224,416,600,700,224,442,644,750,252,476,690,816,270,504,750,900,300,560,810,960,312,588,870,1050,336,644,952,1110,360,700,1020,1200,390,728,1050,1260,420,784,1140,1350,450,812,1200,1440,480,868,1290,1530,510,924,1350,1620,540,980,1440,1710,570,1036,1530,1800,570,1064,1590,1890,600,1120,1680,1980,630,1204,1770,2100,660,1260,1860,2220,720,1316,1950,2310,750,1372,2040,2430];return oo.getBlocksCount=function(o,a){switch(a){case e.L:return t[(o-1)*4+0];case e.M:return t[(o-1)*4+1];case e.Q:return t[(o-1)*4+2];case e.H:return t[(o-1)*4+3];default:return}},oo.getTotalCodewordsCount=function(o,a){switch(a){case e.L:return n[(o-1)*4+0];case e.M:return n[(o-1)*4+1];case e.Q:return n[(o-1)*4+2];case e.H:return n[(o-1)*4+3];default:return}},oo}var Di={},tr={},Nl;function o9(){if(Nl)return tr;Nl=1;const e=new Uint8Array(512),t=new Uint8Array(256);return(function(){let r=1;for(let o=0;o<255;o++)e[o]=r,t[r]=o,r<<=1,r&256&&(r^=285);for(let o=255;o<512;o++)e[o]=e[o-255]})(),tr.log=function(r){if(r<1)throw new Error("log("+r+")");return t[r]},tr.exp=function(r){return e[r]},tr.mul=function(r,o){return r===0||o===0?0:e[t[r]+t[o]]},tr}var Ml;function i9(){return Ml||(Ml=1,(function(e){const t=o9();e.mul=function(r,o){const a=new Uint8Array(r.length+o.length-1);for(let s=0;s<r.length;s++)for(let c=0;c<o.length;c++)a[s+c]^=t.mul(r[s],o[c]);return a},e.mod=function(r,o){let a=new Uint8Array(r);for(;a.length-o.length>=0;){const s=a[0];for(let l=0;l<o.length;l++)a[l]^=t.mul(o[l],s);let c=0;for(;c<a.length&&a[c]===0;)c++;a=a.slice(c)}return a},e.generateECPolynomial=function(r){let o=new Uint8Array([1]);for(let a=0;a<r;a++)o=e.mul(o,new Uint8Array([1,t.exp(a)]));return o}})(Di)),Di}var zi,Al;function a9(){if(Al)return zi;Al=1;const e=i9();function t(n){this.genPoly=void 0,this.degree=n,this.degree&&this.initialize(this.degree)}return t.prototype.initialize=function(r){this.degree=r,this.genPoly=e.generateECPolynomial(this.degree)},t.prototype.encode=function(r){if(!this.genPoly)throw new Error("Encoder not initialized");const o=new Uint8Array(r.length+this.degree);o.set(r);const a=e.mod(o,this.genPoly),s=this.degree-a.length;if(s>0){const c=new Uint8Array(this.degree);return c.set(a,s),c}return a},zi=t,zi}var Bi={},Pi={},Wi={},Ll;function A0(){return Ll||(Ll=1,Wi.isValid=function(t){return!isNaN(t)&&t>=1&&t<=40}),Wi}var yt={},Tl;function L0(){if(Tl)return yt;Tl=1;const e="[0-9]+",t="[A-Z $%*+\\-./:]+";let n="(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+";n=n.replace(/u/g,"\\u");const r="(?:(?![A-Z0-9 $%*+\\-./:]|"+n+`)(?:.|[\r
]))+`;yt.KANJI=new RegExp(n,"g"),yt.BYTE_KANJI=new RegExp("[^A-Z0-9 $%*+\\-./:]+","g"),yt.BYTE=new RegExp(r,"g"),yt.NUMERIC=new RegExp(e,"g"),yt.ALPHANUMERIC=new RegExp(t,"g");const o=new RegExp("^"+n+"$"),a=new RegExp("^"+e+"$"),s=new RegExp("^[A-Z0-9 $%*+\\-./:]+$");return yt.testKanji=function(l){return o.test(l)},yt.testNumeric=function(l){return a.test(l)},yt.testAlphanumeric=function(l){return s.test(l)},yt}var Ol;function gn(){return Ol||(Ol=1,(function(e){const t=A0(),n=L0();e.NUMERIC={id:"Numeric",bit:1,ccBits:[10,12,14]},e.ALPHANUMERIC={id:"Alphanumeric",bit:2,ccBits:[9,11,13]},e.BYTE={id:"Byte",bit:4,ccBits:[8,16,16]},e.KANJI={id:"Kanji",bit:8,ccBits:[8,10,12]},e.MIXED={bit:-1},e.getCharCountIndicator=function(a,s){if(!a.ccBits)throw new Error("Invalid mode: "+a);if(!t.isValid(s))throw new Error("Invalid version: "+s);return s>=1&&s<10?a.ccBits[0]:s<27?a.ccBits[1]:a.ccBits[2]},e.getBestModeForData=function(a){return n.testNumeric(a)?e.NUMERIC:n.testAlphanumeric(a)?e.ALPHANUMERIC:n.testKanji(a)?e.KANJI:e.BYTE},e.toString=function(a){if(a&&a.id)return a.id;throw new Error("Invalid mode")},e.isValid=function(a){return a&&a.bit&&a.ccBits};function r(o){if(typeof o!="string")throw new Error("Param is not a string");switch(o.toLowerCase()){case"numeric":return e.NUMERIC;case"alphanumeric":return e.ALPHANUMERIC;case"kanji":return e.KANJI;case"byte":return e.BYTE;default:throw new Error("Unknown mode: "+o)}}e.from=function(a,s){if(e.isValid(a))return a;try{return r(a)}catch{return s}}})(Pi)),Pi}var Fl;function s9(){return Fl||(Fl=1,(function(e){const t=fn(),n=M0(),r=Ls(),o=gn(),a=A0(),s=7973,c=t.getBCHDigit(s);function l(m,v,f){for(let y=1;y<=40;y++)if(v<=e.getCapacity(y,f,m))return y}function d(m,v){return o.getCharCountIndicator(m,v)+4}function u(m,v){let f=0;return m.forEach(function(y){const _=d(y.mode,v);f+=_+y.getBitsLength()}),f}function p(m,v){for(let f=1;f<=40;f++)if(u(m,f)<=e.getCapacity(f,v,o.MIXED))return f}e.from=function(v,f){return a.isValid(v)?parseInt(v,10):f},e.getCapacity=function(v,f,y){if(!a.isValid(v))throw new Error("Invalid QR Code version");typeof y>"u"&&(y=o.BYTE);const _=t.getSymbolTotalCodewords(v),k=n.getTotalCodewordsCount(v,f),x=(_-k)*8;if(y===o.MIXED)return x;const N=x-d(y,v);switch(y){case o.NUMERIC:return Math.floor(N/10*3);case o.ALPHANUMERIC:return Math.floor(N/11*2);case o.KANJI:return Math.floor(N/13);case o.BYTE:default:return Math.floor(N/8)}},e.getBestVersionForData=function(v,f){let y;const _=r.from(f,r.M);if(Array.isArray(v)){if(v.length>1)return p(v,_);if(v.length===0)return 1;y=v[0]}else y=v;return l(y.mode,y.getLength(),_)},e.getEncodedBits=function(v){if(!a.isValid(v)||v<7)throw new Error("Invalid QR Code version");let f=v<<12;for(;t.getBCHDigit(f)-c>=0;)f^=s<<t.getBCHDigit(f)-c;return v<<12|f}})(Bi)),Bi}var Vi={},Rl;function c9(){if(Rl)return Vi;Rl=1;const e=fn(),t=1335,n=21522,r=e.getBCHDigit(t);return Vi.getEncodedBits=function(a,s){const c=a.bit<<3|s;let l=c<<10;for(;e.getBCHDigit(l)-r>=0;)l^=t<<e.getBCHDigit(l)-r;return(c<<10|l)^n},Vi}var Ui={},Zi,Dl;function l9(){if(Dl)return Zi;Dl=1;const e=gn();function t(n){this.mode=e.NUMERIC,this.data=n.toString()}return t.getBitsLength=function(r){return 10*Math.floor(r/3)+(r%3?r%3*3+1:0)},t.prototype.getLength=function(){return this.data.length},t.prototype.getBitsLength=function(){return t.getBitsLength(this.data.length)},t.prototype.write=function(r){let o,a,s;for(o=0;o+3<=this.data.length;o+=3)a=this.data.substr(o,3),s=parseInt(a,10),r.put(s,10);const c=this.data.length-o;c>0&&(a=this.data.substr(o),s=parseInt(a,10),r.put(s,c*3+1))},Zi=t,Zi}var $i,zl;function d9(){if(zl)return $i;zl=1;const e=gn(),t=["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"," ","$","%","*","+","-",".","/",":"];function n(r){this.mode=e.ALPHANUMERIC,this.data=r}return n.getBitsLength=function(o){return 11*Math.floor(o/2)+6*(o%2)},n.prototype.getLength=function(){return this.data.length},n.prototype.getBitsLength=function(){return n.getBitsLength(this.data.length)},n.prototype.write=function(o){let a;for(a=0;a+2<=this.data.length;a+=2){let s=t.indexOf(this.data[a])*45;s+=t.indexOf(this.data[a+1]),o.put(s,11)}this.data.length%2&&o.put(t.indexOf(this.data[a]),6)},$i=n,$i}var Hi,Bl;function u9(){if(Bl)return Hi;Bl=1;const e=gn();function t(n){this.mode=e.BYTE,typeof n=="string"?this.data=new TextEncoder().encode(n):this.data=new Uint8Array(n)}return t.getBitsLength=function(r){return r*8},t.prototype.getLength=function(){return this.data.length},t.prototype.getBitsLength=function(){return t.getBitsLength(this.data.length)},t.prototype.write=function(n){for(let r=0,o=this.data.length;r<o;r++)n.put(this.data[r],8)},Hi=t,Hi}var Gi,Pl;function p9(){if(Pl)return Gi;Pl=1;const e=gn(),t=fn();function n(r){this.mode=e.KANJI,this.data=r}return n.getBitsLength=function(o){return o*13},n.prototype.getLength=function(){return this.data.length},n.prototype.getBitsLength=function(){return n.getBitsLength(this.data.length)},n.prototype.write=function(r){let o;for(o=0;o<this.data.length;o++){let a=t.toSJIS(this.data[o]);if(a>=33088&&a<=40956)a-=33088;else if(a>=57408&&a<=60351)a-=49472;else throw new Error("Invalid SJIS character: "+this.data[o]+`
Make sure your charset is UTF-8`);a=(a>>>8&255)*192+(a&255),r.put(a,13)}},Gi=n,Gi}var Wl;function h9(){return Wl||(Wl=1,(function(e){const t=gn(),n=l9(),r=d9(),o=u9(),a=p9(),s=L0(),c=fn(),l=Bu();function d(k){return unescape(encodeURIComponent(k)).length}function u(k,x,N){const A=[];let S;for(;(S=k.exec(N))!==null;)A.push({data:S[0],index:S.index,mode:x,length:S[0].length});return A}function p(k){const x=u(s.NUMERIC,t.NUMERIC,k),N=u(s.ALPHANUMERIC,t.ALPHANUMERIC,k);let A,S;return c.isKanjiModeEnabled()?(A=u(s.BYTE,t.BYTE,k),S=u(s.KANJI,t.KANJI,k)):(A=u(s.BYTE_KANJI,t.BYTE,k),S=[]),x.concat(N,A,S).sort(function(z,h){return z.index-h.index}).map(function(z){return{data:z.data,mode:z.mode,length:z.length}})}function m(k,x){switch(x){case t.NUMERIC:return n.getBitsLength(k);case t.ALPHANUMERIC:return r.getBitsLength(k);case t.KANJI:return a.getBitsLength(k);case t.BYTE:return o.getBitsLength(k)}}function v(k){return k.reduce(function(x,N){const A=x.length-1>=0?x[x.length-1]:null;return A&&A.mode===N.mode?(x[x.length-1].data+=N.data,x):(x.push(N),x)},[])}function f(k){const x=[];for(let N=0;N<k.length;N++){const A=k[N];switch(A.mode){case t.NUMERIC:x.push([A,{data:A.data,mode:t.ALPHANUMERIC,length:A.length},{data:A.data,mode:t.BYTE,length:A.length}]);break;case t.ALPHANUMERIC:x.push([A,{data:A.data,mode:t.BYTE,length:A.length}]);break;case t.KANJI:x.push([A,{data:A.data,mode:t.BYTE,length:d(A.data)}]);break;case t.BYTE:x.push([{data:A.data,mode:t.BYTE,length:d(A.data)}])}}return x}function y(k,x){const N={},A={start:{}};let S=["start"];for(let R=0;R<k.length;R++){const z=k[R],h=[];for(let g=0;g<z.length;g++){const b=z[g],w=""+R+g;h.push(w),N[w]={node:b,lastCount:0},A[w]={};for(let C=0;C<S.length;C++){const j=S[C];N[j]&&N[j].node.mode===b.mode?(A[j][w]=m(N[j].lastCount+b.length,b.mode)-m(N[j].lastCount,b.mode),N[j].lastCount+=b.length):(N[j]&&(N[j].lastCount=b.length),A[j][w]=m(b.length,b.mode)+4+t.getCharCountIndicator(b.mode,x))}}S=h}for(let R=0;R<S.length;R++)A[S[R]].end=0;return{map:A,table:N}}function _(k,x){let N;const A=t.getBestModeForData(k);if(N=t.from(x,A),N!==t.BYTE&&N.bit<A.bit)throw new Error('"'+k+'" cannot be encoded with mode '+t.toString(N)+`.
 Suggested mode is: `+t.toString(A));switch(N===t.KANJI&&!c.isKanjiModeEnabled()&&(N=t.BYTE),N){case t.NUMERIC:return new n(k);case t.ALPHANUMERIC:return new r(k);case t.KANJI:return new a(k);case t.BYTE:return new o(k)}}e.fromArray=function(x){return x.reduce(function(N,A){return typeof A=="string"?N.push(_(A,null)):A.data&&N.push(_(A.data,A.mode)),N},[])},e.fromString=function(x,N){const A=p(x,c.isKanjiModeEnabled()),S=f(A),R=y(S,N),z=l.find_path(R.map,"start","end"),h=[];for(let g=1;g<z.length-1;g++)h.push(R.table[z[g]].node);return e.fromArray(v(h))},e.rawSplit=function(x){return e.fromArray(p(x,c.isKanjiModeEnabled()))}})(Ui)),Ui}var Vl;function f9(){if(Vl)return Mi;Vl=1;const e=fn(),t=Ls(),n=Qf(),r=e9(),o=t9(),a=n9(),s=r9(),c=M0(),l=a9(),d=s9(),u=c9(),p=gn(),m=h9();function v(R,z){const h=R.size,g=a.getPositions(z);for(let b=0;b<g.length;b++){const w=g[b][0],C=g[b][1];for(let j=-1;j<=7;j++)if(!(w+j<=-1||h<=w+j))for(let I=-1;I<=7;I++)C+I<=-1||h<=C+I||(j>=0&&j<=6&&(I===0||I===6)||I>=0&&I<=6&&(j===0||j===6)||j>=2&&j<=4&&I>=2&&I<=4?R.set(w+j,C+I,!0,!0):R.set(w+j,C+I,!1,!0))}}function f(R){const z=R.size;for(let h=8;h<z-8;h++){const g=h%2===0;R.set(h,6,g,!0),R.set(6,h,g,!0)}}function y(R,z){const h=o.getPositions(z);for(let g=0;g<h.length;g++){const b=h[g][0],w=h[g][1];for(let C=-2;C<=2;C++)for(let j=-2;j<=2;j++)C===-2||C===2||j===-2||j===2||C===0&&j===0?R.set(b+C,w+j,!0,!0):R.set(b+C,w+j,!1,!0)}}function _(R,z){const h=R.size,g=d.getEncodedBits(z);let b,w,C;for(let j=0;j<18;j++)b=Math.floor(j/3),w=j%3+h-8-3,C=(g>>j&1)===1,R.set(b,w,C,!0),R.set(w,b,C,!0)}function k(R,z,h){const g=R.size,b=u.getEncodedBits(z,h);let w,C;for(w=0;w<15;w++)C=(b>>w&1)===1,w<6?R.set(w,8,C,!0):w<8?R.set(w+1,8,C,!0):R.set(g-15+w,8,C,!0),w<8?R.set(8,g-w-1,C,!0):w<9?R.set(8,15-w-1+1,C,!0):R.set(8,15-w-1,C,!0);R.set(g-8,8,1,!0)}function x(R,z){const h=R.size;let g=-1,b=h-1,w=7,C=0;for(let j=h-1;j>0;j-=2)for(j===6&&j--;;){for(let I=0;I<2;I++)if(!R.isReserved(b,j-I)){let E=!1;C<z.length&&(E=(z[C]>>>w&1)===1),R.set(b,j-I,E),w--,w===-1&&(C++,w=7)}if(b+=g,b<0||h<=b){b-=g,g=-g;break}}}function N(R,z,h){const g=new n;h.forEach(function(I){g.put(I.mode.bit,4),g.put(I.getLength(),p.getCharCountIndicator(I.mode,R)),I.write(g)});const b=e.getSymbolTotalCodewords(R),w=c.getTotalCodewordsCount(R,z),C=(b-w)*8;for(g.getLengthInBits()+4<=C&&g.put(0,4);g.getLengthInBits()%8!==0;)g.putBit(0);const j=(C-g.getLengthInBits())/8;for(let I=0;I<j;I++)g.put(I%2?17:236,8);return A(g,R,z)}function A(R,z,h){const g=e.getSymbolTotalCodewords(z),b=c.getTotalCodewordsCount(z,h),w=g-b,C=c.getBlocksCount(z,h),j=g%C,I=C-j,E=Math.floor(g/C),L=Math.floor(w/C),O=L+1,F=E-L,U=new l(F);let q=0;const Y=new Array(C),Z=new Array(C);let V=0;const P=new Uint8Array(R.buffer);for(let me=0;me<C;me++){const fe=me<I?L:O;Y[me]=P.slice(q,q+fe),Z[me]=U.encode(Y[me]),q+=fe,V=Math.max(V,fe)}const W=new Uint8Array(g);let T=0,J,$;for(J=0;J<V;J++)for($=0;$<C;$++)J<Y[$].length&&(W[T++]=Y[$][J]);for(J=0;J<F;J++)for($=0;$<C;$++)W[T++]=Z[$][J];return W}function S(R,z,h,g){let b;if(Array.isArray(R))b=m.fromArray(R);else if(typeof R=="string"){let E=z;if(!E){const L=m.rawSplit(R);E=d.getBestVersionForData(L,h)}b=m.fromString(R,E||40)}else throw new Error("Invalid data");const w=d.getBestVersionForData(b,h);if(!w)throw new Error("The amount of data is too big to be stored in a QR Code");if(!z)z=w;else if(z<w)throw new Error(`
The chosen QR Code version cannot contain this amount of data.
Minimum version required to store current data is: `+w+`.
`);const C=N(z,h,b),j=e.getSymbolSize(z),I=new r(j);return v(I,z),f(I),y(I,z),k(I,h,0),z>=7&&_(I,z),x(I,C),isNaN(g)&&(g=s.getBestMask(I,k.bind(null,I,h))),s.applyMask(g,I),k(I,h,g),{modules:I,version:z,errorCorrectionLevel:h,maskPattern:g,segments:b}}return Mi.create=function(z,h){if(typeof z>"u"||z==="")throw new Error("No input text");let g=t.M,b,w;return typeof h<"u"&&(g=t.from(h.errorCorrectionLevel,t.M),b=d.from(h.version),w=s.from(h.maskPattern),h.toSJISFunc&&e.setToSJISFunction(h.toSJISFunc)),S(z,b,g,w)},Mi}var Yi={},qi={},Ul;function T0(){return Ul||(Ul=1,(function(e){function t(n){if(typeof n=="number"&&(n=n.toString()),typeof n!="string")throw new Error("Color should be defined as hex string");let r=n.slice().replace("#","").split("");if(r.length<3||r.length===5||r.length>8)throw new Error("Invalid hex color: "+n);(r.length===3||r.length===4)&&(r=Array.prototype.concat.apply([],r.map(function(a){return[a,a]}))),r.length===6&&r.push("F","F");const o=parseInt(r.join(""),16);return{r:o>>24&255,g:o>>16&255,b:o>>8&255,a:o&255,hex:"#"+r.slice(0,6).join("")}}e.getOptions=function(r){r||(r={}),r.color||(r.color={});const o=typeof r.margin>"u"||r.margin===null||r.margin<0?4:r.margin,a=r.width&&r.width>=21?r.width:void 0,s=r.scale||4;return{width:a,scale:a?4:s,margin:o,color:{dark:t(r.color.dark||"#000000ff"),light:t(r.color.light||"#ffffffff")},type:r.type,rendererOpts:r.rendererOpts||{}}},e.getScale=function(r,o){return o.width&&o.width>=r+o.margin*2?o.width/(r+o.margin*2):o.scale},e.getImageWidth=function(r,o){const a=e.getScale(r,o);return Math.floor((r+o.margin*2)*a)},e.qrToImageData=function(r,o,a){const s=o.modules.size,c=o.modules.data,l=e.getScale(s,a),d=Math.floor((s+a.margin*2)*l),u=a.margin*l,p=[a.color.light,a.color.dark];for(let m=0;m<d;m++)for(let v=0;v<d;v++){let f=(m*d+v)*4,y=a.color.light;if(m>=u&&v>=u&&m<d-u&&v<d-u){const _=Math.floor((m-u)/l),k=Math.floor((v-u)/l);y=p[c[_*s+k]?1:0]}r[f++]=y.r,r[f++]=y.g,r[f++]=y.b,r[f]=y.a}}})(qi)),qi}var Zl;function g9(){return Zl||(Zl=1,(function(e){const t=T0();function n(o,a,s){o.clearRect(0,0,a.width,a.height),a.style||(a.style={}),a.height=s,a.width=s,a.style.height=s+"px",a.style.width=s+"px"}function r(){try{return document.createElement("canvas")}catch{throw new Error("You need to specify a canvas element")}}e.render=function(a,s,c){let l=c,d=s;typeof l>"u"&&(!s||!s.getContext)&&(l=s,s=void 0),s||(d=r()),l=t.getOptions(l);const u=t.getImageWidth(a.modules.size,l),p=d.getContext("2d"),m=p.createImageData(u,u);return t.qrToImageData(m.data,a,l),n(p,d,u),p.putImageData(m,0,0),d},e.renderToDataURL=function(a,s,c){let l=c;typeof l>"u"&&(!s||!s.getContext)&&(l=s,s=void 0),l||(l={});const d=e.render(a,s,l),u=l.type||"image/png",p=l.rendererOpts||{};return d.toDataURL(u,p.quality)}})(Yi)),Yi}var Ki={},$l;function m9(){if($l)return Ki;$l=1;const e=T0();function t(o,a){const s=o.a/255,c=a+'="'+o.hex+'"';return s<1?c+" "+a+'-opacity="'+s.toFixed(2).slice(1)+'"':c}function n(o,a,s){let c=o+a;return typeof s<"u"&&(c+=" "+s),c}function r(o,a,s){let c="",l=0,d=!1,u=0;for(let p=0;p<o.length;p++){const m=Math.floor(p%a),v=Math.floor(p/a);!m&&!d&&(d=!0),o[p]?(u++,p>0&&m>0&&o[p-1]||(c+=d?n("M",m+s,.5+v+s):n("m",l,0),l=0,d=!1),m+1<a&&o[p+1]||(c+=n("h",u),u=0)):l++}return c}return Ki.render=function(a,s,c){const l=e.getOptions(s),d=a.modules.size,u=a.modules.data,p=d+l.margin*2,m=l.color.light.a?"<path "+t(l.color.light,"fill")+' d="M0 0h'+p+"v"+p+'H0z"/>':"",v="<path "+t(l.color.dark,"stroke")+' d="'+r(u,d,l.margin)+'"/>',f='viewBox="0 0 '+p+" "+p+'"',_='<svg xmlns="http://www.w3.org/2000/svg" '+(l.width?'width="'+l.width+'" height="'+l.width+'" ':"")+f+' shape-rendering="crispEdges">'+m+v+`</svg>
`;return typeof c=="function"&&c(null,_),_},Ki}var Hl;function v9(){if(Hl)return vn;Hl=1;const e=Jf(),t=f9(),n=g9(),r=m9();function o(a,s,c,l,d){const u=[].slice.call(arguments,1),p=u.length,m=typeof u[p-1]=="function";if(!m&&!e())throw new Error("Callback required as last argument");if(m){if(p<2)throw new Error("Too few arguments provided");p===2?(d=c,c=s,s=l=void 0):p===3&&(s.getContext&&typeof d>"u"?(d=l,l=void 0):(d=l,l=c,c=s,s=void 0))}else{if(p<1)throw new Error("Too few arguments provided");return p===1?(c=s,s=l=void 0):p===2&&!s.getContext&&(l=c,c=s,s=void 0),new Promise(function(v,f){try{const y=t.create(c,l);v(a(y,s,l))}catch(y){f(y)}})}try{const v=t.create(c,l);d(null,a(v,s,l))}catch(v){d(v)}}return vn.create=t.create,vn.toCanvas=o.bind(null,n.render),vn.toDataURL=o.bind(null,n.renderToDataURL),vn.toString=o.bind(null,function(a,s,c){return r.render(a,c)}),vn}var O0=v9();const F0=w1(O0),Fm=Uu({__proto__:null,default:F0},[O0]);var Xi=0,Ji=1,io=2,Qi=3,ea=4,b9=5,x9=6,R0=["preEnter","entering","entered","preExit","exiting","exited","unmounted"],ta=function(t){return t?x9:b9},Gl=function(t,n,r,o,a){clearTimeout(o.current),n(t),r.current=t,a&&a({state:R0[t]})},D0=function(t){var n=t===void 0?{}:t,r=n.enter,o=r===void 0?!0:r,a=n.exit,s=a===void 0?!0:a,c=n.preEnter,l=n.preExit,d=n.timeout,u=n.initialEntered,p=n.mountOnEnter,m=n.unmountOnExit,v=n.onChange,f=M.useState(u?io:ta(p)),y=f[0],_=f[1],k=M.useRef(y),x=M.useRef(),N,A;typeof d=="object"?(N=d.enter,A=d.exit):N=A=d;var S=M.useCallback(function(){var z;switch(k.current){case Ji:case Xi:z=io;break;case ea:case Qi:z=ta(m);break}z!==void 0&&Gl(z,_,k,x,v)},[v,m]),R=M.useCallback(function(z){var h=function b(w){switch(Gl(w,_,k,x,v),w){case Ji:N>=0&&(x.current=setTimeout(S,N));break;case ea:A>=0&&(x.current=setTimeout(S,A));break;case Xi:case Qi:x.current=setTimeout(function(){return b(w+1)},0);break}},g=k.current<=io;typeof z!="boolean"&&(z=!g),z?g||h(o?c?Xi:Ji:io):g&&h(s?l?Qi:ea:ta(m))},[S,v,o,s,c,l,N,A,m]);return M.useEffect(function(){return function(){return clearTimeout(x.current)}},[]),[R0[y],R,S]};let y9,C9;const w9=()=>y9,k9=()=>C9,Ts=e=>{if(typeof window>"u")return!1;const{ethereum:t}=window;return!!(t!=null&&t[`is${e}`]||t!=null&&t.providers&&(t!=null&&t.providers.find(n=>n==null?void 0:n[`is${e}`])))},_9=()=>Ts("Phantom"),j9=()=>Ts("Argent"),S9=()=>Ts("Safe"),E9=({...e})=>i.jsxs("svg",{...e,"aria-hidden":"true",width:"44",height:"44",viewBox:"0 0 44 44",fill:"none",xmlns:"http://www.w3.org/2000/svg",style:{background:"linear-gradient(180deg, #8995A9 0%, #424D5F 99.48%)"},children:[i.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M20.5611 8.12948C21.0082 7.90729 21.5007 7.79167 22 7.79167C22.4993 7.79167 22.9919 7.90729 23.439 8.12948L23.4408 8.1304L33.0387 12.9293C33.577 13.197 34.031 13.61 34.3478 14.121C34.6649 14.6323 34.833 15.2218 34.8333 15.8234V27.2595C34.833 27.8611 34.6649 28.4511 34.3478 28.9624C34.031 29.4733 33.578 29.8858 33.0398 30.1535L23.4411 34.9528C22.9919 35.1775 22.4963 35.2947 21.994 35.2947C21.4918 35.2947 20.9964 35.1777 20.5472 34.9529L10.9475 30.1531L10.9452 30.1519C10.4071 29.8808 9.95535 29.4646 9.6411 28.9504C9.32739 28.437 9.16312 27.8464 9.16673 27.2448L9.16675 27.2417L10.0004 27.2475H9.16673V27.2448V15.8239C9.16705 15.2223 9.33518 14.6322 9.65222 14.121C9.96906 13.61 10.4221 13.1976 10.9604 12.9298L20.5592 8.1304L20.5611 8.12948ZM21.3031 9.62267L11.8706 14.3389L22 19.4036L32.1294 14.3389L22.697 9.62267C22.4806 9.51531 22.2416 9.45905 22 9.45905C21.7585 9.45905 21.5194 9.51534 21.3031 9.62267ZM10.8341 15.8241C10.8341 15.7785 10.8362 15.733 10.8401 15.6878L21.1663 20.8509V33.3983L11.6955 28.6629C11.4352 28.5315 11.2159 28.3297 11.0638 28.0809C10.9116 27.8318 10.8321 27.5452 10.8341 27.2533L10.8341 27.2475V15.8241ZM22.8337 33.3923L32.2967 28.6608C32.5576 28.5312 32.7772 28.3313 32.9308 28.0836C33.0844 27.836 33.1658 27.5504 33.166 27.259V15.8243C33.1659 15.7786 33.1639 15.7331 33.1599 15.6878L22.8337 20.8509V33.3923Z",fill:"url(#paint0_linear_3546_7073)"}),i.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M10.8341 15.8241C10.8341 15.7785 10.8362 15.733 10.8401 15.6878L21.1663 20.8509V33.3983L11.6955 28.6629C11.4352 28.5315 11.2159 28.3297 11.0638 28.0809C10.9116 27.8318 10.8321 27.5452 10.8341 27.2533L10.8341 27.2475V15.8241Z",fill:"url(#paint1_linear_3546_7073)",fillOpacity:"0.3"}),i.jsxs("defs",{children:[i.jsxs("linearGradient",{id:"paint0_linear_3546_7073",x1:"22",y1:"7.79167",x2:"22",y2:"35.2947",gradientUnits:"userSpaceOnUse",children:[i.jsx("stop",{stopColor:"white"}),i.jsx("stop",{offset:"1",stopColor:"white",stopOpacity:"0.7"})]}),i.jsxs("linearGradient",{id:"paint1_linear_3546_7073",x1:"22",y1:"7.79167",x2:"22",y2:"35.2947",gradientUnits:"userSpaceOnUse",children:[i.jsx("stop",{stopColor:"white"}),i.jsx("stop",{offset:"1",stopColor:"white",stopOpacity:"0.7"})]})]})]}),I9=({...e})=>i.jsx("svg",{...e,width:"32",height:"32",viewBox:"0 0 32 32",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:i.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M15.6505 3.64041C15.6501 3.64062 15.6497 3.64083 15.6493 3.64103L6.05165 8.43985L16.2501 13.5391L26.4484 8.43987L16.8508 3.64103C16.8504 3.64083 16.85 3.64063 16.8496 3.64043C16.6632 3.54806 16.458 3.5 16.25 3.5C16.042 3.5 15.8369 3.54806 15.6505 3.64041ZM28 10.4592L17.5001 15.7091L17.5 28.5205L27.248 23.6465L27.2508 23.6452C27.4757 23.5334 27.665 23.3611 27.7973 23.1477C27.9297 22.9342 27.9999 22.6881 28 22.4369V10.4592ZM15 28.527L15.0001 15.7091L4.50006 10.4591V22.4333C4.49831 22.6849 4.56687 22.9319 4.69807 23.1466C4.82896 23.3608 5.01696 23.5342 5.24095 23.6475C5.24148 23.6477 5.242 23.648 5.24253 23.6483L15 28.527ZM14.5207 31.0824L4.12104 25.8826L4.11759 25.8809C3.47681 25.558 2.93902 25.0625 2.56486 24.4502C2.19154 23.8394 1.99597 23.1365 2.00006 22.4207V10.0486C2.00044 9.33234 2.20062 8.62972 2.5781 8.021C2.95529 7.41274 3.49457 6.92167 4.13537 6.60291C4.13585 6.60267 4.13633 6.60243 4.13681 6.60219L14.534 1.40359L14.5368 1.40221C15.0692 1.13767 15.6556 1 16.25 1C16.8445 1 17.4309 1.13767 17.9633 1.40221L17.966 1.40358L28.3633 6.60219C28.3638 6.60245 28.3643 6.6027 28.3648 6.60295C29.0055 6.92171 29.5448 7.41276 29.922 8.021C30.2994 8.62973 30.4996 9.33168 30.5 10.0479V22.4376C30.4996 23.1538 30.2994 23.8565 29.922 24.4652C29.5448 25.0734 29.0056 25.5644 28.365 25.8831C28.3644 25.8834 28.3638 25.8837 28.3633 25.884L17.9664 31.0824C17.9663 31.0825 17.9665 31.0824 17.9664 31.0824C17.4316 31.3499 16.8415 31.4894 16.2435 31.4894C15.6455 31.4894 15.0554 31.3499 14.5207 31.0824C14.5205 31.0824 14.5208 31.0825 14.5207 31.0824Z",fill:"#CCCCCC"})}),z0=({background:e=!1,...t})=>i.jsx("svg",{...t,width:"32",height:"32",viewBox:"0 0 32 32",fill:"none",xmlns:"http://www.w3.org/2000/svg",style:e?{background:"var(--ck-brand-walletConnect)"}:void 0,children:i.jsx("path",{d:"M9.58818 11.8556C13.1293 8.31442 18.8706 8.31442 22.4117 11.8556L22.8379 12.2818C23.015 12.4588 23.015 12.7459 22.8379 12.9229L21.3801 14.3808C21.2915 14.4693 21.148 14.4693 21.0595 14.3808L20.473 13.7943C18.0026 11.3239 13.9973 11.3239 11.5269 13.7943L10.8989 14.4223C10.8104 14.5109 10.6668 14.5109 10.5783 14.4223L9.12041 12.9645C8.94336 12.7875 8.94336 12.5004 9.12041 12.3234L9.58818 11.8556ZM25.4268 14.8706L26.7243 16.1682C26.9013 16.3452 26.9013 16.6323 26.7243 16.8093L20.8737 22.6599C20.6966 22.8371 20.4096 22.8371 20.2325 22.6599L16.0802 18.5076C16.0359 18.4634 15.9641 18.4634 15.9199 18.5076L11.7675 22.6599C11.5905 22.8371 11.3034 22.8371 11.1264 22.66C11.1264 22.66 11.1264 22.6599 11.1264 22.6599L5.27561 16.8092C5.09856 16.6322 5.09856 16.3451 5.27561 16.168L6.57313 14.8706C6.75019 14.6934 7.03726 14.6934 7.21431 14.8706L11.3668 19.023C11.411 19.0672 11.4828 19.0672 11.5271 19.023L15.6793 14.8706C15.8563 14.6934 16.1434 14.6934 16.3205 14.8706L20.473 19.023C20.5172 19.0672 20.589 19.0672 20.6332 19.023L24.7856 14.8706C24.9627 14.6935 25.2498 14.6935 25.4268 14.8706Z",fill:e?"white":"var(--ck-brand-walletConnect)"})}),N9=({background:e=!1,...t})=>i.jsxs("svg",{...t,style:e?{background:"var(--ck-brand-metamask-bg)",borderRadius:"27.5%"}:void 0,width:"88",height:"88",viewBox:"0 0 88 88",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[i.jsx("path",{d:"M74.4066 73.7063L59.3305 69.249L47.9614 75.9975L40.0287 75.9941L28.6527 69.249L13.5835 73.7063L9 58.3408L13.584 41.2875L9 26.8697L13.584 9L37.1306 22.969H50.8595L74.4066 9L78.9906 26.8697L74.4066 41.2875L78.9906 58.3408L74.4066 73.7063Z",fill:"var(--ck-brand-metamask-01)"}),i.jsx("path",{d:"M13.587 9L37.1341 22.9788L36.198 32.5722L13.587 9ZM28.6567 58.3471L39.0172 66.1838L28.6567 69.2485V58.3471ZM38.189 45.3909L36.198 32.5791L23.452 41.2915L23.4451 41.288V41.2944L23.4846 50.2623L28.6532 45.3914L38.189 45.3909ZM74.4066 9L50.8595 22.9788L51.7927 32.5722L74.4066 9ZM59.3374 58.3471L48.9764 66.1838L59.3374 69.2485V58.3471ZM64.5455 41.2939V41.2875L64.5425 41.291L51.7961 32.5791L49.8051 45.3909H59.3369L64.509 50.2613L64.5455 41.2939Z",fill:"var(--ck-brand-metamask-01)"}),i.jsx("path",{d:"M28.6532 69.2485L13.584 73.7058L9 58.3471H28.6532V69.2485ZM38.1856 45.3875L41.0639 63.9097L37.0744 53.6109L23.4782 50.2613L28.6498 45.388L38.1856 45.3875ZM59.3369 69.2485L74.4066 73.7058L78.9906 58.3467H59.3369C59.3369 58.3471 59.3369 69.2485 59.3369 69.2485ZM49.8051 45.3875L46.9267 63.9097L50.9157 53.6109L64.513 50.2613L59.3379 45.388L49.8051 45.3875Z",fill:"var(--ck-brand-metamask-02)"}),i.jsx("path",{d:"M9 58.3408L13.584 41.2876H23.4417L23.4777 50.2584L37.0754 53.6079L41.0644 63.9063L39.0137 66.174L28.6532 58.3374H9V58.3408ZM78.9906 58.3408L74.4066 41.2876H64.5485L64.5125 50.2584L50.9157 53.6079L46.9262 63.9063L48.9764 66.174L59.3374 58.3374H78.9906V58.3408ZM50.8595 22.969H37.1306L36.1985 32.5624L41.0649 63.896H46.9267L51.7961 32.5624L50.8595 22.969Z",fill:"var(--ck-brand-metamask-03)"}),i.jsx("path",{d:"M13.584 9L9 26.8697L13.584 41.2875H23.4417L36.1945 32.5727L13.584 9ZM35.3368 49.1076H30.8711L28.4398 51.4743L37.0784 53.6006L35.3368 49.1042V49.1076ZM74.4066 9L78.9906 26.8697L74.4066 41.2875H64.5485L51.7961 32.5727L74.4066 9ZM52.6603 49.1076H57.1324L59.5637 51.4772L50.9152 53.6079L52.6603 49.1042V49.1076ZM47.958 69.8848L48.9769 66.1809L46.9262 63.9131H41.06L39.0098 66.1809L40.0282 69.8848",fill:"var(--ck-brand-metamask-04)"}),i.jsx("path",{d:"M47.958 69.8843V76.0005H40.0292V69.8843H47.958Z",fill:"var(--ck-brand-metamask-05)"}),i.jsx("path",{d:"M28.6567 69.2421L40.0356 75.9971V69.8809L39.0167 66.1775L28.6567 69.2421ZM59.3374 69.2421L47.958 75.9971V69.8809L48.9769 66.1775L59.3374 69.2421Z",fill:"var(--ck-brand-metamask-06)"})]}),M9=({background:e=!1,...t})=>i.jsxs("svg",{...t,width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[i.jsx("circle",{cx:"10",cy:"10",r:"10",fill:"var(--ck-brand-coinbaseWallet)"}),e&&i.jsx("rect",{rx:"27%",width:"20",height:"20",fill:"var(--ck-brand-coinbaseWallet)"}),i.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M10.0001 17C13.8661 17 17.0001 13.866 17.0001 10C17.0001 6.13401 13.8661 3 10.0001 3C6.13413 3 3.00012 6.13401 3.00012 10C3.00012 13.866 6.13413 17 10.0001 17ZM8.25012 7.71429C7.95427 7.71429 7.71441 7.95414 7.71441 8.25V11.75C7.71441 12.0459 7.95427 12.2857 8.25012 12.2857H11.7501C12.046 12.2857 12.2858 12.0459 12.2858 11.75V8.25C12.2858 7.95414 12.046 7.71429 11.7501 7.71429H8.25012Z",fill:"white"})]}),A9=()=>i.jsx("svg",{width:"88",height:"88",viewBox:"0 0 88 88",fill:"none",xmlns:"http://www.w3.org/2000/svg",style:{color:"#fff",background:"var(--ck-aave-brand)"},children:i.jsx("path",{d:"M33.8487 32.137C37.6217 31.5245 41.1783 34.0861 41.7907 37.8591C42.4032 41.6321 39.84 45.1869 36.067 45.7992C32.2942 46.4116 28.7392 43.85 28.1266 40.0774C27.5143 36.3046 30.0762 32.7499 33.8487 32.137ZM51.9404 32.137C55.7132 31.5249 59.268 34.0862 59.8805 37.8591C60.493 41.6321 57.9297 45.1869 54.1567 45.7992C50.384 46.4114 46.829 43.85 46.2165 40.0774C45.604 36.3042 48.1672 32.7496 51.9404 32.137ZM43.9929 10.3984C62.7831 10.3989 78.0182 25.9246 78.0151 45.0707H69.3229C69.3227 30.7223 58.0723 19.0894 43.9929 19.0888C29.913 19.0888 18.6611 30.7221 18.661 45.0707H9.96875C9.96402 25.9242 25.2006 10.3984 43.9929 10.3984Z",fill:"currentColor"})}),B0=({theme:e="light",...t})=>i.jsxs("svg",{...t,width:"44",height:"44",viewBox:"0 0 44 44",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[i.jsx("rect",{width:"44",height:"44",fill:e==="light"?"var(--ck-brand-trust-02)":"var(--ck-brand-trust-02b)"}),i.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M33.0246 11.8662C33.4096 11.8662 33.774 12.0243 34.0421 12.2925C34.3102 12.5675 34.4615 12.9387 34.4546 13.3168C34.3859 17.4143 34.2277 20.5493 33.9321 23.0312C33.6433 25.5131 33.2102 27.3556 32.5571 28.8475C32.1171 29.8443 31.574 30.6693 30.9346 31.3706C30.0752 32.2987 29.0921 32.9725 28.0196 33.6119C27.561 33.8861 27.0843 34.1568 26.5842 34.4408C25.5172 35.0468 24.3441 35.713 23.0146 36.6025C22.5333 36.9256 21.9077 36.9256 21.4265 36.6025C20.0766 35.7026 18.8879 35.0281 17.8112 34.4173C17.5718 34.2815 17.3379 34.1488 17.109 34.0175C15.8509 33.2887 14.7165 32.5943 13.7265 31.5906C13.0665 30.9306 12.4959 30.1262 12.0421 29.1706C11.4234 27.8918 11.004 26.345 10.6946 24.3443C10.2821 21.67 10.0759 18.1706 10.0002 13.3168C9.99336 12.9387 10.1377 12.5675 10.4059 12.2925C10.674 12.0243 11.0452 11.8662 11.4302 11.8662H12.0215C13.8433 11.8731 17.8652 11.6943 21.344 8.98559C21.8596 8.58683 22.5815 8.58683 23.0971 8.98559C26.5759 11.6943 30.5977 11.8731 32.4265 11.8662H33.0246ZM29.8277 27.9331C30.2746 27.0118 30.6459 25.74 30.9277 23.9112C31.2646 21.725 31.4709 18.755 31.5671 14.7125C29.4221 14.6506 25.7371 14.2381 22.224 11.8731C18.7109 14.2312 15.0259 14.6437 12.8877 14.7125C12.9633 18.0537 13.1146 20.6525 13.3552 22.6943C13.6302 25.0181 14.0221 26.5925 14.5102 27.6993C14.8333 28.435 15.1909 28.9643 15.6171 29.4318C16.1877 30.0575 16.9096 30.5731 17.8927 31.1643C18.3005 31.409 18.7502 31.6635 19.2396 31.9406C20.1116 32.4341 21.1099 32.9991 22.224 33.7081C23.3175 33.0107 24.3014 32.4515 25.1633 31.9616C25.4231 31.8139 25.6717 31.6725 25.909 31.5356C27.119 30.8412 28.0127 30.2637 28.6796 29.59C29.1265 29.1293 29.4909 28.6275 29.8277 27.9331Z",fill:e==="light"?"var(--ck-brand-trust-01)":"var(--ck-brand-trust-01b)"})]}),P0=({...e})=>i.jsxs("svg",{...e,width:"32",height:"32",viewBox:"0 0 32 32",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[i.jsx("rect",{width:"32",height:"32",fill:"white"}),i.jsx("path",{d:"M18.3242 7.63647H13.6516C13.4955 7.63647 13.3704 7.76611 13.367 7.92726C13.2726 12.4568 10.9768 16.7559 7.02532 19.8009C6.89986 19.8976 6.87128 20.0792 6.963 20.21L9.69685 24.112C9.78986 24.2448 9.97107 24.2747 10.0986 24.1772C12.5694 22.2856 14.5567 20.0038 15.9879 17.4746C17.4191 20.0038 19.4065 22.2856 21.8773 24.1772C22.0047 24.2747 22.186 24.2448 22.2791 24.112L25.013 20.21C25.1045 20.0792 25.0759 19.8976 24.9506 19.8009C20.999 16.7559 18.7033 12.4568 18.609 7.92726C18.6056 7.76611 18.4803 7.63647 18.3242 7.63647Z",fill:"var(--ck-brand-argent)"})]}),W0=({...e})=>i.jsx("svg",{...e,width:"32",height:"32",viewBox:"0 0 32 32",fill:"none",xmlns:"http://www.w3.org/2000/svg",style:{background:`linear-gradient(
      180deg,
      var(--ck-brand-imtoken-01) 0%,
      var(--ck-brand-imtoken-02) 100%
    )`},children:i.jsx("path",{d:"M26.8543 9.96509C27.5498 19.3857 21.4942 23.8384 16.0655 24.3132C11.0184 24.7546 6.26765 21.6534 5.85087 16.8885C5.50707 12.952 7.94004 11.2761 9.8516 11.109C11.8177 10.9367 13.4698 12.2925 13.6132 13.9342C13.7512 15.5125 12.7664 16.2308 12.0815 16.2906C11.5398 16.3381 10.8584 16.0093 10.7968 15.3032C10.7441 14.6965 10.9744 14.6138 10.9182 13.9693C10.8179 12.8219 9.81731 12.6882 9.26951 12.7357C8.60654 12.7937 7.40368 13.5675 7.5725 15.4949C7.7422 17.439 9.60628 18.9751 12.0498 18.7614C14.6868 18.531 16.5227 16.4779 16.6608 13.5983C16.6595 13.4458 16.6916 13.2948 16.7548 13.156L16.7557 13.1525C16.7841 13.0922 16.8174 13.0342 16.8551 12.9793C16.9113 12.8949 16.9835 12.8016 17.0767 12.6997C17.0775 12.697 17.0775 12.697 17.0793 12.697C17.147 12.6205 17.2288 12.5379 17.3211 12.4491C18.473 11.3623 22.6214 8.79916 26.5448 9.61074C26.6277 9.62851 26.7026 9.67262 26.7584 9.73649C26.8142 9.80035 26.8478 9.88054 26.8543 9.96509",fill:"white"})}),L9=({...e})=>i.jsxs("svg",{width:"32",height:"32",viewBox:"0 0 32 32",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[i.jsx("rect",{width:"32",height:"32",fill:"white"}),i.jsx("path",{d:"M24.9055 15.8824V8.30065C24.9055 7.63399 24.3583 7.08497 23.6938 7.08497H16.1238C16.0456 7.08497 15.9805 7.05882 15.9153 7.00654L15.0033 6.0915C14.9511 6.03922 14.873 6 14.7948 6H7.21173C6.54723 6 6 6.53595 6 7.21569V14.7974C6 14.8758 6.02606 14.9412 6.07818 15.0065L6.99023 15.9216C7.04235 15.9739 7.08143 16.0523 7.08143 16.1307V23.7124C7.08143 24.3791 7.62866 24.9281 8.29316 24.9281H15.8762C15.9544 24.9281 16.0195 24.9542 16.0847 25.0065L16.9967 25.9216C17.0489 25.9739 17.127 26 17.2052 26H24.7883C25.4528 26 26 25.4641 26 24.7843V17.2026C26 17.1242 25.9739 17.0588 25.9218 16.9935L25.0098 16.0784C24.9446 16.0261 24.9055 15.9608 24.9055 15.8824ZM19.759 19.9346H12.241C12.1498 19.9346 12.0717 19.8562 12.0717 19.7647V12.2353C12.0717 12.1438 12.1498 12.0654 12.241 12.0654H19.759C19.8502 12.0654 19.9283 12.1438 19.9283 12.2353V19.7647C19.9414 19.8562 19.8632 19.9346 19.759 19.9346Z",fill:"#00D2BE"})]}),T9=({round:e=!1,...t})=>i.jsx("svg",{...t,width:"120",height:"120",viewBox:"0 0 120 120",fill:"none",xmlns:"http://www.w3.org/2000/svg",style:{backgroundSize:"100% 100%",backgroundImage:`url("${e?"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIwIiBoZWlnaHQ9IjEyMCIgdmlld0JveD0iMCAwIDEyMCAxMjAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxnIGNsaXAtcGF0aD0idXJsKCNjbGlwMF84XzU1NCkiPgo8bWFzayBpZD0ibWFzazBfOF81NTQiIHN0eWxlPSJtYXNrLXR5cGU6YWxwaGEiIG1hc2tVbml0cz0idXNlclNwYWNlT25Vc2UiIHg9IjAiIHk9IjAiIHdpZHRoPSIxMjAiIGhlaWdodD0iMTIwIj4KPGNpcmNsZSBjeD0iNjAiIGN5PSI2MCIgcj0iNjAiIGZpbGw9IiNEOUQ5RDkiLz4KPC9tYXNrPgo8ZyBtYXNrPSJ1cmwoI21hc2swXzhfNTU0KSI+CjxyZWN0IHdpZHRoPSIxMjAiIGhlaWdodD0iMTIwIiBmaWxsPSJ1cmwoI3BhaW50MF9saW5lYXJfOF81NTQpIi8+CjwvZz4KPHBhdGggZD0iTTI2LjY2NjcgNDEuNjY2N0gzMS42NjY3QzU3LjQ0IDQxLjY2NjcgNzguMzMzMyA2Mi41NiA3OC4zMzMzIDg4LjMzMzNWOTMuMzMzM0g4OC4zMzMzQzkxLjA5NDggOTMuMzMzMyA5My4zMzMzIDkxLjA5NDcgOTMuMzMzMyA4OC4zMzMzQzkzLjMzMzMgNTQuMjc1OCA2NS43MjQyIDI2LjY2NjcgMzEuNjY2NyAyNi42NjY3QzI4LjkwNTIgMjYuNjY2NyAyNi42NjY3IDI4LjkwNTIgMjYuNjY2NyAzMS42NjY3VjQxLjY2NjdaIiBmaWxsPSJ1cmwoI3BhaW50MV9yYWRpYWxfOF81NTQpIi8+CjxwYXRoIGQ9Ik04MCA4OC4zMzMzSDkzLjMzMzNDOTMuMzMzMyA5MS4wOTQ4IDkxLjA5NDcgOTMuMzMzMyA4OC4zMzMzIDkzLjMzMzNIODBWODguMzMzM1oiIGZpbGw9InVybCgjcGFpbnQyX2xpbmVhcl84XzU1NCkiLz4KPHBhdGggZD0iTTMxLjY2NjcgMjYuNjY2N0wzMS42NjY3IDQwSDI2LjY2NjdMMjYuNjY2NyAzMS42NjY3QzI2LjY2NjcgMjguOTA1MiAyOC45MDUyIDI2LjY2NjcgMzEuNjY2NyAyNi42NjY3WiIgZmlsbD0idXJsKCNwYWludDNfbGluZWFyXzhfNTU0KSIvPgo8cGF0aCBkPSJNMjYuNjY2NiA0MEgzMS42NjY2QzU4LjM2MDQgNDAgODAgNjEuNjM5NiA4MCA4OC4zMzMzVjkzLjMzMzNINjVWODguMzMzM0M2NSA2OS45MjM4IDUwLjA3NjEgNTUgMzEuNjY2NiA1NUgyNi42NjY2VjQwWiIgZmlsbD0idXJsKCNwYWludDRfcmFkaWFsXzhfNTU0KSIvPgo8cGF0aCBkPSJNNjYuNjY2NiA4OC4zMzMzSDgwVjkzLjMzMzNINjYuNjY2NlY4OC4zMzMzWiIgZmlsbD0idXJsKCNwYWludDVfbGluZWFyXzhfNTU0KSIvPgo8cGF0aCBkPSJNMjYuNjY2NiA1My4zMzMzTDI2LjY2NjYgNDBMMzEuNjY2NiA0MEwzMS42NjY2IDUzLjMzMzNIMjYuNjY2NloiIGZpbGw9InVybCgjcGFpbnQ2X2xpbmVhcl84XzU1NCkiLz4KPHBhdGggZD0iTTI2LjY2NjYgNjEuNjY2N0MyNi42NjY2IDY0LjQyODEgMjguOTA1MiA2Ni42NjY3IDMxLjY2NjYgNjYuNjY2N0M0My42MzI4IDY2LjY2NjcgNTMuMzMzMyA3Ni4zNjcyIDUzLjMzMzMgODguMzMzM0M1My4zMzMzIDkxLjA5NDcgNTUuNTcxOSA5My4zMzMzIDU4LjMzMzMgOTMuMzMzM0g2Ni42NjY2Vjg4LjMzMzNDNjYuNjY2NiA2OS4wMDM0IDUwLjk5NjYgNTMuMzMzMyAzMS42NjY2IDUzLjMzMzNIMjYuNjY2NlY2MS42NjY3WiIgZmlsbD0idXJsKCNwYWludDdfcmFkaWFsXzhfNTU0KSIvPgo8cGF0aCBkPSJNNTMuMzMzMyA4OC4zMzMzSDY2LjY2NjZWOTMuMzMzM0g1OC4zMzMzQzU1LjU3MTkgOTMuMzMzMyA1My4zMzMzIDkxLjA5NDggNTMuMzMzMyA4OC4zMzMzWiIgZmlsbD0idXJsKCNwYWludDhfcmFkaWFsXzhfNTU0KSIvPgo8cGF0aCBkPSJNMzEuNjY2NiA2Ni42NjY3QzI4LjkwNTIgNjYuNjY2NyAyNi42NjY2IDY0LjQyODEgMjYuNjY2NiA2MS42NjY3TDI2LjY2NjYgNTMuMzMzM0wzMS42NjY2IDUzLjMzMzNMMzEuNjY2NiA2Ni42NjY3WiIgZmlsbD0idXJsKCNwYWludDlfcmFkaWFsXzhfNTU0KSIvPgo8L2c+CjxkZWZzPgo8bGluZWFyR3JhZGllbnQgaWQ9InBhaW50MF9saW5lYXJfOF81NTQiIHgxPSI2MCIgeTE9IjAiIHgyPSI2MCIgeTI9IjEyMCIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPgo8c3RvcCBzdG9wLWNvbG9yPSIjMTc0Mjk5Ii8+CjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzAwMUU1OSIvPgo8L2xpbmVhckdyYWRpZW50Pgo8cmFkaWFsR3JhZGllbnQgaWQ9InBhaW50MV9yYWRpYWxfOF81NTQiIGN4PSIwIiBjeT0iMCIgcj0iMSIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIGdyYWRpZW50VHJhbnNmb3JtPSJ0cmFuc2xhdGUoMzEuNjY2NyA4OC4zMzMzKSByb3RhdGUoLTkwKSBzY2FsZSg2MS42NjY3KSI+CjxzdG9wIG9mZnNldD0iMC43NzAyNzciIHN0b3AtY29sb3I9IiNGRjQwMDAiLz4KPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjODc1NEM5Ii8+CjwvcmFkaWFsR3JhZGllbnQ+CjxsaW5lYXJHcmFkaWVudCBpZD0icGFpbnQyX2xpbmVhcl84XzU1NCIgeDE9Ijc5LjE2NjYiIHkxPSI5MC44MzMzIiB4Mj0iOTMuMzMzMyIgeTI9IjkwLjgzMzMiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KPHN0b3Agc3RvcC1jb2xvcj0iI0ZGNDAwMCIvPgo8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiM4NzU0QzkiLz4KPC9saW5lYXJHcmFkaWVudD4KPGxpbmVhckdyYWRpZW50IGlkPSJwYWludDNfbGluZWFyXzhfNTU0IiB4MT0iMjkuMTY2NyIgeTE9IjI2LjY2NjciIHgyPSIyOS4xNjY3IiB5Mj0iNDAuODMzMyIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPgo8c3RvcCBzdG9wLWNvbG9yPSIjODc1NEM5Ii8+CjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iI0ZGNDAwMCIvPgo8L2xpbmVhckdyYWRpZW50Pgo8cmFkaWFsR3JhZGllbnQgaWQ9InBhaW50NF9yYWRpYWxfOF81NTQiIGN4PSIwIiBjeT0iMCIgcj0iMSIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIGdyYWRpZW50VHJhbnNmb3JtPSJ0cmFuc2xhdGUoMzEuNjY2NiA4OC4zMzMzKSByb3RhdGUoLTkwKSBzY2FsZSg0OC4zMzMzKSI+CjxzdG9wIG9mZnNldD0iMC43MjM5MjkiIHN0b3AtY29sb3I9IiNGRkY3MDAiLz4KPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjRkY5OTAxIi8+CjwvcmFkaWFsR3JhZGllbnQ+CjxsaW5lYXJHcmFkaWVudCBpZD0icGFpbnQ1X2xpbmVhcl84XzU1NCIgeDE9IjY2LjY2NjYiIHkxPSI5MC44MzMzIiB4Mj0iODAiIHkyPSI5MC44MzMzIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CjxzdG9wIHN0b3AtY29sb3I9IiNGRkY3MDAiLz4KPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjRkY5OTAxIi8+CjwvbGluZWFyR3JhZGllbnQ+CjxsaW5lYXJHcmFkaWVudCBpZD0icGFpbnQ2X2xpbmVhcl84XzU1NCIgeDE9IjI5LjE2NjYiIHkxPSI1My4zMzMzIiB4Mj0iMjkuMTY2NiIgeTI9IjQwIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CjxzdG9wIHN0b3AtY29sb3I9IiNGRkY3MDAiLz4KPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjRkY5OTAxIi8+CjwvbGluZWFyR3JhZGllbnQ+CjxyYWRpYWxHcmFkaWVudCBpZD0icGFpbnQ3X3JhZGlhbF84XzU1NCIgY3g9IjAiIGN5PSIwIiByPSIxIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgZ3JhZGllbnRUcmFuc2Zvcm09InRyYW5zbGF0ZSgzMS42NjY2IDg4LjMzMzMpIHJvdGF0ZSgtOTApIHNjYWxlKDM1KSI+CjxzdG9wIG9mZnNldD0iMC41OTUxMyIgc3RvcC1jb2xvcj0iIzAwQUFGRiIvPgo8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiMwMURBNDAiLz4KPC9yYWRpYWxHcmFkaWVudD4KPHJhZGlhbEdyYWRpZW50IGlkPSJwYWludDhfcmFkaWFsXzhfNTU0IiBjeD0iMCIgY3k9IjAiIHI9IjEiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIiBncmFkaWVudFRyYW5zZm9ybT0idHJhbnNsYXRlKDUyLjUgOTAuODMzMykgc2NhbGUoMTQuMTY2NyAzNy43Nzc4KSI+CjxzdG9wIHN0b3AtY29sb3I9IiMwMEFBRkYiLz4KPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjMDFEQTQwIi8+CjwvcmFkaWFsR3JhZGllbnQ+CjxyYWRpYWxHcmFkaWVudCBpZD0icGFpbnQ5X3JhZGlhbF84XzU1NCIgY3g9IjAiIGN5PSIwIiByPSIxIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgZ3JhZGllbnRUcmFuc2Zvcm09InRyYW5zbGF0ZSgyOS4xNjY2IDY3LjUpIHJvdGF0ZSgtOTApIHNjYWxlKDE0LjE2NjcgMjY4LjY0MikiPgo8c3RvcCBzdG9wLWNvbG9yPSIjMDBBQUZGIi8+CjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzAxREE0MCIvPgo8L3JhZGlhbEdyYWRpZW50Pgo8Y2xpcFBhdGggaWQ9ImNsaXAwXzhfNTU0Ij4KPHJlY3Qgd2lkdGg9IjEyMCIgaGVpZ2h0PSIxMjAiIGZpbGw9IndoaXRlIi8+CjwvY2xpcFBhdGg+CjwvZGVmcz4KPC9zdmc+Cg==":"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIwIiBoZWlnaHQ9IjEyMCIgdmlld0JveD0iMCAwIDEyMCAxMjAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIxMjAiIGhlaWdodD0iMTIwIiBmaWxsPSJ1cmwoI3BhaW50MF9saW5lYXJfNjJfMzI5KSIvPgo8cGF0aCBkPSJNMjAgMzhIMjZDNTYuOTI3OSAzOCA4MiA2My4wNzIxIDgyIDk0VjEwMEg5NEM5Ny4zMTM3IDEwMCAxMDAgOTcuMzEzNyAxMDAgOTRDMTAwIDUzLjEzMDkgNjYuODY5MSAyMCAyNiAyMEMyMi42ODYzIDIwIDIwIDIyLjY4NjMgMjAgMjZWMzhaIiBmaWxsPSJ1cmwoI3BhaW50MV9yYWRpYWxfNjJfMzI5KSIvPgo8cGF0aCBkPSJNODQgOTRIMTAwQzEwMCA5Ny4zMTM3IDk3LjMxMzcgMTAwIDk0IDEwMEg4NFY5NFoiIGZpbGw9InVybCgjcGFpbnQyX2xpbmVhcl82Ml8zMjkpIi8+CjxwYXRoIGQ9Ik0yNiAyMEwyNiAzNkgyMEwyMCAyNkMyMCAyMi42ODYzIDIyLjY4NjMgMjAgMjYgMjBaIiBmaWxsPSJ1cmwoI3BhaW50M19saW5lYXJfNjJfMzI5KSIvPgo8cGF0aCBkPSJNMjAgMzZIMjZDNTguMDMyNSAzNiA4NCA2MS45Njc1IDg0IDk0VjEwMEg2NlY5NEM2NiA3MS45MDg2IDQ4LjA5MTQgNTQgMjYgNTRIMjBWMzZaIiBmaWxsPSJ1cmwoI3BhaW50NF9yYWRpYWxfNjJfMzI5KSIvPgo8cGF0aCBkPSJNNjggOTRIODRWMTAwSDY4Vjk0WiIgZmlsbD0idXJsKCNwYWludDVfbGluZWFyXzYyXzMyOSkiLz4KPHBhdGggZD0iTTIwIDUyTDIwIDM2TDI2IDM2TDI2IDUySDIwWiIgZmlsbD0idXJsKCNwYWludDZfbGluZWFyXzYyXzMyOSkiLz4KPHBhdGggZD0iTTIwIDYyQzIwIDY1LjMxMzcgMjIuNjg2MyA2OCAyNiA2OEM0MC4zNTk0IDY4IDUyIDc5LjY0MDYgNTIgOTRDNTIgOTcuMzEzNyA1NC42ODYzIDEwMCA1OCAxMDBINjhWOTRDNjggNzAuODA0IDQ5LjE5NiA1MiAyNiA1MkgyMFY2MloiIGZpbGw9InVybCgjcGFpbnQ3X3JhZGlhbF82Ml8zMjkpIi8+CjxwYXRoIGQ9Ik01MiA5NEg2OFYxMDBINThDNTQuNjg2MyAxMDAgNTIgOTcuMzEzNyA1MiA5NFoiIGZpbGw9InVybCgjcGFpbnQ4X3JhZGlhbF82Ml8zMjkpIi8+CjxwYXRoIGQ9Ik0yNiA2OEMyMi42ODYzIDY4IDIwIDY1LjMxMzcgMjAgNjJMMjAgNTJMMjYgNTJMMjYgNjhaIiBmaWxsPSJ1cmwoI3BhaW50OV9yYWRpYWxfNjJfMzI5KSIvPgo8ZGVmcz4KPGxpbmVhckdyYWRpZW50IGlkPSJwYWludDBfbGluZWFyXzYyXzMyOSIgeDE9IjYwIiB5MT0iMCIgeDI9IjYwIiB5Mj0iMTIwIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CjxzdG9wIHN0b3AtY29sb3I9IiMxNzQyOTkiLz4KPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjMDAxRTU5Ii8+CjwvbGluZWFyR3JhZGllbnQ+CjxyYWRpYWxHcmFkaWVudCBpZD0icGFpbnQxX3JhZGlhbF82Ml8zMjkiIGN4PSIwIiBjeT0iMCIgcj0iMSIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIGdyYWRpZW50VHJhbnNmb3JtPSJ0cmFuc2xhdGUoMjYgOTQpIHJvdGF0ZSgtOTApIHNjYWxlKDc0KSI+CjxzdG9wIG9mZnNldD0iMC43NzAyNzciIHN0b3AtY29sb3I9IiNGRjQwMDAiLz4KPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjODc1NEM5Ii8+CjwvcmFkaWFsR3JhZGllbnQ+CjxsaW5lYXJHcmFkaWVudCBpZD0icGFpbnQyX2xpbmVhcl82Ml8zMjkiIHgxPSI4MyIgeTE9Ijk3IiB4Mj0iMTAwIiB5Mj0iOTciIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KPHN0b3Agc3RvcC1jb2xvcj0iI0ZGNDAwMCIvPgo8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiM4NzU0QzkiLz4KPC9saW5lYXJHcmFkaWVudD4KPGxpbmVhckdyYWRpZW50IGlkPSJwYWludDNfbGluZWFyXzYyXzMyOSIgeDE9IjIzIiB5MT0iMjAiIHgyPSIyMyIgeTI9IjM3IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CjxzdG9wIHN0b3AtY29sb3I9IiM4NzU0QzkiLz4KPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjRkY0MDAwIi8+CjwvbGluZWFyR3JhZGllbnQ+CjxyYWRpYWxHcmFkaWVudCBpZD0icGFpbnQ0X3JhZGlhbF82Ml8zMjkiIGN4PSIwIiBjeT0iMCIgcj0iMSIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIGdyYWRpZW50VHJhbnNmb3JtPSJ0cmFuc2xhdGUoMjYgOTQpIHJvdGF0ZSgtOTApIHNjYWxlKDU4KSI+CjxzdG9wIG9mZnNldD0iMC43MjM5MjkiIHN0b3AtY29sb3I9IiNGRkY3MDAiLz4KPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjRkY5OTAxIi8+CjwvcmFkaWFsR3JhZGllbnQ+CjxsaW5lYXJHcmFkaWVudCBpZD0icGFpbnQ1X2xpbmVhcl82Ml8zMjkiIHgxPSI2OCIgeTE9Ijk3IiB4Mj0iODQiIHkyPSI5NyIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPgo8c3RvcCBzdG9wLWNvbG9yPSIjRkZGNzAwIi8+CjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iI0ZGOTkwMSIvPgo8L2xpbmVhckdyYWRpZW50Pgo8bGluZWFyR3JhZGllbnQgaWQ9InBhaW50Nl9saW5lYXJfNjJfMzI5IiB4MT0iMjMiIHkxPSI1MiIgeDI9IjIzIiB5Mj0iMzYiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KPHN0b3Agc3RvcC1jb2xvcj0iI0ZGRjcwMCIvPgo8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNGRjk5MDEiLz4KPC9saW5lYXJHcmFkaWVudD4KPHJhZGlhbEdyYWRpZW50IGlkPSJwYWludDdfcmFkaWFsXzYyXzMyOSIgY3g9IjAiIGN5PSIwIiByPSIxIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgZ3JhZGllbnRUcmFuc2Zvcm09InRyYW5zbGF0ZSgyNiA5NCkgcm90YXRlKC05MCkgc2NhbGUoNDIpIj4KPHN0b3Agb2Zmc2V0PSIwLjU5NTEzIiBzdG9wLWNvbG9yPSIjMDBBQUZGIi8+CjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzAxREE0MCIvPgo8L3JhZGlhbEdyYWRpZW50Pgo8cmFkaWFsR3JhZGllbnQgaWQ9InBhaW50OF9yYWRpYWxfNjJfMzI5IiBjeD0iMCIgY3k9IjAiIHI9IjEiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIiBncmFkaWVudFRyYW5zZm9ybT0idHJhbnNsYXRlKDUxIDk3KSBzY2FsZSgxNyA0NS4zMzMzKSI+CjxzdG9wIHN0b3AtY29sb3I9IiMwMEFBRkYiLz4KPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjMDFEQTQwIi8+CjwvcmFkaWFsR3JhZGllbnQ+CjxyYWRpYWxHcmFkaWVudCBpZD0icGFpbnQ5X3JhZGlhbF82Ml8zMjkiIGN4PSIwIiBjeT0iMCIgcj0iMSIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIGdyYWRpZW50VHJhbnNmb3JtPSJ0cmFuc2xhdGUoMjMgNjkpIHJvdGF0ZSgtOTApIHNjYWxlKDE3IDMyMi4zNykiPgo8c3RvcCBzdG9wLWNvbG9yPSIjMDBBQUZGIi8+CjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzAxREE0MCIvPgo8L3JhZGlhbEdyYWRpZW50Pgo8L2RlZnM+Cjwvc3ZnPgo="}")`}}),O9=({...e})=>i.jsxs("svg",{...e,width:"88",height:"88",viewBox:"0 0 88 88",fill:"none",xmlns:"http://www.w3.org/2000/svg",style:{background:"white"},children:[i.jsx("mask",{id:"mask0_2091_4394",style:{maskType:"alpha"},maskUnits:"userSpaceOnUse",x:"13",y:"9",width:"62",height:"71",children:i.jsx("path",{d:"M44 9L13 26.75V62.25L44 80L75 62.25V26.75L44 9ZM31.7577 24.3492H56.1513L59.0935 36.684H28.9307L31.7577 24.3492ZM41.5613 61.2993L36.2955 66.161H31.8427L20.6924 46.9369L28.8701 40.9079L36.0953 45.4627V53.6578L41.5552 58.8504V61.2993H41.5613ZM37.9759 53.1584L38.7888 45.4326L36.1256 38.5432H51.9229L49.3204 45.4326L50.0787 53.1283L44 53.1584H37.9759ZM56.2059 66.1069H51.8076L46.5419 61.2993V58.8564L52.0018 53.6638V45.4627L59.1421 40.8537L67.2955 46.9369L56.2059 66.1069Z",fill:"#002D74"})}),i.jsxs("g",{mask:"url(#mask0_2091_4394)",children:[i.jsx("rect",{y:"8",width:"44",height:"72",fill:"url(#paint0_linear_2091_4394)"}),i.jsx("rect",{x:"88",y:"80",width:"44",height:"72",transform:"rotate(-180 88 80)",fill:"url(#paint1_linear_2091_4394)"})]}),i.jsxs("defs",{children:[i.jsxs("linearGradient",{id:"paint0_linear_2091_4394",x1:"22",y1:"8",x2:"22",y2:"80",gradientUnits:"userSpaceOnUse",children:[i.jsx("stop",{stopColor:"#010935"}),i.jsx("stop",{offset:"1",stopColor:"#142C70"})]}),i.jsxs("linearGradient",{id:"paint1_linear_2091_4394",x1:"110",y1:"80",x2:"110",y2:"152",gradientUnits:"userSpaceOnUse",children:[i.jsx("stop",{stopColor:"#010935"}),i.jsx("stop",{offset:"1",stopColor:"#142C70"})]})]})]}),F9=({...e})=>i.jsx("svg",{...e,width:"88",height:"88",viewBox:"0 0 88 88",fill:"none",xmlns:"http://www.w3.org/2000/svg",style:{background:"black"},children:i.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M37.2106 16H16V29.4577H19.2182V19.2182L37.2106 19.1011V16ZM37.3568 33.4073V54.6179H50.8146V51.3997H40.575L40.458 33.4073H37.3568ZM16 72.1714H37.2106V69.0703L19.2182 68.9533V58.7137H16V72.1714ZM50.9609 16H72.1714V29.4577H68.9533V19.2182L50.9609 19.1011V16ZM72.1714 72.1714H50.9609V69.0703L68.9533 68.9533V58.7137H72.1714V72.1714Z",fill:"white"})}),R9=({...e})=>i.jsxs("svg",{...e,width:"600",height:"600",viewBox:"0 0 600 600",fill:"none",xmlns:"http://www.w3.org/2000/svg",style:{background:"black"},children:[i.jsx("path",{d:"M470.747 209.191C462.305 192.354 448.646 178.695 431.808 170.253C413.337 161 389.233 161 341.006 161C331.236 161 307.916 161 300 161C292.084 161 268.728 161 258.994 161C210.856 161 186.662 161 168.191 170.253C151.354 178.69 137.7 192.35 129.27 209.191C119.999 227.662 120 251.767 120 299.976C120 348.185 119.999 372.308 129.27 390.778C137.7 407.619 151.354 421.279 168.191 429.716C186.662 438.97 210.784 438.97 258.994 438.97C268.764 438.97 292.084 438.97 300 438.97C307.916 438.97 331.272 438.97 341.006 438.97C389.144 438.97 413.337 438.97 431.808 429.716C448.646 421.274 462.305 407.616 470.747 390.778C480 372.308 480 348.203 480 299.976C480 251.749 480 227.662 470.747 209.191Z",fill:"#FFCEAA"}),i.jsx("path",{d:"M218.557 350.342C216.323 345.957 212.922 342.274 208.729 339.698C204.536 337.121 199.713 335.752 194.791 335.741H166.747C163.876 335.755 161.041 336.37 158.422 337.548C155.804 338.725 153.462 340.439 151.547 342.577C149.632 344.716 148.186 347.232 147.303 349.964C146.42 352.696 146.12 355.582 146.422 358.437C147.385 367.476 148.954 374.34 151.575 379.564C157.629 391.573 167.378 401.323 179.388 407.377C188.195 411.798 201.674 413.26 222.444 413.742C225.415 413.812 228.353 413.109 230.97 411.702C233.587 410.295 235.793 408.232 237.373 405.715C238.953 403.199 239.852 400.315 239.982 397.346C240.113 394.378 239.47 391.427 238.116 388.781L218.557 350.342Z",fill:"#FF3B9A"}),i.jsx("path",{d:"M180.618 312.563C189.852 312.562 198.95 310.335 207.14 306.071C215.33 301.806 222.371 295.63 227.668 288.066L254.856 249.253C259.761 242.25 262.839 234.134 263.81 225.64C264.782 217.146 263.616 208.545 260.419 200.616V200.384C258.913 196.555 256.409 193.2 253.167 190.666C249.925 188.133 246.064 186.514 241.985 185.978C209.732 186.085 190.726 186.887 179.405 192.575C167.37 198.586 157.611 208.339 151.592 220.37C146.725 230.247 145.227 258.007 144.87 280.507C144.797 284.698 145.56 288.862 147.114 292.754C148.668 296.647 150.983 300.191 153.923 303.179C156.863 306.167 160.369 308.539 164.236 310.156C168.103 311.774 172.254 312.604 176.445 312.599L180.618 312.563Z",fill:"#FF3B9A"}),i.jsx("path",{d:"M449.702 220.356C443.655 208.365 433.909 198.639 421.906 192.614C409.89 186.588 389.262 186.053 353.337 186C304.664 186 289.528 242 279.134 256.834L248.556 300.497C243.645 307.51 240.729 315.725 240.12 324.266C239.511 332.806 241.231 341.352 245.098 348.991L267.758 393.813C270.842 399.931 275.578 405.063 281.43 408.627C287.282 412.191 294.016 414.045 300.867 413.978H301.49C309.495 413.978 334.171 413.978 342.283 413.978C385.072 413.978 408.713 413.977 421.906 407.381C433.914 401.331 443.66 391.58 449.702 379.568C456.317 366.374 456.316 342.787 456.316 299.944C456.316 257.101 456.317 233.621 449.702 220.356Z",fill:"#FF3B9A"})]}),D9=({...e})=>i.jsx("svg",{...e,width:"88",height:"88",viewBox:"0 0 88 88",fill:"none",xmlns:"http://www.w3.org/2000/svg",style:{background:"linear-gradient(180deg, #FED812 0%, #FFAF00 100%)"},children:i.jsx("path",{d:"M47.4 43.7163C47.4 45.6251 45.8781 47.1714 44.0001 47.1714C42.1219 47.1714 40.6 45.6251 40.6 43.7163L40.6 -7H27L27 43.7163C27 53.2612 34.6106 61 44.0001 61C53.3882 61 61 53.2612 61 43.7163V-7H47.4V43.7163Z",fill:"#1F2129"})}),z9=({...e})=>i.jsx("svg",{...e,width:"88",height:"88",viewBox:"0 0 88 88",fill:"none",xmlns:"http://www.w3.org/2000/svg",style:{background:"white"},children:i.jsx("path",{d:"M20 16L28.675 24.677C32.1885 21.8644 36.4154 20.0873 40.8816 19.545C45.348 19.0026 49.8769 19.7164 53.9604 21.6063C58.0438 23.4963 61.5207 26.4876 64.0005 30.2447C66.4804 34.0019 67.8653 38.3763 68 42.8772V43.5854V72L59.3367 63.3231C55.8263 66.1389 51.6014 67.9196 47.1361 68.4655C42.6708 69.0112 38.1419 68.3007 34.0577 66.4135C29.9734 64.5262 26.4956 61.537 24.0144 57.7813C21.5333 54.0255 20.1472 49.6521 20.0115 45.1515V44.4433L20 16ZM25.931 30.3311V44.4146C25.9323 47.7294 26.8335 50.9817 28.5384 53.8236C30.2432 56.6655 32.6875 58.9902 35.6101 60.5497C38.5328 62.1089 41.8238 62.8439 45.1313 62.6764C48.439 62.5087 51.639 61.4445 54.3894 59.5978L54.8611 59.2754L27.0873 31.4884L25.931 30.3311ZM33.6223 28.4022L33.1505 28.7304L60.9186 56.5117L62.069 57.6632V43.5854C62.0683 40.2717 61.1679 37.0204 59.464 34.179C57.7603 31.3377 55.3171 29.0132 52.3957 27.4539C49.4742 25.8946 46.1844 25.1592 42.8777 25.3262C39.5712 25.4933 36.372 26.5565 33.6223 28.4022Z",fill:"#23262F"})}),B9=({...e})=>i.jsxs("svg",{...e,width:"88",height:"88",viewBox:"0 0 88 88",fill:"none",xmlns:"http://www.w3.org/2000/svg",style:{background:"#6C67F1"},children:[i.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M50.6667 24.3696L34.8872 40.1864L24.0001 37.7402L37.3334 24.3696L48.4438 13.3798C49.268 12.5646 50.6667 13.1484 50.6667 14.3077V24.3696ZM37.3339 51.0358L50.6672 37.74V24.3694L35.2001 39.8737L37.3339 51.0358Z",fill:"url(#paint0_linear_2593_6077)"}),i.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M37.3337 64.2947V50.9617L50.667 37.6284L55.7849 45.8435L55.9822 45.6463L64 50.9616L39.5582 75.2343C38.7347 76.0521 37.3336 75.4687 37.3336 74.3082V64.2949L37.3337 64.2947Z",fill:"url(#paint1_linear_2593_6077)"}),i.jsx("path",{d:"M24 37.7405H32.573C35.202 37.7405 37.3333 39.8718 37.3333 42.5009V51.0359H28.7602C26.1313 51.0359 24 48.9046 24 46.2757V37.7405Z",fill:"#F1F0FF"}),i.jsx("path",{d:"M50.6667 37.7405H59.2398C61.8688 37.7405 64 39.8718 64 42.5009V51.0359H55.4271C52.798 51.0359 50.6667 48.9046 50.6667 46.2757V37.7405Z",fill:"#F1F0FF"}),i.jsxs("defs",{children:[i.jsxs("linearGradient",{id:"paint0_linear_2593_6077",x1:"37.3336",y1:"13",x2:"37.3336",y2:"51.0358",gradientUnits:"userSpaceOnUse",children:[i.jsx("stop",{stopColor:"#A8ADFF"}),i.jsx("stop",{offset:"0.648556",stopColor:"white"})]}),i.jsxs("linearGradient",{id:"paint1_linear_2593_6077",x1:"50.6668",y1:"37.6284",x2:"50.6668",y2:"75.616",gradientUnits:"userSpaceOnUse",children:[i.jsx("stop",{offset:"0.260784",stopColor:"#B6BAFF"}),i.jsx("stop",{offset:"1",stopColor:"#E4E2FF"})]})]})]}),V0=({...e})=>i.jsxs("svg",{...e,width:"88",height:"88",viewBox:"0 0 88 88",fill:"none",xmlns:"http://www.w3.org/2000/svg",style:{background:"var(--ck-brand-safe)"},children:[i.jsx("path",{d:"M68.7186 44H62.6472C60.8339 44 59.3646 45.4686 59.3646 47.281V56.0888C59.3646 57.9012 57.8952 59.3697 56.0819 59.3697H31.9278C30.1145 59.3697 28.6452 60.8383 28.6452 62.6507V68.719C28.6452 70.5314 30.1145 72 31.9278 72H57.48C59.2933 72 60.7417 70.5314 60.7417 68.719V63.8504C60.7417 62.038 62.2111 60.7524 64.0244 60.7524H68.7174C70.5307 60.7524 72 59.2838 72 57.4714V47.2429C72 45.4305 70.5307 44 68.7174 44H68.7186Z",fill:"#121312"}),i.jsx("path",{d:"M28.6406 31.9308C28.6406 30.1162 30.1104 28.6458 31.9243 28.6458H56.0712C57.8851 28.6458 59.3548 27.1754 59.3548 25.3608V19.285C59.3548 17.4704 57.8851 16 56.0712 16H30.5245C28.7107 16 27.2409 17.4704 27.2409 19.285V23.9666C27.2409 25.7813 25.7711 27.2516 23.9572 27.2516H19.2837C17.4698 27.2516 16 28.722 16 30.5366V40.7888C16 42.6034 17.4759 44 19.2898 44H25.3631C27.177 44 28.6468 42.5296 28.6468 40.715L28.6406 31.932V31.9308Z",fill:"#121312"}),i.jsx("path",{d:"M41.1004 37.6774H46.8995C48.7894 37.6774 50.3226 39.2117 50.3226 41.1004V46.8995C50.3226 48.7894 48.7882 50.3225 46.8995 50.3225H41.1004C39.2106 50.3225 37.6774 48.7882 37.6774 46.8995V41.1004C37.6774 39.2105 39.2118 37.6774 41.1004 37.6774V37.6774Z",fill:"#121312"})]}),P9=({...e})=>i.jsx("svg",{...e,width:"88",height:"88",viewBox:"0 0 88 88",fill:"none",xmlns:"http://www.w3.org/2000/svg",style:{background:"#CC703C"},children:i.jsx("path",{d:"M63.6429 20L63.3645 20.7254L62.4521 23.0445L61.8461 24.5395C57.2427 35.7491 53.6629 41.0688 49.8557 41.0688C48.8938 41.0936 47.9371 40.9212 47.0465 40.5625C46.156 40.2038 45.3512 39.6667 44.6834 38.9852L44.1979 38.5518C42.9885 37.4538 42.4799 37.1831 41.3154 37.1832C40.7094 37.1832 39.6238 37.9435 38.2521 39.7303C36.4147 42.2912 34.8522 45.0327 33.59 47.9106L33.4353 48.2482L49.7645 48.2483L47.7312 52.4075H32.4845L32.4843 69.44L28 69.44L28.0001 20L63.6429 20ZM57.2889 24.1518L32.4843 24.1518L32.4843 40.6262C35.4564 35.5545 38.2816 33.0086 41.32 33.0086C42.3421 32.9765 43.3595 33.1534 44.3082 33.5284C45.2569 33.9034 46.1159 34.468 46.8311 35.1865L47.3323 35.6335C48.4611 36.6585 48.8956 36.8941 49.8604 36.8941C50.9211 36.8957 53.7433 32.4855 57.2889 24.1518Z",fill:"white"})}),W9=({...e})=>i.jsxs("svg",{...e,width:"88",height:"88",viewBox:"0 0 88 88",fill:"none",xmlns:"http://www.w3.org/2000/svg",style:{background:"linear-gradient(120.22deg, #2962EF 0%, #255CE5 100%)"},children:[i.jsx("path",{d:"M19.0864 22C17.5783 22 16.9973 23.8648 18.2628 24.6438L49.9199 43.732C50.709 44.2178 51.7614 44.0258 52.3048 43.2969L66.2236 25.024C67.17 23.7545 66.2138 22 64.5757 22H19.0864Z",fill:"white"}),i.jsx("path",{d:"M68.8425 66C70.3503 66 70.9466 64.1252 69.6814 63.3464L38.015 44.2605C37.2259 43.7748 36.1989 43.991 35.6558 44.7198L21.7099 62.9891C20.7639 64.2582 21.7499 66 23.3877 66H68.8425Z",fill:"white"})]}),V9=({background:e=!1,...t})=>i.jsx("svg",{...t,width:"88",height:"88",viewBox:"0 0 88 88",fill:"none",xmlns:"http://www.w3.org/2000/svg",style:e?{background:"#AB9FF2"}:void 0,children:i.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M37.7425 57.0705C34.1942 62.3362 28.2483 69 20.3366 69C16.5965 69 13.0001 67.5093 13 61.0322C12.9997 44.5362 36.2555 19.0003 57.8334 19C70.1084 18.9998 75 27.2474 75 36.6136C75 48.6357 66.9442 62.3824 58.9368 62.3824C56.3955 62.3824 55.1487 61.031 55.1487 58.888C55.1487 58.3288 55.2442 57.7228 55.4365 57.0705C52.7029 61.5902 47.4285 65.7849 42.4896 65.7849C38.8933 65.7849 37.0713 63.5944 37.0713 60.5187C37.0713 59.4003 37.311 58.2357 37.7425 57.0705ZM53.7586 31.6834C51.8054 31.6868 50.4738 33.2938 50.478 35.5864C50.4822 37.879 51.8198 39.5273 53.7729 39.5241C55.6789 39.5208 57.0099 37.8679 57.0058 35.5752C57.0016 33.2827 55.6646 31.6802 53.7586 31.6834ZM64.1193 31.6725C62.1661 31.6759 60.8345 33.2829 60.8387 35.5755C60.8429 37.868 62.1798 39.5164 64.1336 39.5131C66.0396 39.5099 67.3706 37.8569 67.3664 35.5643C67.3622 33.2718 66.0253 31.6693 64.1193 31.6725Z",fill:e?"#ffffff":"currentColor"})}),U9=({...e})=>i.jsxs("svg",{...e,version:"1.1",id:"e551690a-81c0-4880-9b93-334a37ce6796",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 1025 1025",children:[i.jsx("style",{type:"text/css",children:`
        .infinityWallet-st0{fill:url(#ID_InfinityWallet_1);}
        .infinityWallet-st1{fill:url(#ID_InfinityWallet_2);}
        .infinityWallet-st2{opacity:0.49;fill:url(#ID_InfinityWallet_3);enable-background:new;}
        .infinityWallet-st3{opacity:0.49;fill:url(#ID_InfinityWallet_4);enable-background:new;}
        .infinityWallet-st4{opacity:0.49;fill:url(#ID_InfinityWallet_5);enable-background:new;}
        .infinityWallet-st5{fill:url(#ID_InfinityWallet_6);}
        .infinityWallet-st6{opacity:0.49;fill:url(#ID_InfinityWallet_7);enable-background:new;}
        .infinityWallet-st7{opacity:0.49;fill:url(#ID_InfinityWallet_8);enable-background:new;}
        .infinityWallet-st8{opacity:0.49;fill:url(#ID_InfinityWallet_9);enable-background:new;}
      `}),i.jsxs("linearGradient",{id:"ID_InfinityWallet_1",gradientUnits:"userSpaceOnUse",x1:"512.5",y1:"1056.1801",x2:"512.5",y2:"317.03",gradientTransform:"matrix(1 0 0 -1 0 1260)",children:[i.jsx("stop",{offset:"0",style:{stopColor:"#1D2643"}}),i.jsx("stop",{offset:"1",style:{stopColor:"#12142C"}})]}),i.jsx("path",{className:"infinityWallet-st0",d:`M130,0H895c71.8,0,130,58.2,130,130V895c0,71.8-58.2,130-130,130H130C58.2,1025,0,966.8,0,895V130
    	C0,58.2,58.2,0,130,0z`}),i.jsxs("g",{children:[i.jsxs("g",{children:[i.jsxs("linearGradient",{id:"ID_InfinityWallet_2",gradientUnits:"userSpaceOnUse",x1:"326.0557",y1:"-1280.3162",x2:"326.0557",y2:"-296.3967",gradientTransform:"matrix(1 0 0 1 0 1474)",children:[i.jsx("stop",{offset:"1.000000e-02",style:{stopColor:"#00BFE1"}}),i.jsx("stop",{offset:"0.97",style:{stopColor:"#2738AB"}})]}),i.jsx("path",{className:"infinityWallet-st1",d:`M550.9,380.8c-0.7-2-2.4-3.4-4.4-3.9c-2.3-0.6-4.7,0-6.4,1.7l-13.4,13.4l-2.2,2.2L418.3,288.5
    			c-40.2-40-105.2-40-145.4,0L121.7,439.9c-40,40.5-40,105.6,0,146.1l151.4,150.5c40.2,40,105.1,40,145.3,0l34.4-34.4
    			c4.5-4.5,9.9-10.7,12.9-18.7c4.7-13.1,2.8-27.7-5.2-39.1c-1.5-2.2-3.2-4.2-5.1-6c-16.9-16.5-43.9-16.3-60.7,0.3l-37.2,37.1
    			c-2.2,2.3-5,3.8-8.1,4.5c-2.9,0.7-6,0.5-8.8-0.6c-2.9-1-5.5-2.7-7.7-5L182.6,524.2c-2.3-2.3-3.9-5.2-4.6-8.4
    			c-0.8-4-0.1-8.2,2.1-11.8l0.8-0.9L334,350.3c2.4-2.4,5.4-4,8.7-4.6c1-0.2,2.1-0.3,3.1-0.3c4.4-0.1,8.7,1.7,11.7,5l105.8,105.2
    			l-5.3,5.3l-10.4,10.6c-1.7,1.7-2.3,4.1-1.7,6.4c0.5,2,2,3.7,3.9,4.4l95.7,11.7c8.2-0.1,14.8-6.7,15-15L550.9,380.8z`}),i.jsxs("linearGradient",{id:"ID_InfinityWallet_3",gradientUnits:"userSpaceOnUse",x1:"137.7126",y1:"-935.1906",x2:"201.098",y2:"-882.1746",gradientTransform:"matrix(1 0 0 1 -0.94 1473.3899)",children:[i.jsx("stop",{offset:"3.000000e-02",style:{stopColor:"#1B1464"}}),i.jsx("stop",{offset:"1",style:{stopColor:"#1B1464",stopOpacity:0}})]}),i.jsx("path",{className:"infinityWallet-st2",d:"M181.4,522.9c-4.3-4.9-5.1-13.3-1.3-19c0,0-49.7,54.3-25.8,114.4l31.5,31.3l45.8-76.2L181.4,522.9z"}),i.jsxs("linearGradient",{id:"ID_InfinityWallet_4",gradientUnits:"userSpaceOnUse",x1:"4132.3252",y1:"1674.2513",x2:"4102.1333",y2:"1717.0756",gradientTransform:"matrix(-1 0 0 -1 4515 2382.0898)",children:[i.jsx("stop",{offset:"3.000000e-02",style:{stopColor:"#1B1464"}}),i.jsx("stop",{offset:"1",style:{stopColor:"#1B1464",stopOpacity:0}})]}),i.jsx("path",{className:"infinityWallet-st3",d:`M336.4,677.7c56.1,51.6,117.9,22.9,117.9,22.9s8.1-7.5,11.4-17.4c-8.3-4-68.6-47.2-68.6-47.2l-35.6,35.6
    			C348.6,687.1,336.4,677.7,336.4,677.7z`}),i.jsxs("linearGradient",{id:"ID_InfinityWallet_5",gradientUnits:"userSpaceOnUse",x1:"4217.4238",y1:"2067.1885",x2:"4240.0796",y2:"2011.1337",gradientTransform:"matrix(-1 0 0 -1 4515 2382.0898)",children:[i.jsx("stop",{offset:"3.000000e-02",style:{stopColor:"#1B1464"}}),i.jsx("stop",{offset:"1",style:{stopColor:"#1B1464",stopOpacity:0}})]}),i.jsx("path",{className:"infinityWallet-st4",d:"M299.4,385c0,0,35.9-36.2,36-36c0,0,9.6-7.7,19.7-0.7c0,0-59.7-49.2-123.6-18.3l-18.6,18.7L299.4,385z"})]}),i.jsxs("g",{children:[i.jsxs("linearGradient",{id:"ID_InfinityWallet_6",gradientUnits:"userSpaceOnUse",x1:"698.9443",y1:"-1280.3162",x2:"698.9443",y2:"-296.3967",gradientTransform:"matrix(1 0 0 1 0 1474)",children:[i.jsx("stop",{offset:"1.000000e-02",style:{stopColor:"#00BFE1"}}),i.jsx("stop",{offset:"0.97",style:{stopColor:"#2738AB"}})]}),i.jsx("path",{className:"infinityWallet-st5",d:`M474.1,644.3c0.7,2,2.4,3.4,4.4,3.9c2.3,0.6,4.7,0,6.4-1.7l13.4-13.4l2.2-2.2l106.2,105.6
    			c40.2,40,105.2,40,145.4,0l151.2-151.4c40-40.5,40-105.6,0-146.1L751.9,288.5c-40.2-40-105.1-40-145.3,0l-34.4,34.4
    			c-4.5,4.5-9.9,10.7-12.9,18.7c-4.7,13.1-2.8,27.7,5.2,39.1c1.5,2.2,3.2,4.2,5.1,6c16.9,16.5,43.9,16.3,60.7-0.3l37.2-37.1
    			c2.2-2.3,5-3.8,8.1-4.5c2.9-0.7,6-0.5,8.8,0.6c2.9,1,5.5,2.7,7.7,5l150.3,150.3c2.3,2.3,3.9,5.2,4.6,8.4c0.8,4,0.1,8.2-2.1,11.8
    			l-0.8,0.9L691,674.5c-2.4,2.4-5.4,4-8.7,4.6c-1,0.2-2.1,0.3-3.1,0.3c-4.4,0.1-8.7-1.7-11.7-5L561.6,569.7l5.3-5.3l10.4-10.6
    			c1.7-1.7,2.3-4.1,1.7-6.4c-0.5-2-2-3.7-3.9-4.4l-95.6-11.7c-8.2,0.1-14.8,6.7-15,15L474.1,644.3z`}),i.jsxs("linearGradient",{id:"ID_InfinityWallet_7",gradientUnits:"userSpaceOnUse",x1:"3824.9182",y1:"1469.7789",x2:"3888.3037",y2:"1522.7949",gradientTransform:"matrix(-1 0 0 -1 4713.1299 1956.6599)",children:[i.jsx("stop",{offset:"3.000000e-02",style:{stopColor:"#1B1464"}}),i.jsx("stop",{offset:"1",style:{stopColor:"#1B1464",stopOpacity:0}})]}),i.jsx("path",{className:"infinityWallet-st6",d:"M843.6,502.2c4.3,4.9,5.1,13.3,1.3,19c0,0,49.7-54.3,25.8-114.4l-31.5-31.3l-45.8,76.2L843.6,502.2z"}),i.jsxs("linearGradient",{id:"ID_InfinityWallet_8",gradientUnits:"userSpaceOnUse",x1:"445.1279",y1:"-730.6945",x2:"414.9359",y2:"-687.8702",gradientTransform:"matrix(1 0 0 1 197.19 1047.96)",children:[i.jsx("stop",{offset:"3.000000e-02",style:{stopColor:"#1B1464"}}),i.jsx("stop",{offset:"1",style:{stopColor:"#1B1464",stopOpacity:0}})]}),i.jsx("path",{className:"infinityWallet-st7",d:`M688.6,347.4c-56.1-51.6-117.9-22.9-117.9-22.9s-8.1,7.5-11.4,17.4c8.3,4,68.6,47.2,68.6,47.2l35.6-35.6
    			C676.4,338,688.6,347.4,688.6,347.4z`}),i.jsxs("linearGradient",{id:"ID_InfinityWallet_9",gradientUnits:"userSpaceOnUse",x1:"530.1512",y1:"-337.7953",x2:"552.8069",y2:"-393.8502",gradientTransform:"matrix(1 0 0 1 197.19 1047.96)",children:[i.jsx("stop",{offset:"3.000000e-02",style:{stopColor:"#1B1464"}}),i.jsx("stop",{offset:"1",style:{stopColor:"#1B1464",stopOpacity:0}})]}),i.jsx("path",{className:"infinityWallet-st8",d:"M725.5,640.1c0,0-35.9,36.2-36,36c0,0-9.6,7.7-19.7,0.7c0,0,59.7,49.2,123.6,18.3l18.6-18.7L725.5,640.1z"})]})]})]}),Z9=({...e})=>i.jsxs("svg",{...e,width:"88",height:"88",viewBox:"0 0 88 88",fill:"none",xmlns:"http://www.w3.org/2000/svg",style:{background:"#8697FF"},children:[i.jsx("path",{d:"M76.2062 48.0657C78.7621 42.356 66.1267 26.404 54.0555 19.7581C46.4467 14.6095 38.5183 15.3169 36.9125 17.5775C33.3886 22.5385 48.5814 26.7423 58.742 31.6478C56.5579 32.5964 54.4996 34.2987 53.2893 36.4758C49.5013 32.3404 41.1872 28.7791 31.4315 31.6478C24.8574 33.5809 19.3937 38.1382 17.2821 45.0216C16.7689 44.7936 16.2009 44.6669 15.6032 44.6669C13.3176 44.6669 11.4648 46.5197 11.4648 48.8052C11.4648 51.0908 13.3176 52.9435 15.6032 52.9435C16.0268 52.9435 17.3514 52.6594 17.3514 52.6594L38.5183 52.8128C30.0532 66.2418 23.3634 68.2049 23.3634 70.5314C23.3634 72.8579 29.7643 72.2274 32.1678 71.3602C43.6732 67.2088 56.0306 54.2706 58.1511 50.5462C67.056 51.6572 74.5397 51.7886 76.2062 48.0657Z",fill:"url(#paint0_linear_60607_36577)"}),i.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M58.65 31.6053C58.682 31.6193 58.7139 31.6332 58.7458 31.6471C59.2168 31.4616 59.1406 30.766 59.0113 30.2198C58.714 28.9643 53.5856 23.9001 48.7696 21.6318C42.1984 18.5367 37.3618 18.7007 36.6582 20.1307C37.9975 22.8695 44.1927 25.441 50.663 28.1266C53.3909 29.2589 56.1676 30.4114 58.65 31.6053Z",fill:"url(#paint1_linear_60607_36577)"}),i.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M50.4154 59.2247C49.0895 58.7182 47.592 58.2536 45.8898 57.8319C47.707 54.5801 48.0884 49.7663 46.3721 46.7226C43.9635 42.4512 40.9399 40.1777 33.9139 40.1777C30.0495 40.1777 19.6451 41.4794 19.4603 50.1648C19.441 51.0763 19.4599 51.9118 19.5259 52.68L38.5175 52.8176C35.9568 56.8798 33.5586 59.8928 31.4589 62.1841C33.9831 62.8309 36.0657 63.3738 37.9775 63.8722C39.7885 64.3443 41.4462 64.7764 43.1809 65.2191C45.8007 63.3102 48.2635 61.2288 50.4154 59.2247Z",fill:"url(#paint2_linear_60607_36577)"}),i.jsx("path",{d:"M17.0296 51.7821C17.8058 58.38 21.5555 60.9657 29.2177 61.7309C36.8799 62.4961 41.2751 61.9828 47.1265 62.5151C52.0136 62.9598 56.3772 65.4502 57.996 64.5895C59.4529 63.815 58.6378 61.0167 56.6884 59.2214C54.1614 56.8943 50.6641 55.2763 44.5104 54.7021C45.7368 51.3443 45.3931 46.6362 43.4885 44.0748C40.7345 40.3711 35.6513 38.6967 29.2177 39.4282C22.4962 40.1926 16.0556 43.5018 17.0296 51.7821Z",fill:"url(#paint3_linear_60607_36577)"}),i.jsxs("defs",{children:[i.jsxs("linearGradient",{id:"paint0_linear_60607_36577",x1:"30.666",y1:"43.0094",x2:"75.6558",y2:"55.7677",gradientUnits:"userSpaceOnUse",children:[i.jsx("stop",{stopColor:"white"}),i.jsx("stop",{offset:"1",stopColor:"white"})]}),i.jsxs("linearGradient",{id:"paint1_linear_60607_36577",x1:"68.0842",y1:"42.1521",x2:"35.6221",y2:"9.60636",gradientUnits:"userSpaceOnUse",children:[i.jsx("stop",{stopColor:"#7258DC"}),i.jsx("stop",{offset:"1",stopColor:"#797DEA",stopOpacity:"0"})]}),i.jsxs("linearGradient",{id:"paint2_linear_60607_36577",x1:"51.3184",y1:"60.3591",x2:"20.1383",y2:"42.4347",gradientUnits:"userSpaceOnUse",children:[i.jsx("stop",{stopColor:"#7461EA"}),i.jsx("stop",{offset:"1",stopColor:"#BFC2FF",stopOpacity:"0"})]}),i.jsxs("linearGradient",{id:"paint3_linear_60607_36577",x1:"33.3531",y1:"42.6732",x2:"54.4308",y2:"69.4547",gradientUnits:"userSpaceOnUse",children:[i.jsx("stop",{stopColor:"white"}),i.jsx("stop",{offset:"0.983895",stopColor:"#D5CEFF"})]})]})]}),$9=({...e})=>i.jsxs("svg",{...e,width:"88px",height:"88px",viewBox:"0 0 88 88",version:"1.1",xmlns:"http://www.w3.org/2000/svg",children:[i.jsx("defs",{children:i.jsxs("linearGradient",{x1:"107.511425%",y1:"50.0147427%",x2:"0.0459570557%",y2:"50.0147427%",id:"linearGradient-1",children:[i.jsx("stop",{stopColor:"#FFFFFF",offset:"0%"}),i.jsx("stop",{stopColor:"#FFFFFF",stopOpacity:"0.3233",offset:"96.67%"}),i.jsx("stop",{stopColor:"#FFFFFF",stopOpacity:"0.3",offset:"100%"})]})}),i.jsx("g",{stroke:"none",strokeWidth:"1",fill:"none",fillRule:"evenodd",children:i.jsxs("g",{id:"tokenpocket",fillRule:"nonzero",children:[i.jsx("polygon",{fill:"#2980FE",points:"87.9604864 0 0 0 0 88 87.9604864 88"}),i.jsxs("g",{transform:"translate(16.052385, 23.804688)",children:[i.jsx("path",{d:"M19.6653508,13.8911953 L19.6784508,13.8911953 C19.6653508,13.8236484 19.6653508,13.7448437 19.6653508,13.6772969 L19.6653508,13.8911953 Z",fill:"#29AEFF"}),i.jsx("path",{d:"M41.1271993,16.0301797 L29.2440711,16.0301797 L29.2440711,38.4205938 C29.2440711,39.4787422 30.0635659,40.3343359 31.0771712,40.3343359 L39.2940168,40.3343359 C40.3077044,40.3343359 41.1271993,39.4787422 41.1271993,38.4205938 L41.1271993,16.0301797 Z",fill:"#FFFFFF"}),i.jsx("path",{d:"M23.5075248,0 L23.1085201,0 L1.83318241,0 C0.819494855,0 0,0.855507812 0,1.91374219 L0,9.68111719 C0,10.7393516 0.819494855,11.5948594 1.83318241,11.5948594 L6.82580355,11.5948594 L8.80996071,11.5948594 L8.80996071,13.8912813 L8.80996071,38.4768828 C8.80996071,39.5351172 9.62945557,40.390625 10.6430608,40.390625 L18.4502002,40.390625 C19.4638054,40.390625 20.2833003,39.5351172 20.2833003,38.4768828 L20.2833003,13.8912813 L20.2833003,13.6774688 L20.2833003,11.5948594 L22.2674574,11.5948594 L23.0761684,11.5948594 L23.4751731,11.5948594 C26.5376389,11.5948594 29.0285575,8.99447656 29.0285575,5.79742969 C29.0609093,2.60038281 26.5699906,0 23.5075248,0 Z",fill:"#FFFFFF"}),i.jsx("path",{d:"M41.1381478,16.0301797 L41.1381478,31.6550781 C41.5479364,31.7563984 41.9684266,31.8352031 42.399783,31.90275 C43.0036819,31.9928125 43.6290664,32.0491016 44.2545332,32.0603594 C44.2868849,32.0603594 44.3192367,32.0603594 44.3623723,32.0603594 L44.3623723,19.6324219 C42.5615416,19.5085859 41.1381478,17.9438359 41.1381478,16.0301797 Z",fill:"url(#linearGradient-1)"}),i.jsx("path",{d:"M44.5993714,0 C36.1237942,0 29.2440711,7.18205469 29.2440711,16.0301797 C29.2440711,23.6400312 34.3229635,30.0115234 41.1379832,31.6550781 L41.1379832,16.0301797 C41.1379832,14.0376328 42.6907839,12.4165937 44.5993714,12.4165937 C46.5080412,12.4165937 48.0608419,14.0376328 48.0608419,16.0301797 C48.0608419,17.7075078 46.9717493,19.1146484 45.483652,19.5198437 C45.2032703,19.5986484 44.9013209,19.6436797 44.5993714,19.6436797 L44.5993714,32.0603594 C44.9013209,32.0603594 45.1924864,32.0491016 45.483652,32.0378438 C53.5495229,31.5537578 59.9547666,24.5743438 59.9547666,16.0301797 C59.9655379,7.18205469 53.0858148,0 44.5993714,0 Z",fill:"#FFFFFF"}),i.jsx("path",{d:"M44.5992891,32.0603594 L44.5992891,19.6436797 C44.5131001,19.6436797 44.4376127,19.6436797 44.3513414,19.6324219 L44.3513414,32.0603594 C44.4376127,32.0603594 44.523884,32.0603594 44.5992891,32.0603594 Z",fill:"#FFFFFF"})]})]})})]}),H9=({...e})=>i.jsxs("svg",{...e,width:"82",height:"82",viewBox:"0 0 82 82",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[i.jsx("rect",{width:"82",height:"82",rx:"12",fill:"#D5FF5C"}),i.jsx("path",{d:"M35.04 55C35.04 58.2905 37.6887 60.9623 40.9703 60.9996C44.2519 60.9623 46.9006 58.2905 46.9006 55C46.9006 51.7096 44.2519 49.0377 40.9703 49.0004C37.6887 49.0377 35.04 51.7096 35.04 55Z",fill:"#FD4848"}),i.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M22.8544 44.6623C22.2462 45.9868 20.4553 46.4546 19.4248 45.4241L17.5356 43.5349C15.583 41.5823 12.4171 41.5823 10.4645 43.5349C8.51184 45.4875 8.51184 48.6534 10.4645 50.606L25.7391 65.8807C29.3942 70.2176 34.8595 72.9788 40.9703 72.9994C47.0811 72.9788 52.5464 70.2176 56.2014 65.8807L71.4761 50.606C73.4287 48.6534 73.4287 45.4875 71.4761 43.5349C69.5234 41.5823 66.3576 41.5823 64.4049 43.5349L62.5158 45.4241C61.4852 46.4546 59.6943 45.9868 59.0861 44.6623C58.9663 44.4013 58.901 44.1213 58.901 43.8341L58.901 20.9995C58.901 18.2381 56.6624 15.9995 53.901 15.9995C51.1396 15.9995 48.901 18.2381 48.901 20.9995L48.901 32.5568C48.901 33.5506 47.8829 34.2252 46.9353 33.9257C46.3356 33.7361 45.9023 33.1901 45.9023 32.5611L45.9023 13.9996C45.9023 11.2608 43.7004 9.03637 40.9703 9C38.2402 9.03637 36.0382 11.2608 36.0382 13.9996L36.0382 32.5611C36.0382 33.1901 35.605 33.7361 35.0052 33.9257C34.0576 34.2252 33.0395 33.5506 33.0395 32.5568L33.0396 20.9995C33.0396 18.2381 30.801 15.9995 28.0395 15.9995C25.2781 15.9995 23.0395 18.2381 23.0395 20.9995L23.0395 43.8341C23.0395 44.1213 22.9743 44.4013 22.8544 44.6623ZM40.9703 44.9999C32.1659 45.0525 25.0403 54.9997 25.0403 54.9997C25.0403 54.9997 32.1659 64.9469 40.9703 64.9995C49.7746 64.9469 56.9002 54.9997 56.9002 54.9997C56.9002 54.9997 49.7746 45.0525 40.9703 44.9999Z",fill:"#FD4848"})]}),G9=({...e})=>{const t={position:"relative",display:"flex",flexDirection:"column",gap:3},n={position:"relative",display:"flex",gap:3},r={width:"50%",overflow:"hidden",borderRadius:"27.5%"};return i.jsxs("div",{style:t,...e,children:[i.jsxs("div",{style:n,children:[i.jsx("div",{style:r,children:i.jsx(z0,{background:!0})}),i.jsx("div",{style:r,children:j9()?i.jsx(Z9,{}):i.jsx(P0,{})})]}),i.jsxs("div",{style:n,children:[i.jsx("div",{style:r,children:_9()?i.jsx(W0,{}):i.jsx(V9,{background:!0})}),i.jsx("div",{style:r,children:S9()?i.jsx(B0,{}):i.jsx(V0,{})})]})]})};var ve={Mock:E9,Injected:I9,OtherWallets:G9,WalletConnect:z0,MetaMask:N9,Coinbase:M9,AaveAccount:A9,Trust:B0,Argent:P0,ImToken:W0,Rainbow:T9,Crypto:O9,Ledger:F9,Steak:R9,Unstoppable:D9,ONTO:z9,Slope:B9,Safe:V0,Frontier:P9,Zerion:W9,Frame:L9,InfinityWallet:U9,TokenPocket:$9,Talisman:H9};const Y9=/^(0x[a-zA-Z0-9]{4})[a-zA-Z0-9]+([a-zA-Z0-9]{4})$/,Os=(e,t="••••")=>{if(!e)return"";const n=e.match(Y9);return n?`${n[1]}${t}${n[2]}`:e},q9=(e,t)=>e.length>t?e.replace(".eth","").slice(0,t)+"...":e,U0=(e,t=2)=>{if(e<1e4)return e.toFixed(2);const n=[{value:1,symbol:""},{value:1e3,symbol:"k"},{value:1e6,symbol:"m"},{value:1e9,symbol:"b"},{value:1e12,symbol:"t"},{value:1e15,symbol:"p"},{value:1e18,symbol:"e"}],r=/\.0+$|(\.[0-9]*[1-9])0+$/;var o=n.slice().reverse().find(function(a){return e>=a.value});return o?(e/o.value).toFixed(t).replace(r,"$1")+o.symbol:"0"},zr=()=>{var e;const t=k1();return(e=t==null?void 0:t.name)!==null&&e!==void 0?e:""},Z0=()=>{var e;const t=k1();return(e=t==null?void 0:t.os)!==null&&e!==void 0?e:""},K9=()=>Z0().toLowerCase().includes("ios"),Ke=()=>Z0().toLowerCase().includes("android"),Zn=()=>Ke()||K9();function zt(e){return Oe.Children.toArray(e).reduce((n,r)=>r.type===Oe.Fragment?n.concat(zt(r.props.children)):(n.push(r),n),[])}const $n=e=>e==="walletConnect",$0=e=>e==="aaveAccountProvider",Po=e=>e==="coinbaseWalletSDK",X9=e=>e==="xyz.ithaca.porto",H0=e=>e==="safe",Yl=e=>e==="injected",Rt={mock:{icon:i.jsx(ve.Mock,{})},aaveAccountProvider:{name:"Aave Account",shortName:"Aave",icon:i.jsx(ve.AaveAccount,{}),iconConnector:i.jsx(ve.AaveAccount,{}),iconShape:"squircle"},argent:{name:"Argent",icon:i.jsx(ve.Argent,{}),downloadUrls:{download:"https://connect.family.co/v0/download/argent",android:"https://play.google.com/store/apps/details?id=im.argent.contractwalletclient",ios:"https://apps.apple.com/app/argent/id1358741926"},getWalletConnectDeeplink:e=>Ke()?e:`https://argent.link/app/wc?uri=${encodeURIComponent(e)}`},"coinbaseWallet, coinbaseWalletSDK":{name:"Coinbase Wallet",shortName:"Coinbase",icon:i.jsx(ve.Coinbase,{background:!0}),iconShape:"squircle",downloadUrls:{download:"https://connect.family.co/v0/download/coinbasewallet",website:"https://www.coinbase.com/wallet/getting-started-extension",android:"https://play.google.com/store/apps/details?id=org.toshi",ios:"https://apps.apple.com/app/coinbase-wallet-store-crypto/id1278383455",chrome:"https://chrome.google.com/webstore/detail/coinbase-wallet-extension/hnfanknocfeofbddgcijnmhnfnkdnaad"},getWalletConnectDeeplink:e=>`https://go.cb-w.com/wc?uri=${encodeURIComponent(e)}`},"com.coinbase.wallet":{name:"Coinbase Wallet",shortName:"Coinbase",icon:i.jsx(ve.Coinbase,{background:!0}),iconShape:"circle",downloadUrls:{download:"https://connect.family.co/v0/download/coinbasewallet",website:"https://www.coinbase.com/wallet/getting-started-extension",android:"https://play.google.com/store/apps/details?id=org.toshi",ios:"https://apps.apple.com/app/coinbase-wallet-store-crypto/id1278383455",chrome:"https://chrome.google.com/webstore/detail/coinbase-wallet-extension/hnfanknocfeofbddgcijnmhnfnkdnaad"},getWalletConnectDeeplink:e=>`https://go.cb-w.com/wc?uri=${encodeURIComponent(e)}`},"com.crypto.wallet":{name:"Crypto.com",shortName:"Crypto"},dawn:{name:"Dawn Wallet",shortName:"Dawn",downloadUrls:{download:"https://apps.apple.com/us/app/dawn-ethereum-wallet/id1673143782",website:"https://www.dawnwallet.xyz/",ios:"https://apps.apple.com/us/app/dawn-ethereum-wallet/id1673143782"}},frame:{name:"Frame",icon:i.jsx(ve.Frame,{}),iconShouldShrink:!0,downloadUrls:{download:"https://connect.family.co/v0/download/frame",website:"https://frame.sh",chrome:"https://chrome.google.com/webstore/detail/frame-companion/ldcoohedfbjoobcadoglnnmmfbdlmmhf",firefox:"https://addons.mozilla.org/en-US/firefox/addon/frame-extension",brave:"https://chrome.google.com/webstore/detail/frame-companion/ldcoohedfbjoobcadoglnnmmfbdlmmhf"},getWalletConnectDeeplink:e=>e},frontier:{name:"Frontier Wallet",shortName:"Frontier",icon:i.jsx(ve.Frontier,{}),downloadUrls:{download:"https://connect.family.co/v0/download/frontier",ios:"https://apps.apple.com/app/frontier-crypto-defi-wallet/id1482380988",android:"https://play.google.com/store/apps/details?id=com.frontierwallet",website:"https://frontier.xyz/",chrome:"https://chrome.google.com/webstore/detail/frontier-wallet/kppfdiipphfccemcignhifpjkapfbihd"},getWalletConnectDeeplink:e=>Ke()?e:`frontier://wc?uri=${encodeURIComponent(e)}`},injected:{name:"Browser Wallet",shortName:"Browser",icon:i.jsx(ve.Injected,{})},"metaMask, metaMask-io, io.metamask, io.metamask.mobile, metaMaskSDK":{name:"MetaMask",icon:i.jsx(ve.MetaMask,{}),iconConnector:i.jsx(ve.MetaMask,{}),iconShouldShrink:!0,downloadUrls:{download:"https://connect.family.co/v0/download/metamask",website:"https://metamask.io/download/",android:"https://play.google.com/store/apps/details?id=io.metamask",ios:"https://apps.apple.com/app/metamask/id1438144202",chrome:"https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn",firefox:"https://addons.mozilla.org/firefox/addon/ether-metamask/",brave:"https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn",edge:"https://microsoftedge.microsoft.com/addons/detail/metamask/ejbalbakoplchlghecdalmeeeajnimhm"},getWalletConnectDeeplink:e=>Ke()?e:`https://metamask.app.link/wc?uri=${encodeURIComponent(e)}`},"app.phantom":{name:"Phantom",iconShape:"squircle"},"me.rainbow":{name:"Rainbow Wallet",shortName:"Rainbow",icon:i.jsx(ve.Rainbow,{}),iconShape:"squircle",downloadUrls:{download:"https://connect.family.co/v0/download/rainbow",website:"https://rainbow.me/?utm_source=connectkit",android:"https://play.google.com/store/apps/details?id=me.rainbow&referrer=utm_source%3Dconnectkit&utm_source=connectkit",ios:"https://apps.apple.com/app/rainbow-ethereum-wallet/id1457119021?pt=119997837&ct=connectkit&mt=8",chrome:"https://rainbow.me/extension?utm_source=connectkit",edge:"https://rainbow.me/extension?utm_source=connectkit",brave:"https://rainbow.me/extension?utm_source=connectkit"},getWalletConnectDeeplink:e=>Ke()?e:`https://rnbwapp.com/wc?uri=${encodeURIComponent(e)}&connector=connectkit`},"io.rabby":{name:"Rabby Wallet",shortName:"Rabby",downloadUrls:{website:"https://rabby.io",chrome:"https://chrome.google.com/webstore/detail/rabby-wallet/acmacodkjbdgmoleebolmdjonilkdbch"}},safe:{name:"Safe",icon:i.jsx(ve.Safe,{}),downloadUrls:{download:"https://connect.family.co/v0/download/safe",website:"https://safe.global/",ios:"https://apps.apple.com/app/id1515759131",android:"https://play.google.com/store/apps/details?id=io.gnosis.safe"},getWalletConnectDeeplink:e=>Ke()?e:`https://gnosis-safe.io/wc?uri=${encodeURIComponent(e)}`},"xyz.talisman":{name:"Talisman",shortName:"Talisman",iconShape:"squircle",downloadUrls:{download:"https://talisman.xyz/download",website:"https://talisman.xyz",chrome:"https://chrome.google.com/webstore/detail/talisman-polkadot-wallet/fijngjgcjhjmmpcmkeiomlglpeiijkld",firefox:"https://addons.mozilla.org/en-US/firefox/addon/talisman-wallet-extension/"}},"com.trustwallet.app":{name:"Trust Wallet",shortName:"Trust",icon:i.jsx(ve.Trust,{}),iconShouldShrink:!0,downloadUrls:{download:"https://connect.family.co/v0/download/trust",android:"https://play.google.com/store/apps/details?id=com.wallet.crypto.trustapp",ios:"https://apps.apple.com/app/trust-crypto-bitcoin-wallet/id1288339409"},getWalletConnectDeeplink(e){return Ke()?e:`https://link.trustwallet.com/wc?uri=${encodeURIComponent(e)}`}},infinityWallet:{name:"Infinity Wallet",icon:i.jsx(ve.InfinityWallet,{}),downloadUrls:{download:"https://connect.family.co/v0/download/infinityWallet",website:"https://infinitywallet.io/download",chrome:"https://infinitywallet.io/download",firefox:"https://infinitywallet.io/download",brave:"https://infinitywallet.io/download",edge:"https://infinitywallet.io/download"}},imToken:{name:"imToken",icon:i.jsx(ve.ImToken,{}),downloadUrls:{download:"https://connect.family.co/v0/download/imToken",android:"https://play.google.com/store/apps/details?id=im.token.app",ios:"https://itunes.apple.com/us/app/imtoken2/id1384798940"},getWalletConnectDeeplink:e=>`imtokenv2://wc?uri=${encodeURIComponent(e)}`},unstoppable:{name:"Unstoppable",icon:i.jsx(ve.Unstoppable,{}),downloadUrls:{download:"https://connect.family.co/v0/download/unstoppable",ios:"https://apps.apple.com/app/bank-bitcoin-wallet/id1447619907",android:"https://play.google.com/store/apps/details?id=io.horizontalsystems.bankwallet"},getWalletConnectDeeplink:e=>Ke()?e:`https://unstoppable.money/wc?uri=${encodeURIComponent(e)}`},onto:{name:"ONTO",icon:i.jsx(ve.ONTO,{}),downloadUrls:{download:"https://connect.family.co/v0/download/onto",ios:"https://apps.apple.com/app/onto-an-ontology-dapp/id1436009823",android:"https://play.google.com/store/apps/details?id=com.github.ontio.onto",website:"https://onto.app/en/download/"},getWalletConnectDeeplink:e=>Ke()?e:`https://onto.app/wc?uri=${encodeURIComponent(e)}`},steak:{name:"Steak",icon:i.jsx(ve.Steak,{}),downloadUrls:{download:"https://connect.family.co/v0/download/steak",android:"https://play.google.com/store/apps/details?id=fi.steakwallet.app",ios:"https://apps.apple.com/app/steakwallet/id1569375204",website:"https://steakwallet.fi/download"},getWalletConnectDeeplink:e=>Ke()?e:`https://links.steakwallet.fi/wc?uri=${encodeURIComponent(e)}`},ledger:{name:"Ledger Live",shortName:"Ledger",icon:i.jsx(ve.Ledger,{}),downloadUrls:{download:"https://connect.family.co/v0/download/ledger",website:"https://www.ledger.com/ledger-live/download#download-device-2",android:"https://play.google.com/store/apps/details?id=com.ledger.live",ios:"https://apps.apple.com/app/ledger-live-web3-wallet/id1361671700"},getWalletConnectDeeplink:e=>Ke()?e:`ledgerlive://wc?uri=${encodeURIComponent(e)}`,shouldDeeplinkDesktop:!0},zerion:{name:"Zerion",icon:i.jsx(ve.Zerion,{}),downloadUrls:{download:"https://connect.family.co/v0/download/zerion",ios:"https://apps.apple.com/app/apple-store/id1456732565",android:"https://play.google.com/store/apps/details?id=io.zerion.android",website:"https://zerion.io/"},getWalletConnectDeeplink:e=>Ke()?e:`https://app.zerion.io/wc?uri=${encodeURIComponent(e)}`},slope:{name:"Slope",icon:i.jsx(ve.Slope,{}),downloadUrls:{download:"https://connect.family.co/v0/download/slope",ios:"https://apps.apple.com/app/slope-wallet/id1574624530",android:"https://play.google.com/store/apps/details?id=com.wd.wallet",chrome:"https://chrome.google.com/webstore/detail/slope-wallet/pocmplpaccanhmnllbbkpgfliimjljgo",website:"https://slope.finance/"},getWalletConnectDeeplink:e=>Ke()?e:`https://slope.finance/app/wc?uri=${encodeURIComponent(e)}`},tokenPocket:{name:"TokenPocket Wallet",icon:i.jsx(ve.TokenPocket,{}),downloadUrls:{website:"https://www.tokenpocket.pro/en/download/app",download:"https://www.tokenpocket.pro/en/download/app",android:"https://play.google.com/store/apps/details?id=vip.mytokenpocket",ios:"https://apps.apple.com/us/app/tp-global-wallet/id6444625622",chrome:"https://chrome.google.com/webstore/detail/tokenpocket/mfgccjchihfkkindfppnaooecgfneiii"}},talisman:{name:"Talisman",icon:i.jsx(ve.Talisman,{}),downloadUrls:{download:"https://talisman.xyz/download",website:"https://talisman.xyz",chrome:"https://chrome.google.com/webstore/detail/talisman-polkadot-wallet/fijngjgcjhjmmpcmkeiomlglpeiijkld",firefox:"https://addons.mozilla.org/en-US/firefox/addon/talisman-wallet-extension/"}},walletConnect:{name:"Other Wallets",shortName:"Other",icon:i.jsx(ve.WalletConnect,{background:!0}),iconConnector:i.jsx(ve.OtherWallets,{}),iconShape:"square",getWalletConnectDeeplink:e=>e}};Object.keys(Rt).reduce((e,t)=>{var n,r,o,a,s,c;const l=Rt[t];if(!(l!=null&&l.getWalletConnectDeeplink))return e;const d=t.split(",")[0].trim(),u=(r=(n=l.name)===null||n===void 0?void 0:n.replace("Wallet","").replace(" ",""))!==null&&r!==void 0?r:d[0].toUpperCase()+d.slice(1),p=Ru({target:{id:d,name:(a=(o=l.name)!==null&&o!==void 0?o:l.shortName)!==null&&a!==void 0?a:t,provider:v=>{var f;return(f=v==null?void 0:v.ethereum)===null||f===void 0?void 0:f[`is${u}`]}}}),m=((c=(s=l.name)!==null&&s!==void 0?s:l.shortName)!==null&&c!==void 0?c:t).toLowerCase().replace(/(?:^|\s)\S/g,v=>v.toUpperCase()).replace(/\s/g,"").replace(/(?:^|\s)\S/g,v=>v.toLowerCase());return e[m]=p,e},{});const ql={font:{family:"-apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, 'Apple Color Emoji', Arial, sans-serif, 'Segoe UI Emoji'"},text:{primary:{color:"#373737"},secondary:{color:"#999999",hover:{color:"#111111"}},error:"#FC6464",valid:"#32D74B"},buttons:{primary:{borderRadius:16,color:"#000373737000",background:"#FFFFFF",border:"#F0F0F0",hover:{color:"#000000",border:"#1A88F8"}},secondary:{borderRadius:16,background:"#F6F7F9",color:"#000000"}},navigation:{color:"#999999"},modal:{background:"#ffffff",divider:"#f7f6f8"},tooltips:{color:"#999999",background:"#ffffff",hover:{background:"#f6f7f9"}},overlay:{background:"rgba(0, 0, 0, 0.06)"},qrCode:{accentColor:"#F7F6F8"}},Kl=e=>e,J9=()=>typeof window>"u"?!1:window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches;J9();const Q9={connectKit:{options:{iconStyle:"light"},theme:{preferred:"dark",light:Kl(ql),dark:Kl(ql)}}};var D=typeof fr.div=="function"?fr:fr.default;const e8=e=>{const t=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);if(t==null)return e;const n={r:parseInt(t[1],16),g:parseInt(t[2],16),b:parseInt(t[3],16)};return`color(display-p3 ${n.r/255} ${n.g/255} ${n.b/255})`};var t8={light:{"--ck-connectbutton-font-size":"15px","--ck-connectbutton-color":"#373737","--ck-connectbutton-background":"#F6F7F9","--ck-connectbutton-background-secondary":"#FFFFFF","--ck-connectbutton-hover-color":"#373737","--ck-connectbutton-hover-background":"#F0F2F5","--ck-connectbutton-active-color":"#373737","--ck-connectbutton-active-background":"#EAECF1","--ck-connectbutton-balance-color":"#373737","--ck-connectbutton-balance-background":"#fff","--ck-connectbutton-balance-box-shadow":"inset 0 0 0 1px var(--ck-connectbutton-background)","--ck-connectbutton-balance-hover-background":"#F6F7F9","--ck-connectbutton-balance-hover-box-shadow":"inset 0 0 0 1px var(--ck-connectbutton-hover-background)","--ck-connectbutton-balance-active-background":"#F0F2F5","--ck-connectbutton-balance-active-box-shadow":"inset 0 0 0 1px var(--ck-connectbutton-active-background)","--ck-primary-button-border-radius":"16px","--ck-primary-button-color":"#373737","--ck-primary-button-background":"#F6F7F9","--ck-primary-button-font-weight":"600","--ck-primary-button-hover-color":"#373737","--ck-primary-button-hover-background":"#F0F2F5","--ck-secondary-button-border-radius":"16px","--ck-secondary-button-color":"#373737","--ck-secondary-button-background":"#F6F7F9","--ck-tertiary-button-background":"#FFFFFF","--ck-secondary-button-hover-background":"#e0e4eb","--ck-modal-box-shadow":"0px 2px 4px rgba(0, 0, 0, 0.02)","--ck-overlay-background":"rgba(71, 88, 107, 0.24)","--ck-body-color":"#373737","--ck-body-color-muted":"#999999","--ck-body-color-muted-hover":"#111111","--ck-body-background":"#ffffff","--ck-body-background-transparent":"rgba(255,255,255,0)","--ck-body-background-secondary":"#f6f7f9","--ck-body-background-secondary-hover-background":"#e0e4eb","--ck-body-background-secondary-hover-outline":"#4282FF","--ck-body-background-tertiary":"#F3F4F7","--ck-body-action-color":"#999999","--ck-body-divider":"#f7f6f8","--ck-body-divider-secondary":"rgba(0, 0, 0, 0.06)","--ck-body-color-danger":"#FF4E4E","--ck-body-color-valid":"#32D74B","--ck-siwe-border":"#F0F0F0","--ck-body-disclaimer-color":"#AAAAAB","--ck-body-disclaimer-link-color":"#838485","--ck-body-disclaimer-link-hover-color":"#000000","--ck-tooltip-background":"#ffffff","--ck-tooltip-background-secondary":"#ffffff","--ck-tooltip-color":"#999999","--ck-tooltip-shadow":"0px 2px 10px rgba(0, 0, 0, 0.08)","--ck-dropdown-button-color":"#999999","--ck-dropdown-button-box-shadow":"0 0 0 1px rgba(0,0,0,0.01), 0px 0px 7px rgba(0, 0, 0, 0.05)","--ck-dropdown-button-background":"#fff","--ck-dropdown-button-hover-color":"#8B8B8B","--ck-dropdown-button-hover-background":"#F5F7F9","--ck-qr-dot-color":"#000000","--ck-qr-border-color":"#f7f6f8","--ck-focus-color":"#1A88F8","--ck-spinner-color":"var(--ck-focus-color)","--ck-copytoclipboard-stroke":"#CCCCCC"},dark:{"--ck-connectbutton-font-size":"15px","--ck-connectbutton-color":"#ffffff","--ck-connectbutton-background":"#383838","--ck-connectbutton-background-secondary":"#282828","--ck-connectbutton-hover-background":"#404040","--ck-connectbutton-active-background":"#4D4D4D","--ck-connectbutton-balance-color":"#fff","--ck-connectbutton-balance-background":"#282828","--ck-connectbutton-balance-box-shadow":"inset 0 0 0 1px var(--ck-connectbutton-background)","--ck-connectbutton-balance-hover-background":"#383838","--ck-connectbutton-balance-hover-box-shadow":"inset 0 0 0 1px var(--ck-connectbutton-hover-background)","--ck-connectbutton-balance-active-background":"#404040","--ck-connectbutton-balance-active-box-shadow":"inset 0 0 0 1px var(--ck-connectbutton-active-background)","--ck-primary-button-color":"#ffffff","--ck-primary-button-background":"#383838","--ck-primary-button-border-radius":"16px","--ck-primary-button-font-weight":"600","--ck-primary-button-hover-background":"#404040","--ck-primary-button-active-border-radius":"16px","--ck-secondary-button-color":"#ffffff","--ck-secondary-button-background":"#333333","--ck-secondary-button-hover-background":"#4D4D4D","--ck-tertiary-button-background":"#424242","--ck-focus-color":"#1A88F8","--ck-overlay-background":"rgba(0,0,0,0.4)","--ck-body-color":"#ffffff","--ck-body-color-muted":"rgba(255, 255, 255, 0.4)","--ck-body-color-muted-hover":"rgba(255, 255, 255, 0.8)","--ck-body-background":"#2B2B2B","--ck-body-background-transparent":"rgba(0,0,0,0)","--ck-body-background-secondary":"#333333","--ck-body-background-secondary-hover-background":"#4D4D4D","--ck-body-background-secondary-hover-outline":"#ffffff","--ck-body-background-tertiary":"#333333","--ck-body-action-color":"#808080","--ck-body-divider":"#383838","--ck-body-color-danger":"#FF4E4E","--ck-body-disclaimer-color":"#858585","--ck-body-disclaimer-link-color":"#ADADAD","--ck-body-disclaimer-link-hover-color":"#FFFFFF","--ck-modal-box-shadow":"0px 2px 4px rgba(0, 0, 0, 0.02)","--ck-copytoclipboard-stroke":"#555555","--ck-tooltip-background":"#2B2B2B","--ck-tooltip-background-secondary":"#333333","--ck-tooltip-color":"#999999","--ck-tooltip-shadow":"0px 2px 10px rgba(0, 0, 0, 0.08)","--ck-dropdown-button-color":"#6C7381","--ck-spinner-color":"var(--ck-focus-color)","--ck-qr-dot-color":"#ffffff","--ck-qr-border-color":"#3d3d3d"}},n8={"--ck-font-family":"Lato","--ck-border-radius":"0px","--ck-connectbutton-color":"#373737","--ck-connectbutton-background":"linear-gradient(180deg, #F0F0EA 0%, #FFFFFF 50%, #F0F0EA 100%) 100% 100% / 200% 200%, #F5F5F1","--ck-connectbutton-box-shadow":" 0 0 0 1px #003C74, 2px 2px 0px rgba(255, 255, 255, 0.75), -2px -2px 0px rgba(0, 0, 0, 0.05), inset 0px 0px 0px 0px #97B9EC, inset -1px -2px 2px rgba(0, 0, 0, 0.2)","--ck-connectbutton-border-radius":"4.5px","--ck-connectbutton-hover-color":"#373737","--ck-connectbutton-hover-background":"linear-gradient(180deg, #F0F0EA 0%, #FFFFFF 50%, #F0F0EA 100%) 100% 0% / 200% 200%, #F5F5F1","--ck-connectbutton-active-background":"linear-gradient(180deg, #F0F0EA 0%, #FFFFFF 50%, #F0F0EA 100%) 100% 100% / 200% 200%, #F5F5F1","--ck-connectbutton-balance-color":"#373737","--ck-connectbutton-balance-background":"#fff","--ck-connectbutton-balance-box-shadow":"0 0 0 1px #E4E7E7","--ck-connectbutton-balance-hover-box-shadow":"0 0 0 1px #d7dbdb","--ck-connectbutton-balance-active-box-shadow":"0 0 0 1px #bbc0c0","--ck-focus-color":"#1A88F8","--ck-overlay-background":"rgba(0, 127,  128, 0.8)","--ck-body-color":"#373737","--ck-body-color-muted":"#808080","--ck-body-color-muted-hover":"#111111","--ck-body-background":"#F0EDE2","--ck-body-background-transparent":"rgba(255,255,255,0)","--ck-body-background-secondary-hover-background":"#FAFAFA","--ck-body-background-secondary-hover-outline":"#4282FF","--ck-body-action-color":"#373737","--ck-body-color-danger":"#FC6464","--ck-body-color-valid":"#32D74B","--ck-body-divider":"#919B9C","--ck-body-divider-box-shadow":"0px 1px 0px #FBFBF8","--ck-primary-button-background":"linear-gradient(180deg, #FFFFFF 0%, #F0F0EA 100%), #F5F5F1","--ck-primary-button-box-shadow":"inset 0 0 0 1px #003C74, 1px 1px 0px rgba(255, 255, 255, 0.75), -1px -1px 0px rgba(0, 0, 0, 0.05), inset 0px 0px 0px 0px #97B9EC, inset -1px -2px 2px rgba(0, 0, 0, 0.2)","--ck-primary-button-border-radius":"6px","--ck-primary-button-hover-box-shadow":"inset 0 0 0 1px #003C74, 1px 1px 0px rgba(255, 255, 255, 0.75), -1px -1px 0px rgba(0, 0, 0, 0.05), inset 0px 0px 0px 5px #97B9EC, inset -1px -2px 2px rgba(0, 0, 0, 0.2)","--ck-primary-button-hover-border-radius":"6px","--ck-modal-heading-font-weight":400,"--ck-modal-box-shadow":`
    inset 0px -3px 0px #0F37A9,
    inset -2px 0px 0px #0F37A9,
    inset 0px -4px 0px #0D5DDF,
    inset -4px 0px 0px #0D5DDF,
    inset 2px 0px 0px #0453DD,
    inset 0px 2px 0px #044FD1,
    inset 4px 0px 0px #4283EB,
    inset 0px 4px 0px #4283EB
  `,"--ck-modal-h1-font-weight":400,"--ck-secondary-button-color":"#373737","--ck-secondary-button-border-radius":"6px","--ck-secondary-button-box-shadow":"inset 0 0 0 1px #003C74, 1px 1px 0px rgba(255, 255, 255, 0.75), -1px -1px 0px rgba(0, 0, 0, 0.05), inset 0px 0px 0px 0px #97B9EC, inset -1px -2px 2px rgba(0, 0, 0, 0.2)","--ck-secondary-button-background":"linear-gradient(180deg, #FFFFFF 0%, #F0F0EA 100%), #F5F5F1","--ck-secondary-button-hover-box-shadow":"inset 0 0 0 1px #003C74, 1px 1px 0px rgba(255, 255, 255, 0.75), -1px -1px 0px rgba(0, 0, 0, 0.05), inset 0px 0px 0px 4px #97B9EC, inset -1px -2px 2px rgba(0, 0, 0, 0.2)","--ck-body-background-secondary":"rgba(0, 0, 0, 0.1)","--ck-body-background-tertiary":"linear-gradient(180deg, #FBFBFB 0%, #EFEFEE 100%)","--ck-tertiary-border-radius":"0px","--ck-tertiary-box-shadow":"inset 0 0 0 1px #919B9C, 1px 1px 2px rgba(0, 0, 0, 0.15), inset -2px -2px 0px #FFFFFF","--ck-body-button-text-align":"left","--ck-body-button-box-shadow":"0 2px 4px rgba(0, 0, 0, 0.05 )","--ck-body-disclaimer-background":"linear-gradient(180deg, #FBFBFB 0%, #EFEFEE 100%)","--ck-body-disclaimer-box-shadow":`
    inset 0px -3px 0px #0F37A9,
    inset -2px 0px 0px #0F37A9,
    inset 0px -4px 0px #0D5DDF,
    inset -4px 0px 0px #0D5DDF,
    inset 2px 0px 0px #0453DD,
    inset 4px 0px 0px #4283EB,
    inset 0 1px 0 0 #919B9C`,"--ck-body-disclaimer-font-size":"14px","--ck-body-disclaimer-color":"#959594","--ck-body-disclaimer-link-color":"#626262","--ck-body-disclaimer-link-hover-color":"#000000","--ck-qr-dot-color":"#000000","--ck-qr-border-color":"#919B9C","--ck-qr-border-radius":"0","--ck-qr-background":"#FFFFFF","--ck-copytoclipboard-stroke":"rgba(55, 55, 55, 0.4)","--ck-tooltip-background":"linear-gradient(270deg, #F7F3E6 7.69%, #F5F7DA 100%)","--ck-tooltip-background-secondary":"#f6f7f9","--ck-tooltip-color":"#000000","--ck-tooltip-shadow":" 0 0 0 1.5px #2b2622, 0px 2px 10px rgba(0, 0, 0, 0.08)","--ck-spinner-color":"var(--ck-focus-color)","--ck-dropdown-button-color":"#999999","--ck-dropdown-button-box-shadow":"0 0 0 1px #A0A0A0, 1px 1px 0px rgba(255, 255, 255, 0.75), -1px -1px 0px rgba(0, 0, 0, 0.05), inset -1px -2px 2px rgba(0, 0, 0, 0.2)","--ck-dropdown-button-background":"linear-gradient(180deg, #FFFFFF 0%, #F0F0EA 100%), #F5F5F1","--ck-dropdown-button-hover-background":"linear-gradient(0deg, #FFFFFF 0%, #F0F0EA 100%), #F5F5F1","--ck-dropdown-pending-color":"#ACA899","--ck-dropdown-active-color":"#FFFFFF","--ck-dropdown-active-static-color":"#ACA899","--ck-dropdown-active-background":"#3F69BF","--ck-dropdown-active-border-radius":"0","--ck-dropdown-active-inset":"-12px","--ck-dropdown-color":"#ACA899","--ck-dropdown-background":"#FFFFFF","--ck-dropdown-box-shadow":"inset 0 0 0 1px #ACA899, 2px 2px 7px rgba(0, 0, 0, 0.15)","--ck-dropdown-border-radius":"0","--ck-alert-color":"#ACA899","--ck-alert-background":"linear-gradient(180deg, #FBFBFB 0%, #EFEFEE 100%)","--ck-alert-box-shadow":"inset 0 0 0 1px #919B9C, 1px 1px 2px rgba(0, 0, 0, 0.15), inset -2px -2px 0px #FFFFFF","--ck-alert-border-radius":"0","--ck-recent-badge-border-radius":"32px","--ck-recent-badge-top-offset":"0px","--ck-graphic-primary-color":"#333333","--ck-graphic-primary-background":"#FFFFFF","--ck-graphic-compass-background":"#FFFFFF","--ck-siwe-border":"#919B9C"},r8={"--ck-font-family":'"SF Pro Rounded",ui-rounded,"Nunito",-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol"',"--ck-border-radius":"8px","--ck-connectbutton-font-size":"17px","--ck-connectbutton-color":"#000000","--ck-connectbutton-background":"#ffffff","--ck-connectbutton-box-shadow":"-4px 4px 0px #000000, inset 0 0 0 2px #000000","--ck-connectbutton-border-radius":"8px","--ck-connectbutton-hover-background":"#F3EDE8","--ck-connectbutton-active-box-shadow":"0 0 0 0 #000000, inset 0 0 0 2px #000000","--ck-connectbutton-balance-color":"#000000","--ck-connectbutton-balance-background":"#F3EDE8","--ck-connectbutton-balance-box-shadow":"-4px 4px 0px #000000, inset 0 0 0 2px #000000","--ck-connectbutton-balance-hover-background":"#eee5dd","--ck-connectbutton-balance-connectbutton-box-shadow":"-4px 8px 0px -4px #000000, inset 0 0 0 2px #000000","--ck-connectbutton-balance-connectbutton-border-radius":"0px 8px 8px 0","--ck-primary-button-color":"#373737","--ck-primary-button-background":"#ffffff","--ck-primary-button-box-shadow":"inset 0 0 0 2px #000000, -4px 4px 0 0 #000000","--ck-primary-button-border-radius":"8px","--ck-primary-button-hover-background":"#F3EDE8","--ck-primary-button-hover-box-shadow":"inset 0 0 0 2px #000000, -0px 0px 0 0 #000000","--ck-secondary-button-border-radius":"8px","--ck-secondary-button-color":"#373737","--ck-secondary-button-background":"#ffffff","--ck-secondary-button-box-shadow":"-4px 4px 0 0 #000000, inset 0 0 0 2px #000000","--ck-secondary-button-hover-background":"#F3EDE8","--ck-secondary-button-hover-box-shadow":"0 0 0 0 #000000, inset 0 0 0 2px #000000","--ck-focus-color":"#3B99FC","--ck-overlay-background":"rgba(133, 120, 122, 0.8)","--ck-body-color":"#373737","--ck-body-color-muted":"rgba(0, 0, 0, 0.5)","--ck-body-color-muted-hover":"#000000","--ck-body-background":"#EBE1D8","--ck-body-background-transparent":"rgba(255,255,255,0)","--ck-body-background-secondary":"rgba(0,0,0,0.1)","--ck-body-background-secondary-hover-background":"#4D4D4D","--ck-body-background-secondary-hover-outline":"#373737","--ck-body-background-tertiary":"#ffffff","--ck-tertiary-border-radius":"8px","--ck-tertiary-box-shadow":"-4px 4px 0 0 #000000, inset 0 0 0 2px #000000","--ck-body-action-color":"#373737","--ck-body-divider":"#373737","--ck-body-color-danger":"#FF4E4E","--ck-body-disclaimer-background":"#E3D6C9","--ck-body-disclaimer-box-shadow":"-4px 4px 0 0 #000000, inset 2px 0 0 0 #000000, inset -2px 0 0 0 #000000, inset 0 -2px 0 0 #000000","--ck-body-disclaimer-font-weight":"500","--ck-body-disclaimer-color":"#888079","--ck-body-disclaimer-link-color":"#5B5650","--ck-body-disclaimer-link-hover-color":"#000000","--ck-modal-box-shadow":"-10px 10px 0px #000000, inset 0 0 0 2px #000000","--ck-copytoclipboard-stroke":"#555555","--ck-tooltip-border-radius":"8px","--ck-tooltip-color":"#373737","--ck-tooltip-background":"#ffffff","--ck-tooltip-background-secondary":"#EBE1D8","--ck-tooltip-shadow":"-6px 6px 0 0 #000000, 0 0 0 2px #000000","--ck-spinner-color":"#1A88F8","--ck-dropdown-button-color":"#000","--ck-dropdown-button-box-shadow":"-2px 2px 0 2px #000000,  0 0 0 2px #000000","--ck-dropdown-button-background":"#ffffff","--ck-dropdown-button-hover-background":"#F3EDE8","--ck-dropdown-button-hover-box-shadow":"-2px 2px 0 0 #000000,  0 0 0 2px #000000","--ck-dropdown-pending-color":"rgba(0, 0, 0, 0.5)","--ck-dropdown-active-color":"#FFFFFF","--ck-dropdown-active-static-color":"rgba(0, 0, 0, 0.5)","--ck-dropdown-active-background":"#3B99FC","--ck-dropdown-active-box-shadow":"inset 0 0 0 2px #000000","--ck-dropdown-active-border-radius":"8px","--ck-dropdown-color":"rgba(0, 0, 0, 0.5)","--ck-dropdown-background":"#FFFFFF","--ck-dropdown-box-shadow":"-4px 4px 0 0 #000000, inset 0 0 0 2px #000000","--ck-dropdown-border-radius":"8px","--ck-alert-color":"rgba(0, 0, 0, 0.5)","--ck-alert-background":" #F5F5F5","--ck-alert-border-radius":"8px","--ck-qr-border-radius":"8px","--ck-qr-dot-color":"#000000","--ck-qr-border-color":"#000000","--ck-qr-background":"#ffffff","--ck-recent-badge-border-radius":"32px","--ck-recent-badge-box-shadow":"inset 0 0 0 2px currentColor","--ck-graphic-primary-color":"#000000","--ck-graphic-primary-background":"#ffffff","--ck-graphic-compass-background":"#FFFFFF","--ck-siwe-border":"#8E8985"},o8={"--ck-border-radius":"12px","--ck-connectbutton-font-size":"17px","--ck-connectbutton-border-radius":"12px","--ck-connectbutton-color":"#414451","--ck-connectbutton-background":"#ffffff","--ck-connectbutton-box-shadow":"inset 0 0 0 1px #E9EAEC, 0px 2px 4px rgba(0, 0, 0, 0.02)","--ck-connectbutton-hover-background":"#F6F7F9","--ck-connectbutton-hover-box-shadow":"inset 0 0 0 1px #E9EAEC, 0px 2px 4px rgba(0, 0, 0, 0.02)","--ck-connectbutton-balance-color":"#373737","--ck-connectbutton-balance-background":"#F6F7F9","--ck-connectbutton-balance-box-shadow":"none","--ck-connectbutton-balance-hover-background":"#f1f1f3","--ck-primary-button-border-radius":"12px","--ck-primary-button-color":"#414451","--ck-primary-button-background":"#ffffff","--ck-primary-button-box-shadow":"0 0 0 1px #E9EAEC, 0px 2px 4px rgba(0, 0, 0, 0.02)","--ck-primary-button-hover-background":"#F6F7F9","--ck-primary-button-hover-box-shadow":"0 0 0 1px #D9DBDD, 0px 0 0 rgba(0, 0, 0, 0.02)","--ck-secondary-button-border-radius":"12px","--ck-secondary-button-color":"#414451","--ck-secondary-button-background":"#ffffff","--ck-secondary-button-box-shadow":"0 0 0 1px #E9EAEC, 0px 2px 4px rgba(0, 0, 0, 0.02)","--ck-secondary-button-hover-background":"#F6F7F9","--ck-secondary-button-hover-box-shadow":"0 0 0 1px #D9DBDD, 0px 0 0 rgba(0, 0, 0, 0.02)","--ck-focus-color":"#1A88F8","--ck-modal-box-shadow":"0px 3px 16px rgba(0, 0, 0, 0.08)","--ck-body-color":"#414451","--ck-body-color-muted":"#9196A1","--ck-body-color-muted-hover":"#000000","--ck-body-background":"#ffffff","--ck-body-background-transparent":"rgba(255,255,255,0)","--ck-body-background-secondary":"#f6f7f9","--ck-body-background-secondary-hover-background":"#e0e4eb","--ck-body-background-secondary-hover-outline":"#4282FF","--ck-body-background-tertiary":"#F6F8FA","--ck-tertiary-border-radius":"13px","--ck-tertiary-box-shadow":"inset 0 0 0 1px rgba(0, 0, 0, 0.04)","--ck-body-action-color":"#999999","--ck-body-divider":"#f7f6f8","--ck-body-color-danger":"#FF4E4E","--ck-body-color-valid":"#32D74B","--ck-body-disclaimer-background":"#F9FAFA","--ck-body-disclaimer-color":"#AFB1B6","--ck-body-disclaimer-link-color":"#787B84","--ck-body-disclaimer-link-hover-color":"#000000","--ck-copytoclipboard-stroke":"#CCCCCC","--ck-tooltip-background":"#ffffff","--ck-tooltip-background-secondary":"#ffffff","--ck-tooltip-color":"#999999","--ck-tooltip-shadow":"0px 2px 10px rgba(0, 0, 0, 0.08)","--ck-spinner-color":"var(--ck-focus-color)","--ck-dropdown-button-color":"#999999","--ck-dropdown-button-box-shadow":"0 0 0 1px rgba(0, 0, 0, 0.01), 0px 0px 7px rgba(0, 0, 0, 0.05)","--ck-dropdown-button-background":"#fff","--ck-dropdown-button-hover-color":"#8B8B8B","--ck-dropdown-button-hover-background":"#E7E7E7","--ck-dropdown-color":"rgba(55, 55, 55, 0.4)","--ck-dropdown-box-shadow":"0px 2px 15px rgba(0, 0, 0, 0.15)","--ck-alert-color":"#9196A1","--ck-alert-background":"#F6F8FA","--ck-alert-box-shadow":"inset 0 0 0 1px rgba(0, 0, 0, 0.04)","--ck-alert-border-radius":"8px","--ck-qr-border-radius":"12px","--ck-qr-dot-color":"#2E3138","--ck-qr-border-color":"#E9EAEC","--ck-siwe-border":"#EAEBED"},i8={"--ck-font-family":'"Inter",-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol"',"--ck-border-radius":"10px","--ck-connectbutton-font-size":"17px","--ck-connectbutton-border-radius":"8px","--ck-connectbutton-color":"#ffffff","--ck-connectbutton-background":"#313235","--ck-connectbutton-box-shadow":"inset 0 0 0 1px rgba(255, 255, 255, 0.05)","--ck-connectbutton-hover-background":"#414144","--ck-connectbutton-active-background":"#4C4D4F","--ck-connectbutton-balance-color":"#ffffff","--ck-connectbutton-balance-background":"#1F2023","--ck-connectbutton-balance-box-shadow":"inset 0 0 0 1px #313235","--ck-connectbutton-balance-hover-background":"#313235","--ck-connectbutton-balance-active-background":"#414144","--ck-primary-button-border-radius":"8px","--ck-primary-button-color":"#ffffff","--ck-primary-button-background":"rgba(255, 255, 255, 0.08)","--ck-primary-button-box-shadow":"inset 0 0 0 1px rgba(255, 255, 255, 0.05)","--ck-primary-button-hover-background":"rgba(255, 255, 255, 0.2)","--ck-secondary-button-border-radius":"8px","--ck-secondary-button-color":"#ffffff","--ck-secondary-button-background":"#363638","--ck-secondary-button-box-shadow":"inset 0 0 0 1px rgba(255, 255, 255, 0.05)","--ck-secondary-button-hover-background":"#3c3c3e","--ck-overlay-background":"rgba(0,0,0,0.4)","--ck-modal-box-shadow":"inset 0 0 0 1px #38393C, 0px 2px 4px rgba(0, 0, 0, 0.02)","--ck-focus-color":"#1A88F8","--ck-body-color":"#ffffff","--ck-body-color-muted":"#8B8F97","--ck-body-color-muted-hover":"#ffffff","--ck-body-background":"#1F2023","--ck-body-background-transparent":"rgba(31, 32, 35, 0)","--ck-body-background-secondary":"#313235","--ck-body-background-secondary-hover-background":"#e0e4eb","--ck-body-background-secondary-hover-outline":"rgba(255, 255, 255, 0.02)","--ck-body-background-tertiary":"#313235","--ck-tertiary-border-radius":"12px","--ck-tertiary-box-shadow":"inset 0 0 0 1px rgba(255, 255, 255, 0.02)","--ck-body-action-color":"#8B8F97","--ck-body-divider":"rgba(255,255,255,0.1)","--ck-body-color-danger":"#FF4E4E","--ck-body-color-valid":"#32D74B","--ck-body-disclaimer-background":"#2B2D31","--ck-body-disclaimer-box-shadow":"none","--ck-body-disclaimer-color":"#808183","--ck-body-disclaimer-link-color":"#AAABAD","--ck-body-disclaimer-link-hover-color":"#ffffff","--ck-copytoclipboard-stroke":"#CCCCCC","--ck-tooltip-background":"#1F2023","--ck-tooltip-background-secondary":"#1F2023","--ck-tooltip-color":"#ffffff","--ck-tooltip-shadow":" 0 0 0 1px rgba(255, 255, 255, 0.1), 0px 2px 4px rgba(0, 0, 0, 0.02)","--ck-spinner-color":"var(--ck-focus-color)","--ck-dropdown-button-color":"#6C7381","--ck-dropdown-button-box-shadow":"inset 0 0 0 1px rgba(255, 255, 255, 0.05)","--ck-dropdown-button-background":"#313235","--ck-dropdown-pending-color":"#8B8F97","--ck-dropdown-active-color":"#FFF","--ck-dropdown-active-static-color":"#FFF","--ck-dropdown-active-background":"rgba(255, 255, 255, 0.07)","--ck-dropdown-color":"#8B8F97","--ck-dropdown-background":"#313235","--ck-dropdown-box-shadow":"inset 0 0 0 1px rgba(255, 255, 255, 0.03)","--ck-dropdown-border-radius":"8px","--ck-alert-color":"#8B8F97","--ck-alert-background":"#404145","--ck-alert-box-shadow":"inset 0 0 0 1px rgba(255, 255, 255, 0.02)","--ck-qr-border-radius":"12px","--ck-qr-dot-color":"#ffffff","--ck-qr-border-color":"rgba(255,255,255,0.1)","--ck-recent-badge-border-radius":"32px"},a8={"--ck-font-family":'"Inter",-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol"',"--ck-border-radius":"0px","--ck-connectbutton-font-size":"17px","--ck-connectbutton-border-radius":"0px","--ck-connectbutton-color":"#414451","--ck-connectbutton-background":"#ffffff","--ck-connectbutton-box-shadow":"inset 0 0 0 1px #EBEBEB","--ck-connectbutton-hover-color":"#111","--ck-connectbutton-hover-box-shadow":"inset 0 0 0 1px #111","--ck-connectbutton-balance-color":"#111111","--ck-connectbutton-balance-background":"#F7F7F7","--ck-connectbutton-balance-box-shadow":"inset 0 0 0 1px #F7F7F7","--ck-connectbutton-balance-hover-background":"#f1f1f3","--ck-connectbutton-balance-hover-box-shadow":"inset 0 0 0 1px #111","--ck-primary-button-border-radius":"0px","--ck-primary-button-color":"#111111","--ck-primary-button-background":"#ffffff","--ck-primary-button-box-shadow":"inset 0 0 0 1px #EBEBEB","--ck-primary-button-hover-box-shadow":"inset 0 0 0 1px #111111","--ck-secondary-button-border-radius":"0px","--ck-secondary-button-color":"#111111","--ck-secondary-button-background":"#ffffff","--ck-secondary-button-box-shadow":"inset 0 0 0 1px #EBEBEB","--ck-secondary-button-hover-box-shadow":"inset 0 0 0 1px #111111","--ck-dropdown-button-color":"#999999","--ck-dropdown-button-box-shadow":"0 0 0 1px rgba(0, 0, 0, 0.01), 0px 0px 7px rgba(0, 0, 0, 0.05)","--ck-dropdown-button-background":"#fff","--ck-dropdown-button-hover-color":"#8B8B8B","--ck-dropdown-button-hover-background":"#E7E7E7","--ck-focus-color":"#1A88F8","--ck-modal-box-shadow":"0px 3px 16px rgba(0, 0, 0, 0.08)","--ck-body-color":"#111111","--ck-body-color-muted":"#A0A0A0","--ck-body-color-muted-hover":"#000000","--ck-body-background":"#ffffff","--ck-body-background-transparent":"rgba(255,255,255,0)","--ck-body-background-secondary":"#f6f7f9","--ck-body-background-secondary-hover-background":"#e0e4eb","--ck-body-background-secondary-hover-outline":"#4282FF","--ck-body-background-tertiary":"#ffffff","--ck-tertiary-border-radius":"0px","--ck-tertiary-box-shadow":"inset 0 0 0 1px rgba(0, 0, 0, 0.04)","--ck-body-action-color":"#A0A0A0","--ck-body-divider":"#EBEBEB","--ck-body-color-danger":"#FF4E4E","--ck-body-color-valid":"#32D74B","--ck-body-disclaimer-background":"#FAFAFA","--ck-body-disclaimer-box-shadow":"inset 0 1px 0 0 #ECECEC","--ck-body-disclaimer-color":"#9D9D9D","--ck-body-disclaimer-link-color":"#6E6E6E","--ck-body-disclaimer-link-hover-color":"#000000","--ck-copytoclipboard-stroke":"#CCCCCC","--ck-tooltip-border-radius":"0px","--ck-tooltip-background":"#ffffff","--ck-tooltip-background-secondary":"#ffffff","--ck-tooltip-color":"#999999","--ck-tooltip-shadow":"0px 2px 10px rgba(0, 0, 0, 0.08)","--ck-spinner-color":"var(--ck-focus-color)","--ck-dropdown-active-border-radius":"0","--ck-dropdown-box-shadow":"0px 2px 15px rgba(0, 0, 0, 0.15)","--ck-dropdown-border-radius":"0","--ck-alert-color":"rgba(17, 17, 17, 0.4)","--ck-alert-background":"#fff","--ck-alert-box-shadow":"inset 0 0 0 1px #EBEBEB","--ck-alert-border-radius":"0","--ck-qr-border-radius":"0px","--ck-qr-dot-color":"#111111","--ck-qr-border-color":"#EBEBEB","--ck-modal-h1-font-weight":"400","--ck-modal-heading-font-weight":"400","--ck-primary-button-font-weight":"400","--ck-recent-badge-top-offset":"0px","--ck-siwe-border":"#EBEBEB"},s8={"--ck-font-family":'"Nunito",ui-rounded,-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol"',"--ck-border-radius":"24px","--ck-connectbutton-font-size":"17px","--ck-connectbutton-font-weight":"700","--ck-connectbutton-border-radius":"14px","--ck-connectbutton-color":"#000000","--ck-connectbutton-background":"#ffffff","--ck-connectbutton-box-shadow":"inset 0 0 0 2px #DFE4EC, 0 2px 0 0 #DFE4EC, 0px 2px 4px rgba(0, 0, 0, 0.02)","--ck-connectbutton-hover-background":"#F9FAFB","--ck-connectbutton-balance-color":"#414451","--ck-connectbutton-balance-background":"#F9FAFB","--ck-connectbutton-balance-box-shadow":"0 2px 0 0 #DFE4EC, 0px 2px 4px rgba(0, 0, 0, 0.02)","--ck-connectbutton-balance-hover-background":"#F5F7F9","--ck-connectbutton-balance-hover-box-shadow":"0 2px 0 0 #DFE4EC, 0px 2px 4px rgba(0, 0, 0, 0.02)","--ck-connectbutton-balance-active-box-shadow":"0 0 0 0 #DFE4EC, 0px 2px 4px rgba(0, 0, 0, 0.02)","--ck-connectbutton-active-background":"#F5F7F9","--ck-connectbutton-active-box-shadow":"inset 0 0 0 2px #CFD7E2, 0 0px 0 0 #CFD7E2, 0px 2px 4px rgba(0, 0, 0, 0.02)","--ck-primary-button-border-radius":"18px","--ck-primary-button-color":"#000000","--ck-primary-button-background":"#ffffff","--ck-primary-button-box-shadow":"inset 0 0 0 2px #DFE4EC, inset  0 -4px 0 0 #DFE4EC, 0px 2px 4px rgba(0, 0, 0, 0.02)","--ck-primary-button-hover-background":"#F5F7F9","--ck-primary-button-hover-box-shadow":"inset 0 0 0 2px #DFE4EC, inset  0 -2px 0 0 #DFE4EC, 0px 2px 4px rgba(0, 0, 0, 0.02)","--ck-secondary-button-border-radius":"16px","--ck-secondary-button-color":"#000000","--ck-secondary-button-background":"#ffffff","--ck-secondary-button-box-shadow":"inset 0 0 0 2px #DFE4EC, inset  0 -4px 0 0 #DFE4EC, 0px 2px 4px rgba(0, 0, 0, 0.02)","--ck-secondary-button-hover-background":"#F5F7F9","--ck-secondary-button-hover-box-shadow":"inset 0 0 0 2px #DFE4EC, inset  0 -2px 0 0 #DFE4EC, 0px 2px 4px rgba(0, 0, 0, 0.02)","--ck-focus-color":"#1A88F8","--ck-modal-box-shadow":"0px 3px 16px rgba(0, 0, 0, 0.08)","--ck-body-color":"#000000","--ck-body-color-muted":"#93989F","--ck-body-color-muted-hover":"#000000","--ck-body-background":"#ffffff","--ck-body-background-transparent":"rgba(255,255,255,0)","--ck-body-background-secondary":"#f6f7f9","--ck-body-background-secondary-hover-background":"#e0e4eb","--ck-body-background-secondary-hover-outline":"#4282FF","--ck-body-background-tertiary":"#ffffff","--ck-tertiary-border-radius":"22px","--ck-tertiary-box-shadow":"inset 0 0 0 2px #DFE4EC, 0px 2px 4px rgba(0, 0, 0, 0.02)","--ck-body-action-color":"#93989F","--ck-body-divider":"#DFE4EC","--ck-body-color-danger":"#FF4E4E","--ck-body-color-valid":"#32D74B","--ck-body-disclaimer-background":"#F9FAFB","--ck-body-disclaimer-font-size":"14px","--ck-body-disclaimer-font-weight":"700","--ck-body-disclaimer-color":"#959697","--ck-body-disclaimer-link-color":"#646464","--ck-body-disclaimer-link-hover-color":"#000000","--ck-copytoclipboard-stroke":"#CCCCCC","--ck-tooltip-background":"#ffffff","--ck-tooltip-background-secondary":"#ffffff","--ck-tooltip-color":"#999999","--ck-tooltip-shadow":" 0 0 0 2px #DFE4EC, 0px 2px 4px rgba(0, 0, 0, 0.02)","--ck-spinner-color":"var(--ck-focus-color)","--ck-dropdown-button-color":"#999999","--ck-dropdown-button-box-shadow":"0 0 0 2px #DFE4EC,  0 2px 0 2px #DFE4EC, 0px 2px 4px rgba(0, 0, 0, 0.02)","--ck-dropdown-button-background":"#fff","--ck-dropdown-button-hover-color":"#8B8B8B","--ck-dropdown-button-hover-background":"#F5F7F9","--ck-dropdown-pending-color":"#848D9A","--ck-dropdown-active-color":"#000000","--ck-dropdown-active-static-color":"#848D9A","--ck-dropdown-active-background":"#F5F7F9","--ck-dropdown-color":"#848D9A","--ck-dropdown-background":"#FFFFFF","--ck-dropdown-box-shadow":"0px 2px 15px rgba(0, 0, 0, 0.15)","--ck-dropdown-border-radius":"16px","--ck-alert-color":"#848D9A","--ck-alert-background":"#F5F7F9","--ck-qr-border-radius":"24px","--ck-qr-dot-color":"#111111","--ck-qr-border-color":"#DFE4EC","--ck-modal-h1-font-weight":"700","--ck-modal-heading-font-weight":"700","--ck-primary-button-font-weight":"700","--ck-recent-badge-box-shadow":"inset 0 0 0 2px currentColor","--ck-recent-badge-top-offset":"0px","--ck-siwe-border":"#DFE4EC"},c8={"--ck-font-family":'"PT Root UI",ui-rounded,"Nunito",-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol"',"--ck-border-radius":"24px","--ck-connectbutton-font-size":"16px","--ck-connectbutton-font-weight":"700","--ck-connectbutton-border-radius":"10px","--ck-connectbutton-color":"#151C3B","--ck-connectbutton-background":"#ffffff","--ck-connectbutton-box-shadow":"inset 0 0 0 1px #D6D8E1","--ck-connectbutton-hover-background":"#E9EBF3","--ck-connectbutton-hover-box-shadow":"inset 0 0 0 1px #D4D8E8","--ck-connectbutton-active-background":"#D4D8E8","--ck-connectbutton-active-box-shadow":"inset 0 0 0 1px #D4D8E8","--ck-connectbutton-balance-color":"#373737","--ck-connectbutton-balance-background":"#F6F7F9","--ck-connectbutton-balance-box-shadow":"none","--ck-connectbutton-balance-hover-background":"#f1f1f3","--ck-primary-button-border-radius":"16px","--ck-primary-button-color":"#151C3B","--ck-primary-button-background":"#ffffff","--ck-primary-button-font-weight":"700","--ck-primary-button-hover-background":"#DEE1ED","--ck-secondary-button-border-radius":"16px","--ck-secondary-button-color":"#151C3B","--ck-secondary-button-background":"#ffffff","--ck-secondary-button-font-weight":"700","--ck-secondary-button-hover-background":"#DEE1ED","--ck-focus-color":"#1A88F8","--ck-modal-box-shadow":"0px 2px 4px rgba(0, 0, 0, 0.02)","--ck-overlay-background":"rgba(213, 215, 225, 0.8)","--ck-overlay-backdrop-filter":"blur(6px)","--ck-body-color":"#151C3B","--ck-body-color-muted":"#757A8E","--ck-body-color-muted-hover":"#000000","--ck-body-background":"#F4F4F8","--ck-body-background-transparent":"rgba(255,255,255,0)","--ck-body-background-secondary":"#E9E9F1","--ck-body-background-secondary-hover-background":"#e0e4eb","--ck-body-background-tertiary":"#E9E9F1","--ck-tertiary-border-radius":"24px","--ck-body-action-color":"#79809C","--ck-body-divider":"#D9DBE3","--ck-body-color-danger":"#FF4E4E","--ck-body-color-valid":"#32D74B","--ck-body-disclaimer-background":"#F9FAFA","--ck-body-disclaimer-color":"#AFB1B6","--ck-body-disclaimer-link-color":"#787B84","--ck-body-disclaimer-link-hover-color":"#000000","--ck-copytoclipboard-stroke":"#79809C","--ck-tooltip-background":"#ffffff","--ck-tooltip-background-secondary":"#ffffff","--ck-tooltip-color":"#999999","--ck-tooltip-shadow":"0px 2px 10px rgba(0, 0, 0, 0.08)","--ck-spinner-color":"var(--ck-focus-color)","--ck-dropdown-button-color":"#999999","--ck-dropdown-button-box-shadow":"0 0 0 1px rgba(0, 0, 0, 0.01), 0px 0px 7px rgba(0, 0, 0, 0.05)","--ck-dropdown-button-background":"#fff","--ck-dropdown-button-hover-color":"#8B8B8B","--ck-dropdown-button-hover-background":"#DEE1ED","--ck-dropdown-button-hover-box-shadow":"0px 0px 7px rgba(0, 0, 0, 0.05)","--ck-dropdown-color":"#757A8E","--ck-dropdown-box-shadow":"0 0 0 1px rgba(0, 0, 0, 0.01), 0px 0px 7px rgba(0, 0, 0, 0.05)","--ck-alert-color":"#9196A1","--ck-alert-background":"#F6F8FA","--ck-alert-box-shadow":"inset 0 0 0 1px rgba(0, 0, 0, 0.04)","--ck-alert-border-radius":"8px","--ck-qr-border-radius":"24px","--ck-qr-dot-color":"#000000","--ck-qr-background":"#ffffff","--ck-recent-badge-color":"#79809C","--ck-recent-badge-background":"#F4F4F8","--ck-recent-badge-box-shadow":"none","--ck-siwe-border":"#DFE4EC","--ck-graphic-primary-background":"#fff","--ck-graphic-compass-background":"#fff","--ck-graphic-primary-box-shadow":"0px 2.94737px 14.7368px rgba(0, 0, 0, 0.1)","--ck-graphic-compass-box-shadow":"0px 2px 9px rgba(0, 0, 0, 0.15)"},Tt={base:t8,web95:n8,retro:r8,soft:o8,midnight:i8,minimal:a8,rounded:s8,nouns:c8};const kn={default:{"--ck-font-family":`-apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica,
    'Apple Color Emoji', Arial, sans-serif, 'Segoe UI Emoji',
    'Segoe UI Symbol'`,"--ck-border-radius":"20px","--ck-secondary-button-border-radius":"16px"},graphics:{light:{"--ck-graphic-wave-stop-01":"#E8F17D","--ck-graphic-wave-stop-02":"#A8ECDE","--ck-graphic-wave-stop-03":"#7AA1F2","--ck-graphic-wave-stop-04":"#DEA1E8","--ck-graphic-wave-stop-05":"#F46D98","--ck-graphic-scaniconwithlogos-01":"#4E4E4E","--ck-graphic-scaniconwithlogos-02":"#272727","--ck-graphic-scaniconwithlogos-03":"#F8D74A","--ck-graphic-scaniconwithlogos-04":"#F6F7F9","--ck-chain-ethereum-01":"#25292E","--ck-chain-ethereum-02":"#ffffff","--ck-chain-ethereum-03":"#DFE0E0"},dark:{"--ck-graphic-wave-stop-01":"#E8F17D","--ck-graphic-wave-stop-02":"#A8ECDE","--ck-graphic-wave-stop-03":"#7AA1F2","--ck-graphic-wave-stop-04":"#DEA1E8","--ck-graphic-wave-stop-05":"#F46D98","--ck-graphic-scaniconwithlogos-01":"#AFAFAF","--ck-graphic-scaniconwithlogos-02":"#696969","--ck-graphic-scaniconwithlogos-03":"#F8D74A","--ck-graphic-scaniconwithlogos-04":"#3D3D3D"}},ens:{light:{"--ck-ens-01-start":"#FF3B30","--ck-ens-01-stop":"#FF9500","--ck-ens-02-start":"#FF9500","--ck-ens-02-stop":"#FFCC00","--ck-ens-03-start":"#FFCC00","--ck-ens-03-stop":"#34C759","--ck-ens-04-start":"#5856D6","--ck-ens-04-stop":"#AF52DE","--ck-ens-05-start":"#5AC8FA","--ck-ens-05-stop":"#007AFF","--ck-ens-06-start":"#007AFF","--ck-ens-06-stop":"#5856D6","--ck-ens-07-start":"#5856D6","--ck-ens-07-stop":"#AF52DE","--ck-ens-08-start":"#AF52DE","--ck-ens-08-stop":"#FF2D55"},dark:{"--ck-ens-01-start":"#FF453A","--ck-ens-01-stop":"#FF9F0A","--ck-ens-02-start":"#FF9F0A","--ck-ens-02-stop":"#FFD60A","--ck-ens-03-start":"#FFD60A","--ck-ens-03-stop":"#32D74B","--ck-ens-04-start":"#32D74B","--ck-ens-04-stop":"#64D2FF","--ck-ens-05-start":"#64D2FF","--ck-ens-05-stop":"#0A84FF","--ck-ens-06-start":"#0A84FF","--ck-ens-06-stop":"#5E5CE6","--ck-ens-07-start":"#5E5CE6","--ck-ens-07-stop":"#BF5AF2","--ck-ens-08-start":"#BF5AF2","--ck-ens-08-stop":"#FF2D55"}},brand:{"--ck-aave-brand":"#9896FF","--ck-aave-brand-hover":"#8784FF","--ck-brand-walletConnect":"#3B99FC","--ck-brand-coinbaseWallet":"#0052FF","--ck-brand-metamask":"#FF5C16","--ck-brand-metamask-bg":"#FFF2EB","--ck-brand-metamask-01":"#FF5C16","--ck-brand-metamask-02":"#E34807","--ck-brand-metamask-03":"#FF8D5D","--ck-brand-metamask-04":"#661800","--ck-brand-metamask-05":"#C0C4CD","--ck-brand-metamask-06":"#E7EBF6","--ck-brand-trust-01":"#3375BB","--ck-brand-trust-02":"#ffffff","--ck-brand-trust-01b":"#ffffff","--ck-brand-trust-02b":"#3375BB","--ck-brand-argent":"#f36a3d","--ck-brand-imtoken-01":"#11C4D1","--ck-brand-imtoken-02":"#0062AD","--ck-brand-safe":"#12FF80","--ck-brand-dawn":"#000000"}},Ot={light:Tt.base.light,dark:Tt.base.dark,web95:Tt.web95,retro:Tt.retro,soft:Tt.soft,midnight:Tt.midnight,minimal:Tt.minimal,rounded:Tt.rounded,nouns:Tt.nouns},l8=(e,t)=>se`
    ${Object.keys(e).map(n=>{const r=e[n];return r&&`${n}:${r};`})}
  `,Ge=(e,t)=>{const n=t?" !important":"";return se`
    ${Object.keys(e).map(r=>{const o=e[r];return o&&`${r}:${o}${n};`})}
    @supports (color: color(display-p3 1 1 1)) {
      ${Object.keys(e).map(r=>{const o=e[r];return`${r}:${e8(o)}${n};`})}
    }
  `},nt={default:l8(kn.default),light:Ge(Ot.light),dark:Ge(Ot.dark),web95:Ge(Ot.web95),retro:Ge(Ot.retro),soft:Ge(Ot.soft),midnight:Ge(Ot.midnight),minimal:Ge(Ot.minimal),rounded:Ge(Ot.rounded),nouns:Ge(Ot.nouns)},Tn={brand:Ge(kn.brand),ensLight:Ge(kn.ens.light),ensDark:Ge(kn.ens.dark),graphicsLight:Ge(kn.graphics.light),graphicsDark:Ge(kn.graphics.dark)},Xl=se`
  ${Tn.brand}
  ${Tn.ensLight}
  ${Tn.graphicsLight}
`,Jl=se`
  ${Tn.brand}
  ${Tn.ensDark}
  ${Tn.graphicsDark}
`;let Ct="auto";const Hn=D(B.div)`
  ${nt.default}

  ${e=>{switch(e.$useTheme){case"web95":return Ct="light",nt.web95;case"retro":return Ct="light",nt.retro;case"soft":return Ct="light",nt.soft;case"midnight":return Ct="dark",nt.midnight;case"minimal":return Ct="light",nt.minimal;case"rounded":return Ct="light",nt.rounded;case"nouns":return Ct="light",nt.nouns;default:return e.$useMode==="light"?(Ct="light",nt.light):e.$useMode==="dark"?(Ct="dark",nt.dark):se`
            @media (prefers-color-scheme: light) {
              ${nt.light}
            }
            @media (prefers-color-scheme: dark) {
              ${nt.dark}
            }
          `}}}

  ${e=>{switch(Ct){case"light":return Xl;case"dark":return Jl;default:return se`
          ${Xl}
          @media (prefers-color-scheme: dark) {
            ${Jl}
          }
        `}}}

  ${e=>{var t;if(e.$customTheme&&e.$customTheme["--ck-accent-color"]&&["light","dark","auto","",void 0].includes(e.$useTheme)){const n=e.$customTheme["--ck-accent-color"],r=(t=e.$customTheme["--ck-accent-text-color"])!==null&&t!==void 0?t:"#ffffff";return{"--ck-accent-color":n,"--ck-accent-text-color":r,"--ck-secondary-button-background":n,"--ck-secondary-button-hover-background":n,"--ck-secondary-button-color":r,"--ck-button-primary-color":r,"--ck-focus-color":n}}if(e.$customTheme)return Ge(e.$customTheme,!0)}}

  all: initial;
  text-align: left;
  text-direction: ltr;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  -webkit-text-stroke: 0.001px transparent;
  text-size-adjust: none;
  font-size: 16px;

  button {
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    -webkit-text-stroke: 0.001px transparent;
  }

  &,
  * {
    font-family: var(--ck-font-family);
    box-sizing: border-box;
    outline: none;
    border: none;
  }
  /*
  @media (prefers-reduced-motion) {
    * {
      animation-duration: 60ms !important;
      transition-duration: 60ms !important;
    }
  }
  */
  img,
  svg {
    max-width: 100%;
  }
  strong {
    font-weight: 600;
  }
  a:focus-visible,
  button:focus-visible {
    outline: 2px solid var(--ck-focus-color);
  }
`,Fs=e=>{e={selector:"__CONNECTKIT__",...e};const{selector:t,children:n}=e,r=M.useRef(null),[o,a]=M.useState(!1);return M.useEffect(()=>{const s="#"+t.replace(/^#/,"");if(r.current=document.querySelector(s),!r.current){const c=document.createElement("div");c.setAttribute("id",t),c.setAttribute("data-connectkit",`${jm}`),document.body.appendChild(c),r.current=c}a(!0)},[t]),r.current&&o?_u.createPortal(n,r.current):null};var xe={mobileWidth:560};const d8=D(B.div)`
  z-index: -1;
  pointer-events: auto;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  width: var(--width);
  top: 64px;
  color: #fff;
  font-size: 14px;
  line-height: 20px;
  font-weight: 500;
  background: var(--ck-body-color-danger);
  border-radius: 20px;
  padding: 24px 46px 82px 24px;
  transition: width var(--duration) var(--ease);
  a {
    font-weight: 700;
    text-decoration: underline;
  }
  code {
    font-size: 0.9em;
    display: inline-block;
    font-family: monospace;
    margin: 1px;
    padding: 0 4px;
    border-radius: 8px;
    font-weight: bold;
    background: rgba(255, 255, 255, 0.1);
  }
`,Pa=ke`
from { opacity: 0; }
  to { opacity: 1; }
`,u8=ke`
from { opacity: 0; transform: scale(0.85); }
  to { opacity: 1; transform: scale(1); }
`,p8=ke`
from { opacity: 0; transform: scale(1.1); }
  to { opacity: 1; transform: scale(1); }
`,Wa=ke`
from { opacity: 1; }
  to { opacity: 0; }
`,h8=ke`
from { opacity: 1; transform: scale(1); }
  to { opacity: 0; transform: scale(1.1); }
`,f8=ke`
from { opacity: 1; transform: scale(1); }
  to { opacity: 0; transform: scale(0.85); }
`,Je=D(B.div)`
  max-width: 100%;
  width: 295px;
  padding-top: 48px;
`,g8=D(B.div)`
  user-select: none;
  position: relative;
  display: block;
  text-align: center;
  color: var(--ck-body-color-muted);
  font-size: 15px;
  font-weight: 400;
  line-height: 21px;
  span {
    z-index: 2;
    position: relative;
    display: inline-block;
    user-select: none;
    pointer-events: none;
    padding: 0 14px;
    background: var(--ck-body-background);
    transition: background-color 200ms ease;
  }
  ${e=>!e.$disableHr&&`
  &:before {
    z-index: 2;
    content: '';
    position: absolute;
    top: 50%;
    left: 0;
    right: 0;
    height: 1px;
    transform: translateY(-1px);
    background: var(--ck-body-divider);
    box-shadow: var(--ck-body-divider-box-shadow);
  }
    `}
`,Wo=D(B.div)`
  z-index: 3;
  pointer-events: none;
  user-select: none;
  position: absolute;
  top: 25px;
  left: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 26px;
  transform: translateX(-50%);
  width: var(--width);
  text-align: center;
  font-size: 17px;
  line-height: 20px;
  font-weight: var(--ck-modal-heading-font-weight, 600);
  color: var(--ck-body-color);
  span {
    display: inline-block;
  }
`,m8=D(B.div)`
  position: relative;
  padding: 0;
`,Te=D(B.div)`
  left: 0;
  right: 0;
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 0 0 16px;

  @media only screen and (max-width: ${xe.mobileWidth}px) {
    display: block;
  }
`,Xe=D(B.h1)`
  margin: 0;
  padding: 0;
  line-height: ${e=>e.$small?20:22}px;
  font-size: ${e=>e.$small?17:19}px;
  font-weight: var(--ck-modal-h1-font-weight, 600);
  color: ${e=>e.$error?"var(--ck-body-color-danger)":e.$valid?"var(--ck-body-color-valid)":"var(--ck-body-color)"};
  > svg {
    position: relative;
    top: -2px;
    display: inline-block;
    vertical-align: middle;
    margin-right: 6px;
  }
  @media only screen and (max-width: ${xe.mobileWidth}px) {
    margin-bottom: 6px;
    font-size: 17px;
  }
`,Fe=D.div`
  font-size: 16px;
  font-weight: 400;
  line-height: 21px;
  color: var(--ck-body-color-muted);
  strong {
    font-weight: 500;
    color: var(--ck-body-color);
  }
`;D.div`
  padding: 0 12px;
  font-size: 13px;
  font-weight: 400;
  line-height: 16px;
  color: var(--ck-body-color-muted);
  strong {
    font-weight: 500;
    color: var(--ck-body-color);
  }
`;const v8=D(B.div)`
  z-index: 1;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: var(--ck-overlay-background, rgba(71, 88, 107, 0.24));
  backdrop-filter: ${e=>e.$blur?`blur(${e.$blur}px)`:"var(--ck-overlay-backdrop-filter, none)"};
  opacity: 0;
  animation: ${e=>e.$active?Pa:Wa} 150ms ease-out
    both;
`,b8=ke`
  from{ opacity: 0; transform: scale(0.97); }
  to{ opacity: 1; transform: scale(1); }
`,x8=ke`
  from{ opacity: 1; transform: scale(1); }
  to{ opacity: 0; transform: scale(0.97); }
`,y8=ke`
  from { transform: translate3d(0, 100%, 0); }
  to { transform: translate3d(0, 0%, 0); }
`,C8=ke`
  from { opacity: 1; }
  to { opacity: 0; }
`,G0=D(B.div)`
  z-index: 2;
  position: relative;
  color: var(--ck-body-color);

  animation: 150ms ease both;
  animation-name: ${x8};
  &.active {
    animation-name: ${b8};
  }

  &:before {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 50%;
    width: var(--width);
    height: var(--height);
    transform: translateX(-50%);
    backface-visibility: hidden;
    transition: all 200ms ease;
    border-radius: var(--ck-border-radius, 20px);
    background: var(--ck-body-background);
    box-shadow: var(--ck-modal-box-shadow);
  }

  @media only screen and (max-width: ${xe.mobileWidth}px) {
    animation-name: ${C8};
    animation-duration: 130ms;
    animation-timing-function: ease;

    &.active {
      animation-name: ${y8};
      animation-duration: 300ms;
      animation-delay: 32ms;
      animation-timing-function: cubic-bezier(0.15, 1.15, 0.6, 1);
    }

    &:before {
      width: 100%;
      transition: 0ms height cubic-bezier(0.15, 1.15, 0.6, 1);
      will-change: height;
    }
  }
`,Y0=D(B.div)`
  z-index: 3;
  position: absolute;
  top: 0;
  left: 50%;
  height: 64px;
  transform: translateX(-50%);
  backface-visibility: hidden;
  width: var(--width);
  transition: 0.2s ease width;
  pointer-events: auto;
  //border-bottom: 1px solid var(--ck-body-divider);
`,w8=D(B.div)`
  position: relative;
  overflow: hidden;
  height: var(--height);
  transition: 0.2s ease height;
  @media only screen and (max-width: ${xe.mobileWidth}px) {
    transition: 0ms height cubic-bezier(0.15, 1.15, 0.6, 1);
    /* animation-delay: 34ms; */
  }
`,q0=D(B.div)`
  z-index: 2;
  position: relative;
  top: 0;
  left: 50%;
  margin-left: calc(var(--width) / -2);
  width: var(--width);
  /* left: 0; */
  /* width: 100%; */
  display: flex;
  justify-content: center;
  align-items: center;
  transform-origin: center center;
  animation: 200ms ease both;

  &.active {
    animation-name: ${p8};
  }
  &.active-scale-up {
    animation-name: ${u8};
  }
  &.exit-scale-down {
    z-index: 1;
    pointer-events: none;
    position: absolute;
    /* top: 0; */
    /* left: 0; */
    animation-name: ${f8};
  }
  &.exit {
    z-index: 1;
    pointer-events: none;
    position: absolute;
    /* top: 0; */
    /* left: 0; */
    /* left: 50%; */
    /* transform: translateX(-50%); */
    animation-name: ${h8};
    animation-delay: 16.6667ms;
  }
  @media only screen and (max-width: ${xe.mobileWidth}px) {
    /* animation: 0ms ease both; */
    /* animation-delay: 35ms; */
    animation: 0ms cubic-bezier(0.15, 1.15, 0.6, 1) both;

    &.active {
      animation-name: ${Pa};
    }
    &.active-scale-up {
      animation-name: ${Pa};
    }
    &.exit-scale-down {
      z-index: 3;
      animation-name: ${Wa};
    }
    &.exit {
      z-index: 3;
      animation-name: ${Wa};
      animation-delay: 0ms;
    }
  }
`,K0=D(B.div)`
  margin: 0 auto;
  width: fit-content;
  padding: 29px 24px 24px;
  backface-visibility: hidden;
`,k8=D.div`
  z-index: 2147483646; // z-index set one below max (2147483647) for if we wish to layer things ontop of the modal in a seperate Portal
  position: fixed;
  inset: 0;
`,Va=D(B.button)`
  z-index: 3;
  cursor: pointer;
  position: absolute;
  top: 22px;
  right: 17px;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 16px;
  padding: 0;
  margin: 0;
  color: var(--ck-body-action-color);
  background: var(--ck-body-background);
  transition: background-color 200ms ease, transform 100ms ease;
  /* will-change: transform; */
  svg {
    display: block;
  }

  &:hover {
    background: var(--ck-body-background-secondary);
  }
  &:active {
    transform: scale(0.9);
  }
`,_8=D(B.button)`
  z-index: 3;
  position: absolute;
  inset: 0;
  width: 100%; // FireFox fix
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 16px;
  padding: 0;
  margin: 0;
  color: var(--ck-body-action-color);
  background: var(--ck-body-background);
  transition: background-color 200ms ease, transform 100ms ease;
  /* will-change: transform; */
  svg {
    display: block;
    position: relative;
  }

  &:enabled {
    cursor: pointer;
    &:hover {
      background: var(--ck-body-background-secondary);
    }
    &:active {
      transform: scale(0.9);
    }
  }
`,Ua=D(B.button)`
  z-index: 3;
  position: absolute;
  inset: 0;
  width: 100%; // FireFox fix
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 16px;
  padding: 0;
  margin: 0;
  color: var(--ck-body-action-color);
  background: var(--ck-body-background);
  transition: background-color 200ms ease, transform 100ms ease;
  /* will-change: transform; */
  svg {
    display: block;
    position: relative;
    left: -1px;
  }

  &:enabled {
    cursor: pointer;
    &:hover {
      background: var(--ck-body-background-secondary);
    }
    &:active {
      transform: scale(0.9);
    }
  }
`,Za=D(B.button)`
  z-index: 3;
  position: absolute;
  inset: 0;
  width: 100%; // FireFox fix
  transform: translateX(-1px);
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 16px;
  padding: 0;
  margin: 0;
  color: var(--ck-body-action-color);
  background: var(--ck-body-background);
  transition: background-color 200ms ease, transform 100ms ease;
  /* will-change: transform; */
  svg {
    display: block;
    position: relative;
  }
  &:enabled {
    cursor: pointer;
    &:hover {
      background: var(--ck-body-background-secondary);
    }
    &:active {
      transform: scale(0.9);
    }
  }
`,j8=D(B.div)`
  --ease: cubic-bezier(0.25, 0.1, 0.25, 1);
  --duration: 200ms;
  --transition: height var(--duration) var(--ease),
    width var(--duration) var(--ease);
  z-index: 3;
  display: block;
  pointer-events: none;
  position: absolute;
  left: 50%;
  top: 50%;
  width: 100%;
  transform: translate3d(-50%, -50%, 0);
  backface-visibility: hidden;
  @media only screen and (max-width: ${xe.mobileWidth}px) {
    pointer-events: auto;
    left: 0;
    top: auto;
    bottom: -5px;
    transform: none;
    ${G0} {
      max-width: 448px;
      margin: 0 auto;
      &:before {
        width: 100%;
        border-radius: var(--ck-border-radius, 30px)
          var(--ck-border-radius, 30px) 0 0;
      }
    }
    ${q0} {
      left: 0;
      right: 0;
      margin: 0 auto;
      width: auto;
    }
    ${Je} {
      margin: 0 auto;
      width: 100% !important;
    }
    ${Wo} {
      top: 29px;
    }
    ${Te} {
      gap: 12px;
    }
    ${Fe} {
      margin: 0 auto;
      max-width: 295px;
    }
    ${K0} {
      width: 100%;
      padding: 31px 24px;
    }
    ${Y0} {
      width: 100%;
      top: 4px;
      border-bottom: 0;
    }
    ${Va} {
      right: 22px;
    }
    ${Ua} {
      top: -1px;
      left: -3px;
    }
    ${Za} {
      top: -1px;
      left: -3px;
      svg {
        width: 65%;
        height: auto;
      }
    }
    ${Va},
    ${Ua},
    ${Za} {
      // Quick hack for bigger tappable area on mobile
      transform: scale(1.4) !important;
      background: transparent !important;
      svg {
        transform: scale(0.8) !important;
      }
    }
  }
`,Rs=D(B.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 16px -24px -24px -24px;
  padding: 15px 40px 18px;
  font-size: var(--ck-body-disclaimer-font-size, 13px);
  font-weight: var(--ck-body-disclaimer-font-weight, 400);
  text-align: center;
  line-height: 19px;
  color: var(--ck-body-disclaimer-color, var(--ck-body-color-muted, inherit));

  & a {
    color: var(--ck-body-disclaimer-link-color, inherit);
    font-weight: var(--ck-body-disclaimer-font-weight, 400);
    text-decoration: none;
    transition: color 200ms ease;
    &:hover {
      color: var(--ck-body-disclaimer-link-hover-color, inherit);
    }
  }

  @media only screen and (max-width: ${xe.mobileWidth}px) {
    margin: 24px -24px -26px -24px;
    padding: 20px 42px 22px 42px;
  }
`,S8=D(B.div)`
  pointer-events: all;
  z-index: 9;
  position: absolute;
  bottom: 0;
  left: 50%;
  width: var(--width);
  backface-visibility: hidden;
  transform: translateX(-50%);
  transform-origin: bottom center;

  border-radius: var(--ck-border-radius, 30px);
  border-top-left-radius: 0;
  border-top-right-radius: 0;
  transition: width 200ms ease;

  background: var(
    --ck-body-disclaimer-background,
    var(--ck-body-background-secondary)
  );
  box-shadow: var(--ck-body-disclaimer-box-shadow);

  ${Rs} {
    margin: 0 !important;
    /* visibility: hidden; */
  }

  @media only screen and (max-width: ${xe.mobileWidth}px) {
    border-radius: 0;
  }
`,E8=D(B.div)`
  z-index: 2;
  position: absolute;
  top: 100%;
  white-space: nowrap;
  padding: 8px 16px;
  color: #fff;
  font-size: 13px;
  line-height: 1.5;
  background: #1a88f8;
  border-radius: calc(var(--ck-border-radius) * 0.75);
  transform: translateY(8px) translateX(-48px);
  box-shadow: var(--ck-modal-box-shadow);
  &:before {
    content: '';
    position: absolute;
    box-shadow: var(--shadow);
    width: 18px;
    height: 18px;
    transform: translate(215%, -75%) rotate(45deg);
    background: inherit;
    border-radius: 3px 0 0 0;
  }

  @media only screen and (max-width: ${xe.mobileWidth}px) {
    transform: translateY(8px) translateX(-16px);
    &:before {
      transform: translate(40%, -75%) rotate(45deg);
    }
  }
`,I8=typeof window<"u"?M.useLayoutEffect:M.useEffect;function X0(e){const[t,n]=M.useState(e),r=_e();return I8(()=>{var o;if(!t)return;const a={overflow:document.body.style.overflow,position:document.body.style.position,touchAction:document.body.style.touchAction,paddingRight:document.body.style.paddingRight},s=getComputedStyle(document.body),c=parseInt(s.marginRight)+parseInt(s.paddingRight)+parseInt(s.borderRight)+parseInt(s.marginLeft)+parseInt(s.paddingLeft)+parseInt(s.borderLeft),l=window.innerWidth-document.body.offsetWidth-c;return document.documentElement.style.setProperty("--ck-scrollbar-width",`${l}px`),document.body.style.overflow="hidden",document.body.style.position="relative",document.body.style.touchAction="none",!((o=r.options)===null||o===void 0)&&o.avoidLayoutShift&&(document.body.style.paddingRight=`${l}px`),()=>{var d;document.documentElement.style.removeProperty("--ck-scrollbar-width"),document.body.style.overflow=a.overflow,document.body.style.position=a.position,document.body.style.touchAction=a.touchAction,!((d=r.options)===null||d===void 0)&&d.avoidLayoutShift&&(document.body.style.paddingRight=a.paddingRight)}},[t]),M.useEffect(()=>{t!==e&&n(e)},[e]),[t,n]}const N8=9;function M8(){const e=M.useRef(null);function t(n){if(e.current){var r=e.current.querySelectorAll(`
        a[href]:not(:disabled),
        button:not(:disabled),
        textarea:not(:disabled),
        input[type="text"]:not(:disabled),
        input[type="radio"]:not(:disabled),
        input[type="checkbox"]:not(:disabled),
        select:not(:disabled)
      `),o=r[0],a=r[r.length-1],s=n.key==="Tab"||n.keyCode===N8;s&&(n.shiftKey?document.activeElement===o&&(a.focus(),n.preventDefault()):document.activeElement===a&&(o.focus(),n.preventDefault()))}}return M.useEffect(()=>(e.current&&(e.current.addEventListener("keydown",t),e.current.focus({preventScroll:!0})),()=>{e.current&&e.current.removeEventListener("keydown",t)}),[]),e}function J0(e){const t=M8();return M.useEffect(()=>{t.current&&t.current.focus({preventScroll:!0})},[]),i.jsx("div",{ref:t,tabIndex:0,children:e.children})}function Ql(e,t){const n=M.useRef({target:e,previous:t});return n.current.target!==e&&(n.current.previous=n.current.target,n.current.target=e),n.current.previous}const Q0=M.createContext(null),A8=({children:e,theme:t="auto",mode:n="auto",customTheme:r})=>{const o={theme:t,mode:n,customTheme:r};return M.createElement(Q0.Provider,{value:o},i.jsx(i.Fragment,{children:e}))},ti=()=>{const e=Oe.useContext(Q0);if(!e)throw Error("ConnectKitThemeProvider must be inside a Provider.");return e},L8=({...e})=>i.jsxs("svg",{"aria-hidden":"true",width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",style:{left:0,top:0},...e,children:[i.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M4 4C2.89543 4 2 4.89543 2 6V12C2 13.1046 2.89543 14 4 14H10C11.1046 14 12 13.1046 12 12V9.66667C12 9.11438 12.4477 8.66667 13 8.66667C13.5523 8.66667 14 9.11438 14 9.66667V12C14 14.2091 12.2091 16 10 16H4C1.79086 16 0 14.2091 0 12V6C0 3.79086 1.79086 2 4 2H6.33333C6.88562 2 7.33333 2.44772 7.33333 3C7.33333 3.55228 6.88562 4 6.33333 4H4Z",fill:"currentColor",fillOpacity:.3}),i.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M9.5 1C9.5 0.447715 9.94772 0 10.5 0H15C15.5523 0 16 0.447715 16 1V5.5C16 6.05228 15.5523 6.5 15 6.5C14.4477 6.5 14 6.05228 14 5.5V3.41421L8.70711 8.70711C8.31658 9.09763 7.68342 9.09763 7.29289 8.70711C6.90237 8.31658 6.90237 7.68342 7.29289 7.29289L12.5858 2H10.5C9.94772 2 9.5 1.55228 9.5 1Z",fill:"currentColor",fillOpacity:.3})]}),T8=({...e})=>i.jsxs("svg",{"aria-hidden":"true",width:"19",height:"18",viewBox:"0 0 19 18",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e,children:[i.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M6.81753 1.60122C7.39283 0.530035 8.46953 0 9.50409 0C10.5507 0 11.6022 0.539558 12.1805 1.59767L18.6047 13.3334C18.882 13.8283 19 14.3568 19 14.8622C19 16.5296 17.7949 18 15.9149 18H3.08514C1.20508 18 0 16.5296 0 14.8622C0 14.3454 0.131445 13.8172 0.405555 13.3379L6.81753 1.60122ZM9.50409 2C9.13355 2 8.77256 2.18675 8.57866 2.54907L8.57458 2.5567L2.14992 14.3166L2.144 14.3268C2.04638 14.4959 2 14.6817 2 14.8622C2 15.5497 2.43032 16 3.08514 16H15.9149C16.5697 16 17 15.5497 17 14.8622C17 14.6681 16.9554 14.4805 16.8588 14.309L16.8529 14.2986L10.4259 2.55741C10.2191 2.1792 9.86395 2 9.50409 2Z",fill:"currentColor"}),i.jsx("path",{d:"M9.5 11.2297C9.01639 11.2297 8.7459 10.9419 8.72951 10.4186L8.60656 6.4157C8.59016 5.88372 8.95902 5.5 9.4918 5.5C10.0164 5.5 10.4016 5.89244 10.3852 6.42442L10.2623 10.4099C10.2377 10.9419 9.96721 11.2297 9.5 11.2297ZM9.5 14.5C8.95082 14.5 8.5 14.0901 8.5 13.5058C8.5 12.9215 8.95082 12.5116 9.5 12.5116C10.0492 12.5116 10.5 12.9128 10.5 13.5058C10.5 14.0988 10.041 14.5 9.5 14.5Z",fill:"currentColor"})]}),Ds=({...e})=>i.jsx("svg",{"aria-hidden":"true",width:"15",height:"14",viewBox:"0 0 15 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",style:{left:0,top:0},...e,children:i.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M4 0C1.79086 0 0 1.79086 0 4V10C0 12.2091 1.79086 14 4 14H6C6.55228 14 7 13.5523 7 13C7 12.4477 6.55228 12 6 12H4C2.89543 12 2 11.1046 2 10V4C2 2.89543 2.89543 2 4 2H6C6.55228 2 7 1.55228 7 1C7 0.447715 6.55228 0 6 0H4ZM11.7071 3.29289C11.3166 2.90237 10.6834 2.90237 10.2929 3.29289C9.90237 3.68342 9.90237 4.31658 10.2929 4.70711L11.5858 6H9.5H6C5.44772 6 5 6.44772 5 7C5 7.55228 5.44772 8 6 8H9.5H11.5858L10.2929 9.29289C9.90237 9.68342 9.90237 10.3166 10.2929 10.7071C10.6834 11.0976 11.3166 11.0976 11.7071 10.7071L14.7071 7.70711C15.0976 7.31658 15.0976 6.68342 14.7071 6.29289L11.7071 3.29289Z",fill:"currentColor",fillOpacity:"0.4"})}),eu=({...e})=>i.jsx("svg",{"aria-hidden":"true",width:"18",height:"18",viewBox:"0 0 18 18",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e,children:i.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M9 18C13.9706 18 18 13.9706 18 9C18 4.02944 13.9706 0 9 0C4.02944 0 0 4.02944 0 9C0 13.9706 4.02944 18 9 18ZM13.274 7.13324C13.6237 6.70579 13.5607 6.07577 13.1332 5.72604C12.7058 5.37632 12.0758 5.43932 11.726 5.86676L7.92576 10.5115L6.20711 8.79289C5.81658 8.40237 5.18342 8.40237 4.79289 8.79289C4.40237 9.18342 4.40237 9.81658 4.79289 10.2071L7.29289 12.7071C7.49267 12.9069 7.76764 13.0128 8.04981 12.9988C8.33199 12.9847 8.59505 12.8519 8.77396 12.6332L13.274 7.13324Z",fill:"currentColor"})}),O8=({...e})=>i.jsx("svg",{"aria-hidden":"true",width:"32",height:"32",viewBox:"0 0 32 32",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e,children:i.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M32 16C32 24.8366 24.8366 32 16 32C7.16344 32 0 24.8366 0 16C0 7.16344 7.16344 0 16 0C24.8366 0 32 7.16344 32 16ZM24.5001 8.74263C25.0834 8.74263 25.5563 9.21551 25.5563 9.79883V14.5997C25.5563 15.183 25.0834 15.6559 24.5001 15.6559H19.6992C19.1159 15.6559 18.643 15.183 18.643 14.5997C18.643 14.0164 19.1159 13.5435 19.6992 13.5435H21.8378L20.071 11.8798C20.0632 11.8724 20.0555 11.865 20.048 11.8574C19.1061 10.915 17.8835 10.3042 16.5643 10.1171C15.2452 9.92999 13.9009 10.1767 12.7341 10.82C11.5674 11.4634 10.6413 12.4685 10.0955 13.684C9.54968 14.8994 9.41368 16.2593 9.70801 17.5588C10.0023 18.8583 10.711 20.0269 11.7273 20.8885C12.7436 21.7502 14.0124 22.2582 15.3425 22.336C16.6726 22.4138 17.9919 22.0572 19.1017 21.3199C19.5088 21.0495 19.8795 20.7333 20.2078 20.3793C20.6043 19.9515 21.2726 19.9262 21.7004 20.3228C22.1282 20.7194 22.1534 21.3876 21.7569 21.8154C21.3158 22.2912 20.8176 22.7161 20.2706 23.0795C18.7793 24.0702 17.0064 24.5493 15.2191 24.4448C13.4318 24.3402 11.7268 23.6576 10.3612 22.4998C8.9956 21.3419 8.0433 19.7716 7.6478 18.0254C7.2523 16.2793 7.43504 14.4519 8.16848 12.8186C8.90192 11.1854 10.1463 9.83471 11.7142 8.97021C13.282 8.10572 15.0884 7.77421 16.861 8.02565C18.6282 8.27631 20.2664 9.09278 21.5304 10.3525L23.4439 12.1544V9.79883C23.4439 9.21551 23.9168 8.74263 24.5001 8.74263Z",fill:"currentColor"})}),F8=({...e})=>i.jsxs("svg",{"aria-hidden":"true",width:"16",height:"14",viewBox:"0 0 16 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e,children:[i.jsx("path",{d:"M14.5 2V6H10.5",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),i.jsx("path",{d:"M14 5.66537L10.9899 2.75871C10.0931 1.83853 8.92897 1.24216 7.6729 1.05947C6.41683 0.876774 5.13688 1.11765 4.02592 1.7458C2.91497 2.37395 2.0332 3.35534 1.5135 4.54208C0.993792 5.72883 0.864305 7.05663 1.14455 8.3254C1.42479 9.59418 2.09958 10.7352 3.06724 11.5765C4.03489 12.4178 5.24298 12.9138 6.50946 12.9898C7.77594 13.0657 9.03219 12.7176 10.0889 11.9977C10.4765 11.7337 10.8295 11.4249 11.142 11.0792",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})]}),R8=({...e})=>i.jsxs("svg",{"aria-hidden":"true",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e,children:[i.jsx("path",{d:"M14 9.5V7C14 5.89543 13.1046 5 12 5H7C5.89543 5 5 5.89543 5 7V12C5 13.1046 5.89543 14 7 14H9.5",stroke:"var(--ck-body-color-muted)",strokeWidth:"2"}),i.jsx("rect",{x:"10",y:"10",width:"9",height:"9",rx:"2",stroke:"var(--ck-body-color-muted)",strokeWidth:"2"}),i.jsx("path",{d:"M1 3L3 5L7 1",stroke:"var(--ck-body-color)",strokeWidth:"1.75",strokeLinecap:"round",strokeLinejoin:"round"})]}),tu=({...e})=>i.jsx("div",{...e,style:{zIndex:2,display:"flex",alignItems:"center",justifyContent:"center",position:"absolute",bottom:0,right:0,background:"#34C759",borderRadius:10,boxShadow:"0 0 0 1.5px var(--background)",width:10,height:10,...e==null?void 0:e.style},children:i.jsx("svg",{"aria-hidden":"true",width:"6",height:"6",viewBox:"0 0 6 6",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:i.jsx("path",{d:"M0.75 3L2.25 4.5L5.25 1.5",stroke:"white",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})});var Ft;(function(e){e.READY="ready",e.LOADING="loading",e.SUCCESS="success",e.REJECTED="rejected",e.ERROR="error"})(Ft||(Ft={}));const nu=M.createContext(null),$r=({onSignIn:e,onSignOut:t}={})=>{const n=M.useContext(nu);if(!n)return{isSignedIn:!1,data:void 0,status:Ft.ERROR,error:new Error("useSIWE hook must be inside a SIWEProvider."),isRejected:!1,isError:!0,isLoading:!1,isSuccess:!1,isReady:!1,reset:()=>{},signIn:()=>Promise.reject(),signOut:()=>Promise.reject()};const{session:r,nonce:o,status:a,signOut:s,signIn:c,resetStatus:l}=n,{address:d,chainId:u}=r.data||{},p=d?Ft.SUCCESS:r.isLoading||o.isLoading?Ft.LOADING:a,m=p===Ft.LOADING,v=p===Ft.SUCCESS,f=p===Ft.REJECTED,y=p===Ft.ERROR,_=!d||o.isFetching||m||v,k=()=>l(),x=!!d;return{isSignedIn:x,data:x?{address:d,chainId:u}:void 0,status:p,error:r.error||o.error,isRejected:f,isError:y,isLoading:m,isSuccess:v,isReady:_,signIn:async()=>{if(!x){const N=await c();N&&(e==null||e(N))}},signOut:async()=>{x&&(await s(),t==null||t())},reset:k}},et={continueWithAave:"Continue with Aave",orSelectWallet:"or select a wallet from the list below",loginWithEmailOrPhone:"Login with Email or Phone",connectWallet:"Connect Wallet",disconnect:"Disconnect",connected:"Connected",wrongNetwork:"Wrong Network",switchNetworks:"Switch Networks",switchWallets:"Switch Wallets",chainNetwork:"{{ CHAIN }} Network",copyToClipboard:"Copy to Clipboard",copyCode:"Copy Code",moreInformation:"More Information",back:"Back",close:"Close",or:"or",more:"More",tryAgain:"Try Again",tryAgainQuestion:"Try Again?",dontHaveTheApp:"Don't have the app?",scanTheQRCode:"Scan the QR code",useWalletConnectModal:"Use WalletConnect Modal",useModal:"Use Modal",installTheExtension:"Install the Extension",getWalletName:"Get {{ CONNECTORNAME }}",otherWallets:"Other Wallets",learnMore:"Learn More",getWallet:"Get a Wallet",approveInWallet:"Approve in Wallet",confirmInWallet:"Confirm in Wallet",awaitingConfirmation:"Awaiting Confirmation",signIn:"Sign In",signOut:"Sign Out",signedIn:"Signed In",signedOut:"Signed Out",walletNotConnected:"Wallet Not Connected",warnings_walletSwitchingUnsupported:"Your wallet does not support switching networks from this app.",warnings_walletSwitchingUnsupportedResolve:"Try switching networks from within your wallet instead.",warnings_chainUnsupported:"This app does not support the current connected network.",warnings_chainUnsupportedResolve:"Switch or disconnect to continue.",onboardingScreen_heading:"Get a Wallet",onboardingScreen_h1:"Start Exploring Web3",onboardingScreen_p:"Your wallet is the gateway to all things Ethereum, the magical technology that makes it possible to explore web3.",onboardingScreen_ctaText:"Choose Your First Wallet",onboardingScreen_ctaUrl:"https://ethereum.org/en/wallets/find-wallet/",aboutScreen_heading:"About Wallets",aboutScreen_a_h1:"For your digital assets",aboutScreen_a_p:"Wallets let you send, receive, store, and interact with digital assets like NFTs and other Ethereum tokens.",aboutScreen_b_h1:"A better way to login",aboutScreen_b_p:"With modern apps, your wallet can be used as an easy way to login, instead of having to remember a password.",aboutScreen_c_h1:"Explore the world of web3",aboutScreen_c_p:"Your wallet is an essential utility that lets you explore and participate in the fast evolving world of web3.",aboutScreen_ctaText:"Learn More",aboutScreen_ctaUrl:"https://ethereum.org/en/wallets/",connectorsScreen_heading:"Connect Wallet",connectorsScreen_newcomer:"I don’t have a wallet",connectorsScreen_h1:"What is a wallet?",connectorsScreen_p:"Wallets are used to send, receive, and store digital assets. Connecting a wallet lets you interact with apps.",mobileConnectorsScreen_heading:"Choose Wallet",scanScreen_heading:"Scan with Phone",scanScreen_heading_withConnector:"Scan with {{ CONNECTORNAME }}",scanScreen_tooltip_walletConnect:`Open a [WALLETCONNECTLOGO] WalletConnect 
supported wallet to scan`,scanScreen_tooltip_default:`Open {{ CONNECTORNAME }} on 
your mobile phone to scan`,downloadAppScreen_heading:"Get {{ CONNECTORNAME }}",downloadAppScreen_iosAndroid:"Scan with your phone camera to download on iOS or Android.",downloadAppScreen_ios:"Scan with your phone camera to download on iOS.",downloadAppScreen_android:"Scan with your phone camera to download on Android.",injectionScreen_unavailable_h1:"Unsupported Browser",injectionScreen_unavailable_p:`To connect your {{ CONNECTORSHORTNAME }} wallet,
install the extension on {{ SUGGESTEDEXTENSIONBROWSER }}.`,injectionScreen_install_h1:"Install {{ CONNECTORNAME }}",injectionScreen_install_p:`To connect your {{ CONNECTORSHORTNAME }} wallet,
install the browser extension.`,injectionScreen_connecting_h1:"Requesting Connection",injectionScreen_connecting_p:`Open the {{ CONNECTORSHORTNAME }} browser 
extension to connect your wallet.`,injectionScreen_connecting_injected_h1:"Requesting Connection",injectionScreen_connecting_injected_p:"Accept the request through your wallet to connect to this app.",injectionScreen_connected_h1:"Already Connected",injectionScreen_connected_p:"It is now okay to close this popup",injectionScreen_rejected_h1:"Request Cancelled",injectionScreen_rejected_p:`You cancelled the request.
Click above to try again.`,injectionScreen_failed_h1:"Connection Failed",injectionScreen_failed_p:`Sorry, something went wrong.
Please try connecting again.`,injectionScreen_notconnected_h1:"Login to {{ CONNECTORNAME }}",injectionScreen_notconnected_p:"To continue, please login to your {{ CONNECTORNAME }} extension.",profileScreen_heading:"Connected",switchNetworkScreen_heading:"Switch Networks",signInWithEthereumScreen_tooltip:`You’re not signed in to this app.
**Sign In With Ethereum** to continue.`,signInWithEthereumScreen_signedOut_heading:"Sign In With Ethereum",signInWithEthereumScreen_signedOut_h1:`This app would like to verify you 
 as the owner of this wallet.`,signInWithEthereumScreen_signedOut_p:`Please sign the message request 
 in your wallet to continue.`,signInWithEthereumScreen_signedOut_button:"Sign In",signInWithEthereumScreen_signedIn_heading:"Signed In With Ethereum",signInWithEthereumScreen_signedIn_h1:`You successfully verified yourself 
 as the owner of this wallet.`,signInWithEthereumScreen_signedIn_p:`Signing out will require you to 
 authenticate again in the future.`,signInWithEthereumScreen_signedIn_button:"Sign Out"},D8={...et,connectWallet:"الاتصال بالمحفظة",disconnect:"قطع الاتصال",connected:"متصل",wrongNetwork:"شبكة خاطئة",switchNetworks:"تغيير الشبكات",chainNetwork:"شبكة {{ CHAIN }}",copyToClipboard:"نسخ إلى الحافظة",copyCode:"نسخ الكود",moreInformation:"مزيد من المعلومات",back:"عودة",close:"إغلاق",or:"أو",more:"المزيد",tryAgain:"حاول مجددًا",tryAgainQuestion:"هل نحاول مرة أخرى؟",dontHaveTheApp:"ليس لديك التطبيق؟",scanTheQRCode:"مسح رمز الاستجابة السريعة",useWalletConnectModal:"استخدم نموذج ولِيت‌كنيكت",useModal:"استخدم النموذج",installTheExtension:"تثبيت الإضافة",getWalletName:"الحصول على {{ CONNECTORNAME }}",otherWallets:"محافظ أخرى",learnMore:"تعرف على المزيد",getWallet:"الحصول على محفظة",approveInWallet:"الموافقة في المحفظة",confirmInWallet:"تأكيد في المحفظة",awaitingConfirmation:"بانتظار التأكيد",signIn:"تسجيل الدخول",signOut:"تسجيل الخروج",signedIn:"تم تسجيل الدخول",signedOut:"تم تسجيل الخروج",walletNotConnected:"المحفظة غير متصلة",warnings_walletSwitchingUnsupported:"عذرًا، لا تدعم محفظتك تغيير الشبكات من هذا التطبيق.",warnings_walletSwitchingUnsupportedResolve:"حاول تغيير الشبكات من داخل محفظتك بدلاً من ذلك.",warnings_chainUnsupported:"هذا التطبيق غير متوافق مع الشبكة المتصلة حاليًا.",warnings_chainUnsupportedResolve:"للمتابعة، قم بتغيير الشبكة أو قطع الاتصال.",onboardingScreen_heading:"الحصول على محفظة",onboardingScreen_h1:"ابدأ استكشاف الويب3",onboardingScreen_p:"تعتبر محفظتك بوابتك إلى عوالم إيثريوم، التكنولوجيا السحرية التي تمكن استكشاف الويب3.",onboardingScreen_ctaText:"اختر محفظتك الأولى",onboardingScreen_ctaUrl:"https://ethereum.org/ar/wallets/find-wallet/",aboutScreen_heading:"حول المحافظ",aboutScreen_a_h1:"حافظ على أصولك الرقمية",aboutScreen_a_p:"تمكنك المحافظ من إرسال واستقبال وتخزين والتفاعل مع الأصول الرقمية مثل NFTs ورموز إيثريوم الأخرى.",aboutScreen_b_h1:"وسيلة أفضل لتسجيل الدخول",aboutScreen_b_p:"في تطبيقات العصر الحديث، يمكن استخدام محفظتك كوسيلة سهلة لتسجيل الدخول بدلاً من الحاجة إلى تذكر كلمة مرور.",aboutScreen_c_h1:"استكشاف عالم الويب3",aboutScreen_c_p:"تعتبر محفظتك أداة أساسية تمكنك من استكشاف والمشاركة في عالم الويب3 الذي يتطور بسرعة.",aboutScreen_ctaText:"استزيد من المعرفة",aboutScreen_ctaUrl:"https://ethereum.org/ar/wallets/",connectorsScreen_heading:"الاتصال بالمحفظة",connectorsScreen_newcomer:"ليس لدي محفظة",connectorsScreen_h1:"ما هي المحافظ؟",connectorsScreen_p:"تُستخدم المحافظ لإرسال واستقبال وتخزين الأصول الرقمية. يمكنك الاتصال بمحفظة للتفاعل مع التطبيقات.",mobileConnectorsScreen_heading:"اختر محفظة",scanScreen_heading:"مسح باستخدام الهاتف",scanScreen_heading_withConnector:"مسح باستخدام {{ CONNECTORNAME }}",scanScreen_tooltip_walletConnect:`افتح محفظة تدعم ولِيت‌كنيكت 
 لبدء المسح.`,scanScreen_tooltip_default:"افتح {{ CONNECTORNAME }} على هاتفك للمسح",downloadAppScreen_heading:"الحصول على {{ CONNECTORNAME }}",downloadAppScreen_iosAndroid:`استخدم كاميرا هاتفك للمسح وتنزيله على نظامي iOS أو Android

.`,downloadAppScreen_ios:"استخدم كاميرا هاتفك للمسح وتنزيله على نظام iOS.",downloadAppScreen_android:"استخدم كاميرا هاتفك للمسح وتنزيله على نظام Android.",injectionScreen_unavailable_h1:"المتصفح غير مدعوم",injectionScreen_unavailable_p:"لتوصيل محفظتك {{ CONNECTORSHORTNAME }}، قم بتثبيت الإضافة على متصفح {{ SUGGESTEDEXTENSIONBROWSER }}.",injectionScreen_install_h1:"تثبيت {{ CONNECTORNAME }}",injectionScreen_install_p:"لتوصيل محفظتك {{ CONNECTORSHORTNAME }}، قم بتثبيت الإضافة على المتصفح.",injectionScreen_connecting_h1:"طلب الاتصال",injectionScreen_connecting_p:"افتح إضافة المتصفح {{ CONNECTORSHORTNAME }} لتوصيل محفظتك.",injectionScreen_connecting_injected_h1:"طلب الاتصال",injectionScreen_connecting_injected_p:"قبل الطلب من خلال محفظتك للاتصال بتطبيقنا.",injectionScreen_connected_h1:"الاتصال بالفعل",injectionScreen_connected_p:"من الآمن الآن إغلاق هذه النافذة المنبثقة.",injectionScreen_rejected_h1:"تم رفض الطلب",injectionScreen_rejected_p:"لقد قمت برفض الطلب. انقر أعلى للمحاولة مرة أخرى.",injectionScreen_failed_h1:"فشل الاتصال",injectionScreen_failed_p:"عذرًا، حدث خطأ ما. يُرجى المحاولة مرة أخرى للاتصال.",injectionScreen_notconnected_h1:"تسجيل الدخول إلى {{ CONNECTORNAME }}",injectionScreen_notconnected_p:"للمتابعة، يُرجى تسجيل الدخول إلى إضافة {{ CONNECTORNAME }}.",profileScreen_heading:"متصل",switchNetworkScreen_heading:"تبديل الشبكات",signInWithEthereumScreen_tooltip:`أنت غير مسجل الدخول حاليًا إلى هذا التطبيق.
**سجل الدخول باستخدام إثيريوم** للمتابعة.`,signInWithEthereumScreen_signedOut_heading:"سجل الدخول باستخدام إثيريوم",signInWithEthereumScreen_signedOut_h1:`يود هذا التطبيق التحقق منك 
 كصاحب لهذه المحفظة.`,signInWithEthereumScreen_signedOut_p:"يرجى تأكيد طلب الرسالة في محفظتك للمتابعة.",signInWithEthereumScreen_signedOut_button:"سجل الدخول",signInWithEthereumScreen_signedIn_heading:"تم تسجيل الدخول باستخدام إثيريوم",signInWithEthereumScreen_signedIn_h1:"لقد قمت بتأكيد نفسك كصاحب لهذه المحفظة بنجاح.",signInWithEthereumScreen_signedIn_p:"سيتطلب تسجيل الخروج منك إعادة المصادقة مرة أخرى في المستقبل.",signInWithEthereumScreen_signedIn_button:"تسجيل الخروج"},z8={...et,connectWallet:"Ühenda rahakott",disconnect:"Katkesta ühendus",connected:"Ühendatud",wrongNetwork:"Vale võrk",switchNetworks:"Vaheta võrke",chainNetwork:"{{ CHAIN }} Võrk",copyToClipboard:"Kopeeri lõikelauale",copyCode:"Kopeeri koodi",moreInformation:"Rohkem infot",back:"Tagasi",close:"Pane kinni",or:"või",more:"Rohkem",tryAgain:"Proovi uuesti",tryAgainQuestion:"Proovi uuesti?",dontHaveTheApp:"Kas teil pole rakendust?",scanTheQRCode:"Skaneeri QR-kood",useWalletConnectModal:"Kasuta WalletConnecti modalit",useModal:"Kasuta Modalit",installTheExtension:"Installi laiendust",getWalletName:"Hanki {{ CONNECTORNAME }}",otherWallets:"Teised rahakotid",learnMore:"Avasta rohkem",getWallet:"Lae alla rahakott",approveInWallet:"Kiita heaks rahakotis",confirmInWallet:"Kinnita rahakotis",awaitingConfirmation:"Kinnituse ootel",signIn:"Logi sisse",signOut:"Logi välja",signedIn:"Sisse logitud",signedOut:"Välja logitud",walletNotConnected:"Raakott pole ühendatud",warnings_walletSwitchingUnsupported:"Teie rahakott ei toeta võrgu vahetamist sellest rakendusest.",warnings_walletSwitchingUnsupportedResolve:"Proovige võrgu vahetamist teha oma rahakoti seest.",warnings_chainUnsupported:"See rakendus ei toeta praegu ühendatud võrku.",warnings_chainUnsupportedResolve:"Jätkamiseks vahetage või ühendage lahti.",onboardingScreen_heading:"Hankige rahakott",onboardingScreen_h1:"Alustage Web3 uurimist",onboardingScreen_p:"Teie rahakott on värav kõigele, mis puudutab Ethereumit, maagilist tehnoloogiat, mis võimaldab uurida Web3.",onboardingScreen_ctaText:"Valige oma esimene rahakott",onboardingScreen_ctaUrl:"https://ethereum.org/en/wallets/find-wallet/",aboutScreen_heading:"Rahakottidest",aboutScreen_a_h1:"Teie digitaalsetele varadele",aboutScreen_a_p:"Rahakotid võimaldavad teil saata, vastu võtta, salvestada ja suhelda digitaalsete varadega nagu NFT-d ja teised Ethereumi tokenid.",aboutScreen_b_h1:"Parem viis sisse logimiseks",aboutScreen_b_p:"Kaasaegsete rakendustega saab teie rahakotti kasutada lihtsa sisselogimisviisina, ilma et peaksite meeles pidama parooli.",aboutScreen_c_h1:"Uurige Web3 maailma",aboutScreen_c_p:"Teie rahakott on oluline tööriist, mis võimaldab teil uurida ja osaleda kiiresti arenevas Web3 maailmas.",aboutScreen_ctaText:"Lisateavet saamiseks",aboutScreen_ctaUrl:"https://ethereum.org/en/wallets/",connectorsScreen_heading:"Ühendage rahakott",connectorsScreen_newcomer:"Mul pole rahakotti",connectorsScreen_h1:"Mis on rahakott?",connectorsScreen_p:"Rahakotte kasutatakse digitaalsete varade saatmiseks, vastuvõtmiseks ja salvestamiseks. Rahakoti ühendamine võimaldab teil rakendustega suhelda.",mobileConnectorsScreen_heading:"Valige rahakott",scanScreen_heading:"Skaneerige telefoni abil",scanScreen_heading_withConnector:"Skaneerige koos {{ CONNECTORNAME }}-ga",scanScreen_tooltip_walletConnect:`Ava [WALLETCONNECTLOGO] WalletConnect 
toetatud rahakott skaneerimiseks`,scanScreen_tooltip_default:`Ava {{ CONNECTORNAME }} oma 
mobiiltelefonil skaneerimiseks`,downloadAppScreen_heading:"Hankige {{ CONNECTORNAME }}",downloadAppScreen_iosAndroid:"Skaneerige oma telefoni kaameraga allalaadimiseks iOS-i või Androidi jaoks.",downloadAppScreen_ios:"Skaneerige oma telefoni kaameraga allalaadimiseks iOS-i jaoks.",downloadAppScreen_android:"Skaneerige oma telefoni kaameraga Androidi allalaadimiseks.",injectionScreen_unavailable_h1:"Toetuseta brauser",injectionScreen_unavailable_p:`Teie {{ CONNECTORSHORTNAME }} rahakoti ühendamiseks
installige laiendus {{ SUGGESTEDEXTENSIONBROWSER }}-le.`,injectionScreen_install_h1:"Installige {{ CONNECTORNAME }}",injectionScreen_install_p:`Teie {{ CONNECTORSHORTNAME }} rahakoti ühendamiseks
installige brauseri laiendus.`,injectionScreen_connecting_h1:"Ühenduse taotlemine",injectionScreen_connecting_p:`Ava {{ CONNECTORSHORTNAME }} brauseri 
laiendus rahakoti ühendamiseks.`,injectionScreen_connecting_injected_h1:"Ühenduse taotlemine",injectionScreen_connecting_injected_p:"Nõustuge rakendusega ühendamiseks oma rahakotis.",injectionScreen_connected_h1:"Juba ühendatud",injectionScreen_connected_p:"Selle popup-i saab nüüd sulgeda",injectionScreen_rejected_h1:"Taotlus tühistatud",injectionScreen_rejected_p:`Tühistasite taotluse.
Klõpsake ülal, et uuesti proovida.`,injectionScreen_failed_h1:"Ühenduse loomine ebaõnnestus",injectionScreen_failed_p:`Vabandame, midagi läks valesti.
Proovige ühendust uuesti luua.`,injectionScreen_notconnected_h1:"Logige sisse {{ CONNECTORNAME }}-ga",injectionScreen_notconnected_p:"Jätkamiseks logige sisse oma {{ CONNECTORNAME }} laiendisse.",profileScreen_heading:"Ühendatud",switchNetworkScreen_heading:"Võrkude vahetamine",signInWithEthereumScreen_tooltip:`Te pole selle rakendusse sisse logitud.
**Logi sisse Ethereumiga** jätkamiseks.`,signInWithEthereumScreen_signedOut_heading:"Logi sisse Ethereumiga",signInWithEthereumScreen_signedOut_h1:`See rakendus soovib teid autentida 
 selle rahakoti omanikuna.`,signInWithEthereumScreen_signedOut_p:`Jätkamiseks allkirjastage sõnumipäring 
 oma rahakotis.`,signInWithEthereumScreen_signedOut_button:"Logi sisse",signInWithEthereumScreen_signedIn_heading:"Logi välja",signInWithEthereumScreen_signedIn_h1:`Olete edukalt autentinud end 
 selle rahakoti omanikuna.`,signInWithEthereumScreen_signedIn_p:`Välja logimine nõuab tulevikus 
 uuesti autentimist.`,signInWithEthereumScreen_signedIn_button:"Logi välja"},B8={...et,connectWallet:"Conecta una cartera",disconnect:"Desconectar",connected:"Conectado",wrongNetwork:"Red incorrecta",switchNetworks:"Cambio de red",chainNetwork:"Red {{ CHAIN }}",copyToClipboard:"Copiar al portapapeles",copyCode:"Copiar código",moreInformation:"Más información",back:"Atrás",close:"Cerrar",or:"o",more:"Más",tryAgain:"Intentar de nuevo",tryAgainQuestion:"¿Intentar de nuevo?",dontHaveTheApp:"¿No tienes la aplicación?",scanTheQRCode:"Escanea el código QR",useWalletConnectModal:"Utilizar WalletConnect Modal",useModal:"Utilizar Modal",installTheExtension:"Instalar la extensión",getWalletName:"Obtén {{ CONNECTORNAME }}",otherWallets:"Otras carteras",learnMore:"Más información",getWallet:"Obtén una cartera",approveInWallet:"Aprobar en la cartera",confirmInWallet:"Confirmar en la cartera",awaitingConfirmation:"A la espera de confirmación",signIn:"Iniciar sesión",signOut:"Cerrar sesión",signedIn:"Sesión iniciada",signedOut:"Sesión cerrada",walletNotConnected:"Cartera no conectada",warnings_walletSwitchingUnsupported:"Tu cartera no permite cambiar de red desde esta aplicación.",warnings_walletSwitchingUnsupportedResolve:"Prueba a cambiar de red desde tu cartera.",warnings_chainUnsupported:"Esta aplicación no es compatible con la red conectada actualmente.",warnings_chainUnsupportedResolve:"Cambia o desconecta para continuar.",onboardingScreen_heading:"Obtén una cartera",onboardingScreen_h1:"Comienza a explorar la Web3",onboardingScreen_p:"Tu cartera es el portal de acceso a todo lo relacionado con Ethereum, la tecnología mágica que permite explorar la Web3.",onboardingScreen_ctaText:"Elige tu primera cartera",onboardingScreen_ctaUrl:"https://ethereum.org/es/wallets/find-wallet/",aboutScreen_heading:"Acerca de las carteras",aboutScreen_a_h1:"Para tus activos digitales",aboutScreen_a_p:"Las carteras te permiten enviar, recibir, almacenar e interactuar con activos digitales como los NFT y otros tokens de Ethereum.",aboutScreen_b_h1:"Una manera mejor de iniciar sesión",aboutScreen_b_p:"Con las aplicaciones modernas, puedes utilizar tu cartera para iniciar sesión fácilmente, en vez de tener que recordar una contraseña.",aboutScreen_c_h1:"Explora el mundo de la Web3",aboutScreen_c_p:"Tu cartera es una herramienta esencial que te permite explorar y participar en el mundo en rápida evolución de la Web3.",aboutScreen_ctaText:"Más información",aboutScreen_ctaUrl:"https://ethereum.org/es/wallets/",connectorsScreen_heading:"Conecta una cartera",connectorsScreen_newcomer:"No tengo una cartera",connectorsScreen_h1:"¿Qué es una cartera?",connectorsScreen_p:"Las carteras se utilizan para enviar, recibir y almacenar activos digitales. Si conectas una cartera, podrás interactuar con las aplicaciones.",mobileConnectorsScreen_heading:"Elige una cartera",scanScreen_heading:"Escanea con el teléfono",scanScreen_heading_withConnector:"Escanea con {{ CONNECTORNAME }}",scanScreen_tooltip_walletConnect:"Abre una cartera compatible con WalletConnect [WALLETCONNECTLOGO] para escanear",scanScreen_tooltip_default:"Abre {{ CONNECTORNAME }} en tu teléfono móvil para escanear",downloadAppScreen_heading:"Obtén {{ CONNECTORNAME }}",downloadAppScreen_iosAndroid:"Escanea con la cámara de tu teléfono para descargarla en iOS o Android.",downloadAppScreen_ios:"Escanea con la cámara de tu teléfono para descargarla en iOS.",downloadAppScreen_android:"Escanea con la cámara de tu teléfono para descargarla en Android.",injectionScreen_unavailable_h1:"Navegador no compatible",injectionScreen_unavailable_p:"Para conectar tu cartera de {{ CONNECTORSHORTNAME }}, instala la extensión en {{ SUGGESTEDEXTENSIONBROWSER }}.",injectionScreen_install_h1:"Instala {{ CONNECTORNAME }}",injectionScreen_install_p:"Para conectar tu cartera de {{ CONNECTORSHORTNAME }}, instala la extensión del navegador.",injectionScreen_connecting_h1:"Solicitud de conexión",injectionScreen_connecting_p:"Abre la extensión del navegador de {{ CONNECTORSHORTNAME }}  para conectar tu cartera.",injectionScreen_connecting_injected_h1:"Solicitud de conexión",injectionScreen_connecting_injected_p:"Acepta la solicitud a través de tu cartera para conectarte a esta aplicación.",injectionScreen_connected_h1:"Ya conectada",injectionScreen_connected_p:"Ya puedes cerrar esta ventana emergente",injectionScreen_rejected_h1:"Solicitud cancelada",injectionScreen_rejected_p:"Has cancelado la solicitud. Haz clic arriba para intentarlo de nuevo.",injectionScreen_failed_h1:"Error de conexión",injectionScreen_failed_p:"Lo sentimos, ha habido un problema. Intenta conectarte de nuevo.",injectionScreen_notconnected_h1:"Inicia sesión en {{ CONNECTORNAME }}",injectionScreen_notconnected_p:"Para continuar, inicia sesión en tu extensión de {{ CONNECTORNAME }}.",profileScreen_heading:"Conectado",switchNetworkScreen_heading:"Cambio de red",signInWithEthereumScreen_tooltip:`No has iniciado sesión en esta aplicación.
**Inicia sesión con Ethereum** para continuar.`,signInWithEthereumScreen_signedOut_heading:"Inicia sesión con Ethereum",signInWithEthereumScreen_signedOut_h1:"Esta aplicación desea verificar que eres el propietario de esta cartera.",signInWithEthereumScreen_signedOut_p:"Firma la solicitud de mensaje en tu cartera para continuar.",signInWithEthereumScreen_signedOut_button:"Iniciar sesión",signInWithEthereumScreen_signedIn_heading:"Sesión iniciada con Ethereum",signInWithEthereumScreen_signedIn_h1:"Te has verificado correctamente como propietario de esta cartera.",signInWithEthereumScreen_signedIn_p:"Si cierras la sesión, tendrás que volver a autenticarte más adelante.",signInWithEthereumScreen_signedIn_button:"Cerrar sesión"},P8={...et,connectWallet:"اتصال به کیف پول",disconnect:"قطع ارتباط",connected:"متصل شد",wrongNetwork:"شبکه نادرست",switchNetworks:"تغییر شبکه‌ها",chainNetwork:"{{ CHAIN }} شبکه",copyToClipboard:"کپی به کلیپ‌بورد",copyCode:"کپی کد",moreInformation:"اطلاعات بیشتر",back:"بازگشت",close:"بستن",or:"یا",more:"بیشتر",tryAgain:"تلاش دوباره",tryAgainQuestion:"آیا دوباره تلاش کنیم؟",dontHaveTheApp:"اپلیکیشن را ندارید؟",scanTheQRCode:"اسکن کیو‌آر کد",useWalletConnectModal:"استفاده از مودال والت‌‌کانکت",useModal:"استفاده از مودال",installTheExtension:"نصب افزونه",getWalletName:"دریافت {{ CONNECTORNAME }}",otherWallets:"کیف پول‌های دیگر",learnMore:"بیشتر بدانید",getWallet:"یک کیف پول دریافت کنید",approveInWallet:"در کیف پول تأیید کنید",confirmInWallet:"در کیف پول تأیید کنید",awaitingConfirmation:"در انتظار تأیید",signIn:"ورود",signOut:"خروج",signedIn:"وارد شده",signedOut:"خارج شده",walletNotConnected:"کیف پول متصل نیست",warnings_walletSwitchingUnsupported:"متاسفانه، کیف پول شما از تغییر شبکه در این برنامه پشتیبانی نمی‌کند.",warnings_walletSwitchingUnsupportedResolve:"بهتر است از داخل کیف پول خود تغییر شبکه دهید.",warnings_chainUnsupported:"این برنامه با شبکه‌ای که در حال حاضر متصل است، سازگاری ندارد.",warnings_chainUnsupportedResolve:"برای ادامه، شبکه را تغییر دهید یا اتصال را قطع کنید.",onboardingScreen_heading:"دریافت کیف پول",onboardingScreen_h1:"آغاز کاوش در وب3",onboardingScreen_p:"کیف پول شما دروازه‌ای است به دنیای اتریوم، فناوری جادویی که ممکن می‌سازد تا وب3 را کاوش کنید.",onboardingScreen_ctaText:"کیف پول نخست خود را انتخاب کنید",onboardingScreen_ctaUrl:"https://ethereum.org/fa/wallets/find-wallet/",aboutScreen_heading:"درباره کیف پول‌ها",aboutScreen_a_h1:"نگهبان دارایی‌های دیجیتالی شما",aboutScreen_a_p:"کیف پول‌ها به شما اجازه می‌دهند دارایی‌های دیجیتالی مانند ان‌اف‌تی و توکن‌های اتریومی دیگر را ارسال، دریافت، ذخیره و تعامل دهید.",aboutScreen_b_h1:"یک روش بهتر برای ورود",aboutScreen_b_p:"در برنامه‌های مدرن، کیف پول شما می‌تواند به عنوان یک راه ورود آسان به جای به یادآوری یک رمز عبور مورد استفاده قرار گیرد.",aboutScreen_c_h1:"جهان وب3 را کاوش کنید",aboutScreen_c_p:"کیف پول شما یک ابزار ضروری است که به شما اجازه می‌دهد جهان در حال تغییر سریع وب3 را کاوش و در آن شرکت کنید.",aboutScreen_ctaText:"دانش بیشتری بیافزایید",aboutScreen_ctaUrl:"https://ethereum.org/fa/wallets/",connectorsScreen_heading:"برقراری ارتباط با کیف پول",connectorsScreen_newcomer:"کیف پول ندارم",connectorsScreen_h1:"چیستی رمزگذاری کیف پول؟",connectorsScreen_p:"کیف پول‌ها برای ارسال، دریافت و نگهداری دارایی‌های دیجیتال استفاده می‌شوند. برقراری ارتباط با یک کیف پول به شما امکان تعامل با برنامه‌ها را می‌دهد.",mobileConnectorsScreen_heading:"انتخاب کیف پول",scanScreen_heading:"اسکن با گوشی",scanScreen_heading_withConnector:"اسکن با {{ CONNECTORNAME }}",scanScreen_tooltip_walletConnect:"یک کیف پول با پشتیبانی از والت‌‌کانکت را باز کنید تا اسکن را آغاز کنید",scanScreen_tooltip_default:"{{ CONNECTORNAME }} را روی گوشی خود باز کنید تا اسکن شود",downloadAppScreen_heading:"دریافت {{ CONNECTORNAME }}",downloadAppScreen_iosAndroid:"از دوربین گوشی خود برای اسکن و دریافت نسخه iOS یا Android استفاده کنید.",downloadAppScreen_ios:"از دوربین گوشی خود برای دریافت نسخه iOS استفاده کنید.",downloadAppScreen_android:"از دوربین گوشی خود برای دریافت نسخه Android استفاده کنید.",injectionScreen_unavailable_h1:"مرورگر پشتیبانی نمی‌شود",injectionScreen_unavailable_p:"برای برقراری ارتباط با کیف پول {{ CONNECTORSHORTNAME }}، افزونه مرورگر را در {{ SUGGESTEDEXTENSIONBROWSER }} نصب کنید.",injectionScreen_install_h1:"نصب {{ CONNECTORNAME }}",injectionScreen_install_p:"برای برقراری ارتباط با کیف پول {{ CONNECTORSHORTNAME }}، افزونه مرورگر را نصب کنید.",injectionScreen_connecting_h1:"درخواست اتصال",injectionScreen_connecting_p:"افزونه مرورگر {{ CONNECTORSHORTNAME }} را باز کنید تا ارتباط با کیف پول ایجاد شود.",injectionScreen_connecting_injected_h1:"درخواست اتصال",injectionScreen_connecting_injected_p:"درخواست را از طریق کیف پول خود بپذیرید تا به این برنامه متصل شوید.",injectionScreen_connected_h1:"اتصال از قبل برقرار است",injectionScreen_connected_p:"اکنون می‌توانید این پنجره‌ی بازشو را ببندید.",injectionScreen_rejected_h1:"درخواست لغو شد",injectionScreen_rejected_p:"شما درخواست را لغو کرده‌اید. برای تلاش مجدد، بالا کلیک کنید.",injectionScreen_failed_h1:"ارتباط ناموفق",injectionScreen_failed_p:"متاسفانه، مشکلی بوجود آمد. لطفاً مجدداً اتصال برقرار کنید.",injectionScreen_notconnected_h1:"با ورود به {{ CONNECTORNAME }} وارد شوید",injectionScreen_notconnected_p:"برای ادامه، لطفاً وارد افزونه {{ CONNECTORNAME }} خود شوید.",profileScreen_heading:"اتصال‌ها",switchNetworkScreen_heading:"تغییر شبکه‌ها",signInWithEthereumScreen_tooltip:`شما در حال حاضر به این برنامه وارد نشده‌اید.
**با اتریوم وارد شوید** تا ادامه دهید.`,signInWithEthereumScreen_signedOut_heading:"با اتریوم وارد شوید",signInWithEthereumScreen_signedOut_h1:`این برنامه می‌خواهد هویت شما 
 به عنوان صاحب این کیف پول را تأیید کند.`,signInWithEthereumScreen_signedOut_p:"لطفاً درخواست پیام را در کیف پول خود تأیید کنید تا ادامه دهید.",signInWithEthereumScreen_signedOut_button:"با اتریوم وارد شوید",signInWithEthereumScreen_signedIn_heading:"با اتریوم وارد شده‌اید",signInWithEthereumScreen_signedIn_h1:"شما به عنوان صاحب این کیف پول هویت خود را با موفقیت تأیید کرده‌اید.",signInWithEthereumScreen_signedIn_p:"خروج از حساب کاربری شما در آینده نیاز به تأیید دوباره دارد.",signInWithEthereumScreen_signedIn_button:"خروج"},W8={...et,connectWallet:"Connecter le portefeuille",disconnect:"Déconnecter",connected:"Connecté",wrongNetwork:"Réseau incorrect",switchNetworks:"Changer de réseau",chainNetwork:"Réseau {{ CHAIN }}",copyToClipboard:"Copier dans le presse-papiers",copyCode:"Copier le code",moreInformation:"Plus d’informations",back:"Retour",close:"Fermer",or:"ou",more:"Plus",tryAgain:"Réessayer",tryAgainQuestion:"Réessayer ?",dontHaveTheApp:"Vous n’avez pas l’application ?",scanTheQRCode:"Scannez le code QR",useWalletConnectModal:"Utiliser la modale WalletConnect",useModal:"Utiliser la modale",installTheExtension:"Installer l’extension",getWalletName:"Obtenez {{ CONNECTORNAME }}",otherWallets:"Autres portefeuilles",learnMore:"En savoir plus",getWallet:"Obtenir un portefeuille",approveInWallet:"Approuver dans le portefeuille",confirmInWallet:"Confirmer dans le portefeuille",awaitingConfirmation:"En attente de confirmation",signIn:"Se connecter",signOut:"Se déconnecter",signedIn:"Connecté",signedOut:"Déconnecté",walletNotConnected:"Portefeuille non connecté",warnings_walletSwitchingUnsupported:"Votre portefeuille ne prend pas en charge le changement de réseau à partir de cette application.",warnings_walletSwitchingUnsupportedResolve:"Essayez plutôt de changer de réseau à partir de votre portefeuille.",warnings_chainUnsupported:"Cette application ne prend pas en charge le réseau connecté actuel.",warnings_chainUnsupportedResolve:"Changez ou déconnectez-vous pour continuer.",onboardingScreen_heading:"Obtenez un portefeuille",onboardingScreen_h1:"Commencez à explorer le Web3",onboardingScreen_p:"Votre portefeuille est la porte d'entrée vers tout ce qui concerne l'Ethereum, la technologie magique qui permet d'explorer le Web3.",onboardingScreen_ctaText:"Choisissez votre premier portefeuille",onboardingScreen_ctaUrl:"https://ethereum.org/fr/wallets/find-wallet/",aboutScreen_heading:"À propos des portefeuilles",aboutScreen_a_h1:"Pour vos actifs numériques",aboutScreen_a_p:"Les portefeuilles vous permettent d'envoyer, de recevoir, de stocker et d'interagir avec des actifs numériques tels que des NFT et d'autres jetons Ethereum.",aboutScreen_b_h1:"Une meilleure façon de se connecter",aboutScreen_b_p:"Avec les applications modernes, votre portefeuille peut s'utiliser pour vous connecter facilement, au lieu d'avoir à mémoriser un mot de passe.",aboutScreen_c_h1:"Explorez le monde du Web3",aboutScreen_c_p:"Votre portefeuille est un utilitaire essentiel qui vous permet d'explorer et de participer au monde en évolution rapide du Web3.",aboutScreen_ctaText:"En savoir plus",aboutScreen_ctaUrl:"https://ethereum.org/fr/wallets/",connectorsScreen_heading:"Connectez le portefeuille",connectorsScreen_newcomer:"Je n’ai pas de portefeuille",connectorsScreen_h1:"Qu’est-ce qu’un portefeuille ?",connectorsScreen_p:"Les portefeuilles s'utilisent pour envoyer, recevoir et stocker des actifs numériques. La connexion d'un portefeuille vous permet d'interagir avec les applications.",mobileConnectorsScreen_heading:"Choisissez le portefeuille",scanScreen_heading:"Scannez avec le téléphone",scanScreen_heading_withConnector:"Scannez avec {{ CONNECTORNAME }}",scanScreen_tooltip_walletConnect:"Ouvrez un portefeuille pris en charge par WalletConnect [WALLETCONNECTLOGO] pour scanner",scanScreen_tooltip_default:"Ouvrez {{ CONNECTORNAME }} sur votre téléphone mobile pour scanner",downloadAppScreen_heading:"Obtenez {{ CONNECTORNAME }}",downloadAppScreen_iosAndroid:"Scannez avec l'appareil photo de votre téléphone pour le télécharger sur iOS ou Android.",downloadAppScreen_ios:"Scannez avec l'appareil photo de votre téléphone pour le télécharger sur iOS.",downloadAppScreen_android:"Scannez avec l'appareil photo de votre téléphone pour le télécharger sur Android.",injectionScreen_unavailable_h1:"Navigateur non pris en charge",injectionScreen_unavailable_p:"Pour connecter votre portefeuille {{ CONNECTORSHORTNAME }}, installez l’extension sur {{ SUGGESTEDEXTENSIONBROWSER }}.",injectionScreen_install_h1:"Installez {{ CONNECTORNAME }}",injectionScreen_install_p:"Pour connecter votre portefeuille {{ CONNECTORSHORTNAME }}, installez l’extension de navigateur.",injectionScreen_connecting_h1:"Demande de connexion",injectionScreen_connecting_p:"Ouvrez l’extension de navigateur {{ CONNECTORSHORTNAME }} pour connecter votre portefeuille.",injectionScreen_connecting_injected_h1:"Demande de connexion",injectionScreen_connecting_injected_p:"Acceptez la demande via votre portefeuille pour vous connecter à cette application.",injectionScreen_connected_h1:"Déjà connecté",injectionScreen_connected_p:"Vous pouvez maintenant fermer ce pop-up",injectionScreen_rejected_h1:"Demande annulée",injectionScreen_rejected_p:"Vous avez annulé la demande. Cliquez ci-dessus pour réessayer.",injectionScreen_failed_h1:"Échec de la connexion",injectionScreen_failed_p:"Malheureusement, un problème est survenu. Veuillez réessayer de vous connecter.",injectionScreen_notconnected_h1:"Connectez-vous à {{ CONNECTORNAME }}",injectionScreen_notconnected_p:"Pour continuer, veuillez vous connecter à votre extension {{ CONNECTORNAME }} .",profileScreen_heading:"Connecté",switchNetworkScreen_heading:"Changer de réseau",signInWithEthereumScreen_tooltip:`Vous n’êtes pas connecté à cette application.
**Connectez-vous avec Ethereum** pour continuer.`,signInWithEthereumScreen_signedOut_heading:"Connectez-vous avec Ethereum",signInWithEthereumScreen_signedOut_h1:"Cette application souhaite vérifier que vous êtes bien le propriétaire de ce portefeuille.",signInWithEthereumScreen_signedOut_p:"Veuillez signer la demande de message dans votre portefeuille pour continuer.",signInWithEthereumScreen_signedOut_button:"Se connecter",signInWithEthereumScreen_signedIn_heading:"Connecté avec Ethereum",signInWithEthereumScreen_signedIn_h1:"Vous avez réussi à vous identifier en tant que propriétaire de ce portefeuille.",signInWithEthereumScreen_signedIn_p:"La déconnexion vous obligera à vous authentifier à nouveau à l'avenir.",signInWithEthereumScreen_signedIn_button:"Se déconnecter"},V8={...et,connectWallet:"ウォレットの接続",disconnect:"切断",connected:"接続されました",wrongNetwork:"間違ったネットワーク",switchNetworks:"ネットワークの切り替え",chainNetwork:"{{ CHAIN }} ネットワーク",copyToClipboard:"クリップボードにコピー",copyCode:"コードをコピー",moreInformation:"詳細情報",back:"戻る",close:"閉じる",or:"または",more:"その他",tryAgain:"再試行",tryAgainQuestion:"もう一度試しますか？",dontHaveTheApp:"アプリをお持ちではありませんか？",scanTheQRCode:"QR コードをスキャン",useWalletConnectModal:"WalletConnect モーダルを使用",useModal:"モーダルを使用",installTheExtension:"拡張機能をインストール",getWalletName:"{{ CONNECTORNAME }} を取得",otherWallets:"その他のウォレット",learnMore:"詳細情報",getWallet:"ウォレットを入手",approveInWallet:"ウォレットで承認",confirmInWallet:"ウォレットで確認",awaitingConfirmation:"確認を待っています",signIn:"サインイン",signOut:"サインアウト",signedIn:"サインインしました",signedOut:"サインアウトしました",walletNotConnected:"ウォレットが接続されていません",warnings_walletSwitchingUnsupported:"お使いのウォレットは、このアプリからのネットワークの切り替えをサポートしていません。",warnings_walletSwitchingUnsupportedResolve:"代わりにウォレット内からネットワークを切り替えてみてください。",warnings_chainUnsupported:"このアプリは、現在接続されているネットワークをサポートしていません。",warnings_chainUnsupportedResolve:"切り替えるか切断して続行します。",onboardingScreen_heading:"ウォレットを入手",onboardingScreen_h1:"Web3 の探索を開始",onboardingScreen_p:"ウォレットは、web3 の探索を可能にする魔法のテクノロジーであるイーサリアムのすべてへのゲートウェイです。",onboardingScreen_ctaText:"最初のウォレットを選択してください",onboardingScreen_ctaUrl:"https://ethereum.org/ja/wallets/find-wallet/",aboutScreen_heading:"ウォレットについて",aboutScreen_a_h1:"デジタル資産用",aboutScreen_a_p:"ウォレットを使用すると、NFT やその他のイーサリアム トークンなどのデジタル資産を送信、受信、保存、および操作できます。",aboutScreen_b_h1:"より良いログイン方法",aboutScreen_b_p:"最新のアプリでは、パスワードを覚える必要がなく、ウォレットを簡単なログイン方法として使用できます。",aboutScreen_c_h1:"web3 の世界を探索",aboutScreen_c_p:"ウォレットは、急速に進化する web3 の世界を探索し、参加するために不可欠なユーティリティです。",aboutScreen_ctaText:"詳細情報",aboutScreen_ctaUrl:"https://ethereum.org/ja/wallets/",connectorsScreen_heading:"ウォレットの接続",connectorsScreen_newcomer:"ウォレットを持っていません",connectorsScreen_h1:"ウォレットとは何ですか？",connectorsScreen_p:"ウォレットは、デジタル資産の送信、受信、および保存に使用されます。 ウォレットを接続すると、アプリとやり取りできます。",mobileConnectorsScreen_heading:"ウォレットを選択",scanScreen_heading:"電話でスキャンする",scanScreen_heading_withConnector:"{{ CONNECTORNAME }}でスキャンする",scanScreen_tooltip_walletConnect:"[WALLETCONNECTLOGO] WalletConnect 対応の ウォレットを開いてスキャンします",scanScreen_tooltip_default:"携帯電話で {{ CONNECTORNAME }} を 開いてスキャンします",downloadAppScreen_heading:"{{ CONNECTORNAME }} を取得",downloadAppScreen_iosAndroid:"携帯電話のカメラでスキャンして、iOS または Android にダウンロードします。",downloadAppScreen_ios:"携帯電話のカメラでスキャンして、iOS にダウンロードします。",downloadAppScreen_android:"携帯電話のカメラでスキャンして、Android にダウンロードします。",injectionScreen_unavailable_h1:"サポートされていないブラウザ",injectionScreen_unavailable_p:"{{ CONNECTORSHORTNAME }} ウォレットを接続するには、{{ SUGGESTEDEXTENSIONBROWSER }} に拡張機能をインストールします。",injectionScreen_install_h1:"{{ CONNECTORNAME }} をインストール",injectionScreen_install_p:"{{ CONNECTORSHORTNAME }} ウォレットを接続するには、ブラウザ拡張機能をインストールします。",injectionScreen_connecting_h1:"接続を要求",injectionScreen_connecting_p:"{{ CONNECTORSHORTNAME }} ブラウザ拡張機能を 開いて、ウォレットを接続します。",injectionScreen_connecting_injected_h1:"接続を要求",injectionScreen_connecting_injected_p:"このアプリに接続するには、ウォレットを介して要求を受け入れます。",injectionScreen_connected_h1:"すでに接続済み",injectionScreen_connected_p:"このポップアップを閉じてもかまいません",injectionScreen_rejected_h1:"要求がキャンセルされました",injectionScreen_rejected_p:"要求をキャンセルしました。上をクリックしてもう一度お試しください。",injectionScreen_failed_h1:"接続に失敗しました",injectionScreen_failed_p:"申し訳ありませんが、問題が発生しました。もう一度接続してみてください。",injectionScreen_notconnected_h1:"{{ CONNECTORNAME }} にログイン",injectionScreen_notconnected_p:"続行するには、 {{ CONNECTORNAME }} 拡張機能にログインしてください。",profileScreen_heading:"接続されました",switchNetworkScreen_heading:"ネットワークの切り替え",signInWithEthereumScreen_tooltip:`このアプリにサインインしていません。
続行するには、**イーサリアムでサインイン**してください。`,signInWithEthereumScreen_signedOut_heading:"イーサリアムでサインイン",signInWithEthereumScreen_signedOut_h1:"このアプリは、あなたがこのウォレットの 所有者であることを確認しようとしています。",signInWithEthereumScreen_signedOut_p:"続行するには、ウォレットで メッセージ リクエストに署名してください。",signInWithEthereumScreen_signedOut_button:"サインイン",signInWithEthereumScreen_signedIn_heading:"イーサリアムでサインインしました",signInWithEthereumScreen_signedIn_h1:"このウォレットの所有者であることが 正常に確認されました。",signInWithEthereumScreen_signedIn_p:"サインアウトすると、今後 再度認証する必要があります。",signInWithEthereumScreen_signedIn_button:"サインアウト"},U8={...et,connectWallet:"Conectar carteira",disconnect:"Desconectar",connected:"Conectado",wrongNetwork:"Rede incorreta",switchNetworks:"Alternar rede",chainNetwork:"Rede {{ CHAIN }}",copyToClipboard:"Copiar para a área de transferência",copyCode:"Copiar código",moreInformation:"Mais informações",back:"Voltar",close:"Fechar",or:"ou",more:"Mais",tryAgain:"Tentar novamente",tryAgainQuestion:"Tentar novamente?",dontHaveTheApp:"Não tem o aplicativo?",scanTheQRCode:"Escaneie o código QR",useWalletConnectModal:"Use o modal do WalletConnect",useModal:"Usar modal",installTheExtension:"Instale a extensão",getWalletName:"Obter {{ CONNECTORNAME }}",otherWallets:"Outras carteiras",learnMore:"Saiba mais",getWallet:"Obtenha uma carteira",approveInWallet:"Aprovar na carteira",confirmInWallet:"Confirmar na carteira",awaitingConfirmation:"Aguardando confirmação",signIn:"Entrar",signOut:"Sair",signedIn:"Conectado",signedOut:"Desconectado",walletNotConnected:"Carteira não conectada",warnings_walletSwitchingUnsupported:"A sua carteira não permite a troca de rede a partir deste aplicativo.",warnings_walletSwitchingUnsupportedResolve:"Tente trocar de rede de dentro da sua carteira.",warnings_chainUnsupported:"Este aplicativo não é compatível com a rede conectada.",warnings_chainUnsupportedResolve:"Altere a rede ou desconecte para continuar.",onboardingScreen_heading:"Obtenha uma carteira",onboardingScreen_h1:"Comece a explorar a Web3",onboardingScreen_p:"Sua carteira é a porta de entrada para todas as coisas Ethereum, a tecnologia mágica que torna possível explorar a web3.",onboardingScreen_ctaText:"Escolha sua primeira carteira",onboardingScreen_ctaUrl:"https://ethereum.org/pt-br/wallets/find-wallet/",aboutScreen_heading:"Sobre as carteiras",aboutScreen_a_h1:"Para seus ativos digitais",aboutScreen_a_p:"As carteiras permitem que você envie, receba, armazene e interaja com ativos digitais como NFTs e outros tokens Ethereum.",aboutScreen_b_h1:"Uma maneira melhor de fazer login",aboutScreen_b_p:"Com aplicativos modernos, sua carteira pode ser usada como uma maneira fácil de fazer login, em vez de ter que lembrar uma senha.",aboutScreen_c_h1:"Explore o mundo da Web3",aboutScreen_c_p:"Sua carteira é uma utilidade essencial que permite explorar e participar do mundo em rápida evolução da Web3.",aboutScreen_ctaText:"Saiba mais",aboutScreen_ctaUrl:"https://ethereum.org/pt-br/wallets/",connectorsScreen_heading:"Conectar carteira",connectorsScreen_newcomer:"Eu não tenho uma carteira",connectorsScreen_h1:"O que é uma carteira?",connectorsScreen_p:"As carteiras são usadas para enviar, receber e armazenar ativos digitais. A conexão de uma carteira permite que você interaja com aplicativos.",mobileConnectorsScreen_heading:"Escolha uma carteira",scanScreen_heading:"Escanear com o celular",scanScreen_heading_withConnector:"Escanear com o {{ CONNECTORNAME }}",scanScreen_tooltip_walletConnect:`Abra uma carteira compatível 
com o WalletConnect [WALLETCONNECTLOGO] para escanear`,scanScreen_tooltip_default:`Abra o {{ CONNECTORNAME }} no 
seu celular para escanear`,downloadAppScreen_heading:"Obter {{ CONNECTORNAME }}",downloadAppScreen_iosAndroid:"Escaneie com a câmera do seu celular para baixar no iOS ou Android.",downloadAppScreen_ios:"Escaneie com a câmera do seu celular para baixar no iOS.",downloadAppScreen_android:"Escaneie com a câmera do seu celular para baixar no Android.",injectionScreen_unavailable_h1:"Navegador não compatível",injectionScreen_unavailable_p:`Para conectar sua carteira {{ CONNECTORSHORTNAME }},
instale a extensão no {{ SUGGESTEDEXTENSIONBROWSER }}.`,injectionScreen_install_h1:"Instalar {{ CONNECTORNAME }}",injectionScreen_install_p:`Para conectar sua carteira {{ CONNECTORSHORTNAME }},
instale a extensão do navegador`,injectionScreen_connecting_h1:"Solicitando conexão",injectionScreen_connecting_p:`Abra a extensão do navegador do {{ CONNECTORSHORTNAME }} 
para conectar a sua carteira.`,injectionScreen_connecting_injected_h1:"Solicitando conexão",injectionScreen_connecting_injected_p:"Aceite a solicitação por meio de sua carteira para se conectar a este aplicativo.",injectionScreen_connected_h1:"Já conectado",injectionScreen_connected_p:"Agora você já pode fechar esta janela",injectionScreen_rejected_h1:"Solicitação cancelada",injectionScreen_rejected_p:`Você cancelou a solicitação.
Clique acima para tentar novamente.`,injectionScreen_failed_h1:"A conexão falhou",injectionScreen_failed_p:`Desculpe, ocorreu um erro.
Por favor, tente conectar novamente.`,injectionScreen_notconnected_h1:"Faça login no {{ CONNECTORNAME }}",injectionScreen_notconnected_p:"Para continuar, faça login na sua extensão do {{ CONNECTORNAME }}.",profileScreen_heading:"Conectado",switchNetworkScreen_heading:"Alternar rede",signInWithEthereumScreen_tooltip:`Você não está conectado a este aplicativo.
**Entre com Ethereum** para continuar.`,signInWithEthereumScreen_signedOut_heading:"Entrar com Ethereum",signInWithEthereumScreen_signedOut_h1:`Este aplicativo gostaria de verificar você 
 como o proprietário desta carteira.`,signInWithEthereumScreen_signedOut_p:`Por favor, assine o pedido de mensagem 
 em sua carteira para continuar.`,signInWithEthereumScreen_signedOut_button:"Entrar",signInWithEthereumScreen_signedIn_heading:"Conectado com Ethereum",signInWithEthereumScreen_signedIn_h1:`Você se verificou com sucesso 
 como o proprietário desta carteira`,signInWithEthereumScreen_signedIn_p:`Se sair, será necessário que você 
 autentique novamente no futuro.`,signInWithEthereumScreen_signedIn_button:"Sair"},Z8={...et,connectWallet:"Подключить кошелек",disconnect:"Отключить",connected:"Подключена",wrongNetwork:"Неверная сеть",switchNetworks:"Переключение сети",chainNetwork:"Сеть {{ CHAIN }}",copyToClipboard:"Скопировать в буфер обмена",copyCode:"Скопировать код",moreInformation:"Больше информации",back:"Назад",close:"Закрыть",or:"или",more:"Еще",tryAgain:"Попробовать снова",tryAgainQuestion:"Попробовать снова?",dontHaveTheApp:"У вас нет приложения?",scanTheQRCode:"Отсканируйте QR-код",useWalletConnectModal:"Использовать окно WalletConnect",useModal:"Использовать модальное окно",installTheExtension:"Установить расширение",getWalletName:"Скачать {{ CONNECTORNAME }}",otherWallets:"Другие кошельки",learnMore:"Узнать больше",getWallet:"Завести кошелек",approveInWallet:"Подтвердите",confirmInWallet:"Подтвердите",awaitingConfirmation:"Ожидаем подтверждение",signIn:"Войти",signOut:"Выйти",signedIn:"Вошли",signedOut:"Вышли",walletNotConnected:"Кошелек не подключен",warnings_walletSwitchingUnsupported:"Ваш кошелек не поддерживает переключение сетей из этого приложения.",warnings_walletSwitchingUnsupportedResolve:"Попробуйте переключиться на другую сеть прямо в вашем кошельке.",warnings_chainUnsupported:"Это приложение не поддерживает текущую подключенную сеть.",warnings_chainUnsupportedResolve:"Для продолжения переключите сеть или отключите кошелек.",onboardingScreen_heading:"Завести кошелек",onboardingScreen_h1:"Начните исследовать веб3",onboardingScreen_p:"Ваш кошелек — это врата в мир Ethereum, волшебной технологии, которая позволяет исследовать веб3.",onboardingScreen_ctaText:"Выбрать свой первый кошелек",onboardingScreen_ctaUrl:"https://ethereum.org/en/wallets/find-wallet/",aboutScreen_heading:"О кошельках",aboutScreen_a_h1:"Для ваших цифровых активов",aboutScreen_a_p:"Кошельки позволяют вам отправлять, получать, хранить и взаимодействовать с цифровыми активами, такими как NFT и другие токены Ethereum.",aboutScreen_b_h1:"Лучший способ входа",aboutScreen_b_p:"В современных приложениях ваш кошелек можно использовать как удобный способ входа без необходимости помнить пароль.",aboutScreen_c_h1:"Исследуйте мир веб3",aboutScreen_c_p:"Ваш кошелек - это неотъемлемый инструмент, который позволяет вам исследовать и участвовать в быстро развивающемся мире веб3.",aboutScreen_ctaText:"Узнать больше",aboutScreen_ctaUrl:"https://ethereum.org/en/wallets/",connectorsScreen_heading:"Подключение кошелька",connectorsScreen_newcomer:"У меня нет кошелька",connectorsScreen_h1:"Что такое кошелек?",connectorsScreen_p:"Кошельки используются для отправки, получения и хранения цифровых активов. Подключение кошелька позволяет вам взаимодействовать с приложениями.",mobileConnectorsScreen_heading:"Выберите кошелек",scanScreen_heading:"Сканирование с телефона",scanScreen_heading_withConnector:"Сканирование с помощью {{ CONNECTORNAME }}",scanScreen_tooltip_walletConnect:"Откройте [WALLETCONNECTLOGO] поддерживаемый WalletConnect кошелек для сканирования",scanScreen_tooltip_default:"Откройте {{ CONNECTORNAME }} на вашем мобильном телефоне для сканирования",downloadAppScreen_heading:"Скачивание {{ CONNECTORNAME }}",downloadAppScreen_iosAndroid:"Отсканируйте камерой телефона для загрузки приложения на iOS или Android.",downloadAppScreen_ios:"Отсканируйте камерой телефона для загрузки приложения на iOS.",downloadAppScreen_android:"Сканируйте камерой телефона для загрузки приложения на Android.",injectionScreen_unavailable_h1:"Неподдерживаемый браузер",injectionScreen_unavailable_p:"Для подключения вашего кошелька {{ CONNECTORSHORTNAME }}, установите расширение для браузера {{ SUGGESTEDEXTENSIONBROWSER }}.",injectionScreen_install_h1:"Установите {{ CONNECTORNAME }}",injectionScreen_install_p:"Для подключения вашего кошелька {{ CONNECTORSHORTNAME }}, установите расширение для браузера.",injectionScreen_connecting_h1:"Запрос на подключение",injectionScreen_connecting_p:"Откройте расширение для браузера {{ CONNECTORSHORTNAME }} для подключения вашего кошелька.",injectionScreen_connecting_injected_h1:"Запрос на подключение",injectionScreen_connecting_injected_p:"Примите запрос в вашем кошельке, чтобы подключиться к приложению.",injectionScreen_connected_h1:"Уже подключен",injectionScreen_connected_p:"Можно закрыть это окно",injectionScreen_rejected_h1:"Запрос отменен",injectionScreen_rejected_p:`Вы отменили запрос.
Нажмите выше, чтобы попробовать снова.`,injectionScreen_failed_h1:"Сбой подключения",injectionScreen_failed_p:`Извините, что-то пошло не так.
Пожалуйста, попробуйте подключиться снова.`,injectionScreen_notconnected_h1:"Войдите в {{ CONNECTORNAME }}",injectionScreen_notconnected_p:"Для продолжения войдите в расширение {{ CONNECTORNAME }}.",profileScreen_heading:"Кошелек подключен",switchNetworkScreen_heading:"Переключение сетей",signInWithEthereumScreen_tooltip:`Вы не вошли в это приложение.
**Войдите с помощью Ethereum**, чтобы продолжить.`,signInWithEthereumScreen_signedOut_heading:"Войти с помощью Ethereum",signInWithEthereumScreen_signedOut_h1:`Это приложение хочет подтвердить вас 
 в качестве владельца этого кошелька.`,signInWithEthereumScreen_signedOut_p:`Пожалуйста, подпишите запрос на сообщение 
 в своем кошельке, чтобы продолжить.`,signInWithEthereumScreen_signedOut_button:"Войти",signInWithEthereumScreen_signedIn_heading:"Вошли с помощью Ethereum",signInWithEthereumScreen_signedIn_h1:`Вы успешно подтвердили себя 
 в качестве владельца этого кошелька.`,signInWithEthereumScreen_signedIn_p:`Выйти потребуется 
 повторная аутентификация в будущем.`,signInWithEthereumScreen_signedIn_button:"Выйти"},$8={...et,connectWallet:"绑定钱包",disconnect:"解除绑定",connected:"已绑定",wrongNetwork:"错误网络",switchNetworks:"切换网络",chainNetwork:"{{ CHAIN }}网络",copyToClipboard:"复制到剪贴板",copyCode:"复制代码",moreInformation:"更多信息",back:"返回",close:"关闭",or:"或",more:"更多",tryAgain:"重试",tryAgainQuestion:"重试？",dontHaveTheApp:"没有该应用？",scanTheQRCode:"扫描二维码",useWalletConnectModal:"使用 WalletConnect 模态窗",useModal:"使用模态窗",installTheExtension:"安装扩展程序",getWalletName:"获取{{ CONNECTORNAME }}",otherWallets:"其他钱包",learnMore:"了解更多",getWallet:"获取钱包",approveInWallet:"在钱包中批准",confirmInWallet:"在钱包中确认",awaitingConfirmation:"等待确认",signIn:"登录",signOut:"登出",signedIn:"已登录",signedOut:"已登出",walletNotConnected:"钱包未绑定",warnings_walletSwitchingUnsupported:"您的钱包不支持从此应用切换网络。",warnings_walletSwitchingUnsupportedResolve:"请尝试从钱包中切换网络。",warnings_chainUnsupported:"此应用不支持当前连接的网络。",warnings_chainUnsupportedResolve:"请切换网络或断开连接以继续。",onboardingScreen_heading:"获取钱包",onboardingScreen_h1:"开始探索 Web3",onboardingScreen_p:"您的钱包是通往以太坊的一扇大门，而以太坊是探索 Web3 的一项神奇技术。",onboardingScreen_ctaText:"选择您的第一钱包",onboardingScreen_ctaUrl:"https://ethereum.org/zh/wallets/find-wallet/",aboutScreen_heading:"关于钱包",aboutScreen_a_h1:"对于您的数字资产",aboutScreen_a_p:"有了钱包，您可以发送、接收、存储数字资产及使用数字资产进行交互，例如 NFT 和其他以太坊通证等。",aboutScreen_b_h1:"更好的登录方式",aboutScreen_b_p:"使用现代应用，您的钱包可以用作简便的登录方法，而不必记住密码。",aboutScreen_c_h1:"探索 Web3 世界",aboutScreen_c_p:"您的钱包是一个重要的工具，可以让您探索并参与到快速发展的 Web3 世界。",aboutScreen_ctaText:"了解更多",aboutScreen_ctaUrl:"https://ethereum.org/zh/wallets/",connectorsScreen_heading:"绑定钱包",connectorsScreen_newcomer:"我没有钱包",connectorsScreen_h1:"什么是钱包？",connectorsScreen_p:"钱包可用于发送、接收和存储数字资产。通过绑定钱包，您可以与应用进行交互。",mobileConnectorsScreen_heading:"选择钱包",scanScreen_heading:"手机扫描",scanScreen_heading_withConnector:"手机扫描{{ CONNECTORNAME }}",scanScreen_tooltip_walletConnect:"打开 [WALLETCONNECTLOGO] WalletConnect 支持的钱包进行扫描",scanScreen_tooltip_default:"打开您手机上的{{ CONNECTORNAME }} 进行扫描",downloadAppScreen_heading:"获取{{ CONNECTORNAME }}",downloadAppScreen_iosAndroid:"使用手机相机扫描以下载 iOS 或 Android 应用。",downloadAppScreen_ios:"使用手机相机扫描以下载 iOS 应用。",downloadAppScreen_android:"使用手机相机扫描以下载 Android 应用。",injectionScreen_unavailable_h1:"不支持的浏览器",injectionScreen_unavailable_p:"要绑定您的{{ CONNECTORSHORTNAME }}钱包，请在{{ SUGGESTEDEXTENSIONBROWSER }}上安装此扩展程序。",injectionScreen_install_h1:"安装{{ CONNECTORNAME }}",injectionScreen_install_p:"要绑定您的{{ CONNECTORSHORTNAME }}钱包，请安装此浏览器扩展程序。",injectionScreen_connecting_h1:"请求绑定",injectionScreen_connecting_p:"打开{{ CONNECTORSHORTNAME }}浏览器 扩展程序以绑定您的钱包。",injectionScreen_connecting_injected_h1:"请求绑定",injectionScreen_connecting_injected_p:"通过您的钱包接受请求，以绑定到此应用。",injectionScreen_connected_h1:"已绑定",injectionScreen_connected_p:"现在可以关闭此弹窗",injectionScreen_rejected_h1:"请求已取消",injectionScreen_rejected_p:"您已取消请求。点击上面可重试。",injectionScreen_failed_h1:"绑定失败",injectionScreen_failed_p:"抱歉，发生错误。请尝试重新绑定。",injectionScreen_notconnected_h1:"登录{{ CONNECTORNAME }}",injectionScreen_notconnected_p:"要继续，请登录到您的{{ CONNECTORNAME }}扩展程序。",profileScreen_heading:"已绑定",switchNetworkScreen_heading:"切换网络",signInWithEthereumScreen_tooltip:`您尚未登录到此应用。
请选择**使用以太坊登录**以继续。`,signInWithEthereumScreen_signedOut_heading:"使用以太坊登录",signInWithEthereumScreen_signedOut_h1:"此应用希望验证您是 此钱包的所有者。",signInWithEthereumScreen_signedOut_p:"请签署钱包中的消息请求 以继续。",signInWithEthereumScreen_signedOut_button:"登录",signInWithEthereumScreen_signedIn_heading:"已使用以太坊登录",signInWithEthereumScreen_signedIn_h1:"您已成功验证自己 是此钱包的所有者。",signInWithEthereumScreen_signedIn_p:"登出后，将来您还需要 再次进行身份验证。",signInWithEthereumScreen_signedIn_button:"登出"},H8={...et,connectWallet:"Connecta la cartera",disconnect:"Desconnectar",connected:"Connectat",wrongNetwork:"Xarxa incorrecta",switchNetworks:"Canvi de xarxa",chainNetwork:"Xarxa {{ CHAIN }}",copyToClipboard:"Copia al portapapers",copyCode:"Copia codi",moreInformation:"Més informació",back:"Enrere",close:"Tanca",or:"o",more:"Més",tryAgain:"Torna-ho a intentar",tryAgainQuestion:"Tornar a intentar-ho?",dontHaveTheApp:"No tens l'aplicació?",scanTheQRCode:"Escaneja el codi QR",useWalletConnectModal:"Utilitza WalletConnect Modal",useModal:"Utilitza Modal",installTheExtension:"Instal·la l'extensió",getWalletName:"Obté {{ CONNECTORNAME }}",otherWallets:"Altres carteres",learnMore:"Més informació",getWallet:"Obté una cartera",approveInWallet:"Aprova a la cartera",confirmInWallet:"Confirma a la cartera",awaitingConfirmation:"Esperant confirmació",signIn:"Inicia sessió",signOut:"Tanca sessió",signedIn:"Sessió iniciada",signedOut:"Sessió tancada",walletNotConnected:"Cartera no connectada",warnings_walletSwitchingUnsupported:"La teva cartera no permet canviar de xarxa des d'aquesta aplicació.",warnings_walletSwitchingUnsupportedResolve:"Prova a canviar de xarxa des de la teva cartera.",warnings_chainUnsupported:"Aquesta aplicació no és compatible amb la xarxa connectada actualment.",warnings_chainUnsupportedResolve:"Canvia o desconnecta per continuar.",onboardingScreen_heading:"Obté una cartera",onboardingScreen_h1:"Comença a explorar la Web3",onboardingScreen_p:"La teva cartera és el portal d'accés a tot el relacionat amb Ethereum, la tecnologia màgica que permet explorar la Web3.",onboardingScreen_ctaText:"Tria la teva primera cartera",onboardingScreen_ctaUrl:"https://ethereum.org/es/wallets/find-wallet/",aboutScreen_heading:"Sobre les carteres",aboutScreen_a_h1:"Per als teus actius digitals",aboutScreen_a_p:"Les carteres et permeten enviar, rebre, emmagatzemar i interactuar amb actius digitals com els NFT i altres tokens d'Ethereum.",aboutScreen_b_h1:"Una manera millor d'iniciar sessió",aboutScreen_b_p:"Amb les aplicacions modernes, pots utilitzar la teva cartera per iniciar sessió fàcilment, en lloc de haver de recordar una contrasenya.",aboutScreen_c_h1:"Explora el món de la Web3",aboutScreen_c_p:"La teva cartera és una eina essencial que et permet explorar i participar en el món en ràpida evolució de la Web3.",aboutScreen_ctaText:"Més informació",aboutScreen_ctaUrl:"https://ethereum.org/es/wallets/",connectorsScreen_heading:"Connecta una cartera",connectorsScreen_newcomer:"No tinc una cartera",connectorsScreen_h1:"Què és una cartera?",connectorsScreen_p:"Les carteres s'utilitzen per enviar, rebre i emmagatzemar actius digitals. Si connectes una cartera, podràs interactuar amb les aplicacions.",mobileConnectorsScreen_heading:"Tria una cartera",scanScreen_heading:"Escaneja amb el telèfon",scanScreen_heading_withConnector:"Escaneja amb {{ CONNECTORNAME }}",scanScreen_tooltip_walletConnect:"Obre una cartera compatible amb WalletConnect [WALLETCONNECTLOGO] per escanejar",scanScreen_tooltip_default:"Obre {{ CONNECTORNAME }} en el teu telèfon mòbil per escanejar",downloadAppScreen_heading:"Obté {{ CONNECTORNAME }}",downloadAppScreen_iosAndroid:"Escaneja amb la càmera del teu telèfon per descarregar-la en iOS o Android.",downloadAppScreen_ios:"Escaneja amb la càmera del teu telèfon per descarregar-la en iOS.",downloadAppScreen_android:"Escaneja amb la càmera del teu telèfon per descarregar-la en Android.",injectionScreen_unavailable_h1:"Navegador no compatible",injectionScreen_unavailable_p:"Per connectar la teva cartera de {{ CONNECTORSHORTNAME }}, instal·la l'extensió en {{ SUGGESTEDEXTENSIONBROWSER }}.",injectionScreen_install_h1:"Instal·la {{ CONNECTORNAME }}",injectionScreen_install_p:"Per connectar la teva cartera de {{ CONNECTORSHORTNAME }}, instal·la l'extensió del navegador.",injectionScreen_connecting_h1:"Sol·licitud de connexió",injectionScreen_connecting_p:"Obre l'extensió del navegador de {{ CONNECTORSHORTNAME }}  per connectar la teva cartera.",injectionScreen_connecting_injected_h1:"Sol·licitud de connexió",injectionScreen_connecting_injected_p:"Accepta la sol·licitud a través de la teva cartera per connectar-te a aquesta aplicació.",injectionScreen_connected_h1:"Ja connectada",injectionScreen_connected_p:"Ja pots tancar aquesta finestra emergent",injectionScreen_rejected_h1:"Sol·licitud cancel·lada",injectionScreen_rejected_p:"Has cancel·lat la sol·licitud. Fes clic a dalt per tornar-ho a intentar.",injectionScreen_failed_h1:"Error de connexió",injectionScreen_failed_p:"Ho sentim, hi ha hagut un problema. Intenta connectar-te de nou.",injectionScreen_notconnected_h1:"Inicia sessió en {{ CONNECTORNAME }}",injectionScreen_notconnected_p:"Per continuar, inicia sessió en la teva extensió de {{ CONNECTORNAME }}.",profileScreen_heading:"Connectat",switchNetworkScreen_heading:"Canvi de xarxa",signInWithEthereumScreen_tooltip:`No has iniciat sessió en aquesta aplicació.
**Inicia sessió amb Ethereum** per continuar.`,signInWithEthereumScreen_signedOut_heading:"Inicia sessió amb Ethereum",signInWithEthereumScreen_signedOut_h1:"Aquesta aplicació vol verificar que ets el propietari d'aquesta cartera.",signInWithEthereumScreen_signedOut_p:"Signa la sol·licitud de missatge en la teva cartera per continuar.",signInWithEthereumScreen_signedOut_button:"Inicia sessió",signInWithEthereumScreen_signedIn_heading:"Sessió iniciada amb Ethereum",signInWithEthereumScreen_signedIn_h1:"T'has verificat correctament com a propietari d'aquesta cartera.",signInWithEthereumScreen_signedIn_p:"Si tanques la sessió, hauràs de tornar a autenticar-te més endavant.",signInWithEthereumScreen_signedIn_button:"Tanca sessió"},G8={...et,connectWallet:"Cüzdan Bağla",disconnect:"Bağlantıyı Kes",connected:"Bağlandı",wrongNetwork:"Yanlış Ağ",switchNetworks:"Ağ Değiştir",chainNetwork:"{{ CHAIN }} Ağı",copyToClipboard:"Panoya Kopyala",copyCode:"Kodu Kopyala",moreInformation:"Daha Fazla Bilgi",back:"Geri",close:"Kapat",or:"veya",more:"Daha Fazla",tryAgain:"Tekrar Dene",tryAgainQuestion:"Tekrar Dene?",dontHaveTheApp:"Uygulaman yok mu?",scanTheQRCode:"Karekodu tarat",useWalletConnectModal:"WalletConnect Modalini Kullan ",useModal:"Modal Kullan",installTheExtension:"Eklentiyi İndir",getWalletName:"{{ CONNECTORNAME }} Alın",otherWallets:"Diğer Cüzdanlar",learnMore:"Daha Fazlasını Öğren",getWallet:"Cüzdan Al",approveInWallet:"Cüzdanda Yetki Ver",confirmInWallet:"Cüzdanda Onayla",awaitingConfirmation:"Doğrulama Bekleniyor",signIn:"Giriş Yap",signOut:"Çıkış Yap",signedIn:"Giriş Yapıldı",signedOut:"Çıkış Yapıldı",walletNotConnected:"Cüzdan Bağlı Değil",warnings_walletSwitchingUnsupported:"Bu uygulamada ağ değiştirmeyi cüzdanın desteklemiyor.",warnings_walletSwitchingUnsupportedResolve:"Bunun yerine cüzdanınızdan ağları değiştirmeyi deneyin.",warnings_chainUnsupported:"Bu uygulama kullanmış olduğunuz ağı desteklemiyor.",warnings_chainUnsupportedResolve:"Devam etmek için ağ değiştir veya bağlantıyı kes.",onboardingScreen_heading:"Cüzdan Al",onboardingScreen_h1:"Web3'ü keşfetmeye başla",onboardingScreen_p:"Cüzdanınız, Web3'ü keşfetmeyi mümkün kılan sihirli teknoloji olan Ethereum'a açılan kapıdır.",onboardingScreen_ctaText:"İlk Cüzdanını Seç",onboardingScreen_ctaUrl:"https://ethereum.org/tr/wallets/find-wallet/",aboutScreen_heading:"Cüzdanlar Hakkında",aboutScreen_a_h1:"Dijital varlıkların için",aboutScreen_a_p:"Cüzdanlar, NFT'ler ve diğer Ethereum varlıkları gibi dijital varlıklar göndermenize, almanıza, saklamanıza ve bunlarla etkileşim kurmanıza olanak tanır.",aboutScreen_b_h1:"Giriş yapmanın daha iyi bir yolu",aboutScreen_b_p:"Modern uygulamalar ile parola hatırlamak yerine cüzdanınız ile kolayca giriş yapabilirsiniz.",aboutScreen_c_h1:"Web3 dünyasını keşfet",aboutScreen_c_p:"Cüzdanınız, hızla gelişen Web3 dünyasını keşfetmenizi ve bu dünyaya katılmanızı sağlayan temel bir yardımcı programdır.",aboutScreen_ctaText:"Daha Fazlasını Öğren",aboutScreen_ctaUrl:"https://ethereum.org/tr/wallets/",connectorsScreen_heading:"Cüzdan Bağla",connectorsScreen_newcomer:"Cüzdanım Yok",connectorsScreen_h1:"Cüzdan nedir?",connectorsScreen_p:"Cüzdanlar, dijital varlıkları göndermek, almak ve depolamak için kullanılır. Bir cüzdanı bağlamak, uygulamalarla etkileşime geçmenizi sağlar.",mobileConnectorsScreen_heading:"Cüzdan Seç",scanScreen_heading:"Telefon ile Tarat",scanScreen_heading_withConnector:"{{ CONNECTORNAME }} ile tarat",scanScreen_tooltip_walletConnect:`Desteklenen bir cüzdan taramak için
 [WALLETCONNECTLOGO] WalletConnect uygulamasını aç`,scanScreen_tooltip_default:`Taramak için telefonunda
 {{ CONNECTORNAME }} uygulamasını aç`,downloadAppScreen_heading:"{{ CONNECTORNAME }} İndir",downloadAppScreen_iosAndroid:"iOS ve Android'e indirmek için telefon kameran ile tarat.",downloadAppScreen_ios:"iOS'a indirmek için telefon kameran ile tarat.",downloadAppScreen_android:"Android'e indirmek için telefon kameran ile tarat.",injectionScreen_unavailable_h1:"Desteklenmeyen Tarayıcı",injectionScreen_unavailable_p:`{{ CONNECTORSHORTNAME }} cüzdanına bağlanmak için
{{ SUGGESTEDEXTENSIONBROWSER }} üzerinde indirmen gerekiyor.`,injectionScreen_install_h1:"{{ CONNECTORNAME }} İndir",injectionScreen_install_p:`{{ CONNECTORSHORTNAME }} cüzdanına bağlanmak için,
tarayıcı eklentisini indir.`,injectionScreen_connecting_h1:"Bağlantı İsteniyor.",injectionScreen_connecting_p:`Cüzdanını bağlamak için
 tarayıcıdan {{ CONNECTORSHORTNAME }} uzantısını açın.`,injectionScreen_connecting_injected_h1:"Bağlantı İsteniyor.",injectionScreen_connecting_injected_p:"Bu uygulamaya bağlanmak için cüzdanına gelen isteği kabul et.",injectionScreen_connected_h1:"Zaten Bağlanmış",injectionScreen_connected_p:"Bu açılır pencereyi artık kapatabilirsin",injectionScreen_rejected_h1:"İstek iptal edildi.",injectionScreen_rejected_p:`İsteği iptal ettin.
Tekrar denemek için yukarıyı tıklayın.`,injectionScreen_failed_h1:"Bağlantı Başarısız",injectionScreen_failed_p:`Üzgünüz, bir şeyler ters gitti.
Lütfen daha sonra tekrar deneyin.`,injectionScreen_notconnected_h1:"{{ CONNECTORNAME }} ile giriş yap",injectionScreen_notconnected_p:"Devam etmek için, {{ CONNECTORNAME }} eklentisine giriş yapın.",profileScreen_heading:"Bağlandı",switchNetworkScreen_heading:"Ağ Değiştir",signInWithEthereumScreen_tooltip:`Bu uygulamada oturum açmadınız.
 Devam etmek için **Ethereum İle Giriş Yap**.`,signInWithEthereumScreen_signedOut_heading:"Ethereum İle Giriş Yap",signInWithEthereumScreen_signedOut_h1:`Bu uygulama seni 
 bu cüzdanın sahibi olarak doğrulamak istiyor.`,signInWithEthereumScreen_signedOut_p:`Devam etmek için 
 cüzdanınızdaki isteği onaylayın.`,signInWithEthereumScreen_signedOut_button:"Giriş Yap",signInWithEthereumScreen_signedIn_heading:"Ethereum İle Giriş Yapıldı",signInWithEthereumScreen_signedIn_h1:`Bu cüzdanın sahibi olduğunu 
 başarıyla onayladın.`,signInWithEthereumScreen_signedIn_p:`Çıkış yaparsan ileride 
 tekrar giriş yapman gerekecek. `,signInWithEthereumScreen_signedIn_button:"Çıkış Yap"},Y8={...et,connectWallet:"Kết nối ví",disconnect:"Ngắt kết nối",connected:"Đã kết nối",wrongNetwork:"Mạng không hỗ trợ",switchNetworks:"Đổi mạng",chainNetwork:"Mạng {{ CHAIN }}",copyToClipboard:"Sao chép",copyCode:"Sao chép mã",moreInformation:"Thêm thông tin",back:"Quay lại",close:"Đóng",or:"hoặc",more:"Thêm",tryAgain:"Thử lại",tryAgainQuestion:"Thử lại?",dontHaveTheApp:"Không có app?",scanTheQRCode:"Quét mã QR",useWalletConnectModal:"Dùng WalletConnect Modal",useModal:"Dùng Modal",installTheExtension:"Cài tiện ích",getWalletName:"Lấy {{ CONNECTORNAME }}",otherWallets:"Các ví khác",learnMore:"Xem thêm",getWallet:"Tạo một ví",approveInWallet:"Cấp quyền trong ví",confirmInWallet:"Xác nhận trong ví",awaitingConfirmation:"Đang chờ xác nhận",signIn:"Đăng nhập",signOut:"Đăng xuất",signedIn:"Đã đăng nhập",signedOut:"Đã đăng xuất",walletNotConnected:"Chưa kết nối ví",warnings_walletSwitchingUnsupported:"Ví của bạn không hỗ trợ đổi mạng từ ứng dụng.",warnings_walletSwitchingUnsupportedResolve:"Hãy thử đổi mạng từ phía ví của bạn.",warnings_chainUnsupported:"Ứng dụng này không hỗ trợ mạng hiện tại.",warnings_chainUnsupportedResolve:"Đổi hoặc ngắt kết nối để tiếp tục.",onboardingScreen_heading:"Tạo một ví",onboardingScreen_h1:"Bắt đầu khám khá Web3",onboardingScreen_p:"Ví của bạn là cổng giao tiếp mọi thứ trên Ethereum, công nghệ tuyệt vời giúp khám phá Web3.",onboardingScreen_ctaText:"Chọn ví đầu tiên của bạn",onboardingScreen_ctaUrl:"https://ethereum.org/en/wallets/find-wallet/",aboutScreen_heading:"Giới thiệu các ví",aboutScreen_a_h1:"Cho tài sản số của bạn",aboutScreen_a_p:"Các ví để bạn gửi, nhận, lưu trữ, và tương tác với các tài sản điện tử như NFTs và các loại tiền Ethereum khác.",aboutScreen_b_h1:"Một cách tốt hơn để đăng nhập",aboutScreen_b_p:"Với các ứng dụng hiện đại, ví của bạn có thể dùng để đăng nhập dễ dàng thay vì phải nhớ tài khoản và mật khẩu.",aboutScreen_c_h1:"Khám phá thế giới Web3",aboutScreen_c_p:"Ví của bạn là một tiện ích thiết yếu cho phép bạn khám phá và tham gia vào thế giới web3 đang phát triển nhanh chóng.",aboutScreen_ctaText:"Tìm hiểu thêm",aboutScreen_ctaUrl:"https://ethereum.org/en/wallets/",connectorsScreen_heading:"Kết nối Ví",connectorsScreen_newcomer:"Tôi chưa có ví",connectorsScreen_h1:"Ví là gì?",connectorsScreen_p:"Ví dùng để gửi, nhận, và lưu trữ các tài sản điện tử. Kết nối với một ví giúp bạn tương tác với các ứng dụng.",mobileConnectorsScreen_heading:"Chọn ví",scanScreen_heading:"Scan bằng điện thoại",scanScreen_heading_withConnector:"Quét với {{ CONNECTORNAME }}",scanScreen_tooltip_walletConnect:`Mở một [WALLETCONNECTLOGO] mà WalletConnect 
 hỗ trợ để quét`,scanScreen_tooltip_default:`Mở {{ CONNECTORNAME }} trong 
điện thoại của bạn để quét`,downloadAppScreen_heading:"Lấy {{ CONNECTORNAME }}",downloadAppScreen_iosAndroid:"Quét bằng camera trên điện thoại của bạn để tải về cho iOS hoặc Android.",downloadAppScreen_ios:"Quét bằng camera trên điện thoại ủa bạn để tải về cho iOS.",downloadAppScreen_android:"Quét bằng camera trên điện thoại ủa bạn để tải về cho Android.",injectionScreen_unavailable_h1:"Trình duyệt không được hỗ trợ",injectionScreen_unavailable_p:`Để kết nối ví {{ CONNECTORSHORTNAME }} của bạn,
cài đặt tiện ích trên {{ SUGGESTEDEXTENSIONBROWSER }}.`,injectionScreen_install_h1:"Cài {{ CONNECTORNAME }}",injectionScreen_install_p:`Để kết nối ví {{ CONNECTORSHORTNAME }},
cài đặt tiện ích trên trình duyệt.`,injectionScreen_connecting_h1:"Đang yêu cầu kết nối",injectionScreen_connecting_p:`Mở tiện ích {{ CONNECTORSHORTNAME }} 
 trên trình duyệt để kết nối.`,injectionScreen_connecting_injected_h1:"Đang yêu cầu kết nối",injectionScreen_connecting_injected_p:"Đồng ý yêu cầu từ phía ví của bạn để kết nối ứng dụng này.",injectionScreen_connected_h1:"Đã kết nối",injectionScreen_connected_p:"Đã có thể đóng popup",injectionScreen_rejected_h1:"Đã hủy yêu cầu",injectionScreen_rejected_p:`Bạn vừa hủy yêu cầu.
Nhấn phía trên để thử lại.`,injectionScreen_failed_h1:"Kết nối không thành công",injectionScreen_failed_p:`Xin lỗi, có gì đó không đúng.
Vui lòng thử lại.`,injectionScreen_notconnected_h1:"Đăng nhập vào {{ CONNECTORNAME }}",injectionScreen_notconnected_p:"Để tiếp tục, vui lòng đăng nhập bằng tiện ích {{ CONNECTORNAME }}.",profileScreen_heading:"Đã kết nối",switchNetworkScreen_heading:"Đổi mạng",signInWithEthereumScreen_tooltip:`Bạn chưa đăng nhập vào ứng dụng.
**Đăng nhập qua Ethereum** để tiếp tục.`,signInWithEthereumScreen_signedOut_heading:"Đăng nhập qua Ethereum",signInWithEthereumScreen_signedOut_h1:`Ứng dụng này muốn xác nhận bạn 
 là chủ sở hữu của ví.`,signInWithEthereumScreen_signedOut_p:`Vui lòng ký tin nhắn yêu cầu 
 trên ví của bạn để tiếp tục.`,signInWithEthereumScreen_signedOut_button:"Đăng nhập",signInWithEthereumScreen_signedIn_heading:"Đăng nhập qua Ethereum",signInWithEthereumScreen_signedIn_h1:"Bạn đã xác nhận thành công.",signInWithEthereumScreen_signedIn_p:`Sau khi Đăng xuất bạn sẽ cần 
 xác nhận lại trong làn tiếp theo.`,signInWithEthereumScreen_signedIn_button:"Đăng xuất"},q8=e=>{switch(e){case"ee-EE":return z8;case"ar-AE":return D8;case"es-ES":return B8;case"fa-IR":return P8;case"fr-FR":return W8;case"ja-JP":return V8;case"pt-BR":return U8;case"ru-RU":return Z8;case"zh-CN":return $8;case"ca-AD":return H8;case"tr-TR":return G8;case"vi-VN":return Y8;default:return et}};function De(e){var t,n;const o=(n=(t=_e().options)===null||t===void 0?void 0:t.language)!==null&&n!==void 0?n:"en-US",a=M.useMemo(()=>q8(o),[o]);if(!a)throw console.error(`Missing translations for: ${o}`),new Error(`Missing translations for: ${o}`);const s={};return Object.keys(a).map(c=>{const l=a[c];return s[c]=K8(l,e)}),s}const K8=(e,t)=>{let n=e;return t&&Object.keys(t).forEach(r=>{n=n.replace(new RegExp(`({{ ${r} }})`,"g"),t[r])}),X8(n)},X8=e=>{let t=e;return t=t.split(`
`),t=t.map((n,r)=>i.jsxs(Oe.Fragment,{children:[J8(n),r<t.length-1&&i.jsx("br",{})]},r)),t},J8=e=>e.split(/(\*\*[^\*]*\*\*)/g).map((r,o)=>/(\*\*.*\*\*)/g.test(r)?i.jsx("strong",{children:r.replace(/\*\*/g,"")},o):`${r}`).map(r=>typeof r=="string"?r.split(/(\[WALLETCONNECTLOGO\])/g).map(o=>o==="[WALLETCONNECTLOGO]"?i.jsx("span",{className:"ck-tt-logo",children:i.jsx(ve.WalletConnect,{})},o):o):r),e1={debug:10,info:20,warn:30,error:40,none:100},Q8=typeof window<"u"&&window.document&&window.document.createElement!==void 0?M.useLayoutEffect:M.useEffect,e6=({logLevel:e="info",maxFontSize:t=100,minFontSize:n=20,onFinish:r,onStart:o,resolution:a=5}={})=>{const s=e1[e],c=M.useCallback(()=>({calcKey:0,fontSize:t,fontSizePrev:n,fontSizeMax:t,fontSizeMin:n}),[t,n]),l=M.useRef(null),d=M.useRef(),u=M.useRef(!1),[p,m]=M.useState(c),{calcKey:v,fontSize:f,fontSizeMax:y,fontSizeMin:_,fontSizePrev:k}=p;let x=null;const[N]=M.useState(()=>new Xf(()=>{x=window.requestAnimationFrame(()=>{u.current||(o&&o(),u.current=!0,m({...c(),calcKey:v+1}))})}));M.useEffect(()=>(l.current&&N.observe(l.current),()=>{x&&window.cancelAnimationFrame(x),N.disconnect()}),[x,N]);const A=l.current&&l.current.innerHTML;return M.useEffect(()=>{v===0||u.current||(A!==d.current&&(o&&o(),m({...c(),calcKey:v+1})),d.current=A)},[v,c,A,o]),Q8(()=>{if(v===0)return;const S=Math.abs(f-k)<=a,R=!!l.current&&(l.current.scrollHeight>l.current.offsetHeight||l.current.scrollWidth>l.current.offsetWidth),z=R&&f===k,h=f>k;if(S){z?(u.current=!1,s<=e1.info&&console.info(`[use-fit-text] reached \`minFontSize = ${n}\` without fitting text`)):R?m({fontSize:h?k:_,fontSizeMax:y,fontSizeMin:_,fontSizePrev:k,calcKey:v}):(u.current=!1,r&&r(f));return}let g,b=y,w=_;R?(g=h?k-f:_-f,b=Math.min(y,f)):(g=h?y-f:k-f,w=Math.max(_,f)),m({calcKey:v,fontSize:f+g/2,fontSizeMax:b,fontSizeMin:w,fontSizePrev:f})},[v,f,y,_,k,r,l,a]),{fontSize:f,ref:l}},st=({children:e})=>{const[t,n]=Oe.useState(!1),{fontSize:r,ref:o}=e6({logLevel:"none",maxFontSize:100,minFontSize:70,onStart:()=>n(!0),onFinish:()=>n(!0)});return i.jsx("div",{ref:o,style:{visibility:t?"visible":"hidden",fontSize:`${r}%`,maxHeight:"100%",maxWidth:"100%",display:"flex",justifyContent:"center",alignItems:"center"},children:e})};st.displayName="FitText";function ru(){const e=Iu();return e??[]}function zs(e,t){const n=ru();return e==="injected"&&t?n.find(r=>r.id===e&&r.name===t):e==="injected"?n.find(r=>r.id===e&&r.name.includes("Injected")):n.find(r=>r.id===e)}function ou(){return zs("aaveAccountProvider")}function t6(){return zs("walletConnect")}const Hr=e=>{const n=Bs().find(r=>r.id===e);return n||null},Bs=()=>{const e=ru(),t=_e();return e.map(r=>{var o,a;const s=Object.keys(Rt).find(l=>l.split(",").map(d=>d.trim()).indexOf(r.id)!==-1),c={id:r.id,name:(a=(o=r.name)!==null&&o!==void 0?o:r.id)!==null&&a!==void 0?a:r.type,icon:i.jsx("img",{src:r.icon,alt:r.name,width:"100%",height:"100%"}),connector:r,iconShape:"squircle",isInstalled:r.type==="mock"||r.type==="injected"&&r.id!=="metaMask"||Po(r.id)};if(s){const l=Rt[s];return{...c,iconConnector:r.icon?i.jsx("img",{src:r.icon,alt:r.name,width:"100%",height:"100%"}):void 0,...l}}return c}).filter((r,o,a)=>a.findIndex(s=>s.id===r.id)===o).map(r=>{var o,a;return r.id==="walletConnect"?{...r,name:((o=t.options)===null||o===void 0?void 0:o.walletConnectName)||r.name,shortName:((a=t.options)===null||a===void 0?void 0:a.walletConnectName)||r.shortName}:r}).filter((r,o,a)=>!(r.id==="coinbaseWalletSDK"&&a.find(s=>s.id==="com.coinbase.wallet"))).filter((r,o,a)=>!((r.id==="metaMaskSDK"||r.id==="metaMask")&&a.find(s=>s.id==="io.metamask"||s.id==="io.metamask.mobile"))).sort((r,o)=>{const a=r.isInstalled&&Yl(r.connector.type),s=o.isInstalled&&Yl(o.connector.type);return a&&!s?-1:!a&&s?1:0}).sort((r,o)=>r.id==="walletConnect"?1:o.id==="walletConnect"?-1:0)},n6=({isSignedIn:e})=>i.jsxs("div",{style:{position:"relative"},children:[e?i.jsx(tu,{style:{bottom:-1,right:-1}}):i.jsx("div",{style:{zIndex:2,position:"absolute",top:-2,right:-2,background:"#1A88F8",borderRadius:8,boxShadow:"0 0 0 2px var(--ck-body-background)",width:8,height:8}}),i.jsxs("svg",{"aria-hidden":"true",width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",style:{overflow:"visible"},children:[i.jsx("circle",{cx:"10",cy:"10",r:"9",stroke:"currentColor",strokeWidth:"2"}),i.jsx("path",{d:"M16.5 16.775C14.8618 15.0649 12.5552 14 10 14C7.44477 14 5.13825 15.0649 3.5 16.775",stroke:"currentColor",strokeWidth:"2"}),i.jsx("circle",{cx:"10",cy:"8",r:"3",stroke:"currentColor",strokeWidth:"2"})]})]}),r6=({...e})=>i.jsx("svg",{"aria-hidden":"true",width:"22",height:"22",viewBox:"0 0 22 22",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e,children:i.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M20 11C20 15.9706 15.9706 20 11 20C6.02944 20 2 15.9706 2 11C2 6.02944 6.02944 2 11 2C15.9706 2 20 6.02944 20 11ZM22 11C22 17.0751 17.0751 22 11 22C4.92487 22 0 17.0751 0 11C0 4.92487 4.92487 0 11 0C17.0751 0 22 4.92487 22 11ZM11.6445 12.7051C11.6445 13.1348 11.3223 13.4678 10.7744 13.4678C10.2266 13.4678 9.92578 13.1885 9.92578 12.6191V12.4795C9.92578 11.4268 10.4951 10.8574 11.2686 10.3203C12.2031 9.67578 12.665 9.32129 12.665 8.59082C12.665 7.76367 12.0205 7.21582 11.043 7.21582C10.3232 7.21582 9.80762 7.57031 9.45312 8.16113C9.38282 8.24242 9.32286 8.32101 9.2667 8.39461C9.04826 8.68087 8.88747 8.8916 8.40039 8.8916C8.0459 8.8916 7.66992 8.62305 7.66992 8.15039C7.66992 7.96777 7.70215 7.7959 7.75586 7.61328C8.05664 6.625 9.27051 5.75488 11.1182 5.75488C12.9336 5.75488 14.5234 6.71094 14.5234 8.50488C14.5234 9.7832 13.7822 10.417 12.7402 11.1045C11.999 11.5986 11.6445 11.9746 11.6445 12.5762V12.7051ZM11.9131 15.5625C11.9131 16.1855 11.376 16.6797 10.7529 16.6797C10.1299 16.6797 9.59277 16.1748 9.59277 15.5625C9.59277 14.9395 10.1191 14.4453 10.7529 14.4453C11.3867 14.4453 11.9131 14.9287 11.9131 15.5625Z",fill:"currentColor"})}),t1=({...e})=>i.jsx(B.svg,{width:14,height:14,viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e,children:i.jsx("path",{d:"M1 13L13 1M1 1L13 13",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"})}),o6=({...e})=>i.jsx(B.svg,{width:9,height:16,viewBox:"0 0 9 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e,children:i.jsx("path",{d:"M8 1L1 8L8 15",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})}),na=.22,n1={initial:{zIndex:2,opacity:0},animate:{opacity:1,scale:1,transition:{duration:na*.75,delay:na*.25,ease:[.26,.08,.25,1]}},exit:{zIndex:1,opacity:0,pointerEvents:"none",position:"absolute",left:["50%","50%"],x:["-50%","-50%"],transition:{duration:na,ease:[.26,.08,.25,1]}}},i6=({open:e,pages:t,pageId:n,positionInside:r,inline:o,demo:a,onClose:s,onBack:c,onInfo:l})=>{var d,u,p,m,v,f,y,_,k,x,N,A;const S=_e(),R=ti(),z=Zn(),{isSignedIn:h,reset:g}=$r(),b=Hr((d=S.connector)===null||d===void 0?void 0:d.id),w={name:b==null?void 0:b.name,shortName:(u=b==null?void 0:b.shortName)!==null&&u!==void 0?u:b==null?void 0:b.name,icon:(p=b==null?void 0:b.iconConnector)!==null&&p!==void 0?p:b==null?void 0:b.icon,iconShape:(m=b==null?void 0:b.iconShape)!==null&&m!==void 0?m:"circle",iconShouldShrink:b==null?void 0:b.iconShouldShrink},C=De({CONNECTORNAME:w==null?void 0:w.name}),[j,I]=D0({timeout:160,preEnter:!0,mountOnEnter:!0,unmountOnExit:!0}),E=!(j==="exited"||j==="unmounted"),L=j==="preEnter"||j!=="exiting",O=S.route===Q.CONNECTORS?0:S.route===Q.DOWNLOAD?2:1,F=Ql(O,O);r||X0(E),Ql(n,n),M.useEffect(()=>{I(e),e&&Z(void 0)},[e]);const[U,q]=M.useState({width:void 0,height:void 0}),[Y,Z]=M.useState(void 0),V=te=>{const he={width:te==null?void 0:te.offsetWidth,height:te==null?void 0:te.offsetHeight};q({width:`${he==null?void 0:he.width}px`,height:`${he==null?void 0:he.height}px`})};let P;const W=M.useCallback(te=>{te&&($.current=te,Z(Y!==void 0),clearTimeout(P),P=setTimeout(()=>Z(!1),360),V(te))},[e,Y]),{chain:T}=We(),{switchChain:J}=rs(),$=M.useRef(null);M.useEffect(()=>{$.current&&V($.current)},[T,J,z,h,S.options,S.resize]),M.useEffect(()=>{if(!E){q({width:void 0,height:void 0});return}const te=he=>{he.key==="Escape"&&s&&s()};return document.addEventListener("keydown",te),()=>{document.removeEventListener("keydown",te)}},[E,s]);const me={"--height":U.height,"--width":U.width};function fe(){return b?!(!b.getWalletConnectDeeplink||b.isInstalled):!1}function ue(){var te;switch(S.route){case Q.ABOUT:return C.aboutScreen_heading;case Q.CONNECT:return fe()?$n((te=b==null?void 0:b.connector)===null||te===void 0?void 0:te.id)?C.scanScreen_heading:C.scanScreen_heading_withConnector:w==null?void 0:w.name;case Q.CONNECTORS:return C.connectorsScreen_heading;case Q.MOBILECONNECTORS:return C.mobileConnectorsScreen_heading;case Q.DOWNLOAD:return C.downloadAppScreen_heading;case Q.ONBOARDING:return C.onboardingScreen_heading;case Q.PROFILE:return C.profileScreen_heading;case Q.SWITCHNETWORKS:return C.switchNetworkScreen_heading;case Q.SIGNINWITHETHEREUM:return h?C.signInWithEthereumScreen_signedIn_heading:C.signInWithEthereumScreen_signedOut_heading;default:return""}}const oe=i.jsx(Hn,{$useTheme:(v=a==null?void 0:a.theme)!==null&&v!==void 0?v:R.theme,$useMode:(f=a==null?void 0:a.mode)!==null&&f!==void 0?f:R.mode,$customTheme:(y=a==null?void 0:a.customTheme)!==null&&y!==void 0?y:R.customTheme,children:i.jsxs(k8,{role:"dialog",style:{pointerEvents:L?"auto":"none",position:r?"absolute":void 0},children:[!o&&i.jsx(v8,{$active:L,onClick:s,$blur:(_=S.options)===null||_===void 0?void 0:_.overlayBlur}),i.jsxs(j8,{style:me,initial:!1,children:[i.jsx("div",{style:{pointerEvents:Y?"all":"none",position:"absolute",top:0,bottom:0,left:"50%",transform:"translateX(-50%)",width:"var(--width)",zIndex:9,transition:"width 200ms ease"}}),i.jsxs(G0,{className:`${L&&"active"}`,children:[i.jsx(Se,{initial:!1,children:((k=S.options)===null||k===void 0?void 0:k.disclaimer)&&S.route===Q.CONNECTORS&&i.jsx(S8,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{delay:0,duration:.2,ease:[.25,.1,.25,1]},children:i.jsx(Rs,{children:i.jsx("div",{children:(x=S.options)===null||x===void 0?void 0:x.disclaimer})})})}),i.jsx(Se,{initial:!1,children:S.errorMessage&&i.jsxs(d8,{initial:{y:"10%",x:"-50%"},animate:{y:"-100%"},exit:{y:"100%"},transition:{duration:.2,ease:"easeInOut"},children:[i.jsx("span",{children:S.errorMessage}),i.jsx("div",{onClick:()=>S.displayError(null),style:{position:"absolute",right:24,top:24,cursor:"pointer"},children:i.jsx(t1,{})})]})}),i.jsxs(Y0,{children:[s&&i.jsx(Va,{"aria-label":zt(C.close).toString(),onClick:s,children:i.jsx(t1,{})}),i.jsx("div",{style:{position:"absolute",top:23,left:20,width:32,height:32},children:i.jsx(Se,{children:c?i.jsx(Ua,{disabled:Y,"aria-label":zt(C.back).toString(),onClick:c,initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:z?0:.1,delay:z?.01:0},children:i.jsx(o6,{})},"backButton"):S.route===Q.PROFILE&&S.signInWithEthereum?i.jsxs(i.Fragment,{children:[!h&&!(!((N=S.options)===null||N===void 0)&&N.hideTooltips)&&i.jsx(B.div,{style:{position:"absolute",inset:0,pointerEvents:"none"},initial:{opacity:0,scale:.8},animate:{opacity:1,scale:1,transition:{delay:.5,duration:.2}},exit:{opacity:0,scale:.6,transition:{delay:0,duration:z?0:.1}},children:i.jsx(E8,{children:C.signInWithEthereumScreen_tooltip})}),i.jsx(_8,{disabled:Y,"aria-label":C.signInWithEthereumScreen_signedOut_heading,onClick:()=>{g(),S.setRoute(Q.SIGNINWITHETHEREUM)},initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:z?0:.1,delay:z?.01:0},children:i.jsx(n6,{isSignedIn:h})},"siweButton")]}):l&&!(!((A=S.options)===null||A===void 0)&&A.hideQuestionMarkCTA)&&i.jsx(Za,{disabled:Y,"aria-label":zt(C.moreInformation).toString(),onClick:l,initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:z?0:.1,delay:z?.01:0},children:i.jsx(r6,{})},"infoButton")})})]}),i.jsx(Wo,{children:i.jsx(Se,{children:i.jsx(B.div,{style:{position:"absolute",top:0,bottom:0,left:52,right:52,display:"flex",justifyContent:"center"},initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:z?0:.17,delay:z?.01:0},children:i.jsx(st,{children:ue()})},`${S.route}-${h?"signedIn":""}`)})}),i.jsx(w8,{children:Object.keys(t).map(te=>{const he=t[te];return i.jsx(a6,{open:te===n,initial:!r&&j!=="entered",enterAnim:te===n?O>F?"active-scale-up":"active":"",exitAnim:te!==n?O<F?"exit-scale-down":"exit":"",children:i.jsx(K0,{ref:W,style:{pointerEvents:te===n&&L?"auto":"none"},children:he},`inner-${te}`)},te)})})]})]})]})});return i.jsx(i.Fragment,{children:E&&i.jsx(i.Fragment,{children:r?oe:i.jsx(i.Fragment,{children:i.jsx(Fs,{children:i.jsx(J0,{children:oe})})})})})},a6=({children:e,open:t,initial:n,prevDepth:r,currentDepth:o,enterAnim:a,exitAnim:s})=>{const[c,l]=D0({timeout:400,preEnter:!0,initialEntered:t,mountOnEnter:!0,unmountOnExit:!0}),d=!(c==="exited"||c==="unmounted"),u=c==="preEnter"||c!=="exiting";return M.useEffect(()=>{l(t)},[t]),d?i.jsx(q0,{className:`${u?a:s}`,style:{animationDuration:n?"0ms":void 0,animationDelay:n?"0ms":void 0},children:e}):null},On=({children:e,hideHr:t})=>{const n=De();return i.jsx(g8,{$disableHr:t,children:i.jsx("span",{children:e??n.or})})},s6=D(B.div)`
  position: relative;
  margin: 16px auto 20px;
  height: 190px;
  max-width: 295px;
  pointer-events: none;
  user-select: none;
  @media only screen and (max-width: ${xe.mobileWidth}px) {
    height: 200px;
    max-width: 100%;
    margin-bottom: 32px;
  }
`,c6=D(B.div)`
  position: absolute;
  inset: 0;
  z-index: 2;
`,l6=ke`
  0%{
    opacity:0;
    transform:scale(0.9);
  }
  100%{
    opacity:1;
    transform:none;
  }
`,d6=D(B.div)`
  z-index: 1;
  position: absolute;
  inset: 0;
  top: -2px;
  overflow: hidden;
  &:before {
    content: '';
    position: absolute;
    inset: 0;
    background: var(--ck-body-background);
    background: radial-gradient(
      closest-side,
      var(--ck-body-background-transparent, transparent) 18.75%,
      var(--ck-body-background) 100%
    );
    background-size: 100%;
  }
  svg {
    display: block;
    width: 100%;
    height: auto;
  }
  animation: ${l6} 1000ms 100ms ease both;
  @media only screen and (max-width: ${xe.mobileWidth}px) {
    animation: none;
  }
`,u6=ke`
  0%{
    opacity:0;
    transform:scale(0) translateY(40%);
  }
  100%{
    opacity:1;
    transform:none;
  }
`,_t=D(B.div)`
  position: absolute;
  inset: 0;
  animation: cubic-bezier(0.455, 0.03, 0.515, 0.955) infinite both;
  animation-delay: inherit;
`,_n=D(B.div)`
  position: absolute;
`,jn=D(B.div)`
  position: relative;
  overflow: hidden;
  height: 58px;
  width: 58px;
  border-radius: 13.84px;
  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.05), 0 2px 20px 0 rgba(0, 0, 0, 0.03);

  svg {
    display: block;
    width: 100%;
    height: 100%;
  }
`,p6=ke`
  0%,100%{ transform:none; }
  50%{ transform: translateY(-10%) }
`,pt=D(B.div)`
  position: relative;
  animation: cubic-bezier(0.455, 0.03, 0.515, 0.955) infinite both;
  animation-name: ${p6};
  animation-duration: 3600ms;
`,h6=ke`
  0%,100%{ transform:rotate(-3deg); }
  50%{ transform:rotate(3deg); }
`,ht=D(B.div)`
  position: relative;
  animation: cubic-bezier(0.455, 0.03, 0.515, 0.955) infinite both;
  animation-name: ${h6};
  animation-duration: 3200ms;
`,nr=D(B.div)`
  position: absolute;
  inset: 0;

  animation: ${u6} 750ms cubic-bezier(0.19, 1, 0.22, 1) both;
  &:nth-child(1){ z-index:2; animation-delay:0ms;  }
  &:nth-child(2){ z-index:1; animation-delay:60ms; }
  &:nth-child(3){ z-index:1; animation-delay:30ms; }
  &:nth-child(4){ z-index:1; animation-delay:90ms; }
  &:nth-child(5){ z-index:1; animation-delay:120ms;}

  &:nth-child(1){ ${ht}{ animation-delay:0ms; } }
  &:nth-child(2){ ${ht}{ animation-delay:-600ms; } }
  &:nth-child(3){ ${ht}{ animation-delay:-1200ms; } }
  &:nth-child(4){ ${ht}{ animation-delay:-1800ms; } }
  &:nth-child(5){ ${ht}{ animation-delay:-2400ms; } }

  &:nth-child(1){ ${pt}{ animation-delay:-200ms; } }
  &:nth-child(2){ ${pt}{ animation-delay:-600ms; } }
  &:nth-child(3){ ${pt}{ animation-delay:-800ms; } }
  &:nth-child(4){ ${pt}{ animation-delay:-300ms; } }
  &:nth-child(5){ ${pt}{ animation-delay:-3200ms; } }

  @media only screen and (max-width: ${xe.mobileWidth}px) {
    animation: none !important;
    ${ht},${pt} {
      animation: none !important;
    }
  }

  ${_n} {
    transform: translate(-50%, -50%);
  }

  &:nth-child(1) ${_t} {
    transform: translate(50%, 50%);
    ${jn} {
      border-radius: 17.2px;
      width: 72px;
      height: 72px;
    }
  }
  &:nth-child(2) ${_t} {
    transform: translate(21%, 21.5%);
  }
  &:nth-child(3) ${_t} {
    transform: translate(78%, 14%);
  }
  &:nth-child(4) ${_t} {
    transform: translate(22.5%, 76%);
  }
  &:nth-child(5) ${_t} {
    transform: translate(76%, 80%);
  }
`;var f6=i.jsxs("svg",{"aria-hidden":"true",width:"298",height:"188",viewBox:"0 0 298 188",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[i.jsx("path",{d:"M1 55.2757L21.6438 46.0285C55.5896 30.8228 94.4104 30.8228 128.356 46.0286L169.644 64.5229C203.59 79.7287 242.41 79.7286 276.356 64.5229L297 55.2757M1 44.2118L21.6438 34.9646C55.5896 19.7589 94.4104 19.7589 128.356 34.9646L169.644 53.459C203.59 68.6647 242.41 68.6647 276.356 53.459L297 44.2118M1 33.1477L21.6438 23.9005C55.5896 8.69479 94.4104 8.69479 128.356 23.9005L169.644 42.3949C203.59 57.6006 242.41 57.6006 276.356 42.3949L297 33.1477M1 22.1477L21.6438 12.9005C55.5896 -2.30521 94.4104 -2.30521 128.356 12.9005L169.644 31.3949C203.59 46.6006 242.41 46.6006 276.356 31.3949L297 22.1477M1 66.3398L21.6438 57.0926C55.5896 41.8869 94.4104 41.8869 128.356 57.0926L169.644 75.587C203.59 90.7927 242.41 90.7927 276.356 75.587L297 66.3398M1 77.404L21.6438 68.1568C55.5896 52.9511 94.4104 52.9511 128.356 68.1569L169.644 86.6512C203.59 101.857 242.41 101.857 276.356 86.6512L297 77.404M1 88.4681L21.6438 79.2209C55.5896 64.0152 94.4104 64.0152 128.356 79.2209L169.644 97.7153C203.59 112.921 242.41 112.921 276.356 97.7153L297 88.4681M1 121.66L21.6438 112.413C55.5896 97.2075 94.4104 97.2075 128.356 112.413L169.644 130.908C203.59 146.113 242.41 146.113 276.356 130.908L297 121.66M1 110.596L21.6438 101.349C55.5896 86.1433 94.4104 86.1433 128.356 101.349L169.644 119.843C203.59 135.049 242.41 135.049 276.356 119.843L297 110.596M1 99.5321L21.6438 90.2849C55.5896 75.0792 94.4104 75.0792 128.356 90.2849L169.644 108.779C203.59 123.985 242.41 123.985 276.356 108.779L297 99.5321M1 132.724L21.6438 123.477C55.5896 108.271 94.4104 108.271 128.356 123.477L169.644 141.971C203.59 157.177 242.41 157.177 276.356 141.971L297 132.724M1 143.788L21.6438 134.541C55.5896 119.336 94.4104 119.336 128.356 134.541L169.644 153.036C203.59 168.241 242.41 168.241 276.356 153.036L297 143.788M1 154.853L21.6438 145.605C55.5896 130.4 94.4104 130.4 128.356 145.605L169.644 164.1C203.59 179.305 242.41 179.305 276.356 164.1L297 154.853M1 165.853L21.6438 156.605C55.5896 141.4 94.4104 141.4 128.356 156.605L169.644 175.1C203.59 190.305 242.41 190.305 276.356 175.1L297 165.853",stroke:"url(#paint0_linear_1094_2077)",strokeOpacity:"0.9",strokeLinecap:"round",strokeLinejoin:"round"}),i.jsx("defs",{children:i.jsxs("linearGradient",{id:"paint0_linear_1094_2077",x1:"1",y1:"112.587",x2:"297.034",y2:"79.6111",gradientUnits:"userSpaceOnUse",children:[i.jsx("stop",{stopColor:"var(--ck-graphic-wave-stop-01)"}),i.jsx("stop",{stopColor:"var(--ck-graphic-wave-stop-02)",offset:"0.239583"}),i.jsx("stop",{stopColor:"var(--ck-graphic-wave-stop-03)",offset:"0.515625"}),i.jsx("stop",{stopColor:"var(--ck-graphic-wave-stop-04)",offset:"0.739583"}),i.jsx("stop",{stopColor:"var(--ck-graphic-wave-stop-05)",offset:"1"})]})})]});const g6=D(B.div)`
  position: absolute;
  right: 16px;
  top: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`,Fn=D.svg`
  --x: -3px;
  --stroke-width: 2;
  position: relative;
  top: 1px;
  left: -0.5px;
  display: inline-block;
  vertical-align: middle;
  margin-left: 9px;
  margin-right: 1px;
  transition: all 100ms ease;
  transform: translateX(var(--x, -3px));
  color: currentColor;
  opacity: 0.4;
`,gr=D.path``,mr=D.line`
  transition: inherit;
  transition-property: transform;
  transform-origin: 90% 50%;
  transform: scaleX(0.1);
`,$a=D.div`
  display: inline-block;
  vertical-align: middle;
  position: relative;
  margin-right: 6px;
  color: currentColor;
`,m6=D.div`
  transform: rotate(90deg);
  ${Fn} {
    margin: 0 auto;
  }
`,v6=D(B.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  inset: 0;
  height: 100%;
`,b6=D.button`

  ${({disabled:e})=>e&&se`
      cursor: not-allowed;
      pointer-events: none;
      ${iu} {
        opacity: 0.4;
      }
    `}

  ${({$variant:e})=>{if(e==="primary")return se`
        --color: var(--ck-primary-button-color, var(--ck-body-color));
        --background: var(
          --ck-primary-button-background,
          var(--ck-body-background-primary)
        );
        --box-shadow: var(--ck-primary-button-box-shadow);
        --border-radius: var(--ck-primary-button-border-radius);
        --font-weight: var(--ck-primary-button-font-weight, 500);

        --hover-color: var(--ck-button-primary-hover-color, var(--color));
        --hover-background: var(
          --ck-primary-button-hover-background,
          var(--background)
        );
        --hover-box-shadow: var(
          --ck-primary-button-hover-box-shadow,
          var(--box-shadow)
        );
        --hover-border-radius: var(
          --ck-primary-button-hover-border-radius,
          var(--border-radius)
        );
        --hover-font-weight: var(
          --ck-primary-button-font-weight,
          var(--font-weight)
        );
      `;if(e==="secondary")return se`
        --color: var(--ck-secondary-button-color, var(--ck-body-color));
        --background: var(
          --ck-secondary-button-background,
          var(--ck-body-background-secondary)
        );
        --box-shadow: var(--ck-secondary-button-box-shadow);
        --border-radius: var(--ck-secondary-button-border-radius);
        --font-weight: var(--ck-secondary-button-font-weight, 500);

        --hover-color: var(--ck-secondary-button-hover-color, var(--color));
        --hover-background: var(
          --ck-secondary-button-hover-background,
          var(--background)
        );
        --hover-box-shadow: var(
          --ck-secondary-button-hover-box-shadow,
          var(--box-shadow)
        );
        --hover-border-radius: var(
          --ck-secondary-button-hover-border-radius,
          var(--border-radius)
        );
        --hover-font-weight: var(
          --ck-secondary-button-font-weight,
          var(--font-weight)
        );
      `;if(e==="tertiary")return se`
        --color: var(
          --ck-tertiary-button-color,
          var(--ck-secondary-button-color)
        );
        --background: var(
          --ck-tertiary-button-background,
          var(--ck-secondary-button-background)
        );
        --box-shadow: var(
          --ck-tertiary-button-box-shadow,
          var(--ck-secondary-button-box-shadow)
        );
        --border-radius: var(
          --ck-tertiary-button-border-radius,
          var(--ck-secondary-button-border-radius)
        );
        --font-weight: var(
          --ck-tertiary-button-font-weight,
          var(--ck-secondary-button-font-weight)
        );

        --hover-color: var(
          --button-tertiary-hover-color,
          var(--ck-tertiary-button-color)
        );
        --hover-background: var(
          --ck-tertiary-button-hover-background,
          var(--ck-tertiary-button-background)
        );
        --hover-box-shadow: var(
          --ck-tertiary-button-hover-box-shadow,
          var(--ck-tertiary-button-box-shadow)
        );
        --hover-border-radius: var(
          --ck-tertiary-button-hover-border-radius,
          var(--ck-tertiary-button-border-radius, var(--border-radius))
        );
        --hover-font-weight: var(
          --ck-tertiary-button-font-weight,
          var(--ck-secondary-button-font-weight)
        );
      `}}

  appearance: none;
  cursor: pointer;
  user-select: none;
  min-width: fit-content;
  width: 100%;
  display:block;
  text-align: center;
  height: 48px;
  margin: 12px 0 0;
  line-height: 48px;
  padding: 0 4px;
  font-size: 16px;
  font-weight: var(--font-weight,500);
  text-decoration: none;
  white-space: nowrap;
  transition: 100ms ease;
  transition-property: box-shadow, background-color;
  color: var(--color);
  background: var(--background);
  border-radius: var(--border-radius);
  box-shadow: var(--box-shadow);
  will-change: transform, box-shadow, background-color, color;

  ${$a} {
    ${Fn} {
      transform: translateX(0);
      ${mr} {
        transform: none;
      }
      ${gr} {
      }
    }
  }
}

  @media only screen and (min-width: ${xe.mobileWidth+1}px) {
    &:hover,
    &:focus-visible {
      color: var(--ck-accent-text-color, var(--hover-color));
      background: var(--ck-accent-color, var(--hover-background));
      border-radius: var(--hover-border-radius);
      box-shadow: var(--hover-box-shadow);

      ${Fn} {
        transform: translateX(0);
        ${mr} {
          transform: none;
        }
        ${gr} {
        }
      }
      ${$a} {
        ${Fn} {
          transform: translateX(var(--x));
          ${mr} {
            transform: scaleX(0.1);
          }
          ${gr} {
          }
        }
      }
    }
    &:active {
      box-shadow: var(--ck-secondary-button-active-box-shadow, var(--hover-box-shadow));
    }
  }
  @media only screen and (max-width: ${xe.mobileWidth}px) {
    transition: transform 100ms ease;
    transform: scale(1);
    font-size: 17px;
    &:active {
    }
  }
`,iu=D.div`
  transform: translateZ(0); // Shifting fix
  position: relative;
  display: inline-block;
  vertical-align: middle;
  max-width: calc(100% - 42px);
  transition: opacity 300ms ease;
  /*
  overflow: hidden;
  text-overflow: ellipsis;
  */
`,r1=D(B.div)`
  position: relative;
  display: inline-block;
  vertical-align: middle;
  max-width: 20px;
  max-height: 20px;
  margin: 0 10px;
  &:first-child {
    margin-left: 0;
  }
  &:last-child {
    margin-right: 0;
  }
  ${e=>e.$rounded&&se`
        overflow: hidden;
        border-radius: 5px;
      `}
  svg {
    display: block;
    position: relative;
    max-width: 100%;
    height: auto;
  }
`,o1=ke`
  0%{ transform: rotate(0deg); }
  100%{ transform: rotate(360deg); }
`,x6=D(B.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  animation: ${o1} 1s linear infinite;
  svg {
    display: block;
    position: relative;
    animation: ${o1} 1s ease-in-out infinite;
  }
`,i1={duration:.4,ease:[.175,.885,.32,.98]},au=()=>i.jsx(x6,{initial:{opacity:0,rotate:180},animate:{opacity:1,rotate:0},exit:{position:"absolute",opacity:0,rotate:-180,transition:{...i1}},transition:{...i1,delay:.2},children:i.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 18 18",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[i.jsx("circle",{cx:"9",cy:"9",r:"7",stroke:"currentColor",strokeOpacity:"0.1",strokeWidth:"2.5"}),i.jsx("path",{d:"M16 9C16 5.13401 12.866 2 9 2",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round"})]})}),a1={duration:.4,ease:[.175,.885,.32,.98]},Pe=({children:e,variant:t="secondary",disabled:n,icon:r,iconPosition:o="left",roundedIcon:a,waiting:s,arrow:c,download:l,href:d,style:u,onClick:p})=>{const m=typeof e=="string"?e:zt(e).join(""),v=d&&(typeof d=="string"?d:zt(d).join(""));return i.jsx(b6,{as:d?"a":void 0,onClick:f=>{!n&&p&&p(f)},href:v,target:d&&"_blank",rel:d&&"noopener noreferrer",disabled:n,$variant:t,style:u,children:i.jsxs(Se,{initial:!1,children:[i.jsxs(v6,{initial:{opacity:0,y:-10},animate:{opacity:1,y:-1},exit:{position:"absolute",opacity:0,y:10,transition:{...a1}},transition:{...a1,delay:.2},children:[r&&o==="left"&&i.jsx(r1,{$rounded:a,children:r}),l&&i.jsx($a,{children:i.jsx(m6,{children:i.jsxs(Fn,{width:"13",height:"12",viewBox:"0 0 13 12",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[i.jsx(mr,{stroke:"currentColor",x1:"1",y1:"6",x2:"12",y2:"6",strokeWidth:"var(--stroke-width)",strokeLinecap:"round"}),i.jsx(gr,{stroke:"currentColor",d:"M7.51431 1.5L11.757 5.74264M7.5 10.4858L11.7426 6.24314",strokeWidth:"var(--stroke-width)",strokeLinecap:"round"})]})})}),i.jsx(iu,{style:{paddingLeft:c?6:0},children:i.jsx(st,{children:e})}),r&&o==="right"&&i.jsx(r1,{$rounded:a,children:r}),c&&i.jsxs(Fn,{width:"13",height:"12",viewBox:"0 0 13 12",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[i.jsx(mr,{stroke:"currentColor",x1:"1",y1:"6",x2:"12",y2:"6",strokeWidth:"2",strokeLinecap:"round"}),i.jsx(gr,{stroke:"currentColor",d:"M7.51431 1.5L11.757 5.74264M7.5 10.4858L11.7426 6.24314",strokeWidth:"2",strokeLinecap:"round"})]})]},m),s&&i.jsx(g6,{children:i.jsx(au,{})})]})})},y6=()=>{var e,t;const n=_e(),r=De({}),o=(t=(e=n.options)===null||e===void 0?void 0:e.walletOnboardingUrl)!==null&&t!==void 0?t:r.onboardingScreen_ctaUrl;return i.jsxs(Je,{children:[i.jsxs(s6,{children:[i.jsxs(c6,{children:[i.jsx(nr,{children:i.jsx(_t,{children:i.jsx(_n,{children:i.jsx(pt,{children:i.jsx(ht,{children:i.jsx(jn,{children:i.jsx(ve.Coinbase,{background:!0})})})})})})}),i.jsx(nr,{children:i.jsx(_t,{children:i.jsx(_n,{children:i.jsx(pt,{children:i.jsx(ht,{children:i.jsx(jn,{children:i.jsx(ve.MetaMask,{background:!0})})})})})})}),i.jsx(nr,{children:i.jsx(_t,{children:i.jsx(_n,{children:i.jsx(pt,{children:i.jsx(ht,{children:i.jsx(jn,{children:i.jsx(ve.Trust,{})})})})})})}),i.jsx(nr,{children:i.jsx(_t,{children:i.jsx(_n,{children:i.jsx(pt,{children:i.jsx(ht,{children:i.jsx(jn,{children:i.jsx(ve.Argent,{})})})})})})}),i.jsx(nr,{children:i.jsx(_t,{children:i.jsx(_n,{children:i.jsx(pt,{children:i.jsx(ht,{children:i.jsx(jn,{children:i.jsx(ve.ImToken,{})})})})})})})]}),i.jsx(d6,{children:f6})]}),i.jsxs(Te,{style:{paddingBottom:18},children:[i.jsx(Xe,{$small:!0,children:r.onboardingScreen_h1}),i.jsx(Fe,{children:r.onboardingScreen_p})]}),i.jsx(Pe,{href:o,arrow:!0,children:r.onboardingScreen_ctaText})]})},Vo=208,C6=D.div`
  pointer-events: none;
  user-select: none;
  height: ${Vo}px;
  padding: 0 0 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  svg {
    display: block;
  }
  @media only screen and (max-width: ${xe.mobileWidth}px) {
    display: none;
  }
`,s1=D(B.div)``,w6=D.div`
  pointer-events: none;
  user-select: none;
  height: ${Vo}px;
  padding: 0 0 12px;
  display: none;
  align-items: center;
  justify-content: center;
  svg {
    display: block;
  }
  @media only screen and (max-width: ${xe.mobileWidth}px) {
    display: flex;
  }
`,su=D.div`
  position: relative;
`,cu=D(B.div)`
  scroll-snap-type: x mandatory;
  position: relative;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  padding: 0 4px 8px;
  /* will-change: transform, opacity; */
  transition: 400ms 50ms cubic-bezier(0.16, 1, 0.3, 1);
  transition-property: transform, opacity;
  ${e=>!e.$active&&se`
      pointer-events: none;
      position: absolute;
      opacity: 0;
      transform: scale(0.95);
      transition-duration: 300ms;
      transition-delay: 0ms;
    `}
`,k6=D.div`
  --background: var(--ck-body-background-secondary);
  --background-transparent: var(--ck-body-background-transparent, transparent);
  position: relative;
  padding: 0 0 4px;
  border-radius: 16px;
  @media only screen and (max-width: ${xe.mobileWidth}px) {
    margin: 0 -24px;
    ${su} {
      position: relative;
      z-index: 3;
      display: flex;
      overflow: auto;
      scroll-behavior: smooth;
      scroll-snap-type: x mandatory;
      margin-top: -${Vo}px;
      padding-top: ${Vo}px;
      -ms-overflow-style: none; /* Internet Explorer 10+ */
      scrollbar-width: none; /* Firefox */
      &::-webkit-scrollbar {
        display: none; /* Safari and Chrome */
      }
    }
    ${cu} {
      position: relative;
      opacity: 1;
      transform: none;
      flex-shrink: 0;
      scroll-snap-align: start;
    }
  }
`,_6=D.div`
  position: relative;
  top: -1px;
  display: flex;
  justify-content: center;
  pointer-events: auto;
`,j6=D.button`
  display: flex;
  align-items: center;
  height: 28px;
  padding: 2px;
  background: none;
  @media only screen and (max-width: ${xe.mobileWidth}px) {
    padding: 4px;
    &:before {
      transform: none !important;
    }
  }
  &:before {
    content: '';
    display: block;
    width: 16px;
    height: 3px;
    opacity: 0.12;
    border-radius: 4px;
    background: var(--ck-accent-color, var(--ck-body-color));
    transition: transform 200ms ease, opacity 180ms ease;
  }
  ${e=>e.$active?se`
          cursor: default;
          &:before {
            opacity: 1;
          }
        `:!e.disabled&&se`
          cursor: pointer;
          &:hover:before {
            transform: scaleY(3.5);
          }
          &:active:before {
          }
        `}
`,c1={scale:[.9,1.25,1.6],opacity:[0,.11,0]},l1={ease:"linear",duration:2,repeat:1/0},lu=D.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translateY(-50%) translateX(-50%);
`,S6=ke`
  from{ transform: rotate(0deg); }
  to{ transform: rotate(360deg); }
`,E6=D(B.div)`
  z-index: -1;
  position: absolute;
  inset: 0;
  overflow: hidden;
  border-radius: 100%;
  animation: ${S6} 16s linear infinite;
`,Ps=D(B.div)`
  overflow: hidden;
  border-radius: inherit;
  z-index: 0;
  position: absolute;
  inset: 0;
  background: rgba(255, 255, 255, 0.1);
`,Ws=D(B.div)`
  z-index: 2;
  position: relative;
  border-radius: 50%;
  background: var(--ck-body-background);
`,Vs=D(B.div)`
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
`,I6=i.jsxs("svg",{width:"34",height:"34",viewBox:"0 0 34 34",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[i.jsx("path",{d:"M17 34C26.3 34 34 26.2833 34 17C34 7.7 26.2833 0 16.9833 0C7.7 0 0 7.7 0 17C0 26.2833 7.71667 34 17 34ZM9.83333 25.6833C8.68333 26.2333 7.8 25.3333 8.33333 24.2L13.1667 14.3333C13.45 13.75 13.8167 13.3833 14.35 13.1333L24.1833 8.33333C25.4 7.75 26.25 8.65 25.6833 9.81667L20.8833 19.6667C20.6167 20.2 20.2333 20.6 19.6833 20.85L9.83333 25.6833ZM17.0167 19.1333C18.1833 19.1333 19.1333 18.1833 19.1333 17.0167C19.1333 15.85 18.1833 14.9167 17.0167 14.9167C15.8667 14.9167 14.9167 15.85 14.9167 17.0167C14.9167 18.1833 15.8667 19.1333 17.0167 19.1333Z",fill:"var(--ck-graphic-compass-color, var(--ck-body-color))"}),i.jsx("path",{d:"M17 34C26.3 34 34 26.2833 34 17C34 7.7 26.2833 0 16.9833 0C7.7 0 0 7.7 0 17C0 26.2833 7.71667 34 17 34ZM9.83333 25.6833C8.68333 26.2333 7.8 25.3333 8.33333 24.2L13.1667 14.3333C13.45 13.75 13.8167 13.3833 14.35 13.1333L24.1833 8.33333C25.4 7.75 26.25 8.65 25.6833 9.81667L20.8833 19.6667C20.6167 20.2 20.2333 20.6 19.6833 20.85L9.83333 25.6833ZM17.0167 19.1333C18.1833 19.1333 19.1333 18.1833 19.1333 17.0167C19.1333 15.85 18.1833 14.9167 17.0167 14.9167C15.8667 14.9167 14.9167 15.85 14.9167 17.0167C14.9167 18.1833 15.8667 19.1333 17.0167 19.1333Z",fill:"url(#ck-compass-gradient)"}),i.jsx("defs",{children:i.jsxs("linearGradient",{id:"ck-compass-gradient",x1:"17",y1:"0",x2:"17",y2:"34",gradientUnits:"userSpaceOnUse",children:[i.jsx("stop",{stopColor:"rgba(0,0,0,0)"}),i.jsx("stop",{offset:"1",stopColor:"rgba(0,0,0,0.05)"})]})})]}),du=({inverted:e=!1})=>i.jsxs("svg",{width:"58",height:"50",viewBox:"0 0 58 50",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[i.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M57.9332 20.3335V42.1113C57.9332 46.4069 54.451 49.8891 50.1555 49.8891H8.15546C3.85991 49.8891 0.377686 46.4069 0.377686 42.1113V25.0002V7.8891C0.377686 3.59355 3.85991 0.111328 8.15546 0.111328H47.0444C48.7626 0.111328 50.1555 1.50422 50.1555 3.22244C50.1555 4.94066 48.7626 6.33355 47.0443 6.33355H9.71102C7.9928 6.33355 6.59991 7.72644 6.59991 9.44466C6.59991 11.1629 7.9928 12.5558 9.71102 12.5558H50.1555C54.451 12.5558 57.9332 16.038 57.9332 20.3335ZM46.2667 34.3337C48.4145 34.3337 50.1556 32.5926 50.1556 30.4448C50.1556 28.297 48.4145 26.5559 46.2667 26.5559C44.1189 26.5559 42.3778 28.297 42.3778 30.4448C42.3778 32.5926 44.1189 34.3337 46.2667 34.3337Z",fill:e?"var(--ck-graphic-primary-color, var(--ck-body-background))":"var(--ck-graphic-primary-color, var(--ck-body-color))"}),i.jsx("defs",{children:i.jsxs("linearGradient",{id:"paint0_linear_2501_7732",x1:"29.1555",y1:"0.111328",x2:"29.1555",y2:"49.8891",gradientUnits:"userSpaceOnUse",children:[i.jsx("stop",{stopColor:e?"var(--ck-body-color-muted)":"var(--ck-body-background-transparent, transparent)"}),i.jsx("stop",{offset:"1",stopColor:e?"var(--ck-body-color)":"var(--ck-body-background)"})]})})]}),N6=i.jsx("svg",{width:"41",height:"41",viewBox:"0 0 41 41",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:i.jsx("path",{d:"M35.4446 0.839914L2.14484 10.7065C0.0395033 11.3303 -0.632966 13.9786 0.919705 15.5313L7.9624 22.574C9.47585 24.0874 11.8661 24.273 13.5951 23.0114L25.2866 14.4797C25.5558 14.2832 25.9281 14.3121 26.1638 14.5478C26.3998 14.7838 26.4285 15.1567 26.2313 15.426L17.6874 27.0937C16.4213 28.8228 16.6052 31.2168 18.1206 32.7322L25.1811 39.7926C26.7337 41.3453 29.382 40.6728 30.0058 38.5675L39.8724 5.2677C40.6753 2.55794 38.1544 0.037024 35.4446 0.839914Z",fill:"var(--ck-graphic-secondary-color, white)"})}),M6=i.jsx("svg",{width:"38",height:"44",viewBox:"0 0 38 44",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:i.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M19 0.875C21.4853 0.875 23.5 2.88972 23.5 5.375V27.761L30.068 21.193C31.8254 19.4357 34.6746 19.4357 36.432 21.193C38.1893 22.9504 38.1893 25.7996 36.432 27.557L22.182 41.807C20.4246 43.5643 17.5754 43.5643 15.818 41.807L1.56802 27.557C-0.18934 25.7996 -0.18934 22.9504 1.56802 21.193C3.32538 19.4357 6.17462 19.4357 7.93198 21.193L14.5 27.761V5.375C14.5 2.88972 16.5147 0.875 19 0.875Z",fill:"var(--ck-graphic-secondary-color, white)"})}),A6=({...e})=>{var t;const n=(t=e==null?void 0:e.id)!==null&&t!==void 0?t:"";return i.jsxs("svg",{...e,width:"81",height:"81",viewBox:"0 0 81 81",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[i.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M81 27C81 41.9117 68.9117 54 54 54C51.2722 54 48.6389 53.5955 46.1568 52.8432L36 63H27V72H18V81H4.5C2.01472 81 0 78.9853 0 76.5V64.864C0 63.6705 0.474103 62.5259 1.31802 61.682L28.1568 34.8432C27.4045 32.3611 27 29.7278 27 27C27 12.0883 39.0883 0 54 0C68.9117 0 81 12.0883 81 27ZM60.75 25.875C63.8566 25.875 66.375 23.3566 66.375 20.25C66.375 17.1434 63.8566 14.625 60.75 14.625C57.6434 14.625 55.125 17.1434 55.125 20.25C55.125 23.3566 57.6434 25.875 60.75 25.875Z",fill:`url(#${n}paint0_linear_2509_6177)`}),i.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M81 27C81 41.9117 68.9117 54 54 54C51.2722 54 48.6389 53.5955 46.1568 52.8432L36 63H27V72H18V81H4.5C2.01472 81 0 78.9853 0 76.5V64.864C0 63.6705 0.474103 62.5259 1.31802 61.682L28.1568 34.8432C27.4045 32.3611 27 29.7278 27 27C27 12.0883 39.0883 0 54 0C68.9117 0 81 12.0883 81 27ZM60.75 25.875C63.8566 25.875 66.375 23.3566 66.375 20.25C66.375 17.1434 63.8566 14.625 60.75 14.625C57.6434 14.625 55.125 17.1434 55.125 20.25C55.125 23.3566 57.6434 25.875 60.75 25.875Z",fill:`url(#${n}paint1_radial_2509_6177)`,fillOpacity:"0.2"}),i.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M44.5658 51.2522C45.1527 50.6653 46.0151 50.4492 46.8095 50.6899C49.0823 51.3788 51.4958 51.75 54 51.75C67.6691 51.75 78.75 40.669 78.75 27C78.75 13.331 67.6691 2.25 54 2.25C40.331 2.25 29.25 13.331 29.25 27C29.25 29.5042 29.6212 31.9177 30.3101 34.1905C30.5508 34.9849 30.3347 35.8473 29.7478 36.4342L2.90901 63.273C2.48705 63.6949 2.25 64.2672 2.25 64.864V76.5C2.25 77.7426 3.25736 78.75 4.5 78.75H15.75V72C15.75 70.7574 16.7574 69.75 18 69.75H24.75V63C24.75 61.7574 25.7574 60.75 27 60.75H35.068L44.5658 51.2522ZM36 63H27V72H18V81H4.5C2.01472 81 0 78.9853 0 76.5V64.864C0 63.6705 0.474103 62.5259 1.31802 61.682L28.1568 34.8432C27.4045 32.3611 27 29.7278 27 27C27 12.0883 39.0883 0 54 0C68.9117 0 81 12.0883 81 27C81 41.9117 68.9117 54 54 54C51.2722 54 48.6389 53.5955 46.1568 52.8432L36 63ZM68.625 20.25C68.625 24.5992 65.0992 28.125 60.75 28.125C56.4008 28.125 52.875 24.5992 52.875 20.25C52.875 15.9008 56.4008 12.375 60.75 12.375C65.0992 12.375 68.625 15.9008 68.625 20.25ZM66.375 20.25C66.375 23.3566 63.8566 25.875 60.75 25.875C57.6434 25.875 55.125 23.3566 55.125 20.25C55.125 17.1434 57.6434 14.625 60.75 14.625C63.8566 14.625 66.375 17.1434 66.375 20.25Z",fill:"black",fillOpacity:"0.1"}),i.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M33.4205 47.5795C33.8598 48.0188 33.8598 48.7312 33.4205 49.1705L3.0455 79.5455C2.60616 79.9848 1.89384 79.9848 1.4545 79.5455C1.01517 79.1062 1.01517 78.3938 1.4545 77.9545L31.8295 47.5795C32.2688 47.1402 32.9812 47.1402 33.4205 47.5795Z",fill:"#A5A9AD"}),i.jsxs("defs",{children:[i.jsxs("linearGradient",{id:`${n}paint0_linear_2509_6177`,x1:"72",y1:"5.625",x2:"2.25",y2:"78.75",gradientUnits:"userSpaceOnUse",children:[i.jsx("stop",{stopColor:"#D4DFE6"}),i.jsx("stop",{offset:"0.0967282",stopColor:"#C6CACD"}),i.jsx("stop",{offset:"0.526645",stopColor:"#BDBAC4"}),i.jsx("stop",{offset:"1",stopColor:"#939CA1"})]}),i.jsxs("radialGradient",{id:`${n}paint1_radial_2509_6177`,cx:"0",cy:"0",r:"1",gradientUnits:"userSpaceOnUse",gradientTransform:"translate(52.875 12.375) rotate(93.2705) scale(39.4392)",children:[i.jsx("stop",{stopColor:"white"}),i.jsx("stop",{offset:"1",stopColor:"white"})]})]})]})},L6=i.jsxs("svg",{width:"131",height:"14",viewBox:"0 0 131 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[i.jsx("path",{d:"M5.74805 13.2549C8.86816 13.2549 10.7227 10.6973 10.7227 6.63672C10.7227 2.57617 8.85059 0.0625 5.74805 0.0625C2.63672 0.0625 0.755859 2.59375 0.755859 6.64551C0.755859 10.7148 2.61914 13.2549 5.74805 13.2549ZM5.74805 11.4004C4.02539 11.4004 3.04102 9.64258 3.04102 6.63672C3.04102 3.68359 4.04297 1.91699 5.74805 1.91699C7.44434 1.91699 8.4375 3.6748 8.4375 6.64551C8.4375 9.65137 7.46191 11.4004 5.74805 11.4004Z",fill:"var(--ck-body-color)"}),i.jsx("path",{d:"M13.0869 13.1758C13.4561 13.1758 13.6934 13.0439 13.9658 12.6221L15.9697 9.66016H16.0137L18.0264 12.6572C18.2549 13.0088 18.4922 13.1758 18.8965 13.1758C19.4854 13.1758 19.9424 12.7891 19.9424 12.209C19.9424 11.9805 19.8633 11.7695 19.7051 11.541L17.376 8.28906L19.6963 5.16016C19.8896 4.90527 19.9688 4.68555 19.9688 4.43066C19.9688 3.88574 19.5381 3.49902 18.9229 3.49902C18.5361 3.49902 18.2988 3.6748 18.0176 4.10547L16.1191 6.95312H16.0752L14.1328 4.08789C13.8516 3.64844 13.6318 3.49902 13.2012 3.49902C12.6035 3.49902 12.1465 3.91211 12.1465 4.44824C12.1465 4.70312 12.2256 4.92285 12.3838 5.13379L14.7129 8.35059L12.3486 11.5498C12.1641 11.8135 12.0762 12.0156 12.0762 12.2705C12.0762 12.7979 12.498 13.1758 13.0869 13.1758Z",fill:"var(--ck-body-color)"}),i.jsx("path",{d:"M26.2441 13.2549C29.1445 13.2549 31.1924 11.7432 31.1924 9.57227C31.1924 7.9375 30.0146 6.68066 28.3184 6.3291V6.27637C29.7773 5.87207 30.7178 4.7998 30.7178 3.45508C30.7178 1.48633 28.8633 0.0625 26.2441 0.0625C23.625 0.0625 21.7617 1.49512 21.7617 3.44629C21.7617 4.80859 22.7109 5.88965 24.1699 6.27637V6.3291C22.4736 6.67188 21.3047 7.92871 21.3047 9.57227C21.3047 11.7344 23.335 13.2549 26.2441 13.2549ZM26.2441 5.55566C24.9258 5.55566 24.0029 4.78223 24.0029 3.6748C24.0029 2.55859 24.9258 1.77637 26.2441 1.77637C27.5537 1.77637 28.4854 2.5498 28.4854 3.6748C28.4854 4.78223 27.5537 5.55566 26.2441 5.55566ZM26.2441 11.5234C24.7236 11.5234 23.6514 10.6357 23.6514 9.40527C23.6514 8.1748 24.7236 7.28711 26.2441 7.28711C27.7646 7.28711 28.8369 8.16602 28.8369 9.40527C28.8369 10.6357 27.7646 11.5234 26.2441 11.5234Z",fill:"var(--ck-body-color)"}),i.jsx("path",{d:"M36.3164 13.1494C37.7578 13.1494 38.7598 12.4199 39.208 11.3477H39.252V12.0771C39.252 12.7891 39.7266 13.1758 40.3594 13.1758C40.9922 13.1758 41.4404 12.7803 41.4404 12.0771V1.29297C41.4404 0.554688 40.9834 0.141602 40.3418 0.141602C39.7002 0.141602 39.252 0.554688 39.252 1.29297V5.24805H39.1992C38.707 4.21973 37.6523 3.52539 36.3164 3.52539C33.9697 3.52539 32.4492 5.38867 32.4492 8.33301C32.4492 11.2949 33.9697 13.1494 36.3164 13.1494ZM36.9756 11.3564C35.5605 11.3564 34.6904 10.1963 34.6904 8.3418C34.6904 6.49609 35.5693 5.32715 36.9756 5.32715C38.3555 5.32715 39.2607 6.51367 39.2607 8.3418C39.2607 10.1875 38.3555 11.3564 36.9756 11.3564Z",fill:"var(--ck-body-color)"}),i.jsx("path",{d:"M44.0508 13.1494C44.6396 13.1494 44.9736 12.8594 45.1846 12.1738L46.0195 9.76562H50.7568L51.5918 12.1914C51.7939 12.8682 52.1367 13.1494 52.752 13.1494C53.4111 13.1494 53.8857 12.7188 53.8857 12.1035C53.8857 11.9014 53.8418 11.6992 53.7363 11.4092L50.0449 1.38965C49.7285 0.537109 49.2188 0.167969 48.3838 0.167969C47.5576 0.167969 47.0479 0.554688 46.7402 1.39844L43.0576 11.4092C42.9521 11.6816 42.9082 11.9277 42.9082 12.1035C42.9082 12.7451 43.3564 13.1494 44.0508 13.1494ZM46.5557 7.97266L48.3398 2.55859H48.4014L50.2031 7.97266H46.5557Z",fill:"var(--ck-body-color)"}),i.jsx("path",{d:"M60.1172 13.2549C62.8594 13.2549 64.8545 11.4004 64.8545 8.8252C64.8545 6.42578 63.1406 4.66797 60.6973 4.66797C58.9746 4.66797 57.709 5.54688 57.208 6.71582H57.1641V6.58398C57.208 3.66602 58.2275 1.89941 60.1436 1.89941C61.084 1.89941 61.7607 2.26855 62.3496 3.07715C62.7012 3.52539 62.9824 3.73633 63.4307 3.73633C64.0283 3.73633 64.3975 3.34082 64.3975 2.82227C64.3975 2.57617 64.3359 2.35645 64.1953 2.10156C63.5625 0.897461 62.0859 0.0537109 60.1523 0.0537109C56.9268 0.0537109 54.9932 2.57617 54.9932 6.80371C54.9932 8.24512 55.2305 9.45801 55.6963 10.4336C56.5752 12.2881 58.1396 13.2549 60.1172 13.2549ZM60.082 11.4092C58.667 11.4092 57.5508 10.293 57.5508 8.86914C57.5508 7.4541 58.6494 6.41699 60.1084 6.41699C61.5674 6.41699 62.6309 7.4541 62.6221 8.91309C62.6221 10.3018 61.4971 11.4092 60.082 11.4092Z",fill:"var(--ck-body-color)"}),i.jsx("path",{d:"M68.1328 8.83398C68.8447 8.83398 69.416 8.27148 69.416 7.55078C69.416 6.83008 68.8447 6.25879 68.1328 6.25879C67.4121 6.25879 66.8408 6.83008 66.8408 7.55078C66.8408 8.27148 67.4121 8.83398 68.1328 8.83398Z",fill:"var(--ck-body-color)"}),i.jsx("path",{d:"M73.3359 8.83398C74.0479 8.83398 74.6191 8.27148 74.6191 7.55078C74.6191 6.83008 74.0479 6.25879 73.3359 6.25879C72.6152 6.25879 72.0439 6.83008 72.0439 7.55078C72.0439 8.27148 72.6152 8.83398 73.3359 8.83398Z",fill:"var(--ck-body-color)"}),i.jsx("path",{d:"M78.5391 8.83398C79.251 8.83398 79.8223 8.27148 79.8223 7.55078C79.8223 6.83008 79.251 6.25879 78.5391 6.25879C77.8184 6.25879 77.2471 6.83008 77.2471 7.55078C77.2471 8.27148 77.8184 8.83398 78.5391 8.83398Z",fill:"var(--ck-body-color)"}),i.jsx("path",{d:"M83.7422 8.83398C84.4541 8.83398 85.0254 8.27148 85.0254 7.55078C85.0254 6.83008 84.4541 6.25879 83.7422 6.25879C83.0215 6.25879 82.4502 6.83008 82.4502 7.55078C82.4502 8.27148 83.0215 8.83398 83.7422 8.83398Z",fill:"var(--ck-body-color)"}),i.jsx("path",{d:"M92.2148 13.2549C94.957 13.2549 96.9521 11.4004 96.9521 8.8252C96.9521 6.42578 95.2383 4.66797 92.7949 4.66797C91.0723 4.66797 89.8066 5.54688 89.3057 6.71582H89.2617V6.58398C89.3057 3.66602 90.3252 1.89941 92.2412 1.89941C93.1816 1.89941 93.8584 2.26855 94.4473 3.07715C94.7988 3.52539 95.0801 3.73633 95.5283 3.73633C96.126 3.73633 96.4951 3.34082 96.4951 2.82227C96.4951 2.57617 96.4336 2.35645 96.293 2.10156C95.6602 0.897461 94.1836 0.0537109 92.25 0.0537109C89.0244 0.0537109 87.0908 2.57617 87.0908 6.80371C87.0908 8.24512 87.3281 9.45801 87.7939 10.4336C88.6729 12.2881 90.2373 13.2549 92.2148 13.2549ZM92.1797 11.4092C90.7646 11.4092 89.6484 10.293 89.6484 8.86914C89.6484 7.4541 90.7471 6.41699 92.2061 6.41699C93.665 6.41699 94.7285 7.4541 94.7197 8.91309C94.7197 10.3018 93.5947 11.4092 92.1797 11.4092Z",fill:"var(--ck-body-color)"}),i.jsx("path",{d:"M103.377 13.2549C106.497 13.2549 108.352 10.6973 108.352 6.63672C108.352 2.57617 106.479 0.0625 103.377 0.0625C100.266 0.0625 98.3848 2.59375 98.3848 6.64551C98.3848 10.7148 100.248 13.2549 103.377 13.2549ZM103.377 11.4004C101.654 11.4004 100.67 9.64258 100.67 6.63672C100.67 3.68359 101.672 1.91699 103.377 1.91699C105.073 1.91699 106.066 3.6748 106.066 6.64551C106.066 9.65137 105.091 11.4004 103.377 11.4004Z",fill:"var(--ck-body-color)"}),i.jsx("path",{d:"M117.167 13.1758C117.8 13.1758 118.248 12.7715 118.248 12.0596V10.5654H119.127C119.733 10.5654 120.094 10.1875 120.094 9.63379C120.094 9.08887 119.733 8.70215 119.136 8.70215H118.248V1.81152C118.248 0.756836 117.554 0.141602 116.385 0.141602C115.453 0.141602 114.899 0.52832 114.073 1.75879C112.553 3.99121 111.111 6.16211 110.224 7.75293C109.872 8.38574 109.731 8.79883 109.731 9.29102C109.731 10.0469 110.268 10.5654 111.085 10.5654H116.086V12.0596C116.086 12.7715 116.543 13.1758 117.167 13.1758ZM116.121 8.75488H111.788V8.69336C112.816 6.82129 114.073 4.92285 116.086 2.04004H116.121V8.75488Z",fill:"var(--ck-body-color)"}),i.jsx("path",{d:"M126.105 13.2549C128.918 13.2549 130.869 11.4355 130.869 8.78125C130.869 6.35547 129.138 4.6416 126.712 4.6416C125.438 4.6416 124.392 5.13379 123.855 5.9248H123.812L124.146 2.17188H129.27C129.85 2.17188 130.228 1.80273 130.228 1.24023C130.228 0.686523 129.85 0.317383 129.27 0.317383H123.803C122.81 0.317383 122.3 0.72168 122.221 1.72363L121.816 6.51367C121.808 6.56641 121.808 6.60156 121.808 6.6543C121.79 7.26953 122.15 7.78809 122.88 7.78809C123.398 7.78809 123.618 7.67383 124.146 7.14648C124.629 6.67188 125.323 6.34668 126.123 6.34668C127.617 6.34668 128.681 7.38379 128.681 8.84277C128.681 10.3457 127.617 11.4092 126.114 11.4092C124.893 11.4092 124.049 10.8027 123.618 9.77441C123.381 9.30859 123.091 9.12402 122.616 9.12402C122.019 9.12402 121.641 9.49316 121.641 10.082C121.641 10.4072 121.72 10.6709 121.843 10.9434C122.467 12.3232 124.154 13.2549 126.105 13.2549Z",fill:"var(--ck-body-color)"})]}),d1=({layoutId:e})=>i.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"center"},children:[i.jsx(B.div,{initial:{rotate:90,scale:.2,x:"100%"},animate:{rotate:0,scale:1,x:0},exit:{rotate:40,scale:.1,x:"70%"},style:{zIndex:4,position:"relative",display:"flex",alignItems:"center",justifyContent:"center",width:76,height:76,background:"var(--ck-graphic-secondary-background, #6366F1)",borderRadius:"50%",boxShadow:"var(--ck-graphic-secondary-box-shadow, 0px 2px 10px rgba(99, 102, 241, 0.3))"},children:M6}),i.jsx(Ws,{layoutId:e,style:{position:"relative",zIndex:10,margin:"0 -8px",width:112,height:112},children:i.jsxs(Vs,{style:{background:"var(--ck-graphic-primary-background, var(--ck-body-background))",boxShadow:"var(--ck-graphic-primary-box-shadow, 0px 3px 15px rgba(0, 0, 0, 0.1))"},initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},children:[i.jsx(Ps,{}),i.jsx(B.div,{style:{zIndex:2,position:"relative"},children:i.jsx(du,{})})]},"SlideOneInner")},e),i.jsx(B.div,{initial:{rotate:-90,scale:.2,x:"-100%"},animate:{rotate:0,scale:1,x:0},exit:{rotate:-40,scale:.1,x:"-70%"},style:{zIndex:4,position:"relative",width:76,height:76,background:"var(--ck-graphic-secondary-background, #3897FB)",borderRadius:"50%",boxShadow:"var(--ck-graphic-secondary-box-shadow, 0px 2px 10px rgba(56, 151, 251, 0.3))"},children:i.jsx(lu,{children:i.jsx("div",{style:{position:"relative",left:-2,top:3},children:N6})})})]}),u1=({layoutId:e})=>i.jsx(i.Fragment,{children:i.jsxs("div",{style:{position:"relative",left:-14},children:[i.jsx(Ws,{layoutId:e,style:{zIndex:10,position:"absolute",left:15,top:12,width:32,height:32},children:i.jsx(Vs,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},style:{background:"var(--ck-graphic-primary-background, var(--ck-body-background))",boxShadow:"var(--ck-graphic-primary-box-shadow, 0px 2px 5px rgba(37, 41, 46, 0.16))"},children:i.jsx(lu,{children:i.jsx(du,{})})},"SlideTwoInner")},e),i.jsxs(B.div,{initial:{scale:.2},animate:{scale:1},exit:{scale:.2},style:{zIndex:7,position:"relative",display:"flex",alignItems:"center",padding:"21px 56px",paddingRight:52,background:"var(--ck-graphic-primary-background, var(--ck-body-background))",boxShadow:"var(--ck-graphic-primary-box-shadow, 0px 2px 9px rgba(0, 0, 0, 0.07))",borderRadius:"var(--ck-border-radius, 16px)"},children:[i.jsx(Ps,{}),i.jsx("div",{style:{position:"relative",zIndex:2,top:1,left:1},children:L6})]}),i.jsx(B.div,{style:{zIndex:8,position:"absolute",top:-16,right:-28},initial:{rotate:90,x:-70,scale:.4},animate:{rotate:0,x:0,scale:1},exit:{rotate:0,x:-70,scale:.4},children:i.jsx(A6,{id:e})})]})}),p1=({layoutId:e})=>{const t=Math.random();return i.jsx(i.Fragment,{children:i.jsxs(B.div,{style:{position:"relative"},children:[i.jsxs(Ws,{layoutId:e,initial:{rotate:80},style:{zIndex:10,position:"relative",width:128,height:128},children:[i.jsx(Vs,{initial:{opacity:0,rotate:100},animate:{opacity:1},exit:{opacity:0},style:{overflow:"hidden",background:`var(--ck-graphic-globe-background, radial-gradient(
              82.42% 82.42% at 50% 86.72%,
              rgba(255, 255, 255, 0.2) 0%,
              rgba(0, 0, 0, 0) 100%
            ),
            linear-gradient(180deg, #3897FB 0%, #5004F1 100%))`,boxShadow:"var(--ck-graphic-globe-box-shadow, 0px -6px 20px rgba(56, 151, 251, 0.23))"},children:i.jsx(E6,{style:e?void 0:{animationPlayState:"paused"},children:i.jsxs("svg",{width:"128",height:"128",viewBox:"0 0 128 128",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[i.jsxs("g",{children:[i.jsx("circle",{cx:"30",cy:"141",r:"64",stroke:`url(#networkRadialA-${t})`,strokeWidth:"3"}),i.jsx("circle",{cx:"78.8515",cy:"131.123",r:"54.1005",transform:"rotate(-37.4016 78.8515 131.123)",stroke:`url(#networkRadialB-${t})`,strokeWidth:"3"}),i.jsx("circle",{cx:"63.6053",cy:"2.12794",r:"50.8338",transform:"rotate(134.702 63.6053 2.12794)",stroke:`url(#networkRadialC-${t})`,strokeWidth:"3"}),i.jsx("circle",{cx:"126.658",cy:"56.6577",r:"50.3433",transform:"rotate(-105 126.658 56.6577)",stroke:`url(#networkRadialD-${t})`,strokeWidth:"3"}),i.jsx("circle",{cx:"13.6619",cy:"18.9603",r:"46.0247",transform:"rotate(107.362 13.6619 18.9603)",stroke:`url(#networkRadialE-${t})`,strokeWidth:"3"})]}),i.jsxs("defs",{children:[i.jsxs("radialGradient",{id:`networkRadialA-${t}`,cx:"0",cy:"0",r:"1",gradientUnits:"userSpaceOnUse",gradientTransform:"translate(60.5 84) rotate(104.668) scale(77.0097)",children:[i.jsx("stop",{stopColor:"var(--ck-graphic-globe-lines, white)"}),i.jsx("stop",{offset:"1",stopColor:"var(--ck-graphic-globe-lines, white)",stopOpacity:"0"})]}),i.jsxs("radialGradient",{id:`networkRadialB-${t}`,cx:"0",cy:"0",r:"1",gradientUnits:"userSpaceOnUse",gradientTransform:"translate(96.1805 81.6717) rotate(97.125) scale(64.7443)",children:[i.jsx("stop",{stopColor:"var(--ck-graphic-globe-lines, white)"}),i.jsx("stop",{offset:"1",stopColor:"var(--ck-graphic-globe-lines, white)",stopOpacity:"0"})]}),i.jsxs("radialGradient",{id:`networkRadialC-${t}`,cx:"0",cy:"0",r:"1",gradientUnits:"userSpaceOnUse",gradientTransform:"translate(96.3816 -36.4455) rotate(114.614) scale(57.7177)",children:[i.jsx("stop",{stopColor:"var(--ck-graphic-globe-lines, white)"}),i.jsx("stop",{offset:"1",stopColor:"var(--ck-graphic-globe-lines, white)",stopOpacity:"0"})]}),i.jsxs("radialGradient",{id:`networkRadialD-${t}`,cx:"0",cy:"0",r:"1",gradientUnits:"userSpaceOnUse",gradientTransform:"translate(137.86 7.73234) rotate(92.3288) scale(62.743)",children:[i.jsx("stop",{stopColor:"var(--ck-graphic-globe-lines, white)"}),i.jsx("stop",{offset:"1",stopColor:"var(--ck-graphic-globe-lines, white)",stopOpacity:"0"})]}),i.jsxs("radialGradient",{id:`networkRadialE-${t}`,cx:"0",cy:"0",r:"1",gradientUnits:"userSpaceOnUse",gradientTransform:"translate(35.3203 -21.566) rotate(104.513) scale(54.8617)",children:[i.jsx("stop",{stopColor:"var(--ck-graphic-globe-lines, white)"}),i.jsx("stop",{offset:"1",stopColor:"var(--ck-graphic-globe-lines, white)",stopOpacity:"0"})]})]})]})})},"SlideThreeInner"),i.jsxs(B.div,{exit:{opacity:0},children:[i.jsx(B.div,{initial:e?void 0:{scale:1.1},animate:e?c1:void 0,transition:{...l1},style:{position:"absolute",inset:0,borderRadius:"50%",boxShadow:"0 0 0 2px var(--ck-graphic-globe-lines, rgba(126, 112, 243, 1))"}},"pulseA"),i.jsx(B.div,{initial:e?void 0:{scale:1.2,opacity:.25},animate:e?c1:void 0,transition:{...l1,delay:.5},style:{position:"absolute",inset:0,borderRadius:"50%",boxShadow:"0 0 0 2px var(--ck-graphic-globe-lines, rgba(126, 112, 243, 1))"}},"pulseB")]})]},e),i.jsxs(B.div,{initial:{rotate:-20,scale:.1,y:-10,x:-10},animate:{rotate:0,scale:1,y:0,x:0},exit:{zIndex:3,scale:.2,y:-25,x:15},style:{zIndex:12,borderRadius:"50%",position:"absolute",bottom:-4,right:-4,width:54,height:54,display:"flex",alignItems:"center",justifyContent:"center",padding:13,background:"var(--ck-graphic-compass-background, var(--ck-body-background))",boxShadow:"var(--ck-graphic-compass-box-shadow, 0px 2px 9px rgba(0, 0, 0, 0.15))"},children:[i.jsx(Ps,{}),i.jsx(B.div,{style:{zIndex:2,position:"absolute"},initial:{rotate:-170},animate:{rotate:0},exit:{rotate:-180,transition:{duration:0}},transition:{type:"spring",stiffness:6,damping:.9,mass:.2},children:I6})]})]},"SlideThree")})},T6=()=>{var e,t;const n=De({}),r=_e(),o=(t=(e=r.options)===null||e===void 0?void 0:e.ethereumOnboardingUrl)!==null&&t!==void 0?t:n.aboutScreen_ctaUrl,[a,s]=M.useState(!0),[c,l]=M.useState(0),d=M.useRef(!1),u=M.useRef(0),p=[.16,1,.3,1],m=600;let v;M.useEffect(()=>()=>clearInterval(v),[]);const f=()=>{if(S.current){const{overflow:b}=getComputedStyle(S.current);return b!=="visible"}return!1},y=b=>{s(!1),f()?_(b):l(b)},_=b=>{if(S.current){const{offsetWidth:w}=S.current;S.current.scrollLeft=w*b,setTimeout(()=>l(b),100)}},k=()=>{if(!S.current)return;const{offsetWidth:b,scrollLeft:w}=S.current,C=u.current;u.current=w;const j=4;if(C-w>-j&&C-w<j){const I=Math.round(w/b);l(I)}},x=()=>{A()},N=()=>{const{offsetWidth:b,scrollLeft:w}=S.current,C=Math.round(w/b);l(C)},A=()=>{d.current=!0,clearTimeout(v)},S=M.useRef(null);M.useEffect(()=>{if(S.current)return S.current.addEventListener("scroll",k),S.current.addEventListener("touchmove",x),S.current.addEventListener("touchend",N),()=>{S.current&&(S.current.removeEventListener("scroll",k),S.current.removeEventListener("touchmove",x),S.current.removeEventListener("touchend",N))}},[S]);const R=[i.jsx(d1,{layoutId:"graphicCircle",duration:m,ease:p}),i.jsx(u1,{layoutId:"graphicCircle",duration:m,ease:p}),i.jsx(p1,{layoutId:"graphicCircle",duration:m,ease:p})],z=[i.jsx(d1,{duration:m,ease:p}),i.jsx(u1,{duration:m,ease:p}),i.jsx(p1,{duration:m,ease:p})],h=(()=>{var b;switch((b=r.options)===null||b===void 0?void 0:b.language){case"en-US":case"zh-CN":return 64;default:return 84}})(),g=[i.jsxs(i.Fragment,{children:[i.jsx(Xe,{style:{height:24},$small:!0,children:i.jsx(st,{children:n.aboutScreen_a_h1})}),i.jsx(Fe,{style:{height:h},children:i.jsx(st,{children:n.aboutScreen_a_p})})]}),i.jsxs(i.Fragment,{children:[i.jsx(Xe,{style:{height:24},$small:!0,children:i.jsx(st,{children:n.aboutScreen_b_h1})}),i.jsx(Fe,{style:{height:h},children:i.jsx(st,{children:n.aboutScreen_b_p})})]}),i.jsxs(i.Fragment,{children:[i.jsx(Xe,{style:{height:24},$small:!0,children:i.jsx(st,{children:n.aboutScreen_c_h1})}),i.jsx(Fe,{style:{height:h},children:i.jsx(st,{children:n.aboutScreen_c_p})})]})];return i.jsxs(Je,{children:[i.jsxs(k6,{children:[i.jsx(C6,{children:i.jsx(al,{transition:{duration:m/1e3,ease:p},children:i.jsx(Se,{initial:!1,onExitComplete:()=>s(!0),children:R.map((b,w)=>c===w&&i.jsx(s1,{style:{position:"absolute"},children:b},w))})})}),i.jsx(su,{ref:S,children:i.jsx(Se,{children:g.map((b,w)=>i.jsxs(cu,{$active:c===w,children:[i.jsx(w6,{children:i.jsx(al,{transition:{duration:0},children:i.jsx(s1,{children:z[w]})})}),i.jsx(Te,{style:{gap:8,paddingBottom:0},children:b})]},w))})})]}),i.jsx(On,{children:i.jsx(_6,{children:g.map((b,w)=>i.jsx(j6,{$active:c===w,onClick:()=>{A(),y(w)}},w))})}),i.jsx(Pe,{href:o,arrow:!0,children:n.aboutScreen_ctaText})]})},O6=ke`
  0%{ transform: translate(-100%) rotate(-45deg); }
  100%{ transform: translate(100%) rotate(-80deg); }
`,F6=D(B.div)`
  display: flex;
  flex-direction: column;
  gap: 12px;
`,R6=D.div`
  padding: 24px 24px 28px;
  border-radius: var(--ck-tertiary-border-radius, 24px);
  box-shadow: var(--ck-tertiary-box-shadow, none);
  background: var(--ck-body-background-tertiary);
  ${Fe} {
    max-width: none;
  }
`,D6=D.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
  margin: 5px -8px -12px;
  button {
  }
`,z6=D(B.div)`
  text-align: center;
  margin-top: 16px;
  margin-bottom: -6px;
`,B6=D(B.button)`
  appearance: none;
  user-select: none;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  height: 42px;
  padding: 0 16px;
  border-radius: 6px;
  background: none;
  color: var(--ck-body-color-muted);
  font-size: 15px;
  line-height: 18px;
  font-weight: 500;
  /* will-change: transform; */
  transition: color 200ms ease, transform 100ms ease;
  svg {
    transition: all 100ms ease-out;
    display: block;
    position: relative;
    top: 2px;
    left: 2px;
    transform: translateZ(0px);
    path,
    circle {
      transition: all 100ms ease-out;
    }
    path:last-of-type {
      transform-origin: 0 0;
      transform: scaleX(1.3) skewY(-12deg);
      opacity: 0;
    }
    circle {
      transform: translate(20%, -15%);
    }
  }
  &:hover {
    color: var(--ck-body-color-muted-hover);
    svg {
      path,
      circle {
        opacity: 1;
        transform: none;
      }
    }
  }
  &:active {
    transform: scale(0.96);
  }
`;D(B.div)`
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 0 0 16px;
  overflow-y: scroll;
  max-height: 20rem;

  &::-webkit-scrollbar {
    display: none;
  }
`;D(B.button)`
  cursor: pointer;
  user-select: none;
  position: relative;
  display: flex;
  align-items: center;
  padding: 0 20px;
  width: 100%;
  height: 64px;
  font-size: 17px;
  font-weight: var(--ck-primary-button-font-weight, 500);
  line-height: 20px;
  text-align: var(--ck-body-button-text-align, left);
  transition: 180ms ease;
  transition-property: background, color, box-shadow, transform, opacity;
  will-change: transform, box-shadow, background-color, color, opacity;

  --fallback-color: var(--ck-primary-button-color);
  --fallback-background: var(--ck-primary-button-background);
  --fallback-box-shadow: var(--ck-primary-button-box-shadow);
  --fallback-border-radius: var(--ck-primary-button-border-radius);

  --color: var(--ck-primary-button-color, var(--fallback-color));
  --background: var(--ck-primary-button-background, var(--fallback-background));
  --box-shadow: var(--ck-primary-button-box-shadow, var(--fallback-box-shadow));
  --border-radius: var(
    --ck-primary-button-border-radius,
    var(--fallback-border-radius)
  );

  --hover-color: var(--ck-primary-button-hover-color, var(--color));
  --hover-background: var(
    --ck-primary-button-hover-background,
    var(--background)
  );
  --hover-box-shadow: var(
    --ck-primary-button-hover-box-shadow,
    var(--box-shadow)
  );
  --hover-border-radius: var(
    --ck-primary-button-hover-border-radius,
    var(--border-radius)
  );

  --active-color: var(--ck-primary-button-active-color, var(--hover-color));
  --active-background: var(
    --ck-primary-button-active-background,
    var(--hover-background)
  );
  --active-box-shadow: var(
    --ck-primary-button-active-box-shadow,
    var(--hover-box-shadow)
  );
  --active-border-radius: var(
    --ck-primary-button-active-border-radius,
    var(--hover-border-radius)
  );

  color: var(--color);
  background: var(--background);
  box-shadow: var(--box-shadow);
  border-radius: var(--border-radius);

  &:disabled {
    transition: 180ms ease;
    opacity: 0.4;
  }

  --bg: var(--background);
  &:not(:disabled) {
    &:hover {
      color: var(--hover-color);
      background: var(--hover-background);
      box-shadow: var(--hover-box-shadow);
      border-radius: var(--hover-border-radius);
      --bg: var(--hover-background, var(--background));
    }
    &:focus-visible {
      transition-duration: 100ms;
      color: var(--hover-color);
      background: var(--hover-background);
      box-shadow: var(--hover-box-shadow);
      border-radius: var(--hover-border-radius);
      --bg: var(--hover-background, var(--background));
    }
    &:active {
      color: var(--active-color);
      background: var(--active-background);
      box-shadow: var(--active-box-shadow);
      border-radius: var(--active-border-radius);
      --bg: var(--active-background, var(--background));
    }
  }
`;D(B.span)`
  position: relative;
  top: var(--ck-recent-badge-top-offset, 0.5px);
  display: inline-block;
  padding: 10px 7px;
  line-height: 0;
  font-size: 13px;
  font-weight: 400;
  border-radius: var(--ck-recent-badge-border-radius, var(--border-radius));
  color: var(
    --ck-recent-badge-color,
    var(--ck-accent-color, var(--ck-body-color-muted, currentColor))
  );
  background: var(--ck-recent-badge-background, transparent);
  overflow: hidden;
  span {
    display: inline-block;
    position: relative;
  }
  &:before {
    z-index: 1;
    content: '';
    position: absolute;
    inset: 0;
    opacity: 0.4;
    box-shadow: var(--ck-recent-badge-box-shadow, inset 0 0 0 1px currentColor);
    border-radius: inherit;
  }
  &:after {
    z-index: 2;
    content: '';
    position: absolute;
    inset: -10%;
    top: -110%;
    aspect-ratio: 1/1;
    opacity: 0.7;
    background: linear-gradient(
      170deg,
      transparent 10%,
      var(--ck-recent-badge-background, var(--bg)) 50%,
      transparent 90%
    );
    animation: ${O6} 2s linear infinite;
  }
`;D(B.span)`
  display: flex;
  align-items: center;
  gap: 9px;
  width: 100%;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  padding: 2px 0;
  padding-right: 38px;
`;D(B.div)`
  position: absolute;
  right: 20px;
  width: 32px;
  height: 32px;
  overflow: hidden;
  svg,
  img {
    display: block;
    position: relative;
    pointer-events: none;
    overflow: hidden;
    border-radius: 27.5%;
    width: 100%;
    height: 100%;
  }
`;var P6=({...e})=>i.jsxs("svg",{"aria-hidden":"true",width:"20",height:"19",viewBox:"0 0 20 19",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e,children:[i.jsx("path",{d:"M1.57568 4.60616C1.57568 2.69827 3.12234 1.15161 5.03023 1.15161H15.3939C17.3018 1.15161 18.8484 2.69826 18.8484 4.60616V10.3637C18.8484 12.2716 17.3018 13.8183 15.3939 13.8183H5.03023C3.12234 13.8183 1.57568 12.2716 1.57568 10.3637V4.60616Z",stroke:"currentColor",strokeWidth:"2"}),i.jsx("path",{d:"M1 4.79293C1 2.435 3.31004 0.770014 5.54697 1.51566L12.4561 3.81869C13.8667 4.2889 14.8182 5.60901 14.8182 7.09596V13.6313C14.8182 15.9892 12.5081 17.6542 10.2712 16.9086L3.36212 14.6056C1.95149 14.1353 1 12.8152 1 11.3283V4.79293Z",fill:"var(--ck-body-background)",stroke:"currentColor",strokeWidth:"2"}),i.jsx("circle",{cx:"10.3863",cy:"10.1894",r:"1.32574",fill:"currentColor"})]});const W6=ke`
  0%{ transform: translate(-100%) rotate(-45deg); }
  100%{ transform: translate(100%) rotate(-80deg); }
`,Ha=D(B.button)`
  display: block;
  text-decoration: none;
`,Ga=D(B.span)``,Ya=D(B.div)``,bn={desktop:{ConnectorButton:se`
      cursor: pointer;
      user-select: none;
      position: relative;
      display: flex;
      align-items: center;
      padding: 0 20px;
      width: 100%;
      height: 64px;
      font-size: 17px;
      font-weight: var(--ck-primary-button-font-weight, 500);
      line-height: 20px;
      text-align: var(--ck-body-button-text-align, left);
      transition: 180ms ease;
      transition-property: background, color, box-shadow, transform, opacity;
      will-change: transform, box-shadow, background-color, color, opacity;

      --fallback-color: var(--ck-primary-button-color);
      --fallback-background: var(--ck-primary-button-background);
      --fallback-box-shadow: var(--ck-primary-button-box-shadow);
      --fallback-border-radius: var(--ck-primary-button-border-radius);

      --color: var(--ck-primary-button-color, var(--fallback-color));
      --background: var(
        --ck-primary-button-background,
        var(--fallback-background)
      );
      --box-shadow: var(
        --ck-primary-button-box-shadow,
        var(--fallback-box-shadow)
      );
      --border-radius: var(
        --ck-primary-button-border-radius,
        var(--fallback-border-radius)
      );

      --hover-color: var(--ck-primary-button-hover-color, var(--color));
      --hover-background: var(
        --ck-primary-button-hover-background,
        var(--background)
      );
      --hover-box-shadow: var(
        --ck-primary-button-hover-box-shadow,
        var(--box-shadow)
      );
      --hover-border-radius: var(
        --ck-primary-button-hover-border-radius,
        var(--border-radius)
      );

      --active-color: var(--ck-primary-button-active-color, var(--hover-color));
      --active-background: var(
        --ck-primary-button-active-background,
        var(--hover-background)
      );
      --active-box-shadow: var(
        --ck-primary-button-active-box-shadow,
        var(--hover-box-shadow)
      );
      --active-border-radius: var(
        --ck-primary-button-active-border-radius,
        var(--hover-border-radius)
      );

      color: var(--color);
      background: var(--background);
      box-shadow: var(--box-shadow);
      border-radius: var(--border-radius);

      &:disabled {
        transition: 180ms ease;
        opacity: 0.4;
      }

      --bg: var(--background);
      &:not(:disabled) {
        &:hover {
          color: var(--hover-color);
          background: var(--hover-background);
          box-shadow: var(--hover-box-shadow);
          border-radius: var(--hover-border-radius);
          --bg: var(--hover-background, var(--background));
        }
        &:focus-visible {
          transition-duration: 100ms;
          color: var(--hover-color);
          background: var(--hover-background);
          box-shadow: var(--hover-box-shadow);
          border-radius: var(--hover-border-radius);
          --bg: var(--hover-background, var(--background));
        }
        &:active {
          color: var(--active-color);
          background: var(--active-background);
          box-shadow: var(--active-box-shadow);
          border-radius: var(--active-border-radius);
          --bg: var(--active-background, var(--background));
        }
      }
    `,ConnectorLabel:se`
      display: flex;
      align-items: center;
      gap: 9px;
      width: 100%;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      padding: 2px 0;
      padding-right: 38px;
    `,ConnectorIcon:se`
      position: absolute;
      right: 20px;
      width: 32px;
      height: 32px;
      overflow: hidden;
      svg,
      img {
        display: block;
        position: relative;
        pointer-events: none;
        overflow: hidden;
        width: 100%;
        height: 100%;
      }

      &[data-shape='squircle'] {
        border-radius: 22.5%;
      }
      &[data-shape='circle'] {
        border-radius: 100%;
      }
      &[data-shape='square'] {
        border-radius: 0;
      }
    `},mobile:{ConnectorButton:se`
      text-align: center;
      background: none;
      max-width: 100%;
      overflow: hidden;
    `,ConnectorLabel:se`
      display: block;
      text-overflow: ellipsis;
      max-width: 100%;
      overflow: hidden;
      padding: 10px 0 0;
      color: var(--ck-body-color);
      font-size: 13px;
      line-height: 15px;
      font-weight: 500;
      opacity: 0.75;
    `,ConnectorIcon:se`
      position: relative;
      margin: 0 auto;
      width: 60px;
      height: 60px;
      overflow: hidden;
      svg,
      img {
        display: block;
        position: relative;
        width: 100%;
        height: auto;
      }
      &[data-small='true'] {
        svg,
        img {
          transform: scale(0.8);
        }
      }

      &[data-shape='squircle'] {
        border-radius: 22.5%;
        &:before {
          content: '';
          z-index: -1;
          position: absolute;
          inset: 0;
          border-radius: inherit;
          box-shadow: inset 0 0 0 1px var(--ck-body-background-tertiary);
        }
      }
      &[data-shape='circle'] {
        border-radius: 100%;
      }
      &[data-shape='square'] {
        border-radius: 0;
      }

      &[data-background='true'] {
        border-radius: 22.5%;
        background: var(--ck-body-background-tertiary);
        padding: 8%;
      }
    `}},uu=D(B.span)`
  position: relative;
  top: var(--ck-recent-badge-top-offset, 0.5px);
  display: inline-block;
  padding: 10px 7px;
  line-height: 0;
  font-size: 13px;
  font-weight: 400;
  border-radius: var(--ck-recent-badge-border-radius, var(--border-radius));
  color: var(
    --ck-recent-badge-color,
    var(--ck-accent-color, var(--ck-body-color-muted, currentColor))
  );
  background: var(--ck-recent-badge-background, transparent);
  overflow: hidden;
  span {
    display: inline-block;
    position: relative;
  }
  &:before {
    z-index: 1;
    content: '';
    position: absolute;
    inset: 0;
    opacity: 0.4;
    box-shadow: var(--ck-recent-badge-box-shadow, inset 0 0 0 1px currentColor);
    border-radius: inherit;
  }
  &:after {
    z-index: 2;
    content: '';
    position: absolute;
    inset: -10%;
    top: -110%;
    aspect-ratio: 1/1;
    opacity: 0.7;
    background: linear-gradient(
      170deg,
      transparent 10%,
      var(--ck-recent-badge-background, var(--bg)) 50%,
      transparent 90%
    );
    animation: ${W6} 2s linear infinite;
  }
`,V6=D.div`
  transition: opacity 300ms ease;
  min-width: fit-content;

  ${e=>e.$disabled&&se`
      pointer-events: none;
      opacity: 0.4;
    `}

  ${e=>e.$mobile?se`
          display: flex;
          align-items: flex-start;
          justify-content: space-around;
          gap: 22px 6px;
          //margin: 0px -10px -20px;
          padding: 14px 0px 28px;

          ${Ha} {
            flex-shrink: 0;
            width: 80px;
            ${bn.mobile.ConnectorButton}
            ${Ga} {
              ${bn.mobile.ConnectorLabel}
              ${uu} {
                display: none;
                width: fit-content;
                margin: 0 auto;
              }
            }
            ${Ya} {
              ${bn.mobile.ConnectorIcon}
            }
          }
        `:se`
          display: flex;
          flex-direction: column;
          gap: 12px;

          ${Ha} {
            ${bn.desktop.ConnectorButton}
            ${Ga} {
              ${bn.desktop.ConnectorLabel}
            }
            ${Ya} {
              ${bn.desktop.ConnectorIcon}
            }
          }
        `}
`;function Us(){var e;const t=ts();return((e=t==null?void 0:t.chains)!==null&&e!==void 0?e:[]).map(r=>r)}function ni({...e}={}){const t=_e(),{connect:n,connectAsync:r,connectors:o,...a}=ns({...e,mutation:{...e.mutation,onError(s){s.message?s.message!=="User rejected request"&&t.log(s.message,s):t.log("Could not connect.",s)}}});return{connect:({connector:s,chainId:c,mutation:l})=>{var d;return n({connector:s,chainId:c??((d=t.options)===null||d===void 0?void 0:d.initialChainId)},l)},connectAsync:async({connector:s,chainId:c,mutation:l})=>{var d;return r({connector:s,chainId:c??((d=t.options)===null||d===void 0?void 0:d.initialChainId)},l)},connectors:o,...a}}function U6({enabled:e}={enabled:!0}){const{log:t}=_e(),[n,r]=M.useState(void 0),o=t6(),{isConnected:a}=We(),{connectAsync:s}=ni();return M.useEffect(()=>{if(!e)return;async function c(p){const{type:m,data:v}=p;t("WC Message",m,v),m==="display_uri"&&r(v)}async function l(){t("WC Disconnect"),o&&d(o)}async function d(p){const m=await s({connector:p});return m||!1}async function u(p){try{await d(p)}catch(m){if(t("catch error"),t(m),m.code)switch(m.code){case 4001:t("error.code - User rejected"),u(p);break;default:t("error.code - Unknown Error");break}else t("WalletConnect cannot connect.",m)}}if(a)r(void 0);else{if(!o||n)return;if(o&&!a)return u(o),t("add wc listeners"),o.emitter.on("message",c),o.emitter.on("disconnect",l),()=>{t("remove wc listeners"),o.emitter.off("message",c),o.emitter.off("disconnect",l)}}},[e,o,a]),{uri:n}}function Mt(e){const{chains:t}=ts();return e?t.some(n=>n.id===e):!1}const pu=Oe.createContext({connect:{getUri:()=>""},dapp:{chains:[]},account:void 0}),Z6=({enabled:e,children:t})=>{const{uri:n}=U6({enabled:e}),{address:r,chain:o}=We(),a=Mt(o==null?void 0:o.id),s=Us(),c={connect:{getUri:l=>n},dapp:{chains:s},account:r?{chain:o,chainIsSupported:a,address:r}:void 0};return i.jsx(pu.Provider,{value:c,children:t})},Zs=()=>Oe.useContext(pu);function ri(){const[e,t]=M.useState(Zn());return M.useEffect(()=>{const n=()=>{t(Zn())};return window.addEventListener("resize",n),()=>window.removeEventListener("resize",n)},[]),e}const $6=D.div`
  position: relative;
`,H6=ke`
0%{ opacity:0; }
100%{ opacity:1; }
`,G6=D.div`
  z-index: 9;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0.75rem;
  display: flex;
  justify-content: center;

  transition: opacity 300ms ease;

  span {
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 0.25rem;
    padding: 0.3075rem 0.9375rem 0.375rem;
    border-radius: 6rem;
    background: var(--ck-tooltip-background);
    color: var(--ck-tooltip-color);
    font-weight: 500;
    font-size: 0.8125rem;
    letter-spacing: -0.01rem;
    box-shadow: var(--ck-tooltip-shadow);
    animation: ${H6} 300ms ease 1000ms both;

    transition: transform 100ms ease;

    &:hover {
      transform: scale(1.02);
    }
    &:active {
      transform: scale(0.98);
    }
    svg {
      display: block;
      transform: translateX(-0.1875rem);
    }
  }

  &.hide {
    opacity: 0;
    pointer-events: none;
  }
`,Y6=D.div`
  --bg: ${({$backgroundColor:e})=>e||"var(--ck-body-background)"};
  --fade-height: 1px;
  position: relative;
  z-index: 1;

  ${({$mobile:e,$height:t,$mobileDirection:n})=>e&&n==="horizontal"?se`
          overflow-x: scroll;
          margin: 0 -24px;
          padding: 0 24px;

          &:before,
          &:after {
            pointer-events: none;
            z-index: 10;
            content: '';
            display: block;
            position: sticky;
            top: 0;
            bottom: 0;
            width: var(--fade-height);
            background: var(
              --ck-body-divider-secondary,
              var(--ck-body-divider)
            );
            box-shadow: var(--ck-body-divider-box-shadow);
            transition: opacity 300ms ease;
          }
          &:before {
            left: 0;
          }
          &:after {
            right: 0;
          }

          &.scroll-start {
            &:before {
              opacity: 0;
            }
          }

          &.scroll-end {
            &:after {
              opacity: 0;
            }
          }
        `:se`
          max-height: ${t?`${t}px`:"310px"};
          overflow-y: scroll;
          padding: 0 10px;
          margin: calc(var(--fade-height) * -1) -16px 0 -10px;

          &:before,
          &:after {
            pointer-events: none;
            z-index: 10;
            content: '';
            display: block;
            position: sticky;
            left: 0;
            right: 0;
            height: var(--fade-height);
            background: var(
              --ck-body-divider-secondary,
              var(--ck-body-divider)
            );
            box-shadow: var(--ck-body-divider-box-shadow);
            transition: opacity 300ms ease;
          }
          &:before {
            top: 0;
          }
          &:after {
            bottom: 0;
          }

          &.scroll-start {
            &:before {
              opacity: 0;
            }
          }

          &.scroll-end {
            &:after {
              opacity: 0;
            }
          }
        `}

  &::-webkit-scrollbar {
    width: 6px;
    height: 6px;
  }
  &::-webkit-scrollbar-track {
    background: transparent;
  }
  &::-webkit-scrollbar-thumb {
    background: rgba(0, 0, 0, 0);
    border-radius: 100px;
  }
  &:hover::-webkit-scrollbar-thumb {
    background: var(--ck-body-color-muted);
  }
  &::-webkit-scrollbar-thumb:hover {
    background: var(--ck-body-color-muted-hover);
  }
`,q6=()=>i.jsx("svg",{width:"11",height:"12",viewBox:"0 0 11 12",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:i.jsx("path",{d:"M5.49438 1L5.49438 11M5.49438 11L9.5 7M5.49438 11L1.5 7",stroke:"currentColor",strokeWidth:"1.75",strokeLinecap:"round",strokeLinejoin:"round"})}),hu=({children:e,height:t,backgroundColor:n,mobileDirection:r})=>{const o=M.useRef(null),a=M.useRef(null),s=ri();return M.useEffect(()=>{const c=o.current;if(!c)return;c.scrollHeight>c.clientHeight&&a.current&&a.current.classList.remove("hide");const l=d=>{const{scrollTop:u,scrollHeight:p,clientHeight:m,scrollLeft:v,scrollWidth:f,clientWidth:y}=d.target;a.current&&u>0&&a.current.classList.add("hide"),u===0&&v===0?c.classList.add("scroll-start"):c.classList.remove("scroll-start"),p-u===m&&f-v===y?c.classList.add("scroll-end"):c.classList.remove("scroll-end")};return c.addEventListener("scroll",l),l({target:c}),()=>{c.removeEventListener("scroll",l)}},[o.current]),i.jsxs($6,{children:[i.jsx(Y6,{ref:o,$mobile:s,$height:t,$backgroundColor:n,$mobileDirection:r,children:e}),i.jsx(G6,{ref:a,className:"hide",onClick:()=>{o.current&&o.current.scrollTo({top:o.current.scrollHeight,behavior:"smooth"})},children:i.jsxs("span",{children:[i.jsx(q6,{})," More Available"]})})]})},K6=D(B.div)`
  display: flex;
  gap: 8px;
  position: relative;
  border-radius: 9px;
  margin: 0 auto;
  padding: 10px;
  text-align: left;
  font-size: 14px;
  line-height: 17px;
  font-weight: 400;
  max-width: 260px;
  min-width: 100%;

  border-radius: var(--ck-alert-border-radius, 12px);
  color: var(--ck-alert-color, var(--ck-body-color-muted));
  background: var(--ck-alert-background, var(--ck-body-background-secondary));
  box-shadow: var(--ck-alert-box-shadow, var(--ck-body-box-shadow));

  @media only screen and (max-width: ${xe.mobileWidth}px) {
    padding: 16px;
    font-size: 16px;
    line-height: 21px;
    border-radius: 24px;
    text-align: center;
  }

  ${e=>{if(e)return se`
        color: #fff;
        background: var(--ck-body-color-danger, red);
      `}}
`,X6=D(B.div)`
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  svg {
    display: block;
    width: 100%;
    height: auto;
  }
`,Gn=({children:e,error:t,icon:n})=>i.jsxs(K6,{$error:t,children:[n&&i.jsx(X6,{children:n}),i.jsx("div",{children:e})]});Gn.displayName="Alert";const J6=()=>{const{storage:e}=ts(),[t,n]=M.useState(null);return M.useEffect(()=>{(async()=>{const a=await(e==null?void 0:e.getItem("recentConnectorId"));n(a??"")})()},[]),{lastConnectorId:t,updateLastConnectorId:o=>{e==null||e.setItem("recentConnectorId",o)}}},Q6=()=>{var e;const t=_e(),n=ri(),r=Bs(),{lastConnectorId:o}=J6(),a=ou();let s=r.filter(l=>l.id!==(a==null?void 0:a.id));const c=!((e=t.options)===null||e===void 0)&&e.hideRecentBadge||o==="walletConnect"?s:[...s.filter(l=>o===l.connector.id),...s.filter(l=>o!==l.connector.id)];return i.jsxs(hu,{mobileDirection:"horizontal",children:[c.length===0&&i.jsx(Gn,{error:!0,children:"No connectors found in ConnectKit config."}),c.length>0&&i.jsx(V6,{$mobile:n,$totalResults:c.length,children:c.map(l=>i.jsx(e7,{wallet:l,isRecent:l.id===o},l.id))})]})},e7=({wallet:e,isRecent:t})=>{var n,r,o,a;const{connect:{getUri:s}}=Zs(),c=s(),l=ri(),d=_e(),{connect:u}=ni();let p=!e.isInstalled&&l||e.shouldDeeplinkDesktop&&!l?(n=e.getWalletConnectDeeplink)===null||n===void 0?void 0:n.call(e,c??""):void 0;const m=l&&$n(e.id),v=(zr()==="safari"||zr()==="ios")&&(Po(e.connector.id)||X9(e.connector.id));return(m||v)&&(p=void 0),i.jsxs(Ha,{type:"button",as:p?"a":void 0,href:p||void 0,disabled:d.route!==Q.CONNECTORS,onClick:p?void 0:()=>{m?d.setRoute(Q.MOBILECONNECTORS):(v&&u({connector:e==null?void 0:e.connector}),d.setRoute(Q.CONNECT),d.setConnector({id:e.id}))},children:[i.jsx(Ya,{"data-small":e.iconShouldShrink,"data-shape":e.iconShape,"data-background":m,children:(r=e.iconConnector)!==null&&r!==void 0?r:e.icon}),i.jsxs(Ga,{children:[l&&(o=e.shortName)!==null&&o!==void 0?o:e.name,!(!((a=d.options)===null||a===void 0)&&a.hideRecentBadge)&&t&&i.jsx(uu,{children:i.jsx("span",{children:"Recent"})})]})]})},t7=D(B.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  inset: 0;
  height: 100%;
`,n7=D.button`
  --color: #ffffff;
  --background: var(--ck-aave-brand);
  --box-shadow: var(--ck-primary-button-box-shadow);
  --border-radius: var(--ck-primary-button-border-radius);
  --font-weight: var(--ck-primary-button-font-weight, 500);

  --hover-color: var(--ck-button-primary-hover-color, var(--color));
  --hover-background: var(--ck-aave-brand);
  --hover-box-shadow: var(
    --ck-primary-button-hover-box-shadow,
    var(--box-shadow)
  );
  --hover-border-radius: var(
    --ck-primary-button-hover-border-radius,
    var(--border-radius)
  );
  --hover-font-weight: var(--ck-primary-button-font-weight, var(--font-weight));

  appearance: none;
  cursor: pointer;
  user-select: none;
  min-width: fit-content;
  width: 100%;
  display: block;
  text-align: center;
  height: 48px;
  margin: 18px 0 2px;
  line-height: 48px;
  padding: 0 4px;
  font-size: 16px;
  font-weight: var(--font-weight, 500);
  text-decoration: none;
  white-space: nowrap;
  transition: 100ms ease;
  transition-property: box-shadow, background-color;
  color: var(--color);
  background: var(--background);
  border-radius: var(--border-radius);
  box-shadow: var(--box-shadow);
  will-change: transform, box-shadow, background-color, color;

  &:hover {
    background: var(--hover-background);
  }
`,r7=D.div`
  transform: translateZ(0); // Shifting fix
  position: relative;
  display: inline-block;
  vertical-align: middle;
  max-width: calc(100% - 42px);
  transition: opacity 300ms ease;
`,o7=D.div`
  position: relative;
  display: inline-block;
  vertical-align: middle;
  max-width: 27px;
  max-height: 27px;
  margin: 0 8px 0 0;
  svg {
    display: block;
    position: relative;
    max-width: 100%;
    height: auto;
  }
`,i7=()=>i.jsxs("svg",{width:"27",height:"15",viewBox:"0 0 27 15",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[i.jsx("path",{d:"M9.85405 13.9979C11.3617 13.9979 12.5838 12.7757 12.5838 11.2681C12.5838 9.76047 11.3617 8.5383 9.85405 8.5383C8.34643 8.5383 7.12427 9.76047 7.12427 11.2681C7.12427 12.7757 8.34643 13.9979 9.85405 13.9979Z",fill:"currentColor"}),i.jsx("path",{d:"M16.8534 13.9979C18.3611 13.9979 19.5832 12.7757 19.5832 11.2681C19.5832 9.76047 18.3611 8.5383 16.8534 8.5383C15.3458 8.5383 14.1237 9.76047 14.1237 11.2681C14.1237 12.7757 15.3458 13.9979 16.8534 13.9979Z",fill:"currentColor"}),i.jsx("path",{d:"M13.4193 0C6.00734 0 -0.00193968 6.12375 4.69662e-07 13.6754H3.42824C3.42824 8.01604 7.866 3.42759 13.4193 3.42759C18.9727 3.42759 23.4104 8.01604 23.4104 13.6754H26.8387C26.84 6.12375 20.8307 0 13.4193 0Z",fill:"currentColor"})]}),a7=({onClick:e})=>{const t=De();return i.jsx(n7,{onClick:e,children:i.jsxs(t7,{children:[i.jsx(o7,{children:i.jsx(i7,{})}),i.jsx(r7,{children:i.jsx(st,{children:t.continueWithAave})})]})})},s7=()=>{var e,t,n,r,o;const a=_e(),s=De({}),c=ri(),l=ou();return i.jsx(Je,{style:{width:312,paddingTop:l?32:void 0},children:i.jsxs(F6,{children:[l&&i.jsxs(i.Fragment,{children:[i.jsx(a7,{onClick:()=>{a.setConnector(l),a.setRoute(Q.CONNECT)}}),i.jsx(On,{hideHr:!0,children:s.orSelectWallet})]}),i.jsxs("div",{children:[i.jsx(Q6,{}),c?i.jsx(i.Fragment,{children:i.jsxs(R6,{children:[i.jsxs(Te,{style:{padding:0,textAlign:"left"},children:[i.jsx(Xe,{$small:!0,children:s.connectorsScreen_h1}),i.jsx(Fe,{children:s.connectorsScreen_p})]}),i.jsxs(D6,{children:[!(!((e=a.options)===null||e===void 0)&&e.hideQuestionMarkCTA)&&i.jsx(Pe,{variant:"tertiary",onClick:()=>a.setRoute(Q.ABOUT),children:s.learnMore}),!(!((t=a.options)===null||t===void 0)&&t.hideNoWalletCTA)&&i.jsx(Pe,{variant:"tertiary",onClick:()=>a.setRoute(Q.ONBOARDING),children:s.getWallet})]})]})}):i.jsx(i.Fragment,{children:!(!((n=a.options)===null||n===void 0)&&n.hideNoWalletCTA)&&i.jsx(z6,{children:i.jsxs(B6,{onClick:()=>a.setRoute(Q.ONBOARDING),children:[i.jsx(P6,{})," ",s.connectorsScreen_newcomer]})})}),((r=a.options)===null||r===void 0?void 0:r.disclaimer)&&i.jsx(Rs,{style:{visibility:"hidden",pointerEvents:"none"},children:i.jsx("div",{children:(o=a.options)===null||o===void 0?void 0:o.disclaimer})})]})]})})},qa=D.div`
  text-align: center;
  transition: opacity 100ms ease;
  opacity: ${e=>e.$waiting?.4:1};
`,h1=D.div`
  z-index: 9;
  position: relative;
  margin: 0 auto 10px;
  border-radius: 16px;
  width: 60px;
  height: 60px;
  overflow: hidden;
  background: rgba(0, 0, 0, 0.04);
  ${e=>e.$outline&&`
  &:before {
    content: '';
    z-index: 2;
    position: absolute;
    inset: 0;
    border-radius: inherit;
    box-shadow: inset 0 0 0 1px var(--ck-body-background-tertiary);
  }`}
  svg {
    display: block;
    position: relative;
    width: 100%;
    height: auto;
  }
`,f1=D.div`
  color: var(--ck-body-color);
  font-size: 13px;
  line-height: 15px;
  font-weight: 500;
  opacity: 0.75;
`,c7=ke`
  0%,100% { opacity:1; }
  50% { opacity:0.5; }
`,l7=D.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 22px 8px;
  margin: 0 -10px;
  padding: 4px 0 0;
  transition: opacity 300ms ease;
  ${e=>e.$disabled&&se`
      pointer-events: none;
      opacity: 0.4;
      ${qa} {
        animation: ${c7} 1s infinite ease-in-out;
      }
    `}
`,d7=D.div``;function fu(){const{log:e}=_e(),{connectAsync:t,connectors:n}=ni(),[r,o]=M.useState(!1);return{isOpen:r,open:async()=>{const a=document.createElement("style");a.innerHTML="w3m-modal, wcm-modal{ --wcm-z-index: 2147483647; --w3m-z-index:2147483647; }",document.head.appendChild(a);const s=n.find(c=>$n(c.id));if(s)try{const l=(await s.getProvider()).rpc.projectId,d=Ou({projectId:l,showQrModal:!0});o(!0);try{await t({connector:d})}catch(u){e("WalletConnect",u)}o(!1),document.head.removeChild(a)}catch(c){e("Could not get WalletConnect provider",c)}else e("No WalletConnect connector available")}}}const u7=D(B.div)`
  transition: all 220ms cubic-bezier(0.175, 0.885, 0.32, 1.1);
  display: flex;
  align-items: center;
  justify-content: center;
  width: 16px;
  svg {
    display: block;
  }
  svg,
  svg path,
  svg rect {
    transition: inherit;
  }
  svg path:first-child {
    transform-origin: 50% 50%;
    fill: var(--bg);
    stroke: var(--color);
  }
  svg rect {
    transform-origin: 53% 63%;
    fill: var(--bg);
    stroke: var(--color);
  }
  svg path:last-child {
    opacity: 0;
    stroke: var(--bg);
    transform: translate(11.75px, 10px) rotate(90deg) scale(0.6);
  }
  ${e=>e.$clipboard?se`
          --color: var(--ck-focus-color) !important;
          --bg: var(--ck-body-background);
          svg {
            transition-delay: 0ms;
            path:first-child {
              opacity: 0;
              transform: rotate(-90deg) scale(0.2);
            }
            rect {
              rx: 10px;
              fill: var(--color);
              transform: rotate(-90deg) scale(1.45);
            }
            path:last-child {
              transition-delay: 100ms;
              opacity: 1;
              transform: translate(7.75px, 9.5px);
            }
          }
        `:se`
          &:hover {
          }
          &:hover:active {
          }
        `}
`,g1=({copied:e,small:t})=>i.jsx(u7,{$clipboard:e,children:i.jsx(R8,{style:{transform:t?"scale(1)":"translateX(3px) scale(1.5)",opacity:t||e?1:.3}})}),p7=D.div`
  --color: var(--ck-copytoclipboard-stroke);
  --bg: var(--ck-body-background);
  transition: all 220ms cubic-bezier(0.175, 0.885, 0.32, 1.1);

  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;

  ${e=>e.$disabled?se`
          cursor: not-allowed;
          opacity: 0.4;
        `:se`
          &:hover {
            --color: var(--ck-body-color-muted);
          }
        `}
`,h7=D.div`
  display: block;
  position: relative;
  transition: inherit;
  svg {
    position: absolute;
    left: 100%;
    display: block;
    top: -1px;
    margin: 0;
    margin-left: 4px;
  }
`,$s=({string:e,children:t,variant:n})=>{const[r,o]=M.useState(!1);let a;const s=()=>{if(!e)return;const c=e.trim();navigator.clipboard&&navigator.clipboard.writeText(c),o(!0),clearTimeout(a),a=setTimeout(()=>o(!1),1e3)};return n==="button"?i.jsx(Pe,{disabled:!e,onClick:s,icon:i.jsx(g1,{copied:r}),children:t}):i.jsx(p7,{onClick:s,$disabled:!e,children:i.jsxs(h7,{children:[t,i.jsx(g1,{copied:r,small:!0})]})})},f7=i.jsx("svg",{width:"60",height:"60",viewBox:"0 0 60 60",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:i.jsx("path",{d:"M30 42V19M19 30.5H42",stroke:"var(--ck-body-color-muted)",strokeWidth:"3",strokeLinecap:"round"})}),g7=()=>{var e,t;const n=_e(),r=De(),{connect:{getUri:o}}=Zs(),a=o(),{open:s,isOpen:c}=fu(),l=Bs(),d=(e=Object.keys(Rt).filter(p=>{const m=Rt[p];return!(l.find(v=>v.connector.id===p)||!m.getWalletConnectDeeplink)}))!==null&&e!==void 0?e:[],u=p=>{var m;const v=(m=p.getWalletConnectDeeplink)===null||m===void 0?void 0:m.call(p,a);v&&(window.location.href=v)};return i.jsx(Je,{style:{width:312},children:i.jsxs(d7,{children:[i.jsx(Te,{style:{paddingBottom:0},children:i.jsx(hu,{height:340,children:i.jsxs(l7,{$disabled:!a,children:[d.sort((p,m)=>{var v,f,y,_;const k=Rt[p],x=Rt[m],N=(f=(v=k.name)!==null&&v!==void 0?v:k.shortName)!==null&&f!==void 0?f:p,A=(_=(y=x.name)!==null&&y!==void 0?y:x.shortName)!==null&&_!==void 0?_:m;return N.localeCompare(A)}).filter(p=>!(p==="coinbaseWallet"||p==="com.coinbase.wallet")).map((p,m)=>{const v=Rt[p],{name:f,shortName:y,iconConnector:_,icon:k}=v;return i.jsxs(qa,{onClick:()=>u(v),style:{animationDelay:`${m*50}ms`},children:[i.jsx(h1,{$outline:!0,children:_??k}),i.jsx(f1,{children:y??f})]},m)}),i.jsxs(qa,{onClick:s,$waiting:c,children:[i.jsx(h1,{style:{background:"var(--ck-body-background-secondary)"},children:c?i.jsx("div",{style:{position:"absolute",inset:0,display:"flex",alignItems:"center",justifyContent:"center"},children:i.jsx("div",{style:{width:"50%"},children:i.jsx(au,{})})}):f7}),i.jsx(f1,{children:r.more})]})]})})}),((t=n.options)===null||t===void 0?void 0:t.walletConnectCTA)!=="modal"&&i.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",gap:14,paddingTop:8},children:i.jsx($s,{variant:"button",string:a,children:r.copyToClipboard})})]})})},xn=D(B.div)`
  display: flex;
  flex-direction: column;
  gap: 6px;
  position: relative;
  left: 0;
  right: 0;
  ${Te} {
    padding: 0 8px 32px;
    gap: 12px;
  }
`,ra=2,m7=ke`
  0%{ transform:none; }
  25%{ transform:translateX(${ra}px); }
  50%{ transform:translateX(-${ra}px); }
  75%{ transform:translateX(${ra}px); }
  100%{ transform:none; }
`,v7=ke`
  0%{ opacity:1; }
  100%{ opacity:0; }
`,oa=D(B.div)`
  /*
  background: var(
    --ck-body-background
  ); // To stop the overlay issue during transition for the squircle spinner
  */
`,b7=D(B.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px auto 16px;
  height: 120px;
  //transform: scale(1.001); // fixes shifting issue between states
`,x7=D(B.div)`
  user-select: none;
  position: relative;
  --spinner-error-opacity: 0;
  &:before {
    content: '';
    position: absolute;
    inset: 1px;
    opacity: 0;
    background: var(--ck-body-color-danger);
    ${e=>e.$circle&&se`
        inset: -5px;
        border-radius: 50%;
        background: none;
        box-shadow: inset 0 0 0 3.5px var(--ck-body-color-danger);
      `}
  }
  ${e=>e.$shake&&se`
      animation: ${m7} 220ms ease-out both;
      &:before {
        animation: ${v7} 220ms ease-out 750ms both;
      }
    `}
`,y7=D(B.button)`
  z-index: 5;
  appearance: none;
  position: absolute;
  right: 2px;
  bottom: 2px;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border-radius: 16px;
  cursor: pointer;
  overflow: hidden;
  background: none;

  color: var(--ck-body-background);
  transition: color 200ms ease;
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.15);

  &:before {
    z-index: 3;
    content: '';
    position: absolute;
    inset: 0;
    opacity: 0;
    transition: opacity 200ms ease;
    background: var(--ck-body-color);
  }

  &:hover:before {
    opacity: 0.1;
  }
`,C7=D(B.div)`
  position: absolute;
  inset: 0;

  &:before {
    z-index: 1;
    content: '';
    position: absolute;
    inset: 3px;
    border-radius: 16px;
    background: conic-gradient(
      from 90deg,
      currentColor 10%,
      var(--ck-body-color) 80%
    );
  }

  svg {
    z-index: 2;
    display: block;
    position: relative;
    width: 100%;
    height: 100%;
  }
`,w7=D(B.div)`
  z-index: 2147483647;
  position: fixed;
  inset: 0;
  pointer-events: none;
`,k7=D(B.div)`
  --shadow: var(--ck-tooltip-shadow);
  z-index: 2147483647;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  gap: 8px;
  width: fit-content;
  align-items: center;
  justify-content: center;
  border-radius: var(
    --ck-tooltip-border-radius,
    ${e=>e.$size==="small"?11:14}px
  );
  border-radius: ;
  padding: 10px 16px 10px 12px;
  font-size: 14px;
  line-height: 19px;
  font-weight: 500;
  letter-spacing: -0.1px;
  color: var(--ck-tooltip-color);
  background: var(--ck-tooltip-background);
  box-shadow: var(--shadow);
  > span {
    z-index: 3;
    position: relative;
  }
  > div {
    margin: -4px 0; // offset for icon
  }
  strong {
    color: var(--ck-spinner-color);
  }

  .ck-tt-logo {
    display: inline-block;
    vertical-align: text-bottom;
    height: 1em;
    width: 1.25em;
    svg {
      display: block;
      height: 100%;
      transform: translate(0.5px, -1px) scale(1.75);
    }
  }
`,_7=D(B.div)`
  z-index: 2;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${e=>e.$size==="small"?14:18}px;
  right: 100%;
  top: 0;
  bottom: 0;
  overflow: hidden;
  &:before {
    content: '';
    position: absolute;
    box-shadow: var(--shadow);
    width: ${e=>e.$size==="small"?14:18}px;
    height: ${e=>e.$size==="small"?14:18}px;
    transform: translate(75%, 0) rotate(45deg);
    background: var(--ck-tooltip-background);
    border-radius: ${e=>e.$size==="small"?2:3}px 0 0 0;
  }
`,Hs=({children:e,message:t,open:n,xOffset:r=0,yOffset:o=0,delay:a})=>{var s;const c=_e(),l=ti();if(!((s=c.options)===null||s===void 0)&&s.hideTooltips)return i.jsx(i.Fragment,{children:e});const[d,u]=M.useState(!1),[p,m]=M.useState(!1),[v,f]=M.useState("small"),[y,_]=M.useState(!1),[k]=M.useState(c.route),x=M.useRef(null),[N,A]=As({debounce:y?0:220,offsetSize:!0,scroll:!0}),S=()=>{let h=!1;const g=r+A.left+A.width,b=o+A.top+A.height*.5;return(g>window.innerWidth||g<0||b>window.innerHeight||b<0)&&(h=!0),h};return(typeof window<"u"?M.useLayoutEffect:M.useEffect)(()=>{if(!x.current||A.top+A.bottom+A.left+A.right+A.height+A.width===0)return;const h=r+A.left+A.width,g=o+A.top+A.height*.5;!y&&h!==0&&g!==0&&_(!0),x.current.style.left=`${h}px`,x.current.style.top=`${g}px`,f(x.current.offsetHeight<=40?"small":"large"),m(S())},[A,n,d]),M.useEffect(()=>{c.open||u(!1)},[c.open]),M.useEffect(()=>{u(!!n)},[n]),i.jsxs(i.Fragment,{children:[i.jsx(B.div,{ref:N,style:n===void 0?{cursor:"help"}:{},onHoverStart:()=>u(!0),onHoverEnd:()=>u(!1),onClick:()=>u(!1),children:e}),i.jsx(Fs,{children:i.jsx(Se,{children:k===c.route&&!p&&d&&i.jsx(Hn,{$useTheme:l.theme,$useMode:l.mode,$customTheme:l.customTheme,children:i.jsx(w7,{children:i.jsxs(k7,{role:"tooltip",$size:v,ref:x,initial:"collapsed",animate:y?"open":{},exit:"collapsed",variants:{collapsed:{transformOrigin:"20px 50%",opacity:0,scale:.9,z:.01,y:"-50%",x:20,transition:{duration:.1}},open:{willChange:"opacity,transform",opacity:1,scale:1,z:.01,y:"-50%",x:20,transition:{ease:[.76,0,.24,1],duration:.15,delay:a||.5}}},children:[t,i.jsx(_7,{$size:v})]})})})})})]})},j7=D(B.div)`
  z-index: 4;
  position: relative;
  overflow: hidden;
  svg {
    z-index: 3;
    position: relative;
    display: block;
  }
`,S7=D(B.div)`
  z-index: 2;
  position: absolute;
  overflow: hidden;
  inset: 6px;
  border-radius: 24px;
  background: var(--ck-body-background);
  svg,
  img {
    pointer-events: none;
    display: block;
    width: 100%;
    height: 100%;
  }
`,E7=D(B.div)`
  position: absolute;
  inset: 1px;
  overflow: hidden;
`,I7=D(B.div)`
  pointer-events: none;
  user-select: none;
  z-index: 1;
  position: absolute;
  inset: -25%;
  &:before {
    content: '';
    position: absolute;
    inset: 0;
    background: conic-gradient(
      from -90deg,
      transparent,
      transparent,
      transparent,
      transparent,
      transparent,
      var(--ck-spinner-color)
    );
    animation: rotateSpinner 1200ms linear infinite;
  }
  @keyframes rotateSpinner {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`,N7=({logo:e,connecting:t=!0})=>i.jsxs(j7,{transition:{duration:.5,ease:[.175,.885,.32,.98]},children:[i.jsx(S7,{children:e}),i.jsx(E7,{children:i.jsx(Se,{children:t&&i.jsx(I7,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0,transition:{duration:0}}},"Spinner")})}),i.jsxs("svg",{"aria-hidden":"true",width:"102",height:"102",viewBox:"0 0 102 102",fill:"none",children:[i.jsx("rect",{x:"7.57895",y:"7.57895",width:"86.8421",height:"86.8421",rx:"19.2211",stroke:"black",strokeOpacity:"0.02",strokeWidth:"1.15789"}),i.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M0 0H102V102H0V0ZM7 38.284C7 27.5684 7 22.2106 9.01905 18.0892C10.9522 14.1431 14.1431 10.9522 18.0892 9.01905C22.2106 7 27.5684 7 38.284 7H63.716C74.4316 7 79.7894 7 83.9108 9.01905C87.8569 10.9522 91.0478 14.1431 92.9809 18.0892C95 22.2106 95 27.5684 95 38.284V63.716C95 74.4316 95 79.7894 92.9809 83.9108C91.0478 87.8569 87.8569 91.0478 83.9108 92.9809C79.7894 95 74.4316 95 63.716 95H38.284C27.5684 95 22.2106 95 18.0892 92.9809C14.1431 91.0478 10.9522 87.8569 9.01905 83.9108C7 79.7894 7 74.4316 7 63.716V38.284ZM41.5 0.5H41.4325C34.7246 0.499996 29.6023 0.499994 25.5104 0.823325C21.388 1.14906 18.1839 1.80986 15.3416 3.20227C10.0602 5.78959 5.78959 10.0602 3.20227 15.3416C1.80986 18.1839 1.14906 21.388 0.823325 25.5104C0.499994 29.6023 0.499996 34.7246 0.5 41.4325V41.5V55.5938C0.5 55.6808 0.507407 55.766 0.521624 55.849C0.507407 55.9319 0.5 56.0172 0.5 56.1042V60.5V60.5675C0.499996 67.2754 0.499994 72.3977 0.823325 76.4896C1.14906 80.612 1.80986 83.8161 3.20227 86.6584C5.78959 91.9398 10.0602 96.2104 15.3416 98.7977C18.1839 100.19 21.388 100.851 25.5104 101.177C29.6022 101.5 34.7244 101.5 41.432 101.5H41.4324H41.5H43.4227H60.5H60.5675H60.568C67.2756 101.5 72.3977 101.5 76.4896 101.177C80.612 100.851 83.8161 100.19 86.6584 98.7977C91.9398 96.2104 96.2104 91.9398 98.7977 86.6584C100.19 83.8161 100.851 80.612 101.177 76.4896C101.5 72.3978 101.5 67.2756 101.5 60.568V60.5676V60.5V41.5V41.4324V41.432C101.5 34.7244 101.5 29.6022 101.177 25.5104C100.851 21.388 100.19 18.1839 98.7977 15.3416C96.2104 10.0602 91.9398 5.78959 86.6584 3.20227C83.8161 1.80986 80.612 1.14906 76.4896 0.823325C72.3977 0.499994 67.2754 0.499996 60.5675 0.5H60.5H41.5ZM3.5 56.1042C3.5 56.0172 3.49259 55.9319 3.47838 55.849C3.49259 55.766 3.5 55.6808 3.5 55.5938V41.5C3.5 34.7112 3.50109 29.7068 3.814 25.7467C4.1256 21.8032 4.73946 19.0229 5.89635 16.6614C8.19077 11.9779 11.9779 8.19077 16.6614 5.89635C19.0229 4.73946 21.8032 4.1256 25.7467 3.814C29.7068 3.50109 34.7112 3.5 41.5 3.5H60.5C67.2888 3.5 72.2932 3.50109 76.2533 3.814C80.1968 4.1256 82.977 4.73946 85.3386 5.89635C90.022 8.19077 93.8092 11.9779 96.1036 16.6614C97.2605 19.0229 97.8744 21.8032 98.186 25.7467C98.4989 29.7068 98.5 34.7112 98.5 41.5V60.5C98.5 67.2888 98.4989 72.2932 98.186 76.2533C97.8744 80.1968 97.2605 82.9771 96.1036 85.3386C93.8092 90.022 90.022 93.8092 85.3386 96.1036C82.977 97.2605 80.1968 97.8744 76.2533 98.186C72.2932 98.4989 67.2888 98.5 60.5 98.5H43.4227H41.5C34.7112 98.5 29.7068 98.4989 25.7467 98.186C21.8032 97.8744 19.0229 97.2605 16.6614 96.1036C11.9779 93.8092 8.19077 90.022 5.89635 85.3386C4.73946 82.9771 4.1256 80.1968 3.814 76.2533C3.50109 72.2932 3.5 67.2888 3.5 60.5V56.1042Z",fill:"var(--ck-body-background)"})]})]}),M7=D(B.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 32px;
  max-height: 32px;
  width: 100%;
  height: 100%;
  svg {
    display: block;
    width: 100%;
    height: 100%;
  }
`,A7=i.jsxs("svg",{"aria-hidden":"true",width:20,height:20,viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[i.jsx("g",{filter:"url(#filter0_ii_927_5781)",children:i.jsxs("g",{clipPath:"url(#clip0_927_5781)",children:[i.jsx("path",{d:"M1.58771 0V12.2727H6.06498L10.0002 5.45455H20.0002V0H1.58771Z",fill:"#DB4437"}),i.jsx("path",{d:"M1.58771 0V12.2727H6.06498L10.0002 5.45455H20.0002V0H1.58771Z",fill:"url(#paint0_linear_927_5781)"}),i.jsx("path",{d:"M6.17038 12.2272L1.64538 4.46582L1.57947 4.57946L6.07265 12.284L6.17038 12.2272Z",fill:"black",fillOpacity:"0.15"}),i.jsx("path",{d:"M0 20.0003H9.51932L13.9375 15.5821V12.273H6.0625L0 1.87305V20.0003Z",fill:"#0F9D58"}),i.jsx("path",{d:"M0 20.0003H9.51932L13.9375 15.5821V12.273H6.0625L0 1.87305V20.0003Z",fill:"url(#paint1_linear_927_5781)"}),i.jsx("path",{d:"M13.8412 12.4208L13.7469 12.3662L9.38324 19.9969H9.51392L13.8435 12.4242L13.8412 12.4208Z",fill:"#263238",fillOpacity:"0.15"}),i.jsx("path",{d:"M10.0006 5.45459L13.9381 12.2728L9.51996 20H20.0006V5.45459H10.0006Z",fill:"#FFCD40"}),i.jsx("path",{d:"M10.0006 5.45459L13.9381 12.2728L9.51996 20H20.0006V5.45459H10.0006Z",fill:"url(#paint2_linear_927_5781)"}),i.jsx("path",{d:"M9.9996 5.45459L13.9371 12.2728L9.51892 20H19.9996V5.45459H9.9996Z",fill:"#FFCD40"}),i.jsx("path",{d:"M9.9996 5.45459L13.9371 12.2728L9.51892 20H19.9996V5.45459H9.9996Z",fill:"url(#paint3_linear_927_5781)"}),i.jsx("path",{d:"M1.58691 0V12.2727H6.06419L9.99941 5.45455H19.9994V0H1.58691Z",fill:"#DB4437"}),i.jsx("path",{d:"M1.58691 0V12.2727H6.06419L9.99941 5.45455H19.9994V0H1.58691Z",fill:"url(#paint4_linear_927_5781)"}),i.jsx("path",{d:"M10 5.45459V7.83527L18.9091 5.45459H10Z",fill:"url(#paint5_radial_927_5781)"}),i.jsx("path",{d:"M0 19.9998H9.51932L11.9318 15.9089L13.9375 12.2726H6.0625L0 1.87256V19.9998Z",fill:"#0F9D58"}),i.jsx("path",{d:"M0 19.9998H9.51932L12.1023 15.5112L13.9375 12.2726H6.0625L0 1.87256V19.9998Z",fill:"url(#paint6_linear_927_5781)"}),i.jsx("path",{d:"M1.58771 4.59668L8.09339 11.1012L6.06384 12.2728L1.58771 4.59668Z",fill:"url(#paint7_radial_927_5781)"}),i.jsx("path",{d:"M9.52661 19.9884L11.9084 11.1021L13.938 12.2725L9.52661 19.9884Z",fill:"url(#paint8_radial_927_5781)"}),i.jsx("path",{d:"M10.0003 14.5455C12.5107 14.5455 14.5458 12.5104 14.5458 10C14.5458 7.48966 12.5107 5.45459 10.0003 5.45459C7.48996 5.45459 5.4549 7.48966 5.4549 10C5.4549 12.5104 7.48996 14.5455 10.0003 14.5455Z",fill:"#F1F1F1"}),i.jsx("path",{d:"M9.99995 13.6365C12.0083 13.6365 13.6363 12.0084 13.6363 10.0001C13.6363 7.99183 12.0083 6.36377 9.99995 6.36377C7.99164 6.36377 6.36359 7.99183 6.36359 10.0001C6.36359 12.0084 7.99164 13.6365 9.99995 13.6365Z",fill:"#4285F4"}),i.jsx("path",{d:"M10.0003 5.34082C7.48899 5.34082 5.4549 7.37491 5.4549 9.88628V9.99991C5.4549 7.48855 7.48899 5.45446 10.0003 5.45446H20.0003V5.34082H10.0003Z",fill:"black",fillOpacity:"0.2"}),i.jsx("path",{d:"M13.9318 12.273C13.1455 13.6299 11.6818 14.5458 10 14.5458C8.31818 14.5458 6.85227 13.6299 6.06818 12.273H6.06364L0 1.87305V1.98668L6.06818 12.3867C6.85455 13.7435 8.31818 14.6594 10 14.6594C11.6818 14.6594 13.1455 13.7446 13.9318 12.3867H13.9375V12.273H13.9307H13.9318Z",fill:"white",fillOpacity:"0.1"}),i.jsx("path",{opacity:"0.1",d:"M10.1133 5.45459C10.094 5.45459 10.0758 5.45686 10.0565 5.458C12.5406 5.48868 14.5452 7.50913 14.5452 10C14.5452 12.491 12.5406 14.5114 10.0565 14.5421C10.0758 14.5421 10.094 14.5455 10.1133 14.5455C12.6247 14.5455 14.6588 12.5114 14.6588 10C14.6588 7.48868 12.6247 5.45459 10.1133 5.45459Z",fill:"black"}),i.jsx("path",{d:"M13.9769 12.4204C14.3632 11.7522 14.5871 10.9795 14.5871 10.1522C14.5874 9.68602 14.5157 9.22262 14.3746 8.77832C14.4826 9.16696 14.5451 9.57377 14.5451 9.99764C14.5451 10.8249 14.3212 11.5976 13.9348 12.2658L13.9371 12.2704L9.51892 19.9976H9.65074L13.9769 12.4204Z",fill:"white",fillOpacity:"0.2"}),i.jsx("path",{d:"M10 0.113636C15.5034 0.113636 19.9682 4.56023 20 10.0568C20 10.0375 20.0011 10.0193 20.0011 10C20.0011 4.47727 15.5239 0 10.0011 0C4.47841 0 0 4.47727 0 10C0 10.0193 0.00113639 10.0375 0.00113639 10.0568C0.0318182 4.56023 4.49659 0.113636 10 0.113636Z",fill:"white",fillOpacity:"0.2"}),i.jsx("path",{d:"M10 19.8865C15.5034 19.8865 19.9682 15.4399 20 9.94336C20 9.96268 20.0011 9.98086 20.0011 10.0002C20.0011 15.5229 15.5239 20.0002 10.0011 20.0002C4.47841 20.0002 0 15.5229 0 10.0002C0 9.98086 0.00113639 9.96268 0.00113639 9.94336C0.0318182 15.4399 4.49659 19.8865 10.0011 19.8865H10Z",fill:"black",fillOpacity:"0.15"})]})}),i.jsxs("defs",{children:[i.jsxs("filter",{id:"filter0_ii_927_5781",x:0,y:"-0.235294",width:20,height:"20.4706",filterUnits:"userSpaceOnUse",colorInterpolationFilters:"sRGB",children:[i.jsx("feFlood",{floodOpacity:0,result:"BackgroundImageFix"}),i.jsx("feBlend",{mode:"normal",in:"SourceGraphic",in2:"BackgroundImageFix",result:"shape"}),i.jsx("feColorMatrix",{in:"SourceAlpha",type:"matrix",values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",result:"hardAlpha"}),i.jsx("feOffset",{dy:"0.235294"}),i.jsx("feGaussianBlur",{stdDeviation:"0.235294"}),i.jsx("feComposite",{in2:"hardAlpha",operator:"arithmetic",k2:-1,k3:1}),i.jsx("feColorMatrix",{type:"matrix",values:"0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0"}),i.jsx("feBlend",{mode:"normal",in2:"shape",result:"effect1_innerShadow_927_5781"}),i.jsx("feColorMatrix",{in:"SourceAlpha",type:"matrix",values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",result:"hardAlpha"}),i.jsx("feOffset",{dy:"-0.235294"}),i.jsx("feGaussianBlur",{stdDeviation:"0.235294"}),i.jsx("feComposite",{in2:"hardAlpha",operator:"arithmetic",k2:-1,k3:1}),i.jsx("feColorMatrix",{type:"matrix",values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0"}),i.jsx("feBlend",{mode:"normal",in2:"effect1_innerShadow_927_5781",result:"effect2_innerShadow_927_5781"})]}),i.jsxs("linearGradient",{id:"paint0_linear_927_5781",x1:"2.42521",y1:"7.61591",x2:"8.39112",y2:"4.13068",gradientUnits:"userSpaceOnUse",children:[i.jsx("stop",{stopColor:"#A52714",stopOpacity:"0.6"}),i.jsx("stop",{offset:"0.66",stopColor:"#A52714",stopOpacity:0})]}),i.jsxs("linearGradient",{id:"paint1_linear_927_5781",x1:"11.6932",y1:"17.7844",x2:"5.06136",y2:"13.8981",gradientUnits:"userSpaceOnUse",children:[i.jsx("stop",{stopColor:"#055524",stopOpacity:"0.4"}),i.jsx("stop",{offset:"0.33",stopColor:"#055524",stopOpacity:0})]}),i.jsxs("linearGradient",{id:"paint2_linear_927_5781",x1:"12.9438",y1:"4.75004",x2:"14.6143",y2:"12.0569",gradientUnits:"userSpaceOnUse",children:[i.jsx("stop",{stopColor:"#EA6100",stopOpacity:"0.3"}),i.jsx("stop",{offset:"0.66",stopColor:"#EA6100",stopOpacity:0})]}),i.jsxs("linearGradient",{id:"paint3_linear_927_5781",x1:"12.9428",y1:"4.75004",x2:"14.6132",y2:"12.0569",gradientUnits:"userSpaceOnUse",children:[i.jsx("stop",{stopColor:"#EA6100",stopOpacity:"0.3"}),i.jsx("stop",{offset:"0.66",stopColor:"#EA6100",stopOpacity:0})]}),i.jsxs("linearGradient",{id:"paint4_linear_927_5781",x1:"2.42441",y1:"7.61591",x2:"8.39032",y2:"4.13068",gradientUnits:"userSpaceOnUse",children:[i.jsx("stop",{stopColor:"#A52714",stopOpacity:"0.6"}),i.jsx("stop",{offset:"0.66",stopColor:"#A52714",stopOpacity:0})]}),i.jsxs("radialGradient",{id:"paint5_radial_927_5781",cx:0,cy:0,r:1,gradientUnits:"userSpaceOnUse",gradientTransform:"translate(9.56818 5.44891) scale(9.55455)",children:[i.jsx("stop",{stopColor:"#3E2723",stopOpacity:"0.2"}),i.jsx("stop",{offset:1,stopColor:"#3E2723",stopOpacity:0})]}),i.jsxs("linearGradient",{id:"paint6_linear_927_5781",x1:"11.6932",y1:"17.7839",x2:"5.06136",y2:"13.8976",gradientUnits:"userSpaceOnUse",children:[i.jsx("stop",{stopColor:"#055524",stopOpacity:"0.4"}),i.jsx("stop",{offset:"0.33",stopColor:"#055524",stopOpacity:0})]}),i.jsxs("radialGradient",{id:"paint7_radial_927_5781",cx:0,cy:0,r:1,gradientUnits:"userSpaceOnUse",gradientTransform:"translate(1.57975 4.60463) scale(8.86818)",children:[i.jsx("stop",{stopColor:"#3E2723",stopOpacity:"0.2"}),i.jsx("stop",{offset:1,stopColor:"#3E2723",stopOpacity:0})]}),i.jsxs("radialGradient",{id:"paint8_radial_927_5781",cx:0,cy:0,r:1,gradientUnits:"userSpaceOnUse",gradientTransform:"translate(9.97775 10.0157) scale(9.98523)",children:[i.jsx("stop",{stopColor:"#263238",stopOpacity:"0.2"}),i.jsx("stop",{offset:1,stopColor:"#263238",stopOpacity:0})]}),i.jsx("clipPath",{id:"clip0_927_5781",children:i.jsx("rect",{width:20,height:20,rx:10,fill:"white"})})]})]}),L7=i.jsxs("svg",{"aria-hidden":"true",width:20,height:20,viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[i.jsxs("g",{clipPath:"url(#clip0_927_5847)",children:[i.jsx("path",{d:"M19.011 6.71023C18.5898 5.69685 17.7355 4.60269 17.0665 4.25681C17.5436 5.18063 17.8747 6.17276 18.0481 7.19792L18.0499 7.21417C16.954 4.48315 15.0963 3.38023 13.5782 0.981835C13.5014 0.860539 13.4246 0.738994 13.3498 0.610696C13.3071 0.537418 13.2728 0.471393 13.2431 0.410621C13.1801 0.288713 13.1316 0.159878 13.0985 0.0267267C13.0985 0.0205825 13.0963 0.0146369 13.0923 0.0100242C13.0882 0.00541151 13.0826 0.00245454 13.0765 0.00171737C13.0705 7.85858e-05 13.0642 7.85858e-05 13.0582 0.00171737C13.057 0.00171737 13.055 0.00396821 13.0535 0.0044684C13.052 0.00496859 13.0487 0.00721943 13.0465 0.00821981L13.0502 0.00171737C10.6156 1.42725 9.78901 4.06574 9.71399 5.38624C8.74136 5.45292 7.81141 5.81121 7.04549 6.41437C6.96561 6.34671 6.88212 6.28343 6.79539 6.2248C6.57456 5.45174 6.56514 4.6336 6.76813 3.85566C5.87401 4.28877 5.07954 4.90279 4.43501 5.65884H4.43051C4.04636 5.17191 4.07337 3.5663 4.09538 3.23093C3.98174 3.2766 3.87326 3.33419 3.77176 3.40274C3.43264 3.64477 3.11562 3.91635 2.8244 4.2143C2.49255 4.55075 2.18946 4.91441 1.91831 5.30146V5.30296V5.3012C1.29521 6.18444 0.853213 7.18234 0.617826 8.23731L0.604821 8.30133C0.586564 8.38661 0.52079 8.81377 0.509535 8.90656C0.509535 8.91381 0.508035 8.92056 0.507285 8.92781C0.42244 9.36882 0.369864 9.81542 0.349976 10.2641V10.3141C0.354259 12.7396 1.26772 15.0754 2.91002 16.8604C4.55233 18.6454 6.80415 19.7498 9.22094 19.9556C11.6377 20.1615 14.0439 19.4538 15.9644 17.9723C17.8849 16.4908 19.1803 14.3431 19.5947 11.9532C19.6109 11.8282 19.6242 11.7044 19.6387 11.5781C19.8384 9.92791 19.6222 8.25404 19.01 6.70873L19.011 6.71023ZM7.83928 14.2981C7.88455 14.3198 7.92707 14.3433 7.97358 14.3641L7.98034 14.3684C7.93332 14.3458 7.8863 14.3224 7.83928 14.2981ZM18.0501 7.21692V7.20767L18.0519 7.21792L18.0501 7.21692Z",fill:"url(#paint0_linear_927_5847)"}),i.jsx("path",{d:"M19.0109 6.71026C18.5898 5.69688 17.7354 4.60272 17.0664 4.25684C17.5435 5.18066 17.8746 6.17278 18.0481 7.19794V7.20719L18.0498 7.21745C18.797 9.35551 18.689 11.6997 17.7482 13.7599C16.6373 16.1435 13.9493 18.5867 9.7402 18.4667C5.19349 18.3379 1.18699 14.9629 0.439211 10.5437C0.30291 9.84668 0.439211 9.4933 0.507737 8.92684C0.414265 9.36685 0.362102 9.81463 0.351929 10.2643V10.3144C0.356212 12.7399 1.26967 15.0757 2.91198 16.8607C4.55429 18.6456 6.8061 19.7501 9.2229 19.9559C11.6397 20.1617 14.0458 19.4541 15.9664 17.9725C17.8869 16.491 19.1822 14.3434 19.5966 11.9535C19.6129 11.8284 19.6262 11.7046 19.6407 11.5783C19.8403 9.92819 19.6242 8.25431 19.0119 6.70901L19.0109 6.71026Z",fill:"url(#paint1_radial_927_5847)"}),i.jsx("path",{d:"M19.0109 6.71026C18.5898 5.69688 17.7354 4.60272 17.0664 4.25684C17.5435 5.18066 17.8746 6.17278 18.0481 7.19794V7.20719L18.0498 7.21745C18.797 9.35551 18.689 11.6997 17.7482 13.7599C16.6373 16.1435 13.9493 18.5867 9.7402 18.4667C5.19349 18.3379 1.18699 14.9629 0.439211 10.5437C0.30291 9.84668 0.439211 9.4933 0.507737 8.92684C0.414265 9.36685 0.362102 9.81463 0.351929 10.2643V10.3144C0.356212 12.7399 1.26967 15.0757 2.91198 16.8607C4.55429 18.6456 6.8061 19.7501 9.2229 19.9559C11.6397 20.1617 14.0458 19.4541 15.9664 17.9725C17.8869 16.491 19.1822 14.3434 19.5966 11.9535C19.6129 11.8284 19.6262 11.7046 19.6407 11.5783C19.8403 9.92819 19.6242 8.25431 19.0119 6.70901L19.0109 6.71026Z",fill:"url(#paint2_radial_927_5847)"}),i.jsx("path",{d:"M14.2993 7.84794C14.3203 7.8627 14.3398 7.87745 14.3595 7.89221C14.1161 7.46047 13.813 7.06519 13.4592 6.71802C10.4456 3.70439 12.6696 0.18557 13.0445 0.00550206L13.0483 0C10.6136 1.42553 9.78706 4.06402 9.71204 5.38452C9.82508 5.37677 9.93712 5.36726 10.0527 5.36726C10.9164 5.36893 11.7644 5.59929 12.5103 6.03492C13.2562 6.47055 13.8734 7.09592 14.2993 7.84744V7.84794Z",fill:"url(#paint3_radial_927_5847)"}),i.jsx("path",{d:"M10.0577 8.45061C10.0417 8.6917 9.18992 9.52326 8.89206 9.52326C6.13602 9.52326 5.68835 11.1906 5.68835 11.1906C5.8104 12.5947 6.78877 13.7516 7.97146 14.3618C8.02548 14.3898 8.08025 14.4151 8.13502 14.4399C8.22989 14.4819 8.32476 14.5207 8.41963 14.5564C8.82553 14.7 9.25065 14.7821 9.68085 14.7997C14.5127 15.0263 15.448 9.02257 11.9615 7.27942C12.7839 7.1724 13.6168 7.37463 14.2986 7.84688C13.8727 7.09536 13.2555 6.46999 12.5096 6.03436C11.7637 5.59873 10.9158 5.36837 10.052 5.3667C9.93695 5.3667 9.82441 5.3762 9.71136 5.38396C8.73874 5.45064 7.80879 5.80893 7.04286 6.41209C7.19067 6.53714 7.35748 6.7042 7.70886 7.05058C8.36661 7.69857 10.0535 8.36983 10.0572 8.44861L10.0577 8.45061Z",fill:"url(#paint4_radial_927_5847)"}),i.jsx("path",{d:"M10.0577 8.45061C10.0417 8.6917 9.18992 9.52326 8.89206 9.52326C6.13602 9.52326 5.68835 11.1906 5.68835 11.1906C5.8104 12.5947 6.78877 13.7516 7.97146 14.3618C8.02548 14.3898 8.08025 14.4151 8.13502 14.4399C8.22989 14.4819 8.32476 14.5207 8.41963 14.5564C8.82553 14.7 9.25065 14.7821 9.68085 14.7997C14.5127 15.0263 15.448 9.02257 11.9615 7.27942C12.7839 7.1724 13.6168 7.37463 14.2986 7.84688C13.8727 7.09536 13.2555 6.46999 12.5096 6.03436C11.7637 5.59873 10.9158 5.36837 10.052 5.3667C9.93695 5.3667 9.82441 5.3762 9.71136 5.38396C8.73874 5.45064 7.80879 5.80893 7.04286 6.41209C7.19067 6.53714 7.35748 6.7042 7.70886 7.05058C8.36661 7.69857 10.0535 8.36983 10.0572 8.44861L10.0577 8.45061Z",fill:"url(#paint5_radial_927_5847)"}),i.jsx("path",{d:"M6.59134 6.0923C6.66987 6.14231 6.73464 6.18583 6.79141 6.2251C6.57058 5.45204 6.56117 4.63389 6.76415 3.85596C5.87003 4.28907 5.07556 4.90308 4.43103 5.65913C4.4783 5.65788 5.88432 5.63262 6.59134 6.0923Z",fill:"url(#paint6_radial_927_5847)"}),i.jsx("path",{d:"M0.437567 10.5439C1.1856 14.963 5.19185 18.3393 9.73855 18.4668C13.9476 18.5859 16.6361 16.1425 17.7466 13.7601C18.6873 11.6998 18.7954 9.35569 18.0482 7.21762V7.20837C18.0482 7.20111 18.0467 7.19686 18.0482 7.19911L18.0499 7.21537C18.3938 9.46046 17.2519 11.6345 15.4665 13.1076L15.4609 13.1201C11.9821 15.9536 8.6534 14.8292 7.98064 14.3706C7.93363 14.348 7.88661 14.3246 7.83959 14.3003C5.81158 13.3309 4.97352 11.4842 5.15358 9.89862C4.67218 9.90573 4.19905 9.77307 3.79151 9.51672C3.38397 9.26038 3.05952 8.89134 2.85747 8.45433C3.38987 8.1282 3.99692 7.94382 4.62077 7.91878C5.24461 7.89374 5.86448 8.02887 6.42131 8.31128C7.56906 8.83225 8.87507 8.8836 10.0602 8.45433C10.0564 8.37555 8.36954 7.70405 7.71179 7.05631C7.36041 6.70993 7.1936 6.54312 7.04579 6.41782C6.96591 6.35016 6.88243 6.28688 6.7957 6.22825C6.73818 6.18898 6.6734 6.14647 6.59562 6.09545C5.88861 5.63578 4.48258 5.66104 4.43607 5.66229H4.43156C4.04742 5.17535 4.07443 3.56975 4.09644 3.23438C3.9828 3.28005 3.87431 3.33764 3.77282 3.40619C3.4337 3.64822 3.11667 3.91979 2.82546 4.21774C2.49242 4.55325 2.18808 4.91607 1.91562 5.3024V5.3039V5.30215C1.29252 6.18539 0.850521 7.18329 0.615133 8.23825C0.610381 8.25801 0.266002 9.76357 0.435816 10.5444L0.437567 10.5439Z",fill:"url(#paint7_radial_927_5847)"}),i.jsx("path",{d:"M13.459 6.71761C13.8128 7.06516 14.1159 7.46087 14.3593 7.89305C14.4126 7.93331 14.4624 7.97333 14.5046 8.01209C16.7022 10.0378 15.5508 12.9014 15.465 13.104C17.2502 11.6332 18.3911 9.45763 18.0485 7.21179C16.952 4.47826 15.0923 3.37535 13.5768 0.976952C13.5 0.855657 13.4232 0.734111 13.3484 0.605813C13.3057 0.532535 13.2714 0.466511 13.2417 0.405738C13.1787 0.283831 13.1302 0.154995 13.0971 0.0218439C13.0971 0.0156997 13.0949 0.0097541 13.0909 0.0051414C13.0868 0.000528701 13.0812 -0.00242828 13.0751 -0.00316545C13.0691 -0.00480423 13.0628 -0.00480423 13.0568 -0.00316545C13.0556 -0.00316545 13.0536 -0.000914601 13.0521 -0.000414413C13.0506 8.57743e-05 13.0473 0.00233662 13.0451 0.00333699C12.6702 0.181154 10.4466 3.70222 13.4602 6.71335L13.459 6.71761Z",fill:"url(#paint8_radial_927_5847)"}),i.jsx("path",{d:"M14.5043 8.01315C14.462 7.97439 14.4122 7.93437 14.359 7.8941C14.3392 7.87935 14.3197 7.86459 14.2987 7.84984C13.6169 7.37759 12.784 7.17536 11.9616 7.28238C15.4479 9.02553 14.5125 15.0278 9.68095 14.8027C9.25075 14.785 8.82562 14.703 8.41973 14.5594C8.32486 14.5238 8.22999 14.485 8.13512 14.4428C8.08035 14.4178 8.02558 14.3928 7.97156 14.3648L7.97831 14.369C8.65206 14.829 11.9798 15.9526 15.4586 13.1186L15.4641 13.1061C15.5509 12.9035 16.7023 10.0399 14.5038 8.01415L14.5043 8.01315Z",fill:"url(#paint9_radial_927_5847)"}),i.jsx("path",{d:"M5.68842 11.1892C5.68842 11.1892 6.13583 9.52179 8.89212 9.52179C9.18998 9.52179 10.0425 8.69023 10.0578 8.44914C8.8727 8.8784 7.56669 8.82706 6.41894 8.30608C5.86211 8.02367 5.24224 7.88855 4.61839 7.91359C3.99455 7.93863 3.3875 8.123 2.8551 8.44914C3.05715 8.88615 3.3816 9.25518 3.78914 9.51153C4.19668 9.76787 4.66981 9.90053 5.15121 9.89343C4.97165 11.4783 5.80946 13.3247 7.83722 14.2951C7.88249 14.3168 7.925 14.3403 7.97152 14.3611C6.78783 13.7496 5.81046 12.5932 5.68842 11.1899V11.1892Z",fill:"url(#paint10_radial_927_5847)"}),i.jsx("path",{d:"M19.0112 6.71023C18.59 5.69685 17.7357 4.60269 17.0667 4.25681C17.5438 5.18063 17.8749 6.17276 18.0483 7.19792L18.0501 7.21417C16.9542 4.48315 15.0965 3.38023 13.5784 0.981835C13.5016 0.860539 13.4249 0.738994 13.3501 0.610696C13.3073 0.537418 13.2731 0.471393 13.2433 0.410621C13.1803 0.288713 13.1318 0.159878 13.0987 0.0267267C13.0988 0.0205825 13.0966 0.0146369 13.0925 0.0100242C13.0884 0.00541151 13.0828 0.00245454 13.0767 0.00171737C13.0708 7.85859e-05 13.0644 7.85859e-05 13.0585 0.00171737C13.0572 0.00171737 13.0552 0.00396821 13.0537 0.0044684C13.0522 0.00496859 13.049 0.00721943 13.0467 0.00821981L13.0505 0.00171737C10.6158 1.42725 9.78925 4.06574 9.71422 5.38624C9.82726 5.37848 9.9393 5.36898 10.0548 5.36898C10.9186 5.37065 11.7666 5.60101 12.5125 6.03664C13.2584 6.47227 13.8756 7.09764 14.3014 7.84916C13.6196 7.37691 12.7868 7.17468 11.9643 7.2817C15.4506 9.02485 14.5153 15.0271 9.68371 14.802C9.25351 14.7843 8.82838 14.7023 8.42248 14.5587C8.32761 14.5232 8.23275 14.4843 8.13788 14.4421C8.08311 14.4171 8.02834 14.3921 7.97432 14.3641L7.98107 14.3684C7.93405 14.3458 7.88703 14.3224 7.84002 14.2981C7.88528 14.3198 7.9278 14.3433 7.97432 14.3641C6.79062 13.7524 5.81326 12.5959 5.69121 11.1929C5.69121 11.1929 6.13863 9.52554 8.89491 9.52554C9.19277 9.52554 10.0453 8.69398 10.0606 8.45289C10.0568 8.37411 8.36996 7.7026 7.71222 7.05486C7.36084 6.70848 7.19402 6.54167 7.04622 6.41637C6.96634 6.34871 6.88285 6.28543 6.79612 6.2268C6.57529 5.45374 6.56588 4.6356 6.76886 3.85766C5.87474 4.29077 5.08027 4.90479 4.43574 5.66084H4.43124C4.04709 5.17391 4.0741 3.5683 4.09611 3.23293C3.98247 3.2786 3.87399 3.33619 3.77249 3.40474C3.43337 3.64677 3.11635 3.91835 2.82514 4.2163C2.49328 4.55275 2.19019 4.91641 1.91905 5.30345V5.30496V5.30321C1.29595 6.18644 0.853946 7.18434 0.618558 8.23931L0.605554 8.30333C0.587297 8.38861 0.505516 8.82177 0.493762 8.91481C0.418959 9.36194 0.371188 9.81318 0.350708 10.2661V10.3161C0.354992 12.7416 1.26845 15.0774 2.91076 16.8624C4.55307 18.6474 6.80488 19.7518 9.22168 19.9576C11.6385 20.1635 14.0446 19.4558 15.9652 17.9743C17.8857 16.4928 19.181 14.3451 19.5954 11.9552C19.6117 11.8302 19.6249 11.7064 19.6394 11.5801C19.8391 9.92991 19.623 8.25604 19.0107 6.71073L19.0112 6.71023ZM18.0496 7.20817L18.0513 7.21842L18.0496 7.20817Z",fill:"url(#paint11_linear_927_5847)"})]}),i.jsxs("defs",{children:[i.jsxs("linearGradient",{id:"paint0_linear_927_5847",x1:"17.728",y1:"3.09786",x2:"1.63621",y2:"18.6237",gradientUnits:"userSpaceOnUse",children:[i.jsx("stop",{offset:"0.048",stopColor:"#FFF44F"}),i.jsx("stop",{offset:"0.111",stopColor:"#FFE847"}),i.jsx("stop",{offset:"0.225",stopColor:"#FFC830"}),i.jsx("stop",{offset:"0.368",stopColor:"#FF980E"}),i.jsx("stop",{offset:"0.401",stopColor:"#FF8B16"}),i.jsx("stop",{offset:"0.462",stopColor:"#FF672A"}),i.jsx("stop",{offset:"0.534",stopColor:"#FF3647"}),i.jsx("stop",{offset:"0.705",stopColor:"#E31587"})]}),i.jsxs("radialGradient",{id:"paint1_radial_927_5847",cx:0,cy:0,r:1,gradientUnits:"userSpaceOnUse",gradientTransform:"translate(17.1052 2.25108) scale(20.2076)",children:[i.jsx("stop",{offset:"0.129",stopColor:"#FFBD4F"}),i.jsx("stop",{offset:"0.186",stopColor:"#FFAC31"}),i.jsx("stop",{offset:"0.247",stopColor:"#FF9D17"}),i.jsx("stop",{offset:"0.283",stopColor:"#FF980E"}),i.jsx("stop",{offset:"0.403",stopColor:"#FF563B"}),i.jsx("stop",{offset:"0.467",stopColor:"#FF3750"}),i.jsx("stop",{offset:"0.71",stopColor:"#F5156C"}),i.jsx("stop",{offset:"0.782",stopColor:"#EB0878"}),i.jsx("stop",{offset:"0.86",stopColor:"#E50080"})]}),i.jsxs("radialGradient",{id:"paint2_radial_927_5847",cx:0,cy:0,r:1,gradientUnits:"userSpaceOnUse",gradientTransform:"translate(9.6024 10.5042) scale(20.2076)",children:[i.jsx("stop",{offset:"0.3",stopColor:"#960E18"}),i.jsx("stop",{offset:"0.351",stopColor:"#B11927",stopOpacity:"0.74"}),i.jsx("stop",{offset:"0.435",stopColor:"#DB293D",stopOpacity:"0.343"}),i.jsx("stop",{offset:"0.497",stopColor:"#F5334B",stopOpacity:"0.094"}),i.jsx("stop",{offset:"0.53",stopColor:"#FF3750",stopOpacity:0})]}),i.jsxs("radialGradient",{id:"paint3_radial_927_5847",cx:0,cy:0,r:1,gradientUnits:"userSpaceOnUse",gradientTransform:"translate(12.1034 -2.25084) scale(14.638)",children:[i.jsx("stop",{offset:"0.132",stopColor:"#FFF44F"}),i.jsx("stop",{offset:"0.252",stopColor:"#FFDC3E"}),i.jsx("stop",{offset:"0.506",stopColor:"#FF9D12"}),i.jsx("stop",{offset:"0.526",stopColor:"#FF980E"})]}),i.jsxs("radialGradient",{id:"paint4_radial_927_5847",cx:0,cy:0,r:1,gradientUnits:"userSpaceOnUse",gradientTransform:"translate(7.35173 15.7558) scale(9.62111)",children:[i.jsx("stop",{offset:"0.353",stopColor:"#3A8EE6"}),i.jsx("stop",{offset:"0.472",stopColor:"#5C79F0"}),i.jsx("stop",{offset:"0.669",stopColor:"#9059FF"}),i.jsx("stop",{offset:1,stopColor:"#C139E6"})]}),i.jsxs("radialGradient",{id:"paint5_radial_927_5847",cx:0,cy:0,r:1,gradientUnits:"userSpaceOnUse",gradientTransform:"translate(10.5799 8.76923) rotate(-13.5916) scale(5.10194 5.97309)",children:[i.jsx("stop",{offset:"0.206",stopColor:"#9059FF",stopOpacity:0}),i.jsx("stop",{offset:"0.278",stopColor:"#8C4FF3",stopOpacity:"0.064"}),i.jsx("stop",{offset:"0.747",stopColor:"#7716A8",stopOpacity:"0.45"}),i.jsx("stop",{offset:"0.975",stopColor:"#6E008B",stopOpacity:"0.6"})]}),i.jsxs("radialGradient",{id:"paint6_radial_927_5847",cx:0,cy:0,r:1,gradientUnits:"userSpaceOnUse",gradientTransform:"translate(9.35238 1.50057) scale(6.9226)",children:[i.jsx("stop",{stopColor:"#FFE226"}),i.jsx("stop",{offset:"0.121",stopColor:"#FFDB27"}),i.jsx("stop",{offset:"0.295",stopColor:"#FFC82A"}),i.jsx("stop",{offset:"0.502",stopColor:"#FFA930"}),i.jsx("stop",{offset:"0.732",stopColor:"#FF7E37"}),i.jsx("stop",{offset:"0.792",stopColor:"#FF7139"})]}),i.jsxs("radialGradient",{id:"paint7_radial_927_5847",cx:0,cy:0,r:1,gradientUnits:"userSpaceOnUse",gradientTransform:"translate(14.8545 -3.00121) scale(29.5361)",children:[i.jsx("stop",{offset:"0.113",stopColor:"#FFF44F"}),i.jsx("stop",{offset:"0.456",stopColor:"#FF980E"}),i.jsx("stop",{offset:"0.622",stopColor:"#FF5634"}),i.jsx("stop",{offset:"0.716",stopColor:"#FF3647"}),i.jsx("stop",{offset:"0.904",stopColor:"#E31587"})]}),i.jsxs("radialGradient",{id:"paint8_radial_927_5847",cx:0,cy:0,r:1,gradientUnits:"userSpaceOnUse",gradientTransform:"translate(12.3996 -1.36343) rotate(83.976) scale(21.6445 14.2051)",children:[i.jsx("stop",{stopColor:"#FFF44F"}),i.jsx("stop",{offset:"0.06",stopColor:"#FFE847"}),i.jsx("stop",{offset:"0.168",stopColor:"#FFC830"}),i.jsx("stop",{offset:"0.304",stopColor:"#FF980E"}),i.jsx("stop",{offset:"0.356",stopColor:"#FF8B16"}),i.jsx("stop",{offset:"0.455",stopColor:"#FF672A"}),i.jsx("stop",{offset:"0.57",stopColor:"#FF3647"}),i.jsx("stop",{offset:"0.737",stopColor:"#E31587"})]}),i.jsxs("radialGradient",{id:"paint9_radial_927_5847",cx:0,cy:0,r:1,gradientUnits:"userSpaceOnUse",gradientTransform:"translate(9.35233 4.00165) scale(18.4369)",children:[i.jsx("stop",{offset:"0.137",stopColor:"#FFF44F"}),i.jsx("stop",{offset:"0.48",stopColor:"#FF980E"}),i.jsx("stop",{offset:"0.592",stopColor:"#FF5634"}),i.jsx("stop",{offset:"0.655",stopColor:"#FF3647"}),i.jsx("stop",{offset:"0.904",stopColor:"#E31587"})]}),i.jsxs("radialGradient",{id:"paint10_radial_927_5847",cx:0,cy:0,r:1,gradientUnits:"userSpaceOnUse",gradientTransform:"translate(14.1041 5.00184) scale(20.1801)",children:[i.jsx("stop",{offset:"0.094",stopColor:"#FFF44F"}),i.jsx("stop",{offset:"0.231",stopColor:"#FFE141"}),i.jsx("stop",{offset:"0.509",stopColor:"#FFAF1E"}),i.jsx("stop",{offset:"0.626",stopColor:"#FF980E"})]}),i.jsxs("linearGradient",{id:"paint11_linear_927_5847",x1:"17.5331",y1:"3.01533",x2:"3.84302",y2:"16.708",gradientUnits:"userSpaceOnUse",children:[i.jsx("stop",{offset:"0.167",stopColor:"#FFF44F",stopOpacity:"0.8"}),i.jsx("stop",{offset:"0.266",stopColor:"#FFF44F",stopOpacity:"0.634"}),i.jsx("stop",{offset:"0.489",stopColor:"#FFF44F",stopOpacity:"0.217"}),i.jsx("stop",{offset:"0.6",stopColor:"#FFF44F",stopOpacity:0})]}),i.jsx("clipPath",{id:"clip0_927_5847",children:i.jsx("rect",{width:20,height:20,fill:"white"})})]})]});i.jsxs("svg",{"aria-hidden":"true",width:20,height:20,viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[i.jsx("path",{d:"M17.2924 5.22043L17.7256 4.15905L16.4982 2.8883C15.8339 2.22404 14.4187 2.61393 14.4187 2.61393L12.8158 0.794434H7.16242L5.55231 2.62115C5.55231 2.62115 4.13715 2.23848 3.47289 2.8883L2.24545 4.15183L2.67866 5.21321L2.13715 6.78721L3.9422 13.6681C4.31765 15.141 4.57036 15.7114 5.63173 16.4623L8.93137 18.7006C9.24906 18.8955 9.63895 19.2349 9.99274 19.2349C10.3465 19.2349 10.7364 18.8955 11.0541 18.7006L14.3538 16.4623C15.4151 15.7114 15.6678 15.141 16.0433 13.6681L17.8483 6.78721L17.2924 5.22043Z",fill:"url(#paint0_linear_927_5861)"}),i.jsx("path",{d:"M13.9711 3.78343C13.9711 3.78343 16.0433 6.28884 16.0433 6.81592C16.0433 7.35744 15.7834 7.49462 15.5234 7.77621L13.9711 9.43686C13.8267 9.58126 13.5162 9.82675 13.6967 10.2527C13.8772 10.686 14.1299 11.2203 13.8411 11.769C13.5523 12.3249 13.0469 12.6932 12.722 12.6354C12.2387 12.4786 11.7777 12.2602 11.3502 11.9856C11.0758 11.8051 10.1949 11.0758 10.1949 10.7943C10.1949 10.5127 11.1047 10 11.278 9.89895C11.444 9.78343 12.2166 9.33577 12.231 9.16249C12.2455 8.9892 12.2455 8.94588 12.0144 8.51267C11.7834 8.07946 11.379 7.50184 11.4368 7.12639C11.509 6.75094 12.1588 6.54877 12.6426 6.36827L14.1372 5.80509C14.2527 5.74733 14.2238 5.69679 13.8772 5.66068C13.5307 5.6318 12.5559 5.50184 12.1155 5.62458C11.6751 5.74733 10.9386 5.93505 10.8664 6.03614C10.8086 6.13722 10.7509 6.13722 10.8159 6.48379L11.2346 8.75816C11.2635 9.04697 11.3213 9.24191 11.018 9.31411C10.7003 9.38632 10.1733 9.50906 9.99276 9.50906C9.81225 9.50906 9.27796 9.38632 8.96749 9.31411C8.65702 9.24191 8.71478 9.04697 8.75088 8.75816C8.77976 8.46935 9.09745 6.82314 9.16243 6.48379C9.23464 6.13722 9.16965 6.13722 9.11189 6.03614C9.03969 5.93505 8.29601 5.74733 7.85558 5.62458C7.42236 5.50184 6.44041 5.6318 6.09384 5.66791C5.74727 5.69679 5.71839 5.74011 5.83391 5.81231L7.3285 6.36827C7.80503 6.54877 8.46929 6.75094 8.53428 7.12639C8.60648 7.50906 8.19493 8.07946 7.95666 8.51267C7.71839 8.94588 7.72561 8.9892 7.74005 9.16249C7.75449 9.33577 8.53428 9.78343 8.69312 9.89895C8.86641 10.0073 9.77615 10.5127 9.77615 10.7943C9.77615 11.0758 8.91695 11.8051 8.62814 11.9856C8.20063 12.2602 7.73957 12.4786 7.2563 12.6354C6.93139 12.6932 6.42597 12.3249 6.12994 11.769C5.84113 11.2203 6.10106 10.686 6.27435 10.2527C6.45485 9.81953 6.1516 9.58848 5.99998 9.43686L4.44763 7.77621C4.19493 7.50906 3.935 7.36466 3.935 6.83036C3.935 6.29606 6.0072 3.79787 6.0072 3.79787L7.97832 4.11556C8.20937 4.11556 8.722 3.92061 9.19132 3.75455C9.66063 3.61014 9.98554 3.5957 9.98554 3.5957C9.98554 3.5957 10.3032 3.5957 10.7798 3.75455C11.2563 3.91339 11.7617 4.11556 11.9928 4.11556C12.231 4.11556 13.9783 3.77621 13.9783 3.77621L13.9711 3.78343ZM12.4188 13.3719C12.5487 13.4441 12.4693 13.6029 12.3465 13.6896L10.5126 15.1192C10.3682 15.2636 10.1372 15.4802 9.98554 15.4802C9.83391 15.4802 9.61009 15.2636 9.45846 15.1192C8.8506 14.6351 8.23683 14.1586 7.61731 13.6896C7.50178 13.6029 7.42236 13.4513 7.54511 13.3719L8.62814 12.7943C9.05864 12.5665 9.51417 12.3897 9.98554 12.2672C10.0938 12.2672 10.7798 12.5127 11.3357 12.7943L12.4188 13.3719Z",fill:"white"}),i.jsx("path",{d:"M14.4332 2.62115L12.8159 0.794434H7.16243L5.55232 2.62115C5.55232 2.62115 4.13716 2.23848 3.4729 2.8883C3.4729 2.8883 5.35016 2.72223 5.99998 3.77638L7.99276 4.11573C8.2238 4.11573 8.73644 3.92079 9.20575 3.75472C9.67507 3.61032 9.99998 3.59588 9.99998 3.59588C9.99998 3.59588 10.3177 3.59588 10.7942 3.75472C11.2707 3.91357 11.7761 4.11573 12.0072 4.11573C12.2455 4.11573 13.9928 3.77638 13.9928 3.77638C14.6426 2.72223 16.5198 2.8883 16.5198 2.8883C15.8556 2.22404 14.4404 2.61393 14.4404 2.61393",fill:"url(#paint1_linear_927_5861)"}),i.jsxs("defs",{children:[i.jsxs("linearGradient",{id:"paint0_linear_927_5861",x1:"2.13715",y1:"10.1991",x2:"17.8483",y2:"10.1991",gradientUnits:"userSpaceOnUse",children:[i.jsx("stop",{offset:"0.4",stopColor:"#FF5500"}),i.jsx("stop",{offset:"0.6",stopColor:"#FF2000"})]}),i.jsxs("linearGradient",{id:"paint1_linear_927_5861",x1:"3.73384",y1:"2.4883",x2:"16.5198",y2:"2.4883",gradientUnits:"userSpaceOnUse",children:[i.jsx("stop",{stopColor:"#FF452A"}),i.jsx("stop",{offset:1,stopColor:"#FF2000"})]})]})]});const T7=i.jsxs("svg",{"aria-hidden":"true",width:20,height:20,viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[i.jsxs("g",{clipPath:"url(#clip0_927_5865)",children:[i.jsx("path",{d:"M18.0547 14.8828C17.7865 15.0222 17.5099 15.1448 17.2266 15.25C16.3293 15.584 15.3792 15.7533 14.4219 15.75C10.7266 15.75 7.50781 13.2109 7.50781 9.94531C7.51262 9.50803 7.63385 9.07993 7.85905 8.70506C8.08424 8.33019 8.40526 8.0221 8.78906 7.8125C5.44531 7.95312 4.58594 11.4375 4.58594 13.4766C4.58594 19.2578 9.90625 19.8359 11.0547 19.8359C11.6719 19.8359 12.6016 19.6562 13.1641 19.4766L13.2656 19.4453C15.4183 18.7014 17.2534 17.2465 18.4688 15.3203C18.5041 15.2618 18.5192 15.1933 18.5119 15.1253C18.5046 15.0574 18.4752 14.9937 18.4282 14.944C18.3812 14.8944 18.3192 14.8615 18.2518 14.8505C18.1843 14.8394 18.1151 14.8508 18.0547 14.8828Z",fill:"url(#paint0_linear_927_5865)"}),i.jsx("path",{opacity:"0.35",d:"M18.0547 14.8828C17.7865 15.0222 17.5099 15.1448 17.2266 15.25C16.3293 15.584 15.3792 15.7533 14.4219 15.75C10.7266 15.75 7.50781 13.2109 7.50781 9.94531C7.51262 9.50803 7.63385 9.07993 7.85905 8.70506C8.08424 8.33019 8.40526 8.0221 8.78906 7.8125C5.44531 7.95312 4.58594 11.4375 4.58594 13.4766C4.58594 19.2578 9.90625 19.8359 11.0547 19.8359C11.6719 19.8359 12.6016 19.6562 13.1641 19.4766L13.2656 19.4453C15.4183 18.7014 17.2534 17.2465 18.4688 15.3203C18.5041 15.2618 18.5192 15.1933 18.5119 15.1253C18.5046 15.0574 18.4752 14.9937 18.4282 14.944C18.3812 14.8944 18.3192 14.8615 18.2518 14.8505C18.1843 14.8394 18.1151 14.8508 18.0547 14.8828Z",fill:"url(#paint1_radial_927_5865)"}),i.jsx("path",{d:"M8.2578 18.8516C7.56239 18.4196 6.95961 17.854 6.48436 17.1875C5.94166 16.4447 5.56809 15.5921 5.38987 14.6896C5.21165 13.787 5.23311 12.8565 5.45272 11.9631C5.67234 11.0697 6.08479 10.2353 6.66115 9.51826C7.23751 8.80123 7.96379 8.21903 8.78905 7.8125C9.03905 7.69531 9.45311 7.49219 10.0078 7.5C10.3981 7.50302 10.7824 7.59627 11.1308 7.77245C11.4791 7.94864 11.7819 8.20299 12.0156 8.51562C12.3299 8.93835 12.5023 9.4498 12.5078 9.97656C12.5078 9.96094 14.4219 3.75781 6.2578 3.75781C2.82811 3.75781 0.00780015 7.00781 0.00780015 9.86719C-0.00584162 11.3776 0.317079 12.8721 0.953112 14.2422C1.99473 16.4602 3.81447 18.2185 6.06689 19.1834C8.3193 20.1483 10.8476 20.2526 13.1719 19.4766C12.3576 19.7337 11.4972 19.811 10.6501 19.7031C9.80297 19.5952 8.98941 19.3047 8.26561 18.8516H8.2578Z",fill:"url(#paint2_linear_927_5865)"}),i.jsx("path",{opacity:"0.41",d:"M8.2578 18.8516C7.56239 18.4196 6.95961 17.854 6.48436 17.1875C5.94166 16.4447 5.56809 15.5921 5.38987 14.6896C5.21165 13.787 5.23311 12.8565 5.45272 11.9631C5.67234 11.0697 6.08479 10.2353 6.66115 9.51826C7.23751 8.80123 7.96379 8.21903 8.78905 7.8125C9.03905 7.69531 9.45311 7.49219 10.0078 7.5C10.3981 7.50302 10.7824 7.59627 11.1308 7.77245C11.4791 7.94864 11.7819 8.20299 12.0156 8.51562C12.3299 8.93835 12.5023 9.4498 12.5078 9.97656C12.5078 9.96094 14.4219 3.75781 6.2578 3.75781C2.82811 3.75781 0.00780015 7.00781 0.00780015 9.86719C-0.00584162 11.3776 0.317079 12.8721 0.953112 14.2422C1.99473 16.4602 3.81447 18.2185 6.06689 19.1834C8.3193 20.1483 10.8476 20.2526 13.1719 19.4766C12.3576 19.7337 11.4972 19.811 10.6501 19.7031C9.80297 19.5952 8.98941 19.3047 8.26561 18.8516H8.2578Z",fill:"url(#paint3_radial_927_5865)"}),i.jsx("path",{d:"M11.9062 11.625C11.8359 11.7031 11.6406 11.8203 11.6406 12.0625C11.6406 12.2656 11.7734 12.4688 12.0156 12.6328C13.1328 13.4141 15.25 13.3047 15.2578 13.3047C16.0907 13.3041 16.9081 13.0802 17.625 12.6562C18.3467 12.2341 18.9456 11.6307 19.3622 10.9057C19.7788 10.1808 19.9986 9.35955 20 8.52344C20.0234 6.77344 19.375 5.60937 19.1172 5.09375C17.4531 1.85937 13.8828 4.89564e-08 10 4.89564e-08C7.37202 -0.00025981 4.84956 1.03398 2.97819 2.87904C1.10682 4.7241 0.0369559 7.23166 0 9.85938C0.0390625 7.00781 2.875 4.70312 6.25 4.70312C6.52344 4.70312 8.08594 4.72656 9.53125 5.48438C10.5466 5.98895 11.3875 6.78627 11.9453 7.77344C12.4219 8.60156 12.5078 9.65625 12.5078 10.0781C12.5078 10.5 12.2969 11.1172 11.8984 11.6328L11.9062 11.625Z",fill:"url(#paint4_radial_927_5865)"}),i.jsx("path",{d:"M11.9062 11.625C11.8359 11.7031 11.6406 11.8203 11.6406 12.0625C11.6406 12.2656 11.7734 12.4688 12.0156 12.6328C13.1328 13.4141 15.25 13.3047 15.2578 13.3047C16.0907 13.3041 16.9081 13.0802 17.625 12.6562C18.3467 12.2341 18.9456 11.6307 19.3622 10.9057C19.7788 10.1808 19.9986 9.35955 20 8.52344C20.0234 6.77344 19.375 5.60937 19.1172 5.09375C17.4531 1.85937 13.8828 4.89564e-08 10 4.89564e-08C7.37202 -0.00025981 4.84956 1.03398 2.97819 2.87904C1.10682 4.7241 0.0369559 7.23166 0 9.85938C0.0390625 7.00781 2.875 4.70312 6.25 4.70312C6.52344 4.70312 8.08594 4.72656 9.53125 5.48438C10.5466 5.98895 11.3875 6.78627 11.9453 7.77344C12.4219 8.60156 12.5078 9.65625 12.5078 10.0781C12.5078 10.5 12.2969 11.1172 11.8984 11.6328L11.9062 11.625Z",fill:"url(#paint5_radial_927_5865)"})]}),i.jsxs("defs",{children:[i.jsxs("linearGradient",{id:"paint0_linear_927_5865",x1:"4.58594",y1:"13.8281",x2:"18.5234",y2:"13.8281",gradientUnits:"userSpaceOnUse",children:[i.jsx("stop",{stopColor:"#0C59A4"}),i.jsx("stop",{offset:1,stopColor:"#114A8B"})]}),i.jsxs("radialGradient",{id:"paint1_radial_927_5865",cx:0,cy:0,r:1,gradientUnits:"userSpaceOnUse",gradientTransform:"translate(12.2813 13.9332) scale(7.45313 7.08047)",children:[i.jsx("stop",{offset:"0.7",stopOpacity:0}),i.jsx("stop",{offset:"0.9",stopOpacity:"0.5"}),i.jsx("stop",{offset:1})]}),i.jsxs("linearGradient",{id:"paint2_linear_927_5865",x1:"11.9297",y1:"7.78125",x2:"3.23436",y2:"17.2578",gradientUnits:"userSpaceOnUse",children:[i.jsx("stop",{stopColor:"#1B9DE2"}),i.jsx("stop",{offset:"0.2",stopColor:"#1595DF"}),i.jsx("stop",{offset:"0.7",stopColor:"#0680D7"}),i.jsx("stop",{offset:1,stopColor:"#0078D4"})]}),i.jsxs("radialGradient",{id:"paint3_radial_927_5865",cx:0,cy:0,r:1,gradientUnits:"userSpaceOnUse",gradientTransform:"translate(5.51209 15.5419) rotate(-81.3844) scale(11.202 9.05011)",children:[i.jsx("stop",{offset:"0.8",stopOpacity:0}),i.jsx("stop",{offset:"0.9",stopOpacity:"0.5"}),i.jsx("stop",{offset:1})]}),i.jsxs("radialGradient",{id:"paint4_radial_927_5865",cx:0,cy:0,r:1,gradientUnits:"userSpaceOnUse",gradientTransform:"translate(2.02266 3.69656) rotate(92.2906) scale(15.8251 33.7043)",children:[i.jsx("stop",{stopColor:"#35C1F1"}),i.jsx("stop",{offset:"0.1",stopColor:"#34C1ED"}),i.jsx("stop",{offset:"0.2",stopColor:"#2FC2DF"}),i.jsx("stop",{offset:"0.3",stopColor:"#2BC3D2"}),i.jsx("stop",{offset:"0.7",stopColor:"#36C752"})]}),i.jsxs("radialGradient",{id:"paint5_radial_927_5865",cx:0,cy:0,r:1,gradientUnits:"userSpaceOnUse",gradientTransform:"translate(18.7547 6.03906) rotate(73.7398) scale(7.60156 6.18159)",children:[i.jsx("stop",{stopColor:"#66EB6E"}),i.jsx("stop",{offset:1,stopColor:"#66EB6E",stopOpacity:0})]}),i.jsx("clipPath",{id:"clip0_927_5865",children:i.jsx("rect",{width:20,height:20,fill:"white"})})]})]});var ia={Chrome:A7,FireFox:L7,Edge:T7};const Ka=Oe.forwardRef(({browser:e},t)=>{const n=e??zr();let r;switch(n){case"chrome":r=ia.Chrome;break;case"firefox":r=ia.FireFox;break;case"edge":r=ia.Edge;break}return r?i.jsx(M7,{children:r}):i.jsx(i.Fragment,{})});Ka.displayName="BrowserIcon";const O7=D(B.div)`
  z-index: 4;
  position: relative;
  width: 100px;
  height: 100px;
  svg {
    z-index: 3;
    position: relative;
    display: block;
  }
`,F7=D(B.div)`
  z-index: 2;
  position: absolute;
  overflow: hidden;
  inset: 6px;
  border-radius: 50px;
  background: var(--ck-body-background);
  display: flex;
  align-items: center;
  justify-content: center;
  svg,
  img {
    pointer-events: none;
    display: block;
    margin: 0 auto;
    width: 100%;
    height: 100%;
    ${e=>e.$small&&se`
        width: 85%;
        height: 85%;
      `}
  }
`,R7=D(B.div)`
  position: absolute;
  inset: -5px;
`,D7=D(B.div)`
  pointer-events: none;
  user-select: none;
  z-index: 1;
  position: absolute;
  inset: -25%;
  background: var(--ck-body-background);
  div:first-child {
    position: absolute;
    left: 50%;
    right: 0;
    top: 0;
    bottom: 0;
    overflow: hidden;
    &:before {
      position: absolute;
      content: '';
      inset: 0;
      background: var(--ck-spinner-color);
      transform-origin: 0% 50%;
      animation: rotateExpiringSpinner 5000ms ease-in both;
    }
  }
  div:last-child {
    position: absolute;
    left: 0;
    right: 50%;
    top: 0;
    bottom: 0;
    overflow: hidden;
    &:before {
      position: absolute;
      content: '';
      inset: 0;
      background: var(--ck-spinner-color);
      transform-origin: 100% 50%;
      animation: rotateExpiringSpinner 5000ms ease-out 5000ms both;
    }
  }
  @keyframes rotateExpiringSpinner {
    0% {
      transform: rotate(-180deg);
    }
    100% {
      transform: rotate(0deg);
    }
  }
`,z7=D(B.div)`
  pointer-events: none;
  user-select: none;
  z-index: 1;
  position: absolute;
  inset: 0;
  svg {
    display: block;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    animation: rotateSpinner 1200ms linear infinite;
  }
  @keyframes rotateSpinner {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`,B7=({logo:e,smallLogo:t,connecting:n=!0,unavailable:r=!1,countdown:o=!1})=>i.jsxs(O7,{transition:{duration:.5,ease:[.175,.885,.32,.98]},children:[i.jsx(F7,{$small:!r&&t,style:r?{borderRadius:0}:void 0,children:e}),i.jsx(R7,{children:i.jsxs(Se,{children:[n&&i.jsx(z7,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0,transition:{duration:o?1:0}},children:i.jsxs("svg",{"aria-hidden":"true",width:"102",height:"102",viewBox:"0 0 102 102",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[i.jsx("path",{d:"M52 100C24.3858 100 2 77.6142 2 50",stroke:"url(#paint0_linear_1943_4139)",strokeWidth:"3.5",strokeLinecap:"round",strokeLinejoin:"round"}),i.jsx("defs",{children:i.jsxs("linearGradient",{id:"paint0_linear_1943_4139",x1:"2",y1:"48.5",x2:"53",y2:"100",gradientUnits:"userSpaceOnUse",children:[i.jsx("stop",{stopColor:"var(--ck-spinner-color)"}),i.jsx("stop",{offset:"1",stopColor:"var(--ck-spinner-color)",stopOpacity:"0"})]})})]})},"Spinner"),o&&i.jsxs(D7,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.25},children:[i.jsx("div",{}),i.jsx("div",{})]},"ExpiringSpinner")]})})]}),be={CONNECTED:"connected",CONNECTING:"connecting",EXPIRING:"expiring",FAILED:"failed",REJECTED:"rejected",NOTCONNECTED:"notconnected",UNAVAILABLE:"unavailable"},yn={initial:{willChange:"transform,opacity",position:"relative",opacity:0,scale:.95},animate:{position:"relative",opacity:1,scale:1,transition:{ease:[.16,1,.3,1],duration:.4,delay:.05,position:{delay:0}}},exit:{position:"absolute",opacity:0,scale:.95,transition:{ease:[.16,1,.3,1],duration:.3}}},P7=({switchConnectMethod:e,forceState:t})=>{var n,r,o,a,s,c,l,d;const{connect:u}=ni({mutation:{onMutate:w=>{w.connector?z(be.CONNECTING):z(be.UNAVAILABLE)},onError(w){console.error(w)},onSettled(w,C){if(C){if(k(!0),setTimeout(()=>k(!1),3500),C.code)switch(C.code){case-32002:z(be.NOTCONNECTED);break;case 4001:z(be.REJECTED);break;default:z(be.FAILED);break}else if(C.message)switch(C.message){case"User rejected request":z(be.REJECTED);break;default:z(be.FAILED);break}}setTimeout(p,100)}}}),{triggerResize:p,connector:m}=_e(),v=m.id,f=Hr(v),y={name:f==null?void 0:f.name,shortName:(n=f==null?void 0:f.shortName)!==null&&n!==void 0?n:f==null?void 0:f.name,icon:(r=f==null?void 0:f.iconConnector)!==null&&r!==void 0?r:f==null?void 0:f.icon,iconShape:(o=f==null?void 0:f.iconShape)!==null&&o!==void 0?o:"circle",iconShouldShrink:f==null?void 0:f.iconShouldShrink},[_,k]=M.useState(!1);M.useState(9);const N=zr(),A=(a=f==null?void 0:f.downloadUrls)===null||a===void 0?void 0:a[N],S=f!=null&&f.downloadUrls?{name:Object.keys(f==null?void 0:f.downloadUrls)[0],label:((s=Object.keys(f==null?void 0:f.downloadUrls)[0])===null||s===void 0?void 0:s.charAt(0).toUpperCase())+((c=Object.keys(f==null?void 0:f.downloadUrls)[0])===null||c===void 0?void 0:c.slice(1)),url:f==null?void 0:f.downloadUrls[Object.keys(f==null?void 0:f.downloadUrls)[0]]}:void 0,[R,z]=M.useState(t||(f!=null&&f.isInstalled?be.CONNECTING:be.UNAVAILABLE)),h=De({CONNECTORNAME:y.name,CONNECTORSHORTNAME:(l=y.shortName)!==null&&l!==void 0?l:y.name,SUGGESTEDEXTENSIONBROWSER:(d=S==null?void 0:S.label)!==null&&d!==void 0?d:"your browser"}),g=async()=>{f!=null&&f.isInstalled&&(f!=null&&f.connector)?u({connector:f==null?void 0:f.connector}):z(be.UNAVAILABLE)};let b;return M.useEffect(()=>{if(R!==be.UNAVAILABLE)return b=setTimeout(g,600),()=>{clearTimeout(b)}},[]),f?$n(f==null?void 0:f.connector.id)?i.jsx(Je,{children:i.jsxs(oa,{children:[i.jsx(Wo,{children:"Invalid State"}),i.jsx(Te,{children:i.jsx(Gn,{children:"WalletConnect does not have an injection flow. This state should never happen."})})]})}):i.jsx(Je,{children:i.jsxs(oa,{children:[i.jsx(b7,{children:i.jsxs(x7,{$shake:R===be.FAILED||R===be.REJECTED,$circle:y.iconShape==="circle",children:[i.jsx(Se,{children:(R===be.FAILED||R===be.REJECTED)&&i.jsx(y7,{"aria-label":"Retry",initial:{opacity:0,scale:.8},animate:{opacity:1,scale:1},exit:{opacity:0,scale:.8},whileTap:{scale:.9},transition:{duration:.1},onClick:g,children:i.jsx(C7,{children:i.jsx(Hs,{open:_&&(R===be.FAILED||R===be.REJECTED),message:h.tryAgainQuestion,xOffset:-6,children:i.jsx(O8,{})})})})}),y.iconShape==="circle"?i.jsx(B7,{logo:R===be.UNAVAILABLE?i.jsx("div",{style:{transform:"scale(1.14)",position:"relative",width:"100%"},children:y.icon}):i.jsx(i.Fragment,{children:y.icon}),smallLogo:y.iconShouldShrink,connecting:R===be.CONNECTING,unavailable:R===be.UNAVAILABLE}):i.jsx(N7,{logo:R===be.UNAVAILABLE?i.jsx("div",{style:{transform:"scale(1.14)",position:"relative",width:"100%"},children:y.icon}):i.jsx(i.Fragment,{children:y.icon}),connecting:R===be.CONNECTING})]})}),i.jsx(m8,{children:i.jsxs(Se,{initial:!1,children:[R===be.FAILED&&i.jsx(xn,{initial:"initial",animate:"animate",exit:"exit",variants:yn,children:i.jsxs(Te,{children:[i.jsxs(Xe,{$error:!0,children:[i.jsx(T8,{}),h.injectionScreen_failed_h1]}),i.jsx(Fe,{children:h.injectionScreen_failed_p})]})},be.FAILED),R===be.REJECTED&&i.jsx(xn,{initial:"initial",animate:"animate",exit:"exit",variants:yn,children:i.jsxs(Te,{children:[i.jsx(Xe,{children:h.injectionScreen_rejected_h1}),i.jsx(Fe,{children:h.injectionScreen_rejected_p})]})},be.REJECTED),(R===be.CONNECTING||R===be.EXPIRING)&&i.jsx(xn,{initial:"initial",animate:"animate",exit:"exit",variants:yn,children:i.jsxs(Te,{style:{paddingBottom:28},children:[i.jsx(Xe,{children:f.connector.id==="injected"?h.injectionScreen_connecting_injected_h1:h.injectionScreen_connecting_h1}),i.jsx(Fe,{children:f.connector.id==="injected"?h.injectionScreen_connecting_injected_p:h.injectionScreen_connecting_p})]})},be.CONNECTING),R===be.CONNECTED&&i.jsx(xn,{initial:"initial",animate:"animate",exit:"exit",variants:yn,children:i.jsxs(Te,{children:[i.jsxs(Xe,{$valid:!0,children:[i.jsx(eu,{})," ",h.injectionScreen_connected_h1]}),i.jsx(Fe,{children:h.injectionScreen_connected_p})]})},be.CONNECTED),R===be.NOTCONNECTED&&i.jsx(xn,{initial:"initial",animate:"animate",exit:"exit",variants:yn,children:i.jsxs(Te,{children:[i.jsx(Xe,{children:h.injectionScreen_notconnected_h1}),i.jsx(Fe,{children:h.injectionScreen_notconnected_p})]})},be.NOTCONNECTED),R===be.UNAVAILABLE&&i.jsx(xn,{initial:"initial",animate:"animate",exit:"exit",variants:yn,children:A?i.jsxs(i.Fragment,{children:[i.jsxs(Te,{style:{paddingBottom:18},children:[i.jsx(Xe,{children:h.injectionScreen_install_h1}),i.jsx(Fe,{children:h.injectionScreen_install_p})]}),!f.isInstalled&&A&&i.jsx(Pe,{href:A,icon:i.jsx(Ka,{}),children:h.installTheExtension})]}):i.jsxs(i.Fragment,{children:[i.jsxs(Te,{style:{paddingBottom:12},children:[i.jsx(Xe,{children:h.injectionScreen_unavailable_h1}),i.jsx(Fe,{children:h.injectionScreen_unavailable_p})]}),!f.isInstalled&&S&&i.jsxs(Pe,{href:S==null?void 0:S.url,icon:i.jsx(Ka,{browser:S==null?void 0:S.name}),children:["Install on ",S==null?void 0:S.label]})]})},be.UNAVAILABLE)]})})]})}):i.jsx(Je,{children:i.jsxs(oa,{children:[i.jsx(Wo,{children:"Invalid State"}),i.jsx(Te,{children:i.jsx(Gn,{children:"No connectors match the id given. This state should never happen."})})]})})},W7=D(B.div)`
  z-index: 3;
  position: relative;
  overflow: hidden;
  height: 0;
  padding-bottom: 100% !important;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 1px 0 2px;
  border-radius: var(--ck-qr-border-radius, 24px);
  background: var(--ck-qr-background, transparent);
  box-shadow: 0 0 0 1px var(--ck-qr-border-color);
  backface-visibility: hidden;
  svg {
    display: block;
    max-width: 100%;
    width: 100%;
    height: auto;
  }
`,V7=D(B.div)`
  position: absolute;
  inset: 13px;
  svg {
    width: 100% !important;
    height: auto !important;
  }
`,U7=ke`
  0%{ background-position: 100% 0; }
  100%{ background-position: -100% 0; }
`,Z7=D(B.div)`
  --color: var(--ck-qr-dot-color);
  --bg: var(--ck-qr-background, var(--ck-body-background));

  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  > div {
    z-index: 4;
    position: relative;
    width: 28%;
    height: 28%;
    border-radius: 20px;
    background: var(--bg);
    box-shadow: 0 0 0 7px var(--bg);
  }
  > span {
    z-index: 4;
    position: absolute;
    background: var(--color);
    border-radius: 12px;
    width: 13.25%;
    height: 13.25%;
    box-shadow: 0 0 0 4px var(--bg);
    &:before {
      content: '';
      position: absolute;
      inset: 9px;
      border-radius: 3px;
      box-shadow: 0 0 0 4px var(--bg);
    }
    &:nth-child(1) {
      top: 0;
      left: 0;
    }
    &:nth-child(2) {
      top: 0;
      right: 0;
    }
    &:nth-child(3) {
      bottom: 0;
      left: 0;
    }
  }
  &:before {
    z-index: 3;
    content: '';
    position: absolute;
    inset: 0;
    background: repeat;
    background-size: 1.888% 1.888%;
    background-image: radial-gradient(var(--color) 41%, transparent 41%);
  }
  &:after {
    z-index: 5;
    content: '';
    position: absolute;
    inset: 0;
    transform: scale(1.5) rotate(45deg);
    background-image: linear-gradient(
      90deg,
      rgba(255, 255, 255, 0) 50%,
      rgba(255, 255, 255, 1),
      rgba(255, 255, 255, 0)
    );
    background-size: 200% 100%;
    animation: ${U7} 1000ms linear infinite both;
  }
`,$7=D(B.div)`
  z-index: 6;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transform: translateY(50%) scale(0.9999); // Shifting fix
`,H7=D(B.div)`
  z-index: 6;
  position: absolute;
  left: 50%;
  overflow: hidden;

  transform: translate(-50%, -50%) scale(0.9999); // Shifting fix

  svg {
    display: block;
    position: relative;
    width: 100%;
    height: 100%;
  }

  ${e=>e.$wcLogo?se`
          width: 29%;
          height: 20.5%;
        `:se`
          width: 28%;
          height: 28%;
          border-radius: 17px;
          &:before {
            pointer-events: none;
            z-index: 2;
            content: '';
            position: absolute;
            inset: 0;
            border-radius: inherit;
            box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.02);
          }
        `}
`,G7=(e,t)=>{const n=Array.prototype.slice.call(F0.create(e,{errorCorrectionLevel:t}).modules.data,0),r=Math.sqrt(n.length);return n.reduce((o,a,s)=>(s%r===0?o.push([a]):o[o.length-1].push(a))&&o,[])};function Y7({ecl:e="M",size:t=200,uri:n,clearArea:r=!1,image:o,imageBackground:a="transparent"}){const s=r?76:0,c=t-20,l=M.useMemo(()=>{const d=[],u=G7(n,e),p=c/u.length;if([{x:0,y:0},{x:1,y:0},{x:0,y:1}].forEach(({x:_,y:k})=>{const x=(u.length-7)*p*_,N=(u.length-7)*p*k;for(let A=0;A<3;A++)d.push(i.jsx("rect",{fill:A%2!==0?"var(--ck-qr-background, var(--ck-body-background))":"var(--ck-qr-dot-color)",rx:(A-2)*-5+(A===0?2:3),ry:(A-2)*-5+(A===0?2:3),width:p*(7-A*2),height:p*(7-A*2),x:x+p*A,y:N+p*A},`${A}-${_}-${k}`))}),o){const _=(u.length-7)*p*1,k=(u.length-7)*p*1;d.push(i.jsxs(i.Fragment,{children:[i.jsx("rect",{fill:a,rx:12,ry:12,width:p*7,height:p*7,x:_+p*0,y:k+p*0}),i.jsx("foreignObject",{width:p*7,height:p*7,x:_+p*0,y:k+p*0,children:i.jsx("div",{style:{borderRadius:12,overflow:"hidden"},children:o})})]}))}const v=Math.floor((s+25)/p),f=u.length/2-v/2,y=u.length/2+v/2-1;return u.forEach((_,k)=>{_.forEach((x,N)=>{u[k][N]&&(k<7&&N<7||k>u.length-8&&N<7||k<7&&N>u.length-8||(o||!(k>f&&k<y&&N>f&&N<y))&&d.push(i.jsx("circle",{cx:k*p+p/2,cy:N*p+p/2,fill:"var(--ck-qr-dot-color)",r:p/3},`circle-${k}-${N}`)))})}),d},[e,c,n]);return i.jsxs("svg",{height:c,width:c,viewBox:`0 0 ${c} ${c}`,style:{width:c,height:c},children:[i.jsx("rect",{fill:"transparent",height:c,width:c}),l]})}function q7(){const[e,t]=M.useState({width:0,height:0});return M.useEffect(()=>{function n(){t({width:window.innerWidth,height:window.innerHeight})}return window.addEventListener("resize",n),n(),()=>window.removeEventListener("resize",n)},[]),e}function Gs({value:e,image:t,imageBackground:n,imagePosition:r="center",tooltipMessage:o}){const s=q7().width>920&&o?i.jsx(Hs,{xOffset:139,yOffset:5,delay:.1,message:o,children:t}):t;return i.jsx(W7,{children:i.jsxs(V7,{children:[t&&i.jsx($7,{children:i.jsx(H7,{$wcLogo:r!=="center",style:{background:r==="center"?n:void 0},children:s})}),i.jsx(Se,{initial:!1,children:e?i.jsx(B.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0,position:"absolute",inset:[0,0]},transition:{duration:.2},children:i.jsx(Y7,{uri:e,size:288,ecl:"M",clearArea:!!(r==="center"&&t)})},e):i.jsxs(Z7,{initial:{opacity:.1},animate:{opacity:.1},exit:{opacity:0,position:"absolute",inset:[0,0]},transition:{duration:.2},children:[i.jsx("span",{}),i.jsx("span",{}),i.jsx("span",{}),i.jsx("div",{})]})})]})})}Gs.displayName="CustomQRCode";const K7=D(B.div)`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 47px;
  height: 52px;
  min-width: 47px;
  min-height: 52px;
  svg {
    display: block;
    max-width: 100%;
    height: auto;
  }
`,m1=({logo:e})=>{const t=[i.jsx(ve.MetaMask,{background:!0}),i.jsx(ve.Coinbase,{background:!0}),i.jsx(ve.Crypto,{}),i.jsx(ve.ImToken,{}),i.jsx(ve.Argent,{}),i.jsx(ve.Trust,{})];return i.jsx(K7,{children:i.jsxs("svg",{"aria-hidden":"true",width:"47",height:"52",viewBox:"0 0 47 52",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[i.jsxs("g",{mask:"url(#gradient-mask)",children:[i.jsx("path",{d:"M7 14.5C7 11.4624 9.46243 9 12.5 9H31.5C34.5376 9 37 11.4624 37 14.5V47H7V14.5Z",fill:"var(--ck-graphic-scaniconwithlogos-04)"}),e?i.jsx("foreignObject",{x:"13",y:"21",width:"18",height:"18",rx:"5",children:i.jsx("div",{style:{overflow:"hidden",borderRadius:5},children:e})}):i.jsxs(i.Fragment,{children:[i.jsx("foreignObject",{x:"12",y:"15",width:"9",height:"9",rx:"2.5",children:i.jsx("div",{style:{overflow:"hidden",borderRadius:2.5},children:t[0]})}),i.jsx("foreignObject",{x:"23",y:"15",width:"9",height:"9",rx:"2.5",children:i.jsx("div",{style:{overflow:"hidden",borderRadius:2.5},children:t[1]})}),i.jsx("foreignObject",{x:"12",y:"26",width:"9",height:"9",rx:"2.5",children:i.jsx("div",{style:{overflow:"hidden",borderRadius:2.5},children:i.jsx("div",{style:{overflow:"hidden",borderRadius:2.5},children:t[2]})})}),i.jsx("foreignObject",{x:"23",y:"26",width:"9",height:"9",rx:"2.5",children:i.jsx("div",{style:{overflow:"hidden",borderRadius:2.5},children:t[3]})}),i.jsx("foreignObject",{x:"12",y:"37",width:"9",height:"9",rx:"2.5",children:i.jsx("div",{style:{overflow:"hidden",borderRadius:2.5},children:t[4]})}),i.jsx("foreignObject",{x:"23",y:"37",width:"9",height:"9",rx:"2.5",children:i.jsx("div",{style:{overflow:"hidden",borderRadius:2.5},children:t[5]})})]}),i.jsx("path",{d:"M36 47V13.7143C36 11.1107 33.8893 9 31.2857 9H12.7143C10.1107 9 8 11.1107 8 13.7143V47",stroke:"url(#paint0_linear_924_12568)",strokeWidth:"2"}),i.jsx("path",{d:"M15 10H29C29 11.1046 28.1046 12 27 12H17C15.8954 12 15 11.1046 15 10Z",fill:"var(--ck-graphic-scaniconwithlogos-01)"}),i.jsx("rect",{x:"1",y:"47",width:"43",height:"5",fill:"var(--ck-tooltip-background)"}),i.jsx("rect",{x:"22",y:"1",width:"24",height:"24",rx:"12",fill:"var(--ck-graphic-scaniconwithlogos-03)",stroke:"var(--ck-tooltip-background)",strokeWidth:"2"}),i.jsx("rect",{x:"34.5",y:"10",width:"2.5",height:"2.5",rx:"0.75",fill:"#373737"}),i.jsx("rect",{x:"31",y:"10",width:"2.5",height:"2.5",rx:"0.75",fill:"#373737"}),i.jsx("rect",{x:"31",y:"13.5",width:"2.5",height:"2.5",rx:"0.75",fill:"#373737"}),i.jsx("rect",{x:"34.5",y:"13.5",width:"2.5",height:"2.5",rx:"0.75",fill:"#373737"}),i.jsx("path",{d:"M28.5 10.5V9C28.5 8.17157 29.1716 7.5 30 7.5H31.5",stroke:"#373737",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),i.jsx("path",{d:"M36.5 7.5L38 7.5C38.8284 7.5 39.5 8.17157 39.5 9L39.5 10.5",stroke:"#373737",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),i.jsx("path",{d:"M39.5 15.5L39.5 17C39.5 17.8284 38.8284 18.5 38 18.5L36.5 18.5",stroke:"#373737",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),i.jsx("path",{d:"M31.5 18.5L30 18.5C29.1716 18.5 28.5 17.8284 28.5 17L28.5 15.5",stroke:"#373737",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]}),i.jsxs("defs",{children:[i.jsxs("linearGradient",{id:"paint0_linear_924_12568",x1:"22",y1:"8.2549",x2:"22",y2:"47",gradientUnits:"userSpaceOnUse",children:[i.jsx("stop",{stopColor:"var(--ck-graphic-scaniconwithlogos-01)"}),i.jsx("stop",{offset:"1",stopColor:"var(--ck-graphic-scaniconwithlogos-02)"})]}),i.jsxs("linearGradient",{id:"linear-gradient-mask",x1:"47",y1:"42",x2:"47",y2:"47",gradientUnits:"userSpaceOnUse",children:[i.jsx("stop",{stopColor:"white"}),i.jsx("stop",{offset:"1",stopColor:"black",stopOpacity:"0"})]}),i.jsx("mask",{id:"gradient-mask",children:i.jsx("rect",{x:"0",y:"0",width:"47",height:"52",fill:"url(#linear-gradient-mask)"})})]})]})})},X7=({switchConnectMethod:e})=>{var t,n,r,o,a,s,c,l;const d=_e(),u=d.connector.id,p=Hr(d.connector.id),{open:m,isOpen:v}=fu(),{connect:{getUri:f}}=Zs(),y=f(u),_=y?(n=(t=p==null?void 0:p.getWalletConnectDeeplink)===null||t===void 0?void 0:t.call(p,y))!==null&&n!==void 0?n:y:void 0,k=De({CONNECTORNAME:p==null?void 0:p.name});if(!p)return i.jsxs(i.Fragment,{children:["Wallet not found ",d.connector.id]});const x=p==null?void 0:p.downloadUrls,N={chrome:x==null?void 0:x.chrome,firefox:x==null?void 0:x.firefox,brave:x==null?void 0:x.brave,edge:x==null?void 0:x.edge,safari:x==null?void 0:x.safari};zr();const A=x&&Object.keys(x).length!==0;N&&(Object.keys(N)[0],((r=Object.keys(N)[0])===null||r===void 0?void 0:r.charAt(0).toUpperCase())+((o=Object.keys(N)[0])===null||o===void 0?void 0:o.slice(1)),N[Object.keys(N)[0]]);const S=$n(u);return i.jsxs(Je,{children:[i.jsxs(Te,{style:{paddingBottom:8,gap:14},children:[i.jsx(Gs,{value:_,image:p==null?void 0:p.icon,tooltipMessage:$n(u)?i.jsxs(i.Fragment,{children:[i.jsx(m1,{}),i.jsx("span",{children:k.scanScreen_tooltip_walletConnect})]}):i.jsxs(i.Fragment,{children:[i.jsx(m1,{logo:p==null?void 0:p.icon}),i.jsx("span",{children:k.scanScreen_tooltip_default})]})}),S?i.jsx(On,{}):A&&i.jsx(On,{children:k.dontHaveTheApp})]}),S&&i.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",gap:14},children:[((a=d.options)===null||a===void 0?void 0:a.walletConnectCTA)!=="modal"&&i.jsx($s,{variant:"button",string:_,children:((s=d.options)===null||s===void 0?void 0:s.walletConnectCTA)==="link"?k.copyToClipboard:k.copyCode}),((c=d.options)===null||c===void 0?void 0:c.walletConnectCTA)!=="link"&&i.jsx(Pe,{icon:i.jsx(L8,{}),onClick:m,disabled:v,waiting:v,children:((l=d.options)===null||l===void 0?void 0:l.walletConnectCTA)==="modal"?k.useWalletConnectModal:k.useModal})]}),$0(p.id)&&i.jsxs(i.Fragment,{children:[i.jsx(On,{}),i.jsx(Pe,{onClick:()=>e(u),children:k.loginWithEmailOrPhone})]}),A&&i.jsx(i.Fragment,{children:i.jsx(Pe,{onClick:()=>{d.setRoute(Q.DOWNLOAD)},download:!0,children:k.getWalletName})})]})},wt={QRCODE:"qrcode",INJECTOR:"injector"},J7=()=>{const e=_e(),t=Hr(e.connector.id),n=!(t!=null&&t.isInstalled)&&(t==null?void 0:t.getWalletConnectDeeplink),[r,o]=M.useState(n?wt.QRCODE:wt.INJECTOR);return M.useEffect(()=>{const a=async()=>{await(t==null?void 0:t.connector.getProvider())||(o(wt.QRCODE),setTimeout(e.triggerResize,10))};r===wt.INJECTOR&&a()},[]),t?i.jsxs(Se,{children:[r===wt.QRCODE&&i.jsx(B.div,{initial:"initial",animate:"animate",exit:"exit",variants:n1,children:i.jsx(X7,{switchConnectMethod:a=>{o(wt.INJECTOR),setTimeout(e.triggerResize,10)}})},wt.QRCODE),r===wt.INJECTOR&&i.jsx(B.div,{initial:"initial",animate:"animate",exit:"exit",variants:n1,children:i.jsx(P7,{switchConnectMethod:a=>{o(wt.QRCODE),setTimeout(e.triggerResize,10)}})},wt.INJECTOR)]}):i.jsxs(Gn,{children:["Connector not found ",e.connector.id]})},Q7=()=>{var e,t,n;const r=_e(),o=Hr(r.connector.id),a=De({CONNECTORNAME:o==null?void 0:o.name});if(!o)return i.jsx(i.Fragment,{children:"Wallet not found"});const s={ios:(e=o.downloadUrls)===null||e===void 0?void 0:e.ios,android:(t=o.downloadUrls)===null||t===void 0?void 0:t.android,redirect:(n=o.downloadUrls)===null||n===void 0?void 0:n.download},c=s.ios&&s.android?a.downloadAppScreen_iosAndroid:s.ios?a.downloadAppScreen_ios:a.downloadAppScreen_android;return i.jsx(Je,{children:i.jsxs(Te,{style:{paddingBottom:4,gap:14},children:[s.redirect&&i.jsx(Gs,{value:s.redirect}),!s.redirect&&i.jsx(i.Fragment,{children:"No download link available"}),i.jsx(Fe,{style:{fontSize:15,lineHeight:"20px",padding:"0 12px"},children:c})]})})},eg=D(B.div)`
  padding: 18px 0 20px;
  @media only screen and (max-width: ${xe.mobileWidth}px) {
    padding: 16px 0 20px;
  }
`,tg=D(B.div)`
  position: relative;
  display: inline-block;
`,ng=D(B.div)`
  z-index: 3;
  position: absolute;
  bottom: 0px;
  right: -16px;
`,rg=D(B.div)`
  position: relative;
`,og=D(B.div)`
  position: relative;
`,ig=ke`
  0%{ background-position: 100% 0; }
  100%{ background-position: -100% 0; }
`,ag=D(B.div)`
  width: 25%;
  margin: 0 auto;
  position: relative;
  overflow: hidden;
  border-radius: 10px;
  background: var(--ck-body-background-secondary);
  inset: 0;
  &:before {
    z-index: 4;
    content: '';
    position: absolute;
    inset: 0;
    background-image: linear-gradient(
      90deg,
      var(--ck-body-background-transparent) 50%,
      var(--ck-body-background),
      var(--ck-body-background-transparent)
    );
    opacity: 0.75;
    background-size: 200% 100%;
    animation: ${ig} 1000ms linear infinite both;
  }
`;function sg(e){return e.split("").map(t=>t.charCodeAt(0)).reduce((t,n)=>t+n)%100/100}const v1=D(B.div)`
  will-change: transform; // Needed for Safari
  pointer-events: none;
  user-select: none;
  position: relative;
  overflow: hidden;
  margin: 0;
  border-radius: ${e=>`${e.$radius}px`};
  width: ${e=>`${e.$size}px`};
  height: ${e=>`${e.$size}px`};
  box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.08);
  &:before {
    content: '';
    z-index: 1;
    position: absolute;
    inset: 0;
    border-radius: inherit;
    box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.02);
  }
  ${e=>{if(e.$seed){const t=Math.ceil(sg(e.$seed)*8),n=`0${t===0?1:t}`;return se`
        background: var(--ck-ens-${n}-start);
        background: linear-gradient(
          180deg,
          var(--ck-ens-${n}-start) 0%,
          var(--ck-ens-${n}-stop) 100%
        );
      `}}}
`,cg=D(B.img)`
  display: block;
  position: relative;
  width: 100%;
  height: 100%;
  opacity: ${e=>e.$loaded?1:0};
  will-change: opacity; // Needed for Safari
  transition: opacity 500ms ease;
  transform: scale(1.01); // fixes background color bleeding
`;function Kn(){const[e,t]=M.useState(!1);return M.useEffect(()=>t(!0),[]),e}const lg=Fu({chains:[Ks],transports:{[Ks.id]:zu()}});function oi(){return Mt(1)?void 0:lg}const Ys=({address:e,name:t,size:n=96,radius:r=96})=>{var o,a,s;const c=Kn(),l=_e(),d=M.useRef(null),[u,p]=M.useState(!0),m=oi(),{data:v}=Lu({chainId:1,name:t,config:m}),{data:f}=Zo({chainId:1,address:(o=e??v)!==null&&o!==void 0?o:void 0,config:m}),{data:y}=Tu({chainId:1,name:Du(f??""),config:m}),_={address:v??e,name:f??t,avatar:y??void 0};return M.useEffect(()=>{d.current&&d.current.complete&&d.current.naturalHeight!==0||p(!1)},[y]),c?!((a=l.options)===null||a===void 0)&&a.customAvatar?i.jsx("div",{style:{width:n,height:n,borderRadius:r,overflow:"hidden"},children:(s=l.options)===null||s===void 0?void 0:s.customAvatar({address:e??(_==null?void 0:_.address),ensName:t??(_==null?void 0:_.name),ensImage:_==null?void 0:_.avatar,size:n,radius:r})}):!_.name||!_.avatar?i.jsx(Hn,{style:{pointerEvents:"none"},children:i.jsx(v1,{$size:n,$seed:_.address,$radius:r})}):i.jsx(Hn,{style:{pointerEvents:"none"},children:i.jsx(v1,{$size:n,$seed:_.address,$radius:r,children:i.jsx(cg,{ref:d,src:_.avatar,alt:_.name,onLoad:()=>p(!0),$loaded:u})})}):i.jsx("div",{style:{width:n,height:n,borderRadius:r}})},Sn=({testnet:e,...t})=>i.jsxs("svg",{...t,"aria-hidden":"true",width:"44",height:"44",viewBox:"0 0 44 44",fill:"none",xmlns:"http://www.w3.org/2000/svg",style:{background:e?"linear-gradient(180deg, #8995A9 0%, #424D5F 99.48%)":"black"},children:[i.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M20.5611 8.12948C21.0082 7.90729 21.5007 7.79167 22 7.79167C22.4993 7.79167 22.9919 7.90729 23.439 8.12948L23.4408 8.1304L33.0387 12.9293C33.577 13.197 34.031 13.61 34.3478 14.121C34.6649 14.6323 34.833 15.2218 34.8333 15.8234V27.2595C34.833 27.8611 34.6649 28.4511 34.3478 28.9624C34.031 29.4733 33.578 29.8858 33.0398 30.1535L23.4411 34.9528C22.9919 35.1775 22.4963 35.2947 21.994 35.2947C21.4918 35.2947 20.9964 35.1777 20.5472 34.9529L10.9475 30.1531L10.9452 30.1519C10.4071 29.8808 9.95535 29.4646 9.6411 28.9504C9.32739 28.437 9.16312 27.8464 9.16673 27.2448L9.16675 27.2417L10.0004 27.2475H9.16673V27.2448V15.8239C9.16705 15.2223 9.33518 14.6322 9.65222 14.121C9.96906 13.61 10.4221 13.1976 10.9604 12.9298L20.5592 8.1304L20.5611 8.12948ZM21.3031 9.62267L11.8706 14.3389L22 19.4036L32.1294 14.3389L22.697 9.62267C22.4806 9.51531 22.2416 9.45905 22 9.45905C21.7585 9.45905 21.5194 9.51534 21.3031 9.62267ZM10.8341 15.8241C10.8341 15.7785 10.8362 15.733 10.8401 15.6878L21.1663 20.8509V33.3983L11.6955 28.6629C11.4352 28.5315 11.2159 28.3297 11.0638 28.0809C10.9116 27.8318 10.8321 27.5452 10.8341 27.2533L10.8341 27.2475V15.8241ZM22.8337 33.3923L32.2967 28.6608C32.5576 28.5312 32.7772 28.3313 32.9308 28.0836C33.0844 27.836 33.1658 27.5504 33.166 27.259V15.8243C33.1659 15.7786 33.1639 15.7331 33.1599 15.6878L22.8337 20.8509V33.3923Z",fill:"url(#paint0_linear_3546_7073)"}),i.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M10.8341 15.8241C10.8341 15.7785 10.8362 15.733 10.8401 15.6878L21.1663 20.8509V33.3983L11.6955 28.6629C11.4352 28.5315 11.2159 28.3297 11.0638 28.0809C10.9116 27.8318 10.8321 27.5452 10.8341 27.2533L10.8341 27.2475V15.8241Z",fill:"url(#paint1_linear_3546_7073)",fillOpacity:"0.3"}),i.jsxs("defs",{children:[i.jsxs("linearGradient",{id:"paint0_linear_3546_7073",x1:"22",y1:"7.79167",x2:"22",y2:"35.2947",gradientUnits:"userSpaceOnUse",children:[i.jsx("stop",{stopColor:"white"}),i.jsx("stop",{offset:"1",stopColor:"white",stopOpacity:"0.7"})]}),i.jsxs("linearGradient",{id:"paint1_linear_3546_7073",x1:"22",y1:"7.79167",x2:"22",y2:"35.2947",gradientUnits:"userSpaceOnUse",children:[i.jsx("stop",{stopColor:"white"}),i.jsx("stop",{offset:"1",stopColor:"white",stopOpacity:"0.7"})]})]})]}),dg=({testnet:e,...t})=>i.jsx(Sn,{testnet:!0,...t}),ug=({testnet:e,...t})=>{let n="var(--ck-chain-ethereum-01, #25292E)",r="var(--ck-chain-ethereum-02, #ffffff)";return e&&(n="linear-gradient(180deg, #8995A9 0%, #424D5F 99.48%)",r="#fff"),i.jsxs("svg",{...t,"aria-hidden":"true",width:"44",height:"44",viewBox:"0 0 44 44",fill:"none",xmlns:"http://www.w3.org/2000/svg",style:{background:n},children:[i.jsx("path",{d:"M21.9967 6.99621L21.7955 7.67987V27.5163L21.9967 27.7171L31.2044 22.2744L21.9967 6.99621Z",fill:r}),i.jsx("path",{d:"M21.9957 6.99621L12.7878 22.2744L21.9957 27.7171V18.0891V6.99621Z",fill:r}),i.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M21.9959 36.9996L21.9959 36.9997V36.9995L31.2091 24.0243L21.9959 29.4642L12.788 24.0243L21.9957 36.9993L21.9958 36.9997L21.9959 36.9996Z",fill:r}),i.jsx("path",{d:"M21.996 27.7181L31.2037 22.2753L21.996 18.09V27.7181Z",fill:r}),i.jsx("path",{d:"M12.7878 22.2753L21.9957 27.7181V18.09L12.7878 22.2753Z",fill:r})]})},pg=({testnet:e,...t})=>i.jsx("svg",{...t,width:"44",height:"44",viewBox:"0 0 44 44",fill:"none",xmlns:"http://www.w3.org/2000/svg",style:{background:e?"linear-gradient(180deg, #8995A9 0%, #424D5F 99.48%)":"#2C2D30"},children:i.jsx("path",{d:"M30.4076 17.2002C29.1337 17.2002 27.9906 17.6998 27.1194 18.506L27.0299 18.4612C26.8302 15.8187 24.6817 13.7344 21.9891 13.7344C19.2966 13.7344 17.1481 15.8187 16.9484 18.4612L16.8589 18.506C15.9877 17.6998 14.8446 17.2002 13.5706 17.2002C10.7438 17.2002 8.45068 19.4947 8.45068 22.3267C8.45068 24.7727 10.8781 26.8709 11.4807 27.3532C14.3144 29.6098 18.0054 30.9293 21.9891 30.9293C25.9729 30.9293 29.6639 29.6098 32.4976 27.3532C33.1036 26.8709 35.5276 24.7762 35.5276 22.3267C35.5276 19.4947 33.2345 17.2002 30.4042 17.2002H30.4076Z",fill:"white"})}),hg=({testnet:e,...t})=>i.jsx("svg",{...t,"aria-hidden":"true",width:"44",height:"44",viewBox:"0 0 44 44",fill:"none",xmlns:"http://www.w3.org/2000/svg",style:{background:e?"linear-gradient(180deg, #8995A9 0%, #424D5F 99.48%)":"#6F41D8"},children:i.jsx("path",{d:"M29.0015 17.4529C28.4941 17.1572 27.8355 17.1572 27.2773 17.4529L23.3186 19.7271L20.6305 21.2094L16.6719 23.4822C16.1645 23.7792 15.5059 23.7792 14.9476 23.4822L11.8016 21.703C11.2943 21.4074 10.9395 20.8642 10.9395 20.2702V16.7612C10.9395 16.1686 11.2434 15.6255 11.8016 15.3285L14.8954 13.5988C15.4041 13.3018 16.0641 13.3018 16.6224 13.5988L19.7161 15.3285C20.2249 15.6255 20.5796 16.1686 20.5796 16.7612V19.0355L23.2678 17.5024V15.2295C23.2707 14.9343 23.1917 14.6441 23.0395 14.3911C22.8873 14.1381 22.6679 13.9324 22.4056 13.7968L16.6719 10.5353C16.1645 10.2382 15.5059 10.2382 14.9476 10.5353L9.11214 13.7968C8.84992 13.9324 8.63049 14.1381 8.47828 14.3911C8.32607 14.6441 8.24705 14.9343 8.25002 15.2295V21.802C8.25002 22.396 8.55389 22.9391 9.11214 23.2361L14.9476 26.4976C15.455 26.7932 16.115 26.7932 16.6719 26.4976L20.6305 24.2729L23.3186 22.7411L27.2773 20.5177C27.7846 20.2207 28.4433 20.2207 29.0015 20.5177L32.0966 22.2475C32.6054 22.5431 32.9588 23.0863 32.9588 23.6803V27.1893C32.9588 27.7819 32.6563 28.325 32.0966 28.622L29.0029 30.4013C28.4941 30.6983 27.8341 30.6983 27.2773 30.4013L24.1821 28.6715C23.6734 28.3745 23.3186 27.8314 23.3186 27.2387V24.9645L20.6305 26.4976V28.7705C20.6305 29.3631 20.9344 29.9076 21.4926 30.2032L27.3281 33.4647C27.8355 33.7617 28.4941 33.7617 29.0524 33.4647L34.8879 30.2032C35.3953 29.9076 35.75 29.3645 35.75 28.7705V22.198C35.753 21.9028 35.674 21.6126 35.5218 21.3596C35.3695 21.1066 35.1501 20.9009 34.8879 20.7653L29.0029 17.4529H29.0015Z",fill:"white"})}),fg=({testnet:e,...t})=>i.jsxs("svg",{...t,"aria-hidden":"true",width:"44",height:"44",viewBox:"0 0 44 44",fill:"none",xmlns:"http://www.w3.org/2000/svg",style:{background:e?"linear-gradient(180deg, #8995A9 0%, #424D5F 99.48%)":"#FF0420"},children:[i.jsx("path",{d:"M15.5877 27.8473C14.2777 27.8473 13.2045 27.539 12.3679 26.9226C11.5422 26.2952 11.1294 25.4035 11.1294 24.2477C11.1294 24.0055 11.157 23.7082 11.212 23.356C11.3552 22.5634 11.5588 21.6112 11.823 20.4994C12.5715 17.4722 14.5034 15.9586 17.6187 15.9586C18.4664 15.9586 19.2259 16.1017 19.8974 16.3879C20.5689 16.663 21.0973 17.0814 21.4826 17.6428C21.8678 18.1932 22.0605 18.8537 22.0605 19.6242C22.0605 19.8554 22.033 20.1471 21.9779 20.4994C21.8128 21.4791 21.6146 22.4313 21.3835 23.356C20.9982 24.8641 20.3322 25.9924 19.3855 26.741C18.4388 27.4785 17.1729 27.8473 15.5877 27.8473ZM15.8189 25.4695C16.4354 25.4695 16.9582 25.2879 17.3876 24.9247C17.8279 24.5614 18.1416 24.0055 18.3287 23.257C18.5819 22.2222 18.7746 21.3195 18.9067 20.5489C18.9507 20.3178 18.9727 20.0811 18.9727 19.8389C18.9727 18.8372 18.4498 18.3363 17.4041 18.3363C16.7876 18.3363 16.2592 18.5179 15.8189 18.8812C15.3896 19.2445 15.0813 19.8004 14.8943 20.5489C14.6961 21.2865 14.4979 22.1892 14.2998 23.257C14.2557 23.477 14.2337 23.7082 14.2337 23.9504C14.2337 24.9632 14.7622 25.4695 15.8189 25.4695Z",fill:"white"}),i.jsx("path",{d:"M22.8188 27.6815C22.6977 27.6815 22.6041 27.6429 22.5381 27.5659C22.483 27.4778 22.4665 27.3788 22.4885 27.2687L24.7672 16.5358C24.7892 16.4147 24.8498 16.3156 24.9489 16.2385C25.0479 16.1615 25.1525 16.1229 25.2626 16.1229H29.6548C30.8767 16.1229 31.8564 16.3761 32.5939 16.8825C33.3426 17.3889 33.7168 18.1209 33.7168 19.0786C33.7168 19.3538 33.6838 19.64 33.6177 19.9372C33.3426 21.2032 32.7867 22.1389 31.95 22.7443C31.1244 23.3498 29.9905 23.6525 28.5485 23.6525H26.3194L25.5598 27.2687C25.5377 27.3898 25.4772 27.4888 25.3782 27.5659C25.2791 27.6429 25.1745 27.6815 25.0645 27.6815H22.8188ZM28.6641 21.3738C29.1264 21.3738 29.5282 21.2472 29.8695 20.994C30.2217 20.7408 30.4529 20.3776 30.563 19.9042C30.596 19.717 30.6125 19.552 30.6125 19.4089C30.6125 19.0896 30.519 18.8474 30.3318 18.6823C30.1446 18.5062 29.8255 18.4182 29.3741 18.4182H27.3926L26.7652 21.3738H28.6641Z",fill:"white"}),i.jsx("rect",{x:"5.5",y:"5.5",width:"33",height:"33",rx:"16.5",fill:"white"}),i.jsx("path",{d:"M38.5 22C38.5 12.8924 31.0968 5.52416 22 5.5C12.879 5.5 5.5 12.8924 5.5 22C5.5 31.1076 12.9032 38.4758 22 38.5C31.121 38.5 38.5 31.1076 38.5 22ZM21.9758 30.2379V37.7994C15.3226 37.7994 9.92742 32.4122 9.92742 25.7687C9.92742 19.1252 15.3226 13.7379 21.9758 13.7379V6.17643C28.629 6.17643 34.0242 11.5637 34.0242 18.2072C34.0242 24.8507 28.629 30.2379 21.9758 30.2379Z",fill:"#FF0420"}),i.jsx("path",{d:"M22.0239 16.3223H21.9271C20.6691 18.8347 18.8062 20.6949 16.29 21.9511V22.0477C18.8062 23.304 20.6691 25.1641 21.9271 27.6766H22.0239C23.282 25.1641 25.1449 23.304 27.661 22.0477V21.9511C25.1449 20.6949 23.282 18.8347 22.0239 16.3223Z",fill:"#FF0420"})]}),gg=({testnet:e,...t})=>{const n=e?"#ffffff":"#28A0F0",r=e?"#ffffff":"#96BEDC";return i.jsxs("svg",{...t,"aria-hidden":"true",width:"44",height:"44",viewBox:"0 0 44 44",fill:"none",xmlns:"http://www.w3.org/2000/svg",style:{background:e?"linear-gradient(180deg, #8995A9 0%, #424D5F 99.48%)":"#2C364F"},children:[!e&&i.jsx("path",{d:"M25.7948 20.5826L28.2683 16.3854L34.9355 26.7696L34.9386 28.7625L34.9168 15.0491C34.9011 14.7137 34.7231 14.407 34.4391 14.2261L22.4357 7.32182C22.1551 7.1838 21.7989 7.18546 21.5187 7.32618C21.4807 7.34524 21.4453 7.36576 21.4113 7.38835L21.3694 7.41467L9.71816 14.1664L9.67298 14.1871C9.61474 14.2137 9.55609 14.2479 9.50076 14.2872C9.27983 14.4456 9.1331 14.68 9.08564 14.9425C9.07859 14.9823 9.0732 15.023 9.07092 15.064L9.08916 26.239L15.2994 16.6138C16.0811 15.3376 17.7847 14.9262 19.3662 14.9488L21.2221 14.9977L10.2862 32.5356L11.5753 33.2778L22.6422 15.0155L27.5338 14.9977L16.4956 33.7209L21.0955 36.3668L21.6451 36.6827C21.8776 36.7772 22.1516 36.7819 22.386 36.6972L34.5581 29.6433L32.2309 30.9918L25.7948 20.5826ZM26.7384 34.175L22.0925 26.8829L24.9287 22.0702L31.0303 31.6876L26.7384 34.175Z",fill:"#2D374B"}),i.jsx("path",{d:"M22.0924 26.8832L26.7385 34.1751L31.0302 31.6879L24.9286 22.0705L22.0924 26.8832Z",fill:n}),i.jsx("path",{d:"M34.9387 28.7627L34.9356 26.7698L28.2684 16.3856L25.7949 20.5828L32.2312 30.992L34.5584 29.6435C34.7866 29.4582 34.9248 29.1861 34.9393 28.8926L34.9387 28.7627Z",fill:n}),i.jsx("path",{d:"M7 30.642L10.2863 32.5356L21.2222 14.9976L19.3663 14.9487C17.785 14.9263 16.0814 15.3375 15.2995 16.6137L9.08927 26.239L7 29.449V30.642V30.642Z",fill:"white"}),i.jsx("path",{d:"M27.534 14.9977L22.6423 15.0155L11.5754 33.2778L15.4437 35.5049L16.4955 33.7209L27.534 14.9977Z",fill:"white"}),i.jsx("path",{d:"M37 14.9723C36.9592 13.9493 36.4052 13.013 35.5377 12.4677L23.377 5.47434C22.5187 5.04223 21.4466 5.04161 20.5868 5.47414C20.4852 5.52533 8.76078 12.3251 8.76078 12.3251C8.5985 12.4029 8.44224 12.4955 8.2953 12.6008C7.52081 13.156 7.0487 14.0186 7 14.9661V29.4492L9.08927 26.2392L9.07103 15.0639C9.07352 15.0231 9.0787 14.9827 9.08575 14.9431C9.133 14.6801 9.27994 14.4457 9.50086 14.2872C9.5562 14.2478 21.4806 7.34517 21.5186 7.32611C21.799 7.18538 22.155 7.18373 22.4356 7.32175L34.439 14.226C34.723 14.4069 34.901 14.7137 34.9167 15.049V28.8921C34.9022 29.1856 34.7862 29.4577 34.558 29.643L32.2308 30.9916L31.03 31.6875L26.7383 34.1747L22.3859 36.6969C22.1515 36.7817 21.8773 36.7769 21.645 36.6824L16.4955 33.7206L15.4435 35.5046L20.0713 38.169C20.2243 38.256 20.3607 38.3331 20.4726 38.3961C20.6458 38.4933 20.764 38.5582 20.8056 38.5785C21.1345 38.7383 21.6077 38.8311 22.0342 38.8311C22.4251 38.8311 22.8064 38.7594 23.1672 38.6181L35.8092 31.2971C36.5347 30.7348 36.9617 29.8869 37 28.9686V14.9723Z",fill:r})]})},mg=({testnet:e,...t})=>i.jsx("svg",{...t,"aria-hidden":"true",width:"44",height:"44",viewBox:"0 0 44 44",fill:"none",xmlns:"http://www.w3.org/2000/svg",style:{background:e?"linear-gradient(180deg, #8995A9 0%, #424D5F 99.48%)":"#571AFF"},children:i.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M26.1834 8.14754C25.6606 8.23504 25.3644 8.50235 24.9216 9.28591C24.5651 9.91722 24.4762 10.0244 24.2024 10.1592L23.9832 10.2668L19.2967 10.286L14.6097 10.3057L14.3875 10.3902C13.7059 10.6492 13.6192 10.7135 11.6291 12.4407C9.72243 14.0953 9.64893 14.1723 9.59249 14.5836C9.54437 14.9362 9.78981 15.6327 10.5191 17.2143C11.2847 18.8737 11.2839 18.8641 10.7444 19.5256C10.2645 20.1136 10.2269 20.2588 10.2041 21.5915C10.1717 23.502 10.2487 27.6023 10.3222 27.8591C10.3572 27.9816 10.7908 29.204 11.2861 30.5755C11.7813 31.9471 12.4192 33.715 12.704 34.5038C13.4281 36.5107 13.4814 36.5986 14.0392 36.7237C14.3066 36.7837 14.3206 36.781 18.9677 35.7258C24.4395 34.4837 23.7264 34.709 25.0739 33.7968C29.8732 30.5475 29.7337 30.66 29.8969 29.9083C30.0583 29.1642 30.1082 29.1379 31.8267 28.8999C34.6122 28.5145 34.6328 28.5083 34.8831 28.0109C35.0182 27.7423 35.7786 23.3406 35.8136 22.6209C35.8504 21.8828 36.042 22.221 33.3816 18.3395C30.022 13.4382 30.2381 13.7777 30.2399 13.4041C30.2407 13.1735 30.3366 12.9736 31.3236 11.1418C31.8236 10.2134 32.2742 9.35241 32.3254 9.22904C32.5236 8.74691 32.4204 8.3921 32.0301 8.21622L31.8267 8.12391L29.1102 8.11822C27.6048 8.11516 26.2997 8.12829 26.1834 8.14754ZM30.0474 9.4876C30.5623 9.72297 30.5382 9.82447 29.5119 11.7398C28.4317 13.7558 28.3157 13.2711 30.7154 16.7707C31.639 18.1173 32.8076 19.8218 33.3124 20.5581C34.6844 22.5592 34.6048 22.1799 34.1831 24.6903C33.7858 27.0602 33.7792 27.0817 33.3759 27.282C33.1506 27.394 33.2276 27.3813 30.8493 27.7117C28.9147 27.9803 28.8543 28.017 28.6719 29.0338C28.5778 29.557 28.4606 29.8169 28.2243 30.0247C28.0808 30.1512 24.8682 32.368 23.9451 32.9778C23.2587 33.4311 23.6861 33.3152 17.7471 34.6574C17.1997 34.7812 16.4079 34.9632 15.987 35.0617C14.4588 35.4195 14.4299 35.4033 13.8804 33.8948C12.9188 31.2528 11.6811 27.7957 11.6194 27.5787C11.5534 27.3463 11.549 27.1202 11.549 24.059V20.7878L11.6501 20.5966C11.7056 20.4912 11.8671 20.2759 12.0088 20.118C12.8418 19.19 12.8383 19.1183 11.8601 16.9907C10.7663 14.612 10.6797 14.9992 12.697 13.2501C14.2418 11.91 14.3048 11.8593 14.5905 11.7237L14.8394 11.6055L19.6983 11.5854C23.5417 11.5692 24.5891 11.5543 24.7103 11.515C25.1465 11.3728 25.4086 11.1094 25.7975 10.4203C26.3851 9.38041 26.3111 9.40797 28.4597 9.41891C29.6996 9.42547 29.9332 9.43554 30.0474 9.4876Z",fill:"#F7F5FC"})}),vg=({testnet:e,...t})=>i.jsx("svg",{...t,"aria-hidden":"true",width:"44",height:"44",viewBox:"0 0 44 44",fill:"none",xmlns:"http://www.w3.org/2000/svg",style:{background:e?"linear-gradient(180deg, #8995A9 0%, #424D5F 99.48%)":"#6CD544"},children:i.jsx("path",{d:"M22.0006 7.292C22.6198 7.29004 23.2271 7.46144 23.754 7.7868C24.2808 8.11216 24.706 8.57848 24.9816 9.133L34.3566 27.883C34.611 28.3912 34.7312 28.956 34.7058 29.5238C34.6805 30.0915 34.5103 30.6433 34.2116 31.1268C33.9129 31.6103 33.4956 32.0094 32.9992 32.2861C32.5028 32.5629 31.9439 32.7081 31.3756 32.708H12.6256C12.0573 32.7079 11.4985 32.5626 11.0023 32.2858C10.506 32.009 10.0888 31.6099 9.79022 31.1264C9.49163 30.6429 9.3216 30.0912 9.29628 29.5235C9.27096 28.9558 9.39119 28.3911 9.64556 27.883L19.0196 9.133C19.2951 8.57848 19.7203 8.11216 20.2472 7.7868C20.774 7.46144 21.3814 7.29004 22.0006 7.292ZM22.0006 5C20.9561 4.9999 19.9322 5.29059 19.0437 5.83952C18.1551 6.38846 17.4369 7.17394 16.9696 8.108L7.59456 26.858C7.16544 27.7156 6.96271 28.6687 7.00564 29.6268C7.04856 30.5848 7.33572 31.516 7.83982 32.3318C8.34392 33.1476 9.04823 33.821 9.88584 34.288C10.7235 34.755 11.6666 35.0001 12.6256 35H31.3756C32.3345 34.9999 33.2775 34.7547 34.1149 34.2876C34.9524 33.8206 35.6566 33.1472 36.1606 32.3314C36.6645 31.5156 36.9516 30.5845 36.9945 29.6265C37.0374 28.6686 36.8346 27.7156 36.4056 26.858L27.0316 8.108C26.5642 7.17394 25.846 6.38846 24.9574 5.83952C24.0689 5.29059 23.045 4.9999 22.0006 5Z",fill:"white"})}),bg=({testnet:e,...t})=>i.jsxs("svg",{...t,"aria-hidden":"true",width:"44",height:"44",viewBox:"0 0 44 44",fill:"none",xmlns:"http://www.w3.org/2000/svg",style:{background:e?"linear-gradient(180deg, #8995A9 0%, #424D5F 99.48%)":"#E84142"},children:[i.jsx("path",{d:"M11.0188 32.1528H15.4825C16.5334 32.1528 17.0589 32.1528 17.5278 32.023C18.042 31.8701 18.511 31.5991 18.9009 31.2261C19.2589 30.885 19.5173 30.4328 20.0269 29.5409L20.0272 29.5404L20.0422 29.5142L25.8314 19.2804C26.3456 18.3821 26.5999 17.93 26.7129 17.4554C26.8372 16.9412 26.8372 16.3988 26.7129 15.8847C26.6007 15.4136 26.3439 14.9648 25.8373 14.0798L25.8258 14.0597L23.56 10.1045C23.0911 9.27958 22.8538 8.86711 22.5543 8.71456C22.2323 8.55071 21.848 8.55071 21.526 8.71456C21.2265 8.86711 20.9892 9.27958 20.5202 10.1045L9.49892 29.5311C9.03561 30.3447 8.80392 30.7517 8.82089 31.0849C8.84349 31.4466 9.02994 31.7743 9.33507 31.9721C9.61756 32.1528 10.0809 32.1528 11.0188 32.1528Z",fill:"white"}),i.jsx("path",{d:"M33.1506 32.1528H26.7547C25.8111 32.1528 25.3365 32.1528 25.0596 31.9721C24.7545 31.7743 24.5681 31.4411 24.5455 31.0794C24.5286 30.7486 24.7621 30.3456 25.2294 29.539L25.2295 29.5388L25.2404 29.5199L28.4328 24.0392C28.9018 23.2313 29.1391 22.8301 29.4329 22.6776C29.7548 22.5137 30.1336 22.5137 30.4555 22.6776C30.7472 22.8261 30.9744 23.2102 31.4241 23.9708L31.4248 23.9719L31.4613 24.0336L34.665 29.5143C34.6806 29.5413 34.696 29.5678 34.7113 29.5939L34.7113 29.594C35.1554 30.3603 35.382 30.7514 35.3657 31.0739C35.3486 31.4353 35.1566 31.7688 34.8515 31.9666C34.5689 32.1528 34.0942 32.1528 33.1506 32.1528Z",fill:"white"})]}),xg=({testnet:e,...t})=>i.jsx("svg",{...t,"aria-hidden":"true",width:"44",height:"44",viewBox:"0 0 44 44",fill:"none",xmlns:"http://www.w3.org/2000/svg",style:{background:e?"linear-gradient(180deg, #8995A9 0%, #424D5F 99.48%)":"#FCFE72"},children:i.jsx("path",{d:"M9 9H34.5183V18.112H30.3564C28.896 14.7687 25.6102 12.4171 21.777 12.4171C16.593 12.4171 12.3948 16.6422 12.3948 21.823C12.3948 27.0039 16.593 31.2654 21.777 31.2654C25.5373 31.2654 28.8231 28.9876 30.2829 25.7172H34.5178V34.682H9V9Z",fill:e?"#ffffff":"black"})}),yg=({testnet:e,...t})=>i.jsx("svg",{...t,"aria-hidden":"true",width:"44",height:"44",viewBox:"0 0 44 44",fill:"none",xmlns:"http://www.w3.org/2000/svg",style:{background:e?"linear-gradient(180deg, #8995A9 0%, #424D5F 99.48%)":"#009CB4"},children:i.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M12.3439 11.8664C17.9374 6.53462 26.7953 6.74397 32.1271 12.3374C32.4738 12.7038 32.8075 13.0832 33.1084 13.4823L22 24.5972L10.8916 13.4823C11.1991 13.0832 11.5262 12.7038 11.8729 12.3374C12.0234 12.1804 12.1804 12.0234 12.3439 11.8664ZM30.6094 13.3972C28.3196 11.0944 25.271 9.83182 22 9.83182C18.729 9.83182 15.6804 11.0944 13.3907 13.3972L22 22.0066L30.6094 13.3972ZM33.9785 14.7446L31.7215 17.0016C33.5402 19.1801 33.2523 22.425 31.0738 24.2437C29.1636 25.84 26.3897 25.84 24.4794 24.2437L22 26.7231L19.5271 24.2502C17.3486 26.0689 14.1037 25.7811 12.285 23.6026C10.6888 21.6923 10.6888 18.9185 12.285 17.0082L11.1271 15.8502L10.028 14.7446C8.7 16.9297 8 19.4418 8 21.9998C8 29.7325 14.2673 35.9998 22 35.9998C29.7327 35.9998 36 29.7325 36 21.9998C36.0065 19.4418 35.3 16.9297 33.9785 14.7446ZM30.6486 18.0747C31.1392 18.7093 31.4075 19.4943 31.4075 20.299C31.4075 21.1037 31.1392 21.8887 30.6486 22.5233C29.4187 24.113 27.1355 24.4074 25.5458 23.1775L30.6486 18.0747ZM18.4542 23.1839C17.8196 23.6745 17.0346 23.9427 16.2299 23.9427C15.4252 23.9427 14.6467 23.6745 14.0056 23.1904C12.4159 21.9605 12.1215 19.6708 13.3514 18.0811L18.4542 23.1839Z",fill:"white"})}),Cg=({testnet:e,...t})=>i.jsx("svg",{...t,"aria-hidden":"true",width:"44",height:"44",viewBox:"0 0 44 44",fill:"none",xmlns:"http://www.w3.org/2000/svg",style:{background:e?"linear-gradient(180deg, #8995A9 0%, #424D5F 99.48%)":"#2D2A25"},children:i.jsx("path",{d:"M18.4916 12.6668C12.9416 14.806 12.4332 20.2846 10.8418 22.8432C9.23155 25.4322 5.54251 26.8607 6.04698 28.1801C6.55143 29.4994 10.2449 28.0824 13.1669 28.9242C16.0543 29.7561 20.0831 33.4862 25.633 31.3469C28.4603 30.2573 30.5076 28.0143 31.449 25.3574C31.5502 25.0723 31.361 24.7673 31.0606 24.7391C30.874 24.7215 30.6948 24.8196 30.6106 24.9877C29.759 26.6908 28.2981 28.0934 26.3864 28.8301C23.2303 30.0465 19.777 29.0915 17.6562 26.6961C17.1746 26.1522 16.7626 25.533 16.4374 24.8487C16.348 24.6603 16.2629 24.4689 16.1875 24.2708C16.1117 24.0728 16.0473 23.8735 15.9881 23.6732C17.6562 22.8925 19.5812 22.0656 21.7635 21.2246C23.903 20.3999 25.8505 19.731 27.5841 19.1958C28.7571 18.8341 29.8322 18.5331 30.8029 18.2871C30.8732 18.2695 30.9423 18.2519 31.0112 18.2347C31.158 18.1982 31.3088 18.2769 31.363 18.4186L31.364 18.4213C31.396 18.5053 31.4236 18.5898 31.4535 18.6743C31.6453 19.2196 31.7892 19.7706 31.8841 20.3229C31.9258 20.5645 32.1888 20.6961 32.4044 20.5799C33.2014 20.1504 33.9302 19.7314 34.5814 19.3283C37.0083 17.8276 38.3538 16.5549 38.0776 15.8336C37.802 15.1119 35.9541 15.0705 33.1503 15.5854C32.2593 15.7491 31.2716 15.9691 30.207 16.2416C30.0229 16.2886 29.8365 16.3375 29.6481 16.3877C28.7522 16.6262 27.8073 16.8995 26.8234 17.2053C24.9936 17.7744 23.0305 18.4561 21.0038 19.2372C19.1078 19.9682 17.3109 20.726 15.6629 21.4812C15.6428 18.2761 17.5725 15.2461 20.7286 14.0297C22.6399 13.293 24.6605 13.3533 26.4285 14.0473C26.6029 14.116 26.8015 14.0684 26.9291 13.9298C27.1331 13.7076 27.0706 13.3537 26.8053 13.2094C24.3353 11.8685 21.319 11.5771 18.4916 12.6668Z",fill:"#FAF1E4"})}),wg=({testnet:e,...t})=>i.jsxs("svg",{...t,"aria-hidden":"true",width:"44",height:"44",viewBox:"0 0 44 44",fill:"none",xmlns:"http://www.w3.org/2000/svg",style:{background:e?"linear-gradient(180deg, #8995A9 0%, #424D5F 99.48%)":"#16181A"},children:[i.jsx("path",{d:"M16.0445 19.6063L21.8705 13.7805L27.6996 19.6093L31.0896 16.2193L21.8705 7L12.6545 16.2163L16.0445 19.6063Z",fill:e?"#fff":"#F3BA2F"}),i.jsx("path",{d:"M13.6505 21.9995L10.2606 18.6096L6.87046 21.9997L10.2604 25.3896L13.6505 21.9995Z",fill:e?"#fff":"#F3BA2F"}),i.jsx("path",{d:"M16.0445 24.3937L21.8705 30.2195L27.6994 24.3909L31.0913 27.779L31.0896 27.7809L21.8705 37L12.6542 27.7839L12.6495 27.7792L16.0445 24.3937Z",fill:e?"#fff":"#F3BA2F"}),i.jsx("path",{d:"M33.4808 25.3911L36.8709 22.001L33.481 18.6111L30.0909 22.0012L33.4808 25.3911Z",fill:e?"#fff":"#F3BA2F"}),i.jsx("path",{d:"M25.3091 21.9982H25.3105L21.8705 18.5582L19.3283 21.1004H19.3281L19.0362 21.3926L18.4336 21.9951L18.4289 21.9999L18.4336 22.0048L21.8705 25.4418L25.3105 22.0018L25.3122 21.9999L25.3091 21.9982Z",fill:e?"#fff":"#F3BA2F"})]}),kg=({testnet:e,...t})=>i.jsx("svg",{...t,"aria-hidden":"true",width:"44",height:"44",viewBox:"0 0 44 44",fill:"none",xmlns:"http://www.w3.org/2000/svg",style:{background:e?"linear-gradient(180deg, #8995A9 0%, #424D5F 99.48%)":"white"},children:i.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M35 8V36H9L13.875 35.9998V31.0586H9V12.9412H13.875V8H35ZM17.9373 12.9414H30.1247V17.8826H17.9373V12.9414ZM30.1247 26.9414H17.9373V17.8826L13.0623 17.8828V26.9416L17.9373 26.9414V31.8826H30.1247V26.9414Z",fill:"#06FC99"})}),_g=({testnet:e,...t})=>i.jsx("svg",{...t,"aria-hidden":"true",width:"44",height:"44",viewBox:"0 0 44 44",fill:"none",xmlns:"http://www.w3.org/2000/svg",style:{background:e?"linear-gradient(180deg, #8995A9 0%, #424D5F 99.48%)":"#0911EF"},children:i.jsx("path",{d:"M20.92 9.25864C21.5933 8.91379 22.6178 8.91379 23.2911 9.25864L30.1616 12.7775C30.5671 12.9852 30.7898 13.2947 30.8297 13.6142H30.8363V31.302C30.8274 31.6504 30.6025 31.9966 30.1616 32.2225L23.2911 35.7413C22.6178 36.0862 21.5933 36.0862 20.92 35.7413L14.0495 32.2225C13.6104 31.9976 13.3997 31.6489 13.3893 31.302C13.3883 31.2678 13.3881 31.2393 13.3891 31.2157L13.3891 13.7278C13.3884 13.7086 13.3883 13.6895 13.3889 13.6705L13.3893 13.6142L13.3924 13.6142C13.4229 13.2912 13.6355 12.9896 14.0495 12.7775L20.92 9.25864ZM29.7547 23.4821L23.2911 26.7926C22.6178 27.1374 21.5933 27.1374 20.92 26.7926L14.4706 23.4895V31.2669L20.92 34.5527C21.2842 34.7415 21.6622 34.9254 22.0318 34.9488L22.1056 34.9512C22.4907 34.9524 22.8646 34.7628 23.2438 34.5833L29.7547 31.2387V23.4821ZM11.3214 31.8437C11.3214 32.5212 11.4026 32.9667 11.5639 33.2806C11.6976 33.5407 11.8981 33.7394 12.2643 33.9813L12.2852 33.9951C12.3656 34.0476 12.4541 34.1026 12.5619 34.1672L12.689 34.2427L13.0792 34.4711L12.5195 35.3685L12.0827 35.1126L12.0093 35.0689C11.883 34.9932 11.7783 34.9284 11.6807 34.8645C10.637 34.1822 10.2478 33.4384 10.2401 31.8907L10.24 31.8437H11.3214ZM21.5647 18.7412C21.5147 18.7579 21.4678 18.7772 21.4251 18.7991L14.5546 22.318C14.5474 22.3216 14.5405 22.3253 14.534 22.3289L14.5281 22.3322L14.5389 22.3382L14.5546 22.3464L21.4251 25.8653C21.4678 25.8872 21.5147 25.9065 21.5647 25.9231V18.7412ZM22.6465 18.7412V25.9231C22.6965 25.9065 22.7433 25.8872 22.7861 25.8653L29.6566 22.3464C29.6638 22.3427 29.6707 22.3391 29.6772 22.3355L29.683 22.3322L29.6722 22.3262L29.6566 22.318L22.7861 18.7991C22.7433 18.7772 22.6965 18.7579 22.6465 18.7412ZM29.7547 14.8689L23.5915 18.0256L29.7547 21.1822V14.8689ZM14.4706 14.8763V21.1749L20.6195 18.0256L14.4706 14.8763ZM22.7861 10.1859C22.4288 10.0029 21.7824 10.0029 21.4251 10.1859L14.5546 13.7048C14.5474 13.7085 14.5405 13.7122 14.534 13.7158L14.5281 13.719L14.5389 13.725L14.5546 13.7333L21.4251 17.2522C21.7824 17.4352 22.4288 17.4352 22.7861 17.2522L29.6566 13.7333C29.6638 13.7296 29.6707 13.7259 29.6772 13.7223L29.683 13.719L29.6722 13.7131L29.6566 13.7048L22.7861 10.1859ZM31.7205 9.64552L32.1573 9.90132L32.2307 9.94503C32.357 10.0206 32.4616 10.0856 32.5593 10.1494C33.603 10.8317 33.9922 11.5756 33.9998 13.1231L34 13.1703H32.9186C32.9186 12.4926 32.8373 12.0472 32.6761 11.7334C32.5424 11.4733 32.3419 11.2745 31.9757 11.0327L31.9547 11.0189C31.8744 10.9664 31.7858 10.9113 31.6781 10.8466L31.551 10.7712L31.1608 10.5428L31.7205 9.64552Z",fill:"white"})}),jg=({testnet:e,...t})=>i.jsx("svg",{...t,"aria-hidden":"true",width:"44",height:"44",viewBox:"0 0 44 44",fill:"none",xmlns:"http://www.w3.org/2000/svg",style:{background:e?"linear-gradient(180deg, #8995A9 0%, #424D5F 99.48%)":"#0090FF"},children:i.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M23.75 19.3069L23.15 22.5069L28.85 23.3069L28.45 24.8069L22.85 24.0069C22.45 25.3069 22.25 26.7069 21.75 27.9069C21.25 29.3069 20.75 30.7069 20.15 32.0069C19.35 33.7069 17.95 34.9069 16.05 35.2069C14.95 35.4069 13.75 35.3069 12.85 34.6069C12.55 34.4069 12.25 34.0069 12.25 33.7069C12.25 33.3069 12.45 32.8069 12.75 32.6069C12.95 32.5069 13.45 32.6069 13.75 32.7069C14.05 33.0069 14.35 33.4069 14.55 33.8069C15.15 34.6069 15.95 34.7069 16.75 34.1069C17.65 33.3069 18.15 32.2069 18.45 31.1069C19.05 28.7069 19.65 26.4069 20.15 24.0069V23.6069L14.85 22.8069L15.05 21.3069L20.55 22.1069L21.25 19.0069L15.55 18.1069L15.75 16.5069L21.65 17.3069C21.85 16.7069 21.95 16.2069 22.15 15.7069C22.65 13.9069 23.15 12.1069 24.35 10.5069C25.55 8.90687 26.95 7.90687 29.05 8.00687C29.95 8.00687 30.85 8.30687 31.45 9.00687C31.55 9.10687 31.75 9.30687 31.75 9.50687C31.75 9.90687 31.75 10.4069 31.45 10.7069C31.05 11.0069 30.55 10.9069 30.15 10.5069C29.85 10.2069 29.65 9.90687 29.35 9.60687C28.75 8.80687 27.85 8.70687 27.15 9.40687C26.65 9.90687 26.15 10.6069 25.85 11.3069C25.15 13.4069 24.65 15.6069 23.95 17.8069L29.45 18.6069L29.05 20.1069L23.75 19.3069Z",fill:"white"})}),Sg=({testnet:e,...t})=>i.jsxs("svg",{...t,"aria-hidden":"true",width:"44",height:"44",viewBox:"0 0 44 44",fill:"none",xmlns:"http://www.w3.org/2000/svg",style:{background:e?"linear-gradient(180deg, #8995A9 0%, #424D5F 99.48%)":"#00D4D5"},children:[i.jsx("path",{d:"M23.7136 6.875V14.3784L30.2284 10.6315L23.7136 6.875Z",fill:"white"}),i.jsx("path",{opacity:"0.9",d:"M30.2284 10.6316V18.135L36.7418 14.3785L30.2284 10.6316Z",fill:"white"}),i.jsx("path",{opacity:"0.8",d:"M23.7136 14.3784V21.8818L30.2284 18.1349L23.7136 14.3784ZM30.2284 18.1349V25.6383L36.7417 21.8818L30.2284 18.1349Z",fill:"white"}),i.jsx("path",{opacity:"0.8",d:"M23.7136 21.8817V29.385L30.2284 25.6382L23.7136 21.8817Z",fill:"white"}),i.jsx("path",{d:"M30.2284 25.6382V33.1416L36.7418 29.3851L30.2284 25.6382Z",fill:"white"}),i.jsx("path",{opacity:"0.4",d:"M6.87537 14.1253V21.6287L13.3901 17.8722L6.87537 14.1253Z",fill:"white"}),i.jsx("path",{opacity:"0.2",d:"M15.0938 16.9153V24.4186L21.5975 20.6718L15.0938 16.9153Z",fill:"white"}),i.jsx("path",{opacity:"0.3",d:"M10.2648 21.6604V29.1638L16.7781 25.4073L10.2648 21.6604Z",fill:"white"}),i.jsx("path",{opacity:"0.9",d:"M14.5575 27.3226V34.826L21.0612 31.0695L14.5575 27.3226Z",fill:"white"}),i.jsx("path",{opacity:"0.7",d:"M23.66 30.5525V38.0572L30.1637 34.2993L23.66 30.5525Z",fill:"white"}),i.jsx("path",{opacity:"0.9",d:"M16.1786 13.2097V20.7145L22.6824 16.9676L16.1786 13.2097Z",fill:"white"}),i.jsx("path",{opacity:"0.8",d:"M23.7136 6.875V14.3784L17.1989 10.6315L23.7136 6.875Z",fill:"white"}),i.jsx("path",{opacity:"0.6",d:"M16.1786 10.0649V17.5669L9.66248 13.8104L16.1786 10.0649Z",fill:"white"}),i.jsx("path",{opacity:"0.6",d:"M22.6934 13.7775V21.2823L16.1786 17.5244L22.6934 13.7775Z",fill:"white"}),i.jsx("path",{opacity:"0.95",d:"M15.0635 16.9153V24.4186L8.54877 20.6718L15.0635 16.9153Z",fill:"white"}),i.jsx("path",{opacity:"0.6",d:"M23.7136 21.8817V29.385L17.2099 25.6382L23.7136 21.8817Z",fill:"white"}),i.jsx("path",{opacity:"0.55",d:"M10.2648 23.6295V31.1328L3.75 27.375L10.2648 23.6295Z",fill:"white"}),i.jsx("path",{d:"M36.7418 14.3784V21.8818L30.2284 18.1349L36.7418 14.3784Z",fill:"white"}),i.jsx("path",{opacity:"0.95",d:"M30.2284 18.1362V25.6382L23.7136 21.8817L30.2284 18.1362Z",fill:"white"}),i.jsx("path",{opacity:"0.9",d:"M36.7418 21.8817V29.385L30.2284 25.6382L36.7418 21.8817Z",fill:"white"}),i.jsx("path",{opacity:"0.7",d:"M30.2284 25.6382V33.1416L23.7136 29.3851L30.2284 25.6382Z",fill:"white"}),i.jsx("path",{opacity:"0.4",d:"M22.2712 28.7651V36.2684L15.7579 32.5216L22.2712 28.7651Z",fill:"white"}),i.jsx("path",{d:"M30.2284 10.6316V18.135L23.7136 14.3785L30.2284 10.6316Z",fill:"white"})]}),Eg=({testnet:e,...t})=>i.jsx("svg",{...t,"aria-hidden":"true",width:"44",height:"44",viewBox:"0 0 44 44",fill:"none",xmlns:"http://www.w3.org/2000/svg",style:{background:e?"linear-gradient(180deg, #8995A9 0%, #424D5F 99.48%)":"#2F3140"},children:i.jsx("path",{d:"M37.5175 22.0531C37.4579 19.2923 36.6563 16.5985 35.1968 14.2542C33.7374 11.91 31.674 10.0017 29.223 8.72965C26.772 7.45759 24.0238 6.86863 21.2668 7.02455C18.5098 7.18047 15.8456 8.07553 13.5537 9.61582C11.2617 11.1561 9.42659 13.2849 8.24079 15.7787C7.05498 18.2725 6.56222 21.0396 6.81419 23.7895C7.06617 26.5394 8.05359 29.1708 9.67288 31.4076C11.2922 33.6444 13.4836 35.4042 16.0173 36.5023C16.7657 35.3775 17.3385 34.1453 17.716 32.848C18.0245 32.0632 18.3595 31.2913 18.7067 30.5446C19.5444 30.7955 20.4345 30.8143 21.282 30.5989C22.1295 30.3835 22.9026 29.942 23.5188 29.3215L23.5704 29.2699C22.8136 28.9884 21.9979 28.9032 21.1993 29.022C20.4006 29.1408 19.6451 29.4598 19.0029 29.9494C19.4276 29.0613 19.891 28.1997 20.3667 27.3632C21.189 27.6541 22.075 27.7156 22.9296 27.541C23.7842 27.3665 24.5751 26.9626 25.2175 26.3726L25.2692 26.3209C24.538 26.0116 23.7416 25.8885 22.9513 25.9626C22.1609 26.0368 21.4013 26.3058 20.7404 26.7456C21.216 25.9608 21.7053 25.1889 22.2203 24.468C23.0713 24.6915 23.9672 24.6777 24.811 24.4282C25.6547 24.1787 26.414 23.703 27.0066 23.0526L27.0453 23.001C26.3425 22.7718 25.5958 22.7106 24.8651 22.8224C24.1344 22.9341 23.4401 23.2157 22.838 23.6444C22.8767 23.5928 22.9283 23.5289 22.9664 23.4773C23.2749 23.0784 23.5969 22.6796 23.9177 22.2936C24.8969 21.9731 25.7703 21.3916 26.4436 20.6117C27.117 19.8318 27.5649 18.883 27.7391 17.8674L27.752 17.79H27.7391C26.7194 18.0552 25.7944 18.6007 25.0689 19.3648C24.3434 20.1288 23.8464 21.0808 23.6343 22.1129C23.3258 22.4859 23.0167 22.8603 22.7211 23.2449C22.9706 22.5925 23.0724 21.893 23.0191 21.1966C22.9657 20.5002 22.7586 19.8243 22.4126 19.2176L22.3739 19.2692C21.8489 19.9862 21.5326 20.8345 21.4599 21.7201C21.3873 22.6058 21.5611 23.4942 21.9621 24.2872C21.4729 24.9823 20.9972 25.6897 20.5467 26.4357C20.6918 25.6858 20.6542 24.9118 20.4369 24.1795C20.2196 23.4471 19.8291 22.7779 19.2985 22.2284L19.2727 22.2929C18.9445 23.1107 18.8477 24.0031 18.9929 24.8723C19.1382 25.7415 19.5199 26.5539 20.0962 27.2205C19.6457 28.0054 19.2211 28.816 18.8093 29.6524C18.9344 28.8712 18.8712 28.0715 18.6251 27.3196C18.3789 26.5677 17.9568 25.8855 17.3939 25.3295L17.3681 25.3941C17.0745 26.2514 17.0201 27.1724 17.2105 28.0583C17.401 28.9442 17.8292 29.7614 18.4492 30.4223C18.1774 31.0012 17.9219 31.5774 17.6773 32.1849C17.61 32.1231 17.5313 32.0751 17.4456 32.0435C17.0066 31.916 16.5867 31.7299 16.1974 31.4904C15.8754 31.2994 15.5337 31.144 15.1781 31.027C13.7886 30.5765 13.9945 29.9079 13.2756 28.5564C13.0416 28.2781 12.7931 28.0125 12.5309 27.7607C12.2876 27.603 12.0884 27.386 11.9519 27.1302C11.7934 26.8107 11.6931 26.4656 11.6557 26.1109C11.6514 25.9148 11.5858 25.7249 11.4681 25.5679C11.3504 25.4109 11.1864 25.2948 10.9993 25.2358C8.95338 24.5284 9.86728 21.8778 9.94406 21.5299C9.91262 21.08 9.81271 20.6375 9.64781 20.2178C9.63057 20.1632 9.61763 20.1073 9.60908 20.0506C9.55449 19.776 9.56444 19.4924 9.63813 19.2223C9.71183 18.9521 9.84726 18.7028 10.0338 18.4939C10.2784 18.2493 11.1277 17.8505 11.3078 17.6188C11.4879 17.387 11.6163 17.1295 11.797 16.9114C12.3687 16.3412 13.0291 15.8675 13.7526 15.509C14.3444 15.1876 14.4477 14.364 14.6787 14.1065C15.0647 13.6689 15.6565 13.6689 16.0941 13.283C16.3129 13.09 16.6377 12.9867 16.8415 12.7815C17.8692 11.8403 19.1644 11.2423 20.5474 11.0706C21.5064 10.9924 22.4717 11.0795 23.4012 11.3281C23.5358 11.3507 23.669 11.3809 23.8001 11.4185C25.9228 11.4959 28.4709 11.9328 29.397 12.8338C29.8555 13.2744 30.1961 13.8229 30.3877 14.4293C30.5382 14.8988 30.7456 15.3481 31.0054 15.7672L31.5714 16.6933C31.932 17.2773 32.0475 17.9801 31.8928 18.6489C31.7885 18.974 31.7795 19.3223 31.8669 19.6525C32.1655 20.1031 32.5152 20.5177 32.9093 20.8878C33.0658 21.0427 33.2382 21.1807 33.4236 21.2995C33.8592 21.5594 34.2802 21.8429 34.6848 22.1489C34.698 22.2729 34.6775 22.3982 34.6254 22.5115C34.5732 22.6247 34.4914 22.7218 34.3885 22.7924C34.0284 23.1137 33.3333 23.6159 33.3333 23.6159C33.3584 23.758 33.4016 23.8964 33.4617 24.0276C33.5643 24.2077 33.796 24.4911 33.7192 24.735C33.6424 24.9789 33.1403 25.1855 33.2816 25.4552C33.423 25.7386 33.7831 25.8154 33.6805 26.0729C33.5779 26.3175 33.0757 26.7524 33.1274 26.9352C33.179 27.1179 33.5908 28.8377 32.6382 29.1353C31.4592 29.3685 30.2627 29.5019 29.0614 29.5342C28.8675 29.5454 28.6797 29.6055 28.5155 29.709C28.3513 29.8125 28.216 29.956 28.1223 30.126C27.9399 30.4661 27.8222 30.837 27.7751 31.22C27.4275 32.5896 26.9671 33.928 26.3985 35.2215C26.3985 35.2215 26.3597 35.2989 26.3081 35.4144C26.1833 35.6687 26.1048 35.9432 26.0764 36.2251C26.1573 36.4321 26.2799 36.6204 26.4365 36.7782C26.519 36.8726 26.6271 36.9411 26.7477 36.9753C26.8683 37.0096 26.9962 37.0081 27.116 36.9711C30.1997 35.8965 32.8655 33.8757 34.7332 31.197C36.601 28.5182 37.5754 25.3182 37.5175 22.0531Z",fill:e?"#ffffff":"#00DACC"})}),Ig=({testnet:e,...t})=>i.jsx("svg",{...t,width:"44",height:"44",viewBox:"0 0 44 44",fill:"none",xmlns:"http://www.w3.org/2000/svg",style:{background:e?"linear-gradient(180deg, #8995A9 0%, #424D5F 99.48%)":"#0052FF"},children:i.jsx("path",{d:"M21.9756 36C29.721 36 36 29.732 36 22C36 14.268 29.721 8 21.9756 8C14.6271 8 8.59871 13.6419 8 20.8232H26.5371V23.1768H8C8.59871 30.3581 14.6271 36 21.9756 36Z",fill:"white"})}),Ng=({testnet:e,...t})=>i.jsxs("svg",{...t,width:"44",height:"44",viewBox:"0 0 44 44",fill:"none",xmlns:"http://www.w3.org/2000/svg",style:{filter:e?"grayscale(1)":"none"},children:[i.jsx("mask",{id:"ck_zora_mask_a",style:{maskType:"alpha"},maskUnits:"userSpaceOnUse",x:"0",y:"0",width:"44",height:"44",children:i.jsx("path",{d:"M22 44C34.1503 44 44 34.1503 44 22C44 9.84974 34.1503 0 22 0C9.84974 0 0 9.84974 0 22C0 34.1503 9.84974 44 22 44Z",fill:"#D9D9D9"})}),i.jsxs("g",{mask:"url(#ck_zora_mask_a)",children:[i.jsx("path",{d:"M51.4558 -9.56445H-6.78906V48.6804H51.4558V-9.56445Z",fill:"#A1723A"}),i.jsx("g",{filter:"url(#ck_zora_filter_a)",children:i.jsx("path",{d:"M23.6807 43.0752C36.6464 43.0752 47.157 32.5675 47.157 19.6058C47.157 6.64397 36.6464 -3.86365 23.6807 -3.86365C10.7152 -3.86365 0.20459 6.64397 0.20459 19.6058C0.20459 32.5675 10.7152 43.0752 23.6807 43.0752Z",fill:"#531002"})}),i.jsx("g",{filter:"url(#ck_zora_filter_b)",children:i.jsx("path",{d:"M26.2112 35.6464C36.7271 35.6464 45.2521 27.1185 45.2521 16.5988C45.2521 6.07904 36.7271 -2.44885 26.2112 -2.44885C15.6953 -2.44885 7.17041 6.07904 7.17041 16.5988C7.17041 27.1185 15.6953 35.6464 26.2112 35.6464Z",fill:"#2B5DF0"})}),i.jsx("g",{filter:"url(#ck_zora_filter_c)",children:i.jsx("path",{d:"M25.8644 36.7348C36.8276 36.7348 45.7149 27.8444 45.7149 16.8777C45.7149 5.91084 36.8276 -2.97949 25.8644 -2.97949C14.9015 -2.97949 6.01416 5.91084 6.01416 16.8777C6.01416 27.8444 14.9015 36.7348 25.8644 36.7348Z",fill:"url(#paint0_radial_3914_1946)"})}),i.jsx("g",{filter:"url(#ck_zora_filter_d)",children:i.jsx("path",{d:"M29.1567 21.8779C34.6797 21.8779 39.1567 17.4008 39.1567 11.8779C39.1567 6.35509 34.6797 1.87793 29.1567 1.87793C23.6338 1.87793 19.1567 6.35509 19.1567 11.8779C19.1567 17.4008 23.6338 21.8779 29.1567 21.8779Z",fill:"#FCB8D4"})}),i.jsx("g",{filter:"url(#ck_zora_filter_e)",children:i.jsx("path",{d:"M29.15 15.8642C31.3555 15.8642 33.1432 14.0765 33.1432 11.871C33.1432 9.66562 31.3555 7.87781 29.15 7.87781C26.9445 7.87781 25.1567 9.66562 25.1567 11.871C25.1567 14.0765 26.9445 15.8642 29.15 15.8642Z",fill:"white"})}),i.jsx("g",{filter:"url(#ck_zora_filter_f)",children:i.jsx("path",{d:"M26.4967 51.7416C46.3151 51.7416 62.3811 35.6757 62.3811 15.8573C62.3811 -3.96109 46.3151 -20.0271 26.4967 -20.0271C6.67829 -20.0271 -9.3877 -3.96109 -9.3877 15.8573C-9.3877 35.6757 6.67829 51.7416 26.4967 51.7416Z",fill:"url(#paint1_radial_3914_1946)",fillOpacity:"0.9"})})]}),i.jsxs("defs",{children:[i.jsxs("filter",{id:"ck_zora_filter_a",x:"-5.23758",y:"-9.30581",width:"57.837",height:"57.8232",filterUnits:"userSpaceOnUse",colorInterpolationFilters:"sRGB",children:[i.jsx("feFlood",{floodOpacity:"0",result:"BackgroundImageFix"}),i.jsx("feBlend",{mode:"normal",in:"SourceGraphic",in2:"BackgroundImageFix",result:"shape"}),i.jsx("feGaussianBlur",{stdDeviation:"2.72108",result:"effect1_foregroundBlur_3914_1946"})]}),i.jsxs("filter",{id:"ck_zora_filter_b",x:"-3.71395",y:"-13.3332",width:"59.8503",height:"59.8639",filterUnits:"userSpaceOnUse",colorInterpolationFilters:"sRGB",children:[i.jsx("feFlood",{floodOpacity:"0",result:"BackgroundImageFix"}),i.jsx("feBlend",{mode:"normal",in:"SourceGraphic",in2:"BackgroundImageFix",result:"shape"}),i.jsx("feGaussianBlur",{stdDeviation:"5.44218",result:"effect1_foregroundBlur_3914_1946"})]}),i.jsxs("filter",{id:"ck_zora_filter_c",x:"1.93251",y:"-7.06114",width:"47.864",height:"47.8775",filterUnits:"userSpaceOnUse",colorInterpolationFilters:"sRGB",children:[i.jsx("feFlood",{floodOpacity:"0",result:"BackgroundImageFix"}),i.jsx("feBlend",{mode:"normal",in:"SourceGraphic",in2:"BackgroundImageFix",result:"shape"}),i.jsx("feGaussianBlur",{stdDeviation:"2.04082",result:"effect1_foregroundBlur_3914_1946"})]}),i.jsxs("filter",{id:"ck_zora_filter_d",x:"10.9935",y:"-6.28533",width:"36.3265",height:"36.3265",filterUnits:"userSpaceOnUse",colorInterpolationFilters:"sRGB",children:[i.jsx("feFlood",{floodOpacity:"0",result:"BackgroundImageFix"}),i.jsx("feBlend",{mode:"normal",in:"SourceGraphic",in2:"BackgroundImageFix",result:"shape"}),i.jsx("feGaussianBlur",{stdDeviation:"4.08163",result:"effect1_foregroundBlur_3914_1946"})]}),i.jsxs("filter",{id:"ck_zora_filter_e",x:"19.7146",y:"2.43564",width:"18.8707",height:"18.8708",filterUnits:"userSpaceOnUse",colorInterpolationFilters:"sRGB",children:[i.jsx("feFlood",{floodOpacity:"0",result:"BackgroundImageFix"}),i.jsx("feBlend",{mode:"normal",in:"SourceGraphic",in2:"BackgroundImageFix",result:"shape"}),i.jsx("feGaussianBlur",{stdDeviation:"2.72108",result:"effect1_foregroundBlur_3914_1946"})]}),i.jsxs("filter",{id:"ck_zora_filter_f",x:"-13.4693",y:"-24.1087",width:"79.9318",height:"79.9321",filterUnits:"userSpaceOnUse",colorInterpolationFilters:"sRGB",children:[i.jsx("feFlood",{floodOpacity:"0",result:"BackgroundImageFix"}),i.jsx("feBlend",{mode:"normal",in:"SourceGraphic",in2:"BackgroundImageFix",result:"shape"}),i.jsx("feGaussianBlur",{stdDeviation:"2.04082",result:"effect1_foregroundBlur_3914_1946"})]}),i.jsxs("radialGradient",{id:"paint0_radial_3914_1946",cx:"0",cy:"0",r:"1",gradientUnits:"userSpaceOnUse",gradientTransform:"translate(29.2127 11.2756) rotate(128.228) scale(37.4897 37.4867)",children:[i.jsx("stop",{offset:"0.286458",stopColor:"#387AFA"}),i.jsx("stop",{offset:"0.647782",stopColor:"#387AFA",stopOpacity:"0"})]}),i.jsxs("radialGradient",{id:"paint1_radial_3914_1946",cx:"0",cy:"0",r:"1",gradientUnits:"userSpaceOnUse",gradientTransform:"translate(26.4967 15.8573) rotate(90) scale(35.8844 35.8844)",children:[i.jsx("stop",{offset:"0.598958",stopOpacity:"0"}),i.jsx("stop",{offset:"0.671875"}),i.jsx("stop",{offset:"0.734375",stopOpacity:"0"})]})]})]});var ee={UnknownChain:dg,Base:Ig,LensChain:pg,Ethereum:ug,Polygon:hg,Optimism:fg,Arbitrum:gg,Aurora:vg,Avalanche:bg,Celo:xg,Telos:mg,Gnosis:yg,Evmos:Cg,BinanceSmartChain:wg,Foundry:Sn,Sepolia:Sn,Taraxa:Sn,zkSync:Sn,Flare:Sn,Canto:kg,Fantom:_g,Filecoin:jg,Metis:Eg,IoTeX:Sg,Zora:Ng};const qs=[{id:1,name:"Ethereum",logo:i.jsx(ee.Ethereum,{}),rpcUrls:{alchemy:{http:["https://eth-mainnet.g.alchemy.com/v2"],webSocket:["wss://eth-mainnet.g.alchemy.com/v2"]},infura:{http:["https://mainnet.infura.io/v3"],webSocket:["wss://mainnet.infura.io/ws/v3"]}}},{id:232,name:"Lens Chain",logo:i.jsx(ee.LensChain,{})},{id:37111,name:"Lens Chain Testnet",logo:i.jsx(ee.LensChain,{testnet:!0})},{id:3,name:"Rinkeby",logo:i.jsx(ee.Ethereum,{testnet:!0}),rpcUrls:{}},{id:4,name:"Ropsten",logo:i.jsx(ee.Ethereum,{testnet:!0})},{id:5,name:"Görli",logo:i.jsx(ee.Ethereum,{testnet:!0})},{id:42,name:"Kovan",logo:i.jsx(ee.Ethereum,{testnet:!0})},{id:10,name:"Optimism",logo:i.jsx(ee.Optimism,{})},{id:69,name:"Optimism Kovan",logo:i.jsx(ee.Optimism,{testnet:!0})},{id:420,name:"Optimism Goerli",logo:i.jsx(ee.Optimism,{testnet:!0})},{id:11155420,name:"Optimism Sepolia",logo:i.jsx(ee.Optimism,{testnet:!0})},{id:137,name:"Polygon",logo:i.jsx(ee.Polygon,{})},{id:80001,name:"Polygon Mumbai",logo:i.jsx(ee.Polygon,{testnet:!0})},{id:31337,name:"Hardhat",logo:i.jsx(ee.Ethereum,{testnet:!0})},{id:1337,name:"Localhost",logo:i.jsx(ee.Ethereum,{testnet:!0})},{id:42161,name:"Arbitrum",logo:i.jsx(ee.Arbitrum,{}),rpcUrls:{alchemy:{http:["https://arb-mainnet.g.alchemy.com/v2"],webSocket:["wss://arb-mainnet.g.alchemy.com/v2"]},infura:{http:["https://arbitrum-mainnet.infura.io/v3"],webSocket:["wss://arbitrum-mainnet.infura.io/ws/v3"]}}},{id:421611,name:"Arbitrum Rinkeby",logo:i.jsx(ee.Arbitrum,{testnet:!0})},{id:421613,name:"Arbitrum Goerli",logo:i.jsx(ee.Arbitrum,{testnet:!0}),rpcUrls:{alchemy:{http:["https://arb-goerli.g.alchemy.com/v2"],webSocket:["wss://arb-goerli.g.alchemy.com/v2"]},infura:{http:["https://arbitrum-goerli.infura.io/v3"],webSocket:["wss://arbitrum-goerli.infura.io/ws/v3"]}}},{id:40,name:"Telos",logo:i.jsx(ee.Telos,{})},{id:41,name:"Telos Testnet",logo:i.jsx(ee.Telos,{testnet:!0})},{id:1313161554,name:"Aurora",logo:i.jsx(ee.Aurora,{})},{id:1313161555,name:"Aurora Testnet",logo:i.jsx(ee.Aurora,{testnet:!0})},{id:43114,name:"Avalanche",logo:i.jsx(ee.Avalanche,{})},{id:43113,name:"Avalanche Fuji",logo:i.jsx(ee.Avalanche,{testnet:!0})},{id:31337,name:"Foundry",logo:i.jsx(ee.Foundry,{testnet:!0})},{id:100,name:"Gnosis",logo:i.jsx(ee.Gnosis,{})},{id:9001,name:"Evmos",logo:i.jsx(ee.Evmos,{})},{id:9e3,name:"Evmos Testnet",logo:i.jsx(ee.Evmos,{testnet:!0})},{id:56,name:"BNB Smart Chain",logo:i.jsx(ee.BinanceSmartChain,{})},{id:97,name:"Binance Smart Chain Testnet",logo:i.jsx(ee.BinanceSmartChain,{testnet:!0})},{id:11155111,name:"Sepolia",logo:i.jsx(ee.Sepolia,{})},{id:841,name:"Taraxa",logo:i.jsx(ee.Taraxa,{})},{id:842,name:"Taraxa Testnet",logo:i.jsx(ee.Taraxa,{testnet:!0})},{id:324,name:"zkSync",logo:i.jsx(ee.zkSync,{})},{id:280,name:"zkSync Testnet",logo:i.jsx(ee.zkSync,{testnet:!0})},{id:42220,name:"Celo",logo:i.jsx(ee.Celo,{})},{id:44787,name:"Celo Alfajores",logo:i.jsx(ee.Celo,{testnet:!0})},{id:7700,name:"Canto",logo:i.jsx(ee.Canto,{})},{id:250,name:"Fantom",logo:i.jsx(ee.Fantom,{})},{id:4002,name:"Fantom Testnet",logo:i.jsx(ee.Fantom,{testnet:!0})},{id:14,name:"Flare",logo:i.jsx(ee.Flare,{})},{id:114,name:"Coston2",logo:i.jsx(ee.Flare,{})},{id:314,name:"Filecoin",logo:i.jsx(ee.Filecoin,{})},{id:3141,name:"Filecoin Hyperspace",logo:i.jsx(ee.Filecoin,{testnet:!0})},{id:314159,name:"Filecoin Calibration",logo:i.jsx(ee.Filecoin,{testnet:!0})},{id:1088,name:"Metis",logo:i.jsx(ee.Metis,{})},{id:599,name:"Metis Goerli",logo:i.jsx(ee.Metis,{testnet:!0})},{id:4689,name:"IoTeX",logo:i.jsx(ee.IoTeX,{})},{id:4690,name:"IoTeX Testnet",logo:i.jsx(ee.IoTeX,{testnet:!0})},{id:8453,name:"Base",logo:i.jsx(ee.Base,{})},{id:84531,name:"Base Goerli",logo:i.jsx(ee.Base,{testnet:!0})},{id:84532,name:"Base Sepolia",logo:i.jsx(ee.Base,{testnet:!0})},{id:7777777,name:"Zora",logo:i.jsx(ee.Zora,{})},{id:999999999,name:"Zora Sepolia",logo:i.jsx(ee.Zora,{testnet:!0})},{id:999,name:"Zora Goerli Testnet",logo:i.jsx(ee.Zora,{testnet:!0})}],Mg=D.div`
  display: flex;
  flex-direction: column;

  @media only screen and (max-width: ${xe.mobileWidth}px) {
    flex-direction: column-reverse;
  }
`,Ag=D(B.div)`
  display: block;
  position: relative;
  border-radius: 12px;
  overflow: hidden;
  width: 24px;
  height: 24px;
  min-width: 24px;
  min-height: 24px;
  background: var(--ck-body-background);
  svg {
    border-radius: inherit;
    display: block;
    position: relative;
    transform: translate3d(0, 0, 0);
    width: 100%;
    height: auto;
  }
  ${e=>e.$empty&&se`
      display: flex;
      align-items: center;
      justify-content: center;
      &:before {
        content: '?';
        color: var(--ck-body-color-muted);
        font-weight: bold;
        font-family: var(--ck-font-family);
      }
    `}
  @media only screen and (max-width: ${xe.mobileWidth}px) {
    border-radius: 16px;
    width: 32px;
    height: 32px;
  }
`,Lg=D(B.div)`
  position: relative;
`,Tg=D(B.div)`
  position: absolute;
  inset: -6px;
  animation: rotateSpinner 1200ms linear infinite;
  pointer-events: none;
  svg {
    display: block;
    position: relative;
    transform: translate3d(0, 0, 0);
    width: 100%;
    height: auto;
  }
  @keyframes rotateSpinner {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`,Og=D.div`
  position: relative;
  margin: -8px -8px;
  &:after {
    border-radius: var(--border-radius, 0);
    z-index: 2;
    content: '';
    pointer-events: none;
    position: absolute;
    inset: 0 2px;
    box-shadow: inset 0 16px 8px -12px var(--background, var(--ck-body-background)),
      inset 0 -16px 8px -12px var(--background, var(--ck-body-background));
  }
`,Fg=D(B.div)`
  padding: 8px;
  overflow-x: hidden;
  overflow-y: auto;
  max-height: 242px;

  -ms-overflow-style: none; /* Internet Explorer 10+ */
  scrollbar-width: none; /* Firefox */
  &::-webkit-scrollbar {
    display: none; /* Safari and Chrome */
  }

  @media only screen and (max-width: ${xe.mobileWidth}px) {
    padding: 8px 14px;
    margin: 2px -2px 0;
    max-height: 60vh;
  }
`,Rg=D(B.button)`
  appearance: none;
  cursor: pointer;
  user-select: none;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  border-radius: 11px;
  margin: 0 0 1px;
  padding: 8px 0;
  padding-right: 154px;
  font-size: 15px;
  line-height: 18px;
  font-weight: 500;
  text-decoration: none;
  color: var(--ck-body-color);
  background: none;
  white-space: nowrap;
  transition: transform 100ms ease, background-color 100ms ease;
  transform: translateZ(0px);
  &:before {
    content: '';
    background: currentColor;
    position: absolute;
    z-index: -1;
    inset: 0 var(--ck-dropdown-active-inset, -8px);
    border-radius: var(--ck-dropdown-active-border-radius, 12px);
    opacity: 0;
    transition: opacity 180ms ease;
  }
  &:after {
    content: '';
    position: absolute;
    z-index: -1;
    inset: 0 var(--ck-dropdown-active-inset, -8px);
    border-radius: 12px;
    opacity: 0;
    transition: opacity 180ms ease;
    outline: 2px solid var(--ck-focus-color);
  }
  @media only screen and (max-width: ${xe.mobileWidth}px) {
    font-size: 17px;
    padding: 8px 0;
  }
  @media only screen and (min-width: ${xe.mobileWidth}px) {
    &:hover {
      &:before {
        transition-duration: 80ms;
        opacity: 0.05;
      }
    }
  }
  &:active {
    transform: scale(0.99) translateZ(0px);
  }
  &:disabled {
    //opacity: 0.4;
    pointer-events: none;
  }
  &:focus-visible {
    outline: none !important;
    &:after {
      opacity: 1;
    }
  }
  ${e=>e.$variant==="secondary"&&se`
      padding: 12px 4px;
      margin: 0 0 8px;
      &:last-child {
        margin-bottom: 0;
      }
      &:before {
        opacity: 0.05;
      }
      &:hover:before {
        opacity: 0.1;
      }
    `}
`,Dg=D(B.div)`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;

  color: var(--ck-body-color-muted);
  font-size: 15px;
  line-height: 18px;
  font-weight: 500;
  padding-right: 4px;
  span {
    display: block;
    position: relative;
  }
  @media only screen and (max-width: ${xe.mobileWidth}px) {
    font-size: 17px;
    padding: 0;
  }
`,b1=D(B.div)`
  position: absolute;
  z-index: -1;
  inset: 0 var(--ck-dropdown-active-inset, -8px);
  background: var(--ck-dropdown-active-background, rgba(26, 136, 248, 0.1));
  box-shadow var(--ck-dropdown-active-box-shadow);
  border-radius: var(--ck-dropdown-active-border-radius, 12px);
  
  @media only screen and (max-width: ${xe.mobileWidth}px) {
    inset: 0 var(--ck-dropdown-active-inset, -8px);
  }
`,zg=i.jsxs("svg",{"aria-hidden":"true",width:"36",height:"36",viewBox:"0 0 36 36",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[i.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M2 16.75C2.69036 16.75 3.25 17.3096 3.25 18V19C3.25 26.5939 9.40609 32.75 17 32.75V35.25C8.02537 35.25 0.75 27.9746 0.75 19V18C0.75 17.3096 1.30964 16.75 2 16.75Z",fill:"url(#paint0_linear_1288_18701)"}),i.jsx("defs",{children:i.jsxs("linearGradient",{id:"paint0_linear_1288_18701",x1:"2",y1:"19.4884",x2:"16.8752",y2:"33.7485",gradientUnits:"userSpaceOnUse",children:[i.jsx("stop",{stopColor:"var(--ck-spinner-color)"}),i.jsx("stop",{offset:"1",stopColor:"var(--ck-spinner-color)",stopOpacity:"0"})]})})]}),gu=({variant:e})=>{const{connector:t,chain:n}=We(),{chains:r,isPending:o,switchChain:a,error:s}=rs(),[c,l]=M.useState(void 0),d=De({}),u=Zn(),p=(s==null?void 0:s.code)===4902,m=p||!a,v=y=>{a&&(l(y),a({chainId:y}))},{triggerResize:f}=_e();return i.jsxs(Mg,{style:{marginBottom:a!==void 0?-8:0},children:[i.jsx(Og,{children:i.jsx(Fg,{children:r.map(y=>{var _;const x={...qs.find(N=>N.id===y.id),...y};return i.jsxs(Rg,{$variant:e,disabled:m||x.id===(n==null?void 0:n.id)||o&&c===x.id,onClick:()=>v==null?void 0:v(x.id),style:{opacity:m&&x.id!==(n==null?void 0:n.id)?.4:void 0},children:[i.jsxs("span",{style:{display:"flex",alignItems:"center",justifyContent:"flex-start",gap:12,color:x.id===(n==null?void 0:n.id)?"var(--ck-dropdown-active-color, inherit)":"inherit"},children:[i.jsxs(Lg,{children:[i.jsx(Tg,{initial:{opacity:0},animate:{opacity:o&&c===x.id?1:0},transition:{ease:[.76,0,.24,1],duration:.15,delay:.1},children:i.jsx(B.div,{animate:u&&Po(t==null?void 0:t.id)&&o&&c===x.id?{opacity:[1,0],transition:{delay:4,duration:3}}:{opacity:1},children:zg},`${x==null?void 0:x.id}-${x==null?void 0:x.name}`)}),i.jsx(Ag,{children:(_=x.logo)!==null&&_!==void 0?_:i.jsx(ee.UnknownChain,{})})]}),x.name]}),e!=="secondary"&&i.jsx(Dg,{children:i.jsxs(Se,{initial:!1,exitBeforeEnter:!0,children:[x.id===(n==null?void 0:n.id)&&i.jsx(B.span,{style:{color:"var(--ck-dropdown-active-color, var(--ck-focus-color))",display:"block",position:"relative"},initial:{opacity:0,x:-4},animate:{opacity:1,x:0},exit:{opacity:0,x:4,transition:{duration:.1,delay:0}},transition:{ease:[.76,0,.24,1],duration:.3,delay:.2},children:d.connected},"connectedText"),o&&c===x.id&&i.jsx(B.span,{style:{color:"var(--ck-dropdown-pending-color, inherit)",display:"block",position:"relative"},initial:{opacity:0,x:-4},animate:{opacity:1,x:0},exit:{opacity:0,x:4},transition:{ease:[.76,0,.24,1],duration:.3,delay:.1},children:i.jsx(B.span,{animate:u&&Po(t==null?void 0:t.id)&&{opacity:[1,0],transition:{delay:4,duration:4}},children:d.approveInWallet})},"approveText")]})}),e==="secondary"?i.jsx(b1,{initial:!1,animate:{opacity:x.id===(n==null?void 0:n.id)?1:0},transition:{duration:.3,ease:"easeOut"}}):x.id===(n==null?void 0:n.id)&&i.jsx(b1,{layoutId:"activeChain",layout:"position",transition:{duration:.3,ease:"easeOut"}})]},`${x==null?void 0:x.id}-${x==null?void 0:x.name}`)})})}),i.jsx(Se,{children:p&&i.jsx(B.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{ease:[.76,0,.24,1],duration:.3},onAnimationStart:f,onAnimationComplete:f,children:i.jsx("div",{style:{paddingTop:10,paddingBottom:8},children:i.jsxs(Gn,{children:[d.warnings_walletSwitchingUnsupported," ",d.warnings_walletSwitchingUnsupportedResolve]})})})})]})},Bg=D(B.div)`
  z-index: 2147483647;
  position: fixed;
  inset: 0;
`,Pg=D(B.div)`
  position: absolute;
  inset: 0;
`,Wg=D(B.div)`
  --shadow: 0px 2px 15px rgba(0, 0, 0, 0.15);
  --background: var(--ck-dropdown-background, var(--ck-tooltip-background));
  --border-radius: var(
    --ck-dropdown-border-radius,
    var(--ck-tooltip-border-radius, 12px)
  );

  pointer-events: auto;
  z-index: 2147483647;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  max-width: fit-content;
  padding: 14px 16px 16px;
  color: var(--ck-dropdown-color, var(--ck-tooltip-color));
  background: var(--background);
  box-shadow: var(
    --ck-dropdown-box-shadow,
    var(--ck-tooltip-shadow, var(--shadow))
  );
  border-radius: var(--border-radius);
`,Vg=D(B.div)`
  padding: 0 0 6px;
  font-size: 14px;
  line-height: 20px;
  font-weight: 400;
  user-select: none;
  color: var(--ck-dropdown-color, var(--ck-tooltip-color));
`,Ug=({children:e,open:t,onClose:n,offsetX:r=0,offsetY:o=8})=>{var a,s,c;const l=_e(),d=ti(),u=De(),[p,m]=M.useState({x:0,y:0});X0(t);const v=M.useRef(null);M.useEffect(()=>{const R=z=>{var h,g,b;if(t&&(z.key==="Escape"&&n(),z.key==="ArrowDown"||z.key==="ArrowUp")){if(!v.current)return;z.preventDefault();const w=(h=v.current)===null||h===void 0?void 0:h.querySelectorAll(`
            a[href]:not(:disabled),
            button:not(:disabled),
            textarea:not(:disabled),
            input[type="text"]:not(:disabled),
            input[type="radio"]:not(:disabled),
            input[type="checkbox"]:not(:disabled),
            select:not(:disabled)
          `),C=w[0],j=w[w.length-1];if(z.key==="ArrowUp")if(document.activeElement===C)j.focus();else{let I=(g=document==null?void 0:document.activeElement)===null||g===void 0?void 0:g.previousSibling;for(I||(I=j);I.disabled;)I=I.previousSibling;I.focus()}else if(document.activeElement===j)C.focus();else{let I=(b=document==null?void 0:document.activeElement)===null||b===void 0?void 0:b.nextSibling;for(I||(I=C);I.disabled;)I=I.nextSibling;I.focus()}}};return document.addEventListener("keydown",R),()=>{document.removeEventListener("keydown",R)}},[t]);const f=M.useRef(null),y=M.useCallback(R=>{R&&(f.current=R,x())},[t]),[_,k]=As({debounce:120,offsetSize:!0,scroll:!0}),x=()=>{if(!f.current||k.top+k.bottom+k.left+k.right+k.height+k.width===0)return;let R=k.left+r,z=k.top+k.height+o;f.current.style.left=`${R}px`,f.current.style.top=`${z}px`};(typeof window<"u"?M.useLayoutEffect:M.useEffect)(x,[f.current,k,t]),M.useEffect(x,[t,f.current]);const A=n,S=n;return M.useEffect(()=>(x(),window.addEventListener("scroll",A),window.addEventListener("resize",S),()=>{window.removeEventListener("scroll",A),window.removeEventListener("resize",S)}),[]),i.jsxs(i.Fragment,{children:[i.jsx("div",{ref:_,children:e}),i.jsx(Se,{children:t&&i.jsx(Fs,{children:i.jsx(Hn,{$useTheme:(a=d.theme)!==null&&a!==void 0?a:l.theme,$useMode:(s=d.mode)!==null&&s!==void 0?s:l.mode,$customTheme:(c=d.customTheme)!==null&&c!==void 0?c:l.customTheme,children:i.jsx(J0,{children:i.jsxs(Bg,{ref:v,children:[i.jsx(Pg,{onClick:n}),i.jsxs(Wg,{ref:y,style:{left:p.x,top:p.y},initial:"collapsed",animate:"open",exit:"collapsed",variants:{collapsed:{transformOrigin:"0 0",opacity:0,scale:.96,z:.01,y:-4,x:0,transition:{duration:.1}},open:{transformOrigin:"0 0",willChange:"opacity,transform",opacity:1,scale:1,z:.01,y:0,x:0,transition:{ease:[.76,0,.24,1],duration:.15}}},children:[i.jsx(Vg,{children:u.switchNetworks}),i.jsx(gu,{})]})]})})})})})]})},Zg=D.div`
  --bg: transparent;
  --color: #333;
  ${e=>typeof e.size=="string"?se`
          --width: ${e.size};
          --height: ${e.size};
        `:se`
          --width: ${e.size>=0?`${e.size}px`:"24px"};
          --height: ${e.size>=0?`${e.size}px`:"24px"};
        `};
  ${e=>typeof e.radius=="string"?se`
          --radius: ${e.radius};
        `:se`
          --radius: ${e.radius>=0?`${e.radius}px`:"24px"};
        `};
  display: block;
  position: relative;
  width: var(--width);
  height: var(--height);
  min-width: var(--width);
  min-height: var(--height);
  border-radius: var(--radius);
  background: var(--ck-body-background-secondary);
  pointer-events: none;
  user-select: none;
  svg {
    display: block;
    width: 100%;
    height: auto;
  }
  > div {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`,$g=D(B.div)`
  display: block;
  position: absolute;
  inset: 0;
  overflow: hidden;
  border-radius: inherit;
  user-select: none;
  display: flex;
  align-items: center;
  justify-content: center;
  svg {
    display: block;
    width: 100%;
    height: auto;
  }
`,Hg=ke`
  0%{ transform: rotate(0deg); }
  100%{ transform: rotate(360deg); }
`,Gg=D(B.div)`
  position: absolute;
  inset: 0;
  animation: ${Hg} 1s linear infinite;
  svg {
    display: block;
    position: absolute;
    inset: 0;
  }
`,Yg=D(B.div)`
  z-index: 2;
  position: absolute;
  top: 0;
  right: 0;
  width: 40%;
  height: 40%;
  min-width: 13px;
  min-height: 13px;
  color: var(--ck-body-color-danger, red);
  svg {
    display: block;
    position: relative;
    top: -30%;
    right: -30%;
  }
`,qg=i.jsxs("svg",{"aria-hidden":"true",width:"36",height:"36",viewBox:"0 0 36 36",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[i.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M11.3592 30.1654C10.0472 29.4491 8.85718 28.524 7.83713 27.424C6.81708 26.324 5.98425 25.0677 5.36889 23.7054C5.20157 23.335 5.05033 22.9567 4.91578 22.5717C4.51465 21.4237 4.26735 20.2308 4.17794 19.0239C4.16599 18.8626 4.13894 18.7041 4.09809 18.5507C3.85023 17.6197 3.09399 16.8738 2.11531 16.7999C0.975331 16.7138 -0.0310983 17.5702 0.0141657 18.7125C0.0223289 18.9185 0.0340286 19.1243 0.049253 19.3298C0.165374 20.8971 0.486545 22.4464 1.00749 23.9373C1.10424 24.2142 1.20764 24.4884 1.31755 24.7596C2.13617 26.7799 3.31595 28.6371 4.80146 30.239C6.28696 31.841 8.04998 33.1573 10.0029 34.1258C10.2651 34.2558 10.5307 34.3796 10.7995 34.4969C12.247 35.1287 13.7676 35.5656 15.3217 35.7995C15.5255 35.8301 15.7298 35.8573 15.9346 35.881C17.0703 36.0122 18.0001 35.0731 18.0001 33.9299C18.0001 32.9484 17.3133 32.1381 16.4036 31.8208C16.2537 31.7685 16.0977 31.7296 15.9377 31.7056C14.7411 31.5255 13.5702 31.1891 12.4556 30.7026C12.0818 30.5394 11.716 30.3601 11.3592 30.1654Z",fill:"url(#paint0_linear_1288_1870)"}),i.jsx("defs",{children:i.jsxs("linearGradient",{id:"paint0_linear_1288_1870",x1:"2",y1:"19.4884",x2:"16.8752",y2:"33.7485",gradientUnits:"userSpaceOnUse",children:[i.jsx("stop",{stopColor:"var(--ck-connectbutton-balance-color,currentColor)",stopOpacity:"0.7"}),i.jsx("stop",{offset:"1",stopColor:"var(--ck-connectbutton-balance-color,currentColor)",stopOpacity:"0"})]})})]}),vr=({id:e,unsupported:t,radius:n="50%",size:r=24})=>{var o;const a=Mt(e),s=t??!a,c=qs.find(d=>d.id===e);return Kn()?i.jsx(Zg,{size:r,radius:n,children:i.jsxs(Se,{initial:!1,children:[s&&i.jsx(Yg,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},children:i.jsxs("svg",{width:"13",height:"12",viewBox:"0 0 13 12",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[i.jsx("path",{d:"M2.61317 11.2501H9.46246C10.6009 11.2501 11.3256 10.3506 11.3256 9.3549C11.3256 9.05145 11.255 8.73244 11.0881 8.43303L7.65903 2.14708C7.659 2.14702 7.65897 2.14696 7.65893 2.1469C7.65889 2.14682 7.65884 2.14673 7.65879 2.14664C7.31045 1.50746 6.6741 1.17871 6.04 1.17871C5.41478 1.17871 4.763 1.50043 4.41518 2.14968L0.993416 8.43476C0.828865 8.72426 0.75 9.04297 0.75 9.3549C0.75 10.3506 1.47471 11.2501 2.61317 11.2501Z",fill:"currentColor",stroke:"var(--ck-body-background, #fff)",strokeWidth:"1.5"}),i.jsx("path",{d:"M6.03258 7.43916C5.77502 7.43916 5.63096 7.29153 5.62223 7.02311L5.55675 4.96973C5.54802 4.69684 5.74446 4.5 6.02821 4.5C6.3076 4.5 6.51277 4.70131 6.50404 4.9742L6.43856 7.01864C6.42546 7.29153 6.2814 7.43916 6.03258 7.43916ZM6.03258 9.11676C5.7401 9.11676 5.5 8.9065 5.5 8.60677C5.5 8.30704 5.7401 8.09678 6.03258 8.09678C6.32506 8.09678 6.56515 8.30256 6.56515 8.60677C6.56515 8.91097 6.32069 9.11676 6.03258 9.11676Z",fill:"white"})]})}),e?i.jsx($g,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.3},children:(o=c==null?void 0:c.logo)!==null&&o!==void 0?o:i.jsx(ee.UnknownChain,{})},`${c==null?void 0:c.id}-${c==null?void 0:c.name}-${e}`):i.jsx(Gg,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.3},children:qg},"loading")]})}):i.jsx("div",{style:{width:r,height:r}})},Kg=D(B.div)``,Xg=D(B.button)`
  --color: var(
    --ck-dropdown-button-color,
    var(--ck-button-primary-color, var(--ck-body-color))
  );
  --background: var(
    --ck-dropdown-button-background,
    var(--ck-secondary-button-background, var(--ck-body-background-secondary))
  );
  --box-shadow: var(
    --ck-dropdown-button-box-shadow,
    var(
      --ck-secondary-button-box-shadow,
      var(--ck-button-primary-box-shadow),
      none
    )
  );

  --hover-color: var(--ck-dropdown-button-hover-color, var(--color));
  --hover-background: var(
    --ck-dropdown-button-hover-background,
    var(--background)
  );
  --hover-box-shadow: var(
    --ck-dropdown-button-hover-box-shadow,
    var(--box-shadow)
  );

  --active-color: var(--ck-dropdown-button-active-color, var(--hover-color));
  --active-background: var(
    --ck-dropdown-button-active-background,
    var(--hover-background)
  );
  --active-box-shadow: var(
    --ck-dropdown-button-active-box-shadow,
    var(--hover-box-shadow)
  );

  appearance: none;
  user-select: none;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 15px;
  width: 52px;
  height: 30px;
  padding: 2px 6px 2px 3px;
  font-size: 16px;
  line-height: 19px;
  font-weight: 500;
  text-decoration: none;
  white-space: nowrap;
  transform: translateZ(0px);

  transition: 100ms ease;
  transition-property: transform, background-color, box-shadow, color;

  color: var(--color);
  background: var(--background);
  box-shadow: var(--box-shadow);

  svg {
    position: relative;
    display: block;
  }

  ${e=>e.disabled?se`
          width: auto;
          padding: 3px;
          position: relative;
          left: -22px;
        `:se`
          cursor: pointer;

          @media only screen and (min-width: ${xe.mobileWidth+1}px) {
            &:hover,
            &:focus-visible {
              color: var(--hover-color);
              background: var(--hover-background);
              box-shadow: var(--hover-box-shadow);
            }
            &:active {
              color: var(--active-color);
              background: var(--active-background);
              box-shadow: var(--active-box-shadow);
            }
          }
        `}
`,Jg=({...e})=>i.jsx("svg",{"aria-hidden":"true",width:"11",height:"6",viewBox:"0 0 11 6",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e,children:i.jsx("path",{d:"M1.5 1L5.5 5L9.5 1",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})}),Qg=()=>{const e=_e(),[t,n]=M.useState(!1),{chain:r}=We(),{chains:o}=rs(),a=De({CHAIN:r==null?void 0:r.name}),s=Zn()||(window==null?void 0:window.innerWidth)<xe.mobileWidth;M.useEffect(()=>{e.open||n(!1)},[e.open]);const c=o.length<=1;return i.jsx(i.Fragment,{children:i.jsx(Kg,{children:i.jsx(Ug,{offsetX:-12,open:!s&&t,onClose:()=>n(!1),children:i.jsxs(Xg,{"aria-label":zt(a.switchNetworks).toString(),disabled:c,onClick:()=>{s?e.setRoute(Q.SWITCHNETWORKS):n(!t)},children:[c?i.jsx(Hs,{message:a.chainNetwork,xOffset:-6,delay:.01,children:i.jsx(vr,{id:r==null?void 0:r.id})}):i.jsx(vr,{id:r==null?void 0:r.id}),!c&&i.jsx(Jg,{style:{top:1,left:-3}})]})})})})},em=({closeModal:e})=>{var t,n,r;const o=_e(),a=ti(),s=De(),{reset:c}=ns(),{disconnect:l}=j1(),{address:d,isConnected:u,connector:p,chain:m}=We(),v=$0(p==null?void 0:p.id),{data:f}=Nu({connector:p}),y=oi(),{data:_}=Zo({chainId:1,address:d,config:y}),{data:k}=S1({address:d}),[x,N]=M.useState(!1);M.useEffect(()=>{u||o.setOpen(!1)},[u]),M.useEffect(()=>{if(x)return e?e():o.setOpen(!1),()=>{l(),c()}},[x,l,c]);const A=["web95","rounded","minimal"].includes((n=(t=a.theme)!==null&&t!==void 0?t:o.theme)!==null&&n!==void 0?n:"")?"....":void 0;return i.jsxs(Je,{children:[i.jsxs(Te,{style:{paddingBottom:22,gap:6},children:[i.jsx(eg,{children:i.jsxs(tg,{children:[i.jsx(ng,{children:i.jsx(Qg,{})}),i.jsx(Ys,{address:d})]})}),i.jsx(Xe,{children:i.jsx($s,{string:d,children:_??Os(d,A)})}),!((r=o==null?void 0:o.options)===null||r===void 0)&&r.hideBalance?null:i.jsx(Fe,{children:i.jsx(rg,{children:i.jsxs(Se,{exitBeforeEnter:!0,initial:!1,children:[k&&i.jsxs(og,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.2},children:[U0(Number(k==null?void 0:k.formatted))," ",k==null?void 0:k.symbol]},`chain-${m==null?void 0:m.id}`),!k&&i.jsx(ag,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.2},children:" "})]})})})]}),v&&i.jsx(i.Fragment,{children:i.jsx(Pe,{onClick:async()=>{try{await(f==null?void 0:f.request({method:"aave_switchAccounts",params:[]}))}catch(S){o.log("rpc method aave_switchAccounts is not implemented in this connector",S)}},children:s.switchWallets})}),!H0(p==null?void 0:p.id)&&i.jsx(Pe,{onClick:()=>N(!0),icon:v?void 0:i.jsx(Ds,{}),children:s.disconnect})]})},tm=()=>{const{reset:e}=ns(),{disconnect:t}=j1(),{connector:n,chain:r}=We(),o=Mt(r==null?void 0:r.id),a=De({}),s=()=>{t(),e()};return i.jsx(Je,{style:{width:278},children:i.jsxs(Te,{style:{padding:0,marginTop:-10},children:[!o&&i.jsxs(Fe,{children:[a.warnings_chainUnsupported," ",a.warnings_chainUnsupportedResolve]}),i.jsx("div",{style:{padding:"6px 8px"},children:i.jsx(gu,{variant:"secondary"})}),!o&&!H0(n==null?void 0:n.id)&&i.jsxs("div",{style:{paddingTop:12},children:[i.jsx(On,{}),i.jsx(Pe,{icon:i.jsx(Ds,{}),variant:"secondary",onClick:s,children:a.disconnect})]})]})})},nm=ke`
  from{ transform: rotate(0deg); }
  to{   transform: rotate(360deg); }
`,rm=ke`
  from{ background-position: 0 0; }
  to{ background-position: 100% 0; }
`,om=D.div`
  @media only screen and (max-width: ${xe.mobileWidth}px) {
    margin: 5px auto 24px;
    padding: 16px 16px;
    border-radius: var(--ck-tertiary-border-radius, 24px);
    box-shadow: var(--ck-tertiary-box-shadow, none);
    background: var(--ck-body-background-tertiary);
  }
`,Xa=D(B.div)`
  z-index: 2;
  overflow: hidden;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 52px;
  height: 52px;
  border-radius: 100%;
  transition: inherit;
  background: var(--ck-body-background-secondary);
  box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.04);
  svg,
  img {
    display: block;
    width: 100%;
    height: 100%;
  }
  @media only screen and (max-width: ${xe.mobileWidth}px) {
    width: 64px;
    height: 64px;
  }
`,Ja=D(B.div)`
  z-index: 2;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 52px;
  height: 52px;
  color: currentColor;
  border-radius: 100%;
  transition: inherit;
  svg {
    z-index: 3;
    position: relative;
    transform: scale(0.89);
    transition: inherit;
    opacity: 0.5;
  }
  &:before {
    z-index: 1;
    content: '';
    position: absolute;
    inset: 10px;
    border-radius: inherit;
    border: 1px dashed var(--border-color);
    background: var(--ck-body-background);
    transition: inherit;
    animation: ${nm} 10s linear infinite;
  }
  &:after {
    z-index: 2;
    content: '';
    position: absolute;
    inset: 0;
    border-radius: inherit;
    background: #34c759;
    box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.04);
    transform: scale(0);
    transition: inherit;
  }
  @media only screen and (max-width: ${xe.mobileWidth}px) {
    width: 64px;
    height: 64px;
    svg {
      transform: scale(1.1);
    }
  }
`,mu=D(B.svg)`
  display: block;
  position: relative;
  margin: 0 auto;
  transition: inherit;
  overflow: visible;
  rect {
    stroke: var(--border-color);
    rx: var(--ck-border-radius);
  }
  @media only screen and (max-width: ${xe.mobileWidth}px) {
    display: none;
  }
`,im=D(B.div)`
  --border-color: var(--ck-siwe-border, var(--ck-body-divider));
  --border-size: 0;
  --border-style: dashed;

  user-select: none;
  pointer-events: none;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 14px;
  width: 100%;
  margin: 12px auto;
  padding: 42px 32px;
  transition: all 320ms cubic-bezier(0.175, 0.885, 0.32, 1.1);
  border: var(--border-size) var(--border-style) var(--border-color);
  border-radius: var(--ck-border-radius);

  @media only screen and (max-width: ${xe.mobileWidth}px) {
    --border-size: 1px;
    margin: 0 auto 20px;
    padding: 38px 0;
    gap: 18px;
    + div {
      // easier than wrapping in another styled component
      padding-bottom: 10px;
    }
  }

  > div {
    z-index: 2;
    position: relative;
    transition: inherit;
  }

  &:before,
  &:after {
    z-index: 1;
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 120px;
    height: 1px;
    margin-left: -60px;
    transition: inherit;
    animation: ${rm} 10s linear infinite;
    background: linear-gradient(
      90deg,
      var(--border-color),
      var(--border-color) 50%,
      transparent 50%,
      transparent 100%
    );
    background-size: 6px 1px;
  }

  &:after {
    background: var(--border-color);
    transform: scaleX(0);
  }

  ${({$connected:e})=>e&&se`
      &:before {
        opacity: 0;
      }
      &:after {
        transform: none;
      }
      ${mu} {
        rect {
          stroke-dasharray: 0 0;
        }
      }
      ${Xa} {
        transform: scale(0.62);
      }
      ${Ja} {
        svg {
          transform: scale(1.5);
          opacity: 1;
          color: #fff;
        }
        &:before {
          transform: scale(0);
        }
        &:after {
          transform: scale(1);
        }
      }
      @media only screen and (max-width: ${xe.mobileWidth}px) {
        --border-size: 1px;
        --border-style: solid;
        ${Ja} {
          svg {
            transform: scale(1.75);
          }
        }
      }
    `};
`,am=({showSignOutButton:e,onSignIn:t,onSignOut:n})=>{const r=Kn(),o=De(),{setOpen:a}=bu(),{isSignedIn:s,isReady:c,isLoading:l,isRejected:d,isSuccess:u,isError:p,signIn:m,signOut:v,error:f}=$r({onSignIn:k=>t==null?void 0:t(k),onSignOut:()=>n==null?void 0:n()}),{address:y}=We();function _(){return u?o.signedIn:d?o.tryAgain:l?o.awaitingConfirmation:p?f??"Unknown Error":o.signIn}return r?e&&s?i.jsx(Pe,{style:{margin:0},onClick:v,icon:i.jsx(Ds,{}),children:o.signOut},"button"):y?i.jsx(Pe,{style:{margin:0},arrow:s?!1:!l&&!d,onClick:!l&&!u?m:void 0,disabled:l,waiting:l,icon:d&&i.jsx(B.div,{initial:{rotate:-270},animate:{rotate:0},transition:{duration:1,ease:[.175,.885,.32,.98]},children:i.jsx(F8,{style:{opacity:.4}})}),children:_()},"button"):i.jsx(Pe,{style:{margin:0},onClick:()=>a(!0),arrow:!0,children:o.walletNotConnected},"button"):i.jsx(Pe,{style:{margin:0},disabled:!0},"loading")},sm=({src:e,alt:t,width:n,height:r})=>{const o=M.useRef(null),[a,s]=M.useState(!0);return M.useEffect(()=>{o.current&&o.current.complete&&o.current.naturalHeight!==0||s(!1)},[e]),i.jsx("div",{style:{width:n,height:r,background:"rgba(0,0,0,0.02)",boxShadow:"inset 0 0 0 1px rgba(0,0,0,0.02)"},children:i.jsx("img",{ref:o,src:e,alt:t,width:n,height:r,onLoad:()=>s(!0),style:{transition:"opacity 0.2s ease",opacity:a?1:0}})})},aa={duration:.2,ease:[.26,.08,.25,1]},x1={duration:.16,ease:[.26,.08,.25,1]},cm=()=>{var e,t;const n=_e(),{isSignedIn:r,reset:o}=$r(),a=Zn(),[s,c]=M.useState(r?"signedIn":"signedOut"),l=De({}),d=s==="signedIn"?{heading:l.signInWithEthereumScreen_signedIn_heading,h1:l.signInWithEthereumScreen_signedIn_h1,p:l.signInWithEthereumScreen_signedIn_p,button:l.signInWithEthereumScreen_signedIn_button}:{heading:l.signInWithEthereumScreen_signedOut_heading,h1:l.signInWithEthereumScreen_signedOut_h1,p:l.signInWithEthereumScreen_signedOut_p,button:l.signInWithEthereumScreen_signedOut_button};M.useEffect(()=>{r&&c("signedIn")},[]),M.useEffect(()=>{r||c("signedOut")},[r]);const{address:u}=We(),m=(()=>{const f={svg:null,default:null},y=document.getElementsByTagName("link");return Array.from(y).forEach(_=>{(_.getAttribute("rel")==="icon"||_.getAttribute("rel")==="shortcut icon")&&_.getAttribute("href")&&(_.getAttribute("type")==="image/svg+xml"?f.svg=_.getAttribute("href"):f.default=_.getAttribute("href"))}),f})(),v=(t=(e=k9())!==null&&e!==void 0?e:m.svg)!==null&&t!==void 0?t:m.default;return i.jsx(Je,{style:{width:278},children:i.jsxs(Te,{style:{padding:0,marginTop:-10},children:[i.jsx(om,{children:i.jsx(Se,{exitBeforeEnter:!0,children:i.jsx(B.div,{initial:a?!1:{opacity:0,scale:.94},animate:{opacity:1,scale:1},exit:{opacity:0,scale:.94},transition:x1,children:i.jsx(Fe,{style:{height:42},children:i.jsx(st,{children:d.h1})})},zt(d.h1).toString())})}),i.jsxs(im,{$connected:r,children:[i.jsx("div",{style:{position:"absolute",inset:0},children:i.jsx(mu,{width:"262",height:"134",viewBox:"0 0 262 134",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:i.jsx(B.rect,{x:"0",y:"0",rx:"12",width:"262",height:"134",strokeDasharray:"3 3",animate:{strokeDashoffset:[0,-6]},transition:{duration:.4,ease:"linear",repeat:1/0}})})}),i.jsx(B.div,{initial:a?!1:{opacity:0,x:50,scale:.8},animate:{opacity:1,x:0,scale:1},transition:aa,children:i.jsx(Xa,{children:i.jsx(Ys,{address:u,size:64})})},"avatarImage"),i.jsx(B.div,{initial:a?!1:{scale:.6},animate:{scale:1},transition:{...aa},children:i.jsx(Ja,{children:i.jsx(eu,{})})},"tickIcon"),i.jsx(B.div,{initial:a?!1:{opacity:0,x:-40,scale:.8},animate:{opacity:1,x:0,scale:1},transition:{...aa},children:i.jsx(Xa,{children:v?i.jsx(sm,{src:v,alt:"app"}):i.jsx(ee.UnknownChain,{})})},"appLogo")]},"status"),i.jsx(Se,{exitBeforeEnter:!0,children:i.jsx(B.div,{style:{paddingBottom:a?24:12},initial:a?!1:{opacity:0,scale:.94},animate:{opacity:1,scale:1},exit:{opacity:0,scale:.94},transition:x1,children:i.jsx(Fe,{style:{height:42,marginTop:-1,marginBottom:-3},children:i.jsx(st,{children:d.p})})},zt(d.p).toString())}),i.jsx(am,{showSignOutButton:s==="signedIn",onSignIn:()=>{setTimeout(()=>{n.setOpen(!1)},1e3)}})]})})},lm={},dm=({mode:e="auto",theme:t="auto",customTheme:n=lm,lang:r="en-US"})=>{var o;const a=_e(),{isConnected:s,chain:c}=We(),l=Mt(c==null?void 0:c.id),d=!(!((o=a.options)===null||o===void 0)&&o.enforceSupportedChains&&s&&!l),u=d&&a.route!==Q.CONNECTORS&&a.route!==Q.PROFILE,p=d&&a.route!==Q.PROFILE,m=()=>{a.route===Q.SIGNINWITHETHEREUM||a.route===Q.SWITCHNETWORKS?a.setRoute(Q.PROFILE):a.route===Q.DOWNLOAD?a.setRoute(Q.CONNECT):a.setRoute(Q.CONNECTORS)},v={onboarding:i.jsx(y6,{}),about:i.jsx(T6,{}),download:i.jsx(Q7,{}),connectors:i.jsx(s7,{}),mobileConnectors:i.jsx(g7,{}),connect:i.jsx(J7,{}),profile:i.jsx(em,{}),switchNetworks:i.jsx(tm,{}),signInWithEthereum:i.jsx(cm,{})};function f(){a.setOpen(!1)}return M.useEffect(()=>{var y;s?(a.route!==Q.PROFILE||a.route!==Q.SIGNINWITHETHEREUM)&&(a.signInWithEthereum&&!(!((y=a.options)===null||y===void 0)&&y.disableSiweRedirect)?a.setRoute(Q.SIGNINWITHETHEREUM):f()):f()},[s]),M.useEffect(()=>a.setMode(e),[e]),M.useEffect(()=>a.setTheme(t),[t]),M.useEffect(()=>a.setCustomTheme(n),[n]),M.useEffect(()=>a.setLang(r),[r]),M.useEffect(()=>{const y=w9();if(!y||!a.open)return;const _=document.createElement("meta");return _.setAttribute("property","og:title"),_.setAttribute("content",y),document.head.prepend(_),()=>{document.head.removeChild(_)}},[a.open]),i.jsx(A8,{theme:t,customTheme:n,mode:e,children:i.jsx(i6,{open:a.open,pages:v,pageId:a.route,onClose:d?f:void 0,onInfo:p?()=>a.setRoute(Q.ABOUT):void 0,onBack:u?m:void 0})})};function um(e){M.useEffect(()=>{if(!e)return;e=e.replace(/ /g,"+");const t=document.createElement("link");t.href="https://fonts.googleapis.com",t.rel="preconnect";const n=document.createElement("link");n.href="https://fonts.gstatic.com",n.rel="preconnect",n.crossOrigin="true";const r=document.createElement("link");return r.href=`https://fonts.googleapis.com/css2?family=${e}:wght@400;500;600&display=swap`,r.rel="stylesheet",document.head.appendChild(t),document.head.appendChild(n),document.head.appendChild(r),()=>{document.head.removeChild(t),document.head.removeChild(n),document.head.removeChild(r)}},[e])}function pm(e){var t;const r=(t={web95:"Lato",retro:"Nunito",midnight:"Inter",minimal:"Inter",rounded:"Nunito"}[e])!==null&&t!==void 0?t:null;um(r??"")}const vu=({onConnect:e,onDisconnect:t})=>{Eu({onConnect:({address:n,connector:r,isReconnected:o})=>{o||e==null||e({address:n,connectorId:r==null?void 0:r.id})},onDisconnect:()=>t==null?void 0:t()})},Q={ONBOARDING:"onboarding",ABOUT:"about",CONNECTORS:"connectors",MOBILECONNECTORS:"mobileConnectors",CONNECT:"connect",DOWNLOAD:"download",PROFILE:"profile",SWITCHNETWORKS:"switchNetworks",SIGNINWITHETHEREUM:"signInWithEthereum"},Qa=M.createContext(null),Rm=({children:e,theme:t="auto",mode:n="auto",customTheme:r,options:o,onConnect:a,onDisconnect:s,debugMode:c=!1})=>{var l,d,u,p;if(!Oe.useContext(ju))throw Error("ConnectKitProvider must be within a WagmiProvider");if(Oe.useContext(Qa))throw new Error("Multiple, nested usages of ConnectKitProvider detected. Please use only one.");vu({onConnect:a,onDisconnect:s});const m=Us();zs("injected");const v={language:"en-US",hideBalance:!1,hideTooltips:!1,hideQuestionMarkCTA:!1,hideNoWalletCTA:!1,walletConnectCTA:"link",hideRecentBadge:!1,avoidLayoutShift:!0,embedGoogleFonts:!1,truncateLongENSAddress:!0,walletConnectName:void 0,reducedMotion:!1,disclaimer:null,bufferPolyfill:!0,customAvatar:void 0,initialChainId:(l=m==null?void 0:m[0])===null||l===void 0?void 0:l.id,enforceSupportedChains:!1,ethereumOnboardingUrl:void 0,walletOnboardingUrl:void 0,disableSiweRedirect:!1},f=Object.assign({},v,o);typeof window<"u"&&f.bufferPolyfill&&(window.Buffer=(d=window.Buffer)!==null&&d!==void 0?d:Su);const[y,_]=M.useState(t),[k,x]=M.useState(n),[N,A]=M.useState(r??{}),[S,R]=M.useState("en-US"),[z,h]=M.useState(!1),[g,b]=M.useState({id:""}),[w,C]=M.useState(Q.CONNECTORS),[j,I]=M.useState(""),[E,L]=M.useState(0);f.embedGoogleFonts&&pm(t),M.useEffect(()=>_(t),[t]),M.useEffect(()=>R(f.language||"en-US"),[f.language]),M.useEffect(()=>I(null),[w,z]);const{chain:O,isConnected:F}=We(),U=Mt(O==null?void 0:O.id);M.useEffect(()=>{F&&f.enforceSupportedChains&&!U&&(h(!0),C(Q.SWITCHNETWORKS))},[F,U,O,w,z]);const q=c?console.log:()=>{},Y={theme:y,setTheme:_,mode:k,setMode:x,customTheme:r,setCustomTheme:A,lang:S,setLang:R,open:z,setOpen:h,route:w,setRoute:C,connector:g,setConnector:b,signInWithEthereum:(p=(u=Oe.useContext(nu))===null||u===void 0?void 0:u.enabled)!==null&&p!==void 0?p:!1,onConnect:a,options:f,errorMessage:j,debugMode:c,log:q,displayError:(Z,V)=>{I(Z),console.log("---------CONNECTKIT DEBUG---------"),console.log(Z),V&&console.table(V),console.log("---------/CONNECTKIT DEBUG---------")},resize:E,triggerResize:()=>L(Z=>Z+1)};return M.createElement(Qa.Provider,{value:Y},i.jsx(i.Fragment,{children:i.jsx(Z6,{enabled:z,children:i.jsxs(Nf,{theme:Q9,children:[e,i.jsx(dm,{lang:S,theme:y,mode:n,customTheme:N})]})})}))},_e=()=>{const e=Oe.useContext(Qa);if(!e)throw Error("ConnectKit Hook must be inside a Provider.");return e},Uo={disconnected:[Q.CONNECTORS,Q.ABOUT,Q.ONBOARDING,Q.MOBILECONNECTORS,Q.ONBOARDING],connected:[Q.PROFILE,Q.SWITCHNETWORKS,Q.SIGNINWITHETHEREUM]},hm=[...Uo.connected,...Uo.disconnected],bu=({onConnect:e,onDisconnect:t}={})=>{const n=_e();vu({onConnect:e,onDisconnect:t});const{isConnected:r}=We(),{signIn:o}=$r(),a=()=>{n.setOpen(!1)},s=()=>{n.setOpen(!0)},c=l=>{let d=l;hm.includes(l)?r?Uo.connected.includes(l)||(d=Q.PROFILE,n.log(`Route ${l} is not a valid route when connected, navigating to ${d} instead.`)):Uo.disconnected.includes(l)||(d=Q.CONNECTORS,n.log(`Route ${l} is not a valid route when disconnected, navigating to ${d} instead.`)):(d=r?Q.PROFILE:Q.CONNECTORS,n.log(`Route ${l} is not a valid route, navigating to ${d} instead.`)),n.setRoute(d),s()};return{open:n.open,setOpen:l=>{l?c(r?Q.PROFILE:Q.CONNECTORS):a()},openAbout:()=>c(Q.ABOUT),openOnboarding:()=>c(Q.ONBOARDING),openProfile:()=>c(Q.PROFILE),openSwitchNetworks:()=>c(Q.SWITCHNETWORKS),openSIWE:l=>{c(Q.SIGNINWITHETHEREUM),l&&o()}}},ao=D(B.div)`
  top: 0;
  bottom: 0;
  left: 0;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
`;D(B.div)`
  position: relative;
  width: 24px;
  height: 24px;
  border-radius: 12px;
  overflow: hidden;
  svg {
    display: block;
  }
`;const fm=D(B.div)`
  pointer-events: none;
  user-select: none;
  position: relative;
  width: 24px;
  height: 24px;
  margin-right: 8px;
`,gm=D(B.div)`
  z-index: 1;
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 100%;
  box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.02);
  background: var(--ck-body-color-danger, red);
  color: #fff;
  svg {
    display: block;
    position: relative;
    top: -1px;
  }
`,es=D(B.div)`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  position: relative;
  height: 40px;
  padding: 0;
  line-height: 0;
  letter-spacing: -0.2px;
  font-size: var(--ck-connectbutton-font-size, 16px);
  font-weight: var(--ck-connectbutton-font-weight, 500);
  text-align: center;
  transition: 100ms ease;
  transition-property: color, background, box-shadow, border-radius;

  color: var(--color);
  background: var(--background);
  box-shadow: var(--box-shadow);
  border-radius: var(--border-radius);

  &.primary {
    --color: var(--ck-connectbutton-color);
    --background: var(--ck-connectbutton-background);
    --box-shadow: var(--ck-connectbutton-box-shadow);
    --border-radius: var(--ck-connectbutton-border-radius, 12px);

    --hover-color: var(--ck-connectbutton-hover-color, var(--color));
    --hover-background: var(
      --ck-connectbutton-hover-background,
      var(--background)
    );
    --hover-box-shadow: var(
      --ck-connectbutton-hover-box-shadow,
      var(--box-shadow)
    );
    --hover-border-radius: var(
      --ck-connectbutton-hover-border-radius,
      var(--border-radius)
    );

    --active-color: var(--ck-connectbutton-active-color, var(--hover-color));
    --active-background: var(
      --ck-connectbutton-active-background,
      var(--hover-background)
    );
    --active-box-shadow: var(
      --ck-connectbutton-active-box-shadow,
      var(--hover-box-shadow)
    );
    --active-border-radius: var(
      --ck-connectbutton-active-border-radius,
      var(--hover-border-radius)
    );
  }
  &.secondary {
    --color: var(--ck-connectbutton-balance-color);
    --background: var(--ck-connectbutton-balance-background);
    --box-shadow: var(--ck-connectbutton-balance-box-shadow);
    --border-radius: var(
      --ck-connectbutton-balance-border-radius,
      var(--ck-connectbutton-border-radius, 12px)
    );

    --hover-color: var(--ck-connectbutton-balance-hover-color, var(--color));
    --hover-background: var(
      --ck-connectbutton-balance-hover-background,
      var(--background)
    );
    --hover-box-shadow: var(
      --ck-connectbutton-balance-hover-box-shadow,
      var(--box-shadow)
    );
    --hover-border-radius: var(
      --ck-connectbutton-balance-hover-border-radius,
      var(--border-radius)
    );

    --active-color: var(
      --ck-connectbutton-balance-active-color,
      var(--hover-color)
    );
    --active-background: var(
      --ck-connectbutton-balance-active-background,
      var(--hover-background)
    );
    --active-box-shadow: var(
      --ck-connectbutton-balance-active-box-shadow,
      var(--hover-box-shadow)
    );
    --active-border-radius: var(
      --ck-connectbutton-balance-active-border-radius,
      var(--hover-border-radius)
    );
  }
`,mm=D.button`
  all: initial;
  appearance: none;
  user-select: none;
  position: relative;
  padding: 0;
  margin: 0;
  background: none;
  border-radius: var(--ck-border-radius);

  &:disabled {
    pointer-events: none;
    opacity: 0.3;
  }

  display: flex;
  flex-wrap: nowrap;
  background: none;
  cursor: pointer;
  * {
    cursor: pointer;
  }
  &:hover {
    ${es} {
      color: var(--hover-color, var(--color));
      background: var(--hover-background, var(--background));
      box-shadow: var(--hover-box-shadow, var(--box-shadow));
      border-radius: var(--hover-border-radius, var(--border-radius));
    }
  }
  &:active {
    ${es} {
      color: var(--active-color, var(--hover-color, var(--color)));
      background: var(
        --active-background,
        var(--hover-background, var(--background))
      );
      box-shadow: var(
        --active-box-shadow,
        var(--hover-box-shadow, var(--box-shadow))
      );
      border-radius: var(
        --active-border-radius,
        var(--hover-border-radius, var(--border-radius))
      );
    }
  }
  &:focus-visible {
    outline: 2px solid var(--ck-aave-brand);
  }
`,y1=({children:e,variant:t="primary",autoSize:n=!0,duration:r=.3,style:o})=>{const[a,s]=As();return i.jsx(es,{className:t,initial:!1,animate:n?{width:s.width>10?s.width:"auto"}:void 0,transition:{duration:r,ease:[.25,1,.5,1],delay:.01},style:o,children:i.jsx("div",{ref:a,style:{whiteSpace:"nowrap",width:"fit-content",position:"relative",padding:"0 12px"},children:e})})},sa=D(B.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
`,vm=ke`
  0%,100%{ opacity: 0.1; transform: scale(0.75); }
  50%{ opacity: 0.75; transform: scale(1.2) }
`,bm=D.div`
  pointer-events: none;
  user-select: none;
  padding: 0 5px;
  span {
    display: inline-block;
    vertical-align: middle;
    margin: 0 2px;
    width: 3px;
    height: 3px;
    border-radius: 4px;
    background: currentColor;
    animation: ${vm} 1000ms ease infinite both;
  }
`,xm=({hideIcon:e,hideSymbol:t})=>{const n=Kn(),[r,o]=M.useState(!0),{address:a,chain:s}=We();Us();const c=Mt(s==null?void 0:s.id),l=Mu(),{data:d}=Au({watch:!0}),{data:u,queryKey:p}=S1({address:a,chainId:s==null?void 0:s.id});M.useEffect(()=>{(d??0%5===0)&&l.invalidateQueries({queryKey:p})},[d,p]);const m=qs.find(f=>f.id===(s==null?void 0:s.id)),v=`${!n||(u==null?void 0:u.formatted)===void 0?"balance-loading":`balance-${m==null?void 0:m.id}-${u==null?void 0:u.formatted}`}`;return M.useEffect(()=>{o(!1)},[]),i.jsx("div",{style:{position:"relative"},children:i.jsx(Se,{initial:!1,children:i.jsx(B.div,{initial:(u==null?void 0:u.formatted)!==void 0&&r?{opacity:1}:{opacity:0,position:"absolute",top:0,left:0,bottom:0},animate:{opacity:1,position:"relative"},exit:{opacity:0,position:"absolute",top:0,left:0,bottom:0},transition:{duration:.4,ease:[.25,1,.5,1],delay:.4},children:!a||!n||(u==null?void 0:u.formatted)===void 0?i.jsxs(sa,{children:[!e&&i.jsx(vr,{id:s==null?void 0:s.id}),i.jsx("span",{style:{minWidth:32},children:i.jsxs(bm,{children:[i.jsx("span",{style:{animationDelay:"0ms"}}),i.jsx("span",{style:{animationDelay:"50ms"}}),i.jsx("span",{style:{animationDelay:"100ms"}})]})})]}):c?i.jsxs(sa,{children:[!e&&i.jsx(vr,{id:s==null?void 0:s.id}),i.jsx("span",{style:{minWidth:32},children:U0(Number(u==null?void 0:u.formatted))}),!t&&` ${u==null?void 0:u.symbol}`]}):i.jsxs(sa,{children:[!e&&i.jsx(vr,{id:s==null?void 0:s.id}),i.jsx("span",{style:{minWidth:32},children:"???"})]})},v)})})},ym={initial:{zIndex:2,opacity:0,x:"-100%"},animate:{opacity:1,x:.1,transition:{duration:.4,ease:[.25,1,.5,1]}},exit:{zIndex:1,opacity:0,x:"-100%",pointerEvents:"none",position:"absolute",transition:{duration:.4,ease:[.25,1,.5,1]}}},Cm={initial:{zIndex:2,opacity:0,x:"100%"},animate:{x:.2,opacity:1,transition:{duration:.4,ease:[.25,1,.5,1]}},exit:{zIndex:1,x:"100%",opacity:0,pointerEvents:"none",position:"absolute",transition:{duration:.4,ease:[.25,1,.5,1]}}},C1={initial:{opacity:0},animate:{opacity:1,transition:{duration:.3,ease:[.25,1,.5,1]}},exit:{position:"absolute",opacity:0,transition:{duration:.3,ease:[.25,1,.5,1]}}},xu=({children:e})=>{const t=Kn(),n=_e(),{open:r,setOpen:o}=bu(),{address:a,isConnected:s,chain:c}=We(),l=Mt(c==null?void 0:c.id),d=oi(),{data:u}=Zo({chainId:1,address:a,config:d});function p(){o(!1)}function m(){o(!0),n.setRoute(s?Q.PROFILE:Q.CONNECTORS)}return!e||!t?null:i.jsx(i.Fragment,{children:e({show:m,hide:p,chain:c,unsupported:!l,isConnected:!!a,isConnecting:r,address:a,truncatedAddress:a?Os(a):void 0,ensName:u==null?void 0:u.toString()})})};xu.displayName="ConnectKitButton.Custom";function wm({label:e,showAvatar:t,separator:n}){var r;const o=De({}),a=_e(),{isSignedIn:s}=$r(),{address:c,chain:l}=We(),d=Mt(l==null?void 0:l.id),u=oi(),{data:p}=Zo({chainId:1,address:c,config:u}),m=o.connectWallet;return i.jsx(Se,{initial:!1,children:c?i.jsxs(ao,{initial:"initial",animate:"animate",exit:"exit",variants:Cm,style:{height:40},children:[t&&i.jsxs(fm,{children:[i.jsxs(Se,{initial:!1,children:[s&&i.jsx(B.div,{style:{zIndex:2,position:"absolute",bottom:0,right:0},initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},children:i.jsx(tu,{})}),!d&&i.jsx(gm,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},children:i.jsx("svg",{width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:i.jsx("path",{d:"M1.68831 13.5H12.0764C13.1026 13.5 13.7647 12.7197 13.7647 11.763C13.7647 11.4781 13.6985 11.1863 13.5462 10.9149L8.34225 1.37526C8.02445 0.791754 7.45505 0.5 6.88566 0.5C6.31627 0.5 5.73364 0.791754 5.42246 1.37526L0.225108 10.9217C0.0728291 11.1863 0 11.4781 0 11.763C0 12.7197 0.662083 13.5 1.68831 13.5ZM6.88566 8.8048C6.49503 8.8048 6.27655 8.5809 6.26331 8.1738L6.16399 5.0595C6.15075 4.64562 6.44869 4.34708 6.87904 4.34708C7.30278 4.34708 7.61396 4.6524 7.60071 5.06628L7.5014 8.16701C7.48154 8.5809 7.26305 8.8048 6.88566 8.8048ZM6.88566 11.3492C6.44207 11.3492 6.07792 11.0303 6.07792 10.5757C6.07792 10.1211 6.44207 9.80219 6.88566 9.80219C7.32926 9.80219 7.69341 10.1143 7.69341 10.5757C7.69341 11.0371 7.32264 11.3492 6.88566 11.3492Z",fill:"currentColor"})})})]}),i.jsx(Ys,{size:24,address:c})]}),i.jsx("div",{style:{position:"relative",paddingRight:t?1:0},children:i.jsx(Se,{initial:!1,children:p?i.jsx(ao,{initial:"initial",animate:"animate",exit:"exit",variants:C1,style:{position:p?"relative":"absolute"},children:!((r=a.options)===null||r===void 0)&&r.truncateLongENSAddress?q9(p,20):p},"ckEnsName"):i.jsxs(ao,{initial:"initial",animate:"animate",exit:"exit",variants:C1,style:{position:p?"absolute":"relative"},children:[Os(c,n)," "]},"ckTruncatedAddress")})})]},"connectedText"):i.jsx(ao,{initial:"initial",animate:"animate",exit:"exit",variants:ym,style:{height:40},children:e||m},"connectWalletText")})}function yu({label:e,showBalance:t=!1,showAvatar:n=!0,theme:r,mode:o,customTheme:a,onClick:s}){var c;const l=Kn(),d=_e(),{isConnected:u,address:p,chain:m}=We(),v=Mt(m==null?void 0:m.id);function f(){d.setOpen(!0),d.setRoute(u?Q.PROFILE:Q.CONNECTORS)}const y=["web95","rounded","minimal"].includes((c=r??d.theme)!==null&&c!==void 0?c:"")?"....":void 0;if(!l)return null;const _=t&&v,k=p&&_;return i.jsx(Hn,{$useTheme:r??d.theme,$useMode:o??d.mode,$customTheme:a??d.customTheme,children:i.jsxs(mm,{onClick:()=>{s?s(f):f()},children:[_&&i.jsx(Se,{initial:!1,children:k&&i.jsx(B.div,{initial:{opacity:0,x:"100%",width:0,marginRight:0},animate:{opacity:1,x:0,width:"auto",marginRight:-24,transition:{duration:.4,ease:[.25,1,.5,1]}},exit:{opacity:0,x:"100%",width:0,marginRight:0,transition:{duration:.4,ease:[.25,1,.5,1]}},children:i.jsx(y1,{variant:"secondary",theme:r??d.theme,mode:o??d.mode,customTheme:a??d.customTheme,style:{overflow:"hidden"},children:i.jsx(B.div,{style:{paddingRight:24},children:i.jsx(xm,{hideSymbol:!0})})})},"balance")}),i.jsx(y1,{theme:r??d.theme,mode:o??d.mode,customTheme:a??d.customTheme,style:_&&t&&p&&(r==="retro"||d.theme==="retro")?{boxShadow:"var(--ck-connectbutton-balance-connectbutton-box-shadow)",borderRadius:"var(--ck-connectbutton-balance-connectbutton-border-radius)",overflow:"hidden"}:{overflow:"hidden"},children:i.jsx(wm,{separator:y,showAvatar:n,label:e})})]})})}yu.Custom=xu;const ca=8,km=ke`
  0%{ transform:none; }
  25%{ transform:translateX(${ca}px); }
  50%{ transform:translateX(-${ca}px); }
  75%{ transform:translateX(${ca}px); }
  100%{ transform:none; }
`,_m=ke`
  0%{ transform:translate(500%,100%); opacity:0; }
  60%{ transform:translate(25%,-20%); opacity:1; }
  70%{ transform:translate(25%,-20%); }
  85%{ transform:translate(25%,-20%) scale(0.9); }
  100%{ transform:translate(25%,-20%) scale(1); opacity:1; }
`;D.div`
  z-index: 2;
  position: absolute;
  top: 50%;
  left: 50%;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: rgba(0, 0, 0, 0.5);
  box-shadow: 0 0 0 2px rgba(255, 255, 255, 0.4), 0 4px 6px rgba(0, 0, 0, 0.1);
  opacity: 0;
  &.play {
    animation: ${_m} 1300ms 200ms cubic-bezier(0.16, 1, 0.6, 1) both;
  }
`;D.div`
  z-index: 1;
  position: absolute;
  inset: 0;
  &.shake {
    animation: ${km} 300ms 100ms cubic-bezier(0.16, 1, 0.6, 1) both;
  }
`;D.div`
  z-index: 1;
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  &:before {
    z-index: 9;
    content: '';
    position: absolute;
    inset: 0;
  }
`;const jm="1.9.2";function Dm({className:e,children:t}){return i.jsx("section",{className:$o("glass rounded-xl",e),children:t})}function zm({title:e,subtitle:t,action:n}){return i.jsxs("div",{className:"mb-6",children:[i.jsx(Pu,{fallback:"/dashboard",className:"mb-4"}),i.jsxs("div",{className:"flex flex-wrap items-end justify-between gap-4",children:[i.jsxs("div",{children:[i.jsx("h1",{className:"text-2xl font-semibold tracking-tight text-pm-text text-balance sm:text-3xl",children:e}),i.jsx("p",{className:"mt-1 max-w-xl text-pretty text-sm text-pm-muted",children:t})]}),n]})]})}function Sm({variant:e="primary",busy:t,className:n,children:r,disabled:o,...a}){const s={primary:"btn-primary",ghost:"border border-pm-line bg-pm-panel text-pm-text hover:bg-pm-text/5",danger:"border border-pm-bad/40 bg-pm-bad/10 text-pm-bad hover:bg-pm-bad/20"};return i.jsxs("button",{...a,disabled:o||t,className:$o("inline-flex min-h-[44px] items-center justify-center gap-2 rounded-lg px-5 text-sm font-semibold disabled:cursor-not-allowed disabled:opacity-50",s[e],n),children:[t&&i.jsx("span",{"aria-hidden":"true",className:"h-2 w-2 rounded-full bg-current opacity-70"}),r]})}function Bm({label:e,hint:t,children:n}){return i.jsxs("label",{className:"block",children:[i.jsx("span",{className:"label mb-1.5 block",children:e}),n,t&&i.jsx("span",{className:"mt-1.5 block text-xs text-pm-muted",children:t})]})}function Pm({tone:e="muted",children:t}){const n={good:"border-pm-good/40 bg-pm-good/10 text-pm-good",warn:"border-pm-warn/40 bg-pm-warn/10 text-pm-warn",bad:"border-pm-bad/40 bg-pm-bad/10 text-pm-bad",violet:"border-pm-violet/40 bg-pm-violet/10 text-pm-violet",muted:"border-pm-line bg-pm-text/[0.05] text-pm-muted"};return i.jsx("span",{className:$o("inline-flex items-center rounded-md border px-2 py-0.5 text-[11px] font-semibold uppercase tracking-wider",n[e]),children:t})}function Wm({title:e,body:t,action:n}){return i.jsxs("div",{className:"flex flex-col items-center justify-center gap-2 px-6 py-12 text-center",children:[i.jsx("div",{className:"text-lg font-semibold text-pm-text",children:e}),i.jsx("p",{className:"max-w-sm text-pretty text-sm text-pm-muted",children:t}),n&&i.jsx("div",{className:"mt-3",children:n})]})}function Vm({className:e}){return i.jsx("div",{className:$o("rounded-md bg-pm-text/[0.07]",e)})}function Um({href:e,children:t}){return i.jsxs("a",{href:e,target:"_blank",rel:"noopener noreferrer",className:"inline-flex items-center gap-1 text-pm-cyan hover:underline",children:[t,i.jsx(Zu,{className:"h-3 w-3"})]})}function Zm(){return Wu?null:i.jsxs("div",{className:"mb-5 flex items-start gap-3 rounded-xl border border-pm-warn/40 bg-pm-warn/10 p-4 text-sm",children:[i.jsx(Vu,{className:"mt-0.5 h-5 w-5 shrink-0 text-pm-warn"}),i.jsxs("div",{className:"text-pretty text-pm-text/90",children:[i.jsx("span",{className:"font-semibold text-pm-warn",children:"Contract not deployed yet."})," The PayMesh contract has no address configured, so this page shows no live data and sending is disabled. Deploy it and set ",i.jsx("span",{className:"font-mono text-xs",children:"VITE_PAYMESH_ADDRESS_MAINNET"})," in ",i.jsx("span",{className:"font-mono text-xs",children:".env"}),"."]})]})}function $m({children:e,prompt:t="Connect your wallet to continue."}){const{isConnected:n}=We();return n?i.jsx(i.Fragment,{children:e}):i.jsxs("div",{className:"flex flex-col items-center gap-3 rounded-xl border border-dashed border-pm-line p-6 text-center",children:[i.jsx($u,{className:"h-6 w-6 text-pm-violet"}),i.jsx("p",{className:"text-sm text-pm-muted",children:t}),i.jsx(yu.Custom,{children:({show:r})=>i.jsx(Sm,{onClick:r,className:"px-6",children:"Connect wallet"})})]})}export{Sm as B,yu as C,Zu as E,Bm as F,Zm as N,zm as P,Vm as S,$m as W,Rm as a,Fm as b,Dm as c,Wm as d,Pm as e,Um as f};
