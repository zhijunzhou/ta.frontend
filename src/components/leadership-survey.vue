<template>
	<div>
		<div class="panel-title font-level1-title">
	        领导力行为评估
	    </div>
	    <div class="list card">
	        <leadership-question :LeadershipContent="LeadershipContent" :SelfLeadershipContent='SelfLeadershipContent'  :setShangJiPingJia="setShangJiPingJia"></leadership-question>
	    </div>
	    <leardership-remark :SelfLeadershipContent='SelfLeadershipContent'></leardership-remark>
    </div>
</template>
<script>
	import LeadershipQuestion from '../components/leadership-question'
	import LeardershipRemark from '../components/leardership-remark'

	export default{
		name:'LeadershipSurvey',		
		props:['LeadershipContent','SelfLeadershipContent','setShangJiPingJia'],
		components:{
			LeadershipQuestion,
			LeardershipRemark
		}
	}
</script>
<style scoped>
.panel-title{
    padding: 0 0 0 0.3rem;
    font-weight: 600;
    color: #3f3f3f;
}

</style>