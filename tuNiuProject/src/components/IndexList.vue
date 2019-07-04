<style>
.index-list {
  width: 950px;
  margin: 0 auto 30px;
}
.index-model {
  margin: 40px 0 25px;
}
.index-modle-top {
  border-bottom: 3px solid #eceef4;
  height: 32px;
  margin-bottom: 15px;
}
.index-modle-top h2 {
  float: left;
  font-size: 18px;
  font-weight: bold;
  color: #333;
  height: 32px;
  line-height: 32px;
  padding-left: 10px;
  width: 230px;
}
.index-mytab {
  float: left;
}
.index-mytab li {
  float: left;
  height: 32px;
  line-height: 32px;
  text-align: center;
  margin-right: 18px;
  font-size: 15px;
  color: #666;
}
.index-mytab a {
  padding: 0 5px 3px;
}
.index-on-green {
  border-bottom: 3px solid #3aa860;
}
.index-on-green a {
  color: #3aa860;
  padding-bottom: 0;
  font-size: 15px;
}
.index-model-main {
  position: relative;
  height: 368px;
}
.index-model-box {
  position: absolute;
  top: 0;
  left: 0;
}
.index-left {
  width: 225px;
  float: left;
}

.index-list-theme {
  font-weight: bold;
  font-size: 14px;
  color: #222;
  padding-left: 10px;
  margin-bottom: 5px;
}
.index-left-content {
  border-bottom: 1px dotted #d7d7d7;
  padding-left: 10px;
  padding-bottom: 5px;
  margin-bottom: 10px;
  margin-right: 10px;
}
.index-left-content li {
  float: left;
  background: url("../img/titpoint.png") no-repeat left center;
  padding-left: 7px;
  width: 94px;
  margin-bottom: 5px;
  overflow: visible;
  cursor: pointer;
  font-size: 13px;
  color: #333;
}
.index-left-content li:hover {
  color: #f60;
}

.index-right {
  float: right;
  width: 725px;
  height: 368px;
  overflow: hidden;
  position: relative;
}
.index-right-list {
  position: absolute;
  top: 0;
  left: 0;
  width: 780px;
}
.index-right-list li {
  float: left;
  margin: 0 2px 20px 15px;
  background: #fff;
  padding-bottom: 5px;
  height: 165px;
}
.index-right-list li:hover {
  box-shadow: 0 0 10px 3px #fce6ca;
}
.index-right-pic {
  position: relative;
}
.index-right-shadow {
  position: absolute;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  margin-bottom: 5px;

  text-overflow: -o-ellipsis-lastline;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
}
span.index-right-ad {
  display: inline-block;
  background: url("../img/Cii-slsfI9eIVIgzAAAEEaoHByEAAICKAP_-9cAAAQp030.png");
  background-size: contain;
  height: 18px;
  width: 30px;
  margin: 0 2px 0 0;
  vertical-align: middle;
}
.index-right-adtitle {
  line-height: 18px;
  color: #fff;
  font-size: 12px;
  font-weight: 700;
}
.index-right-adcont {
  color: #fff;
  font-size: 12px;
}
.index-content-price {
  float: left;
  color: #f60;
  font-size: 14px;
  padding-left: 5px;
  line-height: 26px;
}
.index-content-price span {
  font-weight: bold;
  font-size: 20px;
  font-family: arial;
  margin-left: -3px;
}
.index-content-satisfaction {
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
  <div class="index-list clear">
    <div class="index-model clear" v-for="(item, index) in list" :key="index">
      <div class="index-modle-top clear">
        <h2 v-text="item.theme"></h2>
        <ul class="index-mytab">
          <li
            :class="[ind==0?'index-on-green':'']"
            v-for="(it, ind) in item.place"
            :key="ind"
            @mouseenter="choose(index)"
          >
            <a href="javascript:;" v-text="it.where"></a>
          </li>
        </ul>
      </div>
      <div class="index-model-main clear">
        <div
          class="index-model-box clear"
          v-for="(ite, indx) in item.place"
          :key="indx"
          :style="{display:ite.display}"
        >
          <div class="index-left clear">
            <div class="index-left-list">
              <h2 class="index-list-theme" v-text="ite.left.theme"></h2>
              <ul class="index-left-content clear">
                <li v-for="(it, ind) in ite.left.list" :key="ind" v-text="it"></li>
              </ul>
            </div>
            <img :src="ite.left.src" width="225px" height="205px;" alt />
          </div>
          <div class="index-right clear">
            <ul class="index-right-list">
              <li v-for="(it, ind) in ite.right" :key="ind">
                <div class="index-right-pic">
                  <img :src="it.src" width="225px" height="127px" alt />
                  <div class="index-right-shadow">
                    <span class="index-right-ad"></span>
                    <span class="index-right-adtitle" v-text="it.title"></span>
                    <span class="index-right-adcont" v-text="it.detailed"></span>
                  </div>
                </div>
                <div class="index-right-content clear">
                  <div class="index-content-price">
                    ￥
                    <span v-text="it.price"></span>起
                  </div>
                  <div class="index-content-satisfaction">
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
          theme: "出境长线",
          place: [
            {
              display: "block",
              where: "精选",
              left: {
                theme: "热门景点玩法",
                list: [
                  "西班牙葡萄牙",
                  "黄石公园",
                  "澳凯墨",
                  "神秘古国埃及",
                  "马尔代夫",
                  "毛里求斯"
                ],
                src:
                  "../src/img/Cii_J1zjmCaIaP1fAAG0Q1u8LooAAGKcwOquBkAAbRb93.jpg"
              },
              right: [
                {
                  src:
                    "../src/img/Cii-TFhrFX-INtJkAA4hbfDAWiEAAGR_wFDAk0ADiGF087_w320_h180_c1_t0.jpg",
                  price: 11599,
                  satisfaction: 93,
                  title: "<俄罗斯-莫斯科+圣彼得堡8-9日游>",
                  detailed:
                    "东航直飞，8月3，7，16号25人小团，一价全含，四宫入内，金环小镇特维尔，部分行程升级纯玩"
                },
                {
                  src:
                    "../src/img/Cii-tFqcvzCIFsYLAAiO0a43qa0AAD4JwPkk4sACI7p448_w320_h180_c1_t0.jpg",
                  price: 11981,
                  satisfaction: 100,
                  title: "<欧洲-法国+瑞士+意大利+德国11-12日游>",
                  detailed:
                    "全含，MU可联运，雪朗峰，五渔村，卢浮宫，双游船，新天鹅堡，比萨斜塔，巴黎一天DIY，DFS"
                },
                {
                  src:
                    "../src/img/Cii-U1kSibeIU3oAAG1lqCp8kM8AAKHFgAAAAAAbWXA738_w320_h180_c1_t0.jpg",
                  price: 14599,
                  satisfaction: 97,
                  title: "[国庆]<奥地利+捷克+匈牙利11-12日游>",
                  detailed:
                    "自营全含，30人，5400人游，精选四星，一晚五星或湖区，莫扎特音乐会，品酒，美泉宫，3顿特色餐，拒签退"
                },

                {
                  src:
                    "../src/img/Cii-tFvaXyyITPhxABSMtvz0_8wAAP6iABxOo4AFIzO923_w320_h180_c1_t0.jpg",
                  price: 12419,
                  satisfaction: 96,
                  title: "[国庆]<欧洲西班牙+葡萄牙11-13日游>",
                  detailed:
                    "全含4至5星，圣家族教堂，马德里皇宫，弗朗明戈舞，斗牛之城龙达，海鲜饭火腿餐多顿特色餐，WIFI"
                },
                {
                  src:
                    "../src/img/Cii-s1qTrPyIMslDAAwyESAvWoQAADrSwLderQADDIp505_w320_h180_c1_t0.jpg",
                  price: 15999,
                  satisfaction: 96,
                  title: "<法瑞意13-14日游>",
                  detailed:
                    "自营欧洲，林志颖同款，8/5 25人团，超2万人出游，4到5星，庄园酒店，五渔村，科尔马，少女峰，金色快车，双宫双游船，一价全含"
                },
                {
                  src:
                    "../src/img/Cii-tFrZTkyIGE1DAAOKMsOH1P4AAF2pAB_RiwAA4pK599_w320_h180_c1_t0.jpg",
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
              where: "欧洲",
              left: {
                theme: "热门景点玩法",
                list: [
                  "西班牙葡萄牙",
                  "黄石公园",
                  "澳凯墨",
                  "神秘古国埃及",
                  "马尔代夫",
                  "毛里求斯"
                ],
                src:
                  "../src/img/Cii_J1zjmCaIaP1fAAG0Q1u8LooAAGKcwOquBkAAbRb93.jpg"
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
              where: "美洲",
              left: {
                theme: "热门景点玩法",
                list: [
                  "西班牙葡萄牙",
                  "黄石公园",
                  "澳凯墨",
                  "神秘古国埃及",
                  "马尔代夫",
                  "毛里求斯"
                ],
                src:
                  "../src/img/Cii_J1zjmCaIaP1fAAG0Q1u8LooAAGKcwOquBkAAbRb93.jpg"
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
              where: "中东非",
              left: {
                theme: "热门景点玩法",
                list: [
                  "西班牙葡萄牙",
                  "黄石公园",
                  "澳凯墨",
                  "神秘古国埃及",
                  "马尔代夫",
                  "毛里求斯"
                ],
                src:
                  "../src/img/Cii_J1zjmCaIaP1fAAG0Q1u8LooAAGKcwOquBkAAbRb93.jpg"
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
              where: "澳新",
              left: {
                theme: "热门景点玩法",
                list: [
                  "西班牙葡萄牙",
                  "黄石公园",
                  "澳凯墨",
                  "神秘古国埃及",
                  "马尔代夫",
                  "毛里求斯"
                ],
                src: "../src/img/C16.jpg"
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
              where: "马代",
              left: {
                theme: "热门景点玩法",
                list: [
                  "西班牙葡萄牙",
                  "黄石公园",
                  "澳凯墨",
                  "神秘古国埃及",
                  "马尔代夫",
                  "毛里求斯"
                ],
                src:
                  "../src/img/Cii_J1zjmCaIaP1fAAG0Q1u8LooAAGKcwOquBkAAbRb93.jpg"
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
              where: "海岛",
              left: {
                theme: "热门景点玩法",
                list: [
                  "西班牙葡萄牙",
                  "黄石公园",
                  "澳凯墨",
                  "神秘古国埃及",
                  "马尔代夫",
                  "毛里求斯"
                ],
                src:
                  "../src/img/Cii_J1zjmCaIaP1fAAG0Q1u8LooAAGKcwOquBkAAbRb93.jpg"
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
        },
        {
          theme: "出境•港澳台",
          place: [
            {
              display: "block",
              where: "精选",
              left: {
                theme: "热门目的地",
                list: [
                  "曼谷",
                  "普吉岛",
                  "巴厘岛",
                  "日本",
                  "东京",
                  "新加坡"
                ],
                src:
                  "../src/img/Cii-tF0IvnSISYKsAAGJ5P5n4T0AAW-_wNfXygAAYn847.jpg"
              },
              right: [
                {
                  src:
                    "../src/img/Cii-slsrIQ6ID5peAARa3uIGJgwAAI5LQAi6wkABFr2402_w320_h180_c1_t0.jpg",
                  price: 8699,
                  satisfaction: 93,
                  title: "<日本东京-富士山-大阪6或7日游>",
                  detailed:
                    "途牛自营/和爱系列 途牛领队服务 高档型酒店加1晚温泉 螃蟹鳗鱼料理 东京连住享自由 CE线东阪连住双自由"
                },
                {
                  src:
                    "../src/img/Cii-slsrIQ6ID5peAARa3uIGJgwAAI5LQAi6wkABFr2402_w320_h180_c1_t0.jpg",
                  price: 8699,
                  satisfaction: 93,
                  title: "<日本东京-富士山-大阪6或7日游>",
                  detailed:
                    "途牛自营/和爱系列 途牛领队服务 高档型酒店加1晚温泉 螃蟹鳗鱼料理 东京连住享自由 CE线东阪连住双自由"
                },
                {
                  src:
                    "../src/img/Cii-slsrIQ6ID5peAARa3uIGJgwAAI5LQAi6wkABFr2402_w320_h180_c1_t0.jpg",
                  price: 8699,
                  satisfaction: 93,
                  title: "<日本东京-富士山-大阪6或7日游>",
                  detailed:
                    "途牛自营/和爱系列 途牛领队服务 高档型酒店加1晚温泉 螃蟹鳗鱼料理 东京连住享自由 CE线东阪连住双自由"
                },
                {
                  src:
                    "../src/img/Cii-slsrIQ6ID5peAARa3uIGJgwAAI5LQAi6wkABFr2402_w320_h180_c1_t0.jpg",
                  price: 8699,
                  satisfaction: 93,
                  title: "<日本东京-富士山-大阪6或7日游>",
                  detailed:
                    "途牛自营/和爱系列 途牛领队服务 高档型酒店加1晚温泉 螃蟹鳗鱼料理 东京连住享自由 CE线东阪连住双自由"
                },
                {
                  src:
                    "../src/img/Cii-slsrIQ6ID5peAARa3uIGJgwAAI5LQAi6wkABFr2402_w320_h180_c1_t0.jpg",
                  price: 8699,
                  satisfaction: 93,
                  title: "<日本东京-富士山-大阪6或7日游>",
                  detailed:
                    "途牛自营/和爱系列 途牛领队服务 高档型酒店加1晚温泉 螃蟹鳗鱼料理 东京连住享自由 CE线东阪连住双自由"
                },
                {
                  src:
                    "../src/img/Cii-slsrIQ6ID5peAARa3uIGJgwAAI5LQAi6wkABFr2402_w320_h180_c1_t0.jpg",
                  price: 8699,
                  satisfaction: 93,
                  title: "<日本东京-富士山-大阪6或7日游>",
                  detailed:
                    "途牛自营/和爱系列 途牛领队服务 高档型酒店加1晚温泉 螃蟹鳗鱼料理 东京连住享自由 CE线东阪连住双自由"
                },
              ]
            },
            {
              display: "none",
              where: "日本",
              left: {
                theme: "热门目的地",
                list: [
                  "曼谷",
                  "普吉岛",
                  "巴厘岛",
                  "日本",
                  "东京",
                  "新加坡"
                ],
                src:
                 "../src/img/Cii-tF0IvnSISYKsAAGJ5P5n4T0AAW-_wNfXygAAYn847.jpg"
              },
              right: [
                {
                  src:
                    "../src/img/2e61862e_w320_h180_c1_t0.jpg",
                  price: 11599,
                  satisfaction: 93,
                  title: "<日本东京-富士山-京都-大阪6或7日游>",
                  detailed:
                    "禅意双古都 奈良萌鹿 一晚温泉 E线吉祥特惠 升级一晚五星 全景经典  AD更有全程包餐 B线7天 京都奈良镰仓三古都"
                },
                 {
                  src:
                    "../src/img/2e61862e_w320_h180_c1_t0.jpg",
                  price: 11599,
                  satisfaction: 93,
                  title: "<日本东京-富士山-京都-大阪6或7日游>",
                  detailed:
                    "禅意双古都 奈良萌鹿 一晚温泉 E线吉祥特惠 升级一晚五星 全景经典  AD更有全程包餐 B线7天 京都奈良镰仓三古都"
                },
                 {
                  src:
                    "../src/img/2e61862e_w320_h180_c1_t0.jpg",
                  price: 11599,
                  satisfaction: 93,
                  title: "<日本东京-富士山-京都-大阪6或7日游>",
                  detailed:
                    "禅意双古都 奈良萌鹿 一晚温泉 E线吉祥特惠 升级一晚五星 全景经典  AD更有全程包餐 B线7天 京都奈良镰仓三古都"
                },

                 {
                  src:
                    "../src/img/2e61862e_w320_h180_c1_t0.jpg",
                  price: 11599,
                  satisfaction: 93,
                  title: "<日本东京-富士山-京都-大阪6或7日游>",
                  detailed:
                    "禅意双古都 奈良萌鹿 一晚温泉 E线吉祥特惠 升级一晚五星 全景经典  AD更有全程包餐 B线7天 京都奈良镰仓三古都"
                },
                 {
                  src:
                    "../src/img/2e61862e_w320_h180_c1_t0.jpg",
                  price: 11599,
                  satisfaction: 93,
                  title: "<日本东京-富士山-京都-大阪6或7日游>",
                  detailed:
                    "禅意双古都 奈良萌鹿 一晚温泉 E线吉祥特惠 升级一晚五星 全景经典  AD更有全程包餐 B线7天 京都奈良镰仓三古都"
                },
                 {
                  src:
                    "../src/img/2e61862e_w320_h180_c1_t0.jpg",
                  price: 11599,
                  satisfaction: 93,
                  title: "<日本东京-富士山-京都-大阪6或7日游>",
                  detailed:
                    "禅意双古都 奈良萌鹿 一晚温泉 E线吉祥特惠 升级一晚五星 全景经典  AD更有全程包餐 B线7天 京都奈良镰仓三古都"
                },
              ]
            },
            {
              display: "none",
              where: "泰国",
              left: {
                theme: "热门目的地",
                list: [
                  "曼谷",
                  "普吉岛",
                  "巴厘岛",
                  "日本",
                  "东京",
                  "新加坡"
                ],
                src:
                 "../src/img/Cii-tF0IvnSISYKsAAGJ5P5n4T0AAW-_wNfXygAAYn847.jpg"
              },
              right: [
                {
                  src:
                    "../src/img/Cii_J10RydGIfJWYAAPM1ayGMacAAHY-QKzpUQAA8zt990_w320_h180_c1_t0.jpg",
                  price: 3135,
                  satisfaction: 98,
                  title: "<泰国曼谷-芭提雅机票+当地5晚6或7日游>",
                  detailed:
                    "陈小春推荐万人游/全程5星/A线0购物0自费保证1晚喜来登或万豪/B线1站店/祈福泼水骑大象/抖音火车夜市"
                },
                {
                  src:
                    "../src/img/Cii_J10RydGIfJWYAAPM1ayGMacAAHY-QKzpUQAA8zt990_w320_h180_c1_t0.jpg",
                  price: 3135,
                  satisfaction: 98,
                  title: "<泰国曼谷-芭提雅机票+当地5晚6或7日游>",
                  detailed:
                    "陈小春推荐万人游/全程5星/A线0购物0自费保证1晚喜来登或万豪/B线1站店/祈福泼水骑大象/抖音火车夜市"
                },
                {
                  src:
                    "../src/img/Cii_J10RydGIfJWYAAPM1ayGMacAAHY-QKzpUQAA8zt990_w320_h180_c1_t0.jpg",
                  price: 3135,
                  satisfaction: 98,
                  title: "<泰国曼谷-芭提雅机票+当地5晚6或7日游>",
                  detailed:
                    "陈小春推荐万人游/全程5星/A线0购物0自费保证1晚喜来登或万豪/B线1站店/祈福泼水骑大象/抖音火车夜市"
                },

                {
                  src:
                    "../src/img/Cii_J10RydGIfJWYAAPM1ayGMacAAHY-QKzpUQAA8zt990_w320_h180_c1_t0.jpg",
                  price: 3135,
                  satisfaction: 98,
                  title: "<泰国曼谷-芭提雅机票+当地5晚6或7日游>",
                  detailed:
                    "陈小春推荐万人游/全程5星/A线0购物0自费保证1晚喜来登或万豪/B线1站店/祈福泼水骑大象/抖音火车夜市"
                },
                {
                  src:
                    "../src/img/Cii_J10RydGIfJWYAAPM1ayGMacAAHY-QKzpUQAA8zt990_w320_h180_c1_t0.jpg",
                  price: 3135,
                  satisfaction: 98,
                  title: "<泰国曼谷-芭提雅机票+当地5晚6或7日游>",
                  detailed:
                    "陈小春推荐万人游/全程5星/A线0购物0自费保证1晚喜来登或万豪/B线1站店/祈福泼水骑大象/抖音火车夜市"
                },
                {
                  src:
                    "../src/img/Cii_J10RydGIfJWYAAPM1ayGMacAAHY-QKzpUQAA8zt990_w320_h180_c1_t0.jpg",
                  price: 3135,
                  satisfaction: 98,
                  title: "<泰国曼谷-芭提雅机票+当地5晚6或7日游>",
                  detailed:
                    "陈小春推荐万人游/全程5星/A线0购物0自费保证1晚喜来登或万豪/B线1站店/祈福泼水骑大象/抖音火车夜市"
                },
              ]
            },
            {
              display: "none",
              where: "海岛",
              left: {
                theme: "热门目的地",
                list: [
                  "曼谷",
                  "普吉岛",
                  "巴厘岛",
                  "日本",
                  "东京",
                  "新加坡"
                ],
                src:
                  "../src/img/Cii-tF0IvnSISYKsAAGJ5P5n4T0AAW-_wNfXygAAYn847.jpg"
              },
              right: [
                {
                  src:
                    "../src/img/Cii_J1mf6R-Ia83EAAgvdrOXEoEAAAajALUGHUACC-O925_w320_h180_c1_t0.jpg",
                  price: 6399,
                  satisfaction: 94,
                  title: "<巴厘岛6-7日游>",
                  detailed:
                    "臻程/纯玩/独栋泳池别墅/海边国五希尔顿同级/蓝梦岛出海/阿勇河漂流/火山石SPA/峡谷下午茶/WiFi(上海往返)"
                },
                 {
                  src:
                    "../src/img/Cii_J1mf6R-Ia83EAAgvdrOXEoEAAAajALUGHUACC-O925_w320_h180_c1_t0.jpg",
                  price: 6399,
                  satisfaction: 94,
                  title: "<巴厘岛6-7日游>",
                  detailed:
                    "臻程/纯玩/独栋泳池别墅/海边国五希尔顿同级/蓝梦岛出海/阿勇河漂流/火山石SPA/峡谷下午茶/WiFi(上海往返)"
                },
                 {
                  src:
                    "../src/img/Cii_J1mf6R-Ia83EAAgvdrOXEoEAAAajALUGHUACC-O925_w320_h180_c1_t0.jpg",
                  price: 6399,
                  satisfaction: 94,
                  title: "<巴厘岛6-7日游>",
                  detailed:
                    "臻程/纯玩/独栋泳池别墅/海边国五希尔顿同级/蓝梦岛出海/阿勇河漂流/火山石SPA/峡谷下午茶/WiFi(上海往返)"
                },

                 {
                  src:
                    "../src/img/Cii_J1mf6R-Ia83EAAgvdrOXEoEAAAajALUGHUACC-O925_w320_h180_c1_t0.jpg",
                  price: 6399,
                  satisfaction: 94,
                  title: "<巴厘岛6-7日游>",
                  detailed:
                    "臻程/纯玩/独栋泳池别墅/海边国五希尔顿同级/蓝梦岛出海/阿勇河漂流/火山石SPA/峡谷下午茶/WiFi(上海往返)"
                },
                 {
                  src:
                    "../src/img/Cii_J1mf6R-Ia83EAAgvdrOXEoEAAAajALUGHUACC-O925_w320_h180_c1_t0.jpg",
                  price: 6399,
                  satisfaction: 94,
                  title: "<巴厘岛6-7日游>",
                  detailed:
                    "臻程/纯玩/独栋泳池别墅/海边国五希尔顿同级/蓝梦岛出海/阿勇河漂流/火山石SPA/峡谷下午茶/WiFi(上海往返)"
                },
                 {
                  src:
                    "../src/img/Cii_J1mf6R-Ia83EAAgvdrOXEoEAAAajALUGHUACC-O925_w320_h180_c1_t0.jpg",
                  price: 6399,
                  satisfaction: 94,
                  title: "<巴厘岛6-7日游>",
                  detailed:
                    "臻程/纯玩/独栋泳池别墅/海边国五希尔顿同级/蓝梦岛出海/阿勇河漂流/火山石SPA/峡谷下午茶/WiFi(上海往返)"
                },
              ]
            },
            {
              display: "none",
              where: "东南亚",
              left: {
                theme: "热门目的地",
                list: [
                  "曼谷",
                  "普吉岛",
                  "巴厘岛",
                  "日本",
                  "东京",
                  "新加坡"
                ],
                src: "../src/img/Cii-tF0IvnSISYKsAAGJ5P5n4T0AAW-_wNfXygAAYn847.jpg"
              },
              right: [
                {
                  src:
                    "../src/img/Cii-s1vkEouIZyYLAAg0_S5QEC8AAQPdwN71i0ACDUV261_w320_h180_c1_t0.jpg",
                  price: 11599,
                  satisfaction: 93,
                  title: "<新加坡-圣淘沙机票+当地4晚5日游>",
                  detailed:
                    "途牛自营/金沙情缘/拒签无忧,纯玩0购物,全程五星,夜游新加坡河,指定入住1晚滨海湾金沙,2天FREE,19元超值换购电话卡"
                },
                {
                  src:
                    "../src/img/Cii-s1vkEouIZyYLAAg0_S5QEC8AAQPdwN71i0ACDUV261_w320_h180_c1_t0.jpg",
                  price: 11599,
                  satisfaction: 93,
                  title: "<新加坡-圣淘沙机票+当地4晚5日游>",
                  detailed:
                    "途牛自营/金沙情缘/拒签无忧,纯玩0购物,全程五星,夜游新加坡河,指定入住1晚滨海湾金沙,2天FREE,19元超值换购电话卡"
                },
                {
                  src:
                    "../src/img/Cii-s1vkEouIZyYLAAg0_S5QEC8AAQPdwN71i0ACDUV261_w320_h180_c1_t0.jpg",
                  price: 11599,
                  satisfaction: 93,
                  title: "<新加坡-圣淘沙机票+当地4晚5日游>",
                  detailed:
                    "途牛自营/金沙情缘/拒签无忧,纯玩0购物,全程五星,夜游新加坡河,指定入住1晚滨海湾金沙,2天FREE,19元超值换购电话卡"
                },

                {
                  src:
                    "../src/img/Cii-s1vkEouIZyYLAAg0_S5QEC8AAQPdwN71i0ACDUV261_w320_h180_c1_t0.jpg",
                  price: 11599,
                  satisfaction: 93,
                  title: "<新加坡-圣淘沙机票+当地4晚5日游>",
                  detailed:
                    "途牛自营/金沙情缘/拒签无忧,纯玩0购物,全程五星,夜游新加坡河,指定入住1晚滨海湾金沙,2天FREE,19元超值换购电话卡"
                },
                {
                  src:
                    "../src/img/Cii-s1vkEouIZyYLAAg0_S5QEC8AAQPdwN71i0ACDUV261_w320_h180_c1_t0.jpg",
                  price: 11599,
                  satisfaction: 93,
                  title: "<新加坡-圣淘沙机票+当地4晚5日游>",
                  detailed:
                    "途牛自营/金沙情缘/拒签无忧,纯玩0购物,全程五星,夜游新加坡河,指定入住1晚滨海湾金沙,2天FREE,19元超值换购电话卡"
                },
                {
                  src:
                    "../src/img/Cii-s1vkEouIZyYLAAg0_S5QEC8AAQPdwN71i0ACDUV261_w320_h180_c1_t0.jpg",
                  price: 11599,
                  satisfaction: 93,
                  title: "<新加坡-圣淘沙机票+当地4晚5日游>",
                  detailed:
                    "途牛自营/金沙情缘/拒签无忧,纯玩0购物,全程五星,夜游新加坡河,指定入住1晚滨海湾金沙,2天FREE,19元超值换购电话卡"
                },
              ]
            },
            {
              display: "none",
              where: "越柬南亚",
              left: {
               theme: "热门目的地",
                list: [
                  "曼谷",
                  "普吉岛",
                  "巴厘岛",
                  "日本",
                  "东京",
                  "新加坡"
                ],
                src:
                  "../src/img/Cii-tF0IvnSISYKsAAGJ5P5n4T0AAW-_wNfXygAAYn847.jpg"
              },
              right: [
                {
                  src:
                    "../src/img/Cii-VVzs-gyIA-vCAAjrkahQf6IAAGaWgDFNUUACOup425_w320_h180_c1_t0.jpg",
                  price: 2899,
                  satisfaction: 96,
                  title: "<越南-芽庄一地5或6日游>",
                  detailed:
                    "千人出游，指定五星哈瓦那，打卡网红天堂湾，泥浆浴，skylight海景下午茶，市区游，出海游，1日自由，品滴漏咖啡，含流量卡"
                },
                {
                  src:
                    "../src/img/Cii-VVzs-gyIA-vCAAjrkahQf6IAAGaWgDFNUUACOup425_w320_h180_c1_t0.jpg",
                  price: 2899,
                  satisfaction: 96,
                  title: "<越南-芽庄一地5或6日游>",
                  detailed:
                    "千人出游，指定五星哈瓦那，打卡网红天堂湾，泥浆浴，skylight海景下午茶，市区游，出海游，1日自由，品滴漏咖啡，含流量卡"
                },
                {
                  src:
                    "../src/img/Cii-VVzs-gyIA-vCAAjrkahQf6IAAGaWgDFNUUACOup425_w320_h180_c1_t0.jpg",
                  price: 2899,
                  satisfaction: 96,
                  title: "<越南-芽庄一地5或6日游>",
                  detailed:
                    "千人出游，指定五星哈瓦那，打卡网红天堂湾，泥浆浴，skylight海景下午茶，市区游，出海游，1日自由，品滴漏咖啡，含流量卡"
                },

                {
                  src:
                    "../src/img/Cii-VVzs-gyIA-vCAAjrkahQf6IAAGaWgDFNUUACOup425_w320_h180_c1_t0.jpg",
                  price: 2899,
                  satisfaction: 96,
                  title: "<越南-芽庄一地5或6日游>",
                  detailed:
                    "千人出游，指定五星哈瓦那，打卡网红天堂湾，泥浆浴，skylight海景下午茶，市区游，出海游，1日自由，品滴漏咖啡，含流量卡"
                },
                {
                  src:
                    "../src/img/Cii-VVzs-gyIA-vCAAjrkahQf6IAAGaWgDFNUUACOup425_w320_h180_c1_t0.jpg",
                  price: 2899,
                  satisfaction: 96,
                  title: "<越南-芽庄一地5或6日游>",
                  detailed:
                    "千人出游，指定五星哈瓦那，打卡网红天堂湾，泥浆浴，skylight海景下午茶，市区游，出海游，1日自由，品滴漏咖啡，含流量卡"
                },
                {
                  src:
                    "../src/img/Cii-VVzs-gyIA-vCAAjrkahQf6IAAGaWgDFNUUACOup425_w320_h180_c1_t0.jpg",
                  price: 2899,
                  satisfaction: 96,
                  title: "<越南-芽庄一地5或6日游>",
                  detailed:
                    "千人出游，指定五星哈瓦那，打卡网红天堂湾，泥浆浴，skylight海景下午茶，市区游，出海游，1日自由，品滴漏咖啡，含流量卡"
                },
              ]
            },
            {
              display: "none",
              where: "港澳台",
              left: {
                theme: "热门目的地",
                list: [
                  "曼谷",
                  "普吉岛",
                  "巴厘岛",
                  "日本",
                  "东京",
                  "新加坡"
                ],
                src:
                  "../src/img/Cii-tF0IvnSISYKsAAGJ5P5n4T0AAW-_wNfXygAAYn847.jpg"
              },
              right: [
                {
                  src:
                    "../src/img/ac35764d_w320_h180_c1_t0.jpg",
                  price: 1999,
                  satisfaction: 95,
                  title: "<香港+澳门双飞4日自由行>",
                  detailed:
                    "香港往返，2晚香港九龙/九龙珀丽/如心海景/帆船/逸酒店，1晚澳门葡京/威尼斯/喜来登/濠璟酒店可选，可选港珠澳大桥直通澳门"
                },
                {
                  src:
                    "../src/img/ac35764d_w320_h180_c1_t0.jpg",
                  price: 1999,
                  satisfaction: 95,
                  title: "<香港+澳门双飞4日自由行>",
                  detailed:
                    "香港往返，2晚香港九龙/九龙珀丽/如心海景/帆船/逸酒店，1晚澳门葡京/威尼斯/喜来登/濠璟酒店可选，可选港珠澳大桥直通澳门"
                },
                {
                  src:
                    "../src/img/ac35764d_w320_h180_c1_t0.jpg",
                  price: 1999,
                  satisfaction: 95,
                  title: "<香港+澳门双飞4日自由行>",
                  detailed:
                    "香港往返，2晚香港九龙/九龙珀丽/如心海景/帆船/逸酒店，1晚澳门葡京/威尼斯/喜来登/濠璟酒店可选，可选港珠澳大桥直通澳门"
                },

                {
                  src:
                    "../src/img/ac35764d_w320_h180_c1_t0.jpg",
                  price: 1999,
                  satisfaction: 95,
                  title: "<香港+澳门双飞4日自由行>",
                  detailed:
                    "香港往返，2晚香港九龙/九龙珀丽/如心海景/帆船/逸酒店，1晚澳门葡京/威尼斯/喜来登/濠璟酒店可选，可选港珠澳大桥直通澳门"
                },
                {
                  src:
                    "../src/img/ac35764d_w320_h180_c1_t0.jpg",
                  price: 1999,
                  satisfaction: 95,
                  title: "<香港+澳门双飞4日自由行>",
                  detailed:
                    "香港往返，2晚香港九龙/九龙珀丽/如心海景/帆船/逸酒店，1晚澳门葡京/威尼斯/喜来登/濠璟酒店可选，可选港珠澳大桥直通澳门"
                },
                {
                  src:
                    "../src/img/ac35764d_w320_h180_c1_t0.jpg",
                  price: 1999,
                  satisfaction: 95,
                  title: "<香港+澳门双飞4日自由行>",
                  detailed:
                    "香港往返，2晚香港九龙/九龙珀丽/如心海景/帆船/逸酒店，1晚澳门葡京/威尼斯/喜来登/濠璟酒店可选，可选港珠澳大桥直通澳门"
                },
              ]
            }
          ]
        },
        {
          theme: "境内旅游",
          place: [
            {
              display: "block",
              where: "精选",
              left: {
                theme: "热门景点玩法",
                list: [
                  "蜈支洲岛",
                  "西双版纳",
                  "鼓浪屿",
                  "长白山",
                  "北海",
                  "故宫"
                ],
                src:
                  "../src/img/Cii_J1zjmCaIaP1fAAG0Q1u8LooAAGKcwOquBkAAbRb93.jpg"
              },
              right: [
                {
                  src:
                    "../src/img/Cii-slzvOS6IEQF2ABFdXzzj_SUAAWSEgKU6UIAEV13542_w320_h180_c1_t0.jpg",
                  price: 3069,
                  satisfaction: 97,
                  title: "<西安-兵马俑-华清池-法门寺-乾陵-大明宫双飞5日游>",
                  detailed:
                    "牛人五星畅销，超2W人出游，国际五星自助餐，历博VIP通道，网红南门璀璨夜景 ，24H接送机"
                },
                {
                  src:
                    "../src/img/Cii-slzvOS6IEQF2ABFdXzzj_SUAAWSEgKU6UIAEV13542_w320_h180_c1_t0.jpg",
                  price: 3069,
                  satisfaction: 97,
                  title: "<西安-兵马俑-华清池-法门寺-乾陵-大明宫双飞5日游>",
                  detailed:
                    "牛人五星畅销，超2W人出游，国际五星自助餐，历博VIP通道，网红南门璀璨夜景 ，24H接送机"
                },
                {
                  src:
                    "../src/img/Cii-slzvOS6IEQF2ABFdXzzj_SUAAWSEgKU6UIAEV13542_w320_h180_c1_t0.jpg",
                  price: 3069,
                  satisfaction: 97,
                  title: "<西安-兵马俑-华清池-法门寺-乾陵-大明宫双飞5日游>",
                  detailed:
                    "牛人五星畅销，超2W人出游，国际五星自助餐，历博VIP通道，网红南门璀璨夜景 ，24H接送机"
                },

                {
                  src:
                    "../src/img/Cii-slzvOS6IEQF2ABFdXzzj_SUAAWSEgKU6UIAEV13542_w320_h180_c1_t0.jpg",
                  price: 3069,
                  satisfaction: 97,
                  title: "<西安-兵马俑-华清池-法门寺-乾陵-大明宫双飞5日游>",
                  detailed:
                    "牛人五星畅销，超2W人出游，国际五星自助餐，历博VIP通道，网红南门璀璨夜景 ，24H接送机"
                },
                {
                  src:
                    "../src/img/Cii-slzvOS6IEQF2ABFdXzzj_SUAAWSEgKU6UIAEV13542_w320_h180_c1_t0.jpg",
                  price: 3069,
                  satisfaction: 97,
                  title: "<西安-兵马俑-华清池-法门寺-乾陵-大明宫双飞5日游>",
                  detailed:
                    "牛人五星畅销，超2W人出游，国际五星自助餐，历博VIP通道，网红南门璀璨夜景 ，24H接送机"
                },
                {
                  src:
                    "../src/img/Cii-slzvOS6IEQF2ABFdXzzj_SUAAWSEgKU6UIAEV13542_w320_h180_c1_t0.jpg",
                  price: 3069,
                  satisfaction: 97,
                  title: "<西安-兵马俑-华清池-法门寺-乾陵-大明宫双飞5日游>",
                  detailed:
                    "牛人五星畅销，超2W人出游，国际五星自助餐，历博VIP通道，网红南门璀璨夜景 ，24H接送机"
                },
              ]
            },
            {
              display: "none",
              where: "三亚",
             left: {
                theme: "热门景点玩法",
                list: [
                  "蜈支洲岛",
                  "西双版纳",
                  "鼓浪屿",
                  "长白山",
                  "北海",
                  "故宫"
                ],
                src:
                  "../src/img/Cii_J1zjmCaIaP1fAAG0Q1u8LooAAGKcwOquBkAAbRb93.jpg"
                  },
              right: [
                {
                  src:
                    "../src/img/Cii-VV0IO4eIe9i1AA9jRrgCtqwAAHN0wAZWWIAD2Ne865_w320_h180_c1_t0.jpg",
                  price: 2259,
                  satisfaction: 95,
                  title: "<海南三亚双飞5日游>",
                  detailed:
                    "蜜月萌娃0购优选/双景区免排队，自选（玉海/唐拉雅秀/温德姆）儿童乐园/户外泳池，赠呀诺达悬空云台/蜈支洲含餐，赠便携手持风扇"
                },
                {
                  src:
                    "../src/img/Cii-VV0IO4eIe9i1AA9jRrgCtqwAAHN0wAZWWIAD2Ne865_w320_h180_c1_t0.jpg",
                  price: 2259,
                  satisfaction: 95,
                  title: "<海南三亚双飞5日游>",
                  detailed:
                    "蜜月萌娃0购优选/双景区免排队，自选（玉海/唐拉雅秀/温德姆）儿童乐园/户外泳池，赠呀诺达悬空云台/蜈支洲含餐，赠便携手持风扇"
                },
                {
                  src:
                    "../src/img/Cii-VV0IO4eIe9i1AA9jRrgCtqwAAHN0wAZWWIAD2Ne865_w320_h180_c1_t0.jpg",
                  price: 2259,
                  satisfaction: 95,
                  title: "<海南三亚双飞5日游>",
                  detailed:
                    "蜜月萌娃0购优选/双景区免排队，自选（玉海/唐拉雅秀/温德姆）儿童乐园/户外泳池，赠呀诺达悬空云台/蜈支洲含餐，赠便携手持风扇"
                },

                {
                  src:
                    "../src/img/Cii-VV0IO4eIe9i1AA9jRrgCtqwAAHN0wAZWWIAD2Ne865_w320_h180_c1_t0.jpg",
                  price: 2259,
                  satisfaction: 95,
                  title: "<海南三亚双飞5日游>",
                  detailed:
                    "蜜月萌娃0购优选/双景区免排队，自选（玉海/唐拉雅秀/温德姆）儿童乐园/户外泳池，赠呀诺达悬空云台/蜈支洲含餐，赠便携手持风扇"
                },
               {
                  src:
                    "../src/img/Cii-VV0IO4eIe9i1AA9jRrgCtqwAAHN0wAZWWIAD2Ne865_w320_h180_c1_t0.jpg",
                  price: 2259,
                  satisfaction: 95,
                  title: "<海南三亚双飞5日游>",
                  detailed:
                    "蜜月萌娃0购优选/双景区免排队，自选（玉海/唐拉雅秀/温德姆）儿童乐园/户外泳池，赠呀诺达悬空云台/蜈支洲含餐，赠便携手持风扇"
                },
                {
                  src:
                    "../src/img/Cii-VV0IO4eIe9i1AA9jRrgCtqwAAHN0wAZWWIAD2Ne865_w320_h180_c1_t0.jpg",
                  price: 2259,
                  satisfaction: 95,
                  title: "<海南三亚双飞5日游>",
                  detailed:
                    "蜜月萌娃0购优选/双景区免排队，自选（玉海/唐拉雅秀/温德姆）儿童乐园/户外泳池，赠呀诺达悬空云台/蜈支洲含餐，赠便携手持风扇"
                },
              ]
            },
            {
              display: "none",
              where: "云南",
             left: {
                theme: "热门景点玩法",
                list: [
                  "蜈支洲岛",
                  "西双版纳",
                  "鼓浪屿",
                  "长白山",
                  "北海",
                  "故宫"
                ],
                src:
                  "../src/img/Cii_J1zjmCaIaP1fAAG0Q1u8LooAAGKcwOquBkAAbRb93.jpg"
             },
              right: [
                {
                  src:
                    "../src/img/Cii-s1rgHgKIGQmrABAHo_HdYN0AAGClwG0zM0AEAe7535_w320_h180_c1_t0.jpg",
                  price: 2525,
                  satisfaction: 95,
                  title: "<云南-昆明-大理-丽江双飞6日游>",
                  detailed:
                    "2大免1小/纯玩0购物/花之城豪生/温泉SPA/加80元升级雪山冰川大索/蓝月谷/双廊旅拍/导游"
                },
                {
                  src:
                    "../src/img/Cii-s1rgHgKIGQmrABAHo_HdYN0AAGClwG0zM0AEAe7535_w320_h180_c1_t0.jpg",
                  price: 2525,
                  satisfaction: 95,
                  title: "<云南-昆明-大理-丽江双飞6日游>",
                  detailed:
                    "2大免1小/纯玩0购物/花之城豪生/温泉SPA/加80元升级雪山冰川大索/蓝月谷/双廊旅拍/导游"
                },
                {
                  src:
                    "../src/img/Cii-s1rgHgKIGQmrABAHo_HdYN0AAGClwG0zM0AEAe7535_w320_h180_c1_t0.jpg",
                  price: 2525,
                  satisfaction: 95,
                  title: "<云南-昆明-大理-丽江双飞6日游>",
                  detailed:
                    "2大免1小/纯玩0购物/花之城豪生/温泉SPA/加80元升级雪山冰川大索/蓝月谷/双廊旅拍/导游"
                },

               {
                  src:
                    "../src/img/Cii-s1rgHgKIGQmrABAHo_HdYN0AAGClwG0zM0AEAe7535_w320_h180_c1_t0.jpg",
                  price: 2525,
                  satisfaction: 95,
                  title: "<云南-昆明-大理-丽江双飞6日游>",
                  detailed:
                    "2大免1小/纯玩0购物/花之城豪生/温泉SPA/加80元升级雪山冰川大索/蓝月谷/双廊旅拍/导游"
                },
                {
                  src:
                    "../src/img/Cii-s1rgHgKIGQmrABAHo_HdYN0AAGClwG0zM0AEAe7535_w320_h180_c1_t0.jpg",
                  price: 2525,
                  satisfaction: 95,
                  title: "<云南-昆明-大理-丽江双飞6日游>",
                  detailed:
                    "2大免1小/纯玩0购物/花之城豪生/温泉SPA/加80元升级雪山冰川大索/蓝月谷/双廊旅拍/导游"
                },
                {
                  src:
                    "../src/img/Cii-s1rgHgKIGQmrABAHo_HdYN0AAGClwG0zM0AEAe7535_w320_h180_c1_t0.jpg",
                  price: 2525,
                  satisfaction: 95,
                  title: "<云南-昆明-大理-丽江双飞6日游>",
                  detailed:
                    "2大免1小/纯玩0购物/花之城豪生/温泉SPA/加80元升级雪山冰川大索/蓝月谷/双廊旅拍/导游"
                },
              ]
            },
            {
              display: "none",
              where: "中东非",
              left: {
                theme: "热门景点玩法",
                list: [
                  "蜈支洲岛",
                  "西双版纳",
                  "鼓浪屿",
                  "长白山",
                  "北海",
                  "故宫"
                ],
                src:
                  "../src/img/Cii_J1zjmCaIaP1fAAG0Q1u8LooAAGKcwOquBkAAbRb93.jpg"
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
              where: "澳新",
              left: {
                theme: "热门景点玩法",
                list: [
                  "蜈支洲岛",
                  "西双版纳",
                  "鼓浪屿",
                  "长白山",
                  "北海",
                  "故宫"
                ],
                src:
                  "../src/img/Cii_J1zjmCaIaP1fAAG0Q1u8LooAAGKcwOquBkAAbRb93.jpg"
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
              where: "马代",
              left: {
                theme: "热门景点玩法",
                list: [
                  "蜈支洲岛",
                  "西双版纳",
                  "鼓浪屿",
                  "长白山",
                  "北海",
                  "故宫"
                ],
                src:
                  "../src/img/Cii_J1zjmCaIaP1fAAG0Q1u8LooAAGKcwOquBkAAbRb93.jpg"
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
              where: "海岛",
              left: {
                theme: "热门景点玩法",
                list: [
                  "蜈支洲岛",
                  "西双版纳",
                  "鼓浪屿",
                  "长白山",
                  "北海",
                  "故宫"
                ],
                src:
                  "../src/img/Cii_J1zjmCaIaP1fAAG0Q1u8LooAAGKcwOquBkAAbRb93.jpg"
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
      let whichTab = document.getElementsByClassName("index-mytab")[num];
      let liList = whichTab.getElementsByTagName("li");
      let e = event || window.event;
      let target = e.target || e.srcElement;
      for (let i = 0; i < liList.length; i++) {
        liList[i].classList.remove("index-on-green");
      }
      if (target.nodeName == "LI") {
        target.classList.add("index-on-green");
      }

      let index = 0;
      for (let i = 0; i < liList.length; i++) {
        if (liList[i] === target) {
          index = i;
        }
      }

      let whichShowBox = document.getElementsByClassName("index-model-main")[
        num
      ];
      let whichShow = whichShowBox.getElementsByClassName("index-model-box");
      for (let i = 0; i < whichShow.length; i++) {
        whichShow[i].style.display = "none";
      }
      whichShow[index].style.display = "block";
    }
  }
};
</script>
