"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[26392],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=p(n),h=o,m=u["".concat(s,".").concat(h)]||u[h]||c[h]||i;return n?r.createElement(m,a(a({ref:t},d),{},{components:n})):r.createElement(m,a({ref:t},d))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:o,a[1]=l;for(var p=2;p<i;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},62860:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var r=n(87462),o=(n(67294),n(3905));const i={title:"Grove - 2-Coil Latching Relay",nointro:null,keywords:["docs","docusaurus"],image:"https://wiki.seeedstudio.com/Grove-2-Coil_Latching_Relay/",slug:"/Grove-2-Coil_Latching_Relay",last_update:{date:"01/09/2022",author:"gunengyu"}},a=void 0,l={unversionedId:"Sensor/Grove/Grove_Accessories/Actuator/Grove-2-Coil_Latching_Relay",id:"Sensor/Grove/Grove_Accessories/Actuator/Grove-2-Coil_Latching_Relay",title:"Grove - 2-Coil Latching Relay",description:"This module is based on 2-Coil Latching Relay. Contrast to the ordinary relay, this latching relay does not need continuous power to keep the state, only a rising/falling pulse is needed to change the work state. Even the power can be removed when the work state do not need to change, making this module especially suitable for low-power projects.",source:"@site/docs/Sensor/Grove/Grove_Accessories/Actuator/Grove-2-Coil_Latching_Relay.md",sourceDirName:"Sensor/Grove/Grove_Accessories/Actuator",slug:"/Grove-2-Coil_Latching_Relay",permalink:"/Grove-2-Coil_Latching_Relay",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Sensor/Grove/Grove_Accessories/Actuator/Grove-2-Coil_Latching_Relay.md",tags:[],version:"current",lastUpdatedBy:"gunengyu",lastUpdatedAt:1641686400,formattedLastUpdatedAt:"Jan 9, 2022",frontMatter:{title:"Grove - 2-Coil Latching Relay",nointro:null,keywords:["docs","docusaurus"],image:"https://wiki.seeedstudio.com/Grove-2-Coil_Latching_Relay/",slug:"/Grove-2-Coil_Latching_Relay",last_update:{date:"01/09/2022",author:"gunengyu"}},sidebar:"ProductSidebar",previous:{title:"Grove - Serial Camera Kit",permalink:"/Grove-Serial_Camera_Kit"},next:{title:"Grove - Buzzer",permalink:"/Grove-Buzzer"}},s={},p=[{value:"Features",id:"features",level:2},{value:"Specifications",id:"specifications",level:2},{value:"Platforms Supported",id:"platforms-supported",level:2},{value:"Before usage",id:"before-usage",level:2},{value:"Related Reading",id:"related-reading",level:3},{value:"To be prepared",id:"to-be-prepared",level:3},{value:"Getting Started",id:"getting-started",level:2},{value:"With Arduino",id:"with-arduino",level:3},{value:"With Raspberry Pi",id:"with-raspberry-pi",level:3},{value:"Schematic Online Viewer",id:"schematic-online-viewer",level:2},{value:"Resources",id:"resources",level:2},{value:"Tech Support",id:"tech-support",level:2}],d={toc:p};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Grove-2-Coil_Latching_Relay/img/2Coil_Latching_Relay_01.jpg",alt:null})),(0,o.kt)("p",null,"This module is based on 2-Coil Latching Relay. Contrast to the ordinary relay, this latching relay does not need continuous power to keep the state, only a rising/falling pulse is needed to change the work state. Even the power can be removed when the work state do not need to change, making this module especially suitable for low-power projects."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/Grove-2-Coil-Latching-Relay-p-1446.html"},(0,o.kt)("img",{parentName:"a",src:"https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png",alt:null}))),(0,o.kt)("h2",{id:"features"},"Features"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Grove Connector"),(0,o.kt)("li",{parentName:"ul"},"Low power consumption"),(0,o.kt)("li",{parentName:"ul"},"Dual Switch")),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre"},"More details about Grove modules please refer to [Grove System](https://wiki.seeedstudio.com/Grove_System/)\n"))),(0,o.kt)("h2",{id:"specifications"},"Specifications"),(0,o.kt)("table",{border:"1",cellspacing:"0",width:"80%"},(0,o.kt)("tr",null,(0,o.kt)("th",{scope:"col"},"Item"),(0,o.kt)("th",{scope:"col"},"Min"),(0,o.kt)("th",{scope:"col"},"Typical"),(0,o.kt)("th",{scope:"col"},"Max"),(0,o.kt)("th",{scope:"col"},"Unit")),(0,o.kt)("tr",{align:"center"},(0,o.kt)("th",{scope:"row"},"Working Voltage"),(0,o.kt)("td",null,"4.7"),(0,o.kt)("td",null,"5.0"),(0,o.kt)("td",null,"5.3"),(0,o.kt)("td",null,"VDC")),(0,o.kt)("tr",{align:"center"},(0,o.kt)("th",{scope:"row"},"Set/Reset Voltage(Max)"),(0,o.kt)("td",{colspan:"3"},"4.0"),(0,o.kt)("td",null,"VDC")),(0,o.kt)("tr",{align:"center"},(0,o.kt)("th",{scope:"row"},"Coil Resistance"),(0,o.kt)("td",null,"151"),(0,o.kt)("td",null,"167"),(0,o.kt)("td",null,"183"),(0,o.kt)("td",null,"\u03a9")),(0,o.kt)("tr",{align:"center"},(0,o.kt)("th",{scope:"row"},"Switching Voltage(Max)"),(0,o.kt)("td",{colspan:"3"},"35VAC/35VDC"),(0,o.kt)("td",null,"/")),(0,o.kt)("tr",{align:"center"},(0,o.kt)("th",{scope:"row"},"Switching Current(Max)"),(0,o.kt)("td",{colspan:"3"},"3"),(0,o.kt)("td",null,"A")),(0,o.kt)("tr",{align:"center"},(0,o.kt)("th",{scope:"row"},"Set Time(Latching)"),(0,o.kt)("td",{colspan:"3"},"4.5(max)"),(0,o.kt)("td",null,"ms")),(0,o.kt)("tr",{align:"center"},(0,o.kt)("th",{scope:"row"},"Reset Time(Latching)"),(0,o.kt)("td",{colspan:"3"},"3.5(max)"),(0,o.kt)("td",null,"ms"))),(0,o.kt)("h2",{id:"platforms-supported"},"Platforms Supported"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Arduino"),(0,o.kt)("th",{parentName:"tr",align:null},"Raspberry Pi"),(0,o.kt)("th",{parentName:"tr",align:null}),(0,o.kt)("th",{parentName:"tr",align:null}),(0,o.kt)("th",{parentName:"tr",align:null}))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg",alt:null})),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg",alt:null})),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg",alt:null})),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg",alt:null})),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg",alt:null}))))),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre"},"The platforms mentioned above as supported is/are an indication of the module's software or theoritical compatibility. We only provide software library or code examples for Arduino platform in most cases. It is not possible to provide software library / demo code for all possible MCU platforms. Hence, users have to write their own software library.\n"))),(0,o.kt)("h2",{id:"before-usage"},"Before usage"),(0,o.kt)("h3",{id:"related-reading"},"Related Reading"),(0,o.kt)("p",null,"We suggest you to read those knowledge before using the Gas sensor, it'll help you to learn more about Arduino and our products, and also it'll let you to use open souse hardware more easier."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Getting Started with Arduino"),(0,o.kt)("li",{parentName:"ul"},"What is Grove system"),(0,o.kt)("li",{parentName:"ul"},"Why i need a Base shield?")),(0,o.kt)("p",null,"After reading that you will know how to use Base shield with Grove products to work well with Arduino. Let's start it\xa0!"),(0,o.kt)("h3",{id:"to-be-prepared"},"To be prepared"),(0,o.kt)("p",null,"This tutorial will include some necessary products:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Arduino UNO R3 or Seeeduino v4"),(0,o.kt)("li",{parentName:"ul"},"Base Shield"),(0,o.kt)("li",{parentName:"ul"},"Grove - 2-Coil Latching Relay")),(0,o.kt)("h2",{id:"getting-started"},"Getting Started"),(0,o.kt)("h3",{id:"with-arduino"},"With Arduino"),(0,o.kt)("p",null,"The latching relay only draws power during the changing of state. A rising/falling voltage pulse on the signal pin changes it's working state. This is very useful in situations where energy efficiency is important, and also in situations where you need the relay to remember its state."),(0,o.kt)("p",null,"Let's begin to use it."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Connect the module to D3 port of Grove - Base Shield."),(0,o.kt)("li",{parentName:"ul"},'The relay hold in "set" status(Comm and NO connected) in default, when there is a rising edge on the SIG pin. It turns the "reset" state(Comm and NC connected). The reference code is shown below:')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-c"},"#define LatchingRelay 3\nvoid setup()\n{\n    pinMode(LatchingRelay,OUTPUT);\n\n    digitalWrite(LatchingRelay,LOW);\n    delay(1000);\n    digitalWrite(LatchingRelay,HIGH);\n    delay(1000);\n}\nvoid loop()\n{\n\n}\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},'The relay hold in "reset" status(Comm and NC Connected), when there is a falling edge on the SIG pin. It turns the "set" state(Comm and NO connected). The reference code is shown below:')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-c"},"#define LatchingRelay 3\nvoid setup()\n{\n    pinMode(LatchingRelay,OUTPUT);\n\n    digitalWrite(3,HIGH);\n    delay(1000);\n    digitalWrite(3,LOW);\n    delay(1000);\n}\nvoid loop()\n{\n\n}\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"This module consumes little power when working state doesn't change. After setting the relay state, you do not need to supply power for the Latching Relay any more, which makes it especially low power consumption.")),(0,o.kt)("div",{class:"admonition note"},(0,o.kt)("p",{class:"admonition-title"},"Note"),'Relay is on the "reset" status when being released from stock.'),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Grove-2-Coil_Latching_Relay/img/Latching_Relay_Diagram.jpg",alt:null})),(0,o.kt)("div",{class:"admonition note"},(0,o.kt)("p",{class:"admonition-title"},"Notes"),(0,o.kt)("p",null," 1. The two-way relays are controlled at the same time."),(0,o.kt)("p",null,' 2. The NO(NC) indicator will flash once when switch to "set"("reset") status.')),(0,o.kt)("h3",{id:"with-raspberry-pi"},"With Raspberry Pi"),(0,o.kt)("p",null,"1.You should have got a raspberry pi and a grovepi or grovepi+."),(0,o.kt)("p",null,"2.You should have completed configuring the development enviroment, otherwise follow ",(0,o.kt)("a",{parentName:"p",href:"/GrovePi_Plus"},"here"),"."),(0,o.kt)("p",null,"3.Connection"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Plug the sensor to grovepi socket D4 by using a grove cable.")),(0,o.kt)("p",null,"4.Navigate to the demos' directory:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"cd yourpath/GrovePi/Software/Python/\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"To see the code")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'nano grove_2_coil_latching_relay.py   # "Ctrl+x" to exit #\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'import time\nimport grovepi\n\n# Connect the Grove 2-Coil Latching Relay to digital port D4\n# SIG,NC,VCC,GND\nrelay = 4\n\ngrovepi.pinMode(relay,"OUTPUT")\n\nwhile True:\n    try:\n        # switch on for 5 seconds\n        grovepi.digitalWrite(relay,1)\n        print "on"\n        time.sleep(5)\n\n        # switch off for 5 seconds\n        grovepi.digitalWrite(relay,0)\n        print "off"\n        time.sleep(5)\n\n    except KeyboardInterrupt:\n        grovepi.digitalWrite(relay,0)\n        break\n    except IOError:\n        print "Error"\n')),(0,o.kt)("p",null,"5.Run the demo."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"sudo python grove_2_coil_latching_relay.py\n")),(0,o.kt)("h2",{id:"schematic-online-viewer"},"Schematic Online Viewer"),(0,o.kt)("div",{className:"altium-ecad-viewer","data-project-src":"https://files.seeedstudio.com/wiki/Grove-2-Coil_Latching_Relay/res/Grove-2-Coil_Latching_Relay_Eagle_File.zip",style:{borderRadius:"0px 0px 4px 4px",height:500,borderStyle:"solid",borderWidth:1,borderColor:"rgb(241, 241, 241)",overflow:"hidden",maxWidth:1280,maxHeight:700,boxSizing:"border-box"}}),(0,o.kt)("h2",{id:"resources"},"Resources"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Grove-2-Coil_Latching_Relay/res/Grove-2-Coil_Latching_Relay_Eagle_File.zip"},"Grove - 2-Coil Latching Relay Eagle File")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Grove-2-Coil_Latching_Relay/res/Latching_Relay_Datesheet.pdf"},"Latching_Relay_Datasheet"))),(0,o.kt)("h2",{id:"tech-support"},"Tech Support"),(0,o.kt)("p",null," if you have any technical issue.  submit the issue into our ",(0,o.kt)("a",{parentName:"p",href:"http://forum.seeedstudio.com/"},"forum"),"."),(0,o.kt)("div",null,(0,o.kt)("br",null),(0,o.kt)("p",{style:{textAlign:"center"}},(0,o.kt)("a",{href:"https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts",target:"_blank"},(0,o.kt)("img",{src:"https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg"})))))}u.isMDXComponent=!0}}]);