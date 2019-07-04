<style>
    .localplay-main{
        width: 1190px;
        margin: 0 auto;
    }
</style>

<template>
    <div class="localplay-main">
        <LoPlTop></LoPlTop>
        <LoPlMain></LoPlMain>
    </div>
</template>

<script>
import LoPlTop from "../components/LoPlTop.vue";
import LoPlMain from "../components/LoPlMain.vue";


export default {
    data () {
        return {
            
        }
    },
    components:{
        LoPlTop,
        LoPlMain
    }
}
</script>
