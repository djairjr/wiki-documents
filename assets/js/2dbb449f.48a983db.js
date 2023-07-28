"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[28905],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>k});var o=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var a=o.createContext({}),u=function(e){var t=o.useContext(a),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=u(e.components);return o.createElement(a.Provider,{value:t},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,a=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=u(n),m=i,k=c["".concat(a,".").concat(m)]||c[m]||p[m]||r;return n?o.createElement(k,s(s({ref:t},d),{},{components:n})):o.createElement(k,s({ref:t},d))}));function k(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,s=new Array(r);s[0]=m;var l={};for(var a in t)hasOwnProperty.call(t,a)&&(l[a]=t[a]);l.originalType=e,l[c]="string"==typeof e?e:i,s[1]=l;for(var u=2;u<r;u++)s[u]=n[u];return o.createElement.apply(null,s)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},13298:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>s,default:()=>c,frontMatter:()=>r,metadata:()=>l,toc:()=>u});var o=n(87462),i=(n(67294),n(3905));const r={description:"ODYSSEY - X86J41x5",title:"LTE Modules for ODYSSEY",tags:["ODYSSEY"],keywords:["ODYSSEY"],image:"https://avatars.githubusercontent.com/u/10758833",slug:"/ODYSSEY-X86J4105-LTE-Module",last_update:{date:"01/03/2023",author:"w0x7ce"}},s=void 0,l={unversionedId:"Edge/ODYSSEY/ODYSSEY_X86J4105/ODYSSEY-X86J4105-LTE-Module",id:"Edge/ODYSSEY/ODYSSEY_X86J4105/ODYSSEY-X86J4105-LTE-Module",title:"LTE Modules for ODYSSEY",description:"ODYSSEY - X86J41x5",source:"@site/docs/Edge/ODYSSEY/ODYSSEY_X86J4105/ODYSSEY-X86J4105-LTE-Module.md",sourceDirName:"Edge/ODYSSEY/ODYSSEY_X86J4105",slug:"/ODYSSEY-X86J4105-LTE-Module",permalink:"/ODYSSEY-X86J4105-LTE-Module",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Edge/ODYSSEY/ODYSSEY_X86J4105/ODYSSEY-X86J4105-LTE-Module.md",tags:[{label:"ODYSSEY",permalink:"/tags/odyssey"}],version:"current",lastUpdatedBy:"w0x7ce",lastUpdatedAt:1672704e3,formattedLastUpdatedAt:"Jan 3, 2023",frontMatter:{description:"ODYSSEY - X86J41x5",title:"LTE Modules for ODYSSEY",tags:["ODYSSEY"],keywords:["ODYSSEY"],image:"https://avatars.githubusercontent.com/u/10758833",slug:"/ODYSSEY-X86J4105-LTE-Module",last_update:{date:"01/03/2023",author:"w0x7ce"}},sidebar:"ProductSidebar",previous:{title:"Coral Mini PCIe Accelerator for ODYSSEY",permalink:"/Coral-Mini-PCIe-Accelerator-x86"},next:{title:"FAQs for ODYSSEY Usage",permalink:"/ODYSSEY_FAQ"}},a={},u=[{value:"Hardware Connection",id:"hardware-connection",level:2},{value:"Configurations",id:"configurations",level:2},{value:"Windows",id:"windows",level:3},{value:"Wi-Fi Hotspot under Windows",id:"wi-fi-hotspot-under-windows",level:3},{value:"Linux",id:"linux",level:3},{value:"Wi-Fi Hotspot under Linux",id:"wi-fi-hotspot-under-linux",level:3},{value:"Reference",id:"reference",level:2},{value:"Tech Support &amp; Product Discussion",id:"tech-support--product-discussion",level:2}],d={toc:u};function c(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This wiki will walk you through how to use the LTE module on ODYSSEY-X86 on both Windows and Linux OS. In this example, the LTE module is ",(0,i.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/Quectel-EM06-E-LTE-Cat6-Module-p-4567.html"},"Quectel EM06-E LTE Cat 6 M.2 Module")," which is in the M.2 form factor."),(0,i.kt)("p",null,"On both OS, we will demonstrate how to use the ",(0,i.kt)("strong",{parentName:"p"},"Hotspot")," feature to enable Wi-Fi availability to convert 4G LTE to Wi-Fi signals making it ODYSSEY-X86 a simple ",(0,i.kt)("strong",{parentName:"p"},"4G Wi-Fi Router")," with ease!"),(0,i.kt)("h2",{id:"hardware-connection"},"Hardware Connection"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Connect the LTE module to the M.2 Connector of ODYSSEY-X86:")),(0,i.kt)("div",{align:"center"},(0,i.kt)("img",{src:"https://files.seeedstudio.com/wiki/LTE-Modules/connection.png"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Connect the 4G SIM card to the slot.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Connect the Antennas to the LTE module."))),(0,i.kt)("h2",{id:"configurations"},"Configurations"),(0,i.kt)("p",null,"The Quectel EM06-E LTE Cat 6 M.2 Module has USB drivers for Windows 7/8/8.1/10, Linux and Android, DFOTA, etc. This makes it very convenient to get started, and without the need of installing drivers."),(0,i.kt)("h3",{id:"windows"},"Windows"),(0,i.kt)("p",null,"Once connected the LTE module and booted Windows. It should automatically install the USB drivers and ready to use:"),(0,i.kt)("div",{align:"center"},(0,i.kt)("img",{src:"https://files.seeedstudio.com/wiki/LTE-Modules/Windows.png"})),(0,i.kt)("h3",{id:"wi-fi-hotspot-under-windows"},"Wi-Fi Hotspot under Windows"),(0,i.kt)("p",null,"Once it's connected to the Internet with the LTE module, you can use the Hotspot feature from Windows to create a Wi-Fi:"),(0,i.kt)("div",{align:"center"},(0,i.kt)("img",{src:"https://files.seeedstudio.com/wiki/LTE-Modules/WindowsHS.png"})),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"Make sure that the Intel Network card also has antennas connected on it.")),(0,i.kt)("h3",{id:"linux"},"Linux"),(0,i.kt)("p",null,"For Linux, it is also very simple. Run the broadband configurations:"),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre"},"    Ubuntu 18.04 is used for reference.\n"))),(0,i.kt)("div",{align:"center"},(0,i.kt)("img",{src:"https://files.seeedstudio.com/wiki/LTE-Modules/1.png"})),(0,i.kt)("p",null,"Choose the Country Region and select your network provider:"),(0,i.kt)("div",{align:"center"},(0,i.kt)("img",{src:"https://files.seeedstudio.com/wiki/LTE-Modules/2.png"})),(0,i.kt)("p",null,"Choose your plan (Default):"),(0,i.kt)("div",{align:"center"},(0,i.kt)("img",{src:"https://files.seeedstudio.com/wiki/LTE-Modules/3.png"})),(0,i.kt)("p",null,"Confirm details and click apply:"),(0,i.kt)("div",{align:"center"},(0,i.kt)("img",{src:"https://files.seeedstudio.com/wiki/LTE-Modules/4.png"})),(0,i.kt)("p",null,"Now, the LTE module is all done and can use to browse Internet!"),(0,i.kt)("div",{align:"center"},(0,i.kt)("img",{src:"https://files.seeedstudio.com/wiki/LTE-Modules/5.png"})),(0,i.kt)("h3",{id:"wi-fi-hotspot-under-linux"},"Wi-Fi Hotspot under Linux"),(0,i.kt)("p",null,"For Linux, you can also create Wi-Fi Hotspot using the 4G network. This following is ran under ubuntu."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Open Network settings in ubuntu, run the following command in terminal:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"nm-connection-editor\n")),(0,i.kt)("p",null,"The following window will appear:"),(0,i.kt)("div",{align:"center"},(0,i.kt)("img",{src:"https://files.seeedstudio.com/wiki/LTE-Modules/HS-1.png"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Select ",(0,i.kt)("inlineCode",{parentName:"li"},"Wi-Fi")," as connection type:")),(0,i.kt)("div",{align:"center"},(0,i.kt)("img",{src:"https://files.seeedstudio.com/wiki/LTE-Modules/HS-2.png"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Configure Wi-Fi settings as follow, make sure that ",(0,i.kt)("strong",{parentName:"li"},"mode")," is ",(0,i.kt)("inlineCode",{parentName:"li"},"Hotspot"),":")),(0,i.kt)("div",null,(0,i.kt)("div",{align:"center"},(0,i.kt)("img",{src:"https://files.seeedstudio.com/wiki/LTE-Modules/HS-3.png"})),(0,i.kt)("br",null),(0,i.kt)("div",{align:"center"},(0,i.kt)("img",{src:"https://files.seeedstudio.com/wiki/LTE-Modules/HS-4.png"})),(0,i.kt)("br",null),(0,i.kt)("div",{align:"center"},(0,i.kt)("img",{src:"https://files.seeedstudio.com/wiki/LTE-Modules/HS-5.png"}))),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"For the Wi-Fi to be identified by other device, you must connect the Wi-Fi by itself. Under Wi-Fi, select ",(0,i.kt)("inlineCode",{parentName:"li"},"Connect To Hidden Network"),". Choose the network that we just created, and connect.")),(0,i.kt)("div",null,(0,i.kt)("div",{align:"center"},(0,i.kt)("img",{src:"https://files.seeedstudio.com/wiki/LTE-Modules/HS-6.png"})),(0,i.kt)("br",null),(0,i.kt)("div",{align:"center"},(0,i.kt)("img",{src:"https://files.seeedstudio.com/wiki/LTE-Modules/HS-7.png"}))),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Now, the Wi-Fi is available for connections!")),(0,i.kt)("h2",{id:"reference"},"Reference"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://blog.seeedstudio.com/blog/2020/06/15/how-fast-is-5g-on-the-odyssey-x86j4105-5g-speed-test-m/"},"How Fast is 5G On The ODYSSEY \u2013 X86J41x5 | 5G Speed Test"))),(0,i.kt)("h2",{id:"tech-support--product-discussion"},"Tech Support & Product Discussion"),(0,i.kt)("p",null,"Thank you for choosing our products! We are here to provide you with different support to ensure that your experience with our products is as smooth as possible. We offer several communication channels to cater to different preferences and needs."),(0,i.kt)("div",{class:"button_tech_support_container"},(0,i.kt)("a",{href:"https://forum.seeedstudio.com/",class:"button_forum"}),(0,i.kt)("a",{href:"https://www.seeedstudio.com/contacts",class:"button_email"})),(0,i.kt)("div",{class:"button_tech_support_container"},(0,i.kt)("a",{href:"https://discord.gg/eWkprNDMU7",class:"button_discord"}),(0,i.kt)("a",{href:"https://github.com/Seeed-Studio/wiki-documents/discussions/69",class:"button_discussion"})))}c.isMDXComponent=!0}}]);