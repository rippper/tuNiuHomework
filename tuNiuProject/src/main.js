import Vue from "vue";

import App from "./App.vue"
import GiftCard from "./content/giftcard.vue"
import Ticket from "./content/ticket.vue"
import Usecar from "./content/usecar.vue"
import Memgift from "./content/memgift.vue"
import vClickOutside from 'v-click-outside';
import VueRouter from "vue-router";
import Common from "./content/Common.vue";


import Bbb from "./content/Bbb.vue";

import Index from "./content/Index.vue";
import HAT from "./content/HotelAndScenery.vue";
import LocalPlay from "./content/LocalPlay.vue";
import WiFi from "./content/Wifi.vue"
import Gta from "./content/gta.vue"
import Guonei from "./content/Guonei.vue"
import Zhoubian from "./content/zhoubian.vue"
import Banzizhu from "./content/Banzizhu.vue"
import Dangdi from "./content/dangdi.vue"
import Dingzhi from "./content/dingzhi.vue"
import Mudi from "./content/mudicantuan.vue"
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
            { path: 'giftcard',component: GiftCard},
            { path: 'ticket',component: Ticket},
            { path: 'usercar',component:Usecar},
            { path: 'memgift',component: Memgift},
            { path: 'gta',component:Gta },
            { path: 'guonei',component:Guonei },
            { path: 'zhoubian',component:Zhoubian },
            { path: 'banzizhu',component:Banzizhu },
            { path: 'dangdi',component:Dangdi },
            { path: 'dingzhi',component:Dingzhi },
            { path: 'mudicantuan',component:Mudi }
        ]
    },

    {
        path: "/bbb",
        component: Bbb
    }

]
const router=new VueRouter({
	routes
}); 



var Event=new Vue();
Vue.prototype.Event=Event;

new Vue({
    el: '#app',
    render: function (CreateElement) {
        return CreateElement(App)
    },
    router
});
