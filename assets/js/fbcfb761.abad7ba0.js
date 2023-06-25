"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[46890],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>h});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(r),g=i,h=c["".concat(s,".").concat(g)]||c[g]||m[g]||o;return r?n.createElement(h,a(a({ref:t},u),{},{components:r})):n.createElement(h,a({ref:t},u))}));function h(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=g;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:i,a[1]=l;for(var p=2;p<o;p++)a[p]=r[p];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}g.displayName="MDXCreateElement"},19796:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var n=r(87462),i=(r(67294),r(3905));const o={description:"reTerminal-FAQ",title:"Log in to Raspberry Pi OS/ Ubuntu OS or Other OS using SSH over Wi-Fi/ Ethernet",image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",last_update:{date:"6/21/2023",author:"Seraphina"}},a=void 0,l={unversionedId:"FAQ/reTerminal/log_rpios_use_ssh_over_wifi_ethernet",id:"FAQ/reTerminal/log_rpios_use_ssh_over_wifi_ethernet",title:"Log in to Raspberry Pi OS/ Ubuntu OS or Other OS using SSH over Wi-Fi/ Ethernet",description:"reTerminal-FAQ",source:"@site/docs/FAQ/reTerminal/log_rpios_use_ssh_over_wifi_ethernet.md",sourceDirName:"FAQ/reTerminal",slug:"/FAQ/reTerminal/log_rpios_use_ssh_over_wifi_ethernet",permalink:"/FAQ/reTerminal/log_rpios_use_ssh_over_wifi_ethernet",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/FAQ/reTerminal/log_rpios_use_ssh_over_wifi_ethernet.md",tags:[],version:"current",lastUpdatedBy:"Seraphina",lastUpdatedAt:1687305600,formattedLastUpdatedAt:"Jun 21, 2023",frontMatter:{description:"reTerminal-FAQ",title:"Log in to Raspberry Pi OS/ Ubuntu OS or Other OS using SSH over Wi-Fi/ Ethernet",image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",last_update:{date:"6/21/2023",author:"Seraphina"}}},s={},p=[{value:"Step 1: Set up Wi-Fi/Ethernet on the reTerminal",id:"step-1-set-up-wi-fiethernet-on-the-reterminal",level:2},{value:"Step 2: Configure SSH using Windows/Mac/Linux",id:"step-2-configure-ssh-using-windowsmaclinux",level:2},{value:"For Windows",id:"for-windows",level:3},{value:"For Mac/Linux",id:"for-maclinux",level:3}],u={toc:p};function c(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"If you want to log in to the Raspberry Pi OS using ",(0,i.kt)("strong",{parentName:"p"},"SSH over Wi-Fi/ Ethernet"),", you can follow the steps below. First set up Wi-Fi/Ethernet on the reTerminal and then SSH using Windows/Mac/Linux."),(0,i.kt)("h2",{id:"step-1-set-up-wi-fiethernet-on-the-reterminal"},"Step 1: Set up Wi-Fi/Ethernet on the reTerminal"),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"If you have configured WiFi and enabled SSH using Raspberry Pi Imager, you can skip step 1")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"1.")," If you ",(0,i.kt)("strong",{parentName:"li"},"have a Wi-Fi connection"),", click the ",(0,i.kt)("strong",{parentName:"li"},"Wi-Fi icon")," on the top right corner of the Raspberry Pi OS Desktop, select your Wi-Fi network and enter the password using the on-screen virtual keyboard")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Note:")," The location of the Wi-Fi setting might be different for other OS"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"2.")," If you ",(0,i.kt)("strong",{parentName:"li"},"don't have a Wi-Fi connection"),", you can connect an ethernet cable from your router to the ethernet port of the reTerminal")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Note:")," Make sure the reTerminal and your computer is connected to the same network"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"3.")," Touch on the Raspberry Pi icon at the top left corner and navigate to ",(0,i.kt)("inlineCode",{parentName:"p"},"Preferences > Raspberry Pi Configuration")," and click on ",(0,i.kt)("strong",{parentName:"p"},"Interfaces")," tab")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"4.")," Select ",(0,i.kt)("strong",{parentName:"p"},"Enable")," which is next to ",(0,i.kt)("strong",{parentName:"p"},"SSH")," and click ",(0,i.kt)("strong",{parentName:"p"},"OK")))),(0,i.kt)("p",{style:{textAlign:"center"}},(0,i.kt)("img",{src:"https://files.seeedstudio.com/wiki/ReTerminal/ssh-select-2.jpg",alt:"pir",width:"1000",height:"auto"})),(0,i.kt)("p",null,"Now let's configure the software on the computer. Please follow according to your operating system"),(0,i.kt)("h2",{id:"step-2-configure-ssh-using-windowsmaclinux"},"Step 2: Configure SSH using Windows/Mac/Linux"),(0,i.kt)("h3",{id:"for-windows"},"For Windows"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"1.")," Open ",(0,i.kt)("strong",{parentName:"li"},"Command Prompt")," and type the following")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"ssh pi@raspberrypi.local\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"2.")," Type ",(0,i.kt)("strong",{parentName:"li"},"yes")," for the prompt")),(0,i.kt)("p",{style:{textAlign:"center"}},(0,i.kt)("img",{src:"http://files.seeedstudio.com/wiki/ReTerminal/ssh-windows-prompt.png",alt:"pir",width:"750",height:"auto"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"3.")," Enter the password as follows")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"raspberry\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"4.")," If you have sucessfully logged into the Raspberry Pi OS, you will see the following output")),(0,i.kt)("p",{style:{textAlign:"center"}},(0,i.kt)("img",{src:"http://files.seeedstudio.com/wiki/ReTerminal/ssh-windows.png",alt:"pir",width:"1000",height:"auto"})),(0,i.kt)("h3",{id:"for-maclinux"},"For Mac/Linux"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"1.")," Open ",(0,i.kt)("strong",{parentName:"li"},"Terminal")," on the computer and type the following")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"ssh pi@raspberrypi.local\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"2.")," Type ",(0,i.kt)("strong",{parentName:"li"},"yes")," for the following message")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"ECDSA key fingerprint is SHA256:XXXXXXX.\nAre you sure you want to continue connecting (yes/no/[fingerprint])?\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"3.")," When it asks for the password, type the following")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"raspberry\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"4.")," If you have sucessfully logged into the Raspberry Pi OS, you will see the following output")),(0,i.kt)("p",{style:{textAlign:"center"}},(0,i.kt)("img",{src:"https://files.seeedstudio.com/wiki/102110497/SSH_WiFi_Linux.png",alt:"pir",width:"900",height:"auto"})))}c.isMDXComponent=!0}}]);