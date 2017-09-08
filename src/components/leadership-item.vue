<template>
	<div class="row padding_0">
		<div class="col col-30 padding_0"><span>{{Dimension.DimensionName}}</span></div>
		<div class="col col-40 padding_0"><span>{{selfScoreName}}</span></div>
		<div class="col col-30 padding_0">
			<select v-model="shangJiPingJiaResult" @change="setShangJiPingJia(Dimension.SortNum,shangJiPingJiaResult)" > 
					<option v-for="opt in LeadershipContent.Scores" :value="opt.Score" :key="opt.Score">
						<span>{{opt.Name}}</span>
					</option>
			</select>
		</div>
	</div>
</template>
<script>
	export default{
		name:'LeadershipItem',
		data(){
			return {
				selfScoreName:"",
				shangJiPingJiaResult: undefined
			}
		},
		props: ['Dimension','LeadershipContent','SelfLeadershipContent', 'setShangJiPingJia'],
		methods:{
			initData(){
				this.selfScoreName = this.SelfLeadershipContent.Dimensions.find(f=>f.SortNum=== this.Dimension.SortNum).Behaviors[0].ScoreName;

				this.shangJiPingJiaResult = this.LeadershipContent.Dimensions.find(f=>f.SortNum===this.Dimension.SortNum).Behaviors[0];
			}
		},
		components:{

		},
		mounted: function() {
			this.initData();
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
