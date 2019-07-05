<style>
body {
  background: white;
}
.whool-mod {
  width: 1190px;
  height: 410px;
  margin: 0 auto;
  
}
.modbox-main {
  width: 280px;
  height: 410px;
  float: left;
  background: #f6f6f6;
  margin-left: 8px;
  margin-right: 8px;
}
.whimg {
  width: 280px;
  height: 280px;
  overflow: hidden;
  position: relative;
}
.modbox-main a{
    position: relative;
    top: -180px;
    left: 0;
}
.whoolinto{
    width: 280px;
  height: 130px;
  
}
.p-soft{
    width: 210px;
  height: 90px;
    height: 100%;
    line-height: 22px;
    overflow: hidden;
    position: relative;
    top: -42px;
    left: 32px;
    
}



</style>
<template>
  <div class="whool-main">
    <div class="class-modtitle">车轮下的中国</div>
    <div class="whool-mod">
      <div class="modbox-main" v-for="(item,index) in whoollist" :key="index">
        <div class="whimg">
            <img src="http://car.tuniu.com/car/static/images/theme1.png" alt="">
        </div>
        <a
          style="margin-bottom: 20px;color:white;
    font-size: 22px;
    font-weight: 700;
    text-align: center;
        padding: 0 30px;"
        >自驾多少公里才是终点</a>
        <br />
        <a
          style="margin-bottom: 20px;color:white;
    font-size: 14px;
    text-align: center;
        padding: 20px 47px; top:-160px"
        >征服天地,环游世界是一种胸怀</a>
        <div class="whoolinto">

<p class="p-soft" style="font-size:14px;
    color: #333333;">
总是羡慕别人的生活方式，总是幻想自己何时能来一场说走就走的旅行，我们总是找各种理由为自己找借口，可是你不出发，你永远不知道自己能走多远。
</p>

        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data: function() {
    return {
      whoollist: ["1", "2", "3", "4"]
    };
  }
};
</script>
