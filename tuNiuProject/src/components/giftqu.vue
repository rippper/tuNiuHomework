<style>
.giftmiddle {
  width: 1522px;
  height: 448px;
  margin: 0 auto;
}
.giquestion {
  width: 1065px;
  height: 398px;
  float: left;
}
.giftright {
  width: 380px;
  height: 448px;
  float: right;
}
.gititle {
  width: 1065px;
  height: 42px;
  border-bottom: 1px solid #ccc;
  font-size: 19.2px;
  line-height: 42px;
}
.qurule {
  width: 813px;
  height: 42px;
  float: right;
}
.allserver {
  width: 152px;
  height: 42px;
  border-bottom: 2px solid #22c233;
}
.gimain {
  background: #fff;
  padding: 20px;
  height: auto;
  position: relative;
  border: 1px solid #ccc;
  margin-top: 20px;
}
.tabgift {
  background-image: url(../img/mark.png);
  margin: 10px;
  display: block;
  width: 70px;
  height: 92px;
  float: left;
}
.picktab {
  background: #22c233;
  color: white;
}
.getptab{
    width: 907px;
    height: auto;
    margin-left: 100px;
}
.five1{
    width: 240px;
    height: 73px;
        border-bottom: 1px solid #ccc;
        margin-top: 30px;
}
.five1right{
    float: right;
    font-size: 18px;
    margin-right: 40px;
    
}
.five-3{
    float: left;
    margin-right: 50px;
}

</style>
<template>
  <div class="giftmiddle">
    <div class="giquestion">
      <div class="gititle">
        <div class="allserver" style="float:left;
    ">
          <a style="display:block;text-align:center;">服务中心</a>
        </div>
        <div class="qurule" style="margin-left:50px">
          <ul>
            <li
              style="width:164px;height:42px;float:left;display:block;text-align:center;cursor:pointer"
              v-for="(item,index) in rulelist"
              :key="index"
              @click="toggleTabs(index)"
              :class="{picktab:index==nowIndex}"
            >{{item.tab}}</li>
          </ul>
        </div>
      </div>

      <div class="gimain">
        <div class="tabgift">
          <p
           v-show="nowIndex==0"
            style="font-size:16px;color:white;width:47px;height:47px;margin-left:19px;padding-top:25px;"
            
          >使用规则</p>
          <p
           v-show="nowIndex==1"
            style="font-size:16px;color:white;width:47px;height:47px;margin-left:19px;padding-top:25px;"
            
          >常见问题</p>
         
          
        </div>
        <div class="getptab" v-show="nowIndex==0">
          <p style="font-size:14px;margin:14px 0 14px 16px" v-for="(item,index) in rulebuglist" :key="index" >{{item.pcont0}}</p>
        </div>
          <div class="getptab" v-show="nowIndex==1">
          <p style="font-size:14px;margin:14px 0 14px 16px ;border-left: 4px solid #22c233;padding-left:10px"   v-for="(item,index) in rulebuglist" :key="index">{{item.pcont1}}</p>
        </div>
      </div>
    </div>
    <div class="giftright">
<div class="five1">
<img src="../img/five01.png" alt="" style="width:70px;height:70px">
<div class="five1right">
    <p>绑定充值</p>
    <p>价格优惠</p>
</div>
</div>
<div class="five1">
<img src="../img/five02.png" alt="" style="width:70px;height:70px">
<div class="five1right">
    <p>企业申请</p>
    <p>私人订制</p>
</div>
</div>
<div class="five1">
<img src="../img/five03.png" alt="" style="width:70px;height:70px">
<div class="five1right">
    <p>在线客服</p>
    <p>专项服务</p>
</div>
</div>
<div class="five-2">
    <p style="font-size:16px;margin-top:40px">咨询热线</p>
    <p style="font-size:21px;margin-top:15px;color:#FF8C00;font-weight: bold;">025-86853969转66998</p>
</div>

<div class="five-3" style="margin-top:50px">
    <img src="../img/songliyoumianzi.png" alt="" style="width:70px;height:70px;border-radius: 50%;">
    <p style="font-size:16px;margin-top:16px">送礼有面子</p>
</div>
<div class="five-3" style="margin-top:50px">
    <img src="../img/fulishangdangci.png" alt="" style="width:70px;height:70px;border-radius: 50%;">
    <p style="font-size:16px;margin-top:16px">福利上档次</p>
</div>
<div class="five-3" style="margin-top:50px">
    <img src="../img/jiagegengyouhui.png" alt="" style="width:70px;height:70px;border-radius: 50%;">
    <p style="font-size:16px;margin-top:16px">价格更优惠</p>
</div>
<div class="five-3" style="margin-top:50px">
    <img src="../img/daxiegengchengyi.png" alt="" style="width:70px;height:70px;border-radius: 50%;">
    <p style="font-size:16px;margin-top:16px">答谢更诚意</p>
</div>
</div>
    </div>

</template>

<script>
export default {
  data: function() {
    return {
      nowIndex: 0,
       rulebuglist: [
            {
              pcont0: "1、 途牛旅游网是途牛礼品卡唯一的销售渠道，禁止以获利为目的进行二次销售。",
              pcont1:"问：礼品卡的使用范围有哪些？是不是网站上的产品都支持抵用？"
            },
            {
              pcont0: "2、 途牛礼品卡自生效之日起计算有效期，有效期及使用范围以合同约定为准，应在有效期内及适用范围内进行使用。",
              pcont1:"问： 途牛礼品卡是否有使用期限限制？"
            },
            {
              pcont0: "3、 礼品卡是会员专享工具，遵守先充值后使用原则，即礼品卡在首次使用时会绑定到会员账户。绑定后的礼品卡限该会员账户使用，但礼品卡支付的订单出游人不受限制，用户可登陆会员中心点击礼品卡查看余额。",
              pcont1:"问：已有途牛礼品卡，该如何使用？"
            },
            {
              pcont0: "4、 有效期内可以在途牛旅游网预定途牛自营产品时全额使用（在出游过程中的消费，均不可使用），不受使用次数、金额等条件限制。",
              pcont1:"问：充值时提示未激活怎么办？"
            },
            {
              pcont0: "5、 同时使用礼品卡和现金支付订单，发生取消订单时，礼品卡支付部分会退回会员账户内，不予兑现。",
              pcont1:"问：会员中心每次查看订单中的礼品卡信息都要输入验证码，预订时也要输入验证码才能使用，是否可以取消验证？"
            },
            {
              pcont0: "6、 礼品卡可以与网站其他促销优惠活动同时使用，不受额度限制，可以全额使用。",
              pcont1:"问：是否可以提供发票？"
            },
            {
              pcont0: "7、途牛礼品卡，超过有效期仍有未消费余额的客户，可提出延期申请，延期时限为一年。办理延期每次收取延期金额10%手续费，50元封顶，采用直接扣取礼品卡金额的方式。",
              pcont1:"问：购买实体礼品卡后，如何查看快递信息？"
            },
            {
              pcont0: "8、礼品卡购买时若需要发票，请提前说明或在具体选项前标明，在预订产品时，礼品卡支付部分不再提供发票。",
              pcont1:"问：购买的旅游卡，可以兑换成商旅卡吗？"
            }
            
            
          ],
      rulelist: [
        {
          tab: "使用规则",
          
         
        },
        {
          tab: "常见问题",
          rulebuglist: [{

          }]
        }
      ]
    };
  },

  methods: {
    toggleTabs: function(index) {
      this.nowIndex = index;
    }
  }
};
</script>


