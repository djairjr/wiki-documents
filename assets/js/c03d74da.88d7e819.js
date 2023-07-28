"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[74645],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>h});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(a),c=r,h=d["".concat(s,".").concat(c)]||d[c]||m[c]||i;return a?n.createElement(h,o(o({ref:t},u),{},{components:a})):n.createElement(h,o({ref:t},u))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},97646:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var n=a(87462),r=(a(67294),a(3905));const i={description:"Grove - Dust Sensor",title:"Grove - Dust Sensor",keywords:["Grove Grove_Sensors Air_Quality"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Grove-Dust_Sensor",last_update:{date:"1/20/2023",author:"jianjing huang"}},o=void 0,l={unversionedId:"Sensor/Grove/Grove_Sensors/Air_Quality/Grove-Dust_Sensor",id:"Sensor/Grove/Grove_Sensors/Air_Quality/Grove-Dust_Sensor",title:"Grove - Dust Sensor",description:"Grove - Dust Sensor",source:"@site/docs/Sensor/Grove/Grove_Sensors/Air_Quality/Grove-Dust_Sensor.md",sourceDirName:"Sensor/Grove/Grove_Sensors/Air_Quality",slug:"/Grove-Dust_Sensor",permalink:"/Grove-Dust_Sensor",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Sensor/Grove/Grove_Sensors/Air_Quality/Grove-Dust_Sensor.md",tags:[],version:"current",lastUpdatedBy:"jianjing huang",lastUpdatedAt:1674172800,formattedLastUpdatedAt:"Jan 20, 2023",frontMatter:{description:"Grove - Dust Sensor",title:"Grove - Dust Sensor",keywords:["Grove Grove_Sensors Air_Quality"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Grove-Dust_Sensor",last_update:{date:"1/20/2023",author:"jianjing huang"}},sidebar:"ProductSidebar",previous:{title:"Grove - Laser PM2.5 Sensor (HM3301)",permalink:"/Grove-Laser_PM2.5_Sensor-HM3301"},next:{title:"Grove - Air Quality Sensor v1.3",permalink:"/Grove-Air_Quality_Sensor_v1.3"}},s={},p=[{value:"Version",id:"version",level:2},{value:"Features",id:"features",level:2},{value:"Specifications",id:"specifications",level:2},{value:"Platforms Supported",id:"platforms-supported",level:2},{value:"Application Ideas",id:"application-ideas",level:2},{value:"Getting Started",id:"getting-started",level:2},{value:"Play With Arduino",id:"play-with-arduino",level:3},{value:"Play With Raspberry Pi",id:"play-with-raspberry-pi",level:3},{value:"Related Projects",id:"related-projects",level:2},{value:"FAQs",id:"faqs",level:2},{value:"Resources",id:"resources",level:2},{value:"Projects",id:"projects",level:2},{value:"Tech Support &amp; Product Discussion",id:"tech-support--product-discussion",level:2},{value:"Upgradable to Industrial Sensors",id:"upgradable-to-industrial-sensors",level:2}],u={toc:p};function d(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Grove_Dust_Sensor/img/Dust1.JPG",alt:null})),(0,r.kt)("p",null,"This Dust Sensor gives a good indication of the air quality in an environment by measuring the dust concentration. The Particulate Matter level (PM level) in the air is measured by counting the Low Pulse Occupancy time (LPO time) in given time unit. LPO time is proportional to PM concentration. This sensor can provide reliable data for air purifier systems; it is responsive to PM of diameter 1\u03bcm."),(0,r.kt)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/4df5kaaKa6I",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"This sensor uses counting method to measure dust concentration, not weighing method, and the unit is pcs/L or pcs/0.01cf."),(0,r.kt)("li",{parentName:"ul"},"Please pay attention to the warnings listed here:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Please keep it upright."),(0,r.kt)("li",{parentName:"ul"},"3 min preheat time is required while using for the first time."),(0,r.kt)("li",{parentName:"ul"},"Arbitrary operation may cause unexpected damage."),(0,r.kt)("li",{parentName:"ul"},"Following widgets (red rectangle marked) is used only for the factory setting. Please ",(0,r.kt)("strong",{parentName:"li"},"DO NOT")," change the default configuration."))))),(0,r.kt)("p",{style:{textAlign:"center"}},(0,r.kt)("a",{href:"https://www.seeedstudio.com/Grove-Dust-Sensor-p-1050.html",target:"_blank"},(0,r.kt)("img",{src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/get_one_now_small.png",width:"200",height:"38",border:"0"}))),(0,r.kt)("h2",{id:"version"},"Version"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Product Version"),(0,r.kt)("th",{parentName:"tr",align:null},"Changes"),(0,r.kt)("th",{parentName:"tr",align:null},"Released Date"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Grove-Dust Sensor V1.0"),(0,r.kt)("td",{parentName:"tr",align:null},"Initial"),(0,r.kt)("td",{parentName:"tr",align:null},"Nov 2012")))),(0,r.kt)("h2",{id:"features"},"Features"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Stable and sensitive detection of not only cigarette smoke but also house dust which are indoor asthma triggers."),(0,r.kt)("li",{parentName:"ul"},"Air is self-aspirated with the current of air generation mechanism with a built-in heater."),(0,r.kt)("li",{parentName:"ul"},"Easy maintenance. High sensitivity lasts long term."),(0,r.kt)("li",{parentName:"ul"},"Dual output for the particle size over 1 micron and 2.5 micron (approx)."),(0,r.kt)("li",{parentName:"ul"},"More compact and lighter, and easy installation.")),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"More details about Grove modules please refer to ",(0,r.kt)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/Grove_System/"},"Grove System"))),(0,r.kt)("h2",{id:"specifications"},"Specifications"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Item"),(0,r.kt)("th",{parentName:"tr",align:null},"Norm"),(0,r.kt)("th",{parentName:"tr",align:null},"Unit"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"VCC"),(0,r.kt)("td",{parentName:"tr",align:null},"4.75~5.75"),(0,r.kt)("td",{parentName:"tr",align:null},"V")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Standby Current Supply"),(0,r.kt)("td",{parentName:"tr",align:null},"90"),(0,r.kt)("td",{parentName:"tr",align:null},"mA")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Detectable range of concentration"),(0,r.kt)("td",{parentName:"tr",align:null},"0~28,000 / 0 ~ 8000"),(0,r.kt)("td",{parentName:"tr",align:null},"pcs/liter / pcs/0.01cf")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Operating Temperature Range"),(0,r.kt)("td",{parentName:"tr",align:null},"0~45"),(0,r.kt)("td",{parentName:"tr",align:null},"\xb0C")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Output Method"),(0,r.kt)("td",{parentName:"tr",align:null},"Negative Logic, Digital output, High: over 4.0V(Rev.2), Low: under 0.7V"),(0,r.kt)("td",{parentName:"tr",align:null},"-")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Detecting the particle diameter"),(0,r.kt)("td",{parentName:"tr",align:null},">1"),(0,r.kt)("td",{parentName:"tr",align:null},"\u03bcm")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Dimensions"),(0,r.kt)("td",{parentName:"tr",align:null},"59(W) \xd7 45(H) \xd7 22(D)"),(0,r.kt)("td",{parentName:"tr",align:null},"mm")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Humidity Range"),(0,r.kt)("td",{parentName:"tr",align:null},"95% rh or less"),(0,r.kt)("td",{parentName:"tr",align:null},"-")))),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre"},"In the latest version, output Hi Voltage is changed from 4.0V to 4.5V.\n"))),(0,r.kt)("h2",{id:"platforms-supported"},"Platforms Supported"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Arduino"),(0,r.kt)("th",{parentName:"tr",align:null},"Raspberry Pi"),(0,r.kt)("th",{parentName:"tr",align:null}),(0,r.kt)("th",{parentName:"tr",align:null}),(0,r.kt)("th",{parentName:"tr",align:null}))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg",alt:null})),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg",alt:null})),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg",alt:null})),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg",alt:null})),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg",alt:null}))))),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"The platforms mentioned above as supported is/are an indication of the module's software or theoritical compatibility. We only provide software library or code examples for Arduino platform in most cases. It is not possible to provide software library / demo code for all possible MCU platforms. Hence, users have to write their own software library.")),(0,r.kt)("h2",{id:"application-ideas"},"Application Ideas"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Air Purifier"),(0,r.kt)("li",{parentName:"ul"},"Air Quality Monitor"),(0,r.kt)("li",{parentName:"ul"},"Air Conditioner"),(0,r.kt)("li",{parentName:"ul"},"Ventilator")),(0,r.kt)("h2",{id:"getting-started"},"Getting Started"),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"If this is the first time you work with Arduino, we firmly recommend you to see ",(0,r.kt)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/Getting_Started_with_Arduino/"},"Getting Started with Arduino")," before the start.")),(0,r.kt)("h3",{id:"play-with-arduino"},"Play With Arduino"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Hardware")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Step 1.")," Prepare the below stuffs:")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Seeeduino V4.2"),(0,r.kt)("th",{parentName:"tr",align:null},"Base Shield"),(0,r.kt)("th",{parentName:"tr",align:null},"Grove-Dust Sensor"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/seeeduino_v4.2.jpg",alt:"enter image description here"})),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/base_shield.jpg",alt:"enter image description here"})),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/Grove_Dust_Sensor/img/Dust_sensor%20-_s.JPG",alt:"enter image description here"}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html"},"Get One Now")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://www.seeedstudio.com/Base-Shield-V2-p-1378.html"},"Get One Now")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://www.seeedstudio.com/Grove-Dust-Sensor-p-1050.html"},"Get One Now"))))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Step 2.")," Connect Grove-Dust Sensor to ",(0,r.kt)("strong",{parentName:"li"},"D8")," port of Grove-Base Shield."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Step 3.")," Plug Grove - Base Shield into Seeeduino."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Step 4.")," Connect Seeeduino to PC via a USB cable.")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Grove_Dust_Sensor/img/seeeduino_dust.jpg",alt:null})),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"If we don't have Grove Base Shield, We also can directly connect Grove-Dust Sensor to Seeeduino as below.")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Seeeduino"),(0,r.kt)("th",{parentName:"tr",align:null},"Grove-Loudness Sensor"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"5V"),(0,r.kt)("td",{parentName:"tr",align:null},"Red")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"GND"),(0,r.kt)("td",{parentName:"tr",align:null},"Black")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"NC"),(0,r.kt)("td",{parentName:"tr",align:null},"White")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"D8"),(0,r.kt)("td",{parentName:"tr",align:null},"Yellow")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Software")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Step 1.")," Please copy below code to Arduio IDE and upload to arduino. If you do not know how to upload the code, please check ",(0,r.kt)("a",{parentName:"li",href:"https://wiki.seeedstudio.com/Upload_Code/"},"how to upload code"),".")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'int pin = 8;\nunsigned long duration;\nunsigned long starttime;\nunsigned long sampletime_ms = 30000;//sampe 30s ;\nunsigned long lowpulseoccupancy = 0;\nfloat ratio = 0;\nfloat concentration = 0;\n\nvoid setup() \n{\n    Serial.begin(9600);\n    pinMode(pin,INPUT);\n    starttime = millis();//get the current time;\n}\n\nvoid loop() \n{\n    duration = pulseIn(pin, LOW);\n    lowpulseoccupancy = lowpulseoccupancy+duration;\n\n    if ((millis()-starttime) > sampletime_ms)//if the sampel time == 30s\n    {\n        ratio = lowpulseoccupancy/(sampletime_ms*10.0);  // Integer percentage 0=>100\n        concentration = 1.1*pow(ratio,3)-3.8*pow(ratio,2)+520*ratio+0.62; // using spec sheet curve\n        Serial.print(lowpulseoccupancy);\n        Serial.print(",");\n        Serial.print(ratio);\n        Serial.print(",");\n        Serial.println(concentration);\n        lowpulseoccupancy = 0;\n        starttime = millis();\n    }\n}\n\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Step 2.")," In this program, the Seeeduino samples the total duration of \"logic low\" in 30s, and this duration illustrates the dust density of environment. Open Serial Monitor, we can get air quality's value detected by sensor from PC's serial port.")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Grove_Dust_Sensor/img/Serial.png",alt:null})),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Terminology\uff1a")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},'"Lowpulseoccupancy"')," represents the Low Pulse Occupancy Time(LPO Time) detected in given 30s. Its unit is microseconds.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},'"Ratio"')," reflects on which level LPO Time takes up the whole sample time.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},'"Concentration"')," is a figure that has a physical meaning. It is calculated from the characteristic graph below by using the LPO time.\n",(0,r.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Grove_Dust_Sensor/image/600px-Characteristics.jpg",alt:null}))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Here is a graph of the dust concentration measured in office :"))),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Grove_Dust_Sensor/image/600px-Dust_sensor_4.jpg",alt:null})),(0,r.kt)("p",null,"We can see the concentration of dust is very low in the evening, but it is higher in the afternoon. A threshold can be set when the concentration is above a value. Also, if you want to set the sensor more sensitive you can add a fan on the sensor, and add a 10k\u03a9 resistor between the Pin5 and Ground. More information please visit the ",(0,r.kt)("a",{parentName:"p",href:"https://indiaairquality.com/2014/12/14/measuring-the-pickle-jr-a-modified-ppd42-with-an-attached-fan/"},"blog of A.J"),"."),(0,r.kt)("h3",{id:"play-with-raspberry-pi"},"Play With Raspberry Pi"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Hardware")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Step 1.")," Prepare the below stuffs:")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Raspberry pi"),(0,r.kt)("th",{parentName:"tr",align:null},"GrovePi_Plus"),(0,r.kt)("th",{parentName:"tr",align:null},"Grove-Dust Sensor"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/rasp.jpg",alt:"enter image description here"})),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/Grovepi%2B.jpg",alt:"enter image description here"})),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/Grove_Dust_Sensor/img/Dust_sensor%20-_s.JPG",alt:"enter image description here"}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html"},"Get One Now")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://www.seeedstudio.com/GrovePi%2B-p-2241.html"},"Get One Now")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://www.seeedstudio.com/Grove-Dust-Sensor-p-1050.html"},"Get One Now"))))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Step 2.")," Plug the GrovePi_Plus into Raspberry."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Step 3.")," Connect Grove-Dust Sensor to ",(0,r.kt)("strong",{parentName:"li"},"D2")," port of GrovePi_Plus."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Step 4.")," Connect the Raspberry to PC through USB cable.")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Grove_Dust_Sensor/img/rpi_dust.jpg",alt:null})),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Software")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Step 1.")," Follow ",(0,r.kt)("a",{parentName:"li",href:"https://www.dexterindustries.com/GrovePi/get-started-with-the-grovepi/setting-software/"},"Setting Software")," to configure the development environment."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Step 2.")," Git clone the Github repository.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"cd ~\ngit clone https://github.com/DexterInd/GrovePi.git\n\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Step 3.")," Excute below commands to monitor the dust.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"cd ~/GrovePi/Software/Python\npython grove_dust_sensor.py\n")),(0,r.kt)("p",null,"Here is the grove_dust_sensor.py code."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'import time\nimport grovepi\nimport atexit\n\natexit.register(grovepi.dust_sensor_dis)\n\nprint("Reading from the dust sensor")\ngrovepi.dust_sensor_en()\nwhile True:\n    try:\n  [new_val,lowpulseoccupancy] = grovepi.dustSensorRead()\n  if new_val:\n   print(lowpulseoccupancy)\n  time.sleep(5) \n\n    except IOError:\n        print ("Error")\n\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Step 4.")," We will see the dust status as below.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"pi@raspberrypi:~/GrovePi/Software/Python $ python grove_dust_sensor.py \nReading from the dust sensor\n14029\n2621\n1725\n1978\n2533\n1619\n")),(0,r.kt)("h2",{id:"related-projects"},"Related Projects"),(0,r.kt)("p",null,"If you want to make some awesome projects by Grove - Dust Sensor, here is a project for reference."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Air Quality Box")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Grove_Dust_Sensor/image/600px-Overview0.png",alt:null})),(0,r.kt)("p",null,"This section an IoT demo made by Seeeduino and ",(0,r.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/wiki/Grove_System"},"Grove"),"."),(0,r.kt)("p",null,"More attention is being paid to the environmental air quality nowadays because the tiny particles in the air around can badly endanger people\u2019s health. We always get the information of environment from our government department. But it\u2019s the average value of the whole city/section. It can not reflect the environment around you accurately."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://www.instructables.com/id/Air-Quality-Test-Box/?ALLSTEPS"},(0,r.kt)("img",{parentName:"a",src:"https://files.seeedstudio.com/wiki/Grove_Dust_Sensor/image/200px-Wiki_makeitnow_logo.png",alt:null}))),(0,r.kt)("h2",{id:"faqs"},"FAQs"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Q1: How can Grove - Dust Sensor (with 5V logic) be used with Seeeduino Stalker (with 3.3V logic)?")),(0,r.kt)("p",null,"A1: The output signal from Dust Sensor needs to be scaled down to 3.3V logic to work with Seeeduino Stalker (or any such board). The output from Dust Sensor is 0.7V for Logic Low and greater than 4.0V for Logic High. You could use a voltage divider to scale the output to be compatible with 3.3V logic or use a TTL logic level translator."),(0,r.kt)("h2",{id:"resources"},"Resources"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"[Datasheet]")," ",(0,r.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Grove_Dust_Sensor/resource/Grove_-_Dust_sensor.pdf"},"Grove-Dust_sensor datasheet")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"[Datasheet]")," ",(0,r.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Grove_Dust_Sensor/resource/ShinyeiPPD42NS_Deconstruction_TracyAllen.pdf"},"De-construction of the Shinyei PPD42NS dust sensor Made by Tracy Allen")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"[Demo]"),(0,r.kt)("a",{parentName:"li",href:"https://indiaairquality.com/2014/12/14/building-pickle-jr-the-low-cost-networked-pm2-5-monitor-part-2/"},"Building a low-cost networked PM2.5 monitor")," -- Made by A.J."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"[Demo]")," ",(0,r.kt)("a",{parentName:"li",href:"https://indiaairquality.com/2014/12/14/measuring-the-pickle-jr-a-modified-ppd42-with-an-attached-fan/"},"Measuring the Pickle Jr. \u2013 a modified PPD42 with an attached fan.")," -- Made by A.J."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"[Demo]")," ",(0,r.kt)("a",{parentName:"li",href:"http://irq5.io/2013/07/24/testing-the-shinyei-ppd42ns/"},"Testing the Shinyei PPD42NS")," -- Made by darell tan"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"[Demo]")," ",(0,r.kt)("a",{parentName:"li",href:"http://www.howmuchsnow.com/arduino/airquality/grovedust/"},"Air Quality Monitoring")," -- Made by Chris Nafis")),(0,r.kt)("h2",{id:"projects"},"Projects"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Air Quality Box"),": Monitor air quality around you"),(0,r.kt)("iframe",{frameborder:"0",height:"327.5",scrolling:"no",src:"https://www.hackster.io/ye-xiaobo/air-quality-box-d7658a/embed",width:"350"}),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Smart Crops: Implementing IoT in Conventional Agriculture!"),": Our mission with nature is to preserve it, designing and implementing technologies and monitoring methods with the help of IoT via Helium."),(0,r.kt)("iframe",{frameborder:"0",height:"327.5",scrolling:"no",src:"https://www.hackster.io/gabogiraldo/smart-crops-implementing-iot-in-conventional-agriculture-3674a6/embed",width:"350"}),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"LoRa IoTea"),": An automatic information collection system applied to tea plantation. It is part of intelligent agricultural information collection."),(0,r.kt)("iframe",{frameborder:"0",height:"327.5",scrolling:"no",src:"https://www.hackster.io/SeeedStudio/seeed-lora-iotea-solution-b5ee95/embed",width:"350"}),(0,r.kt)("h2",{id:"tech-support--product-discussion"},"Tech Support & Product Discussion"),(0,r.kt)("div",{class:"button_tech_support_container"},(0,r.kt)("a",{href:"https://forum.seeedstudio.com/",class:"button_forum"}),(0,r.kt)("a",{href:"https://www.seeedstudio.com/contacts",class:"button_email"})),(0,r.kt)("div",{class:"button_tech_support_container"},(0,r.kt)("a",{href:"https://discord.gg/eWkprNDMU7",class:"button_discord"}),(0,r.kt)("a",{href:"https://github.com/Seeed-Studio/wiki-documents/discussions/69",class:"button_discussion"})),(0,r.kt)("h2",{id:"upgradable-to-industrial-sensors"},"Upgradable to Industrial Sensors"),(0,r.kt)("p",null,"With the SenseCAP ",(0,r.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html"},"S2110 controller")," and ",(0,r.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html"},"S2100 data logger"),", you can easily turn the Grove into a LoRaWAN\xae sensor. Seeed not only helps you with prototyping but also offers you the possibility to expand your project with the SenseCAP series of robust ",(0,r.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&categories=SenseCAP&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP"},"industrial sensors"),"."),(0,r.kt)("p",null,"The IP66 housing, Bluetooth configuration, compatibility with the global LoRaWAN\xae network, built-in 19 Ah battery, and powerful support from APP make the ",(0,r.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/catalogsearch/result/?q=S21&categories=SenseCAP&product_module=Device"},"SenseCAP S210x")," the best choice for industrial applications. The series includes sensors for soil moisture, air temperature and humidity, light intensity, CO2, EC, and an 8-in-1 weather station. Try the latest SenseCAP S210x for your next successful industrial project."),(0,r.kt)("div",{align:"center"},(0,r.kt)("a",{href:"https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP",target:"_blank"},(0,r.kt)("img",{width:800,src:"https://files.seeedstudio.com/wiki/K1100_overview/sensecap.png"}))))}d.isMDXComponent=!0}}]);