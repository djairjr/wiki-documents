"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[53185],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=a.createContext({}),p=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(i.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(n),d=o,h=c["".concat(i,".").concat(d)]||c[d]||m[d]||r;return n?a.createElement(h,s(s({ref:t},u),{},{components:n})):a.createElement(h,s({ref:t},u))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,s=new Array(r);s[0]=d;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[c]="string"==typeof e?e:o,s[1]=l;for(var p=2;p<r;p++)s[p]=n[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},21635:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>c,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var a=n(87462),o=(n(67294),n(3905));const r={description:"SenseCAP M2 Data Only Local Console",title:"SenseCAP M2 Data Only Local Console",keywords:["SenseCAP Network"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",last_update:{date:"02/14/2023",author:"Matthew"}},s="**How to access the Local Console**",l={unversionedId:"Network/SenseCAP_Network/SenseCAP_M2_Data_Only-Helium_gateway/M2_Local_Console",id:"Network/SenseCAP_Network/SenseCAP_M2_Data_Only-Helium_gateway/M2_Local_Console",title:"SenseCAP M2 Data Only Local Console",description:"SenseCAP M2 Data Only Local Console",source:"@site/docs/Network/SenseCAP_Network/SenseCAP_M2_Data_Only-Helium_gateway/M2_Local_Console.md",sourceDirName:"Network/SenseCAP_Network/SenseCAP_M2_Data_Only-Helium_gateway",slug:"/Network/SenseCAP_Network/SenseCAP_M2_Data_Only-Helium_gateway/M2_Local_Console",permalink:"/zh-CN/Network/SenseCAP_Network/SenseCAP_M2_Data_Only-Helium_gateway/M2_Local_Console",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Network/SenseCAP_Network/SenseCAP_M2_Data_Only-Helium_gateway/M2_Local_Console.md",tags:[],version:"current",lastUpdatedBy:"Matthew",lastUpdatedAt:1676332800,formattedLastUpdatedAt:"2023\u5e742\u670814\u65e5",frontMatter:{description:"SenseCAP M2 Data Only Local Console",title:"SenseCAP M2 Data Only Local Console",keywords:["SenseCAP Network"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",last_update:{date:"02/14/2023",author:"Matthew"}},sidebar:"ProductSidebar",previous:{title:"SenseCAP M2 Data Only Quick Start",permalink:"/zh-CN/Network/SenseCAP_Network/SenseCAP_M2_Data_Only-Helium_gateway/SenseCAP_M2_Data_Only_Quick_Start"},next:{title:"SenseCAP M2 Light Gateway Overview",permalink:"/zh-CN/Network/SenseCAP_Network/SenseCAP_M2_Light_Gateway/SenseCAP_M2_Light_Gateway_Overview"}},i={},p=[{value:"<strong>Access via router</strong>",id:"access-via-router",level:2},{value:"<strong>Access via device AP hotspot</strong>",id:"access-via-device-ap-hotspot",level:2},{value:"<strong>System and Time</strong>",id:"system-and-time",level:2},{value:"<strong>Breathing Light</strong>",id:"breathing-light",level:2},{value:"<strong>Region</strong>",id:"region",level:2},{value:"<strong>LuCi Password</strong>",id:"luci-password",level:2},{value:"<strong>Restore Factory Defaults</strong>",id:"restore-factory-defaults",level:2},{value:"<strong>Reboot</strong>",id:"reboot",level:2},{value:"<strong>Interfaces</strong>",id:"interfaces",level:2},{value:"<strong>Wireless</strong>",id:"wireless",level:2},{value:"<strong>MultiWan</strong>",id:"multiwan",level:2},{value:"<strong>Diagnostics</strong>",id:"diagnostics",level:2}],u={toc:p};function c(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"how-to-access-the-local-console"},(0,o.kt)("strong",{parentName:"h1"},"How to access the Local Console")),(0,o.kt)("p",null,"There are two ways to access the Local Console."),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"access-via-router"},(0,o.kt)("strong",{parentName:"h2"},"Access via router")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Step 1"),": Connect your computer and Hotspot to the same router.")),(0,o.kt)("p",null,"You can connect the device to the router via a network cable\uff0c or you can set up the WI-FI connection via SenseCAP Hotspot APP."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Note"),": Your computer and device should be connected to the same router/network."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://www.sensecapmx.com/wp-content/uploads/2022/07/image-3.png",alt:"SenseCAP M2 Local Console Step 1"})),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Step 2"),": Get IP Address of your device")),(0,o.kt)("p",null,"If you do not have an account of SenseCAP MX Dashboard, or haven't added your device to the Dashboard, please find the IP Address of your device on your router admin page, or run diagnostic on your Helium APP to get the IP Address."),(0,o.kt)("p",null,"If you already have registered an account of SenseCAP MX Dashboard and added your device, you can find your device IP Address from the dashboard:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"If you are connected via Wi-Fi, you will see the device's Wi-Fi IP address to click."),(0,o.kt)("li",{parentName:"ul"},"If you are connected via Ethernet cable or local LAN, you will see the device LAN address to click."))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Step 3"),": Get your device Username and Password"))),(0,o.kt)("p",null,"Get the Username and Password from the information on the back of the device."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"For security reasons, each device has a unique password. After logging in, you can change the password.")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://www.sensecapmx.com/wp-content/uploads/2022/07/image-4.png",alt:"SenseCAP M2 Local Console Step 3"})),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Step 4"),": Open the browser on the pc and log in")),(0,o.kt)("p",null,"Input the IP Address(you get) in a browser to enter the Local Console. Then input your device username and password, and click the Login button."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://www.sensecapmx.com/wp-content/uploads/2022/07/login.png",alt:"SenseCAP M2 Local Console Login"})),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"access-via-device-ap-hotspot"},(0,o.kt)("strong",{parentName:"h2"},"Access via device AP hotspot")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Step 1"),": Turn on the device AP hotspot")),(0,o.kt)("p",null,"Press the button for 5s until the blue indicator flashes slowly to enter configuration mode."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Step 2"),": Connect to the AP hotspot")),(0,o.kt)("p",null,"AP hotspot name is SenseCAP","_","XXXXXX (6-figure MAC address), Connect your computer to this AP hotspot."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Step 3"),": Get your device Username and Password"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Step 4"),": Open the browser on the pc and log in")),(0,o.kt)("p",null,"Input the IP Address (",(0,o.kt)("strong",{parentName:"p"},"192.168.168.1"),")\xa0 in a browser to enter the Local Console. Then input your device username and password, and click the Login button."),(0,o.kt)("hr",null),(0,o.kt)("h1",{id:"status"},(0,o.kt)("strong",{parentName:"h1"},"Status")),(0,o.kt)("p",null,"In the home page, there are mainly some status displays, such as network connection, LoRa packets sent and received, system information, memory usage, etc."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"NOTE:")," You will need to wait a while for the full message to appear."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://www.sensecapmx.com/wp-content/uploads/2022/07/image-5.png",alt:"SenseCAP M2 Local Console Guide"})),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"NOTE:"),"\xa0In the Lora Packets histogram, not necessarily valid Helium Packets Network."),(0,o.kt)("p",null,"In the system information, you can see the version of the helium program, the address of hotspots, and the region parameter currently in use."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://www.sensecapmx.com/wp-content/uploads/2022/07/system.png",alt:"SenseCAP M2 Local Console Guide Region"})),(0,o.kt)("hr",null),(0,o.kt)("h1",{id:"system"},(0,o.kt)("strong",{parentName:"h1"},"System")),(0,o.kt)("h2",{id:"system-and-time"},(0,o.kt)("strong",{parentName:"h2"},"System and Time")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("em",{parentName:"li"},"Page Path"),"\uff1aSystem -> System")),(0,o.kt)("p",null,"Here you can configure the fundamental aspects of your device like its hostname or the time zone. and You can modify the time synchronization configuration. Of course, in general, you don't have to change anything on this page."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://www.sensecapmx.com/wp-content/uploads/2022/07/time.png",alt:"SenseCAP M2 Local Console Guide Time"})),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"breathing-light"},(0,o.kt)("strong",{parentName:"h2"},"Breathing Light")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("em",{parentName:"li"},"Page Path"),"\uff1a System -> Breathing Light")),(0,o.kt)("p",null,"Breathing Light is a hotspot device indicator, you can configure the behavior of the light."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://www.sensecapmx.com/wp-content/uploads/2022/07/breathing-light.png",alt:"SenseCAP M2 Local Console Guide Breathing Light"})),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"region"},(0,o.kt)("strong",{parentName:"h2"},"Region")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("em",{parentName:"li"},"Page Path"),"\uff1aSystem -> Region")),(0,o.kt)("p",null,"Here you can change the region parameter. The factory default is \u2018AUTO\u2019, which means\uff1a"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"If you do not have an asserted location for the hotspot, the region used is based on your hotspot type, for example, the device model M2-EU868 uses the region EU868."),(0,o.kt)("li",{parentName:"ul"},"If you have asserted location on the hotspot, Automatic adjustment of the region according to location.")),(0,o.kt)("p",null,"In general, you do not need to set a region. In special cases: If you do not have an asserted location for a hotspot( Data-Only)\uff0c you can choose another region. For example, the device model of M2-US915 can be set to AU915 in Australia."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://www.sensecapmx.com/wp-content/uploads/2022/07/region.png",alt:"SenseCAP M2 Local Console Guide Breathing Region Config"})),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"NOTE:")," If you have asserted location on the hotspot, The Region config MUST be ",(0,o.kt)("strong",{parentName:"p"},"AUTO"),"."),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"luci-password"},(0,o.kt)("strong",{parentName:"h2"},"LuCi Password")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Page Path"),"\uff1aSystem -> Administration")),(0,o.kt)("p",null,"Here you can change the LuCi Password."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://www.sensecapmx.com/wp-content/uploads/2022/07/change-password.png",alt:"SenseCAP M2 Local Console Guide Breathing LuCi Password"})),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"restore-factory-defaults"},(0,o.kt)("strong",{parentName:"h2"},"Restore Factory Defaults")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("em",{parentName:"li"},"Page Path"),"\uff1aSystem -> Firmware")),(0,o.kt)("p",null,"You can recover your LuCi password by restoring the factory settings if you have forgotten it. However, after restoring the factory settings, the device will be updated again."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://www.sensecapmx.com/wp-content/uploads/2022/07/change-password.png",alt:"SenseCAP M2 Local Console Guide Breathing LuCi Password"})),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"reboot"},(0,o.kt)("strong",{parentName:"h2"},"Reboot")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("em",{parentName:"li"},"Page Path"),"\uff1aSystem -> Reboot")),(0,o.kt)("p",null,"You can reset the device here or configure a timed reset of the device."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://www.sensecapmx.com/wp-content/uploads/2022/07/reboot.png",alt:"SenseCAP M2 Local Console Reboot"})),(0,o.kt)("hr",null),(0,o.kt)("h1",{id:"network"},(0,o.kt)("strong",{parentName:"h1"},"Network")),(0,o.kt)("h2",{id:"interfaces"},(0,o.kt)("strong",{parentName:"h2"},"Interfaces")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("em",{parentName:"li"},"Page Path"),"\uff1a Network -> Interfaces")),(0,o.kt)("p",null,'You can get information about the network interface here. LAN IP default is "192.168.168.1". When your router\'s gateway IP is also this, you need to change the LAN IP of the device.'),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://www.sensecapmx.com/wp-content/uploads/2022/07/network_interface.png",alt:"SenseCAP M2 Local Console Guide Network Interface"})),(0,o.kt)("h2",{id:"wireless"},(0,o.kt)("strong",{parentName:"h2"},"Wireless")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("em",{parentName:"li"},"Page Path"),"\uff1a Network -> Wireless")),(0,o.kt)("p",null,"You can connect to Wi-Fi here. The steps below:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Step 1"),": Click the '",(0,o.kt)("strong",{parentName:"li"},"scan"),"' button to scan for Wi-Fi in your area.")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://www.sensecapmx.com/wp-content/uploads/2022/07/wireless_home.png",alt:"SenseCAP M2 Local Console Guide Network Interface Wireless"})),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Step 2"),":\xa0 Select your WI-FI to join the network.")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://www.sensecapmx.com/wp-content/uploads/2022/07/wifi_join.png",alt:"SenseCAP M2 Local Console Guide Network Interface Wifi"})),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Step 3"),": Input your Wi-Fi password, then submit and save.")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://www.sensecapmx.com/wp-content/uploads/2022/07/wifi_submit.png",alt:"SenseCAP M2 Local Console Guide Network Interface Wifi Guide"})),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://www.sensecapmx.com/wp-content/uploads/2022/07/wifi_save.png",alt:"SenseCAP M2 Local Console Guide Network Interface Wifi Save"})),(0,o.kt)("p",null,"In a few moments, you will be able to connect to WiFi, as you can see in the interface page."),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"multiwan"},(0,o.kt)("strong",{parentName:"h2"},"MultiWan")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("em",{parentName:"li"},"Page Path"),"\uff1a Network -> MultiWan")),(0,o.kt)("p",null,"Here you can see the priority and status of the network interfaces. MultiWAN priority is: wan(ETH) > wwan(Wi-Fi) > wwan0 (4G","*",")."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://www.sensecapmx.com/wp-content/uploads/2022/07/multiwan.png",alt:"SenseCAP M2 Local Console Guide Network Interface MultiWan"})),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"diagnostics"},(0,o.kt)("strong",{parentName:"h2"},"Diagnostics")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("em",{parentName:"li"},"Page Path"),"\uff1aNetwork -> Diagnostics")),(0,o.kt)("p",null,"Here you can measure the speed of your Internet connection."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://www.sensecapmx.com/wp-content/uploads/2022/07/network_test.png",alt:"SenseCAP M2 Local Console Guide Network Interface Network Test"})))}c.isMDXComponent=!0}}]);