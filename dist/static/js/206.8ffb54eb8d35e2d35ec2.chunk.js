/*! For license information please see 206.8ffb54eb8d35e2d35ec2.chunk.js.LICENSE.txt */
(self.webpackChunkclassroom=self.webpackChunkclassroom||[]).push([[206],{4184:(e,t)=>{var n;!function(){"use strict";var a={}.hasOwnProperty;function o(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var l=typeof n;if("string"===l||"number"===l)e.push(n);else if(Array.isArray(n)){if(n.length){var r=o.apply(null,n);r&&e.push(r)}}else if("object"===l){if(n.toString!==Object.prototype.toString&&!n.toString.toString().includes("[native code]")){e.push(n.toString());continue}for(var s in n)a.call(n,s)&&n[s]&&e.push(s)}}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(n=function(){return o}.apply(t,[]))||(e.exports=n)}()},5157:(e,t,n)=>{"use strict";n.d(t,{Z:()=>a});const a={body:"Pages-module__body--Dki4F",hint:"Pages-module__hint--mQaPb",message:"Pages-module__message--Azy0H"}},3499:(e,t,n)=>{e.exports={srcSet:n.p+"assets/images/blackboard.f904337f9c37488b.avif 410w",images:[{path:n.p+"assets/images/blackboard.f904337f9c37488b.avif",width:410,height:295}],src:n.p+"assets/images/blackboard.f904337f9c37488b.avif",toString:function(){return n.p+"assets/images/blackboard.f904337f9c37488b.avif"},width:410,height:295}},7476:(e,t,n)=>{"use strict";n.d(t,{Z:()=>u});var a=n(7294),o=n(4184),l=n.n(o);const r="Button-module__text--IBBbn",s="Button-module__containedButton--a6dDp",c="Button-module__danger--oEwMI",i="Button-module__textButton--RFR9s",m="Button-module__slim--Cca1S",d="Button-module__long--GPZpS",u=({text:e,variant:t,onClick:n})=>{let o;switch(t){case"text":o=a.createElement("button",{className:l()(r,i),onClick:n},e);break;case"text-slim":o=a.createElement("button",{className:l()(r,i,"Button-module__textSlim--o9ni0"),onClick:n},e);break;case"text-disabled":o=a.createElement("button",{className:l()(r,i),disabled:!0},e);break;case"outlined":o=a.createElement("button",{className:l()(r,"Button-module__outlinedButton--ffcwr"),onClick:n},e);break;case"contained-danger":o=a.createElement("button",{className:l()(r,s,c),onClick:n},e);break;case"contained-danger-slim":o=a.createElement("button",{className:l()(r,s,c,m),onClick:n},e);break;case"contained-disabled":o=a.createElement("button",{className:l()(r,s),disabled:!0},e);break;case"contained-long":o=a.createElement("button",{className:l()(r,s,d),onClick:n},e);break;case"contained-long-disabled":o=a.createElement("button",{className:l()(r,s,d),disabled:!0},e);break;case"contained-slim":o=a.createElement("button",{className:l()(r,s,m),onClick:n},e);break;default:o=a.createElement("button",{className:l()(r,s),onClick:n},e)}return o}},4230:(e,t,n)=>{"use strict";n.d(t,{Z:()=>c});var a=n(7294),o=n(9655),l=n(4184),r=n.n(l);const s={button:"LinkButton-module__button--nebLq",link:"LinkButton-module__link--AbPlt",slim:"LinkButton-module__slim--L89rh",text:"LinkButton-module__text--NyQRS"},c=({text:e,link:t,variant:n})=>{const l=void 0===t?"":t;let c;switch(n){case"contained":c=a.createElement(o.rU,{className:s.link,to:l},a.createElement("button",{className:s.button},e));break;case"contained-slim":c=a.createElement(o.rU,{className:s.link,to:l},a.createElement("button",{className:r()(s.button,s.slim)},e));break;case"text":c=a.createElement(o.rU,{className:s.link,to:l},a.createElement("button",{className:s.text},e));break;default:c=a.createElement("button",{className:r()(s.link,s.text,s.disabled),disabled:!0},e)}return c}},4958:(e,t,n)=>{"use strict";n.d(t,{Z:()=>r});var a=n(7294),o=n(3499),l=n.n(o);const r=()=>a.createElement("div",{className:"Logo-module__logo--wTUtI",role:"logo"},a.createElement("img",{className:"Logo-module__icon--KvsSu",src:l(),alt:"icon"}),a.createElement("strong",{className:"Logo-module__iconText--gxbrp",role:"text"},"Classroom"))},4740:(e,t,n)=>{"use strict";n.d(t,{Z:()=>s});var a=n(7294);const o="Tag-module__tag--GyuMK",l="Tag-module__text--VL69P";var r=n(7476);const s=({text:e,buttonText:t,variant:n,onClick:s})=>{let c;switch(n){case"delete":c=a.createElement("div",{className:o,role:"delete"},a.createElement("strong",{className:l,role:"text"},e),a.createElement(r.Z,{variant:"contained-danger-slim",text:t,onClick:s}));break;case"edit":c=a.createElement("div",{className:o,role:"edit"},a.createElement("strong",{className:l,role:"text"},e),a.createElement(r.Z,{variant:"contained-slim",text:t,onClick:s}));break;default:c=a.createElement("div",{className:o,role:"open"},a.createElement("strong",{className:l,role:"text"},e),a.createElement(r.Z,{variant:"contained-slim",text:t,onClick:s}))}return c}},5699:(e,t,n)=>{"use strict";n.d(t,{Z:()=>N});var a=n(7294);var o=n(9250),l=n(1955),r=n(5998);var s=n(4958),c=n(4184),i=n.n(c);const m="NavigationButton-module__button--EF3bV",d="NavigationButton-module__iconText--cePhO",u="NavigationButton-module__text--tquiH",k="NavigationButton-module__logout--uY2EP",g=({text:e,variant:t,icon:n,onClick:o})=>{let l;const r="logout"===n?i()(m,d,k):i()(m,d),s="logout"===n?i()(u,k):u,c=a.createElement("svg",{role:"icon",width:"30",height:"30",viewBox:"0 0 30 30",fill:"none",xmlns:"http://www.w3.org/2000/svg"},a.createElement("g",{id:"Home",role:"iconPath"},a.createElement("path",{id:"Vector",d:"M8.43799 24.0624H21.5629C22.9437 24.0624 24.0629 22.9432 24.0629 21.5624V12.1875L15.0004 5.9375L5.93799 12.1875V21.5624C5.93799 22.9432 7.05729 24.0624 8.43799 24.0624Z",stroke:"#2e3452",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),a.createElement("path",{id:"Vector_2",d:"M12.187 19.6865C12.187 18.3058 13.3063 17.1865 14.687 17.1865H15.312C16.6927 17.1865 17.812 18.3058 17.812 19.6865V24.0615H12.187V19.6865Z",stroke:"#2e3452",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}))),g=a.createElement("svg",{role:"icon",xmlns:"http://www.w3.org/2000/svg",width:"23",height:"23",viewBox:"0 0 23 23",fill:"none"},a.createElement("path",{role:"iconPath",d:"M2.875 20.125V2.875H20.125V20.125H2.875ZM4.3125 8.14583H18.6875V4.3125H4.3125V8.14583ZM9.58333 13.4167H13.4167V9.58333H9.58333V13.4167ZM9.58333 18.6875H13.4167V14.8542H9.58333V18.6875ZM4.3125 13.4167H8.14583V9.58333H4.3125V13.4167ZM14.8542 13.4167H18.6875V9.58333H14.8542V13.4167ZM4.3125 18.6875H8.14583V14.8542H4.3125V18.6875ZM14.8542 18.6875H18.6875V14.8542H14.8542V18.6875Z",fill:"#2e3452"})),h=a.createElement("svg",{role:"icon",width:"30",height:"30",viewBox:"0 0 30 30",fill:"none",xmlns:"http://www.w3.org/2000/svg"},a.createElement("g",{id:"Logout",role:"iconPath"},a.createElement("path",{id:"Vector",d:"M19.6875 10.9375L24.0625 15L19.6875 19.0625",stroke:"#908c89",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),a.createElement("path",{id:"Vector_2",d:"M23.75 15H13.4375",stroke:"#908c89",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),a.createElement("path",{id:"Vector_3",d:"M19.0625 5.9375H8.4375C7.05679 5.9375 5.9375 7.05679 5.9375 8.4375V21.5625C5.9375 22.9432 7.05679 24.0625 8.4375 24.0625H19.0625",stroke:"#908c89",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})));return l="icon-text"===t?a.createElement("button",{className:r,onClick:o},"home"===n?c:"table"===n?g:h,a.createElement("span",{className:s,role:"text"},e)):a.createElement("button",{className:m,onClick:o},a.createElement("span",{className:u,role:"text"},e)),l};var h=n(5474);const E=()=>{const e=(0,o.s0)(),t=(0,r.I0)();return a.createElement("nav",{className:"Navigation-module__sidebar--DT1RM"},a.createElement("div",{className:"Navigation-module__logo--VzBYH"},a.createElement(s.Z,null)),a.createElement("div",{className:"Navigation-module__navigation--Y1XTU"},a.createElement(g,{variant:"icon-text",text:"Home",icon:"home",onClick:function(){e("/home")}})),a.createElement("div",{className:"Navigation-module__logout--AZT3j"},a.createElement(g,{variant:"icon-text",text:"Logout",icon:"logout",onClick:function(){l.Z.remove("access_token"),localStorage.clear(),t((0,h.k)()),e("/")}})))},b=()=>{const e=(0,r.v9)((e=>e.auth.data.user)),t=0===e.firstname.length||0===e.lastname.length?e.username:e.firstname+" "+e.lastname;return a.createElement("div",{className:"User-module__user--sb4ab",role:"user"},a.createElement("svg",{role:"icon",width:"40",height:"40",viewBox:"0 0 40 40",fill:"none",xmlns:"http://www.w3.org/2000/svg"},a.createElement("g",{id:"User",role:"iconPath"},a.createElement("path",{id:"Vector",d:"M20.0002 18.7503C22.9917 18.7503 25.4168 16.3252 25.4168 13.3337C25.4168 10.3421 22.9917 7.91699 20.0002 7.91699C17.0086 7.91699 14.5835 10.3421 14.5835 13.3337C14.5835 16.3252 17.0086 18.7503 20.0002 18.7503Z",stroke:"#2e3452",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),a.createElement("path",{id:"Vector_2",d:"M11.4127 32.083H28.5877C30.4909 32.083 31.9569 30.4465 31.0682 28.7637C29.7607 26.2882 26.7802 23.333 20.0002 23.333C13.2202 23.333 10.2396 26.2882 8.93226 28.7637C8.04348 30.4465 9.5095 32.083 11.4127 32.083Z",stroke:"#2e3452",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}))),a.createElement("strong",{className:"User-module__fullname--Wqyr3",role:"name"},t))},_=()=>{const e=(new Date).toDateString(),t=e.slice(8,10)+" "+e.slice(4,7);return a.createElement("div",{className:"DateInfo-module__background--l0Kmi",role:"dateBackground"},a.createElement("svg",{role:"icon",width:"30",height:"30",viewBox:"0 0 30 30",fill:"none",xmlns:"http://www.w3.org/2000/svg"},a.createElement("g",{id:"Calendar",role:"iconPath"},a.createElement("path",{id:"Vector",d:"M5.9375 10.9375C5.9375 9.55679 7.05679 8.4375 8.4375 8.4375H21.5625C22.9432 8.4375 24.0625 9.55679 24.0625 10.9375V21.5625C24.0625 22.9432 22.9432 24.0625 21.5625 24.0625H8.4375C7.05679 24.0625 5.9375 22.9432 5.9375 21.5625V10.9375Z",stroke:"#2e3452",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),a.createElement("path",{id:"Vector_2",d:"M10 5.9375V10.3125",stroke:"#2e3452",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),a.createElement("path",{id:"Vector_3",d:"M20 5.9375V10.3125",stroke:"#2e3452",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),a.createElement("path",{id:"Vector_4",d:"M9.6875 13.4375H20.3125",stroke:"#2e3452",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}))),a.createElement("span",{className:"DateInfo-module__text--TPvBz",role:"text"},t))},v=()=>a.createElement("div",{className:"Header-module__header--k5rxh",role:"header"},a.createElement(b,null),a.createElement(_,null)),p=({title:e,buttons:t,children:n})=>a.createElement(a.Fragment,null,a.createElement("section",{className:"Body-module__header--DWsQS"},a.createElement("strong",{role:"title",className:"Body-module__title--IONoy",title:e},e),a.createElement("section",{className:"Body-module__button--wPklO"},t)),a.createElement("section",{className:"Body-module__children--JPajd",role:"children"},n)),N=({title:e,buttons:t,children:n})=>a.createElement("main",{className:"Main-module__main--FQADb"},a.createElement(E,null),a.createElement(v,null),a.createElement("section",{className:"Main-module__body--pnpPx"},a.createElement(p,{title:e,buttons:t},n)))},4206:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>m});var a=n(7294),o=n(5998),l=n(9250),r=n(4230),s=n(5699),c=n(5157),i=n(4740);const m=()=>{const e=(0,o.v9)((e=>e.class.data.class)),t=(0,o.v9)((e=>e.class.data.sessions)),n=(0,l.s0)();function m(e){localStorage.setItem("selectedSession",`${e}`),n("/edit-session")}const d=`${e.classname}: Sessions`,u=a.createElement(r.Z,{link:"/class",text:"Go to Class",variant:"contained"}),k=t.map((e=>{const t=new Date(e.date),n=`Session ${t.getDate()}/${t.getMonth()+1}`,o=e.id;return a.createElement(i.Z,{variant:"edit",text:n,buttonText:"Edit Session",key:o,onClick:m.bind(void 0,o)})}));return a.createElement(s.Z,{title:d,buttons:u},a.createElement("section",{className:c.Z.body},k))}}}]);