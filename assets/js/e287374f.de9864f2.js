"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[43849],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),p=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=p(e.components);return o.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(n),m=r,h=u["".concat(s,".").concat(m)]||u[m]||d[m]||i;return n?o.createElement(h,a(a({ref:t},c),{},{components:n})):o.createElement(h,a({ref:t},c))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:r,a[1]=l;for(var p=2;p<i;p++)a[p]=n[p];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},86820:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var o=n(87462),r=(n(67294),n(3905));const i={description:"reComputer-FAQ",title:"Troubleshooting Installation",image:"https://files.seeedstudio.com/wiki/wiki-platform/S.png",last_update:{date:"2023/6/30",author:"Seraphina"}},a=void 0,l={unversionedId:"FAQ/Jetson/Troubleshooting_Installation",id:"FAQ/Jetson/Troubleshooting_Installation",title:"Troubleshooting Installation",description:"reComputer-FAQ",source:"@site/docs/FAQ/Jetson/Troubleshooting_Installation.md",sourceDirName:"FAQ/Jetson",slug:"/FAQ/Jetson/Troubleshooting_Installation",permalink:"/FAQ/Jetson/Troubleshooting_Installation",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/FAQ/Jetson/Troubleshooting_Installation.md",tags:[],version:"current",lastUpdatedBy:"Seraphina",lastUpdatedAt:1688083200,formattedLastUpdatedAt:"Jun 30, 2023",frontMatter:{description:"reComputer-FAQ",title:"Troubleshooting Installation",image:"https://files.seeedstudio.com/wiki/wiki-platform/S.png",last_update:{date:"2023/6/30",author:"Seraphina"}}},s={},p=[{value:"Troubleshooting Installation with NVIDIA SDK Manager",id:"troubleshooting-installation-with-nvidia-sdk-manager",level:3},{value:"Troubleshooting installation using the command line",id:"troubleshooting-installation-using-the-command-line",level:3}],c={toc:p};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h3",{id:"troubleshooting-installation-with-nvidia-sdk-manager"},"Troubleshooting Installation with NVIDIA SDK Manager"),(0,r.kt)("p",null,"There are many causes of various installation errors. Below is a checklist of common installation issues, which may help you recover from a broken installation."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Review the summary table to identify which component failed."),(0,r.kt)("p",{parentName:"li"},'a. Expand the group with the "Error" status.'),(0,r.kt)("p",{parentName:"li"},"b. When you find the failed component, click the details icon to the right of Install Error to be redirected to the Terminal tab, which will display the exact error."))),(0,r.kt)("div",{align:"center"},(0,r.kt)("img",{width:800,src:"https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/31.png"})),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"If the error is related to an environment issue, such as a broken apt repository or missing prerequisite, try to fix it manually, then click the Retry Failed Items button.")),(0,r.kt)("div",{align:"center"},(0,r.kt)("img",{width:800,src:"https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/32.png"})),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Retrying the installation is also available in two other ways:"),(0,r.kt)("p",{parentName:"li"},"a. From ",(0,r.kt)("strong",{parentName:"p"},"Flashing to eMMC with SDK Manager -- Step 3"),', use the Repair/Uninstall button to get to the Manage NVIDIA SDKs page. If needed, expand the SDK that has the "Broken" status, then click Repair for the relevant part (Host or Target).'))),(0,r.kt)("div",{align:"center"},(0,r.kt)("img",{width:800,src:"https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/33.png"})),(0,r.kt)("ol",{start:4},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"At ",(0,r.kt)("strong",{parentName:"p"},"Flashing to eMMC with SDK Manager -- Step 3"),", select the required SDK and run through the installation again.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Finally, try to uninstall and reinstall the relevant SDK."))),(0,r.kt)("h3",{id:"troubleshooting-installation-using-the-command-line"},"Troubleshooting installation using the command line"),(0,r.kt)("p",null,"The command line installation method is relatively simple, and is often prone to error in scenarios where force recovery mode is used."),(0,r.kt)("p",null,"If you encounter the error shown below in ",(0,r.kt)("strong",{parentName:"p"},"Flashing to eMMC with command-line -- Step 2"),", you probably did not succeed in getting the Jetson-101 Carrier Board into force recovery mode. Please pay special attention, do not enter force recovery mode with the Jetson-101 Carrier Board powered on, as this is not valid."),(0,r.kt)("div",{align:"center"},(0,r.kt)("img",{width:800,src:"https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/34.jpg"})),(0,r.kt)("p",null,"If you can't get into the system in ",(0,r.kt)("strong",{parentName:"p"},"Flashing to eMMC with command-line -- Step 3")," and are stuck on the boot up display command line, you probably did not exit force recovery mode. Likewise, it is not valid for you to unplug the jumper to exit force recovery mode while the Jetson-101 Carrier Board is powered up, this all needs to be done while you are powered down."),(0,r.kt)("div",{align:"center"},(0,r.kt)("img",{width:800,src:"https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/35.jpg"})),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"If more storage space is needed, we can use SD card to expand the capacity, or burn the system on SD card, you can refer to our recommended solution ",(0,r.kt)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/J1010_Boot_From_SD_Card/"},"Flash System on SD card"))))}u.isMDXComponent=!0}}]);