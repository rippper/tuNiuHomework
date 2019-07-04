<style>
.localplay-top {
  width: 1190px;
  margin: 0 auto;
}
.localplay-orange,
.localplay-navi a:hover {
  color: #ff8800;
  font-style: normal;
}
.localplay-big {
  font-size: 24px;
}

.localplay-navi {
  float: left;
  width: 190px;
  height: 470px;
  background: url("../img/nav24.png");
}
.localplay-navi li {
  /* height: 56px; */
  padding: 5px 15px 12px;
  position: relative;
  background: #595959;
  color: #404040;
}
.localplay-navi h4 {
  font-size: 15px;
  color: #fff;
  line-height: 22px;
}
.localplay-i {
  display: inline-block;
  width: 14px;
  height: 16px;
  background: url("../img/icon.png") no-repeat;
  margin-right: 5px;
}
.localplay-i1 {
  background-position: 0px 2px;
}
.localplay-i2 {
  background-position: 0px -70px;
}
.localplay-i3 {
  background-position: -1px -391px;
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

.localplay-navi li > a {
  color: #bbb;
  display: inline-block;
  padding: 0 5px 0 0;
  font-size: 13px;
  line-height: 20px;
}
.localplay-navi li:hover {
  background: #2f3437;
}
.localplay-navi li:hover .localplay-outer1,
.localplay-navi li:hover .localplay-outer2,
.localplay-navi li:hover .localplay-outer3,
.localplay-navi li:hover .localplay-outer4 {
  display: block;
}
.localplay-outer {
  width: 1010px;
  height: 470px;
  position: absolute;
  left: 100%;
  background: white;
  z-index: 10;
}
.localplay-outer h4 {
  color: #383838;
  font-size: 18px;
  border-bottom: 1px #ccc solid;
  width: 100%;
  padding-bottom: 7px;
  margin-left: 20px;
  font-weight: bold;
  margin-top: 12px;
  float: left;
}

.localplay-outer1 {
  display: none;
  top: -0px;
}
.localplay-outer2 {
  display: none;
  top: -119px;
}
.localplay-outer3 {
  display: none;
  top: -218px;
}

.localplay-clearfix {
  float: left;
  margin-left: 15px;
  border: none;
  width: 480px;
  padding-bottom: 10px;
  padding-top: 10px;
}
.localplay-icon {
  display: inline-block;
  width: 5px;
  height: 12px;
}
.localplay-icon-blue {
  background: #53a9fa;
}
.localplay-icon-orange {
  background: #ff7e00;
}
.localplay-clearfix dd {
  float: left;
  font-size: 14px;
  line-height: 30px;
  font-weight: 700;
  width: 95px;
}
.localplay-clearfix dt {
  margin-top: 5px;
  float: right;
  width: 385px;
}
.localplay-clearfix a {
  padding-left: 5px;
  padding-right: 5px;
  color: #666;
  display: inline-block;
  font-size: 13px;
  line-height: 20px;
}
.localplay-slideshow {
  width: 990px;
  height: 470px;
  float: right;
  position: relative;
  overflow: hidden;
}
.localplay-slideshowbox {
  position: absolute;
  left: 0;
  width: 1980px;
  transition: all 1s;
}
.localplay-slideshowbox .localplay-one {
  float: left;
  width: 990px;
}
.localplay-slideshowbox .localplay-two {
  float: left;
  width: 990px;
}
.localplay-slideshowbox a {
  float: left;
}
.localplay-slideshow img:hover {
  opacity: 0.8;
}
a.localplay-tall {
  float: right;
}
.localplay-button {
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto;
}
.localplay-prev {
  left: 0;
}
.localplay-next {
  right: 0;
}

.localplay-dotlist {
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
.localplay-dotlist li {
  float: left;
  width: 12px;
  height: 12px;
  background: #cccccc;
  border-radius: 50%;
  margin-left: 10px;
}
li.localplay-dot-active {
  background: #ff8800;
}
</style>

<template>
  <div class="localplay-top">
    <div class="localplay-main clear">
      <ul class="localplay-navi">
        <li>
          <h4>
            <i class="localplay-i1 localplay-i"></i>热玩推荐
          </h4>
          <i class="iconfont icon-youjiantou"></i>

          <a href target="_blank">普吉岛精选</a>|
          <a href target="_blank">巴厘岛精选</a>|
          <a href target="_blank">黄石公园</a>|
          <a href target="_blank">出境wifi</a>|
          <a href target="_blank">健康SPA</a>|
          <a href target="_blank">全球接送机</a>|
          <a href target="_blank">旅游特产</a>|
          <a href target="_blank">精选一日游</a>
          |
          <div class="localplay-outer1 clear localplay-outer">
            <h4>热玩推荐</h4>
            <dl v-for="(item, index) in hotplay" :key="index" class="localplay-clearfix">
              <dd>
                <i :class="item.class" class="localplay-icon"></i>
                <span v-text="item.area"></span>
              </dd>
              <dt>
                <a href target="_blank" v-text="it" v-for="(it, indx) in item.scen" :key="indx"></a>
              </dt>
            </dl>
          </div>
        </li>
        <li>
          <h4>
            <i class="localplay-i2 localplay-i"></i>出境目的地
          </h4>
          <i class="iconfont icon-youjiantou"></i>

          <a href target="_blank">泰国</a>|
          <a href target="_blank">日本</a>|
          <a href target="_blank">韩国</a>|
          <a href target="_blank">印尼</a>|
          <a href target="_blank">香港</a>|
          <a href target="_blank">新加坡</a>|
          <a href target="_blank">马来西亚</a>|
          <a href target="_blank">法国</a>|
          <a href target="_blank">美国</a>|
          <a href target="_blank">澳大利亚</a>
          |
          <div class="localplay-outer2 clear localplay-outer">
            <h4>出境目的地</h4>
            <dl v-for="(item, index) in goal" :key="index" class="localplay-clearfix">
              <dd>
                <i :class="item.class" class="localplay-icon"></i>
                <span v-text="item.area"></span>
              </dd>
              <dt>
                <a href target="_blank" v-text="it" v-for="(it, indx) in item.scen" :key="indx"></a>
              </dt>
            </dl>
          </div>
        </li>
        <li>
          <h4>
            <i class="localplay-i3 localplay-i"></i>国内目的地
          </h4>
          <i class="iconfont icon-youjiantou"></i>

          <a href target="_blank">海南</a>|
          <a href target="_blank">云南</a>|
          <a href target="_blank">成都</a>|
          <a href target="_blank">重庆</a>|
          <a href target="_blank">桂林</a>|
          <a href target="_blank">厦门</a>|
          <a href target="_blank">杭州</a>|
          <a href target="_blank">北京</a>|
          <a href target="_blank">珠海</a>|
          <a href target="_blank">黄山</a>|
          <a href target="_blank">三亚</a>|
          <a href target="_blank">丽江</a>|
          <a href target="_blank">甘肃</a>|
          <a href target="_blank">⁮青海</a>
          |

          <div class="localplay-outer3 clear localplay-outer">
            <h4>国内</h4>
            <dl v-for="(item, index) in china" :key="index" class="localplay-clearfix">
              <dd>
                <i :class="item.class" class="localplay-icon"></i>
                <span v-text="item.area"></span>
              </dd>
              <dt>
                <a href target="_blank" v-text="it" v-for="(it, indx) in item.scen" :key="indx"></a>
              </dt>
            </dl>
          </div>
        </li>
      </ul>

      <div class="localplay-slideshow">
        <div class="localplay-slideshowbox clear" id="localplay-slideshowbox">
          <div class="localplay-one">
            <img src="../img/Cii-s1uSP6WIJUs5AAFjPCQUFi0AANViwKNozkAAWNU18.jpg" alt="">
          </div>
          <div class="localplay-two">
            <img src="../img/Cii-TFjcvcyIEsuvAALO8lRW5wcAAI5rQNeqLMAAs8K44.jpg" alt="">
          </div>
        </div>
        <img
          class="localplay-prev localplay-button"
          src="../img/prev.png"
          alt="左按钮"
          @click="prevButton()"
        />
        <img
          class="localplay-next localplay-button"
          src="../img/next.png"
          alt="右按钮"
          @click="nextButton()"
        />

        <ul class="localplay-dotlist" @click="changeButton()" src="a.src">
          <li class="localplay-dot-active"></li>
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
      hotplay: [
        {
          area: "热门一日游",
          scen: [
            "泰国一日游",
            "美国一日游",
            "马来西亚一日游",
            "日本一日游",
            "韩国一日游",
            "越南一日游"
          ],
          class: "localplay-icon-blue"
        },
        {
          area: "婚旅婚拍",
          scen: ["普吉岛", "毛里求斯", "厦门", "青岛", "大理", "济州岛"],
          class: "localplay-icon-orange"
        },
        {
          area: "健康SPA",
          scen: ["普吉SPA", "越南SPA", "清迈SPA", "沙巴SPA", "柬埔寨SPA"],
          class: "localplay-icon-blue"
        },
        {
          area: "美食",
          scen: ["日本美食", "美国美食", "法国美食", "韩国美食", "意大利美食"],
          class: "localplay-icon-orange"
        },
        {
          area: "绝美海岛",
          scen: [
            "斯米兰错过等一年",
            "沙巴",
            "长滩岛",
            "帕劳",
            "毛里求斯",
            "普吉皇帝岛",
            "巴厘岛"
          ],
          class: "localplay-icon-blue"
        },
        {
          area: "全球接送机",
          scen: [
            "韩国接送机服务",
            "东京羽田机场专车接送",
            "泰国接送机服务",
            "新加坡樟宜机场接送服务",
            "马来西亚",
            "美国接送机服务"
          ],
          class: "localplay-icon-orange"
        }
      ],
      goal: [
        {
          area: "东南亚",
          scen: [
            "泰国",
            "新加坡",
            "马来西亚",
            "沙巴",
            "吉隆坡",
            "兰卡威",
            "槟城",
            "曼谷",
            "清迈",
            "普吉岛",
            "苏梅岛",
            "芭提雅",
            "甲米",
            "越南",
            "芽庄",
            "岘港",
            "柬埔寨",
            "吴哥窟",
            "暹粒",
            "菲律宾",
            "长滩岛",
            "宿雾",
            "帕劳",
            "印尼",
            "尼泊尔",
            "斯里兰卡"
          ],
          class: "localplay-icon-orange"
        },
        {
          area: "日韩",
          scen: [
            "日本",
            "韩国",
            "东京",
            "大阪",
            "京都",
            "富士山",
            "冲绳",
            "北海道",
            "奈良",
            "首尔",
            "济州岛",
            "釜山"
          ],
          class: "localplay-icon-orange"
        },
        {
          area: "美洲",
          scen: [
            "美国",
            "加拿大",
            "美国东海岸",
            "美国西海岸",
            "夏威夷",
            "纽约",
            "尼亚加拉大瀑布",
            "波士顿",
            "迈阿密",
            "洛杉矶",
            "拉斯维加斯",
            "旧金山",
            "黄石公园",
            "环球影城",
            "温哥华",
            "多伦多",
            "洛基山",
            "班夫国家公园"
          ],
          class: "localplay-icon-blue"
        },
        {
          area: "欧洲",
          scen: [
            "法国",
            "意大利",
            "英国",
            "德国",
            "希腊",
            "瑞士",
            "荷兰",
            "奥地利",
            "俄罗斯",
            "挪威",
            "芬兰",
            "瑞典",
            "丹麦",
            "匈牙利",
            "冰岛",
            "巴黎",
            "普罗旺斯",
            "卢浮宫",
            "埃菲尔铁塔",
            "摩纳哥",
            "罗马",
            "米兰",
            "佛罗伦萨",
            "威尼斯",
            "梵蒂冈",
            "伦敦",
            "苏格兰",
            "英格兰",
            "爱丁堡",
            "曼彻斯特",
            "剑桥",
            "法兰克福",
            "新天鹅堡",
            "柏林",
            "林德霍夫宫",
            "慕尼黑",
            "汉堡",
            "莱茵河"
          ],
          class: "localplay-icon-blue"
        },
        {
          area: "港澳台",
          scen: [
            "台湾",
            "香港",
            "澳门"
          ],
          class: "localplay-icon-orange"
        },
        {
          area: "澳新",
          scen: [
            "澳大利亚",
            "新西兰",
            "悉尼",
            "墨尔本",
            "大堡礁",
            "黄金海岸",
            "凯恩斯",
            "大洋路",
            "蓝山",
            "皇后镇",
            "奥克兰",
            "基督城",
            "罗托鲁瓦"
          ],
          class: "localplay-icon-blue"
        },
        {
          area: "土耳其",
          scen: ["伊斯坦布尔", "卡帕多西亚"],
          class: "localplay-icon-blue"
        },
        {
          area: "迪拜",
          scen: [
            "迪拜塔",
            "迪拜皇宫"
          ],
          class: "localplay-icon-blue"
        },
        {
          area: "埃及",
          scen: [
            "金字塔",
            "开罗",
            "阿斯旺",
            "亚历山大",
            "埃及博物馆"
          ],
          class: "localplay-icon-orange"
        }
      ],
      china: [
        {
          area: "海南",
          scen: [
            "三亚",
            "蜈支洲岛",
            "天涯海角",
            "亚龙湾",
            "海口"
          ],
          class: "localplay-icon-orange"
        },
        {
          area: "云南",
          scen: [
            "丽江",
            "昆明",
            "大理",
            "西双版纳",
            "玉龙雪山",
            "虎跳峡"
          ],
          class: "localplay-icon-orange"
        },
        {
          area: "东北",
          scen: [
            "长白山",
            "大连",
            "吉林"
          ],
          class: "localplay-icon-blue"
        },
        {
          area: "西南",
          scen: [
            "成都",
            "峨眉山风景区",
            "青城山",
            "重庆",
            "拉萨",
            "布达拉宫",
            "林芝",
            "贵州"
          ],
          class: "localplay-icon-blue"
        },
        {
          area: "华东",
          scen: [
            "乌镇",
            "西塘",
            "黄山",
            "千岛湖",
            "厦门",
            "鼓浪屿",
            "武夷山",
            "云水谣古镇",
            "普陀山",
            "上海",
            "东方明珠",
            "苏州",
            "南京",
            "无锡"
          ],
          class: "localplay-icon-blue"
        },
        {
          area: "西北",
          scen: [
            "兵马俑",
            "华山",
            "西安",
            "延安",
            "青海湖",
            "敦煌",
            "兰州",
            "茶卡盐湖",
            "吐鲁番",
            "天山天池风景区",
            "喀纳斯风景区",
            "新疆"
          ],
          class: "localplay-icon-blue"
        },
        {
          area: "华北",
          scen: [
            "北京",
            "天津",
            "太原",
            "平遥古城",
            "云冈石窟",
            "内蒙古",
            "呼伦贝尔",
            "赤峰",
            "青岛",
            "济南",
            "威海"
          ],
          class: "localplay-icon-blue"
        },
        {
          area: "华中",
          scen: [
            "张家界",
            "凤凰古城",
            "长沙",
            "岳阳",
            "黄鹤楼",
            "三峡",
            "神农架",
            "少林寺",
            "龙门石窟",
            "洛阳",
            "开封",
            "婺源",
            "景德镇",
            "三清山",
            "武汉",
            "九江"
          ],
          class: "localplay-icon-blue"
        },
        {
          area: "华南",
          scen: [
            "深圳",
            "桂林",
            "阳朔",
            "广州",
            "惠州",
            "海口"
          ],
          class: "localplay-icon-blue"
        }
      ],
      
    };
  },
  methods: {
    prevButton: () => {
      let list = document.getElementById("localplay-slideshowbox");
      let liList = document
        .getElementsByClassName("localplay-dotlist")[0]
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
        liList[i].classList.remove("localplay-dot-active");
      }
      if (liList >= 0) {
        liList[listLeft / 990].classList.add("localplay-dot-active");
      } else {
        liList[listLeft / -990].classList.add("localplay-dot-active");
      }
    },
    nextButton: () => {
      let list = document.getElementById("localplay-slideshowbox");
      let liList = document
        .getElementsByClassName("localplay-dotlist")[0]
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
        liList[i].classList.remove("localplay-dot-active");
      }
      if (liList >= 0) {
        liList[listLeft / 990].classList.add("localplay-dot-active");
      } else {
        liList[listLeft / -990].classList.add("localplay-dot-active");
      }
    },
    changeButton: () => {
      let liList = document
        .getElementsByClassName("localplay-dotlist")[0]
        .getElementsByTagName("li");
      let e = event || window.event;
      let target = e.target || e.srcElement;
      for (let i = 0; i < liList.length; i++) {
        liList[i].classList.remove("localplay-dot-active");
      }
      if (target.nodeName == "LI") {
        target.classList.add("localplay-dot-active");
      }
      let index = 0;
      for (let i = 0; i < liList.length; i++) {
        if (liList[i] === target) {
          index = i;
        }
      }
      let list = document.getElementById("localplay-slideshowbox");
      list.style.left = -index * 990 + "px";
    }
  }
};
</script>