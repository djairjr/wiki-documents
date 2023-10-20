"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[73497],{3905:(e,t,i)=>{i.d(t,{Zo:()=>d,kt:()=>h});var a=i(67294);function o(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function n(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,a)}return i}function r(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?n(Object(i),!0).forEach((function(t){o(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):n(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function s(e,t){if(null==e)return{};var i,a,o=function(e,t){if(null==e)return{};var i,a,o={},n=Object.keys(e);for(a=0;a<n.length;a++)i=n[a],t.indexOf(i)>=0||(o[i]=e[i]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)i=n[a],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(o[i]=e[i])}return o}var l=a.createContext({}),c=function(e){var t=a.useContext(l),i=t;return e&&(i="function"==typeof e?e(t):r(r({},t),e)),i},d=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var i=e.components,o=e.mdxType,n=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=c(i),k=o,h=p["".concat(l,".").concat(k)]||p[k]||u[k]||n;return i?a.createElement(h,r(r({ref:t},d),{},{components:i})):a.createElement(h,r({ref:t},d))}));function h(e,t){var i=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=i.length,r=new Array(n);r[0]=k;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:o,r[1]=s;for(var c=2;c<n;c++)r[c]=i[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,i)}k.displayName="MDXCreateElement"},4723:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>p,frontMatter:()=>n,metadata:()=>s,toc:()=>c});var a=i(87462),o=(i(67294),i(3905));const n={description:"Connect SenseCAP M2 Multi-Platform Gateway to AWS",title:"Connecting to AWS IoT",keywords:["SenseCAP Network"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",last_update:{date:"08/29/2023",author:"Jessie"}},r=void 0,s={unversionedId:"Network/SenseCAP_Network/SenseCAP_M2_Multi_Platform/Tutorial/Connect-M2-Multi-Platform-Gateway-to-AWS-IoT",id:"Network/SenseCAP_Network/SenseCAP_M2_Multi_Platform/Tutorial/Connect-M2-Multi-Platform-Gateway-to-AWS-IoT",title:"Connecting to AWS IoT",description:"Connect SenseCAP M2 Multi-Platform Gateway to AWS",source:"@site/docs/Network/SenseCAP_Network/SenseCAP_M2_Multi_Platform/Tutorial/Connect-M2-Multi-Platform-Gateway-to-AWS-IoT.md",sourceDirName:"Network/SenseCAP_Network/SenseCAP_M2_Multi_Platform/Tutorial",slug:"/Network/SenseCAP_Network/SenseCAP_M2_Multi_Platform/Tutorial/Connect-M2-Multi-Platform-Gateway-to-AWS-IoT",permalink:"/Network/SenseCAP_Network/SenseCAP_M2_Multi_Platform/Tutorial/Connect-M2-Multi-Platform-Gateway-to-AWS-IoT",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Network/SenseCAP_Network/SenseCAP_M2_Multi_Platform/Tutorial/Connect-M2-Multi-Platform-Gateway-to-AWS-IoT.md",tags:[],version:"current",lastUpdatedBy:"Jessie",lastUpdatedAt:1693267200,formattedLastUpdatedAt:"Aug 29, 2023",frontMatter:{description:"Connect SenseCAP M2 Multi-Platform Gateway to AWS",title:"Connecting to AWS IoT",keywords:["SenseCAP Network"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",last_update:{date:"08/29/2023",author:"Jessie"}},sidebar:"ProductSidebar",previous:{title:"SenseCAP For HomeAssistant",permalink:"/Network/SenseCAP_Network/SenseCAP_M2_Multi_Platform/Home_Assistant"},next:{title:"Connecting to TTN",permalink:"/Network/SenseCAP_Network/SenseCAP_M2_Multi_Platform/Tutorial/Connect-M2-Multi-Platform-Gateway-to-The-Things-Network"}},l={},c=[{value:"AWS IoT Configuration",id:"aws-iot-configuration",level:2},{value:"Add Gateway",id:"add-gateway",level:3},{value:"Create certificate",id:"create-certificate",level:4},{value:"Check gateway connection status",id:"check-gateway-connection-status",level:4},{value:"Add Profiles",id:"add-profiles",level:3},{value:"Add devices profiles",id:"add-devices-profiles",level:4},{value:"Add service profiles",id:"add-service-profiles",level:4},{value:"Add Destination",id:"add-destination",level:3},{value:"Add LoRaWAN Devices",id:"add-lorawan-devices",level:3},{value:"Add wireless device",id:"add-wireless-device",level:4},{value:"Configure device",id:"configure-device",level:4},{value:"Check device connection status",id:"check-device-connection-status",level:4},{value:"Gateway Configuration",id:"gateway-configuration",level:2},{value:"LoRaWAN Network Settings",id:"lorawan-network-settings",level:3}],d={toc:c};function p(e){let{components:t,...i}=e;return(0,o.kt)("wrapper",(0,a.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"aws-iot-configuration"},"AWS IoT Configuration"),(0,o.kt)("p",null,"Log in to ",(0,o.kt)("a",{parentName:"p",href:"https://signin.aws.amazon.com"},"AWS"),".\nIf you don\u2019t have an AWS account, please create a new account first."),(0,o.kt)("p",{style:{textAlign:"center"}},(0,o.kt)("img",{src:"https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/AWS2.PNG",alt:"pir",width:800,height:"auto"})),(0,o.kt)("h3",{id:"add-gateway"},"Add Gateway"),(0,o.kt)("p",null,"Navigate to ",(0,o.kt)("strong",{parentName:"p"},"Internet of Things")," > ",(0,o.kt)("strong",{parentName:"p"},"IoT Core")),(0,o.kt)("p",{style:{textAlign:"center"}},(0,o.kt)("img",{src:"https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/AWS1.PNG",alt:"pir",width:800,height:"auto"})),(0,o.kt)("p",null,"Select ",(0,o.kt)("strong",{parentName:"p"},"LPWAN devices")," > ",(0,o.kt)("strong",{parentName:"p"},"Gateway")," to add a gateway"),(0,o.kt)("p",{style:{textAlign:"center"}},(0,o.kt)("img",{src:"https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/AWS4.PNG",alt:"pir",width:800,height:"auto"})),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Gateway's EUI:")," The gateway EUIcan be found on the device label or ",(0,o.kt)("a",{parentName:"p",href:"https://files.seeedstudio.com/products/SenseCAP/M2_Multi-Platform_Gateway/Quick_Start_for_SenseCAP_Gateway_&_Sensors.pdf"},"Local Console ")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Frequency band:")," Select the Frequency plan according to the actual choice."),(0,o.kt)("p",{style:{textAlign:"center"}},(0,o.kt)("img",{src:"https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/AWS2.PNG",alt:"pir",width:800,height:"auto"})),(0,o.kt)("h4",{id:"create-certificate"},"Create certificate"),(0,o.kt)("p",{style:{textAlign:"center"}},(0,o.kt)("img",{src:"https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/AWS7.PNG",alt:"pir",width:800,height:"auto"})),(0,o.kt)("p",null,"Download the certificate files and server trust certificates."),(0,o.kt)("p",{style:{textAlign:"center"}},(0,o.kt)("img",{src:"https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/AWS6.PNG",alt:"pir",width:800,height:"auto"})),(0,o.kt)("p",{style:{textAlign:"center"}},(0,o.kt)("img",{src:"https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/AWS5.PNG",alt:"pir",width:800,height:"auto"})),(0,o.kt)("p",null,"Choose the Role: ",(0,o.kt)("strong",{parentName:"p"},"IoT Wireless Gateway Cert Manager Role"),", then submit the configuration."),(0,o.kt)("p",{style:{textAlign:"center"}},(0,o.kt)("img",{src:"https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/AWS9.PNG",alt:"pir",width:800,height:"auto"})),(0,o.kt)("h4",{id:"check-gateway-connection-status"},"Check gateway connection status"),(0,o.kt)("p",null,"Navigate to the Gateways page and choose the gateway you've added."),(0,o.kt)("p",null,"In the LoRaWAN specific details section of the Gateway details page, you'll see the connection status and the date and time the last uplink was received."),(0,o.kt)("p",{style:{textAlign:"center"}},(0,o.kt)("img",{src:"https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/AWS8.PNG",alt:"pir",width:800,height:"auto"})),(0,o.kt)("h3",{id:"add-profiles"},"Add Profiles"),(0,o.kt)("p",null,"Device and service profiles can be defined to describe common device configurations. These profiles describe configuration parameters that are shared by devices to make it easier to add those devices. AWS IoT Core for LoRaWAN supports device profiles and service profiles."),(0,o.kt)("h4",{id:"add-devices-profiles"},"Add devices profiles"),(0,o.kt)("p",null,"Navigate to ",(0,o.kt)("strong",{parentName:"p"},"Devices")," > ",(0,o.kt)("strong",{parentName:"p"},"Profiles"),", click Add device profile"),(0,o.kt)("p",{style:{textAlign:"center"}},(0,o.kt)("img",{src:"https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/AWS11.PNG",alt:"pir",width:800,height:"auto"})),(0,o.kt)("p",null,"Provide a Device profile name, select the Frequency band (RfRegion)that you're using for the device and gateway, and keep the other settings to the default values."),(0,o.kt)("p",{style:{textAlign:"center"}},(0,o.kt)("img",{src:"https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/AWS10.PNG",alt:"pir",width:800,height:"auto"})),(0,o.kt)("h4",{id:"add-service-profiles"},"Add service profiles"),(0,o.kt)("p",null,"Navigate to ",(0,o.kt)("strong",{parentName:"p"},"Devices")," > ",(0,o.kt)("strong",{parentName:"p"},"Profiles"),", click Add service profile"),(0,o.kt)("p",{style:{textAlign:"center"}},(0,o.kt)("img",{src:"https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/AWS13.PNG",alt:"pir",width:800,height:"auto"})),(0,o.kt)("p",null,"It's recommend that you leave the setting AddGWMetaData enabled so that you'll receive additional gateway metadata for each payload, such as RSSIand SNR for the data transmission."),(0,o.kt)("p",{style:{textAlign:"center"}},(0,o.kt)("img",{src:"https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/AWS12.PNG",alt:"pir",width:800,height:"auto"})),(0,o.kt)("h3",{id:"add-destination"},"Add Destination"),(0,o.kt)("p",null,"Navigate to ",(0,o.kt)("strong",{parentName:"p"},"Devices")," > ",(0,o.kt)("strong",{parentName:"p"},"Destination"),", click Add destination"),(0,o.kt)("p",{style:{textAlign:"center"}},(0,o.kt)("img",{src:"https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/AWS15.PNG",alt:"pir",width:800,height:"auto"})),(0,o.kt)("p",null,"Publish to AWS IoT Core message broker"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Permissions"),": Select an existing service role > IoT Wireless Gateway Cert Manager Role"),(0,o.kt)("admonition",{title:"Note",type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"Adestination name can only have alphanumeric, - (hyphen)and ","_"," (underscore) characters and it can't have any spaces.")),(0,o.kt)("p",{style:{textAlign:"center"}},(0,o.kt)("img",{src:"https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/AWS14.PNG",alt:"pir",width:800,height:"auto"})),(0,o.kt)("h3",{id:"add-lorawan-devices"},"Add LoRaWAN Devices"),(0,o.kt)("h4",{id:"add-wireless-device"},"Add wireless device"),(0,o.kt)("p",null,"Navigate to ",(0,o.kt)("strong",{parentName:"p"},"LPWAN devices")," > ",(0,o.kt)("strong",{parentName:"p"},"Devices"),", click Add wireless device"),(0,o.kt)("p",{style:{textAlign:"center"}},(0,o.kt)("img",{src:"https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/AWS18.PNG",alt:"pir",width:800,height:"auto"})),(0,o.kt)("h4",{id:"configure-device"},"Configure device"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Wireless device specification"),": OTAAv1.0x "),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"DevEUI:")," The ",(0,o.kt)("inlineCode",{parentName:"p"},"device EUI/APP EUI/APP")," key can be found the the device label."),(0,o.kt)("p",{style:{textAlign:"center"}},(0,o.kt)("img",{src:"https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/AWS17.PNG",alt:"pir",width:800,height:"auto"})),(0,o.kt)("p",{style:{textAlign:"center"}},(0,o.kt)("img",{src:"https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/AWS20.PNG",alt:"pir",width:800,height:"auto"})),(0,o.kt)("h4",{id:"check-device-connection-status"},"Check device connection status"),(0,o.kt)("p",null,"Navigate to the ",(0,o.kt)("strong",{parentName:"p"},"Devices")," page and choose the device you've added."),(0,o.kt)("p",null,"In the Details section of the Wireless devices details page, you'll see the date and time the last uplink was received."),(0,o.kt)("p",{style:{textAlign:"center"}},(0,o.kt)("img",{src:"https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/AWS19.PNG",alt:"pir",width:800,height:"auto"})),(0,o.kt)("h2",{id:"gateway-configuration"},"Gateway Configuration"),(0,o.kt)("p",null,"Log into Local Console Check out the device's Q",(0,o.kt)("a",{parentName:"p",href:"https://files.seeedstudio.com/products/SenseCAP/M2_Multi-Platform_Gateway/Quick_Start_for_SenseCAP_Gateway_&_Sensors.pdf"},"uick Start to")," login."),(0,o.kt)("p",{style:{textAlign:"center"}},(0,o.kt)("img",{src:"https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/AWS22.PNG",alt:"pir",width:800,height:"auto"})),(0,o.kt)("h3",{id:"lorawan-network-settings"},"LoRaWAN Network Settings"),(0,o.kt)("p",null,"Navigate to ",(0,o.kt)("strong",{parentName:"p"},"LoRa")," > ",(0,o.kt)("strong",{parentName:"p"},"LoRa Network")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Mode"),": Basics Station"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Gateway EUI"),": It will automatically get the EUIof the connected gateway"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Server"),": Choose CUPS Server or LNS Server (For CUPS, port is 443; for LNS, port is 8887)"),(0,o.kt)("p",null,"Learn more about ",(0,o.kt)("a",{parentName:"p",href:"https://lora-developers.semtech.com/build/software/lora-basics/lora-basics-for-gateways/"},"CUPS and LNS Server")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Authenentication Mode"),": TLS Server and Client Authentication"),(0,o.kt)("p",{style:{textAlign:"center"}},(0,o.kt)("img",{src:"https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/AWS21.PNG",alt:"pir",width:800,height:"auto"})),(0,o.kt)("p",{style:{textAlign:"center"}},(0,o.kt)("img",{src:"https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/AWS23.PNG",alt:"pir",width:800,height:"auto"})),(0,o.kt)("p",null,"Click on Save&Apply when you finish the settings."))}p.isMDXComponent=!0}}]);