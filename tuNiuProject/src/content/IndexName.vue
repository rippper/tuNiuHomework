<style>

</style>

<template>
    <div class="index-main">
        <IndexList2></IndexList2>
        <IndexList></IndexList>
    </div>
</template>
<script>

import IndexList2 from "../components/IndexList2.vue"
import IndexList from "../components/IndexList.vue";

export default {
    data() {
        return {
            
        }
    },
    components:{
        IndexList,IndexList2
    }
}
</script>
