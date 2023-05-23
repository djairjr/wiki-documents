"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[78672],{3905:(t,e,r)=>{r.d(e,{Zo:()=>c,kt:()=>m});var i=r(67294);function o(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function l(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,i)}return r}function n(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?l(Object(r),!0).forEach((function(e){o(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function a(t,e){if(null==t)return{};var r,i,o=function(t,e){if(null==t)return{};var r,i,o={},l=Object.keys(t);for(i=0;i<l.length;i++)r=l[i],e.indexOf(r)>=0||(o[r]=t[r]);return o}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(i=0;i<l.length;i++)r=l[i],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(o[r]=t[r])}return o}var s=i.createContext({}),u=function(t){var e=i.useContext(s),r=e;return t&&(r="function"==typeof t?t(e):n(n({},e),t)),r},c=function(t){var e=u(t.components);return i.createElement(s.Provider,{value:e},t.children)},p="mdxType",k={inlineCode:"code",wrapper:function(t){var e=t.children;return i.createElement(i.Fragment,{},e)}},d=i.forwardRef((function(t,e){var r=t.components,o=t.mdxType,l=t.originalType,s=t.parentName,c=a(t,["components","mdxType","originalType","parentName"]),p=u(r),d=o,m=p["".concat(s,".").concat(d)]||p[d]||k[d]||l;return r?i.createElement(m,n(n({ref:e},c),{},{components:r})):i.createElement(m,n({ref:e},c))}));function m(t,e){var r=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var l=r.length,n=new Array(l);n[0]=d;var a={};for(var s in e)hasOwnProperty.call(e,s)&&(a[s]=e[s]);a.originalType=t,a[p]="string"==typeof t?t:o,n[1]=a;for(var u=2;u<l;u++)n[u]=r[u];return i.createElement.apply(null,n)}return i.createElement.apply(null,r)}d.displayName="MDXCreateElement"},86594:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>s,contentTitle:()=>n,default:()=>p,frontMatter:()=>l,metadata:()=>a,toc:()=>u});var i=r(87462),o=(r(67294),r(3905));const l={description:"Grove_Inventor_Kit_for_microbit",title:"Grove Inventor Kit for microbit",tags:["micro_bit"],keywords:["micro_bit"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Grove_Inventor_Kit_for_microbit",last_update:{date:"01/05/2022",author:"Eico"},no_comments:!1},n=void 0,a={unversionedId:"Top_Brand/Micro_bit/Grove_Inventor_Kit_for_microbit",id:"Top_Brand/Micro_bit/Grove_Inventor_Kit_for_microbit",title:"Grove Inventor Kit for microbit",description:"Grove_Inventor_Kit_for_microbit",source:"@site/docs/Top_Brand/Micro_bit/Grove_Inventor_Kit_for_microbit.md",sourceDirName:"Top_Brand/Micro_bit",slug:"/Grove_Inventor_Kit_for_microbit",permalink:"/Grove_Inventor_Kit_for_microbit",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Top_Brand/Micro_bit/Grove_Inventor_Kit_for_microbit.md",tags:[{label:"micro_bit",permalink:"/tags/micro-bit"}],version:"current",lastUpdatedBy:"Eico",lastUpdatedAt:1641340800,formattedLastUpdatedAt:"Jan 5, 2022",frontMatter:{description:"Grove_Inventor_Kit_for_microbit",title:"Grove Inventor Kit for microbit",tags:["micro_bit"],keywords:["micro_bit"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Grove_Inventor_Kit_for_microbit",last_update:{date:"01/05/2022",author:"Eico"},no_comments:!1},sidebar:"ProductSidebar",previous:{title:"A603 Carrier Board",permalink:"/reComputer_A603_Flash_System"},next:{title:"microbit wiki page",permalink:"/microbit_wiki_page"}},s={},u=[{value:"Features",id:"features",level:2},{value:"Hardware Overview",id:"hardware-overview",level:2},{value:"<strong>Parts list</strong>",id:"parts-list",level:3},{value:"Getting Started",id:"getting-started",level:2},{value:"Fundamentals with  Micro:bit",id:"fundamentals-with--microbit",level:3},{value:"Step1.Open the Editor",id:"step1open-the-editor",level:4},{value:"Step2.Add Grove Package",id:"step2add-grove-package",level:4},{value:"Demo 1. Gesture Recognition",id:"demo-1-gesture-recognition",level:3},{value:"Part list",id:"part-list",level:4},{value:"Connection",id:"connection",level:4},{value:"Software",id:"software",level:4},{value:"Demo 2. Ultrasonic Meter",id:"demo-2-ultrasonic-meter",level:3},{value:"Part list",id:"part-list-1",level:4},{value:"Connection",id:"connection-1",level:4},{value:"software",id:"software-1",level:4},{value:"Schematic Online Viewer",id:"schematic-online-viewer",level:2},{value:"Resources",id:"resources",level:2},{value:"Tech Support",id:"tech-support",level:2}],c={toc:u};function p(t){let{components:e,...r}=t;return(0,o.kt)("wrapper",(0,i.Z)({},c,r,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("p",{style:{textAlign:"center"}},(0,o.kt)("img",{src:"https://files.seeedstudio.com/wiki/Grove_kit_for_microbit/img/zoro_im_kitbox.jpg",alt:"pir",width:600,height:"auto"})),(0,o.kt)("p",null,"The BBC micro:bit is a pocket-sized computer that can easily realize your creativity without much electrical and coding knowledge. There are numerous possibility of creation you can dig out by micro:bit, from robots to musical instruments. However if you want to create more things, just 1 micro:bit is barely not enough, That\u2019s why we introduce the Grove Inventor Kit for micro:bit to you."),(0,o.kt)("p",null,"The Grove Inventor Kit for Micro:bit brings endless possibilities to your micro:bit. The core board in this kit is the Grove shield for micro:bit, with which you can use plenty of Grove modules including sensors, display, actuator to interact with micro:bit. If you never used and have no idea what grove is, here is the introduction of Grove. All you need to know is that with Grove, there is no need of soldering or jump wires any more. Your prototyping will be easier and much more convenient."),(0,o.kt)("p",null,"We have already prepared 8 grove modules to let you get started with micro:bit. With these grove modules, you can measure distance and display it, use gesture to play different music, or make a smart guard for your desk or room. We have prepared all the necessary libraries(packages) for free download. If you are a beginner to micro:bit, don\u2019t worry because we have also prepare 12 different project which can teach you step by step. If you are an advanced user, this kit will help you more creative project than others."),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"The output voltage of micro:bit is around 3.0V, use microbit or AA battery to power the circuit may cause malfunction of Grove modules which requires high input voltage and drive current(e.g Grove - Ultrasonic Ranger). In order to make these kind of Grove function well, please use the micro-USB port on Grove shield for microbit to power the circuit.")),(0,o.kt)("div",{class:"get_one_now_container",style:{textAlign:"center"}},(0,o.kt)("a",{class:"get_one_now_item",href:"https://www.seeedstudio.com/Grove-Inventor-Kit-for-micro%3Abit-p-2891.html"},(0,o.kt)("strong",null,(0,o.kt)("span",null,(0,o.kt)("font",{color:"FFFFFF",size:"4"}," Get One Now \ud83d\uddb1\ufe0f"))))),(0,o.kt)("h2",{id:"features"},"Features"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Cool extension shield with rich and convenient peripherals;"),(0,o.kt)("li",{parentName:"ul"},"10 well selected Grove modules for working with micro:bit;"),(0,o.kt)("li",{parentName:"ul"},"12 awesome projects to let you get started quickly;"),(0,o.kt)("li",{parentName:"ul"},"Well documented instruction.")),(0,o.kt)("h2",{id:"hardware-overview"},"Hardware Overview"),(0,o.kt)("p",{style:{textAlign:"center"}},(0,o.kt)("img",{src:"https://files.seeedstudio.com/wiki/Grove_kit_for_microbit/img/first_im.jpg",alt:"pir",width:600,height:"auto"})),(0,o.kt)("h3",{id:"parts-list"},(0,o.kt)("strong",{parentName:"h3"},"Parts list")),(0,o.kt)("table",{align:"center"},(0,o.kt)("tbody",null,(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("h3",null,"Part name")),(0,o.kt)("td",null,(0,o.kt)("h3",null,"Quantity"))),(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("h4",null,"Grove Shield for micro:bit")),(0,o.kt)("td",null,(0,o.kt)("h4",null,"1"))),(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("h4",null,"Grove - Rotary Angle Sensor(P)")),(0,o.kt)("td",null,(0,o.kt)("h4",null,"1"))),(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("h4",null,"Grove - Speaker ")),(0,o.kt)("td",null,(0,o.kt)("h4",null,"1"))),(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("h4",null,"Grove - Ultrasonic Ranger")),(0,o.kt)("td",null,(0,o.kt)("h4",null,"1"))),(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("h4",null,"Grove - Light Sensor v1.2")),(0,o.kt)("td",null,(0,o.kt)("h4",null,"1"))),(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("h4",null,"Grove - WS2812 Waterproof LED Strip - 30 LEDs 1 meter")),(0,o.kt)("td",null,(0,o.kt)("h4",null,"1"))),(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("h4",null,"Grove - Gesture")),(0,o.kt)("td",null,(0,o.kt)("h4",null,"1"))),(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("h4",null,"Grove - 4-Digit Display")),(0,o.kt)("td",null,(0,o.kt)("h4",null,"1"))),(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("h4",null,"Grove - Red LED")),(0,o.kt)("td",null,(0,o.kt)("h4",null,"1"))),(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("h4",null,"Micro USB Cable - 48cm")),(0,o.kt)("td",null,(0,o.kt)("h4",null,"1"))),(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("h4",null,"12 Projects Manual")),(0,o.kt)("td",null,(0,o.kt)("h4",null,"1"))),(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("h4",null,"Alligator Cable")),(0,o.kt)("td",null,(0,o.kt)("h4",null,"10"))),(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("h4",null,"Grove Cable")),(0,o.kt)("td",null,(0,o.kt)("h4",null,"7"))))),(0,o.kt)("h2",{id:"getting-started"},"Getting Started"),(0,o.kt)("h3",{id:"fundamentals-with--microbit"},"Fundamentals with  Micro:bit"),(0,o.kt)("p",null,"You need to know some essential knowledge if it is the first time that you get involved with Micro:bit. You can click ",(0,o.kt)("a",{parentName:"p",href:"https://microbit.org/code/"}," ",(0,o.kt)("strong",{parentName:"a"},"here")," ")," to see more about Micro:bit."),(0,o.kt)("p",null,"Micro:bit offers two type of editor - JavaScript Block Editor and Python Editor. JavaScript Block Editor support graphical programming, it's easy to learn. So this Tutorial is based on JavaScript Block Editor."),(0,o.kt)("p",null,"Here are two simple steps before you enjoy our kit, after that we can start program."),(0,o.kt)("h4",{id:"step1open-the-editor"},"Step1.Open the Editor"),(0,o.kt)("p",null,"Please click to open the ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"https://makecode.microbit.org/"},"JavaScript Block Editor"))," , and you will see a graphical programming web."),(0,o.kt)("h4",{id:"step2add-grove-package"},"Step2.Add Grove Package"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Click the gear in the top right corner > select ",(0,o.kt)("strong",{parentName:"p"},"Add Package")),(0,o.kt)("p",{style:{textAlign:"center"}},(0,o.kt)("img",{src:"https://files.seeedstudio.com/wiki/Grove_kit_for_microbit/img/0-1.png",alt:"pir",width:800,height:"auto"}))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Enter project URL: ",(0,o.kt)("strong",{parentName:"p"},"github.com/seeed-studio/pxt-grove")),(0,o.kt)("p",{style:{textAlign:"center"}},(0,o.kt)("img",{src:"https://files.seeedstudio.com/wiki/Grove_kit_for_microbit/img/0-2.png",alt:"pir",width:800,height:"auto"}))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Now you can find ",(0,o.kt)("strong",{parentName:"p"},"Grove"),"  in the toolbar."),(0,o.kt)("p",{style:{textAlign:"center"}},(0,o.kt)("img",{src:"https://files.seeedstudio.com/wiki/Grove_kit_for_microbit/img/0-3.png",alt:"pir",width:800,height:"auto"})))),(0,o.kt)("h3",{id:"demo-1-gesture-recognition"},"Demo 1. Gesture Recognition"),(0,o.kt)("p",null,"The gesture sensor can recognize 9 different gestures, in this demo, you will learn how to display the recognized\ngesture name on micro:bit."),(0,o.kt)("h4",{id:"part-list"},"Part list"),(0,o.kt)("table",{align:"center"},(0,o.kt)("tbody",null,(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("h3",null,"Part name")),(0,o.kt)("td",null,(0,o.kt)("h4",null,"Number"))),(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("h4",null,"Grove - Gesture")),(0,o.kt)("td",null,(0,o.kt)("h4",null,"1"))),(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("h4",null,"Grove Shield for micro:bit")),(0,o.kt)("td",null,(0,o.kt)("h4",null,"1"))),(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("h4",null,"micro:bit")),(0,o.kt)("td",null,(0,o.kt)("h4",null,"1"))),(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("h4",null,"Grove Universal 4 pin cable")),(0,o.kt)("td",null,(0,o.kt)("h4",null,"1"))),(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("h4",null,"Micro-USB cable")),(0,o.kt)("td",null,(0,o.kt)("h4",null,"1"))))),(0,o.kt)("h4",{id:"connection"},"Connection"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Plug the ",(0,o.kt)("strong",{parentName:"li"},"micro:bit")," into ",(0,o.kt)("strong",{parentName:"li"},"Grove Shield for micro:bit"),"."),(0,o.kt)("li",{parentName:"ul"},"Connect the Grove-Gesture to ",(0,o.kt)("strong",{parentName:"li"},"I2C")," Port of micro:bit via a Grove Universal 4 pin cable."),(0,o.kt)("li",{parentName:"ul"},"Connect micro:bit to PC via a Micro-USB cable.")),(0,o.kt)("admonition",{type:"warning"},(0,o.kt)("p",{parentName:"admonition"},"please make sure the LED Array is faced up when you plug the micro:bit, or you may damage the board.")),(0,o.kt)("p",{style:{textAlign:"center"}},(0,o.kt)("img",{src:"https://files.seeedstudio.com/wiki/Grove_kit_for_microbit/img/Gesture%20Recognition.png",alt:"pir",width:600,height:"auto"})),(0,o.kt)("h4",{id:"software"},"Software"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Step1:"),(0,o.kt)("p",{parentName:"li"},"  Add On Gesture Block"),(0,o.kt)("p",{style:{textAlign:"center"}},(0,o.kt)("img",{src:"https://files.seeedstudio.com/wiki/Grove_kit_for_microbit/img/1-1.png",alt:"pir",width:600,height:"auto"}))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Step2:"),(0,o.kt)("p",{parentName:"li"},"  Select Right, so that the sensor can recognize when you move your hand from right to the left."),(0,o.kt)("p",{style:{textAlign:"center"}},(0,o.kt)("img",{src:"https://files.seeedstudio.com/wiki/Grove_kit_for_microbit/img/1-2.png",alt:"pir",width:600,height:"auto"}))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Step3:"),(0,o.kt)("p",{parentName:"li"},"  Add Basic block ",(0,o.kt)("strong",{parentName:"p"},"show string"),' and embed it into the Gesture block.Then double click "Hello!", change it to "Right".'),(0,o.kt)("p",{style:{textAlign:"center"}},(0,o.kt)("img",{src:"https://files.seeedstudio.com/wiki/Grove_kit_for_microbit/img/1-3.png",alt:"pir",width:600,height:"auto"}))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Step4:"),(0,o.kt)("p",{parentName:"li"},'  Add "Left" and "Clockwise" the same way, and embed ',(0,o.kt)("strong",{parentName:"p"},"show icon"),' into "Clockwise".'),(0,o.kt)("p",{style:{textAlign:"center"}},(0,o.kt)("img",{src:"https://files.seeedstudio.com/wiki/Grove_kit_for_microbit/img/1-4.png",alt:"pir",width:600,height:"auto"}))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Step5:"),(0,o.kt)("p",{parentName:"li"},'When you finish all this above, rename the project "gesture". Then you can download the project to your board. Click ',(0,o.kt)("strong",{parentName:"p"},"Download")," in the Bottom left corner, download the file ",(0,o.kt)("strong",{parentName:"p"},"microbit-gesture.hex")," into the flash of MICROBIT."))),(0,o.kt)("p",{style:{textAlign:"center"}},(0,o.kt)("img",{src:"https://files.seeedstudio.com/wiki/Grove_kit_for_microbit/img/1-5.png",alt:"pir",width:600,height:"auto"})),(0,o.kt)("p",null,"  Now enjoy your project."),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"  You can find the blocks by color. For example, if you don't where ",(0,o.kt)("strong",{parentName:"p"},"show icon")," is ,since it's blue and the Module ",(0,o.kt)("strong",{parentName:"p"},"Basic")," is blue,you can find it here. Simple and effective, isn't it?")),(0,o.kt)("h3",{id:"demo-2-ultrasonic-meter"},"Demo 2. Ultrasonic Meter"),(0,o.kt)("p",null,"In this demo, you will learn how to use the ultrasonic sensor to measure distance and show the value on a\ndisplay."),(0,o.kt)("h4",{id:"part-list-1"},"Part list"),(0,o.kt)("table",{align:"center"},(0,o.kt)("tbody",null,(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("h3",null,"Part name")),(0,o.kt)("td",null,(0,o.kt)("h4",null,"Number"))),(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("h4",null,"Grove - Ultrasonic Ranger")),(0,o.kt)("td",null,(0,o.kt)("h4",null,"1"))),(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("h4",null,"Grove - 4-Digit Display")),(0,o.kt)("td",null,(0,o.kt)("h4",null,"1"))),(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("h4",null,"Grove Shield for micro:bit")),(0,o.kt)("td",null,(0,o.kt)("h4",null,"1"))),(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("h4",null,"micro:bit")),(0,o.kt)("td",null,(0,o.kt)("h4",null,"1"))),(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("h4",null,"Grove Universal 4 pin cable")),(0,o.kt)("td",null,(0,o.kt)("h4",null,"2"))),(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("h4",null,"Micro-USB cable")),(0,o.kt)("td",null,(0,o.kt)("h4",null,"1"))))),(0,o.kt)("h4",{id:"connection-1"},"Connection"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Plug the ",(0,o.kt)("strong",{parentName:"li"},"micro:bit")," into ",(0,o.kt)("strong",{parentName:"li"},"Grove Shield for micro:bit"),".")),(0,o.kt)("admonition",{type:"warning"},(0,o.kt)("p",{parentName:"admonition"},"please make sure the LED Array is faced up when you plug the micro:bit, or you may damage the board.")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Connect the Grove-Ultrasonic Ranger to ",(0,o.kt)("strong",{parentName:"li"},"P0/P14")," Port of micro:bit via a Grove Universal 4 pin cable."),(0,o.kt)("li",{parentName:"ul"},"Connect the Grove-4-Digit Display to ",(0,o.kt)("strong",{parentName:"li"},"P1/P15")," Port of micro:bit via a Grove Universal 4 pin cable."),(0,o.kt)("li",{parentName:"ul"},"Connect micro:bit to PC via a Micro-USB cable.",(0,o.kt)("p",{style:{textAlign:"center"}},(0,o.kt)("img",{src:"https://files.seeedstudio.com/wiki/Grove_kit_for_microbit/img/Ultrasonic_Meter.png",alt:"pir",width:600,height:"auto"})))),(0,o.kt)("h4",{id:"software-1"},"software"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Step1:"),(0,o.kt)("p",{parentName:"li"},"  Add basic block ",(0,o.kt)("strong",{parentName:"p"},"on start"),", then add variable blocks ",(0,o.kt)("strong",{parentName:"p"},"set item to 0"),", rename \u2018items\u2019 to \u2018Display\u2019. If you have successfully added the Grove package, replace \u201c0\u201dwith Grove block 4-Digit Display at P1 and P15."),(0,o.kt)("p",{style:{textAlign:"center"}},(0,o.kt)("img",{src:"https://files.seeedstudio.com/wiki/Grove_kit_for_microbit/img/2-1.png",alt:"pir",width:600,height:"auto"})))),(0,o.kt)("p",{style:{textAlign:"center"}},(0,o.kt)("img",{src:"https://files.seeedstudio.com/wiki/Grove_kit_for_microbit/img/2-2.png",alt:"pir",width:600,height:"auto"})),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Step2:"),(0,o.kt)("p",{parentName:"li"},"Add basic block forever, then add Grove block item show number 0, rename \u2018item\u2019 to \u2018Display\u2019, replace \u20180\u2019 with Grove block Ultrasonic Sensor (in cm) at P0.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Step3:"),(0,o.kt)("p",{parentName:"li"},"  Add basic block pause (ms) (100)."),(0,o.kt)("p",{style:{textAlign:"center"}},(0,o.kt)("img",{src:"https://files.seeedstudio.com/wiki/Grove_kit_for_microbit/img/2-3.png",alt:"pir",width:600,height:"auto"}))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Step4:"),(0,o.kt)("p",{parentName:"li"},'Rename the project "Ultrasonic Meter", download and enjoy.'))),(0,o.kt)("h2",{id:"schematic-online-viewer"},"Schematic Online Viewer"),(0,o.kt)("div",{className:"altium-ecad-viewer","data-project-src":"https://files.seeedstudio.com/wiki/Bazzar_Attachment/103030195/202001587_Grove%20Shield%20for%20BBC%20microbit%20V1.2_eagle%20file.zip",style:{borderRadius:"0px 0px 4px 4px",height:500,borderStyle:"solid",borderWidth:1,borderColor:"rgb(241, 241, 241)",overflow:"hidden",maxWidth:1280,maxHeight:700,boxSizing:"border-box"}}),(0,o.kt)("h2",{id:"resources"},"Resources"),(0,o.kt)("p",null,"  ",(0,o.kt)("a",{parentName:"p",href:"https://files.seeedstudio.com/wiki/Grove_kit_for_microbit/res/Guide_Grove_kit_for_microbit.pdf"},(0,o.kt)("strong",{parentName:"a"},"Grove Inventor Kit for micro:bit User Manual"))),(0,o.kt)("p",null,"  ",(0,o.kt)("a",{parentName:"p",href:"http://microbit.org/start/"},(0,o.kt)("strong",{parentName:"a"},"micro:bit Getting Started Videos"))),(0,o.kt)("p",null,"  ",(0,o.kt)("a",{parentName:"p",href:"http://microbit.org/about/"},(0,o.kt)("strong",{parentName:"a"},"About micro:bit"))),(0,o.kt)("p",null,"  ",(0,o.kt)("a",{parentName:"p",href:"http://microbit.org/guide/hardware/"},(0,o.kt)("strong",{parentName:"a"},"micro:bit Hardware"))),(0,o.kt)("p",null,"  ",(0,o.kt)("a",{parentName:"p",href:"http://microbit.org/code/"},(0,o.kt)("strong",{parentName:"a"},"micro:bit Apps"))),(0,o.kt)("p",null,"  ",(0,o.kt)("a",{parentName:"p",href:"https://files.seeedstudio.com/wiki/Bazzar_Attachment/103030195/202001587_Grove%20Shield%20for%20BBC%20microbit%20V1.2_eagle%20file.zip"},(0,o.kt)("strong",{parentName:"a"},"Grove Shield for microbit_eagle file.zip"))),(0,o.kt)("h2",{id:"tech-support"},"Tech Support"),(0,o.kt)("p",null,"Please do not hesitate to submit the issue into our ",(0,o.kt)("a",{parentName:"p",href:"https://forum.seeedstudio.com/"},"forum"),"."),(0,o.kt)("br",null),(0,o.kt)("p",{style:{textAlign:"center"}},(0,o.kt)("a",{href:"https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts",target:"_blank"},(0,o.kt)("img",{src:"https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg"}))))}p.isMDXComponent=!0}}]);