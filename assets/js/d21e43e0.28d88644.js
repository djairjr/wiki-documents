"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[97539],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var o=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=o.createContext({}),p=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=p(e.components);return o.createElement(l.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),c=p(n),h=i,m=c["".concat(l,".").concat(h)]||c[h]||u[h]||r;return n?o.createElement(m,a(a({ref:t},d),{},{components:n})):o.createElement(m,a({ref:t},d))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,a=new Array(r);a[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:i,a[1]=s;for(var p=2;p<r;p++)a[p]=n[p];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}h.displayName="MDXCreateElement"},74320:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>p});var o=n(87462),i=(n(67294),n(3905));const r={description:"Deploy AI model with CVEDIA-RT on NVIDIA Jetson Devices",title:"Getting Started with CVEDIA-RT",tags:["AI model deploy"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/CVEDIA-Jetson-Getting-Started",last_update:{date:"03/10/2023",author:"Lakshantha"}},a="Getting Started with CVEDIA-RT on NVIDIA\xae Jetson Devices",s={unversionedId:"Edge/NVIDIA_Jetson/reComputer/Software/CVEDIA-Jetson-Getting-Started",id:"Edge/NVIDIA_Jetson/reComputer/Software/CVEDIA-Jetson-Getting-Started",title:"Getting Started with CVEDIA-RT",description:"Deploy AI model with CVEDIA-RT on NVIDIA Jetson Devices",source:"@site/docs/Edge/NVIDIA_Jetson/reComputer/Software/CVEDIA-Jetson-Getting-Started.md",sourceDirName:"Edge/NVIDIA_Jetson/reComputer/Software",slug:"/CVEDIA-Jetson-Getting-Started",permalink:"/CVEDIA-Jetson-Getting-Started",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Edge/NVIDIA_Jetson/reComputer/Software/CVEDIA-Jetson-Getting-Started.md",tags:[{label:"AI model deploy",permalink:"/tags/ai-model-deploy"}],version:"current",lastUpdatedBy:"Lakshantha",lastUpdatedAt:1678406400,formattedLastUpdatedAt:"Mar 10, 2023",frontMatter:{description:"Deploy AI model with CVEDIA-RT on NVIDIA Jetson Devices",title:"Getting Started with CVEDIA-RT",tags:["AI model deploy"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/CVEDIA-Jetson-Getting-Started",last_update:{date:"03/10/2023",author:"Lakshantha"}},sidebar:"ProductSidebar",previous:{title:"Getting started of NEQTO Engine for Linux on reComputer J30",permalink:"/neqto_engine_for_linux_recomputer"},next:{title:"Getting Started with Lumeo",permalink:"/Lumeo-Jetson-Getting-Started"}},l={},p=[{value:"Hardware Supported",id:"hardware-supported",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Download CVEDIA-RT Installer for NVIDIA Jetson",id:"download-cvedia-rt-installer-for-nvidia-jetson",level:2},{value:"Install CVEDIA-RT on NVIDIA Jetson",id:"install-cvedia-rt-on-nvidia-jetson",level:2},{value:"Run CVEDIA-RT on NVIDIA Jetson",id:"run-cvedia-rt-on-nvidia-jetson",level:2},{value:"Explore the pre-loaded applications",id:"explore-the-pre-loaded-applications",level:2},{value:"Learn more",id:"learn-more",level:2},{value:"Tech Support &amp; Product Discussion",id:"tech-support--product-discussion",level:2}],d={toc:p},c="wrapper";function u(e){let{components:t,...n}=e;return(0,i.kt)(c,(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"getting-started-with-cvedia-rt-on-nvidia-jetson-devices"},"Getting Started with CVEDIA-RT on NVIDIA\xae Jetson Devices"),(0,i.kt)("div",{style:{textAlign:"center"}},(0,i.kt)("img",{src:"https://files.seeedstudio.com/wiki/CVEDIA/thumb.gif",style:{width:1e3,height:"auto"}})),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://www.cvedia.com/cvedia-rt"},"CVEDIA-RT")," is a modular, cross-platform AI inference engine that provides the solid foundations for building decision support systems. It's designed from the ground-up with developers and integrators in mind, providing both high and low-level interfaces."),(0,i.kt)("p",null,"This wiki will walkthrough how you can easily install CVEDIA-RT on the NVIDIA Jetson platform and start building exciting applications."),(0,i.kt)("h2",{id:"hardware-supported"},"Hardware Supported"),(0,i.kt)("p",null,"CVEDIA-RT is supported by the following platforms:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Windows"),(0,i.kt)("li",{parentName:"ul"},"Linux "),(0,i.kt)("li",{parentName:"ul"},"NVIDIA Jetson"),(0,i.kt)("li",{parentName:"ul"},"Ambarella")),(0,i.kt)("p",null,"However, in this wiki we will only focus on how to deploy CVEDIA-RT on the NVIDIA Jetson platform."),(0,i.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"NVIDIA Jetson device running NVIDIA JetPack with all SDK components installed and connected to the internet"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"We have tested this wiki with ",(0,i.kt)("a",{parentName:"li",href:"https://www.seeedstudio.com/reComputer-J4012-p-5586.html"},"reComputer J4012")," running ",(0,i.kt)("a",{parentName:"li",href:"https://developer.nvidia.com/embedded/jetpack-sdk-51"},"JetPack 5.1")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Host PC with Windows, Linux or Mac and connected to the internet"))),(0,i.kt)("h2",{id:"download-cvedia-rt-installer-for-nvidia-jetson"},"Download CVEDIA-RT Installer for NVIDIA Jetson"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Step 1:")," Visit ",(0,i.kt)("a",{parentName:"p",href:"https://rt.cvedia.com/"},"this page")," and click ",(0,i.kt)("strong",{parentName:"p"},"Sign in")," "),(0,i.kt)("div",{align:"center"},(0,i.kt)("img",{width:500,src:"https://files.seeedstudio.com/wiki/CVEDIA/10.png"})),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Step 2:")," Sign up for a new CVEDIA account or sign in with your Google account"),(0,i.kt)("div",{align:"center"},(0,i.kt)("img",{width:300,src:"https://files.seeedstudio.com/wiki/CVEDIA/14.png"})),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Step 3:")," Click ",(0,i.kt)("strong",{parentName:"p"},"Download")," under ",(0,i.kt)("strong",{parentName:"p"},"NVIDIA Jetson")),(0,i.kt)("div",{align:"center"},(0,i.kt)("img",{width:500,src:"https://files.seeedstudio.com/wiki/CVEDIA/12.jpg"})),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Step 4:")," Click ",(0,i.kt)("strong",{parentName:"p"},"Docker(Recommended)")," to download tar.gz file which includes the CVEDIA-RT installer "),(0,i.kt)("div",{align:"center"},(0,i.kt)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/CVEDIA/13.png"})),(0,i.kt)("h2",{id:"install-cvedia-rt-on-nvidia-jetson"},"Install CVEDIA-RT on NVIDIA Jetson"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Step 1:")," Move the file that you downloaded before to a new folder on the Jetson device and extract it by executing"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"tar -xzvf <filename.tar.gz>\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Step 2:")," Inside the extracted folder on the Jetson device, run the installer script"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"sudo ./install.sh\n")),(0,i.kt)("p",null,"Respond to the prompts in the installer script according to your needs"),(0,i.kt)("h2",{id:"run-cvedia-rt-on-nvidia-jetson"},"Run CVEDIA-RT on NVIDIA Jetson"),(0,i.kt)("p",null,"Run the application"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"./run.sh\n")),(0,i.kt)("p",null,"Now you will see CVEDIA-RT application opened as follows and it already comes pre-loaded with many different applications out-of-the-box such as:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Crowd estimation"),(0,i.kt)("li",{parentName:"ul"},"Drone detection"),(0,i.kt)("li",{parentName:"ul"},"Fall detection"),(0,i.kt)("li",{parentName:"ul"},"Lane occupancy"),(0,i.kt)("li",{parentName:"ul"},"Vehicle type counter"),(0,i.kt)("li",{parentName:"ul"},"Package detection and more! ")),(0,i.kt)("div",{align:"center"},(0,i.kt)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/CVEDIA/15.png"})),(0,i.kt)("p",null,"If you want to run CVEDIA-RT locally without an internet connection, run as follows"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"./run.sh -U\n")),(0,i.kt)("p",null,"However, you need to run a specific application at least once with internet so that the necessary files and models are downloaded"),(0,i.kt)("h2",{id:"explore-the-pre-loaded-applications"},"Explore the pre-loaded applications"),(0,i.kt)("p",null,"Now we will explore a couple of application which comes out-of-the-box and how you can configure them"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Step 1:"),"  Click on ",(0,i.kt)("strong",{parentName:"p"},"intelligent-transportation-systems")," and click the run button next to the ",(0,i.kt)("strong",{parentName:"p"},"lane-occupancy")," solution"),(0,i.kt)("div",{align:"center"},(0,i.kt)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/CVEDIA/2.jpg"})),(0,i.kt)("p",null,"Now it will download the necessary files such as the model file, config file, example video file and start the demo. Here you will see zones drawn according to the lanes and each zone indicating how many vehicles are inside that particular zone. "),(0,i.kt)("div",{align:"center"},(0,i.kt)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/CVEDIA/lane-GIF.gif"})),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Step 2:")," Change settings according to your preference inside the application such as turning ON/OFF bounding boxes and labels, changing zones, zone colors and more"),(0,i.kt)("div",{align:"center"},(0,i.kt)("img",{width:350,src:"https://files.seeedstudio.com/wiki/CVEDIA/3.jpg"})),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Step 3:")," STOP or PAUSE the demo using the two icons next to ",(0,i.kt)("strong",{parentName:"p"},"lane-occupancy")),(0,i.kt)("div",{align:"center"},(0,i.kt)("img",{width:300,src:"https://files.seeedstudio.com/wiki/CVEDIA/4.jpg"})),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Step 4:")," Click the gear icon next to ",(0,i.kt)("strong",{parentName:"p"},"lane-occupancy"),", click ",(0,i.kt)("strong",{parentName:"p"},"Edit Source")," to change the video stream according to your preference"),(0,i.kt)("div",{align:"center"},(0,i.kt)("img",{width:550,src:"https://files.seeedstudio.com/wiki/CVEDIA/5.jpg"})),(0,i.kt)("p",null,"Here you have multiple options to choose from"),(0,i.kt)("div",{align:"center"},(0,i.kt)("img",{width:400,src:"https://files.seeedstudio.com/wiki/CVEDIA/6.jpg"})),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Step 5:")," Once you select your desired video source, you can click ",(0,i.kt)("strong",{parentName:"p"},"Save Instance")," to run the application with the video source you have selected"),(0,i.kt)("div",{align:"center"},(0,i.kt)("img",{width:350,src:"https://files.seeedstudio.com/wiki/CVEDIA/7.jpg"})),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Note:")," Make sure to stop the application and run again for the changes to take into effect"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Step 6:")," Similarly, you can navigate to another solution such as ",(0,i.kt)("strong",{parentName:"p"},"people_walking")," under ",(0,i.kt)("strong",{parentName:"p"},"crowd-estimation")," and click the play button to run the solution"),(0,i.kt)("div",{align:"center"},(0,i.kt)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/CVEDIA/Crowd-GIF-small.gif"})),(0,i.kt)("p",null,"Here you can configure further settings and change the video stream just like the previous solution mentioned"),(0,i.kt)("div",{align:"center"},(0,i.kt)("img",{width:180,src:"https://files.seeedstudio.com/wiki/CVEDIA/9.jpg"})),(0,i.kt)("h2",{id:"learn-more"},"Learn more"),(0,i.kt)("p",null,"CVEDIA-RT offers very detailed and comprehensive documentation. So it is highly recommended to check them ",(0,i.kt)("a",{parentName:"p",href:"http://docs.cvedia.com"},"here"),"."),(0,i.kt)("h2",{id:"tech-support--product-discussion"},"Tech Support & Product Discussion"),(0,i.kt)("p",null,"Thank you for choosing our products! We are here to provide you with different support to ensure that your experience with our products is as smooth as possible. We offer several communication channels to cater to different preferences and needs."),(0,i.kt)("div",{class:"button_tech_support_container"},(0,i.kt)("a",{href:"https://forum.seeedstudio.com/",class:"button_forum"}),(0,i.kt)("a",{href:"https://www.seeedstudio.com/contacts",class:"button_email"})),(0,i.kt)("div",{class:"button_tech_support_container"},(0,i.kt)("a",{href:"https://discord.gg/eWkprNDMU7",class:"button_discord"}),(0,i.kt)("a",{href:"https://github.com/Seeed-Studio/wiki-documents/discussions/69",class:"button_discussion"})))}u.isMDXComponent=!0}}]);