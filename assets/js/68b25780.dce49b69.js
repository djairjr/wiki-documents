"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[10620],{3905:(t,e,i)=>{i.d(e,{Zo:()=>l,kt:()=>m});var o=i(67294);function r(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}function n(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,o)}return i}function s(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?n(Object(i),!0).forEach((function(e){r(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):n(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}function a(t,e){if(null==t)return{};var i,o,r=function(t,e){if(null==t)return{};var i,o,r={},n=Object.keys(t);for(o=0;o<n.length;o++)i=n[o],e.indexOf(i)>=0||(r[i]=t[i]);return r}(t,e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);for(o=0;o<n.length;o++)i=n[o],e.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(t,i)&&(r[i]=t[i])}return r}var u=o.createContext({}),d=function(t){var e=o.useContext(u),i=e;return t&&(i="function"==typeof t?t(e):s(s({},e),t)),i},l=function(t){var e=d(t.components);return o.createElement(u.Provider,{value:e},t.children)},p="mdxType",c={inlineCode:"code",wrapper:function(t){var e=t.children;return o.createElement(o.Fragment,{},e)}},h=o.forwardRef((function(t,e){var i=t.components,r=t.mdxType,n=t.originalType,u=t.parentName,l=a(t,["components","mdxType","originalType","parentName"]),p=d(i),h=r,m=p["".concat(u,".").concat(h)]||p[h]||c[h]||n;return i?o.createElement(m,s(s({ref:e},l),{},{components:i})):o.createElement(m,s({ref:e},l))}));function m(t,e){var i=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var n=i.length,s=new Array(n);s[0]=h;var a={};for(var u in e)hasOwnProperty.call(e,u)&&(a[u]=e[u]);a.originalType=t,a[p]="string"==typeof t?t:r,s[1]=a;for(var d=2;d<n;d++)s[d]=i[d];return o.createElement.apply(null,s)}return o.createElement.apply(null,i)}h.displayName="MDXCreateElement"},28279:(t,e,i)=>{i.r(e),i.d(e,{assets:()=>u,contentTitle:()=>s,default:()=>p,frontMatter:()=>n,metadata:()=>a,toc:()=>d});var o=i(87462),r=(i(67294),i(3905));const n={description:"Seeed Studio XIAO RP2040 with CircuitPython",title:"CircuitPython",keywords:["xiao"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/XIAO-RP2040-with-CircuitPython",last_update:{date:"1/11/2023",author:"shuxu hu"}},s="**Seeed Studio XIAO RP2040 with CircuitPython**",a={unversionedId:"Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_RP2040/XIAO-RP2040-with-CircuitPython",id:"Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_RP2040/XIAO-RP2040-with-CircuitPython",title:"CircuitPython",description:"Seeed Studio XIAO RP2040 with CircuitPython",source:"@site/docs/Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_RP2040/XIAO-RP2040-with-CircuitPython.md",sourceDirName:"Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_RP2040",slug:"/XIAO-RP2040-with-CircuitPython",permalink:"/XIAO-RP2040-with-CircuitPython",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_RP2040/XIAO-RP2040-with-CircuitPython.md",tags:[],version:"current",lastUpdatedBy:"shuxu hu",lastUpdatedAt:1673395200,formattedLastUpdatedAt:"Jan 11, 2023",frontMatter:{description:"Seeed Studio XIAO RP2040 with CircuitPython",title:"CircuitPython",keywords:["xiao"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/XIAO-RP2040-with-CircuitPython",last_update:{date:"1/11/2023",author:"shuxu hu"}},sidebar:"ProductSidebar",previous:{title:"MicroPython",permalink:"/XIAO-RP2040-with-MicroPython"},next:{title:"Motion Recognition based on Edge Impulse",permalink:"/XIAO-RP2040-EI"}},u={},d=[{value:"<strong>Getting Started</strong>",id:"getting-started",level:2},{value:"Installation",id:"installation",level:3},{value:"LED Flash Tutorial",id:"led-flash-tutorial",level:3},{value:"Tech Support &amp; Product Discussion",id:"tech-support--product-discussion",level:2}],l={toc:d};function p(t){let{components:e,...i}=t;return(0,r.kt)("wrapper",(0,o.Z)({},l,i,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"seeed-studio-xiao-rp2040-with-circuitpython"},(0,r.kt)("strong",{parentName:"h1"},"Seeed Studio XIAO RP2040 with CircuitPython")),(0,r.kt)("p",null,"CircuitPython is a programming language designed to simplify experimenting and learning to program on low-cost microcontroller boards. It makes getting started easier than ever with no upfront desktop downloads needed. Once you get your board set up, open any text editor, and get started editing code. It's that simple."),(0,r.kt)("h2",{id:"getting-started"},(0,r.kt)("strong",{parentName:"h2"},"Getting Started")),(0,r.kt)("h3",{id:"installation"},"Installation"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Step 1")," Enter Bootloader Mode"),(0,r.kt)("p",null,"Before we install CircuitPython to Seeed Studio XIAO RP2040, it requires bootloader mode. We can enter the bootloader mode by the following operation:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},'Long press the "BOOT" button. (The "B" is written on the board shown to the right)'),(0,r.kt)("li",{parentName:"ul"},"Connect the Seeed Studio XIAO PR2040 to your computer while you still pressing the button."),(0,r.kt)("li",{parentName:"ul"},"The computer then will appear a disk driver(RP1-RP2)")),(0,r.kt)("p",{style:{textAlign:"center"}},(0,r.kt)("img",{src:"https://files.seeedstudio.com/wiki/XIAO-RP2040/img/xinfront.jpg",alt:"pir",width:600,height:"auto"})),(0,r.kt)("p",null,"The disk shows up(RP1-RP2):"),(0,r.kt)("div",{align:"center"},(0,r.kt)("img",{width:150,src:"https://files.seeedstudio.com/wiki/XIAO-RP2040/res/rp2040tu.png"})),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Step 2")," Downloard the ",(0,r.kt)("a",{parentName:"p",href:"https://files.seeedstudio.com/wiki/XIAO-RP2040/res/XIAO-RP2040-CircuitPython.uf2"},"firmware")," for Seeed Studio XIAO RP2040"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Step 3"),' Drag the .urf file to the disk driver("RP1-RP2")'),(0,r.kt)("div",{align:"center"},(0,r.kt)("img",{width:300,src:"https://files.seeedstudio.com/wiki/XIAO-RP2040/res/rp2040tu9.png"})),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Step 4"),' Check the disk drive if the name has changed to "CIRCUITPY".'),(0,r.kt)("div",{align:"center"},(0,r.kt)("img",{width:150,src:"https://files.seeedstudio.com/wiki/XIAO-RP2040/res/rp2040tu2.png"})),(0,r.kt)("p",null,"Now you have successfully installed the CircuitPython to the Seeed Studio XIAO RP2040 board."),(0,r.kt)("h3",{id:"led-flash-tutorial"},"LED Flash Tutorial"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Step 1")," Download CircuitPython editor - ",(0,r.kt)("a",{parentName:"p",href:"https://codewith.mu/en/download"},"Mu Editor")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Step 2"),' Open and chose the mode as "CircuitPython"'),(0,r.kt)("div",{align:"center"},(0,r.kt)("img",{width:750,src:"https://files.seeedstudio.com/wiki/XIAO-RP2040/res/rp2040tu7.png"})),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Step 3")," Copy and upload the following codes:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c++"},'"""Example for Pico. Blinks the built-in LED."""\nimport time\nimport board\nimport digitalio\n\nled = digitalio.DigitalInOut(board.LED)\nled.direction = digitalio.Direction.OUTPUT\n\nwhile True:\n    led.value = True\n    time.sleep(0.5)\n    led.value = False\n    time.sleep(0.5)\n')),(0,r.kt)("p",null,"Click \"Serial\" to open REPL, save the codes to REPL as 'code.py' or 'main.py'"),(0,r.kt)("div",{align:"center"},(0,r.kt)("img",{width:750,src:"https://files.seeedstudio.com/wiki/XIAO-RP2040/res/rp2040tu6.png"})),(0,r.kt)("p",null,"The user LED on Seeed Studio XIAO RP2040 then will flash."),(0,r.kt)("h2",{id:"tech-support--product-discussion"},"Tech Support & Product Discussion"),(0,r.kt)("p",null,"Thank you for choosing our products! We are here to provide you with different support to ensure that your experience with our products is as smooth as possible. We offer several communication channels to cater to different preferences and needs."),(0,r.kt)("div",{class:"button_tech_support_container"},(0,r.kt)("a",{href:"https://forum.seeedstudio.com/",class:"button_forum"}),(0,r.kt)("a",{href:"https://www.seeedstudio.com/contacts",class:"button_email"})),(0,r.kt)("div",{class:"button_tech_support_container"},(0,r.kt)("a",{href:"https://discord.gg/eWkprNDMU7",class:"button_discord"}),(0,r.kt)("a",{href:"https://github.com/Seeed-Studio/wiki-documents/discussions/69",class:"button_discussion"})))}p.isMDXComponent=!0}}]);