"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4087],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>k});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=p(n),m=r,k=u["".concat(s,".").concat(m)]||u[m]||c[m]||i;return n?a.createElement(k,o(o({ref:t},d),{},{components:n})):a.createElement(k,o({ref:t},d))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},87783:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const i={description:"Getting Started with Microsoft Azure IoT Central",title:"Getting Started with Microsoft Azure IoT Central",keywords:["SenseCap"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Connect-Wio-Terminal-to-Azure-IoT-Central",last_update:{date:"1/12/2023",author:"shuxu hu"}},o="Connect Wio Terminal to Microsoft Azure IoT Central",l={unversionedId:"Network/SenseCAP_K1100/Wi-Fi-Network_Application/Azure_IoT_Platform_Usage/Connect-Wio-Terminal-to-Azure-IoT-Central",id:"Network/SenseCAP_K1100/Wi-Fi-Network_Application/Azure_IoT_Platform_Usage/Connect-Wio-Terminal-to-Azure-IoT-Central",title:"Getting Started with Microsoft Azure IoT Central",description:"Getting Started with Microsoft Azure IoT Central",source:"@site/docs/Network/SenseCAP_K1100/Wi-Fi-Network_Application/Azure_IoT_Platform_Usage/Connect-Wio-Terminal-to-Azure-IoT-Central.md",sourceDirName:"Network/SenseCAP_K1100/Wi-Fi-Network_Application/Azure_IoT_Platform_Usage",slug:"/Connect-Wio-Terminal-to-Azure-IoT-Central",permalink:"/Connect-Wio-Terminal-to-Azure-IoT-Central",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Network/SenseCAP_K1100/Wi-Fi-Network_Application/Azure_IoT_Platform_Usage/Connect-Wio-Terminal-to-Azure-IoT-Central.md",tags:[],version:"current",lastUpdatedBy:"shuxu hu",lastUpdatedAt:1673481600,formattedLastUpdatedAt:"Jan 12, 2023",frontMatter:{description:"Getting Started with Microsoft Azure IoT Central",title:"Getting Started with Microsoft Azure IoT Central",keywords:["SenseCap"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Connect-Wio-Terminal-to-Azure-IoT-Central",last_update:{date:"1/12/2023",author:"shuxu hu"}},sidebar:"ProductSidebar",previous:{title:"Google Usage",permalink:"/Connect-Wio-Terminal-to-Google-Cloud"},next:{title:"Develop in Microsoft Azure IoT Central",permalink:"/Develop-in-Microsoft-Azure-IoT-Central"}},s={},p=[{value:"Upgradable to Industrial Sensors",id:"upgradable-to-industrial-sensors",level:2},{value:"Introduction",id:"introduction",level:2},{value:"What is Microsoft Azure?",id:"what-is-microsoft-azure",level:3},{value:"What is Microsoft Azure IoT?",id:"what-is-microsoft-azure-iot",level:3},{value:"What is Microsoft Azure IoT Central?",id:"what-is-microsoft-azure-iot-central",level:3},{value:"What is IoT Plug and Play?",id:"what-is-iot-plug-and-play",level:3},{value:"IoT Plug and Play Certified Devices",id:"iot-plug-and-play-certified-devices",level:3},{value:"Connecting Wio Terminal to Microsoft Azure IoT Central via MQTT",id:"connecting-wio-terminal-to-microsoft-azure-iot-central-via-mqtt",level:2},{value:"Microsoft Azure IoT Central Set Up",id:"microsoft-azure-iot-central-set-up",level:3},{value:"Set Up Wio Terminal",id:"set-up-wio-terminal",level:3},{value:"Display Telemetry Data on Microsoft Azure IoT Central",id:"display-telemetry-data-on-microsoft-azure-iot-central",level:3},{value:"Tech Support",id:"tech-support",level:2}],d={toc:p};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"connect-wio-terminal-to-microsoft-azure-iot-central"},"Connect Wio Terminal to Microsoft Azure IoT Central"),(0,r.kt)("p",{style:{textAlign:"center"}},(0,r.kt)("img",{src:"https://files.seeedstudio.com/wiki/Azure_IoTc_WT/WT_client_send.png",alt:"pir",width:1200,height:"auto"})),(0,r.kt)("h2",{id:"upgradable-to-industrial-sensors"},"Upgradable to Industrial Sensors"),(0,r.kt)("p",null,"With the SenseCAP ",(0,r.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html"},"S2110 controller")," and ",(0,r.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html"},"S2100 data logger"),", you can easily turn the Grove into a LoRaWAN\xae sensor. Seeed not only helps you with prototyping but also offers you the possibility to expand your project with the SenseCAP series of robust ",(0,r.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&categories=SenseCAP&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP"},"industrial sensors"),"."),(0,r.kt)("p",null,"The IP66 housing, Bluetooth configuration, compatibility with the global LoRaWAN\xae network, built-in 19 Ah battery, and powerful support from APP make the ",(0,r.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/catalogsearch/result/?q=S21&categories=SenseCAP~LoRaWAN%20Device&product_module=Device"},"SenseCAP S210x")," the best choice for industrial applications. The series includes sensors for soil moisture, air temperature and humidity, light intensity, CO2, EC, and an 8-in-1 weather station. Try the latest SenseCAP S210x for your next successful industrial project."),(0,r.kt)("table",{style:{marginLeft:"auto",marginRight:"auto"}},(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",{colSpan:4,bgcolor:"#0e3c49",align:"center"},(0,r.kt)("font",{color:"white",size:4},(0,r.kt)("strong",null,"SenseCAP Industrial Sensor")))),(0,r.kt)("tr",null,(0,r.kt)("td",{bgcolor:"#0e3c49"},(0,r.kt)("a",{href:"https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html",target:"_blank"}),(0,r.kt)("div",{align:"center"},(0,r.kt)("a",{href:"https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html",target:"_blank"},(0,r.kt)("img",{width:"100%",src:"https://files.seeedstudio.com/wiki/K1100_overview/2/S2100.png"})))),(0,r.kt)("td",{bgcolor:"#0e3c49"},(0,r.kt)("a",{href:"https://www.seeedstudio.com/SenseCAP-S2101-LoRaWAN-Air-Temperature-and-Humidity-Sensor-p-5354.html",target:"_blank"}),(0,r.kt)("div",{align:"center"},(0,r.kt)("a",{href:"https://www.seeedstudio.com/SenseCAP-S2101-LoRaWAN-Air-Temperature-and-Humidity-Sensor-p-5354.html",target:"_blank"},(0,r.kt)("img",{width:"100%",src:"https://files.seeedstudio.com/wiki/K1100_overview/2/S2101&S2103.png"})))),(0,r.kt)("td",{bgcolor:"#0e3c49"},(0,r.kt)("a",{href:"https://www.seeedstudio.com/SenseCAP-S2102-LoRaWAN-Light-Intensity-Sensor-p-5355.html",target:"_blank"}),(0,r.kt)("div",{align:"center"},(0,r.kt)("a",{href:"https://www.seeedstudio.com/SenseCAP-S2102-LoRaWAN-Light-Intensity-Sensor-p-5355.html",target:"_blank"},(0,r.kt)("img",{width:"100%",src:"https://files.seeedstudio.com/wiki/K1100_overview/2/S2102.png"})))),(0,r.kt)("td",{bgcolor:"#0e3c49"},(0,r.kt)("a",{href:"https://www.seeedstudio.com/SenseCAP-S2103-LoRaWAN-CO2-Temperature-and-Humidity-Sensor-p-5356.html",target:"_blank"}),(0,r.kt)("div",{align:"center"},(0,r.kt)("a",{href:"https://www.seeedstudio.com/SenseCAP-S2103-LoRaWAN-CO2-Temperature-and-Humidity-Sensor-p-5356.html",target:"_blank"},(0,r.kt)("img",{width:"100%",src:"https://files.seeedstudio.com/wiki/K1100_overview/2/S2101&S2103.png"}))))),(0,r.kt)("tr",null,(0,r.kt)("td",{bgcolor:"#0e3c49",align:"center"},(0,r.kt)("a",{href:"https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html",target:"_blank"},(0,r.kt)("strong",null,"S2100 ",(0,r.kt)("br",null)," Data Logger"))),(0,r.kt)("td",{bgcolor:"#0e3c49",align:"center"},(0,r.kt)("a",{href:"https://www.seeedstudio.com/SenseCAP-S2101-LoRaWAN-Air-Temperature-and-Humidity-Sensor-p-5354.html",target:"_blank"},(0,r.kt)("strong",null,"S2101 ",(0,r.kt)("br",null)," Air Temp & Humidity"))),(0,r.kt)("td",{bgcolor:"#0e3c49",align:"center"},(0,r.kt)("a",{href:"https://www.seeedstudio.com/SenseCAP-S2102-LoRaWAN-Light-Intensity-Sensor-p-5355.html",target:"_blank"},(0,r.kt)("strong",null,"S2102 ",(0,r.kt)("br",null)," Light"))),(0,r.kt)("td",{bgcolor:"#0e3c49",align:"center"},(0,r.kt)("a",{href:"https://www.seeedstudio.com/SenseCAP-S2103-LoRaWAN-CO2-Temperature-and-Humidity-Sensor-p-5356.html",target:"_blank"},(0,r.kt)("strong",null,"S2103 ",(0,r.kt)("br",null)," Air Temp & Humidity & CO2")))),(0,r.kt)("tr",null,(0,r.kt)("td",{bgcolor:"#0e3c49"},(0,r.kt)("a",{href:"https://www.seeedstudio.com/SenseCAP-S2104-LoRaWAN-Soil-Temperature-and-Moisture-Sensor-p-5357.html",target:"_blank"}),(0,r.kt)("div",{align:"center"},(0,r.kt)("a",{href:"https://www.seeedstudio.com/SenseCAP-S2104-LoRaWAN-Soil-Temperature-and-Moisture-Sensor-p-5357.html",target:"_blank"},(0,r.kt)("img",{width:"100%",src:"https://files.seeedstudio.com/wiki/K1100_overview/2/S2104.png"})))),(0,r.kt)("td",{bgcolor:"#0e3c49"},(0,r.kt)("a",{href:"https://www.seeedstudio.com/SenseCAP-S2105-LoRaWAN-Soil-Temperature-Moisture-and-EC-Sensor-p-5358.html",target:"_blank"}),(0,r.kt)("div",{align:"center"},(0,r.kt)("a",{href:"https://www.seeedstudio.com/SenseCAP-S2105-LoRaWAN-Soil-Temperature-Moisture-and-EC-Sensor-p-5358.html",target:"_blank"},(0,r.kt)("img",{width:"100%",src:"https://files.seeedstudio.com/wiki/K1100_overview/2/S2105.png"})))),(0,r.kt)("td",{bgcolor:"#0e3c49"},(0,r.kt)("a",{href:"https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html",target:"_blank"}),(0,r.kt)("div",{align:"center"},(0,r.kt)("a",{href:"https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html",target:"_blank"},(0,r.kt)("img",{width:"100%",src:"https://files.seeedstudio.com/wiki/K1100_overview/2/S2110.png"})))),(0,r.kt)("td",{bgcolor:"#0e3c49"},(0,r.kt)("a",{href:"https://www.seeedstudio.com/sensecap-s2120-lorawan-8-in-1-weather-sensor-p-5436.html",target:"_blank"}),(0,r.kt)("div",{align:"center"},(0,r.kt)("a",{href:"https://www.seeedstudio.com/sensecap-s2120-lorawan-8-in-1-weather-sensor-p-5436.html",target:"_blank"},(0,r.kt)("img",{width:"100%",src:"https://files.seeedstudio.com/wiki/K1100_overview/2/S2120.png"}))))),(0,r.kt)("tr",null,(0,r.kt)("td",{bgcolor:"#0e3c49",align:"center"},(0,r.kt)("a",{href:"https://www.seeedstudio.com/SenseCAP-S2104-LoRaWAN-Soil-Temperature-and-Moisture-Sensor-p-5357.html",target:"_blank"},(0,r.kt)("strong",null,"S2104 ",(0,r.kt)("br",null)," Soil Moisture & Temp"))),(0,r.kt)("td",{bgcolor:"#0e3c49",align:"center"},(0,r.kt)("a",{href:"https://www.seeedstudio.com/SenseCAP-S2105-LoRaWAN-Soil-Temperature-Moisture-and-EC-Sensor-p-5358.html",target:"_blank"},(0,r.kt)("strong",null,"S2105 ",(0,r.kt)("br",null)," Soil Moisture & Temp & EC"))),(0,r.kt)("td",{bgcolor:"#0e3c49",align:"center"},(0,r.kt)("a",{href:"https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html",target:"_blank"},(0,r.kt)("strong",null,"S2110 ",(0,r.kt)("br",null)," LoRaWAN\xae Controller"))),(0,r.kt)("td",{bgcolor:"#0e3c49",align:"center"},(0,r.kt)("a",{href:"https://www.seeedstudio.com/sensecap-s2120-lorawan-8-in-1-weather-sensor-p-5436.html",target:"_blank"},(0,r.kt)("strong",null,"S2120 ",(0,r.kt)("br",null)," 8-in-1 Weather Station")))))),(0,r.kt)("h2",{id:"introduction"},"Introduction"),(0,r.kt)("p",null,"In this tutorial, we will walk you through the process of connecting the Wio Terminal to Microsoft Azure IoT Central and send telemetry data from the onboard sensors/ hardware on the Wio Terminal such as the 3-axis accelerometer, light sensor, 3 buttons to Microsoft Azure IoT Central. Then you will be able to visualize the sensor data on interactive dashboards. Also you will be able to use Azure IoT Central to control hardware such as beeping the onboard buzzer on the Wio Terminal. Microsoft Azure IoT Central supports HTTP, MQTT and AMQP protocols for communication, but, however we will be using the MQTT protocol in this tutorial."),(0,r.kt)("h3",{id:"what-is-microsoft-azure"},"What is Microsoft Azure?"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://azure.microsoft.com"},"Microsoft Azure")," is Microsoft's public cloud computing platform. You can use Microsoft Azure to build, test, deploy, and manage applications and services through Microsoft-managed data centers."),(0,r.kt)("p",null,"Also, it provides a range of cloud services, including compute, analytics, storage and networking. Microsoft Azure provides software as a service (SaaS), platform as a service (PaaS), Infrastructure as a service (IaaS) and serverless. Finally, it supports many different programming languages, tools and frameworks."),(0,r.kt)("h3",{id:"what-is-microsoft-azure-iot"},"What is Microsoft Azure IoT?"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://azure.microsoft.com/en-us/overview/iot"},"Microsoft Azure IoT")," is a collection of Microsoft-managed cloud services that connect, monitor, and control billions of IoT assets. It includes security and operating systems for devices and equipment, along with data and analytics that help businesses to build, deploy and manage IoT applications."),(0,r.kt)("p",{style:{textAlign:"center"}},(0,r.kt)("img",{src:"https://files.seeedstudio.com/wiki/Azure_IoTc_WT/Azure_IoT.png",alt:"pir",width:1200,height:"auto"})),(0,r.kt)("h3",{id:"what-is-microsoft-azure-iot-central"},"What is Microsoft Azure IoT Central?"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://azure.microsoft.com/en-us/services/iot-central"},"Microsoft Azure IoT Central")," is a fully managed global IoT SaaS (software as a service) solution that makes it easy to connect, monitor and manage your IoT assets at scale. It is highly secure, scales with your business as it grows, ensures that your investments are repeatable and integrates with your existing business apps. It also bridges the gap between your business applications and IoT data. Finally it offers centralized management to reconfigure and update your devices."),(0,r.kt)("h3",{id:"what-is-iot-plug-and-play"},"What is IoT Plug and Play?"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/azure/iot-pnp"},"IoT Plug and Play")," enables solutions builders to integrate smart devices with their solutions without any manual configuration. At the core of IoT Plug and Play, is a device model that a device uses to advertise its capabilities to an IoT Plug and Play-enabled application. It contains:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Properties: represents the read-only or writable state of a device or other entity"),(0,r.kt)("li",{parentName:"ul"},"Telemetry: data sent by a device"),(0,r.kt)("li",{parentName:"ul"},"Commands: describes a function or operation that can be done on a device")),(0,r.kt)("p",null,"IoT Plug and Play certified devices eliminate the hassle of configuring devices in Azure IoT Central, such as creating templates and adding features and interfaces."),(0,r.kt)("h3",{id:"iot-plug-and-play-certified-devices"},"IoT Plug and Play Certified Devices"),(0,r.kt)("p",null,"IoT Plug and Play Certified Devices are devices listed in the ",(0,r.kt)("a",{parentName:"p",href:"https://devicecatalog.azure.com"},"Azure Certified Device Catalog")," with the IoT Plug and Play badge."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/Wio-Terminal-p-4509.html"},"Wio Terminal")," is an IoT Plug and Play Certified Device."),(0,r.kt)("p",{style:{textAlign:"center"}},(0,r.kt)("a",{href:"https://devicecatalog.azure.com/devices/8b9c5072-68fd-4fc3-8e5f-5b15e3a20bd9"},(0,r.kt)("img",{src:"https://files.seeedstudio.com/wiki/Wio-Terminal/img/Wio-Terminal-Wiki.jpg",alt:"pir",width:650,height:"auto"}))),(0,r.kt)("p",null,"To be IoT Plug and Play Certified, you will need to clear a few criteria, one of which is to publish a DTDL (Digital Twins Definition Language) model that defines the capabilities of the device to ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/Azure/iot-plugandplay-models"},"Azure/ iot-plugandplay-models (DMR)")," on GitHub."),(0,r.kt)("p",null,"This allows cloud services that use IoT Plug and Play Certified Devices to learn about device capabilities from this repository."),(0,r.kt)("p",{style:{textAlign:"center"}},(0,r.kt)("img",{src:"https://files.seeedstudio.com/wiki/Azure_IoTc_WT/PnP_devices.png",alt:"pir",width:850,height:"auto"})),(0,r.kt)("h2",{id:"connecting-wio-terminal-to-microsoft-azure-iot-central-via-mqtt"},"Connecting Wio Terminal to Microsoft Azure IoT Central via MQTT"),(0,r.kt)("p",null,"As explained before, we will be using MQTT for the communication between the Wio Terminal and Microsoft Azure IoT Central. However, you may use the HTTP bridge as well, if that is your requirement."),(0,r.kt)("p",{style:{textAlign:"center"}},(0,r.kt)("img",{src:"https://files.seeedstudio.com/wiki/Azure_IoTc_WT/WT_client_send.png",alt:"pir",width:1200,height:"auto"})),(0,r.kt)("p",{style:{textAlign:"center"}},(0,r.kt)("img",{src:"https://files.seeedstudio.com/wiki/Azure_IoTc_WT/WT_client_receive.png",alt:"pir",width:1200,height:"auto"})),(0,r.kt)("h3",{id:"microsoft-azure-iot-central-set-up"},"Microsoft Azure IoT Central Set Up"),(0,r.kt)("p",null,"First, you need to visit Microsoft Azure IoT Central, log in to your Microsoft account and create a new application for your project."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Step 1.")," Log in to Azure IoT Central."),(0,r.kt)("p",null,"Please go to the official ",(0,r.kt)("a",{parentName:"p",href:"https://apps.azureiotcentral.com/home"},"Azure IoT Central")," website, click ",(0,r.kt)("strong",{parentName:"p"},"Build")," from the navigation menu on the left, and click ",(0,r.kt)("strong",{parentName:"p"},"Custom apps"),"."),(0,r.kt)("p",null,"If you are not already logged into Azure IoT Central, you will be asked to complete a registration/login at this point."),(0,r.kt)("div",{align:"center"},(0,r.kt)("img",{width:800,src:"https://files.seeedstudio.com/wiki/k1100_azure_central/1.png"})),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Step 2.")," Fill in ",(0,r.kt)("strong",{parentName:"p"},"Application name")," and choose ",(0,r.kt)("strong",{parentName:"p"},"Standard 0")," under the ",(0,r.kt)("strong",{parentName:"p"},"Pricing plan"),". Application URL will be created automatically when you fill in application name. In this example, we will accomplish this task at minimal cost."),(0,r.kt)("div",{align:"center"},(0,r.kt)("img",{width:800,src:"https://files.seeedstudio.com/wiki/k1100_azure_central/2.png"})),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"If you are a new user of Azure IoT Central, we recommend that you select ",(0,r.kt)("strong",{parentName:"p"},"Free")," as this will not consume your fees.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/k1100_azure_central/9.png" /></div>\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Step 3.")," Create a Device template"),(0,r.kt)("p",null,"Please create a new device template by clicking on ",(0,r.kt)("strong",{parentName:"p"},"Device templates")," in the left-hand menu bar."),(0,r.kt)("div",{align:"center"},(0,r.kt)("img",{width:800,src:"https://files.seeedstudio.com/wiki/k1100_nodered_azure/2.png"})),(0,r.kt)("p",null,"Please select ",(0,r.kt)("strong",{parentName:"p"},"Wio Terminal")," as our template."),(0,r.kt)("div",{align:"center"},(0,r.kt)("img",{width:800,src:"https://files.seeedstudio.com/wiki/k1100_nodered_azure/3.png"})),(0,r.kt)("p",null,"Then just click on ",(0,r.kt)("strong",{parentName:"p"},"Create"),"."),(0,r.kt)("div",{align:"center"},(0,r.kt)("img",{width:800,src:"https://files.seeedstudio.com/wiki/k1100_nodered_azure/4.png"})),(0,r.kt)("p",null,"Then, a ready-made template is created."),(0,r.kt)("div",{align:"center"},(0,r.kt)("img",{width:800,src:"https://files.seeedstudio.com/wiki/k1100_nodered_azure/5.png"})),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Step 5.")," Create a Device"),(0,r.kt)("p",null,"Click on ",(0,r.kt)("strong",{parentName:"p"},"Devices -> Seeed Wio Terminal")," under the left menu bar."),(0,r.kt)("div",{align:"center"},(0,r.kt)("img",{width:800,src:"https://files.seeedstudio.com/wiki/k1100_nodered_azure/6.png"})),(0,r.kt)("p",null,"Click on ",(0,r.kt)("strong",{parentName:"p"},"New"),"."),(0,r.kt)("div",{align:"center"},(0,r.kt)("img",{width:800,src:"https://files.seeedstudio.com/wiki/k1100_nodered_azure/7.png"})),(0,r.kt)("p",null,"Click on the ",(0,r.kt)("strong",{parentName:"p"},"Create")," button to complete the creation of the device."),(0,r.kt)("div",{align:"center"},(0,r.kt)("img",{width:800,src:"https://files.seeedstudio.com/wiki/k1100_nodered_azure/8.png"})),(0,r.kt)("p",null,"Once you have created the device, you will see the device we have just created under ",(0,r.kt)("strong",{parentName:"p"},"Device"),", please tap into the device and click on the ",(0,r.kt)("strong",{parentName:"p"},"Connect")," button in the top left corner."),(0,r.kt)("div",{align:"center"},(0,r.kt)("img",{width:800,src:"https://files.seeedstudio.com/wiki/k1100_nodered_azure/9.png"})),(0,r.kt)("p",null,"Here we need the information there."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"ID scope\nDevice ID\nPrimary key\n")),(0,r.kt)("p",null,"Please make a note of this information, which we will use in the next steps."),(0,r.kt)("h3",{id:"set-up-wio-terminal"},"Set Up Wio Terminal"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Step 1.")," Download the firmware to your computer"),(0,r.kt)("p",null,"Our second firmware release, SenseCraft, will support Azure IoT Central in the easiest way possible."),(0,r.kt)("p",null,"Under the ",(0,r.kt)("strong",{parentName:"p"},"Latest release"),", click on ",(0,r.kt)("strong",{parentName:"p"},"SenseCraft-vx.x.uf2")," to download the .uf2 file."),(0,r.kt)("div",null,(0,r.kt)("p",{style:{}},(0,r.kt)("a",{href:"https://github.com/Seeed-Studio/SenseCraft/releases",target:"_blank"})),(0,r.kt)("div",{align:"center"},(0,r.kt)("a",{href:"https://github.com/Seeed-Studio/SenseCraft/releases",target:"_blank"},(0,r.kt)("img",{width:300,src:"https://files.seeedstudio.com/wiki/seeed_logo/github.png"}))),(0,r.kt)("p",null)),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Step 2.")," Upload the firmware to Wio Terminal"),(0,r.kt)("p",null,"Connect the Wio Terminal to PC and turn in ON, Enter ",(0,r.kt)("strong",{parentName:"p"},"Bootloader Mode"),' by sliding down the power switch further away from "ON" position, release, slide again and release.'),(0,r.kt)("p",{style:{textAlign:"center"}},(0,r.kt)("img",{src:"https://files.seeedstudio.com/wiki/Wio-Terminal/img/Wio-Terminal-Bootloader.png",alt:"pir",width:500,height:"auto"})),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Once Wio Terminal is in the Bootloader mode, the blue LED will start to breathe in a way that is different from blinking.")),(0,r.kt)("p",null,"Open File Explorer on your PC and you will see a new external drive, named ",(0,r.kt)("strong",{parentName:"p"},"Arduino"),", drag the previously downloaded ",(0,r.kt)("strong",{parentName:"p"},".uf2 file")," into this ",(0,r.kt)("strong",{parentName:"p"},"Arduino drive"),"."),(0,r.kt)("p",null,"Now we have successfully uploaded the firmware into the Wio Terminal."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Step 3.")," Wi-Fi and Azure IoT Configuration"),(0,r.kt)("p",null,"When we use the ",(0,r.kt)("strong",{parentName:"p"},"SenseCraft")," firmware, a USB stick appears as soon as the Wio Terminal is connected to the computer."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"This means that the USB stick appears when the Wio Terminal is connected to the computer, ",(0,r.kt)("strong",{parentName:"p"},"without the need to toggle the side button twice extra"),"!")),(0,r.kt)("p",null,"At this point, there will be a ",(0,r.kt)("strong",{parentName:"p"},"config.txt")," file inside the USB stick. Please open it with a suitable txt editor and add the required configuration to it."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"SSID=WiFi_Name                        // Put your Wifi name here\nPASSWORD=WiFi_Password                // Put your wifi password here          \nID_SCOPE=Default_ID_Scope             // Put your ID Scope here\nDEVICE_ID=Device_ID                   // Put your device ID here\nPRIMARY_KEY=Primary_Key               // Put your device Primary key here\n")),(0,r.kt)("p",null,"Once you have completed the above, please save it. Restart Wio Terminal to take effect."),(0,r.kt)("h3",{id:"display-telemetry-data-on-microsoft-azure-iot-central"},"Display Telemetry Data on Microsoft Azure IoT Central"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Step 1.")," Wio Terminal connect to WiFi"),(0,r.kt)("p",null,"Enter ",(0,r.kt)("strong",{parentName:"p"},"Network")," tab and select ",(0,r.kt)("strong",{parentName:"p"},"WiFi"),"."),(0,r.kt)("div",{align:"center"},(0,r.kt)("img",{width:800,src:"https://files.seeedstudio.com/wiki/K1100-quick-start/51.png"})),(0,r.kt)("p",null,"Now it will wait for the configuration to load."),(0,r.kt)("div",{align:"center"},(0,r.kt)("img",{width:800,src:"https://files.seeedstudio.com/wiki/K1100-quick-start/52.png"})),(0,r.kt)("p",null,"Once the loaded WiFi configuration is picked up, it will first connect with the WiFi network and then with the Azure IoT Central. If the connection with Azure IoT Central is successful, it will display the following."),(0,r.kt)("div",{align:"center"},(0,r.kt)("img",{width:800,src:"https://files.seeedstudio.com/wiki/K1100-quick-start/53.png"})),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Step 2.")," Parsing Wio Terminal data"),(0,r.kt)("p",null,"We need to change the template style displayed in the ",(0,r.kt)("strong",{parentName:"p"},"template"),"."),(0,r.kt)("div",{align:"center"},(0,r.kt)("img",{width:800,src:"https://files.seeedstudio.com/wiki/k1100_nodered_azure/26.png"})),(0,r.kt)("p",null,"In order to adapt the data type of SenseCraft and achieve a suitable data presentation, here we need to fill in the raw data according to the table below."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Display name"),(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Capability type"),(0,r.kt)("th",{parentName:"tr",align:null},"Semantic type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Acceleration X"),(0,r.kt)("td",{parentName:"tr",align:null},"IMU0"),(0,r.kt)("td",{parentName:"tr",align:null},"Telemetry"),(0,r.kt)("td",{parentName:"tr",align:null},"None")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Acceleration Y"),(0,r.kt)("td",{parentName:"tr",align:null},"IMU1"),(0,r.kt)("td",{parentName:"tr",align:null},"Telemetry"),(0,r.kt)("td",{parentName:"tr",align:null},"None")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Acceleration Z"),(0,r.kt)("td",{parentName:"tr",align:null},"IMU2"),(0,r.kt)("td",{parentName:"tr",align:null},"Telemetry"),(0,r.kt)("td",{parentName:"tr",align:null},"None")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Light"),(0,r.kt)("td",{parentName:"tr",align:null},"Light"),(0,r.kt)("td",{parentName:"tr",align:null},"Telemetry"),(0,r.kt)("td",{parentName:"tr",align:null},"None")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Sound"),(0,r.kt)("td",{parentName:"tr",align:null},"Sound"),(0,r.kt)("td",{parentName:"tr",align:null},"Telemetry"),(0,r.kt)("td",{parentName:"tr",align:null},"None")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Temperature"),(0,r.kt)("td",{parentName:"tr",align:null},"Temp_Humi0"),(0,r.kt)("td",{parentName:"tr",align:null},"Telemetry"),(0,r.kt)("td",{parentName:"tr",align:null},"None")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Humidity"),(0,r.kt)("td",{parentName:"tr",align:null},"Temp_Humi1"),(0,r.kt)("td",{parentName:"tr",align:null},"Telemetry"),(0,r.kt)("td",{parentName:"tr",align:null},"None")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"CO2"),(0,r.kt)("td",{parentName:"tr",align:null},"CO2_VOC0"),(0,r.kt)("td",{parentName:"tr",align:null},"Telemetry"),(0,r.kt)("td",{parentName:"tr",align:null},"None")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"VOC"),(0,r.kt)("td",{parentName:"tr",align:null},"CO2_VOC1"),(0,r.kt)("td",{parentName:"tr",align:null},"Telemetry"),(0,r.kt)("td",{parentName:"tr",align:null},"None")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Soil Moisture"),(0,r.kt)("td",{parentName:"tr",align:null},"Soil"),(0,r.kt)("td",{parentName:"tr",align:null},"Telemetry"),(0,r.kt)("td",{parentName:"tr",align:null},"None")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Vision AI 1"),(0,r.kt)("td",{parentName:"tr",align:null},"Vision0"),(0,r.kt)("td",{parentName:"tr",align:null},"Telemetry"),(0,r.kt)("td",{parentName:"tr",align:null},"None")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Vision AI 2"),(0,r.kt)("td",{parentName:"tr",align:null},"Vision1"),(0,r.kt)("td",{parentName:"tr",align:null},"Telemetry"),(0,r.kt)("td",{parentName:"tr",align:null},"None")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Vision AI 3"),(0,r.kt)("td",{parentName:"tr",align:null},"Vision2"),(0,r.kt)("td",{parentName:"tr",align:null},"Telemetry"),(0,r.kt)("td",{parentName:"tr",align:null},"None")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Vision AI 4"),(0,r.kt)("td",{parentName:"tr",align:null},"Vision3"),(0,r.kt)("td",{parentName:"tr",align:null},"Telemetry"),(0,r.kt)("td",{parentName:"tr",align:null},"None")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Vision AI 5"),(0,r.kt)("td",{parentName:"tr",align:null},"Vision4"),(0,r.kt)("td",{parentName:"tr",align:null},"Telemetry"),(0,r.kt)("td",{parentName:"tr",align:null},"None")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Vision AI 6"),(0,r.kt)("td",{parentName:"tr",align:null},"Vision5"),(0,r.kt)("td",{parentName:"tr",align:null},"Telemetry"),(0,r.kt)("td",{parentName:"tr",align:null},"None")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Vision AI 7"),(0,r.kt)("td",{parentName:"tr",align:null},"Vision6"),(0,r.kt)("td",{parentName:"tr",align:null},"Telemetry"),(0,r.kt)("td",{parentName:"tr",align:null},"None")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Vision AI 8"),(0,r.kt)("td",{parentName:"tr",align:null},"Vision7"),(0,r.kt)("td",{parentName:"tr",align:null},"Telemetry"),(0,r.kt)("td",{parentName:"tr",align:null},"None")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Vision AI 9"),(0,r.kt)("td",{parentName:"tr",align:null},"Vision8"),(0,r.kt)("td",{parentName:"tr",align:null},"Telemetry"),(0,r.kt)("td",{parentName:"tr",align:null},"None")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Vision AI 10"),(0,r.kt)("td",{parentName:"tr",align:null},"Vision9"),(0,r.kt)("td",{parentName:"tr",align:null},"Telemetry"),(0,r.kt)("td",{parentName:"tr",align:null},"None")))),(0,r.kt)("div",{align:"center"},(0,r.kt)("img",{width:800,src:"https://files.seeedstudio.com/wiki/K1100-quick-start/68.png"})),(0,r.kt)("p",null,"Once you have completed the form, please click the ",(0,r.kt)("strong",{parentName:"p"},"Save")," button."),(0,r.kt)("p",null,"Click on ",(0,r.kt)("strong",{parentName:"p"},"Overview")," on the left navigation menu."),(0,r.kt)("div",{align:"center"},(0,r.kt)("img",{width:800,src:"https://files.seeedstudio.com/wiki/k1100_azure_central/16.png"})),(0,r.kt)("p",null,"Collapse ",(0,r.kt)("strong",{parentName:"p"},"select a telemetry")," drop-down menu and select the telemetry that you want to visualize."),(0,r.kt)("div",{align:"center"},(0,r.kt)("img",{width:800,src:"https://files.seeedstudio.com/wiki/K1100-quick-start/70.png"})),(0,r.kt)("p",null,"Click ",(0,r.kt)("strong",{parentName:"p"},"Add tile")," and you will see the tile added into the Azure IoT Central Dashboard."),(0,r.kt)("div",{align:"center"},(0,r.kt)("img",{width:800,src:"https://files.seeedstudio.com/wiki/K1100-quick-start/71.png"})),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Note:")," You can resize or change the visualization of the tiles according to your preference"),(0,r.kt)("div",{align:"center"},(0,r.kt)("img",{width:400,src:"https://files.seeedstudio.com/wiki/k1100_azure_central/19.png"})),(0,r.kt)("p",null,"Click ",(0,r.kt)("strong",{parentName:"p"},"Save")," & Click ",(0,r.kt)("strong",{parentName:"p"},"Publish"),"."),(0,r.kt)("div",{align:"center"},(0,r.kt)("img",{width:800,src:"https://files.seeedstudio.com/wiki/k1100_nodered_azure/27.png"})),(0,r.kt)("p",null,"Open Azure IoT Central Dashboard that you visited before. Click on ",(0,r.kt)("strong",{parentName:"p"},"Devices")," from the left navigation menu. You will see ",(0,r.kt)("strong",{parentName:"p"},"Seeed Wio Terminal")," appear under Devices. Click on it."),(0,r.kt)("div",{align:"center"},(0,r.kt)("img",{width:800,src:"https://files.seeedstudio.com/wiki/k1100_azure_central/14.png"})),(0,r.kt)("p",null,"Click on the entry with the ",(0,r.kt)("strong",{parentName:"p"},"device name")," that you configured before."),(0,r.kt)("div",{align:"center"},(0,r.kt)("img",{width:800,src:"https://files.seeedstudio.com/wiki/k1100_azure_central/23.png"})),(0,r.kt)("p",null,"You can also click on the ",(0,r.kt)("strong",{parentName:"p"},"Raw data")," tab to view all the telemetry data in real-time."),(0,r.kt)("div",{align:"center"},(0,r.kt)("img",{width:800,src:"https://files.seeedstudio.com/wiki/k1100_nodered_azure/28.png"})),(0,r.kt)("h2",{id:"tech-support"},"Tech Support"),(0,r.kt)("p",null,"Please do not hesitate to submit the issue into our ",(0,r.kt)("a",{parentName:"p",href:"https://forum.seeedstudio.com/"},"forum"),"."),(0,r.kt)("p",{style:{textAlign:"center"}},(0,r.kt)("a",{href:"https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts",target:"_blank"},(0,r.kt)("img",{src:"https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg"}))))}u.isMDXComponent=!0}}]);