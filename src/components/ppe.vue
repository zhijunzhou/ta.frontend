<template>
	<div>
		<div class="panel-title">
	        职级评定
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
		                    <Radio-group>
		                        <Radio label="晋级"></Radio>
		                        <Radio label="维持"></Radio>
		                    </Radio-group>
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
		        <!-- <div>
		            <div class="box">
		                <div style="float:left;">
		                    <span>评语：</span>
		                </div>
		                <div style="float:left; padding: 0 0 0 0.2rem;">
		                    <Input style="width: 4.0rem;"  type="textarea" :rows="4" placeholder="请输入..."></Input>
		                </div>
		            </div>
		        </div> -->
		    </div>
	    </div>
	</div>
</template>
<script>
	export default{
		name:'Ppe',
		props: [],
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
</style>