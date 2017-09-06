<template>
	<div class="row" v-if="cardData">
		<div class="col-3">{{cardData.OwnerName}}</div>
		<div class="col-9">{{cardData.ownerRemark}}</div>
	</div>
</template>

<script>
export default {
	name: 'LeaderAssessMents',
	props: ['cardData'],
	components: {
		
	}
}
</script>