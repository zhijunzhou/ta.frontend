<template>
	<div>
		<div class="panel-title">
	        职级评定
	    </div>
	    <div class="list card">
	        <div>
	            <div class="box">
	                <span>申报类型：</span>
	                <span>晋级</span>
	            </div>
	            <p class="clr"> </p>
	        </div>
	        <div>
	            <div class="box">
	                <span>当前职级：</span>
	                <span>质量管理类-QC T2 普通等 质量</span>
	            </div>
	            <p class="clr"> </p>
	        </div>
	        <div>
	            <div class="box">
	                <span>申报目标：</span>
	                <span>质量管理类-QC T2 专业等 质量</span>
	            </div>
	            <p class="clr"> </p>
	        </div>
	        <div>
	            <div class="box">
	                <span>评级：</span>
	                <span>
	                    <Radio-group>
	                        <Radio label="晋级"></Radio>
	                        <Radio label="维持"></Radio>
	                    </Radio-group>
	                </span>
	            </div>
	            <p class="clr"> </p>
	        </div>
	        <div>
	            <div class="box">
	                <div style="float:left;">
	                    <span>评语：</span>
	                </div>
	                <div style="float:left; padding: 0 0 0 0.2rem;">
	                    <Input style="width: 4.0rem;"  type="textarea" :rows="4" placeholder="请输入..."></Input>
	                </div>
	            </div>
	            <p class="clr"> </p>
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
</style>