


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

const example = Vue.component('example-component', require('./components/ExampleComponent.vue').default);
const main = Vue.component('main-comp', require('./components/Main.vue').default);
const dummy = Vue.component('dummy', require('./components/Dummy.vue').default);
const sidebar = Vue.component('sidebar', require('./components/Sidebar.vue').default);
const planowanie = Vue.component('planowanie', require('./components/Planowanie.vue').default);
const orderset = Vue.component('planowanie', require('./components/Orderset.vue').default);


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
            component: main
        },
        {
            path:'/dummy',
            name: 'dummy',
            component: dummy
        },
        {
            path:'/planowanie',
            name: 'planowanie',
            component: planowanie
        },
        {
            path:'/orderset/:id',
            name: 'orderset',
            component: orderset
        }

    ]
});
const app = new Vue({
    router,
    vuetify: new Vuetify(),
    data(){
        return{
            data:null,
            ordersets:[
                {id:1, date:'2020-05-20'},
                {id:2, date:'2020-05-22'},
                {id:3, date:'2020-05-25'},
                {id:4, date:'2020-05-30'},
            ]
        }
    },
    computed:{
        szer(){return window.innerWidth},
        wys(){return window.innerHeight}
    }
}).$mount('#app')
