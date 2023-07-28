"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[84936],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>g});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),u=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=u(e.components);return o.createElement(l.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=u(n),m=r,g=c["".concat(l,".").concat(m)]||c[m]||d[m]||i;return n?o.createElement(g,a(a({ref:t},p),{},{components:n})):o.createElement(g,a({ref:t},p))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:r,a[1]=s;for(var u=2;u<i;u++)a[u]=n[u];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},97473:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>c,frontMatter:()=>i,metadata:()=>s,toc:()=>u});var o=n(87462),r=(n(67294),n(3905));const i={title:"Analog",nointro:null,keywords:["docs","docusaurus"],image:"https://wiki.seeedstudio.com/Wio-Terminal-IO-Analog/",slug:"/Wio-Terminal-IO-Analog",last_update:{date:"01/11/2022",author:"gunengyu"}},a="Using the Grove Analog Port on Wio Terminal",s={unversionedId:"Sensor/Wio_Terminal/Hardware_Overview/Input&Output/Wio-Terminal-IO-Analog",id:"Sensor/Wio_Terminal/Hardware_Overview/Input&Output/Wio-Terminal-IO-Analog",title:"Analog",description:"This repo demonstrates how to use Analog as inputs on Wio Terminal. To use analog pins on Wio Terminal, you must use RPI pins.",source:"@site/docs/Sensor/Wio_Terminal/Hardware_Overview/Input&Output/Wio-Terminal-IO-Analog.md",sourceDirName:"Sensor/Wio_Terminal/Hardware_Overview/Input&Output",slug:"/Wio-Terminal-IO-Analog",permalink:"/Wio-Terminal-IO-Analog",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Sensor/Wio_Terminal/Hardware_Overview/Input&Output/Wio-Terminal-IO-Analog.md",tags:[],version:"current",lastUpdatedBy:"gunengyu",lastUpdatedAt:1641859200,formattedLastUpdatedAt:"Jan 11, 2022",frontMatter:{title:"Analog",nointro:null,keywords:["docs","docusaurus"],image:"https://wiki.seeedstudio.com/Wio-Terminal-IO-Analog/",slug:"/Wio-Terminal-IO-Analog",last_update:{date:"01/11/2022",author:"gunengyu"}},sidebar:"ProductSidebar",previous:{title:"Overview",permalink:"/Wio-Terminal-IO-Overview"},next:{title:"Digital",permalink:"/Wio-Terminal-IO-Digital"}},l={},u=[{value:"RPI Analog Pins",id:"rpi-analog-pins",level:2},{value:"Grove Port Configurations",id:"grove-port-configurations",level:2},{value:"Example Code",id:"example-code",level:2},{value:"Tech Support &amp; Product Discussion",id:"tech-support--product-discussion",level:2}],p={toc:u};function c(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"using-the-grove-analog-port-on-wio-terminal"},"Using the Grove Analog Port on Wio Terminal"),(0,r.kt)("div",{align:"center"},(0,r.kt)("img",{src:"https://files.seeedstudio.com/wiki/Wio-Terminal/img/2019-12-12%2011-36-22.2019-12-12%2011_37_02.gif"})),(0,r.kt)("p",null,"This repo demonstrates how to use Analog as inputs on Wio Terminal. To use analog pins on Wio Terminal, you must use RPI pins."),(0,r.kt)("h2",{id:"rpi-analog-pins"},"RPI Analog Pins"),(0,r.kt)("p",null,"The Raspberry Pi pinouts are defined as:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"RPI_A0")," -> ",(0,r.kt)("inlineCode",{parentName:"li"},"RPI_A8"))),(0,r.kt)("h2",{id:"grove-port-configurations"},"Grove Port Configurations"),(0,r.kt)("p",null,"To use the ",(0,r.kt)("strong",{parentName:"p"},"Grove configurable A/D Port")," as Analog port, simply define it as follow:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},"void setup() {\n    pinMode(A0, INPUT);\n}\n")),(0,r.kt)("p",null,"Now, connect your Grove sensor to the physical pin!"),(0,r.kt)("h2",{id:"example-code"},"Example Code"),(0,r.kt)("p",null,"In this example, a Grove Loudness sensor is used to demonstrate:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},'void setup() {\n    Serial.begin(115200);\n    pinMode(A0, INPUT);\n}\nvoid loop() {\n    int loudness = analogRead(A0);\n    Serial.print("Loudness: ");\n    Serial.println(loudness);\n    delay(50);\n}\n')),(0,r.kt)("h2",{id:"tech-support--product-discussion"},"Tech Support & Product Discussion"),(0,r.kt)("p",null,"Thank you for choosing our products! We are here to provide you with different support to ensure that your experience with our products is as smooth as possible. We offer several communication channels to cater to different preferences and needs."),(0,r.kt)("div",{class:"button_tech_support_container"},(0,r.kt)("a",{href:"https://forum.seeedstudio.com/",class:"button_forum"}),(0,r.kt)("a",{href:"https://www.seeedstudio.com/contacts",class:"button_email"})),(0,r.kt)("div",{class:"button_tech_support_container"},(0,r.kt)("a",{href:"https://discord.gg/eWkprNDMU7",class:"button_discord"}),(0,r.kt)("a",{href:"https://github.com/Seeed-Studio/wiki-documents/discussions/69",class:"button_discussion"})))}c.isMDXComponent=!0}}]);