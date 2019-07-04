<style>
body{
background: #f6f6f6;
}
.easycar {
  width: 1215px;
  height: 200px;
  zoom: 1;
  margin: 0 auto;
}
.easycar li {
  float: left;
  width: 358px;
  height: 140px;
  margin-right: 25px;
  padding: 10px;
  border: 1px solid #ddd;
  color: #666;
  overflow: hidden;
}
.carpic {
  padding: 5px 0;
}
.carcunt {
  float: left;
  width: 140px;
  height: 140px;
  margin-right: 20px;
  border: 0 none;
  vertical-align: middle;
}
</style>
<template>
  <div class="modbox">
    <div class="modtitle">一线租车公司</div>
    <ul class="easycar">
      <li v-for="(item,index) in carpiclist" :key="index">
        <img :src="item.src" alt class="carcunt" />
        <div class="carpic">
          <a>{{item.cont}}</a>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data: function() {
    return {
      carpiclist: [
        {
          src: "http://car.tuniu.com/car/static/images/logo-avis.jpg",
          cont:
            "安飞士租车公司（Avis Rent a Car System, LLC.）是一家跨国的汽车租赁企业，其母公司为美国安飞士·巴吉集团（Avis Budget Group, Inc.）。"
        },
        {
          src: "http://car.tuniu.com/car/static/images/logo-ehi.jpg",
          cont:
            "上海一嗨汽车是中国领先的连锁租车服务提供商之一，总部设立于上海，分公司遍布全国一、二线及各大省会城市，拥有100多种车型的一万多台车，服务范围遍布近80多座城市。"
        },
        {
          src: "http://car.tuniu.com/car/static/images/logo-sz.jpg",
          cont:
            "神州租车积极借鉴国际上成功的汽车租赁模式，结合中国客户的消费习惯，为客户提供短租、长租及融资租赁等专业化的汽车租赁服务，以及全国救援、异地还车等完善的配套服务。"
        }
      ]
    };
  }
};
</script>
