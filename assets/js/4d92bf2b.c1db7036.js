"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[18137],{3905:(e,t,i)=>{i.d(t,{Zo:()=>s,kt:()=>g});var n=i(67294);function r(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function a(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function o(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?a(Object(i),!0).forEach((function(t){r(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):a(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function l(e,t){if(null==e)return{};var i,n,r=function(e,t){if(null==e)return{};var i,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)i=a[n],t.indexOf(i)>=0||(r[i]=e[i]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)i=a[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(r[i]=e[i])}return r}var p=n.createContext({}),d=function(e){var t=n.useContext(p),i=t;return e&&(i="function"==typeof e?e(t):o(o({},t),e)),i},s=function(e){var t=d(e.components);return n.createElement(p.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var i=e.components,r=e.mdxType,a=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=d(i),u=r,g=m["".concat(p,".").concat(u)]||m[u]||c[u]||a;return i?n.createElement(g,o(o({ref:t},s),{},{components:i})):n.createElement(g,o({ref:t},s))}));function g(e,t){var i=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=i.length,o=new Array(a);o[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[m]="string"==typeof e?e:r,o[1]=l;for(var d=2;d<a;d++)o[d]=i[d];return n.createElement.apply(null,o)}return n.createElement.apply(null,i)}u.displayName="MDXCreateElement"},78061:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>m,frontMatter:()=>a,metadata:()=>l,toc:()=>d});var n=i(87462),r=(i(67294),i(3905));const a={description:"Getting started with Google MediaPipe",title:"Getting started with Google MediaPipe",keywords:["Edge","reTerminal Application","Embedded_ML"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/reTerminal_ML_MediaPipe",last_update:{date:"1/31/2023",author:"jianjing Huang"}},o="Getting Started with MediaPipe on reTerminal",l={unversionedId:"Edge/reTerminal/Application/Embedded_ML/reTerminal_ML_MediaPipe",id:"Edge/reTerminal/Application/Embedded_ML/reTerminal_ML_MediaPipe",title:"Getting started with Google MediaPipe",description:"Getting started with Google MediaPipe",source:"@site/docs/Edge/reTerminal/Application/Embedded_ML/reTerminal_ML_MediaPipe.md",sourceDirName:"Edge/reTerminal/Application/Embedded_ML",slug:"/reTerminal_ML_MediaPipe",permalink:"/reTerminal_ML_MediaPipe",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Edge/reTerminal/Application/Embedded_ML/reTerminal_ML_MediaPipe.md",tags:[],version:"current",lastUpdatedBy:"jianjing Huang",lastUpdatedAt:1675123200,formattedLastUpdatedAt:"Jan 31, 2023",frontMatter:{description:"Getting started with Google MediaPipe",title:"Getting started with Google MediaPipe",keywords:["Edge","reTerminal Application","Embedded_ML"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/reTerminal_ML_MediaPipe",last_update:{date:"1/31/2023",author:"jianjing Huang"}},sidebar:"ProductSidebar",previous:{title:"Object Detection with reTerminal and Pi camera",permalink:"/reTerminal_DM_Object_detection"},next:{title:"Getting started with TensorFlow Lite",permalink:"/reTerminal_ML_TFLite"}},p={},d=[{value:"ML solutions in MediaPipe",id:"ml-solutions-in-mediapipe",level:2},{value:"Installation",id:"installation",level:2},{value:"Python bindings for 32bit version",id:"python-bindings-for-32bit-version",level:4},{value:"Python bindings for 64bit version",id:"python-bindings-for-64bit-version",level:4},{value:"Links to samples",id:"links-to-samples",level:2},{value:"F.A.Q",id:"faq",level:2},{value:"Q1: My company&#39;s policy doesn&#39;t allow us to use 3rd party binaries. How to compile MediaPipe from source?",id:"q1-my-companys-policy-doesnt-allow-us-to-use-3rd-party-binaries-how-to-compile-mediapipe-from-source",level:4},{value:"Resources",id:"resources",level:2}],s={toc:d};function m(e){let{components:t,...i}=e;return(0,r.kt)("wrapper",(0,n.Z)({},s,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"getting-started-with-mediapipe-on-reterminal"},"Getting Started with MediaPipe on reTerminal"),(0,r.kt)("p",{align:"center"},(0,r.kt)("img",{alt:"Light",src:"https://google.github.io/mediapipe/images/mediapipe_small.png",width:"45%"}),"\xa0 \xa0",(0,r.kt)("img",{alt:"Dark",src:"https://raw.githubusercontent.com/lakshanthad/Image/master/CM4_wiki/wiki_thumb.png",width:"45%"})),(0,r.kt)("p",null," MediaPipe is a an open-source framework from Google for building multimodal (eg. video, audio, any time series data), cross platform (i.e Android, iOS, web, edge devices) applied ML pipelines. It is performance optimized with end-to-end ondevice inference in mind. Mediapipe is currently under active development and includes multiple demos, that can be run out-of-the box after installing Mediapipe on reTerminal."),(0,r.kt)("h2",{id:"ml-solutions-in-mediapipe"},"ML solutions in MediaPipe"),(0,r.kt)("p",null,"The following is list of solutions currently tested on reTerminal:"),(0,r.kt)("table",{style:{tableLayout:"fixed",width:743}},(0,r.kt)("colgroup",null,(0,r.kt)("col",{style:{width:146}}),(0,r.kt)("col",{style:{width:198}}),(0,r.kt)("col",{style:{width:399}})),(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,"Model"),(0,r.kt)("th",null,"Result"),(0,r.kt)("th",null,"Comments"))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,"Face Detection"),(0,r.kt)("td",null," ",(0,r.kt)("p",{style:{textAlign:"center"}},(0,r.kt)("img",{src:"https://google.github.io/mediapipe/images/mobile/face_detection_android_gpu_small.gif",alt:"pir",width:600,height:"auto"}))),(0,r.kt)("td",null,"Model complexity: 0  \xa0  71.4 FPS 14 ms. per inference ",(0,r.kt)("br",null),"Model complexity: 1  \xa0  21.2 FPS 47 ms. per inference")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"Face Mesh"),(0,r.kt)("td",null,(0,r.kt)("p",{style:{textAlign:"center"}},(0,r.kt)("img",{src:"https://google.github.io/mediapipe/images/mobile/face_mesh_android_gpu_small.gif",alt:"pir",width:600,height:"auto"}))," "),(0,r.kt)("td",null,"20 FPS, 50 ms. per inference with tracking \xa0 ",(0,r.kt)("br",null),"16.1 FPS 60 ms. without tracking")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"Pose"),(0,r.kt)("td",null,(0,r.kt)("p",{style:{textAlign:"center"}},(0,r.kt)("img",{src:"https://google.github.io/mediapipe/images/mobile/pose_tracking_android_gpu_small.gif",alt:"pir",width:600,height:"auto"}))),(0,r.kt)("td",null,"Model complexity: 1  \xa0  11.8 FPS 85 ms. per inference ",(0,r.kt)("br",null),"Model complexity: 2  \xa0  6.1 FPS 163 ms. per inference ",(0,r.kt)("br",null),"Model complexity: 3  \xa0  -- FPS -- ms. per inference")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"Hand landmarks"),(0,r.kt)("td",null,(0,r.kt)("p",{style:{textAlign:"center"}},(0,r.kt)("img",{src:"https://google.github.io/mediapipe/images/mobile/hand_tracking_3d_android_gpu.gif",alt:"pir",width:600,height:"auto"}))),(0,r.kt)("td",null,"Model complexity: 0  \xa0  8.9 FPS 112 ms. per inference ",(0,r.kt)("br",null),"Model complexity: 1  \xa0  4.4 FPS 226 ms. per inference ",(0,r.kt)("br",null))))),(0,r.kt)("h2",{id:"installation"},"Installation"),(0,r.kt)("p",null,"Currently Python bindings are tested with both 32bit and 64bit Raspberry Pi OS images for reTerminal. For best performance it is recommended to use 64bit version."),(0,r.kt)("h4",{id:"python-bindings-for-32bit-version"},"Python bindings for 32bit version"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"sudo apt install ffmpeg python3-opencv\npip3 install mediapipe-rpi4\n")),(0,r.kt)("h4",{id:"python-bindings-for-64bit-version"},"Python bindings for 64bit version"),(0,r.kt)("p",null,"Pre-built wheels for Python 3.7 64bit OS were not available at the moment of writing of this article, so we compiled and shared them ourselves."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"sudo apt install ffmpeg python3-opencv\nwget https://files.seeedstudio.com/ml/mediapipe/mediapipe-0.8-cp37-cp37m-linux_aarch64.whl\npip3 install mediapipe-0.8-cp37-cp37m-linux_aarch64.whl\n")),(0,r.kt)("p",null,"After installation is complete, try importing mediapipe package:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'pi@raspberrypi:~/reterminal $ python3\nPython 3.7.3 (default, Jan 22 2021, 20:04:44) \n[GCC 8.3.0] on linux\nType "help", "copyright", "credits" or "license" for more information.\n>>> import mediapipe\n>>> mediapipe.__path__\n[\'/home/pi/.local/lib/python3.7/site-packages/mediapipe\']\n>>> \n')),(0,r.kt)("h2",{id:"links-to-samples"},"Links to samples"),(0,r.kt)("p",null,"You can find Sample applications in Seeed Python Machine Learning repository, inside ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/Seeed-Studio/Seeed_Python_MachineLearning/tree/main/examples/mediapipe"},"examples/mediapipe folder.")),(0,r.kt)("h2",{id:"faq"},"F.A.Q"),(0,r.kt)("h4",{id:"q1-my-companys-policy-doesnt-allow-us-to-use-3rd-party-binaries-how-to-compile-mediapipe-from-source"},"Q1: My company's policy doesn't allow us to use 3rd party binaries. How to compile MediaPipe from source?"),(0,r.kt)("p",null,"You can compile MediaPipe for 32bit OS by following instructions ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/superuser789/MediaPipe-on-RaspberryPi#building-mediapipe-on-raspberry-pi-os-for-raspberry-pi-3--4"},"here")," and for 64-bit version by following instruction ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/jiuqiant/mediapipe_python_aarch64"},"here"),"."),(0,r.kt)("h2",{id:"resources"},"Resources"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"[Web Page]")," ",(0,r.kt)("a",{parentName:"p",href:"https://mediapipe.dev/"},"MediaPipe Official Webpage"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"[Web Page]")," ",(0,r.kt)("a",{parentName:"p",href:"https://google.github.io/mediapipe/"},"MediaPipe Official Documentation")))))}m.isMDXComponent=!0}}]);