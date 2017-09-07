<template>
    <ul class="list">
			<li class="item"  style="height: 1.00rem;margin:0;" >
					<div class="row" style="padding: 0">
							<div class="col col-30" style="padding: 0">评估维度</div>
							<div class="col col-40" style="padding: 0">行为自评 </div>
							<div class="col col-30" style="padding: 0;">上级评价</div>
					</div>					
			</li>
			<li class="item"  style="height: 1.00rem;margin:0;" v-for="(lst,index) in XingWeiPingGuList"  v-bind:key="index">					
				<leadership-item :lst='lst' :commentList='commentList' :setShangJiPingJia="setShangJiPingJia"></leadership-item>
			</li>
	</ul>
</template>
<script>
	import LeadershipItem from '../components/leadership-item';

    export default {
        name: 'behavior',
        props: ['commentList', 'XingWeiPingGuList', 'setShangJiPingJia'],
        components: {
        	LeadershipItem
        }
    }
</script>
