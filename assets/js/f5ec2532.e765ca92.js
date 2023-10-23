"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[97060],{3905:(e,t,i)=>{i.d(t,{Zo:()=>g,kt:()=>h});var n=i(67294);function o(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function a(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function r(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?a(Object(i),!0).forEach((function(t){o(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):a(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function s(e,t){if(null==e)return{};var i,n,o=function(e,t){if(null==e)return{};var i,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)i=a[n],t.indexOf(i)>=0||(o[i]=e[i]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)i=a[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(o[i]=e[i])}return o}var l=n.createContext({}),d=function(e){var t=n.useContext(l),i=t;return e&&(i="function"==typeof e?e(t):r(r({},t),e)),i},g=function(e){var t=d(e.components);return n.createElement(l.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var i=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,g=s(e,["components","mdxType","originalType","parentName"]),c=d(i),p=o,h=c["".concat(l,".").concat(p)]||c[p]||u[p]||a;return i?n.createElement(h,r(r({ref:t},g),{},{components:i})):n.createElement(h,r({ref:t},g))}));function h(e,t){var i=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=i.length,r=new Array(a);r[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:o,r[1]=s;for(var d=2;d<a;d++)r[d]=i[d];return n.createElement.apply(null,r)}return n.createElement.apply(null,i)}p.displayName="MDXCreateElement"},7862:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>c,frontMatter:()=>a,metadata:()=>s,toc:()=>d});var n=i(87462),o=(i(67294),i(3905));const a={description:"Getting Started with Ignition Edge",title:"Getting Started with Ignition Edge",keywords:["Edge","Edgebox RPI 200","Ignition Edge"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Edgebox-rpi-200-ignition-edge",last_update:{date:"10/13/2023",author:"Corey Thompson"}},r="Edgebox RPI 200 Getting Started with Ignition Edge",s={unversionedId:"Edge/Edge_Series/Edge_Box_RPi_200/Ignition_Edge/Edgebox-rpi-200-ignition-edge",id:"Edge/Edge_Series/Edge_Box_RPi_200/Ignition_Edge/Edgebox-rpi-200-ignition-edge",title:"Getting Started with Ignition Edge",description:"Getting Started with Ignition Edge",source:"@site/docs/Edge/Edge_Series/Edge_Box_RPi_200/Ignition_Edge/Edgebox-rpi-200-ignition-edge.md",sourceDirName:"Edge/Edge_Series/Edge_Box_RPi_200/Ignition_Edge",slug:"/Edgebox-rpi-200-ignition-edge",permalink:"/Edgebox-rpi-200-ignition-edge",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Edge/Edge_Series/Edge_Box_RPi_200/Ignition_Edge/Edgebox-rpi-200-ignition-edge.md",tags:[],version:"current",lastUpdatedBy:"Corey Thompson",lastUpdatedAt:1697155200,formattedLastUpdatedAt:"Oct 13, 2023",frontMatter:{description:"Getting Started with Ignition Edge",title:"Getting Started with Ignition Edge",keywords:["Edge","Edgebox RPI 200","Ignition Edge"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Edgebox-rpi-200-ignition-edge",last_update:{date:"10/13/2023",author:"Corey Thompson"}},sidebar:"ProductSidebar",previous:{title:"EdgeBox RPi 200 with N3uron",permalink:"/Edgebox-rpi-200-n3uron"},next:{title:"EdgeBox-ESP-100 Getting Start with Arduino",permalink:"/Edgebox-ESP-100-Arduino"}},l={},d=[{value:"Hardware Prerequisite",id:"hardware-prerequisite",level:2},{value:"Installing Ignition Edge",id:"installing-ignition-edge",level:2},{value:"Uninstalling",id:"uninstalling",level:3},{value:"Launching Ignition Edge Gateway For The First Time",id:"launching-ignition-edge-gateway-for-the-first-time",level:2},{value:"Launch Ignition Edge Gateway On Boot",id:"launch-ignition-edge-gateway-on-boot",level:3},{value:"Configuring Ignition Edge",id:"configuring-ignition-edge",level:2},{value:"Tech Support &amp; Product Discussion",id:"tech-support--product-discussion",level:2}],g={toc:d};function c(e){let{components:t,...i}=e;return(0,o.kt)("wrapper",(0,n.Z)({},g,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"edgebox-rpi-200-getting-started-with-ignition-edge"},"Edgebox RPI 200 Getting Started with Ignition Edge"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Capturing, processing, and visualizing critical data at the remote edge of the network can be difficult and expensive. Ignition Edge by Inductive Automation\xae is a line of limited, lightweight Ignition\xae software solutions designed specifically for devices used in the field and OEM devices at the edge of the network. With Ignition Edge, edge computing is easier and more affordable than ever, so you can extend your data collection, visualization, and system management all the way to the edge of your network."),(0,o.kt)("p",{parentName:"blockquote"},"\u2014 ",(0,o.kt)("a",{parentName:"p",href:"https://inductiveautomation.com/ignition/edge"},"inductiveautomation.com"))),(0,o.kt)("p",null,"Ignition Edge offers several products that can be mixed and matched on an edge device to create powerful solutions at the edge of the network:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Ignition Edge IIoT"),": Publish field-device data through MQTT."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Ignition Edge Panel"),": Create local HMIs for field devices."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Ignition Edge Compute"),": Add true edge computing to your network."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Ignition Edge Sync Services"),": Synchronize data from the edge of the network."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Ignition Edge EAM"),": Combine with other Edge products for central management.")),(0,o.kt)("p",null,"By embedding Ignition Edge into field and OEM devices at the edge of the network, Ignition superpowers can function even on your most remote devices. The Edgebox RPI 200 is equipped with industrial reliability and hybrid connectivity, such as Digital I/O, RS485, RS232 and powerful wireless communication capabilities such as WiFi, BLE, ","*","4G, and ","*","LoRa\xae which makes it an excellent option to host combinations of the powerful apps from the Ignition Edge collection."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"*","4G and LoRa\xae modules are not included by default, please purchase the relevant modules accordingly.")),(0,o.kt)("h2",{id:"hardware-prerequisite"},"Hardware Prerequisite"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"PC / Mac with SSH terminal capability"),(0,o.kt)("li",{parentName:"ul"},"PC / Mac with available hard drive capacity to install Ignition's Designer applciations."),(0,o.kt)("li",{parentName:"ul"},"12-24V DC power supply"),(0,o.kt)("li",{parentName:"ul"},"Ethernet cable"),(0,o.kt)("li",{parentName:"ul"},"Edgebox RPI 200 x 1")),(0,o.kt)("p",{style:{textAlign:"center"}},(0,o.kt)("img",{src:"https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-102991599_edgebox-rpi-200-first.jpg",alt:"pir",width:"600",height:"auto"})),(0,o.kt)("div",{class:"get_one_now_container",style:{textAlign:"center"}},(0,o.kt)("a",{class:"get_one_now_item",href:"https://www.seeedstudio.com/EdgeBox-RPi-200-CM4104016-p-5486.html"},(0,o.kt)("strong",null,(0,o.kt)("span",null,(0,o.kt)("font",{color:"FFFFFF",size:"4"}," Get One Now \ud83d\uddb1\ufe0f"))))),(0,o.kt)("br",null),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("em",{parentName:"p"},"This guide assumes your Edgebox is running the factory installation of SenseCraft Edge OS with SSH terminal access from another client device."))),(0,o.kt)("h2",{id:"installing-ignition-edge"},"Installing Ignition Edge"),(0,o.kt)("p",null,"To install Ignition Edge on your device is simple."),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"The default SenseCraft Edge OS is a 32-bit installation, ensure you download the proper installer.")),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Visit ",(0,o.kt)("a",{parentName:"li",href:"https://inductiveautomation.com/downloads/"},"Ignition's Download Page")),(0,o.kt)("li",{parentName:"ol"},"Download the version of the application you wish to use - you will be prompted to enter your information before you can download the package. "),(0,o.kt)("li",{parentName:"ol"},"Copy the compressed package to your edge device, where you wish it to be installed (I have chosen a location under /opt/)"),(0,o.kt)("li",{parentName:"ol"},"Extract the package at the current location"),(0,o.kt)("li",{parentName:"ol"},"Delete the leftover original package"),(0,o.kt)("li",{parentName:"ol"},"Modify permissions to execute the Ignition start script"),(0,o.kt)("li",{parentName:"ol"},"Launch the Igntion start script")),(0,o.kt)("p",null,"A convenience script has been written that automates these steps. To use it, you simply need to get the ignition edge download/install script. Once you've downloaded the script, mark it as executable and run it. You may need superuser credentials in order to create the necessary directories. Go ahead and grab a coffee, this will take a few minutes to install."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"curl -o download-ignition-edge.sh https://raw.githubusercontent.com/tulsasoftware/reterminal-ignition-edge-panel/main/download-ignition-edge.sh\nchmod +x ./download-ignition-edge.sh\n./download-ignition-edge.sh\n")),(0,o.kt)("h3",{id:"uninstalling"},"Uninstalling"),(0,o.kt)("p",null,"If you wish to uninstall the package (as installed by the installer script), simply download and execute the uninstall script. Inductive Automation does not suggest a default location for their application, so ",(0,o.kt)("em",{parentName:"p"},"this will only work for this custom installation"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"curl -o uninstall-ignition-edge.sh https://raw.githubusercontent.com/tulsasoftware/reterminal-ignition-edge-panel/main/uninstall-ignition-edge.sh\nchmod +x ./uninstall-ignition-edge.sh\n./uninstall-ignition-edge.sh\n")),(0,o.kt)("h2",{id:"launching-ignition-edge-gateway-for-the-first-time"},"Launching Ignition Edge Gateway For The First Time"),(0,o.kt)("p",null,"When the installation is complete you will need to start the service. You can ",(0,o.kt)("a",{parentName:"p",href:"#launch-ignition-edge-gateway-on-boot"},"setup the gateway to start on boot")," and perform a reboot of the device or you can choose to start the service manually."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"/opt/ignitionedge/ignition.sh start\n")),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"You can easily check if the service is running if you are able to load the Ignition Edge Gateway's home page. ")),(0,o.kt)("p",null,"To load the gateway's home page, launch a web browser either on the Edgebox itself at ",(0,o.kt)("inlineCode",{parentName:"p"},"localhost:8088")," OR from another device on the network at ",(0,o.kt)("inlineCode",{parentName:"p"},"{edgeboxhostname}:8088")," OR from anywhere on the network with the IP address of the Edgebox itself at ",(0,o.kt)("inlineCode",{parentName:"p"},"{edgeboxip}:8088")),(0,o.kt)("p",{style:{textAlign:"center"}},(0,o.kt)("img",{src:"https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/reTerminal-DM-Ignition/ignition-edge-eula-screenshot.png"})),(0,o.kt)("h3",{id:"launch-ignition-edge-gateway-on-boot"},"Launch Ignition Edge Gateway On Boot"),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"It is recommended to launch the gateway's service automatically on boot of the device. There are multiple ways this can be accomplished and it is ultimately up to the user to decide how to do this.")),(0,o.kt)("p",null,"One way to launch the service on boot is to add the launch command to your ",(0,o.kt)("inlineCode",{parentName:"p"},".bashrc"),". To do this, simply open your ",(0,o.kt)("inlineCode",{parentName:"p"},".bashrc")," in a text editor of your choice."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"nano ~/.bashrc\n")),(0,o.kt)("p",null,"Append the launch command to the the file"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"/opt/ignitionedge/ignition.sh start\n")),(0,o.kt)("p",{style:{textAlign:"center"}},(0,o.kt)("img",{alt:"Launch On Boot Setup",src:"https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/reTerminal-DM-Ignition/ignition-gateway-launch-setup.png"})),(0,o.kt)("p",null,"And don't forget to save the file!\n(",(0,o.kt)("inlineCode",{parentName:"p"},"ctrl + x")," in the example above using nano)"),(0,o.kt)("admonition",{type:"warning"},(0,o.kt)("p",{parentName:"admonition"},"This method does not launch the gateway on save, so reboot the Edgebox to ensure the change works as expected.")),(0,o.kt)("h2",{id:"configuring-ignition-edge"},"Configuring Ignition Edge"),(0,o.kt)("p",null,"Configuring the gateway is a straight-forward process. Proceed by accepting the EULA and then create a default user / password for Ignition. Remember this information as it will be created with admin credentials and be used for system configuration throughout this series."),(0,o.kt)("p",{style:{textAlign:"center"}},(0,o.kt)("img",{src:"https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/reTerminal-DM-Ignition/ignition-edge-create-user.png"})),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"Although Ignition Edge is configured by default to communicate to a master SCADA system, it is not required to use a SCADA server. Ignition Edge is a completely standalone product that is configured to easily tie into a SCADA network in the future if desired.")),(0,o.kt)("p",null,"After you have a user, you will be asked if you would like to change any of the default port configurations for the installation. I do not have a network with any conflicting ports, so I have chosen to accept the defaults. These ports will be used to communicate back to the primary SCADA installation, so if you are configuring to work with an existing installation Ignition, ensure that this page matches your expected values. Note that these are the core ports used for the application, but if you choose to install modules in the future you will likely have more ports to configure later."),(0,o.kt)("p",{style:{textAlign:"center"}},(0,o.kt)("img",{src:"https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/reTerminal-DM-Ignition/ignition-edge-configure-ports.png"})),(0,o.kt)("p",null,"You are now ready to initialize and launch the service! This takes a couple minutes to setup and does not require any interaction so you are free to check back later. It will redirect to the designer home page when it is complete and you are free to begin work!"),(0,o.kt)("p",{style:{textAlign:"center"}},(0,o.kt)("img",{src:"https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/reTerminal-DM-Ignition/ignition-edge-launch-screen.png"})),(0,o.kt)("h2",{id:"tech-support--product-discussion"},"Tech Support & Product Discussion"),(0,o.kt)("p",null,"Thank you for choosing our products! We are here to provide you with different support to ensure that your experience with our products is as smooth as possible. We offer several communication channels to cater to different preferences and needs."),(0,o.kt)("div",{class:"button_tech_support_container"},(0,o.kt)("a",{href:"https://forum.seeedstudio.com/",class:"button_forum"}),(0,o.kt)("a",{href:"https://www.seeedstudio.com/contacts",class:"button_email"})),(0,o.kt)("div",{class:"button_tech_support_container"},(0,o.kt)("a",{href:"https://discord.gg/eWkprNDMU7",class:"button_discord"}),(0,o.kt)("a",{href:"https://github.com/Seeed-Studio/wiki-documents/discussions/69",class:"button_discussion"})))}c.isMDXComponent=!0}}]);