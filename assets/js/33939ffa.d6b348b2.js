"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[18254],{3905:(e,i,t)=>{t.d(i,{Zo:()=>p,kt:()=>f});var n=t(67294);function r(e,i,t){return i in e?Object.defineProperty(e,i,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[i]=t,e}function l(e,i){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);i&&(n=n.filter((function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var i=1;i<arguments.length;i++){var t=null!=arguments[i]?arguments[i]:{};i%2?l(Object(t),!0).forEach((function(i){r(e,i,t[i])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(i){Object.defineProperty(e,i,Object.getOwnPropertyDescriptor(t,i))}))}return e}function o(e,i){if(null==e)return{};var t,n,r=function(e,i){if(null==e)return{};var t,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)t=l[n],i.indexOf(t)>=0||(r[t]=e[t]);return r}(e,i);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)t=l[n],i.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var d=n.createContext({}),s=function(e){var i=n.useContext(d),t=i;return e&&(t="function"==typeof e?e(i):a(a({},i),e)),t},p=function(e){var i=s(e.components);return n.createElement(d.Provider,{value:i},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var i=e.children;return n.createElement(n.Fragment,{},i)}},m=n.forwardRef((function(e,i){var t=e.components,r=e.mdxType,l=e.originalType,d=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=s(t),m=r,f=u["".concat(d,".").concat(m)]||u[m]||c[m]||l;return t?n.createElement(f,a(a({ref:i},p),{},{components:t})):n.createElement(f,a({ref:i},p))}));function f(e,i){var t=arguments,r=i&&i.mdxType;if("string"==typeof e||r){var l=t.length,a=new Array(l);a[0]=m;var o={};for(var d in i)hasOwnProperty.call(i,d)&&(o[d]=i[d]);o.originalType=e,o[u]="string"==typeof e?e:r,a[1]=o;for(var s=2;s<l;s++)a[s]=t[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},68587:(e,i,t)=>{t.r(i),t.d(i,{assets:()=>d,contentTitle:()=>a,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var n=t(87462),r=(t(67294),t(3905));const l={description:"Wifi Shield (Fi250) V1.1",title:"Wifi Shield (Fi250) V1.1",keywords:["Arduino shield"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Wifi_Shield_Fi250_V1.1",last_update:{date:"2/16/2023",author:"jianjing Huang"}},a=void 0,o={unversionedId:"Top_Brand/Arduino/shield/Wifi_Shield_Fi250_V1.1",id:"Top_Brand/Arduino/shield/Wifi_Shield_Fi250_V1.1",title:"Wifi Shield (Fi250) V1.1",description:"Wifi Shield (Fi250) V1.1",source:"@site/docs/Top_Brand/Arduino/shield/Wifi_Shield_Fi250_V1.1.md",sourceDirName:"Top_Brand/Arduino/shield",slug:"/Wifi_Shield_Fi250_V1.1",permalink:"/Wifi_Shield_Fi250_V1.1",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Top_Brand/Arduino/shield/Wifi_Shield_Fi250_V1.1.md",tags:[],version:"current",lastUpdatedBy:"jianjing Huang",lastUpdatedAt:1676505600,formattedLastUpdatedAt:"Feb 16, 2023",frontMatter:{description:"Wifi Shield (Fi250) V1.1",title:"Wifi Shield (Fi250) V1.1",keywords:["Arduino shield"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Wifi_Shield_Fi250_V1.1",last_update:{date:"2/16/2023",author:"jianjing Huang"}},sidebar:"ProductSidebar",previous:{title:"Wifi Shield V1.2",permalink:"/Wifi_Shield_V1.2"},next:{title:"Wifi Shield V2.0",permalink:"/Wifi_Shield_V2.0"}},d={},s=[{value:"Specifications",id:"specifications",level:2},{value:"Usage",id:"usage",level:2},{value:"TCP Client",id:"tcp-client",level:3},{value:"Http Connect",id:"http-connect",level:3},{value:"Reset the module",id:"reset-the-module",level:3},{value:"One press set AP mode",id:"one-press-set-ap-mode",level:3},{value:"Upgrade firmware",id:"upgrade-firmware",level:3},{value:"Schematic Online Viewer",id:"schematic-online-viewer",level:2},{value:"Resources",id:"resources",level:2},{value:"Tech Support",id:"tech-support",level:2}],p={toc:s};function u(e){let{components:i,...t}=e;return(0,r.kt)("wrapper",(0,n.Z)({},p,t,{components:i,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Wifi_Shield_Fi250_V1.1/img/Fi250_board1.jpg",alt:null})),(0,r.kt)("p",null,"Wifi Shield (Fi250) V1.1 is a economic internet solution with Arduino. The Wi-Fi module support IEEE 802.11b/g/n mode, maximum speed up to 65Mbit/s. Wifi Shield (Fi250) V1.1 combine on board antenna; it\u2019s easy to build you project in a small box. The module reserve a UFL connector, you can use an extra antenna to improve the signal range. There is a key on the board, just push one time to change wifi shield as AP mode. The module have a computer interface software, you can control and upgrade the module via USB-UART convertor.\nThe wifi shield contain a Micro SD card socket, it\u2019s like a recorder when wifi shield working as TCP, UDP server."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/Wifi-Shield-(Fi250)-V1.1-p-2449.html"},(0,r.kt)("img",{parentName:"a",src:"https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png",alt:null}))),(0,r.kt)("h2",{id:"specifications"},"Specifications"),(0,r.kt)("hr",null),(0,r.kt)("table",{cellpadding:"1",cellspacing:"1",width:"555"},(0,r.kt)("tr",null,(0,r.kt)("td",null," Module"),(0,r.kt)("td",null,"WIZnet FI250")),(0,r.kt)("tr",null,(0,r.kt)("td",null," Operating Voltage"),(0,r.kt)("td",null," 5V or 3.3V (Auto select)")),(0,r.kt)("tr",null,(0,r.kt)("td",null," Current"),(0,r.kt)("td",null," 300mA (maximum)")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"Single band"),(0,r.kt)("td",null,"2.4GHz IEEE 802.11b/g/n")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"Antenna"),(0,r.kt)("td",null,"On board PCB antenna (reserver UFL connector)")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"Memory"),(0,r.kt)("td",null,"1MB Flash Memory, 128KB SRAM, 1MB Serial Flash")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"Interface"),(0,r.kt)("td",null,"UART(default)/SPI(upgrade firmware)")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"Dimensions"),(0,r.kt)("td",null,"69.0x53.5x23.5 mm")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"Weight"),(0,r.kt)("td",null))),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("hr",null),(0,r.kt)("p",null,"The demo we use a Arduino Leonardo, we suggest you use a hardware serial port, software is not fast enough to communicate with the Wifi module."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Wifi_Shield_Fi250_V1.1/img/Fi250_board.jpg",alt:null})),(0,r.kt)("h3",{id:"tcp-client"},"TCP Client"),(0,r.kt)("p",null,"Install Wifi Shield (Fi250) library, download demo code Wizfi250_Client."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c++"},'/*\n//This demo use Arduino Leonardo or Seeeduino Lite. The jumper connect D0-WIFI_TX, D1_WIFI_RX; Let the boot pin not connect\n*/\n#include <Arduino.h>\n#include "WizFi250.h"\n\n#define SSID      "STEST" //Set your SSID\n#define KEY       "87654321" //Set your phrase\n#define AUTH       "WPA2" // Set the encrypt type\n\n\n#define  HOST_IP       "192.168.168.185" //Set the TCP Server IP\n#define  REMOTE_PORT    9090 //Set the port\n#define LOCAL_PORT      1234  //Set the port\n\n#define spi_CS  8\n\nWizFi250 wizfi250(&Serial1);\nboolean returnValue=false;\nvoid setup() {\n\n    Serial.begin(115200);\n    Serial1.begin(115200);\n    while (!Serial);\n    pinMode(spi_CS,OUTPUT);\n    Serial.println("--------- WIZFI250 TEST --------");\n    // wait for initilization of Wizfi250\n    delay(1000);\n    Serial.println("Join " SSID );\n    wizfi250.reset();\n    delay(1000);\n    wizfi250.sendCommand("AT+WLEAVE\\r");\n    delay(1000);\n    if (!wizfi250.join(SSID, KEY, AUTH)) {\n        Serial.println("Failed join " SSID);\n        Serial.println("Please Restart");\n    } else {\n\n        Serial.println("Successfully join " SSID);\n        wizfi250.sendCommand("AT+WSTAT\\r");\n        delay(5);\n        char c;\n        while(wizfi250.receive((uint8_t *)&c, 1, 100) > 0) {\n            Serial.print((char)c);\n        }\n        delay(2000);\n        returnValue=wizfi250.connect(HOST_IP,REMOTE_PORT,LOCAL_PORT);\n        if(returnValue)\n        Serial.println("Now you can send data to Server or receive data from Server!");\n    }\n}\nvoid loop() {\n    if(wizfi250.available()) {\n        Serial.print((char)wizfi250.read());\n    }\n    if(Serial.available()) {\n        wizfi250.print((char)Serial.read());\n    }\n}\n')),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Wifi_Shield_Fi250_V1.1/img/FI_250_client.bmp",alt:null})),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Wifi_Shield_Fi250_V1.1/img/FI_250_client_arduino.png",alt:null})),(0,r.kt)("h3",{id:"http-connect"},"Http Connect"),(0,r.kt)("p",null,"Install Wifi Shield (Fi250) library, download demo code Wizfi250_http."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c++"},'/*\n//This demo use Arduino Leonardo or Seeeduino Lite. The jumper connect D0-WIFI_TX, D1_WIFI_RX; Let the boot pin not connect\n*/\n#include <Arduino.h>\n#include <SoftwareSerial.h>\n#include "WizFi250.h"\n\n#define SSID      "STEST"   //Set your SSID\n#define KEY       "87654321" //Set your phrase\n#define AUTH       "WPA2" //Set the encrypt type\n\n#define TSN_HOST_IP        "74.125.128.103" //google.com server\n//#define TSN_HOST_IP        "115.239.210.26" //baidu.com server\n//#define TSN_HOST_IP      "192.168.1.254"      // broadcast\n#define TSN_REMOTE_PORT    80\n#define LOCAL_PORT     9000\n\n#define spi_CS  8\n\n//SoftwareSerial sprintSerial(4,5);   // The software serial port is not stable.\nWizFi250 wizfi250(&Serial1);\nvoid setup() {\n\n    Serial.begin(115200);\n    Serial1.begin(115200);\n    while (!Serial);\n    pinMode(spi_CS,OUTPUT);\n    digitalWrite(spi_CS,HIGH);\n    Serial.println("--------- WIZFI250 TEST --------");\n    // wait for initilization of Wizfi250\n    delay(1000);\n    Serial.println("Join " SSID );\n    delay(10);\n    if (!wizfi250.join(SSID, KEY, AUTH)) {\n        Serial.println("Failed join " SSID);\n    } else {\n        Serial.println("Successfully join  "  SSID);\n\n        wizfi250.clear();\n\n        wizfi250.connect(TSN_HOST_IP,TSN_REMOTE_PORT,LOCAL_PORT);\n        delay(10);\n        wizfi250.send("GET / HTTP/1.1\\r\\n\\r\\n");\n    }\n    char c;\n    for(int i=0;i<320;i++){\n        if (wizfi250.receive((uint8_t *)&c, 1, 100) > 0) {\n            Serial.print((char)c);\n        }\n    }\n}\nvoid loop() {\n    while (wizfi250.available()) {\n        Serial.write(wizfi250.read());\n    }\n    while (Serial.available()) {\n        wizfi250.write(Serial.read());\n    }\n}\n')),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Wifi_Shield_Fi250_V1.1/img/FI_250_HTTP.jpg",alt:null})),(0,r.kt)("h3",{id:"reset-the-module"},"Reset the module"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"If you need to reset the module as factory default. press the function three times as fast speed. The MODE and WIF LED flash, wait the module reset.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"If the module reset as default, the baud rate change to 115200. kindly note that."))),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Wifi_Shield_Fi250_V1.1/img/Fi250_reset.png",alt:null})),(0,r.kt)("h3",{id:"one-press-set-ap-mode"},"One press set AP mode"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"It's easy to enter AP mode. Press the Function button, wait the WIFI LED change as red. You can scan the wifi signal, WizFi250",(0,r.kt)("em",{parentName:"p"},"AP"),(0,r.kt)("strong",{parentName:"p"},"***"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Press the wifi shield Fi250 reset button exit AP mode."))),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Wifi_Shield_Fi250_V1.1/img/FI2350_AP.png",alt:null})),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Wifi_Shield_Fi250_V1.1/img/FI250APshow.png",alt:null})),(0,r.kt)("h3",{id:"upgrade-firmware"},"Upgrade firmware"),(0,r.kt)("p",null,"The step for upgrade F/W show as below: ",(0,r.kt)("big",null,"Connect your wifi shield(Fi250) via UART directly,you can use a UartSBee or other UART tools")),(0,r.kt)("p",null,"Before upgrade your F/W, you may set the module to Program mode (short BOOT jumper pin)  ",(0,r.kt)("big",null,(0,r.kt)("a",{parentName:"p",href:"http://wizwiki.net/wiki/doku.php?id=products:wizfi250:wizfi250firmware:start"},"wizfi250firmware"))),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Wifi_Shield_Fi250_V1.1/img/Fi250_update_firmware%E5%89%AF%E6%9C%AC.png",alt:null})),(0,r.kt)("p",null,"1st action"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Wifi_Shield_Fi250_V1.1/img/WizFi250_firmware1.png",alt:null})),(0,r.kt)("p",null,"2nd action"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Wifi_Shield_Fi250_V1.1/img/WizFi250_firmware2.png",alt:null})),(0,r.kt)("p",null,"3nd action"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Wifi_Shield_Fi250_V1.1/img/WizFi250_firmware3.png",alt:null})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"When you update successful, move the jumper and restart the module.")),(0,r.kt)("h2",{id:"schematic-online-viewer"},"Schematic Online Viewer"),(0,r.kt)("div",{className:"altium-ecad-viewer","data-project-src":"https://files.seeedstudio.com/wiki/Wifi_Shield_Fi250_V1.1/res/Eagle_File_Wifi_Shield-Fi250-V1.1_sch_pcb.zip",style:{borderRadius:"0px 0px 4px 4px",height:500,borderStyle:"solid",borderWidth:1,borderColor:"rgb(241, 241, 241)",overflow:"hidden",maxWidth:1280,maxHeight:700,boxSizing:"border-box"}}),(0,r.kt)("h2",{id:"resources"},"Resources"),(0,r.kt)("hr",null),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"https://files.seeedstudio.com/wiki/Wifi_Shield_Fi250_V1.1/res/Eagle_File_Wifi_Shield-Fi250-V1.1_sch_pcb.zip"},"Wifi",(0,r.kt)("em",{parentName:"a"},"Shield"),"(Fi250)_V1.1_sch_pcb.zip"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"https://files.seeedstudio.com/wiki/Wifi_Shield_Fi250_V1.1/res/Wizfi250_programmer_s_guide.pdf"},"Wizfi250_programmer_s_guide.pdf"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"https://files.seeedstudio.com/wiki/Wifi_Shield_Fi250_V1.1/res/Wizfi250_quick_start_guide.pdf"},"Wizfi250_quick_start_guide.pdf"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"https://files.seeedstudio.com/wiki/Wifi_Shield_Fi250_V1.1/res/Wizfi250_datasheet.pdf"},"Wizfi250_datasheet.pdf"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"https://files.seeedstudio.com/wiki/Wifi_Shield_Fi250_V1.1/res/Wizfi250.zip"},"Wizfi250 library"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"https://files.seeedstudio.com/wiki/Wifi_Shield_Fi250_V1.1/res/Wifi_Shield-Fi250-V1.1.pdf"},"PDF",(0,r.kt)("em",{parentName:"a"},"Wifi_Shield"),"(Fi250)_V1.1")))),(0,r.kt)("h2",{id:"tech-support"},"Tech Support"),(0,r.kt)("p",null,"Please submit any technical issue into our ",(0,r.kt)("a",{parentName:"p",href:"https://forum.seeedstudio.com/"},"forum"),". ",(0,r.kt)("br",null)),(0,r.kt)("p",{style:{textAlign:"center"}},(0,r.kt)("a",{href:"https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts",target:"_blank"},(0,r.kt)("img",{src:"https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg"}))))}u.isMDXComponent=!0}}]);