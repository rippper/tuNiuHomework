<style>
    .index_top{
        min-width:1190px;
        width:100%;
        background:#f8f8f8;
        border-bottom:1px solid #eee;
    }
    .index_top_centerpart{
        width:1190px;
        margin:0 auto;
    }
    .index_top_leftpart{
        float:left;
    }
    .index_top_rightpart{
        float:right;
    }
    .index_top_leftpart ul li{
        float:left;
    }
    .index_top_rightpart ul{
        float:left;
    }
    .index_top_rightpart ul li{
        float:left;
    }
    .index_top_leftpart ul li a{
        padding:0 5px;
        line-height: 30px;
    }
    .index_top_leftpart ul li a:hover{
        color:#f60;
    }
    .index_top_leftpart ul li:first-child::after{
        content:"";
        width:1px;
        height:12px;
        display: inline-block;
        background: #ccc;
        position: relative;
        top:2px;
    }
    .index_top_leftpart .register_img{
        width:110px;
        vertical-align: middle;
    }
    .index_top_rightpart_image li{
        padding:0 12px;
        height:29px;
        line-height:29px;
        color:#f60;
        position: relative;
    }
    .index_top_rightpart_image li:first-child a div{
        width:18px;
        height:13px;
        margin-top:9px;
        background:url("../img/sprite1z.png");
        background-position: -40px -50px;
    }
    .index_top_rightpart_image li:first-child a div:hover{
        background-position: -86px -49px;
    }
    .index_top_rightpart_image li:nth-child(2) a div{
        width:11px;
        height:29px;
        background:url("../img/mobilejumpz.gif") -10px 0;
    }
    .index_top_rightpart_image li:nth-child(2) a div:hover {
        background:url("../img/sprite1z.png") -24px -43px;
    }
    .index_top_rightpart_image li:nth-child(2):hover{
        background:#fff;
    }
    .index_top_rightpart_image li:nth-child(2):hover .index_top_downloadApp{
        display: block;
    }
    .index_top_rightpart_image li:nth-child(3) a div{
        width:19px;
        height:14px;
        margin-top:8px;
        background:url("../img/sprite1z.png") -63px -49px;
    }
    .index_top_rightpart_image li:nth-child(3):hover{
        background:#fff;
    }
    .index_top_rightpart_image li:nth-child(3):hover a div{
        background:url("../img/sprite1z.png") -92px -7px;
    }
    .index_top_rightpart_image li:nth-child(3):hover .index_top_weApp{
        display:block;
    }
    .index_top_rightpart_image li:last-child a div{
        width:15px;
        height:10px;
        margin-top:10px;
        background:url("../img/mailz.png");
        background-size: 100%;
    }
    .index_top_rightpart_image li:last-child a div:hover{
        background:url("../img/mailz1.png");
        background-size: 100%;
    }
    .index_top_rightpart_words>li>a{
        height:29px;
        line-height: 29px;
    }
    .index_top_rightpart_words>li{
        padding:0 12px;
    }
    .index_top_rightpart_words>li:first-child a:hover{
        color:#f60;
    }
    .index_top_rightpart_words>li:nth-child(2) a:hover{
        color:#f60;
    }
    .index_top_rightpart_words>li:nth-child(3) a,
    .index_top_rightpart_words>li:nth-child(4) a{
        color:#f60;
    }
    .index_top_rightpart_words>li:nth-child(5),
    .index_top_rightpart_words>li:last-child{
        padding-right:23px;
        position: relative;
    }
    .index_top_rightpart_words>li:nth-child(5)::after,
    .index_top_rightpart_words>li:last-child::after{
        content:"";
        display:block;
        width:0;
        height:0;
        border-top:3px solid #888;
        border-right:3px solid #f8f8f8;
        border-left:3px solid #f8f8f8;
        position: absolute;
        top:13px;
        right:12px;
    }
    .index_top_downloadApp{
        position: absolute;
        top:29px;
        right:-52px;
        display:none;
        z-index:15;
    }
    .index_top_weApp{
        position: absolute;
        top:29px;
        right:0px;
        display: none;
        z-index:15;
    }
    .index_top_exceptone{
        position: absolute;
        width:82px;
        border:1px solid #eee;
        border-top:0;
        text-align: center;
        right:0;
        top:29px;
        display: none;
        z-index:15;
    }
    .index_top_exceptone a{
        display: block;
        line-height: 25px;
        background:#fff;
    }
    .index_top_rightpart_words li:nth-child(5):hover{
        background:#fff;
    }
    .index_top_rightpart_words li:nth-child(5):hover::after{
        transform: rotate(180deg);
        transition: 0.3s;
    }
    .index_top_rightpart_words li:nth-child(5):hover .index_top_exceptone{
        display: block;
    }
    .index_top_rightpart_words li:nth-child(5) .index_top_exceptone a:hover{
        color:#f60;
    }
    .index_top_excepttwo{
        position: absolute;
        width:1190px;
        top:29px;
        right:-158px;
        padding-top:38px;
        padding-bottom:30px;
        background:#fff;
        display:none;
        border:1px solid #eee;
        border-top:0px;
        box-shadow: 2px 2px 2px #F7F7F7;
        z-index:15;
    }
    .index_top_excepttwo dt{
        float:left;
        padding:0 40px;
        height:190px;
        font-size:16px;
        font-weight: bold;
        border-left:1px solid #eee;
    }
    .index_top_excepttwo dt:first-of-type{
        border-left:0px;
    }
    .index_top_excepttwo dt:first-of-type{
        color:#2e9900;
    }
    .index_top_excepttwo dt:nth-of-type(2){
        color:#f69100;
    }
    .index_top_excepttwo dt:nth-of-type(3){
        color:#02609d;
    }
    .index_top_excepttwo dt:last-of-type{
        color:#bf4b56;
    }
    .index_top_excepttwo dd{
        float:left;
        width:100px;
    }
    .index_top_excepttwo dd ul li{
        width:100px;
        float:left;
        height:12px;
        margin-bottom:16px;
    }
    .index_top_excepttwo dd ul li a{
        color:#333;
    }
    .index_top_excepttwo dd ul li a:hover{
        color:#f60;
    }
    .index_top_excepttwo dd:first-of-type{
        width:300px;
    }
    .index_top_excepttwo dd:first-of-type ul li{
        width:100px;
        padding:0;
        margin-bottom:16px;
        height:auto;
        line-height: 12px;
    }
    .index_top_rightpart_words li:last-child:hover{
        background:#fff;
    }
    .index_top_rightpart_words li:last-child:hover::after{
        transform: rotate(180deg);
        transition: 0.3s;
    }
    .index_top_rightpart_words li:last-child:hover .index_top_excepttwo{
        display: block;
    }
</style>

<template>
    <div class="index_top">
        <div class="index_top_centerpart clear">
            <div class="index_top_leftpart ">
                <ul class="clear">
                    <li><a href="javascript:;">登录</a></li>
                    <li><a href="javascript:;">注册</a></li>
                    <li><a><img class="register_img" src="../img/registerz.gif" alt=""></a></li>
                </ul>
            </div>
            <div class="index_top_rightpart clear">
                <ul class="index_top_rightpart_words clear">
                    <li><a href="javascript:;">途牛商旅</a></li>
                    <li><a href="javascript:;">旅游百货</a></li>
                    <li><a href="javascript:;">企业旅游</a></li>
                    <li><a href="javascript:;">会员俱乐部</a></li>
                    <li>
                        <a href="javascript:;">我的订单</a>
                        <div class="index_top_exceptone">
                            <a href="javascript:;">全部订单</a>
                            <a href="javascript:;">我的机票</a>
                            <a href="javascript:;">我的火车票</a>
                            <a href="javascript:;">积分商城</a>
                            <a href="javascript:;">非会员查单</a>
                        </div>
                    </li>
                    <li>
                        <a href="javascript:;">网站地图</a>
                        <div class="index_top_excepttwo">
                            <dl class="clear">
                                <dt>
                                    去旅游
                                </dt>
                                <dd>
                                    <ul>
                                        <li><a href="javascript:;">跟团游</a></li>
                                        <li><a href="javascript:;">牛人专线</a></li>
                                        <li><a href="javascript:;">酒店</a></li>
                                        <li><a href="javascript:;">自由行</a></li>
                                        <li><a href="javascript:;">亲子游</a></li>
                                        <li><a href="javascript:;">门票</a></li>
                                        <li><a href="javascript:;">酒+景</a></li>
                                        <li><a href="javascript:;">蜜月游</a></li>
                                        <li><a href="javascript:;">邮轮</a></li>
                                        <li><a href="javascript:;">公司旅游</a></li>
                                        <li><a href="javascript:;">海岛游</a></li>
                                        <li><a href="javascript:;">签证</a></li>
                                        <li><a href="javascript:;">当地玩乐</a></li>
                                        <li><a href="javascript:;">老于推荐</a></li>
                                        <li><a href="javascript:;">机票</a></li>
                                        <li><a href="javascript:;">首付出发</a></li>
                                        <li><a href="javascript:;">机票+酒店</a></li>
                                        <li><a href="javascript:;">旅拍</a></li>
                                    </ul>
                                </dd>
                                <dt>
                                    寻优惠
                                </dt>
                                <dd>
                                    <ul>
                                        <li><a href="javascript">特卖</a></li>
                                        <li><a href="javascript">订酒店 返现金</a></li>
                                        <li><a href="javascript">积分商城</a></li>
                                        <li><a href="javascript">银行特惠游</a></li>
                                    </ul>
                                </dd>
                                <dt>
                                    看攻略
                                </dt>
                                <dd>
                                    <ul>
                                        <li><a href="javascript">攻略</a></li>
                                        <li><a href="javascript">途牛风向标</a></li>
                                        <li><a href="javascript">游记</a></li>
                                        <li><a href="javascript">大人玩法</a></li>
                                    </ul>
                                </dd>
                                <dt>
                                    查服务
                                </dt>
                                <dd>
                                    <ul>
                                        <li><a href="javascript">帮助中心</a></li>
                                        <li><a href="javascript">会员俱乐部</a></li>
                                        <li><a href="javascript">阳光保障</a></li>
                                        <li><a href="javascript">火车时刻表</a></li>
                                        <li><a href="javascript">航班查询</a></li>
                                    </ul>
                                </dd>
                            </dl>
                        </div>
                    </li>
                </ul>
                <ul class="index_top_rightpart_image clear">
                    <li><a href="javascript:;"><div></div></a></li>
                    <li>
                        <a href="javascript:;"><div></div></a>
                        <div class="index_top_downloadApp">
                            <img src="../img/advertes1z.png" alt="">
                        </div>
                    </li>
                    <li>
                        <a href="javascript:;"><div></div></a>
                        <div class="index_top_weApp">
                            <img src="../img/advertismentz.gif" alt="">
                        </div>
                    </li>
                    <li><a href="javascript:;"><div></div></a></li>
                </ul>
            </div>
        </div>
    </div>
</template>
