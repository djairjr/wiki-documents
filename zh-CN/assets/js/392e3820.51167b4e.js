"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[78426],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var i=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,i,a=function(e,t){if(null==e)return{};var r,i,a={},n=Object.keys(e);for(i=0;i<n.length;i++)r=n[i],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(i=0;i<n.length;i++)r=n[i],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=i.createContext({}),p=function(e){var t=i.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=p(e.components);return i.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},h=i.forwardRef((function(e,t){var r=e.components,a=e.mdxType,n=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(r),h=a,m=u["".concat(s,".").concat(h)]||u[h]||d[h]||n;return r?i.createElement(m,o(o({ref:t},c),{},{components:r})):i.createElement(m,o({ref:t},c))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=r.length,o=new Array(n);o[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:a,o[1]=l;for(var p=2;p<n;p++)o[p]=r[p];return i.createElement.apply(null,o)}return i.createElement.apply(null,r)}h.displayName="MDXCreateElement"},75833:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>n,metadata:()=>l,toc:()=>p});var i=r(87462),a=(r(67294),r(3905));const n={description:"Grove - Finger-clip Heart Rate Sensor with shell",title:"Grove - Finger-clip Heart Rate Sensor with shell",keywords:["Grove"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Grove-Finger-clip_Heart_Rate_Sensor_with_shell",last_update:{date:"1/6/2023",author:"jianjing Huang"}},o=void 0,l={unversionedId:"Sensor/Grove/Grove_Sensors/Biometric/Grove-Finger-clip_Heart_Rate_Sensor_with_shell",id:"Sensor/Grove/Grove_Sensors/Biometric/Grove-Finger-clip_Heart_Rate_Sensor_with_shell",title:"Grove - Finger-clip Heart Rate Sensor with shell",description:"Grove - Finger-clip Heart Rate Sensor with shell",source:"@site/docs/Sensor/Grove/Grove_Sensors/Biometric/Grove-Finger-clip_Heart_Rate_Sensor_with_shell.md",sourceDirName:"Sensor/Grove/Grove_Sensors/Biometric",slug:"/Grove-Finger-clip_Heart_Rate_Sensor_with_shell",permalink:"/zh-CN/Grove-Finger-clip_Heart_Rate_Sensor_with_shell",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Sensor/Grove/Grove_Sensors/Biometric/Grove-Finger-clip_Heart_Rate_Sensor_with_shell.md",tags:[],version:"current",lastUpdatedBy:"jianjing Huang",lastUpdatedAt:1672963200,formattedLastUpdatedAt:"2023\u5e741\u67086\u65e5",frontMatter:{description:"Grove - Finger-clip Heart Rate Sensor with shell",title:"Grove - Finger-clip Heart Rate Sensor with shell",keywords:["Grove"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Grove-Finger-clip_Heart_Rate_Sensor_with_shell",last_update:{date:"1/6/2023",author:"jianjing Huang"}},sidebar:"ProductSidebar",previous:{title:"Grove - Finger-clip Heart Rate Sensor",permalink:"/zh-CN/Grove-Finger-clip_Heart_Rate_Sensor"},next:{title:"Grove - EMG Detector",permalink:"/zh-CN/Grove-EMG_Detector"}},s={},p=[{value:"Specification",id:"specification",level:2},{value:"Interface Function",id:"interface-function",level:2},{value:"Usage",id:"usage",level:2},{value:"Hardware Installation",id:"hardware-installation",level:3},{value:"Software Part",id:"software-part",level:3},{value:"With Arduino",id:"with-arduino",level:3},{value:"With Mbed",id:"with-mbed",level:3},{value:"Upgrade firmware",id:"upgrade-firmware",level:4},{value:"Schematic Online Viewer",id:"schematic-online-viewer",level:2},{value:"Resources",id:"resources",level:2},{value:"Tech Support",id:"tech-support",level:2}],c={toc:p};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,i.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/Grove-Finger-clip_Heart_Rate_Sensor_with_shell/img/Grove-Finger-clip_Heart_Rate_Sensor_with_shell.JPG"})),(0,a.kt)("p",null,"Grove - Finger-clip Heart Rate Sensor with shell is based on PAH8001EI-2G, a high performance and low power CMOS-process optical sensor with Green LED and DSP integrated serving as a Heart Rate Detection (HRD) sensor.This module is based on optical technology which measures the variation human blood movement in the vessel. Low power consumption and flexible power saving mode make it suitable for wearable device. Cause the heart rate sensor chip need high processing speed for the algorithm of heart rate data, this module integrate a STM32, reserved SWD interface allow users to reprogram the STM32. This module equips a shell and two bands that allow users to fix the module on finger, wrist or arm easily."),(0,a.kt)("p",{style:{textAlign:"center"}},(0,a.kt)("a",{href:"https://www.seeedstudio.com/Grove-Finger-clip-Heart-Rate-Sensor-with-shell-p-2420.html",target:"_blank"},(0,a.kt)("img",{src:"https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png"}))),(0,a.kt)("h2",{id:"specification"},"Specification"),(0,a.kt)("hr",null),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Ultra-low power consumption, power saving mode during time of no touch movement")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Flexible sleep rate control")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Integrated the STM32F103")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"I2C interface")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Heart rate sensor area just 3.0 x 4.7mm")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Reserved SWD interface")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"equip with shell and bands")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Working temperature: -20 to +60\u2103"))),(0,a.kt)("h2",{id:"interface-function"},"Interface Function"),(0,a.kt)("hr",null),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/Grove-Finger-clip_Heart_Rate_Sensor_with_shell/img/Finger-clip_Heart_Rate_Sensor_TOP.jpg"})),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/Grove-Finger-clip_Heart_Rate_Sensor_with_shell/img/Finger-clip_Heart_Rate_Sensor_Bottom.jpg"})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"1: Grove Interface")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"2: Reserved SWD Interface for programming to STM32")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"3: Heart Rate Sensor"))),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("hr",null),(0,a.kt)("p",null,"Here, We will provide an example here to show you how to use this sensor."),(0,a.kt)("h3",{id:"hardware-installation"},"Hardware Installation"),(0,a.kt)("p",null,"Link the Sensor to I2C port of Seeeduino with Grove Cable."),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/Grove-Finger-clip_Heart_Rate_Sensor_with_shell/img/Grove-Finger-clip_Heart_Rate_Sensor_with_shell_connect.jpg"})),(0,a.kt)("p",null,"When using the band to fix this module on your finger or wrist, please keep the sensor area contact the skin well and keep no motion, just like the picture."),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/Grove-Finger-clip_Heart_Rate_Sensor_with_shell/img/Grove-Finger-clip_Heart_Rate_Sensor_touch.jpg"})),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/Grove-Finger-clip_Heart_Rate_Sensor_with_shell/img/Grove-Finger-clip_Heart_Rate_Sensor_touch2.JPG"})),(0,a.kt)("h3",{id:"software-part"},"Software Part"),(0,a.kt)("h3",{id:"with-arduino"},"With Arduino"),(0,a.kt)("p",null,"Copy the following code into a new sketch of Arduino and upload the sketch, then you can get heart rate from the Serial Monitor.\nIt may take about a minute to get valid heart rate after you touch your finger with sensor."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'#include <Wire.h>\nvoid setup() {\n    Serial.begin(9600);\n    Serial.println("heart rate sensor:");\n    Wire.begin();\n}\nvoid loop() {\n    Wire.requestFrom(0xA0 >> 1, 1);    // request 1 bytes from slave device\n    while(Wire.available()) {          // slave may send less than requested\n        unsigned char c = Wire.read();   // receive heart rate value (a byte)\n        Serial.println(c, DEC);         // print heart rate value\n    }\n    delay(500);\n}\n')),(0,a.kt)("h3",{id:"with-mbed"},"With Mbed"),(0,a.kt)("p",null,"Read a byte from I2C device 0xA0 (8 bit address), it's the heart rate."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'#include "mbed.h"\n\nI2C i2c(I2C_SDA, I2C_SCL);\nconst int addr = 0xA0;\n\nint main() {\n    char heart_rate;\n    while (1) {\n        i2c.read(addr, &heart_rate, 1);\n        printf("heart rate: = %d\\r\\n", heart_rate);\n    }\n}\n')),(0,a.kt)("h4",{id:"upgrade-firmware"},"Upgrade firmware"),(0,a.kt)("p",null,"We can upgrade the firmware of the heart rate sensor through its bootloader."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"The bootloader is located at 0x08000000 - 0x08002000")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"The application is located at 0x08002000 - 0x08020000")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"To boot into bootloader, connect SWDIO to GND and reset to run"))),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/Grove-Finger-clip_Heart_Rate_Sensor_with_shell/img/Grove-Finger-clip_Heart_Rate_Sensor_boot_set.jpg"})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Interface: UART (the Grove connector supports I2C and UART),when upgrade the firmware, the Grove interface run in UART mode.")),(0,a.kt)("p",null,"VCC  -  VCC"),(0,a.kt)("p",null,"GND  -  GND"),(0,a.kt)("p",null,"SDA  -  TX"),(0,a.kt)("p",null,"SCL  -  RX"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"UART Baud Rate: 115200")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Protocol: ymodem (The recommended tool is Tera Term)"))),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"The Grove - Finger-clip Heart Rate Sensor provides heart rate measurements. However, it is not a medical device. To use the heart rate detection sensor on your wrist, finger or palm, you must:")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"(1)Fasten the sensor snugly makes tight contact with your skin and maintain table (no motion) while measuring to acquire accurate heart rate. If the sensor does not contact the skin well or have extreme motion while measuring that the heart rate will not be measured correctly."),(0,a.kt)("li",{parentName:"ul"},"(2)Sensor's performance is optimized with greater blood flow. On cold days or users have poor circulation(ex: cold hands, fingers and cold feet) the sensor performance (heart rate accuracy)can be impacted because of lower blood flow in the measuring position.")),(0,a.kt)("h2",{id:"schematic-online-viewer"},"Schematic Online Viewer"),(0,a.kt)("div",{className:"altium-ecad-viewer","data-project-src":"https://files.seeedstudio.com/wiki/Grove-Finger-clip_Heart_Rate_Sensor_with_shell/res/Grove%20-%20Finger-clip%20Heart%20Rate%20Sensor%20eagle%20file.rar",style:{borderRadius:"0px 0px 4px 4px",height:500,borderStyle:"solid",borderWidth:1,borderColor:"rgb(241, 241, 241)",overflow:"hidden",maxWidth:1280,maxHeight:700,boxSizing:"border-box"}}),(0,a.kt)("h2",{id:"resources"},"Resources"),(0,a.kt)("hr",null),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"https://files.seeedstudio.com/wiki/Grove-Finger-clip_Heart_Rate_Sensor_with_shell/res/Grove%20-%20Finger-clip%20Heart%20Rate%20Sensor%20eagle%20file.rar"},"Grove - Finger-clip Heart Rate Sensor eagle file"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"https://files.seeedstudio.com/wiki/Grove-Finger-clip_Heart_Rate_Sensor_with_shell/res/Grove-Finger-clip_Heart_Rate_Sensor_bin.zip"},"Grove - Finger-clip Heart Rate Sensor bin file")))),(0,a.kt)("h2",{id:"tech-support"},"Tech Support"),(0,a.kt)("p",null,"Please submit any technical issue into our ",(0,a.kt)("a",{parentName:"p",href:"https://forum.seeedstudio.com/"},"forum"),"."),(0,a.kt)("div",null,(0,a.kt)("br",null),(0,a.kt)("p",{style:{textAlign:"center"}},(0,a.kt)("a",{href:"https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts",target:"_blank"},(0,a.kt)("img",{src:"https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg"})))))}u.isMDXComponent=!0}}]);