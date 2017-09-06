<style scoped>
.tvu-tag {
    display: inline-block;
    height: 22px;
/*    line-height: 22px;*/
    margin: 2px 4px 2px 0;
    padding: 0 8px;
    border: 1px solid #e9eaec;
    border-radius: 8px;
    background: #f7f7f7;
    font-size: 12px;
    vertical-align: middle;
    opacity: 1;
    overflow: hidden;
    cursor: pointer;
}

.tvu-tag-border {
    height: 22px;
/*    line-height: 22px;*/
    border: 1px solid #e9eaec!important;
    color: #495060!important;
    background: #fff!important;
    position: relative;
}

.tvu-tag-border.tvu-tag-green {
    color:#53cd51!important;
    border:1px solid #53cd51!important;
}

.tvu-tag-border.tvu-tag-blue {
    color:#007aff!important;
    border:1px solid #007aff!important;
}

</style>
<template>
    <transition name="fade">
        <div :class="classes">
            <span :class="textClasses"><slot></slot></span>
        </div>
    </transition>
</template>
<script>
    import { oneOf } from '../tools.js';

    const prefixCls = 'tvu-tag';

    export default {
        name: 'Tag',
        components: {  
        },
        props: {
            closable: {
                type: Boolean,
                default: false
            },
            color: {
                validator (value) {
                    return oneOf(value, ['blue', 'green', 'red', 'yellow']);
                }
            },
            type: {
                validator (value) {
                    return oneOf(value, ['border']);
                }
            },
            name: {
                type: [String, Number]
            }
        },
        computed: {
            classes () {
                return [
                    `${prefixCls}`,
                    {
                        [`${prefixCls}-${this.color}`]: !!this.color,
                        [`${prefixCls}-${this.type}`]: !!this.type,
                        [`${prefixCls}-closable`]: this.closable
                    }
                ];
            },
            textClasses () {
                return `${prefixCls}-text`;
            }
        },
        methods: {

        }
    };
</script>
