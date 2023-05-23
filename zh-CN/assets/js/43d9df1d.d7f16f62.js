"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[34211],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>h});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=u(r),m=o,h=c["".concat(s,".").concat(m)]||c[m]||d[m]||i;return r?n.createElement(h,a(a({ref:t},p),{},{components:r})):n.createElement(h,a({ref:t},p))}));function h(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:o,a[1]=l;for(var u=2;u<i;u++)a[u]=r[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},37936:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var n=r(87462),o=(r(67294),r(3905));const i={description:"Grove - PH Sensor",title:"Grove - PH Sensor",keywords:["Grove"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Grove-PH_Sensor",last_update:{date:"2/22/2023",author:"jianjing Huang"}},a=void 0,l={unversionedId:"Sensor/Grove/Grove_Sensors/Liquid/Grove-PH_Sensor",id:"Sensor/Grove/Grove_Sensors/Liquid/Grove-PH_Sensor",title:"Grove - PH Sensor",description:"Grove - PH Sensor",source:"@site/docs/Sensor/Grove/Grove_Sensors/Liquid/Grove-PH_Sensor.md",sourceDirName:"Sensor/Grove/Grove_Sensors/Liquid",slug:"/Grove-PH_Sensor",permalink:"/zh-CN/Grove-PH_Sensor",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Sensor/Grove/Grove_Sensors/Liquid/Grove-PH_Sensor.md",tags:[],version:"current",lastUpdatedBy:"jianjing Huang",lastUpdatedAt:1677024e3,formattedLastUpdatedAt:"2023\u5e742\u670822\u65e5",frontMatter:{description:"Grove - PH Sensor",title:"Grove - PH Sensor",keywords:["Grove"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Grove-PH_Sensor",last_update:{date:"2/22/2023",author:"jianjing Huang"}},sidebar:"ProductSidebar",previous:{title:"Grove - ORP Sensor Kit (501Z)",permalink:"/zh-CN/Grove-ORP-Sensor-kit"},next:{title:"Sensor - Motion(introduction)",permalink:"/zh-CN/Sensor_motion"}},s={},u=[{value:"Feature",id:"feature",level:2},{value:"Specification",id:"specification",level:2},{value:"Schematic",id:"schematic",level:2},{value:"Usage",id:"usage",level:2},{value:"Calibration",id:"calibration",level:3},{value:"Cleaning and Storing",id:"cleaning-and-storing",level:3},{value:"Schematic Online Viewer",id:"schematic-online-viewer",level:2},{value:"Resource",id:"resource",level:2},{value:"Tech Support",id:"tech-support",level:2}],p={toc:u};function c(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Grove-PH_Sensor/img/Phsensor.jpg",alt:null})),(0,o.kt)("p",null,"Do you need to measure aqueous solution pH? Here, the Grove - PH sensor can help you do it. This sensor can output signal which corresponding to the hydrogen ion concentration that measured by PH electrode. Because it can be directly connected to controller,and then you can observe the PH value at any time. This device can be used for PH measurements, such as waste water, sewage and other occasions."),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"Only domestic order will be valid. Do not place an order if your address isn't in China.")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/Grove-PH-Sensor-p-1564.html"},(0,o.kt)("img",{parentName:"a",src:"https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png",alt:null}))),(0,o.kt)("h2",{id:"feature"},"Feature"),(0,o.kt)("hr",null),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Grove Interface"),(0,o.kt)("li",{parentName:"ul"},"Wide measuring range"),(0,o.kt)("li",{parentName:"ul"},"Usage Life is two years"),(0,o.kt)("li",{parentName:"ul"},"Isopotential Point: pH 7.00 (0 mV)")),(0,o.kt)("h2",{id:"specification"},"Specification"),(0,o.kt)("hr",null),(0,o.kt)("center",null,(0,o.kt)("table",{cellspacing:"0",width:"80%"},(0,o.kt)("tr",null,(0,o.kt)("th",{scope:"col"}," Item"),(0,o.kt)("th",{scope:"col"}," Typical"),(0,o.kt)("th",{scope:"col"}," Units")),(0,o.kt)("tr",null,(0,o.kt)("th",{scope:"row"}," Working Voltage"),(0,o.kt)("td",null," 5"),(0,o.kt)("td",null," V")),(0,o.kt)("tr",null,(0,o.kt)("th",{scope:"row"}," Isopotential point"),(0,o.kt)("td",null," 7\xb10.5"),(0,o.kt)("td",null," pH")),(0,o.kt)("tr",null,(0,o.kt)("th",{scope:"row"}," Measure Range"),(0,o.kt)("td",null," 0~14"),(0,o.kt)("td",null," pH")),(0,o.kt)("tr",null,(0,o.kt)("th",{scope:"row"}," pH Sensor Output Range"),(0,o.kt)("td",null," -414.12 ~ 414.12"),(0,o.kt)("td",null," mV")),(0,o.kt)("tr",null,(0,o.kt)("th",{scope:"row"}," Measure Accuracy"),(0,o.kt)("td",null," <15"),(0,o.kt)("td",null," mV")),(0,o.kt)("tr",null,(0,o.kt)("th",{scope:"row"}," Response Time"),(0,o.kt)("td",null," <2"),(0,o.kt)("td",null," min")),(0,o.kt)("tr",null,(0,o.kt)("th",{scope:"row"}," Temperature Range"),(0,o.kt)("td",null," 0~60"),(0,o.kt)("td",null," \u2103")))),(0,o.kt)("h2",{id:"schematic"},"Schematic"),(0,o.kt)("hr",null),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Grove-PH_Sensor/img/PH_Sensor_Schematic.jpg",alt:null})),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("hr",null),(0,o.kt)("p",null,"The pH sensor can help you to detect pH value. The success or failure of pH measurement depends on the PH sensor calibration and maintenance. Now let us  get started from how to calibrate."),(0,o.kt)("h3",{id:"calibration"},"Calibration"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Before using, you need using pure water or deionized water to wash it and then sop up the water with paper(the paper is without hemp). Remember,you'd better not wipe it because wiping PH electrode will cause errors. Here is a picture for reference:"),(0,o.kt)("li",{parentName:"ul"})),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Grove-PH_Sensor/img/PH_Sensor_Usage.jpg",alt:null})),(0,o.kt)("p",null,"In this picture, PH 9.18 ",(0,o.kt)("a",{parentName:"p",href:"http://www.chemguide.co.uk/physical/acidbaseeqia/buffers.html"},"buffer solution")," is used as a reference solution, which helps us to know whether the measured value is accurate.\nNow let's look at what is the measured value."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Upload the demo code. Please click ",(0,o.kt)("a",{parentName:"li",href:"/Upload_Code"},"here")," if you do not know how to upload")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'//Function: The PH sensor output voltage value,\n//          convert into PH and then display in the serial monitor.\n#define Vref 4.95\nvoid setup()\n{\n    Serial.begin(9600);\n}\nvoid loop()\n{\n    int sensorValue;\n    int m;\n    long sensorSum;\n    for(m=0;m&lt;50;m++)\n    {\n        sensorValue=analogRead(A0);//Connect the PH Sensor to A0 port\n        sensorSum += sensorValue;\n    }\n    sensorValue =   sensorSum/50;\n    Serial.print(" the PH value is");\n    Serial.println(7-1000*(sensorValue-372)*Vref/59.16/1023);\n\n}\n')),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Open the serial monitor for see the result:")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Grove-PH_Sensor/img/PH_Sensor_result.jpg",alt:null})),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Look at the result, you can see the test result is consistent with the actual value. So you can begin to measure aqueous solution pH. If there were errors between reference liquid PH and measured PH value, you had better soak the PH electrode for several hours and then recalibrate. ",(0,o.kt)("a",{parentName:"li",href:"http://www.ehow.com/how_4796148_calibrate-ph-meter.html"},"Here")," is a guide about how to calibrate for reference.")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Note:")," If the measured value you get maintains higher or smaller than it should be, the reason could be a inappropriate Vref value. Vref is the working voltage of Arduino."),(0,o.kt)("p",null,"The relationship between PH value and the output voltage:"),(0,o.kt)("font",{color:"blue"},"E=59.16(mV/PH)"),(0,o.kt)("h3",{id:"cleaning-and-storing"},"Cleaning and Storing"),(0,o.kt)("p",null,"The pH electrode is the most sensitive component of your pH instrument. And the pH electrode cannot be allowed to dry out or freeze. The proper maintenance will provide years of reliable measurement. So ",(0,o.kt)("a",{parentName:"p",href:"http://www.eutechinst.com/techtips/tech-tips26.htm"},"the pH electrode care and maintenance")," is no less important than calibration. Please remember: when it\u2019s not in use, you should wash and keep it in the 3mol Kcl container. The 3mol KCL need you to prepare. The preparation method can refer to the below information:"),(0,o.kt)("p",null,"Based on",(0,o.kt)("font",{color:"red"}," 3 mol * ( 74.55 g / 1 mol KCl) = 223.65 g KCl)"),"\nSo to prepare a 3 mol / L solution KCl, you'd need to dissolve 223.65 g of KCl into some water, mix, and then fill it up to the 1 L mark with water."),(0,o.kt)("p",null,"Hope this helps!"),(0,o.kt)("h2",{id:"schematic-online-viewer"},"Schematic Online Viewer"),(0,o.kt)("div",{className:"altium-ecad-viewer","data-project-src":"https://files.seeedstudio.com/wiki/Grove-PH_Sensor/res/Grove-PH_Sensor_Eagle_File.zip",style:{borderRadius:"0px 0px 4px 4px",height:500,borderStyle:"solid",borderWidth:1,borderColor:"rgb(241, 241, 241)",overflow:"hidden",maxWidth:1280,maxHeight:700,boxSizing:"border-box"}}),(0,o.kt)("h2",{id:"resource"},"Resource"),(0,o.kt)("hr",null),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://files.seeedstudio.com/wiki/Grove-PH_Sensor/res/Grove-PH_Sensor_Eagle_File.zip"},"Grove - PH Sensor Eagle File"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://files.seeedstudio.com/wiki/Grove-PH_Sensor/res/Grove-PH_Sensor_v1.0.pdf"},"Grove - PH Sensor Schematic in PDF")))),(0,o.kt)("h2",{id:"tech-support"},"Tech Support"),(0,o.kt)("p",null,"Please submit any technical issue into our ",(0,o.kt)("a",{parentName:"p",href:"https://forum.seeedstudio.com/"},"forum"),". ",(0,o.kt)("br",null)),(0,o.kt)("p",{style:{textAlign:"center"}},(0,o.kt)("a",{href:"https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts",target:"_blank"},(0,o.kt)("img",{src:"https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg"}))))}c.isMDXComponent=!0}}]);