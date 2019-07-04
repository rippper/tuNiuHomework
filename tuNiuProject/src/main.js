import Vue from "vue";
import App from "./App.vue";
import vClickOutside from 'v-click-outside';
import VueRouter from "vue-router";
import Common from "./content/Common.vue";
import Index from "./content/Index.vue";
import Bbb from "./content/Bbb.vue";

import HAT from "./content/HotelAndScenery.vue";
import LocalPlay from "./content/LocalPlay.vue";
import WiFi from "./content/Wifi.vue"

Vue.use(VueRouter);
Vue.use(vClickOutside);

const routes = [
    {
        path: '/', redirect:"/common/index",
    },
    {
        path: '/common', component: Common,
        children: [
            { path: 'index', component: Index},
            { path: 'hotel', component: HAT },
            { path: 'play', component: LocalPlay },
            { path: 'wifi',component: WiFi},
        ]
    },

    {
        path: "/bbb",
        component: Bbb
    }
]

const router = new VueRouter({
    routes
})

new Vue({
    el: '#app',
    render: function (CreateElement) {
        return CreateElement(App)
    },
    router
})