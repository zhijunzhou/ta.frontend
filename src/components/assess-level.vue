<template>
	<div>
		<Rate v-model="remarkRate" disabled style="font-size:0.32rem"></Rate>
		<span style="
		    position: relative;
		    top: 0.05rem;
		    right: 0.10rem;
		    font-size: 0.10rem;
		    ">
		    {{remarkName}}
		</span>
	</div>
</template>
<script>
	export default {
        name: 'AssessLevel',
        props: ['remarkName', 'remarkRate'],
        components: {
        }
    }
</script>