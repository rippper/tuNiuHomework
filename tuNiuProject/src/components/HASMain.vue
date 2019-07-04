<style>
.model {
  margin: 40px 0 25px;
}
.model-top h2 {
  font-size: 20px;
  line-height: 35px;
  color: #555;
  font-weight: bold;
  padding-left: 15px;
  width: 235px;
  float: left;
  height: 35px;
  background: url("../img/gticon.png") no-repeat;
  background-position: 0 -66px;
}
.mytab {
  float: left;
}
.mytab li {
  float: left;
  height: 22px;
  line-height: 22px;
  margin-right: 10px;
  margin-top: 5px;
  font-size: 14px;
  padding: 0 10px;
}
.hotel-on {
  height: 22px;
  line-height: 22px;
  padding-left: 10px;
  padding-right: 10px;
  display: block;
  color: #fff;
  border-radius: 3px;
  background: #555;
}
.hotel-model-main {
  position: relative;
  border-top: 2px solid #666666;
  height: 490px;
}
.hotel-model-box {
  position: absolute;
  top: 0;
  left: 0;
}
.hotel-left {
  width: 200px;
  height: 490px;
  float: left;
  background-repeat: no-repeat;
  background-position: -20px center;
  margin-right: 20px;
}
.hotel-left-list {
  width: 160px;
}
.hotel-theme:hover {
  transform: translateX(-5px);
  transition: all 0.5s;
}
.hotel-right {
  float: right;
  width: 970px;
}
.hotel-item {
  float: left;
  width: 220px;
  margin: 20px 20px 0 0;
  box-shadow: 0 0 5px #eeeeee;
}
.hotel-price {
  float: left;
  color: #f80;
  font-size: 18px;
  font-weight: bold;
  padding: 5px 10px;
}
.hotel-satisfaction {
  padding: 5px 10px;
  float: left;
  line-height: 30px;
  color: #999;
}
.hotel-satisfaction span {
  color: #f80;
}
.hotel-content {
  float: left;
  display: block;
}
.hotel-content {
  width: 200px;
  margin: 0 15px 10px;

  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
}
.hotel-item:hover {
  box-shadow: 0 0 8px #f80;
}
</style>
<template>
  <div class="hotel-list clear">
    <div class="model clear" v-for="(item, index) in list" :key="index">
      <div class="model-top clear">
        <h2 v-text="item.theme"></h2>
        <ul class="mytab">
          <li
            :class="[ind===0 ?'hotel-on':'']"
            v-for="(it, ind) in item.place"
            :key="ind"
            v-text="it.where"
            @mouseenter="choose(index)"
          ></li>
        </ul>
      </div>
      <div class="hotel-model-main clear">
        <div
          class="hotel-model-box clear"
          v-for="(items, indx) in item.place"
          :key="indx"
          :style="{display:items.display}"
        >
          <div class="hotel-left clear" :style="{background:items.src}">
            <ul class="hotel-left-list" style="margin-top:20px;margin-left:30px;">
              <li
                v-for="(it, ind) in items.left"
                :key="ind"
                class="clear hotel-theme"
                style="padding:10px;margin-bottom:10px;background:white;padding-left:20px;"
              >
                <span
                  v-text="it.theme"
                  style="display: inline-block;white-space: nowrap;width: 55px; overflow: hidden; text-overflow:ellipsis;float:left"
                ></span>
                <span
                  class="iconfont icon-xin"
                  v-text="it.number"
                  style="float:right;font-size:14px;line-height:15px;"
                ></span>
              </li>
            </ul>
          </div>
          <div class="hotel-right clear">
            <div v-for="(itm, idex) in items.right" :key="idex" class="hotel-item">
              <img :src="itm.src" width="220px;" height="125px" alt />
              <div class="hotel-item-bottom">
                <div class="hotel-item-head clear">
                  <div class="hotel-price">
                    <span style="font-size: 12px;font-weight: normal;color: #f90;">￥</span>
                    <span v-text="itm.price"></span>
                    <span style="font-size: 12px;ont-weight: normal;color: #f90;">元/份</span>
                  </div>
                  <div class="hotel-satisfaction">
                    满意度：
                    <span v-text="itm.satisfaction"></span>
                  </div>
                </div>

                <div class="hotel-content" v-text="itm.content"></div>
              </div>
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
      list: [
        {
          theme: "当季热卖",
          place: [
            {
              display: "block",
              where: "上海迪士尼",
              left: [
                { theme: "上海迪士尼乐园", number: 68901 },
                { theme: "上海长风海洋世界", number: 525 },
                { theme: "上海野生动物园", number: 36436 },
                { theme: "上海玛雅海滩水公园", number: 256 },
                { theme: "上海欢乐谷", number: 1467 }
              ],
              src:
                "url('../src/img/Cii-sls56ySITAuvAAEh7IcgNXQAAJe_AJ2PukAASIE361.png')",

              right: [
                {
                  src:
                    "../src/img/Cii-Tlg2feKIb61lACaeDLaPr4EAAEzPQOLokYAJp4k649_w320_h240_c1_t0_w640_h480_c1_t0.jpg",
                  price: "530",
                  satisfaction: "99%",
                  content:
                    "<上海迪士尼乐园2-4日自驾游>玩具总动员/迪士尼乐园酒店自选等你来抢购，可加定迪士尼门票，相约迪士尼连住更优惠"
                },
                {
                  src:
                    "../src/img/Cii-slvhAguIB22IAAMLSZpJ88sAAQHjwFPGyAAAwth435_w320_h240_c1_t0_w640_h480_c1_t0.jpg",
                  price: "339",
                  satisfaction: "94%",
                  content:
                    "<上海柏思特酒店2-4日自驾游>亲子网红酒店，行程自选，可加定迪士尼门票，酒店至迪士尼免费班车接送"
                },
                {
                  src:
                    "../src/img/Cii-T1g2fd2IXTYZABu7YIJ7LvAAAEzPQLYLhEAG7t4240_w320_h240_c1_t0_w640_h480_c1_t0.jpg",
                  price: "1317",
                  satisfaction: "96%",
                  content:
                    "<上海迪士尼乐园2-4日自驾游>玩具总动员/迪士尼乐园酒店自选，可加定迪士尼门票，相约迪士尼，连住更优惠"
                },
                {
                  src:
                    "../src/img/Cii-Tlg1ZeyIceybACGwwS3KUgsAAEuAwH22kwAIbDZ882_w320_h240_c1_t0_w640_h480_c1_t0.jpg",
                  price: "371",
                  satisfaction: "98%",
                  content:
                    "<桔子水晶酒店-上海国际旅游度假区周浦万达店2-4日自驾游>11号线可直达迪士尼，可加购迪士尼门票，享迪士尼免费接送服务"
                },
                {
                  src:
                    "../src/img/Cii-T1g2feOICMnCABvKOwbB9BYAAEzPQO6upkAG8pT177_w320_h240_c1_t0_w640_h480_c1_t0.jpg",
                  price: "583",
                  satisfaction: "98%",
                  content:
                    "<上海迪士尼2-4日自驾游>桔子水晶（上海国际旅游度假区周浦万达店），可加购迪士尼门票，享迪士尼免费接送服务"
                },
                {
                  src:
                    "../src/img/Cii9EFdwhNWIZgqoAMlqRZt4rTEAAGwbAGdWEgAyWpd905_w320_h240_c1_t0_w640_h480_c1_t0.jpg",
                  price: "1317",
                  satisfaction: "96%",
                  content:
                    "<上海迪士尼玩具总动员酒店2-4日自驾游>行程天数自选，可加购迪士尼乐园门票，体验童趣世界，快来开启童话之旅吧"
                },
                {
                  src:
                    "../src/img/Cii_J1zuNDaIO9JPAAIg5-3VXfgAAGcvgIGRwoAAiD_70_w640_h480_c1_t0.jpg",
                  price: "1317",
                  satisfaction: "96%",
                  content:
                    "<上海迪士尼乐园自驾2日游>宿上海玩具总动员酒店1晚，可加购迪士尼乐园门票，开启您的童话之旅"
                },
                {
                  src:
                    "../src/img/Cii-sl0IqYCIJlApAAC2GBfXjOwAAW-2wCizrkAALYw97_w640_h480_c1_t0.jpg",
                  price: "276",
                  satisfaction: "97%",
                  content:
                    "<上海鸿锦国际酒店2-4日自驾游>高性价比酒店，行程天数自选，可加定迪士尼门票//上海野生动物园门票，含酒店至迪士尼的往返接送"
                }
              ]
            },
            {
              display: "none",
              where: "无锡",
              left: [{ theme: "无锡", number: 181352 }],
              src:
                "url('../src/img/Cii-s1s15hCIajxnAAE7H0znH7AAAJVSwEdk9gAATs3496.png')",

              right: [
                {
                  src:
                    "../src/img/Cii-s1q50jWIWt-fAGTWP-nhSYcAAEyzwAAAAAAZNZX457_w320_h240_c1_t0_w640_h480_c1_t0.jpg",
                  price: "530",
                  satisfaction: "99%",
                  content:
                    "<上海迪士尼乐园2-4日自驾游>玩具总动员/迪士尼乐园酒店自选等你来抢购，可加定迪士尼门票，相约迪士尼连住更优惠"
                },
                {
                  src:
                    "../src/img/Cii-s1q50jWIWt-fAGTWP-nhSYcAAEyzwAAAAAAZNZX457_w320_h240_c1_t0_w640_h480_c1_t0.jpg",
                  price: "339",
                  satisfaction: "94%",
                  content:
                    "<上海柏思特酒店2-4日自驾游>亲子网红酒店，行程自选，可加定迪士尼门票，酒店至迪士尼免费班车接送"
                },
                {
                  src:
                    "../src/img/Cii-s1q50jWIWt-fAGTWP-nhSYcAAEyzwAAAAAAZNZX457_w320_h240_c1_t0_w640_h480_c1_t0.jpg",
                  price: "1317",
                  satisfaction: "96%",
                  content:
                    "<上海迪士尼乐园2-4日自驾游>玩具总动员/迪士尼乐园酒店自选，可加定迪士尼门票，相约迪士尼，连住更优惠"
                },
                {
                  src:
                    "../src/img/Cii-s1q50jWIWt-fAGTWP-nhSYcAAEyzwAAAAAAZNZX457_w320_h240_c1_t0_w640_h480_c1_t0.jpg",
                  price: "371",
                  satisfaction: "98%",
                  content:
                    "<桔子水晶酒店-上海国际旅游度假区周浦万达店2-4日自驾游>11号线可直达迪士尼，可加购迪士尼门票，享迪士尼免费接送服务"
                },
                {
                  src:
                    "../src/img/Cii-s1q50jWIWt-fAGTWP-nhSYcAAEyzwAAAAAAZNZX457_w320_h240_c1_t0_w640_h480_c1_t0.jpg",
                  price: "583",
                  satisfaction: "98%",
                  content:
                    "<上海迪士尼2-4日自驾游>桔子水晶（上海国际旅游度假区周浦万达店），可加购迪士尼门票，享迪士尼免费接送服务"
                },
                {
                  src:
                    "../src/img/Cii-s1q50jWIWt-fAGTWP-nhSYcAAEyzwAAAAAAZNZX457_w320_h240_c1_t0_w640_h480_c1_t0.jpg",
                  price: "1317",
                  satisfaction: "96%",
                  content:
                    "<上海迪士尼玩具总动员酒店2-4日自驾游>行程天数自选，可加购迪士尼乐园门票，体验童趣世界，快来开启童话之旅吧"
                },
                {
                  src:
                    "../src/img/Cii-s1q50jWIWt-fAGTWP-nhSYcAAEyzwAAAAAAZNZX457_w320_h240_c1_t0_w640_h480_c1_t0.jpg",
                  price: "1317",
                  satisfaction: "96%",
                  content:
                    "<上海迪士尼乐园自驾2日游>宿上海玩具总动员酒店1晚，可加购迪士尼乐园门票，开启您的童话之旅"
                },
                {
                  src:
                    "../src/img/Cii-s1q50jWIWt-fAGTWP-nhSYcAAEyzwAAAAAAZNZX457_w320_h240_c1_t0_w640_h480_c1_t0.jpg",
                  price: "276",
                  satisfaction: "97%",
                  content:
                    "<上海鸿锦国际酒店2-4日自驾游>高性价比酒店，行程天数自选，可加定迪士尼门票//上海野生动物园门票，含酒店至迪士尼的往返接送"
                }
              ]
            },
            {
              display: "none",
              where: "苏州",
              left: [{ theme: "苏州", number: 181352 }],
              src:
                "url('../src/img/Cii-tFs57MiIBigCAAFL0R_FONQAAJfBgPXfX8AAUvp425.png')",

              right: [
                {
                  src:
                    "../src/img/Cii-T1ekZ_SIL9d_AALVSm9pmGcAAAzagPnEJgAAtVi720_w320_h240_c1_t0_w640_h480_c1_t0.jpg",
                  price: "530",
                  satisfaction: "99%",
                  content:
                    "<上海迪士尼乐园2-4日自驾游>玩具总动员/迪士尼乐园酒店自选等你来抢购，可加定迪士尼门票，相约迪士尼连住更优惠"
                },
                {
                  src:
                    "../src/img/Cii-T1ekZ_SIL9d_AALVSm9pmGcAAAzagPnEJgAAtVi720_w320_h240_c1_t0_w640_h480_c1_t0.jpg",
                  price: "339",
                  satisfaction: "94%",
                  content:
                    "<上海柏思特酒店2-4日自驾游>亲子网红酒店，行程自选，可加定迪士尼门票，酒店至迪士尼免费班车接送"
                },
                {
                  src:
                    "../src/img/Cii-T1ekZ_SIL9d_AALVSm9pmGcAAAzagPnEJgAAtVi720_w320_h240_c1_t0_w640_h480_c1_t0.jpg",
                  price: "1317",
                  satisfaction: "96%",
                  content:
                    "<上海迪士尼乐园2-4日自驾游>玩具总动员/迪士尼乐园酒店自选，可加定迪士尼门票，相约迪士尼，连住更优惠"
                },
                {
                  src:
                    "../src/img/Cii-T1ekZ_SIL9d_AALVSm9pmGcAAAzagPnEJgAAtVi720_w320_h240_c1_t0_w640_h480_c1_t0.jpg",
                  price: "371",
                  satisfaction: "98%",
                  content:
                    "<桔子水晶酒店-上海国际旅游度假区周浦万达店2-4日自驾游>11号线可直达迪士尼，可加购迪士尼门票，享迪士尼免费接送服务"
                },
                {
                  src:
                    "../src/img/Cii-T1ekZ_SIL9d_AALVSm9pmGcAAAzagPnEJgAAtVi720_w320_h240_c1_t0_w640_h480_c1_t0.jpg",
                  price: "583",
                  satisfaction: "98%",
                  content:
                    "<上海迪士尼2-4日自驾游>桔子水晶（上海国际旅游度假区周浦万达店），可加购迪士尼门票，享迪士尼免费接送服务"
                },
                {
                  src:
                    "../src/img/Cii-T1ekZ_SIL9d_AALVSm9pmGcAAAzagPnEJgAAtVi720_w320_h240_c1_t0_w640_h480_c1_t0.jpg",
                  price: "1317",
                  satisfaction: "96%",
                  content:
                    "<上海迪士尼玩具总动员酒店2-4日自驾游>行程天数自选，可加购迪士尼乐园门票，体验童趣世界，快来开启童话之旅吧"
                },
                {
                  src:
                    "../src/img/Cii-T1ekZ_SIL9d_AALVSm9pmGcAAAzagPnEJgAAtVi720_w320_h240_c1_t0_w640_h480_c1_t0.jpg",
                  price: "1317",
                  satisfaction: "96%",
                  content:
                    "<上海迪士尼乐园自驾2日游>宿上海玩具总动员酒店1晚，可加购迪士尼乐园门票，开启您的童话之旅"
                },
                {
                  src:
                    "../src/img/Cii-T1ekZ_SIL9d_AALVSm9pmGcAAAzagPnEJgAAtVi720_w320_h240_c1_t0_w640_h480_c1_t0.jpg",
                  price: "276",
                  satisfaction: "97%",
                  content:
                    "<上海鸿锦国际酒店2-4日自驾游>高性价比酒店，行程天数自选，可加定迪士尼门票//上海野生动物园门票，含酒店至迪士尼的往返接送"
                }
              ]
            },
            {
              display: "none",
              where: "南京",
              left: [{ theme: "南京", number: 181352 }],
              src:
                "url('../src/img/Cii-s1s56puIXudjAAE6V1QSizgAAJe-QNjM-sAATpv796.png')",

              right: [
                {
                  src:
                    "../src/img/Cii-TFe1jYOICVpOAAL_bSy7RGMAABYVAJcp0QAAv-F018_w320_h240_c1_t0_w640_h480_c1_t0.jpg",
                  price: "530",
                  satisfaction: "99%",
                  content:
                    "<上海迪士尼乐园2-4日自驾游>玩具总动员/迪士尼乐园酒店自选等你来抢购，可加定迪士尼门票，相约迪士尼连住更优惠"
                },
                {
                  src:
                    "../src/img/Cii-TFe1jYOICVpOAAL_bSy7RGMAABYVAJcp0QAAv-F018_w320_h240_c1_t0_w640_h480_c1_t0.jpg",
                  price: "339",
                  satisfaction: "94%",
                  content:
                    "<上海柏思特酒店2-4日自驾游>亲子网红酒店，行程自选，可加定迪士尼门票，酒店至迪士尼免费班车接送"
                },
                {
                  src:
                    "../src/img/Cii-TFe1jYOICVpOAAL_bSy7RGMAABYVAJcp0QAAv-F018_w320_h240_c1_t0_w640_h480_c1_t0.jpg",
                  price: "1317",
                  satisfaction: "96%",
                  content:
                    "<上海迪士尼乐园2-4日自驾游>玩具总动员/迪士尼乐园酒店自选，可加定迪士尼门票，相约迪士尼，连住更优惠"
                },
                {
                  src:
                    "../src/img/Cii-TFe1jYOICVpOAAL_bSy7RGMAABYVAJcp0QAAv-F018_w320_h240_c1_t0_w640_h480_c1_t0.jpg",
                  price: "371",
                  satisfaction: "98%",
                  content:
                    "<桔子水晶酒店-上海国际旅游度假区周浦万达店2-4日自驾游>11号线可直达迪士尼，可加购迪士尼门票，享迪士尼免费接送服务"
                },
                {
                  src:
                    "../src/img/Cii-TFe1jYOICVpOAAL_bSy7RGMAABYVAJcp0QAAv-F018_w320_h240_c1_t0_w640_h480_c1_t0.jpg",
                  price: "583",
                  satisfaction: "98%",
                  content:
                    "<上海迪士尼2-4日自驾游>桔子水晶（上海国际旅游度假区周浦万达店），可加购迪士尼门票，享迪士尼免费接送服务"
                },
                {
                  src:
                    "../src/img/Cii-TFe1jYOICVpOAAL_bSy7RGMAABYVAJcp0QAAv-F018_w320_h240_c1_t0_w640_h480_c1_t0.jpg",
                  price: "1317",
                  satisfaction: "96%",
                  content:
                    "<上海迪士尼玩具总动员酒店2-4日自驾游>行程天数自选，可加购迪士尼乐园门票，体验童趣世界，快来开启童话之旅吧"
                },
                {
                  src:
                    "../src/img/Cii-TFe1jYOICVpOAAL_bSy7RGMAABYVAJcp0QAAv-F018_w320_h240_c1_t0_w640_h480_c1_t0.jpg",
                  price: "1317",
                  satisfaction: "96%",
                  content:
                    "<上海迪士尼乐园自驾2日游>宿上海玩具总动员酒店1晚，可加购迪士尼乐园门票，开启您的童话之旅"
                },
                {
                  src:
                    "../src/img/Cii-TFe1jYOICVpOAAL_bSy7RGMAABYVAJcp0QAAv-F018_w320_h240_c1_t0_w640_h480_c1_t0.jpg",
                  price: "276",
                  satisfaction: "97%",
                  content:
                    "<上海鸿锦国际酒店2-4日自驾游>高性价比酒店，行程天数自选，可加定迪士尼门票//上海野生动物园门票，含酒店至迪士尼的往返接送"
                }
              ]
            },
            {
              display: "none",
              where: "安吉",
              left: [{ theme: "安吉", number: 181352 }],
              src:
                "url('../src/img/Cii-s1s19RyIDz8UAAE7H0znH7AAAJVkQPImWIAATs3575.png')",

              right: [
                {
                  src:
                    "../src/img/Cii-Tlk3z62IT5Q6AB6AHx2We_kAALhlAIxr_AAHoA3772_w320_h240_c1_t0_w640_h480_c1_t0.jpg",
                  price: "530",
                  satisfaction: "99%",
                  content:
                    "<上海迪士尼乐园2-4日自驾游>玩具总动员/迪士尼乐园酒店自选等你来抢购，可加定迪士尼门票，相约迪士尼连住更优惠"
                },
                {
                  src:
                    "../src/img/Cii-Tlk3z62IT5Q6AB6AHx2We_kAALhlAIxr_AAHoA3772_w320_h240_c1_t0_w640_h480_c1_t0.jpg",
                  price: "339",
                  satisfaction: "94%",
                  content:
                    "<上海柏思特酒店2-4日自驾游>亲子网红酒店，行程自选，可加定迪士尼门票，酒店至迪士尼免费班车接送"
                },
                {
                  src:
                    "../src/img/Cii-Tlk3z62IT5Q6AB6AHx2We_kAALhlAIxr_AAHoA3772_w320_h240_c1_t0_w640_h480_c1_t0.jpg",
                  price: "1317",
                  satisfaction: "96%",
                  content:
                    "<上海迪士尼乐园2-4日自驾游>玩具总动员/迪士尼乐园酒店自选，可加定迪士尼门票，相约迪士尼，连住更优惠"
                },
                {
                  src:
                    "../src/img/Cii-Tlk3z62IT5Q6AB6AHx2We_kAALhlAIxr_AAHoA3772_w320_h240_c1_t0_w640_h480_c1_t0.jpg",
                  price: "371",
                  satisfaction: "98%",
                  content:
                    "<桔子水晶酒店-上海国际旅游度假区周浦万达店2-4日自驾游>11号线可直达迪士尼，可加购迪士尼门票，享迪士尼免费接送服务"
                },
                {
                  src:
                    "../src/img/Cii-Tlk3z62IT5Q6AB6AHx2We_kAALhlAIxr_AAHoA3772_w320_h240_c1_t0_w640_h480_c1_t0.jpg",
                  price: "583",
                  satisfaction: "98%",
                  content:
                    "<上海迪士尼2-4日自驾游>桔子水晶（上海国际旅游度假区周浦万达店），可加购迪士尼门票，享迪士尼免费接送服务"
                },
                {
                  src:
                    "../src/img/Cii-Tlk3z62IT5Q6AB6AHx2We_kAALhlAIxr_AAHoA3772_w320_h240_c1_t0_w640_h480_c1_t0.jpg",
                  price: "1317",
                  satisfaction: "96%",
                  content:
                    "<上海迪士尼玩具总动员酒店2-4日自驾游>行程天数自选，可加购迪士尼乐园门票，体验童趣世界，快来开启童话之旅吧"
                },
                {
                  src:
                    "../src/img/Cii-Tlk3z62IT5Q6AB6AHx2We_kAALhlAIxr_AAHoA3772_w320_h240_c1_t0_w640_h480_c1_t0.jpg",
                  price: "1317",
                  satisfaction: "96%",
                  content:
                    "<上海迪士尼乐园自驾2日游>宿上海玩具总动员酒店1晚，可加购迪士尼乐园门票，开启您的童话之旅"
                },
                {
                  src:
                    "../src/img/Cii-Tlk3z62IT5Q6AB6AHx2We_kAALhlAIxr_AAHoA3772_w320_h240_c1_t0_w640_h480_c1_t0.jpg",
                  price: "276",
                  satisfaction: "97%",
                  content:
                    "<上海鸿锦国际酒店2-4日自驾游>高性价比酒店，行程天数自选，可加定迪士尼门票//上海野生动物园门票，含酒店至迪士尼的往返接送"
                }
              ]
            },
            {
              display: "none",
              where: "宁波",
              left: [{ theme: "宁波", number: 181352 }],
              src:
                "url('../src/img/Cii-s1s15hCIajxnAAE7H0znH7AAAJVSwEdk9gAATs3496.png')",

              right: [
                {
                  src:
                    "../src/img/Cii-s1ozea6IMCdHAAzz6x0RWvYAAA10QInRIwADPQD157_w450_h300_c1_t0_w640_h480_c1_t0.jpg",
                  price: "530",
                  satisfaction: "99%",
                  content:
                    "<上海迪士尼乐园2-4日自驾游>玩具总动员/迪士尼乐园酒店自选等你来抢购，可加定迪士尼门票，相约迪士尼连住更优惠"
                },
                {
                  src:
                    "../src/img/Cii-s1ozea6IMCdHAAzz6x0RWvYAAA10QInRIwADPQD157_w450_h300_c1_t0_w640_h480_c1_t0.jpg",
                  price: "339",
                  satisfaction: "94%",
                  content:
                    "<上海柏思特酒店2-4日自驾游>亲子网红酒店，行程自选，可加定迪士尼门票，酒店至迪士尼免费班车接送"
                },
                {
                  src:
                    "../src/img/Cii-s1ozea6IMCdHAAzz6x0RWvYAAA10QInRIwADPQD157_w450_h300_c1_t0_w640_h480_c1_t0.jpg",
                  price: "1317",
                  satisfaction: "96%",
                  content:
                    "<上海迪士尼乐园2-4日自驾游>玩具总动员/迪士尼乐园酒店自选，可加定迪士尼门票，相约迪士尼，连住更优惠"
                },
                {
                  src:
                    "../src/img/Cii-s1ozea6IMCdHAAzz6x0RWvYAAA10QInRIwADPQD157_w450_h300_c1_t0_w640_h480_c1_t0.jpg",
                  price: "371",
                  satisfaction: "98%",
                  content:
                    "<桔子水晶酒店-上海国际旅游度假区周浦万达店2-4日自驾游>11号线可直达迪士尼，可加购迪士尼门票，享迪士尼免费接送服务"
                },
                {
                  src:
                    "../src/img/Cii-s1ozea6IMCdHAAzz6x0RWvYAAA10QInRIwADPQD157_w450_h300_c1_t0_w640_h480_c1_t0.jpg",
                  price: "583",
                  satisfaction: "98%",
                  content:
                    "<上海迪士尼2-4日自驾游>桔子水晶（上海国际旅游度假区周浦万达店），可加购迪士尼门票，享迪士尼免费接送服务"
                },
                {
                  src:
                    "../src/img/Cii-s1ozea6IMCdHAAzz6x0RWvYAAA10QInRIwADPQD157_w450_h300_c1_t0_w640_h480_c1_t0.jpg",
                  price: "1317",
                  satisfaction: "96%",
                  content:
                    "<上海迪士尼玩具总动员酒店2-4日自驾游>行程天数自选，可加购迪士尼乐园门票，体验童趣世界，快来开启童话之旅吧"
                },
                {
                  src:
                    "../src/img/Cii-s1ozea6IMCdHAAzz6x0RWvYAAA10QInRIwADPQD157_w450_h300_c1_t0_w640_h480_c1_t0.jpg",
                  price: "1317",
                  satisfaction: "96%",
                  content:
                    "<上海迪士尼乐园自驾2日游>宿上海玩具总动员酒店1晚，可加购迪士尼乐园门票，开启您的童话之旅"
                },
                {
                  src:
                    "../src/img/Cii-s1ozea6IMCdHAAzz6x0RWvYAAA10QInRIwADPQD157_w450_h300_c1_t0_w640_h480_c1_t0.jpg",
                  price: "276",
                  satisfaction: "97%",
                  content:
                    "<上海鸿锦国际酒店2-4日自驾游>高性价比酒店，行程天数自选，可加定迪士尼门票//上海野生动物园门票，含酒店至迪士尼的往返接送"
                }
              ]
            },
            {
              display: "none",
              where: "常州",
              left: [
                { theme: "中华恐龙园", number: 181352 },
                { theme: "天目湖山水园", number: 181352 },
                { theme: "天目湖水世界", number: 181352 },
                { theme: "东方盐湖城", number: 181352 }
              ],
              src:
                "url('../src/img/Cii-tFs57MiIBigCAAFL0R_FONQAAJfBgPXfX8AAUvp425.png')",

              right: [
                {
                  src:
                    "../src/img/Cii-tFyCPP-IN78mACCYt6SXRhUAAUT6ANsbtUAIJjP364_w320_h240_c1_t0_w640_h480_c1_t0.png",
                  price: "530",
                  satisfaction: "99%",
                  content:
                    "<上海迪士尼乐园2-4日自驾游>玩具总动员/迪士尼乐园酒店自选等你来抢购，可加定迪士尼门票，相约迪士尼连住更优惠"
                },
                {
                  src:
                    "../src/img/Cii-tFyCPP-IN78mACCYt6SXRhUAAUT6ANsbtUAIJjP364_w320_h240_c1_t0_w640_h480_c1_t0.png",
                  price: "339",
                  satisfaction: "94%",
                  content:
                    "<上海柏思特酒店2-4日自驾游>亲子网红酒店，行程自选，可加定迪士尼门票，酒店至迪士尼免费班车接送"
                },
                {
                  src:
                    "../src/img/Cii-tFyCPP-IN78mACCYt6SXRhUAAUT6ANsbtUAIJjP364_w320_h240_c1_t0_w640_h480_c1_t0.png",
                  price: "1317",
                  satisfaction: "96%",
                  content:
                    "<上海迪士尼乐园2-4日自驾游>玩具总动员/迪士尼乐园酒店自选，可加定迪士尼门票，相约迪士尼，连住更优惠"
                },
                {
                  src:
                    "../src/img/Cii-tFyCPP-IN78mACCYt6SXRhUAAUT6ANsbtUAIJjP364_w320_h240_c1_t0_w640_h480_c1_t0.png",
                  price: "371",
                  satisfaction: "98%",
                  content:
                    "<桔子水晶酒店-上海国际旅游度假区周浦万达店2-4日自驾游>11号线可直达迪士尼，可加购迪士尼门票，享迪士尼免费接送服务"
                },
                {
                  src:
                    "../src/img/Cii-tFyCPP-IN78mACCYt6SXRhUAAUT6ANsbtUAIJjP364_w320_h240_c1_t0_w640_h480_c1_t0.png",
                  price: "583",
                  satisfaction: "98%",
                  content:
                    "<上海迪士尼2-4日自驾游>桔子水晶（上海国际旅游度假区周浦万达店），可加购迪士尼门票，享迪士尼免费接送服务"
                },
                {
                  src:
                    "../src/img/Cii-tFyCPP-IN78mACCYt6SXRhUAAUT6ANsbtUAIJjP364_w320_h240_c1_t0_w640_h480_c1_t0.png",
                  price: "1317",
                  satisfaction: "96%",
                  content:
                    "<上海迪士尼玩具总动员酒店2-4日自驾游>行程天数自选，可加购迪士尼乐园门票，体验童趣世界，快来开启童话之旅吧"
                },
                {
                  src:
                    "../src/img/Cii-tFyCPP-IN78mACCYt6SXRhUAAUT6ANsbtUAIJjP364_w320_h240_c1_t0_w640_h480_c1_t0.png",
                  price: "1317",
                  satisfaction: "96%",
                  content:
                    "<上海迪士尼乐园自驾2日游>宿上海玩具总动员酒店1晚，可加购迪士尼乐园门票，开启您的童话之旅"
                },
                {
                  src:
                    "../src/img/Cii-tFyCPP-IN78mACCYt6SXRhUAAUT6ANsbtUAIJjP364_w320_h240_c1_t0_w640_h480_c1_t0.png",
                  price: "276",
                  satisfaction: "97%",
                  content:
                    "<上海鸿锦国际酒店2-4日自驾游>高性价比酒店，行程天数自选，可加定迪士尼门票//上海野生动物园门票，含酒店至迪士尼的往返接送"
                }
              ]
            },
            {
              display: "none",
              where: "黄山",
              left: [
                { theme: "黄山", number: 181352 },
                { theme: "九华山", number: 181352 },
                { theme: "合肥万达主题乐园", number: 181352 },
                { theme: "天目湖水世界", number: 181352 },
                { theme: "月坨岛", number: 181352 }
              ],
              src:
                "url('../src/img/Cii-s1s56puIXudjAAE6V1QSizgAAJe-QNjM-sAATpv796.png')",

              right: [
                {
                  src:
                    "../src/img/Cii-tFwHbLiIZczSABEfejzzGdMAARQdQJcYgoAER-S506_w450_h300_c1_t0_w640_h480_c1_t0.jpg",
                  price: "530",
                  satisfaction: "99%",
                  content:
                    "<上海迪士尼乐园2-4日自驾游>玩具总动员/迪士尼乐园酒店自选等你来抢购，可加定迪士尼门票，相约迪士尼连住更优惠"
                },
                {
                  src:
                    "../src/img/Cii-tFwHbLiIZczSABEfejzzGdMAARQdQJcYgoAER-S506_w450_h300_c1_t0_w640_h480_c1_t0.jpg",
                  price: "339",
                  satisfaction: "94%",
                  content:
                    "<上海柏思特酒店2-4日自驾游>亲子网红酒店，行程自选，可加定迪士尼门票，酒店至迪士尼免费班车接送"
                },
                {
                  src:
                    "../src/img/Cii-tFwHbLiIZczSABEfejzzGdMAARQdQJcYgoAER-S506_w450_h300_c1_t0_w640_h480_c1_t0.jpg",
                  price: "1317",
                  satisfaction: "96%",
                  content:
                    "<上海迪士尼乐园2-4日自驾游>玩具总动员/迪士尼乐园酒店自选，可加定迪士尼门票，相约迪士尼，连住更优惠"
                },
                {
                  src:
                    "../src/img/Cii-tFwHbLiIZczSABEfejzzGdMAARQdQJcYgoAER-S506_w450_h300_c1_t0_w640_h480_c1_t0.jpg",
                  price: "371",
                  satisfaction: "98%",
                  content:
                    "<桔子水晶酒店-上海国际旅游度假区周浦万达店2-4日自驾游>11号线可直达迪士尼，可加购迪士尼门票，享迪士尼免费接送服务"
                },
                {
                  src:
                    "../src/img/Cii-tFwHbLiIZczSABEfejzzGdMAARQdQJcYgoAER-S506_w450_h300_c1_t0_w640_h480_c1_t0.jpg",
                  price: "583",
                  satisfaction: "98%",
                  content:
                    "<上海迪士尼2-4日自驾游>桔子水晶（上海国际旅游度假区周浦万达店），可加购迪士尼门票，享迪士尼免费接送服务"
                },
                {
                  src:
                    "../src/img/Cii-tFwHbLiIZczSABEfejzzGdMAARQdQJcYgoAER-S506_w450_h300_c1_t0_w640_h480_c1_t0.jpg",
                  price: "1317",
                  satisfaction: "96%",
                  content:
                    "<上海迪士尼玩具总动员酒店2-4日自驾游>行程天数自选，可加购迪士尼乐园门票，体验童趣世界，快来开启童话之旅吧"
                },
                {
                  src:
                    "../src/img/Cii-tFwHbLiIZczSABEfejzzGdMAARQdQJcYgoAER-S506_w450_h300_c1_t0_w640_h480_c1_t0.jpg",
                  price: "1317",
                  satisfaction: "96%",
                  content:
                    "<上海迪士尼乐园自驾2日游>宿上海玩具总动员酒店1晚，可加购迪士尼乐园门票，开启您的童话之旅"
                },
                {
                  src:
                    "../src/img/Cii-tFwHbLiIZczSABEfejzzGdMAARQdQJcYgoAER-S506_w450_h300_c1_t0_w640_h480_c1_t0.jpg",
                  price: "276",
                  satisfaction: "97%",
                  content:
                    "<上海鸿锦国际酒店2-4日自驾游>高性价比酒店，行程天数自选，可加定迪士尼门票//上海野生动物园门票，含酒店至迪士尼的往返接送"
                }
              ]
            }
          ]
        },
        {
          theme: "亲子乐园",
          place: [
            {
              display: "block",
              where: "迪士尼乐园",
              left: [
                { theme: "黄山", number: 222599 },
                { theme: "九华山", number: 22954 },
                { theme: "合肥万达主题乐园", number: 770 },
                { theme: "天目湖水世界", number: 91729 },
                { theme: "月坨岛", number: 4974 }
              ],
              src:
                "url('../src/img/Cii-s1s56puIXudjAAE6V1QSizgAAJe-QNjM-sAATpv796.png')",

              right: [
                {
                  src:
                    "../src/img/Cii-Tlg2feKIb61lACaeDLaPr4EAAEzPQOLokYAJp4k649_w320_h240_c1_t0_w640_h480_c1_t0.jpg",
                  price: "530",
                  satisfaction: "99%",
                  content:
                    "<上海迪士尼乐园2-4日自驾游>玩具总动员/迪士尼乐园酒店自选等你来抢购，可加定迪士尼门票，相约迪士尼连住更优惠"
                },
                {
                  src:
                    "../src/img/Cii-slvhAguIB22IAAMLSZpJ88sAAQHjwFPGyAAAwth435_w320_h240_c1_t0_w640_h480_c1_t0.jpg",
                  price: "339",
                  satisfaction: "94%",
                  content:
                    "<上海柏思特酒店2-4日自驾游>亲子网红酒店，行程自选，可加定迪士尼门票，酒店至迪士尼免费班车接送"
                },
                {
                  src:
                    "../src/img/Cii-T1g2fd2IXTYZABu7YIJ7LvAAAEzPQLYLhEAG7t4240_w320_h240_c1_t0_w640_h480_c1_t0.jpg",
                  price: "1317",
                  satisfaction: "96%",
                  content:
                    "<上海迪士尼乐园2-4日自驾游>玩具总动员/迪士尼乐园酒店自选，可加定迪士尼门票，相约迪士尼，连住更优惠"
                },
                {
                  src:
                    "../src/img/Cii-Tlg1ZeyIceybACGwwS3KUgsAAEuAwH22kwAIbDZ882_w320_h240_c1_t0_w640_h480_c1_t0.jpg",
                  price: "371",
                  satisfaction: "98%",
                  content:
                    "<桔子水晶酒店-上海国际旅游度假区周浦万达店2-4日自驾游>11号线可直达迪士尼，可加购迪士尼门票，享迪士尼免费接送服务"
                },
                {
                  src:
                    "../src/img/Cii-T1g2feOICMnCABvKOwbB9BYAAEzPQO6upkAG8pT177_w320_h240_c1_t0_w640_h480_c1_t0.jpg",
                  price: "583",
                  satisfaction: "98%",
                  content:
                    "<上海迪士尼2-4日自驾游>桔子水晶（上海国际旅游度假区周浦万达店），可加购迪士尼门票，享迪士尼免费接送服务"
                },
                {
                  src:
                    "../src/img/Cii9EFdwhNWIZgqoAMlqRZt4rTEAAGwbAGdWEgAyWpd905_w320_h240_c1_t0_w640_h480_c1_t0.jpg",
                  price: "1317",
                  satisfaction: "96%",
                  content:
                    "<上海迪士尼玩具总动员酒店2-4日自驾游>行程天数自选，可加购迪士尼乐园门票，体验童趣世界，快来开启童话之旅吧"
                },
                {
                  src:
                    "../src/img/Cii_J1zuNDaIO9JPAAIg5-3VXfgAAGcvgIGRwoAAiD_70_w640_h480_c1_t0.jpg",
                  price: "1317",
                  satisfaction: "96%",
                  content:
                    "<上海迪士尼乐园自驾2日游>宿上海玩具总动员酒店1晚，可加购迪士尼乐园门票，开启您的童话之旅"
                },
                {
                  src:
                    "../src/img/Cii-sl0IqYCIJlApAAC2GBfXjOwAAW-2wCizrkAALYw97_w640_h480_c1_t0.jpg",
                  price: "276",
                  satisfaction: "97%",
                  content:
                    "<上海鸿锦国际酒店2-4日自驾游>高性价比酒店，行程天数自选，可加定迪士尼门票//上海野生动物园门票，含酒店至迪士尼的往返接送"
                }
              ]
            },
            {
              display: "none",
              where: "常州恐龙园",
              left: [
                { theme: "杭州", number: 712090 },
                { theme: "苏州", number: 334717 },
                { theme: "千岛湖", number: 270585 },
                { theme: "黄山", number: 228708 },
                { theme: "嘉兴", number: 187797 },
                { theme: "宁波", number: 420043 }
              ],
              src: "url('../src/img/remai.jpg')",

              right: [
                {
                  src:
                    "../src/img/Cii-s1q50jWIWt-fAGTWP-nhSYcAAEyzwAAAAAAZNZX457_w320_h240_c1_t0_w640_h480_c1_t0.jpg",
                  price: "530",
                  satisfaction: "99%",
                  content:
                    "<上海迪士尼乐园2-4日自驾游>玩具总动员/迪士尼乐园酒店自选等你来抢购，可加定迪士尼门票，相约迪士尼连住更优惠"
                },
                {
                  src:
                    "../src/img/Cii-s1q50jWIWt-fAGTWP-nhSYcAAEyzwAAAAAAZNZX457_w320_h240_c1_t0_w640_h480_c1_t0.jpg",
                  price: "339",
                  satisfaction: "94%",
                  content:
                    "<上海柏思特酒店2-4日自驾游>亲子网红酒店，行程自选，可加定迪士尼门票，酒店至迪士尼免费班车接送"
                },
                {
                  src:
                    "../src/img/Cii-s1q50jWIWt-fAGTWP-nhSYcAAEyzwAAAAAAZNZX457_w320_h240_c1_t0_w640_h480_c1_t0.jpg",
                  price: "1317",
                  satisfaction: "96%",
                  content:
                    "<上海迪士尼乐园2-4日自驾游>玩具总动员/迪士尼乐园酒店自选，可加定迪士尼门票，相约迪士尼，连住更优惠"
                },
                {
                  src:
                    "../src/img/Cii-s1q50jWIWt-fAGTWP-nhSYcAAEyzwAAAAAAZNZX457_w320_h240_c1_t0_w640_h480_c1_t0.jpg",
                  price: "371",
                  satisfaction: "98%",
                  content:
                    "<桔子水晶酒店-上海国际旅游度假区周浦万达店2-4日自驾游>11号线可直达迪士尼，可加购迪士尼门票，享迪士尼免费接送服务"
                },
                {
                  src:
                    "../src/img/Cii-s1q50jWIWt-fAGTWP-nhSYcAAEyzwAAAAAAZNZX457_w320_h240_c1_t0_w640_h480_c1_t0.jpg",
                  price: "583",
                  satisfaction: "98%",
                  content:
                    "<上海迪士尼2-4日自驾游>桔子水晶（上海国际旅游度假区周浦万达店），可加购迪士尼门票，享迪士尼免费接送服务"
                },
                {
                  src:
                    "../src/img/Cii-s1q50jWIWt-fAGTWP-nhSYcAAEyzwAAAAAAZNZX457_w320_h240_c1_t0_w640_h480_c1_t0.jpg",
                  price: "1317",
                  satisfaction: "96%",
                  content:
                    "<上海迪士尼玩具总动员酒店2-4日自驾游>行程天数自选，可加购迪士尼乐园门票，体验童趣世界，快来开启童话之旅吧"
                },
                {
                  src:
                    "../src/img/Cii-s1q50jWIWt-fAGTWP-nhSYcAAEyzwAAAAAAZNZX457_w320_h240_c1_t0_w640_h480_c1_t0.jpg",
                  price: "1317",
                  satisfaction: "96%",
                  content:
                    "<上海迪士尼乐园自驾2日游>宿上海玩具总动员酒店1晚，可加购迪士尼乐园门票，开启您的童话之旅"
                },
                {
                  src:
                    "../src/img/Cii-s1q50jWIWt-fAGTWP-nhSYcAAEyzwAAAAAAZNZX457_w320_h240_c1_t0_w640_h480_c1_t0.jpg",
                  price: "276",
                  satisfaction: "97%",
                  content:
                    "<上海鸿锦国际酒店2-4日自驾游>高性价比酒店，行程天数自选，可加定迪士尼门票//上海野生动物园门票，含酒店至迪士尼的往返接送"
                }
              ]
            },
            {
              display: "none",
              where: "横店影视城",
              left: [
                { theme: "杭州", number: 712090 },
                { theme: "苏州", number: 334717 },
                { theme: "千岛湖", number: 270585 },
                { theme: "黄山", number: 228708 },
                { theme: "嘉兴", number: 187797 },
                { theme: "宁波", number: 420043 }
              ],
              src:
                "url('../src/img/Cii-s1s15hCIajxnAAE7H0znH7AAAJVSwEdk9gAATs3496.png')",

              right: [
                {
                  src:
                    "../src/img/Cii-T1ekZ_SIL9d_AALVSm9pmGcAAAzagPnEJgAAtVi720_w320_h240_c1_t0_w640_h480_c1_t0.jpg",
                  price: "530",
                  satisfaction: "99%",
                  content:
                    "<上海迪士尼乐园2-4日自驾游>玩具总动员/迪士尼乐园酒店自选等你来抢购，可加定迪士尼门票，相约迪士尼连住更优惠"
                },
                {
                  src:
                    "../src/img/Cii-T1ekZ_SIL9d_AALVSm9pmGcAAAzagPnEJgAAtVi720_w320_h240_c1_t0_w640_h480_c1_t0.jpg",
                  price: "339",
                  satisfaction: "94%",
                  content:
                    "<上海柏思特酒店2-4日自驾游>亲子网红酒店，行程自选，可加定迪士尼门票，酒店至迪士尼免费班车接送"
                },
                {
                  src:
                    "../src/img/Cii-T1ekZ_SIL9d_AALVSm9pmGcAAAzagPnEJgAAtVi720_w320_h240_c1_t0_w640_h480_c1_t0.jpg",
                  price: "1317",
                  satisfaction: "96%",
                  content:
                    "<上海迪士尼乐园2-4日自驾游>玩具总动员/迪士尼乐园酒店自选，可加定迪士尼门票，相约迪士尼，连住更优惠"
                },
                {
                  src:
                    "../src/img/Cii-T1ekZ_SIL9d_AALVSm9pmGcAAAzagPnEJgAAtVi720_w320_h240_c1_t0_w640_h480_c1_t0.jpg",
                  price: "371",
                  satisfaction: "98%",
                  content:
                    "<桔子水晶酒店-上海国际旅游度假区周浦万达店2-4日自驾游>11号线可直达迪士尼，可加购迪士尼门票，享迪士尼免费接送服务"
                },
                {
                  src:
                    "../src/img/Cii-T1ekZ_SIL9d_AALVSm9pmGcAAAzagPnEJgAAtVi720_w320_h240_c1_t0_w640_h480_c1_t0.jpg",
                  price: "583",
                  satisfaction: "98%",
                  content:
                    "<上海迪士尼2-4日自驾游>桔子水晶（上海国际旅游度假区周浦万达店），可加购迪士尼门票，享迪士尼免费接送服务"
                },
                {
                  src:
                    "../src/img/Cii-T1ekZ_SIL9d_AALVSm9pmGcAAAzagPnEJgAAtVi720_w320_h240_c1_t0_w640_h480_c1_t0.jpg",
                  price: "1317",
                  satisfaction: "96%",
                  content:
                    "<上海迪士尼玩具总动员酒店2-4日自驾游>行程天数自选，可加购迪士尼乐园门票，体验童趣世界，快来开启童话之旅吧"
                },
                {
                  src:
                    "../src/img/Cii-T1ekZ_SIL9d_AALVSm9pmGcAAAzagPnEJgAAtVi720_w320_h240_c1_t0_w640_h480_c1_t0.jpg",
                  price: "1317",
                  satisfaction: "96%",
                  content:
                    "<上海迪士尼乐园自驾2日游>宿上海玩具总动员酒店1晚，可加购迪士尼乐园门票，开启您的童话之旅"
                },
                {
                  src:
                    "../src/img/Cii-T1ekZ_SIL9d_AALVSm9pmGcAAAzagPnEJgAAtVi720_w320_h240_c1_t0_w640_h480_c1_t0.jpg",
                  price: "276",
                  satisfaction: "97%",
                  content:
                    "<上海鸿锦国际酒店2-4日自驾游>高性价比酒店，行程天数自选，可加定迪士尼门票//上海野生动物园门票，含酒店至迪士尼的往返接送"
                }
              ]
            },
            {
              display: "none",
              where: "宁波乐园",
              left: [
                { theme: "杭州", number: 712090 },
                { theme: "苏州", number: 334717 },
                { theme: "千岛湖", number: 270585 },
                { theme: "黄山", number: 228708 },
                { theme: "嘉兴", number: 187797 },
                { theme: "南京", number: 2651579 }
              ],
              src:
                "url('../src/img/Cii-s1s56puIXudjAAE6V1QSizgAAJe-QNjM-sAATpv796.png')",

              right: [
                {
                  src:
                    "../src/img/Cii-TFe1jYOICVpOAAL_bSy7RGMAABYVAJcp0QAAv-F018_w320_h240_c1_t0_w640_h480_c1_t0.jpg",
                  price: "530",
                  satisfaction: "99%",
                  content:
                    "<上海迪士尼乐园2-4日自驾游>玩具总动员/迪士尼乐园酒店自选等你来抢购，可加定迪士尼门票，相约迪士尼连住更优惠"
                },
                {
                  src:
                    "../src/img/Cii-TFe1jYOICVpOAAL_bSy7RGMAABYVAJcp0QAAv-F018_w320_h240_c1_t0_w640_h480_c1_t0.jpg",
                  price: "339",
                  satisfaction: "94%",
                  content:
                    "<上海柏思特酒店2-4日自驾游>亲子网红酒店，行程自选，可加定迪士尼门票，酒店至迪士尼免费班车接送"
                },
                {
                  src:
                    "../src/img/Cii-TFe1jYOICVpOAAL_bSy7RGMAABYVAJcp0QAAv-F018_w320_h240_c1_t0_w640_h480_c1_t0.jpg",
                  price: "1317",
                  satisfaction: "96%",
                  content:
                    "<上海迪士尼乐园2-4日自驾游>玩具总动员/迪士尼乐园酒店自选，可加定迪士尼门票，相约迪士尼，连住更优惠"
                },
                {
                  src:
                    "../src/img/Cii-TFe1jYOICVpOAAL_bSy7RGMAABYVAJcp0QAAv-F018_w320_h240_c1_t0_w640_h480_c1_t0.jpg",
                  price: "371",
                  satisfaction: "98%",
                  content:
                    "<桔子水晶酒店-上海国际旅游度假区周浦万达店2-4日自驾游>11号线可直达迪士尼，可加购迪士尼门票，享迪士尼免费接送服务"
                },
                {
                  src:
                    "../src/img/Cii-TFe1jYOICVpOAAL_bSy7RGMAABYVAJcp0QAAv-F018_w320_h240_c1_t0_w640_h480_c1_t0.jpg",
                  price: "583",
                  satisfaction: "98%",
                  content:
                    "<上海迪士尼2-4日自驾游>桔子水晶（上海国际旅游度假区周浦万达店），可加购迪士尼门票，享迪士尼免费接送服务"
                },
                {
                  src:
                    "../src/img/Cii-TFe1jYOICVpOAAL_bSy7RGMAABYVAJcp0QAAv-F018_w320_h240_c1_t0_w640_h480_c1_t0.jpg",
                  price: "1317",
                  satisfaction: "96%",
                  content:
                    "<上海迪士尼玩具总动员酒店2-4日自驾游>行程天数自选，可加购迪士尼乐园门票，体验童趣世界，快来开启童话之旅吧"
                },
                {
                  src:
                    "../src/img/Cii-TFe1jYOICVpOAAL_bSy7RGMAABYVAJcp0QAAv-F018_w320_h240_c1_t0_w640_h480_c1_t0.jpg",
                  price: "1317",
                  satisfaction: "96%",
                  content:
                    "<上海迪士尼乐园自驾2日游>宿上海玩具总动员酒店1晚，可加购迪士尼乐园门票，开启您的童话之旅"
                },
                {
                  src:
                    "../src/img/Cii-TFe1jYOICVpOAAL_bSy7RGMAABYVAJcp0QAAv-F018_w320_h240_c1_t0_w640_h480_c1_t0.jpg",
                  price: "276",
                  satisfaction: "97%",
                  content:
                    "<上海鸿锦国际酒店2-4日自驾游>高性价比酒店，行程天数自选，可加定迪士尼门票//上海野生动物园门票，含酒店至迪士尼的往返接送"
                }
              ]
            }
          ]
        },
        {
          theme: "悠悠古镇",
          place: [
            {
              display: "block",
              where: "精选古镇",
              left: [
                { theme: "苏州", number: 334717 },
                { theme: "南京", number: 79050 },
                { theme: "杭州", number: 709755 },
                { theme: "无锡", number: 181352 },
                { theme: "宁波", number: 420043 },
                { theme: "安吉", number: 138163 }
              ],
              src:
                "url('../src/img/Cii-tFs57XeIV51xAAFBM_VlL1wAAJfCwJrScMAAUFL617.png')",

              right: [
                {
                  src:
                    "../src/img/Cii-Tlg2feKIb61lACaeDLaPr4EAAEzPQOLokYAJp4k649_w320_h240_c1_t0_w640_h480_c1_t0.jpg",
                  price: "530",
                  satisfaction: "99%",
                  content:
                    "<上海迪士尼乐园2-4日自驾游>玩具总动员/迪士尼乐园酒店自选等你来抢购，可加定迪士尼门票，相约迪士尼连住更优惠"
                },
                {
                  src:
                    "../src/img/Cii-slvhAguIB22IAAMLSZpJ88sAAQHjwFPGyAAAwth435_w320_h240_c1_t0_w640_h480_c1_t0.jpg",
                  price: "339",
                  satisfaction: "94%",
                  content:
                    "<上海柏思特酒店2-4日自驾游>亲子网红酒店，行程自选，可加定迪士尼门票，酒店至迪士尼免费班车接送"
                },
                {
                  src:
                    "../src/img/Cii-T1g2fd2IXTYZABu7YIJ7LvAAAEzPQLYLhEAG7t4240_w320_h240_c1_t0_w640_h480_c1_t0.jpg",
                  price: "1317",
                  satisfaction: "96%",
                  content:
                    "<上海迪士尼乐园2-4日自驾游>玩具总动员/迪士尼乐园酒店自选，可加定迪士尼门票，相约迪士尼，连住更优惠"
                },
                {
                  src:
                    "../src/img/Cii-Tlg1ZeyIceybACGwwS3KUgsAAEuAwH22kwAIbDZ882_w320_h240_c1_t0_w640_h480_c1_t0.jpg",
                  price: "371",
                  satisfaction: "98%",
                  content:
                    "<桔子水晶酒店-上海国际旅游度假区周浦万达店2-4日自驾游>11号线可直达迪士尼，可加购迪士尼门票，享迪士尼免费接送服务"
                },
                {
                  src:
                    "../src/img/Cii-T1g2feOICMnCABvKOwbB9BYAAEzPQO6upkAG8pT177_w320_h240_c1_t0_w640_h480_c1_t0.jpg",
                  price: "583",
                  satisfaction: "98%",
                  content:
                    "<上海迪士尼2-4日自驾游>桔子水晶（上海国际旅游度假区周浦万达店），可加购迪士尼门票，享迪士尼免费接送服务"
                },
                {
                  src:
                    "../src/img/Cii9EFdwhNWIZgqoAMlqRZt4rTEAAGwbAGdWEgAyWpd905_w320_h240_c1_t0_w640_h480_c1_t0.jpg",
                  price: "1317",
                  satisfaction: "96%",
                  content:
                    "<上海迪士尼玩具总动员酒店2-4日自驾游>行程天数自选，可加购迪士尼乐园门票，体验童趣世界，快来开启童话之旅吧"
                },
                {
                  src:
                    "../src/img/Cii_J1zuNDaIO9JPAAIg5-3VXfgAAGcvgIGRwoAAiD_70_w640_h480_c1_t0.jpg",
                  price: "1317",
                  satisfaction: "96%",
                  content:
                    "<上海迪士尼乐园自驾2日游>宿上海玩具总动员酒店1晚，可加购迪士尼乐园门票，开启您的童话之旅"
                },
                {
                  src:
                    "../src/img/Cii-sl0IqYCIJlApAAC2GBfXjOwAAW-2wCizrkAALYw97_w640_h480_c1_t0.jpg",
                  price: "276",
                  satisfaction: "97%",
                  content:
                    "<上海鸿锦国际酒店2-4日自驾游>高性价比酒店，行程天数自选，可加定迪士尼门票//上海野生动物园门票，含酒店至迪士尼的往返接送"
                }
              ]
            },
            {
              display: "none",
              where: "乌镇/西塘",
              left: [{ theme: "灵山小镇·拈花湾", number: 121085 },{ theme: "鼋头渚", number: 113678 },{ theme: "灵山大佛", number: 87920 },{ theme: "三国城", number: 12713 },{ theme: "太湖湿地公园", number: 89 }],
              src:
                "url('../src/img/Cii-tFtAMDCIRl0CAAFIYOvEVGUAAJyMwP5bGoAAUh4528.png')",

              right: [
                {
                  src:
                    "../src/img/Cii-s1q50jWIWt-fAGTWP-nhSYcAAEyzwAAAAAAZNZX457_w320_h240_c1_t0_w640_h480_c1_t0.jpg",
                  price: "530",
                  satisfaction: "99%",
                  content:
                    "<上海迪士尼乐园2-4日自驾游>玩具总动员/迪士尼乐园酒店自选等你来抢购，可加定迪士尼门票，相约迪士尼连住更优惠"
                },
                {
                  src:
                    "../src/img/Cii-s1q50jWIWt-fAGTWP-nhSYcAAEyzwAAAAAAZNZX457_w320_h240_c1_t0_w640_h480_c1_t0.jpg",
                  price: "339",
                  satisfaction: "94%",
                  content:
                    "<上海柏思特酒店2-4日自驾游>亲子网红酒店，行程自选，可加定迪士尼门票，酒店至迪士尼免费班车接送"
                },
                {
                  src:
                    "../src/img/Cii-s1q50jWIWt-fAGTWP-nhSYcAAEyzwAAAAAAZNZX457_w320_h240_c1_t0_w640_h480_c1_t0.jpg",
                  price: "1317",
                  satisfaction: "96%",
                  content:
                    "<上海迪士尼乐园2-4日自驾游>玩具总动员/迪士尼乐园酒店自选，可加定迪士尼门票，相约迪士尼，连住更优惠"
                },
                {
                  src:
                    "../src/img/Cii-s1q50jWIWt-fAGTWP-nhSYcAAEyzwAAAAAAZNZX457_w320_h240_c1_t0_w640_h480_c1_t0.jpg",
                  price: "371",
                  satisfaction: "98%",
                  content:
                    "<桔子水晶酒店-上海国际旅游度假区周浦万达店2-4日自驾游>11号线可直达迪士尼，可加购迪士尼门票，享迪士尼免费接送服务"
                },
                {
                  src:
                    "../src/img/Cii-s1q50jWIWt-fAGTWP-nhSYcAAEyzwAAAAAAZNZX457_w320_h240_c1_t0_w640_h480_c1_t0.jpg",
                  price: "583",
                  satisfaction: "98%",
                  content:
                    "<上海迪士尼2-4日自驾游>桔子水晶（上海国际旅游度假区周浦万达店），可加购迪士尼门票，享迪士尼免费接送服务"
                },
                {
                  src:
                    "../src/img/Cii-s1q50jWIWt-fAGTWP-nhSYcAAEyzwAAAAAAZNZX457_w320_h240_c1_t0_w640_h480_c1_t0.jpg",
                  price: "1317",
                  satisfaction: "96%",
                  content:
                    "<上海迪士尼玩具总动员酒店2-4日自驾游>行程天数自选，可加购迪士尼乐园门票，体验童趣世界，快来开启童话之旅吧"
                },
                {
                  src:
                    "../src/img/Cii-s1q50jWIWt-fAGTWP-nhSYcAAEyzwAAAAAAZNZX457_w320_h240_c1_t0_w640_h480_c1_t0.jpg",
                  price: "1317",
                  satisfaction: "96%",
                  content:
                    "<上海迪士尼乐园自驾2日游>宿上海玩具总动员酒店1晚，可加购迪士尼乐园门票，开启您的童话之旅"
                },
                {
                  src:
                    "../src/img/Cii-s1q50jWIWt-fAGTWP-nhSYcAAEyzwAAAAAAZNZX457_w320_h240_c1_t0_w640_h480_c1_t0.jpg",
                  price: "276",
                  satisfaction: "97%",
                  content:
                    "<上海鸿锦国际酒店2-4日自驾游>高性价比酒店，行程天数自选，可加定迪士尼门票//上海野生动物园门票，含酒店至迪士尼的往返接送"
                }
              ]
            },
            {
              display: "none",
              where: "同里",
              left: [{ theme: "中华恐龙园", number: 93677 },{ theme: "唱的动漫嬉戏谷", number: 98752 },{ theme: "常州淹城野生动物园", number: 84543 },{ theme: "常州淹城春秋乐园", number: 44590 }],
              src:
                "url('../src/img/Cii-T1fifxSIS1E4AADKeBETnwoAACpuAIyQAgAAMqQ787.png')",

              right: [
                {
                  src:
                    "../src/img/Cii-T1ekZ_SIL9d_AALVSm9pmGcAAAzagPnEJgAAtVi720_w320_h240_c1_t0_w640_h480_c1_t0.jpg",
                  price: "530",
                  satisfaction: "99%",
                  content:
                    "<上海迪士尼乐园2-4日自驾游>玩具总动员/迪士尼乐园酒店自选等你来抢购，可加定迪士尼门票，相约迪士尼连住更优惠"
                },
                {
                  src:
                    "../src/img/Cii-T1ekZ_SIL9d_AALVSm9pmGcAAAzagPnEJgAAtVi720_w320_h240_c1_t0_w640_h480_c1_t0.jpg",
                  price: "339",
                  satisfaction: "94%",
                  content:
                    "<上海柏思特酒店2-4日自驾游>亲子网红酒店，行程自选，可加定迪士尼门票，酒店至迪士尼免费班车接送"
                },
                {
                  src:
                    "../src/img/Cii-T1ekZ_SIL9d_AALVSm9pmGcAAAzagPnEJgAAtVi720_w320_h240_c1_t0_w640_h480_c1_t0.jpg",
                  price: "1317",
                  satisfaction: "96%",
                  content:
                    "<上海迪士尼乐园2-4日自驾游>玩具总动员/迪士尼乐园酒店自选，可加定迪士尼门票，相约迪士尼，连住更优惠"
                },
                {
                  src:
                    "../src/img/Cii-T1ekZ_SIL9d_AALVSm9pmGcAAAzagPnEJgAAtVi720_w320_h240_c1_t0_w640_h480_c1_t0.jpg",
                  price: "371",
                  satisfaction: "98%",
                  content:
                    "<桔子水晶酒店-上海国际旅游度假区周浦万达店2-4日自驾游>11号线可直达迪士尼，可加购迪士尼门票，享迪士尼免费接送服务"
                },
                {
                  src:
                    "../src/img/Cii-T1ekZ_SIL9d_AALVSm9pmGcAAAzagPnEJgAAtVi720_w320_h240_c1_t0_w640_h480_c1_t0.jpg",
                  price: "583",
                  satisfaction: "98%",
                  content:
                    "<上海迪士尼2-4日自驾游>桔子水晶（上海国际旅游度假区周浦万达店），可加购迪士尼门票，享迪士尼免费接送服务"
                },
                {
                  src:
                    "../src/img/Cii-T1ekZ_SIL9d_AALVSm9pmGcAAAzagPnEJgAAtVi720_w320_h240_c1_t0_w640_h480_c1_t0.jpg",
                  price: "1317",
                  satisfaction: "96%",
                  content:
                    "<上海迪士尼玩具总动员酒店2-4日自驾游>行程天数自选，可加购迪士尼乐园门票，体验童趣世界，快来开启童话之旅吧"
                },
                {
                  src:
                    "../src/img/Cii-T1ekZ_SIL9d_AALVSm9pmGcAAAzagPnEJgAAtVi720_w320_h240_c1_t0_w640_h480_c1_t0.jpg",
                  price: "1317",
                  satisfaction: "96%",
                  content:
                    "<上海迪士尼乐园自驾2日游>宿上海玩具总动员酒店1晚，可加购迪士尼乐园门票，开启您的童话之旅"
                },
                {
                  src:
                    "../src/img/Cii-T1ekZ_SIL9d_AALVSm9pmGcAAAzagPnEJgAAtVi720_w320_h240_c1_t0_w640_h480_c1_t0.jpg",
                  price: "276",
                  satisfaction: "97%",
                  content:
                    "<上海鸿锦国际酒店2-4日自驾游>高性价比酒店，行程天数自选，可加定迪士尼门票//上海野生动物园门票，含酒店至迪士尼的往返接送"
                }
              ]
            }
          ]
        },
        {
          theme: "游山玩水",
          place: [
            {
              display: "block",
              where: "天目湖",
              left: [
                { theme: "中山陵", number: 44414 },
                { theme: "银杏湖主题乐园", number: 96 },
                { theme: "南京海底世界", number: 1039 },
                { theme: "汤山颐尚温泉", number: 14268 },
                { theme: "汤山紫清湖生态旅游温泉度假区", number: 14289 }
              ],
              src:
                "url('../src/img/Cii-tFtAMDCIRl0CAAFIYOvEVGUAAJyMwP5bGoAAUh4528 (1).png')",

              right: [
                {
                  src:
                    "../src/img/Cii-Tlg2feKIb61lACaeDLaPr4EAAEzPQOLokYAJp4k649_w320_h240_c1_t0_w640_h480_c1_t0.jpg",
                  price: "530",
                  satisfaction: "99%",
                  content:
                    "<上海迪士尼乐园2-4日自驾游>玩具总动员/迪士尼乐园酒店自选等你来抢购，可加定迪士尼门票，相约迪士尼连住更优惠"
                },
                {
                  src:
                    "../src/img/Cii-slvhAguIB22IAAMLSZpJ88sAAQHjwFPGyAAAwth435_w320_h240_c1_t0_w640_h480_c1_t0.jpg",
                  price: "339",
                  satisfaction: "94%",
                  content:
                    "<上海柏思特酒店2-4日自驾游>亲子网红酒店，行程自选，可加定迪士尼门票，酒店至迪士尼免费班车接送"
                },
                {
                  src:
                    "../src/img/Cii-T1g2fd2IXTYZABu7YIJ7LvAAAEzPQLYLhEAG7t4240_w320_h240_c1_t0_w640_h480_c1_t0.jpg",
                  price: "1317",
                  satisfaction: "96%",
                  content:
                    "<上海迪士尼乐园2-4日自驾游>玩具总动员/迪士尼乐园酒店自选，可加定迪士尼门票，相约迪士尼，连住更优惠"
                },
                {
                  src:
                    "../src/img/Cii-Tlg1ZeyIceybACGwwS3KUgsAAEuAwH22kwAIbDZ882_w320_h240_c1_t0_w640_h480_c1_t0.jpg",
                  price: "371",
                  satisfaction: "98%",
                  content:
                    "<桔子水晶酒店-上海国际旅游度假区周浦万达店2-4日自驾游>11号线可直达迪士尼，可加购迪士尼门票，享迪士尼免费接送服务"
                },
                {
                  src:
                    "../src/img/Cii-T1g2feOICMnCABvKOwbB9BYAAEzPQO6upkAG8pT177_w320_h240_c1_t0_w640_h480_c1_t0.jpg",
                  price: "583",
                  satisfaction: "98%",
                  content:
                    "<上海迪士尼2-4日自驾游>桔子水晶（上海国际旅游度假区周浦万达店），可加购迪士尼门票，享迪士尼免费接送服务"
                },
                {
                  src:
                    "../src/img/Cii9EFdwhNWIZgqoAMlqRZt4rTEAAGwbAGdWEgAyWpd905_w320_h240_c1_t0_w640_h480_c1_t0.jpg",
                  price: "1317",
                  satisfaction: "96%",
                  content:
                    "<上海迪士尼玩具总动员酒店2-4日自驾游>行程天数自选，可加购迪士尼乐园门票，体验童趣世界，快来开启童话之旅吧"
                },
                {
                  src:
                    "../src/img/Cii_J1zuNDaIO9JPAAIg5-3VXfgAAGcvgIGRwoAAiD_70_w640_h480_c1_t0.jpg",
                  price: "1317",
                  satisfaction: "96%",
                  content:
                    "<上海迪士尼乐园自驾2日游>宿上海玩具总动员酒店1晚，可加购迪士尼乐园门票，开启您的童话之旅"
                },
                {
                  src:
                    "../src/img/Cii-sl0IqYCIJlApAAC2GBfXjOwAAW-2wCizrkAALYw97_w640_h480_c1_t0.jpg",
                  price: "276",
                  satisfaction: "97%",
                  content:
                    "<上海鸿锦国际酒店2-4日自驾游>高性价比酒店，行程天数自选，可加定迪士尼门票//上海野生动物园门票，含酒店至迪士尼的往返接送"
                }
              ]
            },
            {
              display: "none",
              where: "灵山",
              left: [{ theme: "杭州宋城", number: 130940 },{ theme: "西湖", number: 148494 },{ theme: "千岛湖", number: 270585 },{ theme: "西溪湿地", number: 18642 },{ theme: "桐庐", number: 100433 },{ theme: "临安", number: 86795 }],
              src:
                "url('../src/img/Cii-sls56ySITAuvAAEh7IcgNXQAAJe_AJ2PukAASIE361.png')",

              right: [
                {
                  src:
                    "../src/img/Cii-s1q50jWIWt-fAGTWP-nhSYcAAEyzwAAAAAAZNZX457_w320_h240_c1_t0_w640_h480_c1_t0.jpg",
                  price: "530",
                  satisfaction: "99%",
                  content:
                    "<上海迪士尼乐园2-4日自驾游>玩具总动员/迪士尼乐园酒店自选等你来抢购，可加定迪士尼门票，相约迪士尼连住更优惠"
                },
                {
                  src:
                    "../src/img/Cii-s1q50jWIWt-fAGTWP-nhSYcAAEyzwAAAAAAZNZX457_w320_h240_c1_t0_w640_h480_c1_t0.jpg",
                  price: "339",
                  satisfaction: "94%",
                  content:
                    "<上海柏思特酒店2-4日自驾游>亲子网红酒店，行程自选，可加定迪士尼门票，酒店至迪士尼免费班车接送"
                },
                {
                  src:
                    "../src/img/Cii-s1q50jWIWt-fAGTWP-nhSYcAAEyzwAAAAAAZNZX457_w320_h240_c1_t0_w640_h480_c1_t0.jpg",
                  price: "1317",
                  satisfaction: "96%",
                  content:
                    "<上海迪士尼乐园2-4日自驾游>玩具总动员/迪士尼乐园酒店自选，可加定迪士尼门票，相约迪士尼，连住更优惠"
                },
                {
                  src:
                    "../src/img/Cii-s1q50jWIWt-fAGTWP-nhSYcAAEyzwAAAAAAZNZX457_w320_h240_c1_t0_w640_h480_c1_t0.jpg",
                  price: "371",
                  satisfaction: "98%",
                  content:
                    "<桔子水晶酒店-上海国际旅游度假区周浦万达店2-4日自驾游>11号线可直达迪士尼，可加购迪士尼门票，享迪士尼免费接送服务"
                },
                {
                  src:
                    "../src/img/Cii-s1q50jWIWt-fAGTWP-nhSYcAAEyzwAAAAAAZNZX457_w320_h240_c1_t0_w640_h480_c1_t0.jpg",
                  price: "583",
                  satisfaction: "98%",
                  content:
                    "<上海迪士尼2-4日自驾游>桔子水晶（上海国际旅游度假区周浦万达店），可加购迪士尼门票，享迪士尼免费接送服务"
                },
                {
                  src:
                    "../src/img/Cii-s1q50jWIWt-fAGTWP-nhSYcAAEyzwAAAAAAZNZX457_w320_h240_c1_t0_w640_h480_c1_t0.jpg",
                  price: "1317",
                  satisfaction: "96%",
                  content:
                    "<上海迪士尼玩具总动员酒店2-4日自驾游>行程天数自选，可加购迪士尼乐园门票，体验童趣世界，快来开启童话之旅吧"
                },
                {
                  src:
                    "../src/img/Cii-s1q50jWIWt-fAGTWP-nhSYcAAEyzwAAAAAAZNZX457_w320_h240_c1_t0_w640_h480_c1_t0.jpg",
                  price: "1317",
                  satisfaction: "96%",
                  content:
                    "<上海迪士尼乐园自驾2日游>宿上海玩具总动员酒店1晚，可加购迪士尼乐园门票，开启您的童话之旅"
                },
                {
                  src:
                    "../src/img/Cii-s1q50jWIWt-fAGTWP-nhSYcAAEyzwAAAAAAZNZX457_w320_h240_c1_t0_w640_h480_c1_t0.jpg",
                  price: "276",
                  satisfaction: "97%",
                  content:
                    "<上海鸿锦国际酒店2-4日自驾游>高性价比酒店，行程天数自选，可加定迪士尼门票//上海野生动物园门票，含酒店至迪士尼的往返接送"
                }
              ]
            },
            {
              display: "none",
              where: "大明山",
              left: [{ theme: "千岛湖", number: 270585 },{ theme: "千岛湖林海归真", number: 112308 },{ theme: "杭州", number: 709755 },{ theme: "西湖", number: 148494 }],
              src:
                "url('../src/img/Cii-sls56ySITAuvAAEh7IcgNXQAAJe_AJ2PukAASIE361.png')",

              right: [
                {
                  src:
                    "../src/img/Cii-T1ekZ_SIL9d_AALVSm9pmGcAAAzagPnEJgAAtVi720_w320_h240_c1_t0_w640_h480_c1_t0.jpg",
                  price: "530",
                  satisfaction: "99%",
                  content:
                    "<上海迪士尼乐园2-4日自驾游>玩具总动员/迪士尼乐园酒店自选等你来抢购，可加定迪士尼门票，相约迪士尼连住更优惠"
                },
                {
                  src:
                    "../src/img/Cii-T1ekZ_SIL9d_AALVSm9pmGcAAAzagPnEJgAAtVi720_w320_h240_c1_t0_w640_h480_c1_t0.jpg",
                  price: "339",
                  satisfaction: "94%",
                  content:
                    "<上海柏思特酒店2-4日自驾游>亲子网红酒店，行程自选，可加定迪士尼门票，酒店至迪士尼免费班车接送"
                },
                {
                  src:
                    "../src/img/Cii-T1ekZ_SIL9d_AALVSm9pmGcAAAzagPnEJgAAtVi720_w320_h240_c1_t0_w640_h480_c1_t0.jpg",
                  price: "1317",
                  satisfaction: "96%",
                  content:
                    "<上海迪士尼乐园2-4日自驾游>玩具总动员/迪士尼乐园酒店自选，可加定迪士尼门票，相约迪士尼，连住更优惠"
                },
                {
                  src:
                    "../src/img/Cii-T1ekZ_SIL9d_AALVSm9pmGcAAAzagPnEJgAAtVi720_w320_h240_c1_t0_w640_h480_c1_t0.jpg",
                  price: "371",
                  satisfaction: "98%",
                  content:
                    "<桔子水晶酒店-上海国际旅游度假区周浦万达店2-4日自驾游>11号线可直达迪士尼，可加购迪士尼门票，享迪士尼免费接送服务"
                },
                {
                  src:
                    "../src/img/Cii-T1ekZ_SIL9d_AALVSm9pmGcAAAzagPnEJgAAtVi720_w320_h240_c1_t0_w640_h480_c1_t0.jpg",
                  price: "583",
                  satisfaction: "98%",
                  content:
                    "<上海迪士尼2-4日自驾游>桔子水晶（上海国际旅游度假区周浦万达店），可加购迪士尼门票，享迪士尼免费接送服务"
                },
                {
                  src:
                    "../src/img/Cii-T1ekZ_SIL9d_AALVSm9pmGcAAAzagPnEJgAAtVi720_w320_h240_c1_t0_w640_h480_c1_t0.jpg",
                  price: "1317",
                  satisfaction: "96%",
                  content:
                    "<上海迪士尼玩具总动员酒店2-4日自驾游>行程天数自选，可加购迪士尼乐园门票，体验童趣世界，快来开启童话之旅吧"
                },
                {
                  src:
                    "../src/img/Cii-T1ekZ_SIL9d_AALVSm9pmGcAAAzagPnEJgAAtVi720_w320_h240_c1_t0_w640_h480_c1_t0.jpg",
                  price: "1317",
                  satisfaction: "96%",
                  content:
                    "<上海迪士尼乐园自驾2日游>宿上海玩具总动员酒店1晚，可加购迪士尼乐园门票，开启您的童话之旅"
                },
                {
                  src:
                    "../src/img/Cii-T1ekZ_SIL9d_AALVSm9pmGcAAAzagPnEJgAAtVi720_w320_h240_c1_t0_w640_h480_c1_t0.jpg",
                  price: "276",
                  satisfaction: "97%",
                  content:
                    "<上海鸿锦国际酒店2-4日自驾游>高性价比酒店，行程天数自选，可加定迪士尼门票//上海野生动物园门票，含酒店至迪士尼的往返接送"
                }
              ]
            },
            {
              display: "none",
              where: "庐山",
              left: [{ theme: "阳明温泉", number: 63957 },{ theme: "东钱湖", number: 72072 },{ theme: "四明山", number: 68400 },{ theme: "宁波方特东方神画主题公园", number: 1891 },{ theme: "象山县", number: 92969 },{ theme: "宁波九龙湖", number: 1073 }],
              src:
                "url('../src/img/Cii-sls56ySITAuvAAEh7IcgNXQAAJe_AJ2PukAASIE361.png')",

              right: [
                {
                  src:
                    "../src/img/Cii-TFe1jYOICVpOAAL_bSy7RGMAABYVAJcp0QAAv-F018_w320_h240_c1_t0_w640_h480_c1_t0.jpg",
                  price: "530",
                  satisfaction: "99%",
                  content:
                    "<上海迪士尼乐园2-4日自驾游>玩具总动员/迪士尼乐园酒店自选等你来抢购，可加定迪士尼门票，相约迪士尼连住更优惠"
                },
                {
                  src:
                    "../src/img/Cii-TFe1jYOICVpOAAL_bSy7RGMAABYVAJcp0QAAv-F018_w320_h240_c1_t0_w640_h480_c1_t0.jpg",
                  price: "339",
                  satisfaction: "94%",
                  content:
                    "<上海柏思特酒店2-4日自驾游>亲子网红酒店，行程自选，可加定迪士尼门票，酒店至迪士尼免费班车接送"
                },
                {
                  src:
                    "../src/img/Cii-TFe1jYOICVpOAAL_bSy7RGMAABYVAJcp0QAAv-F018_w320_h240_c1_t0_w640_h480_c1_t0.jpg",
                  price: "1317",
                  satisfaction: "96%",
                  content:
                    "<上海迪士尼乐园2-4日自驾游>玩具总动员/迪士尼乐园酒店自选，可加定迪士尼门票，相约迪士尼，连住更优惠"
                },
                {
                  src:
                    "../src/img/Cii-TFe1jYOICVpOAAL_bSy7RGMAABYVAJcp0QAAv-F018_w320_h240_c1_t0_w640_h480_c1_t0.jpg",
                  price: "371",
                  satisfaction: "98%",
                  content:
                    "<桔子水晶酒店-上海国际旅游度假区周浦万达店2-4日自驾游>11号线可直达迪士尼，可加购迪士尼门票，享迪士尼免费接送服务"
                },
                {
                  src:
                    "../src/img/Cii-TFe1jYOICVpOAAL_bSy7RGMAABYVAJcp0QAAv-F018_w320_h240_c1_t0_w640_h480_c1_t0.jpg",
                  price: "583",
                  satisfaction: "98%",
                  content:
                    "<上海迪士尼2-4日自驾游>桔子水晶（上海国际旅游度假区周浦万达店），可加购迪士尼门票，享迪士尼免费接送服务"
                },
                {
                  src:
                    "../src/img/Cii-TFe1jYOICVpOAAL_bSy7RGMAABYVAJcp0QAAv-F018_w320_h240_c1_t0_w640_h480_c1_t0.jpg",
                  price: "1317",
                  satisfaction: "96%",
                  content:
                    "<上海迪士尼玩具总动员酒店2-4日自驾游>行程天数自选，可加购迪士尼乐园门票，体验童趣世界，快来开启童话之旅吧"
                },
                {
                  src:
                    "../src/img/Cii-TFe1jYOICVpOAAL_bSy7RGMAABYVAJcp0QAAv-F018_w320_h240_c1_t0_w640_h480_c1_t0.jpg",
                  price: "1317",
                  satisfaction: "96%",
                  content:
                    "<上海迪士尼乐园自驾2日游>宿上海玩具总动员酒店1晚，可加购迪士尼乐园门票，开启您的童话之旅"
                },
                {
                  src:
                    "../src/img/Cii-TFe1jYOICVpOAAL_bSy7RGMAABYVAJcp0QAAv-F018_w320_h240_c1_t0_w640_h480_c1_t0.jpg",
                  price: "276",
                  satisfaction: "97%",
                  content:
                    "<上海鸿锦国际酒店2-4日自驾游>高性价比酒店，行程天数自选，可加定迪士尼门票//上海野生动物园门票，含酒店至迪士尼的往返接送"
                }
              ]
            }
          ]
        }
      ]
    };
  },
  methods: {
    choose: num => {
      let whichTab = document.getElementsByClassName("mytab")[num];
      let liList = whichTab.getElementsByTagName("li");
      let e = event || window.event;
      let target = e.target || e.srcElement;
      for (let i = 0; i < liList.length; i++) {
        liList[i].classList.remove("hotel-on");
      }
      if (target.nodeName == "LI") {
        target.classList.add("hotel-on");
      }

      let index = 0;
      for (let i = 0; i < liList.length; i++) {
        if (liList[i] === target) {
          index = i;
        }
      }

      let whichShowBox = document.getElementsByClassName("hotel-model-main")[
        num
      ];
      let whichShow = whichShowBox.getElementsByClassName("hotel-model-box");
      for (let i = 0; i < whichShow.length; i++) {
        whichShow[i].style.display = "none";
      }
      whichShow[index].style.display = "block";
    }
  }
};
</script>
