import Vue from "vue";
import App from "./App.vue"
import VueRouter from "vue-router";
import Mudi from "./components/mudi.vue"
import Demo1 from "./components/Demo1.vue";

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

new Vue({
    el:"#app",
    render:function(h){
        return h(tickettop); // Demo
    },
    router
});
