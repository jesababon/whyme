(this.webpackJsonpwhyme=this.webpackJsonpwhyme||[]).push([[0],{34:function(e,t,n){},46:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n(1),s=n.n(c),i=n(24),r=n.n(i),l=n(8),o=n(9),d=n(10),b=n(12),j=n(11),u=(n(34),n.p+"static/media/logo.7a75fbc6.svg");var h=function(){return Object(a.jsx)(l.b,{to:"/","aria-label":"link",role:"link",children:Object(a.jsx)("header",{className:"App-header ds-u-fill--primary","aria-label":"header",role:"banner",children:Object(a.jsx)("img",{src:u,className:"App-logo",alt:"icon","aria-label":"icon"})})})};var O=function(){return Object(a.jsxs)("footer",{className:"ds-u-color--white ds-u-flex-direction--row ds-u-fill--primary ds-u-padding--1",role:"contentinfo",children:[Object(a.jsx)(l.b,{to:"/Resume",children:"CV"}),"\xa0| \xa0",Object(a.jsx)(l.b,{to:"/LinkedIn",target:"_blank",children:"LinkedIn"}),"\xa0| \xa0",Object(a.jsx)(l.b,{to:"/GitHub",target:"_blank",children:"GitHub"})]})},m=n(15),x=n.n(m),p=function(e){Object(b.a)(n,e);var t=Object(j.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"sayNo",value:function(){alert("Click 'Yes.' We know why you're here.")}},{key:"render",value:function(){return Object(a.jsx)(s.a.Fragment,{children:Object(a.jsxs)("div",{className:"App-body",children:[Object(a.jsx)("h1",{className:"ds-u-font-size--h1 ds-u-font-weight--semibold",children:"Are you looking for a new front end developer?"}),Object(a.jsx)("p",{className:"sub-heading",children:"Curious about your options?"}),Object(a.jsx)("p",{children:Object(a.jsx)(x.a,{component:l.b,to:"/Second",type:"button",className:"ds-c-button ds-c-button--success ds-c-button--big",children:"YES, I NEED AN APPRENTICE"})}),"\xa0",Object(a.jsx)(x.a,{onClick:this.sayNo,type:"button",className:"ds-c-button ds-c-button--danger ds-c-button--big",children:"NO, NOT RIGHT NOW"})]})})}}]),n}(s.a.Component),f=n(18);function g(){return(g=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function v(e,t){if(null==e)return{};var n,a,c=function(e,t){if(null==e)return{};var n,a,c={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}var y=c.createElement("desc",null,"Created with Sketch."),k=c.createElement("g",{id:"Page-1",stroke:"none",strokeWidth:1,fill:"none",fillRule:"evenodd"},c.createElement("g",{id:"next",fill:"currentColor"},c.createElement("g",{id:"Icon-/-Next"},c.createElement("polygon",{id:"Path",points:"16 6.66666667 9.32208 13.3333333 4.90592 13.3333333 9.99008 8 0 8 0 5.33333333 9.95408 5.33333333 4.8968 0 9.33333333 0"}))));function N(e,t){var n=e.title,a=e.titleId,s=v(e,["title","titleId"]);return c.createElement("svg",g({width:"16px",height:"14px",viewBox:"0 0 16 14",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",ref:t,"aria-labelledby":a},s),void 0===n?c.createElement("title",{id:a},"Icon / Next"):n?c.createElement("title",{id:a},n):null,y,k)}var w=c.forwardRef(N),A=(n.p,n(26)),S=n.n(A),C=n(2),E=function(e){Object(b.a)(n,e);var t=Object(j.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).checkedBox=a.checkedBox.bind(Object(f.a)(a)),a.state={value:0},a.handleSubmit=a.handleSubmit.bind(Object(f.a)(a)),a}return Object(d.a)(n,[{key:"checkedBox",value:function(e){this.setState((function(t){return!0===e.target.checked?t.value+=.5:t.value-=.5,this.state.value}))}},{key:"handleSubmit",value:function(e){this.state.value>=1?(this.setState({redirect:!0}),e.preventDefault()):alert("Please choose at least one.")}},{key:"render",value:function(){return!0===this.state.redirect?Object(a.jsx)(C.a,{push:!0,to:"Third"}):Object(a.jsx)(s.a.Fragment,{children:Object(a.jsxs)("div",{className:"App-body",children:[Object(a.jsx)("h1",{className:"ds-u-font-size--h1",children:"What qualities are you looking for in a junior dev?"}),Object(a.jsx)("h2",{className:"ds-u-font-size--h2",children:"Choose your requirements."}),Object(a.jsx)("p",{className:"ds-u-font-size--lead",children:"Minimum of one (1) requirement."}),Object(a.jsx)(S.a,{choices:[{label:"Strong passion for good design.",value:"A",defaultChecked:!1},{label:"Willingness to learn.",value:"B"},{label:"Experience being a team player.",value:"C"},{label:"Strong interest in civic tech.",value:"D"},{label:"Loves dogs.",value:"E"}],className:"checkbox_choices",label:"",hint:"",name:"checkbox_choices",type:"checkbox",onChange:this.checkedBox}),Object(a.jsx)("br",{}),Object(a.jsxs)("button",{onClick:this.handleSubmit,className:"ds-c-button ds-c-button--primary",children:["Submit",Object(a.jsx)(w,{className:"ds-u-margin-left--1"})]})]})})}}]),n}(s.a.Component),P=n(28),I=n.n(P),J=n(16),L=n.n(J),T=n(27),F=n.p+"static/media/savvysapian.383ed700.gif",R=n.p+"static/media/fatalencounters.61337084.gif",z=function(e){Object(b.a)(n,e);var t=Object(j.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){return Object(a.jsxs)(I.a,{children:[Object(a.jsx)(L.a,{id:"resume",tab:"Resume",children:Object(a.jsx)(T.a,{url:"https://docs.google.com/document/d/e/2PACX-1vT6IGAuO46JJjsERkOCnlJzIL7Z6mq8yz4-5IyO5jJt5Ky_xLqX7LchS2xCS3hEzA9MswmFXE_PHv6N/pub?embedded=true",display:"flex","flex-direction":"column",id:"resume",className:"ds-u-overflow--scroll"})}),Object(a.jsxs)(L.a,{id:"project1",tab:"Project 1",children:[Object(a.jsx)("h2",{className:"ds-h4",id:"unordered-list-id",children:"This React Site"}),Object(a.jsxs)("ul",{className:"ds-c-list","aria-labelledby":"unordered-list-id",children:[Object(a.jsx)("li",{children:"Built in a few days to show ability to dive into design.cms.gov standards."}),Object(a.jsx)("li",{children:"HTML, CSS, and React.js"}),Object(a.jsx)("li",{children:"Accessibility reviewed using react-axe."})]})]}),Object(a.jsxs)(L.a,{id:"project2",tab:"Project 2",children:[Object(a.jsx)("h2",{className:"ds-h4",id:"unordered-list-id",children:"Savvy Sapian"}),Object(a.jsxs)("ul",{className:"ds-c-list","aria-labelledby":"unordered-list-id",children:[Object(a.jsx)("li",{children:"Geo-location based artistic events suggestion using Artsy and Artbeat API."}),Object(a.jsx)("li",{children:"HTML, CSS, React.js, Express.js, Google Maps API, Arsty API/JSON, Artbeat API/XML"})]}),Object(a.jsx)("div",{className:"ds-u-text-align--center",children:Object(a.jsx)("img",{src:F,className:"Projects",alt:"logo"})})]}),Object(a.jsxs)(L.a,{id:"project3",tab:"Project 3",children:[Object(a.jsx)("h2",{className:"ds-h4",id:"unordered-list-id",children:"Fatal Encounters"}),Object(a.jsxs)("ul",{className:"ds-c-list","aria-labelledby":"unordered-list-id",children:[Object(a.jsx)("li",{children:"Data visualization Express.js app utlizing database of police-related homicides."}),Object(a.jsx)("li",{children:"HTML, CSS, Express.js, PostgreSQL, Google Maps API, "})]}),Object(a.jsx)("div",{className:"ds-u-text-align--center",children:Object(a.jsx)("img",{src:R,className:"Projects",alt:"logo"})})]})]})}}]),n}(s.a.Component),B=function(e){Object(b.a)(n,e);var t=Object(j.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).state={},a}return Object(d.a)(n,[{key:"sayNo",value:function(){alert("Please provide feedback")}},{key:"render",value:function(){return Object(a.jsx)(s.a.Fragment,{children:Object(a.jsxs)("div",{className:"App-body",children:[Object(a.jsx)("h3",{children:"Jes would make a great fit!"}),Object(a.jsx)(z,{}),Object(a.jsx)("h3",{children:"Would you like to move forward with Jes as a candidate?"}),Object(a.jsx)(x.a,{href:"mailto:jesababon@gmail.com ?subject=Job Offer for Jesica Ababon - NAVA&body=Job Offer for Jesica Ababon:",target:"_blank",type:"button",className:"ds-c-button ds-c-button--success",children:"Yes"}),"\xa0",Object(a.jsx)(x.a,{onClick:this.sayNo,href:"mailto:jesababon@gmail.com ?subject=Feedback for Jesica Ababon - NAVA&body=Constructive criticism for Jesica Ababon:",target:"_blank",type:"button",className:"ds-c-button ds-c-button--danger",children:"No"})]})})}}]),n}(s.a.Component),M=function(e){Object(b.a)(n,e);var t=Object(j.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){return Object(a.jsxs)(s.a.Fragment,{children:[Object(a.jsx)(h,{}),Object(a.jsxs)("div",{role:"main",children:[Object(a.jsx)(C.a,{from:"",to:"/"}),Object(a.jsx)(C.b,{exact:!0,path:"/",component:p}),Object(a.jsx)(C.b,{exact:!0,path:"/Second",component:E}),Object(a.jsx)(C.b,{exact:!0,path:"/Third",component:B}),Object(a.jsx)(C.b,{exact:!0,path:"/Resume",component:z}),Object(a.jsx)(C.b,{exact:!0,path:"/LinkedIn",render:function(){return window.location="https://linkedin.com/in/jesababon/"}}),Object(a.jsx)(C.b,{exact:!0,path:"/GitHub",render:function(){return window.location="https://github.com/jesababon"}})]}),Object(a.jsx)(O,{})]})}}]),n}(s.a.Component),G=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,47)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,s=t.getLCP,i=t.getTTFB;n(e),a(e),c(e),s(e),i(e)}))};r.a.render(Object(a.jsx)(s.a.StrictMode,{children:Object(a.jsx)(l.a,{children:Object(a.jsx)(M,{})})}),document.getElementById("root")),G()}},[[46,1,2]]]);
//# sourceMappingURL=main.6bb6e316.chunk.js.map