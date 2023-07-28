"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[35211],{3905:(e,t,i)=>{i.d(t,{Zo:()=>c,kt:()=>h});var n=i(67294);function a(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function o(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function r(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?o(Object(i),!0).forEach((function(t){a(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):o(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function s(e,t){if(null==e)return{};var i,n,a=function(e,t){if(null==e)return{};var i,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)i=o[n],t.indexOf(i)>=0||(a[i]=e[i]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)i=o[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(a[i]=e[i])}return a}var l=n.createContext({}),d=function(e){var t=n.useContext(l),i=t;return e&&(i="function"==typeof e?e(t):r(r({},t),e)),i},c=function(e){var t=d(e.components);return n.createElement(l.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var i=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=d(i),m=a,h=p["".concat(l,".").concat(m)]||p[m]||u[m]||o;return i?n.createElement(h,r(r({ref:t},c),{},{components:i})):n.createElement(h,r({ref:t},c))}));function h(e,t){var i=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=i.length,r=new Array(o);r[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:a,r[1]=s;for(var d=2;d<o;d++)r[d]=i[d];return n.createElement.apply(null,r)}return n.createElement.apply(null,i)}m.displayName="MDXCreateElement"},93422:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>d});var n=i(87462),a=(i(67294),i(3905));const o={description:"Edge Impulse Getting Started",title:"Edge Impulse Getting Started",keywords:["Wio_terminal","Embedded_ML","Projects_based_Edge_Impulse"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Wio-Terminal-TinyML-EI-1",last_update:{date:"1/30/2023",author:"jianjing Huang"}},r="Wio Terminal Edge Impulse Getting Started",s={unversionedId:"Sensor/Wio_Terminal/Application/Embedded_ML/Projects_based_Edge_Impulse/Wio-Terminal-TinyML-EI-1",id:"Sensor/Wio_Terminal/Application/Embedded_ML/Projects_based_Edge_Impulse/Wio-Terminal-TinyML-EI-1",title:"Edge Impulse Getting Started",description:"Edge Impulse Getting Started",source:"@site/docs/Sensor/Wio_Terminal/Application/Embedded_ML/Projects_based_Edge_Impulse/Wio-Terminal-TinyML-EI-1.md",sourceDirName:"Sensor/Wio_Terminal/Application/Embedded_ML/Projects_based_Edge_Impulse",slug:"/Wio-Terminal-TinyML-EI-1",permalink:"/Wio-Terminal-TinyML-EI-1",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Sensor/Wio_Terminal/Application/Embedded_ML/Projects_based_Edge_Impulse/Wio-Terminal-TinyML-EI-1.md",tags:[],version:"current",lastUpdatedBy:"jianjing Huang",lastUpdatedAt:1675036800,formattedLastUpdatedAt:"Jan 30, 2023",frontMatter:{description:"Edge Impulse Getting Started",title:"Edge Impulse Getting Started",keywords:["Wio_terminal","Embedded_ML","Projects_based_Edge_Impulse"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Wio-Terminal-TinyML-EI-1",last_update:{date:"1/30/2023",author:"jianjing Huang"}},sidebar:"ProductSidebar",previous:{title:"Get Started with Wio Terminal and Wappsto IoT",permalink:"/Get-Started-with-Wio-Terminal-and-Wappsto-IoT"},next:{title:"Continuous Motion Recognition",permalink:"/Wio-Terminal-TinyML-EI-2"}},l={},d=[{value:"Installing dependencies",id:"installing-dependencies",level:2},{value:"Connecting to Edge Impulse",id:"connecting-to-edge-impulse",level:2},{value:"1. Connect the development board to your computer",id:"1-connect-the-development-board-to-your-computer",level:3},{value:"2. Setting Keys",id:"2-setting-keys",level:3},{value:"3. Verifying that the device is connected",id:"3-verifying-that-the-device-is-connected",level:3},{value:"Training data acquisition",id:"training-data-acquisition",level:2},{value:"Building a machine learning model",id:"building-a-machine-learning-model",level:2},{value:"Deploying to Wio Terminal",id:"deploying-to-wio-terminal",level:2},{value:"Reference",id:"reference",level:2}],c={toc:d};function p(e){let{components:t,...i}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"wio-terminal-edge-impulse-getting-started"},"Wio Terminal Edge Impulse Getting Started"),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{src:"https://files.seeedstudio.com/wiki/Wio-Terminal-Edge-Impulse/banner.png"})),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://www.edgeimpulse.com/"},(0,a.kt)("strong",{parentName:"a"},"Edge Impulse"))," enables developers to create the next generation of intelligent device solutions with embedded Machine Learning. Machine Learning at the very edge will enable valuable use of the 99% of sensor data that is discarded today due to cost, bandwidth or power constraints."),(0,a.kt)("p",null,"Now, ",(0,a.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/Wio-Terminal-p-4509.html"},"Wio Terminal")," is officially supported by the Edge Impulse. Let's see how to get Wio Terminal started with the Machine learning at the very edge!"),(0,a.kt)("h2",{id:"installing-dependencies"},"Installing dependencies"),(0,a.kt)("p",null,"To set Wio Terminal up in Edge Impulse, you will need to install the following software:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"https://nodejs.org/en/"},"Node.js v12")," or higher."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"https://arduino.github.io/arduino-cli/latest/"},"Arduino CLI")),(0,a.kt)("li",{parentName:"ol"},"The Edge Impulse CLI and a serial monitor. Install by opening command prompt or terminal and run:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"npm install -g edge-impulse-cli \n")),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"Problems with installing the CLI? Please check ",(0,a.kt)("a",{parentName:"p",href:"https://docs.edgeimpulse.com/docs/cli-installation"},"Installation and troubleshooting")," for more reference.")),(0,a.kt)("h2",{id:"connecting-to-edge-impulse"},"Connecting to Edge Impulse"),(0,a.kt)("p",null,"With all the software in place it's time to connect the development board to Edge Impulse."),(0,a.kt)("h3",{id:"1-connect-the-development-board-to-your-computer"},"1. Connect the development board to your computer"),(0,a.kt)("p",null,"Connect Wio Terminal to your computer. Entering the bootloader mode by sliding the power switch twice quickly. For more reference, please also see ",(0,a.kt)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/Wio-Terminal-Getting-Started/#faq"},"here"),"."),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:500,src:"https://files.seeedstudio.com/wiki/Wio-Terminal-CircuitPython/dfu.gif"})),(0,a.kt)("p",null,"An external drive named ",(0,a.kt)("inlineCode",{parentName:"p"},"Arduino")," should appear in your PC. Drag the the downloaded ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/Seeed-Studio/Seeed_Arduino_edgeimpulse/releases/tag/1.4.0"},(0,a.kt)("strong",{parentName:"a"},"Edge Impulse uf2 firmware files"))," to the ",(0,a.kt)("inlineCode",{parentName:"p"},"Arduino")," drive. Now, Edge Impulse is loaded on Seeeduino Wio Terminal!"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"NOTE:")," Here is the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/Seeed-Studio/Seeed_Arduino_edgeimpulse"},"Wio Terminal Edge Impulse source code"),", you can also build the firmware from here."),(0,a.kt)("h3",{id:"2-setting-keys"},"2. Setting Keys"),(0,a.kt)("p",null,"From a command prompt or terminal run:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"edge-impulse-daemon\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"NOTE:")," When connecting to a new device, run ",(0,a.kt)("inlineCode",{parentName:"p"},"edge-impulse-daemon --clean")," to remove previous cached."),(0,a.kt)("h3",{id:"3-verifying-that-the-device-is-connected"},"3. Verifying that the device is connected"),(0,a.kt)("p",null,"That's all! Your device is now connected to Edge Impulse. To verify this, ",(0,a.kt)("a",{parentName:"p",href:"https://studio.edgeimpulse.com/studio/select-project?autoredirect=1"},"go to your Edge Impulse project"),", and click Devices. The device will be listed here."),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{src:"https://files.seeedstudio.com/wiki/Wio-Terminal-Edge-Impulse/device.png"})),(0,a.kt)("p",null,"For your first project, let\u2019s quickly train and deploy a simple neural network for classifying rock-paper-scissors gestures with just a single light sensor. For more details and video tutorial, watch the corresponding video!"),(0,a.kt)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/iCmlKyAp8eQ",frameborder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}),(0,a.kt)("h2",{id:"training-data-acquisition"},"Training data acquisition"),(0,a.kt)("p",null,"Go to Data acquisition tab. Set sample length to about 10000 ms or 10 seconds and create 10 samples for each gesture, waving the hand in vicinity of Wio terminal."),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:600,src:"https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-1/gif1.gif"})),(0,a.kt)("p",null,"This is a small dataset, but we also have a tiny neural network, so underfitting is more likely than overfitting in this particular case."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Underfitting"),":\nA statistical model or a machine learning  algorithm is said to have underfitting when it cannot capture the  underlying trend of the data, that happens (among other cases) when model size is too small to develop a general rule for data that has large variety and amount of noise."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Overfitting"),':\nA statistical model is said to be overfitted, when it starts learning from the noise and inaccurate data entries in our data set. That happens when you have large model and relatively small dataset - the model can just learn "by heart" all the data points without generalizing.'),(0,a.kt)("p",null,"When collecting samples it is important to provide diversity for model to be able to generalize better, for example have samples with different direction, speed and distance from sensor. In general, the network only can learn from data present in the dataset \u2013 so if the only  samples you  have are gestures being moved from left to right above the  sensor, you shouldn\u2019t expect trained model to be able to recognize gestures being moved right to left or up and down."),(0,a.kt)("h2",{id:"building-a-machine-learning-model"},"Building a machine learning model"),(0,a.kt)("p",null,"After you collected the samples it is time to design an \u201cimpulse\u201d. Impulse here is the word Edge Impulse used to denote data processing \u2013 training pipeline. Press on Create Impulse and set Window length to 1000 ms. and Window length increase to 50 ms."),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:600,src:"https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-1/main.png"})),(0,a.kt)("p",null,"These settings mean that each time an inference is performed we're going to take sensor measurements for 1000 ms. - how many measurements your device is going to take depends on the frequency. During data collection you set sampling frequency to 40 Hz, or 40 times per 1 second. So, to sum it up, your device is going to gather 40 data samples within 1000 ms. time window and then take these values, preprocess them and feed them to neural network to get inference result. Of course we use the same window size during the training.\nFor this proof-of-concept project,  we are going to try three different prepossessing blocks with default parameters(except for adding scaling) \u2013\n",(0,a.kt)("strong",{parentName:"p"},"Flatten")," block, which takes computes Average, Min, Max and other functions of raw data within time window."),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:600,src:"https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-1/image_ZEX5ydSwOS.jpeg"})),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Spectral Features")," block, which extracts the frequency and power characteristics of a signal over time."),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:600,src:"https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-1/image_7uXlLwjT3E.jpeg"})),"and Raw data block, which as you might have guessed just feeds raw data to NN learning block (optionally  normalizing the data).",(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:600,src:"https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-1/image.png"})),"We'll start with Flatten block. Add this block and then add Neural Network (Keras) as learning block, check Flatten as input features and click on Save Impulse. Go to the next tab, which has a name of the processing block you have chosen - Flatten. There enter 0.001 in scaling and leave other parameters the same. Press on Save parameters and then Generate features.",(0,a.kt)("p",null,"Feature  visualization is particularity useful tool in Edge Impulse  web  interface, as it allows users to get graphical insights into how the data looks after prepossessing. For example this is data after Flatten processing block:"),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:600,src:"https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-1/image_4tnpR9t34s.jpeg"})),(0,a.kt)("p",null,"We can see that the data points for different classes are roughly  divided, but there is a lot of overlap between rock and other classes, which will cause issues and low accuracy for these two classes. After you generated and inspected the features, go to NN CLassifier tab.\nTrain a simple fully-connected network with 2 hidden layers, 20 and 10 neurons in each hidden layer for 500 epochs with 1e-4 learning rate. After the training is done you're going to see test results in confusion matrix, similar to this:"),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:600,src:"https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-1/flatten.png"})),"Go back to Create Impulse tab, delete Flatten block and choose Spectral Features block, generate the features (remember to set scaling to 0.001!) and train Neural network on Spectral features data. You should see slight improvement.",(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:600,src:"https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-1/spectral.png"})),"Both Flatten and Spectral Features blocks are actually not the best processing methods for rock-paper-scissors gesture recognition task. If we think about  it, for classifying rock-paper-scissors gestures we  just need to count  how many times and for how long the light sensor has  received  \u201clower-than-normal\u201d values. If it is one relatively long time \u2013  then it  is rock (fist passing above the sensors). If it is two times,  then it  is scissors. Anything more than that is paper. Sounds easy, but   preserving time series data is really important for neural network to be   able to learn this relationship in data points. Both Flatten and Spectral Features   processing blocks remove the time relationship within each window \u2013   Flatten block simply turns the raw values, that are initially in sequence to Average, Min, Max, etc. values calculated on all values in time window, irrespective of their order. Spectral Features block extracts the frequency and power  characteristics and the reason it didn\u2019t work that well for this particular task is probably, that the duration of each gesture is too short. So, the way to achieve best performance is to use Raw data block, which will preserve the time series data. Have a look at sample project where we used Raw data and Convolutional 1D network, a more specialized type of network, compared to fully-connected. We were able to achieve 92.4% accuracy on the same data!",(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:600,src:"https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-1/raw.png"})),(0,a.kt)("p",null,"The final results after training were"),(0,a.kt)("p",null,"\u2022 Flatten FC 69.9 % accuracy"),(0,a.kt)("p",null,"\u2022 Spectral Features FC 70.4 % accuracy"),(0,a.kt)("p",null,"\u2022 Raw Data Conv1D 92.4 % accuracy"),(0,a.kt)("p",null,"After the training you can test the model using Live classification tab,  which will gather a data sample from device and classify it with model hosted on Edge Impulse. We test with three different gestures and see the accuracy is satisfactory as far as proof of concept goes."),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:600,src:"https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-1/live_class.png"})),(0,a.kt)("h2",{id:"deploying-to-wio-terminal"},"Deploying to Wio Terminal"),(0,a.kt)("p",null,"The next step is deployment on device. After clicking on Deployment tab, choose Arduino library and download it."),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:600,src:"https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-1/deploy.png"})),(0,a.kt)("p",null,"Extract the archive and place it in your Arduino libraries folder. Open Arduino IDE and choose  static buffer sketch (located in File -> Examples -> name of your project -> static_buffer) , which already has all the boilerplate code for classification with your model in place. Neat!"),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:600,src:"https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-1/example.png"})),(0,a.kt)("p",null,"The only thing for use to fill in is  the data acquisition on-device.  We\u2019ll use a simple for loop with delay  to account for frequency (if you  remember we had 25 ms delay when gathering data for training dataset)."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},"int raw_feature_get_data(size_t offset, size_t length, float *out_ptr) {\nfloat features[40];\nfor (byte i = 0; i < 40; i = i + 1) \n    {\n    features[i]=analogRead(WIO_LIGHT);\n    delay(25);\n    }\n    memcpy(out_ptr, features + offset, length * sizeof(float));\n    return 0;\n}\n")),(0,a.kt)("p",null,"Certainly there are better ways to implement this, for example a sensor data buffer, which would allow us to perform inference more often. But we\u2019ll get to that in later articles of this series."),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:600,src:"https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-1/gif3.gif"})),(0,a.kt)("p",null,"While it was just a proof of  concept demonstration, it really shows  TinyML is up to something big.  You probably knew it is  possible to recognize gestures with a camera sensor, even if image is down-scaled a lot. But recognizing  gestures with just 1 pixel is entirely different level!"),(0,a.kt)("h2",{id:"reference"},"Reference"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"https://studio.edgeimpulse.com/public/15854/latest"},"Edge Impulse Public project"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"https://github.com/Seeed-Studio/Seeed_Arduino_Sketchbook/tree/master/examples/WioTerminal_TinyML_1_Intro"},"Project Github")))))}p.isMDXComponent=!0}}]);