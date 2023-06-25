"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[73037],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>g});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=s(n),d=a,g=m["".concat(p,".").concat(d)]||m[d]||u[d]||o;return n?r.createElement(g,i(i({ref:t},c),{},{components:n})):r.createElement(g,i({ref:t},c))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[m]="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7023:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var r=n(87462),a=(n(67294),n(3905));const o={description:"reTerminal-FAQ",title:"How to flash OS if I replace the CM4 with non-eMMC version",image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",last_update:{date:"6/21/2023",author:"Seraphina"}},i=void 0,l={unversionedId:"FAQ/reTerminal/flashing_os_on_non-eMMC_CM4_replacement",id:"FAQ/reTerminal/flashing_os_on_non-eMMC_CM4_replacement",title:"How to flash OS if I replace the CM4 with non-eMMC version",description:"reTerminal-FAQ",source:"@site/docs/FAQ/reTerminal/flashing_os_on_non-eMMC_CM4_replacement.md",sourceDirName:"FAQ/reTerminal",slug:"/FAQ/reTerminal/flashing_os_on_non-eMMC_CM4_replacement",permalink:"/FAQ/reTerminal/flashing_os_on_non-eMMC_CM4_replacement",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/FAQ/reTerminal/flashing_os_on_non-eMMC_CM4_replacement.md",tags:[],version:"current",lastUpdatedBy:"Seraphina",lastUpdatedAt:1687305600,formattedLastUpdatedAt:"Jun 21, 2023",frontMatter:{description:"reTerminal-FAQ",title:"How to flash OS if I replace the CM4 with non-eMMC version",image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",last_update:{date:"6/21/2023",author:"Seraphina"}}},p={},s=[],c={toc:s};function m(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"If you want to use a Compute Module 4 without eMMC on the reTerminal, then you need to insert a micro-SD and flash the OS of your choice. Follow the steps below according to your operating system."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Step 1.")," Insert a micro-SD card to the computer using a ",(0,a.kt)("strong",{parentName:"p"},"micro-SD card reader")," connected to the computer, or by using a ",(0,a.kt)("strong",{parentName:"p"},"built-in card reader")," on a laptop")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Step 2.")," Download ",(0,a.kt)("strong",{parentName:"p"},"Raspberry Pi Imager")," software by visiting ",(0,a.kt)("a",{parentName:"p",href:"https://www.raspberrypi.org/software/"},"this link")))),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"You can choose to download for either ",(0,a.kt)("strong",{parentName:"p"},"Windows, Mac or Ubuntu"))),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Step 3.")," Open Raspberry Pi Imager software")),(0,a.kt)("p",{style:{textAlign:"center"}},(0,a.kt)("img",{src:"https://files.seeedstudio.com/wiki/102110497/RPI_Imager.png",alt:"pir",width:600,height:"auto"})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Step 4.")," Press ",(0,a.kt)("strong",{parentName:"li"},"CTRL + SHIFT + X")," on the keyboard to open ",(0,a.kt)("strong",{parentName:"li"},"Advanced options")," window")),(0,a.kt)("p",{style:{textAlign:"center"}},(0,a.kt)("img",{src:"http://files.seeedstudio.com/wiki/ReTerminal/rpi-imager-advanced.png",alt:"pir",width:600,height:"auto"})),(0,a.kt)("p",null,"Here you can ",(0,a.kt)("strong",{parentName:"p"},"set a hostname, enable SSH, set a password, configure wifi, set locale settings")," and more"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Step 5.")," Click ",(0,a.kt)("strong",{parentName:"li"},"CHOOSE OS")," and select your preferred OS")),(0,a.kt)("p",{style:{textAlign:"center"}},(0,a.kt)("img",{src:"https://files.seeedstudio.com/wiki/ReTerminal/OS-select.png",alt:"pir",width:600,height:"auto"})),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"You can select OS such as ",(0,a.kt)("strong",{parentName:"p"},"64-bit Ubuntu")," by navigating into ",(0,a.kt)("strong",{parentName:"p"},"Other general purpose OS"))),(0,a.kt)("p",{style:{textAlign:"center"}},(0,a.kt)("img",{src:"https://files.seeedstudio.com/wiki/ReTerminal/Ubuntu-select.jpg",alt:"pir",width:1e3,height:"auto"})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Step 6.")," Click ",(0,a.kt)("strong",{parentName:"p"},"CHOOSE STORAGE")," and select the connected micro-sd card")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Step 7.")," Finally, click ",(0,a.kt)("strong",{parentName:"p"},"WRITE")))),(0,a.kt)("p",{style:{textAlign:"center"}},(0,a.kt)("img",{src:"https://files.seeedstudio.com/wiki/102110497/RPI_Imager_Final.png",alt:"pir",width:600,height:"auto"})),(0,a.kt)("p",null,"Please wait a few minutes until the flashing process is complete."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Step 8.")," Eject the micro-SD card from computer and insert it into the reTerminal.")),(0,a.kt)("p",{style:{textAlign:"center"}},(0,a.kt)("img",{src:"https://files.seeedstudio.com/wiki/ReTerminal/micro-sd.jpg",alt:"pir",width:600,height:"auto"})),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Note:")," You need to open the shell of the reTerminal to access the micro-sd card slot"))}m.isMDXComponent=!0}}]);