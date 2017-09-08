<template>
	<Row>
		<Col span="8"><span>{{Dimension.DimensionName}}</span></Col>
		<Col span="8"><span class="text-gray">{{selfScoreName}}</span></Col>
		<Col span="8">
			<Select v-model="Dimension.SortNum" @change="setShangJiPingJia(Dimension.SortNum,shangJiPingJiaResult)">
				<Option v-for="opt in LeadershipContent.Scores" :value="opt.Score" :key="opt.ScoreId">
					{{opt.Name}}
				</Option>
			</Select>
		</Col>
	</Row>
</template>
<script>
	export default{
		name:'LeadershipItem',
		data () {
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
	padding: 0;
}
span {
    font-size: 0.2rem;;
}
.text-gray {
	color: gray;
}
</style>
