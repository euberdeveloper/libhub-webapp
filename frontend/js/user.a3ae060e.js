(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["user"],{"1b53":function(e,t,s){},"1bfb":function(e,t,s){},2103:function(e,t,s){"use strict";s.r(t);var a=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-container",[a("v-app-bar",{attrs:{app:"",color:"#62000F"},scopedSlots:e._u([{key:"extension",fn:function(){return[a("v-tabs",{attrs:{dark:"",color:"#F83456"},model:{value:e.model,callback:function(t){e.model=t},expression:"model"}},[a("v-tab",[a("v-icon",{attrs:{left:""}},[e._v(" mdi-account-group ")]),e._v(" Friend List")],1),a("v-tab",[a("v-icon",{attrs:{left:""}},[e._v(" mdi-account-search ")]),e._v(" Add Friend ")],1),a("v-tab",[a("v-icon",{attrs:{left:""}},[e._v(" mdi-account-check ")]),e._v(" Friend Requests ")],1)],1)]},proxy:!0}])},[a("div",{staticClass:"d-flex justify-center"},[a("v-slide-x-reverse-transition",{attrs:{mode:"out-in"}},[a("v-icon",{key:"icon-"+e.drawer,staticClass:"mr-2 my-3",attrs:{color:"white"},domProps:{textContent:e._s(e.drawer?"mdi-close":"mdi-menu")},on:{click:function(t){e.drawer=!e.drawer}}})],1),a("v-img",{staticClass:"shrink mr-2",attrs:{alt:"Lib-hub Logo",contain:"",src:s("4a93"),transition:"scale-transition",width:"100"}})],1),a("v-spacer"),a("div",[a("user-menu")],1)],1),a("v-navigation-drawer",{attrs:{stateless:"",app:""},model:{value:e.drawer,callback:function(t){e.drawer=t},expression:"drawer"}},[a("v-list",{attrs:{nav:"",dense:"",flat:""}},[a("v-list-item-group",{attrs:{"active-class":" text--accent-4"},model:{value:e.group,callback:function(t){e.group=t},expression:"group"}},[a("v-list-item-content",[a("v-list-item-title",{staticClass:"title"},[e._v(" Navigation Bar ")]),a("v-list-item-subtitle")],1),a("v-list-item",{attrs:{to:"/"}},[a("v-list-item-icon",[a("v-icon",[e._v("mdi-home")])],1),a("v-list-item-title",[e._v("Home")])],1),a("v-list-item",{on:{click:e.toDashboard}},[a("v-list-item-icon",[a("v-icon",[e._v("mdi-view-dashboard-variant")])],1),a("v-list-item-title",[e._v("Dashboard")])],1),a("v-list-item",{on:{click:e.toLibraries}},[a("v-list-item-icon",[a("v-icon",[e._v("mdi-bookshelf")])],1),a("v-list-item-title",[e._v("Libraries")])],1),a("v-list-item",{on:{click:e.toFriends}},[a("v-list-item-icon",[a("v-icon",[e._v("mdi-account-group")])],1),a("v-list-item-title",[e._v("Friends")])],1)],1)],1)],1)],1)},i=[],n=s("898d"),r={name:"FriendNavigationDrawer",props:["id"],data:()=>({drawer:!1,group:null,friends:[{name:"Federico",surname:"Stefini",username:"Xenopeltis"},{name:"Sebastiano",surname:"Dissegna",username:"SebGOD"},{name:"Eugenio",surname:"Berretta",username:"Euberdeveloper"},{name:"Carlo",surname:"Zanotto",username:"Zarlo"}]}),methods:{showTab(e){for(let t=0;t<3;t++)this.$store.state.tabs[t]=t==e},showDrawer(){this.drawer?this.drawer=!1:this.drawer=!0},toDashboard(){this.$router.push("/dash").catch(()=>{})},toLibraries(){this.$router.push("/libraries").catch(()=>{})},toChat(){this.$router.push("/chat").catch(()=>{})},toFriends(){this.$router.push("/friends").catch(()=>{})}},components:{UserMenu:n["a"]},computed:{model:{get(){return this.$store.state.model},set(e){this.$store.state.model=e}}}},o=r,l=s("2877"),c=s("6544"),d=s.n(c),h=s("40dc"),u=s("a523"),p=s("132d"),v=s("adda"),m=s("8860"),f=s("da13"),g=s("5d23"),b=s("1baa"),w=s("34c3"),x=s("f774"),_=s("0789"),y=s("2fa4"),k=(s("5319"),s("4e82")),C=s("1c87"),$=s("7560"),O=s("80d2"),S=s("58df");const I=Object(S["a"])(C["a"],Object(k["a"])("tabsBar"),$["a"]);var T=I.extend().extend().extend({name:"v-tab",props:{ripple:{type:[Boolean,Object],default:!0}},data:()=>({proxyClass:"v-tab--active"}),computed:{classes(){return{"v-tab":!0,...C["a"].options.computed.classes.call(this),"v-tab--disabled":this.disabled,...this.groupClasses}},value(){let e=this.to||this.href||"";if(this.$router&&this.to===Object(this.to)){const t=this.$router.resolve(this.to,this.$route,this.append);e=t.href}return e.replace("#","")}},mounted(){this.onRouteChange()},methods:{click(e){this.href&&this.href.indexOf("#")>-1&&e.preventDefault(),e.detail&&this.$el.blur(),this.$emit("click",e),this.to||this.toggle()}},render(e){const{tag:t,data:s}=this.generateRouteLink();return s.attrs={...s.attrs,"aria-selected":String(this.isActive),role:"tab",tabindex:0},s.on={...s.on,keydown:e=>{e.keyCode===O["t"].enter&&this.click(e),this.$emit("keydown",e)}},e(t,s,this.$slots.default)}}),A=(s("1bfb"),s("ddb0"),s("608c"),s("9d26")),j=s("604c"),V=s("e4cd"),P=s("dc22"),R=s("c3f0");const B=Object(S["a"])(j["a"],V["a"]).extend({name:"base-slide-group",directives:{Resize:P["a"],Touch:R["a"]},props:{activeClass:{type:String,default:"v-slide-item--active"},centerActive:Boolean,nextIcon:{type:String,default:"$next"},prevIcon:{type:String,default:"$prev"},showArrows:{type:[Boolean,String],validator:e=>"boolean"===typeof e||["always","desktop","mobile"].includes(e)}},data:()=>({internalItemsLength:0,isOverflowing:!1,resizeTimeout:0,startX:0,scrollOffset:0,widths:{content:0,wrapper:0}}),computed:{__cachedNext(){return this.genTransition("next")},__cachedPrev(){return this.genTransition("prev")},classes(){return{...j["a"].options.computed.classes.call(this),"v-slide-group":!0,"v-slide-group--has-affixes":this.hasAffixes,"v-slide-group--is-overflowing":this.isOverflowing}},hasAffixes(){switch(this.showArrows){case"always":return!0;case"desktop":return!this.isMobile;case!0:return this.isOverflowing;case"mobile":return this.isMobile||this.isOverflowing;default:return!this.isMobile&&this.isOverflowing}},hasNext(){if(!this.hasAffixes)return!1;const{content:e,wrapper:t}=this.widths;return e>Math.abs(this.scrollOffset)+t},hasPrev(){return this.hasAffixes&&0!==this.scrollOffset}},watch:{internalValue:"setWidths",isOverflowing:"setWidths",scrollOffset(e){this.$refs.content.style.transform=`translateX(${-e}px)`}},beforeUpdate(){this.internalItemsLength=(this.$children||[]).length},updated(){this.internalItemsLength!==(this.$children||[]).length&&this.setWidths()},methods:{genNext(){const e=this.$scopedSlots.next?this.$scopedSlots.next({}):this.$slots.next||this.__cachedNext;return this.$createElement("div",{staticClass:"v-slide-group__next",class:{"v-slide-group__next--disabled":!this.hasNext},on:{click:()=>this.onAffixClick("next")},key:"next"},[e])},genContent(){return this.$createElement("div",{staticClass:"v-slide-group__content",ref:"content"},this.$slots.default)},genData(){return{class:this.classes,directives:[{name:"resize",value:this.onResize}]}},genIcon(e){let t=e;this.$vuetify.rtl&&"prev"===e?t="next":this.$vuetify.rtl&&"next"===e&&(t="prev");const s=`${e[0].toUpperCase()}${e.slice(1)}`,a=this["has"+s];return this.showArrows||a?this.$createElement(A["a"],{props:{disabled:!a}},this[t+"Icon"]):null},genPrev(){const e=this.$scopedSlots.prev?this.$scopedSlots.prev({}):this.$slots.prev||this.__cachedPrev;return this.$createElement("div",{staticClass:"v-slide-group__prev",class:{"v-slide-group__prev--disabled":!this.hasPrev},on:{click:()=>this.onAffixClick("prev")},key:"prev"},[e])},genTransition(e){return this.$createElement(_["d"],[this.genIcon(e)])},genWrapper(){return this.$createElement("div",{staticClass:"v-slide-group__wrapper",directives:[{name:"touch",value:{start:e=>this.overflowCheck(e,this.onTouchStart),move:e=>this.overflowCheck(e,this.onTouchMove),end:e=>this.overflowCheck(e,this.onTouchEnd)}}],ref:"wrapper"},[this.genContent()])},calculateNewOffset(e,t,s,a){const i=s?-1:1,n=i*a+("prev"===e?-1:1)*t.wrapper;return i*Math.max(Math.min(n,t.content-t.wrapper),0)},onAffixClick(e){this.$emit("click:"+e),this.scrollTo(e)},onResize(){this._isDestroyed||this.setWidths()},onTouchStart(e){const{content:t}=this.$refs;this.startX=this.scrollOffset+e.touchstartX,t.style.setProperty("transition","none"),t.style.setProperty("willChange","transform")},onTouchMove(e){this.scrollOffset=this.startX-e.touchmoveX},onTouchEnd(){const{content:e,wrapper:t}=this.$refs,s=e.clientWidth-t.clientWidth;e.style.setProperty("transition",null),e.style.setProperty("willChange",null),this.$vuetify.rtl?this.scrollOffset>0||!this.isOverflowing?this.scrollOffset=0:this.scrollOffset<=-s&&(this.scrollOffset=-s):this.scrollOffset<0||!this.isOverflowing?this.scrollOffset=0:this.scrollOffset>=s&&(this.scrollOffset=s)},overflowCheck(e,t){e.stopPropagation(),this.isOverflowing&&t(e)},scrollIntoView(){this.selectedItem&&(0===this.selectedIndex||!this.centerActive&&!this.isOverflowing?this.scrollOffset=0:this.centerActive?this.scrollOffset=this.calculateCenteredOffset(this.selectedItem.$el,this.widths,this.$vuetify.rtl):this.isOverflowing&&(this.scrollOffset=this.calculateUpdatedOffset(this.selectedItem.$el,this.widths,this.$vuetify.rtl,this.scrollOffset)))},calculateUpdatedOffset(e,t,s,a){const i=e.clientWidth,n=s?t.content-e.offsetLeft-i:e.offsetLeft;s&&(a=-a);const r=t.wrapper+a,o=i+n,l=.4*i;return n<=a?a=Math.max(n-l,0):r<=o&&(a=Math.min(a-(r-o-l),t.content-t.wrapper)),s?-a:a},calculateCenteredOffset(e,t,s){const{offsetLeft:a,clientWidth:i}=e;if(s){const e=t.content-a-i/2-t.wrapper/2;return-Math.min(t.content-t.wrapper,Math.max(0,e))}{const e=a+i/2-t.wrapper/2;return Math.min(t.content-t.wrapper,Math.max(0,e))}},scrollTo(e){this.scrollOffset=this.calculateNewOffset(e,{content:this.$refs.content?this.$refs.content.clientWidth:0,wrapper:this.$refs.wrapper?this.$refs.wrapper.clientWidth:0},this.$vuetify.rtl,this.scrollOffset)},setWidths(){window.requestAnimationFrame(()=>{const{content:e,wrapper:t}=this.$refs;this.widths={content:e?e.clientWidth:0,wrapper:t?t.clientWidth:0},this.isOverflowing=this.widths.wrapper<this.widths.content,this.scrollIntoView()})}},render(e){return e("div",this.genData(),[this.genPrev(),this.genWrapper(),this.genNext()])}});B.extend({name:"v-slide-group",provide(){return{slideGroup:this}}});var q=s("d10f"),D=Object(S["a"])(B,q["a"],$["a"]).extend({name:"v-tabs-bar",provide(){return{tabsBar:this}},computed:{classes(){return{...B.options.computed.classes.call(this),"v-tabs-bar":!0,"v-tabs-bar--is-mobile":this.isMobile,"v-tabs-bar--show-arrows":this.showArrows,...this.themeClasses}}},watch:{items:"callSlider",internalValue:"callSlider",$route:"onRouteChange"},methods:{callSlider(){this.isBooted&&this.$emit("call:slider")},genContent(){const e=B.options.methods.genContent.call(this);return e.data=e.data||{},e.data.staticClass+=" v-tabs-bar__content",e},onRouteChange(e,t){if(this.mandatory)return;const s=this.items,a=e.path,i=t.path;let n=!1,r=!1;for(const o of s)if(o.to===a?n=!0:o.to===i&&(r=!0),n&&r)break;!n&&r&&(this.internalValue=void 0)}},render(e){const t=B.options.render.call(this,e);return t.data.attrs={role:"tablist"},t}}),U=s("aac8"),M=s("a9ad"),E=Object(S["a"])(M["a"]).extend({name:"v-tabs-slider",render(e){return e("div",this.setBackgroundColor(this.color,{staticClass:"v-tabs-slider"}))}}),z=s("a452");const L=Object(S["a"])(M["a"],z["a"],$["a"]);var W=L.extend().extend({name:"v-tabs",directives:{Resize:P["a"]},props:{activeClass:{type:String,default:""},alignWithTitle:Boolean,backgroundColor:String,centerActive:Boolean,centered:Boolean,fixedTabs:Boolean,grow:Boolean,height:{type:[Number,String],default:void 0},hideSlider:Boolean,iconsAndText:Boolean,mobileBreakpoint:[String,Number],nextIcon:{type:String,default:"$next"},optional:Boolean,prevIcon:{type:String,default:"$prev"},right:Boolean,showArrows:[Boolean,String],sliderColor:String,sliderSize:{type:[Number,String],default:2},vertical:Boolean},data(){return{resizeTimeout:0,slider:{height:null,left:null,right:null,top:null,width:null},transitionTime:300}},computed:{classes(){return{"v-tabs--align-with-title":this.alignWithTitle,"v-tabs--centered":this.centered,"v-tabs--fixed-tabs":this.fixedTabs,"v-tabs--grow":this.grow,"v-tabs--icons-and-text":this.iconsAndText,"v-tabs--right":this.right,"v-tabs--vertical":this.vertical,...this.themeClasses}},isReversed(){return this.$vuetify.rtl&&this.vertical},sliderStyles(){return{height:Object(O["f"])(this.slider.height),left:this.isReversed?void 0:Object(O["f"])(this.slider.left),right:this.isReversed?Object(O["f"])(this.slider.right):void 0,top:this.vertical?Object(O["f"])(this.slider.top):void 0,transition:null!=this.slider.left?null:"none",width:Object(O["f"])(this.slider.width)}},computedColor(){return this.color?this.color:this.isDark&&!this.appIsDark?"white":"primary"}},watch:{alignWithTitle:"callSlider",centered:"callSlider",centerActive:"callSlider",fixedTabs:"callSlider",grow:"callSlider",iconsAndText:"callSlider",right:"callSlider",showArrows:"callSlider",vertical:"callSlider","$vuetify.application.left":"onResize","$vuetify.application.right":"onResize","$vuetify.rtl":"onResize"},mounted(){this.$nextTick(()=>{window.setTimeout(this.callSlider,30)})},methods:{callSlider(){return!this.hideSlider&&this.$refs.items&&this.$refs.items.selectedItems.length?(this.$nextTick(()=>{const e=this.$refs.items.selectedItems[0];if(!e||!e.$el)return this.slider.width=0,void(this.slider.left=0);const t=e.$el;this.slider={height:this.vertical?t.scrollHeight:Number(this.sliderSize),left:this.vertical?0:t.offsetLeft,right:this.vertical?0:t.offsetLeft+t.offsetWidth,top:t.offsetTop,width:this.vertical?Number(this.sliderSize):t.scrollWidth}}),!0):(this.slider.width=0,!1)},genBar(e,t){const s={style:{height:Object(O["f"])(this.height)},props:{activeClass:this.activeClass,centerActive:this.centerActive,dark:this.dark,light:this.light,mandatory:!this.optional,mobileBreakpoint:this.mobileBreakpoint,nextIcon:this.nextIcon,prevIcon:this.prevIcon,showArrows:this.showArrows,value:this.internalValue},on:{"call:slider":this.callSlider,change:e=>{this.internalValue=e}},ref:"items"};return this.setTextColor(this.computedColor,s),this.setBackgroundColor(this.backgroundColor,s),this.$createElement(D,s,[this.genSlider(t),e])},genItems(e,t){return e||(t.length?this.$createElement(U["a"],{props:{value:this.internalValue},on:{change:e=>{this.internalValue=e}}},t):null)},genSlider(e){return this.hideSlider?null:(e||(e=this.$createElement(E,{props:{color:this.sliderColor}})),this.$createElement("div",{staticClass:"v-tabs-slider-wrapper",style:this.sliderStyles},[e]))},onResize(){this._isDestroyed||(clearTimeout(this.resizeTimeout),this.resizeTimeout=window.setTimeout(this.callSlider,0))},parseNodes(){let e=null,t=null;const s=[],a=[],i=this.$slots.default||[],n=i.length;for(let r=0;r<n;r++){const n=i[r];if(n.componentOptions)switch(n.componentOptions.Ctor.options.name){case"v-tabs-slider":t=n;break;case"v-tabs-items":e=n;break;case"v-tab-item":s.push(n);break;default:a.push(n)}else a.push(n)}return{tab:a,slider:t,items:e,item:s}}},render(e){const{tab:t,slider:s,items:a,item:i}=this.parseNodes();return e("div",{staticClass:"v-tabs",class:this.classes,directives:[{name:"resize",modifiers:{quiet:!0},value:this.onResize}]},[this.genBar(t,s),this.genItems(a,i)])}}),F=Object(l["a"])(o,a,i,!1,null,null,null);t["default"]=F.exports;d()(F,{VAppBar:h["a"],VContainer:u["a"],VIcon:p["a"],VImg:v["a"],VList:m["a"],VListItem:f["a"],VListItemContent:g["a"],VListItemGroup:b["a"],VListItemIcon:w["a"],VListItemSubtitle:g["b"],VListItemTitle:g["c"],VNavigationDrawer:x["a"],VSlideXReverseTransition:_["f"],VSpacer:y["a"],VTab:T,VTabs:W})},"210b":function(e,t,s){},"31b2":function(e,t,s){"use strict";s.r(t);var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("v-container",{attrs:{fluid:""}},[s("user-settings")],1)},i=[],n=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("v-container",[s("v-expansion-panels",[s("v-expansion-panel",[s("v-expansion-panel-header",[e._v(" "+e._s(e.settings[0]))]),s("v-expansion-panel-content",[s("v-container",[s("v-list",[s("v-list-item",[s("v-col",[s("v-form",{ref:"form",staticStyle:{height:"100%"},attrs:{"lazy-validation":""},model:{value:e.valid,callback:function(t){e.valid=t},expression:"valid"}},[s("v-row",{attrs:{xs:""}},[s("v-col",[s("v-text-field",{attrs:{id:"name",label:"new name",placeholder:e.update_data.name},model:{value:e.update_data.name,callback:function(t){e.$set(e.update_data,"name",t)},expression:"update_data.name"}})],1)],1),s("v-row",{attrs:{xs:""}},[s("v-col",[s("v-text-field",{attrs:{id:"surname",label:"new surname",placeholder:e.update_data.surname},model:{value:e.update_data.surname,callback:function(t){e.$set(e.update_data,"surname",t)},expression:"update_data.surname"}})],1)],1),s("v-row",{staticClass:"d-flex justify-center"},[s("v-btn",{staticClass:"mr-4",attrs:{color:"success"},on:{click:e.updateUserProfile}},[e._v(" Update ")])],1),""!==e.usrAlertMessage?s("v-alert",{staticClass:"mt-2",attrs:{dense:"",type:e.usrType}},[s("strong",[e._v(e._s(e.usrAlertMessage))])]):e._e()],1)],1)],1)],1)],1)],1)],1),s("v-expansion-panel",[s("v-expansion-panel-header",[e._v(" "+e._s(e.settings[1])+" ")]),s("v-expansion-panel-content",[s("v-container",[s("v-list",[s("v-list-item",[s("v-col",[s("v-form",{ref:"pw_form",staticStyle:{height:"100%"},attrs:{"lazy-validation":""},model:{value:e.valid,callback:function(t){e.valid=t},expression:"valid"}},[s("v-row",[s("v-text-field",{attrs:{"append-icon":e.show1?"mdi-eye":"mdi-eye-off",rules:[e.passwordRules.required,e.passwordRules.min,e.passwordRules.max,e.passwordRules.valid],label:"new Password",type:e.show1?"text":"password",counter:"",hint:"At least 8 characters",required:""},on:{"click:append":function(t){e.show1=!e.show1}},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}})],1),s("v-row",[s("v-text-field",{attrs:{"append-icon":e.show1?"mdi-eye":"mdi-eye-off",rules:[e.confirmPasswordRules.equal],type:e.show1?"text":"password",label:"Confirm Password",counter:"",hint:"At least 8 characters",required:""},on:{"click:append":function(t){e.show1=!e.show1}},model:{value:e.confirmPassword,callback:function(t){e.confirmPassword=t},expression:"confirmPassword"}})],1),s("v-row",{staticClass:"d-flex justify-center"},[s("v-btn",{staticClass:"mr-4",attrs:{color:"success"},on:{click:e.updateUserPassword}},[e._v(" Update ")])],1),""!==e.pwdAlertMessage?s("v-alert",{staticClass:"mt-2",attrs:{dense:"",type:e.pwdType}},[s("strong",[e._v(e._s(e.pwdAlertMessage))])]):e._e()],1)],1)],1)],1)],1)],1)],1),s("v-expansion-panel",[s("v-expansion-panel-header",[e._v(" "+e._s(e.settings[2])+" ")]),s("v-expansion-panel-content",[s("v-form",{ref:"form"},[s("v-file-input",{attrs:{rules:e.resource_rules,"show-size":!0,id:"Avatar",accept:"image/png, image/jpeg, image/bmp",placeholder:"Select Avatar image","prepend-icon":"mdi-camera",label:"Avatar"},scopedSlots:e._u([{key:"append-outer",fn:function(){return[s("v-btn",{attrs:{color:"succes"},on:{click:e.changePic}},[e._v(" Change ")])]},proxy:!0}])})],1)],1)],1)],1),s("v-container",{staticClass:"d-flex justify-center"},[s("v-btn",{staticClass:"mt-4",attrs:{color:"warning"},on:{click:function(t){e.dialog=!0}}},[e._v(" Delete Account ")])],1),s("v-dialog",{attrs:{persistent:"","max-width":"290"},model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[s("v-card",[s("v-card-title",{staticClass:"headline"},[e._v(" Are you shure to delete your account? ")]),s("v-card-actions",[s("v-spacer"),s("v-btn",{attrs:{color:"green darken-1",text:""},on:{click:e.deleteAccount}},[e._v(" Yes ")])],1)],1)],1)],1)},r=[],o=s("bc3a"),l=s.n(o),c=s("f121");const d=e=>`https://lib-hub-api.herokuapp.com/api/users/${e}/`;async function h(e,t,s){await l.a.patch(d(e)+"profile",t,Object(c["a"])(s))}async function u(e,t,s){const a=await l.a.put(d(e)+"profile/password",t,Object(c["a"])(s));return a.data}async function p(e,t,s){const a=await l.a.put(d(e)+"profile/avatar",t,Object(c["a"])(s));return a.data}async function v(e,t){await l.a.delete(d(e),Object(c["a"])(t))}var m=s("d706"),f={name:"UserSettings",data(){return{valid:!0,dialog:!1,loading:!1,pwdAlertMessage:"",pwdType:"",usrAlerMessage:"",usrType:"",password:"",passwordRules:{required:e=>!!e||"Required.",min:e=>e.length>=8||"Min 8 characters",max:e=>e.length<=23||"Max 23 characters",valid:e=>/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,23}$/.test(e)||" password must contain at least an upper case, a lower case, a number and a special character"},confirmPassword:"",confirmPasswordRules:{equal:e=>e===this.password||"Password must match"},show1:!1,update_data:{},settings:["User profile data","Password Update","Edit avatar"],password_update:{password:""},edit_avatar:{},emailRules:[e=>/.+@.+\..+/.test(e)||"E-mail must be valid"]}},methods:{async updateUserProfile(){const e=this.$store.getters.getUser;if(this.$refs.form.validate(),!this.loading)try{this.loading=!0,await h(e._id,{name:this.update_data.name,surname:this.update_data.surname},localStorage.getItem("accessToken")),localStorage.setItem("user",JSON.stringify(this.update_data)),this.$store.commit("setUser",this.update_data),this.usrType="success",this.usrAlertMessage="Updated user profile info"}catch(t){this.usrAlertMessage=t.response.data.message,this.usrType="error"}finally{this.loading=!1}},async updateUserPassword(){if(this.$refs.pw_form.validate(),!this.loading)try{this.loading=!0;let e=this.$store.getters.getUser;await u(e._id,{password:this.password},localStorage.getItem("accessToken")),e=await Object(m["a"])({username:e.username,password:this.password}),localStorage.setItem("user",JSON.stringify(e.user)),localStorage.setItem("accessToken",e.token),this.$store.commit("setUser",e.user),this.pwdAlertMessage="Password updated",this.pwdType="success"}catch(e){this.pwdAlertMessage=e.response.data.message,this.pwdType="error"}finally{this.loading=!1}},async changePic(){if(!this.loading)try{this.loading=!0;const e=new FormData;let t=this.$store.getters.getUser;e.append("avatar",this.$refs.form.$el["Avatar"].files[0]),t.avatar=await p(t._id,e,localStorage.getItem("accessToken")),this.$store.commit("setUser",t),localStorage.setItem("user",JSON.stringify(t)),console.log("ok")}catch(e){console.log(e)}finally{this.loading=!1}},async deleteAccount(){if(!this.loading)try{this.loading=!0;const e=this.$store.getters.getUser;await v(e._id,localStorage.getItem("accessToken")),this.$router.push("/")}catch(e){}finally{this.loading=!1}}},mounted:function(){this.update_data=this.$store.getters.getUser}},g=f,b=s("2877"),w=s("6544"),x=s.n(w),_=s("0798"),y=s("8336"),k=s("b0af"),C=s("99d9"),$=s("62ad"),O=s("a523"),S=s("169a"),I=s("4e82"),T=s("3206"),A=s("80d2"),j=s("58df"),V=Object(j["a"])(Object(I["a"])("expansionPanels","v-expansion-panel","v-expansion-panels"),Object(T["b"])("expansionPanel",!0)).extend({name:"v-expansion-panel",props:{disabled:Boolean,readonly:Boolean},data(){return{content:null,header:null,nextIsActive:!1}},computed:{classes(){return{"v-expansion-panel--active":this.isActive,"v-expansion-panel--next-active":this.nextIsActive,"v-expansion-panel--disabled":this.isDisabled,...this.groupClasses}},isDisabled(){return this.expansionPanels.disabled||this.disabled},isReadonly(){return this.expansionPanels.readonly||this.readonly}},methods:{registerContent(e){this.content=e},unregisterContent(){this.content=null},registerHeader(e){this.header=e,e.$on("click",this.onClick)},unregisterHeader(){this.header=null},onClick(e){e.detail&&this.header.$el.blur(),this.$emit("click",e),this.isReadonly||this.isDisabled||this.toggle()},toggle(){this.content&&(this.content.isBooted=!0),this.$nextTick(()=>this.$emit("change"))}},render(e){return e("div",{staticClass:"v-expansion-panel",class:this.classes,attrs:{"aria-expanded":String(this.isActive)}},Object(A["o"])(this))}}),P=s("0789"),R=s("9d65"),B=s("a9ad");const q=Object(j["a"])(R["a"],B["a"],Object(T["a"])("expansionPanel","v-expansion-panel-content","v-expansion-panel"));var D=q.extend().extend({name:"v-expansion-panel-content",computed:{isActive(){return this.expansionPanel.isActive}},created(){this.expansionPanel.registerContent(this)},beforeDestroy(){this.expansionPanel.unregisterContent()},render(e){return e(P["a"],this.showLazyContent(()=>[e("div",this.setBackgroundColor(this.color,{staticClass:"v-expansion-panel-content",directives:[{name:"show",value:this.isActive}]}),[e("div",{class:"v-expansion-panel-content__wrap"},Object(A["o"])(this))])]))}}),U=s("9d26"),M=s("5607");const E=Object(j["a"])(B["a"],Object(T["a"])("expansionPanel","v-expansion-panel-header","v-expansion-panel"));var z=E.extend().extend({name:"v-expansion-panel-header",directives:{ripple:M["a"]},props:{disableIconRotate:Boolean,expandIcon:{type:String,default:"$expand"},hideActions:Boolean,ripple:{type:[Boolean,Object],default:!1}},data:()=>({hasMousedown:!1}),computed:{classes(){return{"v-expansion-panel-header--active":this.isActive,"v-expansion-panel-header--mousedown":this.hasMousedown}},isActive(){return this.expansionPanel.isActive},isDisabled(){return this.expansionPanel.isDisabled},isReadonly(){return this.expansionPanel.isReadonly}},created(){this.expansionPanel.registerHeader(this)},beforeDestroy(){this.expansionPanel.unregisterHeader()},methods:{onClick(e){this.$emit("click",e)},genIcon(){const e=Object(A["o"])(this,"actions")||[this.$createElement(U["a"],this.expandIcon)];return this.$createElement(P["d"],[this.$createElement("div",{staticClass:"v-expansion-panel-header__icon",class:{"v-expansion-panel-header__icon--disable-rotate":this.disableIconRotate},directives:[{name:"show",value:!this.isDisabled}]},e)])}},render(e){return e("button",this.setBackgroundColor(this.color,{staticClass:"v-expansion-panel-header",class:this.classes,attrs:{tabindex:this.isDisabled?-1:null,type:"button"},directives:[{name:"ripple",value:this.ripple}],on:{...this.$listeners,click:this.onClick,mousedown:()=>this.hasMousedown=!0,mouseup:()=>this.hasMousedown=!1}}),[Object(A["o"])(this,"default",{open:this.isActive},!0),this.hideActions||this.genIcon()])}}),L=(s("4069"),s("210b"),s("604c")),W=s("d9bd"),F=L["a"].extend({name:"v-expansion-panels",provide(){return{expansionPanels:this}},props:{accordion:Boolean,disabled:Boolean,flat:Boolean,hover:Boolean,focusable:Boolean,inset:Boolean,popout:Boolean,readonly:Boolean,tile:Boolean},computed:{classes(){return{...L["a"].options.computed.classes.call(this),"v-expansion-panels":!0,"v-expansion-panels--accordion":this.accordion,"v-expansion-panels--flat":this.flat,"v-expansion-panels--hover":this.hover,"v-expansion-panels--focusable":this.focusable,"v-expansion-panels--inset":this.inset,"v-expansion-panels--popout":this.popout,"v-expansion-panels--tile":this.tile}}},created(){this.$attrs.hasOwnProperty("expand")&&Object(W["a"])("expand","multiple",this),Array.isArray(this.value)&&this.value.length>0&&"boolean"===typeof this.value[0]&&Object(W["a"])(':value="[true, false, true]"',':value="[0, 2]"',this)},methods:{updateItem(e,t){const s=this.getValue(e,t),a=this.getValue(e,t+1);e.isActive=this.toggleMethod(s),e.nextIsActive=this.toggleMethod(a)}}}),N=s("23a7"),X=s("4bd4"),H=s("8860"),J=s("da13"),Z=s("0fd9"),G=s("2fa4"),Y=s("8654"),K=Object(b["a"])(g,n,r,!1,null,null,null),Q=K.exports;x()(K,{VAlert:_["a"],VBtn:y["a"],VCard:k["a"],VCardActions:C["a"],VCardTitle:C["d"],VCol:$["a"],VContainer:O["a"],VDialog:S["a"],VExpansionPanel:V,VExpansionPanelContent:D,VExpansionPanelHeader:z,VExpansionPanels:F,VFileInput:N["a"],VForm:X["a"],VList:H["a"],VListItem:J["a"],VRow:Z["a"],VSpacer:G["a"],VTextField:Y["a"]});var ee={name:"User",components:{UserSettings:Q},data:()=>({})},te=ee,se=Object(b["a"])(te,a,i,!1,null,null,null);t["default"]=se.exports;x()(se,{VContainer:O["a"]})},"336f":function(e,t,s){"use strict";s.r(t);var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("v-container",{staticClass:"d-flex",attrs:{fluid:""}},[s("friends-tabs"),s("v-row",[s("v-dialog",{key:e.getChatId,attrs:{fullscreen:"","hide-overlay":""},model:{value:e.showChatDialog,callback:function(t){e.showChatDialog=t},expression:"showChatDialog"}},[s("chat-messages")],1)],1)],1)},i=[],n=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("v-container",{attrs:{fluid:""}},[s("v-row",[s("v-tabs-items",{model:{value:e.model,callback:function(t){e.model=t},expression:"model"}},[s("v-tab-item",[s("v-card",{staticClass:"pa-4 a",attrs:{flat:""}},e._l(e.friends,(function(t){return s("v-card",{key:t.username,staticClass:"mb-2"},[s("v-row",{staticClass:"align-center"},[s("v-col",[s("v-card-title",[e._v(" "+e._s(t.name)+" "+e._s(t.surname)+" ")]),s("v-card-subtitle",[e._v(" "+e._s(t.username)+" ")])],1),s("v-col",{staticClass:"mx-2 d-flex justify-end"},[s("v-btn",{staticClass:"mr-1",attrs:{small:"",dark:"",color:"primary",title:"Chat"},on:{click:function(s){return e.openChatDialog(t)}}},[s("v-icon",[e._v("mdi-android-messages")])],1),s("v-btn",{staticClass:"mr-1",attrs:{small:"",dark:"",color:"error",title:"Remove Friend"},on:{click:function(s){return e.removeFriend(t._id)}}},[s("v-icon",[e._v("mdi-close-thick")])],1)],1)],1)],1)})),1)],1),s("v-tab-item",[s("v-card",{staticClass:"pa-4 a",attrs:{flat:""}},[s("v-card",{staticClass:"mb-4 d-flex",attrs:{dense:"",floating:"",tile:""}},[s("v-combobox",{staticClass:"py-2 px-10",attrs:{"hide-details":"","append-icon":"mdi-magnify","single-line":"",items:e.users},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.sendRequest(t)}},model:{value:e.selectedUser,callback:function(t){e.selectedUser=t},expression:"selectedUser"}})],1),s("v-divider",{staticClass:"mb-1"}),s("v-card",{staticClass:"mb-2",attrs:{flat:""}},[s("v-card-title",[e._v(" Pending Friend Requests ")])],1),e._l(e.request_sent,(function(t,a){return s("v-card",{key:a},[s("v-row",{staticClass:"align-center"},[s("v-col",[s("v-card-title",[e._v(" "+e._s(t.username)+" ")]),s("v-card-subtitle",[e._v(" "+e._s(t.message)+" ")])],1),s("v-col",{staticClass:"mx-2 d-flex justify-end"},[s("v-btn",{staticClass:"mr-1",attrs:{small:"",dark:"",color:"error",title:"Remove Request","menu-props":"closeOnClick"},on:{click:function(s){return e.removeRequestSent(t._id)}}},[s("v-icon",[e._v("mdi-close-thick")])],1)],1)],1)],1)}))],2)],1),s("v-tab-item",[s("v-card",{staticClass:"a",attrs:{flat:""}},e._l(e.request_got,(function(t,a){return s("v-card",{key:a,staticClass:"ma-2"},[s("v-row",{staticClass:"align-center"},[s("v-col",[s("v-card-title",[e._v(" "+e._s(t.username)+" ")]),s("v-card-subtitle",[e._v(" "+e._s(t.message)+" ")])],1),s("v-col",{staticClass:"mx-2 d-flex justify-end"},[s("v-btn",{staticClass:"mr-1",attrs:{small:"",dark:"",color:"success",title:"Accept Request"},on:{click:function(s){return e.acceptReceivedRequest(t._id,!0)}}},[s("v-icon",[e._v("mdi-check-bold")])],1),s("v-btn",{staticClass:"mr-1",attrs:{small:"",dark:"",color:"error",title:"Decline Request"},on:{click:function(s){return e.acceptReceivedRequest(t._id,!1)}}},[s("v-icon",[e._v("mdi-close-thick")])],1)],1)],1)],1)})),1)],1)],1)],1),s("v-row",[s("v-dialog",{attrs:{persistent:"","max-width":"290"},model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[s("v-card",[s("v-card-title",{staticClass:"headline"},[e._v(" Request Sent ")]),s("v-card-actions",[s("v-spacer"),s("v-btn",{attrs:{color:"green darken-1",text:""},on:{click:function(t){e.dialog=!1}}},[e._v(" Ok ")])],1)],1)],1)],1)],1)},r=[],o=s("410e"),l=s("3d93"),c={name:"FriendsTabs",data:()=>({res:null,loading:!1,dialog:!1,users:[],chats:[],friends:[],request_sent:[],request_got:[],selectedUser:""}),methods:{async sendRequest(){if(!this.loading&&this.users.includes(this.selectedUser))try{const e=this.$store.getters.getUser;await Object(o["b"])(e._id,this.selectedUser,localStorage.getItem("accessToken")),this.dialog=!0,this.selectedUser="",this.request_sent=await Object(o["g"])(e._id,localStorage.getItem("accessToken")),this.request_sent=this.request_sent.map(e=>({...e,username:this.res.find(t=>t._id===e.requestTo).username}))}catch(e){}finally{this.loading=!1}},async removeRequestSent(e){if(!this.loading)try{const t=this.$store.getters.getUser;await Object(o["d"])(t._id,e,localStorage.getItem("accessToken"));let s=0;for(let a in this.request_sent)this.request_sent[a]._id===e&&this.request_sent.splice(s,1),s++}catch(t){}finally{this.loading=!1}},async acceptReceivedRequest(e,t){if(!this.loading)try{const s=this.$store.getters.getUser;await Object(o["a"])(s._id,e,{accepted:t,message:"zaWarudooooo"},localStorage.getItem("accessToken"));let a=0;for(let t in this.request_got)this.request_got[t]._id===e&&this.request_got.splice(a,1),a++;this.friends=await Object(o["e"])(s._id,localStorage.getItem("accessToken"))}catch(s){}finally{this.loading=!1}},async removeFriend(e){if(!this.loading)try{const t=this.$store.getters.getUser;await Object(o["c"])(t._id,e,localStorage.getItem("accessToken"));let s=0;for(let a in this.friends)this.friends[a]._id===e&&this.friends.splice(s,1),s++}catch(t){}finally{this.loading=!1}},async openChatDialog(e){let t=null;const s=this.$store.getters.getUser;this.chats=await Object(l["b"])(s._id,localStorage.getItem("accessToken"));for(let i in this.chats)this.chats[i].users.includes(e._id)&&(t=this.chats[i]._id);if(null===t)try{t=await Object(l["c"])(s._id,{recipient:e._id},localStorage.getItem("accessToken"))}catch(a){}this.$store.commit("showChatDialog",{chatId:t,friend:e})}},computed:{model:{get(){return this.$store.state.model}}},async mounted(){try{const e=this.$store.getters.getUser;this.friends=await Object(o["e"])(e._id,localStorage.getItem("accessToken")),this.chats=await Object(l["b"])(e._id,localStorage.getItem("accessToken")),this.res=await Object(o["h"])(localStorage.getItem("accessToken"));for(let t in this.res)if(this.friends.length>0)for(let e in this.friends)this.res[t].username!=this.friends[e].username&&this.users.push(this.res[t].username);else this.users.push(this.res[t].username);this.request_got=await Object(o["f"])(e._id,localStorage.getItem("accessToken")),this.request_got=this.request_got.map(e=>({...e,username:this.res.find(t=>t._id===e.requestBy).username})),this.request_sent=await Object(o["g"])(e._id,localStorage.getItem("accessToken")),this.request_sent=this.request_sent.map(e=>({...e,username:this.res.find(t=>t._id===e.requestTo).username}))}catch(e){}}},d=c,h=(s("34e0"),s("2877")),u=s("6544"),p=s.n(u),v=s("8336"),m=s("b0af"),f=s("99d9"),g=s("62ad"),b=s("2b5d"),w=s("a523"),x=s("169a"),_=s("ce7e"),y=s("132d"),k=s("0fd9"),C=s("2fa4"),$=s("1e6c"),O=$["a"].extend({name:"v-tab-item",props:{id:String},methods:{genWindowItem(){const e=$["a"].options.methods.genWindowItem.call(this);return e.data.domProps=e.data.domProps||{},e.data.domProps.id=this.id||this.value,e}}}),S=s("aac8"),I=Object(h["a"])(d,n,r,!1,null,"42c5188e",null),T=I.exports;p()(I,{VBtn:v["a"],VCard:m["a"],VCardActions:f["a"],VCardSubtitle:f["b"],VCardTitle:f["d"],VCol:g["a"],VCombobox:b["a"],VContainer:w["a"],VDialog:x["a"],VDivider:_["a"],VIcon:y["a"],VRow:k["a"],VSpacer:C["a"],VTabItem:O,VTabsItems:S["a"]});var A=s("9c9d"),j={name:"Friends",components:{FriendsTabs:T,ChatMessages:A["a"]},data:()=>({}),computed:{showChatDialog:{get:function(){return this.$store.state.chatDialog}},getChatId:{get:function(){return this.$store.getters.getChatId}}}},V=j,P=Object(h["a"])(V,a,i,!1,null,null,null);t["default"]=P.exports;p()(P,{VContainer:w["a"],VDialog:x["a"],VRow:k["a"]})},"34e0":function(e,t,s){"use strict";s("1b53")},"410e":function(e,t,s){"use strict";s.d(t,"g",(function(){return o})),s.d(t,"d",(function(){return l})),s.d(t,"f",(function(){return c})),s.d(t,"a",(function(){return d})),s.d(t,"e",(function(){return p})),s.d(t,"b",(function(){return v})),s.d(t,"c",(function(){return m})),s.d(t,"h",(function(){return f}));var a=s("bc3a"),i=s.n(a),n=s("f121");const r=e=>`https://lib-hub-api.herokuapp.com/api/users/${e}/friends/friend-requests`;async function o(e,t){const s=await i.a.get(r(e)+"/sent",Object(n["a"])(t));return s.data}async function l(e,t,s){await i.a.delete(r(e)+"/sent/"+t,Object(n["a"])(s))}async function c(e,t){const s=await i.a.get(r(e)+"/received",Object(n["a"])(t));return s.data}async function d(e,t,s,a){const o=await i.a.post(r(e)+"/received/"+t,s,Object(n["a"])(a));return o.data}const h=(e,t)=>`https://lib-hub-api.herokuapp.com/api/users/${e}/friends/${t}`,u=e=>`https://lib-hub-api.herokuapp.com/api/users/${e}/friends`;async function p(e,t){const s=await i.a.get(u(e),Object(n["a"])(t));return s.data}async function v(e,t,s){await i.a.post(h(e,t),{message:"zaWarudoooo"},Object(n["a"])(s))}async function m(e,t,s){await i.a.delete(h(e,t),Object(n["a"])(s))}async function f(e){const t=await i.a.get("https://lib-hub-api.herokuapp.com/api/users/usernames",Object(n["a"])(e));return t.data}},"608c":function(e,t,s){},aac8:function(e,t,s){"use strict";var a=s("f665"),i=s("604c");t["a"]=a["a"].extend({name:"v-tabs-items",props:{mandatory:{type:Boolean,default:!1}},computed:{classes(){return{...a["a"].options.computed.classes.call(this),"v-tabs-items":!0}},isDark(){return this.rootIsDark}},methods:{getValue(e,t){return e.id||i["a"].options.methods.getValue.call(this,e,t)}}})}}]);
//# sourceMappingURL=user.a3ae060e.js.map