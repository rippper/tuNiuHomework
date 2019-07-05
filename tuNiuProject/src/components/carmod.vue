<style>
body{
      background-color: #f6f6f6;
}
.class-modtitle {
 
  font-size: 30px;
  color: #000;
  text-align: center;
  font-family: Yahei;
 
}
.class-modfu {
  width: 1190px;
  height: 600px;
  margin: 0 auto;
}
.class-lunch {
  width: 1190px;
  height: 508px;
  margin: 0 auto;
}
.class-modhead {
  width: 1190px;
  height: 15px;
  margin: 0 auto;
  padding-bottom: 13px;
  margin-bottom: 12px;
  border-bottom: 3px solid #e5e5e5;
  line-height: 20px;
  zoom: 1;
}
.class-head-title {
  float: left;
  margin-right: 50px;
  font-size: 20px;
  font-family: Yahei;
}
a {
  font-family: Yahei;
}
.class-head-tab {
  float: left;
}
.class-head-tab a {
  padding: 0 2px 9px;
  margin-right: 35px;
  cursor: pointer;
  line-height: 20px;

  font-family: Yahei;
  font-size: 14px;
}
.ok {
  color: #22c233;
  border-bottom: 3px solid #22c233;
}
.class-head-body {
  width: 1190px;
  height: 460px;
  margin: 0 auto;
}
.class-tabcnt {
  width: 1190px;
  height: 460px;
  overflow: hidden;
  zoom: 1;
  margin-left: 10px;
}
.class-tabcnt li {
  width: 285px;
  height: 216px;
  background: white;
  float: left;
  margin-right: 10px;
  margin-bottom: 10px;
}
.class-boolshit {
  display: block;
  width: 200px;
  height: 140px;
  margin: 0 auto 10px;
}
li > a {
  margin: 0;
}
.class-carprice {
  width: 54px;
  height: 24px;
  float: left;
  text-align: right;
  font-size: 12px;
}

.class-detail {
  text-align: right;
  color: #999;
  line-height: 24px;
  zoom: 1;
}
</style>
<template>
  <div class="class-modfu">
    <div class="class-modtitle">全国租车精选</div>
    <div class="class-lunch" v-for="(item,index) in list" :key="index">
      <div class="class-modhead">
        <div class="class-head-title" >限时优惠</div>
        <div class="class-head-tab" v-for="(it,index) in tablist" :key="index" >
          <a @click="live(index)" :class="{ok:index==nowIndex}">{{it}}</a>
        </div>
        <!-- v-text-->
      </div>
      <div class="class-head-body">
        <ul class="class-tabcnt">
          <li v-for="(it,index) in item.itemlist" :key="index">
            <a>
              <img  :src="it.src" alt class="class-boolshit" />
            <span style="font-size:18px;color:#333333" >{{it.name}}
              <br> 
           <a style="font-size:14px">自动挡</a>
            </span>
           
<span style="margin-left:122px;position:relative;top:-35px;left:0;color:#FF8800">
  <a style="color:#FF8800;font-size:14px">￥</a>
  <a style="color:#FF8800;font-size:22px" >{{it.price}}</a>
  <a style="color:#FF8800;font-size:14px">/天</a> 
  <a style="font-size:14px">起</a></span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data: function() {
    return {
     tablist: ["三亚","昆明","成都","大理","丽江","三亚","上海","深圳"],
 list: [
        {
          itemlist: [
            { name: "雪佛兰", src: "https://m.tuniucdn.com/fb2/t1/G2/M00/EA/E9/Cii-TFgcP3-IL6gKAAAqcOFVPDMAAEKPwFfTGgAACqI583.jpg", price: 10, type: "自动挡" },
            { name: "雪佛兰", src: "https://m.tuniucdn.com/fb2/t1/G2/M00/A2/79/Cii-T1kKwE6IRtadAABcuseMEe4AAJmzQB9uAUAAFzS892.png", price: 30, type: "自动挡" },
            { name: "现代", src: "https://m.tuniucdn.com/fb2/t1/G2/M00/EA/E9/Cii-TlgcP3eIbNXBAAAfobtm0YAAAEKPwELJxEAAB-5078.jpg", price: 30, type: "自动挡" },
            { name: "起亚", src: "https://m.tuniucdn.com/fb2/t1/G2/M00/EA/E7/Cii-TFgcPwqIHuZCAAAUNxYMBv8AAEKPQLvwxsAABRP638.jpg", price: 30, type: "自动挡" },
            { name: "日产", src: "https://m.tuniucdn.com/fb2/t1/G2/M00/EA/E9/Cii-TlgcPyyIZUDJAAAYmAVW51wAAEKPgERrFAAABiw727.jpg", price: 30, type: "自动挡" },
            { name: "大众", src: "https://m.tuniucdn.com/fb2/t1/G2/M00/EA/E1/Cii-TlgcPbuIAV34AAAX8-Eb2iMAAEKOQFoLvoAABgL029.jpg", price: 30, type: "自动挡" },
            { name: "福特", src: "https://m.tuniucdn.com/fb2/t1/G2/M00/EB/19/Cii-TlgcTIKIIhfMAAAjkbdTQQAAAEKcQP_ksYAACOp443.jpg", price: 30, type: "自动挡" },
            { name: "别克", src: "https://m.tuniucdn.com/fb2/t1/G2/M00/EA/E0/Cii-TlgcPYeIcL6oAAAX1_wjZsIAAEKOAGAWIsAABfv246.jpg", price: 30, type: "自动挡" },
          ],
          
        },
        
        
       
     
      ],
     

      nowIndex: 0
    };
  },
  methods: {
    live: function(index) {
      this.nowIndex = index;
    }
  }
};
</script>

