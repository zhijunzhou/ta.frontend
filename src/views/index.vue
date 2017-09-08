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
    height: 1.40rem;
    box-shadow:none;
    border-radius:10px;
    overflow:auto;
}

.card .item{
    height: 1.20rem;
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
        <ul class="list">
            <li class="item"  style="height: 1.00rem;margin:0;" @click="showSubMenu">
                <MenuList :MenuListData="MenuListData" :hideSubMenu="hideSubMenu">
                </MenuList>
            </li>
                <PendingTaskList :PendingTaskListData="PendingTaskListData" :hideSubMenu="hideSubMenu"></PendingTaskList>
            <div class="morebar reminderColor" @click="getMore" v-if="!hideSubMenu && MenuListData.length>0">
                <span v-if="moreContent">收起 &nbsp;&nbsp;<i class="icon ion-chevron-up" ></i></span>
                <span v-else>查看更多 &nbsp;&nbsp;<i class="icon ion-chevron-down" ></i></span>
            </div>
            <li class="item" style="height: 1.00rem;margin:0;" v-for="title in titles" @click="goToUrl(title.url)">
                <div class="titlescss" >
                    {{title.name}}
                </div>
                <span style="position: absolute; right:0.35rem;color: #cbcbcb;"><i class="icon ion-chevron-right"></i></span>
            </li>
        </ul>
    </div>
</template>
<script>

    import Util from '../libs/util.js';
    import {STEPNAME,TAGNAME,EVALUATEDNAME,getValue} from '../constants.js';
    import Tags from '../components/tag.vue';
    import MenuList from '../components/MenuList.vue';
    import PendingTaskList from '../components/PendingTaskList.vue';
    export default {
        data () {
            return {
                model6:'',
                MenuListData:[],
                PendingTaskListData:[],
                titles:[
                    {name:'我的评估结果',url:'/p021'},
                    {name:'下级评估结果',url:'/p090'},
                    {name:'员工评估日程',url:'/p100'},
                    {name:'员工评估指引',url:'/p110'},
                    {name:'360领导力评估',url:'/p040'},
                    {name:'意见和反馈',url:'/p120'},
                    {name:'我的评估结果',url:'/p071'}
                ],
                MaxMenu:5,
                hideSubMenu:false,
                moreContent:false,
                allMenus:[],
                subMenus:[],
                API:JSON.parse( '{"result":{"Data":[{"MyTaskID":40526,"OwnerID":645,"OwnerName":"kals(邬沛君)","StepID":51,"StepName":"上级评估(员工/基干)","PackageID":8764,"PackageName":"人力资源平台部","DisplayGroupName":"HR系统开发中心","PeriodID":1036,"PeriodName":"20170727DSS","AssessStaffID":309889,"OwnerAssessStaffID":309889,"IsPackageManager":false,"IsFinished":false,"SubmitTypeID":1,"SubmitTypeName":"未提交","StartTime":"1502337306000","EndTime":null,"CurStepName":null,"Deadline":"1509465600000","RemindAheadDays":1,"Desc":null,"CanGiveUp":false,"UniqueKey":"40526","CreateBy":"williszuo(左忠豪)","CreateTime":"1502337306000","UpdateBy":"williszuo(左忠豪)","UpdateTime":"1502337306000","EnableFlag":true},{"MyTaskID":40389,"OwnerID":645,"OwnerName":"kals(邬沛君)","StepID":30,"StepName":"自评","PackageID":8721,"PackageName":"人力资源平台部","DisplayGroupName":"HR系统开发中心","PeriodID":1006,"PeriodName":"20170719_4DSS","AssessStaffID":309454,"OwnerAssessStaffID":309454,"IsPackageManager":false,"IsFinished":false,"SubmitTypeID":1,"SubmitTypeName":"未提交","StartTime":"1501138116000","EndTime":null,"CurStepName":null,"Deadline":"1499702400000","RemindAheadDays":1,"Desc":null,"CanGiveUp":false,"UniqueKey":"40389","CreateBy":"williszuo(左忠豪)","CreateTime":"1501138116000","UpdateBy":"williszuo(左忠豪)","UpdateTime":"1501138116000","EnableFlag":true},{"MyTaskID":40548,"OwnerID":645,"OwnerName":"kals(邬沛君)","StepID":96,"StepName":"上级评估(员工/基干)","PackageID":8721,"PackageName":"人力资源平台部","DisplayGroupName":"HR系统开发中心","PeriodID":1006,"PeriodName":"20170719_4DSS","AssessStaffID":309454,"OwnerAssessStaffID":309454,"IsPackageManager":false,"IsFinished":false,"SubmitTypeID":1,"SubmitTypeName":"未提交","StartTime":"1502696650000","EndTime":null,"CurStepName":null,"Deadline":"1499702400000","RemindAheadDays":1,"Desc":null,"CanGiveUp":false,"UniqueKey":"40548","CreateBy":"jacknie(聂志鹏)","CreateTime":"1502696650000","UpdateBy":"jacknie(聂志鹏)","UpdateTime":"1502696650000","EnableFlag":true},{"MyTaskID":32545,"OwnerID":645,"OwnerName":"kals(邬沛君)","StepID":90,"StepName":"相关评估-带权重","PackageID":7370,"PackageName":"安全平台部","DisplayGroupName":"终端安全组","PeriodID":868,"PeriodName":"TA评估+职级","AssessStaffID":263170,"OwnerAssessStaffID":null,"IsPackageManager":false,"IsFinished":false,"SubmitTypeID":1,"SubmitTypeName":"未提交","StartTime":"1495789357000","EndTime":null,"CurStepName":null,"Deadline":"1495641600000","RemindAheadDays":0,"Desc":"[被评估人:gmguo(郭冕)]","CanGiveUp":false,"UniqueKey":"32545","CreateBy":"williszuo(左忠豪)","CreateTime":"1495789357000","UpdateBy":"williszuo(左忠豪)","UpdateTime":"1495789357000","EnableFlag":true},{"MyTaskID":32540,"OwnerID":645,"OwnerName":"kals(邬沛君)","StepID":95,"StepName":"相关评估-无权重","PackageID":7370,"PackageName":"安全平台部","DisplayGroupName":"应用运维安全中心","PeriodID":868,"PeriodName":"TA评估+职级","AssessStaffID":263162,"OwnerAssessStaffID":null,"IsPackageManager":false,"IsFinished":false,"SubmitTypeID":1,"SubmitTypeName":"未提交","StartTime":"1495789357000","EndTime":null,"CurStepName":null,"Deadline":"1495641600000","RemindAheadDays":0,"Desc":"[被评估人:lakehu(胡珀)]","CanGiveUp":false,"UniqueKey":"32540","CreateBy":"williszuo(左忠豪)","CreateTime":"1495789357000","UpdateBy":"williszuo(左忠豪)","UpdateTime":"1495789357000","EnableFlag":true},{"MyTaskID":32379,"OwnerID":645,"OwnerName":"kals(邬沛君)","StepID":40,"StepName":"上级评估(员工/基干)","PackageID":7295,"PackageName":"人力资源平台部","DisplayGroupName":"HR系统开发中心","PeriodID":861,"PeriodName":"TA2_20170525_williszuo","AssessStaffID":262604,"OwnerAssessStaffID":262604,"IsPackageManager":false,"IsFinished":false,"SubmitTypeID":1,"SubmitTypeName":"未提交","StartTime":"1495717715000","EndTime":null,"CurStepName":null,"Deadline":"1495641600000","RemindAheadDays":0,"Desc":null,"CanGiveUp":false,"UniqueKey":"32379","CreateBy":"williszuo(左忠豪)","CreateTime":"1495717715000","UpdateBy":"williszuo(左忠豪)","UpdateTime":"1495717715000","EnableFlag":true}],"isSucceed":true,"isException":false,"isNoAuthenication":false,"Title":null,"Detail":null,"Tips":null,"Code":null,"Errors":null}}')

            }
        },
        components: {
            Tags,
            MenuList,
            PendingTaskList
        },
        methods: {
            goToUrl (url) {
                this.$router.push(url);
            },
            getData () {
                const _this = this;
                
                Util.ajax.get('/GetPendingTaskList', {
                  params: {
             
                  }
                }).then(function(res) {
                    
                })
                let res = this.API.result.Data;
                this.MenuListData = res;
                this.PendingTaskListData = this.MenuListData.slice(0,this.MaxMenu);
                
            },
            getMore(){
                this.moreContent = !this.moreContent;
                this.subMenus = this.moreContent?this.allMenus:this.allMenus.slice(0,this.MaxMenu);
                this.PendingTaskListData = this.moreContent?this.MenuListData:this.MenuListData.slice(0,this.MaxMenu);
            },
            
            showSubMenu() {
                this.hideSubMenu = !this.hideSubMenu;
            }
        },
        mounted: function() {
            this.getData();
        }
    };
</script>