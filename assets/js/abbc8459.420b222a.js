"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[10578],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var i=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=i.createContext({}),p=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=p(e.components);return i.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},S=i.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(n),S=o,h=d["".concat(l,".").concat(S)]||d[S]||u[S]||r;return n?i.createElement(h,a(a({ref:t},c),{},{components:n})):i.createElement(h,a({ref:t},c))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,a=new Array(r);a[0]=S;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:o,a[1]=s;for(var p=2;p<r;p++)a[p]=n[p];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}S.displayName="MDXCreateElement"},22165:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>r,metadata:()=>s,toc:()=>p});var i=n(87462),o=(n(67294),n(3905));const r={description:"WiFi Usage on Seeed Studio XIAO ESP32C3",title:"WiFi",keywords:["xiao"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/XIAO_ESP32C3_WiFi_Usage",last_update:{date:"1/11/2023",author:"shuxu hu"}},a="WiFi Usage",s={unversionedId:"Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_ESP32C3/XIAO_ESP32C3_WiFi_Usage",id:"Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_ESP32C3/XIAO_ESP32C3_WiFi_Usage",title:"WiFi",description:"WiFi Usage on Seeed Studio XIAO ESP32C3",source:"@site/docs/Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_ESP32C3/XIAO_ESP32C3_WiFi_Usage.md",sourceDirName:"Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_ESP32C3",slug:"/XIAO_ESP32C3_WiFi_Usage",permalink:"/XIAO_ESP32C3_WiFi_Usage",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_ESP32C3/XIAO_ESP32C3_WiFi_Usage.md",tags:[],version:"current",lastUpdatedBy:"shuxu hu",lastUpdatedAt:1673395200,formattedLastUpdatedAt:"Jan 11, 2023",frontMatter:{description:"WiFi Usage on Seeed Studio XIAO ESP32C3",title:"WiFi",keywords:["xiao"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/XIAO_ESP32C3_WiFi_Usage",last_update:{date:"1/11/2023",author:"shuxu hu"}},sidebar:"ProductSidebar",previous:{title:"Pin Multiplexing",permalink:"/XIAO_ESP32C3_Pin_Multiplexing"},next:{title:"Bluetooth",permalink:"/XIAO_ESP32C3_Bluetooth_Usage"}},l={},p=[{value:"Hardware set up",id:"hardware-set-up",level:2},{value:"Scan WiFi networks (Station Mode)",id:"scan-wifi-networks-station-mode",level:2},{value:"Connect to a WiFi network",id:"connect-to-a-wifi-network",level:2},{value:"Use as an Access Point",id:"use-as-an-access-point",level:2},{value:"XIAO ESP32C3 &amp; Home Assistant",id:"xiao-esp32c3--home-assistant",level:2},{value:"Tech Support &amp; Product Discussion",id:"tech-support--product-discussion",level:2}],c={toc:p};function d(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,i.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"wifi-usage"},"WiFi Usage"),(0,o.kt)("p",null,"Seeed Studio XIAO ESP32C3 supports WiFi connectivity with IEEE 802.11b/g/n. This wiki will introduce the basics of WiFi usage on this board."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\u26a0\ufe0f Please be careful when you try to use the board as a hotspot(access point). There may be a overheat problem and cause burns.")),(0,o.kt)("h2",{id:"hardware-set-up"},"Hardware set up"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Step 1.")," Connect the included ",(0,o.kt)("strong",{parentName:"li"},"WiFi/ Bluetooth antenna")," to the ",(0,o.kt)("strong",{parentName:"li"},"IPEX connector")," on the board")),(0,o.kt)("div",{align:"center"},(0,o.kt)("img",{src:"https://files.seeedstudio.com/wiki/XIAO_WiFi/wifi-6.png",alt:"pir",width:130,height:"auto"})),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Step 2.")," Connect XIAO ESP32C3 to your computer via a USB Type-C cable")),(0,o.kt)("div",{align:"center"},(0,o.kt)("img",{src:"https://files.seeedstudio.com/wiki/XIAO_WiFi/cable-connect.png",alt:"pir",width:120,height:"auto"})),(0,o.kt)("h2",{id:"scan-wifi-networks-station-mode"},"Scan WiFi networks (Station Mode)"),(0,o.kt)("p",null,"In this example, we are going to use XIAO ESP32C3 to scan available WiFi networks around it. Here the board will be configured in Station (STA) Mode."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Step 1.")," Copy and paste the code below into Arduino IDE")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cpp"},'#include "WiFi.h"\n\nvoid setup()\n{\n    Serial.begin(115200);\n\n    // Set WiFi to station mode and disconnect from an AP if it was previously connected\n    WiFi.mode(WIFI_STA);\n    WiFi.disconnect();\n    delay(100);\n\n    Serial.println("Setup done");\n}\n\nvoid loop()\n{\n    Serial.println("scan start");\n\n    // WiFi.scanNetworks will return the number of networks found\n    int n = WiFi.scanNetworks();\n    Serial.println("scan done");\n    if (n == 0) {\n        Serial.println("no networks found");\n    } else {\n        Serial.print(n);\n        Serial.println(" networks found");\n        for (int i = 0; i < n; ++i) {\n            // Print SSID and RSSI for each network found\n            Serial.print(i + 1);\n            Serial.print(": ");\n            Serial.print(WiFi.SSID(i));\n            Serial.print(" (");\n            Serial.print(WiFi.RSSI(i));\n            Serial.print(")");\n            Serial.println((WiFi.encryptionType(i) == WIFI_AUTH_OPEN)?" ":"*");\n            delay(10);\n        }\n    }\n    Serial.println("");\n\n    // Wait a bit before scanning again\n    delay(5000);\n}\n')),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Step 2.")," Upload the codes and open the Serial Monitor to start scanning for WiFi networks"),(0,o.kt)("div",{align:"center"},(0,o.kt)("img",{src:"https://files.seeedstudio.com/wiki/XIAO_WiFi/wifi-1.jpg",alt:"pir",width:500,height:"auto"})),(0,o.kt)("h2",{id:"connect-to-a-wifi-network"},"Connect to a WiFi network"),(0,o.kt)("p",null,"In this example, we are going to use XIAO ESP32C3 to connect to a WiFI network."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Step 1.")," Copy and paste the code below into Arduino IDE")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cpp"},'#include <WiFi.h>\n\nconst char* ssid     = "your-ssid";\nconst char* password = "your-password";   \n\nvoid setup()\n{\n    Serial.begin(115200);\n    delay(10);\n\n    // We start by connecting to a WiFi network\n\n    Serial.println();\n    Serial.println();\n    Serial.print("Connecting to ");\n    Serial.println(ssid);\n\n    WiFi.begin(ssid, password);\n\n    while (WiFi.status() != WL_CONNECTED) {\n        delay(500);\n        Serial.print(".");\n    }\n\n    Serial.println("");\n    Serial.println("WiFi connected");\n    Serial.println("IP address: ");\n    Serial.println(WiFi.localIP());\n}  \nvoid loop()\n{\n  }\n')),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Step 2.")," Upload the codes and open the Serial Monitor to check that the board is connected to the WiFI network"),(0,o.kt)("div",{align:"center"},(0,o.kt)("img",{src:"https://files.seeedstudio.com/wiki/XIAO_WiFi/wifi-2.jpg",alt:"pir",width:500,height:"auto"})),(0,o.kt)("h2",{id:"use-as-an-access-point"},"Use as an Access Point"),(0,o.kt)("p",null,"In this example, we are going to use XIAO ESP32C3 as a WiFi access point where other devices can be connected to it. This is similar to WiFi hotspot feature on mobile phones."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Step 1.")," Copy and paste the code below into Arduino IDE")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cpp"},'#include "WiFi.h"\nvoid setup()\n{\n  Serial.begin(115200);\n  WiFi.softAP("ESP_AP", "123456789");\n}\n\nvoid loop()\n{\n  Serial.print("Host Name:");\n  Serial.println(WiFi.softAPgetHostname());\n  Serial.print("Host IP:");\n  Serial.println(WiFi.softAPIP());\n  Serial.print("Host IPV6:");\n  Serial.println(WiFi.softAPIPv6());\n  Serial.print("Host SSID:");\n  Serial.println(WiFi.SSID());\n  Serial.print("Host Broadcast IP:");\n  Serial.println(WiFi.softAPBroadcastIP());\n  Serial.print("Host mac Address:");\n  Serial.println(WiFi.softAPmacAddress());\n  Serial.print("Number of Host Connections:");\n  Serial.println(WiFi.softAPgetStationNum());\n  Serial.print("Host Network ID:");\n  Serial.println(WiFi.softAPNetworkID());\n  Serial.print("Host Status:");\n  Serial.println(WiFi.status());\n  delay(1000);\n}\n')),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Step 2.")," Upload the codes and open the Serial Monitor to check more details about the WiFI access point"),(0,o.kt)("div",{align:"center"},(0,o.kt)("img",{src:"https://files.seeedstudio.com/wiki/XIAO_WiFi/wifi-3.png",alt:"pir",width:700,height:"auto"})),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Step 3.")," Scan for WiFi networks on a PC or mobile phone and you will be able to connect to this newly created network using the password we specified in the code"),(0,o.kt)("div",{align:"center"},(0,o.kt)("img",{src:"https://files.seeedstudio.com/wiki/XIAO_WiFi/wifi-4.png",alt:"pir",width:"{300}",height:"auto"})),(0,o.kt)("p",null,"Now you will see that the ",(0,o.kt)("strong",{parentName:"p"},"Number of Host Connections")," on serial monitor has been updated to ",(0,o.kt)("strong",{parentName:"p"},"1")),(0,o.kt)("div",{align:"center"},(0,o.kt)("img",{src:"https://files.seeedstudio.com/wiki/XIAO_WiFi/wifi-5.png",alt:"pir",width:700,height:"auto"})),(0,o.kt)("h2",{id:"xiao-esp32c3--home-assistant"},"XIAO ESP32C3 & Home Assistant"),(0,o.kt)("p",null,"We are pleased to announce that we have made support for the XIAO ESP32C3 access to ESPHome and Home Assistant!"),(0,o.kt)("p",null,"For more information on this section, please refer to the relevant tutorials."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://wiki.seeedstudio.com/Connect-Grove-to-Home-Assistant-ESPHome/"},"Connect Grove Modules to Home Assistant using ESPHome")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://wiki.seeedstudio.com/h68k-ha-esphome/"},"LinkStar Home Assistant"))),(0,o.kt)("h2",{id:"tech-support--product-discussion"},"Tech Support & Product Discussion"),(0,o.kt)("p",null,"Thank you for choosing our products! We are here to provide you with different support to ensure that your experience with our products is as smooth as possible. We offer several communication channels to cater to different preferences and needs."),(0,o.kt)("div",{class:"button_tech_support_container"},(0,o.kt)("a",{href:"https://forum.seeedstudio.com/",class:"button_forum"}),(0,o.kt)("a",{href:"https://www.seeedstudio.com/contacts",class:"button_email"})),(0,o.kt)("div",{class:"button_tech_support_container"},(0,o.kt)("a",{href:"https://discord.gg/eWkprNDMU7",class:"button_discord"}),(0,o.kt)("a",{href:"https://github.com/Seeed-Studio/wiki-documents/discussions/69",class:"button_discussion"})))}d.isMDXComponent=!0}}]);