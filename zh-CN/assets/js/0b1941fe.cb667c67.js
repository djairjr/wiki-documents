"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[55198],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>k});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),d=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},s=function(e){var t=d(e.components);return n.createElement(p.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,s=a(e,["components","mdxType","originalType","parentName"]),m=d(r),c=o,k=m["".concat(p,".").concat(c)]||m[c]||u[c]||i;return r?n.createElement(k,l(l({ref:t},s),{},{components:r})):n.createElement(k,l({ref:t},s))}));function k(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,l=new Array(i);l[0]=c;var a={};for(var p in t)hasOwnProperty.call(t,p)&&(a[p]=t[p]);a.originalType=e,a[m]="string"==typeof e?e:o,l[1]=a;for(var d=2;d<i;d++)l[d]=r[d];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},9615:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>a,toc:()=>d});var n=r(87462),o=(r(67294),r(3905));const i={description:"Grove - Slide Potentiometer",title:"Grove - Slide Potentiometer",keywords:["Grove"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/cn/Grove-Slide_Potentiometer",last_update:{date:"2/1/2023",author:"hushuxu"}},l=void 0,a={unversionedId:"zh-CN/Sensor/Grove/Grove_Sensor/Grove-Slide_Potentiometer",id:"zh-CN/Sensor/Grove/Grove_Sensor/Grove-Slide_Potentiometer",title:"Grove - Slide Potentiometer",description:"Grove - Slide Potentiometer",source:"@site/docs/zh-CN/Sensor/Grove/Grove_Sensor/Grove-Slide_Potentiometer.md",sourceDirName:"zh-CN/Sensor/Grove/Grove_Sensor",slug:"/cn/Grove-Slide_Potentiometer",permalink:"/zh-CN/cn/Grove-Slide_Potentiometer",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/zh-CN/Sensor/Grove/Grove_Sensor/Grove-Slide_Potentiometer.md",tags:[],version:"current",lastUpdatedBy:"hushuxu",lastUpdatedAt:1675209600,formattedLastUpdatedAt:"2023\u5e742\u67081\u65e5",frontMatter:{description:"Grove - Slide Potentiometer",title:"Grove - Slide Potentiometer",keywords:["Grove"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/cn/Grove-Slide_Potentiometer",last_update:{date:"2/1/2023",author:"hushuxu"}}},p={},d=[{value:"\u4ea7\u54c1\u7279\u6027",id:"\u4ea7\u54c1\u7279\u6027",level:2},{value:"\u521b\u610f\u5e94\u7528",id:"\u521b\u610f\u5e94\u7528",level:2},{value:"\u89c4\u683c\u53c2\u6570",id:"\u89c4\u683c\u53c2\u6570",level:2},{value:"Platforms Supported",id:"platforms-supported",level:2},{value:"\u5165\u95e8\u6307\u5bfc",id:"\u5165\u95e8\u6307\u5bfc",level:2},{value:"\u4f5c\u4e3a\u4e00\u4e2a\u53ef\u8c03\u7535\u963b",id:"\u4f5c\u4e3a\u4e00\u4e2a\u53ef\u8c03\u7535\u963b",level:4},{value:"\u5355\u72ec\u4f7f\u7528",id:"\u5355\u72ec\u4f7f\u7528",level:3},{value:"\u4e0e Arduino \u4e00\u8d77\u4f7f\u7528",id:"\u4e0e-arduino-\u4e00\u8d77\u4f7f\u7528",level:3},{value:"\u4f5c\u4e3a\u5206\u538b\u5668",id:"\u4f5c\u4e3a\u5206\u538b\u5668",level:4},{value:"\u4f5c\u4e3a HID \u8bbe\u5907",id:"\u4f5c\u4e3a-hid-\u8bbe\u5907",level:4},{value:"\u4e0e Raspberry Pi \u4e00\u8d77\u4f7f\u7528",id:"\u4e0e-raspberry-pi-\u4e00\u8d77\u4f7f\u7528",level:3},{value:"\u539f\u7406\u56fe\u5728\u7ebf\u9884\u89c8",id:"\u539f\u7406\u56fe\u5728\u7ebf\u9884\u89c8",level:2},{value:"\u8d44\u6e90\u4e0b\u8f7d",id:"\u8d44\u6e90\u4e0b\u8f7d",level:2}],s={toc:d};function m(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Grove-Slide_Potentiometer/img/Sliding1.JPG",alt:null})),(0,o.kt)("p",null,"The Grove - Slide Potentiometer \u6a21\u5757\u5185\u6709\u4e00\u4e2a\u6700\u5927\u963b\u503c\u4e3a 10K\u03a9 \u7684\u7ebf\u6027\u53ef\u53d8\u7535\u963b\uff0c\u5f53\u60a8\u628a\u63a7\u5236\u6746\u4ece\u4e00\u7aef\u6ed1\u5230\u53e6\u5916\u4e00\u7aef\uff0c\u8f93\u51fa\u7535\u538b\u503c\u5728 0 \u5230\u8f93\u5165\u7684 VCC \u4e4b\u95f4\u53d8\u5316\u3002\u5b83\u901a\u8fc7\u6807\u51c6\u56db\u7ebf Grove \u7ebf\u7f06\u8fde\u63a5\u5230\u5176\u4ed6 Grove \u6a21\u5757\uff0c\u5176\u4e2d 3 \u6839\u5206\u522b\u8fde\u5230\u4e86 ",(0,o.kt)("strong",{parentName:"p"},"OUT")," (\u5f15\u811a ",(0,o.kt)("strong",{parentName:"p"},"1"),"), ",(0,o.kt)("strong",{parentName:"p"},"Vcc")," (\u5f15\u811a ",(0,o.kt)("strong",{parentName:"p"},"3"),") \u548c ",(0,o.kt)("strong",{parentName:"p"},"GND")," (\u5f15\u811a ",(0,o.kt)("strong",{parentName:"p"},"4"),")\uff0c\u5269\u4e0b\u7684\u90a3\u6839\u7ebf(\u5f15\u811a ",(0,o.kt)("strong",{parentName:"p"},"2"),")\u8fde\u5230\u4e86\u7eff\u8272\u7684 LED \u706f\u4e0a\uff0c\u53ef\u4ee5\u7528\u5b83\u6765\u8868\u793a\u7535\u4f4d\u8ba1\u963b\u503c\u7684\u53d8\u5316\u3002"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://item.taobao.com/item.htm?spm=a1z10.3-c.w4002-11172317909.9.7f561822qVySjY&id=45554612830"},(0,o.kt)("img",{parentName:"a",src:"https://files.seeedstudio.com/wiki/wiki_chinese/docs/images/click_to_buy.PNG",alt:null}))),(0,o.kt)("h2",{id:"\u4ea7\u54c1\u7279\u6027"},"\u4ea7\u54c1\u7279\u6027"),(0,o.kt)("hr",null),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u6ed1\u52a8\u957f\u5ea6 30mm"),(0,o.kt)("li",{parentName:"ul"},"\u963b\u503c\u7ebf\u6027\u53d8\u5316"),(0,o.kt)("li",{parentName:"ul"},"\u901a\u7528 Grove \u63a5\u53e3")),(0,o.kt)("p",null,"!!!Tip\n\u5173\u4e8e Grove \u6a21\u5757\u7684\u66f4\u591a\u4fe1\u606f\u8bf7\u70b9\u51fb ",(0,o.kt)("a",{parentName:"p",href:"http://wiki.seeedstudio.com/Grove_System/"},"Grove System")),(0,o.kt)("h2",{id:"\u521b\u610f\u5e94\u7528"},"\u521b\u610f\u5e94\u7528"),(0,o.kt)("hr",null),(0,o.kt)("p",null,"\u8fd9\u91cc\u6709\u4e00\u4e9b\u4f9b\u60a8\u53c2\u8003\u7684\u9879\u76ee"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"th"},"Arduino BoomBox")),(0,o.kt)("th",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"th"},"Arduino BeatBox")))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/Grove-Slide_Potentiometer/img/Recipe-Arduino_BoomBox.jpg",alt:null})),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/Grove-Slide_Potentiometer/img/Recipe-Arduino_BeatBox.jpg",alt:null}))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"http://www.seeed.cc/project_detail.html?id=171"},"\u70b9\u51fb\u5236\u4f5c!")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"http://www.seeed.cc/project_detail.html?id=187"},"\u70b9\u51fb\u5236\u4f5c!"))))),(0,o.kt)("h2",{id:"\u89c4\u683c\u53c2\u6570"},"\u89c4\u683c\u53c2\u6570"),(0,o.kt)("hr",null),(0,o.kt)("table",{border:"1",cellspacing:"0",width:"80%"},(0,o.kt)("tr",null,(0,o.kt)("th",{scope:"col"},"\u9879\u76ee"),(0,o.kt)("th",null,"\u6700\u5c0f\u503c"),(0,o.kt)("th",null,"\u5178\u578b\u503c"),(0,o.kt)("th",null,"\u6700\u5927\u503c")),(0,o.kt)("tr",{align:"center"},(0,o.kt)("th",{scope:"row"},"\u7535\u538b (\u76f4\u6d41)"),(0,o.kt)("td",null,"3.3V"),(0,o.kt)("td",null,"5.0V"),(0,o.kt)("td",null,"30V")),(0,o.kt)("tr",{align:"center"},(0,o.kt)("th",{scope:"row"},"\u7535\u6d41"),(0,o.kt)("td",null,"-"),(0,o.kt)("td",null,"-"),(0,o.kt)("td",null,"30mA")),(0,o.kt)("tr",{align:"center"},(0,o.kt)("th",{scope:"row"},"\u5c3a\u5bf8"),(0,o.kt)("td",{colspan:"3"},"24mm x60mm")),(0,o.kt)("tr",{align:"center"},(0,o.kt)("th",{height:"22",scope:"row"},"\u51c0\u91cd"),(0,o.kt)("td",{colspan:"3"},"8.6g")),(0,o.kt)("tr",{align:"center"},(0,o.kt)("th",{height:"22",scope:"row"},"\u5f80\u590d\u8fd0\u52a8\u5bff\u547d"),(0,o.kt)("td",{colspan:"3"},">15,000 cycles")),(0,o.kt)("tr",{align:"center"},(0,o.kt)("th",{height:"22",scope:"row"},"\u603b\u7535\u963b"),(0,o.kt)("td",{colspan:"3"},"10K\u03a9")),(0,o.kt)("tr",{align:"center"},(0,o.kt)("th",{height:"22",scope:"row"},"\u884c\u7a0b\u957f\u5ea6"),(0,o.kt)("td",{colspan:"3"},"30mm")),(0,o.kt)("tr",{align:"center"},(0,o.kt)("th",{height:"22",scope:"row"},"\u603b\u7535\u963b\u5bb9\u5dee"),(0,o.kt)("td",{colspan:"3"},"+/- 20%"))),(0,o.kt)("h2",{id:"platforms-supported"},"Platforms Supported"),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"\u5165\u95e8\u6307\u5bfc"},"\u5165\u95e8\u6307\u5bfc"),(0,o.kt)("hr",null),(0,o.kt)("h4",{id:"\u4f5c\u4e3a\u4e00\u4e2a\u53ef\u8c03\u7535\u963b"},"\u4f5c\u4e3a\u4e00\u4e2a\u53ef\u8c03\u7535\u963b"),(0,o.kt)("p",null,"\u5982\u4e0b\u56fe\u6240\u793a\uff0cGrove - Slide Potentiometer \u53ef\u7528\u4f5c\u4efb\u4f55 MCU \u63a7\u5236\u6216\u72ec\u7acb\u9879\u76ee\u4e2d\u7684\u6ed1\u52a8\u7535\u4f4d\u8ba1\u3002\n",(0,o.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Grove-Slide_Potentiometer/img/Sliding_justr.JPG",alt:null})),(0,o.kt)("h3",{id:"\u5355\u72ec\u4f7f\u7528"},"\u5355\u72ec\u4f7f\u7528"),(0,o.kt)("p",null,"\u6309\u7167\u4ee5\u4e0b\u6b65\u9aa4\u4f7f\u6784\u5efa\u7528\u6b64\u6a21\u5757\u4f46\u4e0d\u4f7f\u7528\u4efb\u4f55\u5fae\u63a7\u5236\u5668\u677f\u7684 Grove \u7535\u8def :"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"\u5c06 Grove - Slide Potentiometer \u6a21\u5757\u8fde\u63a5\u5230\u7535\u8def\u7684\u8f93\u5165\u7aef (\u7535\u6e90\u6a21\u5757\u5de6\u4fa7)\u3002\u5728\u7535\u8def\u7684\u8f93\u51fa\u7aef\uff0c\u60a8\u53ef\u4ee5\u4f7f\u7528\u4e00\u7cfb\u5217\u7528\u6237\u754c\u9762\u6a21\u5757 (Grove - Red LED, Grove - LED String Light, Grove - Mini Fan, Grove - Buzzer, Grove - Recorder etc)\u3002")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"\u5b8c\u6210\u540e\u91cd\u542f\u7535\u8def\u3002")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Grove - Slide Potentiometer \u6a21\u5757\u73b0\u5728\u53ef\u4ee5\u7528\u6765\u89e6\u53d1\u8f93\u51fa\u3002\u4f8b\u5982 :"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"\u5f53\u4e0e Grove - Red LED \u8f93\u51fa\u6a21\u5757\u914d\u5408\u4f7f\u7528\u65f6\uff0c\u8bf7\u6ce8\u610f\u968f\u7740\u6ed1\u5757\u4ece GND \u79fb\u52a8\u5230 Vcc\uff0cLED\u7684\u4eae\u5ea6\u4f1a\u589e\u52a0\u3002\u5728Vcc\u65f6\uff0c\u7535\u963b\u503c\u6700\u5c0f\uff0cLED\u6700\u4eae\u3002 Grove - Slide Potentiometer \u4e0e Grove - LED String Light \u6a21\u5757\u4e00\u8d77\u4f7f\u7528\u65f6\uff0c\u53ef\u4ee5\u770b\u5230\u76f8\u540c\u7684\u73b0\u8c61 : \u901a\u8fc7\u5c06\u6ed1\u5757\u6ed1\u5411 Vcc \u65bd\u52a0\u7684\u7535\u538b\u8d8a\u591a\uff0cLED \u5c31\u8d8a\u4eae\u3002"),(0,o.kt)("li",{parentName:"ul"},"\u540c\u6837\uff0c\u60a8\u53ef\u4ee5\u4f7f\u7528 Grove - Slide Potentiometer \u6765\u6539\u53d8 Grove - Mini Fan \u7684\u901f\u5ea6\u6216 Grove - Buzzer \u6a21\u5757\u53d1\u58f0\u7684\u9891\u7387")))),(0,o.kt)("p",null,"\u5728\u9009\u62e9\u7535\u6e90\u6a21\u5757\u65b9\u9762\uff0c\u60a8\u53ef\u4ee5\u4f7f\u7528 Grove - USB Power \u6a21\u5757\u6216 Grove - DC Jack Power \u6a21\u5757\u6765\u6784\u5efa\u72ec\u7acb\u7684 Grove \u7535\u8def\u3002"),(0,o.kt)("h3",{id:"\u4e0e-arduino-\u4e00\u8d77\u4f7f\u7528"},"\u4e0e Arduino \u4e00\u8d77\u4f7f\u7528"),(0,o.kt)("h4",{id:"\u4f5c\u4e3a\u5206\u538b\u5668"},"\u4f5c\u4e3a\u5206\u538b\u5668"),(0,o.kt)("p",null,"\u6309\u7167\u4ee5\u4e0b\u6b65\u9aa4\u4f7f Grove - Slide Potentiometer \u6a21\u5757\u8d77\u5230\u5206\u538b\u5668\u7684\u4f5c\u7528 :"),(0,o.kt)("p",null,"1.1.\u5c06\u6a21\u5757\u4e0e Arduino \u6216 Seeeduino \u914d\u5408\u4f7f\u7528\u65f6\uff0c\u5e76\u4f7f\u7528\u6307\u5b9a\u7684 Grove \u63a5\u53e3(\u4f8b\u5982\u6a21\u62df\u7aef\u53e3 ",(0,o.kt)("strong",{parentName:"p"},"A0"),"\uff0c\u5982\u4e0b\u6240\u793a)\u5c06 Grove - Slide Potentiometer \u6a21\u5757\u8fde\u63a5\u5230 Grove - Base Shield\u3002"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Grove-Slide_Potentiometer/img/Sliding2.JPG",alt:null})),(0,o.kt)("p",null,"2.\u901a\u8fc7 USB \u7ebf\u7f06\u5c06 MCU \u63a7\u5236\u677f\u8fde\u63a5\u5230 PC\u3002"),(0,o.kt)("p",null,"3.\u4e0a\u4f20\u5982\u4e0b\u4ee3\u7801\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'int adcPin = A0; // select the input pin for the potentiometer\nint ledPin = A1; // select the pin for the LED\nint adcIn = 0;   // variable to store the value coming from the sensor\nvoid setup()\n{\n    Serial.begin(9600); // init serial to 9600b/s\n    pinMode(ledPin, OUTPUT); // set ledPin to OUTPUT\n    Serial.println("Sliding Potentiometer Test Code!!");\n}\nvoid loop()\n{\n    // read the value from the sensor:\n    adcIn = analogRead(adcPin);\n    if(adcIn &gt;= 500) digitalWrite(ledPin,HIGH);  // if adc in &gt; 500, led light\n    else digitalWrite(ledPin, LOW);\n    Serial.println(adcIn);\n    delay(100);\n}\n')),(0,o.kt)("p",null,"4.\u6253\u5f00\u4e32\u53e3\u76d1\u89c6\u5668\u3002\u53ef\u4ee5\u770b\u5230\u6765\u81ea ADC \u7684\u4e00\u4e9b\u6570\u636e\u3002"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Grove-Slide_Potentiometer/img/Sliding_com.jpg",alt:null})),(0,o.kt)("p",null,"5.\u4f7f\u63a7\u5236\u6746\u5f80\u590d\u8fd0\u52a8\uff0c\u4e32\u53e3\u6570\u636e\u5c06\u76f8\u5e94\u5730\u6539\u53d8\u3002\u5f53\u8f93\u51fa\u7535\u963b\u8d85\u8fc7\u67d0\u4e2a\u9884\u8bbe\u503c\u65f6\uff0c\u677f\u8f7d LED \u6307\u793a\u706f\u4f1a\u4eae\u8d77\u3002"),(0,o.kt)("h4",{id:"\u4f5c\u4e3a-hid-\u8bbe\u5907"},"\u4f5c\u4e3a HID \u8bbe\u5907"),(0,o.kt)("p",null,"\u6ed1\u52a8\u7535\u4f4d\u5668\u662f\u6709\u6548\u7684\u4eba\u673a\u4ea4\u4e92\u8bbe\u5907 (HID)\uff0c\u5e76\u4e14\u53ef\u4ee5\u7528\u5728\u4f8b\u5982\u65e0\u7ebf\u7535\u9065\u63a7\u73a9\u5177\u8f66\u7684\u65e0\u7ebf\u7535\u63a7\u5236\u5668\u4e2d\u3002\u4e0b\u9762\u7684\u56fe\u7247\u663e\u793a\u4e86\u63a7\u5236\u9762\u677f\u4e0a\u7684\u4e24\u4e2a Grove - Slide Potentiometer - \u4e00\u4e2a\u63a7\u5236\u5de6\u8f6e\u7684\u901f\u5ea6\uff0c\u53e6\u4e00\u4e2a\u63a7\u5236\u53f3\u8f6e\u7684\u901f\u5ea6\u3002\u73b0\u5728\uff0c\u60a8\u53ef\u4ee5\u66f4\u6539\u4e24\u4e2a\u7535\u673a\u7684\u901f\u5ea6\u5e76\u89c2\u5bdf\u73b0\u8c61\u3002\u60a8\u4f1a\u770b\u5230\uff0c\u5982\u679c\u60a8\u8ba9\u53f3\u4fa7\u8f66\u8f6e\u6bd4\u5de6\u4fa7\u8f66\u8f6e\u65cb\u8f6c\u5f97\u5feb\uff0c\u8f66\u5b50\u4f1a\u5411\u53f3\u8f6c\uff1b\u800c\u5982\u679c\u60a8\u8ba9\u5de6\u4fa7\u8f66\u8f6e\u6bd4\u53f3\u4fa7\u8f66\u8f6e\u65cb\u8f6c\u5f97\u5feb\uff0c\u8f66\u5b50\u4f1a\u5411\u5de6\u8f6c\u3002"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Grove-Slide_Potentiometer/img/Car.JPG",alt:null})),(0,o.kt)("h3",{id:"\u4e0e-raspberry-pi-\u4e00\u8d77\u4f7f\u7528"},"\u4e0e Raspberry Pi \u4e00\u8d77\u4f7f\u7528"),(0,o.kt)("p",null,"!!! Attention\n\u5982\u679c\u4f60\u6b63\u5728\u4f7f\u7528 ",(0,o.kt)("strong",{parentName:"p"},"Raspberry Pi with Raspberrypi OS >= Bullseye"),",\u4f60\u53ea\u80fd",(0,o.kt)("strong",{parentName:"p"},"\u5728 pyhton3")," \u4e2d\u4f7f\u7528\u8fd9\u4e2a\u547d\u4ee4\u884c."),(0,o.kt)("p",null,"1.\u51c6\u5907\u4e00\u4e2a Raspberry pi \u548c\u4e00\u4e2a Grovepi \u6216 Grovepi+."),(0,o.kt)("p",null,"3.\u8fde\u63a5"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u5c06\u4f20\u611f\u5668\u7528 Grove \u7ebf\u7f06\u63d2\u5165  Grovepi \u63d2\u53e3 ",(0,o.kt)("strong",{parentName:"li"},"A0"),"\u3002")),(0,o.kt)("p",null,"4.\u8df3\u8f6c\u5230\u6f14\u793a\u76ee\u5f55 :"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"    cd yourpath/GrovePi/Software/Python/\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u6f14\u793a\u4ee3\u7801\u5982\u4e0b :")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'nano grove_slide_potentiometer.py   # "Ctrl+x" to exit #\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'import time\nimport grovepi\n\n# Connect the Grove Slide Potentiometer to analog port A0\n# OUT,LED,VCC,GND\nslide = 0   # pin 1 (yellow wire)\n\n# The device has an onboard LED accessible as pin 2 on port A0\n# OUT,LED,VCC,GND\nled = 1     # pin 2 (white wire)\n\ngrovepi.pinMode(slide,"INPUT")\ngrovepi.pinMode(led,"OUTPUT")\ntime.sleep(1)\n\nwhile True:\n    try:\n        # Read sensor value from potentiometer\n        sensor_value = grovepi.analogRead(slide)\n\n        # Illuminate onboard LED\n        if sensor_value > 500:\n            grovepi.digitalWrite(led,1)\n        else:\n            grovepi.digitalWrite(led,0)\n\n        print "sensor_value =", sensor_value\n\n    except IOError:\n        print "Error"\n')),(0,o.kt)("p",null,"5.\u8fd0\u884c\u4ee3\u7801\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"sudo python3 grove_slide_potentiometer.py\n")),(0,o.kt)("h2",{id:"\u539f\u7406\u56fe\u5728\u7ebf\u9884\u89c8"},"\u539f\u7406\u56fe\u5728\u7ebf\u9884\u89c8"),(0,o.kt)("div",{className:"altium-ecad-viewer","data-project-src":"https://files.seeedstudio.com/wiki/Grove-Slide_Potentiometer/res/Sliding_Potentiometer.rar",style:{borderRadius:"0px 0px 4px 4px",height:500,borderStyle:"solid",borderWidth:1,borderColor:"rgb(241, 241, 241)",overflow:"hidden",maxWidth:1280,maxHeight:700,boxSizing:"border-box"}}),(0,o.kt)("h2",{id:"\u8d44\u6e90\u4e0b\u8f7d"},"\u8d44\u6e90\u4e0b\u8f7d"),(0,o.kt)("hr",null),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"[Eagle\u6587\u4ef6]")," ",(0,o.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Grove-Slide_Potentiometer/res/Sliding_Potentiometer.rar"},"Sliding Potentiometer Eagle File")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"[\u539f\u7406\u56fePDF]")," ",(0,o.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Grove-Slide_Potentiometer/res/Sliding_protentiometer_sch.pdf"},"Sliding Potentiometer in PDF")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"[\u6570\u636e\u624b\u518c]")," ",(0,o.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Grove-Slide_Potentiometer/res/Sliding_potentiometer_datasheet.pdf"},"Sliding Potentiometer datasheet"))))}m.isMDXComponent=!0}}]);