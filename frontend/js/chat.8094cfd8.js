(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chat"],{"19b2":function(a,e,t){"use strict";t.r(e);var s=function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("v-container",{attrs:{fluid:""}},[t("v-form",{ref:"form",attrs:{"lazy-validation":""}},[t("v-row",[t("v-col",[t("v-text-field",{attrs:{"append-icon":a.show1?"mdi-eye":"mdi-eye-off",rules:[a.passwordRules.required,a.passwordRules.min,a.passwordRules.max,a.passwordRules.valid],label:"new Password",type:a.show1?"text":"password",counter:"",hint:"At least 8 characters",required:""},on:{"click:append":function(e){a.show1=!a.show1}},model:{value:a.password,callback:function(e){a.password=e},expression:"password"}})],1)],1),t("v-row",[t("v-col",[t("v-text-field",{attrs:{"append-icon":a.show1?"mdi-eye":"mdi-eye-off",type:a.show1?"text":"password",label:"Confirm Password",counter:"",hint:"At least 8 characters",required:""},on:{"click:append":function(e){a.show1=!a.show1}},model:{value:a.confirmPassword,callback:function(e){a.confirmPassword=e},expression:"confirmPassword"}})],1)],1)],1),t("v-row",{staticClass:"d-flex justify-center"},[t("v-btn",{attrs:{color:"success"},on:{click:a.change}},[a._v(" Change Password ")])],1),t("v-dialog",{attrs:{persistent:"","max-width":"290"},model:{value:a.dialog,callback:function(e){a.dialog=e},expression:"dialog"}},[t("v-card",[t("v-card-title",{staticClass:"headline"},[a._v(" Password Changed successfully ")]),t("v-card-text"),t("v-card-actions",[t("v-spacer"),t("v-btn",{attrs:{color:"green darken-1",text:""},on:{click:a.homePush}},[a._v(" Home ")])],1)],1)],1)],1)},o=[],r=t("0b28"),i={name:"Verification",props:["uid","token"],data:()=>({loading:!1,dialog:!1,show1:!1,password:"",passwordRules:{required:a=>!!a||"Required.",min:a=>a.length>=8||"Min 8 characters",max:a=>a.length<=23||"Max 23 characters",valid:a=>/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,23}$/.test(a)||" password must contain at least an upper case, a lower case, a number and a special character"},confirmPassword:""}),methods:{async change(){if(this.$refs.form.validate(),!1===this.loading)try{await Object(r["a"])(this.$route.params.uid,{password:this.password},this.$route.params.token),this.dialog=!0}catch(a){console.log(a.response)}finally{this.loading=!1}},homePush(){this.dialog=!1,this.$router.push("/")}}},n=i,c=t("2877"),d=t("6544"),l=t.n(d),u=t("8336"),h=t("b0af"),f=t("99d9"),p=t("62ad"),v=t("a523"),w=t("169a"),m=t("4bd4"),g=t("0fd9"),V=t("2fa4"),x=t("8654"),b=Object(c["a"])(n,s,o,!1,null,null,null);e["default"]=b.exports;l()(b,{VBtn:u["a"],VCard:h["a"],VCardActions:f["a"],VCardText:f["c"],VCardTitle:f["d"],VCol:p["a"],VContainer:v["a"],VDialog:w["a"],VForm:m["a"],VRow:g["a"],VSpacer:V["a"],VTextField:x["a"]})},df19:function(a,e,t){"use strict";t.r(e);var s=function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("v-container",{attrs:{fluid:""}},[t("v-row",{staticClass:"d-flex justify-center"},[t("v-btn",{attrs:{color:"success"},on:{click:a.verify}},[a._v(" Verify ")])],1),t("v-dialog",{attrs:{persistent:"","max-width":"290"},model:{value:a.dialog,callback:function(e){a.dialog=e},expression:"dialog"}},[t("v-card",[t("v-card-title",{staticClass:"headline"},[a._v(" Veification Done ")]),t("v-card-text",[a._v("Your account has been verified")]),t("v-card-actions",[t("v-spacer"),t("v-btn",{attrs:{color:"green darken-1",text:""},on:{click:a.dashPush}},[a._v(" Login ")])],1)],1)],1)],1)},o=[],r=t("d706"),i={name:"Verification",props:["uid","token"],data:()=>({loading:!1,dialog:!1}),methods:{async verify(){if(!1===this.loading)try{let a=await Object(r["c"])(this.$route.params.uid,this.$route.params.token);localStorage.setItem("accessToken",a.token),localStorage.setItem("user",JSON.stringify(a.user)),this.dialog=!0}catch{}finally{this.loading=!1}},dashPush(){this.dialog=!1,this.$router.push("/dash")}}},n=i,c=t("2877"),d=t("6544"),l=t.n(d),u=t("8336"),h=t("b0af"),f=t("99d9"),p=t("a523"),v=t("169a"),w=t("0fd9"),m=t("2fa4"),g=Object(c["a"])(n,s,o,!1,null,null,null);e["default"]=g.exports;l()(g,{VBtn:u["a"],VCard:h["a"],VCardActions:f["a"],VCardText:f["c"],VCardTitle:f["d"],VContainer:p["a"],VDialog:v["a"],VRow:w["a"],VSpacer:m["a"]})}}]);
//# sourceMappingURL=chat.8094cfd8.js.map