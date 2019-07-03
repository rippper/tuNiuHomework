<style>
.head{
    width:1190px;
    margin:0 auto;
    position: relative;
    background:#fff;
}
.head_logo{
    float:left;
    position: relative;
}
.head_logo .head_logo_logoadd{
    width:280px;
    height:100px;
    display: block;
    background:url("../img/logoz.png");
    background-size: 100%;
}
.head_logo_address_bit{
    width:110px;
    height:26px;
    box-sizing: border-box;
    padding:4px 5px 2px 15px;
    position: absolute;
    top:28px;
    right:14px;
    border:1px solid #fff;
    z-index:9;
}
.head_logo_address_bit:hover{
    background:#fff;
    border:1px solid #ddd;
    border-bottom:1px solid #fff;
}
.head_logo_address_bit:hover .head_logo_cityselect{
    display: block;
}
.head_logo_address_bit:hover>a::after{
    transform: rotate(180deg);
}
.head_logo_address_bit:hover>a{
    color:#f60;
}
.head_logo_address_bit>a{
    padding-right:12px;
    font-size: 14px;
    color:#000;
}
.head_logo_address_bit>a::after{
    content:"";
    display:block;
    width:0;
    height:0;
    border-top:3px solid #666;
    border-right:3px solid #fff;
    border-left:3px solid #fff;
    position: absolute;
    top:45%;
    right:42px;
}
.head_logo_dooradd{ 
    width:61px;
    height:16px;
    background:url("../img/addressz.png");
    background-size: 100%;
    position: absolute;
    top:56px;
    right:49px;
}
.head_logo_cityselect{
    position: absolute;
    top:24px;
    left:-1px;
    padding-top:10px;
    padding-bottom:15px;
    background:#fff;
    border:1px solid #ddd;
    display:none;
}
.head_logo_cityselect::before{
    content:"";
    position:absolute;
    width:108px;
    height:5px;
    top:-1px;
    left:0;
    background:#fff;
}
.head_logo_innercontent h4{
    margin-bottom:5px;
    font-weight: normal;
    color:#999;
}
.head_logo_innercontent{
    margin:0 15px;
    width:470px;
}
.head_logo_hotcity li{
    float:left;
    margin-right:20px;
}
.head_logo_innercontent li a:hover{
    color:#f60;
}
.head_logo_moremodel_box li{
    height:438px;
    text-align: center;
    display:none;
}
.head_logo_moremodel_box li:first-child{
    display:block;
}
.head_logo_search{
    margin-top:10px;
    height:32px;
    box-sizing: border-box;
    border:1px solid #ddd;
    position: relative;
}
.head_logo_search input{
    width:400px;
    height:22px;
    margin:4px 30px 1px;
    outline: none;
    border:0;
}
.head_logo_moremodel_box{
    padding-top: 10px;
}
.head_logo_search i{
    position: absolute;
    top:7px;
    left:10px;
}
.head_logo_moremodel{
    padding-top:10px;
}
.head_logo_titlebox{
    height:26px;
    border-bottom:1px solid #dedede;
}
.head_logo_moremodel .head_logo_titlebox li{
    float:left;
    padding:4px 10px;
    border:1px solid #fff;
    border-top:2px solid #fff;
    border-bottom:0px;
    cursor:pointer;
}
.head_logo_moremodel ul .active{
    border:1px solid #dedede;
    border-bottom:0px;
    border-top:2px solid #f80;
    border-bottom:2px solid #fff;
    z-index: 10;
}
.head_logo_search .icon-fangdajing::before{
    color:#dedede;
}
.head_search{
    margin-top:30px;
    margin-left:10px;
    float:left;
}
.head_search_combination_left{
    width:75px;
    height:34px;
    line-height: 34px;
    background:#f8f8f8;
    padding-left:15px;
    color:#999;
    border:3px solid #f80;
    border-right:0px;
    position: relative;
    cursor:pointer;
    float:left;
}
.head_search_combination_left:hover::after{
    transform: rotate(180deg);
}
.head_search_combination_left::after{
    content:"";
    width:7px;
    height:4px;
    background:url("../img/down.jpg");
    position: absolute;
    bottom:15px;
    left:69px;
    display:block;
}
.head_search_list{
    position: absolute;
    top:34px;
    left:0;
    background:#fff;
    border-left:1px solid #efefef;
    border-bottom:1px solid #efefef;
    border-right:1px solid #efefef;
    display:none;
    z-index:13;
}
.head_search_list ul li{
    width:74px;
    height:30px;
    border-top:1px solid #efefef;
    padding-left:15px;
    line-height: 30px;
    color:#999;
}
.head_search_list ul li:first-child{
    display:none;
}
.head_search_list ul li:hover{
    background:#efefef;
    color:#333;
    cursor:pointer;
}
.head_search_combination_center{
    width:332px;
    border-top:3px solid #f80;
    border-bottom:3px solid #f80;
    float:left;
    position: relative;
}
.head_search_combination_center input{
    height:24px;
    padding:5px;
    outline:none;
    border:0px;
    width:322px;
}
.head_search_combination_center input:focus + .btn,
.head_search_combination_center input:focus + .btn + .btn{
    display:none;
}
.head_search_combination_center .btn{
    padding:2px 5px;
    display:inline-block;
    width:24px;
    height:20px;
    position: absolute;
    top:6px;
    background:#f3f3f3;
    color:#999;
    border-radius: 12px;
}
.head_search_combination_center .btn a{
    text-align: center;
    line-height: 20px;
}
.head_search_combination_center .btn a:hover{
    color:#f80;
}
.head_search_combination_center .btn1{
    right:50px;
}
.head_search_combination_center .btn2{
    right:10px;
}
.head_search_combination_right{
    float:left;
    background:#f80;
    width:67px;
    height:40px;
    line-height: 40px;
    text-align: center;
    cursor:pointer;
}
.head_search_combination_right .icon-fangdajing::before{
    color:#fff;
    font-weight: bold;
}
.head_heightsearch{
    float: left;
    margin-top:39px;
    margin-left:10px;
}
.head_heightsearch a{
    padding-right:10px;
    position: relative;
    color:#999;
}
.head_heightsearch a::after{
    content:"";
    width:0;
    height:0;
    border-top:3px solid #888;
    border-right:3px solid #fff;
    border-left:3px solid #fff;
    display:block;
    position: absolute;
    top:6px;
    right:1px;
}
.head_heightsearch_content{
    width: 662px;
    box-sizing: border-box;
    border:2px solid #f80;
    padding:15px 20px;
    position: absolute;
    top:67px;
    left:290px;
    background:#fff;
    z-index:14;
    display: none;
}
.head_heightsearch_content_title h4{
    color:#f80;
    font-size: 16px;
    padding-bottom:10px;
    border-bottom:1px solid #d8d8d8;
    font-weight: normal;
    font-family: "Hiragino Sans GB",Tahoma,arial,宋体,sans-serif;
    height:24px;
    line-height: 24px;
    position: relative;
}
.head_heightsearch_content_title h4 .iconfont{
    position: absolute;
    top:-4px;
    right:0;
    font-size: 12px;
    color:#000;
    cursor: pointer;
}
.head_heightsearch_content_title .iconfont::before{
    font-weight: 800;
}
.head_heightsearch_content_title .iconfont:hover::before{
    color:#f80;
}
.head_moreinfor dl{
    padding:6px 0 3px;
}
.head_moreinfor dl dt{
    float:left;
    width:70px;
    height:24px;
    padding:5px 0 6px;
    line-height: 24px;
    color:#333;
    font-weight: bold;
}
.head_moreinfor dl dd{
    float:left;
    width:540px;
    padding:5px 0 5px;
}
.head_moreinfor dl dd:first-of-type input{
    width:198px;
    height:14px;
    padding:6px 10px 5px;
    outline:none;
    line-height: 14px;
    color:#aaa;
    border:1px solid #cecece;
}
.before_words_bits{
    width:11px;
    height:11px;
    margin-right:4px;
    border:1px solid #ddd;
    vertical-align: midele;
    display: inline-block;
    background:#fff;
}
.head_moreinfor dl dd{
    position: relative;
}
.head_moreinfor dl dd div{
    float:left;
}
.head_moreinfor dl dd>div:nth-of-type(2){
    width:490px;
    height:25px;
    overflow: hidden;
}
.head_moreinfor dl dd>div:first-of-type{
    display: block;
    width:39px;
    height:23px;
    line-height: 23px;
    text-align: center;
    background:#f80;
    color:#fff;
    margin-right:11px;
    cursor:pointer;
}
.head_moreinfor dl dd>div:nth-of-type(2) div{
    display: inline-block;
    height:14px;
    padding:4px 13px 4px 12px;
    line-height: 14px;
    margin:0 5px 5px 0;
    cursor:pointer;
    font-size: 12px;
}
.head_moreinfor dl dd>div:nth-of-type(2) div span{
    float:left;
}
.head_moreinfor dl dd>div:nth-of-type(2) div i{
    float:left;
}
.head_moreinfor dl dd>div:nth-of-type(2) div:hover{
    color:#f80;
}
.head_moreinfor_more{
    position: absolute;
    top:0;
    right:-28px;
    padding:7px 0;
    cursor:pointer;
}
.head_moreinfor_more .iconfont::before{
    font-size: 12px;
}
.head_moreinfor_more .iconfont{
    float:left;
    position: relative;
    transform: rotate(180deg);
}
.head_moreinfor_more span{
    float:left;
}
.head_moreinfor_moreinfor{
    margin-top:30px;
    width:618px;
}
.head_showallbtn{
    border-top:1px solid #eee;
    margin-top:20px;
}
.head_showallbtn_center{
    position: relative;
    width:340px;
    height:7px;
    border:1px solid #e7e7e7;
    margin:0 auto;
    box-shadow:0 2px 2px #eaeaea;
}
.head_showallbtn_box{
    position: absolute;
    top:-15px;
    left:0;
    width:340px;
    height:22px;
    text-align:center;
    background:#fff;
    cursor: pointer;
}
.head_showallbtn_center a{
    font: 400 12px/20px "Microsoft YaHei";
    z-index: 10;
    color:#2e9700;
}
.head_showallbtn_center:hover a{
    color: #f80;
}
.head_showallbtn_center:hover i{
    color: #f80;
}
.head_showallbtn_center i::before{
    font-size: 12px;
}
.head_showallbtn_center i{
    position: relative;
    display: inline-block;
    color:#2e9700;
}
.head_moreinfor_condition{
    width:640px;
    overflow: hidden;
    height:0;
}
.head_search_btnpart{
    margin-top:20px;
    text-align: center;
    line-height: 40px;
}
.head_search_btnpart .head_search_btnpart_btn{
    width: 130px;
    height: 40px;
    background-color: #ff9419;
    border-radius: 2px;
    border: none;
    line-height: 40px;
    text-align: center;
    color: #fff;
    font-size: 18px;
    cursor: pointer;
}
.head_search_btnpart a{
    padding-left:10px;
    color: #2e9900;
}
.head_search_btnpart a:hover{
    color:#f80;
}
.head_rightpart{
    float:right;
    margin-top:6px;
    background:url(../img/headrightbackz.png) 100% no-repeat;
    background-position: 0 27px;
    position: relative;
}
.head_rightpart:hover .head_rightpart_centerword div::after{
    transform: rotate(180deg);
}
.head_rightpart:hover .head_rightpart_dark{
    display:block;
}
.head_rightpart_honest{
    display: inline-block;
}
.head_rightpart_honest img{
    width:28px;
    height: 28px;
    margin-right: 3px;
    margin-top: 4px;
}
.head_rightpart_honest>span{
    color: #9c9ba5;
    display:inline-block;
    font-size: 11px;
    width:48px;
}
.head_rightpart_honest>span span{
    color:#22c233;
}
.head_rightpart_center{
    display: inline-block;
    margin-top:40px;
}
.head_rightpart_centerword{
    display: inline-block;
}
.head_rightpart_centerword div{
    font-size: 11px;
    color:#999;
}
.head_rightpart_centerword div::after{
    content:"";
    width:0;
    height:0;
    display: inline-block;
    border-top:3px solid #f80;
    border-left:3px solid rgba(255,255,255,0);
    border-right:3px solid rgba(255,255,255,0);
    position: relative;
    bottom:5px;
}
.head_rightpart_centerword p{
    font-weight: bold;
    font-size: 12px;
    color:#f80;
}
.head_rightpart_sb{
    float:right;
    width:78px;
    height:77px;
}
.head_rightpart_dark{
    padding:5px 10px;
    position: absolute;
    left:56px;
    top:77px;
    display: none;
    box-shadow: 0 1px 3px 1px #efefef;
    background:#fff;
    z-index: 10;
}
.head_rightpart_dark::before{
    content: "";
    display: block;
    width:10px;
    height:10px;
    transform: rotate(45deg);
    background:#fff;
    position: absolute;
    top:-5px;
    left:50%;
    margin-left:-5px;
}
.head_rightpart_dark>span{
    display: inline-block;
    font-size: 12px;
    color: #666;
    text-align: left;
    line-height: 22px;
}
</style>

<template>
    <div class="head clear">
        <div class="head_logo">
            <a class="head_logo_logoadd" href="javascript:;"></a>
            <div class="head_logo_address_bit">
                <a href="javascript:;">杭州站</a>
                <div class="head_logo_cityselect">
                    <div class="head_logo_innercontent">
                        <h4>热门城市</h4>
                        <ul class="head_logo_hotcity clear">
                            <li v-for="(item,index) in city" :key="index">
                                <a href="javascript:;" v-text="item"></a>
                            </li>
                        </ul>
                        <div class="head_logo_search">
                            <i class="iconfont icon-fangdajing"></i>
                            <input type="text" placeholder="搜索城市（支持汉字、拼音和首字母查询）" @focus="search" @blur="leave">
                        </div>
                        <div class="head_logo_moremodel">
                            <ul class="head_logo_titlebox clear">
                                <li class="active" @click="choise(0)">ABCDE</li>
                                <li @click="choise(1)">FGHJ</li>
                                <li @click="choise(2)">KLMNP</li>
                                <li @click="choise(3)">QRSTW</li>
                                <li @click="choise(4)">XYZ</li>
                            </ul>
                            <ul class="head_logo_moremodel_box">
                                <li><h1>A-E的城市</h1></li>
                                <li><h1>F-J的城市</h1></li>
                                <li><h1>K-P的城市</h1></li>
                                <li><h1>Q-W的城市</h1></li>
                                <li><h1>X-Z的城市</h1></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <a href="javascript:;"><div class="head_logo_dooradd"></div></a>
        </div>
        <div class="head_search">
            <div class="head_search_combination clear">
                <div class="head_search_combination_left" @mouseenter="listhover" @mouseleave="listleave">
                    <span id="bechoise">所有产品</span>
                    <div class="head_search_list">
                        <ul class="clear" id="head_search_list_content">
                            <li v-for="(item,index) in list" :key="index" v-text="item" @click="select(index)"
                            ></li>
                        </ul>
                    </div>
                </div>
                <div class="head_search_combination_center">
                    <input type="text" placeholder="日本">
                    <span class="btn btn1"><a href="javascript:;">欧洲</a></span>
                    <span class="btn btn2"><a href="javascript:;">三亚</a></span>
                </div>
                <div class="head_search_combination_right">
                    <i class="iconfont icon-fangdajing"></i>
                </div>
            </div>
        </div>
        <div class="head_out_control" v-click-outside="onClickOutside">
            <div class="head_heightsearch">
                <a href="javascript:;" @click="open">高级搜索</a>
            </div>
            <div class="head_heightsearch_content" ref="mainBox">
                <div class="head_heightsearch_content_title">
                    <h4>
                        基本条件
                        <i class="iconfont icon-chacha" @click="close"></i>
                    </h4>
                    <div class="head_moreinfor">
                        <dl class="clear">
                            <dt>关键字</dt>
                            <dd><input type="text" placeholder="请输入目的地、主题或关键词"></dd>
                        </dl>
                        <dl class="clear head_moreinfor_beselect">
                            <dt>类型</dt>
                            <dd>
                                <div class="head_moreinfor_unlimited" @click="unlimited(0)">
                                    不限
                                </div>
                                <div class="head_formore_choise">
                                    <div class="clear" v-for="(item,index) in type" :key="index" @click="morechoise(0,index)">
                                        <i class="before_words_bits"></i>
                                        <span v-text="item"></span>
                                    </div>
                                </div>
                                <div class="head_moreinfor_more clear" @click="allmsg(0,0)">
                                    <span>更多</span>
                                    <i class="iconfont icon-xiangshang"></i>
                                </div>
                            </dd>
                        </dl>
                        <dl class="clear head_moreinfor_beselect">
                            <dt>行程天数</dt>
                            <dd>
                                <div class="head_moreinfor_unlimited" @click="unlimited(1)">
                                    不限
                                </div>
                                <div class="head_formore_choise">
                                    <div class="clear" v-for="(item,index) in day" :key="index" @click="morechoise(1,index)">
                                        <i class="before_words_bits"></i>
                                        <span v-text="item"></span>
                                    </div>
                                </div>
                                <div class="head_moreinfor_more clear" @click="allmsg(1,1)">
                                    <span>更多</span>
                                    <i class="iconfont icon-xiangshang"></i>
                                </div>
                            </dd>
                        </dl>
                        <dl class="clear">
                            <dt>价格区间</dt>
                            <dd>
                                <span>
                                    <span>￥</span>
                                    <input type="text">
                                </span>
                                <span>-</span>
                                <span>
                                    <span>￥</span>
                                    <input type="text">
                                </span>
                            </dd>
                        </dl>
                        <div class="head_moreinfor_condition" ref="condition">
                            <h4 class="head_moreinfor_moreinfor">
                            更多条件
                            </h4>
                            <dl class="clear head_moreinfor_beselect">
                                <dt>交通类型</dt>
                                <dd>
                                    <div class="head_moreinfor_unlimited" @click="unlimited(2)">
                                        不限
                                    </div>
                                    <div class="head_formore_choise">
                                        <div class="clear" v-for="(item,index) in transition" :key="index" @click="morechoise(2,index)">
                                            <i class="before_words_bits"></i>
                                            <span v-text="item"></span>
                                        </div>
                                    </div>
                                    <div class="head_moreinfor_more clear" @click="allmsg(2,2)">
                                        <span>更多</span>
                                        <i class="iconfont icon-xiangshang"></i>
                                    </div>
                                </dd>
                            </dl>
                            <dl class="clear head_moreinfor_beselect">
                                <dt>产品特色</dt>
                                <dd>
                                    <div class="head_moreinfor_unlimited" @click="unlimited(3)">
                                        不限
                                    </div>
                                    <div class="head_formore_choise">
                                        <div class="clear" v-for="(item,index) in feature" :key="index" @click="morechoise(3,index)">
                                            <i class="before_words_bits"></i>
                                            <span v-text="item"></span>
                                        </div>
                                    </div>
                                    <div class="head_moreinfor_more clear" @click="allmsg(3,3)">
                                        <span>更多</span>
                                        <i class="iconfont icon-xiangshang"></i>
                                    </div>
                                </dd>
                            </dl>
                            <dl class="clear head_moreinfor_beselect">
                                <dt>组团特色</dt>
                                <dd>
                                    <div class="head_moreinfor_unlimited" @click="unlimited(4)">
                                        不限
                                    </div>
                                    <div class="head_formore_choise">
                                        <div class="clear" v-for="(item,index) in featureGroup" :key="index" @click="morechoise(4,index)">
                                            <i class="before_words_bits"></i>
                                            <span v-text="item"></span>
                                        </div>
                                    </div>
                                </dd>
                            </dl>
                            <dl class="clear head_moreinfor_beselect">
                                <dt>线路玩法</dt>
                                <dd>
                                    <div class="head_moreinfor_unlimited" @click="unlimited(5)">
                                        不限
                                    </div>
                                    <div class="head_formore_choise">
                                        <div class="clear" v-for="(item,index) in playLine" :key="index" @click="morechoise(5,index)">
                                            <i class="before_words_bits"></i>
                                            <span v-text="item"></span>
                                        </div>
                                    </div>
                                    <div class="head_moreinfor_more clear" @click="allmsg(5,4)">
                                        <span>更多</span>
                                        <i class="iconfont icon-xiangshang"></i>
                                    </div>
                                </dd>
                            </dl>
                            <dl class="clear head_moreinfor_beselect">
                                <dt>住宿类型</dt>
                                <dd>
                                    <div class="head_moreinfor_unlimited" @click="unlimited(6)">
                                        不限
                                    </div>
                                    <div class="head_formore_choise">
                                        <div class="clear" v-for="(item,index) in livePlace" :key="index" @click="morechoise(6,index)">
                                            <i class="before_words_bits"></i>
                                            <span v-text="item"></span>
                                        </div>
                                    </div>
                                    <div class="head_moreinfor_more clear" @click="allmsg(6,5)">
                                        <span>更多</span>
                                        <i class="iconfont icon-xiangshang"></i>
                                    </div>
                                </dd>
                            </dl>
                            <dl class="clear head_moreinfor_beselect">
                                <dt>酒店位置</dt>
                                <dd>
                                    <div class="head_moreinfor_unlimited" @click="unlimited(7)">
                                        不限
                                    </div>
                                    <div class="head_formore_choise">
                                        <div class="clear" v-for="(item,index) in hotelLocal" :key="index" @click="morechoise(7,index)">
                                            <i class="before_words_bits"></i>
                                            <span v-text="item"></span>
                                        </div>
                                    </div>
                                    <div class="head_moreinfor_more clear" @click="allmsg(7,6)">
                                        <span>更多</span>
                                        <i class="iconfont icon-xiangshang"></i>
                                    </div>
                                </dd>
                            </dl>
                            <dl class="clear head_moreinfor_beselect">
                                <dt>酒店品牌</dt>
                                <dd>
                                    <div class="head_moreinfor_unlimited" @click="unlimited(8)">
                                        不限
                                    </div>
                                    <div class="head_formore_choise">
                                        <div class="clear" v-for="(item,index) in hotelBrand" :key="index" @click="morechoise(8,index)">
                                            <i class="before_words_bits"></i>
                                            <span v-text="item"></span>
                                        </div>
                                    </div>
                                    <div class="head_moreinfor_more clear" @click="allmsg(8,7)">
                                        <span>更多</span>
                                        <i class="iconfont icon-xiangshang"></i>
                                    </div>
                                </dd>
                            </dl>
                            <dl class="clear head_moreinfor_beselect">
                                <dt>含餐</dt>
                                <dd>
                                    <div class="head_moreinfor_unlimited" @click="unlimited(9)">
                                        不限
                                    </div>
                                    <div class="head_formore_choise">
                                        <div class="clear" v-for="(item,index) in eat" :key="index" @click="morechoise(9,index)">
                                            <i class="before_words_bits"></i>
                                            <span v-text="item"></span>
                                        </div>
                                    </div>
                                </dd>
                            </dl>
                        </div>
                    </div>
                    <div class="head_showallbtn">
                        <div class="head_showallbtn_center">
                            <div class="head_showallbtn_box clear" @click="zoom" >
                                <a href="javascript:;" ref="moreClick">
                                    更多条件(交通类型、住宿类型、组团特色、产品特色)
                                </a>
                                <i class="iconfont icon-down" id="superbit" ref="upDown"></i>
                            </div>
                        </div>
                    </div>
                    <div class="head_search_btnpart">
                        <input class="head_search_btnpart_btn" type="button" value="搜索">
                        <a href="javascript:;" @click="clearall">清空搜索条件</a>
                    </div>
                </div>
            </div>
        </div>
        <div class="head_rightpart clear">
            <a class="head_rightpart_honest" href="javascript:;">
                <img src="../img/seriverz.png" alt="">
                <span>欢迎使用<span>在线客服</span></span>
            </a>
            <div class="head_rightpart_center">
                <img src="../img/telz.png" alt="">
                <div class="head_rightpart_centerword">
                    <div>
                        24h客户服务电话
                    </div>
                    <p>4007-999-999</p>
                </div>
            </div>
            <img class="head_rightpart_sb" src="../img/linz.png" alt="">
            <div class="head_rightpart_dark">
                <span>
                    国内：
                    <span>4007-999-999</span><br>
                    国外：
                    <span>+0086-25-8685-9999</span>

                </span>
            </div>
        </div>
    </div>
</template>

<script>
import { setInterval, clearInterval } from 'timers';
export default {
    data(){
        return  {
            city:["北京","南京","上海","杭州","苏州","天津","深圳","无锡","成都","重庆","武汉","沈阳","宁波","广州","西安","郑州"],
            list:["所有产品","跟团游","自由行","邮轮","门票","自驾游","当地参团","当地玩乐","签证","酒店","旅拍","定制包团"],
            type:["跟团游","自由行","门票","当地参团","当地玩乐","邮轮","自驾游","酒店","定制包团","旅拍"],
            day:["1天","2天","3天","4天","5天","6天","7天","8天","9天","10天","11天","12天","13 天","14天","15天","16天","17天","18天","19天","20天","21天","22天","23天","24天","25天","26天","27天","28天","29天","30天","31天","32天","33天","34天","35天","36天","38天","52天","62天","90天","100天","110天","115天"],
            transition:["直飞往返","高铁/动车往返","包车自由行","巴士自由行","飞机+火车往返","飞机","汽车","火车","火车往返"],
            feature:["纯玩无购物","有自由活动","无自费","免费WiFi","一岛一酒店","机场接/送","中文服务","支持儿童入住","儿童俱乐部","免费浮潜装备","私人泳池","马累VIP候机室","半自动","管家服务","婚纱摄影/婚礼服务","无边泳池","可异地按指纹","香港转机","拖尾沙滩","公务舱","水下餐厅","超值景点联票"],
            featureGroup:["私家团(1单1团)","小团出游(10人左右)","精致小团(4-8人)"],
            playLine:["昆明+大理+丽江","台湾环岛","三亚一地","北京一地","昆大丽+香格里拉","丽江+大理+香格里拉+泸沽湖","马尔代夫一地","精品小团","丽江+大理+香格里拉","美国西海岸","丽江+大理+泸沽湖","丽江+大理","云南全景","青岛一地","厦门+鼓浪屿","西双版纳一地","昆明+大理+丽江+泸沽湖","昆大丽+西双版纳","曼谷+芭提雅","桂林+阳朔","丽江+泸沽湖","美国东海岸","巴厘岛一地","丽江+香格里拉","昆明+大理+丽江+香格里拉+西双版纳","马尔代夫+香港","恩施一地","俄罗斯一地","西海岸+黄石公园","昆明+大理+丽江+香格里拉+泸沽湖+西双版纳","香港一地","张家界+天门山+凤凰古城","马尔代夫+迪拜","英国一地/英国连线","昆明+大理+丽江+泸沽湖+西双版纳","西北环线","欧洲多国连线","普吉岛一地","普陀山一地","一国深度","港澳两地","马尔代夫+新加坡","沙巴一地","成都+峨眉山+乐山","庐山一地","天津一地","丽江+香格里拉+泸沽湖","上海一地","丽江一地","北欧系列","昆明+西双版纳","东欧系列","东京一地","贵阳+黄果树+西江+荔坡","拉萨+林芝","苏州一地","新加坡一地","邮轮+日本两地","大连一地","澳大利亚一地","甘肃+青海","昆明一地","重庆一地","杭州一地","摩洛哥一地","黄山一地","北京+天津","土耳其一地","遇难芽庄一地","三亚+海口","厦门一地","西班牙一地/西班牙连线","大理一地","长沙+张家界+凤凰古城","清迈一地","三亚一地+全程品牌五星酒店","成都一地","毛里求斯一地","丽江及周边连线","加拿大一地","张家界一地","港澳两地+香港海洋公园","邮轮+日本一地","德国+法国+瑞士+意大利全含","千岛湖一地","杭州+乌镇","两国深度","苏州+周庄","北疆","台北+高雄+垦丁","济南+泰山+曲阜","南京一地","苏梅岛一地","大阪一地","青岛+崂山","兵马俑+华清池","无锡一地","普吉岛+PP岛","台湾西环线","呼伦贝尔草原+满洲里+额尔古纳+呼伦湖"],
            livePlace:["别墅","双酒店体验","多酒店体验","公寓","民宿","度假村","亲自酒店","蜜月酒店","特色酒店","高端度假酒店","海景酒店","主题酒店","特色客栈","房车","温泉酒店","精选推荐"],
            hotelLocal:["近景点/景区内","近市区","近购物中心","近绿地","近车站","近地铁","海滨/近海滩","近机场","丽江+大理","泸沽湖","昆明","香格里拉","丽江古城","丽江+香格里拉","丽江+泸沽湖","大理古城","束河古镇","景洪市","厦门市区","昆明+丽江","尖沙咀","九龙","铜锣湾","三亚湾区域","旺角","香港岛","油麻地","九龙半岛","湾仔","中环","古城南门区域","新加坡市区","西双版纳+丽江","桂林+阳朔","四方街区域","迪士尼乐园","上环","西环","佐敦","北角","金钟","中山路、轮渡去","芭东海滩","圣淘沙","丽江新城","香港机场","亚龙湾区域","大小东海区域","桂林市区","海棠湾区域","大小东海区域","桂林市区","海棠湾区域","阳朔","双廊","换到路风景区","新界","白鹭洲风景区","西部海岸","鼓浪屿","塞班岛","大研+束河","厦门+鼓浪屿","阳朔西街","东部海岸","市区酒店","木府区域","三亚市区","努沙杜瓦区","湖里商业区","北部海岸","鼓浪屿风景区","中山区","曾厝垵区","Mamanuca群岛","卡伦海滩","北海+涠洲岛","库塔区","金巴兰","腾冲+瑞丽","五一街区域","大水车区域","海口","卡塔海滩","漓江","春熙路/大慈寺商业区","南部海岸","西岗区","心斋桥/道顿堀","厦门大学","乌布","札幌","腾冲县","和顺古镇","波拉波拉岛","2号码头","万达度假区","乌鲁瓦图","民丹岛","马埃岛"],
            hotelBrand:["希尔顿","喜来登","洲际集团","万豪","皇冠假日","豪生","香格里拉酒店","铂尔曼","温德姆","凯悦","悦榕集团Banyan Tree","华美达","花间堂","环球集团Universal","红树林度假世界","悦泰酒店","亚特兰蒂斯酒店","维景","丽思卡尔顿酒店","四季","凯宾斯基","艾登尼兹集团Aydeniz","美高梅独家酒店","诺富特酒店","卓美亚集团","森塔拉集团Centara","三亚康年酒店","安纳塔拉集团","七星帆船酒店","地中海俱乐部集团Club Med","假日酒店集团Holiday Inn","莉莉","鲁滨逊俱乐部酒店集团","海立方度假酒店","SUN SIYAM酒店集团","JA酒店集团","马尔代夫丽世度假村","英迪格","都喜集团Dusit","喜达屋集团","美居酒店","瑞吉","氛围度假酒店集团(Atmosphere)","第六感集团Six Senses","亚龙湾天域度假酒店","万达文华","SUN集团","Fairmont酒店","威斯汀","阿达兰集团Adaaran","康斯丹集团Constance","贝安琪集团Per Aquum","BC集团","君悦酒店","银泰","卡诺亚主楼","哈发黛主楼","哈发黛水晶楼","卡诺亚高楼","阿雅娜度假村","世纪金源","Constance集团","哈发黛塔加楼（TAGA）","ONYX集团","索菲特","唯一集团","索尼娃集团Soneva","华宇"," 盛嘉隆酒店及度假村集团","椰林精选集团Coco","Collection","珍珠集团","Matamanoa度假村","LVMH集团(酩悦·轩尼诗-路易·威登集团)","查亚集团Chaaya","太阳旅游集团Sun Travel","途家斯维登"," 三亚湾天通建国度假酒店","三亚阳光大酒店","世界酒店","大卫传奇","戴斯","太阳城集团","丝绸麦哲伦酒店","Mana度假村","肯辛顿酒店","塞班海景酒店（OV）","维拉集团Villa","3A","清泉酒店","玉海国际","泰姬集团","玛丽安娜酒店","哈曼","总督集团Viceroy","半岛酒店","文华东方","查兰卡诺亚","珊瑚海洋酒店（COP）","元明酒店","广场酒店"],
            eat:["早晚餐","一价全含","早餐","早中晚餐"],
            boxHeight:"417px"
        }
    },
    mounted:function(){
        
    },
    methods:{
        search(){
            let outbox = document.getElementsByClassName("head_logo_search")[0];
            outbox.style.border = "1px solid #888";
        },
        leave(){
            let outbox = document.getElementsByClassName("head_logo_search")[0];
            outbox.style.border = "1px solid #ddd";
        },
        choise(num){
            let oUl = document.getElementsByClassName("head_logo_titlebox")[0];
            let oUlinner = document.getElementsByClassName("head_logo_moremodel_box")[0];
            let oLi = oUl.getElementsByTagName("li");
                oLi = Array.prototype.slice.call(oLi,0);
            let oLiInner = oUlinner.getElementsByTagName("li");
                oLiInner = Array.prototype.slice.call(oLiInner,0);
                oLi.forEach((item,index) => {
                    item.className = "";
                });
                oLi[num].className = "active";

                oLiInner.forEach((item,index) => {
                    item.style.display = "none";
                })
                oLiInner[num].style.display = "block";
        },
        select(keier){
            let oUl = document.getElementById("head_search_list_content");
            let rUl = document.getElementsByClassName("head_search_list")[0];
            let bechoise = document.getElementById("bechoise");
            let oLi = oUl.getElementsByTagName("li");
                oLi = Array.prototype.slice.call(oLi,0);
            oLi.forEach((item,index) => {
                item.style.display = "block";
            })
            oLi[keier].style.display = "none";
            bechoise.innerText = oLi[keier].innerText;
            rUl.style.display = "none";
        },
        listhover(){
            let oUl = document.getElementsByClassName("head_search_list")[0];
            oUl.style.display = "block";
        },
        listleave(){
            let oUl = document.getElementsByClassName("head_search_list")[0];
            oUl.style.display = "none";
        },
        morechoise(lis,num){
            let oDiv = document.getElementsByClassName("head_formore_choise")[lis];
            let mDiv = oDiv.getElementsByTagName("div");
                mDiv = Array.prototype.slice.call(mDiv,0);
            let blackBox = oDiv.getElementsByClassName("before_words_bits");
                blackBox = Array.prototype.slice.call(blackBox,0);
            let unlimited = document.getElementsByClassName("head_moreinfor_unlimited")[lis];

            unlimited.style.cssText = "background:#fff; color:#666;"

            if(mDiv[num].style.background == "rgb(255, 136, 0)"){
                mDiv[num].style.cssText = "";
                blackBox[num].style.cssText = "";
            }else{
                mDiv[num].style.cssText = "background:#f80;color:#fff;"
                blackBox[num].style.cssText = "background:url('src/img/spirit2z.png') -32px -89px no-repeat;background-color:#fff;"
            }
        },
        unlimited(num){
            let oDiv = document.getElementsByClassName("head_formore_choise")[num];
            let mDiv = oDiv.getElementsByTagName("div");
            let blackBox = oDiv.getElementsByClassName("before_words_bits");
                blackBox = Array.prototype.slice.call(blackBox,0);
                mDiv = Array.prototype.slice.call(mDiv,0);
            let unlimited = document.getElementsByClassName("head_moreinfor_unlimited")[num];

            unlimited.style.cssText = "";
            mDiv.forEach((item,index)=>{
                item.style = "";
            });
            blackBox.forEach((item,index)=>{
                item.style = "";
            })
        },
        allmsg(index,index2){
            let oDiv = document.getElementsByClassName("head_formore_choise")[index];
            let bDiv = document.getElementsByClassName("head_moreinfor_more")[index2];
            let down = bDiv.getElementsByClassName("iconfont")[0];
            let inmsg = bDiv.getElementsByTagName("span")[0];
            if(oDiv.style.height){
                if(oDiv.style.height != "25px"){
                    oDiv.style.height = "25px";
                    down.style.cssText = "transform:rotate(180deg);bottom:0;";
                    inmsg.innerText = "更多";
                }else{
                    oDiv.style.height = "auto";
                    down.style.cssText = "transform:rotate(0deg);bottom:3px;";
                    inmsg.innerText = "收起";
                }
            }else{
                oDiv.style.height = "auto";
                down.style.cssText = "transform:rotate(0deg);bottom:3px;";
                inmsg.innerText = "收起";
            }
        },
        zoom(){
            let ex = window.getComputedStyle(this.$refs.condition,null);
            let attr = ex.height;
            let timer = null;
            let that = this;
            let bug = document.getElementById("superbit");
            if(that.boxHeight == "0px"){
                that.boxHeight = attr;
                timer = setInterval(()=>{
                    let attr = ex.height;
                    let speed = parseInt(attr)/10;
                    speed=speed>0?Math.ceil(speed):Math.floor(speed);
                    if(attr == "0px"){
                        clearInterval(timer);
                    }else{
                        that.$refs.condition.style["height"] = parseInt(attr) - speed + 'px';
                    }
                },10);
                that.$refs.moreClick.innerText = "更多条件(交通类型、住宿类型、组团特色、产品特色) "
                bug.style = "";
            }else{
                timer = setInterval(()=>{
                    let attr = that.boxHeight;
                    let change = ex.height;
                    let speed = (parseInt(attr) - parseInt(change))/10;
                    speed=speed>0?Math.ceil(speed):Math.floor(speed);
                    if(change == that.boxHeight){
                        clearInterval(timer);
                        that.boxHeight = "0px";
                        that.$refs.condition.style["height"] = "auto";
                    }else{
                        that.$refs.condition.style["height"] = parseInt(change) + speed + 'px';
                    }
                },15);
                that.$refs.moreClick.innerText = "收起更多 " 
                bug.style.cssText = "transform:rotate(180deg);top:3px;"
            }
        },
        clearall(){
            let oUl = document.getElementsByClassName("head_moreinfor_beselect");
                oUl = Array.prototype.slice.call(oUl,0);

            oUl.forEach((item,index)=>{
                let unlimited = item.getElementsByClassName("head_moreinfor_unlimited")[0];
                let rUl = item.getElementsByClassName("head_formore_choise")[0];
                let rLi = rUl.getElementsByTagName("div");
                    rLi = Array.prototype.slice.call(rLi,0);
                    unlimited.style.cssText = 'background:#f80;color:#fff;'
                rLi.forEach((item,index)=>{
                    let sI = item.getElementsByTagName("i")[0];
                    item.style = "";
                    sI.style = "";
                })
            })
        },
        close(){
            this.$refs.mainBox.style.display = "none";
        },
        onClickOutside(){
            this.$refs.mainBox.style.display = "none";
        },
        open(){
            this.$refs.mainBox.style.display = "block";
        }
    }
}
</script>


