(function(e){function t(t){for(var a,n,i=t[0],u=t[1],l=t[2],c=0,d=[];c<i.length;c++)n=i[c],Object.prototype.hasOwnProperty.call(o,n)&&o[n]&&d.push(o[n][0]),o[n]=0;for(a in u)Object.prototype.hasOwnProperty.call(u,a)&&(e[a]=u[a]);h&&h(t);while(d.length)d.shift()();return s.push.apply(s,l||[]),r()}function r(){for(var e,t=0;t<s.length;t++){for(var r=s[t],a=!0,n=1;n<r.length;n++){var i=r[n];0!==o[i]&&(a=!1)}a&&(s.splice(t--,1),e=u(u.s=r[0]))}return e}var a={},n={app:0},o={app:0},s=[];function i(e){return u.p+"js/"+({"books~chat~dashboard~libraries~tags~user":"books~chat~dashboard~libraries~tags~user","books~libraries~user":"books~libraries~user","books~libraries":"books~libraries",books:"books",libraries:"libraries",user:"user",chat:"chat",dashboard:"dashboard",tags:"tags"}[e]||e)+"-legacy."+{"books~chat~dashboard~libraries~tags~user":"f48949df","books~libraries~user":"aaef8866","books~libraries":"92c8a114",books:"8e8b2ec7",libraries:"f2222379",user:"aab73a3d",chat:"c0b0ebe6",dashboard:"f3385b77",tags:"0b00d649"}[e]+".js"}function u(t){if(a[t])return a[t].exports;var r=a[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,u),r.l=!0,r.exports}u.e=function(e){var t=[],r={"books~chat~dashboard~libraries~tags~user":1,"books~libraries~user":1,"books~libraries":1,books:1,user:1,tags:1};n[e]?t.push(n[e]):0!==n[e]&&r[e]&&t.push(n[e]=new Promise((function(t,r){for(var a="css/"+({"books~chat~dashboard~libraries~tags~user":"books~chat~dashboard~libraries~tags~user","books~libraries~user":"books~libraries~user","books~libraries":"books~libraries",books:"books",libraries:"libraries",user:"user",chat:"chat",dashboard:"dashboard",tags:"tags"}[e]||e)+"."+{"books~chat~dashboard~libraries~tags~user":"4cfa8b2f","books~libraries~user":"d491990c","books~libraries":"c6fe3ff2",books:"c3b9d727",libraries:"31d6cfe0",user:"3bf3bb9a",chat:"31d6cfe0",dashboard:"31d6cfe0",tags:"96b7896c"}[e]+".css",o=u.p+a,s=document.getElementsByTagName("link"),i=0;i<s.length;i++){var l=s[i],c=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(c===a||c===o))return t()}var d=document.getElementsByTagName("style");for(i=0;i<d.length;i++){l=d[i],c=l.getAttribute("data-href");if(c===a||c===o)return t()}var h=document.createElement("link");h.rel="stylesheet",h.type="text/css",h.onload=t,h.onerror=function(t){var a=t&&t.target&&t.target.src||o,s=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");s.code="CSS_CHUNK_LOAD_FAILED",s.request=a,delete n[e],h.parentNode.removeChild(h),r(s)},h.href=o;var b=document.getElementsByTagName("head")[0];b.appendChild(h)})).then((function(){n[e]=0})));var a=o[e];if(0!==a)if(a)t.push(a[2]);else{var s=new Promise((function(t,r){a=o[e]=[t,r]}));t.push(a[2]=s);var l,c=document.createElement("script");c.charset="utf-8",c.timeout=120,u.nc&&c.setAttribute("nonce",u.nc),c.src=i(e);var d=new Error;l=function(t){c.onerror=c.onload=null,clearTimeout(h);var r=o[e];if(0!==r){if(r){var a=t&&("load"===t.type?"missing":t.type),n=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+a+": "+n+")",d.name="ChunkLoadError",d.type=a,d.request=n,r[1](d)}o[e]=void 0}};var h=setTimeout((function(){l({type:"timeout",target:c})}),12e4);c.onerror=c.onload=l,document.head.appendChild(c)}return Promise.all(t)},u.m=e,u.c=a,u.d=function(e,t,r){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(u.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)u.d(r,a,function(t){return e[t]}.bind(null,a));return r},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/",u.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],c=l.push.bind(l);l.push=t,l=l.slice();for(var d=0;d<l.length;d++)t(l[d]);var h=c;s.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"034f":function(e,t,r){"use strict";r("85ec")},"0b28":function(e,t,r){"use strict";r.d(t,"b",(function(){return i})),r.d(t,"a",(function(){return l}));r("99af"),r("96cf");var a=r("1da1"),n=r("bc3a"),o=r.n(n),s="https://lib-hub-api.herokuapp.com/api/users/password-recovery/";function i(e){return u.apply(this,arguments)}function u(){return u=Object(a["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return console.log(t),e.next=3,o.a.post(s+"username/"+t);case 3:case"end":return e.stop()}}),e)}))),u.apply(this,arguments)}function l(e,t,r){return c.apply(this,arguments)}function c(){return c=Object(a["a"])(regeneratorRuntime.mark((function e(t,r,a){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,o.a.post("https://lib-hub-api.herokuapp.com/api/users/".concat(t,"/password-recovery/").concat(a),r);case 2:case"end":return e.stop()}}),e)}))),c.apply(this,arguments)}},"3d93":function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"d",(function(){return c})),r.d(t,"c",(function(){return h})),r.d(t,"b",(function(){return m}));r("96cf");var a=r("1da1"),n=r("bc3a"),o=r.n(n),s=r("f121"),i=function(e){return"https://lib-hub-api.herokuapp.com/api/users/".concat(e,"/chats")};function u(e,t,r){return l.apply(this,arguments)}function l(){return l=Object(a["a"])(regeneratorRuntime.mark((function e(t,r,a){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,o.a.get(i(t)+"/"+r,Object(s["a"])(a));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)}))),l.apply(this,arguments)}function c(e,t,r,a){return d.apply(this,arguments)}function d(){return d=Object(a["a"])(regeneratorRuntime.mark((function e(t,r,a,n){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,o.a.post(i(t)+"/"+r,a,Object(s["a"])(n));case 2:case"end":return e.stop()}}),e)}))),d.apply(this,arguments)}function h(e,t,r){return b.apply(this,arguments)}function b(){return b=Object(a["a"])(regeneratorRuntime.mark((function e(t,r,a){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,o.a.post(i(t),r,Object(s["a"])(a));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)}))),b.apply(this,arguments)}function m(e,t){return p.apply(this,arguments)}function p(){return p=Object(a["a"])(regeneratorRuntime.mark((function e(t,r){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,o.a.get(i(t),Object(s["a"])(r));case 2:return a=e.sent,e.abrupt("return",a.data);case 4:case"end":return e.stop()}}),e)}))),p.apply(this,arguments)}},41601:function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-container",{attrs:{fluid:""}},[r("chat-messages")],1)},n=[],o=r("9c9d"),s={name:"Chat",components:{ChatMessages:o["a"]},data:function(){return{chats:[]}},methods:{openChatForm:function(e){this.$store.commit("showChatForm",e)}},computed:{show_ChatForm:{get:function(){return this.$store.state.ChatForm},set:function(e){e?this.$store.commit("showChatForm",null):this.$store.commit("hideChatForm")}}},mounted:function(){this.chats=[{_id:"1",users:["Eugenio","Federico"],createdOn:"2020-12-17",newMessages:1},{_id:"2",users:["Eugenio","Sebastiano"],createdOn:"2020-12-18",newMessages:0},{_id:"3",users:["Eugenio","Carlo"],createdOn:"2020-12-19",newMessages:5}]}},i=s,u=r("2877"),l=r("6544"),c=r.n(l),d=r("a523"),h=Object(u["a"])(i,a,n,!1,null,null,null);t["default"]=h.exports;c()(h,{VContainer:d["a"]})},"4a93":function(e,t,r){e.exports=r.p+"img/logo-rounded.d4f5d8f7.png"},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var a=r("2b0e"),n=(r("d3b7"),r("bc3a")),o=r.n(n),s={},i=o.a.create(s);i.interceptors.request.use((function(e){return e}),(function(e){return Promise.reject(e)})),i.interceptors.response.use((function(e){return e}),(function(e){return Promise.reject(e)})),Plugin.install=function(e){e.axios=i,window.axios=i,Object.defineProperties(e.prototype,{axios:{get:function(){return i}},$axios:{get:function(){return i}}})},a["default"].use(Plugin);Plugin;var u=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-app",[r("router-view",{attrs:{name:"bar"}}),r("v-main",{attrs:{fluid:""}},[r("router-view")],1)],1)},l=[],c={name:"App",beforeCreate:function(){},data:function(){return{}}},d=c,h=(r("034f"),r("2877")),b=r("6544"),m=r.n(b),p=r("7496"),f=r("f6c4"),g=Object(h["a"])(d,u,l,!1,null,null,null),v=g.exports;m()(g,{VApp:p["a"],VMain:f["a"]});var w=r("8c4f"),k=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-container",{staticClass:"ma-2",attrs:{"align-content-lg":"",fluid:""}},[r("v-row",{staticClass:"d-flex justify-center"},[r("v-col",[r("about-us")],1),r("v-col",[r("v-card",{staticClass:"d-flex align-start mt-2 mr-5",attrs:{"elevation-5":""}},[r("signup-form")],1)],1)],1),r("v-row",{attrs:{justify:"center"}},[r("v-dialog",{attrs:{"max-width":"600px"},model:{value:e.showLoginDialog,callback:function(t){e.showLoginDialog=t},expression:"showLoginDialog"}},[r("log-in-form")],1)],1)],1)},y=[],_=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-container",[r("div",{staticClass:"transition-swing",class:["text-h2"]},[e._v("About Us")]),r("br"),e._v(" We are not going to abandon libhub. We have designed an ambitious project and since the beginning it was thought to be used by some members of the team who had the problem of huge home libraries. We already developed this main part and we could already use it for ourselves. We deem that some of the functionalities that we did not manage to develop, are still important to have a beautiful project that will go on our personal portfolio sites. We choose vuetify as a frontend framework not only because it had a huge quantity of components and consisted in a perfect material implementation, but also because it made it very easy to build a responsive web application. With not too much effort our site mobile support can become perfect and we can extend it even for tablet devices. Nonetheless, we think that a mobile application could be better and could make our project be reached by lots of users. We have again divided the team in two subtems, according to our commitments. One subteam will develop both a perfect responsive webapp, making it also a pwa, while the other one will develop an hybrid mobile application by using React Native. We think that having learnt vuejs will make it very easy to learn React. We also are thinking about developing a desktop application, which will be exactly the same of the web app by using Electron. Given a site, electron creates a desktop application that works on Windows, OSX and Linux, by creating a chromium instance that runs the site and supports also the node js libraries that would not work in a normal browser. By doing this we want to deliver to the user the possibility to have an offline support of the service, that uses a local sqlite3 database when the application is offline and synchronizes with the cloud mongodb when it comes back online. "),r("br"),r("br"),e._v(" If you want to have an awesome experince try to use the "),r("strong",[e._v(" superUser Account ")]),r("br"),e._v(" Username: "),r("strong",[e._v(" the_one ")]),r("br"),e._v(" Pass: "),r("strong",[e._v(" nsfw")])])},x=[],C={name:"AboutUs"},D=C,R=r("a523"),I=Object(h["a"])(D,_,x,!1,null,null,null),j=I.exports;m()(I,{VContainer:R["a"]});var O=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-container",[r("v-form",{ref:"form",attrs:{"lazy-validation":""},model:{value:e.valid,callback:function(t){e.valid=t},expression:"valid"}},[r("v-text-field",{attrs:{id:"Username",rules:e.usernameRules,counter:23,label:"Username",required:""},model:{value:e.signup.username,callback:function(t){e.$set(e.signup,"username",t)},expression:"signup.username"}}),r("v-text-field",{attrs:{id:"name",label:"Name",required:""},model:{value:e.signup.name,callback:function(t){e.$set(e.signup,"name",t)},expression:"signup.name"}}),r("v-text-field",{attrs:{id:"surname",label:"Surname",required:""},model:{value:e.signup.surname,callback:function(t){e.$set(e.signup,"surname",t)},expression:"signup.surname"}}),r("v-text-field",{attrs:{id:"UserEmail",rules:e.emailRules,label:"E-mail",required:""},model:{value:e.signup.email,callback:function(t){e.$set(e.signup,"email",t)},expression:"signup.email"}}),r("v-text-field",{attrs:{"append-icon":e.show1?"mdi-eye":"mdi-eye-off",rules:[e.passwordRules.required,e.passwordRules.min,e.passwordRules.max,e.passwordRules.valid],type:e.show1?"text":"password",name:"input-10-1",label:"Password",counter:"",hint:"At least 8 characters",required:""},on:{"click:append":function(t){e.show1=!e.show1}},model:{value:e.signup.password,callback:function(t){e.$set(e.signup,"password",t)},expression:"signup.password"}}),r("v-text-field",{attrs:{"append-icon":e.show1?"mdi-eye":"mdi-eye-off",rules:[e.confirmPasswordRules.equal],type:e.show1?"text":"password",name:"input-10-1",label:"Confirm Password",counter:"",hint:"At least 8 characters",required:""},on:{"click:append":function(t){e.show1=!e.show1}},model:{value:e.confirmPassword,callback:function(t){e.confirmPassword=t},expression:"confirmPassword"}}),r("br"),r("v-btn",{staticClass:"mr-4",attrs:{disabled:!e.valid,color:"success"},on:{click:e.validate}},[e._v(" Sign up ")]),r("v-btn",{staticClass:"float-right",attrs:{text:"",tile:""},on:{click:e.openLoginDialog}},[r("span",{staticClass:"mr-2"},[e._v("Login ")]),r("v-icon",[e._v("mdi-account-circle")])],1),r("br"),""!==e.error?r("v-alert",{staticClass:"mt-2",attrs:{dense:"",outlined:"",type:"error"}},[r("strong",[e._v(e._s(e.error))])]):e._e()],1),r("v-dialog",{attrs:{persistent:"","max-width":"290"},model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[r("v-card",[r("v-card-title",{staticClass:"headline"},[e._v(" Veification Process ")]),r("v-card-text",[e._v("Check your email to verify your account")]),r("v-card-actions",[r("v-spacer"),r("v-btn",{attrs:{color:"green darken-1",text:""},on:{click:function(t){e.dialog=!1}}},[e._v(" Ok ")])],1)],1)],1)],1)},L=[],P=(r("96cf"),r("1da1")),V=r("d706"),$={name:"SignupForm",data:function(){var e=this;return{valid:!0,show1:!1,show2:!0,dialog:!1,error:"",signup:{password:"",username:"",email:"",name:"",surname:""},password:"",passwordRules:{required:function(e){return!!e||"Required."},min:function(e){return e.length>=8||"Min 8 characters"},max:function(e){return e.length<=23||"Max 23 characters"},valid:function(e){return/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,23}$/.test(e)||" password must contain at least an upper case, a lower case, a number and a special character"}},confirmPassword:"",confirmPasswordRules:{equal:function(t){return t===e.signup.password||"Password must match"}},username:"",usernameRules:[function(e){return!!e||"Username is required"},function(e){return e&&e.length<=23||"Username must be less than 23 characters"}],email:"",emailRules:[function(e){return!!e||"E-mail is required"},function(e){return/.+@.+\..+/.test(e)||"E-mail must be valid"}]}},methods:{validate:function(){var e=this;return Object(P["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!e.$refs.form.validate()){t.next=11;break}return t.prev=1,t.next=4,Object(V["b"])(e.signup);case 4:e.dialog=!0,e.error="",t.next=11;break;case 8:t.prev=8,t.t0=t["catch"](1),e.error=t.t0.response.data.message;case 11:case"end":return t.stop()}}),t,null,[[1,8]])})))()},openLoginDialog:function(){this.$store.commit("showLoginDialog")}}},B=$,S=r("0798"),F=r("8336"),E=r("b0af"),M=r("99d9"),U=r("169a"),T=r("4bd4"),A=r("132d"),q=r("2fa4"),N=r("8654"),z=Object(h["a"])(B,O,L,!1,null,null,null),W=z.exports;m()(z,{VAlert:S["a"],VBtn:F["a"],VCard:E["a"],VCardActions:M["a"],VCardText:M["c"],VCardTitle:M["d"],VContainer:R["a"],VDialog:U["a"],VForm:T["a"],VIcon:A["a"],VSpacer:q["a"],VTextField:N["a"]});var H=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-card",[r("v-card-title",[r("span",{staticClass:"headline"},[e._v("Login")])]),r("v-card-text",[r("v-form",{ref:"form",staticStyle:{height:"100%"},attrs:{"lazy-validation":""},model:{value:e.valid,callback:function(t){e.valid=t},expression:"valid"}},[r("v-container",{attrs:{"fill-height":""}},[r("v-row",{attrs:{align:"center"}},[r("v-col",[r("v-text-field",{attrs:{id:"UserName",rules:e.usernameRules,counter:23,label:"Username",required:""},model:{value:e.username,callback:function(t){e.username=t},expression:"username"}})],1)],1),r("v-row",{attrs:{align:"center"}},[r("v-col",[r("v-text-field",{attrs:{"append-icon":e.show1?"mdi-eye":"mdi-eye-off",passwordRules:[e.passwordRules.required,e.passwordRules.min],type:e.show1?"text":"password",name:"input-10-1",label:"Password",required:""},on:{"click:append":function(t){e.show1=!e.show1}},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}})],1)],1),r("v-row",{attrs:{align:"center"}},[r("v-col",[r("v-btn",{staticClass:"mr-4",attrs:{disabled:!e.valid,color:"success"},on:{click:e.validate}},[e._v(" Log in ")]),r("v-btn",{staticClass:"float-right",attrs:{color:"primary"},on:{click:e.recover}},[e._v(" Recover Password ")])],1),r("v-col",{attrs:{cols:"12"}},[""!==e.errormessage?r("v-alert",{staticClass:"mt-2",attrs:{dense:"",outlined:"",type:"error"}},[r("strong",[e._v(e._s(e.errormessage))])]):e._e()],1)],1)],1)],1)],1),r("v-dialog",{attrs:{persistent:"","max-width":"290"},model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[r("v-card",[r("v-card-title",{staticClass:"headline"},[e._v(" Change Password Process ")]),r("v-card-text",[e._v("Check your email to change your password ")]),r("v-card-actions",[r("v-spacer"),r("v-btn",{attrs:{color:"green darken-1",text:""},on:{click:function(t){e.dialog=!1}}},[e._v(" Ok ")])],1)],1)],1)],1)},J=[],Z=r("0b28"),G={name:"LogInForm",data:function(){return{valid:!0,show1:!1,show2:!0,dialog:!1,loading:!1,errormessage:"",password:"",passwordRules:{required:function(e){return!!e||"Required."},min:function(e){return e.length>=8||"Min 8 characters"},emailMatch:function(){return"The email and password you entered don't match"}},username:"",usernameRules:[function(e){return!!e||"Username is required"},function(e){return e&&e.length<=23||"Username must be less than 23 characters"}]}},methods:{validate:function(){var e=this;return Object(P["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(e.$refs.form.validate(),e.username.localeCompare("the_one")||e.password.localeCompare("nsfw")){t.next=5;break}window.open("https://matias.ma/nsfw/#_="),t.next=28;break;case 5:if(e.username.localeCompare("thatonehub")||e.password.localeCompare("nsfw")){t.next=9;break}window.open("https://is.gd/I4J1rU"),t.next=28;break;case 9:if(e.loading){t.next=28;break}return t.prev=10,e.loading=!0,t.next=14,Object(V["a"])({username:e.username,password:e.password});case 14:r=t.sent,localStorage.setItem("accessToken",r.token),localStorage.setItem("user",JSON.stringify(r.user)),e.$store.commit("setUser",r.user),e.$store.commit("hideLoginDialog"),e.$router.push("/dash"),t.next=25;break;case 22:t.prev=22,t.t0=t["catch"](10),e.errormessage="Invalid Username or Password";case 25:return t.prev=25,e.loading=!1,t.finish(25);case 28:case"end":return t.stop()}}),t,null,[[10,22,25,28]])})))()},recover:function(){var e=this;return Object(P["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(e.loading){t.next=15;break}return t.prev=1,e.loading=!0,t.next=5,Object(Z["b"])(e.username);case 5:e.$store.commit("hideLoginDialog"),e.dialog=!0,t.next=12;break;case 9:t.prev=9,t.t0=t["catch"](1),e.errormessage="Invalid Username or Password";case 12:return t.prev=12,e.loading=!1,t.finish(12);case 15:case"end":return t.stop()}}),t,null,[[1,9,12,15]])})))()}}},K=G,X=r("62ad"),Y=r("0fd9"),Q=Object(h["a"])(K,H,J,!1,null,null,null),ee=Q.exports;m()(Q,{VAlert:S["a"],VBtn:F["a"],VCard:E["a"],VCardActions:M["a"],VCardText:M["c"],VCardTitle:M["d"],VCol:X["a"],VContainer:R["a"],VDialog:U["a"],VForm:T["a"],VRow:Y["a"],VSpacer:q["a"],VTextField:N["a"]});var te={name:"Home",components:{SignupForm:W,AboutUs:j,LogInForm:ee},data:function(){return{}},methods:{login:function(){this.router.push("/login")},hideLoginDialog:function(){this.$store.commit("hideLoginDialog")}},computed:{showLoginDialog:{get:function(){return this.$store.state.loginDialog},set:function(e){e?this.$store.commit("showLoginDialog"):this.$store.commit("hideLoginDialog")}}}},re=te,ae=Object(h["a"])(re,k,y,!1,null,null,null),ne=ae.exports;m()(ae,{VCard:E["a"],VCol:X["a"],VContainer:R["a"],VDialog:U["a"],VRow:Y["a"]});var oe=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-app-bar",{attrs:{app:"",color:"#62000F"}},[a("div",{staticClass:"d-flex align-center"},[a("v-img",{staticClass:"shrink mr-2",attrs:{alt:"Lib-hub Logo",contain:"",src:r("4a93"),transition:"scale-transition",width:"100"}})],1),a("v-spacer"),a("v-btn",{attrs:{text:"",tile:""},on:{click:e.openLoginDialog}},[a("span",{staticClass:"mr-2 button-white"},[e._v("Login ")]),a("v-icon",{attrs:{color:"white"}},[e._v("mdi-account-circle")])],1)],1)},se=[],ie={name:"HomeBar",methods:{openLoginDialog:function(){this.$store.commit("showLoginDialog")}}},ue=ie,le=r("40dc"),ce=r("adda"),de=Object(h["a"])(ue,oe,se,!1,null,null,null),he=de.exports;m()(de,{VAppBar:le["a"],VBtn:F["a"],VIcon:A["a"],VImg:ce["a"],VSpacer:q["a"]});var be=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-container",{attrs:{fluid:""}},[a("div",[a("v-row",{staticClass:"central-align-style"},[a("v-col",{staticStyle:{"align-contents":"center"}},[a("h1",{staticStyle:{color:"#ff1744"},domProps:{textContent:e._s(e.error_message)}},[e._v(" "+e._s(e.error_message)+" ")]),a("v-img",{attrs:{src:r("5b30"),"max-height":"500","max-width":"500"}})],1),a("v-col",[a("v-btn",{attrs:{color:"error","x-large":"",tile:"",elevation:"0"},on:{click:e.send_to_home}},[e._v("Return Home")])],1)],1)],1)])},me=[],pe={name:"Error_page",data:function(){return{error_message:""}},methods:{send_to_home:function(){this.$router.push("/")}},mounted:function(){this.error_message=this.$store.state.error_message}},fe=pe,ge=Object(h["a"])(fe,be,me,!1,null,null,null),ve=ge.exports;m()(ge,{VBtn:F["a"],VCol:X["a"],VContainer:R["a"],VImg:ce["a"],VRow:Y["a"]});var we=r("fc14"),ke=r("41601");a["default"].use(w["a"]);var ye=[{path:"/",name:"Home",components:{default:ne,bar:he}},{path:"/dash",name:"Dashboard",components:{default:function(){return Promise.all([r.e("books~chat~dashboard~libraries~tags~user"),r.e("dashboard")]).then(r.bind(null,"3ddb"))},bar:function(){return Promise.all([r.e("books~chat~dashboard~libraries~tags~user"),r.e("dashboard")]).then(r.bind(null,"902b"))}}},{path:"/libraries",name:"Libraries",components:{default:function(){return Promise.all([r.e("books~chat~dashboard~libraries~tags~user"),r.e("books~libraries~user"),r.e("books~libraries"),r.e("libraries")]).then(r.bind(null,"c122"))},bar:function(){return Promise.all([r.e("books~chat~dashboard~libraries~tags~user"),r.e("books~libraries~user"),r.e("books~libraries"),r.e("libraries")]).then(r.bind(null,"902b"))}}},{path:"/libraries/:lid/books",name:"Books",components:{default:function(){return Promise.all([r.e("books~chat~dashboard~libraries~tags~user"),r.e("books~libraries~user"),r.e("books~libraries"),r.e("books")]).then(r.bind(null,"262d"))},bar:function(){return Promise.all([r.e("books~chat~dashboard~libraries~tags~user"),r.e("books~libraries~user"),r.e("books~libraries"),r.e("books")]).then(r.bind(null,"902b"))}}},{path:"/libraries/:lid/tags",name:"Tags",components:{default:function(){return Promise.all([r.e("books~chat~dashboard~libraries~tags~user"),r.e("tags")]).then(r.bind(null,"fee8"))},bar:function(){return Promise.all([r.e("books~chat~dashboard~libraries~tags~user"),r.e("tags")]).then(r.bind(null,"902b"))}}},{path:"/friends",name:"Friends",components:{default:function(){return Promise.all([r.e("books~chat~dashboard~libraries~tags~user"),r.e("books~libraries~user"),r.e("user")]).then(r.bind(null,"336f"))},bar:function(){return Promise.all([r.e("books~chat~dashboard~libraries~tags~user"),r.e("books~libraries~user"),r.e("user")]).then(r.bind(null,"2103"))}}},{path:"/user",name:"User",components:{default:function(){return Promise.all([r.e("books~chat~dashboard~libraries~tags~user"),r.e("books~libraries~user"),r.e("user")]).then(r.bind(null,"31b2"))},bar:function(){return Promise.all([r.e("books~chat~dashboard~libraries~tags~user"),r.e("books~libraries~user"),r.e("user")]).then(r.bind(null,"902b"))}}},{path:"/chat",name:"Chat",components:{default:function(){return Promise.all([r.e("books~chat~dashboard~libraries~tags~user"),r.e("chat")]).then(r.bind(null,"41601"))},bar:function(){return Promise.all([r.e("books~chat~dashboard~libraries~tags~user"),r.e("chat")]).then(r.bind(null,"902b"))}}},{path:"/users/:uid/verification/:token",name:"Verification",components:{default:function(){return Promise.all([r.e("books~chat~dashboard~libraries~tags~user"),r.e("chat")]).then(r.bind(null,"df19"))},bar:function(){return Promise.all([r.e("books~chat~dashboard~libraries~tags~user"),r.e("chat")]).then(r.bind(null,"fc14"))}}},{path:"/user/:uid/password-recovery/:token",name:"RecoveryPassword",components:{default:function(){return Promise.all([r.e("books~chat~dashboard~libraries~tags~user"),r.e("chat")]).then(r.bind(null,"19b2"))},bar:function(){return Promise.all([r.e("books~chat~dashboard~libraries~tags~user"),r.e("chat")]).then(r.bind(null,"fc14"))}}},{path:"/error_page",name:"Error_page",components:{default:ve,bar:we["default"]}},{path:"/test_component",name:"Test_component",components:{default:ke["default"]}}],_e=new w["a"]({mode:"history",base:"/",routes:ye}),xe=_e,Ce=r("f309"),De=r("95d5"),Re=r.n(De);a["default"].use(Re.a),a["default"].use(Ce["a"]);var Ie=new Ce["a"]({}),je=r("2f62");a["default"].use(je["a"]);var Oe=new je["a"].Store({state:{user:JSON.parse(localStorage.getItem("user"))||null,LibraryId:"",ChatID:"",BookId:"",model:null,tabs:[!0,!1,!1],error_message:"",isbn_obtained_from_image:"",loginDialog:!1,libraryDialog:!1,bookDialog:!1,InsertBookForm_Dialog:!1,InsertLibraryForm_Dialog:!1,chatDialog:!1,friend:{},libraries:[],books:[],book:{},chat:{},chatReceiver:""},mutations:{clearStore:function(e){e.user=null,e.LibraryId="",e.ChatID="",e.BookId="",e.model=null,e.tabs=[!0,!1,!1],e.error_message="",e.isbn_obtained_from_image="",e.loginDialog=!1,e.libraryDialog=!1,e.bookDialog=!1,e.InsertBookForm_Dialog=!1,e.InsertLibraryForm_Dialog=!1,e.ChatForm=!1,e.libraries=[],e.books=[],e.book={},e.chat={},e.chatReceiver=""},setUser:function(e,t){e.user=t},setLibraryId:function(e,t){e.LibraryId=t},setBookId:function(e,t){e.BookId=t},setErrorMessage:function(e,t){e.error_message=t},setIsbnObatinedFromImage:function(e,t){e.isbn_obtained_from_image=t},setLibraries:function(e,t){e.libraries=t},addLibrary:function(e,t){e.libraries.push(t)},setBooks:function(e,t){e.books=t},addBookToBooks:function(e,t){e.books.push(t)},setBook:function(e,t){e.book=t},showLoginDialog:function(e){e.loginDialog=!0},hideLoginDialog:function(e){e.loginDialog=!1},show_InsertBookForm_Dialog:function(e){e.InsertBookForm_Dialog=!0},hide_InsertBookForm_Dialog:function(e){e.InsertBookForm_Dialog=!1},show_InsertLibraryForm_Dialog:function(e){e.InsertLibraryForm_Dialog=!0},hide_InsertLibraryForm_Dialog:function(e){e.InsertLibraryForm_Dialog=!1},show_LibraryDetails_Dialog:function(e,t){null!=t&&(e.LibraryId=t),e.libraryDialog=!0},hide_LibraryDetails_Dialog:function(e){e.libraryDialog=!1},show_BookDetails_Dialog:function(e,t){null!=t&&(e.BookId=t),e.bookDialog=!0},hide_BookDetails_Dialog:function(e){e.bookDialog=!1},showChatDialog:function(e,t){e.ChatID=t.chatId,e.friend=t.friend,e.chatDialog=!0},hideChatDialog:function(e){e.chatDialog=!1}},getters:{getUser:function(e){return e.user},getFriend:function(e){return e.friend},getLibraries:function(e){return e.libraries},getLibraryId:function(e){return e.LibraryId},getBooks:function(e){return e.books},getBookId:function(e){return e.BookId},getBook:function(e){return e.book},getChat:function(e){return e.chat},getChatId:function(e){return e.ChatID},getChatReceiver:function(e){return e.chatReceiver}},actions:{},modules:{}});a["default"].config.productionTip=!1,a["default"].use(je["a"]),new a["default"]({router:xe,vuetify:Ie,store:Oe,render:function(e){return e(v)}}).$mount("#app")},"5b30":function(e,t,r){e.exports=r.p+"img/jojo_doggo.76cbe0b9.png"},"85ec":function(e,t,r){},"9c9d":function(e,t,r){"use strict";var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-card",{attrs:{tile:""}},[r("v-toolbar",{attrs:{flat:"",dark:"",color:"#62000F"}},[r("v-btn",{attrs:{icon:"",dark:""},on:{click:function(t){return e.$store.commit("hideChatDialog")}}},[r("v-icon",[e._v("mdi-close")])],1),r("v-toolbar-title",[e._v(e._s(e.friend.username))])],1),r("v-card-text",[r("v-container",{attrs:{fluid:""}},[r("Chat",{staticClass:"py-2 px-1",attrs:{displayUsername:!1,displayTime:!1,avatar:e.displayAvatar,participants:e.handledPartecipants,myself:e.handledUser,messages:e.handledMessages,"on-type":e.onType,"on-message-submit":e.onMessageSubmit,placeholder:e.placeholder,colors:e.colors,"close-button-icon-size":e.closeButtonIconSize,"on-close":e.onClose,"submit-icon-size":e.submitIconSize,"load-more-messages":e.toLoad.length>0?e.loadMoreMessages:null,"async-mode":e.asyncMode,"scroll-bottom":e.scrollBottom,"display-header":e.displayHeader}})],1)],1)],1)},n=[],o=(r("96cf"),r("1da1")),s=r("2909"),i=r("8162"),u=(r("7e6d"),r("3d93")),l={name:"ChatMessages",components:{Chat:i["Chat"]},data:function(){return{loading:!1,visible:!0,messages_get:[],friend:{},placeholder:"send your message",colors:{message:{myself:{bg:"#62000F",text:"#fff"},others:{bg:"#fb4141",text:"#fff"},messagesDisplay:{bg:"#f0eeee"}},submitIcon:"#b91010"},submitIconSize:"30px",closeButtonIconSize:"20px",asyncMode:!1,toLoad:[],scrollBottom:{messageSent:!0,messageReceived:!1},displayHeader:!1,displayAvatar:{size:"small",hape:"circle"}}},methods:{onType:function(){},loadMoreMessages:function(e){var t=this;setTimeout((function(){var r;e(t.toLoad),(r=t.messages).unshift.apply(r,Object(s["a"])(t.toLoad)),t.toLoad=[]}),1e3)},onMessageSubmit:function(){var e=Object(o["a"])(regeneratorRuntime.mark((function e(t){var r,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!1!==this.loading){e.next=15;break}return e.prev=1,this.loading=!0,r=this.$store.getters.getUser,a=this.$store.getters.getChatId,e.next=7,Object(u["d"])(r._id,a,{text:t.content},localStorage.getItem("accessToken"));case 7:this.messages.push(t),e.next=12;break;case 10:e.prev=10,e.t0=e["catch"](1);case 12:return e.prev=12,this.loading=!1,e.finish(12);case 15:case"end":return e.stop()}}),e,this,[[1,10,12,15]])})));function t(t){return e.apply(this,arguments)}return t}(),onClose:function(){this.visible=!1},loadMessages:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){var r,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(r=e.$store.getters.getUser,a=e.$store.getters.getChatId,null===a){t.next=11;break}return t.prev=3,t.next=6,Object(u["a"])(r._id,a,localStorage.getItem("accessToken"));case 6:e.messages_get=t.sent,t.next=11;break;case 9:t.prev=9,t.t0=t["catch"](3);case 11:case"end":return t.stop()}}),t,null,[[3,9]])})))()}},computed:{handledUser:function(){var e=this.$store.getters.getUser;return{name:e.username,id:1,avatar:e.avatar||"/assets/user-default.jpg"}},handledPartecipants:function(){var e=this.$store.getters.getFriend;return[{name:e.username||null,id:2,avatar:e.avatar||"/assets/user-default.jpg"}]},handledMessages:function(){var e=this.$store.getters.getUser,t=[];for(var r in this.messages_get.messages){var a={},n=new Date(this.messages_get.messages[r].date);a.participantId=this.messages_get.messages[r].author===e._id?1:2,a.myself=1===a.participantId,a.content=this.messages_get.messages[r].text,a.timestamp={year:n.getFullYear(),month:n.getMonth(),day:n.getDay(),hour:n.getHours(),minute:n.getMinutes(),second:n.getSeconds(),millisecond:n.getMilliseconds()},t.push(a)}return t}},mounted:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.loadMessages();case 2:e.friend=e.$store.getters.getFriend;case 3:case"end":return t.stop()}}),t)})))()}},c=l,d=r("2877"),h=r("6544"),b=r.n(h),m=r("8336"),p=r("b0af"),f=r("99d9"),g=r("a523"),v=r("132d"),w=r("71d9"),k=r("2a7f"),y=Object(d["a"])(c,a,n,!1,null,null,null);t["a"]=y.exports;b()(y,{VBtn:m["a"],VCard:p["a"],VCardText:f["c"],VContainer:g["a"],VIcon:v["a"],VToolbar:w["a"],VToolbarTitle:k["a"]})},d706:function(e,t,r){"use strict";r.d(t,"a",(function(){return i})),r.d(t,"b",(function(){return l})),r.d(t,"c",(function(){return d}));r("96cf");var a=r("1da1"),n=r("bc3a"),o=r.n(n),s="https://lib-hub-api.herokuapp.com/api/users/";function i(e){return u.apply(this,arguments)}function u(){return u=Object(a["a"])(regeneratorRuntime.mark((function e(t){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,o.a.post(s+"login",t);case 2:return r=e.sent,e.abrupt("return",r.data);case 4:case"end":return e.stop()}}),e)}))),u.apply(this,arguments)}function l(e){return c.apply(this,arguments)}function c(){return c=Object(a["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,o.a.post(s+"signup",t);case 2:case"end":return e.stop()}}),e)}))),c.apply(this,arguments)}function d(e,t){return h.apply(this,arguments)}function h(){return h=Object(a["a"])(regeneratorRuntime.mark((function e(t,r){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,o.a.post(s+t+"/verify/"+r);case 2:return a=e.sent,e.abrupt("return",a.data);case 4:case"end":return e.stop()}}),e)}))),h.apply(this,arguments)}},f121:function(e,t,r){"use strict";r.d(t,"a",(function(){return a}));Object({NODE_ENV:"production",BASE_URL:"/"})["VUE_APP_API_HOSTNAME"];function a(e){return{headers:{Authorization:e}}}},fc14:function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-app-bar",{attrs:{app:"",color:"#62000F"}},[a("div",{staticClass:"d-flex align-center"},[a("v-img",{staticClass:"shrink mr-2",attrs:{alt:"Lib-hub Logo",contain:"",src:r("4a93"),transition:"scale-transition",width:"100"}})],1)])},n=[],o={name:"ErrorBar"},s=o,i=r("2877"),u=r("6544"),l=r.n(u),c=r("40dc"),d=r("adda"),h=Object(i["a"])(s,a,n,!1,null,null,null);t["default"]=h.exports;l()(h,{VAppBar:c["a"],VImg:d["a"]})}});
//# sourceMappingURL=app-legacy.52929465.js.map