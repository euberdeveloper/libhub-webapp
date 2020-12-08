import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify';
import vuex from 'vuex'
import store from './store'
import VueTreeList from 'vue-tree-list'


Vue.config.productionTip = false
Vue.use(vuex)

Vue.use(VueTreeList)


new Vue({
    router,
    vuetify,
    store,
    render: h => h(App)
}).$mount('#app')