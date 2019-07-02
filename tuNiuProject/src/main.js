import Vue from "vue";
import App from "./App.vue"
import VueRouter from "vue-router";
<<<<<<< HEAD
import Mudi from "./components/mudi.vue"
import Demo1 from "./components/Demo1.vue";
=======
import Index from "./content/Index.vue";
import Bbb from "./content/Bbb.vue";

import HAT from "./content/HotelAndScenery.vue"
>>>>>>> 1663721e4f2ce930b653f470ad8f5cba7041006f

import ticket from "./compent/ticket.vue"
import tickettop from "./components/tickettop.vue"
import haiwai from "./components/haiwai.vue"
import hezuo from "./components/hezuo.vue"
import ticketbottom from "./components/ticketbottom.vue";
import cartop from "./components/cartop.vue"
import carmod from "./components/carmod.vue"

 Vue.use(VueRouter);

const routes=[
	{
		path:"/",
		component:Demo1
	}
]
const router=new VueRouter({
	routes
}); 



var Event=new Vue();
Vue.prototype.Event=Event;

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
<<<<<<< HEAD
    el:"#app",
    render:function(h){
        return h(tickettop); // Demo
    },
    router
});
=======
    el:'#app',
    render:function(CreateElement){
        return CreateElement(App)
    },
    router
})
>>>>>>> 1663721e4f2ce930b653f470ad8f5cba7041006f
