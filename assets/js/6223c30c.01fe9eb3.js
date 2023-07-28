"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[58681],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>k});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=d(n),c=i,k=u["".concat(s,".").concat(c)]||u[c]||m[c]||r;return n?a.createElement(k,l(l({ref:t},p),{},{components:n})):a.createElement(k,l({ref:t},p))}));function k(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,l=new Array(r);l[0]=c;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[u]="string"==typeof e?e:i,l[1]=o;for(var d=2;d<r;d++)l[d]=n[d];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},87388:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>r,metadata:()=>o,toc:()=>d});var a=n(87462),i=(n(67294),n(3905));const r={description:"Wio-WM1110 Dev Kit Hardware Overview",title:"Hardware Overview",keywords:["Wio-WM1110 Dev Kit"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Wio-WM1110_Dev_Kit_Hardware_Overview",last_update:{date:"6/27/2023",author:"Jessie"}},l=void 0,o={unversionedId:"Sensor/Wio_Series/Wio-WM1110_Dev_Kit/Hardware_Overview",id:"Sensor/Wio_Series/Wio-WM1110_Dev_Kit/Hardware_Overview",title:"Hardware Overview",description:"Wio-WM1110 Dev Kit Hardware Overview",source:"@site/docs/Sensor/Wio_Series/Wio-WM1110_Dev_Kit/Hardware_Overview.md",sourceDirName:"Sensor/Wio_Series/Wio-WM1110_Dev_Kit",slug:"/Wio-WM1110_Dev_Kit_Hardware_Overview",permalink:"/Wio-WM1110_Dev_Kit_Hardware_Overview",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Sensor/Wio_Series/Wio-WM1110_Dev_Kit/Hardware_Overview.md",tags:[],version:"current",lastUpdatedBy:"Jessie",lastUpdatedAt:1687824e3,formattedLastUpdatedAt:"Jun 27, 2023",frontMatter:{description:"Wio-WM1110 Dev Kit Hardware Overview",title:"Hardware Overview",keywords:["Wio-WM1110 Dev Kit"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Wio-WM1110_Dev_Kit_Hardware_Overview",last_update:{date:"6/27/2023",author:"Jessie"}},sidebar:"ProductSidebar",previous:{title:"Get Started",permalink:"/Get_Started_with_Wio-WM1110_Dev_Kit"},next:{title:"Server Configuration",permalink:"/Wio-WM1110_Dev_Kit_Server_Configuration"}},s={},d=[{value:"LoRaWAN\xae Communication",id:"lorawan-communication",level:2},{value:"Define the keys",id:"define-the-keys",level:3},{value:"Positioning",id:"positioning",level:2},{value:"GNSS",id:"gnss",level:3},{value:"Geolocation GNSS Example",id:"geolocation-gnss-example",level:4},{value:"Wi-Fi",id:"wi-fi",level:3},{value:"Geolocation Wi-Fi Example",id:"geolocation-wi-fi-example",level:4},{value:"GNSS and Wi-Fi",id:"gnss-and-wi-fi",level:3},{value:"Geolocation GNSS and Wi-Fi example",id:"geolocation-gnss-and-wi-fi-example",level:4},{value:"Built-in Sensors",id:"built-in-sensors",level:2},{value:"TH Sensor(SHT41)",id:"th-sensorsht41",level:3},{value:"3-axis Accelerometer(LIS3DHTR)",id:"3-axis-accelerometerlis3dhtr",level:3}],p={toc:d};function u(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The Wio WM1110 Dev Kit is an open source platform for building IoT projects. It provides low-power loRa network connection and a full range of location coverage services. This kit also includes a range of sensors and peripherals, making it a versatile platform for building IoT projects."),(0,i.kt)("p",null,"In this tutorial, we will introduce the hardware overview and how to develop your own application! "),(0,i.kt)("h1",{id:"hardware-overview"},"Hardware Overview"),(0,i.kt)("p",null,"The Wio-WM1110 Dev Kit is based on ",(0,i.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/Wio-WM1110-Module-LR1110-and-nRF52840-p-5676.html"},"Wio-WM1110 Module"),",integrates Semtech's LoRa\xae transceiver and a multi-purpose radio front-end for geolocation, the board has a built-in TH sensor and a 3-axis Accelerometer, also providing connectivity options for a variety of peripherals."),(0,i.kt)("p",{style:{textAlign:"center"}},(0,i.kt)("img",{src:"https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/hardware_overview1.png",alt:"pir",width:800,height:"auto"})),(0,i.kt)("h1",{id:"pinout"},"Pinout"),(0,i.kt)("p",{style:{textAlign:"center"}},(0,i.kt)("img",{src:"https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/PIN.png",alt:"pir",width:800,height:"auto"})),(0,i.kt)("h2",{id:"lorawan-communication"},"LoRaWAN\xae Communication"),(0,i.kt)("h3",{id:"define-the-keys"},"Define the keys"),(0,i.kt)("p",null,"Define the JoinEUI/DevEUI/APPEUI in config file."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},"...\\Seeed_Wio_WM1110_Dev_Board\\apps\\common\\lorawan_key_config.h\n")),(0,i.kt)("p",{style:{textAlign:"center"}},(0,i.kt)("img",{src:"https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/keys.png",alt:"pir",width:800,height:"auto"})),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"LoRa Basics Modem LoRaWAN\xae Class A/C example")),(0,i.kt)("p",null,"The application will automatically starts a procedure to join a LoRaWAN network see ",(0,i.kt)("strong",{parentName:"p"},"lorawan_key_config.h")),(0,i.kt)("p",null,"Once a network is joined (i.e. when the corresponding event is triggered), uplinks are sent periodically. This periodic action is based on the LoRa Basics Modem alarm functionality. Each time the alarm-related event is triggered, the application requests an uplink."),(0,i.kt)("p",null,"The content of the uplink is the value read out from the charge counter by calling ",(0,i.kt)("inlineCode",{parentName:"p"},"smtc_modem_get_charge()"),"."),(0,i.kt)("p",null,"The application is also capable of displaying data and meta-data of a received downlink."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Configuration")),(0,i.kt)("p",null,"Several parameters can be updated in ",(0,i.kt)("inlineCode",{parentName:"p"},"main_lorawan.h")," header file:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Constant"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"LORAWAN_APP_PORT")),(0,i.kt)("td",{parentName:"tr",align:null},"LoRaWAN\xae FPort used for the uplink messages")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"LORAWAN_CONFIRMED_MSG_ON")),(0,i.kt)("td",{parentName:"tr",align:null},"Request a confirmation from the LNS that the uplink message has been received")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"APP_TX_DUTYCYCLE")),(0,i.kt)("td",{parentName:"tr",align:null},"Delay in second between two uplinks")))),(0,i.kt)("h2",{id:"positioning"},"Positioning"),(0,i.kt)("h3",{id:"gnss"},"GNSS"),(0,i.kt)("p",null,"By capturing a short portion of the signal broadcast by the GNSS satellites, and extracting the information required to calculate the device position - the pseudo-ranges. This information is aggregated into a NAV message which can be sent to a back-end system to compute the device position."),(0,i.kt)("p",{style:{textAlign:"center"}},(0,i.kt)("img",{src:"https://wdcdn.qpic.cn/MTY4ODg1NTkyNTI4NTI1MQ_47857_JbH8r_MU_X1uz1V7_1687329215?w=1265&h=592&type=image/jpeg",alt:"pir",width:800,height:"auto"})),(0,i.kt)("p",null,"The GNSS scanner of the Wio-WM1110 has two modes of operations: autonomous and assisted."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"GNSS autonomous mode:")," Does not require any assistance location or almanac data, and aims to detect strong satellite signals. Therefore it is suitable for outdoor conditions with good sky visibility."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"GNSS assisted mode"),"\uff1aIt allows the most efficient GNSS geolocation. Assistance information can build a list of the satellites in view at the current time and location, in order to reduce the GNSS satellites search space, and therefore optimize the time and energy spent geolocating. The assistance information is tailored to an LPWAN network, limiting the data sent, especially the downlink size and frequency. It consists of:  "),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"LR1110 approximate position "),(0,i.kt)("li",{parentName:"ul"},"Current time "),(0,i.kt)("li",{parentName:"ul"},"Up-to-date reduced size Almanac information (less than 3 months old)")),(0,i.kt)("h4",{id:"geolocation-gnss-example"},"Geolocation GNSS Example"),(0,i.kt)("p",null,"This example illustrates the GNSS scan procedure:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"configuration of the LoRa Basics Modem library; and"),(0,i.kt)("li",{parentName:"ul"},"execution of GNSS ",(0,i.kt)("em",{parentName:"li"},"scan & send")," feature using the ",(0,i.kt)("em",{parentName:"li"},"GNSS geolocation middleware"),".")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"GNSS demonstration related configuration")),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"main_geolocation_gnss.h")," header file defines several constants to configure geolocation parameters."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Constant"),(0,i.kt)("th",{parentName:"tr",align:null},"Comments"),(0,i.kt)("th",{parentName:"tr",align:null},"Possible values"),(0,i.kt)("th",{parentName:"tr",align:null},"Default Value"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"MODEM_EXAMPLE_ASSISTANCE_POSITION_AUTO")),(0,i.kt)("td",{parentName:"tr",align:null},"If set to ",(0,i.kt)("inlineCode",{parentName:"td"},"true"),": configures the application to autonomously get an assistance position"),(0,i.kt)("td",{parentName:"tr",align:null},"{",(0,i.kt)("inlineCode",{parentName:"td"},"true"),",",(0,i.kt)("inlineCode",{parentName:"td"},"false"),"}"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"true"))))),(0,i.kt)("p",null,"If manual mode is selected for assistance position, the following constants define the position to be used."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Constant"),(0,i.kt)("th",{parentName:"tr",align:null},"Comments"),(0,i.kt)("th",{parentName:"tr",align:null},"Possible values"),(0,i.kt)("th",{parentName:"tr",align:null},"Default Value"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"MODEM_EXAMPLE_ASSISTANCE_POSITION_LAT")),(0,i.kt)("td",{parentName:"tr",align:null},"The latitude to use for GNSS Assisted scan (decimal degree)"),(0,i.kt)("td",{parentName:"tr",align:null},"Any ",(0,i.kt)("inlineCode",{parentName:"td"},"float")," in ","[-90, 90]"),(0,i.kt)("td",{parentName:"tr",align:null},"45.181454")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"MODEM_EXAMPLE_ASSISTANCE_POSITION_LONG")),(0,i.kt)("td",{parentName:"tr",align:null},"The longitude to use for GNSS Assisted scan (decimal degree)"),(0,i.kt)("td",{parentName:"tr",align:null},"Any ",(0,i.kt)("inlineCode",{parentName:"td"},"float")," in ","[-180, 180]"),(0,i.kt)("td",{parentName:"tr",align:null},"5.720893")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"MODEM_EXAMPLE_ASSISTANCE_POSITION_TEXT")),(0,i.kt)("td",{parentName:"tr",align:null},"A text representation of the assistance position, for information printing only"),(0,i.kt)("td",{parentName:"tr",align:null},"Any constant c-string"),(0,i.kt)("td",{parentName:"tr",align:null},'"Grenoble, FRANCE"')))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"Note")),": The pre-defined assistance position must be within a 150 km range of the actual location."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Constant"),(0,i.kt)("th",{parentName:"tr",align:null},"Comments"),(0,i.kt)("th",{parentName:"tr",align:null},"Possible values"),(0,i.kt)("th",{parentName:"tr",align:null},"Default Value"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"GNSS_SCAN_GROUP_PERIOD")),(0,i.kt)("td",{parentName:"tr",align:null},"Defines the duration between the end of a scan & send sequence and the start of next sequence"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"uint32_t")),(0,i.kt)("td",{parentName:"tr",align:null},"30")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"GNSS_SCAN_MODE")),(0,i.kt)("td",{parentName:"tr",align:null},"Defines the GNSS scan mode (static or mobile) to be used for scan & send sequences."),(0,i.kt)("td",{parentName:"tr",align:null},"Value in ",(0,i.kt)("inlineCode",{parentName:"td"},"gnss_mw_mode_t")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"GNSS_MW_MODE_STATIC"))))),(0,i.kt)("p",null,"The GNSS scan mode selected by default is ",(0,i.kt)("inlineCode",{parentName:"p"},"GNSS_MW_MODE_STATIC"),", meaning that\nthis application example targets non-mobile objects."),(0,i.kt)("h3",{id:"wi-fi"},"Wi-Fi"),(0,i.kt)("p",null,"By discovering the Wi-Fi b/g/n access points available in the vicinity of the device, and extract MAC addresses allowing to geolocate the device. The objective is to obtain at least 2 MAC addresses, which can be used to position the device, after they have been sent to an online Wi-Fi lookup service"),(0,i.kt)("p",{style:{textAlign:"center"}},(0,i.kt)("img",{src:"https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/Schematic02.png",alt:"pir",width:800,height:"auto"})),(0,i.kt)("h4",{id:"geolocation-wi-fi-example"},"Geolocation Wi-Fi Example"),(0,i.kt)("p",null,"This application demonstrates the usage of the Wi-Fi geolocation middleware and\nhow the LoRa Basics Modem should be configured to meet the prerequisites for\nThis example illustrates the Wi-Fi scan procedure:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"configuration of the LoRa Basics Modem library; and"),(0,i.kt)("li",{parentName:"ul"},"execution of Wi-Fi ",(0,i.kt)("em",{parentName:"li"},"scan & send")," feature using the ",(0,i.kt)("em",{parentName:"li"},"Wi-Fi geolocation middleware"),".")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Wi-Fi demonstration related configuration")),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"main_geolocation_wifi.h")," header file defines several constants which can be\nset to define the configurable parameters of the application."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Constant"),(0,i.kt)("th",{parentName:"tr",align:null},"Comments"),(0,i.kt)("th",{parentName:"tr",align:null},"Possible values"),(0,i.kt)("th",{parentName:"tr",align:null},"Default Value"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"WIFI_SCAN_PERIOD")),(0,i.kt)("td",{parentName:"tr",align:null},"Defines the duration between the end of a scan & send sequence and the start of next sequence"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"uint32_t")),(0,i.kt)("td",{parentName:"tr",align:null},"30")))),(0,i.kt)("h3",{id:"gnss-and-wi-fi"},"GNSS and Wi-Fi"),(0,i.kt)("h4",{id:"geolocation-gnss-and-wi-fi-example"},"Geolocation GNSS and Wi-Fi example"),(0,i.kt)("p",null,"This example illustrates the combination of GNSS and Wi-Fi scan procedures:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"configuration of the LoRa Basics Modem library; and"),(0,i.kt)("li",{parentName:"ul"},"concurrent execution of GNSS and Wi-Fi ",(0,i.kt)("em",{parentName:"li"},"scan & send")," features using the\n",(0,i.kt)("em",{parentName:"li"},"GNSS geolocation middleware")," and the ",(0,i.kt)("em",{parentName:"li"},"Wi-Fi geolocation middleware"),".")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Geolocation demonstration related configuration")),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"main_geolocation_gnss_wifi.h")," header file defines several constants to configure geolocation parameters."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Constant"),(0,i.kt)("th",{parentName:"tr",align:null},"Comments"),(0,i.kt)("th",{parentName:"tr",align:null},"Possible values"),(0,i.kt)("th",{parentName:"tr",align:null},"Default Value"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"MODEM_EXAMPLE_ASSISTANCE_POSITION_AUTO")),(0,i.kt)("td",{parentName:"tr",align:null},"If set to ",(0,i.kt)("inlineCode",{parentName:"td"},"true"),": configures the application to autonomously get an assistance position"),(0,i.kt)("td",{parentName:"tr",align:null},"{",(0,i.kt)("inlineCode",{parentName:"td"},"true"),",",(0,i.kt)("inlineCode",{parentName:"td"},"false"),"}"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"false"))))),(0,i.kt)("p",null,"If manual mode is selected for assistance position, the following constants define the position to be used."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Constant"),(0,i.kt)("th",{parentName:"tr",align:null},"Comments"),(0,i.kt)("th",{parentName:"tr",align:null},"Possible values"),(0,i.kt)("th",{parentName:"tr",align:null},"Default Value"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"MODEM_EXAMPLE_ASSISTANCE_POSITION_LAT")),(0,i.kt)("td",{parentName:"tr",align:null},"The latitude to use for GNSS Assisted scan (decimal degree)"),(0,i.kt)("td",{parentName:"tr",align:null},"Any ",(0,i.kt)("inlineCode",{parentName:"td"},"float")," in ","[-90, 90]"),(0,i.kt)("td",{parentName:"tr",align:null},"45.181454")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"MODEM_EXAMPLE_ASSISTANCE_POSITION_LONG")),(0,i.kt)("td",{parentName:"tr",align:null},"The longitude to use for GNSS Assisted scan (decimal degree)"),(0,i.kt)("td",{parentName:"tr",align:null},"Any ",(0,i.kt)("inlineCode",{parentName:"td"},"float")," in ","[-180, 180]"),(0,i.kt)("td",{parentName:"tr",align:null},"5.720893")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"MODEM_EXAMPLE_ASSISTANCE_POSITION_TEXT")),(0,i.kt)("td",{parentName:"tr",align:null},"A text representation of the assistance position, for information printing only"),(0,i.kt)("td",{parentName:"tr",align:null},"Any constant c-string"),(0,i.kt)("td",{parentName:"tr",align:null},'"Grenoble, FRANCE"')))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"Note")),": The pre-defined assistance position must be within a 150 km range of the actual location."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Constant"),(0,i.kt)("th",{parentName:"tr",align:null},"Comments"),(0,i.kt)("th",{parentName:"tr",align:null},"Possible values"),(0,i.kt)("th",{parentName:"tr",align:null},"Default Value"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"GNSS_SCAN_GROUP_PERIOD")),(0,i.kt)("td",{parentName:"tr",align:null},"Defines the duration between the end of a scan & send sequence and the start of next sequence"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"uint32_t")),(0,i.kt)("td",{parentName:"tr",align:null},"30")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"GNSS_SCAN_MODE")),(0,i.kt)("td",{parentName:"tr",align:null},"Defines the GNSS scan mode (static or mobile) to be used for scan & send sequences."),(0,i.kt)("td",{parentName:"tr",align:null},"Value in ",(0,i.kt)("inlineCode",{parentName:"td"},"gnss_mw_mode_t")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"GNSS_MW_MODE_MOBILE"))))),(0,i.kt)("p",null,"The GNSS scan mode selected by default is ",(0,i.kt)("inlineCode",{parentName:"p"},"GNSS_MW_MODE_MOBILE"),", meaning that this application example targets mobile objects."),(0,i.kt)("h2",{id:"built-in-sensors"},"Built-in Sensors"),(0,i.kt)("h3",{id:"th-sensorsht41"},"TH Sensor(SHT41)"),(0,i.kt)("p",null,"SHT41 is a digital humidity and temperature sensor, it communicates with a microcontroller or other digital device through an I2C interface."),(0,i.kt)("p",null,"The SHT41 sensor is commonly used in a wide range of applications, including HVAC systems, weather stations, indoor air quality monitoring, and industrial process control. Its small size, low power consumption, and high accuracy make it a popular choice for many different types of projects."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null}),(0,i.kt)("th",{parentName:"tr",align:null},"Range"),(0,i.kt)("th",{parentName:"tr",align:null},"Accuracy"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Temperature"),(0,i.kt)("td",{parentName:"tr",align:null},"-40~125\xb0C"),(0,i.kt)("td",{parentName:"tr",align:null},"0.2\xb0C")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Humidity"),(0,i.kt)("td",{parentName:"tr",align:null},"0~100%RH"),(0,i.kt)("td",{parentName:"tr",align:null},"1.8%RH")))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Code:")),(0,i.kt)("p",null,"This example provides functions for initializing the sensor, reading temperature and humidity values, and setting the temperature unit."),(0,i.kt)("p",null,"Here's a brief summary of the functions defined in this code:"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"SHT41Init"),": a function that initializes the sensor by resetting it and waiting for 1ms before proceeding."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"SHT41GetTemperature, SHT41GetHumidity, and SHT41GetTempAndHumi"),": functions for reading temperature and/or humidity values from the sensor. These functions convert the raw sensor values to a float value in degrees Celsius or Fahrenheit, depending on the current temperature unit setting."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"SHT41SetTemperatureUnit and SHT41GetTemperatureUnit"),": functions for setting and getting the temperature unit.\ncrc8: an internal function that calculates the CRC-8 checksum of a byte array."),(0,i.kt)("h3",{id:"3-axis-accelerometerlis3dhtr"},"3-axis Accelerometer(LIS3DHTR)"),(0,i.kt)("p",null,"The LIS3DHTR is a high-performance sensor that measures acceleration in three dimensions and provides accurate and reliable readings."),(0,i.kt)("p",null,"The LIS3DHTR sensor communicates with a microcontroller or other digital device through an I2C or SPI interface. It also includes advanced features such as programmable interrupts and a wide range of power-saving modes to help minimize power consumption."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Range"),(0,i.kt)("th",{parentName:"tr",align:null},"Bandwidth"),(0,i.kt)("th",{parentName:"tr",align:null},"Sensitivity(LSB/g)"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"\xb12g, 4g, 8g, 16g"),(0,i.kt)("td",{parentName:"tr",align:null},"0.5Hz ~ 625Hz"),(0,i.kt)("td",{parentName:"tr",align:null},"1000 (\xb12g) ~ 83 (\xb116g)")))),(0,i.kt)("h1",{id:"resources"},"Resources"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/Seeed-Studio/Seeed_Wio_WM1110_Dev_Board"},"Seeed_Wio_WM1110_Dev_Board")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://www.nordicsemi.com/Products/Development-software/nRF5-SDK/Download#infotabs"},"nRF5-SDK")),(0,i.kt)("h1",{id:"tech-support"},"Tech Support"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Need help with your Wio-WM1110 Dev Kit? We're here to assist you!")),(0,i.kt)("div",{class:"button_tech_support_container"},(0,i.kt)("a",{href:"https://discord.gg/sensecap",class:"button_tech_support_sensecap"}),(0,i.kt)("a",{href:"https://support.sensecapmx.com/portal/en/home",class:"button_tech_support_sensecap3"})),(0,i.kt)("div",{class:"button_tech_support_container"},(0,i.kt)("a",{href:"mailto:support@sensecapmx.com",class:"button_tech_support_sensecap2"}),(0,i.kt)("a",{href:"https://github.com/Seeed-Solution/SenseCAP_Indicator_ESP32/discussions",class:"button_discussion"})))}u.isMDXComponent=!0}}]);