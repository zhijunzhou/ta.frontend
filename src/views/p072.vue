<style scoped>
.badge{
    font-weight: initial;
    padding: 0.06rem 0.14rem;
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


</style>
<template>
<div id="index">
    <Icon type="chevron-left"></Icon>
    <div class="list card">

      <div class="item item-avatar">
        <img src="mcfly.jpg">
        <div>{{staffName}} &nbsp;&nbsp;<Tags type="border" color="blue" style="
                ">
                晋级
            </Tags></div>
        <Rate v-model="remarkRate" disabled style="font-size:0.32rem"></Rate>
        <span style="
            position: relative;
            top: 0.05rem;
            right: 0.10rem;
            font-size: 0.10rem;
            ">
            {{remarkName}}  
            
            </span>
        <Tags type="border" color="blue" style="
            position:absolute; 
            top:0.54rem; 
            right: 0.40rem; 
            ">
            <i class="icon ion-reply"></i> 驳回
        </Tags>
      </div>
    </div>

    <div class="list card">
        <ul class="list">
            <li class="item"  style="height: 1.00rem;margin:0;" >
                <div class="row" style="padding: 0">
                    <div class="col col-30" style="padding: 0">评估维度</div>
                    <div class="col col-40" style="padding: 0">行为自评 </div>
                    <div class="col col-30" style="padding: 0;text-align: right;">上级评价</div>
                </div>
                 
            </li>
            <li class="item"  style="height: 1.00rem;margin:0;" v-for="lst in XingWeiPingGuList">
                <div class="row" style="padding: 0">
                    <div class="col col-30" style="padding: 0">{{lst.DimensionName}}</div>
                    <div class="col col-40" style="padding: 0">{{lst.selfScoreName}}</div>
                    <div class="col col-30" style="padding: 0;text-align: right;">
                        <select v-model="lst.shangJiPingJiaResult" @change="setShangJiPingJia(lst.SortNum,lst.shangJiPingJiaResult)" >
                            <option v-for="opt in commentList" :value="opt.Score" :key="opt.Score">{{opt.ScoreName}}</option>
                        </select>
                    </div>
                </div>
            </li>
        </ul>
    </div>
    <div class="list card">

      <div class="item " style="border-width: 0px 0px 1px 0px;border-style: solid;    border-color: #ddd;">
        综合评语
      </div>
      <div class="item-body">
        <div v-for="zh in zongHePingYu" class="row" style="padding: 0.15rem 0 ">
            <div class="col col-20" style="padding-left: 0 ">
                {{zh.RemarkName}} &nbsp;&nbsp;&nbsp;&nbsp;:
            </div>
            <div class="col col-80">
                {{zh.Content}}
            </div>
        </div>
       

      </div>
    </div>

    <div class="list card"  v-for="crd in xiangGuanPingGuDaiQuanZhongCard">

      <div class="item item-avatar">
        <img src="mcfly.jpg">
      </div>
      <div class="item item-avatar">
        <img src="mcfly.jpg">
      </div>
      <div class="item item-avatar">
        <img src="mcfly.jpg">
      </div>

      <div class="item item-body" style="height: auto">
        <div>
            评估人 
        </div>
        <div>
            {{crd.DashedAssessorName}}
        </div>
        <div>
            权重
        </div>
        <div>
            {{crd.AssessorProp}}
        </div>
        <div>
            评分
        </div>
        <div>
            {{crd.SumTotal}}
        </div>
        <div>
            评级
        </div>
        <div>
            {{crd.AssessLevelName}}
        </div>
        <div>
            评语
        </div>
        <div>
            {{crd.Remark}}
        </div>

      </div>
    </div>

     <div class="list card">

      <div class="item item-body" style="height: 10rem" v-if="zhongHePingGuCard">
        <div>综合评估</div>
        <div>评分</div><input type="number" name="pingFen" v-model="zhongHePingGuCard.DirectTotalScore">
        <div>权重</div><div>{{zhongHePingGuCard.QuanZhong}}</div>
        <div>综合评分</div><div>{{zhongHePingGuCard.SumTotal}}</div>
        <div>综合评级</div><Rate v-model="zhongHePingGuCard.rateValue" ></Rate><div>{{zhongHePingGuCard.AssessLevelName}}</div>
        <div>综合评语</div><Input v-model="zhongHePingGuCard.Remark" type="textarea" :rows="4" placeholder="请输入..."></Input>
        <div>{{zhongHePingGuCard.OwnerName}}</div><div>{{zhongHePingGuCard.ownerRemark}}</div>
     </div>


     </div>
     <div class="list card">
        <div>职级评定</div>
        <div><span>当前职级</span><span>质量管理类 T2</span></div>
        <div>评级
            <span>
                <Radio-group v-model="animal">
                    <Radio label="晋级"></Radio>
                    <Radio label="维持"></Radio>
                </Radio-group>
        </span>
        </div>
        <div>评语</div><Input v-model="value6" type="textarea" :rows="4" placeholder="请输入..."></Input>
    
    </div>
    <div class="bar bar-footer">
        <div>评估</div>
        <div>看自评</div>
        <div>看周边</div>
        <div><Button type="success" long>存草稿</Button></div>
        <div><Button type="primary" long>保存并返回</Button></div>
    </div>
</div>
</template>
<script>

    import Util from '../libs/util.js';
    import {STEPNAME,TAGNAME,EVALUATEDNAME,AssessLevelID_RATE,getValue} from '../constants.js';
    import Tags from '../components/tag.vue';
    // import '../styles/ionic.css';

    export default {
        data () {
            return {
                xiangGuanPingGuDaiQuanZhongCard:[],
                zhongHePingGuCard:{},
                shangJiPingJiaResult:'',
                submitData:null,
                staffName:'',
                remarkRate:0,
                remarkName:'',
                animal:'',
                value6:'',
                model3:'',
                zongHePingYu:[],
                XingWeiPingGuList:[
                ],
                commentList: [],
                rateValue:5,
                titles:['我的评估结果','下级评估结果','员工评估日程','员工评估指引','360领导力评估','意见和反馈'],
                MaxMenu:5,
                hideSubMenu:false,
                moreContent:false,
                allMenus:[],
                subMenus:[
                    {title:'人力资源平台部',tag:'',deadLine:'7-7',deadLineHighlight:true,stepname:'自评'},
                    {title:'开发一组',tag:'员工/基干',deadLine:'7-14',deadLineHighlight:false,stepname:'上级评估'},
                    {title:'QQ游戏产品部',tag:'',deadLine:'7-18',deadLineHighlight:false,stepname2:'相关评估-带权重',desc:'johnsonyang (杨俊森)'}
                ],
                API:JSON.parse( '{"result":{"Data":{"AssessStaffBaseInfoQueryResult":{"AssessStaffID":315518,"PeriodID":1057,"PeriodName":"zq_0818_2","PackageID":9007,"PackageName":"SNG人力资源中心","PackageLevelID":40,"PackageLevelName":"部门","PackageLocationCode":"009002.009005.009007","StaffID":23906,"StaffName":"charleneli(李凌)","ParentAssessStaffID":315517,"ParentID":29264,"ParentName":"jasoncheng(成吉祥)","IsBeAssessed":true,"IsAssess":false,"IsBeAssessedMidManager":false,"IsAssessMidManager":false,"IsPackageManager":false,"FLevel":6,"LocationString":"0315353.0315356.0315358.0315516.0315517.0315518","StaffIDLocationString":"0000239.0000248.0001489.0030121.0029264.0023906","StaffNameLocationString":" charleneli(李凌) -> jasoncheng(成吉祥) -> minoszhang(张正达) -> alexchen(陈双华) -> tom(唐毅斌) -> xidan(奚丹) ","StatusID":60,"StatusName":"上级评估","CurHandleManAssessStaffID":315516,"CurHandleManID":30121,"CurHandleManName":"minoszhang(张正达)","IsNeedPassEvaluate":false,"IsNeedBGEvaluate":false,"BufferType":0,"Memo":null,"Tags":null,"StaffTypeID":2,"StaffTypeName":"正式","StaffStatusID":1,"StaffStatusName":"在职","GroupID":6441,"GroupName":"SNG招聘组","GroupFullName":"S3职能系统－HR与管理线/SNG人力资源中心/SNG招聘组","GroupLocationCode":"OA000001.00002234.00004576.00006441","DisplayGroupName":"SNG招聘组","StaffPropertyID":4,"StaffPropertyName":"基层管理干部","InauguralDate":"1304438400000","BeFormalDate":"1312387200000","DimssionDate":null,"DashedAssessors":"williszuo(左忠豪);chanelxu(徐成程)","DashedAssessorList":null,"LeadershipAssessorList":null,"UniqueKey":"315518","CreateBy":null,"CreateTime":"/Date(-62135596800000)/","UpdateBy":null,"UpdateTime":"/Date(-62135596800000)/","EnableFlag":false},"ExternalRemarkResult":{"ID":88,"AssessStaffID":315518,"Merit":"仿佛大赛共发放换个说法","Demerit":"个发疯瓦房","Annex":"分嘎嘎分的萨芬","Other":"范德萨范德萨发","UniqueKey":"88","CreateBy":"williszuo(左忠豪)","CreateTime":"1504183472417","UpdateBy":"williszuo(左忠豪)","UpdateTime":"1504183472417","EnableFlag":true},"AssessStaffRemarkListResult":[{"ID":19344,"AssessStaffID":315518,"StepID":40,"StepName":"上级评估(员工/基干)","OwnerID":30121,"OwnerName":"minoszhang(张正达)","OwnerAssessStaffID":315516,"SumTotal":92,"AchievementProp":0,"AchievementScore":null,"BehaviorProp":0,"BehaviorScore":null,"KeyEventScore":null,"KeyEventRemark":null,"DirectTotalScore":95,"AssessLevelID":110,"AssessLevelName":"4星 (非常棒)","Remark":"范德萨范德萨发","UniqueKey":"19344","CreateBy":"williszuo(左忠豪)","CreateTime":"1504179530087","UpdateBy":"williszuo(左忠豪)","UpdateTime":"1504246356377","EnableFlag":true},{"ID":19343,"AssessStaffID":315518,"StepID":40,"StepName":"上级评估(员工/基干)","OwnerID":29264,"OwnerName":"jasoncheng(成吉祥)","OwnerAssessStaffID":315517,"SumTotal":92,"AchievementProp":0,"AchievementScore":null,"BehaviorProp":0,"BehaviorScore":null,"KeyEventScore":null,"KeyEventRemark":null,"DirectTotalScore":95,"AssessLevelID":110,"AssessLevelName":"4星 (非常棒)","Remark":"峰瓦方式大发大法撒法we啊哇饿发三大","UniqueKey":"19343","CreateBy":"williszuo(左忠豪)","CreateTime":"1504179129577","UpdateBy":"williszuo(左忠豪)","UpdateTime":"1504246272970","EnableFlag":true}],"DashedAssessResultQueryListResult":[{"ID":6182,"AssessStaffID":315518,"DashedAssessorID":62993,"DashedAssessorName":"chanelxu(徐成程)","SumTotal":80,"AssessLevelID":110,"AssessLevelName":"4星 (非常棒)","Remark":"法额外分撒发达省份","AssessorTypeID":3,"AssessorTypeName":"相关评估人-带权重","AssessorProp":20,"IsGrade":false,"IsAssessRemark":false,"IsFeedbackForStaff":false,"IsFeedbackForAssessor":false,"IsAnonymous":false,"StatusID":100,"StatusName":"评估已完成","AchievementTargetList":[{"ID":33432,"TargetID":4,"TargetName":"业务","TargetFIndex":1,"AssessStaffID":315518,"IsSupportProp":false,"TargetProp":null,"IsChangeProp":false,"IsCheckProp":false,"AchievementItemList":[{"ID":14757,"AssessStaffID":315518,"TargetID":4,"TargetName":"业务","FIndex":1,"Achievement":"发发额外发售","Criterion":"范德萨飞洒","Remark":"分撒大分哇","SelfProp":30,"SelfScore":0,"FinalProp":30,"FinalScore":0,"Memo":"放大分哇","GoalDetailID":null,"IsReportLine":true,"DashedAssessorList":null,"UniqueKey":"14757","CreateBy":"williszuo(左忠豪)","CreateTime":"1504179864060","UpdateBy":"williszuo(左忠豪)","UpdateTime":"1504180158047","EnableFlag":true}],"AchievementAssessorEvaluateQueryList":null,"UniqueKey":"33432","CreateBy":"williszuo(左忠豪)","CreateTime":"1504179714043","UpdateBy":"williszuo(左忠豪)","UpdateTime":"1504179714043","EnableFlag":true},{"ID":33433,"TargetID":5,"TargetName":"管理","TargetFIndex":2,"AssessStaffID":315518,"IsSupportProp":false,"TargetProp":null,"IsChangeProp":false,"IsCheckProp":false,"AchievementItemList":[{"ID":14760,"AssessStaffID":315518,"TargetID":5,"TargetName":"管理","FIndex":3,"Achievement":"分啊我分撒","Criterion":"分的萨芬","Remark":"法师打发三大","SelfProp":0,"SelfScore":0,"FinalProp":0,"FinalScore":null,"Memo":null,"GoalDetailID":null,"IsReportLine":false,"DashedAssessorList":null,"UniqueKey":"14760","CreateBy":"williszuo(左忠豪)","CreateTime":"1504179864060","UpdateBy":"williszuo(左忠豪)","UpdateTime":"1504179864060","EnableFlag":true}],"AchievementAssessorEvaluateQueryList":null,"UniqueKey":"33433","CreateBy":"williszuo(左忠豪)","CreateTime":"1504179714043","UpdateBy":"williszuo(左忠豪)","UpdateTime":"1504179714043","EnableFlag":true}],"UniqueKey":"6182","CreateBy":null,"CreateTime":"/Date(-62135596800000)/","UpdateBy":null,"UpdateTime":"/Date(-62135596800000)/","EnableFlag":false},{"ID":6183,"AssessStaffID":315518,"DashedAssessorID":33924,"DashedAssessorName":"williszuo(左忠豪)","SumTotal":null,"AssessLevelID":110,"AssessLevelName":"4星 (非常棒)","Remark":"个啊大撒发生大风啊我分","AssessorTypeID":2,"AssessorTypeName":"相关评估人-无权重","AssessorProp":null,"IsGrade":false,"IsAssessRemark":false,"IsFeedbackForStaff":false,"IsFeedbackForAssessor":false,"IsAnonymous":false,"StatusID":100,"StatusName":"评估已完成","AchievementTargetList":null,"UniqueKey":"6183","CreateBy":null,"CreateTime":"/Date(-62135596800000)/","UpdateBy":null,"UpdateTime":"/Date(-62135596800000)/","EnableFlag":false}],"AchievementTargetListResult":[{"ID":33432,"TargetID":4,"TargetName":"业务","TargetFIndex":1,"AssessStaffID":315518,"IsSupportProp":false,"TargetProp":null,"IsChangeProp":false,"IsCheckProp":false,"AchievementItemList":[{"ID":14757,"AssessStaffID":315518,"TargetID":4,"TargetName":"业务","FIndex":1,"Achievement":"发发额外发售","Criterion":"范德萨飞洒","Remark":"分撒大分哇","SelfProp":30,"SelfScore":0,"FinalProp":30,"FinalScore":0,"Memo":"放大分哇","GoalDetailID":null,"IsReportLine":true,"DashedAssessorList":null,"UniqueKey":"14757","CreateBy":"williszuo(左忠豪)","CreateTime":"1504179864060","UpdateBy":"williszuo(左忠豪)","UpdateTime":"1504180158047","EnableFlag":true},{"ID":14758,"AssessStaffID":315518,"TargetID":4,"TargetName":"业务","FIndex":2,"Achievement":"分哇发撒旦","Criterion":"分哇分","Remark":"分的萨芬岁的","SelfProp":40,"SelfScore":0,"FinalProp":40,"FinalScore":1,"Memo":"分啊我范德萨","GoalDetailID":null,"IsReportLine":true,"DashedAssessorList":null,"UniqueKey":"14758","CreateBy":"williszuo(左忠豪)","CreateTime":"1504179864060","UpdateBy":"williszuo(左忠豪)","UpdateTime":"1504180158047","EnableFlag":true}],"AchievementAssessorEvaluateQueryList":null,"UniqueKey":"33432","CreateBy":"williszuo(左忠豪)","CreateTime":"1504179714043","UpdateBy":"williszuo(左忠豪)","UpdateTime":"1504179714043","EnableFlag":true},{"ID":33433,"TargetID":5,"TargetName":"管理","TargetFIndex":2,"AssessStaffID":315518,"IsSupportProp":false,"TargetProp":null,"IsChangeProp":false,"IsCheckProp":false,"AchievementItemList":[{"ID":14759,"AssessStaffID":315518,"TargetID":5,"TargetName":"管理","FIndex":3,"Achievement":"分啊我分撒","Criterion":"分哇分的撒","Remark":"分撒大分哇","SelfProp":30,"SelfScore":0,"FinalProp":30,"FinalScore":0,"Memo":"峰瓦方式大","GoalDetailID":null,"IsReportLine":true,"DashedAssessorList":null,"UniqueKey":"14759","CreateBy":"williszuo(左忠豪)","CreateTime":"1504179864060","UpdateBy":"williszuo(左忠豪)","UpdateTime":"1504180158047","EnableFlag":true}],"AchievementAssessorEvaluateQueryList":null,"UniqueKey":"33433","CreateBy":"williszuo(左忠豪)","CreateTime":"1504179714043","UpdateBy":"williszuo(左忠豪)","UpdateTime":"1504179714043","EnableFlag":true}],"BehaviorItemListResult":[{"ID":128383,"AssessStaffID":315523,"FIndex":1,"TargetID":175,"TargetName":"尽责进取","Criterion":"对工作使命必达，精益求精，主动承担新的挑战。","FullMark":7,"Prop":0,"SelfScore":5,"SelfScoreDetail":"同意","FinalScore":5,"FinalScoreDetail":"同意","IsRefScoreRule":true,"RefScoreRuleID":17,"ReadOnly":null,"UniqueKey":"128383","CreateBy":"williszuo(左忠豪)","CreateTime":"1504095521630","UpdateBy":"williszuo(左忠豪)","UpdateTime":"1504184071950","EnableFlag":true},{"ID":128384,"AssessStaffID":315523,"FIndex":2,"TargetID":176,"TargetName":"团队合作","Criterion":"主动承担，积极配合，热爱分享，与团队共同成长。","FullMark":7,"Prop":0,"SelfScore":4,"SelfScoreDetail":"基本同意","FinalScore":4,"FinalScoreDetail":"基本同意","IsRefScoreRule":true,"RefScoreRuleID":17,"ReadOnly":null,"UniqueKey":"128384","CreateBy":"williszuo(左忠豪)","CreateTime":"1504095521630","UpdateBy":"williszuo(左忠豪)","UpdateTime":"1504184071950","EnableFlag":true},{"ID":128385,"AssessStaffID":315523,"FIndex":3,"TargetID":177,"TargetName":"敏捷创新","Criterion":"不断总结，快速优化，勇于尝试，提升工作产出。","FullMark":7,"Prop":0,"SelfScore":5,"SelfScoreDetail":"同意","FinalScore":5,"FinalScoreDetail":"同意","IsRefScoreRule":true,"RefScoreRuleID":17,"ReadOnly":null,"UniqueKey":"128385","CreateBy":"williszuo(左忠豪)","CreateTime":"1504095521630","UpdateBy":"williszuo(左忠豪)","UpdateTime":"1504184071950","EnableFlag":true},{"ID":128386,"AssessStaffID":315523,"FIndex":4,"TargetID":178,"TargetName":"客户导向","Criterion":"换位思考，快速响应，能够发现并解决用户需求。","FullMark":7,"Prop":0,"SelfScore":5,"SelfScoreDetail":"同意","FinalScore":5,"FinalScoreDetail":"同意","IsRefScoreRule":true,"RefScoreRuleID":17,"ReadOnly":null,"UniqueKey":"128386","CreateBy":"williszuo(左忠豪)","CreateTime":"1504095521630","UpdateBy":"williszuo(左忠豪)","UpdateTime":"1504184071950","EnableFlag":true}],"LeadershipData":{"PeriodId":579,"PeriodName":"TA测试周期","BeginTime":"2017-04-04","EndTime":"2017-04-06","UnitName":"HR应用开发组","ObjName":"stoneldeng(邓磊)","AssessorGuid":"8c3204681bad4d7494c01e01aa7ab452","AssessorName":"essienlin(林志成)","StatusId":2,"StatusName":"待提交","SubmitTime":null,"Score":null,"RoleId":198,"ScoreRuleId":44,"Dimensions":[{"DimensionScoreId":4574,"DimensionId":179,"DimensionName":"正直","Score":null,"SortNum":1,"Behaviors":[{"DimensionId":179,"QuestionScoreId":17638,"QuestionName":"公平、公正对待下属与他人。","Desc":null,"Score":null,"ScoreName":"","SortNum":2}]},{"DimensionScoreId":4575,"DimensionId":180,"DimensionName":"开放","Score":null,"SortNum":2,"Behaviors":[{"DimensionId":180,"QuestionScoreId":17639,"QuestionName":"站在用户和公司的角度考虑问题，必要时能牺牲“小我”利益。","Desc":null,"Score":null,"ScoreName":"","SortNum":3}]},{"DimensionScoreId":4576,"DimensionId":181,"DimensionName":"激情","Score":null,"SortNum":3,"Behaviors":[{"DimensionId":181,"QuestionScoreId":17640,"QuestionName":"为团队设立挑战性目标，激励下属，以身作则，不断努力达到更高的目标","Desc":null,"Score":null,"ScoreName":"","SortNum":1}]},{"DimensionScoreId":4577,"DimensionId":182,"DimensionName":"好学","Score":null,"SortNum":4,"Behaviors":[{"DimensionId":182,"QuestionScoreId":17641,"QuestionName":"带领团队从工作中、从错误中学习，不断反思、总结和提升。","Desc":null,"Score":null,"ScoreName":"","SortNum":1}]},{"DimensionScoreId":4578,"DimensionId":183,"DimensionName":"人才","Score":null,"SortNum":5,"Behaviors":[{"DimensionId":183,"QuestionScoreId":17642,"QuestionName":"积极识别并凝聚志同道合的优秀人才，并用人所长。","Desc":null,"Score":null,"ScoreName":"","SortNum":1}]},{"DimensionScoreId":4579,"DimensionId":184,"DimensionName":"用户","Score":null,"SortNum":6,"Behaviors":[{"DimensionId":184,"QuestionScoreId":17643,"QuestionName":"随时随地关注和体验产品与服务细节，挖掘用户核心需求和反馈。","Desc":null,"Score":null,"ScoreName":"","SortNum":1}]}],"Remarks":[{"RemarkContentId":1944,"RemarkName":"优势","Desc":null,"Content":"","SortNum":0},{"RemarkContentId":1945,"RemarkName":"不足","Desc":null,"Content":"","SortNum":0}],"Scores":[{"ScoreId":237,"Score":1,"Name":"非常不同意","SortNum":1},{"ScoreId":238,"Score":2,"Name":"不同意","SortNum":2},{"ScoreId":239,"Score":3,"Name":"基本不同意","SortNum":3},{"ScoreId":240,"Score":4,"Name":"基本同意","SortNum":4},{"ScoreId":241,"Score":5,"Name":"同意","SortNum":5},{"ScoreId":242,"Score":6,"Name":"非常同意","SortNum":6}],"CanReject":false,"IsValid":false,"HasUnknownItem":false,"InvalidBehaviorProportion":100,"InvalidBehaviorAllSame":false,"UpdateUser":""},"SelfLeadershipData":{"PeriodId":579,"PeriodName":"TA测试周期","BeginTime":"2017-04-04","EndTime":"2017-04-06","UnitName":"HR应用开发组","ObjName":"stoneldeng(邓磊)","AssessorGuid":"8c3204681bad4d7494c01e01aa7ab452","AssessorName":"essienlin(林志成)","StatusId":2,"StatusName":"待提交","SubmitTime":null,"Score":null,"RoleId":198,"ScoreRuleId":44,"Dimensions":[{"DimensionScoreId":4574,"DimensionId":179,"DimensionName":"正直","Score":null,"SortNum":1,"Behaviors":[{"DimensionId":179,"QuestionScoreId":17638,"QuestionName":"公平、公正对待下属与他人。","Desc":null,"Score":null,"ScoreName":"行为自评1","SortNum":2}]},{"DimensionScoreId":4575,"DimensionId":180,"DimensionName":"开放","Score":null,"SortNum":2,"Behaviors":[{"DimensionId":180,"QuestionScoreId":17639,"QuestionName":"站在用户和公司的角度考虑问题，必要时能牺牲“小我”利益。","Desc":null,"Score":null,"ScoreName":"行为自评2","SortNum":3}]},{"DimensionScoreId":4576,"DimensionId":181,"DimensionName":"激情","Score":null,"SortNum":3,"Behaviors":[{"DimensionId":181,"QuestionScoreId":17640,"QuestionName":"为团队设立挑战性目标，激励下属，以身作则，不断努力达到更高的目标","Desc":null,"Score":null,"ScoreName":"行为自评3","SortNum":1}]},{"DimensionScoreId":4577,"DimensionId":182,"DimensionName":"好学","Score":null,"SortNum":4,"Behaviors":[{"DimensionId":182,"QuestionScoreId":17641,"QuestionName":"带领团队从工作中、从错误中学习，不断反思、总结和提升。","Desc":null,"Score":null,"ScoreName":"行为自评4","SortNum":1}]},{"DimensionScoreId":4578,"DimensionId":183,"DimensionName":"人才","Score":null,"SortNum":5,"Behaviors":[{"DimensionId":183,"QuestionScoreId":17642,"QuestionName":"积极识别并凝聚志同道合的优秀人才，并用人所长。","Desc":null,"Score":null,"ScoreName":"行为自评5","SortNum":1}]},{"DimensionScoreId":4579,"DimensionId":184,"DimensionName":"用户","Score":null,"SortNum":6,"Behaviors":[{"DimensionId":184,"QuestionScoreId":17643,"QuestionName":"随时随地关注和体验产品与服务细节，挖掘用户核心需求和反馈。","Desc":null,"Score":null,"ScoreName":"行为自评6","SortNum":1}]}],"Remarks":[{"RemarkContentId":1944,"RemarkName":"优势","Desc":null,"Content":"优点优点优点优点优点优点优点优点优点优点优点优点优点优点优点优点优点优点优点优点优点优点优点优点优点优点优点优点优点优点优点优点优点优点优点优点优点优点优点优点优点优点优点优点优点优点优点优点优点优点优点优点优点优点优点优点优点优点优点优点优点优点","SortNum":0},{"RemarkContentId":1945,"RemarkName":"不足","Desc":null,"Content":"缺点缺点缺点缺点缺点缺点缺点缺点缺点缺点缺点缺点缺点缺点缺点缺点缺点缺点缺点缺点缺点缺点缺点缺点缺点缺点缺点缺点缺点缺点缺点缺点缺点缺点缺点缺点缺点缺点缺点缺点缺点缺点缺点缺点缺点缺点缺点缺点缺点缺点缺点缺点缺点缺点缺点缺点缺点缺点缺点缺点缺点缺点缺点缺点缺点缺点缺点缺点缺点缺点缺点缺点缺点缺点缺点缺点缺点缺点缺点缺点缺点缺点缺点缺点缺点缺点","SortNum":0}],"Scores":[{"ScoreId":237,"Score":1,"Name":"非常不同意","SortNum":1},{"ScoreId":238,"Score":2,"Name":"不同意","SortNum":2},{"ScoreId":239,"Score":3,"Name":"基本不同意","SortNum":3},{"ScoreId":240,"Score":4,"Name":"基本同意","SortNum":4},{"ScoreId":241,"Score":5,"Name":"同意","SortNum":5},{"ScoreId":242,"Score":6,"Name":"非常同意","SortNum":6}],"CanReject":false,"IsValid":false,"HasUnknownItem":false,"InvalidBehaviorProportion":100,"InvalidBehaviorAllSame":false,"UpdateUser":""},"AssessPackageSettingByAssessStaffIDResult":{"ID":1847,"StaffAchievementTemplateID":4,"StaffAchievementTemplateName":"员工绩效目标模版","LeaderAchievementTemplateID":5,"LeaderAchievementTemplateName":"基干绩效目标模版","IsStaffBehaviorAssess":true,"StaffBehaviorTemplateID":45,"StaffBehaviorTemplateName":"TA人才-员工行为模版","StaffAchievementProp":null,"StaffBehaviorProp":null,"IsLeaderBehaviorAssess":true,"LeaderBehaviorTemplateID":46,"LeaderBehaviorTemplateName":"领导力模版","LeaderAchievementProp":null,"LeaderBehaviorProp":null,"IsLeaderBehaviorSumUp":false,"IsPerformanceSumUp":false,"AssessLevelTypeID":101,"AssessLevelTypeName":"五档","IsScoreMatch":false,"IsKeyEventAssess":false,"IsStaffTargetConfig":true,"IsLeaderTargetConfig":true,"IsManagerTargetConfig":false,"IsModifyTargetInPackage":null,"IsDashedAssess":true,"IsPeerReview":null,"IsDashedAssesWithoutProp":true,"IsDashedScoreWithoutProp":null,"IsDashedGradeWithoutProp":true,"IsDashedAssessorRemarkWithoutProp":true,"IsDashedAssessorViewEvaluateWithoutProp":null,"IsDashedAssesWithProp":true,"IsDashedScoreWithProp":true,"IsDashedGradeWithProp":true,"IsDashedAssessorRemarkWithProp":true,"IsFeedbackWithProp":true,"IsEmailRemindChangeWithProp":null,"IsOnlyGrageAndRemarkVisibleWithProp":null,"FormalDate":"1462809600000","WorkingDay":63,"FloatingDay":15,"DimissionEndDate":"1464192000000","IsSystemEmailRemind":true,"GradeTargetProportionID":2474,"GradeTargetCheckRuleGroupID":"3977fe8c-3692-4f2e-9e5b-1dc3245f8348","UniqueKey":"1847","CreateBy":"williszuo(左忠豪)","CreateTime":"1504095169000","UpdateBy":"williszuo(左忠豪)","UpdateTime":"1504095169000","EnableFlag":true},"AssessPackageSettingExByAssessStaffIDResult":{"ID":1846,"IsPPE":false,"PPESpecialApplyProp":null,"PPEAgeCountDate":null,"PPEValidDate":null,"UniqueKey":"1846","CreateBy":"williszuo(左忠豪)","CreateTime":"1504095169000","UpdateBy":"williszuo(左忠豪)","UpdateTime":"1504095169000","EnableFlag":true},"AssessResult":{"ID":7755,"AssessStaffID":315518,"AssessLevelID":110,"AssessLevelName":"4星 (非常棒)","CustomAssessLevelID":null,"CustomAssessLevelName":null,"SumTotal":92,"AchievementProp":0,"AchievementScore":null,"BehaviorProp":0,"BehaviorScore":null,"KeyEventScore":null,"KeyEventRemark":null,"DirectTotalScore":95,"UniqueKey":"7755","CreateBy":"williszuo(左忠豪)","CreateTime":"1504179129577","UpdateBy":"williszuo(左忠豪)","UpdateTime":"1504180158047","EnableFlag":true},"AchievementItemControlList":[],"HasPropDashedAssessorByAssessStaffID":true,"PeerFeedbackListResult":[{"ID":140,"StaffID":23906,"StaffName":"charleneli(李凌)","FromID":64985,"FromName":"kinselykang(康仙鹏)","FeedBackType":1,"IsRead":0,"Tags":"我服了|了不起","FeedBackThings":"活水项目","FeedBackReason":"表现出色","IsAnonymous":0,"ReplyInfo":"","UpdateDate":"1504182698000","Memo1":"","Memo2":"","UniqueKey":"23906","CreateBy":null,"CreateTime":"/Date(-62135596800000)/","UpdateBy":null,"UpdateTime":"/Date(-62135596800000)/","EnableFlag":false},{"ID":139,"StaffID":23906,"StaffName":"charleneli(李凌)","FromID":33924,"FromName":"williszuo(左忠豪)","FeedBackType":0,"IsRead":0,"Tags":"顶呱呱|牛叉","FeedBackThings":"TA系统","FeedBackReason":"干得不错，加油","IsAnonymous":0,"ReplyInfo":"","UpdateDate":"1504181775000","Memo1":"","Memo2":"","UniqueKey":"23906","CreateBy":null,"CreateTime":"/Date(-62135596800000)/","UpdateBy":null,"UpdateTime":"/Date(-62135596800000)/","EnableFlag":false},{"ID":141,"StaffID":23906,"StaffName":"charleneli(李凌)","FromID":11756,"FromName":"rolingchen(陈利蓉)","FeedBackType":1,"IsRead":0,"Tags":"浪起来|人中之龙|点子王","FeedBackThings":"浪起来项目","FeedBackReason":"表现中规中矩","IsAnonymous":1,"ReplyInfo":"","UpdateDate":"1504182870000","Memo1":"","Memo2":"","UniqueKey":"23906","CreateBy":null,"CreateTime":"/Date(-62135596800000)/","UpdateBy":null,"UpdateTime":"/Date(-62135596800000)/","EnableFlag":false}],"SelfRemarkResult":{"ID":1020,"AssessStaffID":315518,"Remark":"发的撒分范德萨飞洒","UniqueKey":"1020","CreateBy":"williszuo(左忠豪)","CreateTime":"1504179129577","UpdateBy":"williszuo(左忠豪)","UpdateTime":"1504179864060","EnableFlag":true},"SelfLeadershipComments":{"Advantages":["无"],"Disadvantages":["无"],"QuestionRemarks":null},"AccessoryList":[],"LastResult":""},"isSucceed":true,"isException":false,"isNoAuthenication":false,"Title":null,"Detail":null,"Tips":null,"Code":null,"Errors":null}}')

            }
        },
        components: {
            Tags
        },
        methods: {
            getData () {
                const _this = this;
                
                Util.ajax.get('/punchdb/loadAll', {
                  params: {
             
                  }
                }).then(function(res) {
                    
                })
                let res = this.API.result.Data;
                this.submitData = this.API.result.Data;
                this.staffName = res.AssessStaffBaseInfoQueryResult.StaffName;
                this.remarkRate = 0;
                this.remarkName = '';
                this.assessStaffRemarkListResult  = res.AssessStaffRemarkListResult.find(f=>f.OwnerAssessStaffID ===res.AssessStaffBaseInfoQueryResult.CurHandleManAssessStaffID);
                switch (this.assessStaffRemarkListResult.AssessLevelID){
                    case 110:
                        this.remarkRate = 4;
                        this.remarkName = this.assessStaffRemarkListResult.AssessLevelName
                        break;
                }
                this.zongHePingYu = res.SelfLeadershipData.Remarks.map(r=>{
                    let RemarkName = r.RemarkName;
                    let Content = r.Content;
                    return {RemarkName,Content};
                });
                //XingWeiPingGu options
                this.commentList = res.LeadershipData.Scores.map(m=>{
                    let ScoreName = m.Name;
                    let Score = m.Score;
                    return {Score,ScoreName};
                });


                this.XingWeiPingGuList = res.LeadershipData.Dimensions.map(m=>{
                    let SortNum = m.SortNum;
                    let DimensionName = m.DimensionName;
                    let selfScoreName = res.SelfLeadershipData.Dimensions.find(f=>f.SortNum===SortNum).Behaviors[0].ScoreName;
                    let shangJiPingJiaResult = res.LeadershipData.Dimensions.find(f=>f.SortNum===SortNum).Behaviors[0];
                    return {SortNum,DimensionName,selfScoreName,shangJiPingJiaResult};
                });

                const assessStaffRemarkListResult = res.AssessStaffRemarkListResult.find(f=>f.OwnerAssessStaffID===res.AssessStaffBaseInfoQueryResult.CurHandleManAssessStaffID);
                this.zhongHePingGuCard.DirectTotalScore =  assessStaffRemarkListResult.DirectTotalScore;
                this.zhongHePingGuCard.QuanZhong=100;
                res.DashedAssessResultQueryListResult.forEach(f=>{
                    if (f.AssessorProp){
                        this.zhongHePingGuCard.QuanZhong-=parseInt(f.AssessorProp);
                    }
                });
                this.zhongHePingGuCard.SumTotal =  assessStaffRemarkListResult.SumTotal;
                this.zhongHePingGuCard.AssessLevelID =  assessStaffRemarkListResult.AssessLevelID;
                this.zhongHePingGuCard.rateValue = getValue(this.zhongHePingGuCard.AssessLevelID,AssessLevelID_RATE).value;
                this.zhongHePingGuCard.AssessLevelName =  assessStaffRemarkListResult.AssessLevelName;
                this.zhongHePingGuCard.Remark = assessStaffRemarkListResult.Remark;
                this.zhongHePingGuCard.OwnerName = assessStaffRemarkListResult.OwnerName;
                this.zhongHePingGuCard.ownerRemark = assessStaffRemarkListResult.ownerRemark;

                this.xiangGuanPingGuDaiQuanZhongCard = res.DashedAssessResultQueryListResult.filter(f=>f.AssessorTypeID===3);


            },
            setShangJiPingJia(sortNum,shangJiPingJiaResult){
                this.submitData.LeadershipData.Dimensions=this.submitData.LeadershipData.Dimensions.map(m=>{
                    if(m.SortNum===sortNum){    
                        m.Behaviors[0].ScoreName = shangJiPingJiaResult.ScoreName;
                        m.Behaviors[0].Score = shangJiPingJiaResult.Score;
                    }
                    console.log(m.Behaviors[0]);
                    return m;
                });    
                console.log(this.submitData.LeadershipData.Dimensions);
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
            }
        },
        mounted: function() {
            this.getData();
        }
    };
</script>