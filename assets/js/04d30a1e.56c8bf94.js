"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[32803],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var d=r.createContext({}),s=function(e){var t=r.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(d.Provider,{value:t},e.children)},p="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,d=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=s(n),c=i,m=p["".concat(d,".").concat(c)]||p[c]||g[c]||a;return n?r.createElement(m,o(o({ref:t},u),{},{components:n})):r.createElement(m,o({ref:t},u))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=c;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l[p]="string"==typeof e?e:i,o[1]=l;for(var s=2;s<a;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},76926:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var r=n(87462),i=(n(67294),n(3905));const a={description:"How to Debug Arduino Boards using SWD Interface",title:"How to Debug Arduino Boards using SWD Interface",keywords:["Sorftware"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Software-SWD",last_update:{date:"1/16/2023",author:"jianjing Huang"}},o="How to Debug Arduino Boards using SWD Interface",l={unversionedId:"Top_Brand/Arduino/Tutorials/Arduino_Enhanced_Usage/Software-SWD",id:"Top_Brand/Arduino/Tutorials/Arduino_Enhanced_Usage/Software-SWD",title:"How to Debug Arduino Boards using SWD Interface",description:"How to Debug Arduino Boards using SWD Interface",source:"@site/docs/Top_Brand/Arduino/Tutorials/Arduino_Enhanced_Usage/Software-SWD.md",sourceDirName:"Top_Brand/Arduino/Tutorials/Arduino_Enhanced_Usage",slug:"/Software-SWD",permalink:"/Software-SWD",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Top_Brand/Arduino/Tutorials/Arduino_Enhanced_Usage/Software-SWD.md",tags:[],version:"current",lastUpdatedBy:"jianjing Huang",lastUpdatedAt:1673827200,formattedLastUpdatedAt:"Jan 16, 2023",frontMatter:{description:"How to Debug Arduino Boards using SWD Interface",title:"How to Debug Arduino Boards using SWD Interface",keywords:["Sorftware"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Software-SWD",last_update:{date:"1/16/2023",author:"jianjing Huang"}},sidebar:"ProductSidebar",previous:{title:"Firmata for Arduino Compatible Boards",permalink:"/ODYSSEY-X86J4105-Firmata"},next:{title:"Bridge Mosiquitto MQTT Broker to AWS IoT with Arduino Boards",permalink:"/Arduino-AWS-IOT-Bridge"}},d={},s=[{value:"What is SWD Debugging",id:"what-is-swd-debugging",level:3},{value:"Hardware Connection",id:"hardware-connection",level:2},{value:"Wio Terminal SWD Interface",id:"wio-terminal-swd-interface",level:3},{value:"Installing J-Link GDB Server for Debugging",id:"installing-j-link-gdb-server-for-debugging",level:2},{value:"Arduino Set-up",id:"arduino-set-up",level:2},{value:"1. Obtaining the Arduino Sketch ELF File Path",id:"1-obtaining-the-arduino-sketch-elf-file-path",level:3},{value:"2. Obtain the GCC Path",id:"2-obtain-the-gcc-path",level:3},{value:"Getting Started with J-Link GDB Server",id:"getting-started-with-j-link-gdb-server",level:2},{value:"Launching a GDB Client",id:"launching-a-gdb-client",level:2},{value:"<code>.gdbinit</code> Method",id:"gdbinit-method",level:3},{value:"Debugging",id:"debugging",level:2},{value:"Resources",id:"resources",level:2},{value:"FAQ",id:"faq",level:2}],u={toc:s};function p(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"how-to-debug-arduino-boards-using-swd-interface"},"How to Debug Arduino Boards using SWD Interface"),(0,i.kt)("p",null,"In this wiki, you will learn how to use ",(0,i.kt)("strong",{parentName:"p"},"SWD Interface to debug your Arduino boards via the J-Link Debug Programmer"),". For reference, Wio Terminal is used as the hardware to demonstrate the debugging process."),(0,i.kt)("div",{align:"center"},(0,i.kt)("img",{src:"https://files.seeedstudio.com/wiki/SWD/SWD-Interface.png"})),(0,i.kt)("h3",{id:"what-is-swd-debugging"},"What is SWD Debugging"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"SWD"),", also known as ",(0,i.kt)("a",{parentName:"p",href:"https://developer.arm.com/architectures/cpu-architecture/debug-visibility-and-trace/coresight-architecture/serial-wire-debug"},"Serial Wire Debug")," is a 2-pin interface (SWDIO/SWCLK) of which it's also an alternative JTAG interface that has the same JTAG protocol. SWD uses an ARM CPU standard bi-directional wire protocol, defined in the ARM Debug programmer."),(0,i.kt)("h2",{id:"hardware-connection"},"Hardware Connection"),(0,i.kt)("p",null,"Before you start, you will need the following materials:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/Wio-Terminal-p-4509.html"},(0,i.kt)("strong",{parentName:"a"},"Wio Terminal"))," (or Other Arduino Boards with SWD Interface)")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"https://www.segger.com/products/debug-probes/j-link/"},(0,i.kt)("strong",{parentName:"a"},"J-Link Debug Programmer"))))),(0,i.kt)("h3",{id:"wio-terminal-swd-interface"},"Wio Terminal SWD Interface"),(0,i.kt)("div",{align:"center"},(0,i.kt)("img",{src:"https://files.seeedstudio.com/wiki/SWD/SWD-connection.png"})),(0,i.kt)("p",null,"For Wio Terminal, the SWD interface pads are on the bottom of the front side of Wio Terminal (Bare PCBA without casing). There are three jumper wires that need to be led out:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"SWCLK")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"SWDIO")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"GND"))),(0,i.kt)("p",null,"Once the jumper wires are soldered on, we can connect them to the J-Link Debug programmer following the SWD Pin Map:"),(0,i.kt)("div",{align:"center"},(0,i.kt)("img",{src:"https://files.seeedstudio.com/wiki/SWD/pinout.png"})),(0,i.kt)("p",null,"Connect as followed:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"SWCLK"))," (Wio Terminal) -> ",(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"SWCLK"))," (J-Link Debug Programmer Pin 7)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"SWDIO"))," (Wio Terminal) -> ",(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"SWDIO"))," (J-Link Debug Programmer Pin 9)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"GND"))," (Wio Terminal) -> ",(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"GND"))," (J-Link Debug Programmer Pin 4)")),(0,i.kt)("h2",{id:"installing-j-link-gdb-server-for-debugging"},"Installing J-Link GDB Server for Debugging"),(0,i.kt)("p",null,"To debug with J-Link Debug programmer, you will need to download the ",(0,i.kt)("a",{parentName:"p",href:"https://www.segger.com/products/debug-probes/j-link/tools/j-link-gdb-server/about-j-link-gdb-server/"},(0,i.kt)("strong",{parentName:"a"},"J-Link GDB Server")),". Download and install according to your OS."),(0,i.kt)("h2",{id:"arduino-set-up"},"Arduino Set-up"),(0,i.kt)("p",null,"Before launching J-Link GDB Server, you will also need to open ",(0,i.kt)("inlineCode",{parentName:"p"},"Arduino")," IDE for later configurations."),(0,i.kt)("h3",{id:"1-obtaining-the-arduino-sketch-elf-file-path"},"1. Obtaining the Arduino Sketch ELF File Path"),(0,i.kt)("p",null,"In the settings of Arduino IDE, make sure that the ",(0,i.kt)("strong",{parentName:"p"},"Show verbose output during compilation and upload")," are both ticked."),(0,i.kt)("p",null,"Under the Arduino sketch you want to debug, click ",(0,i.kt)("strong",{parentName:"p"},"Compile")," (select Wio Termianl as board), and check the log information to get the path of the ",(0,i.kt)("inlineCode",{parentName:"p"},".elf")," file location. Let's take ",(0,i.kt)("inlineCode",{parentName:"p"},"Blink"),"\nas example:"),(0,i.kt)("div",{align:"center"},(0,i.kt)("img",{src:"https://files.seeedstudio.com/wiki/SWD/elf.png"})),(0,i.kt)("p",null,"Copy this path and it will be used later for GDB."),(0,i.kt)("p",null,"For example, in my case:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"/var/folders/7g/10kskmw90bg08j_g_r7flwq40000gn/T/arduino_build_633418/Blink.ino.elf\n")),(0,i.kt)("h3",{id:"2-obtain-the-gcc-path"},"2. Obtain the GCC Path"),(0,i.kt)("p",null,"Under the same sketch compile log information, you can also find the GCC path used by Arduino of which also can be used for J-Link Debug Programmer later."),(0,i.kt)("div",{align:"center"},(0,i.kt)("img",{src:"https://files.seeedstudio.com/wiki/SWD/GCC.png"})),(0,i.kt)("p",null,"For example, in my case:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"/Users/ansonhe/Library/Arduino15/packages/Seeeduino/tools/arm-none-eabi-gcc/7-2017q4/bin\n")),(0,i.kt)("h2",{id:"getting-started-with-j-link-gdb-server"},"Getting Started with J-Link GDB Server"),(0,i.kt)("p",null,"Connect the J-Link Debug Programmer to the PC and also power Wio Terminal from the USB port. Launch the ",(0,i.kt)("strong",{parentName:"p"},"J-Link GDB Server"),", select the following settings:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Connection to J-Link: ",(0,i.kt)("strong",{parentName:"li"},"USB")),(0,i.kt)("li",{parentName:"ul"},"Target Device: ",(0,i.kt)("strong",{parentName:"li"},"Cortex-M4")),(0,i.kt)("li",{parentName:"ul"},"Target Interface: ",(0,i.kt)("strong",{parentName:"li"},"SWD"))),(0,i.kt)("div",{align:"center"},(0,i.kt)("img",{width:"{500}",src:"https://files.seeedstudio.com/wiki/SWD/GDB-launch.png"})),(0,i.kt)("p",null,"Select ",(0,i.kt)("strong",{parentName:"p"},"OK")," and if everything goes well you should see the following screen:"),(0,i.kt)("div",{align:"center"},(0,i.kt)("img",{src:"https://files.seeedstudio.com/wiki/SWD/GDB-ready.png"})),(0,i.kt)("p",null,"You should see that the listening port will appear and the J-Link GDB server is up and ready!"),(0,i.kt)("h2",{id:"launching-a-gdb-client"},"Launching a GDB Client"),(0,i.kt)("p",null,"Now you can launch the GDB Client by using the path we've saved earlier from the GCC path in Arduino. Open Terminal and paste the copied path + ",(0,i.kt)("inlineCode",{parentName:"p"},"/arm-none-eabi-gdb"),":"),(0,i.kt)("p",null,"For Example: ",(0,i.kt)("inlineCode",{parentName:"p"},"/Users/ansonhe/Library/Arduino15/packages/Seeeduino/tools/arm-none-eabi-gcc/7-2017q4/bin/arm-none-eabi-gdb")),(0,i.kt)("p",null,"Run the following commands under gdb:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"target remote localhost:2331")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"monitor device Cortex-M4")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"monitor speed auto")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"file")," + Arduino Sketch ELF File Path, i.e. ",(0,i.kt)("inlineCode",{parentName:"li"},"file /var/folders/7g/10kskmw90bg08j_g_r7flwq40000gn/T/arduino_build_633418/Blink.ino.elf")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"load")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"monitor reset"))),(0,i.kt)("p",null,"Now you can use GDB to debug your Arduino Sketch!"),(0,i.kt)("div",{align:"center"},(0,i.kt)("img",{src:"https://files.seeedstudio.com/wiki/SWD/GDB-connected.png"})),(0,i.kt)("h3",{id:"gdbinit-method"},(0,i.kt)("inlineCode",{parentName:"h3"},".gdbinit")," Method"),(0,i.kt)("p",null,"You can also create a ",(0,i.kt)("inlineCode",{parentName:"p"},".gdbinit")," file, copy the following and save it in the ",(0,i.kt)("inlineCode",{parentName:"p"},"~/")," location to avoid keep repeating setting process for gbd."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"target remote localhost:2331\nmonitor device Cortex-M4\nmonitor speed auto\nfile /var/folders/7g/10kskmw90bg08j_g_r7flwq40000gn/T/arduino_build_633418/Blink.ino.elf\nload\nmonitor reset\n")),(0,i.kt)("p",null,"Now if you just launch the GDB client and you can start debugging straight away!"),(0,i.kt)("h2",{id:"debugging"},"Debugging"),(0,i.kt)("p",null,"Some useful commands for GDB:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"continue/cont")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"ctrl"),"+",(0,i.kt)("inlineCode",{parentName:"li"},"c")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"next")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"break")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"info break")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"clear")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"delete")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"list"))),(0,i.kt)("h2",{id:"resources"},"Resources"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"https://www.gnu.org/software/gdb/documentation/"},"Official GNU GDB Documentation"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"http://www.yolinux.com/TUTORIALS/GDB-Commands.html"},"GNU GDB Debugger Command Cheat Sheet")))),(0,i.kt)("h2",{id:"faq"},"FAQ"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Q1. How to take off the enclosure of Wio Terminal?")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"A1.")," First, take out the 4 rubber pads of 4 corner, and you will see 2 screws that holds the Wio Terminal enclosure together. Simply unscrew them and you can take it apart."),(0,i.kt)("div",{align:"center"},(0,i.kt)("img",{width:"{450}",src:"https://files.seeedstudio.com/wiki/SWD/WT.png"})))}p.isMDXComponent=!0}}]);