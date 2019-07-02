<template>
    <div >
        <tickettop></tickettop>
        <mudi></mudi>
        <haiwai></haiwai>
        <hezuo></hezuo>
        <ticketbottom></ticketbottom>

    </div>
</template>
<script>
import tickettop from "../components/tickettop.vue"
import mudi from "../components/mudi.vue"
import haiwai from "../components/haiwai.vue"
import hezuo from "../components/hezuo.vue"
import ticketbottom from "../components/ticketbottom.vue"
export default {
    components:{
        tickettop , 
        mudi,
        haiwai,
        hezuo,
        ticketbottom
    }
}
</script>
