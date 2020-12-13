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
        error_message: "ciao sono un messaggio di errore generico che può essere modificato :)",
        isbn_obtained_from_image: "",
        loginDialog: false,
        InsertBookForm_Dialog: false,
        InsertLibraryForm_Dialog: false,
        libraryDialog: false,
        libraries: [],
        books: [],
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
        },
        setIsbnObatinedFromImage(state, value) {
            state.isbn_obtained_from_image = value
        },
        show_InsertBookForm_Dialog(state) {
            state.InsertBookForm_Dialog = true
        },
        hide_InsertBookForm_Dialog(state) {
            state.InsertBookForm_Dialog = false
        },
        show_InsertLibraryForm_Dialog(state) {
            state.InsertLibraryForm_Dialog = true
        },
        hide_InsertLibraryForm_Dialog(state) {
            state.InsertLibraryForm_Dialog = false
        },
        setLibraries(state, value){
            state.libraries = value;
        },
        addLibrary(state, library){
            state.libraries.push(library);
        },
        setBooks(state, value){
            state.books = value;
        },
        addBook(state, book){
            state.books.push(book);
        },
        show_LibraryDetails_Dialog(state, lid){
            if(lid != null)
                state.LibraryId = lid;
            state.libraryDialog = true;
        },
        hide_LibraryDetails_Dialog(state){
            state.libraryDialog = false;
        }
    },
    actions: {},
    modules: {}
})