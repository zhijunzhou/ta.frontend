<style scoped>
.tvu-footer{
    width:100%; 
    height:1.00rem; 
    background-color:#ffffff; 
    color:#acacac; 
    text-align:left; 
    color:#acacac;
    font-size:0.30rem; 
    padding-top:0.52rem; 
    position:fixed; 
    bottom:0rem; 
    display:inline;
}
</style>
<template>
<!--     <transition name="fade"> -->
        <div class="tvu-footer">
            <slot></slot>
        </div>
<!--     </transition> -->
</template>
<script>
    import { oneOf } from '../tools.js';

    const prefixCls = 'tvu-footer';

    export default {
        name: 'Footer',
        components: {  
        },
        props: {
            // closable: {
            //     type: Boolean,
            //     default: false
            // },
            // color: {
            //     validator (value) {
            //         return oneOf(value, ['blue', 'green', 'red', 'yellow']);
            //     }
            // },
            // type: {
            //     validator (value) {
            //         return oneOf(value, ['border']);
            //     }
            // },
            // name: {
            //     type: [String, Number]
            // }
        },
        computed: {
            // classes () {
            //     return [
            //         `${prefixCls}`,
            //         {
            //             [`${prefixCls}-${this.color}`]: !!this.color,
            //             [`${prefixCls}-${this.type}`]: !!this.type,
            //             [`${prefixCls}-closable`]: this.closable
            //         }
            //     ];
            // },
            // textClasses () {
            //     return `${prefixCls}-text`;
            // }
        },
        methods: {

        }
    };
</script>
