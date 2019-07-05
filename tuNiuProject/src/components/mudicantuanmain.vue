<style>
.localplay-list {
  width: 1190px;
  overflow: hidden;
}

.localplay-list-box {
  position: relative;
  margin: 5px auto 25px;
}
.localplay-imgtheme {
  position: absolute;
  top: -5px;
  left: 20px;
}
.localplay-list-box-tab {
  margin-left: 250px;
  height: 27px;
}
.localplay-list-box-tab li {
  float: left;
  color: #666;
  font-size: 14px;
  line-height: 27px;
  min-width: 60px;
  height: 27px;
  border-radius: 0;
  text-align: center;
  margin-right: 0;
  border: none;
  font-size: 14px;
  padding: 0 10px;
  cursor: pointer;
}
li.localplay-on {
  background: url("../img/tabbg.png") center center no-repeat;
  color: white;
  background-size: cover;
}
.localplay-list-show {
  position: relative;
  margin-top: 10px;
  border-top: 2px solid #ff9419;
  padding-top: 15px;
  height: 566px;
}
.localplay-list-item {
  position: absolute;
  top: 10px;
  left: 0;
}
.localplay-item {
  width: 300px;
  height: 270px;
  float: left;
  margin-left: 14px;
  cursor: pointer;
  margin-bottom: 13px;
  background-color: #ecf0f5;
}
.localplay-item:hover {
  box-shadow: 0 0 5px #ff6600;
}
.localplay-price-left {
  float: left;
  color: #ff6600;
  display: block;
  float: left;
  font-size: 12px;
  line-height: 18px;
}

.localplay-price-left span {
  font-size: 24px;
  font-weight: 700;
}

.localplay-price-right {
  float: right;
  line-height: 20px;
  color: #bbbbbb;
}

.localplay-price {
  padding: 8px 10px 5px;
}
.localplay-content {
  background-color: #ecf0f5;
  padding: 0 10px 10px 10px;
  font-size: 14px;
  height: 29px;
  overflow: hidden;
  line-height: 18px;
}
</style>

<template>
  <div class="localplay-list">
    <div class="localplay-list-box clear" v-for="(item, index) in list" :key="index">
      <ul class="localplay-list-box-tab clear">
        <li
          v-for="(ite, indx) in item.tab"
          :key="indx"
          v-text="ite.place"
          :class="[ indx<=0 ? 'localplay-on':'']"
          @mouseenter="choose(index)"
        ></li>
      </ul>

      <div class="localplay-list-show">
        <div
          class="localplay-list-item clear"
          v-for="(ite, indx) in item.tab"
          :key="indx"
          :style="{display:ite.display}"
        >
          <div class="localplay-item" v-for="(it, ind) in ite.itemList" :key="ind">
            <img :src="it.src" width="300px" height="175px" alt />
            <div class="localplay-data">
              <div class="localplay-price clear">
                <div class="localplay-price-left">
                  ￥
                  <span v-text="it.price"></span>起
                </div>
                <div class="localplay-price-right">
                  满意度
                  <span v-text="it.satisfaction"></span>
                </div>
              </div>
              <div class="localplay-content" v-text="it.content"></div>
            </div>
          </div>
        </div>
      </div>

      <img class="localplay-imgtheme" :src="item.src" alt />
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      list: [
        {
          src: "https://m3.tuniucdn.com/fb2/t1/G5/M00/64/65/Cii-slqCUguIV5O1AAAVtTo-3AQAADdBwEuvwkAABXN02.jpeg",
          tab: [
            {
              display: "block",
              place: "海南",
              itemList: [
                {
                  src:
                    "../src/img/Cii-sly4QM-IDD0GAAB1_3m4tcIAAVNWAP2f0oAAHYX40_w640_h480_c1_t0.jpg",
                  price: 219,
                  satisfaction: "92%",
                  content:
                    "三亚南湾猴岛+椰田古寨1日游亲子玩乐首选，含猴岛跨海索道，与猕猴互动，乐趣无穷，午餐套餐可选"
                },
                {
                  src:
                    "../src/img/Cii9EVjLvzaIDEenACyQWksIfOEAAI8EADDN8cALJBy801_w640_h480_c1_t0.jpg",
                  price: 219,
                  satisfaction: "92%",
                  content:
                    "三亚南湾猴岛+椰田古寨1日游亲子玩乐首选，含猴岛跨海索道，与猕猴互动，乐趣无穷，午餐套餐可选"
                },
                {
                  src:
                    "../src/img/Cii9EVjLvzaIDEenACyQWksIfOEAAI8EADDN8cALJBy801_w640_h480_c1_t0.jpg",
                  price: 219,
                  satisfaction: "92%",
                  content:
                    "三亚南湾猴岛+椰田古寨1日游亲子玩乐首选，含猴岛跨海索道，与猕猴互动，乐趣无穷，午餐套餐可选"
                },
                {
                  src:
                    "../src/img/Cii9EVjLvzaIDEenACyQWksIfOEAAI8EADDN8cALJBy801_w640_h480_c1_t0.jpg",
                  price: 219,
                  satisfaction: "92%",
                  content:
                    "三亚南湾猴岛+椰田古寨1日游亲子玩乐首选，含猴岛跨海索道，与猕猴互动，乐趣无穷，午餐套餐可选"
                },
                {
                  src:
                    "../src/img/Cii9EVjLvzaIDEenACyQWksIfOEAAI8EADDN8cALJBy801_w640_h480_c1_t0.jpg",
                  price: 219,
                  satisfaction: "92%",
                  content:
                    "三亚南湾猴岛+椰田古寨1日游亲子玩乐首选，含猴岛跨海索道，与猕猴互动，乐趣无穷，午餐套餐可选"
                },
                {
                  src:
                    "../src/img/Cii9EVjLvzaIDEenACyQWksIfOEAAI8EADDN8cALJBy801_w640_h480_c1_t0.jpg",
                  price: 219,
                  satisfaction: "92%",
                  content:
                    "三亚南湾猴岛+椰田古寨1日游亲子玩乐首选，含猴岛跨海索道，与猕猴互动，乐趣无穷，午餐套餐可选"
                }
              ]
            },
            {
              display: "none",
              place: "福建",
              itemList: [
                {
                  src:
                    "../src/img/Cii-s1wHMMmIZ02sABJl7eNnjfkAARPvABnEGwAEmYF408_w640_h480_c1_t0.png",
                  price: 80,
                  satisfaction: "100%",
                  content: "<鹭江夜游>海上欣赏厦门夜景，边观景边品茶赏歌"
                },
                {
                  src:
                    "../src/img/Cii-s1wHMMmIZ02sABJl7eNnjfkAARPvABnEGwAEmYF408_w640_h480_c1_t0.png",
                  price: 80,
                  satisfaction: "100%",
                  content: "<鹭江夜游>海上欣赏厦门夜景，边观景边品茶赏歌"
                },
                {
                  src:
                    "../src/img/Cii-s1wHMMmIZ02sABJl7eNnjfkAARPvABnEGwAEmYF408_w640_h480_c1_t0.png",
                  price: 80,
                  satisfaction: "100%",
                  content: "<鹭江夜游>海上欣赏厦门夜景，边观景边品茶赏歌"
                },
                {
                  src:
                    "../src/img/Cii-s1wHMMmIZ02sABJl7eNnjfkAARPvABnEGwAEmYF408_w640_h480_c1_t0.png",
                  price: 80,
                  satisfaction: "100%",
                  content: "<鹭江夜游>海上欣赏厦门夜景，边观景边品茶赏歌"
                },
                {
                  src:
                    "../src/img/Cii-s1wHMMmIZ02sABJl7eNnjfkAARPvABnEGwAEmYF408_w640_h480_c1_t0.png",
                  price: 80,
                  satisfaction: "100%",
                  content: "<鹭江夜游>海上欣赏厦门夜景，边观景边品茶赏歌"
                },
                {
                  src:
                    "../src/img/Cii-s1wHMMmIZ02sABJl7eNnjfkAARPvABnEGwAEmYF408_w640_h480_c1_t0.png",
                  price: 80,
                  satisfaction: "100%",
                  content: "<鹭江夜游>海上欣赏厦门夜景，边观景边品茶赏歌"
                }
              ]
            },
            {
              display: "none",
              place: "云南",
              itemList: [
                {
                  src:
                    "../src/img/Cii-s1s3K7-INUZ-AAYbo2nOwe0AAJYGwAebzUABhu767_w640_h480_c1_t0.jpg",
                  price: 288,
                  satisfaction: "91%",
                  content:
                    "<丽江玉龙雪山纯玩一日游冰川公园大索道蓝月谷云南丽江旅游>纯玩品质商务小团高性价比售后无忧"
                },
                {
                  src:
                    "../src/img/Cii-s1s3K7-INUZ-AAYbo2nOwe0AAJYGwAebzUABhu767_w640_h480_c1_t0.jpg",
                  price: 288,
                  satisfaction: "91%",
                  content:
                    "<丽江玉龙雪山纯玩一日游冰川公园大索道蓝月谷云南丽江旅游>纯玩品质商务小团高性价比售后无忧"
                },
                {
                  src:
                    "../src/img/Cii-s1s3K7-INUZ-AAYbo2nOwe0AAJYGwAebzUABhu767_w640_h480_c1_t0.jpg",
                  price: 288,
                  satisfaction: "91%",
                  content:
                    "<丽江玉龙雪山纯玩一日游冰川公园大索道蓝月谷云南丽江旅游>纯玩品质商务小团高性价比售后无忧"
                },
                {
                  src:
                    "../src/img/Cii-s1s3K7-INUZ-AAYbo2nOwe0AAJYGwAebzUABhu767_w640_h480_c1_t0.jpg",
                  price: 288,
                  satisfaction: "91%",
                  content:
                    "<丽江玉龙雪山纯玩一日游冰川公园大索道蓝月谷云南丽江旅游>纯玩品质商务小团高性价比售后无忧"
                },
                {
                  src:
                    "../src/img/Cii-s1s3K7-INUZ-AAYbo2nOwe0AAJYGwAebzUABhu767_w640_h480_c1_t0.jpg",
                  price: 288,
                  satisfaction: "91%",
                  content:
                    "<丽江玉龙雪山纯玩一日游冰川公园大索道蓝月谷云南丽江旅游>纯玩品质商务小团高性价比售后无忧"
                },
                {
                  src:
                    "../src/img/Cii-s1s3K7-INUZ-AAYbo2nOwe0AAJYGwAebzUABhu767_w640_h480_c1_t0.jpg",
                  price: 288,
                  satisfaction: "91%",
                  content:
                    "<丽江玉龙雪山纯玩一日游冰川公园大索道蓝月谷云南丽江旅游>纯玩品质商务小团高性价比售后无忧"
                }
              ]
            },
            {
              display: "none",
              place: "广东/广西",
              itemList: [
                {
                  src:
                    "../src/img/Cii-s1tHGa6IfK_XAAN_BXEF_3sAAKF-gBpAIoAA38d18_w640_h480_c1_t0.jpeg",
                  price: 288,
                  satisfaction: "100%",
                  content:
                    "<珠海必游·港珠澳大桥+网红景点+深度纯玩一日游>（上门接送+优质服务+纯玩无购物）"
                },
                {
                  src:
                    "../src/img/Cii-s1tHGa6IfK_XAAN_BXEF_3sAAKF-gBpAIoAA38d18_w640_h480_c1_t0.jpeg",
                  price: 288,
                  satisfaction: "100%",
                  content:
                    "<珠海必游·港珠澳大桥+网红景点+深度纯玩一日游>（上门接送+优质服务+纯玩无购物）"
                },
                {
                  src:
                    "../src/img/Cii-s1tHGa6IfK_XAAN_BXEF_3sAAKF-gBpAIoAA38d18_w640_h480_c1_t0.jpeg",
                  price: 288,
                  satisfaction: "100%",
                  content:
                    "<珠海必游·港珠澳大桥+网红景点+深度纯玩一日游>（上门接送+优质服务+纯玩无购物）"
                },
                {
                  src:
                    "../src/img/Cii-s1tHGa6IfK_XAAN_BXEF_3sAAKF-gBpAIoAA38d18_w640_h480_c1_t0.jpeg",
                  price: 288,
                  satisfaction: "100%",
                  content:
                    "<珠海必游·港珠澳大桥+网红景点+深度纯玩一日游>（上门接送+优质服务+纯玩无购物）"
                },
                {
                  src:
                    "../src/img/Cii-s1tHGa6IfK_XAAN_BXEF_3sAAKF-gBpAIoAA38d18_w640_h480_c1_t0.jpeg",
                  price: 288,
                  satisfaction: "100%",
                  content:
                    "<珠海必游·港珠澳大桥+网红景点+深度纯玩一日游>（上门接送+优质服务+纯玩无购物）"
                },
                {
                  src:
                    "../src/img/Cii-s1tHGa6IfK_XAAN_BXEF_3sAAKF-gBpAIoAA38d18_w640_h480_c1_t0.jpeg",
                  price: 288,
                  satisfaction: "100%",
                  content:
                    "<珠海必游·港珠澳大桥+网红景点+深度纯玩一日游>（上门接送+优质服务+纯玩无购物）"
                }
              ]
            },
            {
              display: "none",

              place: "成都/重庆",
              itemList: [
                {
                  src:
                    "../src/img/Cii-sls14imIVa9pAGI_Ftgb8p8AAJVNwIzexcAYj8u733_w640_h480_c1_t0.jpg",
                  price: 199,
                  satisfaction: "98%",
                  content:
                    "都江堰+青城山汽车1日游四川养生纯玩日游首选，成都三环内上门接，午餐品青城四绝，增游街子古镇，下单享优惠"
                },
                {
                  src:
                    "../src/img/Cii-sls14imIVa9pAGI_Ftgb8p8AAJVNwIzexcAYj8u733_w640_h480_c1_t0.jpg",
                  price: 199,
                  satisfaction: "98%",
                  content:
                    "都江堰+青城山汽车1日游四川养生纯玩日游首选，成都三环内上门接，午餐品青城四绝，增游街子古镇，下单享优惠"
                },
                {
                  src:
                    "../src/img/Cii-sls14imIVa9pAGI_Ftgb8p8AAJVNwIzexcAYj8u733_w640_h480_c1_t0.jpg",
                  price: 199,
                  satisfaction: "98%",
                  content:
                    "都江堰+青城山汽车1日游四川养生纯玩日游首选，成都三环内上门接，午餐品青城四绝，增游街子古镇，下单享优惠"
                },
                {
                  src:
                    "../src/img/Cii-sls14imIVa9pAGI_Ftgb8p8AAJVNwIzexcAYj8u733_w640_h480_c1_t0.jpg",
                  price: 199,
                  satisfaction: "98%",
                  content:
                    "都江堰+青城山汽车1日游四川养生纯玩日游首选，成都三环内上门接，午餐品青城四绝，增游街子古镇，下单享优惠"
                },
                {
                  src:
                    "../src/img/Cii-sls14imIVa9pAGI_Ftgb8p8AAJVNwIzexcAYj8u733_w640_h480_c1_t0.jpg",
                  price: 199,
                  satisfaction: "98%",
                  content:
                    "都江堰+青城山汽车1日游四川养生纯玩日游首选，成都三环内上门接，午餐品青城四绝，增游街子古镇，下单享优惠"
                },
                {
                  src:
                    "../src/img/Cii-sls14imIVa9pAGI_Ftgb8p8AAJVNwIzexcAYj8u733_w640_h480_c1_t0.jpg",
                  price: 199,
                  satisfaction: "98%",
                  content:
                    "都江堰+青城山汽车1日游四川养生纯玩日游首选，成都三环内上门接，午餐品青城四绝，增游街子古镇，下单享优惠"
                }
              ]
            },
            {
              display: "none",

              place: "西北",
              itemList: [
                {
                  src:
                    "../src/img/Cii_J1znXmaIfS8xAANnLk9VocUAAGQVQFdLwIAA2dG623_w640_h480_c1_t0.png",
                  price: 168,
                  satisfaction: "98%",
                  content:
                    "<西安-兵马俑-华清宫-骊山纯玩一日游  可订长恨歌 驼铃传奇>学生优惠 赠时令水果/特色冷品  可升级4-19人小团 自助午餐 双耳麦 三环包接"
                },
                {
                  src:
                    "../src/img/Cii_J1znXmaIfS8xAANnLk9VocUAAGQVQFdLwIAA2dG623_w640_h480_c1_t0.png",
                  price: 168,
                  satisfaction: "98%",
                  content:
                    "<西安-兵马俑-华清宫-骊山纯玩一日游  可订长恨歌 驼铃传奇>学生优惠 赠时令水果/特色冷品  可升级4-19人小团 自助午餐 双耳麦 三环包接"
                },
                {
                  src:
                    "../src/img/Cii_J1znXmaIfS8xAANnLk9VocUAAGQVQFdLwIAA2dG623_w640_h480_c1_t0.png",
                  price: 168,
                  satisfaction: "98%",
                  content:
                    "<西安-兵马俑-华清宫-骊山纯玩一日游  可订长恨歌 驼铃传奇>学生优惠 赠时令水果/特色冷品  可升级4-19人小团 自助午餐 双耳麦 三环包接"
                },
                {
                  src:
                    "../src/img/Cii_J1znXmaIfS8xAANnLk9VocUAAGQVQFdLwIAA2dG623_w640_h480_c1_t0.png",
                  price: 168,
                  satisfaction: "98%",
                  content:
                    "<西安-兵马俑-华清宫-骊山纯玩一日游  可订长恨歌 驼铃传奇>学生优惠 赠时令水果/特色冷品  可升级4-19人小团 自助午餐 双耳麦 三环包接"
                },
                {
                  src:
                    "../src/img/Cii_J1znXmaIfS8xAANnLk9VocUAAGQVQFdLwIAA2dG623_w640_h480_c1_t0.png",
                  price: 168,
                  satisfaction: "98%",
                  content:
                    "<西安-兵马俑-华清宫-骊山纯玩一日游  可订长恨歌 驼铃传奇>学生优惠 赠时令水果/特色冷品  可升级4-19人小团 自助午餐 双耳麦 三环包接"
                },
                {
                  src:
                    "../src/img/Cii_J1znXmaIfS8xAANnLk9VocUAAGQVQFdLwIAA2dG623_w640_h480_c1_t0.png",
                  price: 168,
                  satisfaction: "98%",
                  content:
                    "<西安-兵马俑-华清宫-骊山纯玩一日游  可订长恨歌 驼铃传奇>学生优惠 赠时令水果/特色冷品  可升级4-19人小团 自助午餐 双耳麦 三环包接"
                }
              ]
            },
            {
              display: "none",

              place: "东北",
              itemList: [
                {
                  src:
                    "../src/img/Cii-VVyz6oiIbWqRAAV6kuF2nKgAAFPZAPRkNMABXqq72_w640_h480_c1_t0.jpg",
                  price: 68,
                  satisfaction: "100%",
                  content:
                    "<大连帆船门票 东港帆船游艇门票 >喂海鸥 百年港湾 威尼斯水城"
                },
                {
                  src:
                    "../src/img/Cii-VVyz6oiIbWqRAAV6kuF2nKgAAFPZAPRkNMABXqq72_w640_h480_c1_t0.jpg",
                  price: 68,
                  satisfaction: "100%",
                  content:
                    "<大连帆船门票 东港帆船游艇门票 >喂海鸥 百年港湾 威尼斯水城"
                },
                {
                  src:
                    "../src/img/Cii-VVyz6oiIbWqRAAV6kuF2nKgAAFPZAPRkNMABXqq72_w640_h480_c1_t0.jpg",
                  price: 68,
                  satisfaction: "100%",
                  content:
                    "<大连帆船门票 东港帆船游艇门票 >喂海鸥 百年港湾 威尼斯水城"
                },
                {
                  src:
                    "../src/img/Cii-VVyz6oiIbWqRAAV6kuF2nKgAAFPZAPRkNMABXqq72_w640_h480_c1_t0.jpg",
                  price: 68,
                  satisfaction: "100%",
                  content:
                    "<大连帆船门票 东港帆船游艇门票 >喂海鸥 百年港湾 威尼斯水城"
                },
                {
                  src:
                    "../src/img/Cii-VVyz6oiIbWqRAAV6kuF2nKgAAFPZAPRkNMABXqq72_w640_h480_c1_t0.jpg",
                  price: 68,
                  satisfaction: "100%",
                  content:
                    "<大连帆船门票 东港帆船游艇门票 >喂海鸥 百年港湾 威尼斯水城"
                },
                {
                  src:
                    "../src/img/Cii-VVyz6oiIbWqRAAV6kuF2nKgAAFPZAPRkNMABXqq72_w640_h480_c1_t0.jpg",
                  price: 68,
                  satisfaction: "100%",
                  content:
                    "<大连帆船门票 东港帆船游艇门票 >喂海鸥 百年港湾 威尼斯水城"
                }
              ]
            },
            {
              display: "none",

              place: "华北/华东",
              itemList: [
                {
                  src:
                    "../src/img/Cii-slzyQKWIIxLlAAUDDaUQ8IkAAWY_wE8V3IABQMl95_w640_h480_c1_t0.jpg",
                  price: 88,
                  satisfaction: "100%",
                  content:
                    "<2019北京世界园艺博览会一日游> 四环内含接 世园会直通车一站直达 含门票 多套餐可选 "
                },
                {
                  src:
                    "../src/img/Cii-slzyQKWIIxLlAAUDDaUQ8IkAAWY_wE8V3IABQMl95_w640_h480_c1_t0.jpg",
                  price: 88,
                  satisfaction: "100%",
                  content:
                    "<2019北京世界园艺博览会一日游> 四环内含接 世园会直通车一站直达 含门票 多套餐可选 "
                },
                {
                  src:
                    "../src/img/Cii-slzyQKWIIxLlAAUDDaUQ8IkAAWY_wE8V3IABQMl95_w640_h480_c1_t0.jpg",
                  price: 88,
                  satisfaction: "100%",
                  content:
                    "<2019北京世界园艺博览会一日游> 四环内含接 世园会直通车一站直达 含门票 多套餐可选 "
                },
                {
                  src:
                    "../src/img/Cii-slzyQKWIIxLlAAUDDaUQ8IkAAWY_wE8V3IABQMl95_w640_h480_c1_t0.jpg",
                  price: 88,
                  satisfaction: "100%",
                  content:
                    "<2019北京世界园艺博览会一日游> 四环内含接 世园会直通车一站直达 含门票 多套餐可选 "
                },
                {
                  src:
                    "../src/img/Cii-slzyQKWIIxLlAAUDDaUQ8IkAAWY_wE8V3IABQMl95_w640_h480_c1_t0.jpg",
                  price: 88,
                  satisfaction: "100%",
                  content:
                    "<2019北京世界园艺博览会一日游> 四环内含接 世园会直通车一站直达 含门票 多套餐可选 "
                },
                {
                  src:
                    "../src/img/Cii-slzyQKWIIxLlAAUDDaUQ8IkAAWY_wE8V3IABQMl95_w640_h480_c1_t0.jpg",
                  price: 88,
                  satisfaction: "100%",
                  content:
                    "<2019北京世界园艺博览会一日游> 四环内含接 世园会直通车一站直达 含门票 多套餐可选 "
                }
              ]
            }
          ]
        },
        {
          src: "https://m.tuniucdn.com/fb2/t1/G4/M00/CA/91/Cii_J1oCy7KINhWRAABASkCmqqIAADEYQE21WEAAEBi96.jpeg",
          tab: [
            {
              display: "block",
              place: "精选玩乐",
              itemList: [
                {
                  src:
                    "../src/img/ab49175eecb3583635973313ca7746f0_w640_h320_c1_t0_w640_h480_c1_t0.jpg",
                  price: 300,
                  satisfaction: "97%",
                  content:
                    "【必有体验丛林飞跃】<普吉岛FlyingHanuman丛林飞跃>指定区域接送纪念T恤专人安全指导多套餐任选"
                },
                {
                  src:
                    "../src/img/ab49175eecb3583635973313ca7746f0_w640_h320_c1_t0_w640_h480_c1_t0.jpg",
                  price: 300,
                  satisfaction: "97%",
                  content:
                    "【必有体验丛林飞跃】<普吉岛FlyingHanuman丛林飞跃>指定区域接送纪念T恤专人安全指导多套餐任选"
                },
                {
                  src:
                    "../src/img/ab49175eecb3583635973313ca7746f0_w640_h320_c1_t0_w640_h480_c1_t0.jpg",
                  price: 300,
                  satisfaction: "97%",
                  content:
                    "【必有体验丛林飞跃】<普吉岛FlyingHanuman丛林飞跃>指定区域接送纪念T恤专人安全指导多套餐任选"
                },
                {
                  src:
                    "../src/img/ab49175eecb3583635973313ca7746f0_w640_h320_c1_t0_w640_h480_c1_t0.jpg",
                  price: 300,
                  satisfaction: "97%",
                  content:
                    "【必有体验丛林飞跃】<普吉岛FlyingHanuman丛林飞跃>指定区域接送纪念T恤专人安全指导多套餐任选"
                },
                {
                  src:
                    "../src/img/ab49175eecb3583635973313ca7746f0_w640_h320_c1_t0_w640_h480_c1_t0.jpg",
                  price: 300,
                  satisfaction: "97%",
                  content:
                    "【必有体验丛林飞跃】<普吉岛FlyingHanuman丛林飞跃>指定区域接送纪念T恤专人安全指导多套餐任选"
                },
                {
                  src:
                    "../src/img/ab49175eecb3583635973313ca7746f0_w640_h320_c1_t0_w640_h480_c1_t0.jpg",
                  price: 300,
                  satisfaction: "97%",
                  content:
                    "【必有体验丛林飞跃】<普吉岛FlyingHanuman丛林飞跃>指定区域接送纪念T恤专人安全指导多套餐任选"
                }
              ]
            },
            {
              display: "none",
              place: "演绎票务",
              itemList: [
                {
                  src:
                    "../src/img/Cii-TlfXofyIHNZzAATjSgwXR2QAACWqQLcU2gABONi282_w640_h480_c1_t0.jpg",
                  price: 430,
                  satisfaction: "92%",
                  content:
                    "【精彩表演，老少皆宜】<普吉幻多奇Fantasea主题公园>泰版迪士尼+多种套餐可选"
                }
              ]
            },
            {
              display: "none",
              place: "半日/一日游",
              itemList: []
            },
            {
              display: "none",
              place: "交通接驳",
              itemList: [
                {
                  src:
                    "../src/img/Cii-slwI4UCIAomBABMDTBxgA1gAARTZgI4LLUAEwNk417_w640_h480_c1_t0.png",
                  price: 139,
                  satisfaction: "100%",
                  content:
                    "[春节]<普吉岛抖音网红打卡景点 卡伦海景大树秋千门票>不限游玩时间   多时间段选择酒店接送  可选自行前往"
                },
                {
                  src:
                    "../src/img/Cii-slzeMgCIJrh6AAIGO1P0sIcAAV3VwPPeisAAgZT18_w640_h480_c1_t0.jpeg",
                  price: 349,
                  satisfaction: "100%",
                  content:
                    "<曼谷祈福+转运+许愿寺庙半日游>2人起订，中文司导带队，指定区域酒店接送，全程在线中文客服，祈福还愿"
                }
              ]
            }
          ]
        },
        {
          src: "http://m.tuniucdn.com/fb2/t1/G1/M00/FF/0D/Cii9EVdWMs6IW-5NAABWUcelDmkAAGa1wHCcXQAAFZp94.jpeg",
          tab: [
            {
              display: "block",
              place: "交通/接驳",
              itemList: [
                {
                  src:
                    "../src/img/54c06814___w450_h300_c1_t0_w640_h480_c1_t0.jpg",
                  price: 1242,
                  satisfaction: "75%",
                  content: "新加坡全域包车一日游【华人司导，新加坡市区往返】"
                },
                {
                  src:
                    "../src/img/d8f4d65ba145ce7904a9647a5270f991__w450_h300_c1_t0_w640_h480_c1_t0.jpg",
                  price: 233,
                  satisfaction: "98%",
                  content:
                    "【接送机】<新加坡樟宜国际机场—市区/圣淘沙岛/丹娜美拉码头单程接/送机>接送机航班延误免费等待，无夜间服务费"
                },
                {
                  src:
                    "../src/img/54c06814___w450_h300_c1_t0_w640_h480_c1_t0.jpg",
                  price: 1242,
                  satisfaction: "75%",
                  content: "新加坡全域包车一日游【华人司导，新加坡市区往返】"
                },
                {
                  src:
                    "../src/img/d8f4d65ba145ce7904a9647a5270f991__w450_h300_c1_t0_w640_h480_c1_t0.jpg",
                  price: 233,
                  satisfaction: "98%",
                  content:
                    "【接送机】<新加坡樟宜国际机场—市区/圣淘沙岛/丹娜美拉码头单程接/送机>接送机航班延误免费等待，无夜间服务费"
                },
                {
                  src:
                    "../src/img/54c06814___w450_h300_c1_t0_w640_h480_c1_t0.jpg",
                  price: 1242,
                  satisfaction: "75%",
                  content: "新加坡全域包车一日游【华人司导，新加坡市区往返】"
                },
                {
                  src:
                    "../src/img/d8f4d65ba145ce7904a9647a5270f991__w450_h300_c1_t0_w640_h480_c1_t0.jpg",
                  price: 233,
                  satisfaction: "98%",
                  content:
                    "【接送机】<新加坡樟宜国际机场—市区/圣淘沙岛/丹娜美拉码头单程接/送机>接送机航班延误免费等待，无夜间服务费"
                }
              ]
            },
            {
              display: "none",
              place: "主题玩乐",
              itemList: []
            },
            {
              display: "none",
              place: "票卷",
              itemList: [
                {
                  src:
                    "../src/img/Cii-sltQCoiIJQXAAABFa4qcXWIAAKc9wP_MyYAAEWD54_w640_h480_c1_t0.jpeg",
                  price: 55,
                  satisfaction: "82%",
                  content: "<新加坡Ezlink交通卡 公交地铁便利店一卡通 >"
                },
                {
                  src:
                    "../src/img/Cii-sltQCoiIJQXAAABFa4qcXWIAAKc9wP_MyYAAEWD54_w640_h480_c1_t0.jpeg",
                  price: 55,
                  satisfaction: "82%",
                  content: "<新加坡Ezlink交通卡 公交地铁便利店一卡通 >"
                },
                {
                  src:
                    "../src/img/Cii-sltQCoiIJQXAAABFa4qcXWIAAKc9wP_MyYAAEWD54_w640_h480_c1_t0.jpeg",
                  price: 55,
                  satisfaction: "82%",
                  content: "<新加坡Ezlink交通卡 公交地铁便利店一卡通 >"
                },
                {
                  src:
                    "../src/img/Cii-sltQCoiIJQXAAABFa4qcXWIAAKc9wP_MyYAAEWD54_w640_h480_c1_t0.jpeg",
                  price: 55,
                  satisfaction: "82%",
                  content: "<新加坡Ezlink交通卡 公交地铁便利店一卡通 >"
                },
                {
                  src:
                    "../src/img/Cii-sltQCoiIJQXAAABFa4qcXWIAAKc9wP_MyYAAEWD54_w640_h480_c1_t0.jpeg",
                  price: 55,
                  satisfaction: "82%",
                  content: "<新加坡Ezlink交通卡 公交地铁便利店一卡通 >"
                },
                {
                  src:
                    "../src/img/Cii-sltQCoiIJQXAAABFa4qcXWIAAKc9wP_MyYAAEWD54_w640_h480_c1_t0.jpeg",
                  price: 55,
                  satisfaction: "82%",
                  content: "<新加坡Ezlink交通卡 公交地铁便利店一卡通 >"
                }
              ]
            }
          ]
        },
        {
          src: "http://m.tuniucdn.com/fb2/t1/G1/M00/FF/B4/Cii9EFdWZfKIb0XJAABWmapToCcAAGbFgNEiPUAAFax25.jpeg",
          tab: [
            {
              display: "block",
              place: "当地参团",
              itemList: [
                {
                  src:
                    "../src/img/Cii-slodKjSAHiJRAT7tEahrWig714_w640_h480_c1_t0.jpg",
                  price: 7690,
                  satisfaction: "100%",
                  content: "<新西兰南岛-基督城-格雷茅斯-皇后镇-蒂阿瑙-奥玛鲁-双冰川7晚8日游>明星导游带团+西海岸冰川徒步+峡湾游轮赏景+萌物蓝眼企鹅+观星小镇蒂卡普+自由自在皇后镇(当地参团)"
                },
                {
                  src:
                    "../src/img/Cii-slodKjSAHiJRAT7tEahrWig714_w640_h480_c1_t0.jpg",
                  price: 7690,
                  satisfaction: "100%",
                  content: "<新西兰南岛-基督城-格雷茅斯-皇后镇-蒂阿瑙-奥玛鲁-双冰川7晚8日游>明星导游带团+西海岸冰川徒步+峡湾游轮赏景+萌物蓝眼企鹅+观星小镇蒂卡普+自由自在皇后镇(当地参团)"
                },
                {
                  src:
                    "../src/img/Cii-slodKjSAHiJRAT7tEahrWig714_w640_h480_c1_t0.jpg",
                  price: 7690,
                  satisfaction: "100%",
                  content: "<新西兰南岛-基督城-格雷茅斯-皇后镇-蒂阿瑙-奥玛鲁-双冰川7晚8日游>明星导游带团+西海岸冰川徒步+峡湾游轮赏景+萌物蓝眼企鹅+观星小镇蒂卡普+自由自在皇后镇(当地参团)"
                },
                {
                  src:
                    "../src/img/Cii-slodKjSAHiJRAT7tEahrWig714_w640_h480_c1_t0.jpg",
                  price: 7690,
                  satisfaction: "100%",
                  content: "<新西兰南岛-基督城-格雷茅斯-皇后镇-蒂阿瑙-奥玛鲁-双冰川7晚8日游>明星导游带团+西海岸冰川徒步+峡湾游轮赏景+萌物蓝眼企鹅+观星小镇蒂卡普+自由自在皇后镇(当地参团)"
                },
                {
                  src:
                    "../src/img/Cii-slodKjSAHiJRAT7tEahrWig714_w640_h480_c1_t0.jpg",
                  price: 7690,
                  satisfaction: "100%",
                  content: "<新西兰南岛-基督城-格雷茅斯-皇后镇-蒂阿瑙-奥玛鲁-双冰川7晚8日游>明星导游带团+西海岸冰川徒步+峡湾游轮赏景+萌物蓝眼企鹅+观星小镇蒂卡普+自由自在皇后镇(当地参团)"
                },
                {
                  src:
                    "../src/img/Cii-slodKjSAHiJRAT7tEahrWig714_w640_h480_c1_t0.jpg",
                  price: 7690,
                  satisfaction: "100%",
                  content: "<新西兰南岛-基督城-格雷茅斯-皇后镇-蒂阿瑙-奥玛鲁-双冰川7晚8日游>明星导游带团+西海岸冰川徒步+峡湾游轮赏景+萌物蓝眼企鹅+观星小镇蒂卡普+自由自在皇后镇(当地参团)"
                },
              ]
            },
            {
              display: "none",
              place: "城市浏览",
              itemList: [
                   {
                  src:
                    "../src/img/Cii-tFqiaYqIVNlbAAD08agaTh8AAEDngGl2zIAAPUJ335_w640_h480_c1_t0.jpg",
                  price: 651,
                  satisfaction: "100%",
                  content: "<凯恩斯翡翠岛皮划艇英文之旅(含浮潜用具+海滩野餐+皮划艇体验）>"
                },
                {
                  src:
                    "../src/img/Cii-tFqiaYqIVNlbAAD08agaTh8AAEDngGl2zIAAPUJ335_w640_h480_c1_t0.jpg",
                  price: 651,
                  satisfaction: "100%",
                  content: "<凯恩斯翡翠岛皮划艇英文之旅(含浮潜用具+海滩野餐+皮划艇体验）>"
                },
                {
                  src:
                    "../src/img/Cii-tFqiaYqIVNlbAAD08agaTh8AAEDngGl2zIAAPUJ335_w640_h480_c1_t0.jpg",
                  price: 651,
                  satisfaction: "100%",
                  content: "<凯恩斯翡翠岛皮划艇英文之旅(含浮潜用具+海滩野餐+皮划艇体验）>"
                },
                {
                  src:
                    "../src/img/Cii-tFqiaYqIVNlbAAD08agaTh8AAEDngGl2zIAAPUJ335_w640_h480_c1_t0.jpg",
                  price: 651,
                  satisfaction: "100%",
                  content: "<凯恩斯翡翠岛皮划艇英文之旅(含浮潜用具+海滩野餐+皮划艇体验）>"
                },
                {
                  src:
                    "../src/img/Cii-tFqiaYqIVNlbAAD08agaTh8AAEDngGl2zIAAPUJ335_w640_h480_c1_t0.jpg",
                  price: 651,
                  satisfaction: "100%",
                  content: "<凯恩斯翡翠岛皮划艇英文之旅(含浮潜用具+海滩野餐+皮划艇体验）>"
                },
                {
                  src:
                    "../src/img/Cii-tFqiaYqIVNlbAAD08agaTh8AAEDngGl2zIAAPUJ335_w640_h480_c1_t0.jpg",
                  price: 651,
                  satisfaction: "100%",
                  content: "<凯恩斯翡翠岛皮划艇英文之旅(含浮潜用具+海滩野餐+皮划艇体验）>"
                }
              ]
            },
            {
              display: "none",
              place: "半日一日游",
              itemList: [
               {
                  src:
                    "../src/img/Cii-tFqiaYqIVNlbAAD08agaTh8AAEDngGl2zIAAPUJ335_w640_h480_c1_t0.jpg",
                  price: 651,
                  satisfaction: "100%",
                  content: "<凯恩斯翡翠岛皮划艇英文之旅(含浮潜用具+海滩野餐+皮划艇体验）>"
                },
                {
                  src:
                    "../src/img/Cii-tFqiaYqIVNlbAAD08agaTh8AAEDngGl2zIAAPUJ335_w640_h480_c1_t0.jpg",
                  price: 651,
                  satisfaction: "100%",
                  content: "<凯恩斯翡翠岛皮划艇英文之旅(含浮潜用具+海滩野餐+皮划艇体验）>"
                },
                {
                  src:
                    "../src/img/Cii-tFqiaYqIVNlbAAD08agaTh8AAEDngGl2zIAAPUJ335_w640_h480_c1_t0.jpg",
                  price: 651,
                  satisfaction: "100%",
                  content: "<凯恩斯翡翠岛皮划艇英文之旅(含浮潜用具+海滩野餐+皮划艇体验）>"
                },
                {
                  src:
                    "../src/img/Cii-tFqiaYqIVNlbAAD08agaTh8AAEDngGl2zIAAPUJ335_w640_h480_c1_t0.jpg",
                  price: 651,
                  satisfaction: "100%",
                  content: "<凯恩斯翡翠岛皮划艇英文之旅(含浮潜用具+海滩野餐+皮划艇体验）>"
                },
                {
                  src:
                    "../src/img/Cii-tFqiaYqIVNlbAAD08agaTh8AAEDngGl2zIAAPUJ335_w640_h480_c1_t0.jpg",
                  price: 651,
                  satisfaction: "100%",
                  content: "<凯恩斯翡翠岛皮划艇英文之旅(含浮潜用具+海滩野餐+皮划艇体验）>"
                },
                {
                  src:
                    "../src/img/Cii-tFqiaYqIVNlbAAD08agaTh8AAEDngGl2zIAAPUJ335_w640_h480_c1_t0.jpg",
                  price: 651,
                  satisfaction: "100%",
                  content: "<凯恩斯翡翠岛皮划艇英文之旅(含浮潜用具+海滩野餐+皮划艇体验）>"
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
      // console.log(num)
      let whichTab = document.getElementsByClassName("localplay-list-box-tab")[
        num
      ];
      let liList = whichTab.getElementsByTagName("li");
      let e = event || window.event;
      let target = e.target || e.srcElement;
      for (let i = 0; i < liList.length; i++) {
        liList[i].classList.remove("localplay-on");
      }
      if (target.nodeName == "LI") {
        target.classList.add("localplay-on");
      }

      let index = 0;
      for (let i = 0; i < liList.length; i++) {
        if (liList[i] === target) {
          index = i;
        }
      }
      console.log(index);
      let whichShowBox = document.getElementsByClassName("localplay-list-box")[
        num
      ];
      let whichShow = whichShowBox.getElementsByClassName(
        "localplay-list-item"
      );
      for (let i = 0; i < whichShow.length; i++) {
        whichShow[i].style.display = "none";
      }
      whichShow[index].style.display = "block";
    }
  }
};
</script>