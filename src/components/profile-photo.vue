<template>
	<img :src="photoPath" @click="choose(index)" :class="{active: isActive}" :disabled="isActive">
</template>
<script>
	export default{
		name:'ProfilePhoto',
		props: ['photoPath','index','choose','isActive'],
		components:{

		}
	}
</script>
<style scoped>
.active{
    border: 1px solid #0066ff!important;
}
</style>