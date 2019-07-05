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
  height: 490px;
}
.index-model-box {
  position: absolute;
  top: 0;
  left: 0;
}
.index-left {
  width: 200px;
 
  float: left;
  background-repeat: no-repeat;
  background-position: -20px center;
  margin-right: 20px;
}
.index-left-list {
  width: 160px;
}

.index-right {
  float: right;
  width: 970px;
}
.index-item {
  float: left;
  width: 220px;
  margin: 20px 20px 0 0;
  box-shadow: 0 0 5px #eeeeee;
}
.index-price {
  float: left;
  color: #f80;
  font-size: 18px;
  font-weight: bold;
  padding: 5px 10px;
}
.index-satisfaction {
  padding: 5px 10px;
  float: left;
  line-height: 30px;
  color: #999;
}
.index-satisfaction span {
  color: #f80;
}
.index-content {
  float: left;
  display: block;
}
.index-content {
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
.index-item:hover {
  box-shadow: 0 0 8px #f80;
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
          v-for="(items, indx) in item.place"
          :key="indx"
          :style="{display:items.display}"
        >
          <div class="index-left clear">
            <dl class="index-left-list">
              <dd :key="ind" class="clear index-theme" v-text="items.left.theme"></dd>
            </dl>
            <img src alt />
          </div>
          <div class="index-right clear">
            <div v-for="(itm, idex) in items.right" :key="idex" class="index-item">
              <img :src="itm.src" width="220px;" height="125px" alt />
              <div class="index-item-bottom">
                <div class="index-item-head clear">
                  <div class="index-price">
                    <span style="font-size: 12px;font-weight: normal;color: #f90;">￥</span>
                    <span v-text="itm.price"></span>
                    <span style="font-size: 12px;ont-weight: normal;color: #f90;">元/份</span>
                  </div>
                  <div class="index-satisfaction">
                    满意度：
                    <span v-text="itm.satisfaction"></span>
                  </div>
                </div>

                <div class="index-content" v-text="itm.content"></div>
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
          theme: "出境长线",
          place: [
            {
              display: "block",
              where: "精选",
              left: {
                theme:"热门景点玩法",
                list: [
                  { theme: "上海迪士尼乐园", number: 68901 },
                  { theme: "上海长风海洋世界", number: 525 },
                  { theme: "上海野生动物园", number: 36436 },
                  { theme: "上海玛雅海滩水公园", number: 256 },
                  { theme: "上海欢乐谷", number: 1467 }
                ]
              },
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
