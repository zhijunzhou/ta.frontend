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
    height: 1.20rem;
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
    position: fixed;
    top:0.90rem;
    width: 100%;
    height: auto;
}
/*input#serch::-webkit-input-placeholder,textarea::-webkit-input-placeholder {
    padding-left: 0.40rem;
    color: #999;
}
input#serch:-ms-input-placeholder { // IE10+
    padding-left: 0.40rem;
    color: #999;
}
input#serch:-moz-placeholder { // Firefox4-18
    padding-left: 0.40rem;
    color: #999;
}
input#serch::-moz-placeholder { // Firefox19+
    padding-left: 0.40rem;
    color: #999;
}*/
</style>
<template>
<div id="index">
    <ul class="tabs">
        <li class="li-tab" v-for="(item,index) in tabsParam" 
        @click="toggleTabs(index)"
        :class="{active:index===nowIndex}">{{item}}</li>
    </ul>

    <div class="divTab" v-show="nowIndex===0">
        <Input id="serch" style="height: 0.70rem; width:6.94rem; margin:0.25rem 0.27rem 0.24rem 0.27rem; color:#919191;font-size:0.24rem; "></Input>
        <div style="height: 0.240rem; width:0.24rem; color:#919191;position: absolute; left: 0.5rem; top: 0.4rem;"><i class="icon ion-ios-search"></i></div>
        <Input id="serch" v-model="value" placeholder= " 输入RTX名搜索员工" style="height: 0.70rem; width:6.39rem; margin:-1.40rem 0.27rem 0.24rem 0.82rem; color:#919191;font-size:0.24rem; "></Input>
        <div style="color:#919191; font-size:0.24rem; height:0.375rem;  margin-top:-0.44rem; margin-bottom:0.27rem;" v-for="title in listTitleDataMember">
            <div style="display:inline;  margin-left:0.38rem; ">
                <span>开发一组，共</span>
                <span>{{title.all}}人</span>
            </div>
            <div style="display:inline; position:fixed; right:0.32rem;" >
                <span>已评</span>
                <span>{{title.done}}</span>&nbsp;&nbsp;
                <span>特殊申报</span>
                <span>{{title.special}}</span>&nbsp;&nbsp;
                <span>未评</span>
                <span style="color:#ff3a31;">{{title.need}}</span>
            </div>
        </div>
        <ul class="list">
            <li class="item" style="height: 1.00rem;margin:0;" v-for="title in listDataMember">
                <div class="titlescss">
                    {{title.value}}
                </div>
                <span style="position: absolute; right:0.35rem;color: #cbcbcb;">
                    <span v-if="title.need||title.need===0" style="color:#acacac;font-size:0.24rem;">建议{{title.need}}人, 已评</span>
                    <span style="color:#acacac;font-size:0.24rem;">{{title.done}}人</span>&nbsp;
                    <i class="icon ion-chevron-right" style="padding:0.33rem 0.40rem auto 0.20rem"></i>
                </span>
            </li>
        </ul>
    </div>
    <div class="divTab" v-show="nowIndex===1">
        <Input id="serch" v-model="value" style="height: 0.70rem; width:6.94rem; margin:0.25rem 0.27rem 0.24rem 0.27rem; color:#919191;font-size:0.24rem; "></Input>
        <div style="height: 0.240rem; width:0.24rem; color:#919191;position: absolute; left: 0.5rem; top: 0.4rem;"><i class="icon ion-ios-search"></i></div>
        <Input id="serch" v-model="value" placeholder= " 输入RTX名搜索员工" style="height: 0.70rem; width:6.39rem; margin:-1.40rem 0.27rem 0.24rem 0.82rem; color:#919191;font-size:0.24rem; "></Input>
        <div style="color:#919191; font-size:0.24rem; height:0.375rem;  margin-top:-0.44rem; margin-bottom:0.27rem;" v-for="title in listTitleDataLeader">
            <div style="display:inline;  margin-left:0.38rem; ">
                <span>开发一组，共</span>
                <span>{{title.all}}人</span>
            </div>
            <div style="display:inline; position:fixed; right:0.32rem;" >
                <span>已评</span>
                <span>{{title.done}}</span>&nbsp;&nbsp;
                <span>特殊申报</span>
                <span>{{title.special}}</span>&nbsp;&nbsp;
                <span>未评</span>
                <span style="color:#ff3a31;">{{title.need}}</span>
            </div>
        </div>
        <ul class="list">
            <li class="item" style="height: 1.00rem;margin:0;" v-for="title in listDataLeader">
                <div class="titlescss">
                    {{title.value}}
                </div>
                <span style="position: absolute; right:0.35rem;color: #cbcbcb;">
                    <span v-if="title.need||title.need===0" style="color:#acacac;font-size:0.24rem;">建议{{title.need}}人, 已评</span>
                    <span style="color:#acacac;font-size:0.24rem;">{{title.done}}人</span>&nbsp;
                    <i class="icon ion-chevron-right" style="padding:0.33rem 0.40rem auto 0.20rem"></i>
                </span>
            </li>
        </ul>
    </div> 
    <div class="footer" >
      <span style="width:1.50rem; height:1.00rem; background-color:#ffffff; color:#acacac; text-align:center; color:#acacac;font-size:0.30rem; padding-top:0.52rem; position:fixed; bottom:0px; display:inline;">
      <div style="transform:rotate(180deg); width:0.30rem; position: absolute; left:0.56rem; top:0.16rem;"><i class="icon ion-log-in" ></i></div>返回</span>
      <span style="width:6.00rem; height:1.00rem; background-color:#007aff; text-align:center; color:#fff;font-size:0.30rem; padding-top:0.33rem; position:fixed; bottom:0px; margin-left:1.50rem;">提交</span>
      </div>       
</div>
</template>
<script>

    import Util from '../libs/util.js';
    import {STEPNAME,TAGNAME,EVALUATEDNAME,MEMBER_STEP,MEMBER_STEP_SERCH,getValue} from '../constants.js';
    import Tags from '../components/tag.vue';
    export default {
        data () {
            return {
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
            Tags
        },
        methods: {
            toggleTabs:function(index){
                this.nowIndex=index;
            },
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
                            special=res.Suggest.Employee.SpecialApply;
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
                            special=res.Suggest.BasicManager.SpecialApply;
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