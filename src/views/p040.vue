<style scoped>
.index{padding: 0.22rem;background-color: #f5f5f5;height: 100%;overflow-x: auto;}
.h1{font-size: 0.32rem; color: #3f3f3f;padding-bottom:0.22rem;padding-top:0.35rem;}
.h2{font-size: 0.30rem; color: #5e5e5e}
/*说明信息*/
.h3{font-size: 0.24rem; color: #acacac}
.bg1{background: #66cc66;color:white;text-align: center;height: 1rem;line-height: 1rem}
.bg2{background: #0066ff;color:white;text-align: center;height: 1rem;line-height: 1rem}
.tabbar{position: fixed;bottom: 0;left:0; width: 100%;}
.arrow-div{border: 1px solid #acacac;border-radius: 100%;height: .44rem;width: .44rem;text-align: center}
.bg4{background: #ffffff;padding:.22rem;border-radius: 0.1rem;}
.icon-img{width: .77rem;height: .77rem;border: 1px solid #007aff;border-radius: 100%;overflow: hidden;}
.icon-img img{width: 100%;}
.tcc{text-align: center}
.span{border: 1px solid #007aff;color:#007aff;}
.title{margin: 0.22rem 0}
.bg3{background: #ffffff;display: flex;flex-direction: column;    align-items: center;justify-content: center;height: 1rem}
</style>
<template>
        <div class="index" style="height:12.34rem; overflow-y:auto;">
<!--             <div>
                <Row type="flex" justify="center" align="middle" class="code-row-bg bg4">
                <Col span="4" >
                    <ProfilePhoto></ProfilePhoto>
                </Col>
                <Col span="14" >
                    <div class="h3">
                        <p>评估环节： {{MyTask.StepName}}</p>
                        <p>被反馈人： {{AssessStaffBaseInfo.StaffName}}</p>
                    </div>
                </Col>
                <Col span="6">
                    <div class="tcc">
                        <Button @click="RejectPending(MyTask.MyTaskID)" class="span" type="ghost" shape="circle" icon="close">放弃</Button>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col span="24">
                    <div class="title h1">领导能力评估</div>
                </Col>
            </Row>
            </div> -->
            <AssessStaffBaseInfo :MyTask="MyTask" :AssessStaffBaseInfo="AssessStaffBaseInfo" @click="RejectPending(MyTask.MyTaskID)"></AssessStaffBaseInfo>
            <LeadershipQuestion :LeadershipContent="LeadershipContent" :setLeadershipContent="setLeadershipContent"></LeadershipQuestion>
            <LeardershipRemark style="margin-top:0.2rem"></LeardershipRemark>
            <CommandBar class="tabbar"></CommandBar>
            <Footer>
                <span style="width:1.50rem; height:1.00rem; background-color:#ffffff; color:#acacac; text-align:center; color:#acacac;font-size:0.30rem; padding-top:0.52rem; position:fixed; bottom:0rem;left:0; display:inline;" @click="goToUrl('/')">
                    <div style="transform:rotate(180deg); width:0.30rem; position: fixed; left:0.56rem; bottom:0.40rem;"><i class="icon ion-log-in" ></i></div>返回
                </span>
                <span style="width:3.00rem; height:1.00rem; background-color:#53cd51; text-align:center; color:#fff;font-size:0.30rem; padding-top:0.33rem; position:fixed; bottom:0px; margin-left:1.50rem; " @click="saveDraft">存草稿</span>
                <span style="width:3.00rem; height:1.00rem; background-color:#007aff; text-align:center; color:#fff;font-size:0.30rem; padding-top:0.33rem; position:fixed; bottom:0px; margin-left:4.5rem; " @click="submit">提交</span>
            </Footer>
        </div>
    
</template>
<script>

import CommandBar from '../components/CommandBar';
import ProfilePhoto from '../components/ProfilePhoto';
import LeadershipQuestion from '../components/LeadershipQuestion';
import LeardershipRemark from '../components/LeardershipRemark';
import AssessStaffBaseInfo from '../components/AssessStaffBaseInfo';
import Util from '../libs/util';
import ModalApi from '../components/modal/ModalApi';
import Footer from '../components/footer';

    export default {
        created () {
            
        },
        mixins: [ModalApi],
        components: {
            LeadershipQuestion,
            LeardershipRemark,
            ProfilePhoto,
            CommandBar,
            AssessStaffBaseInfo
        },
        data () {
            return{
                boxHeight: null,
                submitData:null,
                tabbarH: null,
                tag: [
                    {title: '业务', color: '#0066ff'},
                    {title: '管理',color: '#66cc66'}
                ],
                MyTask: {
                },
                LeadershipContent:{},
                AssessStaffBaseInfo: {
                },
                API: JSON.parse('{"result":{"Data":{"MyTask":{"MyTaskID":32789,"OwnerID":33,"OwnerName":"baal(黎巍)","StepID":97,"StepName":"领导力下级反馈","PackageID":7489,"PackageName":"人力资源部","DisplayGroupName":"投资公司HR管理组","PeriodID":881,"PeriodName":"TA2—测试20170527dss","AssessStaffID":265519,"OwnerAssessStaffID":null,"IsPackageManager":false,"IsFinished":false,"SubmitTypeID":1,"SubmitTypeName":"未提交","StartTime":"1496194865000","EndTime":null,"CurStepName":null,"Deadline":"1495641600000","RemindAheadDays":2,"Desc":"[反馈对象:dustingu(顾德峻)]","CanGiveUp":false,"UniqueKey":"32789","CreateBy":"williszuo(左忠豪)","CreateTime":"1496194865000","UpdateBy":"williszuo(左忠豪)","UpdateTime":"1496194865000","EnableFlag":true},"AssessStaffBaseInfo":{"AssessStaffID":265519,"PeriodID":881,"PeriodName":"TA2—测试20170527dss","PackageID":7489,"PackageName":"人力资源部","PackageLevelID":40,"PackageLevelName":"部门","PackageLocationCode":"007486.007489","StaffID":17588,"StaffName":"dustingu(顾德峻)","ParentAssessStaffID":265517,"ParentID":55228,"ParentName":"michaelhli(李辉)","IsBeAssessed":true,"IsAssess":false,"IsBeAssessedMidManager":false,"IsAssessMidManager":false,"IsPackageManager":false,"FLevel":4,"LocationString":"0264799.0264802.0265517.0265519","StaffIDLocationString":"0000239.0049745.0055228.0017588","StaffNameLocationString":" dustingu(顾德峻) -> michaelhli(李辉) -> maryroseai(艾兰) -> xidan(奚丹) ","StatusID":50,"StatusName":"员工自评","CurHandleManAssessStaffID":265519,"CurHandleManID":17588,"CurHandleManName":"dustingu(顾德峻)","IsNeedPassEvaluate":false,"IsNeedBGEvaluate":false,"BufferType":0,"Memo":null,"Tags":null,"StaffTypeID":2,"StaffTypeName":"正式","StaffStatusID":1,"StaffStatusName":"在职","GroupID":12866,"GroupName":"投资公司HR管理组","GroupFullName":"S3职能系统－HR与管理线/人力资源部/组织发展中心/投资公司HR管理组","GroupLocationCode":"OA000001.00002234.00000019.00002807.00012866","DisplayGroupName":"投资公司HR管理组","StaffPropertyID":4,"StaffPropertyName":"基层管理干部","InauguralDate":null,"BeFormalDate":null,"DimssionDate":null,"DashedAssessors":"hanlu(韩璐);baal(黎巍)","DashedAssessorList":null,"LeadershipAssessorList":null,"UniqueKey":"265519","CreateBy":null,"CreateTime":"/Date(-62135596800000)/","UpdateBy":null,"UpdateTime":"/Date(-62135596800000)/","EnableFlag":false},"LeadershipContent":{"PeriodId":579,"PeriodName":"TA测试周期","BeginTime":"2017-04-04","EndTime":"2017-04-06","UnitName":"HR应用开发组","ObjName":"stoneldeng(邓磊)","AssessorGuid":"8c3204681bad4d7494c01e01aa7ab452","AssessorName":"essienlin(林志成)","StatusId":2,"StatusName":"待提交","SubmitTime":null,"Score":null,"RoleId":198,"ScoreRuleId":44,"Dimensions":[{"DimensionScoreId":4574,"DimensionId":179,"DimensionName":"正直","Score":null,"SortNum":1,"Behaviors":[{"DimensionId":179,"QuestionScoreId":17638,"QuestionName":"公平、公正对待下属与他人。","Desc":null,"Score":null,"ScoreName":"","SortNum":2}]},{"DimensionScoreId":4575,"DimensionId":180,"DimensionName":"开放","Score":null,"SortNum":2,"Behaviors":[{"DimensionId":180,"QuestionScoreId":17639,"QuestionName":"站在用户和公司的角度考虑问题，必要时能牺牲“小我”利益。","Desc":null,"Score":null,"ScoreName":"","SortNum":3}]},{"DimensionScoreId":4576,"DimensionId":181,"DimensionName":"激情","Score":null,"SortNum":3,"Behaviors":[{"DimensionId":181,"QuestionScoreId":17640,"QuestionName":"为团队设立挑战性目标，激励下属，以身作则，不断努力达到更高的目标","Desc":null,"Score":null,"ScoreName":"","SortNum":1}]},{"DimensionScoreId":4577,"DimensionId":182,"DimensionName":"好学","Score":null,"SortNum":4,"Behaviors":[{"DimensionId":182,"QuestionScoreId":17641,"QuestionName":"带领团队从工作中、从错误中学习，不断反思、总结和提升。","Desc":null,"Score":null,"ScoreName":"","SortNum":1}]},{"DimensionScoreId":4578,"DimensionId":183,"DimensionName":"人才","Score":null,"SortNum":5,"Behaviors":[{"DimensionId":183,"QuestionScoreId":17642,"QuestionName":"积极识别并凝聚志同道合的优秀人才，并用人所长。","Desc":null,"Score":null,"ScoreName":"","SortNum":1}]},{"DimensionScoreId":4579,"DimensionId":184,"DimensionName":"用户","Score":null,"SortNum":6,"Behaviors":[{"DimensionId":184,"QuestionScoreId":17643,"QuestionName":"随时随地关注和体验产品与服务细节，挖掘用户核心需求和反馈。","Desc":null,"Score":null,"ScoreName":"","SortNum":1}]}],"Remarks":[{"RemarkContentId":1944,"RemarkName":"优势","Desc":null,"Content":"","SortNum":0},{"RemarkContentId":1945,"RemarkName":"不足","Desc":null,"Content":"","SortNum":0}],"Scores":[{"ScoreId":237,"Score":1,"Name":"非常不同意","SortNum":1},{"ScoreId":238,"Score":2,"Name":"不同意","SortNum":2},{"ScoreId":239,"Score":3,"Name":"基本不同意","SortNum":3},{"ScoreId":240,"Score":4,"Name":"基本同意","SortNum":4},{"ScoreId":241,"Score":5,"Name":"同意","SortNum":5},{"ScoreId":242,"Score":6,"Name":"非常同意","SortNum":6}],"CanReject":false,"IsValid":false,"HasUnknownItem":false,"InvalidBehaviorProportion":100,"InvalidBehaviorAllSame":false,"UpdateUser":""}},"isSucceed":true,"isException":false,"isNoAuthenication":false,"Title":null,"Detail":null,"Tips":null,"Code":null,"Errors":null}}')
            }
        },
        methods: {
            RejectPending(id) {
                this.confirm({slot: 'slotC'}, (ok) => {
                    if (ok) {
                        alert('放弃成功');
                    }
                });
                
            },
            goToUrl (url) {
                this.$router.push(url);
            },
            submit(){
                this.alert({slot: 'slotA'});
            },
            getData(){
                Util.ajax({
                method:"POST",
                url:'/LeadershipAssess/GetLeadershipContent',
                    data:{
                        myTaskID: this.MyTask.MyTaskID,
                    }
                }).then( (response) => {
                    console.log(response)
                })
                const res = this.API.result.Data;
                const {MyTask,AssessStaffBaseInfo,LeadershipContent} = res;
                this.submitData = res;
                this.MyTask = MyTask;
                this.AssessStaffBaseInfo = AssessStaffBaseInfo;
                this.LeadershipContent = LeadershipContent;
            },
            changeLeadershipContent(value){
                console.log('retrun',value)
                // this.LeadershipContent=value;
            },
            setLeadershipContent(DimensionId,ScoreName,Score){
                console.log(DimensionId,ScoreName,Score);
                this.submitData.LeadershipContent.Dimensions=this.submitData.LeadershipContent.Dimensions.map(m=>{
                    if(m.DimensionId===DimensionId){    
                        m.Behaviors[0].ScoreName = ScoreName;
                        m.Behaviors[0].Score = Score;
                    }
                    console.log(m.Behaviors[0]);
                    return m;
                });    
                console.log(this.submitData.LeadershipContent.Dimensions);
            },
        },
        mounted(){
            this.getData();
        }
    };
</script>