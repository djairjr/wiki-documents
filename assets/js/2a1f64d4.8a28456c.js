"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[26927],{3905:(e,t,i)=>{i.d(t,{Zo:()=>c,kt:()=>h});var o=i(67294);function r(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function n(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,o)}return i}function s(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?n(Object(i),!0).forEach((function(t){r(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):n(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function a(e,t){if(null==e)return{};var i,o,r=function(e,t){if(null==e)return{};var i,o,r={},n=Object.keys(e);for(o=0;o<n.length;o++)i=n[o],t.indexOf(i)>=0||(r[i]=e[i]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)i=n[o],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(r[i]=e[i])}return r}var l=o.createContext({}),d=function(e){var t=o.useContext(l),i=t;return e&&(i="function"==typeof e?e(t):s(s({},t),e)),i},c=function(e){var t=d(e.components);return o.createElement(l.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},v=o.forwardRef((function(e,t){var i=e.components,r=e.mdxType,n=e.originalType,l=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),u=d(i),v=r,h=u["".concat(l,".").concat(v)]||u[v]||p[v]||n;return i?o.createElement(h,s(s({ref:t},c),{},{components:i})):o.createElement(h,s({ref:t},c))}));function h(e,t){var i=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var n=i.length,s=new Array(n);s[0]=v;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a[u]="string"==typeof e?e:r,s[1]=a;for(var d=2;d<n;d++)s[d]=i[d];return o.createElement.apply(null,s)}return o.createElement.apply(null,i)}v.displayName="MDXCreateElement"},11197:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>n,metadata:()=>a,toc:()=>d});var o=i(87462),r=(i(67294),i(3905));const n={description:"Getting Started with Grove Vision AI V2.",title:"Grove Vision AI Module V2",keywords:["vision ai"],image:"https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png",slug:"/grove_vision_ai_v2",last_update:{date:"12/12/2023",author:"Citric"}},s="Grove Vision AI Module V2",a={unversionedId:"Sensor/Grove/Grove_Sensors/AI-powered/Grove-vision-ai-v2/Grove-vision-ai-v2",id:"Sensor/Grove/Grove_Sensors/AI-powered/Grove-vision-ai-v2/Grove-vision-ai-v2",title:"Grove Vision AI Module V2",description:"Getting Started with Grove Vision AI V2.",source:"@site/docs/Sensor/Grove/Grove_Sensors/AI-powered/Grove-vision-ai-v2/Grove-vision-ai-v2.md",sourceDirName:"Sensor/Grove/Grove_Sensors/AI-powered/Grove-vision-ai-v2",slug:"/grove_vision_ai_v2",permalink:"/grove_vision_ai_v2",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Sensor/Grove/Grove_Sensors/AI-powered/Grove-vision-ai-v2/Grove-vision-ai-v2.md",tags:[],version:"current",lastUpdatedBy:"Citric",lastUpdatedAt:1702339200,formattedLastUpdatedAt:"Dec 12, 2023",frontMatter:{description:"Getting Started with Grove Vision AI V2.",title:"Grove Vision AI Module V2",keywords:["vision ai"],image:"https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png",slug:"/grove_vision_ai_v2",last_update:{date:"12/12/2023",author:"Citric"}},sidebar:"ProductSidebar",previous:{title:"Grove Vision AI Module",permalink:"/Grove-Vision-AI-Module"},next:{title:"Software Support",permalink:"/grove_vision_ai_v2_software_support"}},l={},d=[{value:"Introduction",id:"introduction",level:2},{value:"Features",id:"features",level:3},{value:"Application",id:"application",level:3},{value:"Hardware Overview",id:"hardware-overview",level:2},{value:"Connecting to a CSI interface camera",id:"connecting-to-a-csi-interface-camera",level:4},{value:"Boot / Reset / Flashed Driver",id:"boot--reset--flashed-driver",level:2},{value:"Boot",id:"boot",level:3},{value:"Reset",id:"reset",level:3},{value:"Driver",id:"driver",level:3},{value:"Getting Started",id:"getting-started",level:2},{value:"Getting Started with Arduino",id:"getting-started-with-arduino",level:3},{value:"Getting Started with SenseCraft AI",id:"getting-started-with-sensecraft-ai",level:3},{value:"Connect Grove Vision AI V2 to Home Assistant",id:"connect-grove-vision-ai-v2-to-home-assistant",level:3},{value:"Troubleshooting",id:"troubleshooting",level:2},{value:"Q1: Is it possible for Grove Vision AI to see XIAO result information while outputting a live screen?",id:"q1-is-it-possible-for-grove-vision-ai-to-see-xiao-result-information-while-outputting-a-live-screen",level:3},{value:"Q2: Which cameras does Grove Vision AI V2 support? Does it only support the OV5647-62?",id:"q2-which-cameras-does-grove-vision-ai-v2-support-does-it-only-support-the-ov5647-62",level:3},{value:"Resources",id:"resources",level:2},{value:"Tech Support &amp; Product Discussion",id:"tech-support--product-discussion",level:2}],c={toc:d},u="wrapper";function p(e){let{components:t,...i}=e;return(0,r.kt)(u,(0,o.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"grove-vision-ai-module-v2"},"Grove Vision AI Module V2"),(0,r.kt)("div",{style:{textAlign:"center"}},(0,r.kt)("img",{src:"https://files.seeedstudio.com/wiki/grove-vision-ai-v2/0.jpg",style:{width:700,height:"auto"}})),(0,r.kt)("div",{class:"get_one_now_container",style:{textAlign:"center"}},(0,r.kt)("a",{class:"get_one_now_item",href:"https://www.seeedstudio.com/Grove-Vision-AI-Module-V2-p-5851.html"},(0,r.kt)("strong",null,(0,r.kt)("span",null,(0,r.kt)("font",{color:"FFFFFF",size:"4"}," Get One Now \ud83d\uddb1\ufe0f"))))),(0,r.kt)("h2",{id:"introduction"},"Introduction"),(0,r.kt)("p",null,"It is an MCU-based vision AI module powered by Arm Cortex-M55 & Ethos-U55. It supports TensorFlow and PyTorch frameworks and is compatible with Arduino IDE. With the SenseCraft AI algorithm platform, trained ML models can be deployed to the sensor without the need for coding. It features a standard CSI interface, an onboard digital microphone and an SD card slot, making it highly suitable for various embedded AI vision projects."),(0,r.kt)("div",{class:"table-center"},(0,r.kt)("iframe",{width:"900",height:"500",src:"https://files.seeedstudio.com/wiki/grove-vision-ai-v2/video.mp4",scrolling:"no",border:"0",frameborder:"no",framespacing:"0",allowfullscreen:"true"}," ")),(0,r.kt)("h3",{id:"features"},"Features"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Powerful AI Processing Capabilities"),": Utilizes WiseEye2 HX6538 processor with a dual-core Arm Cortex-M55 and integrated Arm Ethos-U55 neural network unit."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Versatile AI Model Support"),": Easily deploy off-the-shelf or your custom AI models from SenseCraft AI, including Mobilenet V1, V2, Efficientnet-lite, Yolo v5 & v8. TensorFlow and PyTorch frameworks are supported."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Rich Peripheral Devices"),": Includes PDM microphone, SD card slot, Type-C, Grove interface, and other peripherals."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"High Compatibility"),": Compatible with XIAO series, Arduino, Raspberry Pi, ESP dev board, easy for further development."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Fully Open Source"),": All codes, design files, and schematics available for modification and use.")),(0,r.kt)("h3",{id:"application"},"Application"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Industrial Automation: Quality inspection, predictive maintenance, voice control, etc."),(0,r.kt)("li",{parentName:"ul"},"Smart Cities: Device monitoring, energy management, etc."),(0,r.kt)("li",{parentName:"ul"},"Transportation: Status monitoring, location tracking, etc."),(0,r.kt)("li",{parentName:"ul"},"Smart Agriculture: Environmental monitoring, etc."),(0,r.kt)("li",{parentName:"ul"},"Mobile IoT Devices: Wearable devices, handheld devices, etc.")),(0,r.kt)("h2",{id:"hardware-overview"},"Hardware Overview"),(0,r.kt)("div",{style:{textAlign:"center"}},(0,r.kt)("img",{src:"https://files.seeedstudio.com/wiki/grove-vision-ai-v2/15.jpg",style:{width:1e3,height:"auto"}})),(0,r.kt)("p",null,"To use the full functionality of the Grove Vision AI V2 you may need to purchase a CSI camera separately, we recommend the ",(0,r.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/OV5647-69-1-FOV-Camera-module-for-Raspberry-Pi-3B-4B-p-5484.html"},(0,r.kt)("strong",{parentName:"a"},"OV5647-62 FOV Camera Module for Raspberry Pi")),"."),(0,r.kt)("h4",{id:"connecting-to-a-csi-interface-camera"},"Connecting to a CSI interface camera"),(0,r.kt)("p",null,"Once you have the Grove Vision AI V2 and camera ready to go, then you can connect them via the CSI connection cable. When connecting, please pay attention to the direction of the row of pins and don't plug them in backwards."),(0,r.kt)("div",{style:{textAlign:"center"}},(0,r.kt)("img",{src:"https://files.seeedstudio.com/wiki/grove-vision-ai-v2/9.gif",style:{width:600,height:"auto"}})),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"Users who purchased Grove Vision AI V2 before February 21, 2024, do not have support for Raspberry Pi cameras. However, users who purchase after this date will have added support for those specific models that support images."),(0,r.kt)("div",{style:{textAlign:"center"}},(0,r.kt)("img",{src:"https://files.seeedstudio.com/wiki/grove-vision-ai-v2/cameraList.png",style:{width:1e3,height:"auto"}}))),(0,r.kt)("h2",{id:"boot--reset--flashed-driver"},"Boot / Reset / Flashed Driver"),(0,r.kt)("h3",{id:"boot"},"Boot"),(0,r.kt)("p",null,"If you have used some unusual method that has caused the Grove Vision AI to not work properly at all (at the software level), then you may need to put the device into BootLoader mode to revive the device. Here is how to enter BootLoader mode."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Method 1")),(0,r.kt)("p",null,"Please disconnect the connection cable between the Grove Vision AI and your computer, then press and hold the Boot button on the device without releasing it. At this time, please connect Grove Vision AI to your computer with a Type-C type data cable, and then release it again. At this point the device will enter BootLoader mode."),(0,r.kt)("div",{style:{textAlign:"center"}},(0,r.kt)("img",{src:"https://files.seeedstudio.com/wiki/grove-vision-ai-v2/6.gif",style:{width:600,height:"auto"}})),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Method 2")),(0,r.kt)("p",null,"With the Grove Vision AI connected to your computer, you can enter BootLoader mode by pressing the Boot button and then quickly pressing the Reset button."),(0,r.kt)("div",{style:{textAlign:"center"}},(0,r.kt)("img",{src:"https://files.seeedstudio.com/wiki/grove-vision-ai-v2/7.gif",style:{width:600,height:"auto"}})),(0,r.kt)("h3",{id:"reset"},"Reset"),(0,r.kt)("p",null,"If you're experiencing problems with device data suddenly not uploading or images getting stuck, you can try restarting your device using the Reset button."),(0,r.kt)("div",{style:{textAlign:"center"}},(0,r.kt)("img",{src:"https://files.seeedstudio.com/wiki/grove-vision-ai-v2/8.gif",style:{width:600,height:"auto"}})),(0,r.kt)("h3",{id:"driver"},"Driver"),(0,r.kt)("p",null,"If you find that the Grove Vision AI V2 is not recognised after connecting it to your computer. Then you may need to install the CH343 driver on your computer. Here are some links to download and install the CH343 driver."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Windows Vendor VCP Driver One-Click Installer: ",(0,r.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/grove-vision-ai-v2/res/CH343SER.EXE"},"CH343SER.EXE")),(0,r.kt)("li",{parentName:"ul"},"Windows Vendor VCP Driver: ",(0,r.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/grove-vision-ai-v2/res/CH343SER.ZIP"},"CH343SER.ZIP")),(0,r.kt)("li",{parentName:"ul"},"Windows CDC driver one-click installer: ",(0,r.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/grove-vision-ai-v2/res/CH343CDC.EXE"},"CH343CDC.EXE")),(0,r.kt)("li",{parentName:"ul"},"Windows CDC driver: ",(0,r.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/grove-vision-ai-v2/res/CH343SER.ZIP"},"CH343CDC.ZIP")),(0,r.kt)("li",{parentName:"ul"},"macOS Vendor VCP Driver: ",(0,r.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/grove-vision-ai-v2/res/CH341SER_MAC.ZIP"},"CH34xSER_MAC.ZIP"))),(0,r.kt)("h2",{id:"getting-started"},"Getting Started"),(0,r.kt)("h3",{id:"getting-started-with-arduino"},"Getting Started with Arduino"),(0,r.kt)("div",{class:"all_container"},(0,r.kt)("div",{class:"getting_started"},(0,r.kt)("div",{class:"start_card_wrapper"},(0,r.kt)("a",{href:"/grove_vision_ai_v2_software_support/#-arduino-library-introduction-",class:"getting_started_label2"}," Arduino(Seeed Studio XIAO) "),(0,r.kt)("br",null),"Object recognition or serial communication"))),(0,r.kt)("h3",{id:"getting-started-with-sensecraft-ai"},"Getting Started with SenseCraft AI"),(0,r.kt)("div",{class:"all_container"},(0,r.kt)("div",{class:"getting_started"},(0,r.kt)("div",{class:"start_card_wrapper"},(0,r.kt)("a",{href:"/grove_vision_ai_v2_software_support/#-no-code-getting-started-with-sensecraft-ai-",class:"getting_started_label2"}," SenseCraft AI Model Assistant"),(0,r.kt)("br",null),"No code experience AI models deploy and observe"))),(0,r.kt)("h3",{id:"connect-grove-vision-ai-v2-to-home-assistant"},"Connect Grove Vision AI V2 to Home Assistant"),(0,r.kt)("div",{class:"all_container"},(0,r.kt)("div",{class:"getting_started"},(0,r.kt)("div",{class:"start_card_wrapper"},(0,r.kt)("a",{href:"/connect_vision_ai_v2_to_ha",class:"getting_started_label2"}," Connecting to Home Assistant"),(0,r.kt)("br",null),"Integrating Grove Vision AI V2 into Home Assistant"))),(0,r.kt)("h2",{id:"troubleshooting"},"Troubleshooting"),(0,r.kt)("h3",{id:"q1-is-it-possible-for-grove-vision-ai-to-see-xiao-result-information-while-outputting-a-live-screen"},"Q1: Is it possible for Grove Vision AI to see XIAO result information while outputting a live screen?"),(0,r.kt)("p",null,"No can do. Considering the frame rate or the speed of image inference, we do not support simultaneous execution of both jobs at this stage. If XIAO is connected, then you can only receive the recognised information reported, but not the real-time frame."),(0,r.kt)("h3",{id:"q2-which-cameras-does-grove-vision-ai-v2-support-does-it-only-support-the-ov5647-62"},"Q2: Which cameras does Grove Vision AI V2 support? Does it only support the OV5647-62?"),(0,r.kt)("p",null,"You can check ",(0,r.kt)("a",{parentName:"p",href:"/Grove-vision-ai-v2-camera-supported"},"here"),". Currently we have written drivers for the OV5642 series of cameras, so Grove Vision AI V2 supports the full range of Raspberry Pi OV5647 cameras, e.g., the OV5647-62, OV5647-67, and OV5647-160.The other CSI cameras are theoretically supported, but due to the fact that some of the cameras don't have drivers written for them or the do not have a colour processing unit themselves, so there may be a problem that the colour is only green, and the loss of full colour will have a possible impact on the accuracy of the recognition."),(0,r.kt)("h2",{id:"resources"},"Resources"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"[PDF]")," ",(0,r.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/grove-vision-ai-v2/HX6538_datasheet.pdf"},"Datasheet")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"[GitHub]")," ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/HimaxWiseEyePlus/Seeed_Grove_Vision_AI_Module_V2"},"Seeed Grove Vision AI Module V2 SDK")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"[PDF]")," ",(0,r.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/grove-vision-ai-v2/Grove_Vision_AI_Module_V2_Circuit_Diagram.pdf"},"Circuit Diagram")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"[Zip]")," ",(0,r.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/grove-vision-ai-v2/Grove_Vision_AI_Module_V2_Layout.zip"},"Layout Diagram")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"[Zip]")," ",(0,r.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/grove-vision-ai-v2/202003828_PCBA_Grove_Vision_AI_Module_V2_A11_Design.zip"},"Bill Of Material"))),(0,r.kt)("h2",{id:"tech-support--product-discussion"},"Tech Support & Product Discussion"),(0,r.kt)("p",null,"Thank you for choosing our products! We are here to provide you with different support to ensure that your experience with our products is as smooth as possible. We offer several communication channels to cater to different preferences and needs."),(0,r.kt)("div",{class:"table-center"},(0,r.kt)("div",{class:"button_tech_support_container"},(0,r.kt)("a",{href:"https://forum.seeedstudio.com/",class:"button_forum"}),(0,r.kt)("a",{href:"https://www.seeedstudio.com/contacts",class:"button_email"})),(0,r.kt)("div",{class:"button_tech_support_container"},(0,r.kt)("a",{href:"https://discord.gg/eWkprNDMU7",class:"button_discord"}),(0,r.kt)("a",{href:"https://github.com/Seeed-Studio/wiki-documents/discussions/69",class:"button_discussion"}))))}p.isMDXComponent=!0}}]);