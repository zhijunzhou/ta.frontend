<style scoped>
.badge{
    font-weight: initial;
    padding: 0.06rem 0.10rem;
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
<div>
<div class="card" v-for="submenu in subMenus" v-if="!hideSubMenu">
 	<div class="item item-text-wrap" @click="goToUrl(submenu.url)">
		<div class="row">
		    <div>
		        <div style="
		            font-size:0.30rem;
		            color: #007aff;
		            position:absolute; 
		            top:0.30rem; 
		            left:0.40rem;">
		            {{submenu.title}}&nbsp;&nbsp;
		            <Tags v-if="submenu.tag" type="border" color="green" style="
		                position:relative; 
		                top:-0.04rem; 
		                ">
		                {{submenu.tag}}
		            </Tags>
		        </div>
		        <div  style="
		            position:absolute; 
		            top:0.78rem; 
		            left:0.43rem;
		            font-size:0.24rem;" 
		            :class="{ reminderColor: !submenu.deadLineHighlight,highlightdeadLineColor: submenu.deadLineHighlight }">
		            <i class="icon ion-android-stopwatch"></i>&nbsp;{{submenu.deadLine}}
		        </div>
		        <div v-if="submenu.stepname" class="reminderColor" style="
		            position: absolute; 
		            top:0.50rem; 
		            font-size:0.26rem;
		            right:0.45rem;">
		            {{submenu.stepname}}
		        </div>
		        <div v-if="submenu.stepname2" class="reminderColor" style="
		            position: absolute; 
		            top:0.30rem; 
		            font-size:0.26rem;
		            right:0.45rem;">
		            {{submenu.stepname2}}
		        </div>
		        <div v-if="submenu.desc" class="reminderColor" style="
		            position: absolute; 
		            top:0.72rem; 
		            
		            right:0.45rem;">
		            {{submenu.desc}}
		        </div>
		    </div>
		</div>
	</div>
</div>
</div>
</template>
<script>
    import { oneOf } from '../tools.js';
    import Tags from '../components/tag.vue';
    import {STEPNAME,TAGNAME,EVALUATEDNAME,getValue} from '../constants.js';
    export default {
        name: 'PendingTaskList',
        components: {  
        	Tags
        },
        props: {
            PendingTaskListData: {
                type:Array,
                default:0
            },
            hideSubMenu: {
                type:Boolean,
                default:false
            }
        },
        computed: {
            subMenus () {
                return this.PendingTaskListData.map(r=>{
                    let title = r.DisplayGroupName;
    
                    let getTime = new Date;
                    getTime.setTime(r.Deadline);
                    let deadLine = getTime.toLocaleDateString().substr(5).replace(/\//, '-');
                    let deadLineHighlight=false;

                    const datetime = new Date();
                    // console.log(r.Deadline - datetime);
                    if(r.RemindAheadDays){
                        if (r.CanGiveUp===false && ( this.getRemainDays(r.Deadline) < r.RemindAheadDays) ){
                            deadLineHighlight=true;
                        }
                    }
                    let search;
                    search=TAGNAME.find(s=>s.StepID===r.StepID);
                    let tag = search?search.value:null;
                    
                    search=STEPNAME.find(s=>s.StepID===r.StepID);
                    let stepname = search?search.value:null;

                    search=EVALUATEDNAME.find(s=>s.StepID===r.StepID);
                    let desc = search&&r.Desc?r.Desc:null;


                    let stepname2 = search?search.value:null;
                    if(stepname2){
                        stepname=null;
                    }
                    const url=getValue(r.StepID,STEPNAME).url;
                    return {title,tag,deadLine,deadLineHighlight,stepname,stepname2,desc,url}
                });
            }

        },
        methods: {
            data () {
                return {
                    subMenus:[]
                }
            },
        	goToUrl (url) {
                this.$router.push(url);
            },
            getRemainDays(deadline){
                const MS_DAY = 86400000;
                let now = new Date();
                return (deadline-now) / MS_DAY ;
            },
            getData(){
                _this = this;
                _this.subMenus = this.PendingTaskListData.map(r=>{
                    let title = r.DisplayGroupName;
    
                    let getTime = new Date;
                    getTime.setTime(r.Deadline);
                    let deadLine = getTime.toLocaleDateString().substr(5).replace(/\//, '-');
                    let deadLineHighlight=false;

                    const datetime = new Date();
                    if(r.RemindAheadDays){
                        if (r.CanGiveUp===false && ( this.getRemainDays(r.Deadline) < r.RemindAheadDays) ){
                            deadLineHighlight=true;
                        }
                    }
                    let search;
                    search=TAGNAME.find(s=>s.StepID===r.StepID);
                    let tag = search?search.value:null;
                    
                    search=STEPNAME.find(s=>s.StepID===r.StepID);
                    let stepname = search?search.value:null;

                    search=EVALUATEDNAME.find(s=>s.StepID===r.StepID);
                    let desc = search&&r.Desc?r.Desc:null;

                    let stepname2 = search?search.value:null;
                    if(stepname2){
                        stepname=null;
                    }
                    const url=getValue(r.StepID,STEPNAME).url;
                    return {title,tag,deadLine,deadLineHighlight,stepname,stepname2,desc,url}
                });
            },
            mounted() {

            },

        },

    };
</script>
