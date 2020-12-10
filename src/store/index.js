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
        loginDialog: false,
        error_message: "ciao sono un messaggio di errore generico che può essere modificato :)"
    },
    mutations: {
        showLoginDialog(state) {
            state.loginDialog = true
        },
        hideLoginDialog(state) {
            state.loginDialog = false
        },
        setUserId(state, value) {
            state.UserId = value;
        },
        setLibraryId(state, value) {
            state.LibraryId = value;
        },
        setErrorMessage(state, value) {
            state.error_message = value;
        }
    },
    actions: {},
    modules: {}
})