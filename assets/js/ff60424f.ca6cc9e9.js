"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[72733],{3905:(e,t,i)=>{i.d(t,{Zo:()=>u,kt:()=>h});var n=i(67294);function o(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function a(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function r(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?a(Object(i),!0).forEach((function(t){o(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):a(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function l(e,t){if(null==e)return{};var i,n,o=function(e,t){if(null==e)return{};var i,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)i=a[n],t.indexOf(i)>=0||(o[i]=e[i]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)i=a[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(o[i]=e[i])}return o}var s=n.createContext({}),d=function(e){var t=n.useContext(s),i=t;return e&&(i="function"==typeof e?e(t):r(r({},t),e)),i},u=function(e){var t=d(e.components);return n.createElement(s.Provider,{value:t},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var i=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=d(i),m=o,h=c["".concat(s,".").concat(m)]||c[m]||p[m]||a;return i?n.createElement(h,r(r({ref:t},u),{},{components:i})):n.createElement(h,r({ref:t},u))}));function h(e,t){var i=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=i.length,r=new Array(a);r[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:o,r[1]=l;for(var d=2;d<a;d++)r[d]=i[d];return n.createElement.apply(null,r)}return n.createElement.apply(null,i)}m.displayName="MDXCreateElement"},71898:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>c,frontMatter:()=>a,metadata:()=>l,toc:()=>d});var n=i(87462),o=(i(67294),i(3905));const a={description:"Soil moisture monitor alarm system",title:"Soil moisture monitor alarm system",keywords:["SenseCap"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/K1111-Quick-Start-Guide",last_update:{date:"1/13/2023",author:"shuxu hu"}},r="Soil moisture monitoring alarm system",l={unversionedId:"Network/SenseCAP_K1100/Contributors_Project/K1111-Quick-Start-Guide",id:"Network/SenseCAP_K1100/Contributors_Project/K1111-Quick-Start-Guide",title:"Soil moisture monitor alarm system",description:"Soil moisture monitor alarm system",source:"@site/docs/Network/SenseCAP_K1100/Contributors_Project/K1111-Quick-Start-Guide.md",sourceDirName:"Network/SenseCAP_K1100/Contributors_Project",slug:"/K1111-Quick-Start-Guide",permalink:"/K1111-Quick-Start-Guide",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Network/SenseCAP_K1100/Contributors_Project/K1111-Quick-Start-Guide.md",tags:[],version:"current",lastUpdatedBy:"shuxu hu",lastUpdatedAt:1673568e3,formattedLastUpdatedAt:"Jan 13, 2023",frontMatter:{description:"Soil moisture monitor alarm system",title:"Soil moisture monitor alarm system",keywords:["SenseCap"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/K1111-Quick-Start-Guide",last_update:{date:"1/13/2023",author:"shuxu hu"}},sidebar:"ProductSidebar",previous:{title:"IoT Into the Wild Contest for Sustainable Planet 2022",permalink:"/IoT-into-the-wild-contest"},next:{title:"LinkStar Introduction",permalink:"/Linkstar_Datasheet"}},s={},d=[{value:"Upgradable to Industrial Sensors",id:"upgradable-to-industrial-sensors",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Materials Required",id:"materials-required",level:3},{value:"Helium Registration for Connect",id:"helium-registration-for-connect",level:3},{value:"Azure IoT Registration for Notice",id:"azure-iot-registration-for-notice",level:3},{value:"Soil Moisture Monitor Getting Started",id:"soil-moisture-monitor-getting-started",level:2},{value:"Equipment Initiation",id:"equipment-initiation",level:3},{value:"Connect Wio Terminal with Helium",id:"connect-wio-terminal-with-helium",level:3},{value:"Received Data Decoded in Helium",id:"received-data-decoded-in-helium",level:3},{value:"Integrate Azure IoT Platform",id:"integrate-azure-iot-platform",level:3},{value:"Further Function in Azure IoT Central",id:"further-function-in-azure-iot-central",level:3},{value:"Tech Support",id:"tech-support",level:2},{value:"Upgradable to Industrial Sensors",id:"upgradable-to-industrial-sensors-1",level:2},{value:"Statement",id:"statement",level:2}],u={toc:d};function c(e){let{components:t,...i}=e;return(0,o.kt)("wrapper",(0,n.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"soil-moisture-monitoring-alarm-system"},"Soil moisture monitoring alarm system"),(0,o.kt)("p",null,"In this wiki, we will show you how to unitize the Wio Terminal to link Grove - Wio-E5 and Grove - Soil Moisture Sensor which are in the kit, connecting them with Helium and Azure IoT Central platforms, to build a real-time backyard potting monitor and watering-reminder, for a glimpse of Internet of Things."),(0,o.kt)("h2",{id:"upgradable-to-industrial-sensors"},"Upgradable to Industrial Sensors"),(0,o.kt)("p",null,"With the SenseCAP ",(0,o.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html"},"S2110 controller")," and ",(0,o.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html"},"S2100 data logger"),", you can easily turn the Grove into a LoRaWAN\xae sensor. Seeed not only helps you with prototyping but also offers you the possibility to expand your project with the SenseCAP series of robust ",(0,o.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&categories=SenseCAP&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP"},"industrial sensors"),"."),(0,o.kt)("p",null,"The IP66 housing, Bluetooth configuration, compatibility with the global LoRaWAN\xae network, built-in 19 Ah battery, and powerful support from APP make the ",(0,o.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/catalogsearch/result/?q=S21&categories=SenseCAP~LoRaWAN%20Device&product_module=Device"},"SenseCAP S210x")," the best choice for industrial applications. The series includes sensors for soil moisture, air temperature and humidity, light intensity, CO2, EC, and an 8-in-1 weather station. Try the latest SenseCAP S210x for your next successful industrial project."),(0,o.kt)("table",{style:{marginLeft:"auto",marginRight:"auto"}},(0,o.kt)("tbody",null,(0,o.kt)("tr",null,(0,o.kt)("td",{colSpan:4,bgcolor:"#0e3c49",align:"center"},(0,o.kt)("font",{color:"white",size:4},(0,o.kt)("strong",null,"SenseCAP Industrial Sensor")))),(0,o.kt)("tr",null,(0,o.kt)("td",{bgcolor:"#0e3c49"},(0,o.kt)("a",{href:"https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html",target:"_blank"}),(0,o.kt)("div",{align:"center"},(0,o.kt)("a",{href:"https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html",target:"_blank"},(0,o.kt)("img",{width:"100%",src:"https://files.seeedstudio.com/wiki/K1100_overview/2/S2100.png"})))),(0,o.kt)("td",{bgcolor:"#0e3c49"},(0,o.kt)("a",{href:"https://www.seeedstudio.com/SenseCAP-S2101-LoRaWAN-Air-Temperature-and-Humidity-Sensor-p-5354.html",target:"_blank"}),(0,o.kt)("div",{align:"center"},(0,o.kt)("a",{href:"https://www.seeedstudio.com/SenseCAP-S2101-LoRaWAN-Air-Temperature-and-Humidity-Sensor-p-5354.html",target:"_blank"},(0,o.kt)("img",{width:"100%",src:"https://files.seeedstudio.com/wiki/K1100_overview/2/S2101&S2103.png"})))),(0,o.kt)("td",{bgcolor:"#0e3c49"},(0,o.kt)("a",{href:"https://www.seeedstudio.com/SenseCAP-S2102-LoRaWAN-Light-Intensity-Sensor-p-5355.html",target:"_blank"}),(0,o.kt)("div",{align:"center"},(0,o.kt)("a",{href:"https://www.seeedstudio.com/SenseCAP-S2102-LoRaWAN-Light-Intensity-Sensor-p-5355.html",target:"_blank"},(0,o.kt)("img",{width:"100%",src:"https://files.seeedstudio.com/wiki/K1100_overview/2/S2102.png"})))),(0,o.kt)("td",{bgcolor:"#0e3c49"},(0,o.kt)("a",{href:"https://www.seeedstudio.com/SenseCAP-S2103-LoRaWAN-CO2-Temperature-and-Humidity-Sensor-p-5356.html",target:"_blank"}),(0,o.kt)("div",{align:"center"},(0,o.kt)("a",{href:"https://www.seeedstudio.com/SenseCAP-S2103-LoRaWAN-CO2-Temperature-and-Humidity-Sensor-p-5356.html",target:"_blank"},(0,o.kt)("img",{width:"100%",src:"https://files.seeedstudio.com/wiki/K1100_overview/2/S2101&S2103.png"}))))),(0,o.kt)("tr",null,(0,o.kt)("td",{bgcolor:"#0e3c49",align:"center"},(0,o.kt)("a",{href:"https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html",target:"_blank"},(0,o.kt)("strong",null,"S2100 ",(0,o.kt)("br",null)," Data Logger"))),(0,o.kt)("td",{bgcolor:"#0e3c49",align:"center"},(0,o.kt)("a",{href:"https://www.seeedstudio.com/SenseCAP-S2101-LoRaWAN-Air-Temperature-and-Humidity-Sensor-p-5354.html",target:"_blank"},(0,o.kt)("strong",null,"S2101 ",(0,o.kt)("br",null)," Air Temp & Humidity"))),(0,o.kt)("td",{bgcolor:"#0e3c49",align:"center"},(0,o.kt)("a",{href:"https://www.seeedstudio.com/SenseCAP-S2102-LoRaWAN-Light-Intensity-Sensor-p-5355.html",target:"_blank"},(0,o.kt)("strong",null,"S2102 ",(0,o.kt)("br",null)," Light"))),(0,o.kt)("td",{bgcolor:"#0e3c49",align:"center"},(0,o.kt)("a",{href:"https://www.seeedstudio.com/SenseCAP-S2103-LoRaWAN-CO2-Temperature-and-Humidity-Sensor-p-5356.html",target:"_blank"},(0,o.kt)("strong",null,"S2103 ",(0,o.kt)("br",null)," Air Temp & Humidity & CO2")))),(0,o.kt)("tr",null,(0,o.kt)("td",{bgcolor:"#0e3c49"},(0,o.kt)("a",{href:"https://www.seeedstudio.com/SenseCAP-S2104-LoRaWAN-Soil-Temperature-and-Moisture-Sensor-p-5357.html",target:"_blank"}),(0,o.kt)("div",{align:"center"},(0,o.kt)("a",{href:"https://www.seeedstudio.com/SenseCAP-S2104-LoRaWAN-Soil-Temperature-and-Moisture-Sensor-p-5357.html",target:"_blank"},(0,o.kt)("img",{width:"100%",src:"https://files.seeedstudio.com/wiki/K1100_overview/2/S2104.png"})))),(0,o.kt)("td",{bgcolor:"#0e3c49"},(0,o.kt)("a",{href:"https://www.seeedstudio.com/SenseCAP-S2105-LoRaWAN-Soil-Temperature-Moisture-and-EC-Sensor-p-5358.html",target:"_blank"}),(0,o.kt)("div",{align:"center"},(0,o.kt)("a",{href:"https://www.seeedstudio.com/SenseCAP-S2105-LoRaWAN-Soil-Temperature-Moisture-and-EC-Sensor-p-5358.html",target:"_blank"},(0,o.kt)("img",{width:"100%",src:"https://files.seeedstudio.com/wiki/K1100_overview/2/S2105.png"})))),(0,o.kt)("td",{bgcolor:"#0e3c49"},(0,o.kt)("a",{href:"https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html",target:"_blank"}),(0,o.kt)("div",{align:"center"},(0,o.kt)("a",{href:"https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html",target:"_blank"},(0,o.kt)("img",{width:"100%",src:"https://files.seeedstudio.com/wiki/K1100_overview/2/S2110.png"})))),(0,o.kt)("td",{bgcolor:"#0e3c49"},(0,o.kt)("a",{href:"https://www.seeedstudio.com/sensecap-s2120-lorawan-8-in-1-weather-sensor-p-5436.html",target:"_blank"}),(0,o.kt)("div",{align:"center"},(0,o.kt)("a",{href:"https://www.seeedstudio.com/sensecap-s2120-lorawan-8-in-1-weather-sensor-p-5436.html",target:"_blank"},(0,o.kt)("img",{width:"100%",src:"https://files.seeedstudio.com/wiki/K1100_overview/2/S2120.png"}))))),(0,o.kt)("tr",null,(0,o.kt)("td",{bgcolor:"#0e3c49",align:"center"},(0,o.kt)("a",{href:"https://www.seeedstudio.com/SenseCAP-S2104-LoRaWAN-Soil-Temperature-and-Moisture-Sensor-p-5357.html",target:"_blank"},(0,o.kt)("strong",null,"S2104 ",(0,o.kt)("br",null)," Soil Moisture & Temp"))),(0,o.kt)("td",{bgcolor:"#0e3c49",align:"center"},(0,o.kt)("a",{href:"https://www.seeedstudio.com/SenseCAP-S2105-LoRaWAN-Soil-Temperature-Moisture-and-EC-Sensor-p-5358.html",target:"_blank"},(0,o.kt)("strong",null,"S2105 ",(0,o.kt)("br",null)," Soil Moisture & Temp & EC"))),(0,o.kt)("td",{bgcolor:"#0e3c49",align:"center"},(0,o.kt)("a",{href:"https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html",target:"_blank"},(0,o.kt)("strong",null,"S2110 ",(0,o.kt)("br",null)," LoRaWAN\xae Controller"))),(0,o.kt)("td",{bgcolor:"#0e3c49",align:"center"},(0,o.kt)("a",{href:"https://www.seeedstudio.com/sensecap-s2120-lorawan-8-in-1-weather-sensor-p-5436.html",target:"_blank"},(0,o.kt)("strong",null,"S2120 ",(0,o.kt)("br",null)," 8-in-1 Weather Station")))))),(0,o.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,o.kt)("p",null,"Before everything starts, we should meet the following prerequisites:"),(0,o.kt)("h3",{id:"materials-required"},"Materials Required"),(0,o.kt)("table",{align:"center"},(0,o.kt)("tbody",null,(0,o.kt)("tr",null,(0,o.kt)("td",{align:"center"},(0,o.kt)("div",{align:"center"},(0,o.kt)("img",{width:210,src:"https://files.seeedstudio.com/wiki/Wio-Terminal/img/WT-GROVE.jpeg"}))),(0,o.kt)("td",{align:"center"},(0,o.kt)("div",{align:"center"},(0,o.kt)("img",{width:210,src:"https://files.seeedstudio.com/products/113020091/%E5%AE%98%E7%BD%91/11302009_Preview-34.png"}))),(0,o.kt)("td",{align:"center"},(0,o.kt)("div",{align:"center"},(0,o.kt)("img",{width:310,src:"https://files.seeedstudio.com/wiki/Grove_Moisture_Sensor/images/Moisture_sensor_.jpg"})))),(0,o.kt)("tr",null,(0,o.kt)("td",{align:"center"},"Wio Terminal"),(0,o.kt)("td",{align:"center"},"Grove - Wio-E5"),(0,o.kt)("td",{align:"center"},"Grove Soil Moisture Sensor")))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Software")),(0,o.kt)("div",null,"- ",(0,o.kt)("a",{href:"https://www.arduino.cc/",target:"_blank"},(0,o.kt)("span",null,"Arduino"))),(0,o.kt)("p",null,"We will upload programming to Wio Terminal through Arduino. If this is your first time using Arduino with Wio Terminal, we highly recommend you to refer to"),(0,o.kt)("a",{href:"https://wiki.seeedstudio.com/Preliminary-Preparation/",target:"_blank"},(0,o.kt)("span",null,"Getting Started with Wio Terminal")),".",(0,o.kt)("div",{align:"center"},(0,o.kt)("img",{width:600,src:"https://files.seeedstudio.com/wiki/Wio-Terminal/img/selectBoard.png"})),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Others")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Potting")),(0,o.kt)("p",null,"In this kickstart demo, we are using a soil moisture sensor. Therefore a potting with deep enough soil will be the best."),(0,o.kt)("div",{align:"center"},(0,o.kt)("img",{width:300,src:"https://files.seeedstudio.com/wiki/LoraWANdevKit/lorawandevkit32.png"})),(0,o.kt)("h3",{id:"helium-registration-for-connect"},"Helium Registration for Connect"),(0,o.kt)("a",{href:"https://console.helium.com/",target:"_blank"},(0,o.kt)("span",null,"Helium")," "),"is a global, distributed network of Hotspots that create public, long-range wireless coverage for LoRaWAN\xae enabled IoT devices.",(0,o.kt)("p",null,"It allows us to send a certain amount of data through LoRa\xae for free and we will connect it to the Wio Terminal. All the information we need to connect the Wio Terminal are all presented ",(0,o.kt)("strong",{parentName:"p"},"in the first page")," after account registration:"),(0,o.kt)("div",{align:"center"},(0,o.kt)("img",{width:600,src:"https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/125.png"})),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"The device usually takes nearly 20 minutes to be really. It is recommanded to be added at the very beginning.")),(0,o.kt)("h3",{id:"azure-iot-registration-for-notice"},"Azure IoT Registration for Notice"),(0,o.kt)("a",{href:"https://portal.azure.com/",target:"_blank"},(0,o.kt)("span",null,"Azure IoT Central")," "),"is a managed service hosted in the cloud that acts as a central message hub for communication between an IoT application and its attached devices.",(0,o.kt)("p",null,"It can help us to manage LoRa\xae data and do some actions for one week free at the beginning . We will integrate it with Helium to ",(0,o.kt)("strong",{parentName:"p"},"monitor data")," and set up a auto ",(0,o.kt)("strong",{parentName:"p"},"potting watering-reminder"),"."),(0,o.kt)("div",{align:"center"},(0,o.kt)("img",{width:700,src:"https://files.seeedstudio.com/wiki/LoraWANdevKit/lorawandevkit30.png"})),(0,o.kt)("h2",{id:"soil-moisture-monitor-getting-started"},"Soil Moisture Monitor Getting Started"),(0,o.kt)("p",null,"In this quick demo we only require a simple LoRa\xae connection witn Grove - Soil Moisture Sensor, for the puporse of auto soil moisture monitor and alert."),(0,o.kt)("h3",{id:"equipment-initiation"},"Equipment Initiation"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Step 1"),". Use Grove cable to link everything together where the Grove - Soil Moisture Sensor on the ",(0,o.kt)("strong",{parentName:"li"},"right")," of the Wio Terminal and Grove - Wio-E5 is on the ",(0,o.kt)("strong",{parentName:"li"},"left"),".")),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"The position where the Grove - Wio-E5 is will make a difference to the uploaded code.")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Step 2"),". Connect a PC and the Wio Terminal with a Type-C cable.")),(0,o.kt)("div",{align:"center"},(0,o.kt)("img",{width:400,src:"https://files.seeedstudio.com/wiki/LoraWANdevKit/lorawandevkit33.jpg"})),(0,o.kt)("h3",{id:"connect-wio-terminal-with-helium"},"Connect Wio Terminal with Helium"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Step 1"),". Open the ",(0,o.kt)("a",{href:"https://console.helium.com/",target:"_blank"},(0,o.kt)("span",null,"Helium")),'\npage on the PC and clilck "Devices" on the left column. ',(0,o.kt)("strong",{parentName:"li"},"Add a new device"),", then check the information below(example):")),(0,o.kt)("div",{align:"center"},(0,o.kt)("img",{width:500,src:"https://files.seeedstudio.com/wiki/LoraWANdevKit/lorawandevkit3a.png"})),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Step 2"),". Download the Arduino code below and open it with Arduino.")),(0,o.kt)("div",null,(0,o.kt)("p",{style:{}},(0,o.kt)("a",{href:"https://github.com/limengdu/Seeed-Studio-LoRaWAN-Dev-Kit/tree/main/sensor/Soil-moisture-send-data",target:"_blank"})),(0,o.kt)("div",{align:"center"},(0,o.kt)("a",{href:"https://github.com/limengdu/Seeed-Studio-LoRaWAN-Dev-Kit/tree/main/sensor/Soil-moisture-send-data",target:"_blank"},(0,o.kt)("img",{width:300,src:"https://files.seeedstudio.com/wiki/seeed_logo/DOWNLOAD.png"}))),(0,o.kt)("p",null)),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Step 3"),". Find the specific code line and fill the Helium connecting information we find into the code line where we should know ",(0,o.kt)("strong",{parentName:"li"},"we only change the letters and number"),".")),(0,o.kt)("div",{align:"center"},(0,o.kt)("img",{width:700,src:"https://files.seeedstudio.com/wiki/LoraWANdevKit/lorawandevkit4a.png"})),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Step 4"),". Select correct Borad and the Port. We can proceed to upload it by clicking the button in the upper left corner.")),(0,o.kt)("div",{align:"center"},(0,o.kt)("img",{width:700,src:"https://files.seeedstudio.com/wiki/LoraWANdevKit/lorawandevkit3.png"})),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Step 5"),'. Open the "Serial Monitor" on the upper right of Arduino, and we can see that the connection is done and the data has been sent.')),(0,o.kt)("div",{align:"center"},(0,o.kt)("img",{width:700,src:"https://files.seeedstudio.com/wiki/LoraWANdevKit/lorawandevkit5a.png"})),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Step 6"),'. Move back to the Helium website and check the "Devices". At the bottom we can see that indeed some data have been received.')),(0,o.kt)("div",{align:"center"},(0,o.kt)("img",{width:400,src:"https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/7.jpg"})),(0,o.kt)("p",null,"Because of the characteristic of LoRa\xae communication, the presentation of data is an array of numbers and letters that we may feel confused. Hence, we need to decode it for the true information."),(0,o.kt)("div",{align:"center"},(0,o.kt)("img",{width:700,src:"https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/172.png"})),(0,o.kt)("h3",{id:"received-data-decoded-in-helium"},"Received Data Decoded in Helium"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Step 1"),'. Click the "Function" on the left colmon of the page, and add a custom function.')),(0,o.kt)("div",{align:"center"},(0,o.kt)("img",{width:600,src:"https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/184.png"})),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Step 2"),'. Copy the code below and add it to the "CUSTOM SCRIPT", then save it.')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cpp"},"function Decoder(bytes, port) {\n  var decoded = {};\n  if (port == 8) {\n    decoded.soil = bytes[0]<<8 | bytes[1];\n  }\n  return decoded;\n}\n")),(0,o.kt)("div",{align:"center"},(0,o.kt)("img",{width:700,src:"https://files.seeedstudio.com/wiki/LoraWANdevKit/lorawandevkit8.png"})),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Step 3"),'. Click "Flows" on the left and drag the "Devices" and "Functions" block into the palette. Link them together as below:')),(0,o.kt)("div",{align:"center"},(0,o.kt)("img",{width:700,src:"https://files.seeedstudio.com/wiki/LoraWANdevKit/lorawandevkit9.png"})),(0,o.kt)("p",null,"This helps us to translate our data to be readable."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Step 4(optional)"),'. Move back to "Function" page, and we can ',(0,o.kt)("a",{href:"https://wiki.seeedstudio.com/Connecting-to-Helium/#upload-code-send-data-to-helium",target:"_blank"},(0,o.kt)("span",null,"get the input hexadecimal data")),"\nfrom the device. Select port as '8' and click the \"RUN\" button.")),(0,o.kt)("div",{align:"center"},(0,o.kt)("img",{width:400,src:"https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/185.png"})),(0,o.kt)("p",null,"We now can read our data, but the process is a little complicated and not easy to use. How can we do to make the data to be presented continously?"),(0,o.kt)("h3",{id:"integrate-azure-iot-platform"},"Integrate Azure IoT Platform"),(0,o.kt)("p",null,"We can integrate another platform ",(0,o.kt)("strong",{parentName:"p"},"Azure IoT")," to present and manage our data, even do some actions."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Step 1"),'. Open the Helium page first, click "Integrations" on the left colmon of the page, and select "Azure IoT Central".')),(0,o.kt)("div",{align:"center"},(0,o.kt)("img",{width:700,src:"https://files.seeedstudio.com/wiki/LoraWANdevKit/lorawandevkit15.png"})),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Step 2"),". Creat a new application on the ",(0,o.kt)("a",{href:"https://apps.azureiotcentral.com/",target:"_blank"},(0,o.kt)("span",null,"Azure IoT Central")),"\n. And then integrate the Azure IoT Central in the Helium by filling the required information below:")),(0,o.kt)("div",{align:"center"},(0,o.kt)("img",{width:700,src:"https://files.seeedstudio.com/wiki/LoraWANdevKit/lorawandevkit16.png"})),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Step 3"),'. Click the "Flows" on the left colmon of our page, drag the block of the Azure IoT Central and link it after the customized function, the order should be like:')),(0,o.kt)("div",{align:"center"},(0,o.kt)("img",{width:450,src:"https://files.seeedstudio.com/wiki/LoraWANdevKit/lorawandevkit17.png"})),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Step 4"),'. Move to the "Azure IoT Central" page and select the "Devices" on the left. We can see a device named after some ramdon numbers pop up.')),(0,o.kt)("div",{align:"center"},(0,o.kt)("img",{width:700,src:"https://files.seeedstudio.com/wiki/LoraWANdevKit/lorawandevkit18.png"})),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Step 5"),'. Select the device and check the "Raw data" information like the figure below shows. The information contains all the data form Helium, including the decoded data:')),(0,o.kt)("div",{align:"center"},(0,o.kt)("img",{width:700,src:"https://files.seeedstudio.com/wiki/LoraWANdevKit/lorawandevkit19.png"})),(0,o.kt)("p",null,"We have our continous data displaying, but is it possible to display them in a sketch and maybe do some actions with the data?"),(0,o.kt)("h3",{id:"further-function-in-azure-iot-central"},"Further Function in Azure IoT Central"),(0,o.kt)("p",null,"We can manage all the data from the Helium and choose the ones that we care about to build an auto email alert based on it."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Step 1"),'. Click the "Unformated data" on the "Devices" page and creat an auto device template.')),(0,o.kt)("div",{align:"center"},(0,o.kt)("img",{width:700,src:"https://files.seeedstudio.com/wiki/LoraWANdevKit/lorawandevkit20.png"})),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Step 2"),'. Move to the "Device template" and we can see the template includes and make the same type data to be sperately stored in each block:')),(0,o.kt)("div",{align:"center"},(0,o.kt)("img",{width:700,src:"https://files.seeedstudio.com/wiki/LoraWANdevKit/lorawandevkit21.png"})),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Step 3"),'. Select the "Overview" and we can see that there has been automatically created some sketches that show the data value.')),(0,o.kt)("div",{align:"center"},(0,o.kt)("img",{width:300,src:"https://files.seeedstudio.com/wiki/LoraWANdevKit/lorawandevkit21a.png"})),(0,o.kt)("p",null,"Change the soil moisture data we want to display and rename the sketch."),(0,o.kt)("div",{align:"center"},(0,o.kt)("img",{width:700,src:"https://files.seeedstudio.com/wiki/LoraWANdevKit/lorawandevkit22.png"})),(0,o.kt)("p",null,"Remember to click ",(0,o.kt)("strong",{parentName:"p"},'"Save"')," and then click ",(0,o.kt)("strong",{parentName:"p"},'"Pubilsh"')," to save the template after we finished:"),(0,o.kt)("div",{align:"center"},(0,o.kt)("img",{width:700,src:"https://files.seeedstudio.com/wiki/LoraWANdevKit/lorawandevkit23.png"})),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Step 4"),'. Move to the "Rules" on the left and creat a new one.')),(0,o.kt)("div",{align:"center"},(0,o.kt)("img",{width:700,src:"https://files.seeedstudio.com/wiki/LoraWANdevKit/lorawandevkit24.png"})),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Step 5"),". Fill the information below to create a auto email alert:")),(0,o.kt)("p",null,"The device template(usually the default):"),(0,o.kt)("div",{align:"center"},(0,o.kt)("img",{width:700,src:"https://files.seeedstudio.com/wiki/LoraWANdevKit/lorawandevkit25.png"})),(0,o.kt)("p",null,"Set up the type of the data and the value we want:"),(0,o.kt)("div",{align:"center"},(0,o.kt)("img",{width:700,src:"https://files.seeedstudio.com/wiki/LoraWANdevKit/lorawandevkit11.png"})),(0,o.kt)("p",null,"Fill the email that is registered in the Azure IoT Central and the note we want to send:"),(0,o.kt)("div",{align:"center"},(0,o.kt)("img",{width:500,src:"https://files.seeedstudio.com/wiki/LoraWANdevKit/lorawandevkit12.png"})),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Result")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},'Move back to the "Devices" on the left and select the device, we can see the data have been displayed in a sketch.')),(0,o.kt)("div",{align:"center"},(0,o.kt)("img",{width:700,src:"https://files.seeedstudio.com/wiki/LoraWANdevKit/lorawandevkit31.png"})),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Meanwhile, if the value we set has reached the threshold, there will be continous emails we set up before will be sent to the email.")),(0,o.kt)("div",{align:"center"},(0,o.kt)("img",{width:700,src:"https://files.seeedstudio.com/wiki/LoraWANdevKit/lorawandevkit26.png"})),(0,o.kt)("p",null,"The contents of the email are like:"),(0,o.kt)("div",{align:"center"},(0,o.kt)("img",{width:500,src:"https://files.seeedstudio.com/wiki/LoraWANdevKit/lorawandevkit27.png"})),(0,o.kt)("p",null,"Remember to water the potting!"),(0,o.kt)("p",null,"Thanks!"),(0,o.kt)("h2",{id:"tech-support"},"Tech Support"),(0,o.kt)("p",null,"Please do not hesitate to submit the issue into our ",(0,o.kt)("a",{parentName:"p",href:"https://forum.seeedstudio.com/"},"forum"),"."),(0,o.kt)("p",{style:{textAlign:"center"}},(0,o.kt)("a",{href:"https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts",target:"_blank"},(0,o.kt)("img",{src:"https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg"}))),(0,o.kt)("h2",{id:"upgradable-to-industrial-sensors-1"},"Upgradable to Industrial Sensors"),(0,o.kt)("p",null,"With the SenseCAP ",(0,o.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html"},"S2110 controller")," and ",(0,o.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html"},"S2100 data logger"),", you can easily turn the Grove into a LoRaWAN\xae sensor. Seeed not only helps you with prototyping but also offers you the possibility to expand your project with the SenseCAP series of robust ",(0,o.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&categories=SenseCAP&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP"},"industrial sensors"),"."),(0,o.kt)("p",null,"The IP66 housing, Bluetooth configuration, compatibility with the global LoRaWAN\xae network, built-in 19 Ah battery, and powerful support from APP make the ",(0,o.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/catalogsearch/result/?q=S21&categories=SenseCAP&product_module=Device"},"SenseCAP S210x")," the best choice for industrial applications. The series includes sensors for soil moisture, air temperature and humidity, light intensity, CO2, EC, and an 8-in-1 weather station. Try the latest SenseCAP S210x for your next successful industrial project."),(0,o.kt)("div",{align:"center"},(0,o.kt)("a",{href:"https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP",target:"_blank"},(0,o.kt)("img",{width:800,src:"https://files.seeedstudio.com/wiki/K1100_overview/sensecap.png"}))),(0,o.kt)("h2",{id:"statement"},"Statement"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The LoRa\xae Mark is a trademark of Semtech Corporation or its subsidiaries."),(0,o.kt)("li",{parentName:"ul"},"LoRaWAN\xae is a mark used under license from the LoRa Alliance\xae.")))}c.isMDXComponent=!0}}]);