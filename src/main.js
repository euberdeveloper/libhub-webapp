import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify';
import vuex from 'vuex'


Vue.config.productionTip = false
Vue.use(vuex)

const session_store = new vuex.Store({
    state: {
        user_email: "",
        user_name: ""
    }
})

new Vue({
    router,
    vuetify,
    store: session_store,
    render: h => h(App)
}).$mount('#app')