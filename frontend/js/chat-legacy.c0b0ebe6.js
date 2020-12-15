(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chat"],{"19b2":function(e,a,t){"use strict";t.r(a);var r=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("v-container",{attrs:{fluid:""}},[t("v-form",{ref:"form",attrs:{"lazy-validation":""}},[t("v-row",[t("v-col",[t("v-text-field",{attrs:{"append-icon":e.show1?"mdi-eye":"mdi-eye-off",rules:[e.passwordRules.required,e.passwordRules.min,e.passwordRules.max,e.passwordRules.valid],label:"new Password",type:e.show1?"text":"password",counter:"",hint:"At least 8 characters",required:""},on:{"click:append":function(a){e.show1=!e.show1}},model:{value:e.password,callback:function(a){e.password=a},expression:"password"}})],1)],1),t("v-row",[t("v-col",[t("v-text-field",{attrs:{"append-icon":e.show1?"mdi-eye":"mdi-eye-off",type:e.show1?"text":"password",label:"Confirm Password",counter:"",hint:"At least 8 characters",required:""},on:{"click:append":function(a){e.show1=!e.show1}},model:{value:e.confirmPassword,callback:function(a){e.confirmPassword=a},expression:"confirmPassword"}})],1)],1)],1),t("v-row",{staticClass:"d-flex justify-center"},[t("v-btn",{attrs:{color:"success"},on:{click:e.change}},[e._v(" Change Password ")])],1),t("v-dialog",{attrs:{persistent:"","max-width":"290"},model:{value:e.dialog,callback:function(a){e.dialog=a},expression:"dialog"}},[t("v-card",[t("v-card-title",{staticClass:"headline"},[e._v(" Password Changed successfully ")]),t("v-card-text"),t("v-card-actions",[t("v-spacer"),t("v-btn",{attrs:{color:"green darken-1",text:""},on:{click:e.homePush}},[e._v(" Home ")])],1)],1)],1)],1)},n=[],s=(t("96cf"),t("1da1")),o=t("0b28"),i={name:"Verification",props:["uid","token"],data:function(){return{loading:!1,dialog:!1,show1:!1,password:"",passwordRules:{required:function(e){return!!e||"Required."},min:function(e){return e.length>=8||"Min 8 characters"},max:function(e){return e.length<=23||"Max 23 characters"},valid:function(e){return/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,23}$/.test(e)||" password must contain at least an upper case, a lower case, a number and a special character"}},confirmPassword:""}},methods:{change:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function a(){return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:if(e.$refs.form.validate(),!1!==e.loading){a.next=14;break}return a.prev=2,a.next=5,Object(o["a"])(e.$route.params.uid,{password:e.password},e.$route.params.token);case 5:e.dialog=!0,a.next=11;break;case 8:a.prev=8,a.t0=a["catch"](2),console.log(a.t0.response);case 11:return a.prev=11,e.loading=!1,a.finish(11);case 14:case"end":return a.stop()}}),a,null,[[2,8,11,14]])})))()},homePush:function(){this.dialog=!1,this.$router.push("/")}}},c=i,d=t("2877"),l=t("6544"),u=t.n(l),f=t("8336"),p=t("b0af"),v=t("99d9"),h=t("62ad"),w=t("a523"),m=t("169a"),g=t("4bd4"),x=t("0fd9"),b=t("2fa4"),k=t("8654"),V=Object(d["a"])(c,r,n,!1,null,null,null);a["default"]=V.exports;u()(V,{VBtn:f["a"],VCard:p["a"],VCardActions:v["a"],VCardText:v["c"],VCardTitle:v["d"],VCol:h["a"],VContainer:w["a"],VDialog:m["a"],VForm:g["a"],VRow:x["a"],VSpacer:b["a"],VTextField:k["a"]})},df19:function(e,a,t){"use strict";t.r(a);var r=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("v-container",{attrs:{fluid:""}},[t("v-row",{staticClass:"d-flex justify-center"},[t("v-btn",{attrs:{color:"success"},on:{click:e.verify}},[e._v(" Verify ")])],1),t("v-dialog",{attrs:{persistent:"","max-width":"290"},model:{value:e.dialog,callback:function(a){e.dialog=a},expression:"dialog"}},[t("v-card",[t("v-card-title",{staticClass:"headline"},[e._v(" Veification Done ")]),t("v-card-text",[e._v("Your account has been verified")]),t("v-card-actions",[t("v-spacer"),t("v-btn",{attrs:{color:"green darken-1",text:""},on:{click:e.dashPush}},[e._v(" Login ")])],1)],1)],1)],1)},n=[],s=(t("96cf"),t("1da1")),o=t("d706"),i={name:"Verification",props:["uid","token"],data:function(){return{loading:!1,dialog:!1}},methods:{verify:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function a(){var t;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:if(!1!==e.loading){a.next=15;break}return a.prev=1,a.next=4,Object(o["c"])(e.$route.params.uid,e.$route.params.token);case 4:t=a.sent,localStorage.setItem("accessToken",t.token),localStorage.setItem("user",JSON.stringify(t.user)),e.dialog=!0,a.next=12;break;case 10:a.prev=10,a.t0=a["catch"](1);case 12:return a.prev=12,e.loading=!1,a.finish(12);case 15:case"end":return a.stop()}}),a,null,[[1,10,12,15]])})))()},dashPush:function(){this.dialog=!1,this.$router.push("/dash")}}},c=i,d=t("2877"),l=t("6544"),u=t.n(l),f=t("8336"),p=t("b0af"),v=t("99d9"),h=t("a523"),w=t("169a"),m=t("0fd9"),g=t("2fa4"),x=Object(d["a"])(c,r,n,!1,null,null,null);a["default"]=x.exports;u()(x,{VBtn:f["a"],VCard:p["a"],VCardActions:v["a"],VCardText:v["c"],VCardTitle:v["d"],VContainer:h["a"],VDialog:w["a"],VRow:m["a"],VSpacer:g["a"]})}}]);
//# sourceMappingURL=chat-legacy.c0b0ebe6.js.map