"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[41982],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>h});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=n.createContext({}),p=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},m=function(e){var t=p(e.components);return n.createElement(i.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),u=p(a),d=r,h=u["".concat(i,".").concat(d)]||u[d]||c[d]||l;return a?n.createElement(h,o(o({ref:t},m),{},{components:a})):n.createElement(h,o({ref:t},m))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,o=new Array(l);o[0]=d;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[u]="string"==typeof e?e:r,o[1]=s;for(var p=2;p<l;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},89906:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>s,toc:()=>p});var n=a(87462),r=(a(67294),a(3905));const l={description:"Deploy YOLOv8 on NVIDIA Jetson using TensorRT and DeepStream SDK - Data Label, AI Model Train, AI Model Deploy",title:"Deploy YOLOv8 with TensorRT and DeepStream SDK",tags:["Data Label","AI model train","AI model deploy","Yolov8"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/YOLOv8-DeepStream-TRT-Jetson",last_update:{date:"04/21/2023",author:"Lakshantha"}},o="Deploy YOLOv8 on NVIDIA Jetson using TensorRT and DeepStream SDK Support",s={unversionedId:"Edge/NVIDIA_Jetson/reComputer/Software/YOLOv8-DeepStream-TRT-Jetson",id:"Edge/NVIDIA_Jetson/reComputer/Software/YOLOv8-DeepStream-TRT-Jetson",title:"Deploy YOLOv8 with TensorRT and DeepStream SDK",description:"Deploy YOLOv8 on NVIDIA Jetson using TensorRT and DeepStream SDK - Data Label, AI Model Train, AI Model Deploy",source:"@site/docs/Edge/NVIDIA_Jetson/reComputer/Software/YOLOv8-DeepStream-TRT-Jetson.md",sourceDirName:"Edge/NVIDIA_Jetson/reComputer/Software",slug:"/YOLOv8-DeepStream-TRT-Jetson",permalink:"/YOLOv8-DeepStream-TRT-Jetson",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Edge/NVIDIA_Jetson/reComputer/Software/YOLOv8-DeepStream-TRT-Jetson.md",tags:[{label:"Data Label",permalink:"/tags/data-label"},{label:"AI model train",permalink:"/tags/ai-model-train"},{label:"AI model deploy",permalink:"/tags/ai-model-deploy"},{label:"Yolov8",permalink:"/tags/yolov-8"}],version:"current",lastUpdatedBy:"Lakshantha",lastUpdatedAt:1682035200,formattedLastUpdatedAt:"Apr 21, 2023",frontMatter:{description:"Deploy YOLOv8 on NVIDIA Jetson using TensorRT and DeepStream SDK - Data Label, AI Model Train, AI Model Deploy",title:"Deploy YOLOv8 with TensorRT and DeepStream SDK",tags:["Data Label","AI model train","AI model deploy","Yolov8"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/YOLOv8-DeepStream-TRT-Jetson",last_update:{date:"04/21/2023",author:"Lakshantha"}},sidebar:"ProductSidebar",previous:{title:"Getting started with Yolov5 and roboflow",permalink:"/YOLOv5-Object-Detection-Jetson"},next:{title:"Deploy YOLOv8 with TensorRT",permalink:"/YOLOv8-TRT-Jetson"}},i={},p=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"DeepStream Version Corresponsing to JetPack Version",id:"deepstream-version-corresponsing-to-jetpack-version",level:2},{value:"Flash JetPack to Jetson",id:"flash-jetpack-to-jetson",level:2},{value:"Install DeepStream",id:"install-deepstream",level:2},{value:"Install Necessary Packages",id:"install-necessary-packages",level:2},{value:"Install PyTorch and Torchvision",id:"install-pytorch-and-torchvision",level:2},{value:"DeepStream Configuration for YOLOv8",id:"deepstream-configuration-for-yolov8",level:2},{value:"Run the Inference",id:"run-the-inference",level:2},{value:"INT8 Calibration",id:"int8-calibration",level:2},{value:"Multistream Configuration",id:"multistream-configuration",level:2},{value:"trtexec Tool",id:"trtexec-tool",level:2},{value:"YOLOv8 Benchmark Results",id:"yolov8-benchmark-results",level:2},{value:"Multistream Model Benchmarks",id:"multistream-model-benchmarks",level:2},{value:"Resources",id:"resources",level:2},{value:"Tech Support &amp; Product Discussion",id:"tech-support--product-discussion",level:2}],m={toc:p};function u(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"deploy-yolov8-on-nvidia-jetson-using-tensorrt-and-deepstream-sdk-support"},"Deploy YOLOv8 on NVIDIA Jetson using TensorRT and DeepStream SDK Support"),(0,r.kt)("p",null,"This guide explains how to deploy a trained AI model into NVIDIA Jetson Platform and perform inference using TensorRT and DeepStream SDK. Here we use TensorRT to maximize the inference performance on the Jetson platform."),(0,r.kt)("div",{style:{textAlign:"center"}},(0,r.kt)("img",{src:"https://files.seeedstudio.com/wiki/YOLOV8/car.gif",style:{width:1e3,height:"auto"}})),(0,r.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Ubuntu Host PC (native or VM using VMware Workstation Player)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.seeedstudio.com/reComputer-J4012-p-5586.html"},"reComputer Jetson")," or any other NVIDIA Jetson device running JetPack 4.6 or higher")),(0,r.kt)("h2",{id:"deepstream-version-corresponsing-to-jetpack-version"},"DeepStream Version Corresponsing to JetPack Version"),(0,r.kt)("p",null,"For YOLOv8 to work together with DeepStream, we are using this ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/marcoslucianops/DeepStream-Yolo"},"DeepStram-YOLO")," repository and it supports different versions of DeepStream. So make sure to use the correct version of JetPack according to the correct version of DeepStream."),(0,r.kt)("table",null,(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,"DeepStream Version"),(0,r.kt)("th",null,"JetPack Version"))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",{rowSpan:2},"6.2"),(0,r.kt)("td",null,"5.1.1")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"5.1")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"6.1.1"),(0,r.kt)("td",null,"5.0.2")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"6.1"),(0,r.kt)("td",null,"5.0.1 DP")),(0,r.kt)("tr",null,(0,r.kt)("td",{rowSpan:3},"6.0.1"),(0,r.kt)("td",null,"4.6.3")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"4.6.2")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"4.6.1")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"6.0"),(0,r.kt)("td",null,"4.6")))),(0,r.kt)("p",null,"To verify this wiki, we have installed ",(0,r.kt)("strong",{parentName:"p"},"DeepStream SDK 6.2")," on a ",(0,r.kt)("strong",{parentName:"p"},"JetPack 5.1.1")," system running on ",(0,r.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/reComputer-J4012-p-5586.html"},"reComputer J4012"),"."),(0,r.kt)("h2",{id:"flash-jetpack-to-jetson"},"Flash JetPack to Jetson"),(0,r.kt)("p",null,"Now you need to make sure that the Jetson device is flashed with a ",(0,r.kt)("a",{parentName:"p",href:"https://developer.nvidia.com/embedded/jetpack"},"JetPack")," system including SDK components such as CUDA, TensorRT, cuDNN and more. You can either use NVIDIA SDK Manager or command-line to flash JetPack to the device."),(0,r.kt)("p",null,"For Seeed Jetson-powered devices flashing guides, please refer to the below links:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://wiki.seeedstudio.com/reComputer_J1010_J101_Flash_Jetpack"},"reComputer J1010 | J101")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://wiki.seeedstudio.com/reComputer_J2021_J202_Flash_Jetpack"},"reComputer J2021 | J202")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://wiki.seeedstudio.com/reComputer_J1020_A206_Flash_JetPack"},"reComputer J1020 | A206")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://wiki.seeedstudio.com/reComputer_J4012_Flash_Jetpack"},"reComputer J4012 | J401")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://wiki.seeedstudio.com/reComputer_A203_Flash_System"},"A203 Carrier Board")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://wiki.seeedstudio.com/reComputer_A205_Flash_System"},"A205 Carrier Board")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://wiki.seeedstudio.com/Jetson_Xavier_AGX_H01_Driver_Installation"},"Jetson Xavier AGX H01 Kit")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://wiki.seeedstudio.com/Jetson_AGX_Orin_32GB_H01_Flash_Jetpack"},"Jetson AGX Orin 32GB H01 Kit"))),(0,r.kt)("h2",{id:"install-deepstream"},"Install DeepStream"),(0,r.kt)("p",null,"There are multiple ways of installing DeepStream to the Jetson device. You can follow ",(0,r.kt)("a",{parentName:"p",href:"https://docs.nvidia.com/metropolis/deepstream/dev-guide/text/DS_Quickstart.html"},"this guide")," to learn more. However, we recommend you to install DeepStream via the SDK Manager because it can guarantee for a successful and easy installation."),(0,r.kt)("p",null,"If you install DeepStream using SDK manager, you need to execute the below commands which are additional dependencies for DeepStream, after the system boots up"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"sudo apt install \\\nlibssl1.1 \\\nlibgstreamer1.0-0 \\\ngstreamer1.0-tools \\\ngstreamer1.0-plugins-good \\\ngstreamer1.0-plugins-bad \\\ngstreamer1.0-plugins-ugly \\\ngstreamer1.0-libav \\\nlibgstreamer-plugins-base1.0-dev \\\nlibgstrtspserver-1.0-0 \\\nlibjansson4 \\\nlibyaml-cpp-dev\n")),(0,r.kt)("h2",{id:"install-necessary-packages"},"Install Necessary Packages"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Step 1.")," Access the terminal of Jetson device, install pip and upgrade it")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"sudo apt update\nsudo apt install -y python3-pip\npip3 install --upgrade pip\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Step 2.")," Clone the following repo")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"git clone https://github.com/ultralytics/ultralytics.git\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Step 3.")," Open requirements.txt")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"cd ultralytics\nvi requirements.txt\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Step 4.")," Edit the following lines. Here you need to press ",(0,r.kt)("inlineCode",{parentName:"li"},"i")," first to enter editing mode. Press ",(0,r.kt)("inlineCode",{parentName:"li"},"ESC"),", then type ",(0,r.kt)("inlineCode",{parentName:"li"},":wq")," to save and quit")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"# torch>=1.7.0\n# torchvision>=0.8.1\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Note:")," torch and torchvision are excluded for now because they will be installed later."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Step 5.")," Install the necessary packages")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"pip3 install -r requirements.txt\n")),(0,r.kt)("p",null,"If the installer complains about outdated ",(0,r.kt)("strong",{parentName:"p"},"python-dateutil")," package, upgrade it by"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"pip3 install python-dateutil --upgrade\n")),(0,r.kt)("h2",{id:"install-pytorch-and-torchvision"},"Install PyTorch and Torchvision"),(0,r.kt)("p",null,"We cannot install PyTorch and Torchvision from pip because they are not compatible to run on Jetson platform which is based on ",(0,r.kt)("strong",{parentName:"p"},"ARM aarch64 architecture"),". Therefore we need to manually install pre-built PyTorch pip wheel and compile/ install Torchvision from source."),(0,r.kt)("p",null,"Visit ",(0,r.kt)("a",{parentName:"p",href:"https://forums.developer.nvidia.com/t/pytorch-for-jetson"},"this page")," to access all the PyTorch and Torchvision links."),(0,r.kt)("p",null,"Here are some of the versions supported by JetPack 5.0 and above."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"PyTorch v1.11.0")),(0,r.kt)("p",null,"Supported by JetPack 5.0 (L4T R34.1.0) / JetPack 5.0.1 (L4T R34.1.1) / JetPack 5.0.2 (L4T R35.1.0) with Python 3.8"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"file_name:")," torch-1.11.0-cp38-cp38-linux_aarch64.whl\n",(0,r.kt)("strong",{parentName:"p"},"URL:")," ",(0,r.kt)("a",{parentName:"p",href:"https://nvidia.box.com/shared/static/ssf2v7pf5i245fk4i0q926hy4imzs2ph.whl"},"https://nvidia.box.com/shared/static/ssf2v7pf5i245fk4i0q926hy4imzs2ph.whl")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"PyTorch v1.12.0")),(0,r.kt)("p",null,"Supported by JetPack 5.0 (L4T R34.1.0) / JetPack 5.0.1 (L4T R34.1.1) / JetPack 5.0.2 (L4T R35.1.0) with Python 3.8"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"file_name:")," torch-1.12.0a0+2c916ef.nv22.3-cp38-cp38-linux_aarch64.whl\n",(0,r.kt)("strong",{parentName:"p"},"URL:")," ",(0,r.kt)("a",{parentName:"p",href:"https://developer.download.nvidia.com/compute/redist/jp/v50/pytorch/torch-1.12.0a0+2c916ef.nv22.3-cp38-cp38-linux_aarch64.whl"},"https://developer.download.nvidia.com/compute/redist/jp/v50/pytorch/torch-1.12.0a0+2c916ef.nv22.3-cp38-cp38-linux_aarch64.whl")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Step 1.")," Install torch according to your JetPack version in the following format")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"wget <URL> -O <file_name>\npip3 install <file_name>\n")),(0,r.kt)("p",null,"For example, here we are running ",(0,r.kt)("strong",{parentName:"p"},"JP5.0.2")," and therefore we choose ",(0,r.kt)("strong",{parentName:"p"},"PyTorch v1.12.0")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"sudo apt-get install -y libopenblas-base libopenmpi-dev\nwget https://developer.download.nvidia.com/compute/redist/jp/v50/pytorch/torch-1.12.0a0+2c916ef.nv22.3-cp38-cp38-linux_aarch64.whl -O torch-1.12.0a0+2c916ef.nv22.3-cp38-cp38-linux_aarch64.whl\npip3 install torch-1.12.0a0+2c916ef.nv22.3-cp38-cp38-linux_aarch64.whl\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Step 2.")," Install torchvision depending on the version of PyTorch that you have installed. For example, we chose PyTorch v1.12.0, which means, we need to choose Torchvision v0.13.0")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"sudo apt install -y libjpeg-dev zlib1g-dev\ngit clone --branch v0.13.0 https://github.com/pytorch/vision torchvision\ncd torchvision\npython3 setup.py install --user\n")),(0,r.kt)("p",null,"Here is a list of the corresponding torchvision version that you need to install according to the PyTorch version:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"PyTorch v1.11 - torchvision v0.12.0"),(0,r.kt)("li",{parentName:"ul"},"PyTorch v1.12 - torchvision v0.13.0")),(0,r.kt)("p",null,"If you want a more detailed list, please check ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/pytorch/vision/blob/main/README.rst"},"this link"),"."),(0,r.kt)("h2",{id:"deepstream-configuration-for-yolov8"},"DeepStream Configuration for YOLOv8"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Step 1.")," Clone the following repo")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"cd ~\ngit clone https://github.com/marcoslucianops/DeepStream-Yolo\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Step 2.")," Checkout the repo to the following commit")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"cd DeepStream-Yolo\ngit checkout 68f762d5bdeae7ac3458529bfe6fed72714336ca\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Step 3.")," Copy ",(0,r.kt)("strong",{parentName:"li"},"gen_wts_yoloV8.py")," from ",(0,r.kt)("strong",{parentName:"li"},"DeepStream-Yolo/utils")," into ",(0,r.kt)("strong",{parentName:"li"},"ultralytics")," directory")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"cp utils/gen_wts_yoloV8.py ~/ultralytics\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Step 4.")," Inside the ultralytics repo, download ",(0,r.kt)("strong",{parentName:"li"},"pt file")," from ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/ultralytics/assets/releases/"},"YOLOv8 releases")," (example for YOLOv8s)")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"wget https://github.com/ultralytics/assets/releases/download/v0.0.0/yolov8s.pt\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"NOTE:")," You can use your custom model, but it is important to keep the YOLO model reference ",(0,r.kt)("strong",{parentName:"p"},"(yolov8_)")," in your ",(0,r.kt)("strong",{parentName:"p"},"cfg")," and ",(0,r.kt)("strong",{parentName:"p"},"weights/wts")," filenames to generate the engine correctly."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Step 5.")," Generate the cfg, wts and labels.txt (if available) files (example for YOLOv8s)")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"python3 gen_wts_yoloV8.py -w yolov8s.pt\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Note:")," To change the inference size (defaut: 640)"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"-s SIZE\n--size SIZE\n-s HEIGHT WIDTH\n--size HEIGHT WIDTH\n\nExample for 1280:\n\n-s 1280\nor\n-s 1280 1280\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Step 6.")," Copy the generated ",(0,r.kt)("strong",{parentName:"li"},"cfg"),", ",(0,r.kt)("strong",{parentName:"li"},"wts")," and ",(0,r.kt)("strong",{parentName:"li"},"labels.txt")," (if generated) files into the ",(0,r.kt)("strong",{parentName:"li"},"DeepStream-Yolo")," folder")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"cp yolov8s.cfg ~/DeepStream-Yolo\ncp yolov8s.wts ~/DeepStream-Yolo\ncp labels.txt ~/DeepStream-Yolo\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Step 7.")," Open the ",(0,r.kt)("strong",{parentName:"li"},"DeepStream-Yolo")," folder and compile the library")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"cd ~/DeepStream-Yolo\nCUDA_VER=11.4 make -C nvdsinfer_custom_impl_Yolo  # for DeepStream 6.2/ 6.1.1 / 6.1\nCUDA_VER=10.2 make -C nvdsinfer_custom_impl_Yolo  # for DeepStream 6.0.1 / 6.0\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Step 8.")," Edit the ",(0,r.kt)("strong",{parentName:"li"},"config_infer_primary_yoloV8.txt")," file according to your model (example for YOLOv8s with 80 classes)")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"[property]\n...\ncustom-network-config=yolov8s.cfg\nmodel-file=yolov8s.wts\n...\nnum-detected-classes=80\n...\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Step 9.")," Edit the ",(0,r.kt)("strong",{parentName:"li"},"deepstream_app_config.txt")," file")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"...\n[primary-gie]\n...\nconfig-file=config_infer_primary_yoloV8.txt\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Step 10.")," Change the video source in ",(0,r.kt)("strong",{parentName:"li"},"deepstream_app_config.txt")," file. Here a default video file is loaded as you can see below")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"...\n[source0]\n...\nuri=file:///opt/nvidia/deepstream/deepstream/samples/streams/sample_1080p_h264.mp4\n")),(0,r.kt)("h2",{id:"run-the-inference"},"Run the Inference"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"deepstream-app -c deepstream_app_config.txt\n")),(0,r.kt)("div",{style:{textAlign:"center"}},(0,r.kt)("img",{src:"https://files.seeedstudio.com/wiki/YOLOV8/FP32-1.gif",style:{width:1e3,height:"auto"}})),(0,r.kt)("p",null,"The above result is running on Jetson AGX Orin 32GB H01 Kit with FP32 and YOLOv8s 640x640. We can see that the FPS is around 60 and that is not the true FPS because when we set ",(0,r.kt)("strong",{parentName:"p"},"type=2")," under ",(0,r.kt)("strong",{parentName:"p"},"[sink0]")," in ",(0,r.kt)("strong",{parentName:"p"},"deepstream_app_config.txt")," file, the FPS is limited to the fps of the monitor and the monitor we used for this testing is a 60Hz monitor. However, if you change this value to ",(0,r.kt)("strong",{parentName:"p"},"type=1"),", you will be able to obtain the maximum FPS, but there will be no live detection output."),(0,r.kt)("p",null,"For the same video source and the same model as used above, after changing ",(0,r.kt)("strong",{parentName:"p"},"type=1")," under ",(0,r.kt)("strong",{parentName:"p"},"[sink0]"),", the below result can be obtained."),(0,r.kt)("div",{style:{textAlign:"center"}},(0,r.kt)("img",{src:"https://files.seeedstudio.com/wiki/YOLOV8/FP32-no-screen.gif",style:{width:1e3,height:"auto"}})),(0,r.kt)("p",null,"As you can see, we can get an fps of about 139 which relates to the real fps value."),(0,r.kt)("h2",{id:"int8-calibration"},"INT8 Calibration"),(0,r.kt)("p",null,"If you want to use INT8 precision for inference, you need to follow the steps below"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Step 1.")," Install OpenCV")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"sudo apt-get install libopencv-dev\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Step 2.")," Compile/recompile the ",(0,r.kt)("strong",{parentName:"li"},"nvdsinfer_custom_impl_Yolo")," library with OpenCV support")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"cd ~/DeepStream-Yolo\nCUDA_VER=11.4 OPENCV=1 make -C nvdsinfer_custom_impl_Yolo  # for DeepStream 6.2/ 6.1.1 / 6.1\nCUDA_VER=10.2 OPENCV=1 make -C nvdsinfer_custom_impl_Yolo  # for DeepStream 6.0.1 / 6.0\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Step 3.")," For COCO dataset, download the ",(0,r.kt)("a",{parentName:"p",href:"https://drive.google.com/file/d/1gbvfn7mcsGDRZ_luJwtITL-ru2kK99aK/view?usp=sharing"},"val2017"),", extract, and move to ",(0,r.kt)("strong",{parentName:"p"},"DeepStream-Yolo")," folder")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Step 4.")," Make a new directory for calibration images"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"mkdir calibration\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Step 5.")," Run the following to select 1000 random images from COCO dataset to run calibration")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"for jpg in $(ls -1 val2017/*.jpg | sort -R | head -1000); do \\\n    cp ${jpg} calibration/; \\\ndone\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Note:")," NVIDIA recommends at least 500 images to get a good accuracy. On this example, 1000 images are chosen to get better accuracy (more images = more accuracy). Higher INT8_CALIB_BATCH_SIZE values will result in more accuracy and faster calibration speed. Set it according to you GPU memory. You can set it from head -1000. For example, for 2000 images, head -2000. This process can take a long time."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Step 6.")," Create the ",(0,r.kt)("strong",{parentName:"li"},"calibration.txt")," file with all selected images")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"realpath calibration/*jpg > calibration.txt\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Step 7.")," Set environment variables")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"export INT8_CALIB_IMG_PATH=calibration.txt\nexport INT8_CALIB_BATCH_SIZE=1\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Step 8.")," Update the ",(0,r.kt)("strong",{parentName:"li"},"config_infer_primary_yoloV8.txt")," file")),(0,r.kt)("p",null,"From "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"...\nmodel-engine-file=model_b1_gpu0_fp32.engine\n#int8-calib-file=calib.table\n...\nnetwork-mode=0\n...\n")),(0,r.kt)("p",null,"To "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"...\nmodel-engine-file=model_b1_gpu0_int8.engine\nint8-calib-file=calib.table\n...\nnetwork-mode=1\n...\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Step 9.")," Before running the inference, set ",(0,r.kt)("strong",{parentName:"p"},"type=2")," under ",(0,r.kt)("strong",{parentName:"p"},"[sink0]")," in ",(0,r.kt)("strong",{parentName:"p"},"deepstream_app_config.txt")," file as mentioned before to obtain the max fps performance.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Step 10.")," Run the inference"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"deepstream-app -c deepstream_app_config.txt\n")),(0,r.kt)("div",{style:{textAlign:"center"}},(0,r.kt)("img",{src:"https://files.seeedstudio.com/wiki/YOLOV8/2.png",style:{width:1e3,height:"auto"}})),(0,r.kt)("p",null,"Here we get an FPS value of about 350!"),(0,r.kt)("h2",{id:"multistream-configuration"},"Multistream Configuration"),(0,r.kt)("p",null,"NVIDIA DeepStream allows you to easily setup multiple streams on a single configuration file to build multistream video analytics applications. We will demonstrate later in this wiki on how models with high FPS performance can really help with multistream applications along with some benchmarks."),(0,r.kt)("p",null,"Here we will take 9 streams as an example. We will be changing the ",(0,r.kt)("strong",{parentName:"p"},"deepstream_app_config.txt")," file."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Step 1.")," Inside the ",(0,r.kt)("strong",{parentName:"li"},"[tiled-display]")," section, change the rows and columns to 3 and 3 so that we can have a 3x3 grid with 9 streams")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"[tiled-display]\nrows=3\ncolumns=3\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Step 2.")," Inside the ",(0,r.kt)("strong",{parentName:"li"},"[source0]")," section, set ",(0,r.kt)("strong",{parentName:"li"},"num-sources=9")," and add more ",(0,r.kt)("strong",{parentName:"li"},"uri"),". Here we will simply duplicate the current example video file 8 times to make up 9 streams in total. However, you can change to different video streams according to your application")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"[source0]\nenable=1\ntype=3\nuri=file:///opt/nvidia/deepstream/deepstream/samples/streams/sample_1080p_h264.mp4\nuri=file:///opt/nvidia/deepstream/deepstream/samples/streams/sample_1080p_h264.mp4\nuri=file:///opt/nvidia/deepstream/deepstream/samples/streams/sample_1080p_h264.mp4\nuri=file:///opt/nvidia/deepstream/deepstream/samples/streams/sample_1080p_h264.mp4\nuri=file:///opt/nvidia/deepstream/deepstream/samples/streams/sample_1080p_h264.mp4\nuri=file:///opt/nvidia/deepstream/deepstream/samples/streams/sample_1080p_h264.mp4\nuri=file:///opt/nvidia/deepstream/deepstream/samples/streams/sample_1080p_h264.mp4\nuri=file:///opt/nvidia/deepstream/deepstream/samples/streams/sample_1080p_h264.mp4\nuri=file:///opt/nvidia/deepstream/deepstream/samples/streams/sample_1080p_h264.mp4\nnum-sources=9\n")),(0,r.kt)("p",null,"Now if you run the application again with ",(0,r.kt)("strong",{parentName:"p"},"deepstream-app -c deepstream_app_config.txt")," command, you will see the following output"),(0,r.kt)("div",{style:{textAlign:"center"}},(0,r.kt)("img",{src:"https://files.seeedstudio.com/wiki/YOLOV8/7.jpg",style:{width:1e3,height:"auto"}})),(0,r.kt)("h2",{id:"trtexec-tool"},"trtexec Tool"),(0,r.kt)("p",null,"Included in the samples directory is a command-line wrapper tool called ",(0,r.kt)("a",{parentName:"p",href:"https://docs.nvidia.com/deeplearning/tensorrt/developer-guide/index.html#trtexec"},"trtexec"),". trtexec is a tool to use TensorRT without having to develop your own application. The trtexec tool has three main purposes:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Benchmarking networks on random or user-provided input data."),(0,r.kt)("li",{parentName:"ul"},"Generating serialized engines from models."),(0,r.kt)("li",{parentName:"ul"},"Generating a serialized timing cache from the builder.")),(0,r.kt)("p",null,"Here we can use trtexec tool to quickly benchmark the models with different parameter. But first of all, you need to have an onnx model and we can genrate this onnx model by using ultralytics yolov8."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Step 1.")," Build ONNX using:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"yolo mode=export model=yolov8s.pt format=onnx\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Step 1.")," Build engine file using trtexec as follows:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"cd /usr/src/tensorrt/bin\n./trtexec --onnx=<path_to_onnx_file> --saveEngine=<path_to_save_engine_file>\n")),(0,r.kt)("p",null,"For example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"./trtexec --onnx=/home/nvidia/yolov8s.onnx --saveEngine=/home/nvidia/yolov8s.engine\n")),(0,r.kt)("p",null,"This will output performance results as follows along with a generated ",(0,r.kt)("strong",{parentName:"p"},".engine")," file. By default it will convert ONNX to an TensorRT optimized file in ",(0,r.kt)("strong",{parentName:"p"},"FP32")," precision and you can see the output as follows"),(0,r.kt)("div",{style:{textAlign:"center"}},(0,r.kt)("img",{src:"https://files.seeedstudio.com/wiki/YOLOV8/3.png",style:{width:1e3,height:"auto"}})),(0,r.kt)("p",null,"Here we can take the mean latency as 7.2ms which translates to 139FPS. This is the same performance we got in the previous DeepStream demo."),(0,r.kt)("p",null,"However, if you want ",(0,r.kt)("strong",{parentName:"p"},"INT8")," precision which offers better performance, you can execute the above command as follows"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"./trtexec --onnx=/home/nvidia/yolov8s.onnx --int8 --saveEngine=/home/nvidia/yolov8s.engine \n")),(0,r.kt)("div",{style:{textAlign:"center"}},(0,r.kt)("img",{src:"https://files.seeedstudio.com/wiki/YOLOV8/4.jpg",style:{width:1e3,height:"auto"}})),(0,r.kt)("p",null,"Here we can take the mean latency as 3.2ms which translates to 313FPS."),(0,r.kt)("h2",{id:"yolov8-benchmark-results"},"YOLOv8 Benchmark Results"),(0,r.kt)("p",null,"We have done performance benchmarks for different YOLOv8 models running on ",(0,r.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/reComputer-J4012-p-5586.html"},"reComputer J4012"),", ",(0,r.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/AGX-Orin-32GB-H01-Kit-p-5569.html"},"AGX Orin 32GB H01 Kit")," and ",(0,r.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/reComputer-J2021-p-5438.html"},"reComputer J2021")),(0,r.kt)("div",{style:{textAlign:"center"}},(0,r.kt)("img",{src:"https://files.seeedstudio.com/wiki/YOLOV8/14.png",style:{width:1e3,height:"auto"}})),(0,r.kt)("p",null,"To learn about more performance benchmarks we have done using YOLOv8 models, please check ",(0,r.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/blog/2023/03/30/yolov8-performance-benchmarks-on-nvidia-jetson-devices"},"our blog"),"."),(0,r.kt)("h2",{id:"multistream-model-benchmarks"},"Multistream Model Benchmarks"),(0,r.kt)("p",null,"After running several deepstream applications on reComputer Jetson Orin series products, we have done benchmarks with the YOLOv8s models."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"First, we have used a single AI model and run multiple streams on the same AI model"),(0,r.kt)("li",{parentName:"ul"},"Second, we have used multiple AI models and run multiple streams on multiple AI models")),(0,r.kt)("p",null,"All these benchmarks are carried out under the following conditions:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"YOLOv8s 640x640 image input"),(0,r.kt)("li",{parentName:"ul"},"Disable UI"),(0,r.kt)("li",{parentName:"ul"},"Turn on max power and max performance mode ")),(0,r.kt)("iframe",{src:"https://jetson-camera-selection-tool.seeedstudio.com/",width:"100%",height:"550px"}),(0,r.kt)("p",null,"From these benchmarks, we can see that for the highest end Orin NX 16GB device with a single YOLOv8s model at INT8, you can use around 40 cameras at around 5fps and with multiple YOLOv8s models at INT8 for each stream, you can use around 11 cameras at around 15fps. For multi model applications, the number of cameras is less because of the RAM limitations on the device and each model takes up a substantial amount of RAM."),(0,r.kt)("h2",{id:"resources"},"Resources"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://docs.ultralytics.com"},"YOLOv8 documentation")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://docs.nvidia.com/deeplearning/tensorrt/developer-guide/index.html"},"TensorRT documentation")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://docs.nvidia.com/metropolis/deepstream/dev-guide"},"DeepStream SDK documentation"))),(0,r.kt)("h2",{id:"tech-support--product-discussion"},"Tech Support & Product Discussion"),(0,r.kt)("p",null,"Thank you for choosing our products! We are here to provide you with different support to ensure that your experience with our products is as smooth as possible. We offer several communication channels to cater to different preferences and needs."),(0,r.kt)("div",{class:"button_tech_support_container"},(0,r.kt)("a",{href:"https://forum.seeedstudio.com/",class:"button_forum"}),(0,r.kt)("a",{href:"https://www.seeedstudio.com/contacts",class:"button_email"})),(0,r.kt)("div",{class:"button_tech_support_container"},(0,r.kt)("a",{href:"https://discord.gg/eWkprNDMU7",class:"button_discord"}),(0,r.kt)("a",{href:"https://github.com/Seeed-Studio/wiki-documents/discussions/69",class:"button_discussion"})))}u.isMDXComponent=!0}}]);