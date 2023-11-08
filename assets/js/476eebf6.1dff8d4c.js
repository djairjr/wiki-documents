"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[23251],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>h});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=p(a),d=r,h=m["".concat(l,".").concat(d)]||m[d]||u[d]||i;return a?n.createElement(h,o(o({ref:t},c),{},{components:a})):n.createElement(h,o({ref:t},c))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[m]="string"==typeof e?e:r,o[1]=s;for(var p=2;p<i;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},66642:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var n=a(87462),r=(a(67294),a(3905));const i={description:"Getting start with reTerminal and Pi camera with OpenCV",title:"Getting start with reTerminal and Pi camera with OpenCV",keywords:["Edge","reTerminal","piCamera","OpenCV"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/reTerminal_DM_opencv",last_update:{date:"11/7/2023",author:"Kasun Thushara"}},o=void 0,s={unversionedId:"Edge/reTerminal/Application/OpenCV/reTerminal_DM_opencv",id:"Edge/reTerminal/Application/OpenCV/reTerminal_DM_opencv",title:"Getting start with reTerminal and Pi camera with OpenCV",description:"Getting start with reTerminal and Pi camera with OpenCV",source:"@site/docs/Edge/reTerminal/Application/OpenCV/reTerminal_DM_opencv.md",sourceDirName:"Edge/reTerminal/Application/OpenCV",slug:"/reTerminal_DM_opencv",permalink:"/reTerminal_DM_opencv",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Edge/reTerminal/Application/OpenCV/reTerminal_DM_opencv.md",tags:[],version:"current",lastUpdatedBy:"Kasun Thushara",lastUpdatedAt:1699315200,formattedLastUpdatedAt:"Nov 7, 2023",frontMatter:{description:"Getting start with reTerminal and Pi camera with OpenCV",title:"Getting start with reTerminal and Pi camera with OpenCV",keywords:["Edge","reTerminal","piCamera","OpenCV"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/reTerminal_DM_opencv",last_update:{date:"11/7/2023",author:"Kasun Thushara"}},sidebar:"ProductSidebar",previous:{title:"How to Customize Home Assistant",permalink:"/reTerminal-Home-Assistant-Customize"},next:{title:"Face Detection with reTerminal and Pi camera with OpenCV",permalink:"/reTerminal_DM_Face_detection"}},l={},p=[{value:"Introduction",id:"introduction",level:2},{value:"OpenCV",id:"opencv",level:2},{value:"Getting Start",id:"getting-start",level:2},{value:"Hardware preparation",id:"hardware-preparation",level:3},{value:"Software Preparation",id:"software-preparation",level:3},{value:"Install OpenCV",id:"install-opencv",level:2},{value:"Take a video stream",id:"take-a-video-stream",level:2},{value:"Capture a photo and Save it.",id:"capture-a-photo-and-save-it",level:2},{value:"Tech support",id:"tech-support",level:2}],c={toc:p};function m(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"introduction"},"Introduction"),(0,r.kt)("p",null,"In this tutorial, we'll guide you through the process of setting up the reTerminal with a ",(0,r.kt)("strong",{parentName:"p"},"freshly installed Raspberry Pi OS Bullseye"),". Our goal is to interact with the ",(0,r.kt)("strong",{parentName:"p"},"PiCam")," and perform image processing and deep learning activities using the ",(0,r.kt)("strong",{parentName:"p"},"OpenCV")," library."),(0,r.kt)("h2",{id:"opencv"},"OpenCV"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"OpenCV (Open Source Computer Vision Library)"),": OpenCV is a powerful and open-source computer vision library designed for real-time computer vision tasks. It provides a comprehensive set of tools and functions that enable developers to work with images and videos, offering solutions for tasks like image processing, object detection, face recognition, and more. Widely used in both academia and industry, OpenCV supports various programming languages, making it a versatile choice for computer vision applications across different platforms. Its flexibility and extensive documentation make it an invaluable resource for anyone involved in computer vision development."),(0,r.kt)("h2",{id:"getting-start"},"Getting Start"),(0,r.kt)("p",null,"Before you start this project, you may need to prepare your hardware and software in advance as described here."),(0,r.kt)("h3",{id:"hardware-preparation"},"Hardware preparation"),(0,r.kt)("div",{class:"table-center"},(0,r.kt)("table",{class:"table-nobg"},(0,r.kt)("tr",{class:"table-trnobg"},(0,r.kt)("th",{class:"table-trnobg"},"reTerminal"),(0,r.kt)("th",{class:"table-trnobg"},"PiCam")),(0,r.kt)("tr",{class:"table-trnobg"}),(0,r.kt)("tr",{class:"table-trnobg"},(0,r.kt)("td",{class:"table-trnobg"},(0,r.kt)("div",{style:{textAlign:"center"}},(0,r.kt)("img",{src:"https://files.seeedstudio.com/wiki/ReTerminal/frigate/reterminal.png",style:{width:300,height:"auto"}}))),(0,r.kt)("td",{class:"table-trnobg"},(0,r.kt)("div",{style:{textAlign:"center"}},(0,r.kt)("img",{src:"https://files.seeedstudio.com/wiki/ReTerminal/Picam/picam2.jpg",style:{width:300,height:"auto"}})))),(0,r.kt)("tr",{class:"table-trnobg"}),(0,r.kt)("tr",{class:"table-trnobg"},(0,r.kt)("td",{class:"table-trnobg"},(0,r.kt)("div",{class:"get_one_now_container",style:{textAlign:"center"}},(0,r.kt)("a",{class:"get_one_now_item",href:"https://www.seeedstudio.com/ReTerminal-with-CM4-p-4904.html?queryID=26220f25bcce77bc420c9c03059787c0&objectID=4904&indexName=bazaar_retailer_products"},(0,r.kt)("strong",null,(0,r.kt)("span",null,(0,r.kt)("font",{color:"FFFFFF",size:"4"}," Get One Now \ud83d\uddb1\ufe0f")))))),(0,r.kt)("td",{class:"table-trnobg"},(0,r.kt)("div",{class:"get_one_now_container",style:{textAlign:"center"}},(0,r.kt)("a",{class:"get_one_now_item",href:"https://wiki.seeedstudio.com/reTerminal-piCam/"},(0,r.kt)("strong",null,(0,r.kt)("span",null,(0,r.kt)("font",{color:"FFFFFF",size:"4"},"\ud83d\udcda Learn More"))))))))),(0,r.kt)("h3",{id:"software-preparation"},"Software Preparation"),(0,r.kt)("p",null,"We recommend installing the ",(0,r.kt)("strong",{parentName:"p"},"Bullesye")," version of Raspberry Pi 64 bit OS from their official website. If you prefer to install a new Raspbian OS, please follow the steps outlined in this ",(0,r.kt)("strong",{parentName:"p"},"guide"),"."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"If you are trying to use Bookworm OS, which is the latest OS as of the time of writing this wiki, you may need to use a virtual environment. Please follow this ",(0,r.kt)("a",{parentName:"p",href:"https://www.raspberrypi.com/documentation/computers/os.html#python-on-raspberry-pi"},(0,r.kt)("strong",{parentName:"a"},"link"))," for more updates.")),(0,r.kt)("h2",{id:"install-opencv"},"Install OpenCV"),(0,r.kt)("p",null," Feel free to skip the detailed installation process; we've got a shortcut for you. Follow these simplified steps:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Step 1")," First, clone this Git repo onto your Raspberry Pi like this"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"git clone https://github.com/KasunThushara/Opencv_and_piCam\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Step 2")," Next, utilize our script to effortlessly install the required Python packages and download the EfficientDet-Lite model. Navigate to this folder."))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"cd Opencv_and_piCam/ObjectDetection\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Step 3")," The script install the required dependencies and download the TFLite models For this tutorial series.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"sh setup.sh\n")),(0,r.kt)("h2",{id:"take-a-video-stream"},"Take a video stream"),(0,r.kt)("p",null,"In new terminal window  navigate to  ",(0,r.kt)("strong",{parentName:"p"},"Opencv_and_piCam")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"cd Opencv_and_piCam\n")),(0,r.kt)("p",null,"In this tutorial, we'll kick off with a 'Hello World' program using the PiCam and OpenCV on our reTerminal. You can locate the ",(0,r.kt)("strong",{parentName:"p"},"captureimage.py")," file in our cloned repository. We'll be exploring a live video stream, and if you press 'q', the stream will gracefully stop."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"python captureimage.py\n")),(0,r.kt)("p",null,"You will find a video stream like below."),(0,r.kt)("center",null,(0,r.kt)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/ReTerminal/opencv/videostream.gif"})),(0,r.kt)("p",null,"Following your reference, we'll provide the entire code snippet for your convenience."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},'import cv2\nfrom picamera2 import Picamera2\npicam2 = Picamera2()\npicam2.preview_configuration.main.size = (1280,720)\npicam2.preview_configuration.main.format = "RGB888"\npicam2.preview_configuration.align()\npicam2.configure("preview")\npicam2.start()\nwhile True:\n    im= picam2.capture_array()\n    cv2.imshow("Camera", im)\n    if cv2.waitKey(1)==ord(\'q\'):\n        break\ncv2.destroyAllWindows()\n')),(0,r.kt)("h2",{id:"capture-a-photo-and-save-it"},"Capture a photo and Save it."),(0,r.kt)("p",null,"Here, we'll capture a still image using the PiCam and OpenCV on our ReTerminal. Find the ",(0,r.kt)("strong",{parentName:"p"},"saveimage.py")," file in our cloned repository. We'll be streaming live video, and if you press 's', a photo will be captured."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"python saveimage.py\n")),(0,r.kt)("p",null,"You will find a captured image in same directory."),(0,r.kt)("center",null,(0,r.kt)("img",{width:800,src:"https://files.seeedstudio.com/wiki/ReTerminal/opencv/capturedimage.PNG"})),(0,r.kt)("p",null,"Following your reference, we'll provide the entire code snippet for your convenience."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},'import cv2\nfrom picamera2 import Picamera2\n\npicam2 = Picamera2()\npicam2.preview_configuration.main.size = (1280, 720)\npicam2.preview_configuration.main.format = "RGB888"\npicam2.preview_configuration.align()\npicam2.configure("preview")\npicam2.start()\n\ntry:\n    while True:\n        im = picam2.capture_array()\n        cv2.imshow("Camera", im)\n\n        # Save an image when a key is pressed (e.g., \'s\')\n        key = cv2.waitKey(1)\n        if key == ord(\'s\'):\n            # Save the image using OpenCV\n            cv2.imwrite("captured_image.jpg", im)\n            print("Image saved!")\n\n        # Exit the loop when \'q\' is pressed\n        elif key == ord(\'q\'):\n            break\n\nfinally:\n    # Release resources\n    cv2.destroyAllWindows()\n    picam2.stop()\n    picam2.close()\n')),(0,r.kt)("h2",{id:"tech-support"},"Tech support"),(0,r.kt)("p",null,"Thank you for choosing our products! We are here to provide you with different support to ensure that your experience with our products is as smooth as possible. We offer several communication channels to cater to different preferences and needs."),(0,r.kt)("div",{class:"button_tech_support_container"},(0,r.kt)("a",{href:"https://forum.seeedstudio.com/",class:"button_forum"}),(0,r.kt)("a",{href:"https://www.seeedstudio.com/contacts",class:"button_email"})),(0,r.kt)("div",{class:"button_tech_support_container"},(0,r.kt)("a",{href:"https://discord.gg/eWkprNDMU7",class:"button_discord"}),(0,r.kt)("a",{href:"https://github.com/Seeed-Studio/wiki-documents/discussions/69",class:"button_discussion"})))}m.isMDXComponent=!0}}]);