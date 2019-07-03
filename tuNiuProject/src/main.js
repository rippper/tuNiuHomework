import Vue from "vue";
import App from "./App.vue";
import vClickOutside from 'v-click-outside';
import VueRouter from "vue-router";
import Index from "./content/Index.vue";
import Bbb from "./content/Bbb.vue";

import HAT from "./content/HotelAndScenery.vue"

Vue.use(VueRouter);
Vue.use(vClickOutside);

const routes = [
    {
        path:'/', component:Index,
        children:[
            {path:'hotel', component:HAT}
        ]
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