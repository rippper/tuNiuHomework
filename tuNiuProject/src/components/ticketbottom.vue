<style>
.bottom{
         width: 100%;
    height: auto;
    background: #eaeaea;
    padding-top: 30px;
    padding-bottom: 30px;
 }
 body{
         font-size: 12px;
    line-height: 1.5;
    font-family: "Hiragino Sans GB",Tahoma,arial,宋体,sans-serif;
    color: #404040;
    text-align: left;
    margin: 0 ;
    width: 100%;
    position: relative;
 }
.classify {
    width: 1190px;
    height: 36px;
    border-bottom: 1px solid #d4d4d4;
    color: #999;
    font: bold 14px/35px microsoft yahei;
    margin: 10px auto;
    
}
.classify span{
    line-height: 32px;
}
.maintitle{
    width: 1190px;
    height: auto;
    margin: 5px auto;
    
}
.maintitle a{
    margin-right: 13px;
    margin-top: 5px;
    

    
}

</style>
<template>
 <div class="bottom">
<div class="classify">
    <span>所有门票主题分类</span>
</div>
<div class="maintitle">
<a  v-for="(item,index) in ifyList" :key="index" v-text="item.fuc"></a>
</div>
<div class="classify">
<span>热门省(直辖市)门票</span>
</div>
<div class="maintitle">
<a v-for="(item,index) in snList" :key="index" v-text="item.fun"></a>
</div>
<div class="classify">
<span>热门城市门票</span>
</div>
<div class="maintitle">
<a  v-for="(item,index) in csList" :key="index" v-text="item.fug"></a>
</div>

 </div>

</template>
<script>
export default {
    data:function () {
        return {
            ifyList:[
                {fuc:"温泉"},{fuc:"滑雪"},{fuc:"浪漫圣诞"},{fuc:"名胜风光"},{fuc:"境外精选"},
                {fuc:"电话WIFI"},{fuc:"赏花田园"},{fuc:"古镇园林"},{fuc:"主题乐园"},{fuc:"家庭亲子"},
                {fuc:"演出表演"},{fuc:"城市生活"},{fuc:"拜佛祈福"},{fuc:"元旦"},{fuc:"节假日旅游胜地"},
                {fuc:"万圣狂欢"}
            ],
            snList:[
                {fun:"北京"},{fun:"上海"},{fun:"香港"},{fun:"贵州"},{fun:"台湾"},{fun:"西藏"},
                {fun:"天津"},{fun:"陕西"},{fun:"云南"},{fun:"河南"},{fun:"山西"},{fun:"湖南"},
                {fun:"四川"},{fun:"宁夏"},{fun:"安徽"},{fun:"重庆"},{fun:"山东"},{fun:"江苏"},
                {fun:"广西"},{fun:"江西"},{fun:"河北"},{fun:"吉林"},{fun:"浙江"},{fun:"湖北"},
                {fun:"福建"},{fun:"广东"},{fun:"辽宁"}
            ],
            csList:[
                {fug:"大连"},{fug:"大连"},{fug:"大连"},{fug:"大连"},{fug:"大连"},{fug:"大连"},
                {fug:"大连"},{fug:"大连"},{fug:"大连"},{fug:"大连"},{fug:"大连"},{fug:"大连"},
                {fug:"大连"},{fug:"大连"},{fug:"大连"},{fug:"大连"},{fug:"大连"},{fug:"大连"},
                {fug:"大连"},{fug:"大连"},{fug:"大连"},{fug:"大连"},{fug:"大连"},{fug:"大连"},
                {fug:"大连"},{fug:"大连"},{fug:"大连"},{fug:"大连"},{fug:"大连"},{fug:"大连"},
                {fug:"大连"},{fug:"大连"},{fug:"大连"},{fug:"大连"},{fug:"大连"},{fug:"大连"},
                {fug:"大连"},{fug:"大连"},{fug:"大连"},{fug:"大连"},{fug:"大连"},{fug:"大连"},
                {fug:"大连"},{fug:"大连"},{fug:"大连"},{fug:"大连"},{fug:"大连"},{fug:"大连"},
                {fug:"大连"},{fug:"大连"},{fug:"大连"},{fug:"大连"},{fug:"大连"},{fug:"大连"},
                {fug:"大连"},{fug:"大连"},{fug:"大连"},{fug:"大连"},{fug:"大连"},{fug:"大连"},
                {fug:"大连"},{fug:"大连"},{fug:"大连"},{fug:"大连"},{fug:"大连"},{fug:"大连"},
                {fug:"大连"},{fug:"大连"},{fug:"大连"},{fug:"大连"},{fug:"大连"},{fug:"大连"},
                {fug:"大连"},{fug:"大连"},{fug:"大连"},{fug:"大连"},{fug:"大连"},{fug:"大连"},
                {fug:"大连"},{fug:"大连"},{fug:"大连"},{fug:"大连"},{fug:"大连"},{fug:"大连"},
                {fug:"大连"},{fug:"大连"},{fug:"大连"},{fug:"大连"},{fug:"大连"},{fug:"大连"},
                {fug:"大连"},{fug:"大连"},{fug:"大连"},{fug:"大连"},{fug:"大连"},{fug:"大连"},
                {fug:"大连"},{fug:"大连"},{fug:"大连"},{fug:"大连"},{fug:"大连"},{fug:"大连"},
                {fug:"大连"},{fug:"大连"},{fug:"大连"},{fug:"大连"},{fug:"大连"},{fug:"大连"},
                {fug:"大连"},{fug:"大连"},{fug:"大连"},{fug:"大连"},{fug:"大连"},{fug:"大连"},
                {fug:"大连"},{fug:"大连"},{fug:"大连"},{fug:"大连"},{fug:"大连"},{fug:"大连"},
                {fug:"大连"},{fug:"大连"},{fug:"大连"},{fug:"大连"},{fug:"大连"},{fug:"大连"},
                {fug:"大连"},{fug:"大连"},{fug:"大连"},{fug:"大连"},{fug:"大连"},{fug:"大连"},
                {fug:"大连"},{fug:"大连"},{fug:"大连"},{fug:"大连"},{fug:"大连"},{fug:"大连"},
                {fug:"大连"},{fug:"大连"},{fug:"大连"},{fug:"大连"},{fug:"大连"},{fug:"大连"},
                {fug:"大连"},
                

                
            ]

           
        }
      }
}
</script>
