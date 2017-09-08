<template>
    <ul class="list">
			<li class="item"  style="height: 1.00rem;margin:0;" >
					<div class="row" style="padding: 0">
							<div class="col col-30" style="padding: 0">评估维度</div>
							<div class="col col-40" style="padding: 0">行为自评 </div>
							<div class="col col-30" style="padding: 0;">上级评价</div>
					</div>					
			</li>
			<li class="item"  style="height: 1.00rem;margin:0;" v-for="(Dimension,index) in LeadershipContent.Dimensions"  v-bind:key="index">					
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
