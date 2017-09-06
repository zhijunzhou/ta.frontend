<template>
	<img :src="photoPath">
</template>
<script>
	export default{
		name:'ProfilePhoto',
		props: ['photoPath'],
		components:{

		}
	}
</script>