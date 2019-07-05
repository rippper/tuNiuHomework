<style>
.mudi-main{
        width: 1190px;
        margin: 0 auto;
    }
</style>


<template>
    <div class="mudi-main">
        <mudicantuantop></mudicantuantop>
        <mudicantuanmian></mudicantuanmian>
    </div>
</template>
<script>
import mudicantuantop from "../components/mudicantuantop.vue"
import mudicantuanmian from "../components/mudicantuanmain.vue"
export default {
    components:{
        mudicantuantop,
        mudicantuanmian , 
        
    }
}
</script>
