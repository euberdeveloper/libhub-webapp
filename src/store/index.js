import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        UserName: "",
        UserEmail: "",
        UserId: "",
        LibraryId: "",
        BookId: "",
        loginDialog: false
    },
    mutations: {
        showLoginDialog (state){
            state.loginDialog = true
        },
        hideLoginDialog (state){
            state.loginDialog = false
        },
        
    },
    actions: {},
    modules: {}
})