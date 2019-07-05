<style>
.class-banner {
  width: 1190px;
  height: 428px;
  margin: 0 auto;
  background: white;
}
.niceplace {
  width: 1190px;
  height: 40px;
  color: #07afab;
  border-bottom: #07afab 2px solid;

  display: block;
}
 
.more {
  color: #999999;
  height: 30px;
  font-size: 12px;
  float: right;
  line-height: 30px;
  margin-top: 5px;
}
.nicetitle {
  margin-top: 10px;
  float: left;
  margin-left: 90px;
}
.nicep {
  float: left;
}

.class-left {
  width: 191px;
  height: 365px;
  color: white;
  margin-top: 19px;
  float: left;
}
.class-zuo {
  width: 95px;
  height: 365px;
  float: left;
  border-right: 1px dashed #666;
}
.class-you {
  width: 95px;
  height: 365px;
  float: left;
}
.class-show {
  width: 95px;
  height: 95px;
  color: white;
  background: #24adc6;
  font-size: 16px;
  cursor: pointer;
}
.class-show a {
  box-sizing: border-box;
  text-align: center;
  display: block;
  padding-top: 35px;
}
.class-life {
  width: 95px;
  height: 135px;
  background: #0fa8a9;
  color: white;
  font-size: 16px;
  border-top: 1px dashed #666;
  border-bottom: 1px dashed #666;
  cursor: pointer;
}
.class-life a {
  line-height: 135px;
  text-align: center;
  display: block;
}
.class-bai {
  width: 95px;
  height: 135px;
  background: #50c389;
  color: white;
  font-size: 16px;
  cursor: pointer;
}
.class-bai a {
  line-height: 135px;
  text-align: center;
  display: block;
}
.class-happy {
  width: 95px;
  height: 135px;
  background: #50c389;
  color: white;
  font-size: 16px;
  cursor: pointer;
}
.class-happy a {
  line-height: 135px;
  text-align: center;
  display: block;
}

.class-nike {
  width: 95px;
  height: 135px;
  background: #24adc6;
  color: white;
  font-size: 16px;
  border-top: 1px dashed #666;
  border-bottom: 1px dashed #666;
  cursor: pointer;
}
.class-nike a {
  line-height: 135px;
  text-align: center;
  display: block;
}
.class-check {
  width: 95px;
  height: 95px;
  color: white;
  cursor: pointer;

  background: url(http://img2.tuniucdn.com/img/20150115/entryticket/readmore-bg.png);
  background-position: -30px -85px;
}
.class-check a {
  font-size: 12px;
  width: 95px;
  height: 12px;
  cursor: pointer;
  text-align: center;
  display: block;
}
.class-check img {
  width: 50%;
  height: 50%;
  position: relative;
  top: 10px;
  left: 22px;
}
div.show:hover {
  opacity: 0.2;
  color: white;
}
div.life:hover {
  opacity: 0.2;
  color: white;
}
div.bai:hover {
  opacity: 0.2;
  color: white;
}
.nicetitle li {
  list-style: none;
  float: left;
  color: #666666;
  font-size: 14px;
  width: 28px;
  height: 23px;
  line-height: 20px;
  padding: 0 19px;
  text-align: center;
  font-family: 宋体;
  cursor: pointer;
}
.light{
    background: #07AFAB;
    color: white;
}
.class-right{
    width: 991px;
    height: 380px;
    float: right;
    margin-top: 19px;
}
.class-item{
    width: 190px;
    height: 177px;
    border: 1px solid #ddd;
    box-shadow: 0 1px 1px #ddd;
    float: left;
    margin-left: 5px;
    margin-bottom: 9px;
}
.play-water{
    width: 188px;
    height:110px;
    overflow: hidden;

}

.class-font{
    width: 188px;
    height: 23px;
    position: relative;
    top: -27px;
    left: 0;

}
.bog{
    position: relative;
    top: 0;
    left: 0;
    color:black;        /*#CCCCCC*/
    font-size: 12px;
    font-family: 宋体;
margin-right: 35px;
margin-left: 10px;

}
.class-big{
    position: relative;
    top: 0;
    left: 0;
    color:black;        /*#CCCCCC*/
    font-size: 12px;
    font-family: 宋体;
margin-right: 35px;
margin-left: 10px; 
}
.sanya{
    
    text-overflow: ellipsis;
    white-space: nowrap;
    color: #404040;
    font-size: 16px;
    font-family: Microsoft Yahei,宋体;
    margin-left: 10px;
    margin-top: 10px;
}
.pricey{
color: #FF6600;
font-size: 16px;
    font-family: Microsoft Yahei,宋体;
    margin-left: 10px;
    margin-top: 10px;
}
li{
    list-style: none;
}
</style>

<template>
  <div class="app">
    <div class="class-banner">
      <div class="niceplace">
        <h2 class="nicep" style="height: 30px;
  font-size: 20px;
  line-height: 20px;">身边景点</h2>
        <div class="nicetitle">
          <ul>
            <li
              v-for="(item,index) in tabsParam"
              @mouseover="toggleTabs(index)"
              :key="index"
              :class="{light:index==nowIndex}"
            >{{item}}</li>
          </ul>
        </div>
        <a class="more">更多景点></a>
      </div>
      <div class="class-left">
        <div class="class-zuo" v-for="(it,ind) in blockList " :key="ind">
          <div class="class-show">
            <a class="block" v-for="(it,index) in blockList" :key="index" v-text="it.content"></a>
          </div>
          <div class="class-life">
            <a class="block" v-for="(it,index) in blockList" :key="index" v-text="it.happy"></a>
          </div>
          <div class="class-bai">
            <a class="block" v-for="(it,index) in blockList" :key="index" v-text="it.show"></a>
          </div>
        </div>
        <div class="class-you">
          <div class="class-happy">
            <a class="block" v-for="(it,index) in blockList" :key="index" v-text="it.life"></a>
          </div>
          <div class="class-nike">
            <a class="block" v-for="(it,index) in blockList" :key="index" v-text="it.bai"></a>
          </div>
          <div class="class-check">
            <img
              src="http://img2.tuniucdn.com/img/20150115/entryticket/icon-readmore.png"
              alt="查看更多"
              style="width:100%;height:100%"
            >
            <a>查看更多</a>
          </div>
        </div>
      </div>
      <div class="class-right" v-for="(item,index) in rightList" v-show="index==nowIndex" :key="index">
        <div
          class="class-item"
          v-for="(item,index) in classList"
          v-show="index!==nowIndex"
          :key="index"
        >
          <div class="play-water">
            <img src="../img/1j.jpg" style="width:100%;height:100%">
            <div class="class-font">
              <a class="bog" v-text="perfer" ></a>
              <a class="class-big" v-text="people">1489人点评</a>
            </div>
          </div>
          <p class="sanya" v-text="name" >三亚千古情</p>
          <p class="pricey" v-text="price" >&yen;99起</p>
        </div>
      </div>
    </div>
  
  </div>


</template>
<script>
import css from "../css/app-j.css";
import mudi from "./mudi.vue";
export default {
  data: function() {
    return {
      blockList: [
        {
          content: "演出表演",
          life: "生活",
          bai: "名胜风光",
          happy: "主题乐园",
          show: "古镇园林"
        }
      ],
      rightList: ["1", "2", "3", "4", "5", "6", "7", "8"],
      classList: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11"],
      
perfer:"满意度:96%",
people:"4172人点评",
name:"上海迪士尼乐园",
price:"￥60",

        
   
      
    
      hzList: [
        {
          content: "演出表演",
          life: "生活",
          bai: "节假日旅游",
          happy: "主题乐园",
          show: "城市生活"
        }
      ],
      list: [""],
      tabsParam: [
        "精选",
        "杭州",
        "上海",
        "宁波",
        "湖州",
        "绍兴",
        "嘉兴",
        "三亚"
      ], //（这个也可以用对象key，value来实现）
      nowIndex: 0 //默认第一个tab为激活状态
    };
  },
  methods: {
    // 鼠标移入加入class
    toggleTabs: function(index) {
      this.nowIndex = index;
    }
  }
};

</script>




