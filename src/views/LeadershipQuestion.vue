 <style scoped>
.index{background-color: #f5f5f5}
.title{font-size: 0.32rem; color: #3f3f3f;padding-bottem:.22rem}
.h1{font-size: 0.32rem; color: #3f3f3f;padding-bottem:.22rem}
.h2{font-size: 0.30rem; color: #5e5e5e}
/*说明信息*/
.h3{font-size: 0.24rem; color: #acacac}
.pd{padding:.11rem 0.22rem;}
.inde{background-color: white;border-radius: 5px;}
.upload{color: #0066ff;border: 1px solid #0066ff;}
.tar{text-align: right}
.bt{border-bottom: 1px solid #dddee1}
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
                        <div class="h1">
                            <Select @on-change="changeSelectValue">
                                <Option v-for="item2 in LeadershipContent.Scores" :value="item2.ScoreId">{{item2.Name}}</Option>
                            </Select>
                        </div>
                    </Col>
                </Row>
            </Col>
        </Row>
    </div>
</template>
<script>
    export default {
        created () {
        },
        methods: {
            //默认传value
            changeSelectValue (value) {
                console.log(value);
            }
        },
        data() {
            return {
                LeadershipContent: {
                    "PeriodId": 579,
                    "PeriodName": "TA测试周期",
                    "BeginTime": "2017-04-04",
                    "EndTime": "2017-04-06",
                    "UnitName": "HR应用开发组",
                    "ObjName": "stoneldeng(邓磊)",
                    "AssessorGuid": "8c3204681bad4d7494c01e01aa7ab452",
                    "AssessorName": "essienlin(林志成)",
                    "StatusId": 2,
                    "StatusName": "待提交",
                    "SubmitTime": null,
                    "Score": null,
                    "RoleId": 198,
                    "ScoreRuleId": 44,
                    "Dimensions": [{
                        "DimensionScoreId": 4574,
                        "DimensionId": 179,
                        "DimensionName": "正直",
                        "Score": null,
                        "SortNum": 1,
                        "Behaviors": [{
                            "DimensionId": 179,
                            "QuestionScoreId": 17638,
                            "QuestionName": "公平、公正对待下属与他人。",
                            "Desc": null,
                            "Score": null,
                            "ScoreName": "",
                            "SortNum": 2
                        }]
                    },
                    {
                        "DimensionScoreId": 4575,
                        "DimensionId": 180,
                        "DimensionName": "开放",
                        "Score": null,
                        "SortNum": 2,
                        "Behaviors": [{
                            "DimensionId": 180,
                            "QuestionScoreId": 17639,
                            "QuestionName": "站在用户和公司的角度考虑问题，必要时能牺牲“小我”利益。",
                            "Desc": null,
                            "Score": null,
                            "ScoreName": "",
                            "SortNum": 3
                        }]
                    },
                    {
                        "DimensionScoreId": 4576,
                        "DimensionId": 181,
                        "DimensionName": "激情",
                        "Score": null,
                        "SortNum": 3,
                        "Behaviors": [{
                            "DimensionId": 181,
                            "QuestionScoreId": 17640,
                            "QuestionName": "为团队设立挑战性目标，激励下属，以身作则，不断努力达到更高的目标",
                            "Desc": null,
                            "Score": null,
                            "ScoreName": "",
                            "SortNum": 1
                        }]
                    },
                    {
                        "DimensionScoreId": 4577,
                        "DimensionId": 182,
                        "DimensionName": "好学",
                        "Score": null,
                        "SortNum": 4,
                        "Behaviors": [{
                            "DimensionId": 182,
                            "QuestionScoreId": 17641,
                            "QuestionName": "带领团队从工作中、从错误中学习，不断反思、总结和提升。",
                            "Desc": null,
                            "Score": null,
                            "ScoreName": "",
                            "SortNum": 1
                        }]
                    },
                    {
                        "DimensionScoreId": 4578,
                        "DimensionId": 183,
                        "DimensionName": "人才",
                        "Score": null,
                        "SortNum": 5,
                        "Behaviors": [{
                            "DimensionId": 183,
                            "QuestionScoreId": 17642,
                            "QuestionName": "积极识别并凝聚志同道合的优秀人才，并用人所长。",
                            "Desc": null,
                            "Score": null,
                            "ScoreName": "",
                            "SortNum": 1
                        }]
                    },
                    {
                        "DimensionScoreId": 4579,
                        "DimensionId": 184,
                        "DimensionName": "用户",
                        "Score": null,
                        "SortNum": 6,
                        "Behaviors": [{
                            "DimensionId": 184,
                            "QuestionScoreId": 17643,
                            "QuestionName": "随时随地关注和体验产品与服务细节，挖掘用户核心需求和反馈。",
                            "Desc": null,
                            "Score": null,
                            "ScoreName": "",
                            "SortNum": 1
                        }]
                    }],
                    "Remarks": [{
                        "RemarkContentId": 1944,
                        "RemarkName": "优势",
                        "Desc": null,
                        "Content": "",
                        "SortNum": 0
                    },
                    {
                        "RemarkContentId": 1945,
                        "RemarkName": "不足",
                        "Desc": null,
                        "Content": "",
                        "SortNum": 0
                    }],
                    "Scores": [{
                        "ScoreId": 237,
                        "Score": 1,
                        "Name": "非常不同意",
                        "SortNum": 1
                    },
                    {
                        "ScoreId": 238,
                        "Score": 2,
                        "Name": "不同意",
                        "SortNum": 2
                    },
                    {
                        "ScoreId": 239,
                        "Score": 3,
                        "Name": "基本不同意",
                        "SortNum": 3
                    },
                    {
                        "ScoreId": 240,
                        "Score": 4,
                        "Name": "基本同意",
                        "SortNum": 4
                    },
                    {
                        "ScoreId": 241,
                        "Score": 5,
                        "Name": "同意",
                        "SortNum": 5
                    },
                    {
                        "ScoreId": 242,
                        "Score": 6,
                        "Name": "非常同意",
                        "SortNum": 6
                    }],
                    "CanReject": false,
                    "IsValid": false,
                    "HasUnknownItem": false,
                    "InvalidBehaviorProportion": 100,
                    "InvalidBehaviorAllSame": false,
                    "UpdateUser": ""
                }
            }
        },
    };
</script>