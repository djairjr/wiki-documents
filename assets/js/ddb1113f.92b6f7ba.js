"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[78268],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>h});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=a.createContext({}),s=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},d=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,p=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),m=s(r),c=n,h=m["".concat(p,".").concat(c)]||m[c]||u[c]||i;return r?a.createElement(h,o(o({ref:t},d),{},{components:r})):a.createElement(h,o({ref:t},d))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=c;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[m]="string"==typeof e?e:n,o[1]=l;for(var s=2;s<i;s++)o[s]=r[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}c.displayName="MDXCreateElement"},15721:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var a=r(87462),n=(r(67294),r(3905));const i={description:"Grove - Infrared Temperature Sensor Array(AMG8833)",title:"Grove - Infrared Temperature Sensor Array(AMG8833)",keywords:["Grove"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Grove-Infrared_Temperature_Sensor_Array-AMG8833",last_update:{date:"1/4/2023",author:"jianjing Huang"}},o=void 0,l={unversionedId:"Sensor/Grove/Grove_Sensors/Temperature/Grove-Infrared_Temperature_Sensor_Array-AMG8833",id:"Sensor/Grove/Grove_Sensors/Temperature/Grove-Infrared_Temperature_Sensor_Array-AMG8833",title:"Grove - Infrared Temperature Sensor Array(AMG8833)",description:"Grove - Infrared Temperature Sensor Array(AMG8833)",source:"@site/docs/Sensor/Grove/Grove_Sensors/Temperature/Grove-Infrared_Temperature_Sensor_Array-AMG8833.md",sourceDirName:"Sensor/Grove/Grove_Sensors/Temperature",slug:"/Grove-Infrared_Temperature_Sensor_Array-AMG8833",permalink:"/Grove-Infrared_Temperature_Sensor_Array-AMG8833",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Sensor/Grove/Grove_Sensors/Temperature/Grove-Infrared_Temperature_Sensor_Array-AMG8833.md",tags:[],version:"current",lastUpdatedBy:"jianjing Huang",lastUpdatedAt:1672790400,formattedLastUpdatedAt:"Jan 4, 2023",frontMatter:{description:"Grove - Infrared Temperature Sensor Array(AMG8833)",title:"Grove - Infrared Temperature Sensor Array(AMG8833)",keywords:["Grove"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Grove-Infrared_Temperature_Sensor_Array-AMG8833",last_update:{date:"1/4/2023",author:"jianjing Huang"}},sidebar:"ProductSidebar",previous:{title:"Grove - Infrared Temperature Sensor",permalink:"/Grove-Infrared_Temperature_Sensor"},next:{title:"Grove-Temperature_Sensor",permalink:"/Grove-Temperature_Sensor"}},p={},s=[{value:"Features",id:"features",level:2},{value:"Specification",id:"specification",level:2},{value:"Typical Applications",id:"typical-applications",level:2},{value:"Hardware Overview",id:"hardware-overview",level:2},{value:"Pin Out",id:"pin-out",level:3},{value:"Schemaitc",id:"schemaitc",level:3},{value:"Platforms Supported",id:"platforms-supported",level:2},{value:"Getting Started",id:"getting-started",level:2},{value:"Play With Arduino",id:"play-with-arduino",level:3},{value:"Hardware",id:"hardware",level:4},{value:"Software",id:"software",level:4},{value:"Play with Raspberry",id:"play-with-raspberry",level:3},{value:"Hardware",id:"hardware-1",level:4},{value:"Software",id:"software-1",level:4},{value:"Schematic Online Viewer",id:"schematic-online-viewer",level:2},{value:"Resources",id:"resources",level:2},{value:"Project",id:"project",level:2},{value:"Tech Support",id:"tech-support",level:2},{value:"Upgradable to Industrial Sensors",id:"upgradable-to-industrial-sensors",level:2}],d={toc:s};function m(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("div",{align:"center"},(0,n.kt)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/Grove-Infrared_Temperature_Sensor_Array-AMG8833/img/main.jpg"})),(0,n.kt)("p",null,"The Grove - Infrared Temperature Sensor Array (AMG8833) is a high precision infrared array sensor which based on advanced MEMS technology. It can support temperature detection of two-dimensional area: 8 \xd7 8 (64 pixels) and maximum 7 meters detection distance."),(0,n.kt)("p",null,"We provide both Arduino and Raspberry Pi demo for this sensor. It will be a perfect module to make your own thermal camera."),(0,n.kt)("p",{style:{textAlign:"center"}},(0,n.kt)("a",{href:"https://www.seeedstudio.com/Grove-Infrared-Temperature-Sensor-Array-(AMG8833)-p-3185.html",target:"_blank"},(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png"}))),(0,n.kt)("h2",{id:"features"},"Features"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Temperature detection of two-dimensional area: 8 \xd7 8 (64 pixels)"),(0,n.kt)("li",{parentName:"ul"},"I2C output (capability of temperature value output)"),(0,n.kt)("li",{parentName:"ul"},"High precision"),(0,n.kt)("li",{parentName:"ul"},"Long detection distance")),(0,n.kt)("h2",{id:"specification"},"Specification"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Item"),(0,n.kt)("th",{parentName:"tr",align:null},"Value"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Operating Voltage"),(0,n.kt)("td",{parentName:"tr",align:null},"3.3V / 5V")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Temperature range of measuring object"),(0,n.kt)("td",{parentName:"tr",align:null},"0 \xb0C to 80 \xb0C +32 \xb0F to +176 \xb0F")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Operating temperature range"),(0,n.kt)("td",{parentName:"tr",align:null},"0 \xb0C to 80 \xb0C +32 \xb0F to +176 \xb0F")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Storage temperature range"),(0,n.kt)("td",{parentName:"tr",align:null},"\u221220 \xb0C to 80 \xb0C \u20134 \xb0F to +176 \xb0F")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Temperature accuracy"),(0,n.kt)("td",{parentName:"tr",align:null},"Typical \xb12.5 \xb0C \xb14.5 \xb0F")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Viewing angle"),(0,n.kt)("td",{parentName:"tr",align:null},"Typical 60 \xb0")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Optical axis gap"),(0,n.kt)("td",{parentName:"tr",align:null},"Within Typical \xb15.6 \xb0")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Number of pixel"),(0,n.kt)("td",{parentName:"tr",align:null},"64 (Vertical 8 \xd7 Horizontal 8 Matrix)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"External interface"),(0,n.kt)("td",{parentName:"tr",align:null},"I2C")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"I2C Address"),(0,n.kt)("td",{parentName:"tr",align:null},"0x68(default) ","\\","  0x69(optional)")))),(0,n.kt)("h2",{id:"typical-applications"},"Typical Applications"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"High function home appliances (microwaves and air-conditioners)"),(0,n.kt)("li",{parentName:"ul"},"Energy saving at office (air-conditioning/lighting control)"),(0,n.kt)("li",{parentName:"ul"},"Digital signage"),(0,n.kt)("li",{parentName:"ul"},"Automatic doors/elevators")),(0,n.kt)("h2",{id:"hardware-overview"},"Hardware Overview"),(0,n.kt)("h3",{id:"pin-out"},"Pin Out"),(0,n.kt)("div",{align:"center"},(0,n.kt)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/Grove-Infrared_Temperature_Sensor_Array-AMG8833/img/pin_out.jpg"})),(0,n.kt)("div",{align:"center"},(0,n.kt)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/Grove-Infrared_Temperature_Sensor_Array-AMG8833/img/pin_out_back.jpg"})),(0,n.kt)("h3",{id:"schemaitc"},"Schemaitc"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Power")),(0,n.kt)("div",{align:"center"},(0,n.kt)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/Grove-Infrared_Temperature_Sensor_Array-AMG8833/img/schematic_1.jpg"})),(0,n.kt)("p",null,"The typical voltage of AMG8833 is 3.3V, so we use the ",(0,n.kt)("a",{parentName:"p",href:"https://files.seeedstudio.com/wiki/Grove-Optical_Rotary_Encoder-TCUT1600X01/res/MP3120.pdf"},"XC6206P33")," chip to provide a stable 3.3V. The input of XC6206P33 ranges from 1.8V to 6.0V, so you can use this module with your Arduino both in 3.3V and 5V."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Bi-directional level shifter circuit")),(0,n.kt)("div",{align:"center"},(0,n.kt)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/Grove-Infrared_Temperature_Sensor_Array-AMG8833/img/schematic_2.jpg"})),(0,n.kt)("p",null,"This is a typical Bi-directional level shifter circuit to connect two different voltage section of an I2C bus. The I",(0,n.kt)("sup",null,"2"),"C bus of this sensor use 3.3V, if the I",(0,n.kt)("sup",null,"2"),"C bus of the Arduino use 5V, this circuit will be needed. In the schematic above, ",(0,n.kt)("strong",{parentName:"p"},"Q6")," and ",(0,n.kt)("strong",{parentName:"p"},"Q5")," are N-Channel MOSFET ",(0,n.kt)("a",{parentName:"p",href:"https://files.seeedstudio.com/wiki/Grove-I2C_High_Accuracy_Temperature_Sensor-MCP9808/res/2N7002A_datasheet.pdf"},"2N7002A"),", which act as a bidirectional switch. In order to better understand this part, you can refer to the ",(0,n.kt)("a",{parentName:"p",href:"https://files.seeedstudio.com/wiki/Grove-I2C_High_Accuracy_Temperature_Sensor-MCP9808/res/AN10441.pdf"},"AN10441")),(0,n.kt)("h2",{id:"platforms-supported"},"Platforms Supported"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Arduino"),(0,n.kt)("th",{parentName:"tr",align:null},"Raspberry Pi"),(0,n.kt)("th",{parentName:"tr",align:null}),(0,n.kt)("th",{parentName:"tr",align:null}),(0,n.kt)("th",{parentName:"tr",align:null}))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("div",{align:"center"},(0,n.kt)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg"}))),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("div",{align:"center"},(0,n.kt)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg"}))),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("div",{align:"center"},(0,n.kt)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg"}))),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("div",{align:"center"},(0,n.kt)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg"}))),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("div",{align:"center"},(0,n.kt)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg"})))))),(0,n.kt)("admonition",{type:"caution"},(0,n.kt)("p",{parentName:"admonition"},"The platforms mentioned above as supported is/are an indication of the module's software or theoritical compatibility. We only provide software library or code examples for Arduino platform in most cases. It is not possible to provide software library / demo code for all possible MCU platforms. Hence, users have to write their own software library.")),(0,n.kt)("h2",{id:"getting-started"},"Getting Started"),(0,n.kt)("h3",{id:"play-with-arduino"},"Play With Arduino"),(0,n.kt)("h4",{id:"hardware"},"Hardware"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Materials required")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Seeeduino V4.2"),(0,n.kt)("th",{parentName:"tr",align:null},"Base Shield"),(0,n.kt)("th",{parentName:"tr",align:null},"Infrared Temperature Sensor Array"),(0,n.kt)("th",{parentName:"tr",align:null},"2.8 TFT Touch Shield V2.0"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("div",{align:"center"},(0,n.kt)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg"}))),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("div",{align:"center"},(0,n.kt)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg"}))),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("div",{align:"center"},(0,n.kt)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/Grove-Infrared_Temperature_Sensor_Array-AMG8833/img/thumbnail.jpg"}))),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("div",{align:"center"},(0,n.kt)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/Grove-Infrared_Temperature_Sensor_Array-AMG8833/img/2.8touch%20shieldv2.jpg"})))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{href:"https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html",target:"_blank"},"Get One Now")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{href:"https://www.seeedstudio.com/Base-Shield-V2-p-1378.html",target:"_blank"},"Get One Now")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{href:"https://www.seeedstudio.com/Grove-Infrared-Temperature-Sensor-Array-(AMG8833)-p-3185.html",target:"_blank"},"Get One Now")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{href:"https://www.seeedstudio.com/2.8-TFT-Touch-Shield-V2.0-p-1286.html",target:"_blank"},"Get One Now"))))),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},(0,n.kt)("strong",{parentName:"p"},"1")," Please plug the USB cable gently, otherwise you may damage the port. Please use the USB cable with 4 wires inside, the 2 wires cable can't transfer data. If you are not sure about the wire you have, you can click ",(0,n.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/Micro-USB-Cable-48cm-p-1475.html"},"here")," to buy"),(0,n.kt)("p",{parentName:"admonition"},(0,n.kt)("strong",{parentName:"p"},"2")," Each Grove module comes with a Grove cable when you buy. In case you lose the Grove cable, you can click ",(0,n.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/Grove-Universal-4-Pin-Buckled-20cm-Cable-%285-PCs-pack%29-p-936.html"},"here")," to buy.")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Step 1.")," Connect the Grove - Infrared Temperature Sensor Array (AMG8833) to port ",(0,n.kt)("strong",{parentName:"p"},"I2C")," of Grove-Base Shield.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Step 2.")," Plug Grove - Base Shield into Seeeduino.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Step 3.")," Plug 2.8 TFT Touch Shield V2.0 into the Grove - Base Shield.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Step 4.")," Connect Seeeduino to PC via a USB cable."))),(0,n.kt)("div",{align:"center"},(0,n.kt)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/Grove-Infrared_Temperature_Sensor_Array-AMG8833/img/connect_1.jpg"})),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("pre",{parentName:"admonition"},(0,n.kt)("code",{parentName:"pre"},"    If we don't have Grove Base Shield, We also can directly connect this module to Seeeduino as below.\n"))),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Seeeduino"),(0,n.kt)("th",{parentName:"tr",align:null},"Grove Cable"),(0,n.kt)("th",{parentName:"tr",align:null},"Grove - Infrared Temperature Sensor Array (AMG8833)"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"GND"),(0,n.kt)("td",{parentName:"tr",align:null},"Black"),(0,n.kt)("td",{parentName:"tr",align:null},"GND")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"5V or 3.3V"),(0,n.kt)("td",{parentName:"tr",align:null},"Red"),(0,n.kt)("td",{parentName:"tr",align:null},"VCC")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"SDA"),(0,n.kt)("td",{parentName:"tr",align:null},"White"),(0,n.kt)("td",{parentName:"tr",align:null},"SDA")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"SCL"),(0,n.kt)("td",{parentName:"tr",align:null},"Yellow"),(0,n.kt)("td",{parentName:"tr",align:null},"SCL")))),(0,n.kt)("h4",{id:"software"},"Software"),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"If this is the first time you work with Arduino, we strongly recommend you to see ",(0,n.kt)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/Getting_Started_with_Arduino/"},"Getting Started with Arduino")," before the start.")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Step 1.")," Download the ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/Seeed-Studio/Seeed_AMG8833"},"Seeed_AMG8833")," Library from Github.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Step 2.")," Refer to ",(0,n.kt)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/How_to_install_Arduino_Library"},"How to install library")," to install library for Arduino.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Step 3.")," Restart the Arduino IDE. Open the example, you can open it in the following three ways\uff1a"),(0,n.kt)("ol",{parentName:"li"},(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Open it directly in the Arduino IDE via the path: ",(0,n.kt)("strong",{parentName:"p"},"File --\x3e Examples --\x3e Grove IR Matrix Temperature sensor AMG8833 --\x3e TFT_screen_demo"),"."),(0,n.kt)("div",{align:"center"},(0,n.kt)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/Grove-Infrared_Temperature_Sensor_Array-AMG8833/img/path_1.jpg"}))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Open it in your computer by click the ",(0,n.kt)("strong",{parentName:"p"},"TFT_screen_demo.ino")," which you can find in the folder ",(0,n.kt)("strong",{parentName:"p"},"XXXXArduino\\libraries\\Seeed_AMG8833-master\\examples\\TFT_screen_demo"),", ",(0,n.kt)("strong",{parentName:"p"},"XXXX")," is the location you installed the Arduino IDE."),(0,n.kt)("div",{align:"center"},(0,n.kt)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/Grove-Infrared_Temperature_Sensor_Array-AMG8833/img/path_2.jpg"}))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Or, you can just click the icon ",(0,n.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/copy.jpg",alt:null})," in upper right corner of the code block to copy the following code into a new sketch in the Arduino IDE."))))),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-C++"},'#include <stdint.h>\n#include <TFTv2.h>\n#include <SPI.h>\n\n#include "Seeed_AMG8833_driver.h"\n\n\nAMG8833 sensor;\n\n#define TFT_PIXELS_NUM   30\n\nvoid parse_int_status(u8* status)\n{\n    u8 val=0;\n    for(u32 i=0;i<8;i++)\n    {\n        if(status[i])\n        {\n            for(u32 j=0;j<8;j++)\n            {\n                if(status[i]&((1<<j)))\n                {\n                    Serial.print("pixel ");\n                    Serial.print(8*i+j+1);\n                    Serial.println("interrupt is generated!!!");\n                }\n            }\n        }\n    }\n}\n\nvoid print_status(u8* status)\n{\n    for(u32 i=0;i<8;i++)\n    {\n        Serial.print(status[i],HEX);\n        Serial.print("  ");\n\n    }\n    Serial.println("  ");\n}\n\n\n\n\nvoid setup()\n{\n    Serial.begin(115200);\n    sensor.init();\n    TFT_BL_ON;\n    /*2.8 TFT screen. url:https://www.seeedstudio.com/2.8-TFT-Touch-Shield-V2.0-p-1286.html*/\n    Tft.TFTinit();\n}\n\n\n\nvoid loop()\n{\n    u8 val=0;\n    float pixels_temp[PIXEL_NUM]={0};\n    u16 color[PIXEL_NUM]={0};\n    /*Read temperature*/\n    sensor.read_pixel_temperature(pixels_temp);\n    /*Different temperature correspond to different color.*/\n    for(u32 i=0;i<PIXEL_NUM;i++)\n    {\n        if(pixels_temp[i]<29)\n        {\n            color[i]=BLUE;\n        }\n        else if((pixels_temp[i]>=29)&&(pixels_temp[i]<30))\n        {\n            color[i]=GREEN;\n        }\n        else if((pixels_temp[i]>=30)&&(pixels_temp[i]<31))\n        {\n            color[i]=YELLOW;\n        }\n        else if((pixels_temp[i]>=31)&&(pixels_temp[i]<33))\n        {\n            color[i]=0xfd00;\n        }\n        else\n        {\n            color[i]=RED;\n        }\n    }\n    /*Use a TFT screen to display.*/\n    for(u32 i=0;i<PIXEL_NUM;i++)\n    {\n        Tft.fillScreen(TFT_PIXELS_NUM*(i%8),TFT_PIXELS_NUM*(i%8+1),TFT_PIXELS_NUM*(8-i/8),TFT_PIXELS_NUM*(7-i/8),color[i]);\n    }\n}\n\n')),(0,n.kt)("admonition",{type:"caution"},(0,n.kt)("pre",{parentName:"admonition"},(0,n.kt)("code",{parentName:"pre"},"    The library file may be updated. This code may not be applicable to the updated library file, so we recommend that you use the first two methods.\n"))),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Step 4.")," Upload the demo. If you do not know how to upload the code, please check ",(0,n.kt)("a",{parentName:"li",href:"https://wiki.seeedstudio.com/Upload_Code/"},"How to upload code"),".")),(0,n.kt)("admonition",{title:"success",type:"tip"},(0,n.kt)("pre",{parentName:"admonition"},(0,n.kt)("code",{parentName:"pre"},"If every thing goes well, you will see the TFT screen shows the temperature map.\n"))),(0,n.kt)("div",{align:"center"},(0,n.kt)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/Grove-Infrared_Temperature_Sensor_Array-AMG8833/img/result_arduino.gif"})),(0,n.kt)("h3",{id:"play-with-raspberry"},"Play with Raspberry"),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("pre",{parentName:"admonition"},(0,n.kt)("code",{parentName:"pre"},"    If this is the first time you play with a raspberry pi, please refer to the [Get start with a raspberry Pi](https://www.raspberrypi.org/documentation/).\n"))),(0,n.kt)("h4",{id:"hardware-1"},"Hardware"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Materials required")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Raspberry Pi"),(0,n.kt)("th",{parentName:"tr",align:null},"Grove Base Hat for Raspberry Pi"),(0,n.kt)("th",{parentName:"tr",align:null},"Infrared Temperature Sensor Array"),(0,n.kt)("th",{parentName:"tr",align:null},"5 inch 800x480 Capacitive TouchScreen"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("div",{align:"center"},(0,n.kt)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/rasp.jpg"}))),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("div",{align:"center"},(0,n.kt)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/Grove_Pi_hat.jpg"}))),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("div",{align:"center"},(0,n.kt)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/Grove-Infrared_Temperature_Sensor_Array-AMG8833/img/thumbnail.jpg"}))),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("div",{align:"center"},(0,n.kt)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/Grove-Infrared_Temperature_Sensor_Array-AMG8833/img/pi_display.jpg"})))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{href:"https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html",target:"_blank"},"Get One Now")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{href:"https://www.seeedstudio.com/Grove-Base-Hat-for-Raspberry-Pi-p-3184.html",target:"_blank"},"Get One Now")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{href:"https://www.seeedstudio.com/Grove-Infrared-Temperature-Sensor-Array-(AMG8833)-p-3185.html",target:"_blank"},"Get One Now")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{href:"https://www.seeedstudio.com/5-inch-800x480-Capacitive-TouchScreen-p-2923.html",target:"_blank"},"Get One Now"))))),(0,n.kt)("admonition",{type:"tip"},(0,n.kt)("p",{parentName:"admonition"},"If you do not have a Pi-Screen you can use the PC monitor, or you can use the ",(0,n.kt)("a",{parentName:"p",href:"https://www.realvnc.com/en/connect/download/viewer/"},"VNC Viewer")," to display the result remotely.")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Step 1.")," Connect the Grove - Infrared Temperature Sensor Array (AMG8833) to port ",(0,n.kt)("strong",{parentName:"p"},"I2C")," of Grove Base Hat for Raspberry Pi.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Step 2.")," Plug Grove Base Hat for Raspberry Pi into Raspberry Pi.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Step 3.")," Connect the 5 inch 800x480 Capacitive TouchScreen with the Raspberry Pi via the HDMI cable.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Step 4.")," Connect Raspberry Pi to PC via a micro-USB cable, power the 5 inch 800x480 Capacitive TouchScreen via another micro-USB cable."))),(0,n.kt)("div",{align:"center"},(0,n.kt)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/Grove-Infrared_Temperature_Sensor_Array-AMG8833/img/connect_2.jpg"})),(0,n.kt)("h4",{id:"software-1"},"Software"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Step 1.")," Open the I2C interface for your raspberry pi. You can open a terminal and tap the following command.")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},"sudo raspi-config\n")),(0,n.kt)("div",{align:"center"},(0,n.kt)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/Grove-Infrared_Temperature_Sensor_Array-AMG8833/img/I2C_1.png"})),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Step 2.")," When you see the picture above, choose ",(0,n.kt)("strong",{parentName:"li"},"Interfacing Options"),", then choose ",(0,n.kt)("strong",{parentName:"li"},"I2C")," to enable the I2C interface.")),(0,n.kt)("div",{align:"center"},(0,n.kt)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/Grove-Infrared_Temperature_Sensor_Array-AMG8833/img/I2C_2.jpg"})),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Step 3.")," When you finish, you can use the following command to check.")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},"sudo i2cdetect -y 1\n")),(0,n.kt)("div",{align:"center"},(0,n.kt)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/Grove-Infrared_Temperature_Sensor_Array-AMG8833/img/I2C_3.jpg"})),(0,n.kt)("p",null,"You can see the I2C address, which means the raspberry has detected the sensor. If not, please do step1~3 again. Ok, let's move on."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Step 4.")," Tap the following commands in the terminal to install related dependencies.")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},"sudo apt-get update\nsudo apt-get install -y build-essential python-pip python-dev python-smbus git\nsudo apt-get install -y python-scipy python-pygame\nsudo pip install colour\n")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Step 5.")," Download the Seeed AMG8833 Python Library.")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},"git clone https://github.com/Seeed-Studio/Seeed_AMG8833_Raspberry_Python.git\n")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Step 6.")," Go into the AMG8833 folder, and run the demo.")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},"pi@raspberrypi:~ $ cd Seeed_AMG8833_Raspberry_Python/\npi@raspberrypi:~/Seeed_AMG8833_Raspberry_Python $ ls\ndriver.py   README.md         Seeed_AMG8833.pyc\ndriver.pyc  Seeed_AMG8833.py  thermal_cam.py\npi@raspberrypi:~/Seeed_AMG8833_Raspberry_Python $ python thermal_cam.py\n")),(0,n.kt)("admonition",{title:"success",type:"tip"},(0,n.kt)("p",{parentName:"admonition"},"If everthing goes well, you will see.")),(0,n.kt)("div",{align:"center"},(0,n.kt)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/Grove-Infrared_Temperature_Sensor_Array-AMG8833/img/result_pi.gif"})),(0,n.kt)("h2",{id:"schematic-online-viewer"},"Schematic Online Viewer"),(0,n.kt)("div",{className:"altium-ecad-viewer","data-project-src":"https://files.seeedstudio.com/wiki/Grove-Infrared_Temperature_Sensor_Array-AMG8833/res/Grove%20-%20Infrared%20Array%20Sensor%20(AMG8833).zip",style:{borderRadius:"0px 0px 4px 4px",height:500,borderStyle:"solid",borderWidth:1,borderColor:"rgb(241, 241, 241)",overflow:"hidden",maxWidth:1280,maxHeight:700,boxSizing:"border-box"}}),(0,n.kt)("h2",{id:"resources"},"Resources"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"[Zip]")," ",(0,n.kt)("a",{parentName:"p",href:"https://files.seeedstudio.com/wiki/Grove-Infrared_Temperature_Sensor_Array-AMG8833/res/Grove%20-%20Infrared%20Array%20Sensor%20(AMG8833).zip"},"Grove - Infrared Temperature Sensor Array (AMG8833) Eagle Files"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"[Zip]")," ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/Seeed-Studio/Seeed_AMG8833/archive/master.zip"},"Seeed AMG8833 Arduino Library"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"[Zip]")," ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/Seeed-Studio/Seeed_AMG8833_Raspberry_Python/archive/master.zip"},"Seeed AMG8833 Python Library"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"[PDF]")," ",(0,n.kt)("a",{parentName:"p",href:"https://files.seeedstudio.com/wiki/Grove-Infrared_Temperature_Sensor_Array-AMG8833/res/AMG88.pdf"},"AMG8833 DATASHEET"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"[PDF]")," ",(0,n.kt)("a",{parentName:"p",href:"https://files.seeedstudio.com/wiki/Grove-Infrared_Temperature_Sensor_Array-AMG8833/res/XC6206.pdf"},"XC6206 DATASHEET")))),(0,n.kt)("h2",{id:"project"},"Project"),(0,n.kt)("p",null,"This is the introduction Video of this product, simple demos, you can have a try."),(0,n.kt)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/NG0E-qs8zgQ?rel=0",frameborder:"0",allow:"autoplay; encrypted-media",allowfullscreen:!0}),(0,n.kt)("h2",{id:"tech-support"},"Tech Support"),(0,n.kt)("p",null,"Please do not hesitate to submit the issue into our ",(0,n.kt)("a",{parentName:"p",href:"https://forum.seeedstudio.com/"},"forum"),"."),(0,n.kt)("h2",{id:"upgradable-to-industrial-sensors"},"Upgradable to Industrial Sensors"),(0,n.kt)("p",null,"With the SenseCAP ",(0,n.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html"},"S2110 controller")," and ",(0,n.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html"},"S2100 data logger"),", you can easily turn the Grove into a LoRaWAN\xae sensor. Seeed not only helps you with prototyping but also offers you the possibility to expand your project with the SenseCAP series of robust ",(0,n.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&categories=SenseCAP&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP"},"industrial sensors"),"."),(0,n.kt)("p",null,"The IP66 housing, Bluetooth configuration, compatibility with the global LoRaWAN\xae network, built-in 19 Ah battery, and powerful support from APP make the ",(0,n.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/catalogsearch/result/?q=S21&categories=SenseCAP&product_module=Device"},"SenseCAP S210x")," the best choice for industrial applications. The series includes sensors for soil moisture, air temperature and humidity, light intensity, CO2, EC, and an 8-in-1 weather station. Try the latest SenseCAP S210x for your next successful industrial project."),(0,n.kt)("div",{align:"center"},(0,n.kt)("a",{href:"https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP",target:"_blank"},(0,n.kt)("img",{width:800,src:"https://files.seeedstudio.com/wiki/K1100_overview/sensecap.png"}))))}m.isMDXComponent=!0}}]);