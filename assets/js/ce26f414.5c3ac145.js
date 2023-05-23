"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[46667],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=u(n),m=i,h=p["".concat(s,".").concat(m)]||p[m]||c[m]||a;return n?r.createElement(h,o(o({ref:t},d),{},{components:n})):r.createElement(h,o({ref:t},d))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:i,o[1]=l;for(var u=2;u<a;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},56623:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>u});var r=n(87462),i=(n(67294),n(3905));const a={title:"WiFi Serial Transceiver Module",nointro:null,keywords:["docs","docusaurus"],image:"https://wiki.seeedstudio.com/WiFi_Serial_Transceiver_Module/",slug:"/WiFi_Serial_Transceiver_Module",last_update:{date:"02/03/2022",author:"gunengyu"}},o=void 0,l={unversionedId:"Sensor/Beyond_Grove/Sensor_Network/WiFi_Serial_Transceiver_Module",id:"Sensor/Beyond_Grove/Sensor_Network/WiFi_Serial_Transceiver_Module",title:"WiFi Serial Transceiver Module",description:"In this tutorial, we'll use a seeeduino to control the ESP8266 WiFi module to request a static page from the internet. This is a basic use of TCP socket, for other usage, please refer to the AT command guide of the module.",source:"@site/docs/Sensor/Beyond_Grove/Sensor_Network/WiFi_Serial_Transceiver_Module.md",sourceDirName:"Sensor/Beyond_Grove/Sensor_Network",slug:"/WiFi_Serial_Transceiver_Module",permalink:"/WiFi_Serial_Transceiver_Module",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Sensor/Beyond_Grove/Sensor_Network/WiFi_Serial_Transceiver_Module.md",tags:[],version:"current",lastUpdatedBy:"gunengyu",lastUpdatedAt:1643846400,formattedLastUpdatedAt:"Feb 3, 2022",frontMatter:{title:"WiFi Serial Transceiver Module",nointro:null,keywords:["docs","docusaurus"],image:"https://wiki.seeedstudio.com/WiFi_Serial_Transceiver_Module/",slug:"/WiFi_Serial_Transceiver_Module",last_update:{date:"02/03/2022",author:"gunengyu"}},sidebar:"ProductSidebar",previous:{title:"SDLogger - Open Hardware Data Logger",permalink:"/SDLogger-Open_Hardware_Data_Logger"},next:{title:"Wireless Sensor Node - Solar Kit",permalink:"/Wireless_Sensor_Node-Solar_Kit"}},s={},u=[{value:"Step-By-Step",id:"step-by-step",level:2},{value:"Related Projects",id:"related-projects",level:2},{value:"Tech Support",id:"tech-support",level:2}],d={toc:u};function p(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/WiFi_Serial_Transceiver_Module/img/WiFi%20Serial%20Transceiver%20Module.jpg",alt:null})),(0,i.kt)("p",null,"In this tutorial, we'll use a seeeduino to control the ESP8266 WiFi module to request a static page from the internet. This is a basic use of TCP socket, for other usage, please refer to the AT command guide of the module."),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/WiFi-Serial-Transceiver-Module-w-ESP8266-p-1994.html"},(0,i.kt)("img",{parentName:"a",src:"https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png",alt:null}))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Material list:")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.seeedstudio.com/Seeeduino-V30-Atmega-328P-p-669.html"},"Seeeduino V3")," / Arduino Uno"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.seeedstudio.com/depot/WiFi-Serial-Transceiver-Module-w-ESP8266-p-1994.html"},"ESP8266 Serial WiFi module")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.seeedstudio.com/UartSBee-V4-p-688.html"},"UartSBee v4")," / other USB to TTL converter")),(0,i.kt)("p",null,"!!!Note\nWe used a software serial to print some debugging information as there\u2019s only one hardware serial on seeeduino board. But the limitation of software serial is that it can\u2019t communicate in a higher baud rate than 19200. So part of the output from ESP module will be dropped because the baud rate 57600 of ESP module is higher than that of the software serial. If you have a board with more than one hardware serial (e.g. Arduino Mega 2560), the case will be easier."),(0,i.kt)("h2",{id:"step-by-step"},"Step-By-Step"),(0,i.kt)("hr",null),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Step 1"),": connect module as the following picture")),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/WiFi_Serial_Transceiver_Module/img/Wifi_connection.jpg",alt:null})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Step 2"),": Programe the seeeduino board."),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Open Arduino IDE and create a new sketch;"),(0,i.kt)("li",{parentName:"ul"},"Parse the following code into the sketch editor (need modifying the SSID and PASS macros into your own situation);")))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-c"},'#include <SoftwareSerial.h>\n   #define SSID "xxxxxxxx"\n   #define PASS "xxxxxxxx"\n   #define DST_IP "220.181.111.85" //baidu.com\n   SoftwareSerial dbgSerial(10, 11); // RX, TX\n   void setup()\n   {\n     // Open serial communications and wait for port to open:\n     Serial.begin(57600);\n     Serial.setTimeout(5000);\n     dbgSerial.begin(9600); //can\'t be faster than 19200 for softserial\n     dbgSerial.println("ESP8266 Demo");\n     //test if the module is ready\n     Serial.println("AT+RST");\n     delay(1000);\n     if(Serial.find("ready"))\n     {\n       dbgSerial.println("Module is ready");\n     }\n     else\n     {\n       dbgSerial.println("Module have no response.");\n       while(1);\n     }\n     delay(1000);\n     //connect to the wifi\n     boolean connected=false;\n     for(int i=0;i<5;i++)\n     {\n       if(connectWiFi())\n       {\n         connected = true;\n         break;\n       }\n     }\n     if (!connected){while(1);}\n     delay(5000);\n     //print the ip addr\n     /*Serial.println("AT+CIFSR");\n     dbgSerial.println("ip address:");\n     while (Serial.available())\n     dbgSerial.write(Serial.read());*/\n     //set the single connection mode\n     Serial.println("AT+CIPMUX=0");\n   }\n   void loop()\n   {\n     String cmd = "AT+CIPSTART=\\"TCP\\",\\"";\n     cmd += DST_IP;\n     cmd += "\\",80";\n     Serial.println(cmd);\n     dbgSerial.println(cmd);\n     if(Serial.find("Error")) return;\n     cmd = "GET / HTTP/1.0\\r\\n\\r\\n";\n     Serial.print("AT+CIPSEND=");\n     Serial.println(cmd.length());\n     if(Serial.find(">"))\n     {\n       dbgSerial.print(">");\n       }else\n       {\n         Serial.println("AT+CIPCLOSE");\n         dbgSerial.println("connect timeout");\n         delay(1000);\n         return;\n       }\n       Serial.print(cmd);\n       delay(2000);\n       //Serial.find("+IPD");\n       while (Serial.available())\n       {\n         char c = Serial.read();\n         dbgSerial.write(c);\n         if(c==\'\\r\') dbgSerial.print(\'\\n\');\n       }\n       dbgSerial.println("====");\n       delay(1000);\n     }\n     boolean connectWiFi()\n     {\n       Serial.println("AT+CWMODE=1");\n       String cmd="AT+CWJAP=\\"";\n       cmd+=SSID;\n       cmd+="\\",\\"";\n       cmd+=PASS;\n       cmd+="\\"";\n       dbgSerial.println(cmd);\n       Serial.println(cmd);\n       delay(2000);\n       if(Serial.find("OK"))\n       {\n         dbgSerial.println("OK, Connected to WiFi.");\n         return true;\n         }else\n         {\n           dbgSerial.println("Can not connect to the WiFi.");\n           return false;\n         }\n       }\n')),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Step 3"),": Open Serial Monitor and press the reset button of seeeduino board, you\u2019ll see the output.")),(0,i.kt)("p",null,"At last, Happy Hakcing! :)"),(0,i.kt)("h2",{id:"related-projects"},"Related Projects"),(0,i.kt)("hr",null),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/recipe/"},"Recipe Community")," is an awesome place where makers share their amazing works here. Our makers have made a lot of awesome projects with esp8266, check this out!"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"WiFi Scanner -Know the WiFi Signal around you")),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/WiFi_Serial_Transceiver_Module/img/Recipe-WiFi_Scanner-Know_the_WiFi_Signal_around_you.jpg",alt:null})),(0,i.kt)("p",null,"Build your own Wifi Scanner with few simple steps, all you need to do is prepare:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"A NodeMcu Dev. Board"),(0,i.kt)("li",{parentName:"ul"},"An I2C OLED."),(0,i.kt)("li",{parentName:"ul"},"Some cables"),(0,i.kt)("li",{parentName:"ul"},"And most importantly, a HOT HEART ON ESP8266")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://community.seeedstudio.com/project_detail.html?id=220"},"So, why not make one for yourself?")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Primary IoT Make with NodeMcu >ESP8266<")),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/WiFi_Serial_Transceiver_Module/img/Recipe-Primary_IoT_Make_with_NodeMcu--ESP8266--.jpg",alt:null})),(0,i.kt)("p",null,"An online Temperature&Humidity Monitor made with:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"A NodeMcu Dev. Board"),(0,i.kt)("li",{parentName:"ul"},"Grove - Temp&Humi Sensor"),(0,i.kt)("li",{parentName:"ul"},"Some cables")),(0,i.kt)("p",null,"Another easy trick, ",(0,i.kt)("a",{parentName:"p",href:"https://community.seeedstudio.com/project_detail.html?id=232"},"why not make one for yourself?")),(0,i.kt)("p",null,"Na, not enough? More ",(0,i.kt)("a",{parentName:"p",href:"https://community.seeedstudio.com/discover.html?t=wio"},"Awesome Projects with ESP8266"),"."),(0,i.kt)("p",null,"Even more Awesome Projects On ",(0,i.kt)("a",{parentName:"p",href:"https://community.seeedstudio.com/projects.html#recipe"},"Recipe")),(0,i.kt)("h2",{id:"tech-support"},"Tech Support"),(0,i.kt)("p",null," if you have any technical issue.  submit the issue into our ",(0,i.kt)("a",{parentName:"p",href:"http://forum.seeedstudio.com/"},"forum"),". "),(0,i.kt)("div",null,(0,i.kt)("br",null),(0,i.kt)("p",{style:{textAlign:"center"}},(0,i.kt)("a",{href:"https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts",target:"_blank"},(0,i.kt)("img",{src:"https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg"})))))}p.isMDXComponent=!0}}]);