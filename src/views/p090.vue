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
    height: 100%;
    box-shadow:none;
    border-radius:10px;
    overflow:auto;
}


.list{
    padding: 0;
}

.list .item{
    border-width:1px 0px 0px 0px;
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
    text-align: center;
    border-width:1px 0px 0px 0px;
  /*  padding: 0.23rem 0 0 3.10rem;*/
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

.list:last-child.card {
    margin-bottom: 0.20rem;
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
        :class="{active:index===nowIndex}">{{item.name}}<span>(共{{item.count}}人)</span></li>
    </ul>

    <div class="divTab" v-show="nowIndex===0">
            <div style="margin-top:-0.00rem">
                <Card  style="height: 0.75rem; width:6.94rem; margin:0.25rem 0.27rem 0.24rem 0.27rem; color:#919191;font-size:0.24rem; border-radius:0.10rem;" ></Card>
                <div style="height: 0.240rem; width:0.24rem; color:#919191;position: absolute; left: 0.5rem; top: 0.4rem;"><i class="icon ion-ios-search"></i></div>
                <Input id="serch" v-model="value" placeholder= " 输入RTX名搜索员工" style="height: 0.70rem; width:6.39rem; margin:-1.40rem 0.27rem 0.24rem 0.82rem; color:#919191;font-size:0.24rem; " @on-change=" showButton(value)"></Input>
                <Button type="ghost" style="height: 0.75rem; color:#919191; background:#ffffff;  position: absolute; right: 0.26rem; top: 0.24rem; font-size:0.24rem; padding:auto 0.26rem;" v-if="showButtonFlag">搜索</Button>
            </div>
            <ul class="list">
                <li class="item" style="height: 1.00rem;margin:0;" v-for="title in kaoHeDanYuanList">
                    <div class="titlescss">
                        {{title.value}}
                    </div>
                    <span style="position: absolute; right:0.35rem;color: #cbcbcb;">
                        <span style="color:#acacac;font-size:0.24rem;">{{title.department}}人</span>&nbsp;
                        <i class="icon ion-chevron-right" style="padding:0.33rem 0.40rem auto 0.20rem"></i>
                    </span>
                </li>
            </ul>
    </div>
    <div class="divTab" v-show="nowIndex===1">
        <div >
          <!--       <Card  style="height: 0.75rem; width:6.94rem; margin:0.25rem 0.27rem 0.24rem 0.27rem; color:#919191;font-size:0.24rem; border-radius:0.10rem;" ></Card>
                <div style="height: 0.240rem; width:0.24rem; color:#919191;position: absolute; left: 0.5rem; top: 0.45rem;"><i class="icon ion-ios-search"></i></div> -->
                <Input id="serch" v-model="value" placeholder= " 输入RTX名搜索员工" style="height: 0.70rem; width:6.39rem; margin:0.20rem 0.27rem 0rem 0.82rem; color:#919191;font-size:0.24rem; " @on-change="showButton(value)"></Input>
                <Button type="ghost" style="height: 0.75rem; color:#919191; background:#ffffff;  position: absolute; right: 0.26rem; top: 0.24rem; font-size:0.24rem; padding:auto 0.26rem;" v-if="showButtonFlag">搜索</Button>
        </div>
         <div class="list card" style="height: 8.3rem">
            <div class="item " style="border-width: 0px 0px 1px 0px;border-style: solid;border-color: #ddd;padding: 0.36rem 0.34rem 0.14rem 0.34rem; height:0.8rem;">
                <div class="row" style="padding:0; font-size:0.26rem;">
                    <div class="col col-80" style="padding: 0;">
                        姓名
                    </div>
                    <div class="col col-20" style="text-align: right; padding: 0;">
                        操作
                    </div>
                </div>
            </div>
            <div class="item-body" style="overflow-y: auto;height: auto;">
                <div v-for="zh in gangWeiPingGuResult" class="row" style="margin-bottom:0;padding-top:0; height: 1rem;">
                    <div class="col col-80" style="padding-left: 0; padding-top:0;">
                        <a>{{zh.name}}</a>
                    </div>
                    <div class="col col-20" style="text-align: right;">
                        <a>查看</a>
                    </div>
                </div>
                
            </div>  
             <div class="item morebar reminderColor" @click="getMore" v-if="!hideSubMenu" style="height:1rem; margin-top:-0.56rem;">
                    <span v-if="moreContent">收起 &nbsp;&nbsp;<i class="icon ion-chevron-up" ></i></span>
                    <span v-else>查看更多 &nbsp;&nbsp;<i class="icon ion-chevron-down" ></i></span>
             </div>   
        </div>

    </div> 

    <Footers style="text-align:left;"> 
        <div class="footer" style="width:7.50rem; height:1.00rem; background-color:#007aff; text-align:center; color:#fff;font-size:0.30rem; padding-top:0.33rem; position:fixed; bottom:0px; display:inline;" @click="goToUrl(goBackUrl)">
            <div style="transform:rotate(180deg); width:0.30rem; position: absolute; left:3.10rem; top:0.36rem;"><i class="icon ion-log-in" ></i></div>
            &nbsp;返回
        </div>
    </Footers>  
   
</div>
</template>
<script>

    import Util from '../libs/util.js';
    import {STEPNAME,TAGNAME,EVALUATEDNAME,MEMBER_STEP,MEMBER_STEP_SERCH,getValue} from '../constants.js';
    import Footers from '../components/footer.vue';
    export default {
        data () {
            return {
                kaoHeDanYuanList:[
                    {value:"2017年员工&基干评估",department:"人力资源平台部"},
                    {value:"2017年中工&CVP评估",department:"开发一组"},
                    {value:"2017年中干&CVP评估",department:"QQ游戏产品部"}
                ],
                showButtonFlag:false,
                goBackUrl:"/",
                value:null,
                tabsParam:[{id:0,name:'按考核单元',count:0},{id:1,name:'按岗位',count:0}],//（这个也可以用对象key，value来实现）
                nowIndex:1,//默认第一
                titles:MEMBER_STEP,
                MaxMenu:7,
                hideSubMenu:false,
                moreContent:false,
                allMenus:[],
                gangWeiPingGuResultAll:[
                    {name:'zaresun(孙春华)',text:''},
                    {name:'maxliang(梁文国)',text:'员工/基干'},
                    {name:'densipen(彭亮)',text:''},
                    {name:'zaresun(孙春华)',text:''},
                    {name:'maxliang(梁文国)',text:'员工/基干'},
                    {name:'densipen(彭亮)',text:''},
                    {name:'zaresun(孙春华)',text:''},
                    {name:'maxliang(梁文国)',text:'员工/基干'},
                    {name:'densipen(彭亮)',text:''},
                    {name:'zaresun(孙春华)',text:''},
                    {name:'maxliang(梁文国)',text:'员工/基干'},
                    {name:'densipen(彭亮)',text:''},
                    {name:'zaresun(孙春华)',text:''},
                    {name:'maxliang(梁文国)',text:'员工/基干'},
                    {name:'densipen(彭亮)',text:''},
                    {name:'zaresun(孙春华)',text:''},
                    {name:'maxliang(梁文国)',text:'员工/基干'},
                    {name:'densipen(彭亮)',text:''},
                    {name:'zaresun(孙春华)',text:''},
                    {name:'maxliang(梁文国)',text:'员工/基干'},
                    {name:'densipen(彭亮)',text:''},
                    {name:'zaresun(孙春华)',text:''},
                    {name:'maxliang(梁文国)',text:'员工/基干'},
                    {name:'densipen(彭亮)',text:''},
                    {name:'zaresun(孙春华)',text:''},
                    {name:'maxliang(梁文国)',text:'员工/基干'},
                    {name:'densipen(彭亮)',text:''},
                    {name:'zaresun(孙春华)',text:''},
                    {name:'maxliang(梁文国)',text:'员工/基干'},
                    {name:'densipen(彭亮)',text:''}
                ],
                gangWeiPingGuResult:[
                ],
                listDataLeader:[ ],
                listDataMember:[ ],
                listTitleDataLeader:[ ],
                listTitleDataMember:[ ],
                API:JSON.parse('{"result":{"Data":{"Suggest":{"Employee":{"Total":10,"BelowTarget":0,"NeedToImprove":0,"Strong":3,"Excellent":1,"Outstanding":0,"SpecialApply":5},"BasicManager":{"Total":8,"BelowTarget":0,"NeedToImprove":0,"Strong":1,"Excellent":1,"Outstanding":0,"SpecialApply":3}},"Assessed":{"Employee":{"Total":4,"BelowTarget":0,"NeedToImprove":1,"Strong":2,"Excellent":1,"Outstanding":0,"SpecialApply":2},"BasicManager":{"Total":2,"BelowTarget":0,"NeedToImprove":0,"Strong":2,"Excellent":0,"Outstanding":0,"SpecialApply":1}}},"isSucceed":true,"isException":false,"isNoAuthenication":false,"Title":null,"Detail":null,"Tips":null,"Code":null,"Errors":null}}')

            }
        },
        components: {
            Footers
        },
        methods: {
            showButton:function(value){
                    if(this.value.length === 0 ){
                        this.showButtonFlag = false;
                    }
                    else{
                        this.showButtonFlag = true;  
                    }
                },
            goToUrl (url) {
                this.$router.push(url);
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

                this.gangWeiPingGuResult = this.gangWeiPingGuResultAll.slice(0,this.MaxMenu);
                this.tabsParam[1].count=this.gangWeiPingGuResultAll.length;
                

            },
            getMore(){
                this.moreContent = !this.moreContent;
                this.gangWeiPingGuResult = this.moreContent?this.gangWeiPingGuResultAll:this.gangWeiPingGuResultAll.slice(0,this.MaxMenu);
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