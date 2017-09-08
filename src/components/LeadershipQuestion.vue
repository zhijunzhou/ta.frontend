 <style scoped>
.index{background-color: #f5f5f5;}
.title{font-size: 0.32rem; color: #3f3f3f;padding-bottom:.22rem;}
.h1{color: #3f3f3f; padding-bottom: 0}
.h2{font-size: 0.26rem; color: #5e5e5e}
/*说明信息*/
.h3{font-size: 0.26rem; color: #acacac;line-height: 0.44rem;padding-top: 0.50rem;}
/*.pd{padding:.11rem 0.22rem;}*/
.inde{background-color: #ffffff;border-radius: 0.11rem;}
.upload{color: #0066ff;}
.tar{text-align: right}
.bt{border-bottom: 1px solid #dddee1; margin: 0 0.22rem}
.ivu-icon.ivu-select-arrow{color: #007aff;}
.ivu-select-selection{border: 1px solid #007aff;}
.ivu-icon.ivu-icon-arrow-down-b.ivu-select-arrow{color: #007aff;}
.ivu-icon-arrow-down-b:before{color: #007aff;}
</style>
<template>
    <div>
        <Row>
            <Col span="24" class="inde">
                <Row type="flex" class="bt" v-for="(item,index) in LeadershipContent.Dimensions">
                    <Col span="16" class="h1 pd">
                        <div>
                            <p class="h3">
                                <span class="h2">{{index + 1}}、{{item.DimensionName}}：</span>
                                {{item.Behaviors[0].QuestionName}}
                            </p>
                        </div>
                    </Col>
                    <Col span="8" class="pd">
                        <div class="h1" style="padding-top:0.34rem;" >
                            <!-- <select @on-change="changeSelectValue" style="width:2rem; margin-right:-1;height:0.6rem;font-size:0.24rem; color:#5e5e5e; border: 1px solid #007aff;border-radius: 0.1rem;">
                                <option style="font-size:0.24rem; color:#007aff" v-for="item2 in LeadershipContent.Scores" :value="item2.ScoreId"> {{item2.Name}} </option>
                            </select> -->
                            <Select @on-change="setLeadershipContent(item.DimensionId,item.Behaviors[0].ScoresSelectResult.Name,item.Behaviors[0].ScoresSelectResult.Score)" style="width:2rem; border: 1px solid #007aff;border-radius: 0.1rem;">
                            <div  style="transform:rotate(90deg); size:1rem;color:#007aff; position: fixed; left:1.56rem; bottom:2rem;"><i class="icon ion-android-remove"></i></div>
                            
                                <Option v-for="item2 in LeadershipContent.Scores" :value="item2.ScoreId">{{item2.Name}}</Option>
                            </Select>
<!--                             <select v-model="item.Behaviors[0].ScoresSelectResult" @change="setLeadershipContent(item.DimensionId,item.Behaviors[0].ScoresSelectResult.Name,item.Behaviors[0].ScoresSelectResult.Score)" > 
                                <option v-for="opt in LeadershipContent.Scores" :value="opt" :key="opt.Score">
                                    <span>{{opt.Name}}</span>
                                </option>
                            </select> -->
                        </div>
                    </Col>
                </Row>
            </Col>
        </Row>
    </div>
</template>
<script>
    import Selects from '../components/select';
    export default {
        props:{
            LeadershipContent: {
                type:Object,
                default:{}
            },
            setLeadershipContent: {
                type:Object,
                default:{}
            }
        },
        components : {
            Selects
        },
        methods: {
            //默认传value
            changeSelectValue (value) {
                this.$emit('change', event);
                console.log(value);
            }
        },
        data() {
            return {
 
            }
        }
    };
</script>