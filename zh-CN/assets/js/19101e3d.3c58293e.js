"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[16512],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>k});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var d=r.createContext({}),l=function(e){var t=r.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(d.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,d=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=l(n),m=a,k=c["".concat(d,".").concat(m)]||c[m]||u[m]||o;return n?r.createElement(k,i(i({ref:t},p),{},{components:n})):r.createElement(k,i({ref:t},p))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var d in t)hasOwnProperty.call(t,d)&&(s[d]=t[d]);s.originalType=e,s[c]="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},59482:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var r=n(87462),a=(n(67294),n(3905));const o={description:"Get Started with SenseCAP Indicator Introduction",title:"Get Started with SenseCAP Indicator Introduction",keywords:["SenseCAP Indicator"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Get_Started_with_SenseCAP_Indicator_Introduction",last_update:{date:"5/16/2023",author:"Yvonne"}},i="**Overview**",s={unversionedId:"Sensor/SenseCAP/SenseCAP_Indicator/Get_Started_with_SenseCAP_Indicator/Introduction",id:"Sensor/SenseCAP/SenseCAP_Indicator/Get_Started_with_SenseCAP_Indicator/Introduction",title:"Get Started with SenseCAP Indicator Introduction",description:"Get Started with SenseCAP Indicator Introduction",source:"@site/docs/Sensor/SenseCAP/SenseCAP_Indicator/Get_Started_with_SenseCAP_Indicator/Introduction.md",sourceDirName:"Sensor/SenseCAP/SenseCAP_Indicator/Get_Started_with_SenseCAP_Indicator",slug:"/Get_Started_with_SenseCAP_Indicator_Introduction",permalink:"/zh-CN/Get_Started_with_SenseCAP_Indicator_Introduction",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Sensor/SenseCAP/SenseCAP_Indicator/Get_Started_with_SenseCAP_Indicator/Introduction.md",tags:[],version:"current",lastUpdatedBy:"Yvonne",lastUpdatedAt:1684195200,formattedLastUpdatedAt:"2023\u5e745\u670816\u65e5",frontMatter:{description:"Get Started with SenseCAP Indicator Introduction",title:"Get Started with SenseCAP Indicator Introduction",keywords:["SenseCAP Indicator"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Get_Started_with_SenseCAP_Indicator_Introduction",last_update:{date:"5/16/2023",author:"Yvonne"}},sidebar:"ProductSidebar",previous:{title:"How To Flash The Default Firmware",permalink:"/zh-CN/How_To_Flash_The_Default_Firmware"},next:{title:"Get Started with SenseCAP Indicator Native Firmware",permalink:"/zh-CN/Get_Started_with_SenseCAP_Indicator_Native_Firmware"}},d={},l=[{value:"<strong>Features</strong>",id:"features",level:2},{value:"<strong>Hardware Overview</strong>",id:"hardware-overview",level:2},{value:"<strong>System Diagram</strong>",id:"system-diagram",level:3},{value:"<strong>Button Function</strong>",id:"button-function",level:3},{value:"<strong>Grove</strong>",id:"grove",level:3},{value:"<strong>LoRa\xae</strong>",id:"lora",level:3},{value:"<strong>Specification</strong>",id:"specification",level:2}],p={toc:l};function c(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"overview"},(0,a.kt)("strong",{parentName:"h1"},"Overview")),(0,a.kt)("p",null,"SenseCAP Indicator is a 4-inch touch screen driven by ESP32-S3 and RP2040 Dual-MCU and supports Wi-Fi/Bluetooth/LoRa communication. "),(0,a.kt)("p",null,"The device comes two Grove interfaces, which supports ADC and I2C transmission protocols, and two USB Type-C ports with GPIO expantion pins inside, so user can easily expand external accessories via USB port."),(0,a.kt)("p",null,"SenseCAP Indicator is a fully open source powerful IoT development platform for developers. One-stop ODM Fusion service is also available for customization and quick scale-up."),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:800,src:"https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/SenseCAP_Indicator_1.png"})),(0,a.kt)("p",{style:{textAlign:"center"}},(0,a.kt)("a",{href:"https://www.seeedstudio.com/SenseCAP-Indicator-D1-p-5643.html?",target:"_blank"},(0,a.kt)("img",{src:"https://files.seeedstudio.com/wiki/RS485_500cm%20ultrasonic_sensor/image%202.png",border:"0"}))),(0,a.kt)("h2",{id:"features"},(0,a.kt)("strong",{parentName:"h2"},"Features")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Dual MCUs and Rich GPIOs"),"\nEquipped with powerful ESP32S3 and RP2040 dual MCUs and over 400 Grove-compatible GPIOs for flexible expansion options."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Real-time Air Quality Monitoring"),"\nBuilt-in tVOC and CO2 sensors, and an external Grove AHT20 TH sensor for more precise temperature and humidity readings."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Local LoRa Hub for IoT Connectivity"),"\nIntegrated Semtech SX1262 LoRa chip (optional) for connecting LoRa devices to popular IoT platforms such as Matter via Wi-Fi, without the need for additional compatible devices."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Fully Open Source Platform"),"\nLeverage the extensive ESP32 and Raspberry Pi open source ecosystem for infinite application possibilities."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Fusion ODM Service Available"),"\nSeeed Studio also provides one-stop ODM service for quick customization and scale-up to meet various needs.(please contact ",(0,a.kt)("a",{parentName:"li",href:"mailto:iot@seeed.cc"},"iot@seeed.cc"),")")),(0,a.kt)("h2",{id:"hardware-overview"},(0,a.kt)("strong",{parentName:"h2"},"Hardware Overview")),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:"{600}",src:"https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/SenseCAP_Indicator_2.png"})),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:"{600}",src:"https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/SenseCAP_Indicator_3.png"})),(0,a.kt)("h3",{id:"system-diagram"},(0,a.kt)("strong",{parentName:"h3"},"System Diagram")),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:800,src:"https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/SenseCAP_Indicator_6.png"})),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:800,src:"https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/SenseCAP_Indicator_7.png"})),(0,a.kt)("h3",{id:"button-function"},(0,a.kt)("strong",{parentName:"h3"},"Button Function")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Short Press:")," Turn off /Wake up the screen."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Long Press for 3s:")," Switch on/Wwitch off the device."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Long Press for 10s:")," Factory firmware reset."),(0,a.kt)("h3",{id:"grove"},(0,a.kt)("strong",{parentName:"h3"},"Grove")),(0,a.kt)("p",null,"There are two Grove interfaces for connecting Grove modules, providing more possibilities for developers. "),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:800,src:"https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/grove.png"})),(0,a.kt)("p",null,"Grove is a modular, standardized connector prototyping system and a strong open source hardware ecosystem. Click ",(0,a.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/category/Grove-c-1003.html"},(0,a.kt)("strong",{parentName:"a"},"here"))," to learn more"),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:800,src:"https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/SenseCAP_Indicator_4.png"})),(0,a.kt)("h3",{id:"lora"},(0,a.kt)("strong",{parentName:"h3"},"LoRa\xae")),(0,a.kt)("p",null,"The embedded Semtech SX1262 LoRa\xae module enables you to build the LoRa\xae application and connect your local LoRa sensors to the Cloud via Wi-Fi. For example, you could build a LoRa hub device to connect your LoRa sensors to your smart home ecosystem to implement Matter over Wi-Fi. In this way, the LoRa devices could be connected to the Matter ecosystem via Wi-Fi, without the need to buy a new Matter-compatible device."),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:800,src:"https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/SenseCAP_Indicator_55.png"})),(0,a.kt)("h2",{id:"specification"},(0,a.kt)("strong",{parentName:"h2"},"Specification")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Screen"),(0,a.kt)("th",{parentName:"tr",align:"left"},"3",".","95 Inch, Capacitive RGB Touch Screen"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("strong",{parentName:"td"},"Screen Resolution")),(0,a.kt)("td",{parentName:"tr",align:"left"},"480 x 480 pixels")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("strong",{parentName:"td"},"Power Supply")),(0,a.kt)("td",{parentName:"tr",align:"left"},"5V-DC, 1A")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("strong",{parentName:"td"},"Battery")),(0,a.kt)("td",{parentName:"tr",align:"left"},"No battery,only powered by USB port")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("strong",{parentName:"td"},"Processor")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"td"},"ESP32-S3:")," Xtensa\xae dual-core 32-bit up to 240 MHz"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"td"},"RP2040:")," Dual ARM Cortex-M0+ up to 133MHz"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("strong",{parentName:"td"},"Flash")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"td"},"ESP32-S3:")," 8MB"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"td"},"RP2040:")," 2MB"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("strong",{parentName:"td"},"External Storage")),(0,a.kt)("td",{parentName:"tr",align:"left"},"Support up to 32GB Micro SD Card (not included)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("strong",{parentName:"td"},"Wi-Fi")),(0,a.kt)("td",{parentName:"tr",align:"left"},"802",".","11b/g/n, 2.4GHz")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("strong",{parentName:"td"},"Bluetooth")),(0,a.kt)("td",{parentName:"tr",align:"left"},"Bluetooth 5.0 LE")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("strong",{parentName:"td"},"LoRa(SX1262"),")"),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("p",null,"LoRa and FSK Modem"),(0,a.kt)("p",null,"+21dBm Max Transmitted Power")," ",(0,a.kt)("p",null,"-136dBm@SF12 BW=125KHz RX Sensitivity"),(0,a.kt)("p",null,"Up to 5km communication distance"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("strong",{parentName:"td"},"Sensors"),"(Optional)"),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"td"},"CO2(Sensirion SCD41)")),(0,a.kt)("p",null,"Range: 0-40000ppm"),(0,a.kt)("p",null,"Accuracy: 400ppm-5000ppm \xb1(50ppm+5% of reading)"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"td"},"TVOC (SGP40)")),(0,a.kt)("p",null,"Range: 1-500 VOC Index Points"),(0,a.kt)("strong",{parentName:"td"},"Grove Temperature and Humidity Sensor(AHT20)"),(0,a.kt)("p",null,"Temperature Range: -40 ~ + 85 \u2103/\xb1 0.3 \u2103; 0 ~ 100% RH/\xb1 2% RH (25 \u2103)"))))),(0,a.kt)("h1",{id:"tech-support"},(0,a.kt)("strong",{parentName:"h1"},"Tech Support")),(0,a.kt)("p",null,"Don\u2019t worry, we\u2019ve got you covered! Please visit our ",(0,a.kt)("a",{parentName:"p",href:"https://discord.gg/cPpeuQMM"},"Seeed Official Discord Channel")," to ask your questions\uff01\nIf you have large order or customization requirment, please contact ",(0,a.kt)("a",{parentName:"p",href:"mailto:iot@seeed.cc"},"iot@seeed.cc")))}c.isMDXComponent=!0}}]);