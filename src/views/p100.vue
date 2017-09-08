<style>
.ivu-tabs-nav-scroll{
    width:7.50rem;
}
.ivu-card-head{
    width:7.06rem;
    color: #5e5e5e;
    font-size:0.26rem;
/*    padding:0.40rem 0.30rem 0.30rem 0.30rem;*/
    border-bottom:1px solid #e9eaec;
}
.ivu-card-body{
    width:7.06rem;
    color: #919191;
    font-size:0.26rem;
/*    padding:0.40rem 0.30rem 0.30rem 0.30rem;*/
    line-height:0.44rem;
}

.divTab100{
    
    width: 100%;
    height: 12.34rem;
    background-color: #eeeeee;
    overflow-y: auto;
    padding: 0 0 1rem;
}

</style>
<template>
       <div id="index">
            <div class="divTab100">
                <div v-for="card in cards" style="border-radius: 0.1rem; padding:0">
                    <div style="height:0.75rem;width:7.06rem;padding:0.24rem 0 0 0.38rem;font-size:0.24rem; color:#007ffa; "> {{card.title}} </div>
                    <Card style="width:7.06rem; margin:0.20rem 0.22rem;" >
                        <div class="row" slot="title" style="padding:0;">
                            <div class="col col-50" style="text-align:left;">考核步骤</div>
                            <div class="col col-50" style="text-align:right;">截止日期</div>
                        </div>
                        <div class="row" style="height:0.8rem;padding:0;" v-for="item in card.list">
                            <div class="col col-67" style="text-align:left;">{{item.type}}</div>
                            <div class="col col-33" style="text-align:right;">{{item.date}}</div>
                        </div>
                    </Card>
                </div>
                  
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

                cards:[
                    {
                        title: "2017年下半年TEG正式员工评估日程",
                        list: [{
                              type: "部门管理员配置评估关系",
                              date: "2017-06-26"
                            }, {
                              type: "部门负责人确认评估关系",
                              date: "2017-06-30"
                            }, {
                              type: "员工自评",
                              date: "2017-07-04"
                            }, {
                              type: "相关评估人评估",
                              date: "2017-07-15"
                            }, {
                              type: "上级评估",
                              date: "2017-07-15"
                            }, {
                              type: "部门负责人评估",
                              date: "2017-07-18"
                            }, {
                              type: "主管副总审批",
                              date: "2017-07-19"
                            }, {
                              type: "绩效反馈",
                              date: "2017-07-22"
                            }]
                    }, 
                    {
                        title: "2017年上半年TEG正式员工评估日程",
                        list: [{
                              type: "部门管理员配置评估关系",
                              date: "2017-06-26"
                            }, {
                              type: "部门负责人确认评估关系",
                              date: "2017-06-30"
                            }, {
                              type: "员工自评",
                              date: "2017-07-04"
                            }, {
                              type: "相关评估人评估",
                              date: "2017-07-15"
                            }, {
                              type: "上级评估",
                              date: "2017-07-15"
                            }, {
                              type: "部门负责人评估",
                              date: "2017-07-18"
                            }, {
                              type: "主管副总审批",
                              date: "2017-07-19"
                            }, {
                              type: "绩效反馈",
                              date: "2017-07-22"
                            }]
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