<style>
.giftlunbo{
        position: relative;
    overflow: hidden;
    width: 100%;
    height: 500px;
}
.giqiye{
position: relative;
top: 0;
left: 0;
}
.gigeren{
position: relative;
top: -440px;
left: 1903px;
}
.diss{
    left: 0;
    background: white;
    color: white;
    opacity: 1;
    transition:all .5s ;
}
.dibb{
    left: 0;
    background: white;
    color: white;
    opacity: 1;
    
}
.mtfuc{
    position: absolute;
    bottom: 70px;
    left: 50%;
    z-index: 15;
    width: 60%;
    margin-left: -30%;
    padding-left: 0;
    list-style: none;
    text-align: center;
    
}
.mtfuc li{
display: inline-block;
    width: 10px;
    height: 10px;
    margin: 1px;
    text-indent: -999px;
    border: 1px solid #fff;
    border-radius: 10px;
    cursor: pointer;
    background-color: #000 \9;
   margin-right: 5px;
}
</style>

<template>
    <div class="giftlunbo" >
<div class="giqiye" :key="index=0" :class="{diss:index==nowIndex}">
<img src="../img/banner_qiye.jpg" alt="">
</div>
<div class="gigeren" :key="index=1" :class="{dibb:index==nowIndex}">
<img src="../img/banner_geren.png" alt="">
</div>
<ol class="mtfuc">
    <li v-for="(item,index) in ligiftlist" :key="index" @click="toggleTabs(index)"  :class="{diss:index==nowIndex}"></li>
    
</ol>
    </div>


</template>

<script>
import { setTimeout } from 'timers';
export default {
data : function () {
    return{
     ligiftlist:["1","2"],
      nowIndex:0
    };
    
},

methods:{
  toggleTabs: function(index) {
      this.nowIndex = index;
      
    }
}

}
</script>


