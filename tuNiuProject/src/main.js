import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import Index from "./content/Index.vue";
import Bbb from "./content/Bbb.vue";

import HAT from "./content/HotelAndScenery.vue"

Vue.use(VueRouter);

const routes = [
    {
        path:'/',
        component:Index
    },
    {
        path:"/bbb",
        component:Bbb
    },
    {
        path:"/hotel",
        component:HAT
    }
]

const router = new VueRouter({
    routes
})

new Vue({
    el:'#app',
    render:function(CreateElement){
        return CreateElement(App)
    },
    router
})