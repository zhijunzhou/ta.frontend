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
.disabledsubmitbotton{
    background: #57a3f3;
}
.enabledsubmitbotton{
    background-color: #007aff;
}

#ivu-input-group-prepend{
    border: none; font-size: 0.35rem;background-color: #ffffff;
}
</style>
<template>
<div id="index">
    <ul class="tabs">
        <li class="li-tab" v-for="(item,index) in tabsParam" 
        @click="toggleTabs(index)"
        :class="{active:index===nowIndex}">{{item}}</li>
    </ul>

    <div class="divTab" v-show="nowIndex===0" style="height:100%; padding:0.90rem 0rem 2.00rem 0rem; overflow-y:auto;">
            <div style="width: 100%;text-align: center;padding: 0.40rem 0.40rem;">
                <Inputs id="serch" v-model="coderInputValue" placeholder= " 输入RTX名搜索员工" style="width: 6.00rem" @on-change="showButton(value)">
                    <span id="ivu-input-group-prepend" slot="prepend">
                        <i class="icon ion-ios-search"></i>
                    </span>
                    <span slot="append"><Button type="primary" v-if="coderInputValue" style="color: #fff;background-color: #2d8cf0;border-color: #2d8cf0;">搜索</Button></span>
                </Inputs>

            </div>
        <div style="color:#919191; font-size:0.24rem; height:0.375rem;   margin-bottom:0.27rem;" v-for="title in listTitleDataMember">

            <div style="display:inline;  margin-left:0.38rem; ">
                <span>开发一组，共</span>
                <span>{{title.all}}人</span>
            </div>
            <div style="display:inline; position:absolute; right:0.32rem;" >
                <span>已评</span>
                <span>{{title.done}}</span>&nbsp;&nbsp;
                <span>特殊申报</span>
                <span>{{title.special}}</span>&nbsp;&nbsp;
                <span>未评</span>
                <span style="color:#ff3a31;">{{title.need}}</span>
            </div>
        </div>
        <div>
            <ul class="list">
                <li class="item" style="height: 0.90rem;margin:0;" v-for="title in listDataMember">
                    <div class="titlescss">
                        {{title.value}}
                    </div>
                    <span style="position: absolute; right:0.35rem;color: #cbcbcb;">
                        <span v-if="title.need||title.need===0" style="color:#acacac;font-size:0.24rem;">建议{{title.need}}人, 已评</span>
                        <span class="titleneed" v-if="title.id=== 7 "style="color:#ff3a31;font-size:0.24rem;">{{title.done}}</span>
                         <span class="titleneed" v-if="title.id !== 7 " style="color:#acacac;font-size:0.24rem;">{{title.done}}</span>
                        <span style="color:#acacac;font-size:0.24rem;">人</span>&nbsp;
                        <i class="icon ion-chevron-right" style="padding:0.33rem 0.40rem auto 0.20rem"></i>
                    </span>
                </li>
            </ul>
        </div>
        <div style="font-size:0.24rem; width:7.50rem;  background-color:#ffffff;  margin-top:0.32rem; height:auto;" v-if="showInforFlag">
                <div style="font-size:0.24rem; width:6.96rem; margin:0rem auto;"  >
                    <div style="color:#ff8661;  padding-top:0.27rem; height:0.70rem; ">
                        <i class="icon ion-ios-information"></i>
                        <span>监测到如下信息：</span>
                    </div>
                    <div class="row" style=" color:#919191; font-size:0.24rem; border-bottom:0.01rem solid #acacac; padding:0.24rem 0 0 0 ; width:6.96rem;" v-for="title in listDataLeader">
                      <div class="col col-40" style="padding-left:0; margin-left:0; text-align:left;">{{title.value}}</div>
                      <div class="col col-40">{{title.value}}<br>{{title.value}}</div>
                      <div class="col" style="color: #ff8661; font-size:0.24rem; text-decoration:underline; text-align:right; padding-right:0; margin-right:0;">处理</div>
                    </div>      
                </div>
            </div>
    </div>
    <div class="divTab" v-show="nowIndex===1" style="height:100%; padding:0.90rem 0rem 2.00rem 0rem; overflow-y:scroll;">
            <div style="width: 100%;text-align: center;padding: 0.40rem 0.40rem;">
                <Inputs id="serch" v-model="leaderInputValue" placeholder= " 输入RTX名搜索员工" style="width: 6.00rem" @on-change="showButton">
                    <span id="ivu-input-group-prepend" slot="prepend">
                        <i class="icon ion-ios-search"></i>
                    </span>
                    <span slot="append"><Button type="primary" v-if="leaderInputValue" style="color: #fff;background-color: #2d8cf0;border-color: #2d8cf0;">搜索</Button></span>
                </Inputs>

            </div>
            <div style="color:#919191; font-size:0.24rem; height:0.375rem;  margin-top:-0.44rem; margin-bottom:0.27rem;" v-for="title in listTitleDataLeader">
                <div style="display:inline;  margin-left:0.38rem; ">
                    <span>开发一组，共</span>
                    <span>{{title.all}}人</span>
                </div>
                <div style="display:inline; position:absolute; right:0.32rem;" >
                    <span>已评</span>
                    <span>{{title.done}}</span>&nbsp;&nbsp;
                    <span>特殊申报</span>
                    <span>{{title.special}}</span>&nbsp;&nbsp;
                    <span>未评</span>
                    <span style="color:#ff3a31;">{{title.need}}</span>
                </div>
            </div>
            <div>
                <ul class="list">
                    <li class="item" style="height: 0.90rem;margin:0;" v-for="title in listDataLeader">
                        <div class="titlescss">
                            {{title.value}}
                        </div>
                        <span style="position: absolute; right:0.35rem;color: #acacac;">
                            <span v-if="title.need||title.need===0" style="color:#acacac;font-size:0.24rem;">建议{{title.need}}人, 已评</span>
                            <span class="titleneed" v-if="title.id=== 7 " style="color:#ff3a31;font-size:0.24rem;">{{title.done}}</span>
                            <span class="titleneed" v-if="title.id !== 7 " style="color:#acacac;font-size:0.24rem;">{{title.done}}</span>
                            <span style="color:#acacac;font-size:0.24rem;">人</span>&nbsp;
                            <i class="icon ion-chevron-right" style="padding:0.33rem 0.40rem auto 0.20rem"></i>
                        </span>
                    </li>
                </ul>
            </div>
            <div style="font-size:0.24rem; width:7.50rem;  background-color:#ffffff;  margin-top:0.32rem; height:auto;" v-if="showInforFlag">
                <div style="font-size:0.24rem; width:6.96rem; margin:0rem auto;"  >
                    <div style="color:#ff8661;  padding-top:0.27rem; height:0.70rem; ">
                        <i class="icon ion-ios-information"></i>
                        <span>监测到如下信息：</span>
                    </div>
                    <div class="row" style=" color:#919191; font-size:0.24rem; border-bottom:0.01rem solid #acacac; padding:0.24rem 0 0 0 ; width:6.96rem;" v-for="title in listDataLeader">
                      <div class="col col-40" style="padding-left:0; margin-left:0; text-align:left;">{{title.value}}</div>
                      <div class="col col-40">{{title.value}}<br>{{title.value}}</div>
                      <div class="col" style="color: #ff8661; font-size:0.24rem; text-decoration:underline; text-align:right; padding-right:0; margin-right:0;">处理</div>
                    </div>      
                </div>
            </div>
    </div> 
    
    


    <div style="color:#ff8661; font-size:0.24rem; padding:0.32remrem 0.32rem 0.27rem 0.32rem; position:fixed; top:9.20rem; left:0.24rem;" v-if="showTJFlag">注意：尚有人员待评估，不能提交</div>
    <div class="footer" >
      <span style="width:1.50rem; height:1.00rem; background-color:#ffffff; color:#acacac; text-align:center; color:#acacac;font-size:0.30rem; padding-top:0.52rem; position:fixed; bottom:0rem; display:inline;" v-model="url"  @click="goToUrl(url)" >
      <div  style="transform:rotate(180deg); width:0.30rem; position: fixed; left:0.56rem; bottom:0.42rem;"><i class="icon ion-log-in"></i></div>返回</span>
      <span id="submit" style="width:6.00rem; height:1.00rem;  text-align:center; color:#fff;font-size:0.30rem; padding-top:0.33rem; position:fixed; bottom:0px; margin-left:1.50rem; " @click="postData" :class="{ enabledsubmitbotton: !showTJFlag }">提交</span>
      <span id="submit" style="width:6.00rem; height:1.00rem;  text-align:center; color:#fff;font-size:0.30rem; padding-top:0.33rem; position:fixed; bottom:0px; margin-left:1.50rem; " :class="{ disabledsubmitbotton: showTJFlag}">提交</span>
    </div>       
</div>
</template>
<script>

    import Util from '../libs/util.js';
    import {STEPNAME,TAGNAME,EVALUATEDNAME,MEMBER_STEP,MEMBER_STEP_SERCH,getValue} from '../constants.js';
    import Tags from '../components/tag.vue';
    import Inputs from '../components/input.vue';
    export default {
        data () {
            return {
                coderInputValue:null,
                leaderInputValue:null,
                tabsParam:['员工','基干'],//（这个也可以用对象key，value来实现）
                nowIndex:0,//默认第一
                titles:MEMBER_STEP,
                MaxMenu:5,
                hideSubMenu:false,
                moreContent:false,
                allMenus:[],
                showButtonFlag:false,
                showInforFlag:false,
                showTJFlag:false,
                url:'/',
                subMenus:[
                    {title:'人力资源平台部',tag:'',deadLine:'7-7',deadLineHighlight:true,stepname:'自评'},
                    {title:'开发一组',tag:'员工/基干',deadLine:'7-14',deadLineHighlight:false,stepname:'上级评估'},
                    {title:'QQ游戏产品部',tag:'',deadLine:'7-18',deadLineHighlight:false,stepname2:'相关评估-带权重',desc:'johnsonyang (杨俊森)'}
                ],
                listDataLeader:[ ],
                listDataMember:[ ],
                listTitleDataLeader:[ ],
                listTitleDataMember:[ ],
                API:JSON.parse('{"result":{"Data":{"Suggest":{"Employee":{"Total":10,"BelowTarget":0,"NeedToImprove":0,"Strong":3,"Excellent":1,"Outstanding":0,"SpecialApply":5},"BasicManager":{"Total":8,"BelowTarget":0,"NeedToImprove":0,"Strong":1,"Excellent":1,"Outstanding":0,"SpecialApply":3}},"Assessed":{"Employee":{"Total":1,"BelowTarget":0,"NeedToImprove":1,"Strong":2,"Excellent":1,"Outstanding":0,"SpecialApply":2},"BasicManager":{"Total":8,"BelowTarget":0,"NeedToImprove":0,"Strong":2,"Excellent":0,"Outstanding":0,"SpecialApply":1}}},"isSucceed":true,"isException":false,"isNoAuthenication":false,"Title":null,"Detail":null,"Tips":null,"Code":null,"Errors":null}}')
            }
        },
        components: {
            Tags,
            Inputs
        },
        methods: {
            goToUrl:function(url) {
                this.$router.push(url);
                console.log(url);
            },
            postData:function(){
                this.showInforFlag = !this.showInforFlag; 
            },
            showButton:function(value){
                if(this.value.length === 0 ){
                    this.showButtonFlag = false;
                }
                else{
                    this.showButtonFlag = true;  
                }
            },
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

                    if(this.listTitleDataMember[0].need !==0 || this.listTitleDataLeader[0].need){
                        this.showTJFlag = true;

                    }else{
                        this.showTJFlag = false;

                    }

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