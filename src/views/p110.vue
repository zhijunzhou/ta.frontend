<style>
.ivu-tabs-nav-scroll{
    width:7.50rem;
}
#index.ivu-tabs-bar{
    border-bottom: 0;
    margin-bottom: 0;
}
.ivu-tabs-nav {
    font-size:0.30rem;
    padding-left: 0;
    margin: 0;
    height: 0.90rem;
    line-height:0.50rem;
    padding: 30px auto;
    width: 100%;
    text-align: center;
    float: left;
    list-style: none;
    box-sizing: border-box;
    position: relative;
    transition: -webkit-transform .5s ease-in-out;
    transition: transform .5s ease-in-out;
}
.ivu-tabs-nav .ivu-tabs-tab {
    display: inline-block;
    height: 100%;
    width:33.3%;
    padding: 19px auto;
    box-sizing: border-box;
    cursor: pointer;
    text-decoration: none;
    position: relative;
    transition: color .3s ease-in-out;
    text-align: center;
}
.ivu-card-head{
    width:7.06rem;
    color: #5e5e5e;
    font-size:0.26rem;
    padding:0.40rem 0.30rem 0.30rem 0.30rem;
    line-height:0.44rem;
    border-bottom:1px solid #e9eaec;
}
.ivu-card-body{
    width:7.06rem;
    color: #919191;
    font-size:0.26rem;
    padding:0.40rem 0.30rem 0.30rem 0.30rem;
    line-height:0.44rem;
}
.active{
    background: #007aff;
    color:#ffffff;
}
.li-tab{
    width: 2.50rem;
    height: 100%;
    display:inline-block;
    text-align: center;
}
.divTab110{
    
    width: 100%;
    height: 11.44rem;
    background-color: #eeeeee;
    overflow-y: auto;
    margin:0.9rem 0 2rem; 
}
.footer{
}
</style>
<template>
       <div id="index">
            <ul class="tabs" style="width: 100%; height: 0.90rem; padding:0; position: fixed; top: -1px;background: #ffffff;color:#acacac;font-size:0.30rem;">
                <li class="li-tab" v-for="(item,index) in tittle" 
                @click="toggleTabs(index)"
                :class="{active:index===nowIndex}">{{item}}</li>
            </ul>

            <div class="divTab110" v-show="nowIndex===0" style="background-color: #eeeeee;">
                <img style="width:7.1rem; margin:0.4rem 0.2rem; height: 9.44rem;" src="../images/p110.png">
            </div>
            <div class="divTab110" v-show="nowIndex===1" >
                <QACard :QAData="QA">
                </QACard>
            </div>
            <div class="divTab110" v-show="nowIndex===2">
                <QACard :QAData="QAA">
                </QACard>
            </div>
            <Footers>
                <div class="footer" style="width:7.50rem; height:1.00rem; background-color:#007aff; text-align:center; color:#fff;font-size:0.30rem; padding-top:0.33rem; position:fixed; bottom:0px; display:inline;" v-model="url"  @click="goToUrl(url)">
                <div style="transform:rotate(180deg); width:0.30rem; position: absolute; left:3.10rem; top:0.36rem;"><i class="icon ion-log-in" ></i></div>
                    &nbsp;返回
                </div>
            </Footers>

        </div>
</template>
<script>

    import QACard from '../components/QACard.vue';
    import Footers from '../components/footer.vue';

    export default {
        data(){
            return{
                url:'/',
                nowIndex:0,
                tittle:["流程总览","疑问解答","操作指引"],
                QA:[
                   {
                        question:"Q:5档下各档比例给的是区间,实际打考核的时候是如何计算的？",
                        anser:"A:默认的正态分布比例计算方式是:\n\r5星≤部门人数*10%\n5星+4星≤部门人数*30%\n1星≥部门人数5%\n1星+2星≥部门人数*15%\n3星=部门人数一其余各档人数。"
                   },
                   {
                        question:"Q:4档变5档后,奖金总包有增加吗?",
                        anser:"A:奖金总包不取决于绩效多少档,而是看公司整体业绩,再看BG、部门业绩。业绩越好,奖金总包就越大。"
                   },
                   {
                        question:"Q:绩效奖看2次绩效考核,那具体应该如何计算?",
                        anser:"A:取2次绩效系数的平均。如上半年是4星,下半年是5星,则最终个人系数=(1.3+1.8)/2=1.55"
                   },
                   {
                        question:"Q:绩效奖看2次绩效考核,那具体应该如何计算?",
                        anser:"A:http://km.oa.com/group/20746"
                   }
                ],
                QAA:[
                   {
                        question:"员工评估移动版可以做什么?",
                        anser:"1.给下级打考核\n2.查看个人评估结果\n3.查看下级评估结果\n4.查看评估日程\n5.查看操作指引"
                   },
                   {
                        question:"员工评估移动版不能做什么?",     
                        anser: "1.不能处理矩阵考核\n由于矩阵考核的逻辑非常复杂,在移动端的交互和体验不太好,另外,90%以上的员工都不会用到,所以不提供\n2.不能批量操作(保存/驳回)\n在单个员工的考核界面,已经提供了驳回功能,不再重复提供"
                    }
                ]
            }
        },
        components:{
            QACard,
            Footers
        },
        methods: {
            goToUrl:function(url) {
                this.$router.push(url);
            },
            toggleTabs:function(index){
                this.nowIndex=index;
            }
        },
        mounted () {
        }
    };
</script>