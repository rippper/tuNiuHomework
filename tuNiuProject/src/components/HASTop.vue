<style>
.drive-tour {
  width: 470px;
  height: 47px;
  float: left;
}
.hotel-head-right {
  float: left;
  overflow: hidden;
}
.sati-rate,
.fans-count,
.comments-count {
  float: left;
  margin-right: 15px;
  height: 52px;
}
.sati-rate {
  line-height: 48px;
}
.fans-count {
  line-height: 52px;
}
.comments-count {
  line-height: 52px;
  margin-right: 30px;
}
.promotion {
  float: left;
  margin-right: 15px;
  position: relative;
  line-height: 16px;
  top: 12px;
}
.gticon {
  background: url("../img/gticon.png")
    no-repeat;
}
.tip {
  width: 160px;
  height: 20px;
  line-height: 20px;
  padding-left: 10px;
  color: #d19c60;
  font-size: 11px;
  margin-top: 5px;
  background-position: 0 -551px;
}
.icon {
  position: relative;
  top: 23px;
  float: left;
  margin-right: 5px;
}
.icon-sati {
  top: 20px;
  background: url("../img/icon-sati.png");
  width: 13px;
  height: 14px;
}
.icon-fans {
  background: url("../img/icon-fans.png");
  width: 12px;
  height: 11px;
}
.icon-comments {
  background: url("../img/icon-comments.png");
  width: 13px;
  height: 11px;
}
.orange,
.navi a:hover {
  color: #ff8800;
  font-style: normal;
}
.big {
  font-size: 24px;
}

.navi {
  float: left;
  width: 190px;
}
.navi li {
  height: 56px;
  padding: 5px 15px 12px;
  position: relative;
  background: #595959;
  color: #404040;
}
.navi h4 {
  font-size: 15px;
  color: #fff;
  line-height: 22px;
}
.i {
  display: inline-block;
  width: 14px;
  height: 16px;
  background: url("../img/gticon.png") no-repeat;
  margin-right: 5px;
}
.i1 {
  background-position: 0 -604px;
}
.i2 {
  background-position: -14px -604px;
}
.i3 {
  background-position: -30px -604px;
}
.i4 {
  background-position: -30px -604px;
}
.i5 {
  background-position: -63px -604px;
}

i.icon-youjiantou {
  position: absolute;
  top: 10px;
  right: 5px;
  font-size: 18px;
  color: #fff;
  width: 18px;
  height: 18px;
}

.navi li > a {
  color: #bbb;
  display: inline-block;
  padding: 0 5px 0 0;
  font-size: 13px;
  line-height: 20px;
}
.navi li:hover {
  background: #2f3437;
}
.navi li:hover .outer1,
.navi li:hover .outer2,
.navi li:hover .outer3,
.navi li:hover .outer4 {
  display: block;
}
.outer {
  width: 530px;
  height: 370px;
  position: absolute;
  left: 100%;
  background: white;
  z-index: 10;
}
.outer1 {
  display: none;
  top: -73px;
}
.outer2 {
  display: none;
  top: -146px;
}
.outer3 {
  display: none;
  top: -219px;
}
.outer4 {
  display: none;
  top: -292px;
}

.clearfix {
  float: left;
  margin-left: 15px;
  height: 100px;
  border: none;
  width: 245px;
  padding-bottom: 10px;
  padding-top: 10px;
  background: #fff;
}
.clearfix dd {
  font-size: 14px;
  line-height: 30px;
  font-weight: 700;
}
.clearfix a {
  font-size: 13px;
  line-height: 20px;
  padding: 0 5px;
}
.slideshow {
  width: 990px;
  height: 370px;
  float: right;
  position: relative;
  overflow: hidden;
}
.slideshowbox {
  position: absolute;
  left: 0;
  width: 1980px;
  transition: all 1s;
}
.slideshowbox .one {
  float: left;
  width: 990px;
}
.slideshowbox .two {
  float: left;
  width: 990px;
}
.slideshowbox a {
  float: left;
}
.slideshow img:hover{
    opacity: 0.8;
}
a.tall {
  float: right;
}
.button {
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto;
}
.prev {
  left: 0;
}
.next {
  right: 0;
}

.dotlist {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 20px;
  margin: auto;
  width: 54px;
  padding: 3px 0;
  background: rgba(0, 0, 0, 0.6);
  border-radius: 10px;
}
.dotlist li {
  float: left;
  width: 12px;
  height: 12px;
  background: #cccccc;
  border-radius: 50%;
  margin-left: 10px;
}
li.dot-active {
  background: #ff8800;
}
</style>

<template>
  <div class="hotel-top clear">
    <div class="hotel-head clear">
      <img
        class="drive-tour"
        src="../img/Cii-VVmbyyeIaFYGAABv8AsKY8YAAAQ_APHP8wAAHAI99.jpg"
        alt="自驾游"
        srcset
      >
      <div class="hotel-head-right clear">
        <div class="sati-rate">
          <span class="icon-sati icon"></span>
          <span>满意度</span>
          <em class="orange big">95</em>
          <span class="orange">%</span>
        </div>

        <div class="fans-count">
          <span class="icon-fans icon"></span>
          <span>已关注人数：</span>
          <em class="orange">3258999人</em>
        </div>

        <div class="comments-count">
          <span class="icon-comments icon"></span>
          <span>已有点评数：</span>
          <em class="orange">153094条</em>
        </div>

        <div class="promotion">
          <p class="gticon tip">网上预订优惠 点评还可返现</p>
        </div>
      </div>
    </div>
    <div class="hotel-main clear">
      <ul class="navi">
        <li>
          <h4>
            <i class="i1 i"></i>游玩天数
          </h4>
          <i class="iconfont icon-youjiantou"></i>

          <a href target="_blank">2天1晚</a>|
          <a href target="_blank">3天2晚</a>|
          <a href target="_blank">4天3晚</a>|
        </li>
        <li>
          <h4>
            <i class="i2 i"></i>热门景点
          </h4>
          <i class="iconfont icon-youjiantou"></i>

          <a href target="_blank">天目湖</a>|
          <a href target="_blank">千岛湖</a>|
          <a href target="_blank">恐龙园</a>|
          <a href target="_blank">迪士尼</a>|
          <a href target="_blank">黄山</a>|
          <a href target="_blank">拈花湾</a>
          |
          <div class="outer1 clear outer">
            <dl v-for="(item, index) in hotScenics" :key="index" class="clearfix">
              <dd v-text="item.area"></dd>
              <dt>
                <a
                  href
                  target="_blank"
                  v-for="(it, index) in item.scen"
                  :key="index"
                  v-text="it"
                  :class="[ index<=3 ? 'orange' : '' ]"
                ></a>
              </dt>
            </dl>
          </div>
        </li>
        <li>
          <h4>
            <i class="i3 i"></i>热门目的地
          </h4>
          <i class="iconfont icon-youjiantou"></i>

          <a href target="_blank">常州</a>|
          <a href target="_blank">上海</a>|
          <a href target="_blank">南京</a>|
          <a href target="_blank">黄山</a>|
          <a href target="_blank">杭州</a>|
          <a href target="_blank">安吉</a>|
          <a href target="_blank">宁波</a>|
          <a href target="_blank">无锡</a>
          |
          <div class="outer2 clear outer">
            <dl v-for="(item, index) in hotPlaces" :key="index" class="clearfix">
              <dd v-text="item.area"></dd>
              <dt>
                <a
                  href
                  target="_blank"
                  v-for="(it, index) in item.scen"
                  :key="index"
                  v-text="it"
                  :class="[ index<=3 ? 'orange' : '' ]"
                ></a>
              </dt>
            </dl>
          </div>
        </li>
        <li>
          <h4>
            <i class="i4 i"></i>特色主题
          </h4>
          <i class="iconfont icon-youjiantou"></i>

          <a href target="_blank">乐园</a>|
          <a href target="_blank">海滨</a>|
          <a href target="_blank">房车</a>|
          <a href target="_blank">山水</a>|
          <a href target="_blank">古镇</a>|
          <a href target="_blank">城市</a>|
          <a href target="_blank">亲子</a>|
          <a href target="_blank">租车</a>
          |
          <div class="outer3 clear outer">
            <dl v-for="(item, index) in hotMain" :key="index" class="clearfix">
              <dd v-text="item.area"></dd>
              <dt>
                <a
                  href
                  target="_blank"
                  v-for="(it, index) in item.scen"
                  :key="index"
                  v-text="it"
                  :class="[ index<=3 ? 'orange' : '' ]"
                ></a>
              </dt>
            </dl>
          </div>
        </li>
        <li>
          <h4>
            <i class="i5 i"></i>热门酒店
          </h4>
          <i class="iconfont icon-youjiantou"></i>

          <a href target="_blank">玩具总动员</a>|
          <a href target="_blank">拈花湾</a>|
          <a href target="_blank">横店影视城</a>|
          <a href target="_blank">东方盐湖城</a>
          |
          <div class="outer4 clear outer">
            <dl v-for="(item, index) in hotHotel" :key="index" class="clearfix">
              <dd v-text="item.area"></dd>
              <dt>
                <a
                  href
                  target="_blank"
                  v-for="(it, index) in item.scen"
                  :key="index"
                  v-text="it"
                  :class="[ index<=3 ? 'orange' : '' ]"
                ></a>
              </dt>
            </dl>
          </div>
        </li>
      </ul>

      <div class="slideshow">
        <div class="slideshowbox clear" id="slideshowbox">
          <div class="one">
            <a href target="_blank">
              <img src="../img/Cii-sly9RBKIT4NoAACTlsAOb4kAAVRCwIPBaIAAJOu18.jpg" alt>
            </a>
            <a href target="_blank">
              <img src="../img/Cii-TFfp3dyIGI5kAADyxM-a89MAACyuQN0fyYAAPLc39.jpg" alt>
            </a>
            <a class="tall" href target="_blank">
              <img src="../img/Cii_J10Iof-IdPHMAACdJqzrEdwAAHO0wBrs4EAAJ0-44.jpg" alt>
            </a>
            <a href target="_blank">
              <img src="../img/Cii-slzb242IAeP5AAC5d73JMOUAAV0OQHM_SoAALmP44.jpg" alt>
            </a>
            <a href target="_blank">
              <img src="../img/Cii-VVz4qPuIEB0_AAJcnoaAVOEAAG2XgC4CsIAAly247.jpg" alt>
            </a>
          </div>
          <div class="two">
            <a href target="_blank">
              <img src="../img/Cii-s10S2kyIKE5GAAEVletxUREAAXJiAP2jyMAARWt98.jpg" alt>
            </a>
            <a href target="_blank">
              <img src="../img/Cii-Tlfp3d2IM3t6AADbCNWMyTkAACyuQN6qNcAANsg52.jpg" alt>
            </a>
            <a class="tall" href target="_blank">
              <img src="../img/Cii-tF0S1tWIU-ZxAAKFjQTYI8AAAXJggP8jI0AAoWl11.jpg" alt>
            </a>
            <a href target="_blank">
              <img src="../img/Cii-s1qXxKaIXjT-AACRBO_ul4gAADyFgIhYrcAAJEc17.jpg" alt>
            </a>
            <a href target="_blank">
              <img src="../img/Cii-TFfp3d2IZTzEAAFuclmhFP8AACyuQN5Ok0AAW6K86.jpg" alt>
            </a>
          </div>
        </div>
        <img class="prev button" src="../img/prev.png" alt="左按钮" @click="prevButton()">
        <img class="next button" src="../img/next.png" alt="右按钮" @click="nextButton()">

        <ul class="dotlist" @click="changeButton()" src="a.src">
          <li class="dot-active"></li>
          <li></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      hotScenics: [
        {
          area: "常德",
          scen: [
            "中华恐龙园",
            "淹城野生动物园",
            "春秋乐园",
            "环球动漫嬉戏谷",
            "天目湖",
            "南山竹海",
            "涵田半山温泉",
            "御水温泉",
            "恐龙谷温泉"
          ]
        },
        {
          area: "杭州",
          scen: [
            "千岛湖",
            "西湖",
            "宋城",
            "西溪湿地",
            "浙西大峡谷",
            "大明山",
            "瑶琳仙境",
            "灵隐寺",
            "云曼温泉",
            "藏龙百瀑",
            "凯蒂猫家园"
          ]
        },
        {
          area: "上海",
          scen: [
            "上海迪士尼",
            "上海欢乐谷",
            "野生动物园",
            "东方明珠",
            "杜莎夫人蜡像馆",
            "上海之根雪浪湖温泉",
            "上海浦江源温泉"
          ]
        },
        {
          area: "苏州",
          scen: [
            "苏州乐园",
            "糖果乐园",
            "周庄",
            "同里",
            "金鸡湖",
            "摩天轮公园",
            "锦溪古镇",
            "天颐温泉",
            "四季悦温泉",
            "树山温泉"
          ]
        },
        {
          area: "宁波",
          scen: [
            "四明山",
            "罗蒙环球乐园",
            "方特东方神话",
            "达蓬山",
            "奉化溪口",
            "海皮岛",
            "松兰山海滨",
            "浙东小九寨",
            "象山"
          ]
        },
        {
          area: "安徽",
          scen: [
            "黄山",
            "宏村",
            "西递",
            "九华山",
            "牯牛降",
            "天柱山",
            "黄山温泉",
            "芜湖方特",
            "黄山醉温泉",
            "房车"
          ]
        }
      ],
      hotPlaces: [
        {
          area: "江苏",
          scen: [
            "常州",
            "天目湖",
            "苏州",
            "无锡",
            "南京",
            "扬州",
            "舟山",
            "南通",
            "镇江",
            "连云港",
            "泰州"
          ]
        },
        {
          area: "浙江",
          scen: [
            "千岛湖",
            "杭州",
            "横店",
            "安吉",
            "乌镇",
            "西塘",
            "普陀山",
            "象山",
            "嵊泗",
            "宁波",
            "桐庐",
            "绍兴",
            "临安",
            "台州"
          ]
        },
        {
          area: "安徽",
          scen: [
            "黄山",
            "九华山",
            "芜湖方特",
            "丰乐湖",
            "合肥万达",
            "屯溪老街",
            "宏村"
          ]
        },
        {
          area: "上海",
          scen: ["上海迪士尼乐园", "崇明", "外滩两岸", "松江", "南汇"]
        },
        {
          area: "江西",
          scen: ["婺源", "三清山", "庐山"]
        }
      ],
      hotMain: [
        {
          area: "主题乐园：",
          scen: [
            "上海迪士尼",
            "常州恐龙园",
            "苏州乐园",
            "南京银杏湖乐园",
            "横店",
            "宋城",
            "上海欢乐谷",
            "芜湖方特",
            "Hello kitty"
          ]
        },
        {
          area: "海滨：",
          scen: ["舟山", "朱家尖", "象山", "连云港"]
        },
        {
          area: "湖光山色：",
          scen: ["千岛湖", "西湖", "黄山", "天目湖", "雁荡山", "三清山", "灵山"]
        },
        {
          area: "古镇村落：",
          scen: [
            "同里",
            "乌镇",
            "西塘",
            "宏村",
            "西递",
            "南浔",
            "甪直",
            "锦溪古镇"
          ]
        },
        {
          area: "城市观光：",
          scen: ["上海", "苏州", "杭州", "无锡", "南京", "宁波", "常州", "嘉兴"]
        },
        {
          area: "祈福拜佛：",
          scen: [
            "普陀山",
            "九华山",
            "灵山大佛",
            "狼山",
            "灵隐寺",
            "牛首山",
            "瘦西湖"
          ]
        }
      ],
      hotHotel: [
        {
          area: "上海：",
          scen: [
            "上海和平豪生酒店",
            "上海鸿锦国际大酒店",
            "上海财富大酒店",
            "上海迪士尼乐园酒店",
            "上海玩具总动员酒店",
            "全季上海野生动物园店",
            "上海柏斯特酒店"
          ]
        },
        {
          area: "杭州：",
          scen: [
            "杭州第一世界酒店",
            "杭州花港海航酒店",
            "宋城千古情主题酒店",
            "千岛湖绿城度假酒店",
            "千岛湖鼎和度假酒店",
            "桐庐红灯笼小木屋",
            "临安十门峡大酒店"
          ]
        },
        {
          area: "无锡：",
          scen: [
            "无锡灵山小镇拈花湾灵山君来波罗蜜多酒店",
            "无锡灵山小镇拈花湾拈花客栈",
            "无锡百乐戴斯酒店",
            "无锡君来湖滨饭店",
            "无锡最佳美洲锦亭国际酒店"
          ]
        },
        {
          area: "常州：",
          scen: [
            "南山竹海客栈",
            "御水温泉酒店",
            "天目湖维景国际酒店",
            "香樟茗岸酒店",
            "常州嬉戏谷凯莱大饭店",
            "常州富都盛贸饭店",
            "香格里拉大酒店",
            "溧阳涵田度假村酒店"
          ]
        },
        {
          area: "苏州：",
          scen: [
            "吴宫泛太平洋酒店",
            "书香世家树山温泉度假酒店",
            "同里湖大饭店",
            "苏州静思园酒店",
            "海悦花园大酒店",
            "张家港金凤凰温泉",
            "常熟理文铂尔曼酒店",
            "雅杰大酒店"
          ]
        }
      ]
    };
  },
  methods: {
    prevButton: () => {
      let list = document.getElementById("slideshowbox");
      let liList = document
        .getElementsByClassName("dotlist")[0]
        .getElementsByTagName("li");
      let listLeft = parseInt(
        window.getComputedStyle(list).getPropertyValue("left")
      );
      listLeft += 990;
      if (listLeft >= 990) {
        listLeft = -990;
      }
      list.style.left = listLeft + "px";
      for (let i = 0; i < liList.length; i++) {
        liList[i].classList.remove("dot-active");
      }
      if (liList >= 0) {
        liList[listLeft / 990].classList.add("dot-active");
      } else {
        liList[listLeft / -990].classList.add("dot-active");
      }
    },
    nextButton: () => {
      let list = document.getElementById("slideshowbox");
      let liList = document
        .getElementsByClassName("dotlist")[0]
        .getElementsByTagName("li");
      let listLeft = parseInt(
        window.getComputedStyle(list).getPropertyValue("left")
      );
      listLeft -= 990;
      if (listLeft < -990) {
        listLeft = 0;
      }
      list.style.left = listLeft + "px";
      for (let i = 0; i < liList.length; i++) {
        liList[i].classList.remove("dot-active");
      }
      if (liList >= 0) {
        liList[listLeft / 990].classList.add("dot-active");
      } else {
        liList[listLeft / -990].classList.add("dot-active");
      }
    },
    changeButton: () => {
      let liList = document
        .getElementsByClassName("dotlist")[0]
        .getElementsByTagName("li");
      let e = event || window.event;
      let target = e.target || e.srcElement;
      for (let i = 0; i < liList.length; i++) {
        liList[i].classList.remove("dot-active");
      }
      if (target.nodeName == "LI") {
        target.classList.add("dot-active");
      }
      let index = 0;
      for (let i = 0; i < liList.length; i++) {
        if (liList[i] === target) {
          index = i;
        }
      }
       let list = document.getElementById("slideshowbox");
       list.style.left=-index*990+"px";
    }
  }
};
</script>