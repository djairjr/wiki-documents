"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[77899],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(n),c=r,h=d["".concat(s,".").concat(c)]||d[c]||m[c]||i;return n?a.createElement(h,o(o({ref:t},u),{},{components:n})):a.createElement(h,o({ref:t},u))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},64468:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const i={description:"Grove - Laser PM2.5 Sensor (HM3301)",title:"Grove - Laser PM2.5 Sensor (HM3301)",keywords:["Grove Grove_Sensors Air_Quality"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Grove-Laser_PM2.5_Sensor-HM3301",last_update:{date:"1/20/2023",author:"jianjing huang"}},o=void 0,l={unversionedId:"Sensor/Grove/Grove_Sensors/Air_Quality/Grove-Laser_PM2.5_Sensor-HM3301",id:"Sensor/Grove/Grove_Sensors/Air_Quality/Grove-Laser_PM2.5_Sensor-HM3301",title:"Grove - Laser PM2.5 Sensor (HM3301)",description:"Grove - Laser PM2.5 Sensor (HM3301)",source:"@site/docs/Sensor/Grove/Grove_Sensors/Air_Quality/Grove-Laser_PM2.5_Sensor-HM3301.md",sourceDirName:"Sensor/Grove/Grove_Sensors/Air_Quality",slug:"/Grove-Laser_PM2.5_Sensor-HM3301",permalink:"/Grove-Laser_PM2.5_Sensor-HM3301",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Sensor/Grove/Grove_Sensors/Air_Quality/Grove-Laser_PM2.5_Sensor-HM3301.md",tags:[],version:"current",lastUpdatedBy:"jianjing huang",lastUpdatedAt:1674172800,formattedLastUpdatedAt:"Jan 20, 2023",frontMatter:{description:"Grove - Laser PM2.5 Sensor (HM3301)",title:"Grove - Laser PM2.5 Sensor (HM3301)",keywords:["Grove Grove_Sensors Air_Quality"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Grove-Laser_PM2.5_Sensor-HM3301",last_update:{date:"1/20/2023",author:"jianjing huang"}},sidebar:"ProductSidebar",previous:{title:"Grove - Adjustable PIR Motion Sensor",permalink:"/Grove-Adjustable_PIR_Motion_Sensor"},next:{title:"Grove - Dust Sensor",permalink:"/Grove-Dust_Sensor"}},s={},p=[{value:"Features",id:"features",level:2},{value:"Specification",id:"specification",level:2},{value:"Typical applications",id:"typical-applications",level:2},{value:"Hardware Overview",id:"hardware-overview",level:2},{value:"Pin Out",id:"pin-out",level:3},{value:"Working Principle",id:"working-principle",level:2},{value:"Platforms Supported",id:"platforms-supported",level:2},{value:"Getting Started",id:"getting-started",level:2},{value:"Play With Arduino",id:"play-with-arduino",level:3},{value:"Hardware",id:"hardware",level:4},{value:"Software",id:"software",level:4},{value:"Schematic Online Viewer",id:"schematic-online-viewer",level:2},{value:"Resources",id:"resources",level:2},{value:"Projects",id:"projects",level:2},{value:"Tech Support &amp; Product Discussion",id:"tech-support--product-discussion",level:2},{value:"Upgradable to Industrial Sensors",id:"upgradable-to-industrial-sensors",level:2}],u={toc:p};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Grove-Laser_PM2.5_Sensor-HM3301/img/main.jpg",alt:null})),(0,r.kt)("p",null,"The Grove - Laser PM2.5 Sensor (HM3301) is a new generation of laser dust detection sensor, which is used for continuous and real-time detection of dust in the air."),(0,r.kt)("p",null,"Different from the pumping dust detection sensor, the HM-3301 innovatively uses fan blades to drive air, and the air flowing through the detection chamber is used as a test sample to perform real-time and continuous test on dust of different particle sizes in the air."),(0,r.kt)("p",null,"This module is suitable for dust detectors, intelligent air purifiers, intelligent air conditioners, intelligent ventilation fans, air quality testing, haze meters, environmental monitoring and relative products and applications"),(0,r.kt)("iframe",{width:"800",height:"450",src:"https://www.youtube.com/embed/zQj8RRJcZsk",frameborder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}),(0,r.kt)("p",{style:{textAlign:"center"}},(0,r.kt)("a",{href:"https://www.seeedstudio.com/Grove-Laser-PM2-5-Sensor-HM3301.html",target:"_blank"},(0,r.kt)("img",{src:"https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png"}))),(0,r.kt)("h2",{id:"features"},"Features"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"High sensitivity on dust particles of 0.3 \u03bcm or greater"),(0,r.kt)("li",{parentName:"ul"},"Real-time & continuous detection of dust concentration in the air"),(0,r.kt)("li",{parentName:"ul"},"Based on laser light scattering technology, readings are accurate, stable, and consistent"),(0,r.kt)("li",{parentName:"ul"},"Low noise"),(0,r.kt)("li",{parentName:"ul"},"Ultra-low power consumption")),(0,r.kt)("h2",{id:"specification"},"Specification"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Item"),(0,r.kt)("th",{parentName:"tr",align:null},"Value"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Operating Voltage"),(0,r.kt)("td",{parentName:"tr",align:null},"3.3V / 5V")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Operating temperature"),(0,r.kt)("td",{parentName:"tr",align:null},"-10\uff5e60\u2103")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Operating humidity"),(0,r.kt)("td",{parentName:"tr",align:null},"10%\uff5e90%RH (non-condensing)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Partical size"),(0,r.kt)("td",{parentName:"tr",align:null},"3 channels-- 2.5\xb5m, 5\xb5m, 10\xb5m")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Range",(0,r.kt)("br",null),"(PM2.5 standard value)"),(0,r.kt)("td",{parentName:"tr",align:null},"1~500\xb5g/ m",(0,r.kt)("sup",null,"3")," (Effective range)",(0,r.kt)("br",null),"1000 \xb5g/ m",(0,r.kt)("sup",null,"3")," (Maximum range)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Resolution"),(0,r.kt)("td",{parentName:"tr",align:null},"Concentration: 1\xb5g/ m",(0,r.kt)("sup",null,"3")," ",(0,r.kt)("br",null),"Counting concentration: 1s/0.1L")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Stability time"),(0,r.kt)("td",{parentName:"tr",align:null},"30 seconds after power-on")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Interface"),(0,r.kt)("td",{parentName:"tr",align:null},"I2C")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"I2C address"),(0,r.kt)("td",{parentName:"tr",align:null},"0x40")))),(0,r.kt)("h2",{id:"typical-applications"},"Typical applications"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Air purifier / air conditioner"),(0,r.kt)("li",{parentName:"ul"},"Air quality testing equipment"),(0,r.kt)("li",{parentName:"ul"},"Industrial PM value analysis"),(0,r.kt)("li",{parentName:"ul"},"Dust and smoke detection and analysis"),(0,r.kt)("li",{parentName:"ul"},"Real-time PM2.5, PM10, TSP detector"),(0,r.kt)("li",{parentName:"ul"},"Multichannel particle counter"),(0,r.kt)("li",{parentName:"ul"},"Environmental testing equipment")),(0,r.kt)("h2",{id:"hardware-overview"},"Hardware Overview"),(0,r.kt)("h3",{id:"pin-out"},"Pin Out"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Grove-Laser_PM2.5_Sensor-HM3301/img/pin_out.jpg",alt:null})),(0,r.kt)("h2",{id:"working-principle"},"Working Principle"),(0,r.kt)("p",null,"The HM-3301 Dust Sensor is based on the advanced Mie scattering theory. When light passes through particles with quantity same as or larger than wavelength of the light, it will produce light scattering. The scattered light is concentrated to a highly sensitive photodiode, which is then amplified and analyzed by a circuit. With specific mathematical model and algorithm, the count concentration and mass concentration of the dust particles is obtained."),(0,r.kt)("p",null,"The HM-3301 dust sensor is composed of main components such as a fan, an infrared laser source, a condensing mirror, a photosensitive tube, a signal amplifying circuit and a signal sorting circuit."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Grove-Laser_PM2.5_Sensor-HM3301/img/principle.jpg",alt:"HM-3301 Module structure diagram",title:"HM-3301 Module structure diagram"})),(0,r.kt)("h2",{id:"platforms-supported"},"Platforms Supported"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Arduino"),(0,r.kt)("th",{parentName:"tr",align:null},"Raspberry Pi"),(0,r.kt)("th",{parentName:"tr",align:null}),(0,r.kt)("th",{parentName:"tr",align:null}),(0,r.kt)("th",{parentName:"tr",align:null}))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg",alt:null})),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg",alt:null})),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg",alt:null})),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg",alt:null})),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg",alt:null}))))),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"The platforms mentioned above as supported is/are an indication of the module's software or theoritical compatibility. We only provide software library or code examples for Arduino platform in most cases. It is not possible to provide software library / demo code for all possible MCU platforms. Hence, users have to write their own software library.")),(0,r.kt)("h2",{id:"getting-started"},"Getting Started"),(0,r.kt)("h3",{id:"play-with-arduino"},"Play With Arduino"),(0,r.kt)("h4",{id:"hardware"},"Hardware"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Materials required")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Seeeduino V4.2"),(0,r.kt)("th",{parentName:"tr",align:null},"Base Shield"),(0,r.kt)("th",{parentName:"tr",align:null},"Grove - Laser PM2.5 Sensor (HM3301)"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg",alt:"enter image description here"})),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg",alt:"enter image description here"})),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/Grove-Laser_PM2.5_Sensor-HM3301/img/thumbnail.jpg",alt:"enter image description here"}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{href:"https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html",target:"_blank"},"Get One Now")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{href:"https://www.seeedstudio.com/Base-Shield-V2-p-1378.html",target:"_blank"},"Get One Now")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{href:"https://www.seeedstudio.com/Grove-Step-Counter-(BMA456)-p-3189.html",target:"_blank"},"Get One Now"))))),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("strong",{parentName:"p"},"1")," Please plug the USB cable gently, otherwise you may damage the port. Please use the USB cable with 4 wires inside, the 2 wires cable can't transfer data. If you are not sure about the wire you have, you can click ",(0,r.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/Micro-USB-Cable-48cm-p-1475.html"},"here")," to buy"),(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("strong",{parentName:"p"},"2")," Each Grove module comes with a Grove cable when you buy. In case you lose the Grove cable, you can click ",(0,r.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/Grove-Universal-4-Pin-Buckled-20cm-Cable-%285-PCs-pack%29-p-936.html"},"here")," to buy.")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Step 1.")," Connect the Grove - Laser PM2.5 Sensor (HM3301) to port ",(0,r.kt)("strong",{parentName:"p"},"I^2^C")," of Grove-Base Shield.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Step 2.")," Plug Grove - Base Shield into Seeeduino.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Step 3.")," Connect Seeeduino to PC via a USB cable."))),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Grove-Laser_PM2.5_Sensor-HM3301/img/connect.jpg",alt:null})),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"If we don't have Grove Base Shield, We also can directly connect this module to Seeeduino as below.")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Seeeduino"),(0,r.kt)("th",{parentName:"tr",align:null},"Grove Cable"),(0,r.kt)("th",{parentName:"tr",align:null},"Grove - Laser PM2.5 Sensor (HM3301)"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"GND"),(0,r.kt)("td",{parentName:"tr",align:null},"Black"),(0,r.kt)("td",{parentName:"tr",align:null},"GND")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"5V or 3.3V"),(0,r.kt)("td",{parentName:"tr",align:null},"Red"),(0,r.kt)("td",{parentName:"tr",align:null},"VCC")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"SDA"),(0,r.kt)("td",{parentName:"tr",align:null},"White"),(0,r.kt)("td",{parentName:"tr",align:null},"SDA")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"SCL"),(0,r.kt)("td",{parentName:"tr",align:null},"Yellow"),(0,r.kt)("td",{parentName:"tr",align:null},"SCL")))),(0,r.kt)("h4",{id:"software"},"Software"),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"If this is the first time you work with Arduino, we strongly recommend you to see ",(0,r.kt)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/Getting_Started_with_Arduino/"},"Getting Started with Arduino")," before the start.")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Step 1.")," Download the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/Seeed-Studio/Seeed_PM2_5_sensor_HM3301"},"Seeed_PM2_5_sensor_HM3301")," Library from Github.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Step 2.")," Refer to ",(0,r.kt)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/How_to_install_Arduino_Library"},"How to install library")," to install library for Arduino.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Step 3.")," Restart the Arduino IDE. Open the example, you can open it in the following three ways\uff1a"),(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Open it directly in the Arduino IDE via the path: ",(0,r.kt)("strong",{parentName:"p"},"File --\x3e Examples --\x3e PM2.5 sensor --\x3e basic_demo"),".\n",(0,r.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Grove-Laser_PM2.5_Sensor-HM3301/img/path1.jpg",alt:null}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Open it in your computer by click the ",(0,r.kt)("strong",{parentName:"p"},"basic_demo.ino")," which you can find in the folder ",(0,r.kt)("strong",{parentName:"p"},"XXXX\\Arduino\\libraries\\Seeed_PM2_5_sensor_HM3301-master\\examples\\basic_demo"),", ",(0,r.kt)("strong",{parentName:"p"},"XXXX")," is the location you installed the Arduino IDE.\n",(0,r.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Grove-Laser_PM2.5_Sensor-HM3301/img/path2.jpg",alt:null}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Or, you can just click the icon ",(0,r.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/copy.jpg",alt:null})," in upper right corner of the code block to copy the following code into a new sketch in the Arduino IDE."))))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-C++"},'\n#include "Seeed_HM330X.h"\n\n#ifdef  ARDUINO_SAMD_VARIANT_COMPLIANCE\n  #define SERIAL SerialUSB\n#else\n  #define SERIAL Serial\n#endif\n\n\nHM330X sensor;\nu8 buf[30];\n\n\nconst char *str[]={"sensor num: ","PM1.0 concentration(CF=1,Standard particulate matter,unit:ug/m3): ",\n                    "PM2.5 concentration(CF=1,Standard particulate matter,unit:ug/m3): ",\n                    "PM10 concentration(CF=1,Standard particulate matter,unit:ug/m3): ",\n                    "PM1.0 concentration(Atmospheric environment,unit:ug/m3): ",\n                    "PM2.5 concentration(Atmospheric environment,unit:ug/m3): ",\n                    "PM10 concentration(Atmospheric environment,unit:ug/m3): ",\n                    };\n\nerr_t print_result(const char* str,u16 value)\n{\n    if(NULL==str)\n        return ERROR_PARAM;\n    SERIAL.print(str);\n    SERIAL.println(value);\n    return NO_ERROR;\n}\n\n/*parse buf with 29 u8-data*/\nerr_t parse_result(u8 *data)\n{\n    u16 value=0;\n    err_t NO_ERROR;\n    if(NULL==data)\n        return ERROR_PARAM;\n    for(int i=1;i<8;i++)\n    {\n         value = (u16)data[i*2]<<8|data[i*2+1];\n         print_result(str[i-1],value);\n\n    }\n}\n\nerr_t parse_result_value(u8 *data)\n{\n    if(NULL==data)\n        return ERROR_PARAM;\n    for(int i=0;i<28;i++)\n    {\n        SERIAL.print(data[i],HEX);\n        SERIAL.print("  ");\n        if((0==(i)%5)||(0==i))\n        {\n            SERIAL.println(" ");\n        }\n    }\n    u8 sum=0;\n    for(int i=0;i<28;i++)\n    {\n        sum+=data[i];\n    }\n    if(sum!=data[28])\n    {\n        SERIAL.println("wrong checkSum!!!!");\n    }\n    SERIAL.println(" ");\n    SERIAL.println(" ");\n    return NO_ERROR;\n}\n\n\n/*30s*/\nvoid setup()\n{\n    SERIAL.begin(115200);\n    delay(100);\n    SERIAL.println("Serial start");\n    if(sensor.init())\n    {\n        SERIAL.println("HM330X init failed!!!");\n        while(1);\n    }\n    \n}\n\n\n\nvoid loop()\n{\n    if(sensor.read_sensor_value(buf,29))\n    {\n        SERIAL.println("HM330X read result failed!!!");\n    }\n    parse_result_value(buf);\n    parse_result(buf);\n    SERIAL.println(" ");\n    SERIAL.println(" ");\n    SERIAL.println(" ");\n    delay(5000);\n}\n\n')),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"The library file may be updated. This code may not be applicable to the updated library file, so we recommend that you use the first two methods.")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Step 4.")," Upload the demo. If you do not know how to upload the code, please check ",(0,r.kt)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/Upload_Code/"},"How to upload code"),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Step 5.")," Open the ",(0,r.kt)("strong",{parentName:"p"},"Serial Monitor")," of Arduino IDE by click ",(0,r.kt)("strong",{parentName:"p"},"Tool-> Serial Monitor"),". Or tap the ",(0,r.kt)("inlineCode",{parentName:"p"},"ctrl"),"+",(0,r.kt)("inlineCode",{parentName:"p"},"shift"),"+",(0,r.kt)("inlineCode",{parentName:"p"},"m")," key at the same time. Set the baud rate to ",(0,r.kt)("strong",{parentName:"p"},"115200"),"."))),(0,r.kt)("admonition",{title:"success",type:"tip"},(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre"},"    If every thing goes well, when you open the Serial Monitor it may show as below:\n"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c"},"Serial start\n0   \nFF  0  0  0  2D   \n0  3F  0  45  0   \n22  0  32  0  3B   \n0  0  0  0  0   \n0  0  0  0  0   \n0  0   \n \nsensor num: 0\nPM1.0 concentration(CF=1,Standard particulate matter,unit:ug/m3): 45\nPM2.5 concentration(CF=1,Standard particulate matter,unit:ug/m3): 63\nPM10 concentration(CF=1,Standard particulate matter,unit:ug/m3): 69\nPM1.0 concentration(Atmospheric environment,unit:ug/m3): 34\nPM2.5 concentration(Atmospheric environment,unit:ug/m3): 50\nPM10 concentration(Atmospheric environment,unit:ug/m3): 59\n")),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"The ",(0,r.kt)("strong",{parentName:"p"},"standard particulate matter mass concentration value")," refers to the mass concentration value obtained by density conversion of industrial metal particles as equivalent particles, and is suitable for use in industrial production workshops and the like. The ",(0,r.kt)("strong",{parentName:"p"},"concentration of particulate matter in the atmospheric environment")," is converted by the density of the main pollutants in the air as equivalent particles, and is suitable for ordinary indoor and outdoor atmospheric environments. So you can see that there are two sets of data above.")),(0,r.kt)("h2",{id:"schematic-online-viewer"},"Schematic Online Viewer"),(0,r.kt)("div",{className:"altium-ecad-viewer","data-project-src":"https://files.seeedstudio.com/wiki/Grove-Laser_PM2.5_Sensor-HM3301/res/Grove%20-%20Laser%20PM2.5%20Sensor%20(HM3301).zip",style:{borderRadius:"0px 0px 4px 4px",height:500,borderStyle:"solid",borderWidth:1,borderColor:"rgb(241, 241, 241)",overflow:"hidden",maxWidth:1280,maxHeight:700,boxSizing:"border-box"}}),(0,r.kt)("h2",{id:"resources"},"Resources"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"[Zip]")," ",(0,r.kt)("a",{parentName:"p",href:"https://files.seeedstudio.com/wiki/Grove-Laser_PM2.5_Sensor-HM3301/res/Grove%20-%20Laser%20PM2.5%20Sensor%20(HM3301).zip"},"Grove - Laser PM2.5 Sensor (HM3301) Eagle Files"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"[Zip]")," ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/Seeed-Studio/Seeed_PM2_5_sensor_HM3301/archive/master.zip"},"Seeed_PM2_5_sensor_HM3301 Software Library"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"[PDF]")," ",(0,r.kt)("a",{parentName:"p",href:"https://files.seeedstudio.com/wiki/Grove-Laser_PM2.5_Sensor-HM3301/res/HM-3300%263600_V2.1.pdf"},"Datasheet HM3301")))),(0,r.kt)("h2",{id:"projects"},"Projects"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Atmospheric Pollution Visualization"),"\uff1aThe air pollution problem attracts more and more attention. This time we tried to monitoring PM2.5 with Wio LTE and new Laser PM2.5 Sensor."),(0,r.kt)("iframe",{frameborder:"0",height:"327.5",scrolling:"no",src:"https://www.hackster.io/SeeedStudio/atmospheric-pollution-visualization-1940f4/embed",width:"350"}),(0,r.kt)("h2",{id:"tech-support--product-discussion"},"Tech Support & Product Discussion"),(0,r.kt)("div",{class:"button_tech_support_container"},(0,r.kt)("a",{href:"https://forum.seeedstudio.com/",class:"button_forum"}),(0,r.kt)("a",{href:"https://www.seeedstudio.com/contacts",class:"button_email"})),(0,r.kt)("div",{class:"button_tech_support_container"},(0,r.kt)("a",{href:"https://discord.gg/eWkprNDMU7",class:"button_discord"}),(0,r.kt)("a",{href:"https://github.com/Seeed-Studio/wiki-documents/discussions/69",class:"button_discussion"})),(0,r.kt)("h2",{id:"upgradable-to-industrial-sensors"},"Upgradable to Industrial Sensors"),(0,r.kt)("p",null,"With the SenseCAP ",(0,r.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html"},"S2110 controller")," and ",(0,r.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html"},"S2100 data logger"),", you can easily turn the Grove into a LoRaWAN\xae sensor. Seeed not only helps you with prototyping but also offers you the possibility to expand your project with the SenseCAP series of robust ",(0,r.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&categories=SenseCAP&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP"},"industrial sensors"),"."),(0,r.kt)("p",null,"The IP66 housing, Bluetooth configuration, compatibility with the global LoRaWAN\xae network, built-in 19 Ah battery, and powerful support from APP make the ",(0,r.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/catalogsearch/result/?q=S21&categories=SenseCAP&product_module=Device"},"SenseCAP S210x")," the best choice for industrial applications. The series includes sensors for soil moisture, air temperature and humidity, light intensity, CO2, EC, and an 8-in-1 weather station. Try the latest SenseCAP S210x for your next successful industrial project."),(0,r.kt)("div",{align:"center"},(0,r.kt)("a",{href:"https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP",target:"_blank"},(0,r.kt)("img",{width:800,src:"https://files.seeedstudio.com/wiki/K1100_overview/sensecap.png"}))))}d.isMDXComponent=!0}}]);