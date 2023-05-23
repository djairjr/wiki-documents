"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[77425],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),p=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return o.createElement(s.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},_=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(n),_=r,m=c["".concat(s,".").concat(_)]||c[_]||d[_]||a;return n?o.createElement(m,i(i({ref:t},u),{},{components:n})):o.createElement(m,i({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=_;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:r,i[1]=l;for(var p=2;p<a;p++)i[p]=n[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}_.displayName="MDXCreateElement"},33697:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var o=n(87462),r=(n(67294),n(3905));const a={description:"How to Create your own UI",title:"How to Create your own UI",keywords:["Development Tutorial"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/How_to_Create_your_own_UI",last_update:{date:"5/17/2023",author:"Yvonne"}},i="**How to Create your own UI**",l={unversionedId:"Sensor/SenseCAP/SenseCAP_Indicator/Development_Tutorial/How_to_Create_your_own_UI",id:"Sensor/SenseCAP/SenseCAP_Indicator/Development_Tutorial/How_to_Create_your_own_UI",title:"How to Create your own UI",description:"How to Create your own UI",source:"@site/docs/Sensor/SenseCAP/SenseCAP_Indicator/Development_Tutorial/How_to_Create_your_own_UI.md",sourceDirName:"Sensor/SenseCAP/SenseCAP_Indicator/Development_Tutorial",slug:"/How_to_Create_your_own_UI",permalink:"/How_to_Create_your_own_UI",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Sensor/SenseCAP/SenseCAP_Indicator/Development_Tutorial/How_to_Create_your_own_UI.md",tags:[],version:"current",lastUpdatedBy:"Yvonne",lastUpdatedAt:1684281600,formattedLastUpdatedAt:"May 17, 2023",frontMatter:{description:"How to Create your own UI",title:"How to Create your own UI",keywords:["Development Tutorial"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/How_to_Create_your_own_UI",last_update:{date:"5/17/2023",author:"Yvonne"}},sidebar:"ProductSidebar",previous:{title:"Dive into the Hardware",permalink:"/Dive_into_the_Hardware"},next:{title:"4-inch Touch Screen",permalink:"/4-inch_Touch_Screen"}},s={},p=[{value:"<strong>LvGL</strong>",id:"lvgl",level:2},{value:"<strong>Example Code</strong>",id:"example-code",level:3},{value:"<strong>Squareline Studio(Optional)</strong>",id:"squareline-studiooptional",level:2},{value:"<strong>Replace with your own UI</strong>",id:"replace-with-your-own-ui",level:3}],u={toc:p};function c(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"how-to-create-your-own-ui"},(0,r.kt)("strong",{parentName:"h1"},"How to Create your own UI")),(0,r.kt)("h2",{id:"lvgl"},(0,r.kt)("strong",{parentName:"h2"},"LvGL")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://docs.lvgl.io/master/intro/index.html"},"LvGL")," is an open-source graphics library providing everything you need to create an embedded GUI with easy-to-use graphical elements, beautiful visual effects, and a low memory footprint."),(0,r.kt)("h3",{id:"example-code"},(0,r.kt)("strong",{parentName:"h3"},"Example Code")),(0,r.kt)("p",null,"We provide the demo code of the UI interface, and ",(0,r.kt)("a",{parentName:"p",href:"https://docs.lvgl.io/master/examples.html"},"lvGL example file")," are many sample codes for drawing UI for reference, you can modify the sample code or customize your own UI."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'#include "freertos/FreeRTOS.h"\n#include "freertos/task.h"\n#include "esp_log.h"\n#include "bsp_board.h"\n#include "lv_demos.h"\n#include "lv_port.h"\n#include "ui_demo1.h"\n#include "ui_demo2.h"\n\n#define LOG_MEM_INFO        1\n\nstatic const char *TAG = "app_main";\n\nvoid app_main(void)\n{\n    ESP_LOGI("TAG", "system start");\n\n    ESP_ERROR_CHECK(bsp_board_init());\n    lv_port_init();\n\n#if CONFIG_LCD_AVOID_TEAR\n    ESP_LOGI(TAG, "Avoid lcd tearing effect");\n#if CONFIG_LCD_LVGL_FULL_REFRESH\n    ESP_LOGI(TAG, "LVGL full-refresh");\n#elif CONFIG_LCD_LVGL_DIRECT_MODE\n    ESP_LOGI(TAG, "LVGL direct-mode");\n#endif\n#endif\n\n    lv_port_sem_take();\n    lv_demo_widgets();      /* A widgets example. This is what you get out of the box */\n    //lv_demo_music();        /* A modern, smartphone-like music player demo. */\n    //lv_demo_stress();       /* A stress test for LVGL. */\n    //lv_demo_benchmark();    /* A demo to measure the performance of LVGL or to compare different settings. */\n    // ui_demo1_init();         /* A demo to show virtual printer (must be 800*480)*/\n    //ui_demo2_init();         /* A demo to show virtual tuner\n                                /* (must be 480*800, set LCD_EVB_SCREEN_ROTATION_90 in menuconfig)*/\n    lv_port_sem_give();\n\n#if LOG_MEM_INFO\n    static char buffer[128];    /* Make sure buffer is enough for `sprintf` */\n    while (1) {\n        sprintf(buffer, "   Biggest /     Free /    Total\\n"\n                "\\t  DRAM : [%8d / %8d / %8d]\\n"\n                "\\t PSRAM : [%8d / %8d / %8d]",\n                heap_caps_get_largest_free_block(MALLOC_CAP_INTERNAL),\n                heap_caps_get_free_size(MALLOC_CAP_INTERNAL),\n                heap_caps_get_total_size(MALLOC_CAP_INTERNAL),\n                heap_caps_get_largest_free_block(MALLOC_CAP_SPIRAM),\n                heap_caps_get_free_size(MALLOC_CAP_SPIRAM),\n                heap_caps_get_total_size(MALLOC_CAP_SPIRAM));\n        ESP_LOGI("MEM", "%s", buffer);\n\n        vTaskDelay(pdMS_TO_TICKS(10000));\n    }\n#endif\n}\n')),(0,r.kt)("h2",{id:"squareline-studiooptional"},(0,r.kt)("strong",{parentName:"h2"},"Squareline Studio(Optional)")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://docs.squareline.io/docs/squareline/"},"Squareline Studio")," is a multi-platform design tool that uses a visual interface to help designers and developers work quickly and efficiently. SquareLine Studio makes it possible by creating the perfect code for your projects. Whether you use C or Python, you can export code for both."),(0,r.kt)("p",null,"If you need to create a more complex or advanced UI interface, it\u2018s recommended that you use Squareline Studio for development."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://docs.squareline.io/docs/introduction/install"},"Squareline Studio Installation")),(0,r.kt)("p",null,"We provide a demo project for the UI page:"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/Seeed-Solution/sensecap_indicator_esp32/blob/main/examples/squareline_demo/doc/squareline_project.zip"},"SenseCAP Indicator/squareline_project")),(0,r.kt)("h3",{id:"replace-with-your-own-ui"},(0,r.kt)("strong",{parentName:"h3"},"Replace with your own UI")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Step 1:You can make changes in our demo project, or create a new UI page")),(0,r.kt)("p",null,"Open the demo project and make changes:"),(0,r.kt)("div",{align:"center"},(0,r.kt)("img",{width:800,src:"https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/squareline.png"})),(0,r.kt)("p",null,"Create a new project:"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Note"),":The resolution of the screen is 480*480."),(0,r.kt)("div",{align:"center"},(0,r.kt)("img",{width:800,src:"https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/create.png"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Step 2:Export your finished page as UI files")),(0,r.kt)("div",{align:"center"},(0,r.kt)("img",{width:800,src:"https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/export.png"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Step 3:Remove all the original UI files and copy your onw UI files to this direct. ")),(0,r.kt)("div",{align:"center"},(0,r.kt)("img",{width:800,src:"https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/ui.png"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Step 4:Build and Flash the project")),(0,r.kt)("p",null,"Run the following command to build, flash and monitor the project:"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"idf.py -p PORT build flash monitor")," "),(0,r.kt)("h1",{id:"tech-support"},(0,r.kt)("strong",{parentName:"h1"},"Tech Support")),(0,r.kt)("p",null,"Don\u2019t worry, we\u2019ve got you covered! Please visit our ",(0,r.kt)("a",{parentName:"p",href:"https://discord.gg/cPpeuQMM"},"Seeed Official Discord Channel")," to ask your questions\uff01\nIf you have large order or customization requirment, please contact ",(0,r.kt)("a",{parentName:"p",href:"mailto:iot@seeed.cc"},"iot@seeed.cc")))}c.isMDXComponent=!0}}]);