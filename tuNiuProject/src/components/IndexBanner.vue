<style>
.index_banner{
    width:100%;
}
.index_banner_background{
    width: 100%;
    height: 440px;
    position: relative;
}
.index_banner_background_wrap{
    width:100%;
    height: 440px;
    position: relative;
    min-width: 1190px;
}
.index_banner_background_wrap li{
    width:100%;
    position: absolute;
    top: 0;
    right: 0;
    left:0;
    bottom:0;
    margin:auto;
    overflow: hidden;
    z-index: 1;
    opacity: 0;
    transition:0.3s;
}
.index_banner_background_wrap li:first-child{
    z-index: 2;
    opacity: 1;
}
.index_banner_background_wrap li a{
    display: block;
    width:100%;
    height:440px;
    margin:0 auto;
}
.index_banner_background .index_banner_background_wrap li:first-of-type .index_banner_pic{
    background:url("../img/bannner1z.jpg") center center;
}
.index_banner_background .index_banner_background_wrap li:nth-of-type(2) .index_banner_pic{
    background:url("../img/banner2z.jpg") center center;
}
.index_banner_background .index_banner_background_wrap li:nth-of-type(3) .index_banner_pic{
    background:url("../img/banner3z.jpg") center center;
}
.index_banner_background .index_banner_background_wrap li:nth-of-type(4) .index_banner_pic{
    background:url("../img/banner4z.jpg") center center;
}
.index_banner_background .index_banner_background_wrap li:nth-of-type(5) .index_banner_pic{
    background:url("../img/banner5z.jpg") center center;
}
.index_banner_background .index_banner_background_wrap li:last-of-type .index_banner_pic{
    background:url("../img/banner6z.jpg") center center;
}
.index_banner_background_leftbtn{
    width:45px;
    height:100px;
    background:url("../img/Banner_spritez.png") left top;
    position: absolute;
    top: 125px;
    z-index: 4;
    opacity: 0;
    cursor: pointer;
    transition:0.5s;
}
.index_banner_background_rightbtn{
    width:45px;
    height:100px;
    background:url("../img/Banner_spritez.png") right top;
    position: absolute;
    top: 125px;
    right:0;
    z-index: 4;
    opacity: 0;
    cursor: pointer;
    transition:0.5s;
}   
.index_banner_background_title>ul{
    position: absolute;
    bottom:129px;
    left: 15px;
    font-size: 12px;
    font-family: "宋体";
    z-index: 3;
    width:735px;
}
.index_banner_background_title li{
    float: left;
    width: 116px;
    background: #fff;
    opacity: 0.7;
    color: #333;
    height: 18px;
    line-height: 18px;
    text-align: center;
    margin-right: 2px;
    cursor: pointer;
    overflow: hidden;
}
.index_banner_background_title li:first-child{
    background:#333;
    color:#fff;
}
.index_banner_background_title li:first-child a{
    color:inherit;
}
.index_banner_background_content{
    width:100%;
    position: absolute;
    top:0;
    left:0;
    height:440px;
}
.index_banner_background_contentin{
    width:1190px;
    margin:0 auto;
    height:440px;
    position: relative;
}
.index_banner_background_contentin_leftone{
    width: 84px;
    height: auto;
    max-height: 425px;
    background: #38414c;
    position: absolute;
    left: 0;
    top: 10px;
    z-index: 5;
    overflow: hidden;
}
.index_banner_background_combine{
    width: 84px;
    height: 60px;
    line-height: 54px;
    position: relative;
    border-bottom: 1px solid #202020;
    box-sizing: border-box;
}
.index_banner_background_combine a{
    width: 84px;
    height: 39px;
    display: block;
    line-height: 39px;
    padding-top: 20px;
    text-align: center;
    color: #fff;
    font-size: 12px;
    font-weight: normal;
    font-family: "Microsoft YaHei";
    position: absolute;
    top: 0;
    left: 0;
}
.index_banner_background_contentin_leftone .index_banner_background_combine i{
    width: 20px;
    height: 21px;
    position: absolute;
    top: 8px;
    left: 34px;
    background:url("../img/bannersprite1z.png");
    background-repeat: no-repeat;
    background-size: 210px 240px;
}
.index_banner_background_contentin_leftone .index_banner_background_combine:hover a{
    color:#2ea536;
    font-weight: bold;
}
.index_banner_background_contentin_leftone .index_banner_background_combine:hover{
    background:#fff;
    border-bottom:1px solid #fff;
}
.index_banner_background_contentin_leftone .index_banner_background_travel{
    background:#fff;
}
.index_banner_background_contentin_leftone .index_banner_background_travel a{
    color:#2ea536;
    font-weight: bold;
}
.index_banner_background_contentin_leftone .index_banner_background_travel i{
    background-position: 0 -25px;
}
.index_banner_background_contentin_leftone .index_banner_background_plane i{
    background-position: -40px 0;
}
.index_banner_background_contentin_leftone .index_banner_background_plane:hover i{
    background-position: -40px -24px;
}
.index_banner_background_contentin_leftone .index_banner_background_hotel i{
    background-position: -60px 0;
}
.index_banner_background_contentin_leftone .index_banner_background_hotel:hover i{
    background-position: -60px -24px;
}
.index_banner_background_contentin_leftone .index_banner_background_freedom i{
    background-position: -20px 0;
}
.index_banner_background_contentin_leftone .index_banner_background_freedom:hover i{
    background-position: -20px -24px;
}
.index_banner_background_contentin_leftone .index_banner_background_train i{
    background-position: -80px 0;
}
.index_banner_background_contentin_leftone .index_banner_background_train:hover i{
    background-position: -80px -24px;
}
.index_banner_background_contentin_leftone .index_banner_background_boat i{
    background-position: -100px 0;
}
.index_banner_background_contentin_leftone .index_banner_background_boat:hover i{
    background-position: -100px -24px;
}
.index_banner_background_contentin_leftone .index_banner_background_ticket i{
    background-position: -120px 0;
}
.index_banner_background_contentin_leftone .index_banner_background_ticket:hover i{
    background-position: -120px -24px;
}
.index_banner_background_lefttwo{
    width: auto;
    height: 420px;
    position: absolute;
    z-index: 8;
    top: 10px;
    left: 84px;
    background: #fff;
}
.index_banner_background_lefttwo ul li{
    padding-left:10px;
    margin: 0 auto;
    height: auto;
    cursor: pointer;
    border-bottom: 1px dotted #dcdcdc;
}
.index_banner_background_lefttwo ul li:last-of-type{
    border-bottom:none;
}
.c_s_title{
    width: 125px;
    height: 20px;
    line-height: 18px;
    padding: 5px 0 0 5px;
    margin: 0 auto;
    overflow: hidden;
    position: relative;
    z-index: 1;
    cursor: pointer;
}
.c_s_title a img{
    height:14px;
}
.c_s_title a{
    font-size: 14px;
    color: #333;
    padding-right: 4px;
    font-weight: bold;
    position: relative;
    z-index: 1;
    zoom: 1;
    vertical-align: top;
}
.c_s_nom{
    width: 127px;
    height: 20px;
    line-height: 19px;
    font-size: 0;
    padding-left: 3px;
    margin: 0 auto;
    overflow: hidden;
}
.c_s_nom a{
    color: #999;
    font-size: 12px;
    padding: 0 5px 0 0;
    font-weight: normal;
}
.index_banner_bannershow{
    width: 735px;
    position: absolute;
    bottom: 10px;
    left: 225px;
    z-index: 1;
    height: 420px;
    z-index:5;
}
.index_banner_bannershow_lastfloor{
    width:735px;
    position: absolute;
    bottom: 0;
    left: 15px;
    z-index: 2;
    display: block;
}
.index_banner_bannershow_lastfloor ul{
    width:705px;
    overflow: hidden;
}
.index_banner_bannershow_lastfloor ul li:first-of-type{
    width:122px;
}
.index_banner_bannershow_lastfloor ul li{
    float:left;
    width:97px;
}
.index_banner_bannershow_lastfloor ul li img{
    width:222px;
    position: relative;
}
.index_banner_bannershow_lastfloor ul li:first-of-type img{
    left:-100px;
}
.index_banner_bannershow_firstfloor{
    display: block;
    width:735px;
    height:245px;
}
.index_banner_bannershow_firstfloor:hover .index_banner_background_leftbtn{
    opacity: 0.7;
}
.index_banner_bannershow_firstfloor:hover .index_banner_background_rightbtn{
    opacity: 0.7;
}
.index_banner_last_floor{
    width: 230px;
    position: absolute;
    top: 10px;
    right: 0;
    z-index: 1;
    height: 420px;
    background:#fff;
    z-index: 4;
}
.index_banner_last_floor_title{
    padding: 10px 0 3px 7px;
    background: #fff;
}
.index_banner_last_floor_title_l{
    width: 66px;
    height: 65px;
    float: left;
    background: url(//ssl.tuniucdn.com/img/201601141600/index_v4/hot-icon.png) no-repeat;
    background-position: 0 100px;
    color: #fff;
    text-align: center;
    position: relative;
    z-index: 1;
    background-position: 1px -6440px;
}
.index_banner_last_floor_title_l_num{
    display: block;
    font-size: 24px;
    position: absolute;
    top: 8px;
    right: 24px;
    color: #ff5805;
    font-family: 'Arial';
}
.index_banner_last_floor_title_l_pec{
    position: absolute;
    top: 13px;
    left: 43px;
    color: #ffce5a;
    font-size: 14px;
}
.index_banner_last_floor_title_l_txt{
    display: block;
    font-size: 12px;
    position: absolute;
    top: 35px;
    left: 17px;
    color: #ff5905;
}
.index_banner_last_floor_title_shu{
    margin-top: 10px!important;
    float: left;
    font-size: 12px;
    color: #999;
    margin-left: 10px;
    margin-top: 1px;
    height: 22px;
    line-height: 22px;
    font-family: "宋体";
}
.index_banner_last_floor_title_dianpin{
    float: left;
    font-size: 12px;
    color: #999;
    margin-left: 10px;
    margin-top: 1px;
    height: 22px;
    line-height: 22px;
    font-family: "宋体";
}
.index_banner_font_bold{
    font-weight: bold;
}
.index_banner_last_floor_middle img{
    width:230px;
}
.index_banner_last_floor_span{
    width: 100%;
    height: 10px;
    background: url(//ssl1.tuniucdn.com/img/2016052614/index_v4/index_icon.png) 0 -192px;
}
.index_banner_last_floor_span span{
    display: block;
    width: 58px;
    height: 16px;
    line-height: 18px;
    margin: 0 auto;
    color: #a9a9a9;
    font-size: 14px;
    font-weight: normal;
    text-align: center;
    font-family: "Microsoft YaHei";
    position: relative;
    top: -5px;
}
.index_banner_last_floor_bottom{
    height: 127px;
    margin: 0px 12px 0;
}
.index_banner_last_floor_left{
    width: 99px;
    border-right: 1px dotted #ddd;
    height: 127px;
    float: left;
}
.index_banner_last_floor_right{
    width: 99px;
    height: 127px;
    float: right;
}
.index_banner_last_floor_left_ex{
    display: block;
    float: left;
    width: 96px;
    height: 26px;
    line-height: 26px;
    margin-top: 8px;
    text-align: center;
    float: left;
    padding-bottom: 4px;
    padding-top: 4px;
}
.index_banner_last_floor_left_ex img{
    width: 24px;
    height: 24px;
    float: left;
    margin-right: 7px;
    position: relative;
}
.index_banner_last_floor_left_ex span{
    font-size: 12px;
    color: #656565;
    font-family: "microsoft yahei";
    float: left;
}
</style>

<template>
    <div class="index_banner">
        <div class="index_banner_background">
            <ul class="index_banner_background_wrap" ref="wrap">
                <li><a class="index_banner_pic" href="javascript:;"></a></li>
                <li><a class="index_banner_pic" href="javascript:;"></a></li>
                <li><a class="index_banner_pic" href="javascript:;"></a></li>
                <li><a class="index_banner_pic" href="javascript:;"></a></li>
                <li><a class="index_banner_pic" href="javascript:;"></a></li>
                <li><a class="index_banner_pic" href="javascript:;"></a></li>
            </ul>
            <div class="index_banner_background_content">
                <div class="index_banner_background_contentin">
                    <div class="index_banner_background_contentin_leftone">
                        <div class="index_banner_background_travel index_banner_background_combine">
                            <a href="javascript:;">
                                <i class="index_banner_background_tpic"></i>
                                度假旅游
                            </a>
                        </div>
                        <div class="index_banner_background_plane index_banner_background_combine">
                            <a href="javascript:;">
                                <i class="index_banner_background_tpic"></i>
                                机票
                            </a>
                        </div>
                        <div class="index_banner_background_hotel index_banner_background_combine">
                            <a href="javascript:;">
                                <i class="index_banner_background_tpic"></i>
                                酒店
                            </a>
                        </div>
                        <div class="index_banner_background_freedom index_banner_background_combine">
                            <a href="javascript:;">
                                <i class="index_banner_background_tpic"></i>
                                超级自由行
                            </a>
                        </div>
                        <div class="index_banner_background_train index_banner_background_combine">
                            <a href="javascript:;">
                                <i class="index_banner_background_tpic"></i>
                                火车 汽车
                            </a>
                        </div>
                        <div class="index_banner_background_boat index_banner_background_combine">
                            <a href="javascript:;">
                                <i class="index_banner_background_tpic"></i>
                                邮轮 签证
                            </a>
                        </div>
                        <div class="index_banner_background_ticket index_banner_background_combine">
                            <a href="javascript:;">
                                <i class="index_banner_background_tpic"></i>
                                门票 玩乐
                            </a>
                        </div>
                    </div>
                    <div class="index_banner_background_lefttwo">
                        <ul>
                            <li>
                                <div class="c_s_title">
                                    <a href="javascript:;">海岛</a>
                                    <a href="javascript:;">
                                        亲子
                                        <img src="../img/hot.gif" alt="">
                                    </a>
                                </div>
                                <div class="c_s_nom">
                                    <a href="javascript:;">蜜月</a>
                                    <a href="javascript:;">牛人专线</a>
                                </div>
                            </li>
                            <li>
                                <div class="c_s_title">
                                    <a href="javascript:;">杭州周边旅游</a>
                                </div>
                                <div class="c_s_nom">
                                    <a href="javascript:;">千岛湖</a>
                                    <a href="javascript:;">乌镇</a>
                                    <a href="javascript:;">普陀山</a>
                                </div>
                            </li>
                            <li>
                                <div class="c_s_title">
                                    <a href="javascript:;">境内旅游</a>
                                </div>
                                <div class="c_s_nom">
                                    <a href="javascript:;">三亚</a>
                                    <a href="javascript:;">云南</a>
                                    <a href="javascript:;">广东</a>
                                    <a href="javascript:;">广西</a>
                                </div>
                            </li>
                            <li>
                                <div class="c_s_title">
                                    <a href="javascript:;">
                                        马尔代夫
                                        <img src="../img/mysd.png" alt="">
                                    </a>
                                </div>
                                <div class="c_s_nom">
                                    <a href="javascript:;">莫凡彼岛</a>
                                    <a href="javascript:;">库拉玛提岛</a>
                                </div>
                            </li>
                            <li>
                                <div class="c_s_title">
                                    <a href="javascript:;">欧洲</a>
                                    <a href="javascript:;">
                                        美洲
                                        <img src="../img/sq.png" alt="">
                                    </a>
                                </div>
                                <div class="c_s_nom">
                                    <a href="javascript:;">瑞士</a>
                                    <a href="javascript:;">法国</a>
                                    <a href="javascript:;">美国</a>
                                    <a href="javascript:;">加拿大</a>
                                </div>
                            </li>
                            <li>
                                <div class="c_s_title">
                                    <a href="javascript:;">
                                        日本
                                        <img src="../img/huahuo.png" alt="">
                                    </a>
                                </div>
                                <div class="c_s_nom">
                                    <a href="javascript:;">东京</a>
                                    <a href="javascript:;">大阪</a>
                                    <a href="javascript:;">北海道</a>
                                    <a href="javascript:;">冲绳</a>
                                </div>
                            </li>
                            <li>
                                <div class="c_s_title">
                                    <a href="javascript:;">东南亚</a>
                                    <a href="javascript:;">南亚</a>
                                    <a href="javascript:;">泰国</a>
                                </div>
                                <div class="c_s_nom">
                                    <a href="javascript:;">普吉岛</a>
                                    <a href="javascript:;">巴厘岛</a>
                                    <a href="javascript:;">新加坡市</a>
                                </div>
                            </li>
                            <li>
                                <div class="c_s_title">
                                    <a href="javascript:;">香港</a>
                                    <a href="javascript:;">澳门</a>
                                    <a href="javascript:;">台湾</a>
                                </div>
                                <div class="c_s_nom">
                                    <a href="javascript:;">香港迪士尼乐园</a>
                                    <a href="javascript:;">台北</a>
                                </div>
                            </li>
                            <li>
                                <div class="c_s_title">
                                    <a href="javascript:;">澳新</a>
                                    <a href="javascript:;">中东非洲</a>
                                </div>
                                <div class="c_s_nom">
                                    <a href="javascript:;">新西兰</a>
                                    <a href="javascript:;">迪拜</a>
                                    <a href="javascript:;">埃及</a>
                                    <a href="javascript:;">斐济</a>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div class="index_banner_bannershow">
                        <a class="index_banner_bannershow_firstfloor" href="javascript:;">
                            <div class="index_banner_background_leftbtn" ref="left"></div>
                            <div class="index_banner_background_rightbtn" ref="right"></div>
                        </a>
                        <div class="index_banner_background_title" id="small_pointer">
                            <ul>
                                <li>
                                    <a href="javascript:;">夏一站向世界出发</a>
                                </li>
                                <li>
                                    <a href="javascript:;">哪里值得玩</a>
                                </li>
                                <li>
                                    <a href="javascript:;">当季热推</a>
                                </li>
                                <li>
                                    <a href="javascript:;">暑假游欧洲</a>
                                </li>
                                <li>
                                    <a href="javascript:;">海岛与城</a>
                                </li>
                                <li>
                                    <a href="javascript:;">亲子度假酒店榜</a>
                                </li>
                            </ul>
                        </div>
                        <div class="index_banner_bannershow_lastfloor">
                            <ul class="clear">
                                <li>
                                    <a href="javascript:;">
                                        <img src="../img/subject1.jpg" alt="">
                                    </a>
                                </li>
                                <li>
                                    <a href="javascript:;">
                                        <img src="../img/subject2.jpg" alt="">
                                    </a>
                                </li>
                                <li>
                                    <a href="javascript:;">
                                        <img src="../img/subject3.jpg" alt="">
                                    </a>
                                </li>
                                <li>
                                    <a href="javascript:;">
                                        <img src="../img/subject4.jpg" alt="">
                                    </a>
                                </li>
                                <li>
                                    <a href="javascript:;">
                                        <img src="../img/subject5.jpg" alt="">
                                    </a>
                                </li>
                                <li>
                                    <a href="javascript:;">
                                        <img src="../img/subject6.jpg" alt="">
                                    </a>
                                </li>
                                <li>
                                    <a href="javascript:;">
                                        <img src="../img/subject7.jpg" alt="">
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="index_banner_last_floor">
                        <div class="index_banner_last_floor_title clear">
                            <div class="index_banner_last_floor_title_l">
                                <span class="index_banner_last_floor_title_l_num">93</span>
                                <span class="index_banner_last_floor_title_l_pec">%</span>
                                <span class="index_banner_last_floor_title_l_txt">满意度</span>
                            </div>
                            <p class="index_banner_last_floor_title_shu">
                                出游人数：<span class="index_banner_font_bold">117200000+</span>
                            </p>
                            <p class="index_banner_last_floor_title_dianpin">
                                点评人数：<span class="index_banner_font_bold">6200000+</span>
                            </p>
                        </div>
                        <div class="index_banner_last_floor_top">
                            <div>
                                <img src="../img/jietuaaa.png" alt="">
                            </div>
                        </div>
                        <div class="index_banner_last_floor_middle">
                            <div>
                                <img src="../img/sun.png" alt="">
                            </div>
                        </div>
                        <div class="index_banner_last_floor_middle">
                            <div>
                                <a href="javascript:;">
                                    <img src="../img/waijiaobu.png" alt="">
                                </a>
                            </div>
                        </div>
                        <div class="index_banner_last_floor_span">
                            <span>出游服务</span>
                        </div>
                        <div class="index_banner_last_floor_bottom">
                            <div class="index_banner_last_floor_left">
                                <a href="javascript:;" class="index_banner_last_floor_left_ex">
                                    <img src="../img/book.png" alt="">
                                    <span>签证</span>
                                </a>
                                <a href="javascript:;" class="index_banner_last_floor_left_ex">
                                    <img src="../img/wifi.png" alt="">
                                    <span>全球WIFI</span>
                                </a>
                                <a href="javascript:;" class="index_banner_last_floor_left_ex">
                                    <img src="../img/bag.png" alt="">
                                    <span>全球购</span>
                                </a>
                            </div>
                            <div class="index_banner_last_floor_right">
                                <a href="javascript:;" class="index_banner_last_floor_left_ex">
                                    <img src="../img/local.png" alt="">
                                    <span>当地玩乐</span>
                                </a>
                                <a href="javascript:;" class="index_banner_last_floor_left_ex">
                                    <img src="../img/car.png" alt="">
                                    <span>租车用车</span>
                                </a>
                                <a href="javascript:;" class="index_banner_last_floor_left_ex">
                                    <img src="../img/ceamre.png" alt="">
                                    <span>婚纱旅拍</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { once } from 'events';
export default {
    mounted:function(){
        window.addEventListener("load",()=>{
            let oUl = this.$refs.wrap;
            let oLi = oUl.children;
            let index = 0;
            let leftbtn = this.$refs.left;
            let rightbtn = this.$refs.right;
            let title = document.getElementById("small_pointer");
            let rUl = title.getElementsByTagName("ul")[0];
            let rLi = rUl.getElementsByTagName("li"); 
                rLi = Array.prototype.slice.call(rLi,0);
            
            function bannerTo(preindex,currentindex){
                if(currentindex>5){
                    index = 0;
                }else if(currentindex<0){
                    index = 5;
                }else{
                    index = currentindex;
                }

                
                oLi[preindex].style.cssText = "opacity:0; z-index:1;transition:0.5s;";
                oLi[index].style.cssText = "opacity:1; z-index:2;transition:0.5s;";

                rLi.forEach((item,index) => {
                    let rA = item.getElementsByTagName("a")[0];
                    item.style.background = "#fff";
                    rA.style.color = "#333";
                });
                let oA = rLi[index].getElementsByTagName("a")[0];
                rLi[index].style.background = "#333";
                oA.style.color = "#fff";
            };

            leftbtn.addEventListener("click",()=>{
                bannerTo(index,index-1);
            });
            rightbtn.addEventListener("click",()=>{
                bannerTo(index,index+1);
            });
            rLi.forEach((item,yindex)=>{
                item.addEventListener("click",()=>{
                    bannerTo(index,yindex);
                })
            });

            
        })
    }
}
</script>
