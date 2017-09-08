<template>
<div id="index">
    <div class="list card">
        <assess-staff-base-info :assessStaffBaseInfo="assessStaffBaseInfo"></assess-staff-base-info>
    </div>
    <!-- 领导力行为评估 start-->
    <leadership-survey :LeadershipContent="LeadershipContent" :SelfLeadershipContent="SelfLeadershipContent" :setShangJiPingJia="setShangJiPingJia"></leadership-survey>
    <!-- 领导力行为评估 end-->

    <div class="panel-title2">
        相关评估-带权重
    </div>    
    <div class="list card" v-if="xiangGuanPingGuDaiQuanZhongCard">
        <div class="item item-pd">
            <profile-photo-list :choose="choose" :list="xiangGuanPingGuDaiQuanZhongCard" :chooseIndex='xiangGuanPingGuDaiQuanZhongCardItemIndex'></profile-photo-list>
        </div>
        <div class="item-body" style="height: auto">
            <dashed-assess-ment :crd="xiangGuanPingGuDaiQuanZhongCardItem"></dashed-assess-ment>
        </div>
    </div>

    <div class="panel-title2">
        综合评估
    </div>
     <div class="list card">
        <assess-ment :assessStaffRemark="assessStaffRemark" :DashedAssessResultList="DashedAssessResultList"></assess-ment>
     </div>
    <ppe></ppe>
    <div style="padding:0 0 0.8rem 0">
    </div>
    <command-bar :save="save" :saveDraft="saveDraft"></command-bar>
</div>
</template>
<script>

    import Util from '../libs/util.js';
    import {STEPNAME,TAGNAME,EVALUATEDNAME,AssessLevelID_RATE,getValue} from '../constants.js';
    import Tags from '../components/tag.vue';
    import AssessStaffBaseInfo from '../components/assess-staff-base-info'
    import LeadershipSurvey from '../components/leadership-survey'
    import DashedAssessMent from '../components/dashed-assess-ment'
    import ProfilePhotoList from '../components/profile-photo-list'
    import AssessMent from '../components/assess-ment'
    import Ppe from '../components/ppe'
    import CommandBar from '../components/command-bar'
    var appData = require('../data/p071.json');

    export default {
        data () {
            return {
                xiangGuanPingGuDaiQuanZhongCard:[],
                xiangGuanPingGuDaiQuanZhongCardItem:{},
                xiangGuanPingGuDaiQuanZhongCardItemIndex: 0,
                submitData:null,
                MaxMenu:5,
                hideSubMenu:false,
                moreContent:false,
                allMenus:[],
                subMenus:[
                    {title:'人力资源平台部',tag:'',deadLine:'7-7',deadLineHighlight:true,stepname:'自评'},
                    {title:'开发一组',tag:'员工/基干',deadLine:'7-14',deadLineHighlight:false,stepname:'上级评估'},
                    {title:'QQ游戏产品部',tag:'',deadLine:'7-18',deadLineHighlight:false,stepname2:'相关评估-带权重',desc:'johnsonyang (杨俊森)'}
                ],

                assessStaffBaseInfo: undefined,
                LeadershipContent:[],
                SelfLeadershipContent:[],
                assessStaffRemark: undefined,
                DashedAssessResultList: undefined,
                API:appData
            }
        },
        components: {
            Tags,
            AssessStaffBaseInfo,
            LeadershipSurvey,
            DashedAssessMent,
            ProfilePhotoList,
            AssessMent,
            Ppe,
            CommandBar
        },
        methods: {
            getData () {
                //const _this = this;                
                // Util.ajax.get('/punchdb/loadAll', {
                //   params: {
             
                //   }
                // }).then(function(res) {
                    
                // })
                this.submitData = this.API.result.Data;
                const res = this.API.result.Data;
                const {MyTask, AssessStaffBaseInfo, LeadershipContent, SelfLeadershipContent, AssessStaffRemarkList, DashedAssessResultList} = res;
                this.assessStaffBaseInfo = AssessStaffBaseInfo;
                this.LeadershipContent = LeadershipContent;
                this.SelfLeadershipContent = SelfLeadershipContent;
                this.DashedAssessResultList = DashedAssessResultList;
                this.xiangGuanPingGuDaiQuanZhongCard = DashedAssessResultList.filter(f=>f.AssessorTypeID===3);
                if (this.xiangGuanPingGuDaiQuanZhongCard.length > 0) {
                    this.xiangGuanPingGuDaiQuanZhongCardItem = this.xiangGuanPingGuDaiQuanZhongCard[0];
                }
                //综合评估
                this.assessStaffRemark = AssessStaffRemarkList.find(f=>f.OwnerAssessStaffID=== res.AssessStaffBaseInfo.CurHandleManAssessStaffID);
            },
            setShangJiPingJia(sortNum,shangJiPingJiaResult){
                this.submitData.LeadershipContent.Dimensions=this.submitData.LeadershipContent.Dimensions.map(m=>{
                    if(m.SortNum===sortNum){    
                        m.Behaviors[0].ScoreName = shangJiPingJiaResult.ScoreName;
                        m.Behaviors[0].Score = shangJiPingJiaResult.Score;
                    }
                    console.log(m.Behaviors[0]);
                    return m;
                });    
                console.log(this.submitData.LeadershipContent.Dimensions);
            },
            getMore(){
                this.moreContent = !this.moreContent;
                this.subMenus = this.moreContent?this.allMenus:this.allMenus.slice(0,this.MaxMenu);
            },
            getRemainDays(deadline){
                const MS_DAY = 86400000;
                let now = new Date();
                return (deadline-now) / MS_DAY ;

            },
            showSubMenu() {
                this.hideSubMenu = !this.hideSubMenu;
            },
            handleStart() {
                this.$Modal.info({
                    title: 'Bravo',
                    content: 'Now, enjoy the convenience of iView.'
                });
            },
            choose(index){
                this.xiangGuanPingGuDaiQuanZhongCardItem = this.xiangGuanPingGuDaiQuanZhongCard[index];
                this.xiangGuanPingGuDaiQuanZhongCardItemIndex = index;
            },
            saveDraft(){
                console.log('saveDraft');
            },
            save(){
                console.log('save');
            }
        },
        mounted: function() {
            this.getData();
        }
    };
</script>
<style scoped>
.badge{
    font-weight: initial;
    padding: 0.06rem 0.14rem;
}
.item-pd{
    padding:0.2rem 0 0.2rem 0;
}
#index{
    height: -webkit-fill-available;
    overflow-y: auto;
    background-color: #f5f5f5;
}

.highlightdeadLineColor{
    color: #ff8661;
}
.reminderColor{
    color: #919191;
    font-size:0.24rem;
}

.card{
    margin:0.20rem 0.22rem;
/*    height: 1.40rem;*/
    box-shadow:none;
    border-radius:10px;
    overflow:auto;
}

.card .item{
    height: auto;
/*    padding-top: 0.30em;
    padding-left: 0.40em;*/
}

.list{
    padding: 0;
}

.list .item{
    border-width:0px 0px 1px 0px;
}

.ivu-tag-text{
    position: absolute;
    bottom: 13px;
}

.titlescss{
    font-size:0.32rem;
    color: #242424;
    position:absolute; 
    left:0.43rem
}

.morebar{

    height: 0.90rem;
    padding: 0.23rem 0 0 3.10rem;
}

.panel-title1{
    padding: 0 0 0 0.3rem;
    font-weight: 600;
    color: #3f3f3f;
}

.panel-title2{
    padding: 0 0 0 0.3rem;
    font-weight: 600;
    color: #5e5e5e;
}

.box{ float: left; padding: 0 0.3rem 0.2rem 0.1rem;}

.font-level1-title{font:32px; color: #3f3f3f;}
.font-level2-title{font:26px; color: #5e5e5e;}
.font-level2-content{font:26px;color:#919191;}
.font-level2-description{font:26px;color:#acacac;}

.clr{clear:both;}

.ivu-input-number-input-wrap {
    overflow: hidden;
    height: 32px;
}

.ivu-input-number-input {
    width: 100%;
    height: 32px;
    line-height: 32px;
    padding: 0 7px;
    text-align: left;
    outline: 0;
    -moz-appearance: textfield;
    color: #666;
    border: 0;
    border-radius: 4px;
    transition: all .2s linear;
}
input {
    border:1px solid rgb(87, 163, 243);
}
</style>