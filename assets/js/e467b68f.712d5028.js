"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[36217],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var d=r.createContext({}),s=function(e){var t=r.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(d.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,d=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=s(n),p=i,h=u["".concat(d,".").concat(p)]||u[p]||m[p]||o;return n?r.createElement(h,a(a({ref:t},c),{},{components:n})):r.createElement(h,a({ref:t},c))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=p;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l[u]="string"==typeof e?e:i,a[1]=l;for(var s=2;s<o;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},43902:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var r=n(87462),i=(n(67294),n(3905));const o={description:"Xadow - RTC (Real Time Clock)",title:"Xadow - RTC (Real Time Clock)",keywords:["Seeed_Elderly"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Xadow_RTC",last_update:{date:"1/13/2023",author:"shuxu hu"}},a=void 0,l={unversionedId:"Seeed_Elderly/Xadow/Xadow_RTC",id:"Seeed_Elderly/Xadow/Xadow_RTC",title:"Xadow - RTC (Real Time Clock)",description:"Xadow - RTC (Real Time Clock)",source:"@site/docs/Seeed_Elderly/Xadow/Xadow_RTC.md",sourceDirName:"Seeed_Elderly/Xadow",slug:"/Xadow_RTC",permalink:"/Xadow_RTC",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Seeed_Elderly/Xadow/Xadow_RTC.md",tags:[],version:"current",lastUpdatedBy:"shuxu hu",lastUpdatedAt:1673568e3,formattedLastUpdatedAt:"Jan 13, 2023",frontMatter:{description:"Xadow - RTC (Real Time Clock)",title:"Xadow - RTC (Real Time Clock)",keywords:["Seeed_Elderly"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Xadow_RTC",last_update:{date:"1/13/2023",author:"shuxu hu"}},sidebar:"ProductSidebar",previous:{title:"Xadow - RGB OLED 96*64",permalink:"/Xadow_RGB_OLED_96multiply64"},next:{title:"Xadow - Storage",permalink:"/Xadow_Storage"}},d={},s=[{value:"Specification",id:"specification",level:2},{value:"Demonstration",id:"demonstration",level:2},{value:"Schematic Online Viewer",id:"schematic-online-viewer",level:2},{value:"Resources",id:"resources",level:2},{value:"Tech Support",id:"tech-support",level:2}],c={toc:s};function u(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Xadow_RTC/img/Xadow_RTC_01.jpg",alt:null})),(0,i.kt)("p",null,"Sometimes, you always want to know what time it is. Whether I have missed the dating or not, or if it is the mealtime for my three months child. The RTC module can provide you a real-time clock. You can make the controller ask the module: hi,buddy, what time it is. At the same time, do not forget to install a small coin cell which can serve you for more than six mouths."),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/Xadow-RTC-p-1523.html"},(0,i.kt)("img",{parentName:"a",src:"https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png",alt:null}))),(0,i.kt)("h2",{id:"specification"},"Specification"),(0,i.kt)("hr",null),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Real-Time Clock (RTC) Counts Seconds,Minutes, Hours, Date of the Year, Month, Day of the week, and Year with Leap-Year Compensation"),(0,i.kt)("li",{parentName:"ul"},"Can set as 12-hour format or 24-hour format"),(0,i.kt)("li",{parentName:"ul"},"Valid Up to 2100"),(0,i.kt)("li",{parentName:"ul"},"Dimensions: 25.43mm x 20.35mm")),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre"},"In order to gain a robust performance, you must put a 3-Volt CR1220 lithium cell in the battery-holder. If you use the primary power only, the module may not work normally, because the crystal may not oscillate.\n"))),(0,i.kt)("h2",{id:"demonstration"},"Demonstration"),(0,i.kt)("hr",null),(0,i.kt)("p",null,"The following sketch demonstrates a simple application of setting the time and reading it out."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Hardware Installation:")),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Xadow_RTC/img/XadwoRTC.jpg",alt:null})),(0,i.kt)("p",null,"Note: when connect Xadow RTC to Xadow Main Board, you should concern about the connection direction. The connection method is that the unfilled corner of one Xadow module need to connect to the right angle of another module(see four corners of each Xadow module)."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Demo code as show below:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'#include &lt;Wire.h&gt;\n#define DS1337_CTRL_ID 0x68\n\nunsigned char  second,minute,hour;\nunsigned char  week,day,month;\nunsigned int year;\n\nvoid setup()\n{\n    Wire.begin();\n    Serial.begin(38400);\n    while (!Serial) {\n        ; // wait for serial port to connect. Needed for Leonardo only\n    }\n\n    fillByYMD(2013,6,17);//Jun 19,2013\n    fillByHMS(23,15,43);//23:15 43"\n    fillWeek(1);//Monday\n    setTime();\n}\n\nvoid loop()\n{\n    readTime();\n    Serial.print(year+2000, DEC);\n    Serial.print("/");\n    Serial.print(month, DEC);\n    Serial.print("/");\n    Serial.print(day, DEC);\n    Serial.print("  ");\n    Serial.print(hour, DEC);\n    Serial.print(":");\n    Serial.print(minute, DEC);\n    Serial.print(":");\n    Serial.print(second, DEC);\n    Serial.print("    ");\n    switch (week)// Friendly printout the weekday\n    {\n        case 1:\n        Serial.print("MON");\n        break;\n        case 2:\n        Serial.print("TUE");\n        break;\n        case 3:\n        Serial.print("WED");\n        break;\n        case 4:\n        Serial.print("THU");\n        break;\n        case 5:\n        Serial.print("FRI");\n        break;\n        case 6:\n        Serial.print("SAT");\n        break;\n        case 7:\n        Serial.print("SUN");\n        break;\n    }\n    Serial.println("  ");\n    delay(1000);\n}\n/*Function: Read time and date from RTC    */\nvoid readTime(void)\n{\n    // use the Wire lib to connect to tho rtc\n    // reset the register pointer to zero\n    Wire.beginTransmission(DS1337_CTRL_ID);\n    Wire.write(0x00);\n    Wire.endTransmission();\n\n    // request the 7 bytes of data    (secs, min, hr, dow, date. mth, yr)\n    Wire.requestFrom(DS1337_CTRL_ID, 7);\n    // A few of these need masks because certain bits are control bits\n    second       = bcdToDec(Wire.read() &amp; 0x7f);\n    minute       = bcdToDec(Wire.read());\n    hour       = bcdToDec(Wire.read() &amp; 0x3f);// Need to change this if 12 hour am/pm\n    week  = bcdToDec(Wire.read());\n    day = bcdToDec(Wire.read());\n    month      = bcdToDec(Wire.read());\n    year       = bcdToDec(Wire.read());\n}\n/*Function: Write the time that includes the date to the RTC chip */\nvoid  setTime(void)\n{\n    Wire.beginTransmission(DS1337_CTRL_ID);\n    Wire.write(0x00);\n    Wire.write(decToBcd(second));// 0 to bit 7 starts the clock\n    Wire.write(decToBcd(minute));\n    Wire.write(decToBcd(hour));  // If you want 12 hour am/pm you need to set bit 6\n    Wire.write(decToBcd(week));\n    Wire.write(decToBcd(day));\n    Wire.write(decToBcd(month));\n    Wire.write(decToBcd(year));\n    Wire.endTransmission();\n}\n\nunsigned char decToBcd(unsigned char val)\n{\n    return ( (val/10*16) + (val%10) );\n}\n\n//Convert binary coded decimal to normal decimal numbers\nunsigned char  bcdToDec(unsigned char val)\n{\n    return ( (val/16*10) + (val%16) );\n}\nvoid fillByYMD(unsigned int _year, unsigned char _month, unsigned char _day)\n{\n    year = _year-2000;\n    month = _month;\n    day = _day;\n}\nvoid fillWeek(unsigned char _dow)\n{\n    week = _dow;\n}\nvoid  fillByHMS(unsigned char _hour, unsigned char _minute, unsigned char _second)\n{\n    // assign variables\n    hour = _hour;\n    minute = _minute;\n    second = _second;\n}\n')),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Set the time. Put function arguments change to current date/time. The attention should be paid to the arguments format.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'fillByYMD(2013,6,17);//Jun 17,2013\nfillByHMS(23,15,43);//23:15 43"\nfillWeek(1);//Monday\n')),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The output result:")),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Xadow_RTC/img/Xadow-RTC_Result.jpg",alt:null})),(0,i.kt)("p",null,"The output time is changing like the clock. Once you set a time, RTC will update the clock time data constantly. Then you need to comment out the code as show below and re-upload. A Real-Time Clock appears ."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"//setTime();\n")),(0,i.kt)("h2",{id:"schematic-online-viewer"},"Schematic Online Viewer"),(0,i.kt)("div",{className:"altium-ecad-viewer","data-project-src":"https://files.seeedstudio.com/wiki/Xadow_RTC/res/Xadow_RTC.zip",style:{borderRadius:"0px 0px 4px 4px",height:500,borderStyle:"solid",borderWidth:1,borderColor:"rgb(241, 241, 241)",overflow:"hidden",maxWidth:1280,maxHeight:700,boxSizing:"border-box"}}),(0,i.kt)("h2",{id:"resources"},"Resources"),(0,i.kt)("hr",null),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"https://files.seeedstudio.com/wiki/Xadow_RTC/res/Xadow_RTC.zip"},"Xadow RTC Eagle File"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"https://files.seeedstudio.com/wiki/Xadow_RTC/res/DS1307.pdf"},"RTC DS1307 Datasheet")))),(0,i.kt)("h2",{id:"tech-support"},"Tech Support"),(0,i.kt)("div",null,"Please submit any technical issue into our [forum](https://forum.seeedstudio.com/). ",(0,i.kt)("br",null),(0,i.kt)("p",{style:{textAlign:"center"}},(0,i.kt)("a",{href:"https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts",target:"_blank"},(0,i.kt)("img",{src:"https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg"})))))}u.isMDXComponent=!0}}]);