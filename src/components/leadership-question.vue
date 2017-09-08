<template>
    <ul class="list">
		<li class="item">
			<Row>
				<Col span="8"><span class="ct-item-header">评估维度</span></Col>
				<Col span="8"><span class="ct-item-header">行为自评</span></Col>
				<Col span="8"><span class="ct-item-header">上级评价</span></Col>
			</Row>					
		</li>
		<li class="item" v-for="(Dimension,index) in LeadershipContent.Dimensions"  v-bind:key="index" v-if="LeadershipContent && SelfLeadershipContent">	
			<leadership-item :Dimension='Dimension' :LeadershipContent='LeadershipContent' :SelfLeadershipContent='SelfLeadershipContent' :setShangJiPingJia="setShangJiPingJia"></leadership-item>
		</li>
	</ul>
</template>
<script>
	import LeadershipItem from '../components/leadership-item';

    export default {
        name: 'LeadershipQuestion',
        props: ['LeadershipContent','SelfLeadershipContent', 'setShangJiPingJia'],
        components: {
        	LeadershipItem
        }
    }
</script>
<style scoped>
.item {
	overflow: visible;
}
.ct-item-header {
	font-size: 0.22rem;
}
</style>
