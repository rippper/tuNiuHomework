<style>
.index2-list {
  width: 950px;
  margin: 0 auto 30px;
}
.index2-model {
  margin: 40px 0 25px;
}
.index2-modle-top {
  border-bottom: 3px solid #e15b39;
  height: 32px;
}
.index2-modle-top h2 {
  float: left;
  font-size: 18px;
  font-weight: bold;
  color: #333;
  height: 32px;
  line-height: 32px;
  padding-left: 10px;
  width: 230px;
}
.index2-mytab {
  float: left;
}
.index2-mytab li {
  float: left;
  height: 32px;
  line-height: 32px;
  text-align: center;
  margin-right: 18px;
  font-size: 15px;
  color: #666;
}
.index2-mytab a {
  padding: 0 5px 3px;
}
.index2-on-green a {
  color: #d74568;
  padding-bottom: 0;
  font-size: 15px;
}
.index2-model-main {
  position: relative;
  height: 410px;
}
.index2-model-box {
  position: absolute;
  top: 0;
  left: 0;
  padding-top: 20px;
}
.index2-left {
  width: 225px;
  height: 390px;
  float: left;
  position: relative;
}

.index2-left-content {
  position: absolute;
  top: 267px;
  left: 0;
  right: 0;
  margin: auto;
  width: 205px;
}
.index2-left-content li {
  background: url("../img/Cii-VV0DY0WIQUj5AAAOXMU23Y8AAHGuwP_8YgAAA54548.png")
    no-repeat center center;
  background-size: 100%;
  width: 205px;
  height: 30px;
  margin-bottom: 5px;
  line-height: 30px;
  font-size: 13px;
  display: block;
  padding-left: 10px;
  cursor: pointer;
  box-sizing: border-box;
}
.index2-left-specific {
  color: #0083f6;
  font-weight: bold;
}
.index2-left-content li:hover {
  color: #0083f6;
}

.index2-right {
  float: right;
  width: 720px;
  height: 390px;
  overflow: hidden;
  position: relative;
}
.index2-right-list {
  position: absolute;
  top: 0;
  left: 0;
  width: 780px;
}
.index2-right-list li {
  float: left;
  position: relative;
  width: 215px;
  padding: 10px 9px 20px;
  margin: 0 7px 7px 0;
  height: 150px;
  background: white;
}
.index2-right-list li:hover {
  box-shadow: 0 3px 10px 3px #fce6ca;
}
.index2-right-pic {
  position: relative;
  width: 215px;
  height: 120px;
  overflow: hidden;
  margin-bottom: 5px;
}
.index2-right-shadow {
  position: absolute;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);

  text-overflow: -o-ellipsis-lastline;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
}
span.index2-right-ad {
  display: inline-block;
  background: url("../img/Cii-slsfI9eIVIgzAAAEEaoHByEAAICKAP_-9cAAAQp030.png");
  background-size: contain;
  height: 18px;
  width: 30px;
  margin: 0 2px 0 0;
  vertical-align: middle;
}
.index2-right-adtitle {
  line-height: 18px;
  color: #fff;
  font-size: 12px;
  font-weight: 700;
}
.index2-right-adcont {
  color: #fff;
  font-size: 12px;
}
.index2-content-price {
  float: left;
  color: #f60;
  font-size: 14px;
  padding-left: 5px;
  line-height: 26px;
}
.index2-content-price span {
  font-weight: bold;
  font-size: 20px;
  font-family: arial;
  margin-left: -3px;
}
.index2-content-satisfaction {
  float: right;
  color: #999;
  margin-right: 5px;
  position: relative;
  top: 2px;
  padding: 0;
  margin-top: 5px;
}
</style>
<template>
  <div class="index2-list clear">
    <div class="index2-model clear" v-for="(item, index) in list" :key="index">
      <div class="index2-modle-top clear">
        <h2 v-text="item.theme"></h2>
        <ul class="index2-mytab">
          <li
            :class="[ind==0 ? 'index2-on-green':'']"
            v-for="(it, ind) in item.place"
            :key="ind"
            @mouseenter="choose(index)"
          >
            <a href="javascript:;" v-text="it.where"></a>
          </li>
        </ul>
      </div>
      <div class="index2-model-main clear">
        <div
          class="index2-model-box clear"
          v-for="(ite, indx) in item.place"
          :key="indx"
          :style="{display:ite.display, background: ite.left.src,}"
        >
          <div class="index2-left clear">
            <ul class="index2-left-content clear">
              <li
                class="clear"
                :class="[ind==0?'index2-left-specific':'']"
                v-for="(it, ind) in ite.left.list"
                :key="ind"
              >
                <span v-text="it"></span>
              </li>
            </ul>
          </div>
          <div class="index2-right clear">
            <ul class="index2-right-list">
              <li v-for="(it, ind) in ite.right" :key="ind">
                <div class="index2-right-pic">
                  <img :src="it.src" width="225px" height="120px" alt />
                  <div class="index2-right-shadow">
                    <span class="index2-right-ad"></span>
                    <span class="index2-right-adtitle" v-text="it.title"></span>
                    <span class="index2-right-adcont" v-text="it.detailed"></span>
                  </div>
                </div>
                <div class="index2-right-content clear">
                  <div class="index2-content-price">
                    ￥
                    <span v-text="it.price"></span>起
                  </div>
                  <div class="index2-content-satisfaction">
                    满意度：
                    <span v-text="it.satisfaction"></span>%
                  </div>
                </div>
              </li>
            </ul>
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
          theme: "当季热玩",
          place: [
            {
              display: "block",
              where: "出境·港澳台",
              left: {
                theme: "出境·港澳台",
                list: ["夏一站 向世界出发", "哪里值得玩", "亲子度假酒店榜"],
                src:
                  "url(../src/img/Cii-s10ZYoOIRpm2AAJiMfV6yE0AAXQjAP6x0UAAmJJ58.jpg) 0 0 no-repeat"
              },
              right: [
                {
                  src:
                    "../src/img/Cii-s1repmOIBziVABKzmDocmuwAAF_UgKTTyQAErOw560_w320_h180_c1_t0.png",
                  price: 3604,
                  satisfaction: 98,
                  title: "<牛亲子-泰国普吉岛机票+当地5晚6日半自助>",
                  detailed:
                    "精致20人团/亲子纯玩半自助/指定凯悦嘉轩(保证海景房)/2天自由DIY/尼莫海豚馆/椰风海景/99元换购皇帝岛出海"
                },
                {
                  src:
                    "../src/img/Cii-slsrIQ6ID5peAARa3uIGJgwAAI5LQAi6wkABFr2402_w320_h180_c1_t0.jpg",
                  price: 8699,
                  satisfaction: 96,
                  title: "<日本东京-富士山-大阪6或7日游>",
                  detailed:
                    "途牛自营/和爱系列 途牛领队服务 高档型酒店加1晚温泉 螃蟹鳗鱼料理 东京连住享自由 CE线东阪连住双自由"
                },
                {
                  src:
                    "../src/img/Cii-s1repmOIBziVABKzmDocmuwAAF_UgKTTyQAErOw560_w320_h180_c1_t0.png",
                  price: 3604,
                  satisfaction: 98,
                  title: "<牛亲子-泰国普吉岛机票+当地5晚6日半自助>",
                  detailed:
                    "精致20人团/亲子纯玩半自助/指定凯悦嘉轩(保证海景房)/2天自由DIY/尼莫海豚馆/椰风海景/99元换购皇帝岛出海"
                },
                {
                  src:
                    "../src/img/Cii-slsrIQ6ID5peAARa3uIGJgwAAI5LQAi6wkABFr2402_w320_h180_c1_t0.jpg",
                  price: 8699,
                  satisfaction: 96,
                  title: "<日本东京-富士山-大阪6或7日游>",
                  detailed:
                    "途牛自营/和爱系列 途牛领队服务 高档型酒店加1晚温泉 螃蟹鳗鱼料理 东京连住享自由 CE线东阪连住双自由"
                },
                {
                  src:
                    "../src/img/Cii-s1repmOIBziVABKzmDocmuwAAF_UgKTTyQAErOw560_w320_h180_c1_t0.png",
                  price: 3604,
                  satisfaction: 98,
                  title: "<牛亲子-泰国普吉岛机票+当地5晚6日半自助>",
                  detailed:
                    "精致20人团/亲子纯玩半自助/指定凯悦嘉轩(保证海景房)/2天自由DIY/尼莫海豚馆/椰风海景/99元换购皇帝岛出海"
                },
                {
                  src:
                    "../src/img/Cii-slsrIQ6ID5peAARa3uIGJgwAAI5LQAi6wkABFr2402_w320_h180_c1_t0.jpg",
                  price: 8699,
                  satisfaction: 96,
                  title: "<日本东京-富士山-大阪6或7日游>",
                  detailed:
                    "途牛自营/和爱系列 途牛领队服务 高档型酒店加1晚温泉 螃蟹鳗鱼料理 东京连住享自由 CE线东阪连住双自由"
                }
              ]
            },
            {
              display: "none",
              where: "出境长线",
               left: {
                theme: "出境·港澳台",
                list: ["夏一站 向世界出发", "哪里值得玩", "亲子度假酒店榜"],
                src:
                  "url(../src/img/Cii-s10ZYoOIRpm2AAJiMfV6yE0AAXQjAP6x0UAAmJJ58.jpg) 0 0 no-repeat"
              },
              right: [
                {
                  src:
                    "../src/img/Cii9EFZ6ABaIej69ABDOmyqV1DUAABHqwD0r6kAEM6z625_w320_h180_c1_t0.jpg",
                  price: 11599,
                  satisfaction: 93,
                  title: "<俄罗斯-莫斯科+圣彼得堡8-9日游>",
                  detailed:
                    "东航直飞，8月3，7，16号25人小团，一价全含，四宫入内，金环小镇特维尔，部分行程升级纯玩"
                },
                {
                  src:
                    "../src/img/Cii_J1zwjA6IICiuAA7j0wM7fx0AAGiRwLYFbYADuPr156_w320_h180_c1_t0.jpg",
                  price: 11981,
                  satisfaction: 100,
                  title: "<欧洲-法国+瑞士+意大利+德国11-12日游>",
                  detailed:
                    "全含，MU可联运，雪朗峰，五渔村，卢浮宫，双游船，新天鹅堡，比萨斜塔，巴黎一天DIY，DFS"
                },
                {
                  src:
                    "../src/img/Cii-slwYTCqIcHPNAAgz7n1IF9wAARzHwPtQ8oACDQG939_w320_h180_c1_t0.jpg",
                  price: 14599,
                  satisfaction: 97,
                  title: "[国庆]<奥地利+捷克+匈牙利11-12日游>",
                  detailed:
                    "自营全含，30人，5400人游，精选四星，一晚五星或湖区，莫扎特音乐会，品酒，美泉宫，3顿特色餐，拒签退"
                },

                {
                  src:
                    "../src/img/Cii-sltxJieAE1XQAVjDd7stNIc284_w320_h180_c1_t0.jpg",
                  price: 12419,
                  satisfaction: 96,
                  title: "[国庆]<欧洲西班牙+葡萄牙11-13日游>",
                  detailed:
                    "全含4至5星，圣家族教堂，马德里皇宫，弗朗明戈舞，斗牛之城龙达，海鲜饭火腿餐多顿特色餐，WIFI"
                },
                {
                  src:
                    "../src/img/Cii-tFrZTkyIGE1DAAOKMsOH1P4AAF2pAB_RiwAA4pK599_w320_h180_c1_t0.jpg",
                  price: 15999,
                  satisfaction: 96,
                  title: "<法瑞意13-14日游>",
                  detailed:
                    "自营欧洲，林志颖同款，8/5 25人团，超2万人出游，4到5星，庄园酒店，五渔村，科尔马，少女峰，金色快车，双宫双游船，一价全含"
                },
                {
                  src:
                    "../src/img/Cii-VVyHSS-IQ6zzAHRS4B0wzFoAAEc0gKVryQAdFL4289_w320_h180_c1_t0.jpg",
                  price: 16799,
                  satisfaction: 97,
                  title: "<法瑞意12-13日游>",
                  detailed:
                    "自营全含，瑞士深度3/4晚，万人出游，部分双雪山，四五星，巴黎全天自由活动，TGV，金色山口，部分东航直飞全国联运"
                }
              ]
            },
            {
              display: "none",
              where: "出境自助",
              left: {
                theme: "出境·港澳台",
                list: ["夏一站 向世界出发", "哪里值得玩", "亲子度假酒店榜"],
                src:
                  "url(../src/img/Cii-s10ZYoOIRpm2AAJiMfV6yE0AAXQjAP6x0UAAmJJ58.jpg) 0 0 no-repeat"
              },
              right: [
                {
                  src:
                    "../src/img/Cii9EFZgDiaIXkxmAAoCeyNiuvwAAAzgQDDLycACgKT991_w320_h180_c1_t0.jpg",
                  price: 11599,
                  satisfaction: 93,
                  title: "<俄罗斯-莫斯科+圣彼得堡8-9日游>",
                  detailed:
                    "东航直飞，8月3，7，16号25人小团，一价全含，四宫入内，金环小镇特维尔，部分行程升级纯玩"
                },
                {
                  src:
                    "../src/img/Cii9EFZgDiaIXkxmAAoCeyNiuvwAAAzgQDDLycACgKT991_w320_h180_c1_t0.jpg",
                  price: 11981,
                  satisfaction: 100,
                  title: "<欧洲-法国+瑞士+意大利+德国11-12日游>",
                  detailed:
                    "全含，MU可联运，雪朗峰，五渔村，卢浮宫，双游船，新天鹅堡，比萨斜塔，巴黎一天DIY，DFS"
                },
                {
                  src:
                    "../src/img/Cii9EFZgDiaIXkxmAAoCeyNiuvwAAAzgQDDLycACgKT991_w320_h180_c1_t0.jpg",
                  price: 14599,
                  satisfaction: 97,
                  title: "[国庆]<奥地利+捷克+匈牙利11-12日游>",
                  detailed:
                    "自营全含，30人，5400人游，精选四星，一晚五星或湖区，莫扎特音乐会，品酒，美泉宫，3顿特色餐，拒签退"
                },

                {
                  src:
                    "../src/img/Cii9EFZgDiaIXkxmAAoCeyNiuvwAAAzgQDDLycACgKT991_w320_h180_c1_t0.jpg",
                  price: 12419,
                  satisfaction: 96,
                  title: "[国庆]<欧洲西班牙+葡萄牙11-13日游>",
                  detailed:
                    "全含4至5星，圣家族教堂，马德里皇宫，弗朗明戈舞，斗牛之城龙达，海鲜饭火腿餐多顿特色餐，WIFI"
                },
                {
                  src:
                    "../src/img/Cii9EFZgDiaIXkxmAAoCeyNiuvwAAAzgQDDLycACgKT991_w320_h180_c1_t0.jpg",
                  price: 15999,
                  satisfaction: 96,
                  title: "<法瑞意13-14日游>",
                  detailed:
                    "自营欧洲，林志颖同款，8/5 25人团，超2万人出游，4到5星，庄园酒店，五渔村，科尔马，少女峰，金色快车，双宫双游船，一价全含"
                },
                {
                  src:
                    "../src/img/Cii9EFZgDiaIXkxmAAoCeyNiuvwAAAzgQDDLycACgKT991_w320_h180_c1_t0.jpg",
                  price: 16799,
                  satisfaction: 97,
                  title: "<法瑞意12-13日游>",
                  detailed:
                    "自营全含，瑞士深度3/4晚，万人出游，部分双雪山，四五星，巴黎全天自由活动，TGV，金色山口，部分东航直飞全国联运"
                }
              ]
            },
            {
              display: "none",
              where: "邮轮",
              left: {
                theme: "出境·港澳台",
                list: ["夏一站 向世界出发", "哪里值得玩", "亲子度假酒店榜"],
                src:
                  "url(../src/img/Cii-s10ZYoOIRpm2AAJiMfV6yE0AAXQjAP6x0UAAmJJ58.jpg) 0 0 no-repeat"
              },
              right: [
                {
                  src:
                    "../src/img/Cii_J1zwjA6IICiuAA7j0wM7fx0AAGiRwLYFbYADuPr156_w320_h180_c1_t0.jpg",
                  price: 11599,
                  satisfaction: 93,
                  title: "<俄罗斯-莫斯科+圣彼得堡8-9日游>",
                  detailed:
                    "东航直飞，8月3，7，16号25人小团，一价全含，四宫入内，金环小镇特维尔，部分行程升级纯玩"
                },
                {
                  src:
                    "../src/img/Cii_J1zwjA6IICiuAA7j0wM7fx0AAGiRwLYFbYADuPr156_w320_h180_c1_t0.jpg",
                  price: 11981,
                  satisfaction: 100,
                  title: "<欧洲-法国+瑞士+意大利+德国11-12日游>",
                  detailed:
                    "全含，MU可联运，雪朗峰，五渔村，卢浮宫，双游船，新天鹅堡，比萨斜塔，巴黎一天DIY，DFS"
                },
                {
                  src:
                    "../src/img/Cii_J1zwjA6IICiuAA7j0wM7fx0AAGiRwLYFbYADuPr156_w320_h180_c1_t0.jpg",
                  price: 14599,
                  satisfaction: 97,
                  title: "[国庆]<奥地利+捷克+匈牙利11-12日游>",
                  detailed:
                    "自营全含，30人，5400人游，精选四星，一晚五星或湖区，莫扎特音乐会，品酒，美泉宫，3顿特色餐，拒签退"
                },

                {
                  src:
                    "../src/img/Cii_J1zwjA6IICiuAA7j0wM7fx0AAGiRwLYFbYADuPr156_w320_h180_c1_t0.jpg",
                  price: 12419,
                  satisfaction: 96,
                  title: "[国庆]<欧洲西班牙+葡萄牙11-13日游>",
                  detailed:
                    "全含4至5星，圣家族教堂，马德里皇宫，弗朗明戈舞，斗牛之城龙达，海鲜饭火腿餐多顿特色餐，WIFI"
                },
                {
                  src:
                    "../src/img/Cii_J1zwjA6IICiuAA7j0wM7fx0AAGiRwLYFbYADuPr156_w320_h180_c1_t0.jpg",
                  price: 15999,
                  satisfaction: 96,
                  title: "<法瑞意13-14日游>",
                  detailed:
                    "自营欧洲，林志颖同款，8/5 25人团，超2万人出游，4到5星，庄园酒店，五渔村，科尔马，少女峰，金色快车，双宫双游船，一价全含"
                },
                {
                  src:
                    "../src/img/Cii_J1zwjA6IICiuAA7j0wM7fx0AAGiRwLYFbYADuPr156_w320_h180_c1_t0.jpg",
                  price: 16799,
                  satisfaction: 97,
                  title: "<法瑞意12-13日游>",
                  detailed:
                    "自营全含，瑞士深度3/4晚，万人出游，部分双雪山，四五星，巴黎全天自由活动，TGV，金色山口，部分东航直飞全国联运"
                }
              ]
            },
            {
              display: "none",
              where: "海岛",
              left: {
                theme: "出境·港澳台",
                list: ["夏一站 向世界出发", "哪里值得玩", "亲子度假酒店榜"],
                src:
                  "url(../src/img/Cii-s10ZYoOIRpm2AAJiMfV6yE0AAXQjAP6x0UAAmJJ58.jpg) 0 0 no-repeat"
              },
              right: [
                {
                  src:
                    "../src/img/Cii-VVnJuvKIErjoAB17BClvSDoAABmoAD8DUsAHXsc992_w320_h180_c1_t0.jpg",
                  price: 11599,
                  satisfaction: 93,
                  title: "<俄罗斯-莫斯科+圣彼得堡8-9日游>",
                  detailed:
                    "东航直飞，8月3，7，16号25人小团，一价全含，四宫入内，金环小镇特维尔，部分行程升级纯玩"
                },
                {
                  src:
                    "../src/img/Cii-VVnJuvKIErjoAB17BClvSDoAABmoAD8DUsAHXsc992_w320_h180_c1_t0.jpg",
                  price: 11981,
                  satisfaction: 100,
                  title: "<欧洲-法国+瑞士+意大利+德国11-12日游>",
                  detailed:
                    "全含，MU可联运，雪朗峰，五渔村，卢浮宫，双游船，新天鹅堡，比萨斜塔，巴黎一天DIY，DFS"
                },
                {
                  src:
                    "../src/img/Cii-VVnJuvKIErjoAB17BClvSDoAABmoAD8DUsAHXsc992_w320_h180_c1_t0.jpg",
                  price: 14599,
                  satisfaction: 97,
                  title: "[国庆]<奥地利+捷克+匈牙利11-12日游>",
                  detailed:
                    "自营全含，30人，5400人游，精选四星，一晚五星或湖区，莫扎特音乐会，品酒，美泉宫，3顿特色餐，拒签退"
                },

                {
                  src:
                    "../src/img/Cii-VVnJuvKIErjoAB17BClvSDoAABmoAD8DUsAHXsc992_w320_h180_c1_t0.jpg",
                  price: 12419,
                  satisfaction: 96,
                  title: "[国庆]<欧洲西班牙+葡萄牙11-13日游>",
                  detailed:
                    "全含4至5星，圣家族教堂，马德里皇宫，弗朗明戈舞，斗牛之城龙达，海鲜饭火腿餐多顿特色餐，WIFI"
                },
                {
                  src:
                    "../src/img/Cii-VVnJuvKIErjoAB17BClvSDoAABmoAD8DUsAHXsc992_w320_h180_c1_t0.jpg",
                  price: 15999,
                  satisfaction: 96,
                  title: "<法瑞意13-14日游>",
                  detailed:
                    "自营欧洲，林志颖同款，8/5 25人团，超2万人出游，4到5星，庄园酒店，五渔村，科尔马，少女峰，金色快车，双宫双游船，一价全含"
                },
                {
                  src:
                    "../src/img/Cii-VVnJuvKIErjoAB17BClvSDoAABmoAD8DUsAHXsc992_w320_h180_c1_t0.jpg",
                  price: 16799,
                  satisfaction: 97,
                  title: "<法瑞意12-13日游>",
                  detailed:
                    "自营全含，瑞士深度3/4晚，万人出游，部分双雪山，四五星，巴黎全天自由活动，TGV，金色山口，部分东航直飞全国联运"
                }
              ]
            },
            {
              display: "none",
              where: "境内跟团",
              left: {
                theme: "出境·港澳台",
                list: ["夏一站 向世界出发", "哪里值得玩", "亲子度假酒店榜"],
                src:
                  "url(../src/img/Cii-s10ZYoOIRpm2AAJiMfV6yE0AAXQjAP6x0UAAmJJ58.jpg) 0 0 no-repeat"
              },
              right: [
                {
                  src:
                    "../src/img/Cii9EViddayIbmpWABByStRFYqkAAHa0QEnAgYAEHJi824_w320_h180_c1_t0.jpg",
                  price: 11599,
                  satisfaction: 93,
                  title: "<俄罗斯-莫斯科+圣彼得堡8-9日游>",
                  detailed:
                    "东航直飞，8月3，7，16号25人小团，一价全含，四宫入内，金环小镇特维尔，部分行程升级纯玩"
                },
                {
                  src:
                    "../src/img/Cii9EViddayIbmpWABByStRFYqkAAHa0QEnAgYAEHJi824_w320_h180_c1_t0.jpg",
                  price: 11981,
                  satisfaction: 100,
                  title: "<欧洲-法国+瑞士+意大利+德国11-12日游>",
                  detailed:
                    "全含，MU可联运，雪朗峰，五渔村，卢浮宫，双游船，新天鹅堡，比萨斜塔，巴黎一天DIY，DFS"
                },
                {
                  src:
                    "../src/img/Cii9EViddayIbmpWABByStRFYqkAAHa0QEnAgYAEHJi824_w320_h180_c1_t0.jpg",
                  price: 14599,
                  satisfaction: 97,
                  title: "[国庆]<奥地利+捷克+匈牙利11-12日游>",
                  detailed:
                    "自营全含，30人，5400人游，精选四星，一晚五星或湖区，莫扎特音乐会，品酒，美泉宫，3顿特色餐，拒签退"
                },

                {
                  src:
                    "../src/img/Cii9EViddayIbmpWABByStRFYqkAAHa0QEnAgYAEHJi824_w320_h180_c1_t0.jpg",
                  price: 12419,
                  satisfaction: 96,
                  title: "[国庆]<欧洲西班牙+葡萄牙11-13日游>",
                  detailed:
                    "全含4至5星，圣家族教堂，马德里皇宫，弗朗明戈舞，斗牛之城龙达，海鲜饭火腿餐多顿特色餐，WIFI"
                },
                {
                  src:
                    "../src/img/Cii9EViddayIbmpWABByStRFYqkAAHa0QEnAgYAEHJi824_w320_h180_c1_t0.jpg",
                  price: 15999,
                  satisfaction: 96,
                  title: "<法瑞意13-14日游>",
                  detailed:
                    "自营欧洲，林志颖同款，8/5 25人团，超2万人出游，4到5星，庄园酒店，五渔村，科尔马，少女峰，金色快车，双宫双游船，一价全含"
                },
                {
                  src:
                    "../src/img/Cii9EViddayIbmpWABByStRFYqkAAHa0QEnAgYAEHJi824_w320_h180_c1_t0.jpg",
                  price: 16799,
                  satisfaction: 97,
                  title: "<法瑞意12-13日游>",
                  detailed:
                    "自营全含，瑞士深度3/4晚，万人出游，部分双雪山，四五星，巴黎全天自由活动，TGV，金色山口，部分东航直飞全国联运"
                }
              ]
            },
            {
              display: "none",
              where: "境内自助",
              left: {
                theme: "出境·港澳台",
                list: ["夏一站 向世界出发", "哪里值得玩", "亲子度假酒店榜"],
                src:
                  "url(../src/img/Cii-s10ZYoOIRpm2AAJiMfV6yE0AAXQjAP6x0UAAmJJ58.jpg) 0 0 no-repeat"
              },
              right: [
                {
                  src:
                    "../src/img/Cii-tFp6vL-IFJAGAEdB5mjxdVwAADMwwLzjeoAR0H-848_w320_h180_c1_t0.jpg",
                  price: 11599,
                  satisfaction: 93,
                  title: "<俄罗斯-莫斯科+圣彼得堡8-9日游>",
                  detailed:
                    "东航直飞，8月3，7，16号25人小团，一价全含，四宫入内，金环小镇特维尔，部分行程升级纯玩"
                },
                {
                  src:
                    "../src/img/Cii-tFp6vL-IFJAGAEdB5mjxdVwAADMwwLzjeoAR0H-848_w320_h180_c1_t0.jpg",
                  price: 11981,
                  satisfaction: 100,
                  title: "<欧洲-法国+瑞士+意大利+德国11-12日游>",
                  detailed:
                    "全含，MU可联运，雪朗峰，五渔村，卢浮宫，双游船，新天鹅堡，比萨斜塔，巴黎一天DIY，DFS"
                },
                {
                  src:
                    "../src/img/Cii-tFp6vL-IFJAGAEdB5mjxdVwAADMwwLzjeoAR0H-848_w320_h180_c1_t0.jpg",
                  price: 14599,
                  satisfaction: 97,
                  title: "[国庆]<奥地利+捷克+匈牙利11-12日游>",
                  detailed:
                    "自营全含，30人，5400人游，精选四星，一晚五星或湖区，莫扎特音乐会，品酒，美泉宫，3顿特色餐，拒签退"
                },

                {
                  src:
                    "../src/img/Cii-tFp6vL-IFJAGAEdB5mjxdVwAADMwwLzjeoAR0H-848_w320_h180_c1_t0.jpg",
                  price: 12419,
                  satisfaction: 96,
                  title: "[国庆]<欧洲西班牙+葡萄牙11-13日游>",
                  detailed:
                    "全含4至5星，圣家族教堂，马德里皇宫，弗朗明戈舞，斗牛之城龙达，海鲜饭火腿餐多顿特色餐，WIFI"
                },
                {
                  src:
                    "../src/img/Cii-tFp6vL-IFJAGAEdB5mjxdVwAADMwwLzjeoAR0H-848_w320_h180_c1_t0.jpg",
                  price: 15999,
                  satisfaction: 96,
                  title: "<法瑞意13-14日游>",
                  detailed:
                    "自营欧洲，林志颖同款，8/5 25人团，超2万人出游，4到5星，庄园酒店，五渔村，科尔马，少女峰，金色快车，双宫双游船，一价全含"
                },
                {
                  src:
                    "../src/img/Cii-tFp6vL-IFJAGAEdB5mjxdVwAADMwwLzjeoAR0H-848_w320_h180_c1_t0.jpg",
                  price: 16799,
                  satisfaction: 97,
                  title: "<法瑞意12-13日游>",
                  detailed:
                    "自营全含，瑞士深度3/4晚，万人出游，部分双雪山，四五星，巴黎全天自由活动，TGV，金色山口，部分东航直飞全国联运"
                }
              ]
            },
            {
              display: "none",
              where: "周边/自驾",
              left: {
                theme: "出境·港澳台",
                list: ["夏一站 向世界出发", "哪里值得玩", "亲子度假酒店榜"],
                src:
                  "url(../src/img/Cii-s10ZYoOIRpm2AAJiMfV6yE0AAXQjAP6x0UAAmJJ58.jpg) 0 0 no-repeat"
              },
              right: [
                {
                  src:
                    "../src/img/Cii-tFp6vL-IFJAGAEdB5mjxdVwAADMwwLzjeoAR0H-848_w320_h180_c1_t0.jpg",
                  price: 11599,
                  satisfaction: 93,
                  title: "<俄罗斯-莫斯科+圣彼得堡8-9日游>",
                  detailed:
                    "东航直飞，8月3，7，16号25人小团，一价全含，四宫入内，金环小镇特维尔，部分行程升级纯玩"
                },
                {
                  src:
                    "../src/img/Cii-tFp6vL-IFJAGAEdB5mjxdVwAADMwwLzjeoAR0H-848_w320_h180_c1_t0.jpg",
                  price: 11981,
                  satisfaction: 100,
                  title: "<欧洲-法国+瑞士+意大利+德国11-12日游>",
                  detailed:
                    "全含，MU可联运，雪朗峰，五渔村，卢浮宫，双游船，新天鹅堡，比萨斜塔，巴黎一天DIY，DFS"
                },
                {
                  src:
                    "../src/img/Cii-tFp6vL-IFJAGAEdB5mjxdVwAADMwwLzjeoAR0H-848_w320_h180_c1_t0.jpg",
                  price: 14599,
                  satisfaction: 97,
                  title: "[国庆]<奥地利+捷克+匈牙利11-12日游>",
                  detailed:
                    "自营全含，30人，5400人游，精选四星，一晚五星或湖区，莫扎特音乐会，品酒，美泉宫，3顿特色餐，拒签退"
                },

                {
                  src:
                    "../src/img/Cii-tFp6vL-IFJAGAEdB5mjxdVwAADMwwLzjeoAR0H-848_w320_h180_c1_t0.jpg",
                  price: 12419,
                  satisfaction: 96,
                  title: "[国庆]<欧洲西班牙+葡萄牙11-13日游>",
                  detailed:
                    "全含4至5星，圣家族教堂，马德里皇宫，弗朗明戈舞，斗牛之城龙达，海鲜饭火腿餐多顿特色餐，WIFI"
                },
                {
                  src:
                    "../src/img/Cii-tFp6vL-IFJAGAEdB5mjxdVwAADMwwLzjeoAR0H-848_w320_h180_c1_t0.jpg",
                  price: 15999,
                  satisfaction: 96,
                  title: "<法瑞意13-14日游>",
                  detailed:
                    "自营欧洲，林志颖同款，8/5 25人团，超2万人出游，4到5星，庄园酒店，五渔村，科尔马，少女峰，金色快车，双宫双游船，一价全含"
                },
                {
                  src:
                    "../src/img/Cii-tFp6vL-IFJAGAEdB5mjxdVwAADMwwLzjeoAR0H-848_w320_h180_c1_t0.jpg",
                  price: 16799,
                  satisfaction: 97,
                  title: "<法瑞意12-13日游>",
                  detailed:
                    "自营全含，瑞士深度3/4晚，万人出游，部分双雪山，四五星，巴黎全天自由活动，TGV，金色山口，部分东航直飞全国联运"
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
      let whichTab = document.getElementsByClassName("index2-mytab")[num];
      let liList = whichTab.getElementsByTagName("li");
      let e = event || window.event;
      let target = e.target || e.srcElement;
      for (let i = 0; i < liList.length; i++) {
        liList[i].classList.remove("index2-on-green");
      }
      if (target.nodeName == "LI") {
        target.classList.add("index2-on-green");
      }

      let index2 = 0;
      for (let i = 0; i < liList.length; i++) {
        if (liList[i] === target) {
          index2 = i;
        }
      }

      let whichShowBox = document.getElementsByClassName("index2-model-main")[
        num
      ];
      let whichShow = whichShowBox.getElementsByClassName("index2-model-box");
      for (let i = 0; i < whichShow.length; i++) {
        whichShow[i].style.display = "none";
      }
      whichShow[index2].style.display = "block";
    }
  }
};
</script>
