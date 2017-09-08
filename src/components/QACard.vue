<style scoped>
.tvu-footer{
    width:100%; 
    height:1.00rem; 
    background-color:#ffffff; 
    color:#acacac; 
    text-align:center; 
    color:#acacac;
    font-size:0.30rem; 
    padding-top:0.52rem; 
    position:fixed; 
    bottom:0rem; 
    display:inline;
}
</style>
<template>
<div>
    <Card style="width:7.06rem; margin:0.20rem 0.22rem;" v-for="item in QAData">
        <div style="word-wrap:break-word;word-break:break-all;" slot="title">
            {{item.question}}
        </div>
        <div style="white-space:pre-line; margin-top:-0.44rem;">
            {{item.anser}}
        </div>
    </Card>
</div>
</template>
<script>
    import { oneOf } from '../tools.js';
    

    const prefixCls = 'tvu-footer';

    export default {
        name: 'QACard',
        components: {  
        },
        props: {
            QAData: {
                type: Array,
                default: []
            }
        },
        computed: {

        },
        methods: {

        }
    };
</script>
