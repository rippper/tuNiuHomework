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
top: -500px;
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
.class-lijidingzhi{
  width: 1903px;
  height: 158px;
  background: #F2F2F2;
   margin: 0 auto;
  
}

</style>

<template>
    <div class="giftlunbo" >
<div class="giqiye" :key="index=0" :class="{diss:index==nowIndex}">
<img src="https://m3.tuniucdn.com/fb2/t1/G4/M00/8C/2C/Cii_J10TJUiIaG39AAkDYW4CrOUAAHakwMy1psACQN581.jpeg" alt="" style="width:100%;height:100%">
</div>
<div class="gigeren" :key="index=1" :class="{dibb:index==nowIndex}">
<img src="https://m.tuniucdn.com/fb2/t1/G4/M00/CA/FA/Cii_J1x8g9aIdxImAAOof3Cac50AAEQ7QIBUkgAA6iX93.jpeg" alt="" style="width:100%;height:100%">
</div>
<ol class="mtfuc">
    <li v-for="(item,index) in ligiftlist" :key="index" @mouseover="toggleTabs(index)"  :class="{diss:index==nowIndex}"></li>
    
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


