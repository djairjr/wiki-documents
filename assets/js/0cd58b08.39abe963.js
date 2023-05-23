"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[84891],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>c});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),u=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=u(n),h=o,c=d["".concat(p,".").concat(h)]||d[h]||m[h]||a;return n?r.createElement(c,i(i({ref:t},s),{},{components:n})):r.createElement(c,i({ref:t},s))}));function c(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=h;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[d]="string"==typeof e?e:o,i[1]=l;for(var u=2;u<a;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},43015:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>u});var r=n(87462),o=(n(67294),n(3905));const a={description:"Retro Phone Kit",title:"Retro Phone Kit",keywords:["Seeed_Elderly"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Retro Phone Kit",last_update:{date:"1/13/2023",author:"shuxu hu"}},i=void 0,l={unversionedId:"Seeed_Elderly/rePhone/Retro Phone Kit",id:"Seeed_Elderly/rePhone/Retro Phone Kit",title:"Retro Phone Kit",description:"Retro Phone Kit",source:"@site/docs/Seeed_Elderly/rePhone/Retro Phone Kit.md",sourceDirName:"Seeed_Elderly/rePhone",slug:"/Retro Phone Kit",permalink:"/Retro Phone Kit",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Seeed_Elderly/rePhone/Retro Phone Kit.md",tags:[],version:"current",lastUpdatedBy:"shuxu hu",lastUpdatedAt:1673568e3,formattedLastUpdatedAt:"Jan 13, 2023",frontMatter:{description:"Retro Phone Kit",title:"Retro Phone Kit",keywords:["Seeed_Elderly"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Retro Phone Kit",last_update:{date:"1/13/2023",author:"shuxu hu"}},sidebar:"ProductSidebar",previous:{title:"Rephone Core 2G-AtmelSAMD21",permalink:"/Rephone_core_2G-AtmelSAMD21"},next:{title:"Arduino IDE for RePhone Kit",permalink:"/Arduino_IDE_for_RePhone_Kit"}},p={},u=[{value:"Features",id:"features",level:2},{value:"Specification",id:"specification",level:2},{value:"Module Connection",id:"module-connection",level:2},{value:"Run a test code",id:"run-a-test-code",level:2},{value:"RePhone Community",id:"rephone-community",level:2},{value:"RePhone core 2G Atmel32u4 Schematic Online Viewer",id:"rephone-core-2g-atmel32u4-schematic-online-viewer",level:2},{value:"Xadow - Key Board Schematic Online Viewer",id:"xadow---key-board-schematic-online-viewer",level:2},{value:"Resources",id:"resources",level:2},{value:"Tech Support",id:"tech-support",level:2}],s={toc:u};function d(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Retro_Phone_Kit/img/Retro%20Phone%20Kit.jpg",alt:null})),(0,o.kt)("p",null,"The Retro Phone Kit is an open-source hardware phone that is compatible with Arduino. Remember RePhone\uff1fThe world first open-source and modular phone, with which you can hack things around you with cellular connection. The Retro Phone can be considered as RePhone with push button that can bring you back to those old days when mobile phone is simply a tool to make phone call. The kit is very easy to use, so you can make a mobile phone in minutes."),(0,o.kt)("p",null,"The main board of this kit is Xadow-Key Board, which contains a screen and a push button panel. The most important part is the RePhone Core 2G-Atmel32u4, which is a new RePhone Core board that was just brought to the market. It uses Atmel32u4 MCU and supports quad-band 850/900/1800/1900MHz that covers GSM network all over the world. We also let it keeps a 3.5mm headphone jack so that you can use a headphone to make phone call. We did not include any shell for the phone, so you are free to DIY any shell you like."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/Retro-Phone-Kit-p-2797.html"},(0,o.kt)("img",{parentName:"a",src:"https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png",alt:null}))),(0,o.kt)("h2",{id:"features"},"Features"),(0,o.kt)("hr",null),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Arduino-Compatible")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Support Analog Audio")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"2G Nano SIM only")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"PTCRB Certied")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"LCD 128*64")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"3.5mm headphone jack(with Mic) which support OMTP")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Power Supply:3.4-4.2V(BAT) 5V(USB)"))),(0,o.kt)("h2",{id:"specification"},"Specification"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Rephone Core 2G-Atmel32u4")),(0,o.kt)("p",null,"For more info about this module please check on ",(0,o.kt)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/RePhone_core_2G-Atmel32u4/"},"Rephone Core 2G-Atmel32u4")),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Item"),(0,o.kt)("th",{parentName:"tr",align:null},"Value"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Microcontroller"),(0,o.kt)("td",{parentName:"tr",align:null},"Atmega32U4")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Operating Voltage"),(0,o.kt)("td",{parentName:"tr",align:null},"3.3V")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"DC Current per I/O Pin"),(0,o.kt)("td",{parentName:"tr",align:null},"50")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Flash Memory"),(0,o.kt)("td",{parentName:"tr",align:null},"32 KB of which 4KB used by bootloader")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"SRAM"),(0,o.kt)("td",{parentName:"tr",align:null},"2.5 KB")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"EEPROM"),(0,o.kt)("td",{parentName:"tr",align:null},"1KB")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Clock Speed"),(0,o.kt)("td",{parentName:"tr",align:null},"16 MHz")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Lenght"),(0,o.kt)("td",{parentName:"tr",align:null},"68 mm")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Width"),(0,o.kt)("td",{parentName:"tr",align:null},"30 mm")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Weight"),(0,o.kt)("td",{parentName:"tr",align:null},"12 gr")))),(0,o.kt)("h2",{id:"module-connection"},"Module Connection"),(0,o.kt)("p",null,"The Rephone Core 2G-Atmel32u4  integrates a Xadow 36 Pin connector and a Xadow 11 Pin connector, similar as Xadow - GSM\uff0bBLE. In this case, the module connection is very easy,"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Connect the Xadow Key Board  to the RePhon core board via 36 pin connector, Do bear in mind that the cable has to be inserted firmly and flat, and most importantly, keep the \u2018TOP\u2019 side upwards.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Insert the antenna")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Insert a nano 2G SIM card")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Connect the Lipo battery to the Rephone core board via the battery interface."))),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Retro_Phone_Kit/img/IMG_2275.JPG",alt:null})),(0,o.kt)("h2",{id:"run-a-test-code"},"Run a test code"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"RePhone_Menu_GSM")),(0,o.kt)("p",null,"Step1. Install the Rephone Core 2G-Atmel32u4, please click ",(0,o.kt)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/RePhone_core_2G-Atmel32u4/#arduino-ide"},"here")," to see the full instruction ."),(0,o.kt)("p",null,"Step2. Find the example and upload to your board"),(0,o.kt)("p",null,"Once you have installed the Rephone Core 2G-Atmel32u4 in Arduino IDE, the basic examples would also be included and you can find them in the example section."),(0,o.kt)("p",null,"The examples include:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Atmel32u4_gprs.h"),(0,o.kt)("li",{parentName:"ul"},"TimerOne.h"),(0,o.kt)("li",{parentName:"ul"},"Rephone_lcm.h"),(0,o.kt)("li",{parentName:"ul"},"Rephone_button.h"),(0,o.kt)("li",{parentName:"ul"},"Rephone_menu_gsm")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Retro_Phone_Kit/img/Example%20code.png",alt:null})),(0,o.kt)("p",null,"Step3.  Make a phone call to yourself"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"If the example is uploaded successfully, the screen will be on and you can see the main menu as below.")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Retro_Phone_Kit/img/Main%20Manu.JPG",alt:null})),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Click the right button to select the phone call interface")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Retro_Phone_Kit/img/Call.JPG",alt:null})),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},'Del your number and then click the right button to choose "Go"')),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Retro_Phone_Kit/img/Del.JPG",alt:null})),(0,o.kt)("p",null,"Then you wil receive a phone call from the Retro Phone."),(0,o.kt)("h2",{id:"rephone-community"},"RePhone Community"),(0,o.kt)("hr",null),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://forum.seeedstudio.com/viewforum.php?f=71&sid=b70f8138c89becf7701260bb41faf9f4"},(0,o.kt)("img",{parentName:"a",src:"https://files.seeedstudio.com/wiki/RePhone_Lumi_Kit/img/RePhone_Community-2.png",alt:null}))),(0,o.kt)("p",null,"We\u2019ve been looking for a better place where our backers (RePhone Users) can sit together, warmly and comfortably, have conversations about RePhone, discuss technical problems, share ideas/projects, and give feedback on the modules\u2019 development in the future. And then here we go, the RePhone Community."),(0,o.kt)("p",null,"Now join us in the ",(0,o.kt)("a",{parentName:"p",href:"https://forum.seeedstudio.com/viewforum.php?f=71&sid=b70f8138c89becf7701260bb41faf9f4"},"RePhone Community"),"! Together we seek answers, make interesting stuff, care about each other, and share our experiences."),(0,o.kt)("h2",{id:"rephone-core-2g-atmel32u4-schematic-online-viewer"},"RePhone core 2G Atmel32u4 Schematic Online Viewer"),(0,o.kt)("div",{className:"altium-ecad-viewer","data-project-src":"https://files.seeedstudio.com/wiki/Retro_Phone_Kit/res/RePhone%20core%202G-Atmel32u4%20v1.0_Eagle.zip",style:{borderRadius:"0px 0px 4px 4px",height:500,borderStyle:"solid",borderWidth:1,borderColor:"rgb(241, 241, 241)",overflow:"hidden",maxWidth:1280,maxHeight:700,boxSizing:"border-box"}}),(0,o.kt)("h2",{id:"xadow---key-board-schematic-online-viewer"},"Xadow - Key Board Schematic Online Viewer"),(0,o.kt)("div",{className:"altium-ecad-viewer","data-project-src":"https://files.seeedstudio.com/wiki/Retro_Phone_Kit/res/202001232_PCBA%3BXadow%20-%20Key%20Board_Eagle.zip",style:{borderRadius:"0px 0px 4px 4px",height:500,borderStyle:"solid",borderWidth:1,borderColor:"rgb(241, 241, 241)",overflow:"hidden",maxWidth:1280,maxHeight:700,boxSizing:"border-box"}}),(0,o.kt)("h2",{id:"resources"},"Resources"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Retro_Phone_Kit/res/RePhone%20core%202G-Atmel32u4%20v1.0.pdf"},"RePhone core 2G Atmel32u4 Schematic in PDF")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Retro_Phone_Kit/res/RePhone%20core%202G-Atmel32u4%20v1.0_Eagle.zip"},"RePhone core 2G Atmel32u4 Schematic in Eagle")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Retro_Phone_Kit/res/Xadow%20-%20Key%20Board%20v1.0.pdf"},"Xaodw - Key Board Schematic in PDF")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Retro_Phone_Kit/res/202001232_PCBA%3BXadow%20-%20Key%20Board_Eagle.zip"},"Xadow - Key Board Schematic in Eagle")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Retro_Phone_Kit/res/RePhone%20core%202G-Atmel32u4%20driver.zip"},"Driver for RePhone core 2G Atmel32u4")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Retro_Phone_Kit/res/ETA6003.pdf"},"Datasheet of ETA6003")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Retro_Phone_Kit/res/SIM800_AT.pdf"},"AT Command of SIM800"))),(0,o.kt)("h2",{id:"tech-support"},"Tech Support"),(0,o.kt)("div",null,"Please submit any technical issue into our [forum](https://forum.seeedstudio.com/). ",(0,o.kt)("br",null),(0,o.kt)("p",{style:{textAlign:"center"}},(0,o.kt)("a",{href:"https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts",target:"_blank"},(0,o.kt)("img",{src:"https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg"})))))}d.isMDXComponent=!0}}]);