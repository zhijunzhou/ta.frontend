<template>
	<div v-if="assessStaffRemark">
		<Row class="pg-spacing">
			<Col span="6">
				<span>评分：</span>
			</Col>
			<Col span="10">
				<InputNumber :max="100" :min="1" size="small" v-model="assessStaffRemark.DirectTotalScore"></InputNumber>
			</Col>
			<Col span="8">
				<span>权重：</span>				
				<span v-if="AssessorProp">{{AssessorProp + "%"}}</span>
			</Col>
		</Row>
		<Row class="pg-spacing">
			<Col span="6">
				<span>综合评分：</span>
			</Col>
			<Col span="18">
				<span>{{assessStaffRemark.SumTotal}}</span>
			</Col>
		</Row>
		<Row class="pg-spacing">
			<Col span="6">
				<span>综合评级：</span>
			</Col>
			<Col span="18">
				<Rate v-model="rateValue" ></Rate>
			</Col>
		</Row>
		<Row class="pg-spacing">
			<Col span="6">
				<span>综合评语：</span>
			</Col>			
			<Col span="18">
					<Input v-model="assessStaffRemark.Remark" type="textarea" :rows="4" placeholder="请输入...">
						</Input>
			</Col>
		</Row>
	</div>
</template>

<script>
import {STEPNAME,TAGNAME,EVALUATEDNAME,AssessLevelID_RATE,getValue} from '../constants.js';

export default {	
	name: 'CurLeaderAssessMent',
	props: ['assessStaffRemark','DashedAssessResultList'],
	data(){
		return{
			AssessorProp: 100,
			rateValue: undefined
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
</style>