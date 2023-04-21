(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{3454:function(e,t,n){"use strict";var r,a;e.exports=(null==(r=n.g.process)?void 0:r.env)&&"object"==typeof(null==(a=n.g.process)?void 0:a.env)?n.g.process:n(7663)},6840:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return n(8810)}])},1703:function(e,t,n){"use strict";n.d(t,{F:function(){return a}});var r=n(3454);let a={title:"Next.js",author:"Ferhat Aslan",headerTitle:"Ferhat Aslan",description:"A Software Developer who is focused on Web and IoT",language:"en-us",theme:"system",siteUrl:"https://feslan.github.io",siteRepo:"https://github.com/feslan/feslan.github.io",siteLogo:"/static/images/logo.png",image:"/static/images/avatar.png",socialBanner:"/static/images/twitter-card.png",email:"aslanferhat16@gmail.com",github:"https://github.com/ferhat-aslan",twitter:"https://twitter.com/feslan_",facebook:"https://facebook.com",youtube:"https://youtube.com",linkedin:"https://www.linkedin.com/in/aslanferhat",locale:"en-US",analytics:{plausibleDataDomain:"",simpleAnalytics:!1,umamiWebsiteId:"",googleAnalyticsId:"",posthogAnalyticsId:""},newsletter:{provider:"buttondown"},comment:{provider:"giscus",giscusConfig:{repo:r.env.NEXT_PUBLIC_GISCUS_REPO,repositoryId:r.env.NEXT_PUBLIC_GISCUS_REPOSITORY_ID,category:r.env.NEXT_PUBLIC_GISCUS_CATEGORY,categoryId:r.env.NEXT_PUBLIC_GISCUS_CATEGORY_ID,mapping:"pathname",reactions:"1",metadata:"0",theme:"light",inputPosition:"bottom",lang:"en",darkTheme:"transparent_dark",themeURL:""},utterancesConfig:{repo:r.env.NEXT_PUBLIC_UTTERANCES_REPO,issueTerm:"",label:"",theme:"",darkTheme:""},disqusConfig:{shortname:r.env.NEXT_PUBLIC_DISQUS_SHORTNAME}}}},1516:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getDomainLocale=function(e,t,n,r){return!1},("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},5569:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(2648).Z,a=n(7273).Z,o=r(n(7294)),l=n(4532),i=n(3353),s=n(1410),c=n(9064),u=n(370),d=n(9955),f=n(4224),m=n(508),h=n(1516),p=n(4266);let g=new Set;function v(e,t,n,r,a){if(a||i.isLocalURL(t)){if(!r.bypassPrefetchedCheck){let a=void 0!==r.locale?r.locale:"locale"in e?e.locale:void 0,o=t+"%"+n+"%"+a;if(g.has(o))return;g.add(o)}Promise.resolve(e.prefetch(t,n,r)).catch(e=>{})}}function y(e){return"string"==typeof e?e:s.formatUrl(e)}let x=o.default.forwardRef(function(e,t){let n,r;let{href:s,as:g,children:x,prefetch:b,passHref:w,replace:T,shallow:_,scroll:C,locale:j,onClick:E,onMouseEnter:k,onTouchStart:S,legacyBehavior:L=!1}=e,I=a(e,["href","as","children","prefetch","passHref","replace","shallow","scroll","locale","onClick","onMouseEnter","onTouchStart","legacyBehavior"]);n=x,L&&("string"==typeof n||"number"==typeof n)&&(n=o.default.createElement("a",null,n));let N=!1!==b,M=o.default.useContext(d.RouterContext),P=o.default.useContext(f.AppRouterContext),O=null!=M?M:P,$=!M,{href:R,as:A}=o.default.useMemo(()=>{if(!M){let e=y(s);return{href:e,as:g?y(g):e}}let[e,t]=l.resolveHref(M,s,!0);return{href:e,as:g?l.resolveHref(M,g):t||e}},[M,s,g]),U=o.default.useRef(R),z=o.default.useRef(A);L&&(r=o.default.Children.only(n));let D=L?r&&"object"==typeof r&&r.ref:t,[B,F,X]=m.useIntersection({rootMargin:"200px"}),H=o.default.useCallback(e=>{(z.current!==A||U.current!==R)&&(X(),z.current=A,U.current=R),B(e),D&&("function"==typeof D?D(e):"object"==typeof D&&(D.current=e))},[A,D,R,X,B]);o.default.useEffect(()=>{O&&F&&N&&v(O,R,A,{locale:j},$)},[A,R,F,j,N,null==M?void 0:M.locale,O,$]);let G={ref:H,onClick(e){L||"function"!=typeof E||E(e),L&&r.props&&"function"==typeof r.props.onClick&&r.props.onClick(e),O&&!e.defaultPrevented&&function(e,t,n,r,a,l,s,c,u,d){let{nodeName:f}=e.currentTarget,m="A"===f.toUpperCase();if(m&&(function(e){let t=e.currentTarget,n=t.getAttribute("target");return n&&"_self"!==n||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)||!u&&!i.isLocalURL(n)))return;e.preventDefault();let h=()=>{"beforePopState"in t?t[a?"replace":"push"](n,r,{shallow:l,locale:c,scroll:s}):t[a?"replace":"push"](r||n,{forceOptimisticNavigation:!d})};u?o.default.startTransition(h):h()}(e,O,R,A,T,_,C,j,$,N)},onMouseEnter(e){L||"function"!=typeof k||k(e),L&&r.props&&"function"==typeof r.props.onMouseEnter&&r.props.onMouseEnter(e),O&&(N||!$)&&v(O,R,A,{locale:j,priority:!0,bypassPrefetchedCheck:!0},$)},onTouchStart(e){L||"function"!=typeof S||S(e),L&&r.props&&"function"==typeof r.props.onTouchStart&&r.props.onTouchStart(e),O&&(N||!$)&&v(O,R,A,{locale:j,priority:!0,bypassPrefetchedCheck:!0},$)}};if(c.isAbsoluteUrl(A))G.href=A;else if(!L||w||"a"===r.type&&!("href"in r.props)){let e=void 0!==j?j:null==M?void 0:M.locale,t=(null==M?void 0:M.isLocaleDomain)&&h.getDomainLocale(A,e,null==M?void 0:M.locales,null==M?void 0:M.domainLocales);G.href=t||p.addBasePath(u.addLocale(A,e,null==M?void 0:M.defaultLocale))}return L?o.default.cloneElement(r,G):o.default.createElement("a",Object.assign({},I,G),n)});t.default=x,("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},508:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){let{rootRef:t,rootMargin:n,disabled:s}=e,c=s||!o,[u,d]=r.useState(!1),f=r.useRef(null),m=r.useCallback(e=>{f.current=e},[]);r.useEffect(()=>{if(o){if(c||u)return;let e=f.current;if(e&&e.tagName){let r=function(e,t,n){let{id:r,observer:a,elements:o}=function(e){let t;let n={root:e.root||null,margin:e.rootMargin||""},r=i.find(e=>e.root===n.root&&e.margin===n.margin);if(r&&(t=l.get(r)))return t;let a=new Map,o=new IntersectionObserver(e=>{e.forEach(e=>{let t=a.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)})},e);return t={id:n,observer:o,elements:a},i.push(n),l.set(n,t),t}(n);return o.set(e,t),a.observe(e),function(){if(o.delete(e),a.unobserve(e),0===o.size){a.disconnect(),l.delete(r);let e=i.findIndex(e=>e.root===r.root&&e.margin===r.margin);e>-1&&i.splice(e,1)}}}(e,e=>e&&d(e),{root:null==t?void 0:t.current,rootMargin:n});return r}}else if(!u){let e=a.requestIdleCallback(()=>d(!0));return()=>a.cancelIdleCallback(e)}},[c,n,t,u,f.current]);let h=r.useCallback(()=>{d(!1)},[]);return[m,u,h]};var r=n(7294),a=n(29);let o="function"==typeof IntersectionObserver,l=new Map,i=[];("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},8810:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return P}});var r=n(5893);n(3814);var a=n(7294);let o=["light","dark"],l="(prefers-color-scheme: dark)",i="undefined"==typeof window,s=(0,a.createContext)(void 0),c={setTheme:e=>{},themes:[]},u=()=>{var e;return null!==(e=(0,a.useContext)(s))&&void 0!==e?e:c},d=e=>(0,a.useContext)(s)?a.createElement(a.Fragment,null,e.children):a.createElement(m,e),f=["light","dark"],m=({forcedTheme:e,disableTransitionOnChange:t=!1,enableSystem:n=!0,enableColorScheme:r=!0,storageKey:i="theme",themes:c=f,defaultTheme:u=n?"system":"light",attribute:d="data-theme",value:m,children:y,nonce:x})=>{let[b,w]=(0,a.useState)(()=>p(i,u)),[T,_]=(0,a.useState)(()=>p(i)),C=m?Object.values(m):c,j=(0,a.useCallback)(e=>{let a=e;if(!a)return;"system"===e&&n&&(a=v());let l=m?m[a]:a,i=t?g():null,s=document.documentElement;if("class"===d?(s.classList.remove(...C),l&&s.classList.add(l)):l?s.setAttribute(d,l):s.removeAttribute(d),r){let e=o.includes(u)?u:null,t=o.includes(a)?a:e;s.style.colorScheme=t}null==i||i()},[]),E=(0,a.useCallback)(e=>{w(e);try{localStorage.setItem(i,e)}catch(e){}},[e]),k=(0,a.useCallback)(t=>{let r=v(t);_(r),"system"===b&&n&&!e&&j("system")},[b,e]);(0,a.useEffect)(()=>{let e=window.matchMedia(l);return e.addListener(k),k(e),()=>e.removeListener(k)},[k]),(0,a.useEffect)(()=>{let e=e=>{e.key===i&&E(e.newValue||u)};return window.addEventListener("storage",e),()=>window.removeEventListener("storage",e)},[E]),(0,a.useEffect)(()=>{j(null!=e?e:b)},[e,b]);let S=(0,a.useMemo)(()=>({theme:b,setTheme:E,forcedTheme:e,resolvedTheme:"system"===b?T:b,themes:n?[...c,"system"]:c,systemTheme:n?T:void 0}),[b,E,e,T,n,c]);return a.createElement(s.Provider,{value:S},a.createElement(h,{forcedTheme:e,disableTransitionOnChange:t,enableSystem:n,enableColorScheme:r,storageKey:i,themes:c,defaultTheme:u,attribute:d,value:m,children:y,attrs:C,nonce:x}),y)},h=(0,a.memo)(({forcedTheme:e,storageKey:t,attribute:n,enableSystem:r,enableColorScheme:i,defaultTheme:s,value:c,attrs:u,nonce:d})=>{let f="system"===s,m="class"===n?`var d=document.documentElement,c=d.classList;c.remove(${u.map(e=>`'${e}'`).join(",")});`:`var d=document.documentElement,n='${n}',s='setAttribute';`,h=i?o.includes(s)&&s?`if(e==='light'||e==='dark'||!e)d.style.colorScheme=e||'${s}'`:"if(e==='light'||e==='dark')d.style.colorScheme=e":"",p=(e,t=!1,r=!0)=>{let a=c?c[e]:e,l=t?e+"|| ''":`'${a}'`,s="";return i&&r&&!t&&o.includes(e)&&(s+=`d.style.colorScheme = '${e}';`),"class"===n?s+=t||a?`c.add(${l})`:"null":a&&(s+=`d[s](n,${l})`),s},g=e?`!function(){${m}${p(e)}}()`:r?`!function(){try{${m}var e=localStorage.getItem('${t}');if('system'===e||(!e&&${f})){var t='${l}',m=window.matchMedia(t);if(m.media!==t||m.matches){${p("dark")}}else{${p("light")}}}else if(e){${c?`var x=${JSON.stringify(c)};`:""}${p(c?"x[e]":"e",!0)}}${f?"":"else{"+p(s,!1,!1)+"}"}${h}}catch(e){}}()`:`!function(){try{${m}var e=localStorage.getItem('${t}');if(e){${c?`var x=${JSON.stringify(c)};`:""}${p(c?"x[e]":"e",!0)}}else{${p(s,!1,!1)};}${h}}catch(t){}}();`;return a.createElement("script",{nonce:d,dangerouslySetInnerHTML:{__html:g}})},()=>!0),p=(e,t)=>{let n;if(!i){try{n=localStorage.getItem(e)||void 0}catch(e){}return n||t}},g=()=>{let e=document.createElement("style");return e.appendChild(document.createTextNode("*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}")),document.head.appendChild(e),()=>{window.getComputedStyle(document.body),setTimeout(()=>{document.head.removeChild(e)},1)}},v=e=>(e||(e=window.matchMedia(l)),e.matches?"dark":"light");var y=n(9008),x=n.n(y),b=n(1703);function w(e){let{children:t}=e;return(0,r.jsx)("div",{className:"mx-auto max-w-3xl px-4  sm:px-6 xl:max-w-5xl xl:px-0",children:t})}var T=n(1664),_=n.n(T),C=[{href:"/",title:"Home"},{href:"/projects",title:"Projects"},{href:"/blogs",title:"Blogs"},{href:"/links",title:"Links"}];let j=()=>{let[e,t]=(0,a.useState)(!1),{theme:n,setTheme:o,resolvedTheme:l}=u();return(0,a.useEffect)(()=>t(!0),[]),(0,r.jsx)("button",{"aria-label":"Toggle Dark Mode",type:"button",className:"ml-1 mr-1 h-8 w-8 rounded p-1 sm:ml-4",onClick:()=>o("dark"===n||"dark"===l?"light":"dark"),children:(0,r.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",className:"text-gray-900 dark:text-gray-100",children:e&&("dark"===n||"dark"===l)?(0,r.jsx)("path",{fillRule:"evenodd",d:"M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z",clipRule:"evenodd"}):(0,r.jsx)("path",{d:"M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"})})})},E=e=>{let{children:t}=e;return(0,r.jsx)(w,{children:(0,r.jsxs)("div",{className:"flex h-screen flex-col justify-between",children:[(0,r.jsxs)("header",{className:"flex items-center justify-between py-10",children:[(0,r.jsx)("div",{children:(0,r.jsx)(_(),{href:"/","aria-label":b.F.headerTitle,children:(0,r.jsxs)("div",{className:"flex items-center justify-between",children:[(0,r.jsx)("div",{className:"mr-3",children:(0,r.jsx)("img",{height:35,className:"max-h-[35px]",src:"./code-2.png"})}),"string"==typeof b.F.headerTitle?(0,r.jsx)("div",{className:"hidden h-6 text-2xl font-semibold sm:hidden",children:b.F.headerTitle}):b.F.headerTitle]})})}),(0,r.jsxs)("div",{className:"flex items-center text-base leading-5",children:[(0,r.jsx)("div",{className:"hidden sm:flex",children:C.map(e=>(0,r.jsxs)(_(),{href:e.href,className:"dot-parent flex p-1 font-medium text-gray-900 hover:opacity-75 dark:text-gray-100 sm:p-4",children:[(0,r.jsx)("span",{className:"dot  mr-2 mt-[5px] h-[10px] min-h-[10px] w-[10px] min-w-[10px] rounded-full bg-black text-xl dark:bg-white"})," ",e.title]},e.title))}),(0,r.jsx)(j,{})]})]}),(0,r.jsx)("main",{className:"mb-auto",children:t}),(0,r.jsx)("footer",{children:(0,r.jsx)("div",{className:"mt-16 flex flex-col items-center"})})]})})};var k=n(1163),S=n(4298),L=n.n(S);let I="G-TPSXZW65CS",N=()=>{let e=(0,k.useRouter)();return((0,a.useEffect)(()=>{I&&!e.isPreview&&(gtag("config",I,{send_page_view:!1}),gtag("event","page_view",{page_path:window.location.pathname,send_to:I}))},[]),(0,a.useEffect)(()=>{let t=t=>{I&&!e.isPreview&&gtag("event","page_view",{page_path:t,send_to:I})};return e.events.on("routeChangeComplete",t),e.events.on("hashChangeComplete",t),()=>{e.events.off("routeChangeComplete",t),e.events.off("hashChangeComplete",t)}},[e.events,e.isPreview]),!I||e.isPreview)?null:(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(L(),{src:"https://www.googletagmanager.com/gtag/js?id=".concat(I)}),(0,r.jsx)(L(),{id:"gtag-init",dangerouslySetInnerHTML:{__html:"\n            window.dataLayer = window.dataLayer || [];\n            function gtag(){dataLayer.push(arguments);}\n            gtag('js', new Date());\n          "}})]})};var M=(0,a.memo)(N);function P(e){let{Component:t,pageProps:n}=e;return(0,r.jsxs)(d,{attribute:"class",defaultTheme:b.F.theme,children:[(0,r.jsx)(x(),{children:(0,r.jsx)("meta",{content:"width=device-width, initial-scale=1",name:"viewport"})}),(0,r.jsx)(M,{}),(0,r.jsx)(E,{children:(0,r.jsx)(t,{...n})})]})}},3814:function(){},7663:function(e){!function(){var t={229:function(e){var t,n,r,a=e.exports={};function o(){throw Error("setTimeout has not been defined")}function l(){throw Error("clearTimeout has not been defined")}function i(e){if(t===setTimeout)return setTimeout(e,0);if((t===o||!t)&&setTimeout)return t=setTimeout,setTimeout(e,0);try{return t(e,0)}catch(n){try{return t.call(null,e,0)}catch(n){return t.call(this,e,0)}}}!function(){try{t="function"==typeof setTimeout?setTimeout:o}catch(e){t=o}try{n="function"==typeof clearTimeout?clearTimeout:l}catch(e){n=l}}();var s=[],c=!1,u=-1;function d(){c&&r&&(c=!1,r.length?s=r.concat(s):u=-1,s.length&&f())}function f(){if(!c){var e=i(d);c=!0;for(var t=s.length;t;){for(r=s,s=[];++u<t;)r&&r[u].run();u=-1,t=s.length}r=null,c=!1,function(e){if(n===clearTimeout)return clearTimeout(e);if((n===l||!n)&&clearTimeout)return n=clearTimeout,clearTimeout(e);try{n(e)}catch(t){try{return n.call(null,e)}catch(t){return n.call(this,e)}}}(e)}}function m(e,t){this.fun=e,this.array=t}function h(){}a.nextTick=function(e){var t=Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];s.push(new m(e,t)),1!==s.length||c||i(f)},m.prototype.run=function(){this.fun.apply(null,this.array)},a.title="browser",a.browser=!0,a.env={},a.argv=[],a.version="",a.versions={},a.on=h,a.addListener=h,a.once=h,a.off=h,a.removeListener=h,a.removeAllListeners=h,a.emit=h,a.prependListener=h,a.prependOnceListener=h,a.listeners=function(e){return[]},a.binding=function(e){throw Error("process.binding is not supported")},a.cwd=function(){return"/"},a.chdir=function(e){throw Error("process.chdir is not supported")},a.umask=function(){return 0}}},n={};function r(e){var a=n[e];if(void 0!==a)return a.exports;var o=n[e]={exports:{}},l=!0;try{t[e](o,o.exports,r),l=!1}finally{l&&delete n[e]}return o.exports}r.ab="//";var a=r(229);e.exports=a}()},9008:function(e,t,n){e.exports=n(2636)},1664:function(e,t,n){e.exports=n(5569)},1163:function(e,t,n){e.exports=n(6885)},4298:function(e,t,n){e.exports=n(5442)}},function(e){var t=function(t){return e(e.s=t)};e.O(0,[774,179],function(){return t(6840),t(6885)}),_N_E=e.O()}]);