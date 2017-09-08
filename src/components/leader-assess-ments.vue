<template>	
	<Row v-if="assessStaffRemark">
		<Col span="6">
			<span>{{englishName}}</span>
			<br />
			<span>{{chineseName}}</span>
		</Col>			
		<Col span="18">
			{{assessStaffRemark.ownerRemark}}
		</Col>
	</Row>
</template>

<script>
export default {
	name: 'LeaderAssessMents',
	props: ['assessStaffRemark'],
	computed:{
		englishName: function(){
			if (this.assessStaffRemark.OwnerName) {
				let arr = this.assessStaffRemark.OwnerName.split('(');
				if (arr.length > 0) {
					return arr[0];
				}
			}
			return "";			
		},
		chineseName:function(){
			if (this.assessStaffRemark.OwnerName) {
				let arr = this.assessStaffRemark.OwnerName.split('(');
				if (arr.length > 0) {
					return "("+ arr[1];
				}
			}
			return "";
		}
	},
	components: {
		
	}
}
</script>
<style scoped>

span {
    font-size: 0.2rem;
}
</style>