"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[52976],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=p(n),c=o,h=u["".concat(s,".").concat(c)]||u[c]||m[c]||a;return n?r.createElement(h,i(i({ref:t},d),{},{components:n})):r.createElement(h,i({ref:t},d))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:o,i[1]=l;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},95117:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var r=n(87462),o=(n(67294),n(3905));const a={description:"Grove - Oxygen Sensor Pro(GGC2330-O2)",title:"Grove - Oxygen Sensor Pro(GGC2330-O2)",keywords:["Grove"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Grove-Oxygen-Sensor-Pro",last_update:{date:"1/4/2023",author:"shuxu hu"}},i=void 0,l={unversionedId:"Sensor/Grove/Grove_Sensors/Gas/Grove-Oxygen-Sensor-Pro",id:"Sensor/Grove/Grove_Sensors/Gas/Grove-Oxygen-Sensor-Pro",title:"Grove - Oxygen Sensor Pro(GGC2330-O2)",description:"Grove - Oxygen Sensor Pro(GGC2330-O2)",source:"@site/docs/Sensor/Grove/Grove_Sensors/Gas/Grove-Oxygen-Sensor-Pro.md",sourceDirName:"Sensor/Grove/Grove_Sensors/Gas",slug:"/Grove-Oxygen-Sensor-Pro",permalink:"/Grove-Oxygen-Sensor-Pro",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Sensor/Grove/Grove_Sensors/Gas/Grove-Oxygen-Sensor-Pro.md",tags:[],version:"current",lastUpdatedBy:"shuxu hu",lastUpdatedAt:1672790400,formattedLastUpdatedAt:"Jan 4, 2023",frontMatter:{description:"Grove - Oxygen Sensor Pro(GGC2330-O2)",title:"Grove - Oxygen Sensor Pro(GGC2330-O2)",keywords:["Grove"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Grove-Oxygen-Sensor-Pro",last_update:{date:"1/4/2023",author:"shuxu hu"}},sidebar:"ProductSidebar",previous:{title:"Grove - Gas O\u2082 Sensor(MIX8410)",permalink:"/Grove-Gas_Sensor-O2-MIX8410"},next:{title:"Grove - Alcohol Sensor",permalink:"/Grove-Alcohol_Sensor"}},s={},p=[{value:"Feature",id:"feature",level:2},{value:"Specification",id:"specification",level:2},{value:"Applications",id:"applications",level:2},{value:"Platforms Supported",id:"platforms-supported",level:2},{value:"Getting Started",id:"getting-started",level:2},{value:"Connection",id:"connection",level:3},{value:"Upload the code to Arduino",id:"upload-the-code-to-arduino",level:3},{value:"Get data",id:"get-data",level:3}],d={toc:p};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",{style:{textAlign:"center"}},(0,o.kt)("img",{src:"https://files.seeedstudio.com/wiki/Grove_Oxygen_Sensor_Pro/img/IMG_9621.png",alt:"pir",width:600,height:"auto"})),(0,o.kt)("p",null,"Grove - Oxygen Sensor Pro(GGC2330-O2) is a kind of sensor to test the oxygen concentration in air, which is based on the principle of the electrochemical cell to the original work.When it starts to work, it will produce a current proportional to the concentration of oxygen, then you can determine the concentration of oxygen by measuring the Current size."),(0,o.kt)("p",null,"Grove - Oxygen Sensor Pro(GGC2330-O2) is an enhanced version of Grove - Oxygen Sensor(GG2020-O2), Compared to the Grove - Oxygen Sensor(GG2020-O2), It has a built-in temperature sensor to make temperature compensation, which can correct the measurement error caused by the temperature difference and make the measurement more accurate.On top of that, it is equipped with a high-performance microprocessor, which allows it to have digital output and analog voltage output capabilities at the same time, making the sensor easier to use and calibrate and shorten the development period."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/Grove-Oxygen-Sensor-Pro-Pre-calibration-p-4896.html"},(0,o.kt)("p",null,(0,o.kt)("img",{src:"https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png",alt:"pir",width:600,height:"auto"})))),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre"},"We've released the [Seeed Gas Sensor Selection Guide](https://wiki.seeedstudio.com/Sensor_gas/), it will help you choose the gas sensor that best suits your needs.\n"))),(0,o.kt)("h2",{id:"feature"},"Feature"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Pre-calibration(With build-in MCU and temperature sensor)"),(0,o.kt)("li",{parentName:"ul"},"High precision and resolution"),(0,o.kt)("li",{parentName:"ul"},"Long life, low power consumption"),(0,o.kt)("li",{parentName:"ul"},"Strong anti-interference ability"),(0,o.kt)("li",{parentName:"ul"},"Good stability"),(0,o.kt)("li",{parentName:"ul"},"UART signal output")),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre"},"More details about Grove modules please refer to [Grove System](https://wiki.seeedstudio.com/Grove_System/)\n"))),(0,o.kt)("h2",{id:"specification"},"Specification"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Items"),(0,o.kt)("th",{parentName:"tr",align:null},"Parameter"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Target Gas"),(0,o.kt)("td",{parentName:"tr",align:null},"O2")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Resolution"),(0,o.kt)("td",{parentName:"tr",align:null},"0.1%VOL")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Measurement Range"),(0,o.kt)("td",{parentName:"tr",align:null},"0-25%VOL")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"ReOperating Voltage"),(0,o.kt)("td",{parentName:"tr",align:null},"DC 5\xb10.1V DC")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Operating Current"),(0,o.kt)("td",{parentName:"tr",align:null},"\uff1c 10 mA")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Output"),(0,o.kt)("td",{parentName:"tr",align:null},"Output UART(TTL electrical Level, 3V)Analog voltage(refer table 2 for sensor original amplifying signal)")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Operating Conditions"),(0,o.kt)("td",{parentName:"tr",align:null},"-20\uff5e25\u2103/15\uff5e90%RH(no condensation)")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Storage Conditions"),(0,o.kt)("td",{parentName:"tr",align:null},"-20\uff5e50\u2103/15\uff5e90%RH(no condensation)")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Size"),(0,o.kt)("td",{parentName:"tr",align:null},"\xf823.5mm*24.5mm")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Life Expectancy"),(0,o.kt)("td",{parentName:"tr",align:null},"2 years(in air)")))),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre"},"The aging time of power-on is not less than 5min; \nAvoid long-term contact with organic volatile solvents; \nThe use or storage environment cannot be an acid-base environment.\n"))),(0,o.kt)("h2",{id:"applications"},"Applications"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Portable gas detector"),(0,o.kt)("li",{parentName:"ul"},"Fixed gas alarm and detector")),(0,o.kt)("h2",{id:"platforms-supported"},"Platforms Supported"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Arduino"),(0,o.kt)("th",{parentName:"tr",align:null},"Raspberry Pi"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("p",null,(0,o.kt)("img",{src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg",alt:"pir",width:200,height:"auto"}))),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("p",null,(0,o.kt)("img",{src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg",alt:"pir",width:200,height:"auto"})))))),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre"},"The platforms mentioned above as supported is/are an indication of the module's software or theoritical compatibility. We only provide software library or code examples for Arduino platform in most cases. It is not possible to provide software library / demo code for all possible MCU platforms. Hence, users have to write their own software library.\n"))),(0,o.kt)("h2",{id:"getting-started"},"Getting Started"),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre"},"This chapter is based on Win10 and Arduino IDE 1.7.9\n"))),(0,o.kt)("p",null,"This new Grove - Oxygen Sensor Pro(GGC2330-O2) usage method is is not used in the same way as the Grove - Oxygen Sensor(GG2020-O2) ",(0,o.kt)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/Grove-Gas_Sensor-O2-MIX8410/"},"GG2020-O2"),"."),(0,o.kt)("p",null,"Here we will show you how this Grove - Oxygen Sensor Pro(GGC2330-O2) works via a simple demo. First of all, you need to prepare the below stuffs:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Seeeduino Cortex-M0+"),(0,o.kt)("th",{parentName:"tr",align:null},"Grove - Oxygen Sensor Pro(GGC2330-O2)"),(0,o.kt)("th",{parentName:"tr",align:null},"Base Shield"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("p",null,(0,o.kt)("img",{src:"https://files.seeedstudio.com/wiki/Seeeduino-Cortex-M0-/img/102010248-wiki210x158.jpg",alt:"pir",width:600,height:"auto"}))),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("p",null,(0,o.kt)("img",{src:"https://files.seeedstudio.com/wiki/Grove_Oxygen_Sensor_Pro/img/Grove_Oxygen_Sensor_Pro_Preview-07-210x157.png",alt:"pir",width:600,height:"auto"}))),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("p",null,(0,o.kt)("img",{src:"https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg",alt:"pir",width:500,height:"auto"})))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html"},"Get ONE Now")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://www.seeedstudio.com/Grove-Oxygen-Sensor-Pro-Pre-calibration-p-4896.html"},"Get ONE Now")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://www.seeedstudio.com/Grove-Universal-4-Pin-20cm-Unbuckled-Cable-%285-PCs-Pack%29-p-749.html"},"Get ONE Now"))))),(0,o.kt)("h3",{id:"connection"},"Connection"),(0,o.kt)("p",null,"Thanks to the benefit of Grove series modules, you don't need to make soldering or bread board, what you need to do is connect the modules to the right port of Base Shield. For this demo, we have only one Grove module. "),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Grove - Oxygen Sensor Pro(GGC2330-O2) is an analog input module, we connect it to ",(0,o.kt)("strong",{parentName:"li"},"UART")," in this demo.")),(0,o.kt)("p",{style:{textAlign:"center"}},(0,o.kt)("img",{src:"https://files.seeedstudio.com/wiki/Grove_Oxygen_Sensor_Pro/img/IMG_9626.jpg",alt:"pir",width:600,height:"auto"})),(0,o.kt)("h3",{id:"upload-the-code-to-arduino"},"Upload the code to Arduino"),(0,o.kt)("p",null,"Copy the below code to Arduino IDE."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'void setup() {\n  Serial.begin(9600);\n  Serial2.begin(9600);\n}\nvoid loop() {\n  if (Serial2.available()){\n    uint8_t begin_code = Serial2.read();\n    delay(10);\n    uint8_t state_code = Serial2.read();\n    delay(10);\n    uint8_t high_code = Serial2.read();\n    delay(10);\n    uint8_t low_code = Serial2.read();\n    delay(10);\n    uint8_t check_code = Serial2.read();\n    delay(10);\n    uint8_t checkk_code = Serial2.read();\n    delay(10);\n    uint8_t checkkk_code = Serial2.read();\n    delay(10);\n    uint8_t checkkkk_code = Serial2.read();\n    delay(10);\n    uint8_t checkkkkk_code = Serial2.read();\n    delay(10);\n\n    if(begin_code == 255 && state_code == 134){\n \n      float O2_val = ((high_code * 256) + low_code) * 0.1 ;\n      Serial.print("O2: ");\n      Serial.print(O2_val);\n      Serial.println(" %");\n      }\n    }\n    while(Serial2.read()>=0);    //clear buffer\n}\n')),(0,o.kt)("p",null,"Then choose the right Board and COM port, and then click on the Upload button, this process take few seconds. "),(0,o.kt)("h3",{id:"get-data"},"Get data"),(0,o.kt)("p",null,"Open serial monitor of your Arduino IDE, and you will get the data now."),(0,o.kt)("admonition",{type:"warning"},(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre"},"It need about 20~30 minutes to preheat the sensor, or you will get a larger value.\n")),(0,o.kt)("p",{parentName:"admonition"}," :::   "),"  ",(0,o.kt)("p",{style:{textAlign:"center"}},(0,o.kt)("img",{src:"https://files.seeedstudio.com/wiki/Grove_Gas_Sensor_O2/images/data.png",alt:"pir",width:600,height:"auto"})),(0,o.kt)("h2",{parentName:"admonition",id:"schematic-online-viewer"},"Schematic Online Viewer"),(0,o.kt)("div",{className:"altium-ecad-viewer","data-project-src":"http://files.seeedstudio.com/wiki/Grove_Oxygen_Sensor_Pro/res/Grove-OxygenSensorPro1.0.zip",style:{borderRadius:"0px 0px 4px 4px",height:500,borderStyle:"solid",borderWidth:1,borderColor:"rgb(241, 241, 241)",overflow:"hidden",maxWidth:1280,maxHeight:700,boxSizing:"border-box"}}),(0,o.kt)("h2",{parentName:"admonition",id:"resources"},"Resources"),(0,o.kt)("ul",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Grove_Oxygen_Sensor_Pro/res/GGC2330-O2-1.0.pdf"},"Grove - Oxygen Sensor Pro Datasheet")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"http://files.seeedstudio.com/wiki/Grove_Oxygen_Sensor_Pro/res/Grove-OxygenSensorPro1.0.zip"},"Schematic in Eagle File")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/SeeedDocument/Grove_Gas_Sensor_O2"},"Github Repository of this Document")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#files.seeedstudio.com/wiki/Grove_Oxygen_Sensor_Pro/res/GroveOxygenSensorProv1.0sch.pdf"},"PDF SCH"))),(0,o.kt)("h2",{parentName:"admonition",id:"projects"},"Projects"),(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("strong",{parentName:"p"},"LoRa IoTea"),": An automatic information collection system applied to tea plantation. It is part of intelligent agricultural information collection."),(0,o.kt)("iframe",{frameborder:"0",height:"327.5",scrolling:"no",src:"https://www.hackster.io/SeeedStudio/seeed-lora-iotea-solution-b5ee95/embed",width:"350"}),(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("strong",{parentName:"p"},"A Plant Box with Lighting and Raining")," You never seen such a way to water you plant."),(0,o.kt)("iframe",{frameborder:"0",height:"327.5",scrolling:"no",src:"https://www.hackster.io/team-seeed-ae/a-plant-box-with-lighting-and-raining-bfc59b/embed",width:"350"}),(0,o.kt)("h2",{parentName:"admonition",id:"tech-support"},"Tech Support"),(0,o.kt)("p",{parentName:"admonition"},"Please submit any technical issue into our ",(0,o.kt)("a",{parentName:"p",href:"https://forum.seeedstudio.com/"},"forum"),"."),(0,o.kt)("h2",{parentName:"admonition",id:"upgradable-to-industrial-sensors"},"Upgradable to Industrial Sensors"),(0,o.kt)("p",{parentName:"admonition"},"With the SenseCAP ",(0,o.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html"},"S2110 controller")," and ",(0,o.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html"},"S2100 data logger"),", you can easily turn the Grove into a LoRaWAN\xae sensor. Seeed not only helps you with prototyping but also offers you the possibility to expand your project with the SenseCAP series of robust ",(0,o.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&categories=SenseCAP&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP"},"industrial sensors"),"."),(0,o.kt)("p",{parentName:"admonition"},"The IP66 housing, Bluetooth configuration, compatibility with the global LoRaWAN\xae network, built-in 19 Ah battery, and powerful support from APP make the ",(0,o.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/catalogsearch/result/?q=S21&categories=SenseCAP&product_module=Device"},"SenseCAP S210x")," the best choice for industrial applications. The series includes sensors for soil moisture, air temperature and humidity, light intensity, CO2, EC, and an 8-in-1 weather station. Try the latest SenseCAP S210x for your next successful industrial project."),(0,o.kt)("div",{align:"center"},(0,o.kt)("a",{href:"https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP",target:"_blank"},(0,o.kt)("img",{width:800,src:"https://files.seeedstudio.com/wiki/K1100_overview/sensecap.png"})))))}u.isMDXComponent=!0}}]);