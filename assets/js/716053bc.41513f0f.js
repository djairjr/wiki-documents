"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[71371],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>k});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(r),m=a,k=d["".concat(s,".").concat(m)]||d[m]||c[m]||i;return r?n.createElement(k,o(o({ref:t},u),{},{components:r})):n.createElement(k,o({ref:t},u))}));function k(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},62437:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var n=r(87462),a=(r(67294),r(3905));const i={description:"Grove BlinkM",title:"Grove BlinkM",keywords:["Grove"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Grove-BlinkM",last_update:{date:"1/29/2023",author:"jianjing Huang"}},o=void 0,l={unversionedId:"Sensor/Grove/Grove_Accessories/Display/Grove-BlinkM",id:"Sensor/Grove/Grove_Accessories/Display/Grove-BlinkM",title:"Grove BlinkM",description:"Grove BlinkM",source:"@site/docs/Sensor/Grove/Grove_Accessories/Display/Grove-BlinkM.md",sourceDirName:"Sensor/Grove/Grove_Accessories/Display",slug:"/Grove-BlinkM",permalink:"/Grove-BlinkM",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Sensor/Grove/Grove_Accessories/Display/Grove-BlinkM.md",tags:[],version:"current",lastUpdatedBy:"jianjing Huang",lastUpdatedAt:1674950400,formattedLastUpdatedAt:"Jan 29, 2023",frontMatter:{description:"Grove BlinkM",title:"Grove BlinkM",keywords:["Grove"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Grove-BlinkM",last_update:{date:"1/29/2023",author:"jianjing Huang"}},sidebar:"ProductSidebar",previous:{title:"Grove Serial LCD V1.0",permalink:"/Grove-Serial_LCD_V1.0"},next:{title:"Grove - Serial Camera Kit",permalink:"/Grove-Serial_Camera_Kit"}},s={},p=[{value:"Features",id:"features",level:2},{value:"Application Ideas",id:"application-ideas",level:2},{value:"Specification",id:"specification",level:2},{value:"Usage",id:"usage",level:2},{value:"Support",id:"support",level:2},{value:"Resources",id:"resources",level:2},{value:"Tech Support &amp; Product Discussion",id:"tech-support--product-discussion",level:2}],u={toc:p};function d(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Grove-BlinkM/img/Tbkms.jpg",alt:null})," ",(0,a.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Grove-BlinkM/img/Tbkms_01.jpg",alt:null})," ",(0,a.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Grove-BlinkM/img/Tbkms_02.jpg",alt:null})),(0,a.kt)("p",null,"Grove-BlinkM is made for ThingM I2C smart LED. The press-fit header holes in the BlinkM shield make the BlinkM or MinM press-fit onto the Grove , and compatible with our Grove system. It is like an adapter to convert BlinkM/MinM to our grove interface so that it can use our Grove - Base Shield.\nBlinkM is a \u201cSmart LED\u201d, a networkable and programmable full-color RGB LED for hobbyists, industrial designers, prototypers, and experimenters. It is designed to allow the easy addition of dynamic indicators, displays, and lighting to existing or new projects. If you\u2019ve used up all your microcontroller PWM channels controlling RGB LEDs and still want more, BlinkM is for you. BlinkM uses a high quality, high power RGB LED and a small AVR microcontroller to allow a user to digitally control a RGB LED over a simple I2C interface. Multiple BlinkMs can be stranded together on an I2C bus allowing for some amazing light displays."),(0,a.kt)("p",null,"Model: ",(0,a.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/depot/grove-blinkm-p-826.html?cPath=156_157"},"LED42149P")),(0,a.kt)("h2",{id:"features"},"Features"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Grove compatible")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Press-fit header holes")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Low power consumption")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Up to 127 BlinkMs on a single two-wire network")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Randomized color selection, with ranges and based on previous color")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Can plug directly into Arduino, no wiring or other components needed!"))),(0,a.kt)("h2",{id:"application-ideas"},"Application Ideas"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"RGB LED Matrix")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Decoration"))),(0,a.kt)("h2",{id:"specification"},"Specification"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Item"),(0,a.kt)("th",{parentName:"tr",align:null},"Min"),(0,a.kt)("th",{parentName:"tr",align:null},"Typical"),(0,a.kt)("th",{parentName:"tr",align:null},"Max"),(0,a.kt)("th",{parentName:"tr",align:null},"Unit"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"Voltage")),(0,a.kt)("td",{parentName:"tr",align:null},"3.6"),(0,a.kt)("td",{parentName:"tr",align:null},"5.0"),(0,a.kt)("td",{parentName:"tr",align:null},"5.2"),(0,a.kt)("td",{parentName:"tr",align:null},"VDC")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"Current")),(0,a.kt)("td",{parentName:"tr",align:null},"/"),(0,a.kt)("td",{parentName:"tr",align:null},"/"),(0,a.kt)("td",{parentName:"tr",align:null},"60"),(0,a.kt)("td",{parentName:"tr",align:null},"mA")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"Communication Protocol")),(0,a.kt)("td",{parentName:"tr",align:null},"I2C"),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null},"/")))),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Grove-BlinkM/img/Twigblink2.jpg",alt:null})),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Grove-BlinkM/img/Blinkmhw1.jpg",alt:null})),(0,a.kt)("p",null,"Used with LinkM"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Grove-BlinkM/img/Blinkmhw2.jpg",alt:null})),(0,a.kt)("p",null,"Solder the edge mounting."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Note:")," Grove - BlinkM as a bridge between BlinkM device and arduino/seeeduino. See the datasheet and example Arduino Control Code on ",(0,a.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/depot/blinkm-i2c-controlled-rgb-led-p-836.html?cPath=156_157"},"BlinkM page")," for details."),(0,a.kt)("h2",{id:"support"},"Support"),(0,a.kt)("p",null,"If you have questions or other better design ideas, you can go to our ",(0,a.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/forum"},"forum"),"."),(0,a.kt)("h2",{id:"resources"},"Resources"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"http://thingm.com/fileadmin/thingm/downloads/BlinkM_Examples.zip"},"BlinkM_Examples from ThingM.com")),(0,a.kt)("h2",{id:"tech-support--product-discussion"},"Tech Support & Product Discussion"),(0,a.kt)("p",null,"Thank you for choosing our products! We are here to provide you with different support to ensure that your experience with our products is as smooth as possible. We offer several communication channels to cater to different preferences and needs."),(0,a.kt)("div",{class:"button_tech_support_container"},(0,a.kt)("a",{href:"https://forum.seeedstudio.com/",class:"button_forum"}),(0,a.kt)("a",{href:"https://www.seeedstudio.com/contacts",class:"button_email"})),(0,a.kt)("div",{class:"button_tech_support_container"},(0,a.kt)("a",{href:"https://discord.gg/eWkprNDMU7",class:"button_discord"}),(0,a.kt)("a",{href:"https://github.com/Seeed-Studio/wiki-documents/discussions/69",class:"button_discussion"})))}d.isMDXComponent=!0}}]);