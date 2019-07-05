<style>
.indexhot-list {
  width: 950px;
  margin: 0 auto 30px;
}
.indexhot-model {
  margin: 40px 0 25px;
}
.indexhot-modle-top {
  height: 32px;
  border-bottom: 3px solid #eceef4;
  position: relative;
  margin-bottom: 15px;
}
.indexhot-mytab {
  float: left;
}
.indexhot-mytab li {
  float: left;
  height: 32px;
  text-align: center;
  margin-right: 18px;
}
.indexhot-mytab a {
  display: block;
  font-size: 17px;
  color: #666;
  height: 32px;
  line-height: 32px;
}
.indexhot-on-green a {
  font-size: 18px;
  color: #22c231;
  border-bottom: 3px solid #22c231;
}
.indexhot-main {
  position: relative;
  height: 130px;
  overflow: hidden;
}
.indexhot-box {
  position: absolute;
  top: 0;
  left: 0;
  width: 970px;
  height: 100%;
}
.indexhot-box-item {
  position: relative;
  float: left;
  margin-right: 16px;
  width: 225px;
  height: 125px;
  margin-bottom: 10px;
}
.indexhot-box-shadow {
  position: absolute;
  right: 0;
  top: 0;

  width: 120px;
  height: 125px;
  background: rgba(255, 255, 255, 0.9);
  padding: 0px 0 0 8px;
  padding-top: 7px;
}
.indexhot-time {
  float: left;
}
.indexhot-num {
    float: left;
  width: 17px;
  height: 19px;
  background: #38414c;
  border-radius: 2px;
  color: #fff;
  text-align: center;
  line-height: 19px;
  margin: 0 1px;
}
.indexhot-t {
    float: left;;
  width: 17px;
  height: 17px;
}
.indexhot-timebox {
  width: 112px;
  height: 20px;
  margin-bottom: 7px;
  text-align: center;
}
.indexhot-content {
    font-size: 14px;
  margin-bottom: 3px;
  height: 38px;

  text-overflow: -o-ellipsis-lastline;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
}
.indexhot-price{
    color: #f60;
    font-size: 14px;
}
.indexhot-price span{
    font-size: 20px;
    line-height: 24px;
    font-weight: bold;
    color: #f60;
}

</style>
<template>
  <div class="indexhot-list clear">
    <div class="indexhot-model clear">
      <div class="indexhot-modle-top clear">
        <ul class="indexhot-mytab">
          <li
            :class="[index==0 ? 'indexhot-on-green':'']"
            v-for="(item, index) in list"
            :key="index"
            @mouseenter="choose(index)"
          >
            <a href="javascript:;" v-text="item.where"></a>
          </li>
        </ul>
      </div>
      <div class="indexhot-main clear">
        <div
          class="indexhot-box clear"
          v-for="(item, index) in list"
          :key="index"
          :style="{display:item.display,}"
        >
          <div class="indexhot-box-item" v-for="(ite, inde) in item.item" :key="inde">
            <img :src="ite.src" width="225px" height="125px" alt />
            <div class="indexhot-box-shadow">
              <div class="indexhot-timebox clear">
                <div class="indexhot-time" v-for="(it, ind) in ite.time" :key="ind">
                  <span class="indexhot-num" v-text="it.num"></span>
                  <span class="indexhot-t" v-text="it.time"></span>
                </div>
              </div>
              <div class="indexhot-content" v-text="ite.detailed"></div>
              <div class="indexhot-price">
                ￥<span v-text="ite.price"></span>起
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
          display: "block",
          where: "超值热卖",
          item: [
            {
              src:
                "../src/img/Cii-T1haH0-IdbFnAK569mD2P9gAAF0lwI6gS0ArnsO595_w400_h300_c1_t0.jpg",
              price: 3604,
              time: [
                { num: 12, time: "天" },
                { num: 12, time: "时" },
                { num: 12, time: "分" }
              ],
              detailed:
                "[中秋]<长滩岛4晚6日游>千人出游，上海直飞，机酒接送机，A线指定天堂花园度假村，B线指定二号码头杜鹃花酒店，派领队，可代办简易团签"
            },
            {
              src:
                "../src/img/Cii-T1haH0-IdbFnAK569mD2P9gAAF0lwI6gS0ArnsO595_w400_h300_c1_t0.jpg",
              price: 3604,
              time: [
                { num: 12, time: "天" },
                { num: 12, time: "时" },
                { num: 12, time: "分" }
              ],
              detailed:
                "[中秋]<长滩岛4晚6日游>千人出游，上海直飞，机酒接送机，A线指定天堂花园度假村，B线指定二号码头杜鹃花酒店，派领队，可代办简易团签"
            },
            {
              src:
                "../src/img/Cii-T1haH0-IdbFnAK569mD2P9gAAF0lwI6gS0ArnsO595_w400_h300_c1_t0.jpg",
              price: 3604,
              time: [
                { num: 12, time: "天" },
                { num: 12, time: "时" },
                { num: 12, time: "分" }
              ],
              detailed:
                "[中秋]<长滩岛4晚6日游>千人出游，上海直飞，机酒接送机，A线指定天堂花园度假村，B线指定二号码头杜鹃花酒店，派领队，可代办简易团签"
            },
            {
              src:
                "../src/img/Cii-T1haH0-IdbFnAK569mD2P9gAAF0lwI6gS0ArnsO595_w400_h300_c1_t0.jpg",
              price: 3604,
              time: [
                { num: 12, time: "天" },
                { num: 12, time: "时" },
                { num: 12, time: "分" }
              ],
              detailed:
                "[中秋]<长滩岛4晚6日游>千人出游，上海直飞，机酒接送机，A线指定天堂花园度假村，B线指定二号码头杜鹃花酒店，派领队，可代办简易团签"
            },
          ]
        },
        {
          display: "none",
          where: "超值热卖",
          item: [
            {
              src:
                "../src/img/Cii9EFZmltmIRu0dAALVD9Esk3gAAA5RQJFJmcAAtUn889_w400_h300_c1_t0.jpg",
              price: 2448,
              time: [
                { num: 12, time: "天" },
                { num: 12, time: "时" },
                { num: 12, time: "分" }
              ],
              detailed:
                "香港维港璀璨夜时光 4日夜景游"
            },
            {
              src:
                "../src/img/Cii9EFZmltmIRu0dAALVD9Esk3gAAA5RQJFJmcAAtUn889_w400_h300_c1_t0.jpg",
              price: 2448,
              time: [
                { num: 12, time: "天" },
                { num: 12, time: "时" },
                { num: 12, time: "分" }
              ],
              detailed:
                "香港维港璀璨夜时光 4日夜景游"
            },
            {
              src:
                "../src/img/Cii9EFZmltmIRu0dAALVD9Esk3gAAA5RQJFJmcAAtUn889_w400_h300_c1_t0.jpg",
              price: 2448,
              time: [
                { num: 12, time: "天" },
                { num: 12, time: "时" },
                { num: 12, time: "分" }
              ],
              detailed:
                "香港维港璀璨夜时光 4日夜景游"
            },
            {
              src:
                "../src/img/Cii9EFZmltmIRu0dAALVD9Esk3gAAA5RQJFJmcAAtUn889_w400_h300_c1_t0.jpg",
              price: 2448,
              time: [
                { num: 12, time: "天" },
                { num: 12, time: "时" },
                { num: 12, time: "分" }
              ],
              detailed:
                "香港维港璀璨夜时光 4日夜景游"
            },
          ]
        },
        {
          display: "none",
          where: "旅游分期",
          item: [
            {
              src:
                "../src/img/Cii-slutnAWIZGQdAAj8FV8oiiYAAOX1ALc6y8ACPwt856_w400_h300_c1_t0.jpg",
              price: 2448,
              time: [
                { num: 12, time: "天" },
                { num: 12, time: "时" },
                { num: 12, time: "分" }
              ],
              detailed:
                "<泰国曼谷-芭提雅-清迈机票+当地10日游>挑逗味蕾/全程无自费/4晚五星/1晚泳池别墅/1天Free/DIY套餐自选/五星酒店下午茶"
            },
            {
              src:
                "../src/img/Cii-slutnAWIZGQdAAj8FV8oiiYAAOX1ALc6y8ACPwt856_w400_h300_c1_t0.jpg",
              price: 2448,
              time: [
                { num: 12, time: "天" },
                { num: 12, time: "时" },
                { num: 12, time: "分" }
              ],
              detailed:
                "<泰国曼谷-芭提雅-清迈机票+当地10日游>挑逗味蕾/全程无自费/4晚五星/1晚泳池别墅/1天Free/DIY套餐自选/五星酒店下午茶"
            },
            {
              src:
                "../src/img/Cii-slutnAWIZGQdAAj8FV8oiiYAAOX1ALc6y8ACPwt856_w400_h300_c1_t0.jpg",
              price: 2448,
              time: [
                { num: 12, time: "天" },
                { num: 12, time: "时" },
                { num: 12, time: "分" }
              ],
              detailed:
                "<泰国曼谷-芭提雅-清迈机票+当地10日游>挑逗味蕾/全程无自费/4晚五星/1晚泳池别墅/1天Free/DIY套餐自选/五星酒店下午茶"
            },
            {
              src:
                "../src/img/Cii-slutnAWIZGQdAAj8FV8oiiYAAOX1ALc6y8ACPwt856_w400_h300_c1_t0.jpg",
              price: 2448,
              time: [
                { num: 12, time: "天" },
                { num: 12, time: "时" },
                { num: 12, time: "分" }
              ],
              detailed:
                "<泰国曼谷-芭提雅-清迈机票+当地10日游>挑逗味蕾/全程无自费/4晚五星/1晚泳池别墅/1天Free/DIY套餐自选/五星酒店下午茶"
            },
          ]
        }
        
      ]
    };
  },
  methods: {
    choose: num => {
        let whichTab = document.getElementsByClassName("indexhot-mytab")[0];
        let liList = whichTab.getElementsByTagName("li");
        
        let e = event || window.event;
        let target = e.target || e.srcElement;
        for (let i = 0; i < liList.length; i++) {
          liList[i].classList.remove("indexhot-on-green");
        }
        if (target.nodeName == "LI") {
          target.classList.add("indexhot-on-green");
        }
        
        let whichShowBox = document.getElementsByClassName("indexhot-box")
        for (let i = 0; i < whichShowBox.length; i++) {
          whichShowBox[i].style.display = "none";
        }
        whichShowBox[num].style.display = "block";
    }
  }
};
</script>
