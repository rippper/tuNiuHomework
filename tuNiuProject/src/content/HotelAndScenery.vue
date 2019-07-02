<style>
    .hotel-main{
        width: 1190px;
        margin: 0 auto;
    }
</style>

<template>
    <div class="hotel-main">
        <HASTop></HASTop>
        <HASMain></HASMain>
    </div>
</template>

<script>
import HASTop from "../components/HASTop.vue";
import HASMain from "../components/HASMain.vue";

export default {
    data () {
        return {
            
        }
    },
    components:{
        HASTop,
        HASMain
    }
}
</script>
