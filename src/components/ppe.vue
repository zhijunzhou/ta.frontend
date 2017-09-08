<template>
	<div>
		<div class="panel-title">
	        <b>职级评定</b>
	    </div>
	    <div class="list card">
		    <div class="item item-body">
		        <Row class="pg-spacing">
		            <Col span="6">
						<span>申报类型：</span>
					</Col>
					<Col span="18">
						<span>晋级</span>
					</Col>
		        </Row>
		        <Row class="pg-spacing">
		            <Col span="6">
						<span>当前职级：</span>
					</Col>
					<Col span="18">
						<span>质量管理类-QC T2 普通等 质量</span>
					</Col>
		        </Row>
		        <Row class="pg-spacing">
		            <Col span="6">
						<span>申报目标：</span>
					</Col>
					<Col span="18">
						<span>质量管理类-QC T2 专业等 质量</span>
					</Col>
		        </Row>
		        <Row class="pg-spacing">
		        	<Col span="6">
						<span>评级：</span>
					</Col>
					<Col span="18">
						<span>
		                    <RadioGroup v-model="pingJi">
		                        <Radio label="jj">
									<span>晋级</span>
								</Radio>
		                        <Radio label="wc">
									<span>维持</span>
								</Radio>
		                    </RadioGroup>
		                </span>
					</Col>
		        </Row>
		        <Row class="pg-spacing">
		            <Col span="6">
						<span>评语：</span>
					</Col>
					<Col span="18">
						<Input type="textarea" :rows="4" placeholder="请输入..."></Input>
					</Col>
		        </Row>
		    </div>
	    </div>
	</div>
</template>
<script>
	export default{
		name:'Ppe',
		props: [],
		data () {
			return {
				pingJi: ''
			}
		},
		components:{

		}
	}
</script>
<style scoped>
.panel-title{
    padding: 0 0 0 0.3rem;
}
#totalScore {
	width: 20px;
}
.pg-spacing {
	padding: 5px 0;
}
span {
	font-size: 0.2rem;
}
.card {
	box-shadow: none;
}
</style>