"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[21023],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=p(n),h=r,m=u["".concat(l,".").concat(h)]||u[h]||c[h]||i;return n?a.createElement(m,o(o({ref:t},d),{},{components:n})):a.createElement(m,o({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:r,o[1]=s;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},22798:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const i={description:"Getting Started with Seeed Studio XIAO nRF52840 (Sense)",title:"Getting Started with XIAO nRF52840",keywords:["xiao"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/XIAO_BLE",last_update:{date:"1/11/2023",author:"shuxu hu"}},o="Getting Started with Seeed Studio XIAO nRF52840 (Sense)",s={unversionedId:"Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_nRF52840-Sense/XIAO_BLE",id:"Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_nRF52840-Sense/XIAO_BLE",title:"Getting Started with XIAO nRF52840",description:"Getting Started with Seeed Studio XIAO nRF52840 (Sense)",source:"@site/docs/Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_nRF52840-Sense/XIAO_BLE.md",sourceDirName:"Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_nRF52840-Sense",slug:"/XIAO_BLE",permalink:"/XIAO_BLE",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_nRF52840-Sense/XIAO_BLE.md",tags:[],version:"current",lastUpdatedBy:"shuxu hu",lastUpdatedAt:1673395200,formattedLastUpdatedAt:"Jan 11, 2023",frontMatter:{description:"Getting Started with Seeed Studio XIAO nRF52840 (Sense)",title:"Getting Started with XIAO nRF52840",keywords:["xiao"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/XIAO_BLE",last_update:{date:"1/11/2023",author:"shuxu hu"}},sidebar:"ProductSidebar",previous:{title:"Motion Recognition based on Edge Impulse",permalink:"/XIAO-RP2040-EI"},next:{title:"XIAO nRF52840(sense) With Zephyr(RTOS)",permalink:"/XIAO-nRF52840-Zephyr-RTOS"}},l={},p=[{value:"Features",id:"features",level:2},{value:"Specifications comparison",id:"specifications-comparison",level:2},{value:"Hardware overview",id:"hardware-overview",level:2},{value:"Two Arduino Libraries",id:"two-arduino-libraries",level:2},{value:"Getting started",id:"getting-started",level:2},{value:"Hardware setup",id:"hardware-setup",level:3},{value:"Software setup",id:"software-setup",level:3},{value:"Playing with the built-in 3-in-one LED",id:"playing-with-the-built-in-3-in-one-led",level:2},{value:"Power Consumption Verification",id:"power-consumption-verification",level:2},{value:"Accelerometer Examples and Low Power",id:"accelerometer-examples-and-low-power",level:3},{value:"Battery Charging current",id:"battery-charging-current",level:2},{value:"Access the SWD Pins for Debugging and Reflashing Bootloader",id:"access-the-swd-pins-for-debugging-and-reflashing-bootloader",level:2},{value:"FAQ",id:"faq",level:2},{value:"Q1: My Arduino IDE is stuck when uploading code to the board",id:"q1-my-arduino-ide-is-stuck-when-uploading-code-to-the-board",level:3},{value:"Q2: My board is not showing up as a serial device on Arduino IDE",id:"q2-my-board-is-not-showing-up-as-a-serial-device-on-arduino-ide",level:3},{value:"Q3: What are the considerations when using XIAO nRF52840 (Sense) for battery charging?",id:"q3-what-are-the-considerations-when-using-xiao-nrf52840-sense-for-battery-charging",level:3},{value:"Resources",id:"resources",level:2},{value:"Seeed Studio XIAO nRF52840",id:"seeed-studio-xiao-nrf52840",level:3},{value:"Seeed Studio XIAO nRF52840 Sense",id:"seeed-studio-xiao-nrf52840-sense",level:3},{value:"Tech Support &amp; Product Discussion",id:"tech-support--product-discussion",level:2}],d={toc:p},u="wrapper";function c(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"getting-started-with-seeed-studio-xiao-nrf52840-sense"},"Getting Started with Seeed Studio XIAO nRF52840 (Sense)"),(0,r.kt)("meta",{name:"google-site-verification",content:"2bq3L0F_PFVokQM-qT-al7x9FcSNJOO8TtJfAHW43lE"}),(0,r.kt)("p",{style:{textAlign:"center"}},(0,r.kt)("img",{src:"https://files.seeedstudio.com/wiki/XIAO-BLE/102010469_Front-14.jpg",alt:"pir",width:700,height:"auto"})),(0,r.kt)("p",null,"As the first wireless product in the Seeed Studio XIAO family, ",(0,r.kt)("strong",{parentName:"p"},"Seeed Studio XIAO nRF52840")," is equipped with a powerful ",(0,r.kt)("strong",{parentName:"p"},"Nordic nRF52840 MCU")," which integrates ",(0,r.kt)("strong",{parentName:"p"},"Bluetooth 5.0")," connectivity. Meanwhile, it has a ",(0,r.kt)("strong",{parentName:"p"},"small and exquisite form-factor")," which can be used for wearable devices and Internet of Things projects. The ",(0,r.kt)("strong",{parentName:"p"},"single-sided surface-mountable design")," and the onboard ",(0,r.kt)("strong",{parentName:"p"},"Bluetooth antenna")," can greatly facilitate the rapid deployment of IoT projects."),(0,r.kt)("p",null,"In addition, there is an advanced version of this board, ",(0,r.kt)("strong",{parentName:"p"},"Seeed  Studio XIAO nRF52840 Sense"),". It is integrated with two extra onboard sensors. One of them is a ",(0,r.kt)("strong",{parentName:"p"},"Pulse Density Modulation (PDM) Digital Microphone"),". It can receive audio data in real-time which allows it to be used for audio recognition. The other one is a ",(0,r.kt)("strong",{parentName:"p"},"6-axis Inertial Measurement Unit (IMU)"),", this IMU can be very useful in TinyML projects like gesture recognition. These onboard sensors provide a great convenience for users while the board is ultra-small."),(0,r.kt)("p",null,"Compared to Seeed Studio XIAO RP2040,  Seeed Studio XIAO nRF52840 contains ",(0,r.kt)("strong",{parentName:"p"},"richer interfaces"),". The first thing to note is that the ",(0,r.kt)("strong",{parentName:"p"},"Near Field Communication (NFC) interface")," is functional on the board. Secondly, there is a tiny ",(0,r.kt)("strong",{parentName:"p"},"reset button")," on the side of the Type-C interface. On the other side, there is a ",(0,r.kt)("strong",{parentName:"p"},"3-in-one LED (User LED)")," along with a ",(0,r.kt)("strong",{parentName:"p"},"Charge LED")," to indicate the charging status when a battery is connected. There are ",(0,r.kt)("strong",{parentName:"p"},"11 digital I/O")," that can be used as ",(0,r.kt)("strong",{parentName:"p"},"PWM pins")," and ",(0,r.kt)("strong",{parentName:"p"},"6 analog I/O")," that can be used as ",(0,r.kt)("strong",{parentName:"p"},"ADC pins"),". It supports all three common serial interfaces such as ",(0,r.kt)("strong",{parentName:"p"},"UART, I2C, and SPI"),". Same as Seeed Studio XIAO RP2040, it has an ",(0,r.kt)("strong",{parentName:"p"},"onboard 2 MB flash")," which means it can also be programmed using ",(0,r.kt)("strong",{parentName:"p"},"Arduino, MicroPython, CircuitPython, or other programming languages"),"."),(0,r.kt)("p",null,"Seeed Studio XIAO nRF52840 Sense is compatible to the Seeed Studio XIAO expansion board."),(0,r.kt)("div",{class:"get_one_now_container",style:{textAlign:"center"}},(0,r.kt)("a",{class:"get_one_now_item",href:"https://www.seeedstudio.com/Seeed-XIAO-BLE-nRF52840-p-5201.html"},(0,r.kt)("strong",null,(0,r.kt)("span",null,(0,r.kt)("font",{color:"FFFFFF",size:"4"}," Get One Now \ud83d\uddb1\ufe0f"))))),(0,r.kt)("h2",{id:"features"},"Features"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Powerful wireless capabilities: Bluetooth 5.0 with onboard antenna"),(0,r.kt)("li",{parentName:"ul"},"Powerful CPU: Nordic nRF52840, ARM\xae Cortex\xae-M4 32-bit processor with FPU, 64 MHz"),(0,r.kt)("li",{parentName:"ul"},"Ultra-Low Power: Standby power consumption is less than 5\u03bcA"),(0,r.kt)("li",{parentName:"ul"},"Battery charging chip: Supports lithium battery charge and discharge management"),(0,r.kt)("li",{parentName:"ul"},"Onboard 2 MB flash"),(0,r.kt)("li",{parentName:"ul"},"Onboard PDM microphone (only in Seeed Studio XIAO nRF52840 Sense)"),(0,r.kt)("li",{parentName:"ul"},"Onboard 6-axis LSM6DS3TR-C IMU (only in Seeed Studio XIAO nRF52840 Sense)"),(0,r.kt)("li",{parentName:"ul"},"Ultra Small Size: 20 x 17.5mm, Seeed Studio XIAO series classic form-factor for wearable devices"),(0,r.kt)("li",{parentName:"ul"},"Rich interfaces: 1xUART, 1xI2C, 1xSPI, 1xNFC, 1xSWD, 11xGPIO(PWM), 6xADC"),(0,r.kt)("li",{parentName:"ul"},"Single-sided components, surface mounting design")),(0,r.kt)("h2",{id:"specifications-comparison"},"Specifications comparison"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},"Item"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Seeed Studio XIAO SAMD21"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Seeed Seeed Studio XIAO   RP2040"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Seeed Seeed Studio XIAO nRF52840"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Seeed Seeed Studio XIAO nRF52840   Sense"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"Processor"),(0,r.kt)("td",{parentName:"tr",align:"center"},"SAMD21 M0+@48MHz"),(0,r.kt)("td",{parentName:"tr",align:"center"},"RP2040 Dual-core M0+@133Mhz"),(0,r.kt)("td",{parentName:"tr",align:"center"},"nRF52840 M4F@64MHz"),(0,r.kt)("td",{parentName:"tr",align:"center"},"nRF52840 M4F@64MHz")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"Wireless Connectivity"),(0,r.kt)("td",{parentName:"tr",align:"center"},"N/A"),(0,r.kt)("td",{parentName:"tr",align:"center"},"N/A"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Bluetooth   5.0/BLE/NFC"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Bluetooth   5.0/BLE/NFC")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"Memory"),(0,r.kt)("td",{parentName:"tr",align:"center"},"32 KB SRAM 256KB FLASH"),(0,r.kt)("td",{parentName:"tr",align:"center"},"264 KB SRAM 2MB onboard Flash"),(0,r.kt)("td",{parentName:"tr",align:"center"},"256 KB RAM, 1MB   Flash 2MB onboard Flash"),(0,r.kt)("td",{parentName:"tr",align:"center"},"256 KB RAM,1MB   Flash 2MB onboard Flash")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"Built-in Sensors"),(0,r.kt)("td",{parentName:"tr",align:"center"},"N/A"),(0,r.kt)("td",{parentName:"tr",align:"center"},"N/A"),(0,r.kt)("td",{parentName:"tr",align:"center"},"N/A"),(0,r.kt)("td",{parentName:"tr",align:"center"},"6 DOF IMU (LSM6DS3TR-C), PDM Microphone")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"Interfaces"),(0,r.kt)("td",{parentName:"tr",align:"center"},"I2C/UART/SPI"),(0,r.kt)("td",{parentName:"tr",align:"center"},"I2C/UART/SPI"),(0,r.kt)("td",{parentName:"tr",align:"center"},"I2C/UART/SPI"),(0,r.kt)("td",{parentName:"tr",align:"center"},"I2C/UART/SPI")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"PWM/Analog Pins"),(0,r.kt)("td",{parentName:"tr",align:"center"},"11/11"),(0,r.kt)("td",{parentName:"tr",align:"center"},"11/4"),(0,r.kt)("td",{parentName:"tr",align:"center"},"11/6"),(0,r.kt)("td",{parentName:"tr",align:"center"},"11/6")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"Onboard Buttons"),(0,r.kt)("td",{parentName:"tr",align:"center"},"N/A"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Reset/ Boot Button"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Reset Button"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Reset Button")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"Onboard LEDs"),(0,r.kt)("td",{parentName:"tr",align:"center"},"N/A"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Full-color RGB/ 3-in-one LED"),(0,r.kt)("td",{parentName:"tr",align:"center"},"3-in-one LED/ Charge LED"),(0,r.kt)("td",{parentName:"tr",align:"center"},"3-in-one LED/ Charge LED")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"Battery Charge Chip"),(0,r.kt)("td",{parentName:"tr",align:"center"},"N/A"),(0,r.kt)("td",{parentName:"tr",align:"center"},"N/A"),(0,r.kt)("td",{parentName:"tr",align:"center"},"BQ25101"),(0,r.kt)("td",{parentName:"tr",align:"center"},"BQ25101")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"Programming Languages"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Arduino/ CircuitPython"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Arduino/ MicroPython/ CircuitPython"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Arduino/ MicroPython/ CircuitPython"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Arduino/ MicroPython/ CircuitPython")))),(0,r.kt)("h2",{id:"hardware-overview"},"Hardware overview"),(0,r.kt)("p",{style:{textAlign:"center"}},(0,r.kt)("img",{src:"https://files.seeedstudio.com/wiki/XIAO-BLE/front-pinout-4.jpg",alt:"pir",width:700,height:"auto"})),(0,r.kt)("p",{style:{textAlign:"center"}},(0,r.kt)("img",{src:"https:///files.seeedstudio.com/wiki/XIAO-BLE/pinout2.png",alt:"pir",width:800,height:"auto"})),(0,r.kt)("p",{style:{textAlign:"center"}},(0,r.kt)("img",{src:"https:///files.seeedstudio.com/wiki/XIAO-BLE/back-pinout-5.jpg",alt:"pir",width:700,height:"auto"})),(0,r.kt)("h2",{id:"two-arduino-libraries"},"Two Arduino Libraries"),(0,r.kt)("p",null,"Seeed Studio XIAO nRF52840 assembles many functions in one tiny board and sometimes may not perform the best of them. Hence, Seeed has published two Arduino libraries to let it ",(0,r.kt)("strong",{parentName:"p"},"maximum the power of each function"),". Therefore:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"It is recommanded to use the ",(0,r.kt)("inlineCode",{parentName:"li"},"Seeed nRF52 Boards")," library if you want to apply ",(0,r.kt)("strong",{parentName:"li"},"Bluetooth function"),' and "',(0,r.kt)("strong",{parentName:"li"},"Low Energy Cost Function"),'".'),(0,r.kt)("li",{parentName:"ul"},"It is recommanded to use the ",(0,r.kt)("inlineCode",{parentName:"li"},"Seeed nRF52 mbed-enabled Boards")," library if you want to use it in ",(0,r.kt)("strong",{parentName:"li"},"embedded Machine Learning Applications"),' or apply "',(0,r.kt)("strong",{parentName:"li"},"IMU & PDM advanced function"),'".'),(0,r.kt)("li",{parentName:"ul"},"Both libraries support very well when it comes to the basic usage, such as ",(0,r.kt)("strong",{parentName:"li"},"LED, Digital, Analog, Serial, I2C, SPI"),".")),(0,r.kt)("p",null,"The Pin definition supported by these two libraries might be a little different and Seeed will keep update the wiki until it is clear."),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("ol",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},'If you use the onboard package of Seeed nRF52 Boards, the Serial function may not compile. The solution is to add the line "#include <Adafruit_TinyUSB.h>" in your code. You can download this package from: ',(0,r.kt)("a",{parentName:"p",href:"https://github.com/adafruit/Adafruit_TinyUSB_Arduino"},"https://github.com/adafruit/Adafruit_TinyUSB_Arduino"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"If you prefer a simpler approach, you can choose Seeed nRF52 mbed-enabled Boards from the beginning. It supports the compilation of the Serial function without the need for additional modifications.")))),(0,r.kt)("h2",{id:"getting-started"},"Getting started"),(0,r.kt)("p",null,"First, we are going to connect the Seeed Studio XIAO nRF52840 (Sense) to the computer and upload a simple code from Arduino IDE to check whether the board is functioning well."),(0,r.kt)("h3",{id:"hardware-setup"},"Hardware setup"),(0,r.kt)("p",null,"You need to prepare the following:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"1 x ",(0,r.kt)("a",{parentName:"li",href:"https://www.seeedstudio.com/Seeed-XIAO-BLE-nRF52840-p-5201.html"},"Seeed Studio XIAO nRF52840")," or ",(0,r.kt)("a",{parentName:"li",href:"https://www.seeedstudio.com/Seeed-XIAO-BLE-Sense-nRF52840-p-5253.html"},"Studio XIAO nRF52840 Sense")),(0,r.kt)("li",{parentName:"ul"},"1 x Computer"),(0,r.kt)("li",{parentName:"ul"},"1 x USB Type-C cable")),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Some USB cables can only supply power and cannot transfer data. If you don't have a USB cable or don't know if your USB cable can transmit data, you can check ",(0,r.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/USB-3-1-Type-C-to-A-Cable-1-Meter-3-1A-p-4085.html"},"Seeed USB Type-C support USB 3.1"),".")),(0,r.kt)("p",null,"Connect the Seeed Studio XIAO nRF52840 (Sense) to your computer via a USB Type-C cable."),(0,r.kt)("p",{style:{textAlign:"center"}},(0,r.kt)("img",{src:"https://files.seeedstudio.com/wiki/XIAO-BLE/bletpyecconnect.png",alt:"pir",width:500,height:"auto"})),(0,r.kt)("h3",{id:"software-setup"},"Software setup"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Step 1.")," Download and Install the latest version of Arduino IDE according to your operating system")),(0,r.kt)("p",{style:{textAlign:"center"}},(0,r.kt)("a",{href:"https://www.arduino.cc/en/software"},(0,r.kt)("img",{src:"https://files.seeedstudio.com/wiki/Seeeduino_Stalker_V3_1/images/Download_IDE.png",alt:"pir",width:700,height:"auto"}))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Step 2.")," Launch the Arduino application")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Step 3.")," Add Seeed Studio XIAO nRF52840 (Sense) board package to your Arduino IDE"))),(0,r.kt)("p",null,"Navigate to ",(0,r.kt)("strong",{parentName:"p"},"File > Preferences"),", and fill ",(0,r.kt)("strong",{parentName:"p"},'"Additional Boards Manager URLs"')," with the url below:\n",(0,r.kt)("em",{parentName:"p"},(0,r.kt)("a",{parentName:"em",href:"https://files.seeedstudio.com/arduino/package_seeeduino_boards_index.json"},"https://files.seeedstudio.com/arduino/package_seeeduino_boards_index.json"))),(0,r.kt)("p",{style:{textAlign:"center"}},(0,r.kt)("img",{src:"https://files.seeedstudio.com/wiki/Wio-Terminal/img/Boardurl.png",alt:"pir",width:700,height:"auto"})),(0,r.kt)("p",null,"Navigate to ",(0,r.kt)("strong",{parentName:"p"},"Tools > Board > Boards Manager..."),', type the keyword "',(0,r.kt)("strong",{parentName:"p"},"seeed nrf52"),'" in the search box, select the latest version of the board you want, and install it. You can install both.'),(0,r.kt)("p",{style:{textAlign:"center"}},(0,r.kt)("img",{src:"https://files.seeedstudio.com/wiki/XIAO-BLE/XIAO_nrf528401.png",alt:"pir",width:700,height:"auto"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Step 4.")," Select your board and port")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Board")),(0,r.kt)("p",null,"After installing the board package, navigate to ",(0,r.kt)("strong",{parentName:"p"},"Tools > Board"),' and choose the board you want, continue to select "',(0,r.kt)("strong",{parentName:"p"},"Seeed XIAO nRF52840 Sense"),'". Now we have finished setting up the Seeed Studio XIAO nRF52840 (Sense) for Arduino IDE.'),(0,r.kt)("p",{style:{textAlign:"center"}},(0,r.kt)("img",{src:"https://files.seeedstudio.com/wiki/XIAO-BLE/XIAO_nrf528402.png",alt:"pir",width:700,height:"auto"})),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Port")),(0,r.kt)("p",null,"Navigate to ",(0,r.kt)("strong",{parentName:"p"},"Tools > Port")," and select the serial port name of the connected Seeed Studio XIAO nRF52840 (Sense). This is likely to be COM3 or higher (",(0,r.kt)("strong",{parentName:"p"},"COM1")," and ",(0,r.kt)("strong",{parentName:"p"},"COM2")," are usually reserved for hardware serial ports). The serial port of the connected Seeed Studio XIAO nRF52840 (Sense) usually contains parentheses that are written ",(0,r.kt)("strong",{parentName:"p"},"Seeed Studio XIAO nRF52840")," for ",(0,r.kt)("strong",{parentName:"p"},"Seeed Studio XIAO nRF52840")," or ",(0,r.kt)("strong",{parentName:"p"},"Seeed Studio XIAO nRF52840 Sense")," for ",(0,r.kt)("strong",{parentName:"p"},"Seeed Studio XIAO nRF52840 Sense"),"."),(0,r.kt)("p",{style:{textAlign:"center"}},(0,r.kt)("img",{src:"https://files.seeedstudio.com/wiki/XIAO-BLE/port.png",alt:"pir",width:550,height:"auto"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Step 5.")," Navigate to ",(0,r.kt)("strong",{parentName:"li"},"File > Examples > 01.Basics > Blink")," to open ",(0,r.kt)("strong",{parentName:"li"},"Blink")," example")),(0,r.kt)("p",{style:{textAlign:"center"}},(0,r.kt)("img",{src:"https://files.seeedstudio.com/wiki/Seeeduino_GPRS/img/select_blink.png",alt:"pir",width:550,height:"auto"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Step 6.")," Click the ",(0,r.kt)("strong",{parentName:"li"},"Upload")," button to upload the Blink example code to the board")),(0,r.kt)("p",{style:{textAlign:"center"}},(0,r.kt)("img",{src:"https://files.seeedstudio.com/wiki/Seeeduino_GPRS/img/upload_image.png",alt:"pir",width:500,height:"auto"})),(0,r.kt)("p",null,"Once uploaded, you will see the built-in red LED blinking with a 1-second delay between each blink. This means the connection is successful and now you can explore more projects with the Seeed Studio XIAO nRF52840 (Sense)!"),(0,r.kt)("h2",{id:"playing-with-the-built-in-3-in-one-led"},"Playing with the built-in 3-in-one LED"),(0,r.kt)("p",null,"Seeed Studio XIAO nRF52840 (Sense) has an ",(0,r.kt)("strong",{parentName:"p"},"onboard 3-in-one LED")," which is user-programmable. Now you will learn how to control the RGB colors one-by-one using Arduino!"),(0,r.kt)("p",null,"You first have to understand that the behavior of this LED is not as usual when controlled by the code. The ",(0,r.kt)("strong",{parentName:"p"},"LED turns ON")," when we give a ",(0,r.kt)("strong",{parentName:"p"},"LOW signal")," and it ",(0,r.kt)("strong",{parentName:"p"},"turns OFF")," when we give a ",(0,r.kt)("strong",{parentName:"p"},"HIGH signal"),". This is because this LED is controlled by a common anode and will light up only with a low-level signal."),(0,r.kt)("p",null,"An example code would be:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},"void setup() {\n  pinMode(LED_BUILTIN, OUTPUT);\n}\n\nvoid loop() {\n  digitalWrite(LED_BUILTIN, HIGH);   \n}\n")),(0,r.kt)("p",null,"Here, even though ",(0,r.kt)("strong",{parentName:"p"},"HIGH")," is used, the LED will be ",(0,r.kt)("strong",{parentName:"p"},"OFF"),". You need to replace ",(0,r.kt)("strong",{parentName:"p"},"HIGH")," with ",(0,r.kt)("strong",{parentName:"p"},"LOW")," to turn ",(0,r.kt)("strong",{parentName:"p"},"ON")," the LED."),(0,r.kt)("p",null,"Refer to the following pin mappings of the LEDs and use them in your codes:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Red LED = LED_BUILTIN or LED_RED"),(0,r.kt)("li",{parentName:"ul"},"Blue LED = LED_BLUE"),(0,r.kt)("li",{parentName:"ul"},"Green LED = LED_GREEN")),(0,r.kt)("h2",{id:"power-consumption-verification"},"Power Consumption Verification"),(0,r.kt)("p",null,"The Seeed Studio XIAO nRF52840 is low power consumption and here we provide a method to verify. It is highly recommend to use the ",(0,r.kt)("inlineCode",{parentName:"p"},"Seeed nRF52 Boards")," library here."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Step 1.")," Use ",(0,r.kt)("strong",{parentName:"li"},"JLink")," Downloader to flash the ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/0hotpotman0/BLE_52840_Core/blob/main/bootloader/Seeed_XIAO_nRF52840_Sense/Seeed_XIAO_nRF52840_Sense_bootloader-0.6.1_s140_7.3.0.hex"},"bootloader firmware")," for Seeed Studio XIAO nRF52840 (Sense).")),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"If you are using the factory firmware of the Seeed Studio XIAO nRF52840 or have never made changes to the firmware of the Seeed Studio XIAO nRF52840, you can skip this step.")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Step 2.")," Use the",(0,r.kt)("inlineCode",{parentName:"li"},"Seeed nRF52 Boards")," library here.")),(0,r.kt)("p",{style:{textAlign:"center"}},(0,r.kt)("img",{src:"https://files.seeedstudio.com/wiki/XIAO-BLE/XIAO_nrf528403.png",alt:"pir",width:800,height:"auto"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Step 3.")," Upload the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/0hotpotman0/BLE_52840_Core/blob/main/libraries/Bluefruit52Lib/examples/Hardware/deep_Sleep/deep_Sleep.ino"},"deep_sleep demo")," here and run it with ",(0,r.kt)("strong",{parentName:"p"},"Arduino"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Step 4.")," Adjust the voltage of the digital source meter to 3.6V constant voltage")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Step 5.")," Touch the red test pen to BAT+ and black test pen to BAT-"))),(0,r.kt)("p",{style:{textAlign:"center"}},(0,r.kt)("img",{src:"https://files.seeedstudio.com/wiki/XIAO-BLE/BLEpowerposition.png",alt:"pir",width:500,height:"auto"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Step 6.")," The output shows the current is at about ",(0,r.kt)("strong",{parentName:"li"},"3 \u03bcA"))),(0,r.kt)("p",{style:{textAlign:"center"}},(0,r.kt)("img",{src:"https://files.seeedstudio.com/wiki/XIAO-BLE/BLEpowerresult.jpg",alt:"pir",width:500,height:"auto"})),(0,r.kt)("h3",{id:"accelerometer-examples-and-low-power"},"Accelerometer Examples and Low Power"),(0,r.kt)("p",null,"We are very grateful to our community partner ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"https://forum.seeedstudio.com/u/daCoder"},"daCoder"))," for his contribution to the XIAO nRF52840 low power consumption mode."),(0,r.kt)("p",null,"You can find out more about the content of the projects he has worked on by clicking ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"https://forum.seeedstudio.com/t/xiao-sense-accelerometer-examples-and-low-power/270801"},"HERE")),"."),(0,r.kt)("h2",{id:"battery-charging-current"},"Battery Charging current"),(0,r.kt)("p",null,"The battery charging current is selectable as 50mA or 100mA, where you can set ",(0,r.kt)("strong",{parentName:"p"},"Pin13")," as high or low to change it to 50mA or 100mA. The low current charging current is at the input model set up as HIGH LEVEL and the high current charging current is at the output model set up as LOW LEVEL."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Low Charging Current")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},"void setup(){\npinMode (P0_13, OUTPUT);\n}\nvoid loop() {\ndigitalWrite(P0_13, HIGH);\n}\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"High Charging Current")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},"void setup(){\npinMode (P0_13, OUTPUT);\n}\nvoid loop() {\ndigitalWrite(P0_13, LOW);\n}\n")),(0,r.kt)("h2",{id:"access-the-swd-pins-for-debugging-and-reflashing-bootloader"},"Access the SWD Pins for Debugging and Reflashing Bootloader"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Hardware Required")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.seeedstudio.com/Seeed-XIAO-BLE-Sense-nRF52840-p-5253.html"},"Seeed Studio XIAO nRF52840")),(0,r.kt)("li",{parentName:"ul"},"Jlink")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Software Required")),(0,r.kt)("p",null,"It is required to download the ",(0,r.kt)("a",{parentName:"p",href:"https://www.segger.com/downloads/jlink/"},"Segger")," software from the website."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Step 1.")," Use Jlink to connect pins below:")),(0,r.kt)("p",{style:{textAlign:"center"}},(0,r.kt)("img",{src:"https://files.seeedstudio.com/wiki/XIAO-BLE/SWD1.png",alt:"pir",width:300,height:"auto"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Step 2.")," Start the J-Flash and search nRF52840, creating a new project:")),(0,r.kt)("p",{style:{textAlign:"center"}},(0,r.kt)("img",{src:"https://files.seeedstudio.com/wiki/XIAO-BLE/SWD2.png",alt:"pir",width:500,height:"auto"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Step 3."),' Click "Target" and then select "Connect".')),(0,r.kt)("p",{style:{textAlign:"center"}},(0,r.kt)("img",{src:"https://files.seeedstudio.com/wiki/XIAO-BLE/SWD3.png",alt:"pir",width:500,height:"auto"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Step 4.")," Draw the bin or ",(0,r.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/XIAO-BLE/Seeed_XIAO_nRF52840_Sense_bootloader-0.6.1_s140_7.3.0.hex"},"hex file")," to software. Then press F4 and F5 in that order. The reflashing is done.")),(0,r.kt)("h2",{id:"faq"},"FAQ"),(0,r.kt)("h3",{id:"q1-my-arduino-ide-is-stuck-when-uploading-code-to-the-board"},"Q1: My Arduino IDE is stuck when uploading code to the board"),(0,r.kt)("p",null,"You can first try to ",(0,r.kt)("strong",{parentName:"p"},"reset"),' the board by clicking the "Reset Button" once. If that does not work, rapidly click it twice to enter ',(0,r.kt)("strong",{parentName:"p"},"bootloader mode"),". If that also doesn't work, disconnect the board from the PC, and connect the board again."),(0,r.kt)("h3",{id:"q2-my-board-is-not-showing-up-as-a-serial-device-on-arduino-ide"},"Q2: My board is not showing up as a serial device on Arduino IDE"),(0,r.kt)("p",null,"You can first try to ",(0,r.kt)("strong",{parentName:"p"},"reset"),' the board by clicking the "Reset Button" once. If that does not work, rapidly click it twice to enter ',(0,r.kt)("strong",{parentName:"p"},"bootloader mode"),"."),(0,r.kt)("h3",{id:"q3-what-are-the-considerations-when-using-xiao-nrf52840-sense-for-battery-charging"},"Q3: What are the considerations when using XIAO nRF52840 (Sense) for battery charging?"),(0,r.kt)("p",null,"When P0.14 (D14) turns off the ADC function at a high level of 3.3V, P0.31 will be at the input voltage limit of 3.6V. There is a risk of burning out the P0.31 pin."),(0,r.kt)("p",null,"Currently for this issue, we recommend that users do not turn off the ADC function of P0.14 (D14) or set P0.14 (D14) to high during battery charging."),(0,r.kt)("p",{style:{textAlign:"center"}},(0,r.kt)("img",{src:"https://files.seeedstudio.com/wiki/XIAO-BLE/14.png",alt:"pir",width:800,height:"auto"})),(0,r.kt)("h2",{id:"resources"},"Resources"),(0,r.kt)("h3",{id:"seeed-studio-xiao-nrf52840"},"Seeed Studio XIAO nRF52840"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"[PDF]")," ",(0,r.kt)("a",{parentName:"p",href:"https://files.seeedstudio.com/wiki/XIAO-BLE/nRF52840_PS_v1.5.pdf"},"nRF52840 datasheet"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"[PDF]")," ",(0,r.kt)("a",{parentName:"p",href:"https://files.seeedstudio.com/wiki/XIAO-BLE/Seeed-Studio-XIAO-nRF52840-Sense-v1.1.pdf"},"Seeed Studio XIAO nRF52840 Schematic"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"[DXF]")," ",(0,r.kt)("a",{parentName:"p",href:"https://files.seeedstudio.com/wiki/XIAO-BLE/XIAO-nRF52840-DXF.zip"},"Seeed Studio XIAO nRF52840 Dimension in DXF"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"[LBR]")," ",(0,r.kt)("a",{parentName:"p",href:"https://files.seeedstudio.com/wiki/XIAO-BLE/Seeed-Studio-XIAO-nRF52840-footprint-eagle.lbr"},"Seeed Studio XIAO nRF52840 Eagle footprint"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"[XLSX]")," ",(0,r.kt)("a",{parentName:"p",href:"https://files.seeedstudio.com/wiki/XIAO-BLE/XIAO-nRF52840-pinout_sheet.xlsx"},"Seeed Studio XIAO nRF52840 pinout sheet"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"[ZIP]")," ",(0,r.kt)("a",{parentName:"p",href:"https://files.seeedstudio.com/wiki/XIAO-BLE/XIAO-nRF52840-Certification.zip"},"Seeed Studio XIAO nRF52840 Certification files")))),(0,r.kt)("h3",{id:"seeed-studio-xiao-nrf52840-sense"},"Seeed Studio XIAO nRF52840 Sense"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"[PDF]")," ",(0,r.kt)("a",{parentName:"p",href:"https://files.seeedstudio.com/wiki/XIAO-BLE/nRF52840_PS_v1.5.pdf"},"nRF52840 datasheet"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"[PDF]")," ",(0,r.kt)("a",{parentName:"p",href:"https://files.seeedstudio.com/wiki/XIAO-BLE/Seeed-Studio-XIAO-nRF52840-Sense-v1.1.pdf"},"Seeed Studio XIAO nRF52840 Sense Schematic"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"[DXF]")," ",(0,r.kt)("a",{parentName:"p",href:"https://files.seeedstudio.com/wiki/XIAO-BLE/XIAO-nRF52840-Sense-DXF.zip"},"Seeed Studio XIAO nRF52840 Sense Dimension in DXF"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"[LBR]")," ",(0,r.kt)("a",{parentName:"p",href:"https://files.seeedstudio.com/wiki/XIAO-BLE/Seeed-Studio-XIAO-nRF52840-Sense-footprint-eagle.lbr"},"Seeed Studio XIAO nRF52840 Sense Eagle footprint"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"[XLSX]")," ",(0,r.kt)("a",{parentName:"p",href:"https://files.seeedstudio.com/wiki/XIAO-BLE/XIAO-nRF52840-Senese-pinout_sheet.xlsx"},"Seeed Studio XIAO nRF52840 Sense pinout sheet"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"[ZIP]")," ",(0,r.kt)("a",{parentName:"p",href:"https://files.seeedstudio.com/wiki/XIAO-BLE/XIAO-nRF52840-Sense-Certification.zip"},"Seeed Studio XIAO nRF52840 Sense Certification files"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"[STEP]")," ",(0,r.kt)("a",{parentName:"p",href:"https://grabcad.com/library/seeed-studio-xiao-nrf52840-sense-1"},"Seeed Studio XIAO nRF52840 Sense 3D Model")))),(0,r.kt)("h2",{id:"tech-support--product-discussion"},"Tech Support & Product Discussion"),(0,r.kt)("p",null,"Thank you for choosing our products! We are here to provide you with different support to ensure that your experience with our products is as smooth as possible. We offer several communication channels to cater to different preferences and needs."),(0,r.kt)("div",{class:"button_tech_support_container"},(0,r.kt)("a",{href:"https://forum.seeedstudio.com/",class:"button_forum"}),(0,r.kt)("a",{href:"https://www.seeedstudio.com/contacts",class:"button_email"})),(0,r.kt)("div",{class:"button_tech_support_container"},(0,r.kt)("a",{href:"https://discord.gg/eWkprNDMU7",class:"button_discord"}),(0,r.kt)("a",{href:"https://github.com/Seeed-Studio/wiki-documents/discussions/69",class:"button_discussion"})))}c.isMDXComponent=!0}}]);