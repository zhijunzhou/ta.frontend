<style scoped>
</style>
<template>
<div>
    <select v-model="value" @change="handleChange" > 
        <option v-for="opt in options" :value="opt.Score" :key="opt.Score">
            <span>{{opt.ScoreName}}</span>
        </option>
    </select>
</div>
</template>
<script>
    import { oneOf } from '../tools.js';


    export default {
        name: 'Select',
        components: {  
        },
        props: {
            value: {
                type: [String, Number, Array],
                default: ''
            },
            options:{
                type: Array,
                default: []
            },

        },
        computed: {

        },
        methods: {
            handleChange (event) {
                this.$emit('change', event);
            }
        }
    };
</script>
