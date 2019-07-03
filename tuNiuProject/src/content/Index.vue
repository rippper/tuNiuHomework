<style>

</style>

<template>
    <div class="app">
        <Indextop></Indextop>
        <Indexhead></Indexhead> 
        <Indexnav></Indexnav>
        <router-view></router-view>  
    </div>
</template>

<script>
    import Indextop from "../components/Indextop.vue";
    import Indexhead from "../components/Indexhead.vue";
    import Indexnav from "../components/Indexnav.vue";
    export default {
        components:{
            Indextop,
            Indexhead,
            Indexnav
        }
    }
</script>


