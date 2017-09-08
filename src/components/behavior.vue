<template>
    <ul class="list">
		<li class="item">
			<div class="row">
				<div class="col col-30">评估维度</div>
				<div class="col col-40">行为自评 </div>
				<div class="col col-30">上级评价</div>
			</div>					
		</li>
		<li class="item" v-for="lst in XingWeiPingGuList">					
			<behavior-item :lst='lst' :commentList='commentList' :setShangJiPingJia="setShangJiPingJia"></behavior-item>
		</li>
	</ul>
</template>
<script>
	import BehaviorItem from '../components/behavior-item';

    export default {
        name: 'behavior',
        props: ['commentList', 'XingWeiPingGuList', 'setShangJiPingJia'],
        components: {
        	BehaviorItem
        }
    }
</script>
