"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[71300],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>v});var o=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function n(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,o,a=function(e,t){if(null==e)return{};var r,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=o.createContext({}),c=function(e){var t=o.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):n(n({},t),e)),r},d=function(e){var t=c(e.components);return o.createElement(p.Provider,{value:t},e.children)},u="mdxType",l={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=c(r),m=a,v=u["".concat(p,".").concat(m)]||u[m]||l[m]||i;return r?o.createElement(v,n(n({ref:t},d),{},{components:r})):o.createElement(v,n({ref:t},d))}));function v(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,n=new Array(i);n[0]=m;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[u]="string"==typeof e?e:a,n[1]=s;for(var c=2;c<i;c++)n[c]=r[c];return o.createElement.apply(null,n)}return o.createElement.apply(null,r)}m.displayName="MDXCreateElement"},68226:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>n,default:()=>l,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var o=r(87462),a=(r(67294),r(3905));const i={description:"Getting Started with Grove Vision AI V2.",title:"External Camera supported",keywords:["vision ai"],image:"https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png",slug:"/Grove-vision-ai-v2-camera-supported",last_update:{date:"12/12/2023",author:"Citric"}},n="External Camera supported Overview",s={unversionedId:"Sensor/Grove/Grove_Sensors/AI-powered/Grove-vision-ai-v2/Grove-vision-ai-v2-camera-supported",id:"Sensor/Grove/Grove_Sensors/AI-powered/Grove-vision-ai-v2/Grove-vision-ai-v2-camera-supported",title:"External Camera supported",description:"Getting Started with Grove Vision AI V2.",source:"@site/docs/Sensor/Grove/Grove_Sensors/AI-powered/Grove-vision-ai-v2/Grove-vision-ai-v2-camera-supported.md",sourceDirName:"Sensor/Grove/Grove_Sensors/AI-powered/Grove-vision-ai-v2",slug:"/Grove-vision-ai-v2-camera-supported",permalink:"/Grove-vision-ai-v2-camera-supported",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Sensor/Grove/Grove_Sensors/AI-powered/Grove-vision-ai-v2/Grove-vision-ai-v2-camera-supported.md",tags:[],version:"current",lastUpdatedBy:"Citric",lastUpdatedAt:1702339200,formattedLastUpdatedAt:"Dec 12, 2023",frontMatter:{description:"Getting Started with Grove Vision AI V2.",title:"External Camera supported",keywords:["vision ai"],image:"https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png",slug:"/Grove-vision-ai-v2-camera-supported",last_update:{date:"12/12/2023",author:"Citric"}},sidebar:"ProductSidebar",previous:{title:"Connectting to Home Assistant",permalink:"/connect_vision_ai_v2_to_ha"},next:{title:"Train and Deploy Your Own AI Model with Roboflow, YOLOv5, TensorFlow Lite",permalink:"/Train-Deploy-AI-Model-Grove-Vision-AI"}},p={},c=[{value:"Highly Recommended",id:"highly-recommended",level:2},{value:"More Supports",id:"more-supports",level:2},{value:"Resources",id:"resources",level:2},{value:"Tech Support &amp; Product Discussion",id:"tech-support--product-discussion",level:2}],d={toc:c},u="wrapper";function l(e){let{components:t,...r}=e;return(0,a.kt)(u,(0,o.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"external-camera-supported-overview"},"External Camera supported Overview"),(0,a.kt)("p",null,"Grove Vision AI V2 features a standard CSI interface and is compatible with Raspberry Pi cameras. When connecting, please pay attention to the direction of the row of pins and don't plug them in backwards."),(0,a.kt)("h2",{id:"highly-recommended"},"Highly Recommended"),(0,a.kt)("p",null,"To explore the full potential of the Grove Vision AI V2 you may want a CSI camera separately, we recommend the ",(0,a.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/OV5647-69-1-FOV-Camera-module-for-Raspberry-Pi-3B-4B-p-5484.html"},(0,a.kt)("strong",{parentName:"a"},"OV5647-62 FOV Camera Module for Raspberry Pi")),"."),(0,a.kt)("div",{style:{textAlign:"center"}},(0,a.kt)("img",{src:"https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/1/114110127-ov5647-69.1-fov-camera-module-for-raspberry-pi-3b_4b-font.jpg",style:{width:300,height:"auto"}})),(0,a.kt)("h2",{id:"more-supports"},"More Supports"),(0,a.kt)("p",null,"Currently we have written drivers for the OV5642 series of cameras, so Grove Vision AI V2 supports the full range of Raspberry Pi OV5647 cameras, e.g., ",(0,a.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/OV5647-75-FOV-IR-Camera-module-for-Raspberry-Pi-3B-4B-p-5483.html"},"the OV5647-67"),", and ",(0,a.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/OV5647-160-FOV-IR-Camera-module-for-Raspberry-Pi-3B-4B-p-5485.html"},"OV5647-160"),", as showing below:"),(0,a.kt)("div",{style:{textAlign:"center"}}," ",(0,a.kt)("img",{src:"https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/1/114110129-ov5647-75-fov--ir-camera-module-for-raspberry-pi-3b_4b-45-font.jpg",style:{width:300,height:"auto"}})," ",(0,a.kt)("img",{src:"https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/1/114110130-ov5647-160-fov--ir-camera-module-for-raspberry-pi-3b_4b-45-font.jpg",style:{width:300,height:"auto"}})," "),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"The other CSI cameras are theoretically supported, but due to the fact that some of the cameras don't have drivers written for them or the do not have a colour processing unit themselves, so there may be a problem that the colour is only green, and the loss of full colour will have a possible impact on the accuracy of the recognition.")),(0,a.kt)("h2",{id:"resources"},"Resources"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"[PDF]")," ",(0,a.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/grove-vision-ai-v2/HX6538_datasheet.pdf"},"Datasheet")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"[GitHub]")," ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/HimaxWiseEyePlus/Seeed_Grove_Vision_AI_Module_V2"},"Seeed Grove Vision AI Module V2 SDK"))),(0,a.kt)("h2",{id:"tech-support--product-discussion"},"Tech Support & Product Discussion"),(0,a.kt)("p",null,"Thank you for choosing our products! We are here to provide you with different support to ensure that your experience with our products is as smooth as possible. We offer several communication channels to cater to different preferences and needs."),(0,a.kt)("div",{class:"table-center"},(0,a.kt)("div",{class:"button_tech_support_container"},(0,a.kt)("a",{href:"https://forum.seeedstudio.com/",class:"button_forum"}),(0,a.kt)("a",{href:"https://www.seeedstudio.com/contacts",class:"button_email"})),(0,a.kt)("div",{class:"button_tech_support_container"},(0,a.kt)("a",{href:"https://discord.gg/eWkprNDMU7",class:"button_discord"}),(0,a.kt)("a",{href:"https://github.com/Seeed-Studio/wiki-documents/discussions/69",class:"button_discussion"}))))}l.isMDXComponent=!0}}]);