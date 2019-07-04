<style>
.wifi-cardlist {
  width: 1200px;
  margin: 0 auto;
  overflow: hidden;
}
.wifi-cardlistbox {
  margin-top: 20px;
}
.wifi-cardlistbox h4 {
  border-bottom-style: solid;
  border-bottom-width: 3px;
  margin-bottom: 15px;
  border-color: #eceef4;
  height: 42px;
}
.wifi-cardlistbox-green {
  font-size: 24px;
  font-weight: bold;
  display: inline-block;
  border-bottom-width: 3px;
  border-bottom-style: solid;
  border-color: #3dc649;
  color: #3dc649;
  line-height: 42px;
}
.wifi-cardlistbox-orange {
  display: block;
  font-size: 24px;
  font-weight: bold;
  border-bottom-width: 3px;
  border-bottom-style: solid;
  border-color: #ff6600;
  color: #ff6600;
  line-height: 42px;
}
.wifi-cardlist-item li {
  width: 225px;
  height: 227px;
  margin-right: 15px;
  background: #f6f6f6;
  float: left;
  margin-bottom: 20px;
  cursor: pointer;
  position: relative;
}
.wifi-cardlist-item li:hover .wifi-cardlist-shadow {
  display: block;
}
.wifi-cardlist-shadow {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  margin: auto;
  background: rgba(0, 0, 0, 0.5);

  height: 139px;
  padding: 15px 10px;
  display: none;
}

.wifi-cardlist-shadow p {
  display: inline-block;
  padding: 2px 5px;
  border-radius: 9px;
  border: 1px solid #fff;
  margin: 0 10px 10px 0;
  color: #fff;
}
.wifi-cardlist-left {
  float: left;
  color: #ff6600;
  border-color: #ff6600;
}
.wifi-cardlist-left span {
  font-size: 20px;
}
.wifi-cardlist-right {
  float: right;
  top: 9px;
  position: relative;
  color: #999999;
}
.wifi-cardlist-bottom p {
  font-size: 14px;
  margin: 5px 10px 0;
  overflow: hidden;
  height: 21px;
}
.wifi-cardlist-last {
  margin: 0 7px;
}
</style>
<template>
  <div class="wifi-cardlist">
    <div class="wifi-cardlistbox" v-for="(item, index) in list" :key="index">
      <h4>
        <span
          :class="[(index==0||index==4) ? 'wifi-cardlistbox-green':'wifi-cardlistbox-orange']"
          v-text="item.theme"
        ></span>
      </h4>
      <ul class="wifi-cardlist-item clear">
        <li v-for="(itm, indx) in item.item" :key="indx">
          <img :src="itm.src" width="228px" height="169px" alt />
          <div class="wifi-cardlist-bottom">
            <p class="wifi-cardlist-bottom-con" v-text="itm.advantage"></p>
            <div class="wifi-cardlist-last clear">
              <div class="wifi-cardlist-left">
                ￥
                <span v-text="itm.price"></span>元
              </div>
              <div class="wifi-cardlist-right">
                满意度：
                <span v-text="itm.satisfaction"></span>%
              </div>
            </div>
          </div>
          <div class="wifi-cardlist-shadow clear">
            <p v-for="(it, ind) in itm.content" :key="ind" v-text="it"></p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      list: [
        {
          theme: "上网卡/交通卡",
          item: [
            {
              src:
                "../src/img/Cii-U1j9YWmIHr5gAAO2V562br8AAJvvAOda38AA7Zv293_w640_h480_c1_t0.jpg",
              price: 55,
              satisfaction: undefined,
              content: ["泰国8天上网卡Happy卡（常州发货）28"],
              advantage: "泰国8天上网卡Happy卡（常州发货）28"
            },
            {
              src:
                "../src/img/Cii-T1g382uIVkkFAAGx7_gAdYsAAE23wE1LxAAAbIH060_w640_h480_c1_t0.jpg",
              price: 55,
              satisfaction: undefined,
              content: ["印尼15天无限流量上网电话卡（微信乐游卡）49"],
              advantage: "印尼15天无限流量上网电话卡（微信乐游卡）49"
            },
            {
              src:
                "../src/img/Cii_J1megduIeNwZAAKLsfMmbZIAAAXkQPuVm4AAovJ858_w640_h480_c1_t0.jpg",
              price: undefined,
              satisfaction: 120,
              content: ["香港澳门4天通用上网电话卡（卓一电讯）"],
              advantage: "香港澳门4天通用上网电话卡（卓一电讯）"
            },
            {
              src:
                "../src/img/Cii9EFjI13KIec8ZAAGkOckOw80AAI3uAIlxfEAAaRR257_w640_h480_c1_t0.jpg",
              price: 31,
              satisfaction: 100,
              content: ["越南7天无限流量上网卡不含通话（E虫出境）"],
              advantage: "越南7天无限流量上网卡不含通话（E虫出境）"
            },
            {
              src:
                "../src/img/Cii-TlhrUbqIPZWlAAHhFt2Ja_UAAGSyQK-Q0cAAeEu425_w640_h480_c1_t0.jpg",
              price: 55,
              satisfaction: undefined,
              content: [
                "欧洲15天无限流量含1.5GB高速上网电话卡含瑞士（微信乐游卡）85"
              ],
              advantage:
                "欧洲15天无限流量含1.5GB高速上网电话卡含瑞士（微信乐游卡）85"
            }
          ]
        },
        {
          theme: "亚洲出境WiFi",
          item: [
            {
              src:
                "../src/img/Cii-TFidUtKIdb8CAArpNJooT0IAAHHNgPrqiIACulM620_w640_h480_c1_t0.jpg",
              price: 9,
              satisfaction: 98,
              content: ["4G网络", "不限流量", "续航持久"],
              advantage: "日本wifi设备租赁（仅限自取）（漫游超人）"
            },
            {
              src:
                "../src/img/Cii-tFuctASIJgdyAAShE-5irCEAANv3AFdWdUABKEr538_w640_h480_c1_t0.jpg",
              price: 18,
              satisfaction: 100,
              content: ["香港WiFi设备租赁不限速（天翼WiFi）"],
              advantage: "香港WiFi设备租赁不限速（天翼WiFi）"
            },
            {
              src:
                "../src/img/Cii-T1feWtmISEVrAAxSTQoK2WgAAChwgMSY-wADFJl869_w640_h480_c1_t0.png",
              price: 17,
              satisfaction: 97,
              content: ["4G网络", "不限流量", "续航持久"],
              advantage: "泰国wifi租赁（漫游超人）"
            },
            {
              src:
                "../src/img/Cii-TlfeWwOIDQfuAA-Dft6MXy8AAChwwFjCjIAD4OW288_w640_h480_c1_t0.png",
              price: 20,
              satisfaction: 93,
              content: ["4G网络", "不限流量", "续航持久"],
              advantage: "印尼wifi租赁（漫游超人）"
            },
            {
              src:
                "../src/img/Cii_J1nyn16IWsXvAAMic2gGdrsAACnkQJWF4gAAyKL417_w640_h480_c1_t0.jpg",
              price: 35,
              satisfaction: 95,
              content: ["不限流量", "续航持久", "多台共享"],
              advantage: "马尔代夫wifi设备租赁（漫游超人）"
            },

            {
              src:
                "../src/img/Cii-s1q5n6uIIb_vAAYvBAq5lgMAAEyMgJh40EABi8c048_w640_h480_c1_t0.jpg",
              price: 14,
              satisfaction: 97,
              content: ["4G网络", "不限流量", "续航持久"],
              advantage: "越南wifi设备租赁（小漫）"
            },
            {
              src:
                "../src/img/Cii-tFuctASIJgdyAAShE-5irCEAANv3AFdWdUABKEr538_w640_h480_c1_t0.jpg",
              price: 18,
              satisfaction: 100,
              content: ["香港WiFi设备租赁不限速（天翼WiFi）"],
              advantage: "香港WiFi设备租赁不限速（天翼WiFi）"
            },
            {
              src:
                "../src/img/Cii-slq5nbiIe114AAT9DISGNxoAAEyLQM8NiYABP0k055_w640_h480_c1_t0.jpg",
              price: 16,
              satisfaction: 92,
              content: ["4G网络", "不限流量", "续航持久"],
              advantage: "马来西亚wifi设备租赁（小漫）"
            },
            {
              src:
                "../src/img/Cii-T1feXG2IbFlnABK9lnt0688AAChyABbmJwAEr2u119_w640_h480_c1_t0.png",
              price: 18,
              satisfaction: 96,
              content: ["4G网络", "不限流量", "续航持久"],
              advantage: "东南亚8国通用wifi租赁（漫游超人）"
            },
            {
              src:
                "../src/img/Cii-tFqXoXuIbAu5AAbgEwEOZ_0AADxnAJ57lwABuAr615_w640_h480_c1_t0.jpg",
              price: 24,
              satisfaction: 92,
              content: ["不限流量", "续航持久", "多台共享"],
              advantage: "亚洲通用wifi租赁【自取+快递】（漫游宝）"
            }
          ]
        },
        {
          theme: "欧洲/美洲出境WiFi",
          item: [
            {
              src:
                "../src/img/Cii-s1o7Z-qIFmIHAASR0awdsZgAABGXAJnbpoABJHp462_w640_h480_c1_t0.jpg",
              price: 31,
              satisfaction: 97,
              content: ["4G网络", "不限流量", "续航持久"],
              advantage: "欧洲wifi49国热点设备租赁（漫游超人）"
            },
            {
              src:
                "../src/img/Cii-s1q5nqSIKZ1gAAQ9Lx3s8vMAAEyLwNmUgkABD1H017_w640_h480_c1_t0.jpg",
              price: 29,
              satisfaction: 86,
              content: ["4G网络", "不限流量", "续航持久"],
              advantage: "欧洲通用wifi设备租赁（小漫）"
            },
            {
              src:
                "../src/img/Cii-tFqWSyyIBl2nAAxfzjYYsroAADvTgBURN8ADF_m690_w640_h480_c1_t0.jpg",
              price: 30,
              satisfaction: 100,
              content: ["4G网络", "不限流量", "续航持久"],
              advantage: "欧洲WiFi翻译一体机设备租赁（百度共享）"
            },
            {
              src:
                "../src/img/Cii-Tlj1wPKIMGovAAHqrweRmS8AAJRxQGwjrsAAerH540_w640_h480_c1_t0.jpg",
              price: 20,
              satisfaction: 96,
              content: ["4G网络", "不限流量", "续航持久"],
              advantage: "美国wifi设备租赁（仅支持自取）（漫游超人）"
            },
            {
              src:
                "../src/img/Cii-slucoxaIbzTGAAUA5GrEwPYAANvqgHMD6sABQD8988_w640_h480_c1_t0.jpg",
              price: 19,
              satisfaction: 100,
              content: ["不限流量", "续航持久", "多台共享"],
              advantage: "美国WiFi设备租赁不限速（天翼WiFi）"
            },

            {
              src:
                "../src/img/Cii-slqXoWCIBLToAAPqjoMAYwYAADxnAGqWZUAA-qm453_w640_h480_c1_t0.jpg",
              price: 25,
              satisfaction: 79,
              content: ["4G网络", "不限流量", "续航持久"],
              advantage: "美国加拿大通用wifi租赁【自取+快递】（漫游宝）"
            },
            {
              src:
                "../src/img/Cii-slo8Wg-IKIc_AAJzLQO0w8UAABHwAPfZwEAAnNF869_w640_h480_c1_t0.jpg",
              price: 28,
              satisfaction: 92,
              content: ["不限流量", "续航持久", "多台共享"],
              advantage: "关岛塞班岛通用wifi设备租赁（漫游超人）"
            },
            {
              src:
                "../src/img/Cii-slqXoS-IRh7mAAWs9e-i2BgAADxnAAAAAAABa0N861_w640_h480_c1_t0.jpg",
              price: 25,
              satisfaction: 92,
              content: ["4G网络", "不限流量", "续航持久"],
              advantage: "俄罗斯wifi租赁【自取+快递】（漫游宝）"
            },
            {
              src:
                "../src/img/Cii-TFkMGi6IOI-wAAQ9ZrBXa-4AAJoeAG7DUcABD1-938_w640_h480_c1_t0.jpg",
              price: 30,
              satisfaction: 94,
              content: ["4G网络", "不限流量", "续航持久"],
              advantage: "加拿大wifi设备租赁（漫游超人）"
            },
            {
              src:
                "../src/img/Cii-tFpdXy6IF9smAAUZe9vwtAUAACWyQBG6s0ABRmT972_w640_h480_c1_t0.jpg",
              price: 32,
              satisfaction: 100,
              content: ["不限流量", "续航持久", "多台共享"],
              advantage: "南美洲通用wifi设备租赁（小漫）"
            }
          ]
        },
        {
          theme: "大洋洲/中东非出境WiFi",
          item: [
            {
              src:
                "../src/img/Cii-TFfeW62IXrrjABArvHqovYsAAChxgC4K2sAECvU138_w640_h480_c1_t0.png",
              price: 29,
              satisfaction: 97,
              content: ["4G网络", "不限流量", "续航持久"],
              advantage: "澳大利亚新西兰wifi设备租赁（漫游超人）"
            },
            {
              src:
                "../src/img/Cii-TlfeW-CIQbwcABCobD5bZ90AAChxgNdkD8AEKiE833_w640_h480_c1_t0.png",
              price: 31,
              satisfaction: 96,
              content: ["4G网络", "不限流量", "续航持久"],
              advantage: "阿联酋埃及通用wifi租赁（漫游超人）"
            },
            {
              src:
                "../src/img/Cii-tFol_u-IUMEOAALyAYsvoQMAAAarAAYhd8AAvIZ728_w640_h480_c1_t0.jpg",
              price: 39,
              satisfaction: 73,
              content: ["3G网络", "不限流量", "续航持久"],
              advantage: "南非埃及肯尼亚通用wifi热点设备租赁（漫游宝）"
            },
            {
              src:
                "../src/img/Cii9EFkVb3OITgWfAAIwVwS3LcwAAKK3gC8jc0AAjBv434_w640_h480_c1_t0.jpg",
              price: 42,
              satisfaction: 97,
              content: ["4G网络", "不限流量", "续航持久"],
              advantage: "全球137国通用wifi租赁（漫游超人）"
            },
            {
              src:
                "../src/img/Cii-tFpXLvGIPErTAASjzv7_Vg8AACBTwKGFqYABKPm887_w640_h480_c1_t0.jpg",
              price: 35,
              satisfaction: 100,
              content: ["不限流量", "续航持久", "多台共享"],
              advantage: "非洲5国通用wifi设备租赁（小漫）"
            }
          ]
        },
        {
          theme: "撩妹神器",
          item: [
            {
              src:
                "../src/img/Cii9EVdwn4-IUZ5JAAVfxnsmnr8AAGwkAKKOtgABV_e01.jpg",
              price: 4,
              satisfaction: 100,
              content: ["水下40米", "可拍摄1080P高清视频", "超广角镜头","鱼眼效果"],
              advantage: "GoPro运动相机（含安心险）"
            },
            {
              src:
                "../src/img/Cii-TFgRYhSIJyMmAALexQbWatoAADxqwICsqgAAt7d89.jpg",
              price: 12,
              satisfaction: 100,
              content: ["旗舰款运动相机", "2英寸触屏", "防水防抖"],
              advantage: "GoProHero5运动水下相机+安心保险（海鸟窝）"
            },
            {
              src:
                "../src/img/Cii9EVdwn8GIYeadACuHob_Ds34AAGwkQAAAAAAK4e589.jpg",
              price: 8,
              satisfaction: 100,
              content: ["浮潜圣器！", "包含安心险", "十项赠品！","可达水下深度15米", "1600万高像素", "高速F2.0镜头","1080P高清摄像"],
              advantage: "奥林巴斯TG-4防水相机（含安心险）"
            },
            {
              src:
                "../src/img/Cii-T1d_IAOIaapPAAWh8QpuDDIAAADCQPbijYABaIJ961_w640_h480_c1_t0.jpg",
              price: 8,
              satisfaction: 100,
              content: ["航拍无人机", "高清画面实时传输", "像素1200万"],
              advantage: "【租赁】佳能D30相机+安心保险（海鸟窝）"
            },
            {
              src:
                "../src/img/Cii-TFd_FUaILejRAATyw7O6dFUAAAC9AFvsDMABPLb991_w640_h480_c1_t0.jpg",
              price: 35,
              satisfaction: 100,
              content: ["轻便易携带", "不需要冲洗操作", "即拍即得","画质漂亮"],
              advantage: "【租赁】大疆OSMO户外拍摄+安心保险（海鸟窝）"
            }
          ]
        }
      ]
    };
  },
  methods: {}
};
</script>
