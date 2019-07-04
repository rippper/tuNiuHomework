import Vue from "vue";
import App from "./App.vue"
import VueRouter from "vue-router";
import Demo1 from "./components/Demo1.vue";

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
        return h(App); // Demo
    },
    router
});
