<style scoped>
.badge{
    font-weight: initial;
    padding: 3px 7px;
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
    height: 0.90rem;
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
    font-size:0.30rem;
    color: #666666;
    position:absolute; 
    left:0.38rem;
    top:0.32rem;
/*    padding-left:0.38rem;
    padding-top: 0.32rem;*/
}

.morebar{
    height: 0.90rem;
    padding: 0.23rem 0 0 3.10rem;
}
.active{
    background: #007aff;
    color:#ffffff;
}
.tabs{
    width: 100%;
    height: 0.90rem;
    padding:0;
    position: fixed;
    top: 0;
    font-size:0.30rem;
    background: #ffffff;
    color:#acacac;
}
.li-tab{
    width: 50%;
    height: 100%;
    display:inline-block;
    text-align: center;
}
.divTab{
    position: absolute;
    top:0.90rem;
    width: 100%;
    height: auto;
}
.titleneed{
  color:#ff3a31;
  font-size:0.24rem;  
}

</style>
<template>
<div id="index">
   <Buttons @click="showMsg1">领导力无法提交</Buttons>
   <Buttons @click="showMsg2">删除弹窗</Buttons>
   <Buttons @click="showMsg3">放弃弹窗</Buttons>
   <Buttons @click="showMsg4">提交成功</Buttons>
   <Buttons @click="showMsg5">自评无法提交</Buttons>
<!--    <Buttons @click="showMsg6">驳回</Buttons> -->
</div>
</template>
<script>

    import Util from '../libs/util.js';
    import {STEPNAME,TAGNAME,EVALUATEDNAME,MEMBER_STEP,MEMBER_STEP_SERCH,getValue} from '../constants.js';
    import Tags from '../components/tag.vue';
    import Buttons from '../components/button.vue';
    // import Modal from '../components/modal/Modal.vue';
    import ModalApi from '../components/modal/ModalApi';
    // import modalEventBind from '../components/modal/ModalEventBind';
    export default {
        mixins: [ModalApi],
        data () {
            return {
                modal10: false,
                value:null,
                tabsParam:['员工','基干'],//（这个也可以用对象key，value来实现）
                nowIndex:0,//默认第一
                titles:MEMBER_STEP,
                MaxMenu:5,
                hideSubMenu:false,
                moreContent:false,
                allMenus:[],
                subMenus:[
                    {title:'人力资源平台部',tag:'',deadLine:'7-7',deadLineHighlight:true,stepname:'自评'},
                    {title:'开发一组',tag:'员工/基干',deadLine:'7-14',deadLineHighlight:false,stepname:'上级评估'},
                    {title:'QQ游戏产品部',tag:'',deadLine:'7-18',deadLineHighlight:false,stepname2:'相关评估-带权重',desc:'johnsonyang (杨俊森)'}
                ],
                listDataLeader:[ ],
                listDataMember:[ ],
                listTitleDataLeader:[ ],
                listTitleDataMember:[ ],
                API:JSON.parse('{"result":{"Data":{"Suggest":{"Employee":{"Total":10,"BelowTarget":0,"NeedToImprove":0,"Strong":3,"Excellent":1,"Outstanding":0,"SpecialApply":5},"BasicManager":{"Total":8,"BelowTarget":0,"NeedToImprove":0,"Strong":1,"Excellent":1,"Outstanding":0,"SpecialApply":3}},"Assessed":{"Employee":{"Total":4,"BelowTarget":0,"NeedToImprove":1,"Strong":2,"Excellent":1,"Outstanding":0,"SpecialApply":2},"BasicManager":{"Total":2,"BelowTarget":0,"NeedToImprove":0,"Strong":2,"Excellent":0,"Outstanding":0,"SpecialApply":1}}},"isSucceed":true,"isException":false,"isNoAuthenication":false,"Title":null,"Detail":null,"Tips":null,"Code":null,"Errors":null}}')
            }
        },
        components: {
            Tags,
            Buttons
        },
        methods: {
            showMsg1:function(){
                this.alert({slot: 'slotA'});
            },
            showMsg2:function(index){
                this.confirm({slot: 'slotB'}, (ok) => {
                    if (ok) {
                        alert('删除成功');
                    }
                });
            },
            showMsg3:function(){
                this.confirm({slot: 'slotC'}, (ok) => {
                    if (ok) {
                        alert('放弃成功');
                    }
                });
            },
            showMsg4:function(){
                this.prompt({slot: 'slotD'});
            },
            showMsg5:function(){
                this.alert({slot: 'slotE'});
            },
            // showMsg6:function(){
            //     this.confirm({modalId:6,data:['上级审批', '员工自评','上级审批1', '员工自评2']}, (salary) => {
            //         alert('驳回' + salary);
            //     }, {inputType: 'number'});
            // },
            getData () {
                const _this = this;
                
                Util.ajax.get('/punchdb/loadAll', {
                  params: {
             
                  }
                }).then(function(res) {
                    
                })
                let res = this.API.result.Data;

                this.listDataMember = MEMBER_STEP.map(r=>{
                    let id=r.id;
                    let value=r.value;
                    let need;
                    let done=0;
                    switch (id)
                    {
                        case 7:
                            done=res.Suggest.Employee.Total - res.Assessed.Employee.Total;
                            break;
                        case 6:
                            need=res.Suggest.Employee.SpecialApply;
                            done=res.Assessed.Employee.SpecialApply;
                            break;
                        case 5:
                            need=res.Suggest.Employee.Outstanding;
                            done=res.Assessed.Employee.Outstanding;
                            break;
                        case 4:
                            need=res.Suggest.Employee.Excellent;
                            done=res.Assessed.Employee.Excellent;
                            break;
                        case 3:
                            need=res.Suggest.Employee.Strong;
                            done=res.Assessed.Employee.Strong;
                            break;
                        case 2:
                            need=res.Suggest.Employee.NeedToImprove;
                            done=res.Assessed.Employee.NeedToImprove;
                            break;
                        case 1:
                            need=res.Suggest.Employee.BelowTarget;
                            done=res.Assessed.Employee.BelowTarget;
                            break;
                    }
                    return {id,value,need,done}
                });


                this.listDataLeader = MEMBER_STEP.map(r=>{
                    let id=r.id;
                    let value=r.value;
                    let need;
                    let done=0;
                    switch (id)
                    {
                        case 7:
                            done=res.Suggest.BasicManager.Total - res.Assessed.BasicManager.Total;
                            break;
                        case 6:
                            need=res.Suggest.BasicManager.SpecialApply;
                            done=res.Assessed.BasicManager.SpecialApply;
                            break;
                        case 5:
                            need=res.Suggest.BasicManager.Outstanding;
                            done=res.Assessed.BasicManager.Outstanding;
                            break;
                        case 4:
                            need=res.Suggest.BasicManager.Excellent;
                            done=res.Assessed.BasicManager.Excellent;
                            break;
                        case 3:
                            need=res.Suggest.BasicManager.Strong;
                            done=res.Assessed.BasicManager.Strong;
                            break;
                        case 2:
                            need=res.Suggest.BasicManager.NeedToImprove;
                            done=res.Assessed.BasicManager.NeedToImprove;
                            break;
                        case 1:
                            need=res.Suggest.BasicManager.BelowTarget;
                            done=res.Assessed.BasicManager.BelowTarget;
                            break;
                    }
                    return {id,value,need,done}

                });

                this.listTitleDataMember = MEMBER_STEP_SERCH.map(r=>{
                    let id=r.id;
                    let need;
                    let all=0;
                    let special=0;
                    let done=0;
                    switch (id)
                    {
                        case 20:
                            all=res.Suggest.Employee.Total;
                            done=res.Assessed.Employee.Total;
                            special=res.Assessed.Employee.SpecialApply;
                            need=res.Suggest.Employee.Total - res.Assessed.Employee.Total;
                        break;

                    }
                    return {id,need,done,all,special}
                    console.log(id,need,done,all,special);
                });

                this.listTitleDataLeader = MEMBER_STEP_SERCH.map(r=>{
                    let id=r.id;
                    let need;
                    let all=0;
                    let special=0;
                    let done=0;
                    switch (id)
                    {
                        case 20:
                            all=res.Suggest.BasicManager.Total;
                            done=res.Assessed.BasicManager.Total;
                            special=res.Assessed.BasicManager.SpecialApply;
                            need=res.Suggest.BasicManager.Total - res.Assessed.BasicManager.Total;
                        break;

                    }
                    return {id,need,done,all,special}
                });

                this.subMenus = this.allMenus.slice(0,this.MaxMenu);
                

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