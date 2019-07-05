<style>
body {
  background: white;
  font-family: Yahei;
}
.modtitle {
  width: 1190px;
  
 margin:  50px auto;
}
.bookstep {
  width: 1190px;
  height: 54px;
  
  margin: 0 auto;
  zoom: 1;
  margin-top: 50px;margin-bottom: 50px;
}

.bookstep li {
  float: left;
  overflow: hidden;
}
.step1 {
  float: left;
  width: 42px;
  height: 42px;
  margin: 8px 10px 0 0;
  color: #ffae00;
  font-size: 32px;
  background-position: 0 -210px;
  background-image: url(../img/iconfontj.png);
}
.step2 {
  float: left;
  width: 42px;
  height: 42px;
  margin: 8px 10px 0 0;
  color: #ffae00;
  font-size: 32px;
  background-position: 0 -110px;
  background-image: url(../img/iconfontj.png);
}
.step3 {
  float: left;
  width: 42px;
  height: 42px;
  margin: 8px 10px 0 0;
  color: #ffae00;
  font-size: 32px;
  background-position: 0 -160px;
  background-image: url(../img/iconfontj.png);
}
.step4 {
  float: left;
  width: 42px;
  height: 42px;
  margin: 8px 10px 0 0;
  color: #ffae00;
  font-size: 32px;
  background-position: 0 -260px;
  background-image: url(../img/iconfontj.png);
}
.step5 {
  float: left;
  width: 42px;
  height: 42px;
  margin: 8px 10px 0 0;
  color: #ffae00;
  font-size: 32px;
  background-position: 0 -310px;
  background-image: url(../img/iconfontj.png);
}

.bookinfo {
  float: left;
  color: #666;
}
.info-tit {
  font-size: 22px;
  color: #333;
}
.bookarrow {
  float: left;
  width: 20px;
  height: 20px;
  margin: 15px 30px 0;
  background-position: 0 -90px;
  background-image: url(../img/iconfontj.png);
}
.btnbook{
        display: block;
    width: 180px;
    margin: 0 auto;
        height: 40px;
    line-height: 40px;
    border-radius: 2px;
    background-color: #f80;
    font-size: 18px;
    text-align: center;
    color: #fff;
}

</style>
<template>
  <div class="class-modbox">
    <div class="class-modtitle">预订只需3分钟</div>
    <ul class="bookstep">
      <li>
        <div class="step1"></div>
        <div class="bookinfo">
          <p class="info-tit">搜索</p>
          <p>选择取还车时间及地点</p>
        </div>
        <div class="bookarrow"></div>
      </li>
      <li>
        <div class="step2"></div>
        <div class="bookinfo">
          <p class="info-tit">选车</p>
          <p>选择合适的车型</p>
        </div>
        <div class="bookarrow"></div>
      </li>
      <li>
        <div class="step3"></div>
        <div class="bookinfo">
          <p class="info-tit">填写订单</p>
          <p>填写联系人及驾驶员信息</p>
        </div>
        <div class="bookarrow"></div>
      </li>
      <li>
        <div class="step4"></div>
        <div class="bookinfo">
          <p class="info-tit">提交订单</p>
          <p>确认租车信息</p>
        </div>
        <div class="bookarrow"></div>
      </li>
      <li>
        <div class="step5"></div>
        <div class="bookinfo">
          <p class="info-tit">预订成功</p>
          <p>轻松开启旅程</p>
        </div>
      </li>
    </ul>
    <button class="btnbook" style="cursor: pointer;
        outline: none;
            font-style: inherit;
    font-weight: inherit;
        border: 0 none;">立刻租车</button>
  </div>
</template>
<script>
export default {};
</script>
