import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        user: JSON.parse(localStorage.getItem("user")) || null,
        LibraryId: "",
        ChatID: "",
        BookId: "",
        model: null,
        tabs: [true, false, false],
        error_message: "",
        isbn_obtained_from_image: "",
        loginDialog: false,
        libraryDialog: false,
        bookDialog: false,
        InsertBookForm_Dialog: false,
        InsertLibraryForm_Dialog: false,
        chatDialog: false,
        friend: {},
        libraries: [],
        books: [],
        book: {},
        chat: {},
        chatReceiver: "",
    },
    mutations: {
        //Setters
        clearStore(state) {
            state.user = null
            state.LibraryId = ""
            state.ChatID = ""
            state.BookId = ""
            state.model = null
            state.tabs = [true, false, false]
            state.error_message = ""
            state.isbn_obtained_from_image = ""
            state.loginDialog = false
            state.libraryDialog = false
            state.bookDialog = false
            state.InsertBookForm_Dialog = false
            state.InsertLibraryForm_Dialog = false
            state.ChatForm = false
            state.libraries = []
            state.books = []
            state.book = {}
            state.chat = {}
            state.chatReceiver = ""
        },
        setUser(state, value){
            state.user = value;
        },
        setLibraryId(state, value) {
            state.LibraryId = value
        },
        setBookId(state, value) {
            state.BookId = value
        },
        setErrorMessage(state, value) {
            state.error_message = value
        },
        setIsbnObatinedFromImage(state, value) {
            state.isbn_obtained_from_image = value
        },
        setLibraries(state, value) {
            state.libraries = value
        },
        addLibrary(state, library) {
            state.libraries.push(library)
        },
        setBooks(state, value) {
            state.books = value
        },
        addBookToBooks(state, book) {
            state.books.push(book)
        },
        setBook(state, book) {
            state.book = book
        },

        //show-hide Dialogs
        showLoginDialog(state) {
            state.loginDialog = true
        },
        hideLoginDialog(state) {
            state.loginDialog = false
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
        show_LibraryDetails_Dialog(state, lid) {
            if (lid != null)
                state.LibraryId = lid
            state.libraryDialog = true
        },
        hide_LibraryDetails_Dialog(state) {
            state.libraryDialog = false
        },
        show_BookDetails_Dialog(state, bid) {
            if (bid != null)
                state.BookId = bid
            state.bookDialog = true
        },
        hide_BookDetails_Dialog(state) {
            state.bookDialog = false
        },
        showChatDialog(state, data) {
            state.ChatID = data.chatId
            state.friend = data.friend
            state.chatDialog = true
        },
        hideChatDialog(state) {
            state.chatDialog = false
        },
    },
    getters: {
        getUser: (state) => {
            return state.user
        },
        getFriend: (state) => {
            return state.friend
        },
        getLibraries: (state) => {
            return state.libraries
        },
        getLibraryId: (state) => {
            return state.LibraryId
        },
        getBooks: (state) => {
            return state.books
        },
        getBookId: (state) => {
            return state.BookId
        },
        getBook: (state) => {
            return state.book
        },
        getChat: (state) => {
            return state.chat
        },
        getChatId: (state) => {
            return state.ChatID
        },
        getChatReceiver: (state) => {
            return state.chatReceiver
        }
    },
    actions: {},
    modules: {}
})