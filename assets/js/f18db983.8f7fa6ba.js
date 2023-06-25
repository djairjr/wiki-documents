"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7183],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>h});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var o=r.createContext({}),s=function(e){var t=r.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},m=function(e){var t=s(e.components);return r.createElement(o.Provider,{value:t},e.children)},u="mdxType",k={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,o=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),u=s(a),g=n,h=u["".concat(o,".").concat(g)]||u[g]||k[g]||l;return a?r.createElement(h,i(i({ref:t},m),{},{components:a})):r.createElement(h,i({ref:t},m))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,i=new Array(l);i[0]=g;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p[u]="string"==typeof e?e:n,i[1]=p;for(var s=2;s<l;s++)i[s]=a[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}g.displayName="MDXCreateElement"},41347:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>p,toc:()=>s});var r=a(87462),n=(a(67294),a(3905));const l={description:"reTerminal-FAQ",title:"How to flash Raspberry Pi OS/ 64-bit Ubuntu OS or Other OS to eMMC",image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",last_update:{date:"6/21/2023",author:"Seraphina"}},i=void 0,p={unversionedId:"FAQ/reTerminal/flash_different_os_to_emmc",id:"FAQ/reTerminal/flash_different_os_to_emmc",title:"How to flash Raspberry Pi OS/ 64-bit Ubuntu OS or Other OS to eMMC",description:"reTerminal-FAQ",source:"@site/docs/FAQ/reTerminal/flash_different_os_to_emmc.md",sourceDirName:"FAQ/reTerminal",slug:"/FAQ/reTerminal/flash_different_os_to_emmc",permalink:"/FAQ/reTerminal/flash_different_os_to_emmc",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/FAQ/reTerminal/flash_different_os_to_emmc.md",tags:[],version:"current",lastUpdatedBy:"Seraphina",lastUpdatedAt:1687305600,formattedLastUpdatedAt:"Jun 21, 2023",frontMatter:{description:"reTerminal-FAQ",title:"How to flash Raspberry Pi OS/ 64-bit Ubuntu OS or Other OS to eMMC",image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",last_update:{date:"6/21/2023",author:"Seraphina"}}},o={},s=[{value:"Hardware Disassembly Steps",id:"hardware-disassembly-steps",level:2},{value:"Software Setup",id:"software-setup",level:2},{value:"For Windows",id:"for-windows",level:3},{value:"For MAC",id:"for-mac",level:3},{value:"For Linux",id:"for-linux",level:3}],m={toc:s};function u(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"We can flash ",(0,n.kt)("strong",{parentName:"p"},"Raspberry Pi OS/ 64-bit Ubuntu OS or other OS")," on to the ",(0,n.kt)("strong",{parentName:"p"},"eMMC storage")," of the CM4 on the reTerminal. Once the necessary drivers are installed, you just have to connect the USB Type-C port of the reTerminal to your PC, and it will show as an external drive. Start by removing the reTerminal back shell."),(0,n.kt)("h2",{id:"hardware-disassembly-steps"},"Hardware Disassembly Steps"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Step 1.")," Remove the 4 rubber covers and open the reTerminal back shell unscrewing the 4 screws underneath")),(0,n.kt)("p",{style:{textAlign:"center"}},(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/ReTerminal/remove-screw-1.png",alt:"pir",width:"450",height:"auto"})),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Step 2.")," Remove the 2 screws to disassemble the heatsink")),(0,n.kt)("p",{style:{textAlign:"center"}},(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/ReTerminal/wiki1/remove-screw-heatsink-2.jpg",alt:"pir",width:"600",height:"auto"})),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Step 3.")," Flip down the ",(0,n.kt)("strong",{parentName:"li"},"boot mode switch")," according to the below diagram")),(0,n.kt)("p",{style:{textAlign:"center"}},(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/ReTerminal/wiki1/boot-switch-2.jpg",alt:"pir",width:"600",height:"auto"})),(0,n.kt)("p",null,"Now let's move on to software set up. Follow the steps according to your desired operating system"),(0,n.kt)("h2",{id:"software-setup"},"Software Setup"),(0,n.kt)("h3",{id:"for-windows"},"For Windows"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Step 1.")," Download the ",(0,n.kt)("strong",{parentName:"p"},"rpiboot setup installer")," by click ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("a",{parentName:"strong",href:"https://github.com/raspberrypi/usbboot/raw/master/win32/rpiboot_setup.exe"},"this link"))," to install the necessary drivers and the boot tool")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Step 2.")," Connect reTerminal to the PC via USB Type-C cable"))),(0,n.kt)("p",null,"Windows will now find the hardware and install the necessary drivers"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Step 3.")," Search for ",(0,n.kt)("strong",{parentName:"p"},"rpiboot")," tool that we installed before and open it")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Step 4.")," Open ",(0,n.kt)("strong",{parentName:"p"},"file explorer")," and you will see the eMMC of the Computer Module 4 shown as a ",(0,n.kt)("strong",{parentName:"p"},"USB mass storage device")))),(0,n.kt)("admonition",{type:"caution"},(0,n.kt)("p",{parentName:"admonition"},"If you flash ",(0,n.kt)("strong",{parentName:"p"},"the Raspberry Pi OS that originally shipped with reTerminal"),", please return to this ",(0,n.kt)("a",{parentName:"p",href:"/FAQ/reTerminal/reterminal_black_screen/#flash-raspberry-pi-os-which-is-originally-shipped-with-reterminal"},"Wiki"),". ",(0,n.kt)("br",null),"\nOtherwise, please proceed with the following steps.")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Step 5.")," Download ",(0,n.kt)("strong",{parentName:"p"},"Raspberry Pi Imager")," software by visiting ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("a",{parentName:"strong",href:"https://www.raspberrypi.org/software/"},"this link")))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Step 6.")," Open Raspberry Pi Imager software"))),(0,n.kt)("p",{style:{textAlign:"center"}},(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/102110497/RPI_Imager.png",alt:"pir",width:"600",height:"auto"})),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Step 7.")," Press ",(0,n.kt)("strong",{parentName:"li"},"CTRL + SHIFT + X")," on the keyboard to open ",(0,n.kt)("strong",{parentName:"li"},"Advanced options")," window")),(0,n.kt)("p",{style:{textAlign:"center"}},(0,n.kt)("img",{src:"http://files.seeedstudio.com/wiki/ReTerminal/rpi-imager-advanced.png",alt:"pir",width:"600",height:"auto"})),(0,n.kt)("p",null,"Here you can ",(0,n.kt)("strong",{parentName:"p"},"set a hostname, enable SSH, set a password, configure wifi, set locale settings")," and more"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Step 8.")," Click ",(0,n.kt)("strong",{parentName:"li"},"CHOOSE OS")," and select your preferred OS")),(0,n.kt)("p",{style:{textAlign:"center"}},(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/ReTerminal/OS-select.png",alt:"pir",width:"600",height:"auto"})),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"NOTE:")," You can select other OS such as ",(0,n.kt)("strong",{parentName:"p"},"64-bit Ubuntu")," by navigating into ",(0,n.kt)("strong",{parentName:"p"},"Other general purpose OS")),(0,n.kt)("p",{style:{textAlign:"center"}},(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/ReTerminal/Ubuntu-select.jpg",alt:"pir",width:"1000",height:"auto"})),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Step 9.")," Click ",(0,n.kt)("strong",{parentName:"p"},"CHOOSE STORAGE")," and select the connected eMMC drive")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Step 10.")," Finally, click ",(0,n.kt)("strong",{parentName:"p"},"WRITE")))),(0,n.kt)("p",{style:{textAlign:"center"}},(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/102110497/RPI_Imager_Final.png",alt:"pir",width:"600",height:"auto"})),(0,n.kt)("p",null,"Please wait a few minutes until the flashing process is complete."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Step 11.")," Flip the ",(0,n.kt)("strong",{parentName:"li"},"Boot Mode switch")," back to the original position and assemble the reTerminal shell")),(0,n.kt)("p",null,"Now you can skip to ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("a",{parentName:"strong",href:"/FAQ/reTerminal/log_rpios_use_ssh_over_wifi_ethernet"},"here"))),(0,n.kt)("h3",{id:"for-mac"},"For MAC"),(0,n.kt)("admonition",{type:"caution"},(0,n.kt)("p",{parentName:"admonition"},(0,n.kt)("strong",{parentName:"p"},"You need to install ",(0,n.kt)("a",{parentName:"strong",href:"https://brew.sh/"},"homebrew")," before proceed the following steps."),"\nPlease open a terminal and type ",(0,n.kt)("inlineCode",{parentName:"p"},"brew -V")," to check if you have setup the correct homebrew environment, you should see the version of the homebrew environment you have installed.")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Step 1.")," Clone the ",(0,n.kt)("strong",{parentName:"li"},"usbboot")," repository")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"git clone --depth=1 https://github.com/raspberrypi/usbboot\ncd usbboot\n")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Step 2.")," Install ",(0,n.kt)("strong",{parentName:"li"},"libusb"))),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"brew install libusb\n")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Step 3.")," Install ",(0,n.kt)("strong",{parentName:"li"},"pkg-config"))),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"brew install pkg-config\n")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Step 4.")," Build using make")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"make\n")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Step 5.")," Run the binary")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"sudo ./rpiboot\n")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Step 6.")," Connect reTerminal to the your Mac computer via USB Type-C cable")),(0,n.kt)("admonition",{type:"caution"},(0,n.kt)("p",{parentName:"admonition"},"If you flash ",(0,n.kt)("strong",{parentName:"p"},"the Raspberry Pi OS that originally shipped with reTerminal"),", please return to this ",(0,n.kt)("a",{parentName:"p",href:"/FAQ/reTerminal/reterminal_black_screen/#flash-raspberry-pi-os-which-is-originally-shipped-with-reterminal"},"Wiki"),". ",(0,n.kt)("br",null),"\nOtherwise, please proceed with the following steps.")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Step 7.")," Download and Install ",(0,n.kt)("strong",{parentName:"p"},"Raspberry Pi Imager")," Application by visiting ",(0,n.kt)("a",{parentName:"p",href:"https://www.raspberrypi.org/software/"},"this link"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Step 8.")," Open the ",(0,n.kt)("strong",{parentName:"p"},"Raspberry Pi Imager")," Application"))),(0,n.kt)("p",{style:{textAlign:"center"}},(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/102110497/RPI_Imager.png",alt:"pir",width:"600",height:"auto"})),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Step 9.")," Press ",(0,n.kt)("strong",{parentName:"li"},"CTRL + SHIFT + X")," on the keyboard to open ",(0,n.kt)("strong",{parentName:"li"},"Advanced options")," window")),(0,n.kt)("p",{style:{textAlign:"center"}},(0,n.kt)("img",{src:"http://files.seeedstudio.com/wiki/ReTerminal/rpi-imager-advanced.png",alt:"pir",width:"600",height:"auto"})),(0,n.kt)("p",null,"Here you can ",(0,n.kt)("strong",{parentName:"p"},"set a hostname, enable SSH, set a password, configure wifi, set locale settings")," and more"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Step 10.")," Click ",(0,n.kt)("strong",{parentName:"li"},"CHOOSE OS")," and select your preferred OS")),(0,n.kt)("p",{style:{textAlign:"center"}},(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/ReTerminal/OS-select.png",alt:"pir",width:"600",height:"auto"})),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"NOTE:")," You can select OS such as ",(0,n.kt)("strong",{parentName:"p"},"64-bit Ubuntu")," by navigating into ",(0,n.kt)("strong",{parentName:"p"},"Other general purpose OS")),(0,n.kt)("p",{style:{textAlign:"center"}},(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/ReTerminal/Ubuntu-select.jpg",alt:"pir",width:"1000",height:"auto"})),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Step 11.")," Click ",(0,n.kt)("strong",{parentName:"p"},"CHOOSE STORAGE")," and select the connected eMMC drive")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Step 12.")," Finally, click ",(0,n.kt)("strong",{parentName:"p"},"WRITE")))),(0,n.kt)("p",{style:{textAlign:"center"}},(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/102110497/RPI_Imager_Final.png",alt:"pir",width:"600",height:"auto"})),(0,n.kt)("p",null,"Please wait a few minutes until the flashing process is complete."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Step 13.")," Flip the ",(0,n.kt)("strong",{parentName:"li"},"Boot Mode switch")," back to the original postion and assemble the reTerminal shell")),(0,n.kt)("p",null,"Now you can skip to ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("a",{parentName:"strong",href:"#log-in-to-raspberry-pi-os-ubuntu-os-or-other-os-using-ssh-over-wi-fi-ethernet"},"here"))),(0,n.kt)("h3",{id:"for-linux"},"For Linux"),(0,n.kt)("p",null,"We will use Git to obtain the ",(0,n.kt)("strong",{parentName:"p"},"rpiboot")," source code, so make sure Git is installed"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Step 1.")," Open a ",(0,n.kt)("strong",{parentName:"li"},"Terminal")," window and type the following to update the ",(0,n.kt)("strong",{parentName:"li"},"packages list"))),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"sudo apt-get update\n")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Step 2.")," Install ",(0,n.kt)("strong",{parentName:"li"},"Git")," by the following command")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"sudo apt install git pkg-config make gcc libusb-1.0-0-dev\n")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Step 3.")," Git might produce an error if the date is not set properly. Type the following to correct this")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"sudo date MMDDhhmm\n")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"NOTE:")," Where ",(0,n.kt)("strong",{parentName:"p"},"MM")," is the month, ",(0,n.kt)("strong",{parentName:"p"},"DD")," is the date, and ",(0,n.kt)("strong",{parentName:"p"},"hh")," and ",(0,n.kt)("strong",{parentName:"p"},"mm")," are hours and minutes respectively."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Step 4.")," Clone the ",(0,n.kt)("strong",{parentName:"li"},"usbboot")," tool repository")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"git clone --depth=1 https://github.com/raspberrypi/usbboot\ncd usbboot\n")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Step 5.")," Build and install the usbboot tool")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"make\n")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Step 6.")," Run the usbboot tool and it will wait for a connection")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"sudo ./rpiboot\n")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Step 7.")," Connect reTerminal to the PC via USB Type-C cable")),(0,n.kt)("admonition",{type:"caution"},(0,n.kt)("p",{parentName:"admonition"},"If you flash ",(0,n.kt)("strong",{parentName:"p"},"the Raspberry Pi OS that originally shipped with reTerminal"),", please return to this ",(0,n.kt)("a",{parentName:"p",href:"/FAQ/reTerminal/reterminal_black_screen/#flash-raspberry-pi-os-which-is-originally-shipped-with-reterminal"},"Wiki"),".",(0,n.kt)("br",null),"\nOtherwise, please proceed with the following steps.")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Step 8.")," Download ",(0,n.kt)("strong",{parentName:"p"},"Raspberry Pi Imager")," software by visiting ",(0,n.kt)("a",{parentName:"p",href:"https://www.raspberrypi.org/software/"},"this link"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Step 9.")," Open Raspberry Pi Imager software"))),(0,n.kt)("p",{style:{textAlign:"center"}},(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/102110497/RPI_Imager.png",alt:"pir",width:"600",height:"auto"})),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Step 10.")," Press ",(0,n.kt)("strong",{parentName:"li"},"CTRL + SHIFT + X")," on the keyboard to open ",(0,n.kt)("strong",{parentName:"li"},"Advanced options")," window")),(0,n.kt)("p",{style:{textAlign:"center"}},(0,n.kt)("img",{src:"http://files.seeedstudio.com/wiki/ReTerminal/rpi-imager-advanced.png",alt:"pir",width:"600",height:"auto"})),(0,n.kt)("p",null,"Here you can ",(0,n.kt)("strong",{parentName:"p"},"set a hostname, enable SSH, set a password, configure wifi, set locale settings")," and more"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Step 11.")," Click ",(0,n.kt)("strong",{parentName:"li"},"CHOOSE OS")," and select your preferred OS")),(0,n.kt)("p",{style:{textAlign:"center"}},(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/ReTerminal/OS-select.png",alt:"pir",width:"600",height:"auto"})),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"NOTE:")," You can select OS such as ",(0,n.kt)("strong",{parentName:"p"},"64-bit Ubuntu")," by navigating into ",(0,n.kt)("strong",{parentName:"p"},"Other general purpose OS")),(0,n.kt)("p",{style:{textAlign:"center"}},(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/ReTerminal/Ubuntu-select.jpg",alt:"pir",width:"1000",height:"auto"})),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Step 12.")," Click ",(0,n.kt)("strong",{parentName:"p"},"CHOOSE STORAGE")," and select the connected eMMC drive")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Step 13.")," Finally, click ",(0,n.kt)("strong",{parentName:"p"},"WRITE")))),(0,n.kt)("p",{style:{textAlign:"center"}},(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/102110497/RPI_Imager_Final.png",alt:"pir",width:"600",height:"auto"})),(0,n.kt)("p",null,"Please wait a few minutes until the flashing process is complete."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Step 14.")," Flip the ",(0,n.kt)("strong",{parentName:"li"},"Boot Mode switch")," back to the original postion and assemble the reTerminal shell")))}u.isMDXComponent=!0}}]);