(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["libraries"],{"1b87":function(t,e,i){"use strict";i.d(e,"d",(function(){return o})),i.d(e,"e",(function(){return c})),i.d(e,"f",(function(){return l})),i.d(e,"g",(function(){return d})),i.d(e,"b",(function(){return u})),i.d(e,"a",(function(){return h})),i.d(e,"c",(function(){return m}));var a=i("bc3a"),s=i.n(a),r=i("f121");const n=t=>`https://lib-hub-api.herokuapp.com/api/users/${t}/libraries`;async function o(t,e){const i=await s.a.get(n(t),{headers:{Authorization:e}});return i.data}async function c(t,e,i){const a=await s.a.get(n(t)+"/"+e,Object(r["a"])(i));return a.data}async function l(t,e,i,a){await s.a.patch(n(t)+"/"+e,i,Object(r["a"])(a))}async function d(t,e,i){const a=await s.a.post(n(t),e,Object(r["a"])(i));return a.data}async function u(t,e,i){await s.a.delete(n(t)+"/"+e,Object(r["a"])(i))}async function h(t,e,i,a){await s.a.put(n(t)+"/"+e+"/co-own/"+i,{},Object(r["a"])(a))}async function m(t,e,i){const a=await s.a.get(n(t)+"/"+e+"/labels",Object(r["a"])(i));return a.data}},"410e":function(t,e,i){"use strict";i.d(e,"g",(function(){return o})),i.d(e,"d",(function(){return c})),i.d(e,"f",(function(){return l})),i.d(e,"a",(function(){return d})),i.d(e,"e",(function(){return m})),i.d(e,"b",(function(){return b})),i.d(e,"c",(function(){return g})),i.d(e,"h",(function(){return f}));var a=i("bc3a"),s=i.n(a),r=i("f121");const n=t=>`https://lib-hub-api.herokuapp.com/api/users/${t}/friends/friend-requests`;async function o(t,e){const i=await s.a.get(n(t)+"/sent",Object(r["a"])(e));return i.data}async function c(t,e,i){await s.a.delete(n(t)+"/sent/"+e,Object(r["a"])(i))}async function l(t,e){const i=await s.a.get(n(t)+"/received",Object(r["a"])(e));return i.data}async function d(t,e,i,a){const o=await s.a.post(n(t)+"/received/"+e,i,Object(r["a"])(a));return o.data}const u=(t,e)=>`https://lib-hub-api.herokuapp.com/api/users/${t}/friends/${e}`,h=t=>`https://lib-hub-api.herokuapp.com/api/users/${t}/friends`;async function m(t,e){const i=await s.a.get(h(t),Object(r["a"])(e));return i.data}async function b(t,e,i){await s.a.post(u(t,e),{message:"zaWarudoooo"},Object(r["a"])(i))}async function g(t,e,i){await s.a.delete(u(t,e),Object(r["a"])(i))}async function f(t){const e=await s.a.get("https://lib-hub-api.herokuapp.com/api/users/usernames",Object(r["a"])(t));return e.data}},c122:function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-container",{attrs:{fluid:""}},[i("display-libraries"),i("v-row",{attrs:{justify:"center"}},[i("v-dialog",{attrs:{"max-width":"1000px"},model:{value:t.show_InsertLibraryForm_Dialog,callback:function(e){t.show_InsertLibraryForm_Dialog=e},expression:"show_InsertLibraryForm_Dialog"}},[i("library-insert-form")],1),i("v-dialog",{attrs:{"max-width":"1000px"},model:{value:t.show_LibraryDetails_Dialog,callback:function(e){t.show_LibraryDetails_Dialog=e},expression:"show_LibraryDetails_Dialog"}},[i("library-details-dialog")],1)],1)],1)},s=[],r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",[a("v-row",{attrs:{justify:"center"}},t._l(t.handledLibraries,(function(e){return a("v-card",{key:e._id,staticClass:"ma-2",attrs:{"max-width":"370"}},[a("v-img",{attrs:{height:"100%",src:i("d80c")}},[a("v-row",{staticClass:"fill-height",attrs:{align:"end"}},[a("v-col",{staticClass:"py-0"},[a("v-list-item",{attrs:{color:"rgba(0, 0, 0, .4)",dark:""}},[a("v-list-item-content",[a("v-list-item-title",{staticClass:"title"},[t._v(" "+t._s(e.name)+" ")]),a("v-list-item-subtitle")],1)],1)],1),a("v-col",{staticClass:"d-flex justify-end"},[a("v-btn",{staticClass:"mr-1",attrs:{"x-small":"",fab:"",dark:"",color:"#62000F",title:"Open Library"},on:{click:function(i){return t.openLibrary(e._id)}}},[a("v-icon",[t._v("mdi-open-in-new")])],1),a("v-btn",{staticClass:"mr-1",attrs:{"x-small":"",fab:"",dark:"",color:"#62000F",title:"Edit Library"},on:{click:function(i){return t.open_LibraryDetails_Dialog(e._id)}}},[a("v-icon",[t._v("mdi-pencil")])],1),a("v-btn",{staticClass:"mr-1",attrs:{"x-small":"",fab:"",dark:"",color:"#62000F",title:"Delete Library"},on:{click:function(i){return t.deleteLibrary(e._id)}}},[a("v-icon",[t._v("mdi-delete")])],1)],1)],1)],1)],1)})),1),a("v-row",[a("v-col",{attrs:{cols:"6"}},[a("v-card-text",{staticClass:"FAB-23"},[a("v-fab-transition",[a("v-btn",{attrs:{color:"#F83456",title:"Add book to this library",dark:"",absolute:"",bottom:"",right:"",fab:""},on:{click:t.open_InsertLibraryForm_Dialog}},[a("v-icon",[t._v("mdi-bookshelf")])],1)],1)],1)],1)],1),a("v-row",{attrs:{justify:"center"}})],1)},n=[],o=i("1b87"),c={name:"DisplayLibraries",props:["id"],data:()=>({info:null,user:{},loading:!1}),components:{},methods:{openLibrary(t){this.$router.push("/libraries/"+t+"/books").catch(()=>{})},open_InsertLibraryForm_Dialog(){this.$store.commit("show_InsertLibraryForm_Dialog")},open_LibraryDetails_Dialog(t){this.$store.commit("show_LibraryDetails_Dialog",t)},async deleteLibrary(t){if(!this.loading){try{this.loading=!0;const e=this.$store.getters.getUser;await Object(o["b"])(e._id,t,localStorage.getItem("accessToken"))}catch(e){this.$store.commit("setErrorMessage",e),this.$router.push("/error_page")}finally{this.loading=!1}this.$store.state.libraries.splice(this.$store.state.libraries.findIndex(e=>e._id===t),1)}}},computed:{handledLibraries(){return this.$store.getters.getLibraries}},async mounted(){try{const t=this.$store.getters.getUser;let e=await Object(o["d"])(t._id,localStorage.getItem("accessToken"));this.$store.commit("setLibraries",e)}catch(t){this.$store.commit("setErrorMessage",t),this.$router.push("/error_page")}}},l=c,d=i("2877"),u=i("6544"),h=i.n(u),m=i("8336"),b=i("b0af"),g=i("99d9"),f=i("62ad"),y=i("a523"),v=i("0789"),p=i("132d"),_=i("adda"),k=i("da13"),w=i("5d23"),x=i("0fd9"),$=Object(d["a"])(l,r,n,!1,null,null,null),L=$.exports;h()($,{VBtn:m["a"],VCard:b["a"],VCardText:g["c"],VCol:f["a"],VContainer:y["a"],VFabTransition:v["c"],VIcon:p["a"],VImg:_["a"],VListItem:k["a"],VListItemContent:w["a"],VListItemSubtitle:w["b"],VListItemTitle:w["c"],VRow:x["a"]});var C=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-card",[i("v-card-title",[i("span",{staticClass:"headline"},[t._v("Add Library")])]),i("v-card-text",[i("v-form",{ref:"form",staticStyle:{height:"100%"},attrs:{"lazy-validation":""},model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[i("v-container",{attrs:{"fill-height":""}},[i("v-row",{attrs:{align:"center"}},[i("v-col",[i("v-text-field",{attrs:{id:"name",placeholder:"name",label:"name"},model:{value:t.name,callback:function(e){t.name=e},expression:"name"}})],1)],1),i("v-row",{attrs:{align:"center"}},[i("v-col",[i("v-btn",{staticClass:"mr-4",attrs:{disabled:!t.valid,color:"success"},on:{click:t.validate}},[t._v(" Insert ")])],1)],1)],1)],1)],1)],1)},D=[],E={name:"LibraryInsertForm",data(){return{valid:!0,loading:!1,name:""}},methods:{async validate(){if(this.$refs.form.validate(),!this.loading)try{this.loading=!0;const t=this.$store.getters.getUser,e=localStorage.getItem("accessToken"),i=await Object(o["g"])(t._id,this.createName,e);this.$store.commit("addLibrary",this.createLibrary(i))}catch(t){this.$store.commit("setErrorMessage",t),this.$router.push("/error_page")}finally{this.loading=!1,this.$store.commit("hide_InsertLibraryForm_Dialog")}},createLibrary(t){const e=this.$store.getters.getUser;return{name:this.name,owners:[e._id],schema:{ubications:[],resources:[]},_id:t}},createUbication(t){return{ubication:t}}},computed:{createName(){return{name:this.name}}}},I=E,V=i("4bd4"),j=i("8654"),O=Object(d["a"])(I,C,D,!1,null,null,null),U=O.exports;h()(O,{VBtn:m["a"],VCard:b["a"],VCardText:g["c"],VCardTitle:g["d"],VCol:f["a"],VContainer:y["a"],VForm:V["a"],VRow:x["a"],VTextField:j["a"]});var F=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-card",[i("v-card-title",[i("v-row",[i("v-col",{staticClass:"d-flex align-center"},[i("v-btn",{staticClass:"mr-2",attrs:{icon:""},on:{click:t.close}},[i("v-icon",[t._v("mdi-close")])],1),i("v-container",{staticClass:"headline"},[t._v("Library Details")]),i("v-container",{staticClass:"d-flex justify-end"},[i("v-slide-x-reverse-transition",{attrs:{mode:"out-in"}},[i("v-icon",{key:"icon-"+t.editingAll,attrs:{color:t.editingAll?"success":"info"},domProps:{textContent:t._s(t.editingAll?"mdi-check-outline":"mdi-circle-edit-outline")},on:{click:t.editAll}})],1)],1)],1)],1)],1),i("v-card-text",[i("v-form",{ref:"form",staticStyle:{height:"100%"},attrs:{"lazy-validation":""},model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[i("v-container",{attrs:{"fill-height":""}},[i("v-row",{attrs:{align:"center",xs:""}},[i("v-col",[i("v-btn",{staticClass:"mb-2",attrs:{outlined:""},on:{click:function(e){return t.openLibraryTags()}}},[i("v-icon",[t._v("mdi-tag-multiple")]),i("span",[t._v("Edit Tags")])],1)],1)],1),i("v-row",{attrs:{align:"center",xs:""}},[i("v-col",[i("v-text-field",{attrs:{hint:t.isEditing.name?"Click the icon to lock":"Click the icon to edit",readonly:!t.isEditing.name,label:"Name — "+(t.isEditing.name?"Editable":"Readonly"),"prepend-icon":"mdi-bookshelf"},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.UpdateName(e)}},scopedSlots:t._u([{key:"append-outer",fn:function(){return[i("v-slide-x-reverse-transition",{attrs:{mode:"out-in"}},[i("v-icon",{key:"icon-"+t.isEditing.name,attrs:{color:t.isEditing.name?"success":"info"},domProps:{textContent:t._s(t.isEditing.name?"mdi-check-outline":"mdi-circle-edit-outline")},on:{click:function(e){t.isEditing.name=!t.isEditing.name}}})],1)]},proxy:!0}]),model:{value:t.library.name,callback:function(e){t.$set(t.library,"name",e)},expression:"library.name"}})],1)],1),i("v-row",{attrs:{align:"center",xs:""}},[i("v-col",[i("v-combobox",{attrs:{"hide-details":"","single-line":"",items:t.usernames,hint:t.isEditing.coown?"Click the icon to lock":"Click the icon to edit",readonly:!t.isEditing.coown,label:"Co-Own — "+(t.isEditing.coown?"Editable":"Readonly"),"prepend-icon":"mdi-share-variant","menu-props":"closeOnClick"},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.shareLibrary(e)}},scopedSlots:t._u([{key:"append-outer",fn:function(){return[i("v-slide-x-reverse-transition",{attrs:{mode:"out-in"}},[i("v-icon",{key:"icon-"+t.isEditing.coown,attrs:{color:t.isEditing.coown?"success":"info"},domProps:{textContent:t._s(t.isEditing.coown?"mdi-check-outline":"mdi-circle-edit-outline")},on:{click:function(e){t.isEditing.coown=!t.isEditing.coown}}})],1)]},proxy:!0}]),model:{value:t.selectedUser,callback:function(e){t.selectedUser=e},expression:"selectedUser"}})],1)],1),i("v-row",{attrs:{align:"center",xs:""}},[i("v-col",{attrs:{cols:"12"}},[i("v-text-field",{attrs:{hint:t.isEditing.ubications?"Click the icon to lock":"Click the icon to edit",readonly:!t.isEditing.ubications,label:"Ubications — "+(t.isEditing.ubications?"Editable":"Readonly"),"prepend-icon":"mdi-bookshelf"},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.addUbication(e)}},scopedSlots:t._u([{key:"append-outer",fn:function(){return[i("v-slide-x-reverse-transition",{attrs:{mode:"out-in"}},[i("v-icon",{key:"icon-"+t.isEditing.ubications,attrs:{color:t.isEditing.ubications?"success":"info"},domProps:{textContent:t._s(t.isEditing.ubications?"mdi-check-outline":"mdi-circle-edit-outline")},on:{click:function(e){t.isEditing.ubications=!t.isEditing.ubications}}})],1)]},proxy:!0}]),model:{value:t.ubicationName,callback:function(e){t.ubicationName=e},expression:"ubicationName"}})],1),t._l(t.library.schema.ubications,(function(e,a){return i("v-card",{key:a,staticClass:"ma-1"},[i("v-row",{staticClass:"d-flex align-center"},[i("v-col",{attrs:{cols:"6"}},[i("v-card-title",[t._v(" "+t._s(e)+" ")])],1),i("v-col",{attrs:{cols:"3"}},[i("v-container",{staticClass:"d-flex justify-end"},[i("v-btn",{attrs:{color:"#F83456",title:"Remove ubication",icon:"",small:""},on:{click:function(i){return t.removeUbi(e)}}},[i("v-icon",[t._v("mdi-close-thick")])],1)],1)],1)],1)],1)}))],2),i("v-row",{attrs:{align:"center",xs:""}},[i("v-col",{attrs:{cols:"12"}},[i("v-file-input",{attrs:{rules:t.resource_rules,"show-size":!0,id:"ResourceImage",accept:"image/png, image/jpeg, image/bmp",placeholder:"Select Schema image","prepend-icon":"mdi-camera",label:"Resources"},scopedSlots:t._u([{key:"append-outer",fn:function(){return[i("v-btn",{attrs:{color:"succes"},on:{click:t.addResources}},[t._v(" Add ")])]},proxy:!0}])})],1),i("v-col",{staticClass:"d-flex justify-center"},[i("v-carousel",{staticStyle:{height:"300px",width:"300px"},attrs:{"hide-delimiter-background":"","show-arrows-on-hover":""}},t._l(t.library.schema.resources,(function(e,a){return i("v-carousel-item",{key:a},[i("v-img",{staticStyle:{height:"300px",width:"300px"},attrs:{src:e}},[i("v-container",{staticClass:"d-flex justify-end"},[i("v-btn",{attrs:{color:"#F83456",title:"Remove resource",icon:"",small:"",elevation:"24"},on:{click:function(i){return t.removeRes(e)}}},[i("v-icon",[t._v("mdi-close-thick")])],1)],1)],1)],1)})),1)],1)],1)],1)],1)],1),i("v-dialog",{attrs:{persistent:"","max-width":"290"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[i("v-card",[i("v-card-title",{staticClass:"headline"},[t._v(" Library Shared with "),i("br"),t._v(t._s(t.selectedUser))]),i("v-card-actions",[i("v-spacer"),i("v-btn",{attrs:{color:"green darken-1",text:""},on:{click:function(e){t.dialog=!1}}},[t._v(" Ok ")])],1)],1)],1)],1)},S=[],T=(i("ddb0"),i("2b3d"),i("1f46")),R=i("bc3a"),A=i.n(R),N=i("f121");const M=(t,e)=>`https://lib-hub-api.herokuapp.com/api/users/${t}/libraries/${e}/schema/resources`;async function z(t,e,i,a){const s=await A.a.post(M(t,e),i,Object(N["a"])(a));return s.data}var P=i("410e"),B={name:"LibraryDetails",data:()=>({model:null,dialog:!1,selectedUser:"",usernames:[],users:[],editingAll:!1,isEditing:{name:!1,ubications:!1,coown:!1},ubicationName:"",loading:!1,library:{name:"",schema:{ubications:[],resources:[]}},valid:!0,resource_rules:[t=>!t||t.size<2e6||"Avatar size should be less than 2 MB!"]}),methods:{openLibraryTags(){this.$store.commit("hide_LibraryDetails_Dialog"),this.$router.push("/libraries/"+this.$store.state.LibraryId+"/tags").catch(()=>{})},close(){this.$store.commit("hide_LibraryDetails_Dialog")},editAll(){for(var t in this.editingAll=!this.editingAll,this.isEditing)this.isEditing[t]=this.editingAll},async UpdateName(){if(!this.loading&&this.isEditing.name)try{this.loading=!0;const t=this.$store.getters.getUser;await Object(o["f"])(t._id,this.$store.state.LibraryId,{name:this.library.name},localStorage.getItem("accessToken"));for(let e in this.$store.state.libraries)this.$store.state.libraries[e]._id===this.$store.state.LibraryId&&(this.$store.state.libraries[e].name=this.library.name)}catch(t){this.$store.commit("hide_LibraryDetails_Dialog"),this.$store.commit("setErrorMessage",t),this.$router.push("/error_page")}finally{this.loading=!1,this.isEditing.name=!1}},async shareLibrary(){if(!this.loading)try{this.loading=!0;const t=this.$store.getters.getUser;let e;for(let i in this.users)this.users[i].username===this.selectedUser&&(e=this.users[i]._id);await Object(o["a"])(t._id,this.$store.getters.getLibraryId,e,localStorage.getItem("accessToken")),this.dialog=!0}catch(t){console.log(t)}finally{this.loading=!1}},async addUbication(){if(!this.loading&&!this.library.schema.ubications.includes(this.ubicationName))try{this.loading=!0;const t=this.$store.getters.getUser;await Object(T["b"])(t._id,this.$store.state.LibraryId,this.createPostUbication(),localStorage.getItem("accessToken")),this.library.schema.ubications.push(this.ubicationName)}catch(t){this.$store.commit("hide_LibraryDetails_Dialog"),this.$store.commit("setErrorMessage",t),this.$router.push("/error_page")}finally{this.loading=!1}},createPostUbication(){return{ubication:this.ubicationName}},async addResources(){if(!this.loading)try{this.loading=!0;const t=new FormData,e=this.$store.getters.getUser;t.append("resource",this.$refs.form.$el["ResourceImage"].files[0]),await z(e._id,this.library._id,t,localStorage.getItem("accessToken"));const i=window.URL.createObjectURL(this.$refs.form.$el["ResourceImage"].files[0]);this.library.schema.resources.push(i)}catch(t){this.$store.commit("hide_LibraryDetails_Dialog")}finally{this.loading=!1}},async removeRes(t){if(!this.loading)try{this.loading=!0;const e=this.library.schema.resources.indexOf(t);-1!==e&&this.library.schema.resources.splice(e,1)}catch(e){this.$store.commit("setErrorMessage",e)}finally{this.loading=!1}},async removeUbi(t){if(!this.loading)try{this.loading=!0;const e=this.library.schema.ubications.indexOf(t);-1!==e&&this.library.schema.ubications.splice(e,1)}catch(e){this.$store.commit("setErrorMessage",e)}finally{this.loading=!1}}},async mounted(){const t=this.$store.getters.getUser;this.library=await Object(o["e"])(t._id,this.$store.getters.getLibraryId,localStorage.getItem("accessToken")),this.users=await Object(P["e"])(t._id,localStorage.getItem("accessToken"));for(let e in this.users)this.usernames.push(this.users[e].username)}},J=B,q=i("5e66"),W=i("3e35"),X=i("2b5d"),G=i("169a"),H=i("23a7"),K=i("2fa4"),Q=Object(d["a"])(J,F,S,!1,null,null,null),Y=Q.exports;h()(Q,{VBtn:m["a"],VCard:b["a"],VCardActions:g["a"],VCardText:g["c"],VCardTitle:g["d"],VCarousel:q["a"],VCarouselItem:W["a"],VCol:f["a"],VCombobox:X["a"],VContainer:y["a"],VDialog:G["a"],VFileInput:H["a"],VForm:V["a"],VIcon:p["a"],VImg:_["a"],VRow:x["a"],VSlideXReverseTransition:v["f"],VSpacer:K["a"],VTextField:j["a"]});var Z={name:"Libraries",components:{DisplayLibraries:L,LibraryInsertForm:U,LibraryDetailsDialog:Y},data:()=>({uid:"none"}),mounted(){this.uid=this.$store.state.UserId},methods:{},computed:{show_InsertLibraryForm_Dialog:{get:function(){return this.$store.state.InsertLibraryForm_Dialog},set:function(t){t?this.$store.commit("show_InsertLibraryForm_Dialog"):this.$store.commit("hide_InsertLibraryForm_Dialog")}},show_LibraryDetails_Dialog:{get:function(){return this.$store.state.libraryDialog},set:function(t){t?this.$store.commit("show_LibraryDetails_Dialog",null):this.$store.commit("hide_LibraryDetails_Dialog")}}}},tt=Z,et=Object(d["a"])(tt,a,s,!1,null,null,null);e["default"]=et.exports;h()(et,{VContainer:y["a"],VDialog:G["a"],VRow:x["a"]})},d80c:function(t,e,i){t.exports=i.p+"img/library_background.832bddea.jpeg"}}]);
//# sourceMappingURL=libraries.9057cd55.js.map