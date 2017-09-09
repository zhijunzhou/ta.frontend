<!-- 综合评估 上半部分 -->
<template>
	<div v-if="assessStaffRemark">
		<Row class="pg-spacing">
			<Col span="6">
				<span>评分：</span>
			</Col>
			<Col span="10">
				<InputNumber :max="100" :min="1" size="small" v-model="assessStaffRemark.DirectTotalScore"></InputNumber>
			</Col>
			<Col span="8" v-if="isSeenWeight">
				<span>权重：</span>				
				<span v-if="AssessorProp"  class="h3">{{AssessorProp + "%"}}</span>
			</Col>
		</Row>
		<Row class="pg-spacing" v-if="isSeenScore">
			<Col span="6">
				<span>综合评分：</span>
			</Col>
			<Col span="2">
				<span class="h3">{{assessStaffRemark.SumTotal}}</span>
			</Col>
			<Col span="16">
				<span class="ct-hint">评级与综合评分强制对应，可通过修改评分调整</span>
			</Col>
		</Row>
		<Row class="pg-spacing" v-if="isSeenScore">
			<Col span="6">
				<span>综合评级：</span>
			</Col>
			<Col span="18" v-if="enableRate">
				<Rate v-model="rateValue"></Rate>
			</Col>
			<Col span="18" v-else>
				<Rate v-model="rateValue" disabled></Rate>
			</Col>
		</Row>
		<Row class="pg-spacing">
			<Col span="6">
				<span>综合评语：</span>
			</Col>			
			<Col span="18">
				<Input v-model="assessStaffRemark.Remark" type="textarea" :rows="4" placeholder="请输入..."></Input>
			</Col>
		</Row>
	</div>
</template>

<script>
import {STEPNAME,TAGNAME,EVALUATEDNAME,AssessLevelID_RATE,getValue} from '../constants.js';

export default {	
	name: 'CurLeaderAssessMent',
	props: ['assessStaffRemark','DashedAssessResultList','AssessStaffBaseInfo'],
	data(){
		return{
			AssessorProp: 100,
			rateValue: undefined,
			isPrimaryEmployee: false,  //员工基干 或 中高干
			isSeenWeight: false, //是否显示权重
			isSeenScore: false, //是否显示评分与综合评分
			enableRate: false
		}
	},
	methods:{
		initData(){
			this.DashedAssessResultList.forEach(f=>{
                if (f.AssessorProp){
                    this.AssessorProp-=parseInt(f.AssessorProp);
                }
            });
            this.rateValue = getValue(this.assessStaffRemark.AssessLevelID,AssessLevelID_RATE).value;

            if (this.AssessStaffBaseInfo.StaffPropertyID === 4 
            	|| this.AssessStaffBaseInfo.StaffPropertyID === 5) {
            	//员工基干
            	this.isPrimaryEmployee = true;
            }else if(this.AssessStaffBaseInfo.StaffPropertyID === 3 
            	|| this.AssessStaffBaseInfo.StaffPropertyID === 9){
            	//中高干
            	this.isPrimaryEmployee = false;
            }

			this.isSeenWeight = true;
            this.isSeenScore = true;
            if (this.isPrimaryEmployee) {
            	let lst = this.DashedAssessResultList.filter(f=>f.AssessorTypeID === 3);
            	if (lst.length > 0) {
            		this.isSeenWeight = true;
            	}

            	if(this.AssessPackageSetting && this.AssessPackageSetting.IsDashedScoreWithProp === true){
            		this.isSeenScore = true;
            	}
            }
		}
	},
	mounted: function(){
		this.initData();
	}
}
</script>
<style scoped>
#totalScore {
	width: 20px;
}
.pg-spacing {
	padding: 5px 0;
}
span {
	font-size: 0.2rem;
}
.h3{
	font-size: 0.2rem; 
	color: #acacac; 
}
.ct-hint{
	font-size: 0.24rem;
    color: #E63F00;
}
</style>