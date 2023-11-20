"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[40859],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},d="mdxType",S={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(n),u=i,m=d["".concat(l,".").concat(u)]||d[u]||S[u]||o;return n?r.createElement(m,a(a({ref:t},p),{},{components:n})):r.createElement(m,a({ref:t},p))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:i,a[1]=s;for(var c=2;c<o;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},50060:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var r=n(87462),i=(n(67294),n(3905));const o={description:"MicroSD",title:"MicroSD",keywords:["Development Tutorial"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/SenseCAP_Indicator_RP2040_MicroSD",last_update:{date:"5/23/2023",author:"Thomas"}},a="**MicroSD**",s={unversionedId:"Sensor/SenseCAP/SenseCAP_Indicator/Development_Tutorial/Develop_with_RP2040/Micro_SD",id:"Sensor/SenseCAP/SenseCAP_Indicator/Development_Tutorial/Develop_with_RP2040/Micro_SD",title:"MicroSD",description:"MicroSD",source:"@site/docs/Sensor/SenseCAP/SenseCAP_Indicator/Development_Tutorial/Develop_with_RP2040/Micro_SD.md",sourceDirName:"Sensor/SenseCAP/SenseCAP_Indicator/Development_Tutorial/Develop_with_RP2040",slug:"/SenseCAP_Indicator_RP2040_MicroSD",permalink:"/SenseCAP_Indicator_RP2040_MicroSD",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Sensor/SenseCAP/SenseCAP_Indicator/Development_Tutorial/Develop_with_RP2040/Micro_SD.md",tags:[],version:"current",lastUpdatedBy:"Thomas",lastUpdatedAt:16848e5,formattedLastUpdatedAt:"May 23, 2023",frontMatter:{description:"MicroSD",title:"MicroSD",keywords:["Development Tutorial"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/SenseCAP_Indicator_RP2040_MicroSD",last_update:{date:"5/23/2023",author:"Thomas"}},sidebar:"ProductSidebar",previous:{title:"Grove IIC",permalink:"/SenseCAP_Indicator_RP2040_Grove_IIC"},next:{title:"tVOC Sensor Built-in",permalink:"/SenseCAP_Indicator_RP2040_tVOC"}},l={},c=[{value:"<strong>Example Code</strong>",id:"example-code",level:2}],p={toc:c};function d(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"microsd"},(0,i.kt)("strong",{parentName:"h1"},"MicroSD")),(0,i.kt)("p",null,"The RP2040 has a set of GPIO pins that can be used to interface with an external MicroSD card module."),(0,i.kt)("p",null,"To use a MicroSD card with the RP2040, we use the SPI (Serial Peripheral Interface) protocol to connect the SD card module to the GPIO pins of the microcontroller. This involves connecting the following pins on the RP2040 to the corresponding pins on the MicroSD card module:"),(0,i.kt)("p",null,"SPI SCK(such as GPIO10) to SD_SCK\nSPI TX(such as GPIO11) to SD_MOSI\nSPI RX(such as GPIO12) to SD_MISO\nA single GPIO pin (such as GPIO13) to the CS (chip select) pin on the SD card module"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"}," // Initialize the SPI interface for the SD card\n  const int chipSelect = 13;\n  SPI1.setSCK(10);\n  SPI1.setTX(11);\n  SPI1.setRX(12);\n")),(0,i.kt)("p",null,"Once the hardware connection is established, you can use a software library, such as Arduino's SD library, to read and write data to the MicroSD card. The SD library provides functions to initialize the SD card, open and close files, read and write file data, and perform other file system operations."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Note"),": The performance of the MicroSD card interface on the RP2040 will depend on factors such as the speed of the SD card, wiring quality and software efficiency, and a maximum SD card of 32GB is supported"),(0,i.kt)("h2",{id:"example-code"},(0,i.kt)("strong",{parentName:"h2"},"Example Code")),(0,i.kt)("p",null,"This example code realizes reading CO2 data and storing the data in SD."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},'#include <Arduino.h>\n#include <Wire.h>\n#include <SPI.h>\n#include <SD.h>\n#include <SensirionI2CScd4x.h>\n\n\nSensirionI2CScd4x scd4x;\n//Initialize a string to store data for writing to the SD card\nString SDDataString = "";\n\nvoid sensor_power_on(void) {\n  pinMode(18, OUTPUT);\n  digitalWrite(18, HIGH);\n}\n// Function to power on the sensor\nvoid sensor_scd4x_init(void) {\n  uint16_t error;\n  char errorMessage[256];\n\n  scd4x.begin(Wire);\n\n  // stop potentially previously started measurement\n  error = scd4x.stopPeriodicMeasurement();\n  if (error) {\n    Serial.print("Error trying to execute stopPeriodicMeasurement(): ");\n    errorToString(error, errorMessage, 256);\n    Serial.println(errorMessage);\n  }\n\n  // Start Measurement\n  error = scd4x.startPeriodicMeasurement();\n  if (error) {\n    Serial.print("Error trying to execute startPeriodicMeasurement(): ");\n    errorToString(error, errorMessage, 256);\n    Serial.println(errorMessage);\n  }\n}\n\nvoid sensor_scd4x_get(void) {\n  uint16_t error;\n  char errorMessage[256];\n\n  Serial.print("sensor scd4x: ");\n  // Read Measurement\n  uint16_t co2;\n  float temperature;\n  float humidity;\n  error = scd4x.readMeasurement(co2, temperature, humidity);\n  if (error) {\n    Serial.print("Error trying to execute readMeasurement(): ");\n    errorToString(error, errorMessage, 256);\n    Serial.println(errorMessage);\n  } else if (co2 == 0) {\n    Serial.println("Invalid sample detected, skipping.");\n  } else {\n    Serial.print("Co2:");\n    Serial.print(co2);\n    Serial.print("\\t");\n    Serial.print("Temperature:");\n    Serial.print(temperature);\n    Serial.print("\\t");\n    Serial.print("Humidity:");\n    Serial.println(humidity);\n  }\n  // Add data to the SD data string\n  SDDataString += "scd4x,";\n  if (error) {\n    SDDataString += "-,-,-,";\n  } else {\n    SDDataString += String(co2);\n    SDDataString += \',\';\n    SDDataString += String(temperature);\n    SDDataString += \',\';\n    SDDataString += String(humidity);\n    SDDataString += \',\';\n  }\n}\n\n\n\nint cnt = 0;\nvoid setup() {\n  Serial.begin(115200);\n\n  sensor_power_on();\n  Wire.setSDA(20);\n  Wire.setSCL(21);\n  Wire.begin();\n // Initialize the SPI interface for the SD card\n  const int chipSelect = 13;\n  SPI1.setSCK(10);\n  SPI1.setTX(11);\n  SPI1.setRX(12);\n// Check if the SD card is initialized\n  if (!SD.begin(chipSelect, 1000000, SPI1)) {\n    Serial.println("Card failed, or not present");\n  } else {\n    Serial.println("card initialized.");\n  }\n\n  sensor_scd4x_init();\n}\n\nvoid loop() {\n\n  delay(5000);\n  // Clear the SD data string and print a message to the serial monitor\n  SDDataString = "";\n  Serial.printf("\\r\\n\\r\\n--------- start measure %d-------\\r\\n", cnt);\n\n  SDDataString += String(cnt);\n  SDDataString += \',\';\n\n  cnt++;\n  sensor_scd4x_get();\n  // Open the datalog.csv file for writing\n  File dataFile = SD.open("datalog.csv", FILE_WRITE);\n  // if the file is available, write to it:\n  if (dataFile) {\n    dataFile.println(SDDataString);\n    dataFile.close();\n    // print to the serial port too:\n    Serial.print("sd write: ");\n    Serial.println(SDDataString);\n  } else {\n    Serial.println("error opening datalog.txt");\n  }\n\n}\n\n\n')),(0,i.kt)("h1",{id:"tech-support"},(0,i.kt)("strong",{parentName:"h1"},"Tech Support")),(0,i.kt)("p",null,"Don't worry, we've got you covered! Please visit our ",(0,i.kt)("a",{parentName:"p",href:"https://discord.gg/sensecap"},"Seeed Official Discord Channel")," to ask your questions!"),(0,i.kt)("p",null,"If you have large order or customization requirement, please contact ",(0,i.kt)("a",{parentName:"p",href:"mailto:iot@seeed.cc"},"iot@seeed.cc")))}d.isMDXComponent=!0}}]);