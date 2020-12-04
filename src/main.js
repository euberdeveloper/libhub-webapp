import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify';
import vuex from 'vuex'
import store from './store'


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
    store,
    sotre: session_store,
    render: h => h(App)
}).$mount('#app')