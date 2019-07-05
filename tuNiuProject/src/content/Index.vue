<style>

</style>

<template>
    <div class="index_page">
        <IndexBanner></IndexBanner> 
        <IndexHot></IndexHot>
        <IndexList2></IndexList2>
        <IndexList></IndexList>
    </div>
</template>

<script>
import IndexBanner from '../components/IndexBanner.vue';
import IndexHot from "../components/IndexHot.vue"
import IndexList2 from "../components/IndexList2.vue"
import IndexList from "../components/IndexList.vue";

export default {
    components: {
        IndexBanner,IndexList,IndexList2,IndexHot
    }
}
</script>
