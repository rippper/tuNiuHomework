<template>
    <div >
        <cartop></cartop>
        <carmod></carmod>
        <carwhool></carwhool>
        <num1></num1>
        <order></order>

    </div>
</template>

<script>
import cartop from "../components/cartop.vue"
import carmod from "../components/carmod.vue"
import carwhool from "../components/carwhool.vue"
import num1 from "../components/num1.vue"
import order from "../components/order.vue"
export default {
    components:{
        cartop,
        carmod,
        carwhool,
        num1,
        order
    }
}
</script>
