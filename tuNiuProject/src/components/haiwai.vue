<style>
.niceplace {
  border-bottom: #935db1 2px solid;
  margin-bottom: 10px;
}
.col {
  background: #935db1;
  color: white;
}
.hwplace {
  margin-top: 10px;
  float: left;
  margin-left: 90px;
}
.hwplace li {
  list-style: none;
  float: left;

  font-size: 14px;
  width: 46px;
  height: 23px;
  line-height: 20px;
  padding: 0 19px;
  text-align: center;
  font-family: 宋体;
  cursor: pointer;
}
.bannerg1{
  width: 1190px;
  height: 235px;
  margin: 0 auto;
  background: white;
}
</style>
<template>
  <div class="bannerg1">
    <div class="niceplace" style="color:#666666">
      <h2 class="nicep" style="color:#935DB1">境外景点</h2>
      <div class="hwplace">
        <ul>
          <li
            v-for="(item,index) in hwList"
            @mouseover="toggleTabs(index)"
            :key="index"
            :class="{col:index==nowIndex}"
          >{{item}}</li>
        </ul>
      </div>
      <a class="more">更多景点></a>
    </div>
    <div
      class="class-item"
      v-for="(item,index) in classList"
      v-show="index!==nowIndex"
      :key="index"
    >
      <div class="play-water">
        <img src="../img/1j.jpg">
        <div class="font">
          <a class="bog" v-text="perfer"></a>
          <a class="big" v-text="people">1489人点评</a>
        </div>
      </div>
      <p class="sanya" v-text="name">三亚千古情</p>
      <p class="pricey" v-text="price">&yen;99起</p>
    </div>
  </div>
</template>
<script>
import css from "../css/app-j.css";
export default {
  data: function() {
    return {
      hwList: ["港澳台", "日本", "东南亚", "澳新", "中东非", "美洲", "欧洲"],
      classList: ["1", "2", "3", "4", "5","6","7"],
      perfer: "满意度:96%",
      people: "4172人点评",
      name: "上海迪士尼乐园",
      price: "￥60",
      nowIndex: 0
    };
  },
  methods: {
    toggleTabs: function(index) {
      this.nowIndex = index;
    }
  }
};
</script>
