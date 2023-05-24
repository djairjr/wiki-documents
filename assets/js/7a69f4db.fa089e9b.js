"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[99573],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),c=p(n),m=a,h=c["".concat(l,".").concat(m)]||c[m]||u[m]||i;return n?r.createElement(h,o(o({ref:t},d),{},{components:n})):r.createElement(h,o({ref:t},d))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:a,o[1]=s;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},55813:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var r=n(87462),a=(n(67294),n(3905));const i={description:"Flash The Default Firmware",title:"How To Flash The Default Firmware",keywords:["SenseCAP Indicator"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/SenseCAP_Indicator_How_To_Flash_The_Default_Firmware",last_update:{date:"5/23/2023",author:"Thomas"}},o="**How To Flash The Default Firmware**",s={unversionedId:"Sensor/SenseCAP/SenseCAP_Indicator/Indicator_Flash_The_Default_Firmware",id:"Sensor/SenseCAP/SenseCAP_Indicator/Indicator_Flash_The_Default_Firmware",title:"How To Flash The Default Firmware",description:"Flash The Default Firmware",source:"@site/docs/Sensor/SenseCAP/SenseCAP_Indicator/Indicator_Flash_The_Default_Firmware.md",sourceDirName:"Sensor/SenseCAP/SenseCAP_Indicator",slug:"/SenseCAP_Indicator_How_To_Flash_The_Default_Firmware",permalink:"/SenseCAP_Indicator_How_To_Flash_The_Default_Firmware",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Sensor/SenseCAP/SenseCAP_Indicator/Indicator_Flash_The_Default_Firmware.md",tags:[],version:"current",lastUpdatedBy:"Thomas",lastUpdatedAt:16848e5,formattedLastUpdatedAt:"May 23, 2023",frontMatter:{description:"Flash The Default Firmware",title:"How To Flash The Default Firmware",keywords:["SenseCAP Indicator"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/SenseCAP_Indicator_How_To_Flash_The_Default_Firmware",last_update:{date:"5/23/2023",author:"Thomas"}},sidebar:"ProductSidebar",previous:{title:"Grove IIC",permalink:"/SenseCAP_Indicator_RP2040_Grove_IIC"},next:{title:"ChatGPT & DALL\xb7E Application Development",permalink:"/SenseCAP_Indicator_Application_ChatGPT"}},l={},p=[{value:"<strong>Preparation</strong>",id:"preparation",level:2},{value:"<strong>Download Default Firmware</strong>",id:"download-default-firmware",level:2},{value:"<strong>Flash ESP32-S3 Firmware on Windows</strong>",id:"flash-esp32-s3-firmware-on-windows",level:2},{value:"<strong>Flash ESP32-S3 Frimware using Espressif IDF</strong>",id:"flash-esp32-s3-frimware-using-espressif-idf",level:2},{value:"<strong>RP2040 Firmware Flashing</strong>",id:"rp2040-firmware-flashing",level:2},{value:"<strong>Flash the .uf2 file</strong>",id:"flash-the-uf2-file",level:3},{value:"<strong>Flash by Arduino IDE</strong>",id:"flash-by-arduino-ide",level:3},{value:"<strong>RP2040 Development Tool</strong>",id:"rp2040-development-tool",level:4},{value:"<strong>ESP32 &amp; RP2040 Communication Protocol</strong>",id:"esp32--rp2040-communication-protocol",level:2},{value:"<strong>Resource</strong>",id:"resource",level:2},{value:"<strong>FAQ</strong>",id:"faq",level:2}],d={toc:p};function c(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"how-to-flash-the-default-firmware"},(0,a.kt)("strong",{parentName:"h1"},"How To Flash The Default Firmware")),(0,a.kt)("p",null,"The SenseCAP indicator has two MCUs, ESP32-S3 and RP2040. This tutorial provides detailed guide to help developer get onboard, and the first part is a tutorial guide user flash the out-of-box factory default firmware, and help the early shipped devices updating to latest out-of-box firmware."),(0,a.kt)("h2",{id:"preparation"},(0,a.kt)("strong",{parentName:"h2"},"Preparation")),(0,a.kt)("p",null,"All you need is your indicator and any Windows/Mac/Linux ",(0,a.kt)("strong",{parentName:"p"},"Computer"),"."),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:300,src:"https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/usb1.png"})),(0,a.kt)("h2",{id:"download-default-firmware"},(0,a.kt)("strong",{parentName:"h2"},"Download Default Firmware")),(0,a.kt)("p",null,"SenseCAP Indicator's default shipping firmware is fully open source on both ESP32-S3 and RP2040."),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"You have two options to download the Out of the Box Firmware: "),(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},"Source code: Before flashing it, you have the option to modify the code as per your requirements. You will need a toolchain to compile it."),(0,a.kt)("li",{parentName:"ul"},"Firmware: Directly flash the pre-compiled binary file without the need for any code modification or compilation."))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Source Code")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/Seeed-Solution/sensecap_indicator_esp32"},"ESP32-S3 Source Code, based on ESP IDF")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/Seeed-Solution/sensecap_indicator_rp2040"},"RP2040 Source Code, based on Arduino"))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Firmware")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/Seeed-Solution/SenseCAP_Indicator_ESP32/releases/tag/v1.0.0"},"Click to download ESP32-S3 firmware")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/Seeed-Solution/SenseCAP_Indicator_RP2040/releases/tag/v1.0.0"},"Click to download RP2040 frimware"))),(0,a.kt)("h2",{id:"flash-esp32-s3-firmware-on-windows"},(0,a.kt)("strong",{parentName:"h2"},"Flash ESP32-S3 Firmware on Windows")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Flash Download Tools")," are used for programming or flashing firmware onto ESP8266 and ESP32 series of microcontrollers, which are widely used in the Internet of Things (IoT) applications. it provides a graphical user interface (GUI) for users to easily flash firmware onto the ESP microcontrollers. "),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Download:"),"\n",(0,a.kt)("a",{parentName:"p",href:"https://www.espressif.com.cn/en/support/download/other-tools?keys=&field_type_tid%5B%5D=842"},"Flash Download Tools (for Windows only)")),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:800,src:"https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/SenseCAP_Indicator_18.png"})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Step 1"),": ",(0,a.kt)("strong",{parentName:"p"},"Double-click")," the ",(0,a.kt)("inlineCode",{parentName:"p"},".exe")," file to enter the main interface of the tool.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Step 2"),": Selecting"))),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Option"),(0,a.kt)("th",{parentName:"tr",align:null},"Param"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"Chip Type")),(0,a.kt)("td",{parentName:"tr",align:null},"ESP32-S3")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"WorkMode")),(0,a.kt)("td",{parentName:"tr",align:null},"Develop")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"LoadMode")),(0,a.kt)("td",{parentName:"tr",align:null},"UART")))),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:800,src:"https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/SenseCAP_Indicator_59.png"})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Step 3"),": Then connect SenseCAP Indicator to your laptop with USB type-C cable.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Step 4"),': In the SPI Download Tab and Click "..." and navigate to the firmware you just downloaded.'))),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:600,src:"https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/SenseCAP_Indicator23.png"})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Step 5"),": SPI Flash Configure")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Option"),(0,a.kt)("th",{parentName:"tr",align:null},"Param"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"SPI SPEED")),(0,a.kt)("td",{parentName:"tr",align:null},"40MHz")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"SPI MODE")),(0,a.kt)("td",{parentName:"tr",align:null},"DIO")))),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:600,src:"https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/SenseCAP_Indicator23.png"})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Step 6"),": Download Panel Configure")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"COM"),":  Check the ports on your Device Manage, the USB-SERIAL is the correct one.\nHere we chose ",(0,a.kt)("strong",{parentName:"p"},"COM4")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Baud"),": 921600(recommended value\uff09"),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:600,src:"https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/SenseCAP_Indicator23.png"})),(0,a.kt)("p",null,"Click Start Downloading"),(0,a.kt)("p",null,'Then click "START" to start the flashing.'),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:600,src:"https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/start.png"})),(0,a.kt)("p",null,'When it shows "FINISH", the firmware flashing has been completed.'),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:600,src:"https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/finish.png"})),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Note"),":\nIn the above guide, the binary file merged there bins into one, which name is ",(0,a.kt)("em",{parentName:"p"},"Default_Factory_Firmware_ESP32-S3.bin")),(0,a.kt)("p",null,"but, when you use IDF build firmware, you will get there binary files, you have to write the correct address(you can put your own address) on the right side"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"bootloader.bin")," ----\x3e ",(0,a.kt)("strong",{parentName:"li"},"0x0")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"partion-table.bin")," ----\x3e ",(0,a.kt)("strong",{parentName:"li"},"0x8000")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"termial_demo.bin")," ----\x3e ",(0,a.kt)("strong",{parentName:"li"},"0x10000"))),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:600,src:"https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/3binfiles.png"})),(0,a.kt)("h2",{id:"flash-esp32-s3-frimware-using-espressif-idf"},(0,a.kt)("strong",{parentName:"h2"},"Flash ESP32-S3 Frimware using Espressif IDF")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Espressif IDF")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"IDF is a software development framework provided by Espressif Systems for the development of applications and firmware for their ESP32 and ESP8266 series of microcontrollers,it provides a comprehensive set of libraries, tools, and documentation that enable developers to build applications and firmware for ESP32 and ESP8266 microcontrollers. It includes libraries for communication protocols such as Wi-Fi, Bluetooth, and Ethernet, as well as drivers for various peripherals like sensors, displays, and motors.")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Download and install:"),"\nFor Windows: ",(0,a.kt)("a",{parentName:"p",href:"https://docs.espressif.com/projects/esp-idf/en/latest/esp32s3/get-started/windows-setup.html"},"Standard Setup of Toolchain for Windows")),(0,a.kt)("p",null,"For MacOS and Linux: ",(0,a.kt)("a",{parentName:"p",href:"https://docs.espressif.com/projects/esp-idf/en/latest/esp32s3/get-started/linux-macos-setup.html"},"Standard Toolchain Setup for Linux and macOS")),(0,a.kt)("p",null,'There is "Default_Factory_Firmware_ESP32-S3.bin" firmware in the ',(0,a.kt)("a",{parentName:"p",href:"https://github.com/Seeed-Solution/sensecap_indicator_esp32/releases/tag/v1.0.0"},"Release")," ."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Note"),":"),(0,a.kt)("p",null,"SenseCAP ESP32 SDK uses the 120 MHz frequency , if you flash this default firmware, please add a ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/Seeed-Solution/SenseCAP_Indicator_ESP32/tree/main/tools/patch"},"patch"),"."),(0,a.kt)("p",null,"This patch is intended to achieve the best performance of RGB LCD by using the PSRAM Octal 120 MHz feature, and it's only used for the release/v5.0 branch of ESP-IDF."),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:800,src:"https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/patch.png"})),(0,a.kt)("p",null,"Run the following command to build and flash the project:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"cd  <your sdk path>/examples/factory/\nesptool.py write_flash 0x0 default_factory_firmware_ESP32-S3.bin\n")),(0,a.kt)("p",null,"Or the following command to build, flash and monitor the project:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"cd  <your sdk path>/examples/default_factory_firmware/\nidf.py -p PORT build flash monitor\n")),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:800,src:"https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/upgrade.png"})),(0,a.kt)("h2",{id:"rp2040-firmware-flashing"},(0,a.kt)("strong",{parentName:"h2"},"RP2040 Firmware Flashing")),(0,a.kt)("h3",{id:"flash-the-uf2-file"},(0,a.kt)("strong",{parentName:"h3"},"Flash the .uf2 file")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Step 1"),": Connect the device to your PC")),(0,a.kt)("p",null,"Long press this internal button using a needle, then connect the device to your PC by the provided USB type-C cable, release the button once connected."),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:800,src:"https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/SenseCAP_Indicator_56.png"})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Step 2"),": Firmware Flash")),(0,a.kt)("p",null,"After the connection is successful, your PC will show a disk."),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:800,src:"https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/disk.png"})),(0,a.kt)("p",null,"Copy the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/Seeed-Solution/sensecap_indicator_rp2040/releases/download/v1.0.0/terminal_rp2040_v1.0.0.uf2"},".uf2")," file to the disk, then the disk will log out."),(0,a.kt)("p",null,"The upgrade will run automatically."),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:800,src:"https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/uf2.png"})),(0,a.kt)("h3",{id:"flash-by-arduino-ide"},(0,a.kt)("strong",{parentName:"h3"},"Flash by Arduino IDE")),(0,a.kt)("h4",{id:"rp2040-development-tool"},(0,a.kt)("strong",{parentName:"h4"},"RP2040 Development Tool")),(0,a.kt)("p",null,"Arduino IDE is an open-source software development environment used for programming Arduino boards, which are microcontroller-based development boards that can be used for building various electronic projects. It provides an easy-to-use graphical user interface (GUI) that allows developers to write, compile, and upload code to the Arduino board. It is based on a simplified version of the C++ programming language and provides a set of libraries and examples that make it easier for beginners to get started with programming Arduino boards."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Download:"),"\n",(0,a.kt)("a",{parentName:"p",href:"https://www.arduino.cc/en/software"},"Arduino IDE")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Step 1"),": Install Arduino IDE")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://www.arduino.cc/en/software"},"Arduino IDE")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Step 2"),": Add the Raspberry Pi Pico Board")),(0,a.kt)("p",null,"Open your Arduino IDE, click on\xa0",(0,a.kt)("strong",{parentName:"p"},"Arduino IDE"),"\xa0>\xa0",(0,a.kt)("strong",{parentName:"p"},"Reference"),", and copy the below URL to\xa0",(0,a.kt)("strong",{parentName:"p"},"Additional Boards Manager URLs"),":"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"https://github.com/earlephilhower/arduino-pico/releases/download/global/package\\_rp2040\\_index.json")),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:800,src:"https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/SenseCAP_Indicator_29.png"})),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:800,src:"https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/SenseCAP_Indicator_80.png"})),(0,a.kt)("p",null,"Click on ",(0,a.kt)("strong",{parentName:"p"},"Tools")," > ",(0,a.kt)("strong",{parentName:"p"},"Board")," > ",(0,a.kt)("strong",{parentName:"p"},"Board Manager"),"."),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:800,src:"https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/SenseCAP_Indicator_30.png"})),(0,a.kt)("p",null,'Search "indicator" and install "Raspberry Pi Pico/RP2040" in the Boards Manager'),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:800,src:"https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/SenseCAP_Indicator.png"})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Step 3"),": Add Libraries")),(0,a.kt)("p",null,"Libraries for reference\uff1a"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/bakercp/PacketSerial"},"Serial communication protocol")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/Sensirion/arduino-i2c-sgp40"},"SGP40 TVOC sensor library")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/Sensirion/arduino-gas-index-algorithm"},"Transfer index library: Sensirion Gas Index Algorithm")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/Sensirion/arduino-i2c-scd4x"},"SCD41 CO2 sensor library")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/Seeed-Studio/Seeed_Arduino_AHT20/"},"AHT20 temperature and humidity sensor library")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/Sensirion/arduino-core/"},"Sensirion Arduino Core library")),(0,a.kt)("p",null,"Navigate to ",(0,a.kt)("strong",{parentName:"p"},"Sketch")," -> ",(0,a.kt)("strong",{parentName:"p"},"Include Library")," -> ",(0,a.kt)("strong",{parentName:"p"},"Add .ZIP Library"),", then select the libraries you download."),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:800,src:"https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/SenseCAP_Indicator_32.png"})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Step 4"),": Connect the device to your PC with the provided USB Typc-C cable.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Step 5"),": Select the board and port"))),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:800,src:"https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/board.png"})),(0,a.kt)("p",null,'Search "Indicator" and select "Seeed INDICATOR RP2040"board;'),(0,a.kt)("p",null,'Select the "usbmodem" Serial Port.'),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:800,src:"https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/portport.png"})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Step 6"),": Open the example code file")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"File")," > ",(0,a.kt)("strong",{parentName:"p"},"Open"),", then select the example code file (",(0,a.kt)("a",{parentName:"p",href:"https://github.com/Seeed-Solution/sensecap_indicator_rp2040/tree/main/examples/terminal_rp2040"},".ino file"),")."),(0,a.kt)("p",null,"We provide an example code file, you can modify the code according to your needs."),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:800,src:"https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/SenseCAP_Indicator_35.png"})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Step 7"),": Verify and Upload the file.")),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:800,src:"https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/SenseCAP_Indicator_36.png"})),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:800,src:"https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/SenseCAP_Indicator_37.png"})),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:800,src:"https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/SenseCAP_Indicator_38.png"})),(0,a.kt)("h2",{id:"esp32--rp2040-communication-protocol"},(0,a.kt)("strong",{parentName:"h2"},"ESP32 & RP2040 Communication Protocol")),(0,a.kt)("p",null,"ESP32 and RP2040 use serial port communication, using the ",(0,a.kt)("a",{parentName:"p",href:"http://www.stuartcheshire.org/papers/COBSforToN.pdf"},"cobs")," communication protocol. The list of commands used in the demo is as follows:"),(0,a.kt)("p",null,"The command format consists of the packet type and packet parameters."),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:800,src:"https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/SenseCAP_Indicator_41.png"})),(0,a.kt)("h2",{id:"resource"},(0,a.kt)("strong",{parentName:"h2"},"Resource")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/Seeed-Solution/sensecap_indicator_esp32.git"},"SenseCAP Indicator ESP32 SDK")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/Seeed-Solution/sensecap_indicator_rp2040/tree/main"},"SenseCAP Indicator RP2040 Demo")),(0,a.kt)("h2",{id:"faq"},(0,a.kt)("strong",{parentName:"h2"},"FAQ")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"How to distinguish the serial port\uff1f")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"For Windows:")),(0,a.kt)("p",null,"Check the port on your Device Manage"),(0,a.kt)("p",null,'"USB\u4e32\u884c\u8bbe\u5907" is for RP2040\n"USB-SERIAL" is for ESP32'),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:800,src:"https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/SenseCAP_Indicator_39.png"})),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"For Mac:")),(0,a.kt)("p",null,'"/dev/cu.usbmodem" is for RP2040'),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:800,src:"https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/SenseCAP_Indicator_40.png"})),(0,a.kt)("h1",{id:"tech-support"},(0,a.kt)("strong",{parentName:"h1"},"Tech Support")),(0,a.kt)("p",null,"Don't worry, we've got you covered! Please visit our ",(0,a.kt)("a",{parentName:"p",href:"https://discord.gg/cPpeuQMM"},"Seeed Official Discord Channel")," to ask your questions! "),(0,a.kt)("p",null,"If you have large order or customization requirement, please contact ",(0,a.kt)("a",{parentName:"p",href:"mailto:iot@seeed.cc"},"iot@seeed.cc")))}c.isMDXComponent=!0}}]);