<template>
    <div >
        <zbtop></zbtop>
        <zbmain></zbmain>
       <zbrank></zbrank>
    </div>
</template>
<script>
import zbtop from "../components/zbtop.vue"
import zbmain from "../components/zbmain.vue"
import zbrank from "../components/zbrank.vue"
export default {
    components:{
        zbtop,
        zbmain,
        zbrank

    }
}
</script>
