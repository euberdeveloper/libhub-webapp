import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/default/Home.vue'
import HomeBar from '../views/bars/HomeBar.vue'
import ErrorPage from '../views/default/Error_page.vue'
import TagTree from '../components/TagTree.vue'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'Home',
        components: {
            default: Home,
            bar: HomeBar
        }
    },
    {
        path: '/dash',
        name: 'Dashboard',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        components: {
            default: () =>
                import ( /* webpackChunkName: "dashboard" */ '../views/default/Dashboard.vue'),
            bar: () =>
                import ( /* webpackChunkName: "dashboard" */ '../views/bars/AppBar.vue'),
        }
    },
    {
        path: '/libraries',
        name: 'Libraries',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        components: {
            default: () =>
                import ( /* webpackChunkName: "libraries" */ '../views/default/Libraries.vue'),
            bar: () =>
                import ( /* webpackChunkName: "libraries" */ '../views/bars/AppBar.vue'),
        }
    },
    {
        path: '/libraries/:lid/books',
        name: 'Books',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        components: {
            default: () =>
                import ( /* webpackChunkName: "books" */ '../views/default/Books.vue'),
            bar: () =>
                import ( /* webpackChunkName: "books" */ '../views/bars/AppBar.vue'),
        }
    },
    {
        path: '/tags',
        name: 'Tags',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        components: {
            default: () =>
                import ( /* webpackChunkName: "tags" */ '../views/default/Tags.vue'),
            bar: () =>
                import ( /* webpackChunkName: "tags" */ '../views/bars/AppBar.vue'),
        }
    },
    {
        path: '/error_page',
        name: 'Error_page',
        components: {
            default: ErrorPage,
            bar: HomeBar
        }
    },
    //Test route for trying new component
    //Must be eliminated ad the end of the sprint
    {
        path: '/test_component',
        name: 'Test_component',
        components: {
            default: TagTree
        }
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router