"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4259],{3905:(e,n,r)=>{r.d(n,{Zo:()=>u,kt:()=>S});var t=r(67294);function i(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function o(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function a(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?o(Object(r),!0).forEach((function(n){i(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function s(e,n){if(null==e)return{};var r,t,i=function(e,n){if(null==e)return{};var r,t,i={},o=Object.keys(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||(i[r]=e[r]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=t.createContext({}),p=function(e){var n=t.useContext(l),r=n;return e&&(r="function"==typeof e?e(n):a(a({},n),e)),r},u=function(e){var n=p(e.components);return t.createElement(l.Provider,{value:n},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},m=t.forwardRef((function(e,n){var r=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=p(r),m=i,S=c["".concat(l,".").concat(m)]||c[m]||d[m]||o;return r?t.createElement(S,a(a({ref:n},u),{},{components:r})):t.createElement(S,a({ref:n},u))}));function S(e,n){var r=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=m;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[c]="string"==typeof e?e:i,a[1]=s;for(var p=2;p<o;p++)a[p]=r[p];return t.createElement.apply(null,a)}return t.createElement.apply(null,r)}m.displayName="MDXCreateElement"},8444:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>c,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var t=r(87462),i=(r(67294),r(3905));const o={description:"CO2 Sensor Built-in",title:"CO2 Sensor Built-in",keywords:["SenseCAP Indicator RP2040 Development Tutorial"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/SenseCAP_Indicator_RP2040_CO2",last_update:{date:"5/23/2023",author:"Thomas"}},a="**CO2 Sensor(Built-in)**",s={unversionedId:"Sensor/SenseCAP/SenseCAP_Indicator/Development_Tutorial/Develop_with_RP2040/CO2_Sensor_Built-in",id:"Sensor/SenseCAP/SenseCAP_Indicator/Development_Tutorial/Develop_with_RP2040/CO2_Sensor_Built-in",title:"CO2 Sensor Built-in",description:"CO2 Sensor Built-in",source:"@site/docs/Sensor/SenseCAP/SenseCAP_Indicator/Development_Tutorial/Develop_with_RP2040/CO2_Sensor_Built-in.md",sourceDirName:"Sensor/SenseCAP/SenseCAP_Indicator/Development_Tutorial/Develop_with_RP2040",slug:"/SenseCAP_Indicator_RP2040_CO2",permalink:"/SenseCAP_Indicator_RP2040_CO2",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Sensor/SenseCAP/SenseCAP_Indicator/Development_Tutorial/Develop_with_RP2040/CO2_Sensor_Built-in.md",tags:[],version:"current",lastUpdatedBy:"Thomas",lastUpdatedAt:16848e5,formattedLastUpdatedAt:"May 23, 2023",frontMatter:{description:"CO2 Sensor Built-in",title:"CO2 Sensor Built-in",keywords:["SenseCAP Indicator RP2040 Development Tutorial"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/SenseCAP_Indicator_RP2040_CO2",last_update:{date:"5/23/2023",author:"Thomas"}},sidebar:"ProductSidebar",previous:{title:"Buzzer",permalink:"/SenseCAP_Indicator_RP2040_Buzzer"},next:{title:"Grove ADC",permalink:"/SenseCAP_Indicator_RP2040_Grove_ADC"}},l={},p=[],u={toc:p};function c(e){let{components:n,...r}=e;return(0,i.kt)("wrapper",(0,t.Z)({},u,r,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"co2-sensorbuilt-in"},(0,i.kt)("strong",{parentName:"h1"},"CO2 Sensor(Built-in)")),(0,i.kt)("p",null,"SenseCAP Indicator (D1S/D1Pro Version)has a built-in SCD41 sensor, which can detect the CO2 value with a range of 0-40000ppm.\nCO2 content is an important criterion for assessing the quality of air and ensuring that it is safe and healthy for all who breathe it."),(0,i.kt)("p",null,"The levels of CO2 in the air:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Normal outdoor level: 350 - 450 ppm"),(0,i.kt)("li",{parentName:"ul"},"Acceptable levels: < 600 ppm"),(0,i.kt)("li",{parentName:"ul"},"Complaints of stuffiness and odors: 600 - 1000 ppm"),(0,i.kt)("li",{parentName:"ul"},"ASHRAE and OSHA standards: 1000 ppm"),(0,i.kt)("li",{parentName:"ul"},"General drowsiness: 1000 - 2500 ppm"),(0,i.kt)("li",{parentName:"ul"},"Adverse health effects may be expected: 2500 - 5000 ppm")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example Code"),":"),(0,i.kt)("p",null,"This example reads the value of the built-in SCD41 Co2 sensor through the IIC interface, and print it to the serial monitor."),(0,i.kt)("p",null,"Based on the following library\uff1a"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/Sensirion/arduino-core/"},"Sensirion Arduino Core library"),"\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/Sensirion/arduino-i2c-scd4x"},"SCD41 CO2 sensor library")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Note"),": When using the built-in sensor, the sensor power must be enabled."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},'#include <Arduino.h>\n#include <Wire.h>\n#include <SPI.h>\n#include <SD.h>\n#include <SensirionI2CScd4x.h>\n\n\nSensirionI2CScd4x scd4x;\nString SDDataString = "";\n\n//The built-in sensor needs to be powered on\nvoid sensor_power_on(void) {\n  pinMode(18, OUTPUT);\n  digitalWrite(18, HIGH);\n}\n\nvoid sensor_scd4x_init(void) {\n  uint16_t error;\n  char errorMessage[256];\n\n  scd4x.begin(Wire);\n\n  // stop potentially previously started measurement\n  error = scd4x.stopPeriodicMeasurement();\n  if (error) {\n    Serial.print("Error trying to execute stopPeriodicMeasurement(): ");\n    errorToString(error, errorMessage, 256);\n    Serial.println(errorMessage);\n  }\n\n  // Start Measurement\n  error = scd4x.startPeriodicMeasurement();\n  if (error) {\n    Serial.print("Error trying to execute startPeriodicMeasurement(): ");\n    errorToString(error, errorMessage, 256);\n    Serial.println(errorMessage);\n  }\n}\n\nvoid sensor_scd4x_get(void) {\n  uint16_t error;\n  char errorMessage[256];\n\n  Serial.print("sensor scd4x: ");\n  // Read Measurement\n  uint16_t co2;\n  float temperature;\n  float humidity;\n  error = scd4x.readMeasurement(co2, temperature, humidity);\n  if (error) {\n    Serial.print("Error trying to execute readMeasurement(): ");\n    errorToString(error, errorMessage, 256);\n    Serial.println(errorMessage);\n  } else if (co2 == 0) {\n    Serial.println("Invalid sample detected, skipping.");\n  } else {\n    Serial.print("Co2:");\n    Serial.print(co2);\n    Serial.print("\\t");\n    Serial.print("Temperature:");\n    Serial.print(temperature);\n    Serial.print("\\t");\n    Serial.print("Humidity:");\n    Serial.println(humidity);\n  }\n}\n\nint cnt = 0;\nvoid setup() {\n  Serial.begin(115200);\n\n  sensor_power_on();\n\n  Wire.setSDA(20);\n  Wire.setSCL(21);\n  Wire.begin();\n\n  sensor_scd4x_init();\n}\n\nvoid loop() {\n  delay(5000);\n  sensor_scd4x_get();\n}\n\n\n')),(0,i.kt)("div",{align:"center"},(0,i.kt)("img",{width:800,src:"https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/scd4xsensor.png"})),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Note:")," The temperature and humidity in this built-in SCD41 sensor does not fully represent the air temperature and humidity"),(0,i.kt)("h1",{id:"tech-support"},(0,i.kt)("strong",{parentName:"h1"},"Tech Support")),(0,i.kt)("p",null,"Don't worry, we've got you covered! Please visit our ",(0,i.kt)("a",{parentName:"p",href:"https://discord.gg/sensecap"},"Seeed Official Discord Channel")," to ask your questions!"),(0,i.kt)("p",null,"If you have large order or customization requirement, please contact ",(0,i.kt)("a",{parentName:"p",href:"mailto:iot@seeed.cc"},"iot@seeed.cc")))}c.isMDXComponent=!0}}]);