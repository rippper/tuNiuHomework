<style>
.modtitle {
  margin-bottom: 50px;
  font-size: 30px;
  color: #000;
  text-align: center;
  font-family: Yahei;
  margin: 40px auto;
}
.modfu {
  width: 1190px;
  height: 703px;
  margin: 0 auto;
}
.lunch {
  width: 1190px;
  height: 508px;
  margin: 0 auto;
}
.modhead {
  width: 1190px;
  height: 15px;
  margin: 0 auto;
  padding-bottom: 13px;
  margin-bottom: 12px;
  border-bottom: 3px solid #e5e5e5;
  line-height: 20px;
  zoom: 1;
}
.head-title {
  float: left;
  margin-right: 50px;
  font-size: 20px;
  font-family: Yahei;
}
a{
    font-family: Yahei;
}
.head-tab {
  float: left;
}
.head-tab a {
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
.head-body {
  width: 1190px;
  height: 460px;
  margin: 0 auto;
}
.tabcnt {
  width: 1190px;
  height: 460px;
  overflow: hidden;
  zoom: 1;
  margin-left: 10px;
}
.tabcnt li {
  width: 285px;
  height: 216px;
  background: white;
  float: left;
  margin-right: 10px;
  margin-bottom: 10px;
}
.boolshit {
  display: block;
  width: 200px;
  height: 140px;
  margin: 0 auto 10px;
}
li > a {
  margin: 0;
}
.carprice {
  width: 54px;
  height: 24px;
  float: left;
  text-align: right;
  font-size: 12px;
}

.detail {
  text-align: right;
  color: #999;
  line-height: 24px;
  zoom: 1;
}

</style>
<template>
  <div class="modfu">
    <div class="modtitle">全国租车精选</div>
    <div class="lunch">
      <div class="modhead">
        <div class="head-title">限时优惠</div>
        <div class="head-tab" v-for="(item,index) in placecarList" :key="index">
          <a @click="live(index)" :class="{ok:index==nowIndex}">{{item}}</a>
        </div>
        <!-- v-text-->
      </div>
      <div class="head-body">
        <ul class="tabcnt">
          <li v-for="(item,index) in carList" :key="index">
            <a>
              <img src="../img/car1j.jpg" alt class="boolshit" />
            <span style="font-size:18px;color:#333333">雪佛兰</span>
            <a>自动挡</a>

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
      placecarList: [
        "三亚",
        "昆明",
        "成都",
        "大理",
        "丽江",
        "西安",
        "上海",
        "深圳"
      ],
      carList: ["1", "2", "3", "4", "5", "6", "7", "8"],
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

