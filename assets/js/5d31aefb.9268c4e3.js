"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[16918],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>c});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},d=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),m=p(a),h=r,c=m["".concat(s,".").concat(h)]||m[h]||u[h]||i;return a?n.createElement(c,l(l({ref:t},d),{},{components:a})):n.createElement(c,l({ref:t},d))}));function c(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=h;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[m]="string"==typeof e?e:r,l[1]=o;for(var p=2;p<i;p++)l[p]=a[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},64319:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var n=a(87462),r=(a(67294),a(3905));const i={description:"Grove - 4-Channel 16-bit ADC(ADS1115)",title:"Grove - 4-Channel 16-bit ADC(ADS1115)",keywords:["Grove"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Grove-16-bit-ADC-ADS1115",last_update:{date:"2/22/2023",author:"jianjing Huang"}},l=void 0,o={unversionedId:"Sensor/Grove/Grove_Accessories/Input_Output/Grove-16-bit-ADC-ADS1115",id:"Sensor/Grove/Grove_Accessories/Input_Output/Grove-16-bit-ADC-ADS1115",title:"Grove - 4-Channel 16-bit ADC(ADS1115)",description:"Grove - 4-Channel 16-bit ADC(ADS1115)",source:"@site/docs/Sensor/Grove/Grove_Accessories/Input_Output/Grove-16-bit-ADC-ADS1115.md",sourceDirName:"Sensor/Grove/Grove_Accessories/Input_Output",slug:"/Grove-16-bit-ADC-ADS1115",permalink:"/Grove-16-bit-ADC-ADS1115",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Sensor/Grove/Grove_Accessories/Input_Output/Grove-16-bit-ADC-ADS1115.md",tags:[],version:"current",lastUpdatedBy:"jianjing Huang",lastUpdatedAt:1677024e3,formattedLastUpdatedAt:"Feb 22, 2023",frontMatter:{description:"Grove - 4-Channel 16-bit ADC(ADS1115)",title:"Grove - 4-Channel 16-bit ADC(ADS1115)",keywords:["Grove"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Grove-16-bit-ADC-ADS1115",last_update:{date:"2/22/2023",author:"jianjing Huang"}},sidebar:"ProductSidebar",previous:{title:"Grove - Serial Camera",permalink:"/Grove-Serial_Camera"},next:{title:"Grove - NOT",permalink:"/Grove-NOT"}},s={},p=[{value:"Feature",id:"feature",level:2},{value:"Specification",id:"specification",level:2},{value:"Hardware Overview",id:"hardware-overview",level:2},{value:"Platforms Supported",id:"platforms-supported",level:2},{value:"Getting Started",id:"getting-started",level:2},{value:"Play With Arduino",id:"play-with-arduino",level:3},{value:"Hardware Connection",id:"hardware-connection",level:4},{value:"Software",id:"software",level:4},{value:"Play With Raspberry Pi",id:"play-with-raspberry-pi",level:3},{value:"Hardware",id:"hardware",level:3},{value:"Software",id:"software-1",level:3},{value:"Play with Wio Terminal",id:"play-with-wio-terminal",level:3},{value:"Software",id:"software-2",level:4},{value:"Play With Wio Terminal (ArduPy)",id:"play-with-wio-terminal-ardupy",level:3},{value:"Hardware",id:"hardware-1",level:4},{value:"Software",id:"software-3",level:4},{value:"Precautions",id:"precautions",level:2},{value:"Schematic Online Viewer",id:"schematic-online-viewer",level:2},{value:"Resources",id:"resources",level:2},{value:"Tech Support &amp; Product Discussion",id:"tech-support--product-discussion",level:2}],d={toc:p};function m(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Grove-16bit-ADC-ADS1115/ADS1115-45.png",alt:null})),(0,r.kt)("p",null,"For microcontrollers without an analog-to-digital converter, or when you need a more accurate ADC. We provide Grove - 4-channel 16-bit ADC(ADS1115), a 4-channel ADC based on Texas Instrument ADS1115, which is a high-precision, low-power, 16-bit ADC chip. It supports 4 single ended inputs or 2 differential inputs. What\u2019s more, it has a programmable data rate range from 8 SPS to 860 SPS with an internal programmable gain (up to x16) for small signals."),(0,r.kt)("p",null,"The module also contains a Grove port that is internally connected to its channel 0 and channel 1, of which makes it easier to use with Grove Ecosystem."),(0,r.kt)("div",{class:"get_one_now_container",style:{textAlign:"center"}},(0,r.kt)("a",{class:"get_one_now_item",href:"https://www.seeedstudio.com/Grove-ADS1115-16-bit-ADC-p-4599.html"},(0,r.kt)("strong",null,(0,r.kt)("span",null,(0,r.kt)("font",{color:"FFFFFF",size:"4"}," Get One Now \ud83d\uddb1\ufe0f"))))),(0,r.kt)("h2",{id:"feature"},"Feature"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Wide supply range: 2.0V ~ 5.5V, support 3.3 or 5V system"),(0,r.kt)("li",{parentName:"ul"},"16-bit high resolution ADC"),(0,r.kt)("li",{parentName:"ul"},"Programmable Data Rate: 8 SPS to 860 SPS"),(0,r.kt)("li",{parentName:"ul"},"Internal Programmable Gain: x16 with Internal low-drift voltage reference and oscillator"),(0,r.kt)("li",{parentName:"ul"},"The built-in PGA is gain-adjustable and can be controlled by software"),(0,r.kt)("li",{parentName:"ul"},"4 Single-Ended Inputs or 2 Differential Inputs")),(0,r.kt)("h2",{id:"specification"},"Specification"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Value"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Input voltage"),(0,r.kt)("td",{parentName:"tr",align:null},"3.3V / 5V")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ADC Resolution"),(0,r.kt)("td",{parentName:"tr",align:null},"16 Bit")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Programmable Data Rate"),(0,r.kt)("td",{parentName:"tr",align:null},"8SPS - 860 SPS")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Channels"),(0,r.kt)("td",{parentName:"tr",align:null},"4-channel single-ended input or 2-channel differential input")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Interface"),(0,r.kt)("td",{parentName:"tr",align:null},"I2C, Default Address: 0x48")))),(0,r.kt)("h2",{id:"hardware-overview"},"Hardware Overview"),(0,r.kt)("div",{align:"center"},(0,r.kt)("img",{src:"https://files.seeedstudio.com/wiki/Grove-16bit-ADC-ADS1115/ADS1115-HW.png"})),(0,r.kt)("h2",{id:"platforms-supported"},"Platforms Supported"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Arduino"),(0,r.kt)("th",{parentName:"tr",align:null},"Raspberry"),(0,r.kt)("th",{parentName:"tr",align:null},"ArduPy"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg",alt:null})),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg",alt:null})),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/ArduPy-Logo.png",alt:null}))))),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"The platforms mentioned above as supported is/are an indication of the module's software or theoritical compatibility. We only provide software library or code examples for Arduino platform in most cases. It is not possible to provide software library / demo code for all possible MCU platforms. Hence, users have to write their own software library.")),(0,r.kt)("h2",{id:"getting-started"},"Getting Started"),(0,r.kt)("h3",{id:"play-with-arduino"},"Play With Arduino"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Materials required")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Seeeduino V4.2"),(0,r.kt)("th",{parentName:"tr",align:null},"Base Shield"),(0,r.kt)("th",{parentName:"tr",align:null},"Grove - 16Bit ADC (ADS1115)"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/seeeduino_v4.2.jpg",alt:"enter image description here"})),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/base_shield.jpg",alt:"enter image description here"})),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/Grove-16bit-ADC-ADS1115/109020041-preview.png",alt:"enter image description here"}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html"},"Get ONE Now")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://www.seeedstudio.com/Base-Shield-V2-p-1378.html"},"Get ONE Now")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://www.seeedstudio.com/Grove-TDS-Sensor-p-4400.html"},"Get ONE Now"))))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"In addition, you can consider our new ",(0,r.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/Seeeduino-Lotus-Cortex-M0-p-2896.html"},"Seeeduino Lotus M0+"),", which is equivalent to the combination of Seeeduino V4.2 and Baseshield.")),(0,r.kt)("h4",{id:"hardware-connection"},"Hardware Connection"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Step 1.")," Plug Grove - 16 Bit ADC(ADS1115) to the ",(0,r.kt)("strong",{parentName:"p"},"I2C")," port of Grove - Base Shield.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Step 2.")," Plug Grove - Base Shield into Seeeduino.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Step 3.")," Connect Seeeduino to a PC via a USB cable."))),(0,r.kt)("div",{align:"center"},(0,r.kt)("img",{src:"https://files.seeedstudio.com/wiki/Grove-16bit-ADC-ADS1115/ADS1115-connect.png"})),(0,r.kt)("h4",{id:"software"},"Software"),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"If this is the first time you work with Arduino, we strongly recommend you to see ",(0,r.kt)("a",{parentName:"p",href:"http://wiki.seeedstudio.com/Getting_Started_with_Arduino/"},"Getting Started with Arduino")," before the start.")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Step 1.")," Download the ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/Seeed-Studio/Seeed_Arduino_ADS1115"},"Seeed Arduino ADS1115")," Library from Github.")),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Refer How to install library to ",(0,r.kt)("a",{parentName:"p",href:"http://wiki.seeedstudio.com/How_to_install_Arduino_Library/"},"install library")," for Arduino.")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Step 2.")," Restart the Arduino IDE. Open ",(0,r.kt)("strong",{parentName:"li"},"Seeed_Arduino_ADS1115")," example via the path: ",(0,r.kt)("strong",{parentName:"li"},"File")," \u2192 ",(0,r.kt)("strong",{parentName:"li"},"Examples")," \u2192 ",(0,r.kt)("strong",{parentName:"li"},"Grove - ADS1115")," \u2192 ",(0,r.kt)("strong",{parentName:"li"},"single_ended"),".")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"single_ended")," Example code is as follow:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-Cpp"},'#include "ADS1115.h"\n\n#ifdef SOFTWAREWIRE\n    #include <SoftwareWire.h>\n    SoftwareWire myWire(3, 2);\n    ADS1115<SoftwareWire> ads(myWire);//IIC\n#else\n    #include <Wire.h>\n    ADS1115<TwoWire> ads(Wire);//IIC\n#endif\n\nvoid setup(void)\n{\n    Serial.begin(115200);\n    while(!ads.begin(0x48)){\n        Serial.print("ads1115 init failed!!!");\n        delay(1000);\n    }\n    //ads.begin(0x49)\n    //ads.begin(0x4A)\n    //ads.begin(0x4B)\n\n    ads.setOperateMode(ADS1115_OS_SINGLE);\n    ads.setOperateStaus(ADS1115_MODE_SINGLE);\n\n  ads.setPGAGain(ADS1115_PGA_6_144);    // 2/3x gain +/- 6.144V  1 bit =  0.1875mV (default)\n    // ads.setPGAGain(ADS1115_PGA_4_096); // 1x gain   +/- 4.096V  1 bit =  0.125mV\n    // ads.setPGAGain(ADS1115_PGA_2_048); // 2x gain   +/- 2.048V  1 bit =  0.0625mV\n    // ads.setPGAGain(ADS1115_PGA_1_024); // 4x gain   +/- 1.024V  1 bit =  0.03125mV\n    // ads.setPGAGain(ADS1115_PGA_0_512); // 8x gain   +/- 0.512V  1 bit =  0.015625mV\n    // ads.setPGAGain(ADS1115_PGA_0_256); // 16x gain  +/- 0.256V  1 bit =  0.0078125mV\n\n    ads.setSampleRate(ADS1115_DR_8); //8 SPS\n    // ads.setSampleRate(ADS1115_DR_16); //16 SPS\n    // ads.setSampleRate(ADS1115_DR_32); //32 SPS\n    // ads.setSampleRate(ADS1115_DR_64); //64 SPS\n    // ads.setSampleRate(ADS1115_DR_128); //128 SPS\n    // ads.setSampleRate(ADS1115_DR_250); //250 SPS\n    // ads.setSampleRate(ADS1115_DR_475); //475 SPS\n    // ads.setSampleRate(ADS1115_DR_860); //860 SPS\n}\nvoid loop(void)\n{\n    int16_t adc0,adc1,adc2,adc3;\n    adc0 = ads.getConversionResults(channel0); //P = AIN0, N = GND\n    adc1 = ads.getConversionResults(channel1); //P = AIN1, N = GND\n    adc2 = ads.getConversionResults(channel2); //P = AIN2, N = GND\n    adc3 = ads.getConversionResults(channel3); //P = AIN3, N = GND\n    Serial.print("AIN0: "); Serial.println(adc0);\n    Serial.print("AIN1: "); Serial.println(adc1);\n    Serial.print("AIN2: "); Serial.println(adc2);\n    Serial.print("AIN3: "); Serial.println(adc3);\n    Serial.println(" ");\n    delay(1000);\n}\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Step 3.")," Upload the demo. If you do not know how to upload the code, please check ",(0,r.kt)("a",{parentName:"p",href:"http://wiki.seeedstudio.com/Upload_Code/"},"How to upload code"),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Step 4.")," Open the ",(0,r.kt)("strong",{parentName:"p"},"Serial Monitor")," of Arduino IDE by click ",(0,r.kt)("strong",{parentName:"p"},"Tool-> Serial Monitor"),". Or tap the ++ctrl+shift+m++ key at the same time. Set the baud rate to ",(0,r.kt)("strong",{parentName:"p"},"115200"),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Step 5.")," The result should be like this for 4 channels:"))),(0,r.kt)("div",{align:"center"},(0,r.kt)("img",{src:"https://files.seeedstudio.com/wiki/Grove-16bit-ADC-ADS1115/result.gif"})),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"In this example, 2/3x gain is set so need to multiply value by 0.1875mV. For example, 10201 x 0.1875mV = 1.91V.")),(0,r.kt)("h3",{id:"play-with-raspberry-pi"},"Play With Raspberry Pi"),(0,r.kt)("h3",{id:"hardware"},"Hardware"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Raspberry Pi"),(0,r.kt)("th",{parentName:"tr",align:null},"Grove Base Hat for RasPi"),(0,r.kt)("th",{parentName:"tr",align:null},"Grove - 16 Bit ADC(ADS1115)"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/rasp.jpg",alt:"enter image description here"})),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/Grove_Base_Hat_for_Raspberry_Pi/img/thumbnail.jpg",alt:"enter image description here"})),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/Grove-16bit-ADC-ADS1115/109020041-preview.png",alt:"enter image description here"}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html"},"Get ONE Now")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://www.seeedstudio.com/Grove-Base-Hat-for-Raspberry-Pi.html"},"Get ONE Now")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#"},"Get ONE Now"))))),(0,r.kt)("h3",{id:"software-1"},"Software"),(0,r.kt)("p",null,"The Grove - 16-bit ADC(ADS1115) have the same usage as 4-Channel 16-Bit ADC for Raspberry Pi (ADS1115) and so please follow tutorials ",(0,r.kt)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/4-Channel_16-Bit_ADC_for_Raspberry_Pi-ADS1115/#getting-started"},(0,r.kt)("strong",{parentName:"a"},"here")),"."),(0,r.kt)("h3",{id:"play-with-wio-terminal"},"Play with Wio Terminal"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Materials required")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Wio Terminal"),(0,r.kt)("th",{parentName:"tr",align:null},"Grove - 16Bit ADC (ADS1115)"),(0,r.kt)("th",{parentName:"tr",align:null},"Grove - Rotary Angle Sensor"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/Wio-Terminal/img/Wio-Terminal-thumbnail.png",alt:"enter image description here"})),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/Grove-16bit-ADC-ADS1115/109020041-preview.png",alt:"enter image description here"})),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/Grove-Rotary_Angle_Sensor/img/rorary_s.jpg",alt:"enter image description here"}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://www.seeedstudio.com/Wio-Terminal-p-4509.html"},"Get ONE Now")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#"},"Get ONE Now")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://www.seeedstudio.com/Grove-Rotary-Angle-Sensor--p-1242.html"},"Get ONE Now"))))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Step 1.")," Plug Grove - 16 Bit ADC(ADS1115) to the ",(0,r.kt)("strong",{parentName:"p"},"I2C")," port of Wio Terminal.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Step 2.")," Connect Wio Terminal to a PC via a USB cable."))),(0,r.kt)("div",{align:"center"},(0,r.kt)("img",{src:"https://files.seeedstudio.com/wiki/Grove-16bit-ADC-ADS1115/ADS1115-wt.png"})),(0,r.kt)("h4",{id:"software-2"},"Software"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Step 1.")," Download the ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/Seeed-Studio/Seeed_Arduino_ADS1115"},"Seeed Arduino ADS1115")," Library from Github.")),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Follow ",(0,r.kt)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/Wio-Terminal-Getting-Started/"},"Wio Terminal's get started")," before the following steps.")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Step 2.")," Download the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/Seeed-Studio/Seeed_Arduino_Sketchbook/tree/master/examples/WioTerminal-ADS1115"},(0,r.kt)("strong",{parentName:"a"},"example code"))," here.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Step 3.")," Upload the demo. If you do not know how to upload the code, please check ",(0,r.kt)("a",{parentName:"p",href:"http://wiki.seeedstudio.com/Upload_Code/"},"How to upload code"),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Step 4.")," Adjust the rotary sensor and you will see the corresponding voltage on Wio Terminal's LCD screen:"))),(0,r.kt)("div",{align:"center"},(0,r.kt)("img",{src:"https://files.seeedstudio.com/wiki/Grove-16bit-ADC-ADS1115/WT-ADS1115.gif"})),(0,r.kt)("h3",{id:"play-with-wio-terminal-ardupy"},"Play With Wio Terminal (ArduPy)"),(0,r.kt)("h4",{id:"hardware-1"},"Hardware"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Step 1.")," Prepare the below stuffs:")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Wio Terminal"),(0,r.kt)("th",{parentName:"tr",align:null},"Grove - 16 Bit ADC(ADS1115)"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/Wio-Terminal/img/Wio-Terminal-thumbnail.png",alt:"enter image description here"})),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/Grove-16bit-ADC-ADS1115/109020041-preview.png",alt:"enter image description here"}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://www.seeedstudio.com/Wio-Terminal-p-4509.html"},"Get One Now")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#"},"Get One Now"))))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Step 2.")," Connect Grove - 16 Bit ADC(ADS1115) to ",(0,r.kt)("strong",{parentName:"p"},"I2C")," port of Wio Terminal.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Step 3.")," Connect the Wio Terminal to PC through USB Type-C cable."))),(0,r.kt)("h4",{id:"software-3"},"Software"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Step 1.")," Follow ",(0,r.kt)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/ArduPy/"},(0,r.kt)("strong",{parentName:"a"},"ArduPy Getting Started"))," to configure the ArduPy development environment on Wio Terminal.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Step 2.")," Make sure that the ArduPy firmware with ADS1115 library  is flashed into Wio Terminal. For more information, please follow ",(0,r.kt)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/ArduPy/#ardupy-aip-cli-getting-started"},(0,r.kt)("strong",{parentName:"a"},"here")),"."))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"aip install Seeed-Studio/seeed-ardupy-ads1115\naip build\naip flash\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Step 3.")," Copy the following code and save it as ",(0,r.kt)("inlineCode",{parentName:"li"},"ArduPy-ads1115.py"),":")),(0,r.kt)("p",null,"Note: For more API, please check ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/Seeed-Studio/seeed-ardupy-ads1115"},"here"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'from arduino import grove_ads1115\nimport time\n\nads = grove_ads1115()\nads.setPGAGain(0x0000)\n\nwhile True:\n    print ("The channel0 value is :", ads.channel0)\n    print ("The channel1 value is :", ads.channel1)\n    print ("The channel2 value is :", ads.channel2)\n    print ("The channel3 value is :", ads.channel3)\n    time.sleep(1)\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Step 4.")," Save the ",(0,r.kt)("inlineCode",{parentName:"li"},"ArduPy-ads1115.py")," in a location that you know. Run the following command and ",(0,r.kt)("strong",{parentName:"li"},"replace")," ",(0,r.kt)("inlineCode",{parentName:"li"},"<YourPythonFilePath>")," with your ",(0,r.kt)("inlineCode",{parentName:"li"},"ArduPy-ads1115.py")," location.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},'aip shell -n -c "runfile <YourPythonFilePath>"\n# Example:\n# aip shell -n -c "runfile /Users/ansonhe/Desktop/ArduPy-ads1115.py"\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Step 5.")," We will see the ADC value display on terminal as below:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},'ansonhe@Ansons-Macbook-Pro ~:aip shell -n -c "runfile /Users/ansonhe/Desktop/ArduPy-ads1115.py"\nPositional argument (/dev/cu.usbmodem1413101) takes precedence over --open.\nConnected to ardupy\nThe channel0 value is : 17487.0\nThe channel1 value is : 3790.0\nThe channel2 value is : 3170.0\nThe channel3 value is : 3122.0\nThe channel0 value is : 17486.0\nThe channel1 value is : 3272.0\nThe channel2 value is : 3064.0\nThe channel3 value is : 3063.0\nThe channel0 value is : 17486.0\nThe channel1 value is : 3482.0\nThe channel2 value is : 3201.0\nThe channel3 value is : 3185.0\nThe channel0 value is : 17487.0\nThe channel1 value is : 17261.0\nThe channel2 value is : 5055.0\nThe channel3 value is : 4480.0\nThe channel0 value is : 11839.0\nThe channel1 value is : 3540.0\nThe channel2 value is : 1690.0\nThe channel3 value is : 1562.0\n')),(0,r.kt)("h2",{id:"precautions"},"Precautions"),(0,r.kt)("admonition",{title:"Warning",type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"When using multi-channel on ",(0,r.kt)("strong",{parentName:"p"},"A0")," and ",(0,r.kt)("strong",{parentName:"p"},"A1")," on screw terminal\uff0c please remember to not connect anything on the Grove Interface as they are also using A0 and A1. THIS MAY BE DANGEROUS WHEN DEALING WITH BATTERIES\u3002")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"When in use, the maximum voltage must ",(0,r.kt)("strong",{parentName:"p"},"not exceed 5.5V"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"When using the multi-channel acquisition, the sampling frequency must be set above 250SPS, otherwise the sampling frequency is too slow, and there is a possibility that the previous channel is not converted, the next channel is started, resulting in the failure to work"))),(0,r.kt)("h2",{id:"schematic-online-viewer"},"Schematic Online Viewer"),(0,r.kt)("div",{className:"altium-ecad-viewer","data-project-src":"https://files.seeedstudio.com/wiki/Grove-16bit-ADC-ADS1115/Grove-ADS1115.zip",style:{borderRadius:"0px 0px 4px 4px",height:500,borderStyle:"solid",borderWidth:1,borderColor:"rgb(241, 241, 241)",overflow:"hidden",maxWidth:1280,maxHeight:700,boxSizing:"border-box"}}),(0,r.kt)("h2",{id:"resources"},"Resources"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"[ZIP]")," ",(0,r.kt)("a",{parentName:"p",href:"https://files.seeedstudio.com/wiki/Grove-16bit-ADC-ADS1115/Grove-ADS1115.zip"},"Grove - 16 Bit ADC(ADS1115 Schematics Files)"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"[PDF]")," ",(0,r.kt)("a",{parentName:"p",href:"https://files.seeedstudio.com/wiki/Grove-16bit-ADC-ADS1115/ADS1115.pdf"},"Texas Instruments ADS1115 Datasheet")))),(0,r.kt)("h2",{id:"tech-support--product-discussion"},"Tech Support & Product Discussion"),(0,r.kt)("p",null,"Thank you for choosing our products! We are here to provide you with different support to ensure that your experience with our products is as smooth as possible. We offer several communication channels to cater to different preferences and needs."),(0,r.kt)("div",{class:"button_tech_support_container"},(0,r.kt)("a",{href:"https://forum.seeedstudio.com/",class:"button_forum"}),(0,r.kt)("a",{href:"https://www.seeedstudio.com/contacts",class:"button_email"})),(0,r.kt)("div",{class:"button_tech_support_container"},(0,r.kt)("a",{href:"https://discord.gg/eWkprNDMU7",class:"button_discord"}),(0,r.kt)("a",{href:"https://github.com/Seeed-Studio/wiki-documents/discussions/69",class:"button_discussion"})))}m.isMDXComponent=!0}}]);