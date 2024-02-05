"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[13843],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>h});var i=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,i,r=function(e,n){if(null==e)return{};var t,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=i.createContext({}),d=function(e){var n=i.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},c=function(e){var n=d(e.components);return i.createElement(l.Provider,{value:n},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},m=i.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=d(t),m=r,h=p["".concat(l,".").concat(m)]||p[m]||u[m]||o;return t?i.createElement(h,a(a({ref:n},c),{},{components:t})):i.createElement(h,a({ref:n},c))}));function h(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,a=new Array(o);a[0]=m;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[p]="string"==typeof e?e:r,a[1]=s;for(var d=2;d<o;d++)a[d]=t[d];return i.createElement.apply(null,a)}return i.createElement.apply(null,t)}m.displayName="MDXCreateElement"},40334:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>d});var i=t(87462),r=(t(67294),t(3905));const o={description:"Grove - Wio-E5 with XIAO-ESP32-S3 via Arduino",title:"Grove - Wio-E5 with XIAO-ESP32-S3 via Arduino",keywords:["SenseCAP"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",last_update:{date:"2/2/2024",author:"Yvonne"}},a="Grove - Wio-E5 with XIAO-ESP32-S3 via Arduino",s={unversionedId:"Sensor/Wio_Series/Wio-E5/E5_with_XIAOESP32S3_via_Arduino",id:"Sensor/Wio_Series/Wio-E5/E5_with_XIAOESP32S3_via_Arduino",title:"Grove - Wio-E5 with XIAO-ESP32-S3 via Arduino",description:"Grove - Wio-E5 with XIAO-ESP32-S3 via Arduino",source:"@site/docs/Sensor/Wio_Series/Wio-E5/E5_with_XIAOESP32S3_via_Arduino.md",sourceDirName:"Sensor/Wio_Series/Wio-E5",slug:"/Sensor/Wio_Series/Wio-E5/E5_with_XIAOESP32S3_via_Arduino",permalink:"/Sensor/Wio_Series/Wio-E5/E5_with_XIAOESP32S3_via_Arduino",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Sensor/Wio_Series/Wio-E5/E5_with_XIAOESP32S3_via_Arduino.md",tags:[],version:"current",lastUpdatedBy:"Yvonne",lastUpdatedAt:1706832e3,formattedLastUpdatedAt:"Feb 2, 2024",frontMatter:{description:"Grove - Wio-E5 with XIAO-ESP32-S3 via Arduino",title:"Grove - Wio-E5 with XIAO-ESP32-S3 via Arduino",keywords:["SenseCAP"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",last_update:{date:"2/2/2024",author:"Yvonne"}},sidebar:"ProductSidebar",previous:{title:"Wio-E5 STM32WLE5JC Module",permalink:"/LoRa-E5_STM32WLE5JC_Module"},next:{title:"Wio Tracker 1110 Introduction",permalink:"/Wio-Tracker_Introduction"}},l={},d=[{value:"Implementation",id:"implementation",level:2},{value:"Arduino Program Code",id:"arduino-program-code",level:3},{value:"Software",id:"software",level:3},{value:"ChirpStack Configuration",id:"chirpstack-configuration",level:3},{value:"Click <strong>Submit</strong>.",id:"click-submit",level:4},{value:"Application: Integrate with Home Assistant",id:"application-integrate-with-home-assistant",level:3},{value:"Tech Support &amp; Product Discussion",id:"tech-support--product-discussion",level:2}],c={toc:d},p="wrapper";function u(e){let{components:n,...t}=e;return(0,r.kt)(p,(0,i.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"grove---wio-e5-with-xiao-esp32-s3-via-arduino"},"Grove - Wio-E5 with XIAO-ESP32-S3 via Arduino"),(0,r.kt)("div",{align:"center"},(0,r.kt)("img",{width:800,src:"https://files.seeedstudio.com/wiki/Grove-Wio-E5_with_XIAO-ESP32-S3_via_Arduino/image1.png"})),(0,r.kt)("p",null,"The integration of Wio-E5 with XIAO-ESP32-S3 through Arduino presents a robust platform for IoT project development. This guide is designed to assist you in establishing a seamless connection between Wio-E5 and XIAO-ESP32-S3, enabling a wide range of applications and functionalities."),(0,r.kt)("p",null,"I will lead you through the process of utilizing ",(0,r.kt)("strong",{parentName:"p"},"XIAO-ESP32-S3, Grove-Wio-E5, and Grove-Temperature & Humidity Sensor")," for LoRa communication. Tailored for both beginners and intermediate enthusiasts, this tutorial offers step-by-step instructions for the setup and implementation of wireless communication using LoRa technology. The goal is to empower you with the skills to effectively employ XIAO-ESP32-S3 for LoRa communication. In the final stages, we will utilize ",(0,r.kt)("strong",{parentName:"p"},"ChirpStack")," to display the collected data in ",(0,r.kt)("strong",{parentName:"p"},"Home Assistant"),"."),(0,r.kt)("h2",{id:"implementation"},"Implementation"),(0,r.kt)("h3",{id:"arduino-program-code"},"Arduino Program Code"),(0,r.kt)("h3",{id:"software"},"Software"),(0,r.kt)("p",null,"Make certain modifications to the following code, such as modifying the AppKEY and other essential information of LoRa communication module, so as to be able to access LoRaWAN, and then modify the data we want to send by command: AT+CMSGHEX. For example, I send data by simulating temp and humi here."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'\n# include <Arduino.h>\n#include "Wire.h"\n#include "DHT.h"\n\nstatic char recv_buf[512];\nstatic bool is_exist = false;\nstatic bool is_join = false;\nstatic int led = 0;\n\nint sensorPin = A1;\n#define DHTTYPE DHT20   // DHT 20\nDHT dht(DHTTYPE);         //   DHT10 DHT20 don\'t need to define Pin\n\n\nstatic int at_send_check_response(char *p_ack, int timeout_ms, char*p_cmd, ...)\n{\n    int ch;\n    int num = 0;\n    int index = 0;\n    int startMillis = 0;\n    va_list args;\n    memset(recv_buf, 0, sizeof(recv_buf));\n    va_start(args, p_cmd);\n    Serial1.printf(p_cmd, args);\n    Serial.printf(p_cmd, args);\n    va_end(args);\n    delay(200);\n    startMillis = millis();\n\n    if (p_ack == NULL)\n    {\n        return 0;\n    }\n\n    do\n    {\n        while (Serial1.available() > 0)\n        {\n            ch = Serial1.read();\n            recv_buf[index++] = ch;\n            Serial.print((char)ch);\n            delay(2);\n        }\n\n        if (strstr(recv_buf, p_ack) != NULL)\n        {\n            return 1;\n        }\n\n    } while (millis() - startMillis < timeout_ms);\n    return 0;\n}\n\nstatic void recv_prase(char *p_msg)\n{\n    if (p_msg == NULL)\n    {\n        return;\n    }\nchar*p_start = NULL;\n    int data = 0;\n    int rssi = 0;\n    int snr = 0;\n\n    p_start = strstr(p_msg, "RX");\n    if (p_start && (1 == sscanf(p_start, "RX: \\"%d\\"\\r\\n", &data)))\n    {\n        Serial.println(data);\n        Serial.print("led :");\n        led = !!data;\n        Serial.print(led);\n        if (led)\n        {\n            digitalWrite(LED_BUILTIN, LOW);\n        }\n        else\n        {\n            digitalWrite(LED_BUILTIN, HIGH);\n        }\n    }\n\n    p_start = strstr(p_msg, "RSSI");\n    if (p_start && (1 == sscanf(p_start, "RSSI %d,", &rssi)))\n    {\n        Serial.print("rssi:");\n        Serial.print(rssi);\n    }\n    p_start = strstr(p_msg, "SNR");\n    if (p_start && (1 == sscanf(p_start, "SNR %d", &snr)))\n    {\n        Serial.print("snr :");\n        Serial.print(snr);\n    }\n}\n\nvoid setup() {\n  Serial.begin(115200); // \u521d\u59cb\u5316\u4e32\u53e3\u901a\u4fe1\n  Serial1.begin(9600, SERIAL_8N1, 44, 43);\n  Wire.begin();\n  dht.begin();\n\n  if (at_send_check_response("+AT: OK", 100, "AT\\r\\n"))\n{\n    is_exist = true;\n    \n    // \u53d1\u9001 AT+ID \u547d\u4ee4\n    if (at_send_check_response("+ID:", 1000, "AT+ID\\r\\n")) {\n        // \u547d\u4ee4\u6210\u529f\u53d1\u9001\u5e76\u4e14\u6536\u5230\u54cd\u5e94\n        // \u53ef\u4ee5\u5728 recv_buf \u4e2d\u627e\u5230\u8fd4\u56de\u7684\u6570\u636e\n        Serial.print("Received ID data: ");\n        Serial.println(recv_buf);\n    } else {\n        // \u547d\u4ee4\u53d1\u9001\u5931\u8d25\u6216\u8005\u6ca1\u6709\u6536\u5230\u54cd\u5e94\n        Serial.println("Failed to get ID data.");\n    }\n\n    // \u5176\u4ed6\u8bbe\u7f6e\u547d\u4ee4\n    at_send_check_response("+MODE: LWOTAA", 1000, "AT+MODE=LWOTAA\\r\\n");\n    at_send_check_response("+DR: EU868", 1000, "AT+DR=EU868\\r\\n");\n    at_send_check_response("+CH: NUM", 1000, "AT+CH=NUM,0-2\\r\\n");\n    at_send_check_response("+KEY: APPKEY", 1000, "AT+KEY=APPKEY,\\"2B7E151628AED2A6ABF7158809CF4F3D\\"\\r\\n");\n    at_send_check_response("+CLASS: C", 1000, "AT+CLASS=A\\r\\n");\n    at_send_check_response("+PORT: 8", 1000, "AT+PORT=8\\r\\n");\n    \n    delay(200);\n    is_join = true;\n}\nelse\n{\n    is_exist = false;\n    Serial.print("No E5 module found.\\r\\n");\n}\n}\n\nvoid loop() {\n    float temp_hum_val[2] = {0};\n    if (is_exist)\n        {\n            int ret = 0;\n            if (is_join)\n            {\n\n                ret = at_send_check_response("+JOIN: Network joined", 12000, "AT+JOIN\\r\\n");\n                if (ret)\n                {\n                    is_join = false;\n                }\n                else\n                {\n                    at_send_check_response("+ID: AppEui", 1000, "AT+ID\\r\\n");\n                    Serial.print("JOIN failed!\\r\\n\\r\\n");\n                    delay(5000);\n                }\n            }\n            else\n            {\n                if (!dht.readTempAndHumidity(temp_hum_val)) {\n                char cmd[128];\n                sprintf(cmd, "AT+CMSGHEX=\\"%04X%04X%04X\\"\\r\\n", int(temp_hum_val[1]*100), int(temp_hum_val[0]*100),analogRead(sensorPin));\n                ret = at_send_check_response("Done", 5000, cmd);\n                if (ret)\n                {\n                    recv_prase(recv_buf);\n                }\n                else\n                {\n                    Serial.print("Send failed!\\r\\n\\r\\n");\n                }\n                }\n                delay(30000);\n            }\n        }\n        else\n        {\n            delay(1000);\n        }\n}\n\n\n\n')),(0,r.kt)("h3",{id:"chirpstack-configuration"},"ChirpStack Configuration"),(0,r.kt)("p",null,"ChirpStack  is an open-source Internet of Things (IoT) solution designed for building and managing LoRaWAN networks. It provides a comprehensive set of tools and services to assist users in deploying, managing, and monitoring LoRaWAN networks, including gateways, network servers, application servers, and devices. For information on how to connect to ChirpStack, please refer to this ",(0,r.kt)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/Network/SenseCAP_Network/SenseCAP_M2_Multi_Platform/Tutorial/Connect-M2-Multi-Platform-Gateway-to-ChirpStack/#chirpstack-configuration"},"link"),"."),(0,r.kt)("p",null,"After creating a new device profile in ChirpStack, fill in the payload codec with the following code:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"function decodeUplink(input) {\n    var decoded = {\n        temp: 0,\n        humi: 0,\n        moisture: 0\n    };\n    var bytes = input['bytes'];\n    bytes = bytes2HexString(bytes);\n\n    // \u5047\u8bbe\u6570\u636e\u4ee5100\u500d\u7684\u6bd4\u4f8b\u8fdb\u884c\u4e86\u7f16\u7801\n    decoded.temp = parseInt(bytes.slice(0, 4), 16) / 100;\n    decoded.humi = parseInt(bytes.slice(4,8), 16) / 100;\n    decoded.moisture = parseInt(bytes.slice(-4), 16);\n\n    let messages = [\n        {\n            type: 'temp',\n            measurementId: 4097,\n            measurementValue: decoded.temp\n        },\n        {\n            type: 'humi',\n            measurementId: 4098,\n            measurementValue: decoded.humi\n        },\n        {\n            type: 'moisture',\n            measurementId: 4103,\n            measurementValue: decoded.moisture\n        }\n    ];\n\n    var result = {};\n    result.messages = messages;\n    return { data: result };\n}\n\n  \n  \n  /**\n   * Convert to an 8-digit binary number with 0s in front of the number\n   * @param arr\n   * @returns {string}\n   */\n  function toBinary (arr) {\n    let binaryData = arr.map((item) => {\n      let data = parseInt(item, 16)\n        .toString(2)\n      let dataLength = data.length\n      if (data.length !== 8) {\n        for (let i = 0; i < 8 - dataLength; i++) {\n          data = `0` + data\n        }\n      }\n      return data\n    })\n    let ret = binaryData.toString()\n      .replace(/,/g, '')\n    return ret\n  }\n  \n  \n  function bytes2HexString (arrBytes) {\n    var str = ''\n    for (var i = 0; i < arrBytes.length; i++) {\n      var tmp\n      var num = arrBytes[i]\n      if (num < 0) {\n        tmp = (255 + num + 1).toString(16)\n      } else {\n        tmp = num.toString(16)\n      }\n      if (tmp.length === 1) {\n        tmp = '0' + tmp\n      }\n      str += tmp\n    }\n    return str\n  }\n\n\n")),(0,r.kt)("h4",{id:"click-submit"},"Click ",(0,r.kt)("strong",{parentName:"h4"},"Submit"),"."),(0,r.kt)("div",{align:"center"},(0,r.kt)("img",{width:800,src:"https://files.seeedstudio.com/wiki/Grove-Wio-E5_with_XIAO-ESP32-S3_via_Arduino/image4.png"})),(0,r.kt)("p",null,"As shown in the following figure, the relevant data is received, indicating that the data is successfully sent."),(0,r.kt)("div",{align:"center"},(0,r.kt)("img",{width:800,src:"https://files.seeedstudio.com/wiki/Grove-Wio-E5_with_XIAO-ESP32-S3_via_Arduino/image6.png"})),(0,r.kt)("p",null,"Decoding alone may not provide a visually intuitive representation of sensor data. In such cases, we can utilize user-friendly platforms, with Home Assistant being a prime example."),(0,r.kt)("h3",{id:"application-integrate-with-home-assistant"},"Application: Integrate with Home Assistant"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Home Assistant")," is an open-source smart home automation platform designed to enable users to integrate, control, and automate various smart devices and services. It supports interoperability with a wide range of smart home devices, allowing users to create customized automation scenarios and smart home control systems. If we can integrate  XIAO-ESP32-S3 with Home Assistant, it will diversify the development possibilities for XIAO-ESP32-S3."),(0,r.kt)("p",null,"Both ChirpStack and Home Assistant have built-in MQTT plugin integration. This allows them to communicate data through the MQTT protocol, facilitating the transmission of sensor data from the gateway (equipped with an MQTT plugin) to Home Assistant."),(0,r.kt)("p",null,"You can also integrate Wio-E5 with XIAO-ESP32-S3 into Home Assistant. Please refer to this ",(0,r.kt)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/home_assistant_sensecap/"},"tutorial"),"."),(0,r.kt)("div",{align:"center"},(0,r.kt)("img",{width:800,src:"https://files.seeedstudio.com/wiki/RS485_500cm%20ultrasonic_sensor/image%2016.png"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Step 3:")," Click Send and Test the sensor by clicking ",(0,r.kt)("strong",{parentName:"li"},"Measure"))),(0,r.kt)("div",{align:"center"},(0,r.kt)("img",{width:800,src:"https://files.seeedstudio.com/wiki/Grove-Wio-E5_with_XIAO-ESP32-S3_via_Arduino/image7.png"})),(0,r.kt)("h2",{id:"tech-support--product-discussion"},"Tech Support & Product Discussion"),(0,r.kt)("p",null,"Thank you for choosing our products! We are here to provide you with different support to ensure that your experience with our products is as smooth as possible. We offer several communication channels to cater to different preferences and needs."),(0,r.kt)("div",{class:"button_tech_support_container"},(0,r.kt)("a",{href:"https://forum.seeedstudio.com/",class:"button_forum"}),(0,r.kt)("a",{href:"https://www.seeedstudio.com/contacts",class:"button_email"})),(0,r.kt)("div",{class:"button_tech_support_container"},(0,r.kt)("a",{href:"https://discord.gg/eWkprNDMU7",class:"button_discord"}),(0,r.kt)("a",{href:"https://github.com/Seeed-Studio/wiki-documents/discussions/69",class:"button_discussion"})))}u.isMDXComponent=!0}}]);