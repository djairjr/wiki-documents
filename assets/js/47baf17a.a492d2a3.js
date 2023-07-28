"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[72546],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>g});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var a=r.createContext({}),u=function(e){var t=r.useContext(a),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=u(e.components);return r.createElement(a.Provider,{value:t},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,a=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=u(n),h=i,g=p["".concat(a,".").concat(h)]||p[h]||c[h]||o;return n?r.createElement(g,s(s({ref:t},d),{},{components:n})):r.createElement(g,s({ref:t},d))}));function g(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,s=new Array(o);s[0]=h;var l={};for(var a in t)hasOwnProperty.call(t,a)&&(l[a]=t[a]);l.originalType=e,l[p]="string"==typeof e?e:i,s[1]=l;for(var u=2;u<o;u++)s[u]=n[u];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},90338:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>s,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var r=n(87462),i=(n(67294),n(3905));const o={description:"Getting started for the Grove Gesture sensor PAJ7660.",title:"Grove Smart IR Gesture Sensor (PAJ7660)",keywords:["gesture"],image:"https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png",slug:"/grove_gesture_paj7660",last_update:{date:"06/28/2023",author:"MengDu"}},s="Grove Smart IR Gesture Sensor (PAJ7660)",l={unversionedId:"Sensor/Grove/Grove_Sensors/AI-powered/Grove-Gesture_sensor_paj7660",id:"Sensor/Grove/Grove_Sensors/AI-powered/Grove-Gesture_sensor_paj7660",title:"Grove Smart IR Gesture Sensor (PAJ7660)",description:"Getting started for the Grove Gesture sensor PAJ7660.",source:"@site/docs/Sensor/Grove/Grove_Sensors/AI-powered/Grove-Gesture_sensor_paj7660.md",sourceDirName:"Sensor/Grove/Grove_Sensors/AI-powered",slug:"/grove_gesture_paj7660",permalink:"/grove_gesture_paj7660",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Sensor/Grove/Grove_Sensors/AI-powered/Grove-Gesture_sensor_paj7660.md",tags:[],version:"current",lastUpdatedBy:"MengDu",lastUpdatedAt:1687910400,formattedLastUpdatedAt:"Jun 28, 2023",frontMatter:{description:"Getting started for the Grove Gesture sensor PAJ7660.",title:"Grove Smart IR Gesture Sensor (PAJ7660)",keywords:["gesture"],image:"https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png",slug:"/grove_gesture_paj7660",last_update:{date:"06/28/2023",author:"MengDu"}},sidebar:"ProductSidebar",previous:{title:"Train and Deploy Your Own AI Model with Edge Impulse",permalink:"/edge-impulse-vision-ai"},next:{title:"Grove - AHT20 I2C Industrial Grade Temperature&Humidity Sensor",permalink:"/Grove-AHT20-I2C-Industrial-Grade-Temperature&Humidity-Sensor"}},a={},u=[{value:"Introduction",id:"introduction",level:2},{value:"Feature",id:"feature",level:3},{value:"Hardware Overview",id:"hardware-overview",level:2},{value:"Getting Started",id:"getting-started",level:2},{value:"Operating Plane",id:"operating-plane",level:3},{value:"Background Interference",id:"background-interference",level:3},{value:"Gesture Types",id:"gesture-types",level:3},{value:"Gesture Definition",id:"gesture-definition",level:4},{value:"Gesture Operation Mode",id:"gesture-operation-mode",level:4},{value:"Hardware Types",id:"hardware-types",level:3},{value:"Use of the upper computer software",id:"use-of-the-upper-computer-software",level:2},{value:"Step 1. Download and open the software",id:"step-1-download-and-open-the-software",level:3},{value:"Step 2. Connect the Grove Gesture Sensor to PC",id:"step-2-connect-the-grove-gesture-sensor-to-pc",level:3},{value:"Step 3. View results in the software",id:"step-3-view-results-in-the-software",level:3},{value:"Arduino Library Overview",id:"arduino-library-overview",level:2},{value:"Function",id:"function",level:3},{value:"Installation",id:"installation",level:3},{value:"Demo 1: Connect sensors to MCU by IIC",id:"demo-1-connect-sensors-to-mcu-by-iic",level:2},{value:"Step 1. Turn the 4-position DIP switch to the IIC position.",id:"step-1-turn-the-4-position-dip-switch-to-the-iic-position",level:3},{value:"Step 2. Connect the MCU to the Grove Gesture Sensor via the Grove cable.",id:"step-2-connect-the-mcu-to-the-grove-gesture-sensor-via-the-grove-cable",level:3},{value:"Step 3. Upload procedure",id:"step-3-upload-procedure",level:3},{value:"Code 1: Gesture Mode (Default)",id:"code-1-gesture-mode-default",level:4},{value:"Code 2: Thumb Mode",id:"code-2-thumb-mode",level:4},{value:"Demo 2: Connect sensors to XIAO by SPI",id:"demo-2-connect-sensors-to-xiao-by-spi",level:2},{value:"Step 1. Turn the 4-position DIP switch to the SPI position.",id:"step-1-turn-the-4-position-dip-switch-to-the-spi-position",level:3},{value:"Step 2. Connect the XIAO to the Grove Gesture Sensor.",id:"step-2-connect-the-xiao-to-the-grove-gesture-sensor",level:3},{value:"Step 3. Upload procedure",id:"step-3-upload-procedure-1",level:3},{value:"Code 1: Gesture Mode (Default)",id:"code-1-gesture-mode-default-1",level:4},{value:"Code 2: Thumb Mode",id:"code-2-thumb-mode-1",level:4},{value:"Resources",id:"resources",level:2},{value:"Tech Support &amp; Product Discussion",id:"tech-support--product-discussion",level:2}],d={toc:u};function p(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"grove-smart-ir-gesture-sensor-paj7660"},"Grove Smart IR Gesture Sensor (PAJ7660)"),(0,i.kt)("div",{style:{textAlign:"center"}},(0,i.kt)("img",{src:"https://files.seeedstudio.com/wiki/grove-gesture-paj7620/main.jpg",style:{width:500,height:"auto"}})),(0,i.kt)("div",{class:"get_one_now_container",style:{textAlign:"center"}},(0,i.kt)("a",{class:"get_one_now_item",href:"https://www.seeedstudio.com/Grove-Smart-IR-Gesture-Sensor-p-5721.html"},(0,i.kt)("strong",null,(0,i.kt)("span",null,(0,i.kt)("font",{color:"FFFFFF",size:"4"}," Get One Now \ud83d\uddb1\ufe0f"))))),(0,i.kt)("h2",{id:"introduction"},"Introduction"),(0,i.kt)("p",null,"Grove Smart IR Gesture Sensor is an intelligent gesture recognition module equipped with an infrared camera sensor and applied AI algorithm. It can detect over 15 gestures with wide detection while supporting both IIC and SPI communication. This module also allows Grove, Type-C, and Seeed Studio XIAO direct connecting."),(0,i.kt)("h3",{id:"feature"},"Feature"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Compact AI gesture sensor"),": Equip with an infrared camera sensor and apply AI algorithm to achieve gesture detection, in a compact size board of 4.3cm x 2.1cm"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Over 15 gestures with wide detection"),": Support various gestures such as N-finger push, pinch, tap, grab, rotation, thumb up/down, static, etc, with a detection range of 5-40cm"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"High compatibility"),": Compatible with the XIAO series interface and the Grove connector through I2C communication while supporting images displayed on PC through SPI communication"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Flexible Voltage Selection"),": Grove Interface Compatible with 3.3V and 5V Systems")),(0,i.kt)("h2",{id:"hardware-overview"},"Hardware Overview"),(0,i.kt)("div",{style:{textAlign:"center"}},(0,i.kt)("img",{src:"https://files.seeedstudio.com/wiki/grove-gesture-paj7620/hardware.png",style:{width:1e3,height:"auto"}})),(0,i.kt)("h2",{id:"getting-started"},"Getting Started"),(0,i.kt)("h3",{id:"operating-plane"},"Operating Plane"),(0,i.kt)("p",null,"The gesture operation distance is 15 to 30 cm, the farthest cannot exceed 35 cm. Based on Sensor FOV 78.3\xb0 (horizontal) and 62.9\xb0(vertical), and the operating area is 48 x 36 cm\xb2 at 30 cm."),(0,i.kt)("div",{style:{textAlign:"center"}},(0,i.kt)("img",{src:"https://files.seeedstudio.com/wiki/grove-gesture-paj7620/1.png",style:{width:700,height:"auto"}})),(0,i.kt)("p",null,"In addition to the distance to the sensor, you also need to pay attention to where the sensor is placed. On the front of the sensor, in the upper left corner, there is a small human shape. If you see the figure standing upright, then you have placed it in the correct position. If it is upside down, then it is likely that you will not get an accurate recognition result."),(0,i.kt)("div",{style:{textAlign:"center"}},(0,i.kt)("img",{src:"https://files.seeedstudio.com/wiki/grove-gesture-paj7620/13.png",style:{width:400,height:"auto"}})),(0,i.kt)("h3",{id:"background-interference"},"Background Interference"),(0,i.kt)("p",null,"As background noise may impact the accuracy of gesture recognition, it is recommended to avoid the relative higher reflective background object behind the palm. In normal gesture recognition condition, recommend at least 35cm distance between palm and background."),(0,i.kt)("div",{style:{textAlign:"center"}},(0,i.kt)("img",{src:"https://files.seeedstudio.com/wiki/grove-gesture-paj7620/2.png",style:{width:600,height:"auto"}})),(0,i.kt)("h3",{id:"gesture-types"},"Gesture Types"),(0,i.kt)("p",null,"All supported gesture types are described in the following sections."),(0,i.kt)("h4",{id:"gesture-definition"},"Gesture Definition"),(0,i.kt)("div",{class:"table-center"},(0,i.kt)("table",{align:"center"},(0,i.kt)("tr",null,(0,i.kt)("th",null,"Gesture"),(0,i.kt)("th",null,"Description"),(0,i.kt)("th",null,"Note")),(0,i.kt)("tr",null,(0,i.kt)("td",null,"N Finger (N=0~5)"),(0,i.kt)("td",null,"0 ~ 5 fingers at top of fist ",(0,i.kt)("br",null)," ",(0,i.kt)("div",{style:{textAlign:"center"}},(0,i.kt)("img",{src:"https://files.seeedstudio.com/wiki/grove-gesture-paj7620/3.png",style:{width:250,height:"auto"}}))),(0,i.kt)("td",null,"Operation Distance 15 to 30 cm ",(0,i.kt)("br",null)," Static")),(0,i.kt)("tr",null,(0,i.kt)("td",null,"N Finger Push (N=1~5)"),(0,i.kt)("td",null,"N fingers move forward toward sensor ",(0,i.kt)("br",null)," ",(0,i.kt)("div",{style:{textAlign:"center"}},(0,i.kt)("img",{src:"https://files.seeedstudio.com/wiki/grove-gesture-paj7620/4.png",style:{width:250,height:"auto"}}))),(0,i.kt)("td",null,"Operation Distance 15 to 30 cm ",(0,i.kt)("br",null)," Programmable threshold")),(0,i.kt)("tr",null,(0,i.kt)("td",null,"Pinch"),(0,i.kt)("td",null,"2-finger close to pinch, open to release ",(0,i.kt)("br",null)," ",(0,i.kt)("div",{style:{textAlign:"center"}},(0,i.kt)("img",{src:"https://files.seeedstudio.com/wiki/grove-gesture-paj7620/5.png",style:{width:100,height:"auto"}}))),(0,i.kt)("td",null,"Operation Distance 15 to 30 cm ",(0,i.kt)("br",null)," Can use palm center coordinate as cursor and Report Pinch result")),(0,i.kt)("tr",null,(0,i.kt)("td",null,"Rotation CW/CCW"),(0,i.kt)("td",null,"Move wrist in a circular pattern ",(0,i.kt)("br",null)," ",(0,i.kt)("div",{style:{textAlign:"center"}},(0,i.kt)("img",{src:"https://files.seeedstudio.com/wiki/grove-gesture-paj7620/6.png",style:{width:150,height:"auto"}}))),(0,i.kt)("td",null,"Operation Distance 15 to 30 cm ",(0,i.kt)("br",null)," Gesture detected angle can be set, can report angle value")),(0,i.kt)("tr",null,(0,i.kt)("td",null,"Hand Swipe Right or Left"),(0,i.kt)("td",null,"Swipe and move both hands away from each other for some distance ",(0,i.kt)("br",null)," ",(0,i.kt)("div",{style:{textAlign:"center"}},(0,i.kt)("img",{src:"https://files.seeedstudio.com/wiki/grove-gesture-paj7620/7.png",style:{width:300,height:"auto"}}))),(0,i.kt)("td",null,"Operation Distance 15 to 30 cm ",(0,i.kt)("br",null)," Programmable threshold")),(0,i.kt)("tr",null,(0,i.kt)("td",null,"Tap"),(0,i.kt)("td",null,"1-finger click (fingers disappear) ",(0,i.kt)("br",null)," ",(0,i.kt)("div",{style:{textAlign:"center"}},(0,i.kt)("img",{src:"https://files.seeedstudio.com/wiki/grove-gesture-paj7620/8.png",style:{width:200,height:"auto"}}))),(0,i.kt)("td",null,"Operation Distance 15 to 30 cm ",(0,i.kt)("br",null)," Can use palm center coordinate as cursor")),(0,i.kt)("tr",null,(0,i.kt)("td",null,"Grab"),(0,i.kt)("td",null,"5-finger to 0-finger ",(0,i.kt)("br",null)," ",(0,i.kt)("div",{style:{textAlign:"center"}},(0,i.kt)("img",{src:"https://files.seeedstudio.com/wiki/grove-gesture-paj7620/9.png",style:{width:200,height:"auto"}}))),(0,i.kt)("td",null,"Operation Distance 15 to 30 cm ",(0,i.kt)("br",null)," Can use palm center coordinate as cursor ",(0,i.kt)("br",null)," Report Grab result")),(0,i.kt)("tr",null,(0,i.kt)("td",null,"Thumb Up"),(0,i.kt)("td",null,"Thumb at top of fist ",(0,i.kt)("br",null)," ",(0,i.kt)("div",{style:{textAlign:"center"}},(0,i.kt)("img",{src:"https://files.seeedstudio.com/wiki/grove-gesture-paj7620/10.png",style:{width:180,height:"auto"}}))),(0,i.kt)("td",null,"Operation Distance 15 to 25cm")),(0,i.kt)("tr",null,(0,i.kt)("td",null,"Thumb Down"),(0,i.kt)("td",null,"Thumb at bottom of fist ",(0,i.kt)("br",null)," ",(0,i.kt)("div",{style:{textAlign:"center"}},(0,i.kt)("img",{src:"https://files.seeedstudio.com/wiki/grove-gesture-paj7620/11.png",style:{width:180,height:"auto"}}))),(0,i.kt)("td",null,"Operation Distance 15 to 25cm")))),(0,i.kt)("h4",{id:"gesture-operation-mode"},"Gesture Operation Mode"),(0,i.kt)("p",null,"There are 3 gesture modes: thumb, cursor, and gesture modes. Each of them defines specific gesture types for certain user scenarios or applications. The default combined mode includes all gestures except thumbs."),(0,i.kt)("div",{class:"table-center"},(0,i.kt)("table",{align:"center"},(0,i.kt)("tr",null,(0,i.kt)("th",null,"Mode"),(0,i.kt)("th",null,"Default Connection"),(0,i.kt)("th",null,"Gesture Types")),(0,i.kt)("tr",null,(0,i.kt)("td",null,"2"),(0,i.kt)("td",null,"Thumb Mode"),(0,i.kt)("td",null,"Thumb Up/Down")),(0,i.kt)("tr",null,(0,i.kt)("td",null,"4"),(0,i.kt)("td",null,"Cursor Mode"),(0,i.kt)("td",null,"Static Finger ",(0,i.kt)("br",null)," Push ",(0,i.kt)("br",null)," Rotate ",(0,i.kt)("br",null)," Tap ",(0,i.kt)("br",null)," Pinch ",(0,i.kt)("br",null)," Grab")),(0,i.kt)("tr",null,(0,i.kt)("td",null,"5"),(0,i.kt)("td",null,"Gesture Mode (Default)"),(0,i.kt)("td",null,"Static Finger ",(0,i.kt)("br",null)," Push ",(0,i.kt)("br",null)," Swipe ",(0,i.kt)("br",null)," Rotate ",(0,i.kt)("br",null)," Tap (IS_SELECT flag = 1)  ",(0,i.kt)("br",null)," Pinch (IS_SELECT flag = 1) ",(0,i.kt)("br",null)," Grab (IS_SELECT flag = 1)")))),(0,i.kt)("h3",{id:"hardware-types"},"Hardware Types"),(0,i.kt)("p",null,"The Grove Smart IR Gesture Sensor supports a wide range of communication protocols with a choice of IIC, SPI and USB. The different modes are selected directly via a 4 position DIP switch on the back."),(0,i.kt)("div",{style:{textAlign:"center"}},(0,i.kt)("img",{src:"https://files.seeedstudio.com/wiki/grove-gesture-paj7620/back.png",style:{width:400,height:"auto"}})),(0,i.kt)("br",null),(0,i.kt)("p",null,"The diagram and table below will show you how to select the mode you wish to use with the 4 position DIP switch."),(0,i.kt)("div",{style:{textAlign:"center"}},(0,i.kt)("img",{src:"https://files.seeedstudio.com/wiki/grove-gesture-paj7620/12.png",style:{width:300,height:"auto"}})),(0,i.kt)("div",{class:"table-center"},(0,i.kt)("table",{align:"center"},(0,i.kt)("tr",null,(0,i.kt)("th",null," "),(0,i.kt)("th",null,"1"),(0,i.kt)("th",null,"2"),(0,i.kt)("th",null,"3"),(0,i.kt)("th",null,"4")),(0,i.kt)("tr",null,(0,i.kt)("th",null,"I2C Mode"),(0,i.kt)("td",null,"ON"),(0,i.kt)("td",null,"OFF"),(0,i.kt)("td",null,"ON"),(0,i.kt)("td",null,"ON")),(0,i.kt)("tr",null,(0,i.kt)("th",null,"SPI Mode"),(0,i.kt)("td",null,"ON"),(0,i.kt)("td",null,"ON"),(0,i.kt)("td",null,"ON"),(0,i.kt)("td",null,"ON")),(0,i.kt)("tr",null,(0,i.kt)("th",null,"USB Mode"),(0,i.kt)("td",null,"OFF"),(0,i.kt)("td",null,"OFF"),(0,i.kt)("td",null,"OFF"),(0,i.kt)("td",null,"OFF")))),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"The wiring and code may also be slightly different when using different patterns. We will tell you more about this in the following examples.")),(0,i.kt)("h2",{id:"use-of-the-upper-computer-software"},"Use of the upper computer software"),(0,i.kt)("p",null,"If you want to connect the Grove Gesture Sensor to your computer via a USB cable and see the recognition in real time and the results, then using the upper computer software is best for you."),(0,i.kt)("h3",{id:"step-1-download-and-open-the-software"},"Step 1. Download and open the software"),(0,i.kt)("p",null,"You can download the software as a zip file first by clicking ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("a",{parentName:"strong",href:"https://files.seeedstudio.com/wiki/grove-gesture-paj7620/res/GestureDemo_220620_Customer.zip"},"here")),". Then, please unzip the downloaded zip file, open the unpacked ",(0,i.kt)("strong",{parentName:"p"},"GestureDemo_220620_Customer")," folder and double-click to run the ",(0,i.kt)("strong",{parentName:"p"},"GestureDemo_220620_Customer.exe")," file."),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"At this point an error window may pop up telling us that the Geture Sensor was not found, we can simply close the error message.")),(0,i.kt)("h3",{id:"step-2-connect-the-grove-gesture-sensor-to-pc"},"Step 2. Connect the Grove Gesture Sensor to PC"),(0,i.kt)("p",null,"Next, make sure that the Grove Gesture Sensor is in USB mode by turning the 4-position DIP switch all the way to OFF."),(0,i.kt)("div",{style:{textAlign:"center"}},(0,i.kt)("img",{src:"https://files.seeedstudio.com/wiki/grove-gesture-paj7620/14.png",style:{width:150,height:"auto"}})),(0,i.kt)("p",null,"Then using a high quality data cable, connect the Grove Gesture Sensor's USB-C port to your computer's USB port."),(0,i.kt)("h3",{id:"step-3-view-results-in-the-software"},"Step 3. View results in the software"),(0,i.kt)("div",{style:{textAlign:"center"}},(0,i.kt)("img",{src:"https://files.seeedstudio.com/wiki/grove-gesture-paj7620/16.png",style:{width:1e3,height:"auto"}})),(0,i.kt)("p",null,"Once connected to the computer, we click on the ",(0,i.kt)("strong",{parentName:"p"},"Run")," button in the top left corner of the software and then select ",(0,i.kt)("strong",{parentName:"p"},"Gesture")," mode to see the results in real time."),(0,i.kt)("div",{style:{textAlign:"center"}},(0,i.kt)("img",{src:"https://files.seeedstudio.com/wiki/grove-gesture-paj7620/17.png",style:{width:1e3,height:"auto"}})),(0,i.kt)("p",null,"The types of gestures and their introduction can be found in the ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("a",{parentName:"strong",href:"#gesture-types"},"previous sections")),"."),(0,i.kt)("h2",{id:"arduino-library-overview"},"Arduino Library Overview"),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"If this is your first time using Arduino, we highly recommend you to refer to ",(0,i.kt)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/Getting_Started_with_Arduino/"},"Getting Started with Arduino"),".")),(0,i.kt)("div",{class:"github_container",style:{textAlign:"center"}},(0,i.kt)("a",{class:"github_item",href:"https://github.com/Seeed-Studio/Grove_Gesture/tree/dev"},(0,i.kt)("strong",null,(0,i.kt)("span",null,(0,i.kt)("font",{color:"FFFFFF",size:"4"}," Download the Library")))," ",(0,i.kt)("svg",{"aria-hidden":"true",focusable:"false",role:"img",className:"mr-2",viewBox:"-3 10 9 1",width:16,height:16,fill:"currentColor",style:{textAlign:"center",display:"inline-block",userSelect:"none",verticalAlign:"text-bottom",overflow:"visible"}},(0,i.kt)("path",{d:"M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z"})))),(0,i.kt)("h3",{id:"function"},"Function"),(0,i.kt)("p",null,"Before we get started developing a sketch, let's look at the available functions of the library."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"bool init()")," \u2014\u2014 This function initialises the Grove Gesture Sensor and returns ",(0,i.kt)("strong",{parentName:"p"},"True")," if the initialisation is successful and ",(0,i.kt)("strong",{parentName:"p"},"False")," if it fails.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"bool getResult(paj7620_gesture_t& res)")," \u2014\u2014 The function serves to obtain the result of the sensor's recognition of the gesture."))),(0,i.kt)("h3",{id:"installation"},"Installation"),(0,i.kt)("p",null,"Since you have downloaded the zip Library, open your Arduino IDE, click on ",(0,i.kt)("strong",{parentName:"p"},"Sketch > Include Library > Add .ZIP Library"),". Choose the zip file you just downloaded\uff0cand if the library install correct, you will see ",(0,i.kt)("strong",{parentName:"p"},"Library added to your libraries")," in the notice window. Which means the library is installed successfully."),(0,i.kt)("div",{style:{textAlign:"center"}},(0,i.kt)("img",{src:"https://files.seeedstudio.com/wiki/Get_Started_With_Arduino/img/Add_Zip.png",style:{width:800,height:"auto"}})),(0,i.kt)("br",null),(0,i.kt)("h2",{id:"demo-1-connect-sensors-to-mcu-by-iic"},"Demo 1: Connect sensors to MCU by IIC"),(0,i.kt)("h3",{id:"step-1-turn-the-4-position-dip-switch-to-the-iic-position"},"Step 1. Turn the 4-position DIP switch to the IIC position."),(0,i.kt)("div",{style:{textAlign:"center"}},(0,i.kt)("img",{src:"https://files.seeedstudio.com/wiki/grove-gesture-paj7620/IIC.png",style:{width:100,height:"auto"}})),(0,i.kt)("p",null,"The second gear from left to right needs to be set to OFF, all others are ON."),(0,i.kt)("h3",{id:"step-2-connect-the-mcu-to-the-grove-gesture-sensor-via-the-grove-cable"},"Step 2. Connect the MCU to the Grove Gesture Sensor via the Grove cable."),(0,i.kt)("p",null,"The IIC interface is compatible with the XIAO series and the Arduino/Seeeduino series. If you are using an Arduino/Seeeduino then you may need to use a Grove cable to connect to their IIC interface."),(0,i.kt)("div",{style:{textAlign:"center"}},(0,i.kt)("img",{src:"https://files.seeedstudio.com/wiki/grove-gesture-paj7620/18.jpg",style:{width:600,height:"auto"}})),(0,i.kt)("p",null,"If you are using XIAO, then everything is easy, you just need to plug it straight in to the Grove Gesture Sensor's female connector and use it. Please note that the USB-C port is always facing outwards."),(0,i.kt)("div",{style:{textAlign:"center"}},(0,i.kt)("img",{src:"https://files.seeedstudio.com/wiki/grove-gesture-paj7620/19.png",style:{width:250,height:"auto"}})),(0,i.kt)("h3",{id:"step-3-upload-procedure"},"Step 3. Upload procedure"),(0,i.kt)("p",null,"Copy the following program into the Arduino IDE, select the XIAO development board you are using, compile and upload the program."),(0,i.kt)("h4",{id:"code-1-gesture-mode-default"},"Code 1: Gesture Mode (Default)"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},'#include "Gesture.h"\n\npag7660 Gesture; // Combined mode is used by default\n\nvoid setup() {\n    Serial.begin(9600);\n    while(!Serial) {\n        delay(100);\n    }\n    Serial.println("\\nPAG7660 TEST DEMO: Gesture combined mode.");\n    \n    if(Gesture.init()) {\n        Serial.println("PAG7660 initialization success");\n    } else {\n        Serial.println("PAG7660 initialization failed");\n    }\n    Serial.println("Please input your gestures:\\n");\n}\n\nvoid loop() {\n    pag7660_gesture_t result;\n    if (Gesture.getResult(result)) {\n        printResultCombinedMode(result);\n    }\n    delay(100);\n}\n\nvoid printResultCombinedMode(const pag7660_gesture_t& result) {\n    const char *cursor_str[] = {\n        NULL,\n        "Tap",\n        "Grab",\n        "Pinch",\n    };\n    switch (result.type) {\n    case 0:\n        switch (result.cursor.type) {\n        case 1:\n        case 2:\n        case 3:\n            if (result.cursor.select)\n                Serial.println(cursor_str[result.cursor.type]);\n            break;\n        default:\n            break;\n        }\n        break;\n    case 1:\n    case 2:\n    case 3:\n    case 4:\n    case 5:\n        Serial.print(result.type);\n        Serial.println("-finger");\n        break;\n    case 6:\n        Serial.print("Rotate Right ");\n        Serial.println(result.rotate);\n        break;\n    case 7:\n        Serial.print("Rotate Left ");\n        Serial.println(result.rotate);\n        break;\n    case 8:\n        Serial.println("Swipe Left");\n        break;\n    case 9:\n        Serial.println("Swipe Right");\n        break;\n    case 19:\n    case 20:\n    case 21:\n    case 22:\n    case 23:\n        Serial.print(result.type - 19 + 1);\n        Serial.println("-finger push");\n        break;\n    default:\n        break;\n    }\n}\n')),(0,i.kt)("p",null,"If all goes well, gesture directly at the Grove Gesture Sensor and it will output the result in the serial monitor."),(0,i.kt)("div",{style:{textAlign:"center"}},(0,i.kt)("img",{src:"https://files.seeedstudio.com/wiki/grove-gesture-paj7620/20.png",style:{width:800,height:"auto"}})),(0,i.kt)("h4",{id:"code-2-thumb-mode"},"Code 2: Thumb Mode"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},'#include "Gesture.h"\n\npag7660 Gesture(GESTURE_THUMB_MODE); // Thumb mode is used\n\nvoid setup() {\n    Serial.begin(9600);\n    while(!Serial) {\n        delay(100);\n    }\n    Serial.println("\\nPAG7660 TEST DEMO: Gesture thumb mode.");\n\n    // initialize with a SPI chip select pin number to use SPI\n    if(Gesture.init()) {\n        Serial.println("PAG7660 initialization success");\n    } else {\n        Serial.println("PAG7660 initialization failed");\n    }\n    Serial.println("Please input your gestures:\\n");\n}\n\nvoid loop() {\n    pag7660_gesture_t result;\n    if (Gesture.getResult(result)) {\n        if (result.thumb.up)\n            Serial.println("Thumb Up");\n        else if (result.thumb.down)\n            Serial.println("Thumb Down");\n        }\n    delay(100);\n}\n')),(0,i.kt)("p",null,"If all goes well, gesture directly at the Grove Gesture Sensor and it will output the result in the serial monitor."),(0,i.kt)("div",{style:{textAlign:"center"}},(0,i.kt)("img",{src:"https://files.seeedstudio.com/wiki/grove-gesture-paj7620/21.png",style:{width:800,height:"auto"}})),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"There are three different modes of the Grove Gesture Sensor. We have completed the development of the program for the two self-contained modes and make them available here, please refer to ",(0,i.kt)("a",{parentName:"p",href:"#gesture-operation-mode"},"Gesture Operation Mode")," for more information on the differences between the different modes.")),(0,i.kt)("h2",{id:"demo-2-connect-sensors-to-xiao-by-spi"},"Demo 2: Connect sensors to XIAO by SPI"),(0,i.kt)("p",null,"If you wish to use the SPI approach rather than the IIC, then you can refer to the steps here to complete your project."),(0,i.kt)("h3",{id:"step-1-turn-the-4-position-dip-switch-to-the-spi-position"},"Step 1. Turn the 4-position DIP switch to the SPI position."),(0,i.kt)("div",{style:{textAlign:"center"}},(0,i.kt)("img",{src:"https://files.seeedstudio.com/wiki/grove-gesture-paj7620/SPI.png",style:{width:100,height:"auto"}})),(0,i.kt)("p",null,"All switches need to be toggled to the ON position."),(0,i.kt)("h3",{id:"step-2-connect-the-xiao-to-the-grove-gesture-sensor"},"Step 2. Connect the XIAO to the Grove Gesture Sensor."),(0,i.kt)("p",null,"Plug XIAO straight in to the Grove Gesture Sensor's female connector and use it. Please note that the USB-C port is always facing outwards."),(0,i.kt)("div",{style:{textAlign:"center"}},(0,i.kt)("img",{src:"https://files.seeedstudio.com/wiki/grove-gesture-paj7620/19.png",style:{width:250,height:"auto"}})),(0,i.kt)("h3",{id:"step-3-upload-procedure-1"},"Step 3. Upload procedure"),(0,i.kt)("p",null,"Copy the following program into the Arduino IDE, select the XIAO development board you are using, compile and upload the program."),(0,i.kt)("h4",{id:"code-1-gesture-mode-default-1"},"Code 1: Gesture Mode (Default)"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},'#include "Gesture.h"\n\n#define PAG7660_CS D3\npag7660 Gesture; // Combined mode is used by default\n\nvoid setup() {\n    Serial.begin(9600);\n    while(!Serial) {\n        delay(100);\n    }\n    Serial.println("\\nPAG7660 TEST DEMO: Gesture combined mode.");\n    \n    if(Gesture.init(PAG7660_CS)) {\n        Serial.println("PAG7660 initialization success");\n    } else {\n        Serial.println("PAG7660 initialization failed");\n    }\n    Serial.println("Please input your gestures:\\n");\n}\n\nvoid loop() {\n    pag7660_gesture_t result;\n    if (Gesture.getResult(result)) {\n        printResultCombinedMode(result);\n    }\n    delay(100);\n}\n\nvoid printResultCombinedMode(const pag7660_gesture_t& result) {\n    const char *cursor_str[] = {\n        NULL,\n        "Tap",\n        "Grab",\n        "Pinch",\n    };\n    switch (result.type) {\n    case 0:\n        switch (result.cursor.type) {\n        case 1:\n        case 2:\n        case 3:\n            if (result.cursor.select)\n                Serial.println(cursor_str[result.cursor.type]);\n            break;\n        default:\n            break;\n        }\n        break;\n    case 1:\n    case 2:\n    case 3:\n    case 4:\n    case 5:\n        Serial.print(result.type);\n        Serial.println("-finger");\n        break;\n    case 6:\n        Serial.print("Rotate Right ");\n        Serial.println(result.rotate);\n        break;\n    case 7:\n        Serial.print("Rotate Left ");\n        Serial.println(result.rotate);\n        break;\n    case 8:\n        Serial.println("Swipe Left");\n        break;\n    case 9:\n        Serial.println("Swipe Right");\n        break;\n    case 19:\n    case 20:\n    case 21:\n    case 22:\n    case 23:\n        Serial.print(result.type - 19 + 1);\n        Serial.println("-finger push");\n        break;\n    default:\n        break;\n    }\n}\n')),(0,i.kt)("p",null,"If all goes well, gesture directly at the Grove Gesture Sensor and it will output the result in the serial monitor."),(0,i.kt)("div",{style:{textAlign:"center"}},(0,i.kt)("img",{src:"https://files.seeedstudio.com/wiki/grove-gesture-paj7620/22.png",style:{width:800,height:"auto"}})),(0,i.kt)("h4",{id:"code-2-thumb-mode-1"},"Code 2: Thumb Mode"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},'#include "Gesture.h"\n\n#define PAG7660_CS D3\npag7660 Gesture(GESTURE_THUMB_MODE); // Thumb mode is used\n\nvoid setup() {\n    Serial.begin(9600);\n    while(!Serial) {\n        delay(100);\n    }\n    Serial.println("\\nPAG7660 TEST DEMO: Gesture thumb mode.");\n\n    // initialize with a SPI chip select pin number to use SPI\n    if(Gesture.init(PAG7660_CS)) {\n        Serial.println("PAG7660 initialization success");\n    } else {\n        Serial.println("PAG7660 initialization failed");\n    }\n    Serial.println("Please input your gestures:\\n");\n}\n\nvoid loop() {\n    pag7660_gesture_t result;\n    if (Gesture.getResult(result)) {\n        if (result.thumb.up)\n            Serial.println("Thumb Up");\n        else if (result.thumb.down)\n            Serial.println("Thumb Down");\n        }\n    delay(100);\n}\n')),(0,i.kt)("p",null,"If all goes well, gesture directly at the Grove Gesture Sensor and it will output the result in the serial monitor."),(0,i.kt)("div",{style:{textAlign:"center"}},(0,i.kt)("img",{src:"https://files.seeedstudio.com/wiki/grove-gesture-paj7620/23.png",style:{width:800,height:"auto"}})),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"There are three different modes of the Grove Gesture Sensor. We have completed the development of the program for the two self-contained modes and make them available here, please refer to ",(0,i.kt)("a",{parentName:"p",href:"#gesture-operation-mode"},"Gesture Operation Mode")," for more information on the differences between the different modes.")),(0,i.kt)("h2",{id:"resources"},"Resources"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"[ZIP]")," ",(0,i.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/grove-gesture-paj7620/res/Grove-Smart-IR-Gesture-Sensor_v1.0_SCH&PCB.zip"},"Grove Gesture Sensor SCH&PCB")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"[PDF]")," ",(0,i.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/grove-gesture-paj7620/res/Grove-Smart-IR-Gesture-Sensor_v1.0_SCH_PDF.pdf"},"Grove Gesture Sensor SCH"))),(0,i.kt)("h2",{id:"tech-support--product-discussion"},"Tech Support & Product Discussion"),(0,i.kt)("p",null,"Thank you for choosing our products! We are here to provide you with different support to ensure that your experience with our products is as smooth as possible. We offer several communication channels to cater to different preferences and needs."),(0,i.kt)("div",{class:"button_tech_support_container"},(0,i.kt)("a",{href:"https://forum.seeedstudio.com/",class:"button_forum"}),(0,i.kt)("a",{href:"https://www.seeedstudio.com/contacts",class:"button_email"})),(0,i.kt)("div",{class:"button_tech_support_container"},(0,i.kt)("a",{href:"https://discord.gg/eWkprNDMU7",class:"button_discord"}),(0,i.kt)("a",{href:"https://github.com/Seeed-Studio/wiki-documents/discussions/69",class:"button_discussion"})))}p.isMDXComponent=!0}}]);