<style>
.wifi-top-head {
  width: 1190px;
  margin: 0 auto;
  padding: 6px 0;
}
.wifi-head-left {
  float: left;
}
.wifi-logo {
  background: url("../img/sprite_img.png") no-repeat;
}
.wifi-logo-one {
  height: 30px;
  width: 145px;
  margin: 0 40px;
  float: left;
  position: relative;
  top: 4px;
  background-position: 0 -24px;
}
.wifi-logo-two {
  height: 18px;
  width: 209px;
  margin: 0 40px;
  margin: 10px 25px 2px 0;
  float: left;
  background-position: 0 -59px;
}
.wifi-head-right {
  float: right;
  overflow: hidden;
}
.wifi-head-right li {
  display: inline-block;
  padding: 0 10px 0 5px;
  font-size: 12px;
  color: #666;
  line-height: 30px;
}

.wifi-buy::before {
  content: "";
  width: 19px;
  height: 15px;
  display: inline-block;
  margin-right: 5px;
  position: relative;
  top: 4px;
  background: url("../img/sprite_img.png") no-repeat;
  background-position: -116px 0;
}
.wifi-buy::after {
  content: "";
  display: inline-block;
  margin-left: 15px;
  position: relative;
  top: 2px;
  background: url("../img/flow.png") no-repeat;
  height: 10px;
  width: 5px;
  background-position: 0 0;
}
.wifi-express::before {
  content: "";
  width: 19px;
  height: 15px;
  display: inline-block;
  margin-right: 5px;
  position: relative;
  top: 4px;
  background: url("../img/sprite_img.png") no-repeat;
  background-position: -135px 0;
}
.wifi-express::after {
  content: "";
  display: inline-block;
  margin-left: 15px;
  position: relative;
  top: 2px;
  background: url("../img/flow.png") no-repeat;
  height: 10px;
  width: 5px;
  background-position: 0 0;
}
.wifi-trip::before {
  content: "";
  width: 19px;
  height: 15px;
  display: inline-block;
  margin-right: 5px;
  position: relative;
  top: 4px;
  background: url("../img/sprite_img.png") no-repeat;
  background-position: -68px 0;
}
.wifi-trip::after {
  content: "";
  display: inline-block;
  margin-left: 15px;
  position: relative;
  top: 2px;
  background: url("../img/flow.png") no-repeat;
  height: 10px;
  width: 5px;
  background-position: 0 0;
}
.wifi-return::before {
  content: "";
  width: 19px;
  height: 15px;
  display: inline-block;
  margin-right: 5px;
  position: relative;
  top: 4px;
  background: url("../img/sprite_img.png") no-repeat;
  background-position: -98px 0;
}

.wifi-top-main {
  position: relative;
  height: 360px;
}
.wifi-slideshow {
  margin: 0 auto;
  position: relative;
  height: 360px;
}
.wifi-slideshow div {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  transition: all 1s;
  width: 100%;
  height: 100%;
}
.wifi-choose {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 10px;
  margin: auto;
  width: 730px;
  z-index: 6;
}
.wifi-choose li {
  display: inline-block;
  width: 116px;
  height: 18px;
  text-align: center;
  background: rgba(255, 255, 255, 0.5);
  color: #000;
  margin: 0 2px;
}
li.wifi-on {
  background: rgba(0, 0, 0, 0.5);
}

.wifi-sidebar {
  width: 1200px;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
}
.wifi-sidebarL {
  float: left;
  width: 225px;
  height: 350px;
  background: url("../img/nav_back.jpg") no-repeat;
}
.wifi-sidebarL > li {
  position: relative;
  width: 195px;
  color: #6f6d6e;
  padding: 4px 15px;
  cursor: pointer;
  margin-top: 10px;
}
.wifi-sidebarL > li:hover {
  background: #efefef;
  box-shadow: 0 0 1px 1px #dcdcdc;
}
i.icon-youjiantou {
  color: black;
}
.wifi-i {
  float: left;
  background: url("../img/sprite_img.png");
}
.wifi-i1 {
  width: 12px;
  height: 12px;
  background-position: -5px 0;
}
.wifi-i2 {
  width: 12px;
  height: 15px;
  background-position: -17px 0;
}
.wifi-i3 {
  width: 9px;
  height: 13px;
  background-position: -42px 0;
}
.wifi-i4 {
  width: 11px;
  height: 15px;
  background-position: -83px 0;
}
.wifi-i5 {
  width: 10px;
  height: 13px;
  background-position: -55px 0;
}

.wifi-sidebrL-right {
  float: right;
  width: 169px;
  position: relative;
}
.wifi-sidebrL-right h4 {
  font-weight: bold;
  color: #404040;
  font-size: 14px;
  position: relative;
}
.wifi-iconfont {
  position: absolute;
  right: 0;
}

.wifi-navi1 li,
.wifi-navi2 li,
.wifi-navi3 li,
.wifi-navi4 li,
.wifi-navi5 li {
  display: inline-block;
}

.wifi-sidebarL a:hover {
  color: #ff8800;
}
.wifi-sidebarL li:hover .wifi-outer1,
.wifi-sidebarL li:hover .wifi-outer2,
.wifi-sidebarL li:hover .wifi-outer3,
.wifi-sidebarL li:hover .wifi-outer4,
.wifi-sidebarL li:hover .wifi-outer5 {
  display: block;
}
.wifi-outer {
  position: absolute;
  left: 100%;
  top: 0;
  background: #efefef;
  padding: 15px;
  width: 217px;
  border-right: 1px solid #dcdcdc;
  border-bottom: 1px solid #dcdcdc;
  border-top: 1px solid #dcdcdc;
  display: none;
  z-index: 7;
}
.wifi-outer dd {
  font-size: 14px;
  color: #333;
  float: left;
  min-width: 57px;
  text-align: right;
}
.wifi-outer dt {
  float: left;
  width: 160px;
}
.wifi-outer a {
  display: inline-block;
  min-width: 20px;
  height: 21px;
  line-height: 21px;
  color: #666;
  font-size: 12px;

  padding: 0 10px 0 5px;
  border-right: 1px solid #d1d1d1;
  margin: 0 5px 5px 5px;
}

.wifi-sidebarR {
  width: 220px;
  height: 337px;
  background: #ffffff;
  float: right;
  margin-top: 13px;
  padding: 0 0 0 15px;
}
.wifi-sidebarR li {
  height: 62px;
  padding: 10px 0;
  border-bottom: 1px dashed #ebe9e7;
  display: block;
}
.wifi-sidebarR-one,
.wifi-sidebarR-two,
.wifi-sidebarR-three,
.wifi-sidebarR-four {
  float: left;
}
.wifi-sidebarR-one {
  width: 75px;
  height: 68px;
  background: url("../img/wifi_logo.png");
}
.wifi-sidebarR-two {
  width: 89px;
  height: 62px;
  background: url("../img/right_sprite.png");
}
.wifi-sidebarR-three {
  width: 71px;
  height: 67px;
  background: url("../img/Cii9EVicIaOIZNXkAAAUj9QMYr4AAHZMAO3paMAABSn969.png");
}
.wifi-sidebarR-four {
  width: 74px;
  height: 60px;
  background: url("../img/right_sprite.png");
  background-position: -89px 0;
}
.wifi-text {
  display: inline-block;
  margin-top: 12px;
  margin-left: 20px;
  color: #999999;
}
.wifi-text-theme {
  font-size: 14px;
  color: #666666;
}
.wifi-top-last {
  background: #f3f3f3;
  height: 50px;
}
.wifi-top-lastbox {
  width: 1200px;
  margin: 0 auto;
}
.wifi-top-lastlogo {
  float: left;
  height: 47px;
  width: 49px;
  margin-left: 5px;
  margin-right: 10px;
  position: relative;
  top: 3px;
  vertical-align: top;
  background: url("../img/sprite_img.png") no-repeat;
  background-position: -155px 0;
}
.wifi-top-lastbox span {
  float: left;
  font-size: 14px;
  height: 50px;
  line-height: 50px;
  color: #666;
}
</style>

<template>
  <div class="wifi-top">
    <div class="wifi-top-head clear">
      <div class="wifi-head-left clear">
        <div class="wifi-logo-one wifi-logo"></div>
        <div class="wifi-logo-two wifi-logo"></div>
      </div>
      <ul class="wifi-head-right clear">
        <li class="wifi-buy">网上预订</li>
        <li class="wifi-express">门店自提/快递</li>
        <li class="wifi-trip">旅途畅玩</li>
        <li class="wifi-return">归后返还</li>
      </ul>
    </div>

    <div class="wifi-top-main clear">
      <div class="wifi-slideshow">
        <div
          
          alt
          v-for="(item, index) in imgList"
          :key="index"
          :style="{opacity:item.opacity,background:item.src}"
        ></div>

        <ul class="wifi-choose">
          <li
            :class="[index<=0 ? 'wifi-on' : '']"
            v-for="(item, index) in imgList"
            :key="index"
            v-text="item.content"
            @mouseenter="change(index)"
          ></li>
        </ul>
      </div>

      <div class="wifi-sidebar">
        <ul class="wifi-sidebarL">
          <li class="clear">
            <i class="wifi-i1 wifi-i"></i>
            <div class="wifi-sidebrL-right">
              <h4>
                亚洲
                <span class="iconfont icon-youjiantou wifi-iconfont"></span>
              </h4>

              <ul class="wifi-navi1 claer">
                <li>
                  <a href="javascript:;">日本</a>
                </li>
                <li>
                  <a href="javascript:;">泰国</a>
                </li>
                <li>
                  <a href="javascript:;">新加坡</a>
                </li>
                <li>
                  <a href="javascript:;">台湾</a>
                </li>
                <li>
                  <a href="javascript:;">巴厘岛</a>
                </li>
                <li>
                  <a href="javascript:;">港澳通用</a>
                </li>
              </ul>
            </div>
            <div class="wifi-outer1 clear wifi-outer">
              <dl class="wifi-clearfix clear">
                <dd v-text="Asian.area"></dd>
                <dt>
                  <a
                    href
                    target="_blank"
                    v-for="(it, index) in Asian.scen"
                    :key="index"
                    v-text="it"
                  ></a>
                </dt>
              </dl>
            </div>
          </li>

          <li class="clear">
            <i class="wifi-i2 wifi-i"></i>
            <div class="wifi-sidebrL-right">
              <h4>
                欧洲
                <span class="iconfont icon-youjiantou wifi-iconfont"></span>
              </h4>

              <ul class="wifi-navi2 claer">
                <li>
                  <a href="javascript:;">欧洲通用</a>
                </li>
                <li>
                  <a href="javascript:;">土耳其</a>
                </li>
                <li>
                  <a href="javascript:;">俄罗斯</a>
                </li>
              </ul>
            </div>
            <div class="wifi-outer2 clear wifi-outer">
              <dl class="wifi-clearfix clear">
                <dd v-text="Europe.area"></dd>
                <dt>
                  <a
                    href
                    target="_blank"
                    v-for="(it, index) in Europe.scen"
                    :key="index"
                    v-text="it"
                  ></a>
                </dt>
              </dl>
            </div>
          </li>

          <li class="clear">
            <i class="wifi-i3 wifi-i"></i>
            <div class="wifi-sidebrL-right">
              <h4>
                美洲
                <span class="iconfont icon-youjiantou wifi-iconfont"></span>
              </h4>

              <ul class="wifi-navi3 claer">
                <li>
                  <a href="javascript:;">美国</a>
                </li>
                <li>
                  <a href="javascript:;">巴西</a>
                </li>
                <li>
                  <a href="javascript:;">加拿大</a>
                </li>
                <li>
                  <a href="javascript:;">塞班岛</a>
                </li>
              </ul>
            </div>
            <div class="wifi-outer3 clear wifi-outer">
              <dl class="wifi-clearfix clear">
                <dd v-text="America.area"></dd>
                <dt>
                  <a
                    href
                    target="_blank"
                    v-for="(it, index) in America.scen"
                    :key="index"
                    v-text="it"
                  ></a>
                </dt>
              </dl>
            </div>
          </li>

          <li class="clear">
            <i class="wifi-i4 wifi-i"></i>
            <div class="wifi-sidebrL-right">
              <h4>
                澳新/中东非
                <span class="iconfont icon-youjiantou wifi-iconfont"></span>
              </h4>

              <ul class="wifi-navi4 claer">
                <li>
                  <a href="javascript:;">澳新通用</a>
                </li>
                <li>
                  <a href="javascript:;">南非</a>
                </li>
                <li>
                  <a href="javascript:;">埃及</a>
                </li>
              </ul>
            </div>
            <div class="wifi-outer4 clear wifi-outer">
              <dl class="wifi-clearfix clear">
                <dd v-text="Australia.area"></dd>
                <dt>
                  <a
                    href
                    target="_blank"
                    v-for="(it, index) in Australia.scen"
                    :key="index"
                    v-text="it"
                  ></a>
                </dt>
              </dl>
            </div>
          </li>

          <li class="clear">
            <i class="wifi-i5 wifi-i"></i>
            <div class="wifi-sidebrL-right">
              <h4>
                上网卡
                <span class="iconfont icon-youjiantou wifi-iconfont"></span>
              </h4>

              <ul class="wifi-navi5 claer">
                <li>
                  <a href="javascript:;">北美三国</a>
                </li>
                <li>
                  <a href="javascript:;">日本</a>
                </li>
                <li>
                  <a href="javascript:;">马来西亚</a>
                </li>
                <li>
                  <a href="javascript:;">柬埔寨</a>
                </li>
                <li>
                  <a href="javascript:;">新加坡香港</a>
                </li>
              </ul>
            </div>
            <div class="wifi-outer5 clear wifi-outer">
              <dl class="wifi-clearfix clear">
                <dd v-text="Internet.area"></dd>
                <dt>
                  <a
                    href
                    target="_blank"
                    v-for="(it, index) in Internet.scen"
                    :key="index"
                    v-text="it"
                  ></a>
                </dt>
              </dl>
            </div>
          </li>

          <li class="clear">
            <i class="wifi-i5 wifi-i"></i>
            <div class="wifi-sidebrL-right">
              <h4>
                查看更多
                <span class="iconfont icon-youjiantou wifi-iconfont"></span>
              </h4>
            </div>
          </li>
        </ul>

        <ul class="wifi-sidebarR">
          <li class="clear">
            <div class="wifi-sidebarR-one"></div>
            <div class="wifi-text">
              <p class="wifi-text-theme">随身WIFI</p>
              <p>随时随地分享网络</p>
            </div>
          </li>
          <li class="clear">
            <div class="wifi-sidebarR-two"></div>
            <div class="wifi-text">
              <p class="wifi-text-theme">随身WIFI</p>
              <p>随时随地分享网络</p>
            </div>
          </li>
          <li class="clear">
            <div class="wifi-sidebarR-three" src="../img/wifi_logo.png" alt></div>
            <div class="wifi-text">
              <p class="wifi-text-theme">随身WIFI</p>
              <p>随时随地分享网络</p>
            </div>
          </li>
          <li class="clear">
            <div class="wifi-sidebarR-four" src="../img/wifi_logo.png" alt></div>
            <div class="wifi-text">
              <p class="wifi-text-theme">随身WIFI</p>
              <p>随时随地分享网络</p>
            </div>
          </li>
        </ul>
      </div>
    </div>

    <div class="wifi-top-last">
      <div class="wifi-top-lastbox">
        <div class="wifi-top-lastlogo"></div>
        <span>拯救手残党，出行打包全攻略</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      Asian: {
        area: "亚洲：",
        scen: [
          "香港",
          "澳门",
          "台湾",
          "日本",
          "新加坡",
          "马来西亚",
          "印度尼西亚",
          "柬埔寨",
          "泰国",
          "斯里兰卡",
          "越南",
          "马尔代夫"
        ]
      },
      Europe: {
        area: "欧洲：",
        scen: ["希腊", "俄罗斯"]
      },
      America: {
        area: "美洲：",
        scen: ["美国", "加拿大", "关岛", "巴西"]
      },
      Australia: {
        area: "澳新：",
        scen: ["澳大利亚", "新西兰"]
      },
      Internet: {
        area: "上网卡：",
        scen: [
          "香港",
          "台湾",
          "泰国",
          "韩国",
          "欧洲通用",
          "印度尼西亚",
          "越南",
          "美国",
          "新加坡",
          "澳新通用"
        ]
      },

      imgList: [
        {
          src: "url(../src/img/Cii-VVzrTH-IdkZhAAFIOxwJQr8AAGWVwHRbv4AAUhT582.png) center center",
          content: "夏日劲惠",
          opacity: "1"
        },
        {
          src: "url(../src/img/Cii_J1yLBCSIPyEpAAIRLaStbK4AAEg3AIoJSoAAhFF88.jpg) center center",
          content: "首日一元",
          opacity: "0"
        },
        {
          src: "url(../src/img//Cii_J1yLBCOIOQEdAAbb4fek19gAAEg3AIddQYABtv585.jpg) center center",
          content: "美国WIFI",
          opacity: "0"
        },
        {
          src: "url(../src/img/Cii-VVyLBCOINhDSAAPUE2HpF9EAAEg3AIkUP8AA9Qr09.jpg) center center",
          content: "欧洲WIFI",
          opacity: "0"
        },
        {
          src: "url(../src/img/Cii-T1fskdOIZDbzAAFIHJ1rnP0AAC3sQKpELoAAUg002.jpg) center center",
          content: "日本WIFI",
          opacity: "0"
        },
        { src: "", content: "出境WIFI" }
      ]
    };
  },
  methods: {
    change(num) {
      let liList = document
        .getElementsByClassName("wifi-choose")[0]
        .getElementsByTagName("li");
      let e = event || window.event;
      let target = e.target || e.srcElement;
      for (let i = 0; i < liList.length; i++) {
        liList[i].classList.remove("wifi-on");
      }
      if (target.nodeName === "LI") {
        target.classList.add("wifi-on");
      }
      let imgList = document
        .getElementsByClassName("wifi-slideshow")[0]
        .getElementsByTagName("div");

      for (let i = 0; i < imgList.length; i++) {
        imgList[i].style.opacity = "0";
      }
      imgList[num].style.opacity = "1";
    }
  }
};
</script>