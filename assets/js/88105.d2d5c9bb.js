(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[88105],{3905:(e,t,n)=>{"use strict";n.d(t,{Zo:()=>u,kt:()=>f});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=o.createContext({}),s=function(e){var t=o.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=s(e.components);return o.createElement(i.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),m=s(n),p=r,f=m["".concat(i,".").concat(p)]||m[p]||d[p]||a;return n?o.createElement(f,l(l({ref:t},u),{},{components:n})):o.createElement(f,l({ref:t},u))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,l=new Array(a);l[0]=p;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c[m]="string"==typeof e?e:r,l[1]=c;for(var s=2;s<a;s++)l[s]=n[s];return o.createElement.apply(null,l)}return o.createElement.apply(null,n)}p.displayName="MDXCreateElement"},84881:(e,t,n)=>{"use strict";n.d(t,{Z:()=>u});var o=n(67294),r=n(95999),a=n(35281),l=n(87462),c=n(86010);const i="iconEdit_Z9Sw";function s(e){let{className:t,...n}=e;return o.createElement("svg",(0,l.Z)({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,c.Z)(i,t),"aria-hidden":"true"},n),o.createElement("g",null,o.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))}function u(e){let{editUrl:t}=e;return o.createElement("a",{href:t,target:"_blank",rel:"noreferrer noopener",className:a.k.common.editThisPage},o.createElement(s,null),o.createElement(r.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))}},92503:(e,t,n)=>{"use strict";n.d(t,{Z:()=>m});var o=n(87462),r=n(67294),a=n(86010),l=n(95999),c=n(86668),i=n(39960);const s="anchorWithStickyNavbar_LWe7",u="anchorWithHideOnScrollNavbar_WYt5";function m(e){let{as:t,id:n,...m}=e;const{navbar:{hideOnScroll:d}}=(0,c.L)();if("h1"===t||!n)return r.createElement(t,(0,o.Z)({},m,{id:void 0}));const p=(0,l.I)({id:"theme.common.headingLinkTitle",message:"Direct link to {heading}",description:"Title for link to heading"},{heading:"string"==typeof m.children?m.children:n});return r.createElement(t,(0,o.Z)({},m,{className:(0,a.Z)("anchor",d?u:s,m.className),id:n}),m.children,r.createElement(i.Z,{className:"hash-link",to:`#${n}`,"aria-label":p,title:p},"\u200b"))}},98718:(e,t,n)=>{"use strict";n.d(t,{Z:()=>ke});var o=n(67294),r=n(3905),a=n(87462),l=n(35742);var c=n(72389),i=n(86010),s=n(92949),u=n(86668);function m(){const{prism:e}=(0,u.L)(),{colorMode:t}=(0,s.I)(),n=e.theme,o=e.darkTheme||n;return"dark"===t?o:n}var d=n(35281),p=n(87594),f=n.n(p);const h=/title=(?<quote>["'])(?<title>.*?)\1/,g=/\{(?<range>[\d,-]+)\}/,y={js:{start:"\\/\\/",end:""},jsBlock:{start:"\\/\\*",end:"\\*\\/"},jsx:{start:"\\{\\s*\\/\\*",end:"\\*\\/\\s*\\}"},bash:{start:"#",end:""},html:{start:"\x3c!--",end:"--\x3e"}};function b(e,t){const n=e.map((e=>{const{start:n,end:o}=y[e];return`(?:${n}\\s*(${t.flatMap((e=>[e.line,e.block?.start,e.block?.end].filter(Boolean))).join("|")})\\s*${o})`})).join("|");return new RegExp(`^\\s*(?:${n})\\s*$`)}function v(e,t){let n=e.replace(/\n$/,"");const{language:o,magicComments:r,metastring:a}=t;if(a&&g.test(a)){const e=a.match(g).groups.range;if(0===r.length)throw new Error(`A highlight range has been given in code block's metastring (\`\`\` ${a}), but no magic comment config is available. Docusaurus applies the first magic comment entry's className for metastring ranges.`);const t=r[0].className,o=f()(e).filter((e=>e>0)).map((e=>[e-1,[t]]));return{lineClassNames:Object.fromEntries(o),code:n}}if(void 0===o)return{lineClassNames:{},code:n};const l=function(e,t){switch(e){case"js":case"javascript":case"ts":case"typescript":return b(["js","jsBlock"],t);case"jsx":case"tsx":return b(["js","jsBlock","jsx"],t);case"html":return b(["js","jsBlock","html"],t);case"python":case"py":case"bash":return b(["bash"],t);case"markdown":case"md":return b(["html","jsx","bash"],t);default:return b(Object.keys(y),t)}}(o,r),c=n.split("\n"),i=Object.fromEntries(r.map((e=>[e.className,{start:0,range:""}]))),s=Object.fromEntries(r.filter((e=>e.line)).map((e=>{let{className:t,line:n}=e;return[n,t]}))),u=Object.fromEntries(r.filter((e=>e.block)).map((e=>{let{className:t,block:n}=e;return[n.start,t]}))),m=Object.fromEntries(r.filter((e=>e.block)).map((e=>{let{className:t,block:n}=e;return[n.end,t]})));for(let p=0;p<c.length;){const e=c[p].match(l);if(!e){p+=1;continue}const t=e.slice(1).find((e=>void 0!==e));s[t]?i[s[t]].range+=`${p},`:u[t]?i[u[t]].start=p:m[t]&&(i[m[t]].range+=`${i[m[t]].start}-${p-1},`),c.splice(p,1)}n=c.join("\n");const d={};return Object.entries(i).forEach((e=>{let[t,{range:n}]=e;f()(n).forEach((e=>{d[e]??=[],d[e].push(t)}))})),{lineClassNames:d,code:n}}const E="codeBlockContainer_Ckt0";function k(e){let{as:t,...n}=e;const r=function(e){const t={color:"--prism-color",backgroundColor:"--prism-background-color"},n={};return Object.entries(e.plain).forEach((e=>{let[o,r]=e;const a=t[o];a&&"string"==typeof r&&(n[a]=r)})),n}(m());return o.createElement(t,(0,a.Z)({},n,{style:r,className:(0,i.Z)(n.className,E,d.k.common.codeBlock)}))}const N={codeBlockContent:"codeBlockContent_biex",codeBlockTitle:"codeBlockTitle_Ktv7",codeBlock:"codeBlock_bY9V",codeBlockStandalone:"codeBlockStandalone_MEMb",codeBlockLines:"codeBlockLines_e6Vv",codeBlockLinesWithNumbering:"codeBlockLinesWithNumbering_o6Pm",buttonGroup:"buttonGroup__atx"};function C(e){let{children:t,className:n}=e;return o.createElement(k,{as:"pre",tabIndex:0,className:(0,i.Z)(N.codeBlockStandalone,"thin-scrollbar",n)},o.createElement("code",{className:N.codeBlockLines},t))}var w=n(902);const Z={attributes:!0,characterData:!0,childList:!0,subtree:!0};function T(e,t){const[n,r]=(0,o.useState)(),a=(0,o.useCallback)((()=>{r(e.current?.closest("[role=tabpanel][hidden]"))}),[e,r]);(0,o.useEffect)((()=>{a()}),[a]),function(e,t,n){void 0===n&&(n=Z);const r=(0,w.zX)(t),a=(0,w.Ql)(n);(0,o.useEffect)((()=>{const t=new MutationObserver(r);return e&&t.observe(e,a),()=>t.disconnect()}),[e,r,a])}(n,(e=>{e.forEach((e=>{"attributes"===e.type&&"hidden"===e.attributeName&&(t(),a())}))}),{attributes:!0,characterData:!1,childList:!1,subtree:!1})}const B={plain:{backgroundColor:"#2a2734",color:"#9a86fd"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#6c6783"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#e09142"}},{types:["property","function"],style:{color:"#9a86fd"}},{types:["tag-id","selector","atrule-id"],style:{color:"#eeebff"}},{types:["attr-name"],style:{color:"#c4b9fe"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","atrule","placeholder","variable"],style:{color:"#ffcc99"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#c4b9fe"}}]};var j={Prism:n(87410).Z,theme:B};function _(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function L(){return L=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},L.apply(this,arguments)}var x=/\r\n|\r|\n/,O=function(e){0===e.length?e.push({types:["plain"],content:"\n",empty:!0}):1===e.length&&""===e[0].content&&(e[0].content="\n",e[0].empty=!0)},S=function(e,t){var n=e.length;return n>0&&e[n-1]===t?e:e.concat(t)},P=function(e,t){var n=e.plain,o=Object.create(null),r=e.styles.reduce((function(e,n){var o=n.languages,r=n.style;return o&&!o.includes(t)||n.types.forEach((function(t){var n=L({},e[t],r);e[t]=n})),e}),o);return r.root=n,r.plain=L({},n,{backgroundColor:null}),r};function z(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&-1===t.indexOf(o)&&(n[o]=e[o]);return n}const A=function(e){function t(){for(var t=this,n=[],o=arguments.length;o--;)n[o]=arguments[o];e.apply(this,n),_(this,"getThemeDict",(function(e){if(void 0!==t.themeDict&&e.theme===t.prevTheme&&e.language===t.prevLanguage)return t.themeDict;t.prevTheme=e.theme,t.prevLanguage=e.language;var n=e.theme?P(e.theme,e.language):void 0;return t.themeDict=n})),_(this,"getLineProps",(function(e){var n=e.key,o=e.className,r=e.style,a=L({},z(e,["key","className","style","line"]),{className:"token-line",style:void 0,key:void 0}),l=t.getThemeDict(t.props);return void 0!==l&&(a.style=l.plain),void 0!==r&&(a.style=void 0!==a.style?L({},a.style,r):r),void 0!==n&&(a.key=n),o&&(a.className+=" "+o),a})),_(this,"getStyleForToken",(function(e){var n=e.types,o=e.empty,r=n.length,a=t.getThemeDict(t.props);if(void 0!==a){if(1===r&&"plain"===n[0])return o?{display:"inline-block"}:void 0;if(1===r&&!o)return a[n[0]];var l=o?{display:"inline-block"}:{},c=n.map((function(e){return a[e]}));return Object.assign.apply(Object,[l].concat(c))}})),_(this,"getTokenProps",(function(e){var n=e.key,o=e.className,r=e.style,a=e.token,l=L({},z(e,["key","className","style","token"]),{className:"token "+a.types.join(" "),children:a.content,style:t.getStyleForToken(a),key:void 0});return void 0!==r&&(l.style=void 0!==l.style?L({},l.style,r):r),void 0!==n&&(l.key=n),o&&(l.className+=" "+o),l})),_(this,"tokenize",(function(e,t,n,o){var r={code:t,grammar:n,language:o,tokens:[]};e.hooks.run("before-tokenize",r);var a=r.tokens=e.tokenize(r.code,r.grammar,r.language);return e.hooks.run("after-tokenize",r),a}))}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.render=function(){var e=this.props,t=e.Prism,n=e.language,o=e.code,r=e.children,a=this.getThemeDict(this.props),l=t.languages[n];return r({tokens:function(e){for(var t=[[]],n=[e],o=[0],r=[e.length],a=0,l=0,c=[],i=[c];l>-1;){for(;(a=o[l]++)<r[l];){var s=void 0,u=t[l],m=n[l][a];if("string"==typeof m?(u=l>0?u:["plain"],s=m):(u=S(u,m.type),m.alias&&(u=S(u,m.alias)),s=m.content),"string"==typeof s){var d=s.split(x),p=d.length;c.push({types:u,content:d[0]});for(var f=1;f<p;f++)O(c),i.push(c=[]),c.push({types:u,content:d[f]})}else l++,t.push(u),n.push(s),o.push(0),r.push(s.length)}l--,t.pop(),n.pop(),o.pop(),r.pop()}return O(c),i}(void 0!==l?this.tokenize(t,o,l,n):[o]),className:"prism-code language-"+n,style:void 0!==a?a.root:{},getLineProps:this.getLineProps,getTokenProps:this.getTokenProps})},t}(o.Component),I="codeLine_lJS_",M="codeLineNumber_Tfdd",D="codeLineContent_feaV";function H(e){let{line:t,classNames:n,showLineNumbers:r,getLineProps:l,getTokenProps:c}=e;1===t.length&&"\n"===t[0].content&&(t[0].content="");const s=l({line:t,className:(0,i.Z)(n,r&&I)}),u=t.map(((e,t)=>o.createElement("span",(0,a.Z)({key:t},c({token:e,key:t})))));return o.createElement("span",s,r?o.createElement(o.Fragment,null,o.createElement("span",{className:M}),o.createElement("span",{className:D},u)):u,o.createElement("br",null))}var V=n(95999);function R(e){return o.createElement("svg",(0,a.Z)({viewBox:"0 0 24 24"},e),o.createElement("path",{fill:"currentColor",d:"M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z"}))}function $(e){return o.createElement("svg",(0,a.Z)({viewBox:"0 0 24 24"},e),o.createElement("path",{fill:"currentColor",d:"M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"}))}const W={copyButtonCopied:"copyButtonCopied_obH4",copyButtonIcons:"copyButtonIcons_eSgA",copyButtonIcon:"copyButtonIcon_y97N",copyButtonSuccessIcon:"copyButtonSuccessIcon_LjdS"};function F(e){let{code:t,className:n}=e;const[r,a]=(0,o.useState)(!1),l=(0,o.useRef)(void 0),c=(0,o.useCallback)((()=>{!function(e,t){let{target:n=document.body}=void 0===t?{}:t;if("string"!=typeof e)throw new TypeError(`Expected parameter \`text\` to be a \`string\`, got \`${typeof e}\`.`);const o=document.createElement("textarea"),r=document.activeElement;o.value=e,o.setAttribute("readonly",""),o.style.contain="strict",o.style.position="absolute",o.style.left="-9999px",o.style.fontSize="12pt";const a=document.getSelection(),l=a.rangeCount>0&&a.getRangeAt(0);n.append(o),o.select(),o.selectionStart=0,o.selectionEnd=e.length;let c=!1;try{c=document.execCommand("copy")}catch{}o.remove(),l&&(a.removeAllRanges(),a.addRange(l)),r&&r.focus()}(t),a(!0),l.current=window.setTimeout((()=>{a(!1)}),1e3)}),[t]);return(0,o.useEffect)((()=>()=>window.clearTimeout(l.current)),[]),o.createElement("button",{type:"button","aria-label":r?(0,V.I)({id:"theme.CodeBlock.copied",message:"Copied",description:"The copied button label on code blocks"}):(0,V.I)({id:"theme.CodeBlock.copyButtonAriaLabel",message:"Copy code to clipboard",description:"The ARIA label for copy code blocks button"}),title:(0,V.I)({id:"theme.CodeBlock.copy",message:"Copy",description:"The copy button label on code blocks"}),className:(0,i.Z)("clean-btn",n,W.copyButton,r&&W.copyButtonCopied),onClick:c},o.createElement("span",{className:W.copyButtonIcons,"aria-hidden":"true"},o.createElement(R,{className:W.copyButtonIcon}),o.createElement($,{className:W.copyButtonSuccessIcon})))}function q(e){return o.createElement("svg",(0,a.Z)({viewBox:"0 0 24 24"},e),o.createElement("path",{fill:"currentColor",d:"M4 19h6v-2H4v2zM20 5H4v2h16V5zm-3 6H4v2h13.25c1.1 0 2 .9 2 2s-.9 2-2 2H15v-2l-3 3l3 3v-2h2c2.21 0 4-1.79 4-4s-1.79-4-4-4z"}))}const G="wordWrapButtonIcon_Bwma",U="wordWrapButtonEnabled_EoeP";function Q(e){let{className:t,onClick:n,isEnabled:r}=e;const a=(0,V.I)({id:"theme.CodeBlock.wordWrapToggle",message:"Toggle word wrap",description:"The title attribute for toggle word wrapping button of code block lines"});return o.createElement("button",{type:"button",onClick:n,className:(0,i.Z)("clean-btn",t,r&&U),"aria-label":a,title:a},o.createElement(q,{className:G,"aria-hidden":"true"}))}function X(e){let{children:t,className:n="",metastring:r,title:l,showLineNumbers:c,language:s}=e;const{prism:{defaultLanguage:d,magicComments:p}}=(0,u.L)(),f=s??n.split(" ").find((e=>e.startsWith("language-")))?.replace(/language-/,"")??d;const g=m(),y=function(){const[e,t]=(0,o.useState)(!1),[n,r]=(0,o.useState)(!1),a=(0,o.useRef)(null),l=(0,o.useCallback)((()=>{const n=a.current.querySelector("code");e?n.removeAttribute("style"):(n.style.whiteSpace="pre-wrap",n.style.overflowWrap="anywhere"),t((e=>!e))}),[a,e]),c=(0,o.useCallback)((()=>{const{scrollWidth:e,clientWidth:t}=a.current,n=e>t||a.current.querySelector("code").hasAttribute("style");r(n)}),[a]);return T(a,c),(0,o.useEffect)((()=>{c()}),[e,c]),(0,o.useEffect)((()=>(window.addEventListener("resize",c,{passive:!0}),()=>{window.removeEventListener("resize",c)})),[c]),{codeBlockRef:a,isEnabled:e,isCodeScrollable:n,toggle:l}}(),b=function(e){return e?.match(h)?.groups.title??""}(r)||l,{lineClassNames:E,code:C}=v(t,{metastring:r,language:f,magicComments:p}),w=c??function(e){return Boolean(e?.includes("showLineNumbers"))}(r);return o.createElement(k,{as:"div",className:(0,i.Z)(n,f&&!n.includes(`language-${f}`)&&`language-${f}`)},b&&o.createElement("div",{className:N.codeBlockTitle},b),o.createElement("div",{className:N.codeBlockContent},o.createElement(A,(0,a.Z)({},j,{theme:g,code:C,language:f??"text"}),(e=>{let{className:t,tokens:n,getLineProps:r,getTokenProps:a}=e;return o.createElement("pre",{tabIndex:0,ref:y.codeBlockRef,className:(0,i.Z)(t,N.codeBlock,"thin-scrollbar")},o.createElement("code",{className:(0,i.Z)(N.codeBlockLines,w&&N.codeBlockLinesWithNumbering)},n.map(((e,t)=>o.createElement(H,{key:t,line:e,getLineProps:r,getTokenProps:a,classNames:E[t],showLineNumbers:w})))))})),o.createElement("div",{className:N.buttonGroup},(y.isEnabled||y.isCodeScrollable)&&o.createElement(Q,{className:N.codeButton,onClick:()=>y.toggle(),isEnabled:y.isEnabled}),o.createElement(F,{className:N.codeButton,code:C}))))}function Y(e){let{children:t,...n}=e;const r=(0,c.Z)(),l=function(e){return o.Children.toArray(e).some((e=>(0,o.isValidElement)(e)))?e:Array.isArray(e)?e.join(""):e}(t),i="string"==typeof l?X:C;return o.createElement(i,(0,a.Z)({key:String(r)},n),l)}var J=n(39960);var K=n(86043);const ee="details_lb9f",te="isBrowser_bmU9",ne="collapsibleContent_i85q";function oe(e){return!!e&&("SUMMARY"===e.tagName||oe(e.parentElement))}function re(e,t){return!!e&&(e===t||re(e.parentElement,t))}function ae(e){let{summary:t,children:n,...r}=e;const l=(0,c.Z)(),s=(0,o.useRef)(null),{collapsed:u,setCollapsed:m}=(0,K.u)({initialState:!r.open}),[d,p]=(0,o.useState)(r.open),f=o.isValidElement(t)?t:o.createElement("summary",null,t??"Details");return o.createElement("details",(0,a.Z)({},r,{ref:s,open:d,"data-collapsed":u,className:(0,i.Z)(ee,l&&te,r.className),onMouseDown:e=>{oe(e.target)&&e.detail>1&&e.preventDefault()},onClick:e=>{e.stopPropagation();const t=e.target;oe(t)&&re(t,s.current)&&(e.preventDefault(),u?(m(!1),p(!0)):m(!0))}}),f,o.createElement(K.z,{lazy:!1,collapsed:u,disableSSRStyle:!0,onCollapseTransitionEnd:e=>{m(e),p(!e)}},o.createElement("div",{className:ne},n)))}const le="details_b_Ee";function ce(e){let{...t}=e;return o.createElement(ae,(0,a.Z)({},t,{className:(0,i.Z)("alert alert--info",le,t.className)}))}var ie=n(92503);function se(e){return o.createElement(ie.Z,e)}const ue="containsTaskList_mC6p";function me(e){if(void 0!==e)return(0,i.Z)(e,e?.includes("contains-task-list")&&ue)}const de="img_ev3q";const pe="admonition_LlT9",fe="admonitionHeading_tbUL",he="admonitionIcon_kALy",ge="admonitionContent_S0QG";const ye={note:{infimaClassName:"secondary",iconComponent:function(){return o.createElement("svg",{viewBox:"0 0 14 16"},o.createElement("path",{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))},label:o.createElement(V.Z,{id:"theme.admonition.note",description:"The default label used for the Note admonition (:::note)"},"note")},tip:{infimaClassName:"success",iconComponent:function(){return o.createElement("svg",{viewBox:"0 0 12 16"},o.createElement("path",{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))},label:o.createElement(V.Z,{id:"theme.admonition.tip",description:"The default label used for the Tip admonition (:::tip)"},"tip")},danger:{infimaClassName:"danger",iconComponent:function(){return o.createElement("svg",{viewBox:"0 0 12 16"},o.createElement("path",{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))},label:o.createElement(V.Z,{id:"theme.admonition.danger",description:"The default label used for the Danger admonition (:::danger)"},"danger")},info:{infimaClassName:"info",iconComponent:function(){return o.createElement("svg",{viewBox:"0 0 14 16"},o.createElement("path",{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))},label:o.createElement(V.Z,{id:"theme.admonition.info",description:"The default label used for the Info admonition (:::info)"},"info")},caution:{infimaClassName:"warning",iconComponent:function(){return o.createElement("svg",{viewBox:"0 0 16 16"},o.createElement("path",{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))},label:o.createElement(V.Z,{id:"theme.admonition.caution",description:"The default label used for the Caution admonition (:::caution)"},"caution")}},be={secondary:"note",important:"info",success:"tip",warning:"danger"};function ve(e){const{mdxAdmonitionTitle:t,rest:n}=function(e){const t=o.Children.toArray(e),n=t.find((e=>o.isValidElement(e)&&"mdxAdmonitionTitle"===e.props?.mdxType)),r=o.createElement(o.Fragment,null,t.filter((e=>e!==n)));return{mdxAdmonitionTitle:n,rest:r}}(e.children);return{...e,title:e.title??t,children:n}}const Ee={head:function(e){const t=o.Children.map(e.children,(e=>o.isValidElement(e)?function(e){if(e.props?.mdxType&&e.props.originalType){const{mdxType:t,originalType:n,...r}=e.props;return o.createElement(e.props.originalType,r)}return e}(e):e));return o.createElement(l.Z,e,t)},code:function(e){const t=["a","abbr","b","br","button","cite","code","del","dfn","em","i","img","input","ins","kbd","label","object","output","q","ruby","s","small","span","strong","sub","sup","time","u","var","wbr"];return o.Children.toArray(e.children).every((e=>"string"==typeof e&&!e.includes("\n")||(0,o.isValidElement)(e)&&t.includes(e.props?.mdxType)))?o.createElement("code",e):o.createElement(Y,e)},a:function(e){return o.createElement(J.Z,e)},pre:function(e){return o.createElement(Y,(0,o.isValidElement)(e.children)&&"code"===e.children.props?.originalType?e.children.props:{...e})},details:function(e){const t=o.Children.toArray(e.children),n=t.find((e=>o.isValidElement(e)&&"summary"===e.props?.mdxType)),r=o.createElement(o.Fragment,null,t.filter((e=>e!==n)));return o.createElement(ce,(0,a.Z)({},e,{summary:n}),r)},ul:function(e){return o.createElement("ul",(0,a.Z)({},e,{className:me(e.className)}))},img:function(e){return o.createElement("img",(0,a.Z)({loading:"lazy"},e,{className:(t=e.className,(0,i.Z)(t,de))}));var t},h1:e=>o.createElement(se,(0,a.Z)({as:"h1"},e)),h2:e=>o.createElement(se,(0,a.Z)({as:"h2"},e)),h3:e=>o.createElement(se,(0,a.Z)({as:"h3"},e)),h4:e=>o.createElement(se,(0,a.Z)({as:"h4"},e)),h5:e=>o.createElement(se,(0,a.Z)({as:"h5"},e)),h6:e=>o.createElement(se,(0,a.Z)({as:"h6"},e)),admonition:function(e){const{children:t,type:n,title:r,icon:a}=ve(e),l=function(e){const t=be[e]??e,n=ye[t];return n||(console.warn(`No admonition config found for admonition type "${t}". Using Info as fallback.`),ye.info)}(n),c=r??l.label,{iconComponent:s}=l,u=a??o.createElement(s,null);return o.createElement("div",{className:(0,i.Z)(d.k.common.admonition,d.k.common.admonitionType(e.type),"alert",`alert--${l.infimaClassName}`,pe)},o.createElement("div",{className:fe},o.createElement("span",{className:he},u),c),o.createElement("div",{className:ge},t))},mermaid:()=>null};function ke(e){let{children:t}=e;return o.createElement(r.Zo,{components:Ee},t)}},32244:(e,t,n)=>{"use strict";n.d(t,{Z:()=>l});var o=n(67294),r=n(86010),a=n(39960);function l(e){const{permalink:t,title:n,subLabel:l,isNext:c}=e;return o.createElement(a.Z,{className:(0,r.Z)("pagination-nav__link",c?"pagination-nav__link--next":"pagination-nav__link--prev"),to:t},l&&o.createElement("div",{className:"pagination-nav__sublabel"},l),o.createElement("div",{className:"pagination-nav__label"},n))}},13008:(e,t,n)=>{"use strict";n.d(t,{Z:()=>s});var o=n(67294),r=n(86010),a=n(39960);const l="tag_zVej",c="tagRegular_sFm0",i="tagWithCount_h2kH";function s(e){let{permalink:t,label:n,count:s}=e;return o.createElement(a.Z,{href:t,className:(0,r.Z)(l,s?i:c)},n,s&&o.createElement("span",null,s))}},71526:(e,t,n)=>{"use strict";n.d(t,{Z:()=>s});var o=n(67294),r=n(86010),a=n(95999),l=n(13008);const c="tags_jXut",i="tag_QGVx";function s(e){let{tags:t}=e;return o.createElement(o.Fragment,null,o.createElement("b",null,o.createElement(a.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),o.createElement("ul",{className:(0,r.Z)(c,"padding--none","margin-left--sm")},t.map((e=>{let{label:t,permalink:n}=e;return o.createElement("li",{key:n,className:i},o.createElement(l.Z,{label:t,permalink:n}))}))))}},87594:(e,t)=>{function n(e){let t,n=[];for(let o of e.split(",").map((e=>e.trim())))if(/^-?\d+$/.test(o))n.push(parseInt(o,10));else if(t=o.match(/^(-?\d+)(-|\.\.\.?|\u2025|\u2026|\u22EF)(-?\d+)$/)){let[e,o,r,a]=t;if(o&&a){o=parseInt(o),a=parseInt(a);const e=o<a?1:-1;"-"!==r&&".."!==r&&"\u2025"!==r||(a+=e);for(let t=o;t!==a;t+=e)n.push(t)}}return n}t.default=n,e.exports=n}}]);