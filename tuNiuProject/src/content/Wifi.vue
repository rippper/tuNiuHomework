<style>
</style>

<template>
    <div class="wifi-main">
        <WifiTop></WifiTop>
        <WifiShop></WifiShop>
        <WifiList></WifiList>
    </div>
</template>

<script>
import WifiTop from "../components/WifiTop.vue";
import WifiShop from "../components/WifiShop.vue";
import WifiList from "../components/WifiList.vue";

export default {
    data () {
        return {
            
        }
    },
    components:{
        WifiTop,
        WifiShop,
        WifiList
    }
}
</script>
