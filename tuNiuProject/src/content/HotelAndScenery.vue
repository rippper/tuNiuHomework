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
        <HASRank></HASRank>
    </div>
</template>

<script>
import HASTop from "../components/HASTop.vue";
import HASMain from "../components/HASMain.vue";
import HASRank from "../components/HASRank.vue";


export default {
    data () {
        return {
            
        }
    },
    components:{
        HASTop,
        HASMain,
        HASRank
    }
}
</script>
