<template>
	<div v-if="cardData">
		<Row class="pg-spacing">
			<Col span="6">
				<span>评分：</span>
			</Col>
			<Col span="10">
				<InputNumber :max="100" :min="1" size="small" v-model="cardData.DirectTotalScore"></InputNumber>
			</Col>
			<Col span="8">
				<span>权重：</span>				
				<span v-if="cardData.QuanZhong">{{cardData.QuanZhong + "%"}}</span>
			</Col>
		</Row>
		<Row class="pg-spacing">
			<Col span="6">
				<span>综合评分：</span>
			</Col>
			<Col span="18">
				<span>{{cardData.SumTotal}}</span>
			</Col>
		</Row>
		<Row class="pg-spacing">
			<Col span="6">
				<span>综合评级：</span>
			</Col>
			<Col span="18">
				<Rate v-model="cardData.rateValue" ></Rate>
			</Col>
		</Row>
		<Row class="pg-spacing">
			<Col span="6">
				<span>综合评语：</span>
			</Col>			
			<Col span="18">
					<Input v-model="cardData.Remark" type="textarea" :rows="4" placeholder="请输入...">
						</Input>
			</Col>
		</Row>
	</div>
</template>

<script>
export default {
	name: 'CurLeaderAssessMent',
	props: ['cardData']
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
	font-size: 12px;
}
</style>