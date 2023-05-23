"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5188],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>f});var i=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,i,r=function(e,n){if(null==e)return{};var t,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=i.createContext({}),d=function(e){var n=i.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},p=function(e){var n=d(e.components);return i.createElement(s.Provider,{value:n},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},m=i.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=d(t),m=r,f=c["".concat(s,".").concat(m)]||c[m]||u[m]||a;return t?i.createElement(f,o(o({ref:n},p),{},{components:t})):i.createElement(f,o({ref:n},p))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,o=new Array(a);o[0]=m;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[c]="string"==typeof e?e:r,o[1]=l;for(var d=2;d<a;d++)o[d]=t[d];return i.createElement.apply(null,o)}return i.createElement.apply(null,t)}m.displayName="MDXCreateElement"},46730:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>a,metadata:()=>l,toc:()=>d});var i=t(87462),r=(t(67294),t(3905));const a={description:"Overview",title:"Overview",keywords:["Wio_terminal RTC"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Wio-Terminal-RTC",last_update:{date:"1/17/2023",author:"jianjing Huang"}},o="RTC Overview",l={unversionedId:"Sensor/Wio_Terminal/Hardware_Overview/RTC/Wio-Terminal-RTC",id:"Sensor/Wio_Terminal/Hardware_Overview/RTC/Wio-Terminal-RTC",title:"Overview",description:"Overview",source:"@site/docs/Sensor/Wio_Terminal/Hardware_Overview/RTC/Wio-Terminal-RTC.md",sourceDirName:"Sensor/Wio_Terminal/Hardware_Overview/RTC",slug:"/Wio-Terminal-RTC",permalink:"/Wio-Terminal-RTC",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Sensor/Wio_Terminal/Hardware_Overview/RTC/Wio-Terminal-RTC.md",tags:[],version:"current",lastUpdatedBy:"jianjing Huang",lastUpdatedAt:1673913600,formattedLastUpdatedAt:"Jan 17, 2023",frontMatter:{description:"Overview",title:"Overview",keywords:["Wio_terminal RTC"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Wio-Terminal-RTC",last_update:{date:"1/17/2023",author:"jianjing Huang"}},sidebar:"ProductSidebar",previous:{title:"Bluetooth Ibeacon",permalink:"/BLE-ibeacon-using-Wio-terminal"},next:{title:"Overview",permalink:"/Wio-Terminal-Buttons"}},s={},d=[{value:"Installing the Seeed_Arduino_RTC Library For Wio Terminal",id:"installing-the-seeed_arduino_rtc-library-for-wio-terminal",level:2},{value:"Example Code",id:"example-code",level:2},{value:"Advanced RTC Usage",id:"advanced-rtc-usage",level:2},{value:"Dependent libraries",id:"dependent-libraries",level:3}],p={toc:d};function c(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,i.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"rtc-overview"},"RTC Overview"),(0,r.kt)("p",null,"This wiki introduces how to use the built-in RTC functionality inside the SAMD51 core within Wio Terminal for you to keep track of time. This feature saves you from adding an external RTC module to the system!"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Wio-Terminal-RTC/demo.png",alt:null})),(0,r.kt)("h2",{id:"installing-the-seeed_arduino_rtc-library-for-wio-terminal"},"Installing the Seeed_Arduino_RTC Library For Wio Terminal"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Visit the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/Seeed-Studio/Seeed_Arduino_RTC"},"Seeed_Arduino_RTC")," repositories and download the entire repo to your local drive.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Now, the Seeed_Arduino_RTC can be installed to the Arduino IDE. Open the Arduino IDE, and click ",(0,r.kt)("inlineCode",{parentName:"p"},"sketch")," -> ",(0,r.kt)("inlineCode",{parentName:"p"},"Include Library")," -> ",(0,r.kt)("inlineCode",{parentName:"p"},"Add .ZIP Library"),", and choose the ",(0,r.kt)("inlineCode",{parentName:"p"},"Seeed_Arduino_RTC")," file that you've have just downloaded."))),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Wio-Terminal/img/Xnip2019-11-21_15-50-13.jpg",alt:"InstallLibrary"})),(0,r.kt)("h2",{id:"example-code"},"Example Code"),(0,r.kt)("p",null,"THe following code is the basic usage of the RTC library for SAMD51:"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"For more API reference, please check ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/Seeed-Studio/Seeed_Arduino_RTC"},"here"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},"#include \"RTC_SAMD51.h\"\n#include \"DateTime.h\"\n\nRTC_SAMD51 rtc;\nvoid setup()\n{\n    rtc.begin();\n\n    Serial.begin(115200);\n\n    while (!Serial)\n    {\n        ;\n    }\n\n    DateTime now = DateTime(F(__DATE__), F(__TIME__));\n    Serial.println(\"adjust time!\");\n    rtc.adjust(now);\n\n    now = rtc.now();\n\n    Serial.print(now.year(), DEC);\n    Serial.print('/');\n    Serial.print(now.month(), DEC);\n    Serial.print('/');\n    Serial.print(now.day(), DEC);\n    Serial.print(\" \");\n    Serial.print(now.hour(), DEC);\n    Serial.print(':');\n    Serial.print(now.minute(), DEC);\n    Serial.print(':');\n    Serial.print(now.second(), DEC);\n    Serial.println();\n\n    DateTime alarm = DateTime(now.year(), now.month(), now.day(), now.hour(), now.minute(), now.second() + 15);\n\n    rtc.setAlarm(0,alarm); // match after 15 seconds\n    rtc.enableAlarm(0, rtc.MATCH_HHMMSS); // match Every Day\n\n    rtc.attachInterrupt(alarmMatch); // callback whlie alarm is match\n\n}\n\nvoid loop()\n{\n}\n\nvoid alarmMatch(uint32_t flag)\n{\n\n    Serial.println(\"Alarm Match!\");\n    DateTime now = rtc.now();\n    Serial.print(now.year(), DEC);\n    Serial.print('/');\n    Serial.print(now.month(), DEC);\n    Serial.print('/');\n    Serial.print(now.day(), DEC);\n    Serial.print(\" \");\n    Serial.print(now.hour(), DEC);\n    Serial.print(':');\n    Serial.print(now.minute(), DEC);\n    Serial.print(':');\n    Serial.print(now.second(), DEC);\n    Serial.println();\n}\n")),(0,r.kt)("h2",{id:"advanced-rtc-usage"},"Advanced RTC Usage"),(0,r.kt)("p",null,"You may also use NTP to get the time for the RTC."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"For this demo, you must go through the ",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("a",{parentName:"strong",href:"https://wiki.seeedstudio.com/Wio-Terminal-Network-Overview/"},"Wio Terminal Network wiki"))," first.")),(0,r.kt)("h3",{id:"dependent-libraries"},"Dependent libraries"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Wio Temrinal Network Related libraries")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"https://github.com/Seeed-Studio/Seeed_Arduino_RTC"},"Seeed_Arduino_RTC"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"https://github.com/ansonhe97/millisDelay"},"millisDelay")))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},'#include <AtWiFi.h>\n#include <millisDelay.h>\n#include <Wire.h>\n#include "RTC_SAMD51.h"\n#include "DateTime.h"\n\n\nconst char ssid[] = "Your-network"; // add your required ssid\nconst char password[] = "Your-password"; // add your own netywork password\n\nmillisDelay updateDelay; // the update delay object. used for ntp periodic update.\n\nunsigned int localPort = 2390;      // local port to listen for UDP packets\n\n// switch between local and remote time servers\n// comment out to use remote server\n//#define USELOCALNTP\n\n#ifdef USELOCALNTP\n    char timeServer[] = "n.n.n.n"; // local NTP server \n#else\n    char timeServer[] = "time.nist.gov"; // extenral NTP server e.g. time.nist.gov\n#endif\nconst int NTP_PACKET_SIZE = 48; // NTP time stamp is in the first 48 bytes of the message\n\nbyte packetBuffer[NTP_PACKET_SIZE]; //buffer to hold incoming and outgoing packets\n\n// declare a time object\nDateTime now;\n\n// define WiFI client\nWiFiClient client;\n\n//The udp library class\nWiFiUDP udp;\n\n// localtime\nunsigned long devicetime;\n\nRTC_SAMD51 rtc;\n\n// for use by the Adafuit RTClib library\nchar daysOfTheWeek[7][12] = { "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday" };\n\nvoid setup() {\n\n    Serial.begin(115200);\n\n    while (!Serial); // wait for serial port to connect. Needed for native USB\n\n\n    // setup network before rtc check \n    connectToWiFi(ssid, password);\n\n    // get the time via NTP (udp) call to time server\n    // getNTPtime returns epoch UTC time adjusted for timezone but not daylight savings\n    // time\n    devicetime = getNTPtime();\n\n    // check if rtc present\n    if (devicetime == 0) {\n        Serial.println("Failed to get time from network time server.");\n    }\n\n    if (!rtc.begin()) {\n        Serial.println("Couldn\'t find RTC");\n        while (1) delay(10); // stop operating\n    }\n\n    // get and print the current rtc time\n    now = rtc.now();\n    Serial.print("RTC time is: ");\n    Serial.println(now.timestamp(DateTime::TIMESTAMP_FULL));\n\n    // adjust time using ntp time\n    rtc.adjust(DateTime(devicetime));\n\n    // print boot update details\n    Serial.println("RTC (boot) time updated.");\n    // get and print the adjusted rtc time\n    now = rtc.now();\n    Serial.print("Adjusted RTC (boot) time is: ");\n    Serial.println(now.timestamp(DateTime::TIMESTAMP_FULL));\n\n    // start millisdelays timers as required, adjust to suit requirements\n    updateDelay.start(12 * 60 * 60 * 1000); // update time via ntp every 12 hrs\n\n}\n\nvoid loop() {\n\n    if (updateDelay.justFinished()) { // 12 hour loop\n        // repeat timer\n        updateDelay.repeat(); // repeat\n\n        // update rtc time\n        devicetime = getNTPtime();\n        if (devicetime == 0) {\n            Serial.println("Failed to get time from network time server.");\n        }\n        else {\n            rtc.adjust(DateTime(devicetime));\n            Serial.println("");\n            Serial.println("rtc time updated.");\n            // get and print the adjusted rtc time\n            now = rtc.now();\n            Serial.print("Adjusted RTC time is: ");\n            Serial.println(now.timestamp(DateTime::TIMESTAMP_FULL));\n        }\n    }\n}\n\n\nvoid connectToWiFi(const char* ssid, const char* pwd) {\n    Serial.println("Connecting to WiFi network: " + String(ssid));\n\n    // delete old config\n    WiFi.disconnect(true);\n\n    Serial.println("Waiting for WIFI connection...");\n\n    //Initiate connection\n    WiFi.begin(ssid, pwd);\n\n    while (WiFi.status() != WL_CONNECTED) {\n        delay(500);\n    }\n\n    Serial.println("Connected.");\n    printWifiStatus();\n\n}\n\n\nunsigned long getNTPtime() {\n\n    // module returns a unsigned long time valus as secs since Jan 1, 1970 \n    // unix time or 0 if a problem encounted\n\n    //only send data when connected\n    if (WiFi.status() == WL_CONNECTED) {\n        //initializes the UDP state\n        //This initializes the transfer buffer\n        udp.begin(WiFi.localIP(), localPort);\n\n        sendNTPpacket(timeServer); // send an NTP packet to a time server\n        // wait to see if a reply is available\n        delay(1000);\n        if (udp.parsePacket()) {\n            Serial.println("udp packet received");\n            Serial.println("");\n            // We\'ve received a packet, read the data from it\n            udp.read(packetBuffer, NTP_PACKET_SIZE); // read the packet into the buffer\n\n            //the timestamp starts at byte 40 of the received packet and is four bytes,\n            // or two words, long. First, extract the two words:\n\n            unsigned long highWord = word(packetBuffer[40], packetBuffer[41]);\n            unsigned long lowWord = word(packetBuffer[42], packetBuffer[43]);\n            // combine the four bytes (two words) into a long integer\n            // this is NTP time (seconds since Jan 1 1900):\n            unsigned long secsSince1900 = highWord << 16 | lowWord;\n            // Unix time starts on Jan 1 1970. In seconds, that\'s 2208988800:\n            const unsigned long seventyYears = 2208988800UL;\n            // subtract seventy years:\n            unsigned long epoch = secsSince1900 - seventyYears;\n\n            // adjust time for timezone offset in secs +/- from UTC\n            // WA time offset from UTC is +8 hours (28,800 secs)\n            // + East of GMT\n            // - West of GMT\n            long tzOffset = 28800UL;\n\n            // WA local time \n            unsigned long adjustedTime;\n            return adjustedTime = epoch + tzOffset;\n        }\n        else {\n            // were not able to parse the udp packet successfully\n            // clear down the udp connection\n            udp.stop();\n            return 0; // zero indicates a failure\n        }\n        // not calling ntp time frequently, stop releases resources\n        udp.stop();\n    }\n    else {\n        // network not connected\n        return 0;\n    }\n\n}\n\n// send an NTP request to the time server at the given address\nunsigned long sendNTPpacket(const char* address) {\n    // set all bytes in the buffer to 0\n    for (int i = 0; i < NTP_PACKET_SIZE; ++i) {\n        packetBuffer[i] = 0;\n    }\n    // Initialize values needed to form NTP request\n    // (see URL above for details on the packets)\n    packetBuffer[0] = 0b11100011;   // LI, Version, Mode\n    packetBuffer[1] = 0;     // Stratum, or type of clock\n    packetBuffer[2] = 6;     // Polling Interval\n    packetBuffer[3] = 0xEC;  // Peer Clock Precision\n    // 8 bytes of zero for Root Delay & Root Dispersion\n    packetBuffer[12] = 49;\n    packetBuffer[13] = 0x4E;\n    packetBuffer[14] = 49;\n    packetBuffer[15] = 52;\n\n    // all NTP fields have been given values, now\n    // you can send a packet requesting a timestamp:\n    udp.beginPacket(address, 123); //NTP requests are to port 123\n    udp.write(packetBuffer, NTP_PACKET_SIZE);\n    udp.endPacket();\n}\n\nvoid printWifiStatus() {\n    // print the SSID of the network you\'re attached to:\n    Serial.println("");\n    Serial.print("SSID: ");\n    Serial.println(WiFi.SSID());\n\n    // print your WiFi shield\'s IP address:\n    IPAddress ip = WiFi.localIP();\n    Serial.print("IP Address: ");\n    Serial.println(ip);\n\n    // print the received signal strength:\n    long rssi = WiFi.RSSI();\n    Serial.print("signal strength (RSSI):");\n    Serial.print(rssi);\n    Serial.println(" dBm");\n    Serial.println("");\n}\n')))}c.isMDXComponent=!0}}]);