import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import Index from "./content/Index.vue";
import Bbb from "./content/Bbb.vue";

import HAT from "./content/HotelAndScenery.vue";
import LocalPlay from "./content/LocalPlay.vue";
import WiFi from "./content/Wifi.vue"

Vue.use(VueRouter);

const routes = [
    // {
    //     path:'/', component:Index,
    //     // children:[
    //     //     {path:'hotel', component:HAT},
    //     //     {path:'play', component:LocalPlay}
    //     // ]
    // },
    {
        path:'/play', 
        component:LocalPlay
    },
    {
        path:'/wifi', 
        component:WiFi
    },
    {
        path:"/bbb",
        component:Bbb
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