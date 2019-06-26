<style>
    .index_top{
        min-width:1190px;
        width:100%;
        background:#f8f8f8;
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
    .index_top_leftpart ul li:first-child::after{
        content:"";
        width:1px;
        height:16px;
        display: inline-block;
        background: #888;
        position: relative;
        top:5px;
    }
    .index_top_leftpart .register_img{
        width:110px;
        vertical-align: middle;
    }

</style>

<template>
    <div class="index_top">
        <div class="index_top_centerpart clear">
            <div class="index_top_leftpart ">
                <ul class="clear">
                    <li><a href="javascript:;">登录</a></li>
                    <li><a href="javascript:;">注册</a></li>
                    <li><a href="javascript:;"><img class="register_img" src="../img/registerz.gif" alt=""></a></li>
                </ul>
            </div>
            <div class="index_top_rightpart clear">
                <ul class="clear">
                    <li><a href="javascript:;">途牛商旅</a></li>
                    <li><a href="javascript:;">旅游百货</a></li>
                    <li><a href="javascript:;">企业旅游</a></li>
                    <li><a href="javascript:;">会员俱乐部</a></li>
                    <li><a href="javascript:;">我的订单</a></li>
                    <li><a href="javascript:;">网站地图</a></li>
                </ul>
                <ul class="clear">
                    <li><a href="javascript:;"><img src="../img/sprite1z.png" alt=""></a></li>
                    <li><img src="../img/sprite1z.png" alt=""></li>
                    <li><a href="javascript:;"><img src="../img/sprite1z.png" alt=""></a></li>
                    <li><a href="javascript:;"><img src="../img/sprite1z.png" alt=""></a></li>
                </ul>
            </div>
        </div>
    </div>
</template>
