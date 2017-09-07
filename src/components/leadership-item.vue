<template>
	<div class="row padding_0">
		<div class="col col-30 padding_0"><span>{{lst.DimensionName}}</span></div>
		<div class="col col-40 padding_0"><span>{{lst.selfScoreName}}</span></div>
		<div class="col col-30 padding_0">
			<select v-model="lst.shangJiPingJiaResult" @change="setShangJiPingJia(lst.SortNum,lst.shangJiPingJiaResult)" > 
					<option v-for="opt in commentList" :value="opt.Score" :key="opt.Score">
						<span>{{opt.ScoreName}}</span>
					</option>
			</select>
		</div>
	</div>
</template>
<script>
	export default{
		name:'LeadershipItem',
		props: ['lst','commentList','setShangJiPingJia'],
		components:{

		}
	}
</script>
<style scoped>
.padding_0{
	padding: 0
}
span {
    font-size: 0.2rem;;
}

</style>
