<style>
.wifi-shop {
  width: 1200px;
  margin: 40px auto 0;
}
.wifi-shopL {
  height: 329px;
  width: 925px;
  overflow: hidden;
  border: 1px solid #e6e6e6;
  float: left;
  padding: 0 15px 15px 15px;
}
.wifi-shopL-theme,
.wifi-shopR-theme {
  font-size: 16px;
  font-weight: bold;
  border-bottom: 2px solid #eceef4;
  height: 49px;
}
.wifi-shopL-theme li,
.wifi-shopR-theme li {
  width: 112px;
  float: left;
  padding: 15px 0 10px 0;
  text-align: center;
  height: 24px;
  cursor: pointer;
  color: #666;
}
li.wifi-click {
  color: #22c233;
  border-bottom: 2px solid #22c233;
}
.wifi-shopL-content,
.wifi-shopR-content {
  position: relative;
  margin-top: 15px;
}
.wifi-shopL-conbox,
.wifi-shopR-conbox {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  margin: auto;
}
.wifi-shopL-item {
  width: 168px;
  height: 126px;
  background: #eee;
  margin-right: 17px;
  float: left;
  overflow: hidden;
  position: relative;
  cursor: pointer;
  margin-bottom: 15px;
}
.wifi-shopL-itemtext {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  width: 100%;
  text-align: center;
}
.wifi-shopL-place {
  line-height: 22px;
  font-weight: 700;
  font-size: 18px;
}
.wifi-shopL-price {
  color: #ff6600;
}
.wifi-shopL-price span {
  font-size: 18px;
  line-height: 20px;
  font-weight: 700;
}
.wifi-shopR {
  height: 344px;
  width: 225px;
  margin-right: 15px;
  float: left;
  background: url("../img/chongzhi_back.jpg");
  border: 1px solid #e6e6e6;
}
.wifi-shopR-phone {
  width: 197px;
  margin: 0 auto 15px;
}
.wifi-shopR-conbox span {
  font-size: 14px;
  color: #666;
  float: left;
  vertical-align: top;
}
.wifi-shopR-phone input {
  margin-left: 6px;
  height: 24px;
  width: 145px;
  border: 1px solid #dddddd;
  padding: 0 6px;
  outline: none;
}
.wifi-shopR-conbox {
  margin: 0;
  padding: 20px 14px;
}
.wifi-shopR-fixed {
  margin-bottom: 5px;
}
.wifi-shopR-actual {
  float: left;
  width: 165px;
}
.wifi-shopR-actual li {
  margin-left: 6px;
  margin-bottom: 15px;
  border: 1px solid #dddddd;
  width: 47px;
  height: 24px;
  float: left;
  color: #333333;
  font-size: 12px;
  text-align: center;
  line-height: 24px;
  cursor: pointer;
}
li.wifi-shopR-actual-on {
  border-color: #ff8800;
  color: #ff8800;
}
.wifi-shopR-content {
  margin: 0;
}
.wifi-shopR-button a {
  display: inline-block;
  background: url("../img/chongzhi_btn.png");
  margin-top: 10px;
  cursor: pointer;
  color: #fff;
  width: 78px;
  height: 24px;
  margin-left: 40px;
  margin-bottom: 10px;
  text-align: center;
  line-height: 24px;
}
span.wifi-shopR-buttonshow {
  
  display: inline-block;
  float: none;
  font-size: 13px;
  color: #ff6600;
  font-weight: bold;
  margin-left: 8px;
  line-height: 24px;
  vertical-align: middle;
}
</style>
<template>
  <div class="wifi-shop clear">
    <div class="wifi-shopL">
      <ul class="wifi-shopL-theme">
        <li
          :class="[index<=0 ? 'wifi-click':'']"
          v-for="(item, index) in shop.left"
          :key="index"
          v-text="item.theme"
          @click="leftChoose(index)"
        ></li>
      </ul>
      <div class="wifi-shopL-content">
        <div
          class="wifi-shopL-conbox clear"
          v-for="(item, index) in shop.left"
          :key="index"
          :style="{display:item.display}"
        >
          <div
            class="wifi-shopL-item"
            v-for="(it, ind) in item.place"
            :key="ind"
            :style="{background:it.src}"
          >
            <div class="wifi-shopL-itemtext">
              <p class="wifi-shopL-place" v-text="it.area"></p>
              <p class="wifi-shopL-price">
                ￥
                <span v-text="it.price"></span>起
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="wifi-shopR">
      <ul class="wifi-shopR-theme">
        <li
          :class="[index<=0 ? 'wifi-click':'']"
          v-for="(item, index) in shop.right"
          :key="index"
          v-text="item.theme"
          @click="rightChoose(index)"
        ></li>
      </ul>
      <div class="wifi-shopR-content">
        <div
          class="wifi-shopR-conbox clear"
          v-for="(item, index) in shop.right"
          :key="index"
          :style="{display:item.display}"
        >
          <div class="wifi-shopR-phone">
            <span>号码</span>
            <input type="text" placeholder="请输入手机号码" />
          </div>
          <div class="wifi-shopR-fixed clear">
            <span>面值</span>
            <ul class="wifi-shopR-actual">
              <li
                :class="[ind<=0 ? 'wifi-shopR-actual-on' : '']"
                v-for="(it, ind) in item.howmuch"
                :key="ind"
                v-text="it.fixed"
                @click="chooseFix(ind,index,it)"
              ></li>
            </ul>
            <div class="wifi-shopR-button">
              <a href="javascript:;">立即充值</a>
              <span class="wifi-shopR-buttonshow" v-text="shop.right[index].howmuch[0].actual"></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      shop: {
        left: [
          {
            display: "block",
            theme: "出境WiFi",
            place: [
              {
                src:
                  "url(../src/img/Cii-TFeHetOIPXpMAADK5YxCawkAAALEwBG71gAAMr949.jpg)",
                area: "日本",
                price: 9
              },
              {
                src: "url(../src/img/taiguo1.jpg)",
                area: "泰国",
                price: 12
              },
              {
                src: "url(../src/img/hanguo1.jpg)",
                area: "东南亚",
                price: 18
              },
              {
                src: "url(../src/img/maerdaifu1.jpg)",
                area: "马尔代夫",
                price: 30
              },
              {
                src: "url(../src/img/gangao1.jpg)",
                area: "港澳",
                price: 30
              },
              {
                src: "url(../src/img/balidao1.jpg)",
                area: "巴厘岛",
                price: 18
              },
              {
                src: "url(../src/img/meiguo1.jpg)",
                area: "美国",
                price: 16
              },
              {
                src: "url(../src/img/aodaliya1.jpg)",
                area: "澳大利亚",
                price: 29
              },
              {
                src: "url(../src/img/ouzhou1.jpg)",
                area: "欧洲通用",
                price: 23
              },
              {
                src: "url(../src/img/taiwan1.jpg)",
                area: "台湾",
                price: 12
              }
            ]
          },
          {
            display: "none",
            theme: "上网卡",
            place: [
              {
                src: "url(../src/img/taiguo1.jpg)",
                area: "泰国",
                price: 27
              },
              {
                src: "url(../src/img/xinjiapo1.jpg)",
                area: "新加坡",
                price: 53
              },
              {
                src: "url(../src/img/taiwan1.jpg)",
                area: "台湾",
                price: 52
              },
              {
                src:
                  "url(../src/img/Cii-TleIozeIUId4AAAw6NRA2-8AAAMqQN3ADsAADEA02.jpg)",
                area: "港澳",
                price: 19
              },
              {
                src: "url(../src/img/balidao1.jpg)",
                area: "巴厘岛",
                price: 38
              },
              {
                src: "url(../src/img/hanguo1.jpg)",
                area: "法国",
                price: 77
              },
              {
                src: "url(../src/img/aodaliya1.jpg)",
                area: "澳大利亚",
                price: 69
              },
              {
                src: "url(../src/img/gangao1.jpg)",
                area: "香港",
                price: 19
              },
              {
                src: "url(../src/img/ouzhou1.jpg)",
                area: "欧洲通用",
                price: 88
              },
              {
                src:
                  "url(../src/img/Cii-TFeHetOIPXpMAADK5YxCawkAAALEwBG71gAAMr949.jpg)",
                area: "日本",
                price: 45
              }
            ]
          }
        ],
        right: [
          {
            display: "block",
            theme: "话费",
            howmuch: [
              { fixed: "10元", actual: "￥10元" },
              { fixed: "20元", actual: "￥20元" },
              { fixed: "30元", actual: "￥30元" },
              { fixed: "50元", actual: "￥50元" },
              { fixed: "100元", actual: "￥100元" }
            ]
          },
          {
            display: "none",
            theme: "流量",
            howmuch: [
              { fixed: "5M", actual: "￥1" },
              { fixed: "10M", actual: "￥2-3" },
              { fixed: "30M", actual: "￥5" },
              { fixed: "50M", actual: "￥6-7" }
            ]
          }
        ]
      }
    };
  },
  methods: {
    leftChoose(num) {
      let e = event || window.event;
      let target = e.target || e.srcElement;
      let liList = document
        .getElementsByClassName("wifi-shopL-theme")[0]
        .getElementsByTagName("li");
      let showList = document.getElementsByClassName("wifi-shopL-conbox");
      for (let i = 0; i < liList.length; i++) {
        liList[i].classList.remove("wifi-click");
      }
      if (target.nodeName === "LI") {
        target.classList.add("wifi-click");
      }
      for (let i = 0; i < showList.length; i++) {
        showList[i].style.display = "none";
      }
      showList[num].style.display = "block";
    },
    rightChoose(num) {
      let e = event || window.event;
      let target = e.target || e.srcElement;
      let liList = document
        .getElementsByClassName("wifi-shopR-theme")[0]
        .getElementsByTagName("li");
      let showList = document.getElementsByClassName("wifi-shopR-conbox");
      for (let i = 0; i < liList.length; i++) {
        liList[i].classList.remove("wifi-click");
      }
      if (target.nodeName === "LI") {
        target.classList.add("wifi-click");
      }
      for (let i = 0; i < showList.length; i++) {
        showList[i].style.display = "none";
      }
      showList[num].style.display = "block";
    },
    chooseFix(num, numparent,obj) {
      let e = event || window.event;
      let target = e.target || e.srcElement;
      let liList = document
        .getElementsByClassName("wifi-shopR-actual")
        [numparent].getElementsByTagName("li");
        let buttonShow=document.getElementsByClassName("wifi-shopR-buttonshow")[numparent];
      for (let i = 0; i < liList.length; i++) {
        liList[i].classList.remove("wifi-shopR-actual-on");
      }
      if (target.nodeName === "LI") {
        target.classList.add("wifi-shopR-actual-on");
      }
      buttonShow.innerText=obj.actual;
    }
  }
};
</script>
