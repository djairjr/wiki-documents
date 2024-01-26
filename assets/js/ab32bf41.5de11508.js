"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[10040],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>g});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),d=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=d(e.components);return o.createElement(l.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=d(n),h=r,g=p["".concat(l,".").concat(h)]||p[h]||u[h]||a;return n?o.createElement(g,i(i({ref:t},c),{},{components:n})):o.createElement(g,i({ref:t},c))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:r,i[1]=s;for(var d=2;d<a;d++)i[d]=n[d];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}h.displayName="MDXCreateElement"},28312:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>d});var o=n(87462),r=(n(67294),n(3905));const a={description:"SenseCAP LoRaWAN Starter Kit Getting Started",title:"Get Started",image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/M2_Kit_Getting_Started",sidebar_position:0,last_update:{date:"9/12/2023",author:"KeweiLee"}},i="**Overview**",s={unversionedId:"Network/SenseCAP_LoRaWAN_Starter_Kit/M2_Kit_Getting_Started",id:"Network/SenseCAP_LoRaWAN_Starter_Kit/M2_Kit_Getting_Started",title:"Get Started",description:"SenseCAP LoRaWAN Starter Kit Getting Started",source:"@site/docs/Network/SenseCAP_LoRaWAN_Starter_Kit/M2_Kit_Getting_Started.md",sourceDirName:"Network/SenseCAP_LoRaWAN_Starter_Kit",slug:"/M2_Kit_Getting_Started",permalink:"/M2_Kit_Getting_Started",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Network/SenseCAP_LoRaWAN_Starter_Kit/M2_Kit_Getting_Started.md",tags:[],version:"current",lastUpdatedBy:"KeweiLee",lastUpdatedAt:1694476800,formattedLastUpdatedAt:"Sep 12, 2023",sidebarPosition:0,frontMatter:{description:"SenseCAP LoRaWAN Starter Kit Getting Started",title:"Get Started",image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/M2_Kit_Getting_Started",sidebar_position:0,last_update:{date:"9/12/2023",author:"KeweiLee"}},sidebar:"ProductSidebar",previous:{title:"Soil moisture monitor alarm system",permalink:"/K1111-Quick-Start-Guide"},next:{title:"LoRaWAN Using Wio-E5 on PlatformIO",permalink:"/platformio_wio_e5"}},l={},d=[{value:"<strong>LoRaWAN Basics</strong>",id:"lorawan-basics",level:2},{value:"<strong>SenseCAP LoRaWAN Starter Kit</strong>",id:"sensecap-lorawan-starter-kit",level:2},{value:"<strong>Preparation</strong>",id:"preparation",level:2},{value:"<strong>hardware</strong>",id:"hardware",level:3},{value:"<strong>Software</strong>",id:"software",level:3},{value:"<strong>Step 1 Power on and Connect to Internect</strong>",id:"step-1-power-on-and-connect-to-internect",level:2},{value:"<strong>Connect to ETH Cable</strong>",id:"connect-to-eth-cable",level:3},{value:"<strong>Connected to WIFI via Luci</strong>",id:"connected-to-wifi-via-luci",level:3},{value:"<strong>Step2 Connect Nodes</strong>",id:"step2-connect-nodes",level:2},{value:"<strong>Step 3 Scan QR Code of Grove-Wio-E5</strong>",id:"step-3-scan-qr-code-of-grove-wio-e5",level:2},{value:"<strong>Step 4 View data</strong>",id:"step-4-view-data",level:2}],c={toc:d},p="wrapper";function u(e){let{components:t,...n}=e;return(0,r.kt)(p,(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"overview"},(0,r.kt)("strong",{parentName:"h1"},"Overview")),(0,r.kt)("h2",{id:"lorawan-basics"},(0,r.kt)("strong",{parentName:"h2"},"LoRaWAN Basics")),(0,r.kt)("p",null,"LoRaWAN (Long Range Wide Area Network) is a low-power, long-range wireless communication protocol specifically designed for Internet of Things (IoT) applications. It provides long-distance and low-power communication capabilities for IoT devices.The key feature of LoRaWAN includes:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Long-range communication"),(0,r.kt)("li",{parentName:"ul"},"Low power consumption"),(0,r.kt)("li",{parentName:"ul"},"Deployed either publicly or privately"),(0,r.kt)("li",{parentName:"ul"},"large-scale device connectivity")),(0,r.kt)("p",null,"Due to these characteristics, it is widely applied in smart agriculture,smart city,environmental monitoring and other wireless sensing applications."),(0,r.kt)("div",{align:"center"},(0,r.kt)("img",{width:500,src:"https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_LoRaWAN_Starter_Kit/Getting_Started/1.png\n"})),(0,r.kt)("p",null,"To learn more about LoRaWAN, click here. "),(0,r.kt)("h2",{id:"sensecap-lorawan-starter-kit"},(0,r.kt)("strong",{parentName:"h2"},"SenseCAP LoRaWAN Starter Kit")),(0,r.kt)("p",null,"SenseCAP LoRaWAN Starter Kit is aim to facilitate users in rapidly acquiring and applying practical knowledge of LoRaWAN.The kit includesNM2 Multiple platform gateway,XIAOS3\uff0cGrove Wio-E5\uff0cTemperature & Humidity Sensor,Moisture Sensor, other expandable Grovesenables users to engage in hands-on learning of LoRaWAN architecture and empowers them to further develop their own projects."),(0,r.kt)("div",{align:"center"},(0,r.kt)("img",{width:600,src:"https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_LoRaWAN_Starter_Kit/Getting_Started/2.jpg"})),(0,r.kt)("p",null,"As a LoRaWAN Starter Kit,it includes all components of the LoRaWAN architecture, including nodes, gateways, and even SenseCAP cloud platform.The kit offers a comprehensive set of features that allow you to fully experience LoRaWAN technology. With this kit, you can engage in various practical activities such as distance testing, network testing, and project development. It provides a complete solution that enables you to delve into all aspects of LoRaWAN, validating its performance and functionality through real-world applications. Whether you are a beginner or an experienced developer, this kit caters to your learning and hands-on needs in the realm of LoRaWAN."),(0,r.kt)("div",{align:"center"},(0,r.kt)("img",{width:800,src:"https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_LoRaWAN_Starter_Kit/Getting_Started/3.png"})),(0,r.kt)("p",null,"Relevant Products:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"https://www.seeedstudio.com/catalogsearch/result/?q=S210x"},"S210x")),(0,r.kt)("td",{parentName:"tr",align:"left"},"A series of wireless LoRaWAN\xae industrial sensors.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html"},"S2100 datalogger")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Can connect to MODBUS-RTU RS485/Analog/GPIO sensors and transmit data from sensors to the LoRaWAN network")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"https://www.seeedstudio.com/SenseCAP-Multi-Platform-LoRaWAN-Indoor-Gateway-SX1302-EU868-p-5471.html"},"M2 Multi-Platform LoRaWAN Indoor Gateway")),(0,r.kt)("td",{parentName:"tr",align:"left"},"A standard LoRaWAN\xae gateway that supports connecting to different network servers")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"https://www.seeedstudio.com/LoRa-E5-Dev-Kit-p-4868.html"},"Wio-E5 Dev Kit")),(0,r.kt)("td",{parentName:"tr",align:"left"},"An easy-to-use compact development toolset for you to unlock the powerful performance of the Wio-E5 STM32WLE5JC LoRa module.")))),(0,r.kt)("h1",{id:"get-started"},(0,r.kt)("strong",{parentName:"h1"},"Get Started")),(0,r.kt)("h2",{id:"preparation"},(0,r.kt)("strong",{parentName:"h2"},"Preparation")),(0,r.kt)("h3",{id:"hardware"},(0,r.kt)("strong",{parentName:"h3"},"hardware")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Electronic Components")),(0,r.kt)("p",null,"The kit should include the following electronic components. Please check if they are complete.**",(0,r.kt)("br",{parentName:"p"}),"\n","**"),(0,r.kt)("div",{align:"center"},(0,r.kt)("img",{width:800,src:"https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_LoRaWAN_Starter_Kit/Getting_Started/4.jpg"})),(0,r.kt)("p",null,"Before starting the project, you need to solder the headers on the XIAO board and install the antenna."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Solder header")),(0,r.kt)("p",null,"XIAO ESP32S3 is shipped without pin headers by default, you need to prepare your own pin headers and solder it to the corresponding pins of XIAO so that you can connect to the expansion board or sensor."),(0,r.kt)("p",null,"Due to the miniature size of XIAO ESP32S3, please be careful when soldering headers, do not stick different pins together, and do not stick solder to the shield or other components. Otherwise, it may cause XIAO to short circuit or not work properly, and the consequences caused by this will be borne by the user."),(0,r.kt)("div",{align:"center"},(0,r.kt)("img",{width:800,src:"https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_LoRaWAN_Starter_Kit/Getting_Started/5.png"})),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Installation of antenna")),(0,r.kt)("p",null,'On the bottom left of the front of XIAO ESP32S3, there is a separate "WiFi/BT Antenna Connector". In order to get better WiFi/Bluetooth signal, you need to take out the antenna inside the package and install it on the connector.'),(0,r.kt)("p",null,"There is a little trick to the installation of the antenna, if you press down hard on it directly, you will find it very difficult to press and your fingers will hurt! The correct way to install the antenna is to put one side of the antenna connector into the connector block first, then press down a little on the other side, and the antenna will be installed."),(0,r.kt)("p",null,"Remove the antenna is also the case, do not use brute force to pull the antenna directly, one side of the force to lift, the antenna is easy to take off."),(0,r.kt)("div",{align:"center"},(0,r.kt)("img",{width:300,src:"https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_LoRaWAN_Starter_Kit/Getting_Started/6.png"})),(0,r.kt)("h3",{id:"software"},(0,r.kt)("strong",{parentName:"h3"},"Software")),(0,r.kt)("p",null,"You have the option to choose our built-in SenseCAP cloud platform or use a third-party LoRaWAN Network Server like The Things Network. We recommend using the SenseCAP cloud platform for the best user experience. Below are the relevant links."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Click to open the ",(0,r.kt)("a",{parentName:"li",href:"https://sensecap.seeed.cc/portal/#/login"},"SenseCAP Portal")," Web page")),(0,r.kt)("p",null,"Scan to down load SenseCAP Mate APP"),(0,r.kt)("div",{align:"center"},(0,r.kt)("img",{width:200,src:"https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_LoRaWAN_Starter_Kit/Getting_Started/7.png"})),(0,r.kt)("h1",{id:"quick--no-code-initiation-with-lorawan-starter-kit"},(0,r.kt)("strong",{parentName:"h1"},"Quick & No-code Initiation with LoRaWAN Starter Kit")),(0,r.kt)("div",{align:"center"},(0,r.kt)("img",{width:800,src:"https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_LoRaWAN_Starter_Kit/Getting_Started/8.png"})),(0,r.kt)("h2",{id:"step-1-power-on-and-connect-to-internect"},(0,r.kt)("strong",{parentName:"h2"},"Step 1 Power on and Connect to Internect")),(0,r.kt)("p",null,"The kit includes ",(0,r.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/SenseCAP-Multi-Platform-LoRaWAN-Indoor-Gateway-SX1302-EU868-p-5471.html"},"SenseCAP Multi-Platform LoRaWAN Indoor Gateway(SX1302) - EU868 - Seeed Studio")," which is a standard LoRaWAN\xae gateway that supports connecting to different network servers. It can be used not only for personal LoRa development but also in conjunction with industrial sensors. In this wiki, the datastream will go through SenseCAP Cloud. The default model running on this gateway is SenseCAP so you don't need to do extra setting, just power on the gateway and connect to Internet by ETH or WIFI."),(0,r.kt)("h3",{id:"connect-to-eth-cable"},(0,r.kt)("strong",{parentName:"h3"},"Connect to ETH Cable")),(0,r.kt)("p",null,"The fast way - Connect the Ethernet cable to the Ethernet port, and the indicator onthetop will show solid green if the gateway is successfully connected to the Internet."),(0,r.kt)("h3",{id:"connected-to-wifi-via-luci"},(0,r.kt)("strong",{parentName:"h3"},"Connected to WIFI via Luci")),(0,r.kt)("p",null,"There are two ways for users to login Luci configuration page.:"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Access via router")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Connect your gateway to a Ethernet cable, and connect your PCtothe same router.")),(0,r.kt)("div",{align:"center"},(0,r.kt)("img",{width:800,src:"https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_LoRaWAN_Starter_Kit/Getting_Started/9.png"})),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Note"),": Your PC and device should be connected to the same router/network."),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"Check the IP Address of your device on your router admin page."),(0,r.kt)("li",{parentName:"ol"},"Get your device Username and Password: You can find the Username and Password on your device label.")),(0,r.kt)("div",{align:"center"},(0,r.kt)("img",{width:300,src:"https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_LoRaWAN_Starter_Kit/Getting_Started/10.png"})),(0,r.kt)("ol",{start:4},(0,r.kt)("li",{parentName:"ol"},"Input the IP Address of your device in a browser to enter the Luci page. Then input your device username and password to login.")),(0,r.kt)("div",{align:"center"},(0,r.kt)("img",{width:600,src:"https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_LoRaWAN_Starter_Kit/Getting_Started/11.png"})),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Access via device AP hotspot")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Press the button for 5s until the blue indicator flashes slowly to enter the configuration mode."),(0,r.kt)("li",{parentName:"ol"},"AP hotspot name is SenseCAP","_","XXXXXX (6-figure MAC address),default password is 12345678; connect your computer to this AP hotspot.")),(0,r.kt)("div",{align:"center"},(0,r.kt)("img",{width:200,src:"https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_LoRaWAN_Starter_Kit/Getting_Started/12.png"})),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Get your device Username and Password You can find the Username and Password on your device label.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Input the IP Address (192.168.168.1) in your browser to enter the Local Console. Then input your device username and password, and click the Login button."))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Connect to WIFI")),(0,r.kt)("p",null,"Click on Network - Wireless"),(0,r.kt)("div",{align:"center"},(0,r.kt)("img",{width:600,src:"https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_LoRaWAN_Starter_Kit/Getting_Started/13.png"})),(0,r.kt)("p",null,"Click on the Scan button to scan the WIFI."),(0,r.kt)("div",{align:"center"},(0,r.kt)("img",{width:600,src:"https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_LoRaWAN_Starter_Kit/Getting_Started/14.png"})),(0,r.kt)("p",null,"Select your WI-FI to join the network."),(0,r.kt)("div",{align:"center"},(0,r.kt)("img",{width:600,src:"https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_LoRaWAN_Starter_Kit/Getting_Started/15.png"})),(0,r.kt)("p",null,"Submit the Wi-Fi password, and then click Submit and Save."),(0,r.kt)("div",{align:"center"},(0,r.kt)("img",{width:600,src:"https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_LoRaWAN_Starter_Kit/Getting_Started/16.png"})),(0,r.kt)("p",null,"Then click Save and Apply to apply your settings. "),(0,r.kt)("p",null,"The indicator on the top will show solid green if the gateway is successfully connected to the WIFI."),(0,r.kt)("h2",{id:"step2-connect-nodes"},(0,r.kt)("strong",{parentName:"h2"},"Step2 Connect Nodes")),(0,r.kt)("p",null,"Insert the Grove-Capacitive Soil Moisture Sensor, Temperature & Humidity Sensor & Grove-Wio-E5 Wireless module to XIAO Expansion Board."),(0,r.kt)("div",{align:"center"},(0,r.kt)("img",{width:400,src:"https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_LoRaWAN_Starter_Kit/Getting_Started/17.png"})),(0,r.kt)("h2",{id:"step-3-scan-qr-code-of-grove-wio-e5"},(0,r.kt)("strong",{parentName:"h2"},"Step 3 Scan QR Code of Grove-Wio-E5")),(0,r.kt)("p",null,"Open the SenseCAP Mate APP after downloading the corresponding version of the APP according to all the mobile systems you use. if it is your first time to use the SenseCAP platform, please register an account first."),(0,r.kt)("div",{align:"center"},(0,r.kt)("img",{width:300,src:"https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_LoRaWAN_Starter_Kit/Getting_Started/18.png"})),(0,r.kt)("div",{align:"center"},(0,r.kt)("img",{width:300,src:"https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_LoRaWAN_Starter_Kit/Getting_Started/19.png"})),(0,r.kt)("p",null,"Click the + in the upper right corner and select Add device to bind the Grove - Wio-E5."),(0,r.kt)("div",{align:"center"},(0,r.kt)("img",{width:100,src:"https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_LoRaWAN_Starter_Kit/Getting_Started/20.png"})),(0,r.kt)("p",null,"Align the box in the center of the camera with the QR code on the back of the Grove - Wio-E5 to scan the code to bind your kit. Please note that the QR code on the front of the Wio E5 should not be scanned."),(0,r.kt)("div",{align:"center"},(0,r.kt)("img",{width:300,src:"https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_LoRaWAN_Starter_Kit/Getting_Started/21.png"})),(0,r.kt)("h2",{id:"step-4-view-data"},(0,r.kt)("strong",{parentName:"h2"},"Step 4 View data")),(0,r.kt)("p",null,"After successful binding using the SenseCAP Mate App, you will see the sensor data displayed on the app."),(0,r.kt)("div",{align:"center"},(0,r.kt)("img",{width:300,src:"https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_LoRaWAN_Starter_Kit/Getting_Started/22.jpg"})),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"The SenseCAP Mate App will not automatically refresh the data information, you will need to manually scroll down on the sensor page to refresh the data. If you do not see new data for more than 10 minutes, you can try restarting the Wio Terminal by toggling down the side button once.")))}u.isMDXComponent=!0}}]);