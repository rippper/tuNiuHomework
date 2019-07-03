<style>
.index_nav{
    background:#2dbb55;
    position: relative;
}
.index_nav_center{
    width:1190px;
    margin:0 auto;
}
.index_nav_center ul li{
    float:left;
    position: relative;
    z-index: 2;
}
.index_nav_center ul li:hover{
    background:#4ecf5b;
}
.index_nav_ps:hover::after{
    transform: rotate(180deg);
}
.index_nav_center ul li::before{
    content:"";
    display:inline-block;
    width:1px;
    height:16px;
    background:#666;
    position:relative;
    top:2px;
    opacity: 0.2;
}
.index_nav_center ul li:first-of-type:before{
    display:none;
}
.index_nav_center ul li>a{
    padding:0 11px;
    color:#fff;
    display: inline-block;
    font-size: 16px;
    height:40px;
    line-height:40px;
}
.index_nav_ps::after{
    content:"";
    width:5px;
    height:3px;
    background:url("../img/sprite3z.png");
    background-position: -32px -456px;
    display: inline-block;
    position: absolute;
    top:48%;
    right:5px;
    transition:0.3s;
}
.head_nav_son{
    height:40px;
    width:100%;
    position: absolute;
    top:40px;
    color:#666;
    background:#fff;
    display:none;
    z-index: 1;
    box-shadow: 2px 2px 2px 1px rgba(0,0,0,0.2);
}
.head_nav_soncenter{
    width:1190px;
    position: absolute;
    top:40px;
    height:40px;
    left:-53px;
}
.head_nav_soncenter{
    display: none;
}
.head_nav_soncenter::before{
    content:"";
    width:12px;
    height:12px;
    transform: rotate(45deg);
    display: block;
    background: #fff;
    position: absolute;
}
.head_nav_playway::before{
    top:-6px;
    left:180px;
}
.head_nav_faince::before{
    top:-6px;
    left:233px;
}
.head_nav_booking::before{
    top:-6px;
    left:156px;
}
.head_nav_service::before{
    top:-6px;
    left:295px;
}
.head_nav_subject::before{
    top:-6px;
    left:209px;
}
.head_nav_hotel::before{
    top:-6px;
    left:73px;
}
.head_nav_plane::before{
    top:-6px;
    left:180px;
}
.head_nav_boat::before{
    top:-6px;
    left:228px;
}
.head_nav_freedom::before{
    top:-6px;
    left:152px;
}
.head_nav_group::before{
    top:-6px;
    left:81px;
}
.head_nav_soncenter a{
    display: inline-block;
    color: #333;
    margin: 7px 5px 0;
    padding: 0 10px;
    text-decoration: none;
    height: 24px;
    line-height: 24px;
    font-size: 14px;
    position: relative;
    vertical-align: top;
    margin-top: 8px;
}
.head_nav_soncenter a:hover{
    background:#2dbb55;
    color:#fff;
    height:24px;
    line-height: 24px;
    border-radius: 2px;
}
.head_nav_freedom{
    left:-123px;
}
.head_nav_boat{
    left:-196px;
}
.head_nav_plane{
    left:-159px;
    width:450px;
}
.head_nav_hotel{
    width:250px;
}
.head_nav_subject{
    left:-180px;
    width:700px;
}
.head_nav_service{
    left:-256px;
    width:700px;
}
.head_nav_booking{
    left:-126px;
    width:450px;
}
.head_nav_faince{
    left:-212px;
    width:550px;
}
.head_nav_playway{
    width: 400px;
    left:-156px;
}
.index_nav_bind_boat,
.index_nav_bind_hotel,
.index_nav_bind_ticket,
.index_nav_bind_service{
    position: absolute;
    top:-12px;
    left:50%;
}
.index_nav_bind_boat img{
    width:52px;
    height:18px;
    margin-left:-26px;
}
.index_nav_bind_hotel img{
    width:28px;
    height:18px;
    margin-left:-14px;
}
.index_nav_bind_ticket img{
    width:64px;
    height:18px;
    margin-left:-32px;
}
.index_nav_bind_service img{
    width:28px;
    height:18px;
    margin-left:-14px;
}
</style>

<template>
    <div class="index_nav">
        <div class="index_nav_center">
            <ul class="clear">
                <li><a href="javascript:;">首页</a></li>
                <li class="index_nav_ps" @mouseenter="mouseinn(0)" @mouseleave="mouseoutt(0)">
                    <a href="javascript:;">跟团游</a>
                    <div class="head_nav_soncenter head_nav_group">
                        <a href="javascirpt:;">出境·港澳台跟团</a>
                        <a href="javascript:;">境内跟团</a>
                        <a href="javascript:;">周边跟团</a>
                        <a href="javascript:;">牛人专线</a>
                        <a href="javascript:;">目的地参团</a>
                        <a href="javascript:;">跟团自驾</a>
                        <a href="javascript:;">半自动</a>
                    </div>
                </li>
                <li class="index_nav_ps" @mouseenter="mouseinn(1)" @mouseleave="mouseoutt(1)">
                    <a href="javascript:;">自由行</a>
                    <div class="head_nav_soncenter head_nav_freedom">
                        <a href="javascirpt:;">境内自由行</a>
                        <a href="javascript:;">出境·港澳台自由行</a>
                        <a href="javascript:;">机票+酒店</a>
                        <a href="javascript:;">火车票+酒店</a>
                        <a href="javascript:;">当地玩乐</a>
                        <a href="javascript:;">巴士自由行</a>
                        <a href="javascript:;">签证</a>
                        <a href="javascript:;">出境WiFi</a>
                    </div>
                </li>
                <li class="index_nav_ps" @mouseenter="mouseinn(2)" @mouseleave="mouseoutt(2)">
                    <div class="index_nav_bind_boat"><img src="../img/bindyoulunz.png" alt=""></div>
                    <a href="javascript:;">邮轮游</a>
                    <div class="head_nav_soncenter head_nav_boat">
                        <a href="javascirpt:;">日本航行</a>
                        <a href="javascript:;">东南亚航线</a>
                        <a href="javascript:;">地中海航线</a>
                        <a href="javascript:;">三峡航线</a>
                        <a href="javascript:;">欧洲河轮</a>
                        <a href="javascript:;">澳新航线</a>
                        <a href="javascript:;">南极航线</a>
                    </div>
                </li>
                <li>
                    <div class="index_nav_bind_hotel"><img src="../img/bindzijiaz.png" alt=""></div>
                    <a href="javascript:;">酒+景</a>
                </li>
                <li class="index_nav_ps" @mouseenter="mouseinn(3)" @mouseleave="mouseoutt(3)">
                    <a href="javascript:;">机票</a>
                    <div class="head_nav_soncenter head_nav_plane">
                        <a href="javascirpt:;">境内机票</a>
                        <a href="javascript:;">国际·港澳台机票</a>
                        <a href="javascript:;">航班时刻</a>
                        <a href="javascript:;">环球特价</a>
                    </div>
                </li>
                <li class="index_nav_ps" @mouseenter="mouseinn(4)"  @mouseleave="mouseoutt(4)">
                    <a href="javascript:;">酒店</a>
                    <div class="head_nav_soncenter head_nav_hotel">
                        <a href="javascirpt:;">境内酒店</a>
                        <a href="javascript:;">国际地区酒店</a>
                    </div>
                </li>
                <li><a href="javascript:;">火车票</a></li>
                <li><a href="javascript:;">汽车票</a></li>
                <li><a href="javascript:;">用车</a></li>
                <li>
                    <div class="index_nav_bind_ticket"><img src="../img/bindDisneyz.png" alt=""></div>
                    <a href="javascript:;">门票</a>
                </li>
                <li><a href="javascript:;">特卖</a></li>
                <li class="index_nav_ps" @mouseenter="mouseinn(5)" @mouseleave="mouseoutt(5)">
                    <a href="javascript:;">主题游</a>
                    <div class="head_nav_soncenter head_nav_subject">
                        <a href="javascirpt:;">牛人专线</a>
                        <a href="javascript:;">亲子游</a>
                        <a href="javascript:;">海岛游</a>
                        <a href="javascript:;">蜜月游</a>
                        <a href="javascript:;">爸妈游</a>
                        <a href="javascript:;">首航途牛假期</a>
                        <a href="javascript:;">红色旅游</a>
                    </div>
                </li>
                <li class="index_nav_ps" @mouseenter="mouseinn(6)" @mouseleave="mouseoutt(6)">
                    <div class="index_nav_bind_service"><img src="../img/bindlvpaiz.png" alt=""></div>
                    <a href="javascript:;">出游服务</a>
                    <div class="head_nav_soncenter head_nav_service">
                        <a href="javascirpt:;">签证</a>
                        <a href="javascript:;">当地玩乐</a>
                        <a href="javascript:;">全球WiFi</a>
                        <a href="javascript:;">租车用车</a>
                        <a href="javascript:;">婚纱旅拍</a>
                        <a href="javascript:;">全球购</a>
                        <a href="javascript:;">银联活动</a>
                        <a href="javascript:;">旅游百货</a>
                    </div>
                </li>
                <li class="index_nav_ps" @mouseenter="mouseinn(7)" @mouseleave="mouseoutt(7)">
                    <a href="javascript:;">定制游</a>
                    <div class="head_nav_soncenter head_nav_booking">
                        <a href="javascirpt:;">公司定制</a>
                        <a href="javascript:;">家庭定制</a>
                        <a href="javascript:;">会议&奖励旅游</a>
                        <a href="javascript:;">朋派定制游</a>
                    </div>
                </li>
                <li class="index_nav_ps" @mouseenter="mouseinn(8)" @mouseleave="mouseoutt(8)">
                    <a href="javascript:;">金融</a>
                    <div class="head_nav_soncenter head_nav_faince">
                        <a href="javascirpt:;">理财</a>
                        <a href="javascript:;">途牛宝</a>
                        <a href="javascript:;">基金</a>
                        <a href="javascript:;">分期·借钱</a>
                        <a href="javascript:;">出境金融</a>
                        <a href="javascript:;">保险</a>
                        <a href="javascript:;">礼品卡</a>
                    </div>
                </li>
                <li class="index_nav_ps" @mouseenter="mouseinn(9)" @mouseleave="mouseoutt(9)">
                    <a href="javascript:;">攻略</a>
                    <div class="head_nav_soncenter head_nav_playway">
                        <a href="javascirpt:;">游记</a>
                        <a href="javascript:;">达人玩法</a>
                        <a href="javascript:;">风向标</a>
                        <a href="javascript:;">旅游达人</a>
                        <a href="javascript:;">问答</a>
                    </div>
                </li>
            </ul>
        </div>
        <div class="head_nav_son" ref="blackborder"></div>
        
    </div>
</template>

<script>
export default {

    methods:{
        mouseinn(num){
            let dark = document.getElementsByClassName("head_nav_soncenter")[num];
            dark.style.display = "block";
            this.$refs.blackborder.style.display = "block";
        },
        mouseoutt(num){
            let dark = document.getElementsByClassName("head_nav_soncenter")[num];
            dark.style.display = "none";
            this.$refs.blackborder.style.display = "none";
        }
    }
}
</script>


