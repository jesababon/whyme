(this.webpackJsonpwhyme=this.webpackJsonpwhyme||[]).push([[0],{30:function(e,t,n){},41:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n(0),o=n.n(c),r=n(23),s=n.n(r),i=n(8),l=(n(30),n.p+"static/media/logo.7a75fbc6.svg");var b=function(){return Object(a.jsx)("div",{children:Object(a.jsx)("header",{className:"App-header ds-u-fill--primary",children:Object(a.jsx)(i.b,{to:"/",children:Object(a.jsx)("img",{src:l,className:"App-logo ",alt:"logo"})})})})};var u=function(){return Object(a.jsx)("footer",{className:"App-footer ds-u-fill--primary",children:Object(a.jsx)("a",{className:"ds-c-link",href:"https://www.linkedin.com/in/jesababon/",target:"_blank",rel:"noopener noreferrer",children:"Connect with Jes"})})},d=n(10),h=n(11),j=n(13),f=n(12),m=n(15),p=n.n(m),O=function(e){Object(j.a)(n,e);var t=Object(f.a)(n);function n(){return Object(d.a)(this,n),t.apply(this,arguments)}return Object(h.a)(n,[{key:"sayNo",value:function(){alert("Hahaha. Very Funny. We know why you're here.")}},{key:"render",value:function(){return Object(a.jsxs)("div",{children:[Object(a.jsx)("h3",{children:"What are you looking for?"}),Object(a.jsx)(p.a,{component:i.b,to:"/Second",type:"button",className:"ds-c-button ds-c-button--primary ds-c-button--big",children:"Yes"}),"\xa0",Object(a.jsx)(p.a,{onClick:this.sayNo,type:"button",className:"ds-c-button ds-c-button--danger ds-c-button--big",children:"No"})]})}}]),n}(o.a.Component),x=n(14);function y(){return(y=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function v(e,t){if(null==e)return{};var n,a,c=function(e,t){if(null==e)return{};var n,a,c={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}var g=c.createElement("desc",null,"Created with Sketch."),k=c.createElement("g",{id:"Page-1",stroke:"none",strokeWidth:1,fill:"none",fillRule:"evenodd"},c.createElement("g",{id:"next",fill:"currentColor"},c.createElement("g",{id:"Icon-/-Next"},c.createElement("polygon",{id:"Path",points:"16 6.66666667 9.32208 13.3333333 4.90592 13.3333333 9.99008 8 0 8 0 5.33333333 9.95408 5.33333333 4.8968 0 9.33333333 0"}))));function w(e,t){var n=e.title,a=e.titleId,o=v(e,["title","titleId"]);return c.createElement("svg",y({width:"16px",height:"14px",viewBox:"0 0 16 14",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",ref:t,"aria-labelledby":a},o),void 0===n?c.createElement("title",{id:a},"Icon / Next"):n?c.createElement("title",{id:a},n):null,g,k)}var N=c.forwardRef(w),C=(n.p,n(21)),S=n.n(C),B=n(2),A=function(e){Object(j.a)(n,e);var t=Object(f.a)(n);function n(e){var a;return Object(d.a)(this,n),(a=t.call(this,e)).firstBox=a.firstBox.bind(Object(x.a)(a)),a.secondBox=a.secondBox.bind(Object(x.a)(a)),a.state={value:0},a.handleSubmit=a.handleSubmit.bind(Object(x.a)(a)),a}return Object(h.a)(n,[{key:"firstBox",value:function(){this.setState((function(e){e.value+=.5}))}},{key:"secondBox",value:function(){this.setState((function(e){e.value+=.5}))}},{key:"handleSubmit",value:function(e){this.state.value>=1?(this.setState({redirect:!0}),e.preventDefault()):alert("Please choose at least one.")}},{key:"render",value:function(){return!0===this.state.redirect?Object(a.jsx)(B.a,{push:!0,to:"Third"}):Object(a.jsxs)("div",{children:[Object(a.jsx)("p",{className:"ds-title",children:"What qualities are you looking for in a junior dev?"}),Object(a.jsx)("h1",{children:"Choose your requirements."}),Object(a.jsx)("h2",{children:"Minimum of one requirement."}),Object(a.jsx)("br",{}),Object(a.jsxs)("fieldset",{className:"ds-c-fieldset ds-u-display--inline-block",children:[Object(a.jsx)(S.a,{className:"checkbox_choice",type:"checkbox",label:"Loves dogs.",name:"value1",value:"1",onChange:this.firstBox}),Object(a.jsx)(S.a,{className:"checkbox_choice",type:"checkbox",label:"Loves flowers.",name:"value2",value:"2",onChange:this.secondBox})]}),Object(a.jsx)("br",{}),"\xa0",Object(a.jsxs)("button",{onClick:this.handleSubmit,className:"ds-c-button ds-c-button--primary ds-u-margin-top--2",children:["Submit",Object(a.jsx)(N,{className:"ds-u-margin-left--1"})]}),Object(a.jsx)("br",{})]})}}]),n}(o.a.Component),E=function(e){Object(j.a)(n,e);var t=Object(f.a)(n);function n(e){var a;return Object(d.a)(this,n),(a=t.call(this,e)).state={},a}return Object(h.a)(n,[{key:"sayNo",value:function(){alert("Please provide feedback")}},{key:"render",value:function(){return Object(a.jsxs)("div",{children:[Object(a.jsx)("h3",{children:"Jes would make a great fit!"}),Object(a.jsx)("h3",{children:"Would you like to move forward with Jes as a candidate?"}),Object(a.jsx)(p.a,{a:!0,href:"mailto:jesababon@gmail.com ?subject=Job Offer for Jesica Ababon - NAVA&body=This is only a test!",type:"button",className:"ds-c-button ds-c-button--primary ds-c-button--big",children:"Yes"}),"\xa0",Object(a.jsx)(p.a,{onClick:this.sayNo,a:!0,href:"mailto:jesababon@gmail.com ?subject=Feedback for Jesica Ababon - NAVA&body=This is only a test!",type:"button",className:"ds-c-button ds-c-button--primary ds-c-button--big",children:"No"})]})}}]),n}(o.a.Component);var P=function(){return Object(a.jsxs)("div",{className:"App",children:[Object(a.jsx)(b,{}),Object(a.jsx)(B.b,{exact:!0,path:"/",component:O}),Object(a.jsx)(B.b,{exact:!0,path:"/Second",component:A}),Object(a.jsx)(B.b,{exact:!0,path:"/Third",component:E}),Object(a.jsx)(u,{})]})},J=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,42)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,o=t.getLCP,r=t.getTTFB;n(e),a(e),c(e),o(e),r(e)}))};s.a.render(Object(a.jsx)(o.a.StrictMode,{children:Object(a.jsx)(i.a,{children:Object(a.jsx)(P,{})})}),document.getElementById("root")),J()}},[[41,1,2]]]);
//# sourceMappingURL=main.f46cc408.chunk.js.map