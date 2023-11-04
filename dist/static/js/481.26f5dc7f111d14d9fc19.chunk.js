"use strict";(self.webpackChunkclassroom=self.webpackChunkclassroom||[]).push([[481],{2354:(e,t,a)=>{a.d(t,{Z:()=>c});var n=a(7294),l=a(1937);var r=a(9729);const c=({type:e,label:t,children:a,question:c,onCancelClick:s,onProceedClick:o})=>n.createElement(l.Z,null,n.createElement("section",{className:"Modal-module__modal--ufBCd"},n.createElement("section",null,n.createElement("strong",{className:"Modal-module__title--xuw9g"},t),n.createElement("section",{className:"Modal-module__line--S7NVR"})),"edit"===e||"edit-disabled"===e?n.createElement("section",{className:"Modal-module__input--XUzdD"},a,n.createElement("strong",{className:"Modal-module__required--guPeT"},"* Required")):n.createElement("section",{className:"Modal-module__question--rhVFQ"},c),n.createElement("section",{className:"Modal-module__actions--lf2Nz"},n.createElement("section",null,"edit"===e||"edit-disabled"===e?n.createElement(r.Z,{variant:"outlined",text:"Cancel",icon:"cancel",onClick:s}):n.createElement(r.Z,{variant:"contained",text:"Cancel",icon:"cancel",onClick:s})),n.createElement("section",{className:"Modal-module__action--n9Fij"},"edit"===e?n.createElement(r.Z,{variant:"contained",text:"Submit",icon:"submit",onClick:o}):"edit-disabled"===e?n.createElement(r.Z,{variant:"contained-disabled",text:"Submit",icon:"submit"}):n.createElement(r.Z,{variant:"contained-danger",text:"Delete",icon:"submit-danger",onClick:o})))))},280:(e,t,a)=>{a.d(t,{Z:()=>c});var n=a(7294);const l={dropdown:"Dropdown-module__dropdown--RkN5y",menu:"Dropdown-module__menu--L3zA5"};var r=a(7476);const c=({counter:e,label:t,menu:a,variant:c})=>{const s=n.useRef(null),[o,i]=n.useState(!1),[m,d]=n.useState(!1);return n.useEffect(function(e,t,a,n){return()=>{e||a.current&&(t(!0),["click","touchstart"].forEach((()=>{document.addEventListener("click",(e=>{const t=a.current,l=e.target;null!==t&&t.contains(l)||n(!1)}))})))}}(o,i,s,d)),n.useEffect((()=>{d(!1)}),[e]),n.createElement("section",{ref:s,className:l.dropdown},n.createElement(r.Z,{variant:c,text:t,onClick:()=>d(!m)}),m&&null!==a?n.createElement("ul",{className:l.menu},a.map(((e,t)=>n.createElement("li",{className:l.menuItem,key:t},e)))):null)}},2797:(e,t,a)=>{a.d(t,{Z:()=>o});var n=a(7294),l=a(4184),r=a.n(l);const c="Input-module__label--rc3gs",s=n.forwardRef(((e,t)=>{const a=!0===e.error?r()(c,"Input-module__labelError--su1DH"):c;return n.createElement("div",{className:"Input-module__inputContainer--u6Drk"},n.createElement("input",{id:e.name,className:"Input-module__input--qIxXL",type:e.type,name:e.name,value:e.value,maxLength:e.maxLength,placeholder:" ",ref:t,required:e.required,onChange:e.onChange}),n.createElement("div",{className:"Input-module__background--cqi5u",role:"background"},e.label),n.createElement("label",{className:a,htmlFor:e.name,role:"label"},e.label),!0===e.error?n.createElement("p",{className:"Input-module__error--i921T"},e.errorText):null)}));s.displayName="Input";const o=s},1937:(e,t,a)=>{a.d(t,{Z:()=>l});var n=a(7294);const l=({children:e})=>n.createElement("section",{role:"overlay",className:"Overlay-module__overlay--xZrSL"},n.createElement("section",{className:"Overlay-module__child--lmQw_"},e))},8833:(e,t,a)=>{a.d(t,{Z:()=>o});var n=a(7294),l=a(4184),r=a.n(l);const c="Snackbar-module__snackbar--OLpas",s="Snackbar-module__text--DusjQ",o=({text:e,severity:t})=>{let a;const l=n.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"35",height:"35",viewBox:"0 0 35 35",fill:"none"},n.createElement("path",{d:"M6.92712 17.4997C6.92712 11.6604 11.6608 6.92676 17.5 6.92676C23.3394 6.92676 28.073 11.6604 28.073 17.4997C28.073 23.339 23.3394 28.0726 17.5 28.0726C11.6608 28.0726 6.92712 23.339 6.92712 17.4997Z",stroke:"#fcfcfc",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),n.createElement("path",{d:"M14.2188 18.5938L14.8512 19.9418C15.3526 21.0102 16.849 21.0717 17.4364 20.0481L20.7812 14.2188",stroke:"#fcfcfc",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})),o=n.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"35",height:"35",viewBox:"0 0 35 35",fill:"none"},n.createElement("path",{d:"M6.92676 17.4997C6.92676 11.6604 11.6604 6.92676 17.4997 6.92676C23.339 6.92676 28.0726 11.6604 28.0726 17.4997C28.0726 23.339 23.339 28.0726 17.4997 28.0726C11.6604 28.0726 6.92676 23.339 6.92676 17.4997Z",stroke:"#fcfcfc",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),n.createElement("path",{d:"M14.2188 14.2188L20.7813 20.7813",stroke:"#fcfcfc",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),n.createElement("path",{d:"M20.7813 14.2188L14.2188 20.7813",stroke:"#fcfcfc",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}));return a="success"===t?n.createElement("div",{className:r()(c,"Snackbar-module__successSnackbar--wPX6Z"),role:"alert"},l,n.createElement("strong",{className:s,role:"alertText"},e)):n.createElement("div",{className:r()(c,"Snackbar-module__errorSnackbar--Ceu4L"),role:"alert"},o,n.createElement("strong",{className:s,role:"alertText"},e)),a}},7227:(e,t,a)=>{a.d(t,{Z:()=>r});var n=a(7294),l=a(1937);const r=()=>n.createElement(l.Z,null,n.createElement("span",{className:"Spinner-module__loader--GyqpB"}))},4740:(e,t,a)=>{a.d(t,{Z:()=>s});var n=a(7294);const l="Tag-module__tag--GyuMK",r="Tag-module__text--VL69P";var c=a(7476);const s=({text:e,buttonText:t,variant:a,onClick:s})=>{let o;switch(a){case"delete":o=n.createElement("div",{className:l,role:"delete"},n.createElement("strong",{className:r,role:"text"},e),n.createElement(c.Z,{variant:"contained-danger-slim",text:t,onClick:s}));break;case"edit":o=n.createElement("div",{className:l,role:"edit"},n.createElement("strong",{className:r,role:"text"},e),n.createElement(c.Z,{variant:"contained-slim",text:t,onClick:s}));break;default:o=n.createElement("div",{className:l,role:"open"},n.createElement("strong",{className:r,role:"text"},e),n.createElement(c.Z,{variant:"contained-slim",text:t,onClick:s}))}return o}},4946:(e,t,a)=>{a.r(t),a.d(t,{default:()=>_});var n=a(7294),l=a(9250),r=a(5998),c=a(4740),s=a(5157),o=a(5699),i=a(9647),m=a(7227),d=a(8833),u=a(280),E=a(7476),k=a(2354),v=a(2797),C=a(6499);const _=()=>{const[e,t]=n.useState(0),[a,_]=n.useState(!1),[p,f]=n.useState(""),[g,x]=n.useState(!1),h=n.useRef(null),N=(0,r.v9)((e=>e.home.loading)),Z=(0,r.v9)((e=>e.home.error)),b=(0,r.v9)((e=>e.home.data.classes)),w=(0,r.I0)(),y=(0,l.s0)();n.useEffect((()=>{w((0,i.ar)())}),[]),n.useEffect((()=>{h.current&&h.current.focus()}),[a]);const L=null===Z?"Something went wrong!":Z;function S(){t(e+1),_(!0)}function M(){_(!1),f("")}function q(e){w((0,C._L)(e)),y("/class")}const I=0===b.length?n.createElement(u.Z,{variant:"contained",counter:e,label:"Class",menu:[n.createElement(E.Z,{variant:"text",text:"New Class",onClick:S,key:"new-class"}),n.createElement(E.Z,{variant:"text-disabled",text:"Edit Class",key:"edit-class"}),n.createElement(E.Z,{variant:"text-disabled",text:"Delete Class",key:"delete-class"})]}):n.createElement(u.Z,{variant:"contained",counter:e,label:"Class",menu:[n.createElement(E.Z,{variant:"text",text:"New Class",onClick:S,key:"new-class"}),n.createElement(E.Z,{variant:"text",text:"Edit Class",onClick:function(){y("/edit-class")},key:"edit-class"}),n.createElement(E.Z,{variant:"text",text:"Delete Class",onClick:function(){y("/delete-class")},key:"delete-class"})]}),T=n.createElement(v.Z,{label:"Class Name *",maxLength:255,name:"classname",error:p.length>0,errorText:"Class Name is required!",value:p,required:!0,type:"text",ref:h,onChange:e=>function(e){f(e.target.value)}(e)}),D=p.trim().length>0?n.createElement(k.Z,{label:"New Class",type:"edit",onCancelClick:M,onProceedClick:function(){p.trim().length>0?(_(!1),w((0,i.dB)(p)),f("")):(f(""),_(!1),x(!0))}},T):n.createElement(k.Z,{label:"New Class",type:"edit-disabled",onCancelClick:M},T);let j;j=0!==b.length?b.map((e=>{const t=e.id;return n.createElement(c.Z,{variant:"open",text:e.classname,buttonText:"Open Class",key:t,onClick:q.bind(void 0,t)})})):[];const P=j.length>0?n.createElement("section",{className:s.Z.body},j):n.createElement("strong",{className:s.Z.hint},"Please add a class!");return n.createElement(n.Fragment,null,"pending"===N?n.createElement(m.Z,null):"failed"===N?n.createElement("section",{className:s.Z.message},n.createElement(d.Z,{text:L,severity:"error"})):"succeeded"===N?n.createElement("section",{className:s.Z.message},n.createElement(d.Z,{text:"New class added successfully!",severity:"success"})):null,!0===a?D:null,g?n.createElement("section",{className:s.Z.message},n.createElement(d.Z,{text:"Invalid input!",severity:"error"})):null,n.createElement(o.Z,{title:"Home",buttons:I},P))}}}]);