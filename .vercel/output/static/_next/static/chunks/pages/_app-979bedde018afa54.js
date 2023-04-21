(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{3454:function(e,t,n){"use strict";var r,o;e.exports=(null==(r=n.g.process)?void 0:r.env)&&"object"==typeof(null==(o=n.g.process)?void 0:o.env)?n.g.process:n(7663)},6840:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return n(9874)}])},3528:function(e,t,n){"use strict";var r=n(5893);let o=e=>{let{children:t}=e;return(0,r.jsx)("div",{className:"w-screen h-10 min-h-10 bg-blue-500",children:(0,r.jsx)("main",{className:"mb-auto",children:t})})};t.Z=o},9874:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return w}});var r=n(5893);n(3814);var o=n(7294);let i=["light","dark"],a="(prefers-color-scheme: dark)",s="undefined"==typeof window,l=(0,o.createContext)(void 0),c=e=>(0,o.useContext)(l)?o.createElement(o.Fragment,null,e.children):o.createElement(m,e),u=["light","dark"],m=({forcedTheme:e,disableTransitionOnChange:t=!1,enableSystem:n=!0,enableColorScheme:r=!0,storageKey:s="theme",themes:c=u,defaultTheme:m=n?"system":"light",attribute:g="data-theme",value:v,children:y,nonce:T})=>{let[b,w]=(0,o.useState)(()=>h(s,m)),[E,_]=(0,o.useState)(()=>h(s)),S=v?Object.values(v):c,C=(0,o.useCallback)(e=>{let o=e;if(!o)return;"system"===e&&n&&(o=p());let a=v?v[o]:o,s=t?f():null,l=document.documentElement;if("class"===g?(l.classList.remove(...S),a&&l.classList.add(a)):a?l.setAttribute(g,a):l.removeAttribute(g),r){let e=i.includes(m)?m:null,t=i.includes(o)?o:e;l.style.colorScheme=t}null==s||s()},[]),$=(0,o.useCallback)(e=>{w(e);try{localStorage.setItem(s,e)}catch(e){}},[e]),k=(0,o.useCallback)(t=>{let r=p(t);_(r),"system"===b&&n&&!e&&C("system")},[b,e]);(0,o.useEffect)(()=>{let e=window.matchMedia(a);return e.addListener(k),k(e),()=>e.removeListener(k)},[k]),(0,o.useEffect)(()=>{let e=e=>{e.key===s&&$(e.newValue||m)};return window.addEventListener("storage",e),()=>window.removeEventListener("storage",e)},[$]),(0,o.useEffect)(()=>{C(null!=e?e:b)},[e,b]);let I=(0,o.useMemo)(()=>({theme:b,setTheme:$,forcedTheme:e,resolvedTheme:"system"===b?E:b,themes:n?[...c,"system"]:c,systemTheme:n?E:void 0}),[b,$,e,E,n,c]);return o.createElement(l.Provider,{value:I},o.createElement(d,{forcedTheme:e,disableTransitionOnChange:t,enableSystem:n,enableColorScheme:r,storageKey:s,themes:c,defaultTheme:m,attribute:g,value:v,children:y,attrs:S,nonce:T}),y)},d=(0,o.memo)(({forcedTheme:e,storageKey:t,attribute:n,enableSystem:r,enableColorScheme:s,defaultTheme:l,value:c,attrs:u,nonce:m})=>{let d="system"===l,h="class"===n?`var d=document.documentElement,c=d.classList;c.remove(${u.map(e=>`'${e}'`).join(",")});`:`var d=document.documentElement,n='${n}',s='setAttribute';`,f=s?i.includes(l)&&l?`if(e==='light'||e==='dark'||!e)d.style.colorScheme=e||'${l}'`:"if(e==='light'||e==='dark')d.style.colorScheme=e":"",p=(e,t=!1,r=!0)=>{let o=c?c[e]:e,a=t?e+"|| ''":`'${o}'`,l="";return s&&r&&!t&&i.includes(e)&&(l+=`d.style.colorScheme = '${e}';`),"class"===n?l+=t||o?`c.add(${a})`:"null":o&&(l+=`d[s](n,${a})`),l},g=e?`!function(){${h}${p(e)}}()`:r?`!function(){try{${h}var e=localStorage.getItem('${t}');if('system'===e||(!e&&${d})){var t='${a}',m=window.matchMedia(t);if(m.media!==t||m.matches){${p("dark")}}else{${p("light")}}}else if(e){${c?`var x=${JSON.stringify(c)};`:""}${p(c?"x[e]":"e",!0)}}${d?"":"else{"+p(l,!1,!1)+"}"}${f}}catch(e){}}()`:`!function(){try{${h}var e=localStorage.getItem('${t}');if(e){${c?`var x=${JSON.stringify(c)};`:""}${p(c?"x[e]":"e",!0)}}else{${p(l,!1,!1)};}${f}}catch(t){}}();`;return o.createElement("script",{nonce:m,dangerouslySetInnerHTML:{__html:g}})},()=>!0),h=(e,t)=>{let n;if(!s){try{n=localStorage.getItem(e)||void 0}catch(e){}return n||t}},f=()=>{let e=document.createElement("style");return e.appendChild(document.createTextNode("*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}")),document.head.appendChild(e),()=>{window.getComputedStyle(document.body),setTimeout(()=>{document.head.removeChild(e)},1)}},p=e=>(e||(e=window.matchMedia(a)),e.matches?"dark":"light");var g=n(9008),v=n.n(g),y=n(3528),T=n(3454);let b={title:"Next.js",author:"Ferhat Aslan",headerTitle:"Ferhat Aslan",description:"A Software Developer who is focused on Web and IoT",language:"en-us",theme:"system",siteUrl:"https://feslan.github.io",siteRepo:"https://github.com/feslan/feslan.github.io",siteLogo:"/static/images/logo.png",image:"/static/images/avatar.png",socialBanner:"/static/images/twitter-card.png",email:"aslanferhat16@gmail.com",github:"https://github.com/ferhat-aslan",twitter:"https://twitter.com/feslan_",facebook:"https://facebook.com",youtube:"https://youtube.com",linkedin:"https://www.linkedin.com/in/aslanferhat",locale:"en-US",analytics:{plausibleDataDomain:"",simpleAnalytics:!1,umamiWebsiteId:"",googleAnalyticsId:"",posthogAnalyticsId:""},newsletter:{provider:"buttondown"},comment:{provider:"giscus",giscusConfig:{repo:T.env.NEXT_PUBLIC_GISCUS_REPO,repositoryId:T.env.NEXT_PUBLIC_GISCUS_REPOSITORY_ID,category:T.env.NEXT_PUBLIC_GISCUS_CATEGORY,categoryId:T.env.NEXT_PUBLIC_GISCUS_CATEGORY_ID,mapping:"pathname",reactions:"1",metadata:"0",theme:"light",inputPosition:"bottom",lang:"en",darkTheme:"transparent_dark",themeURL:""},utterancesConfig:{repo:T.env.NEXT_PUBLIC_UTTERANCES_REPO,issueTerm:"",label:"",theme:"",darkTheme:""},disqusConfig:{shortname:T.env.NEXT_PUBLIC_DISQUS_SHORTNAME}}};function w(e){let{Component:t,pageProps:n}=e;return(0,r.jsxs)(c,{attribute:"class",defaultTheme:b.theme,children:[(0,r.jsx)(v(),{children:(0,r.jsx)("meta",{content:"width=device-width, initial-scale=1",name:"viewport"})}),(0,r.jsx)(y.Z,{children:(0,r.jsx)(t,{...n})})]})}},3814:function(){},7663:function(e){!function(){var t={229:function(e){var t,n,r,o=e.exports={};function i(){throw Error("setTimeout has not been defined")}function a(){throw Error("clearTimeout has not been defined")}function s(e){if(t===setTimeout)return setTimeout(e,0);if((t===i||!t)&&setTimeout)return t=setTimeout,setTimeout(e,0);try{return t(e,0)}catch(n){try{return t.call(null,e,0)}catch(n){return t.call(this,e,0)}}}!function(){try{t="function"==typeof setTimeout?setTimeout:i}catch(e){t=i}try{n="function"==typeof clearTimeout?clearTimeout:a}catch(e){n=a}}();var l=[],c=!1,u=-1;function m(){c&&r&&(c=!1,r.length?l=r.concat(l):u=-1,l.length&&d())}function d(){if(!c){var e=s(m);c=!0;for(var t=l.length;t;){for(r=l,l=[];++u<t;)r&&r[u].run();u=-1,t=l.length}r=null,c=!1,function(e){if(n===clearTimeout)return clearTimeout(e);if((n===a||!n)&&clearTimeout)return n=clearTimeout,clearTimeout(e);try{n(e)}catch(t){try{return n.call(null,e)}catch(t){return n.call(this,e)}}}(e)}}function h(e,t){this.fun=e,this.array=t}function f(){}o.nextTick=function(e){var t=Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];l.push(new h(e,t)),1!==l.length||c||s(d)},h.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=f,o.addListener=f,o.once=f,o.off=f,o.removeListener=f,o.removeAllListeners=f,o.emit=f,o.prependListener=f,o.prependOnceListener=f,o.listeners=function(e){return[]},o.binding=function(e){throw Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(e){throw Error("process.chdir is not supported")},o.umask=function(){return 0}}},n={};function r(e){var o=n[e];if(void 0!==o)return o.exports;var i=n[e]={exports:{}},a=!0;try{t[e](i,i.exports,r),a=!1}finally{a&&delete n[e]}return i.exports}r.ab="//";var o=r(229);e.exports=o}()},9008:function(e,t,n){e.exports=n(2636)}},function(e){var t=function(t){return e(e.s=t)};e.O(0,[774,179],function(){return t(6840),t(6885)}),_N_E=e.O()}]);