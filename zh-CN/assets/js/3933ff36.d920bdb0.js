"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[54258],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),d=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=d(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=d(n),c=a,f=u["".concat(s,".").concat(c)]||u[c]||m[c]||i;return n?r.createElement(f,l(l({ref:t},p),{},{components:n})):r.createElement(f,l({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=c;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[u]="string"==typeof e?e:a,l[1]=o;for(var d=2;d<i;d++)l[d]=n[d];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},82064:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>d});var r=n(87462),a=(n(67294),n(3905));const i={description:"I2C User Guide for Arduino Boards",title:"I2C User Guide for Arduino Boards",keywords:["Sorftware"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Arduino_Software_I2C_user_guide",last_update:{date:"1/16/2023",author:"jianjing Huang"}},l="Arduino Software I2C User Guide",o={unversionedId:"Top_Brand/Arduino/Tutorials/Arduino_Basic_Usage/Arduino_Software_I2C_user_guide",id:"Top_Brand/Arduino/Tutorials/Arduino_Basic_Usage/Arduino_Software_I2C_user_guide",title:"I2C User Guide for Arduino Boards",description:"I2C User Guide for Arduino Boards",source:"@site/docs/Top_Brand/Arduino/Tutorials/Arduino_Basic_Usage/Arduino_Software_I2C_user_guide.md",sourceDirName:"Top_Brand/Arduino/Tutorials/Arduino_Basic_Usage",slug:"/Arduino_Software_I2C_user_guide",permalink:"/zh-CN/Arduino_Software_I2C_user_guide",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Top_Brand/Arduino/Tutorials/Arduino_Basic_Usage/Arduino_Software_I2C_user_guide.md",tags:[],version:"current",lastUpdatedBy:"jianjing Huang",lastUpdatedAt:1673827200,formattedLastUpdatedAt:"2023\u5e741\u670816\u65e5",frontMatter:{description:"I2C User Guide for Arduino Boards",title:"I2C User Guide for Arduino Boards",keywords:["Sorftware"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Arduino_Software_I2C_user_guide",last_update:{date:"1/16/2023",author:"jianjing Huang"}},sidebar:"ProductSidebar",previous:{title:"Serial User Guide for Arduino Boards",permalink:"/zh-CN/Software-Serial"},next:{title:"SPI User Guide for Arduino Boards",permalink:"/zh-CN/Software-SPI"}},s={},d=[{value:"I2C Scanner for Arduino",id:"i2c-scanner-for-arduino",level:2},{value:"Install SoftwareI2C Library",id:"install-softwarei2c-library",level:2},{value:"Example#1: Scan I2C device address",id:"example1-scan-i2c-device-address",level:2},{value:"Connection",id:"connection",level:3},{value:"Software",id:"software",level:3},{value:"Example#2: Display different information on 2 Grove - OLED Display 1.12",id:"example2-display-different-information-on-2-grove---oled-display-112",level:2},{value:"Connection",id:"connection-1",level:3},{value:"Software",id:"software-1",level:3},{value:"APIs of the library",id:"apis-of-the-library",level:2},{value:"References",id:"references",level:2},{value:"Tech Support",id:"tech-support",level:2}],p={toc:d};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"arduino-software-i2c-user-guide"},"Arduino Software I2C User Guide"),(0,a.kt)("p",null,"The standard I2C library for the Arduino is the Wire library. While this library is sufficient most of the time, there are situations when it cannot be used:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"the I2C pins A4/A5 (or SDA/SCL) are in use already for other purposes"),(0,a.kt)("li",{parentName:"ul"},"same I2C addresses devices are used")),(0,a.kt)("p",null,"So we write the SoftwareI2C library to use digit port and analog\nport to enable multiple same I2C addresses devices work on Arduino."),(0,a.kt)("h2",{id:"i2c-scanner-for-arduino"},"I2C Scanner for Arduino"),(0,a.kt)("p",null,"I2C Scanner is a simple sketch that scans the I2C-Bus for devices. You can upload the code to your Arduino to find out the I2C address of the modules. Upload the below sketch and open the Serial Monitor to view results:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},'#include <Wire.h>\n\nvoid setup()\n{\n    Wire.begin();\n\n    Serial.begin(9600);\n    while (!Serial); // Wait for serial monitor\n    Serial.println("---I2C Scanner---");\n}\n\nvoid loop()\n{\n    byte error, address;\n    int nDevices;\n\n    Serial.println("Scanning...");\n\n    nDevices = 0;\n    for(address = 1; address < 127; address++ )\n    {\n        Wire.beginTransmission(address);\n        error = Wire.endTransmission();\n\n        Wire.beginTransmission(address+1);\n\n    if (error == 0 && Wire.endTransmission() != 0 ) // Special flag for SAMD Series\n    {\n        Serial.print("I2C device found at address 0x");\n        if (address<16)\n            Serial.print("0");\n        Serial.print(address,HEX);\n        Serial.println("!");\n\n        nDevices++;\n    }\n    else if (error==4) \n    {\n        Serial.print("Unknown error at address 0x");\n        if (address<16) \n            Serial.print("0");\n        Serial.println(address,HEX);\n    }\n    }\n    if (nDevices == 0)\n        Serial.println("No I2C devices found\\n");\n    else\n        Serial.println("done\\n");\n\n    delay(5000);           // wait 5 seconds for next scan\n}\n')),(0,a.kt)("h2",{id:"install-softwarei2c-library"},"Install SoftwareI2C Library"),(0,a.kt)("hr",null),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Please follow ",(0,a.kt)("a",{parentName:"li",href:"https://wiki.seeedstudio.com/How_to_install_Arduino_Library/"},"how to install an arduino library")," procedures to install library."),(0,a.kt)("li",{parentName:"ul"},"We provide an Arduino Library for ",(0,a.kt)("strong",{parentName:"li"},"SoftwareI2C"),", click on ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/Seeed-Studio/Arduino_Software_I2C"},(0,a.kt)("strong",{parentName:"a"},"here"))," to download it.")),(0,a.kt)("h2",{id:"example1-scan-i2c-device-address"},"Example#1: Scan I2C device address"),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"connection"},"Connection"),(0,a.kt)("p",null,"Here we will show you how this works via a simple demo. First of all, you need to prepare the below stuffs:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Seeeduino V4.2"),(0,a.kt)("th",{parentName:"tr",align:null},'Grove - OLED Display 1.12"'),(0,a.kt)("th",{parentName:"tr",align:null},"Base Shield"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg",alt:"enter image description here"})),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/Grove_OLED_1.12/images/product.jpg",alt:"enter image description here"})),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg",alt:"enter image description here"}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html"},"Get ONE Now")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://www.seeedstudio.com/Grove-OLED-Display-1.12%22-p-824.html"},"Get ONE Now")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://www.seeedstudio.com/Base-Shield-V2-p-1378.html"},"Get ONE Now"))))),(0,a.kt)("p",null,"This is an easy-to-use module, what you need to do is connect the module to ",(0,a.kt)("strong",{parentName:"p"},"D2 port")," of a Base Shield."),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Arduino_Software_I2C_user_guide/img/One_OLED.jpg",alt:"enter image description here"})),(0,a.kt)("p",null,"If you don't have the base shield, please follow below connection."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Arduino Pin"),(0,a.kt)("th",{parentName:"tr",align:null},"OLED Pin"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Digit 3"),(0,a.kt)("td",{parentName:"tr",align:null},"SDA")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Digit 2"),(0,a.kt)("td",{parentName:"tr",align:null},"SCL")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"VCC"),(0,a.kt)("td",{parentName:"tr",align:null},"VCC")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"GND"),(0,a.kt)("td",{parentName:"tr",align:null},"GND")))),(0,a.kt)("h3",{id:"software"},"Software"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Open the code directly by the path: ",(0,a.kt)("strong",{parentName:"li"},"File -> Example ->Arduino_Software_I2C-master->SoftwareI2C_Scan"),".")),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Arduino_Software_I2C_user_guide/img/I2C_Scan.jpg",alt:null})),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},'#include "SoftwareI2C.h"\n\nSoftwareI2C softwarei2c;\n\nvoid setup()\n{\n    Serial.begin(115200);\n    softwarei2c.begin(3, 2);       // sda, scl\n    Serial.println("begin to scan...");\n}\n\nvoid loop()\n{\n    for(unsigned char i=1; i<=127; i++)\n    {\n        if(softwarei2c.beginTransmission(i))\n        {\n            Serial.print("0x");\n            Serial.println(i, HEX);\n\n            while(1);\n        }\n        softwarei2c.endTransmission();\n    }\n\n    Serial.println("find nothing");\n    while(1);\n\n}\n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Upload the code to arduino."),(0,a.kt)("li",{parentName:"ul"},"Please configure serial port baud rate as 115200."),(0,a.kt)("li",{parentName:"ul"},"We can see I2C address from the serial monitor.")),(0,a.kt)("h2",{id:"example2-display-different-information-on-2-grove---oled-display-112"},"Example#2: Display different information on 2 Grove - OLED Display 1.12"),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"connection-1"},"Connection"),(0,a.kt)("p",null,"Here we will show you how this works via a simple demo. First of all, you need to prepare the below stuffs:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Seeeduino V4"),(0,a.kt)("th",{parentName:"tr",align:null},"Grove - OLED Display 1.12``"),(0,a.kt)("th",{parentName:"tr",align:null},"Base Shield"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg",alt:"enter image description here"})),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/Grove_OLED_1.12/images/product.jpg",alt:"enter image description here"})),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg",alt:"enter image description here"}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html"},"Get ONE Now")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://www.seeedstudio.com/Grove-OLED-Display-1.12%22-p-824.html"},"Get ONE Now")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://www.seeedstudio.com/Base-Shield-V2-p-1378.html"},"Get ONE Now"))))),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Connect one Grove - OLED Display 1.12 to ",(0,a.kt)("strong",{parentName:"li"},"D2 port")," and other to ",(0,a.kt)("strong",{parentName:"li"},"D4 port"),".")),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Arduino_Software_I2C_user_guide/img/Two_OLED.jpg",alt:"enter image description here"})),(0,a.kt)("h3",{id:"software-1"},"Software"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Click on ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/Seeed-Studio/OLED_Display_96X96/archive/master.zip"},"here")," to download Grove-OLED-Display-1.12 library.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Copy SeeedGrayOLED.cpp and SeeedGrayOLED.h to Arduino_Software_I2C-master folder"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Edit SeeedGrayOLED.cpp")),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Step1: Change the library from Wire.h to SoftwareI2C.h")))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},'From\n#include "Wire.h"\nTo\n#include <SoftwareI2C.h>\n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Step2: Add initSoftwareI2C function, we have to change the class name for different products.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},"void SeeedGrayOLED::initSoftwareI2C(SoftwareI2C *w, int __sda, int __scl)\n{\n    Wire = w;\n    Wire->begin(__sda, __scl);\n}\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Step3: Replace all ",(0,a.kt)("inlineCode",{parentName:"li"},"Wire.")," to ",(0,a.kt)("inlineCode",{parentName:"li"},"Wire->"),"  For example, change  ",(0,a.kt)("inlineCode",{parentName:"li"},"Wire.endTransmission()")," to ",(0,a.kt)("inlineCode",{parentName:"li"},"Wire->endTransmission()"),".")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},"From\nWire.endTransmission();\nTo\nWire->endTransmission();\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Edit SeeedGrayOLED.h")),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Step1: Change the library ",(0,a.kt)("inlineCode",{parentName:"li"},"Wire.h")," to ",(0,a.kt)("inlineCode",{parentName:"li"},"SoftwareI2C.h"))))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},'From\n#include "Wire.h"\nTo\n#include <SoftwareI2C.h>\n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Step2: Add initSoftwareI2C function into public class")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},"void initSoftwareI2C(SoftwareI2C *w, int __sda, int __scl);\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Step3: Add SoftwareI2C *Wire into private class")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},"SoftwareI2C *Wire;\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Open the code directly by the path: ",(0,a.kt)("strong",{parentName:"li"},"File -> Example ->Arduino_Software_I2C-master->OLED_Display"),".")),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Arduino_Software_I2C_user_guide/img/OLED_Display.jpg",alt:null})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"We have to define SoftwareI2C objects as well as SeeedGrayOLED objects.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},'//define 2 SoftwareI2C objects\n#include "SoftwareI2C.h"  \nSoftwareI2C WireS1;\nSoftwareI2C WireS2;\n\n//define 2 SeeedGrayOLED objects\n#include "SeeedGrayOLED.h"\n#include <avr/pgmspace.h>\nSeeedGrayOLED SeeedGrayOled1;\nSeeedGrayOLED SeeedGrayOled2;\n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"We use initSoftwareI2C instead of Wire.begin during setup.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},"  SeeedGrayOled1.initSoftwareI2C(&WireS1, 3, 2);     // initSoftwareI2C, sda, scl\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},'//define 2 SoftwareI2C objects\n#include "SoftwareI2C.h"  \nSoftwareI2C WireS1;\nSoftwareI2C WireS2;\n\n//define 2 SeeedGrayOLED objects\n#include "SeeedGrayOLED.h"\n#include <avr/pgmspace.h>\nSeeedGrayOLED SeeedGrayOled1;\nSeeedGrayOLED SeeedGrayOled2;\n\n\nvoid setup()\n{\n  SeeedGrayOled1.initSoftwareI2C(&WireS1, 3, 2);     // initSoftwareI2C, sda, scl\n\n  SeeedGrayOled1.init(SSD1327);\n  SeeedGrayOled1.clearDisplay();     //Clear Display.\n  SeeedGrayOled1.setNormalDisplay(); //Set Normal Display Mode\n  SeeedGrayOled1.setVerticalMode();  // Set to vertical mode for displaying text\n\n\n  for(char i=0; i < 12 ; i++)\n  {\n  SeeedGrayOled1.setTextXY(i,0);  //set Cursor to ith line, 0th column\n  SeeedGrayOled1.setGrayLevel(i); //Set Grayscale level. Any number between 0 - 15.\n  SeeedGrayOled1.putString("11111111"); //Print 11111111\n  }\n\n\n  SeeedGrayOled2.initSoftwareI2C(&WireS2, 5, 4);     // initSoftwareI2C, sda, scl\n\n  SeeedGrayOled2.init(SSD1327);             //initialize SEEED OLED display\n  SeeedGrayOled2.clearDisplay();     //Clear Display.\n  SeeedGrayOled2.setNormalDisplay(); //Set Normal Display Mode\n  SeeedGrayOled2.setVerticalMode();  // Set to vertical mode for displaying text\n\n  for(char i=0; i < 12 ; i++)\n  {\n  SeeedGrayOled2.setTextXY(i,0);  //set Cursor to ith line, 0th column\n  SeeedGrayOled2.setGrayLevel(i); //Set Grayscale level. Any number between 0 - 15.\n  SeeedGrayOled2.putString("00000000"); //Print 00000000\n  }\n}\n\n  void loop()\n  {\n\n  }\n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Upload to Sketch."),(0,a.kt)("li",{parentName:"ul"},"We will see 11111111 display on one screen while 00000000 is on other.")),(0,a.kt)("h2",{id:"apis-of-the-library"},"APIs of the library"),(0,a.kt)("hr",null),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"begin() function: SoftwareI2C.begin() must first be called to start any software I2C communication using the SoftwareI2C library.  ")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},"SoftwareI2C::begin(int Sda, int Scl)\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"beginTransmission function: Used when the ATmega is acting as an I2C master. Sets internal variables in the SoftwareI2C library in preparation for transmitting to the given address.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},"SoftwareI2C.beginTransmission(uchar addr)\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"endTransmission() function: end for transmitting to the given address.  ")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},"SoftwareI2C.endTransmission()\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"write function: Populate the send data buffer with the data found in the argument list. there are 2 functions. One is sending a byte and other is array.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},"SoftwareI2C.write(uchar dta)\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},"SoftwareI2C::write(uchar len, uchar *dta)\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"read function: Returns the byte in receive buffer.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},"SoftwareI2C.read()\n")),(0,a.kt)("h2",{id:"references"},"References"),(0,a.kt)("hr",null),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"[Library]"),(0,a.kt)("a",{parentName:"li",href:"https://github.com/Seeed-Studio/Arduino_Software_I2C/archive/master.zip"},"Arduino SoftwareI2C Library"))),(0,a.kt)("h2",{id:"tech-support"},"Tech Support"),(0,a.kt)("p",null,"Please submit any technical issue into our ",(0,a.kt)("a",{parentName:"p",href:"https://forum.seeedstudio.com/"},"forum"),". ",(0,a.kt)("br",null)),(0,a.kt)("p",{style:{textAlign:"center"}},(0,a.kt)("a",{href:"https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts",target:"_blank"},(0,a.kt)("img",{src:"https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg"}))))}u.isMDXComponent=!0}}]);