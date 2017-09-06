<template>
    <ul class="list">
			<li class="item"  style="height: 1.00rem;margin:0;" >
					<div class="row" style="padding: 0">
							<div class="col col-30" style="padding: 0">评估维度</div>
							<div class="col col-40" style="padding: 0">行为自评 </div>
							<div class="col col-30" style="padding: 0;text-align: right;">上级评价</div>
					</div>						
			</li>
			<li class="item"  style="height: 1.00rem;margin:0;" v-for="lst in XingWeiPingGuList">
					<div class="row" style="padding: 0">
							<div class="col col-30" style="padding: 0">{{lst.DimensionName}}</div>
							<div class="col col-40" style="padding: 0">{{lst.selfScoreName}}</div>
							<div class="col col-30" style="padding: 0;text-align: right;">
									<select v-model="lst.shangJiPingJiaResult" @change="setShangJiPingJia(lst.SortNum,lst.shangJiPingJiaResult)" >
											<option v-for="opt in commentList" :value="opt.Score" :key="opt.Score">{{opt.ScoreName}}</option>
									</select>
							</div>
					</div>
			</li>
	</ul>
</template>
<script>    
    export default {
        name: 'behavior',
        props: ['commentList', 'XingWeiPingGuList', 'setShangJiPingJia'],
        components: {}
    }
</script>
