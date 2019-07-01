<style>
.head{
    width:1190px;
    margin:0 auto;
    position: relative;
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
.btn{
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
.btn a{
    text-align: center;
    line-height: 20px;
}
.btn a:hover{
    color:#f80;
}
.btn1{
    right:50px;
}
.btn2{
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
    width: 622px;
    box-sizing: border-box;
    border:2px solid #f80;
    padding:15px 20px;
    position: absolute;
    top:67px;
    left:290px;
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
}
.head_heightsearch_content_title .iconfont{
    position: absolute;
    top:0;
    right:0;
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
        <div class="head_heightsearch">
            <a href="javascript:;">高级搜索</a>
        </div>
        <div class="head_heightsearch_content">
            <div class="head_heightsearch_content_title">
                <h4>
                    基本条件
                    <i class="iconfont icon-chacha"></i>
                </h4>
                
            </div>

        </div>
    </div>
</template>

<script>
export default {
    data(){
        return  {
            city:["北京","南京","上海","杭州","苏州","天津","深圳","无锡","成都","重庆","武汉","沈阳","宁波","广州","西安","郑州"],
            list:["所有产品","跟团游","自由行","邮轮","门票","自驾游","当地参团","当地玩乐","签证","酒店","旅拍","定制包团"]
        }
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
        }
    }
}
</script>


