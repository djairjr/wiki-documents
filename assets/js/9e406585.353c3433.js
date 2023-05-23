"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[87292],{3905:(t,e,l)=>{l.d(e,{Zo:()=>s,kt:()=>c});var n=l(67294);function i(t,e,l){return e in t?Object.defineProperty(t,e,{value:l,enumerable:!0,configurable:!0,writable:!0}):t[e]=l,t}function a(t,e){var l=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),l.push.apply(l,n)}return l}function r(t){for(var e=1;e<arguments.length;e++){var l=null!=arguments[e]?arguments[e]:{};e%2?a(Object(l),!0).forEach((function(e){i(t,e,l[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(l)):a(Object(l)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(l,e))}))}return t}function u(t,e){if(null==t)return{};var l,n,i=function(t,e){if(null==t)return{};var l,n,i={},a=Object.keys(t);for(n=0;n<a.length;n++)l=a[n],e.indexOf(l)>=0||(i[l]=t[l]);return i}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(n=0;n<a.length;n++)l=a[n],e.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(t,l)&&(i[l]=t[l])}return i}var o=n.createContext({}),d=function(t){var e=n.useContext(o),l=e;return t&&(l="function"==typeof t?t(e):r(r({},e),t)),l},s=function(t){var e=d(t.components);return n.createElement(o.Provider,{value:e},t.children)},k="mdxType",p={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},m=n.forwardRef((function(t,e){var l=t.components,i=t.mdxType,a=t.originalType,o=t.parentName,s=u(t,["components","mdxType","originalType","parentName"]),k=d(l),m=i,c=k["".concat(o,".").concat(m)]||k[m]||p[m]||a;return l?n.createElement(c,r(r({ref:e},s),{},{components:l})):n.createElement(c,r({ref:e},s))}));function c(t,e){var l=arguments,i=e&&e.mdxType;if("string"==typeof t||i){var a=l.length,r=new Array(a);r[0]=m;var u={};for(var o in e)hasOwnProperty.call(e,o)&&(u[o]=e[o]);u.originalType=t,u[k]="string"==typeof t?t:i,r[1]=u;for(var d=2;d<a;d++)r[d]=l[d];return n.createElement.apply(null,r)}return n.createElement.apply(null,l)}m.displayName="MDXCreateElement"},35883:(t,e,l)=>{l.r(e),l.d(e,{assets:()=>o,contentTitle:()=>r,default:()=>k,frontMatter:()=>a,metadata:()=>u,toc:()=>d});var n=l(87462),i=(l(67294),l(3905));const a={description:"GPS Bee kit",title:"GPS Bee kit",keywords:["Seeed_Elderly"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/GPS_Bee_kit",last_update:{date:"1/13/2023",author:"shuxu hu"}},r=void 0,u={unversionedId:"Seeed_Elderly/Bee/GPS_Bee_kit",id:"Seeed_Elderly/Bee/GPS_Bee_kit",title:"GPS Bee kit",description:"GPS Bee kit",source:"@site/docs/Seeed_Elderly/Bee/GPS_Bee_kit.md",sourceDirName:"Seeed_Elderly/Bee",slug:"/GPS_Bee_kit",permalink:"/GPS_Bee_kit",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Seeed_Elderly/Bee/GPS_Bee_kit.md",tags:[],version:"current",lastUpdatedBy:"shuxu hu",lastUpdatedAt:1673568e3,formattedLastUpdatedAt:"Jan 13, 2023",frontMatter:{description:"GPS Bee kit",title:"GPS Bee kit",keywords:["Seeed_Elderly"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/GPS_Bee_kit",last_update:{date:"1/13/2023",author:"shuxu hu"}},sidebar:"ProductSidebar",previous:{title:"Bluetooth V4.0 HM-11 BLE Module",permalink:"/Bluetooth_V4.0_HM_11_BLE_Module"},next:{title:"Grove - XBee Carrier",permalink:"/Grove-XBee_Carrier"}},o={},d=[{value:"Features",id:"features",level:2},{value:"Application Ideas",id:"application-ideas",level:2},{value:"Specification",id:"specification",level:2},{value:"Pin definition and Rating",id:"pin-definition-and-rating",level:3},{value:"Usage",id:"usage",level:2},{value:"SIM28 module Note:",id:"sim28-module-note",level:3},{value:"Version Tracker",id:"version-tracker",level:2},{value:"Schematic Online Viewer",id:"schematic-online-viewer",level:2},{value:"Resources",id:"resources",level:2},{value:"Tech Support",id:"tech-support",level:2}],s={toc:d};function k(t){let{components:e,...l}=t;return(0,i.kt)("wrapper",(0,n.Z)({},s,l,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/GPS_Bee_kit/img/Gpsbee_05.jpg",alt:null})),(0,i.kt)("p",null,"To make the GPS module be easily compatible with the existent shield , we use the same pin packaging as XBee wireless module.So you can put the GPS module into the existent shield which compatible with XBee. Also you can use the ",(0,i.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/depot/uartsbee-v4-p-688.html?cPath=109"},"UartSBee V4")," to connect the GPS module to USB port, run a software named u-center to analyze the GPS data and to reset the GPS module parameter. Put the GPS Bee on the ",(0,i.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/depot/uartsbee-v4-p-688.html?cPath=109"},"UartSBee V4")," , and connect the ",(0,i.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/depot/uartsbee-v4-p-688.html?cPath=109"},"UartSBee V4")," to the PC , open the u-center.exe , choose the UartSB port , then you can see the data that GPS module send back , and the software analyze them and show you the specific information ,like : time , speed , latitude and longitude, ASL and so on."),(0,i.kt)("p",null,"Kit is come with Mini Embedded Antenna U.FL for GPS\uff0cyou can also purchase another Antenna with lager size ",(0,i.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/depot/embedded-antenna-ufl-for-gps-p-564.html?cPath=84_89"},"Embedded Antenna U.FL for GPS"),". Compatible with all shields, breakout, boards with Xbee standard sockets."),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/depot/4-pin-254mm-to-20mm-female-jumper-wire-100mm-p-403.html"},"4 pin 2.54mm to 2.0mm Female jumper wire")," is also available for easy adaption!"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/gps-bee-kit-with-mini-embedded-antenna-p-560.html?cPath=144_145"},(0,i.kt)("img",{parentName:"a",src:"https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png",alt:null}))),(0,i.kt)("h2",{id:"features"},"Features"),(0,i.kt)("hr",null),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"50-channel u-blox 5 engine with over 1 million effective correlators"),(0,i.kt)("li",{parentName:"ul"},"<","1 second Time To First Fix for Hot and Aided Starts"),(0,i.kt)("li",{parentName:"ul"},"-160dBm SuperSense\xae acquisition and tracking sensitivity"),(0,i.kt)("li",{parentName:"ul"},"Accelerated startup at weak signals for modules with KickStart feature"),(0,i.kt)("li",{parentName:"ul"},"Supports AssistNow Online and AssistNow Offline A-GPS services; OMA SUPL compliant"),(0,i.kt)("li",{parentName:"ul"},"High immunity to jamming"),(0,i.kt)("li",{parentName:"ul"},"4 Hz position update rate"),(0,i.kt)("li",{parentName:"ul"},"Miniature 2.0mm pitch header, compatible with Xbee sockets"),(0,i.kt)("li",{parentName:"ul"},"UART, USB, DDC and SPI interfaces"),(0,i.kt)("li",{parentName:"ul"},"RoHS compliant")),(0,i.kt)("h2",{id:"application-ideas"},"Application Ideas"),(0,i.kt)("hr",null),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Any position system")),(0,i.kt)("h2",{id:"specification"},"Specification"),(0,i.kt)("hr",null),(0,i.kt)("table",null,(0,i.kt)("tr",null,(0,i.kt)("th",null," Item"),(0,i.kt)("th",null," Symbol"),(0,i.kt)("th",null," Min"),(0,i.kt)("th",null," Typ"),(0,i.kt)("th",null," Max"),(0,i.kt)("th",null," Unit")),(0,i.kt)("tr",null,(0,i.kt)("td",null," Power Supply"),(0,i.kt)("td",null," Vcc"),(0,i.kt)("td",null," 2.7"),(0,i.kt)("td",null," 3.0"),(0,i.kt)("td",null," 3.6"),(0,i.kt)("td",null," V")),(0,i.kt)("tr",null,(0,i.kt)("td",null," Peak Supply Current (Vcc=3.6V)"),(0,i.kt)("td",null),(0,i.kt)("td",null),(0,i.kt)("td",null),(0,i.kt)("td",null," 150"),(0,i.kt)("td",null," mA")),(0,i.kt)("tr",null,(0,i.kt)("td",null," Sustained Supply Current (Vcc=3.0V)"),(0,i.kt)("td",null),(0,i.kt)("td",null),(0,i.kt)("td",null),(0,i.kt)("td",null),(0,i.kt)("td",null)),(0,i.kt)("tr",null,(0,i.kt)("td",null," Acquisition"),(0,i.kt)("td",null),(0,i.kt)("td",null),(0,i.kt)("td",null," 102"),(0,i.kt)("td",null),(0,i.kt)("td",null," mA")),(0,i.kt)("tr",null,(0,i.kt)("td",null," Tracking"),(0,i.kt)("td",null),(0,i.kt)("td",null),(0,i.kt)("td",null," 44"),(0,i.kt)("td",null),(0,i.kt)("td",null," mA")),(0,i.kt)("tr",null,(0,i.kt)("td",null," Antenna Gain"),(0,i.kt)("td",null),(0,i.kt)("td",null),(0,i.kt)("td",null," 30"),(0,i.kt)("td",null),(0,i.kt)("td",null," dB")),(0,i.kt)("tr",null,(0,i.kt)("td",null," Operation temperature"),(0,i.kt)("td",null),(0,i.kt)("td",null," -40"),(0,i.kt)("td",null),(0,i.kt)("td",null," 85"),(0,i.kt)("td",null," \u2103"))),(0,i.kt)("h3",{id:"pin-definition-and-rating"},"Pin definition and Rating"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/GPS_Bee_kit/img/GPS.jpg",alt:null})),(0,i.kt)("table",null,(0,i.kt)("tr",null,(0,i.kt)("th",null," Pin"),(0,i.kt)("th",null," Name"),(0,i.kt)("th",null," Function")),(0,i.kt)("tr",null,(0,i.kt)("td",null," 1"),(0,i.kt)("td",null," Vcc"),(0,i.kt)("td",null," Power suppl, 2.7-3.6VDC")),(0,i.kt)("tr",null,(0,i.kt)("td",null," 2"),(0,i.kt)("td",null," TX"),(0,i.kt)("td",null," Serial Port 1")),(0,i.kt)("tr",null,(0,i.kt)("td",null," 3"),(0,i.kt)("td",null," RX"),(0,i.kt)("td",null," Serial Port 2")),(0,i.kt)("tr",null,(0,i.kt)("td",null," 4"),(0,i.kt)("td",null," NC"),(0,i.kt)("td",null," Reserved")),(0,i.kt)("tr",null,(0,i.kt)("td",null," 5"),(0,i.kt)("td",null," EX"),(0,i.kt)("td",null," Reserved")),(0,i.kt)("tr",null,(0,i.kt)("td",null," 6"),(0,i.kt)("td",null," NC"),(0,i.kt)("td",null," Reserved")),(0,i.kt)("tr",null,(0,i.kt)("td",null," 7"),(0,i.kt)("td",null," NC"),(0,i.kt)("td",null," Reserved")),(0,i.kt)("tr",null,(0,i.kt)("td",null," 8"),(0,i.kt)("td",null," NC"),(0,i.kt)("td",null," Reserved")),(0,i.kt)("tr",null,(0,i.kt)("td",null," 9"),(0,i.kt)("td",null," NC"),(0,i.kt)("td",null," Reserved")),(0,i.kt)("tr",null,(0,i.kt)("td",null," 10"),(0,i.kt)("td",null," GND"),(0,i.kt)("td",null," Ground")),(0,i.kt)("tr",null,(0,i.kt)("td",null," 11"),(0,i.kt)("td",null," NC"),(0,i.kt)("td",null," Reserved")),(0,i.kt)("tr",null,(0,i.kt)("td",null," 12"),(0,i.kt)("td",null," NC"),(0,i.kt)("td",null," Reserved")),(0,i.kt)("tr",null,(0,i.kt)("td",null," 13"),(0,i.kt)("td",null," NC"),(0,i.kt)("td",null," Reserved")),(0,i.kt)("tr",null,(0,i.kt)("td",null," 14"),(0,i.kt)("td",null," NC"),(0,i.kt)("td",null," Reserved")),(0,i.kt)("tr",null,(0,i.kt)("td",null," 15"),(0,i.kt)("td",null," TP"),(0,i.kt)("td",null," Configurable Pulse output (default 1Hz, max 4Hz)")),(0,i.kt)("tr",null,(0,i.kt)("td",null," 16"),(0,i.kt)("td",null," NC"),(0,i.kt)("td",null," Reserved")),(0,i.kt)("tr",null,(0,i.kt)("td",null," 17"),(0,i.kt)("td",null," NC"),(0,i.kt)("td",null," Reserved")),(0,i.kt)("tr",null,(0,i.kt)("td",null," 18"),(0,i.kt)("td",null," NC"),(0,i.kt)("td",null," Reserved")),(0,i.kt)("tr",null,(0,i.kt)("td",null," 19"),(0,i.kt)("td",null," SCL"),(0,i.kt)("td",null," I2C clock pin (configuration only)")),(0,i.kt)("tr",null,(0,i.kt)("td",null," 20"),(0,i.kt)("td",null," SDA"),(0,i.kt)("td",null," I2C data pin (configuration only)"))),(0,i.kt)("h2",{id:"usage"},"Usage"),(0,i.kt)("hr",null),(0,i.kt)("p",null,"1.General purpose GPS shield Benefiting from XBee compatible pinout and voltage, GPS Bee could re-use any Xbee socket, from Xbee shield to Xbee explore. For example, you may just mount the Xbee module to Arduino projects by a Xbee shield."),(0,i.kt)("ol",{start:2},(0,i.kt)("li",{parentName:"ol"})),(0,i.kt)("table",{border:"0"},(0,i.kt)("tr",null,(0,i.kt)("td",{width:"300"}," USB"),(0,i.kt)("td",{width:"300"}," ![](https://files.seeedstudio.com/wiki/GPS_Bee_kit/img/GPSBee-exam.jpg)"))),(0,i.kt)("table",{border:"0"},(0,i.kt)("tr",null,(0,i.kt)("td",{width:"300"}," **Bluetooth GPS module**",(0,i.kt)("p",null,"Work with UartSB as a USB port GPS module. You may use powerful Ucenter to get practical details easily. Or, add a Bluetooth module to get a Bluetooth GPS module for your projects.")),(0,i.kt)("td",{width:"300"}," ![](https://files.seeedstudio.com/wiki/GPS_Bee_kit/img/GPSBee-exam-2.jpg)"))),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/GPS_Bee_kit/img/GPSBee-exam-3.jpg",alt:null})),(0,i.kt)("p",null,"Click ",(0,i.kt)("a",{parentName:"p",href:"http://garden.seeedstudio.com/images/2/20/GPSBee-exam-3.jpg"},"here")," to see the legible and complete image."),(0,i.kt)("h3",{id:"sim28-module-note"},"SIM28 module Note:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"GPS Bee has change the module as SIM28 which the same footprint as origin version.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"You should use ",(0,i.kt)("a",{parentName:"p",href:"https://files.seeedstudio.com/wiki/GPS_Bee_kit/res/SIMCom_GPS_DEMO_V1.07.zip"},'"SIMCom GPS DEMO"')," tools to receive SIM28 module data.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Open SIMCom_GPS_DEMO tools, go to Module-",">","properties-",">","module-",">","select SIM28."))),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/GPS_Bee_kit/img/SIM28_module_select.jpg",alt:null})),(0,i.kt)("ol",{start:4},(0,i.kt)("li",{parentName:"ol"},"Open SIMCom_GPS_DEMO tools, go to Module-",">","connect. Select the serial port which the GPS module used.")),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/GPS_Bee_kit/img/SIM28_module_tools_pannel.jpg",alt:null})),(0,i.kt)("h2",{id:"version-tracker"},"Version Tracker"),(0,i.kt)("table",null,(0,i.kt)("tr",null,(0,i.kt)("th",null," Revision"),(0,i.kt)("th",null," Descriptions"),(0,i.kt)("th",null," Release")),(0,i.kt)("tr",null,(0,i.kt)("td",{width:"300"}," GPS Bee kit (with Mini Embedded Antenna)"),(0,i.kt)("td",{width:"500"}," -"),(0,i.kt)("td",{width:"200"}," Nov 08, 2009")),(0,i.kt)("tr",null,(0,i.kt)("td",null," v0.91"),(0,i.kt)("td",null," complement"),(0,i.kt)("td",null," Mar 15, 2011")),(0,i.kt)("tr",null,(0,i.kt)("td",null," v1.2"),(0,i.kt)("td",null," antenna"),(0,i.kt)("td",null," May 18,2012")),(0,i.kt)("tr",null,(0,i.kt)("td",null," v1.2"),(0,i.kt)("td",null,"  change the GPS module to SIM28"),(0,i.kt)("td",null," Dec 5,2013")),(0,i.kt)("tr",null,(0,i.kt)("td",null," v1.3"),(0,i.kt)("td",null," change the GPS module to SIM28, change the LED to the bottom side."),(0,i.kt)("td",null," Jan 10,2014"))),(0,i.kt)("h2",{id:"schematic-online-viewer"},"Schematic Online Viewer"),(0,i.kt)("div",{className:"altium-ecad-viewer","data-project-src":"https://files.seeedstudio.com/wiki/GPS_Bee_kit/res/GPS_Bee_v1.3_eagle.zip",style:{borderRadius:"0px 0px 4px 4px",height:500,borderStyle:"solid",borderWidth:1,borderColor:"rgb(241, 241, 241)",overflow:"hidden",maxWidth:1280,maxHeight:700,boxSizing:"border-box"}}),(0,i.kt)("h2",{id:"resources"},"Resources"),(0,i.kt)("hr",null),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/depot/datasheet/NEO-5x_Data_Sheet(GPS.G5-MS5-07025).pdf"},"NEO-5 DataSheet Of U-blox"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"https://files.seeedstudio.com/wiki/GPS_Bee_kit/res/NEO-6_DataSheet-GPS.G6-HW-09005-.pdf"},"NEO-6 DataSheet Of U-blox"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"https://files.seeedstudio.com/wiki/GPS_Bee_kit/res/LEA-6_NEO-6_HardwareIntegrationManual.pdf"},"LEA-6 NEO-6 HardwareIntegrationManual"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/depot/datasheet/u-center_5.07_Installer.rar"},"U-center"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"http://garden.seeedstudio.com/images/5/58/GPSBee_v1.2.pdf"},"GPSBee Schematic v1.2.pdf"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"https://files.seeedstudio.com/wiki/GPS_Bee_kit/res/GPSBee_v1.2_eagle.zip"},"GPSBee v1.2 Eagle file"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"https://files.seeedstudio.com/wiki/GPS_Bee_kit/res/SIM28_DATA_File.zip"},"SIM28_DATA_File"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"https://files.seeedstudio.com/wiki/GPS_Bee_kit/res/SIMCom_GPS_DEMO_V1.07.zip"},"SIMCom_GPS_DEMO_V1.07"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"https://files.seeedstudio.com/wiki/GPS_Bee_kit/res/GPS_Bee_v1.3_eagle.zip"},"GPSBee V1.3 Eagle File")))),(0,i.kt)("h2",{id:"tech-support"},"Tech Support"),(0,i.kt)("div",null,"Please submit any technical issue into our [forum](https://forum.seeedstudio.com/). ",(0,i.kt)("br",null),(0,i.kt)("p",{style:{textAlign:"center"}},(0,i.kt)("a",{href:"https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts",target:"_blank"},(0,i.kt)("img",{src:"https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg"})))))}k.isMDXComponent=!0}}]);