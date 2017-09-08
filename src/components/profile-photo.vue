<template>
	<div>
		<div class="tick"  v-if="isActive">
	        <Icon type="checkmark-circled" color="#0066ff"></Icon>
	    </div>
	    <div class="icon-img">
	        <img :src="photoPath" @click="choose(index)">
	    </div>
	</div>
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
.tick {
    position: absolute;
    right: 35%;
    top: 70%;
}
.icon-img{width: .77rem;height: .77rem;border-radius: 100%;overflow: hidden}
.icon-img img{width: 100%;}
.active{
    /*border: 1px solid #0066ff!important;*/
}
</style>