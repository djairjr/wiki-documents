"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[59490],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>k});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var d=n.createContext({}),s=function(e){var t=n.useContext(d),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(d.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,d=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(r),m=o,k=u["".concat(d,".").concat(m)]||u[m]||c[m]||a;return r?n.createElement(k,i(i({ref:t},p),{},{components:r})):n.createElement(k,i({ref:t},p))}));function k(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l[u]="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},117:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var n=r(87462),o=(r(67294),r(3905));const a={title:"Grove - Recorder V3",nointro:null,keywords:["docs","docusaurus"],image:"https://wiki.seeedstudio.com/Grove-Recorder_v3.0/",slug:"/Grove-Recorder_v3.0",last_update:{date:"01/09/2022",author:"gunengyu"}},i=void 0,l={unversionedId:"Sensor/Grove/Grove_Accessories/Actuator/Grove-Recorder_v3.0",id:"Sensor/Grove/Grove_Accessories/Actuator/Grove-Recorder_v3.0",title:"Grove - Recorder V3",description:"enter image description here",source:"@site/docs/Sensor/Grove/Grove_Accessories/Actuator/Grove-Recorder_v3.0.md",sourceDirName:"Sensor/Grove/Grove_Accessories/Actuator",slug:"/Grove-Recorder_v3.0",permalink:"/zh-CN/Grove-Recorder_v3.0",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Sensor/Grove/Grove_Accessories/Actuator/Grove-Recorder_v3.0.md",tags:[],version:"current",lastUpdatedBy:"gunengyu",lastUpdatedAt:1641686400,formattedLastUpdatedAt:"2022\u5e741\u67089\u65e5",frontMatter:{title:"Grove - Recorder V3",nointro:null,keywords:["docs","docusaurus"],image:"https://wiki.seeedstudio.com/Grove-Recorder_v3.0/",slug:"/Grove-Recorder_v3.0",last_update:{date:"01/09/2022",author:"gunengyu"}},sidebar:"ProductSidebar",previous:{title:"Grove - Recorder",permalink:"/zh-CN/Grove_Recorder"},next:{title:"Grove - Relay",permalink:"/zh-CN/Grove-Relay"}},d={},s=[{value:"What&#39;s new in V3",id:"whats-new-in-v3",level:2},{value:"Features",id:"features",level:2},{value:"Platform Support",id:"platform-support",level:2},{value:"Specification",id:"specification",level:2},{value:"Hardware Overview",id:"hardware-overview",level:2},{value:"Getting Started",id:"getting-started",level:2},{value:"Hardware Connection",id:"hardware-connection",level:3},{value:"Standalone",id:"standalone",level:2},{value:"Software",id:"software",level:2},{value:"Enter Command",id:"enter-command",level:2},{value:"Play with Codecraft",id:"play-with-codecraft",level:3},{value:"Hardware",id:"hardware",level:4},{value:"Software",id:"software-1",level:4},{value:"Schematic Online Viewer",id:"schematic-online-viewer",level:2},{value:"Resources",id:"resources",level:2},{value:"Tech Support",id:"tech-support",level:2}],p={toc:s};function u(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Grove_Recorder_V3/img/cover.jpg",alt:"enter image description here"})),(0,o.kt)("p",null,"This is the latest version of Grove-recorder, and also the best version. Comparing the previous one, there are some updates that we would like to mention."),(0,o.kt)("p",null,"First change is MCU. In V3.0, the MCU is upgraded from to be ISD9160FI, which is more powerful than the old one ISD1820PY. How is it more powerful? Together with the newly added 2Mbytes flash, it allows you to record up to 83 seconds, much longer than previous 12 sec record."),(0,o.kt)("p",null,"Secondly, if you have ever used previous version, you would know that if you want to play back what you have recorded, you need to press another button on the Grove button that connected separately. In V3.0, we integrated the record button and play back button in to one button. By holding the button for 2 sec, it starts recording, by push the button quickly, it plays back what has been recorded."),(0,o.kt)("h2",{id:"whats-new-in-v3"},"What's new in V3"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"MCU from ISD1820PY to ISD 9160FI"),(0,o.kt)("li",{parentName:"ul"},"Record and playback button"),(0,o.kt)("li",{parentName:"ul"},"Record switch"),(0,o.kt)("li",{parentName:"ul"},"2Mbytes flash")),(0,o.kt)("h2",{id:"features"},"Features"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Very long record time, up to 83s"),(0,o.kt)("li",{parentName:"ul"},"Built-in button to operate"),(0,o.kt)("li",{parentName:"ul"},"Built-in led indicator"),(0,o.kt)("li",{parentName:"ul"},"Stand alone or control by MCU"),(0,o.kt)("li",{parentName:"ul"},"Built-in Microphone")),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre"},"More details about Grove modules please refer to [Grove System](https://wiki.seeedstudio.com/Grove_System/)\n"))),(0,o.kt)("h2",{id:"platform-support"},"Platform Support"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Arduino"),(0,o.kt)("th",{parentName:"tr",align:null},"Wio"),(0,o.kt)("th",{parentName:"tr",align:null},"BeagleBone"),(0,o.kt)("th",{parentName:"tr",align:null},"Raspberry Pi"),(0,o.kt)("th",{parentName:"tr",align:null},"LinkIt"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/arduino_logo.jpg",alt:"enter image description here"})),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/wio_logo.jpg",alt:"enter image description here"})),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/bbg_logo.jpg",alt:"enter image description here"})),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/raspberry_pi_logo.jpg",alt:"enter image description here"})),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/linkit_logo.jpg",alt:"enter image description here"}))))),(0,o.kt)("h2",{id:"specification"},"Specification"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Working Voltage: 3.3/5V"),(0,o.kt)("li",{parentName:"ul"},"Working Current (@5V, 25\u2103)",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Standby: 25-30mA"),(0,o.kt)("li",{parentName:"ul"},"Recording: 29-35mA"),(0,o.kt)("li",{parentName:"ul"},"Playing: 110-150mA"))),(0,o.kt)("li",{parentName:"ul"},"Working Current (@3.3V, 25\u2103)",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Standby: 23-25mA"),(0,o.kt)("li",{parentName:"ul"},"Recording: 25-30mA"),(0,o.kt)("li",{parentName:"ul"},"Playing: 70-150mA"))),(0,o.kt)("li",{parentName:"ul"},"Working Temperature: 0~85\u2103"),(0,o.kt)("li",{parentName:"ul"},"Size: 40x20mm"),(0,o.kt)("li",{parentName:"ul"},"Weight: 31.5g")),(0,o.kt)("h2",{id:"hardware-overview"},"Hardware Overview"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Grove_Recorder_V3/img/hw.png",alt:"enter image description here"})),(0,o.kt)("p",null,"1.Speaker Connector - JST2.0"),(0,o.kt)("p",null,"2.Microphone"),(0,o.kt)("p",null,"3.Voice Control"),(0,o.kt)("p",null,"4.Button"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Short Press and Release: Play"),(0,o.kt)("li",{parentName:"ul"},"Long Press: Start recording until release the button")),(0,o.kt)("p",null,"5.Led Indicator"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Red led, lights when button press")),(0,o.kt)("p",null,"6.Grove Connector"),(0,o.kt)("p",null,"7.REC Switch"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Switch to ON if you want to control the module to record vis Software")),(0,o.kt)("p",null,"8.MCU"),(0,o.kt)("h2",{id:"getting-started"},"Getting Started"),(0,o.kt)("p",null,"Here we will show you how this Grove - Recorder V3.0 works via a simple demo. First of all, you need to prepare the below stuffs:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Seeeduino V4"),(0,o.kt)("th",{parentName:"tr",align:null},"Grove - Recorder"),(0,o.kt)("th",{parentName:"tr",align:null},"Base Shield"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg",alt:"enter image description here"})),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/Grove_Recorder_V3/img/stuff.jpg",alt:"enter image description here"})),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg",alt:"enter image description here"}))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html"},"Get ONE Now")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://www.seeedstudio.com"},"Get ONE Now")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://www.seeedstudio.com/Grove-Universal-4-Pin-20cm-Unbuckled-Cable-%285-PCs-Pack%29-p-749.html"},"Get ONE Now"))))),(0,o.kt)("h3",{id:"hardware-connection"},"Hardware Connection"),(0,o.kt)("p",null,"Thanks to the benefit of Grove series module, you don't need to make soldering or bread board, what you need to do is connect the modules to the right port of Base Shield. For this demo, we connect Grove - Recorder to D2."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Grove_Recorder_V3/img/connection.jpeg",alt:"enter image description here"})),(0,o.kt)("h2",{id:"standalone"},"Standalone"),(0,o.kt)("p",null,"This module can work standalone without coding."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Record")," - Press the button until the LED light, and it's recording, release the button when finish recording."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Play")," - Press and release the button to play the voice that had been recorded.")),(0,o.kt)("p",null,"If you want to control the module by code. please go ahead."),(0,o.kt)("h2",{id:"software"},"Software"),(0,o.kt)("p",null,"Copy the below code and paste to your Arduino IDE, and upload to your Seeeduino V4. After upload the code to an Arduino, then open the Serial monitor."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'/* Grove - Recorder Test Code\n+--------------------------------------------------------------------+\n|   Open Serial Monitor and input command to control the module:\n|   r - start recording\n|   s - stop recording\n|   p - play\n+-------------------------------------------------------------------*/\n\nconst int pinRec  = 3;\nconst int pinPlay = 2;\n\nvoid setup() \n{\n    Serial.begin(115200);\n    Serial.println("Grove - Recorder V3.0 Test Code");\n    Serial.println("cmd: \\r\\nr: record\\r\\ns: stop recording\\r\\np: play");\n    \n    pinMode(pinRec, OUTPUT);\n    pinMode(pinPlay, OUTPUT);\n    digitalWrite(pinRec, HIGH);\n    digitalWrite(pinPlay, HIGH);\n}\n\nvoid loop() \n{\n    if(Serial.available())\n    {\n        char c = Serial.read();\n        if(c == \'r\')            // begin to record\n        {\n            digitalWrite(pinRec, LOW);\n            Serial.println("start recording...");\n        }\n        else if(c == \'s\')       // stop recording\n        {\n            digitalWrite(pinRec, HIGH);\n            Serial.println("stop recording...");\n        }\n        else if(c == \'p\')       // play\n        {\n            digitalWrite(pinPlay, LOW);\n            delay(100);\n            digitalWrite(pinPlay, HIGH);\n            Serial.println("play...");\n        }\n    }\n}\n')),(0,o.kt)("h2",{id:"enter-command"},"Enter Command"),(0,o.kt)("p",null,"You can enter some command in Serial monitor:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Start recording")," - Enter a 'r'"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Stop recording")," - Enter a 's'"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Play")," - Enter a 'p'")),(0,o.kt)("h3",{id:"play-with-codecraft"},"Play with Codecraft"),(0,o.kt)("h4",{id:"hardware"},"Hardware"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Step 1.")," Connect a Grove - Record to port D2 of a Base Shield."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Step 2.")," Plug the Base Shield to your Seeeduino/Arduino."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Step 3.")," Link Seeeduino/Arduino to your PC via an USB cable."),(0,o.kt)("h4",{id:"software-1"},"Software"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Step 1.")," Open ",(0,o.kt)("a",{parentName:"p",href:"https://ide.chmakered.com/"},"Codecraft"),", add Arduino support, and drag a main procedure to working area."),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre"},"If this is your first time using Codecraft, see also [Guide for Codecraft using Arduino](https://wiki.seeedstudio.com/Guide_for_Codecraft_using_Arduino/).\n"))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Step 2.")," Drag blocks as picture below or open the cdc file which can be downloaded at the end of this page."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Grove_Recorder/img/cc_Recorder.png",alt:"cc"})),(0,o.kt)("p",null,"Upload the program to your Arduino/Seeeduino."),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre"},"When the code finishes uploaded, you can use Recorder to record and play via Serial Monitor.\n"))),(0,o.kt)("h2",{id:"schematic-online-viewer"},"Schematic Online Viewer"),(0,o.kt)("div",{className:"altium-ecad-viewer","data-project-src":"https://files.seeedstudio.com/wiki/Grove_Recorder_V3/res/eagle.zip",style:{borderRadius:"0px 0px 4px 4px",height:500,borderStyle:"solid",borderWidth:1,borderColor:"rgb(241, 241, 241)",overflow:"hidden",maxWidth:1280,maxHeight:700,boxSizing:"border-box"}}),(0,o.kt)("h2",{id:"resources"},"Resources"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Grove_Recorder_V3/res/Grove%20-%20Recorder%20v3.0a.pdf"},"Schematics in PDF")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Grove_Recorder_V3/res/eagle.zip"},"Schematics in Eagle")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Grove_Recorder/res/Grove_Recorder_CDC_File.zip"},"Codecraft CDC File"))),(0,o.kt)("h2",{id:"tech-support"},"Tech Support"),(0,o.kt)("p",null," if you have any technical issue.  submit the issue into our ",(0,o.kt)("a",{parentName:"p",href:"http://forum.seeedstudio.com/"},"forum"),"."),(0,o.kt)("div",null,(0,o.kt)("br",null),(0,o.kt)("p",{style:{textAlign:"center"}},(0,o.kt)("a",{href:"https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts",target:"_blank"},(0,o.kt)("img",{src:"https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg"})))))}u.isMDXComponent=!0}}]);