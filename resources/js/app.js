


/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');

/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// const files = require.context('./', true, /\.vue$/i)
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))

Vue.component('example-component', require('./components/ExampleComponent.vue').default);
Vue.component('main-comp', require('./components/Main.vue').default);
Vue.component('dummy', require('./components/Dummy.vue').default);
Vue.component('navbar', require('./components/Navbar.vue').default);
Vue.component('app-comp', require('./components/App.vue').default);

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */
import Vuetify from 'vuetify';
import VueRouter from 'vue-router'
import ExampleComponent from '../js/components/ExampleComponent'

Vue.use(Vuetify);
Vue.use(VueRouter)
const router = new VueRouter({
    mode: 'history',
    routes:[
        {
            path:'/',
            name: 'main-comp',
            component: require('./components/Main.vue').default
        }
    ]
})
const app = new Vue({
    router,
    vuetify: new Vuetify(),
    data(){
        return{
            drawer:false
        }
    },
}).$mount('#app')
