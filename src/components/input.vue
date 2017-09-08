<template>
    <div :class="wrapClasses">
        <template v-if="type !== 'textarea'">
            <div :class="[prefixCls + '-group-prepend']" v-if="prepend" v-show="slotReady"><slot name="prepend"></slot></div>
            <i class="ivu-icon" :class="['ivu-icon-' + icon, prefixCls + '-icon', prefixCls + '-icon-normal']" v-if="icon" @click="handleIconClick"></i>
            <transition name="fade">
                <i class="ivu-icon ivu-icon-load-c ivu-load-loop" :class="[prefixCls + '-icon', prefixCls + '-icon-validate']" v-if="!icon"></i>
            </transition>
            <input
                ref="input"
                :type="type"
                :class="inputClasses"
                :placeholder="placeholder"
                :disabled="disabled"
                :maxlength="maxlength"
                :readonly="readonly"
                :name="name"
                :value="currentValue"
                :number="number"
                :autofocus="autofocus"
                @keyup.enter="handleEnter"
                @focus="handleFocus"
                @blur="handleBlur"
                @input="handleInput"
                @change="handleChange">
            <div :class="[prefixCls + '-group-append']" v-if="append" v-show="slotReady"><slot name="append"></slot></div>
        </template>
        <textarea
            v-else
            ref="textarea"
            :class="textareaClasses"
            :style="textareaStyles"
            :placeholder="placeholder"
            :disabled="disabled"
            :rows="rows"
            :maxlength="maxlength"
            :readonly="readonly"
            :name="name"
            :value="value"
            :autofocus="autofocus"
            @keyup.enter="handleEnter"
            @focus="handleFocus"
            @blur="handleBlur"
            @input="handleInput">
        </textarea>
    </div>
</template>
<script>
    import { oneOf, findComponentUpward } from '../tools';
    import calcTextareaHeight from '../calcTextareaHeight';
    import Emitter from '../emitter';

    const prefixCls = 'ivu-input';

    export default {
        name: 'Input',
        mixins: [ Emitter ],
        props: {
            type: {
                validator (value) {
                    return oneOf(value, ['text', 'textarea', 'password']);
                },
                default: 'text'
            },
            value: {
                type: [String, Number],
                default: ''
            },
            size: {
                validator (value) {
                    return oneOf(value, ['small', 'large']);
                }
            },
            placeholder: {
                type: String,
                default: ''
            },
            maxlength: {
                type: Number
            },
            disabled: {
                type: Boolean,
                default: false
            },
            icon: String,
            autosize: {
                type: [Boolean, Object],
                default: false
            },
            rows: {
                type: Number,
                default: 2
            },
            readonly: {
                type: Boolean,
                default: false
            },
            name: {
                type: String
            },
            number: {
                type: Boolean,
                default: false
            },
            autofocus: {
                type: Boolean,
                default: false
            }
        },
        data () {
            return {
                currentValue: this.value,
                prefixCls: prefixCls,
                prepend: true,
                append: true,
                slotReady: false,
                textareaStyles: {}
            };
        },
        computed: {
            wrapClasses () {
                return [
                    `${prefixCls}-wrapper`,
                    {
                        [`${prefixCls}-wrapper-${this.size}`]: !!this.size,
                        [`${prefixCls}-type`]: this.type,
                        [`${prefixCls}-group`]: this.prepend || this.append,
                        [`${prefixCls}-group-${this.size}`]: (this.prepend || this.append) && !!this.size,
                        [`${prefixCls}-group-with-prepend`]: this.prepend,
                        [`${prefixCls}-group-with-append`]: this.append,
                        [`${prefixCls}-hide-icon`]: this.append  // #554
                    }
                ];
            },
            inputClasses () {
                return [
                    `${prefixCls}`,
                    {
                        [`${prefixCls}-${this.size}`]: !!this.size,
                        [`${prefixCls}-disabled`]: this.disabled
                    }
                ];
            },
            textareaClasses () {
                return [
                    `${prefixCls}`,
                    {
                        [`${prefixCls}-disabled`]: this.disabled
                    }
                ];
            }
        },
        methods: {
            handleEnter (event) {
                this.$emit('on-enter', event);
            },
            handleIconClick (event) {
                this.$emit('on-click', event);
            },
            handleFocus (event) {
                this.$emit('on-focus', event);
            },
            handleBlur (event) {
                this.$emit('on-blur', event);
                if (!findComponentUpward(this, ['DatePicker', 'TimePicker', 'Cascader', 'Search'])) {
                    this.dispatch('FormItem', 'on-form-blur', this.currentValue);
                }
            },
            handleInput (event) {
                let value = event.target.value;
                if (this.number) value = Number.isNaN(Number(value)) ? value : Number(value);
                this.$emit('input', value);
                this.setCurrentValue(value);
                this.$emit('on-change', event);
            },
            handleChange (event) {
                this.$emit('on-input-change', event);
            },
            setCurrentValue (value) {
                if (value === this.currentValue) return;
                this.$nextTick(() => {
                    this.resizeTextarea();
                });
                this.currentValue = value;
                if (!findComponentUpward(this, ['DatePicker', 'TimePicker', 'Cascader', 'Search'])) {
                    this.dispatch('FormItem', 'on-form-change', value);
                }
            },
            resizeTextarea () {
                const autosize = this.autosize;
                if (!autosize || this.type !== 'textarea') {
                    return false;
                }

                const minRows = autosize.minRows;
                const maxRows = autosize.maxRows;

                this.textareaStyles = calcTextareaHeight(this.$refs.textarea, minRows, maxRows);
            },
            focus() {
                if (this.type === 'textarea') {
                    this.$refs.textarea.focus();
                } else {
                    this.$refs.input.focus();
                }
            }
        },
        watch: {
            value (val) {
                this.setCurrentValue(val);
            }
        },
        mounted () {
            if (this.type !== 'textarea') {
                this.prepend = this.$slots.prepend !== undefined;
                this.append = this.$slots.append !== undefined;
            } else {
                this.prepend = false;
                this.append = false;
            }
            this.slotReady = true;
            this.resizeTextarea();
        }
    };
</script>
<style scoped>
.ivu-input-number {
    display: inline-block;
    width: 100%;
    line-height: 1.5;
    padding: 4px 7px;
    font-size: 12px;
    color: #495060;
    background-color: #fff;
    background-image: none;
    position: relative;
    cursor: text;
    transition: border .2s ease-in-out,background .2s ease-in-out,box-shadow .2s ease-in-out;
    margin: 0;
    padding: 0;
    width: 80px;
    height: 32px;
    line-height: 32px;
    vertical-align: middle;
    border: 1px solid #dddee1;
    border-radius: 4px;
    overflow: hidden
}

.ivu-input-number::-moz-placeholder {
    color: #bbbec4;
    opacity: 1
}

.ivu-input-number:-ms-input-placeholder {
    color: #bbbec4
}

.ivu-input-number::-webkit-input-placeholder {
    color: #bbbec4
}

.ivu-input-number:hover {
    border-color: #57a3f3
}

.ivu-input-number:focus {
    border-color: #57a3f3;
    outline: 0;
    box-shadow: 0 0 0 2px rgba(45,140,240,.2)
}

.ivu-input-number[disabled],fieldset[disabled] .ivu-input-number {
    background-color: #f3f3f3;
    opacity: 1;
    cursor: not-allowed;
    color: #ccc
}

.ivu-input-number[disabled]:hover,fieldset[disabled] .ivu-input-number:hover {
    border-color: #e4e5e7
}

textarea.ivu-input-number {
    max-width: 100%;
    height: auto;
    vertical-align: bottom;
    font-size: 14px
}

.ivu-input-number-large {
    font-size: 14px;
    padding: 6px 7px;
    height: 36px
}


.ivu-input-group-prepend .ivu--select .ivu--select-selection,.ivu-input-group>.ivu-input:first-child .ivu--select .ivu--select-selection,.ivu-input-group>span>.ivu-input:first-child .ivu--select .ivu--select-selection {
    border-bottom-right-radius: 0;
    border-top-right-radius: 0
}

.ivu-input-group-prepend {
    border-right: 0;
    border: none; 
    font-size: 0.35rem;
    background-color: #ffffff;
}

.ivu-input-group-append {
    border-left: 0;
    background-color: #ffffff;
    border: none; 
}

.ivu-input-group-append,.ivu-input-group>.ivu-input:last-child {
    border-bottom-left-radius: 0!important;
    border-top-left-radius: 0!important
}

.ivu-input-group-append .ivu--select .ivu--select-selection,.ivu-input-group>.ivu-input:last-child .ivu--select .ivu--select-selection {
    border-bottom-left-radius: 0;
    border-top-left-radius: 0
}

.ivu-input-group-large .ivu-input,.ivu-input-group-large>.ivu-input-group-append,.ivu-input-group-large>.ivu-input-group-prepend {
    font-size: 14px;
    padding: 6px 7px;
    height: 36px
}

.ivu-input-group-small .ivu-input,.ivu-input-group-small>.ivu-input-group-append,.ivu-input-group-small>.ivu-input-group-prepend {
    padding: 1px 7px;
    height: 24px;
    border-radius: 3px
}

.ivu-form-item-error .ivu-input {
    border: 1px solid #ed3f14
}

.ivu-form-item-error .ivu-input:hover {
    border-color: #ed3f14
}

.ivu-form-item-error .ivu-input:focus {
    border-color: #ed3f14;
    outline: 0;
    box-shadow: 0 0 0 2px rgba(237,63,20,.2)
}

.ivu-form-item-error .ivu-input-icon {
    color: #ed3f14
}

.ivu-form-item-error .ivu-input-group-append,.ivu-form-item-error .ivu-input-group-prepend {
    background-color: #fff;
    border: 1px solid #ed3f14
}

.ivu-form-item-error .ivu-input-group-append .ivu-select-selection,.ivu-form-item-error .ivu-input-group-prepend .ivu-select-selection {
    background-color: inherit;
    border: 1px solid transparent
}

.ivu-form-item-error .ivu-input-group-prepend {
    border-right: 0
}

.ivu-form-item-error .ivu-input-group-append {
    border-left: 0
}

.ivu-form-item-error .ivu-transfer .ivu-input {
    display: inline-block;
    width: 100%;
    height: 32px;
    line-height: 1.5;
    padding: 4px 7px;
    font-size: 12px;
    border: 1px solid #dddee1;
    border-radius: 4px;
    color: #495060;
    background-color: #fff;
    background-image: none;
    position: relative;
    cursor: text;
    transition: border .2s ease-in-out,background .2s ease-in-out,box-shadow .2s ease-in-out
}

.ivu-form-item-error .ivu-transfer .ivu-input::-moz-placeholder {
    color: #bbbec4;
    opacity: 1
}

.ivu-form-item-error .ivu-transfer .ivu-input:-ms-input-placeholder {
    color: #bbbec4
}

.ivu-form-item-error .ivu-transfer .ivu-input::-webkit-input-placeholder {
    color: #bbbec4
}

.ivu-form-item-error .ivu-transfer .ivu-input:hover {
    border-color: #57a3f3
}

.ivu-form-item-error .ivu-transfer .ivu-input:focus {
    border-color: #57a3f3;
    outline: 0;
    box-shadow: 0 0 0 2px rgba(45,140,240,.2)
}

.ivu-form-item-error .ivu-transfer .ivu-input[disabled],fieldset[disabled] .ivu-form-item-error .ivu-transfer .ivu-input {
    background-color: #f3f3f3;
    opacity: 1;
    cursor: not-allowed;
    color: #ccc
}

.ivu-form-item-error .ivu-transfer .ivu-input[disabled]:hover,fieldset[disabled] .ivu-form-item-error .ivu-transfer .ivu-input:hover {
    border-color: #e4e5e7
}

textarea.ivu-form-item-error .ivu-transfer .ivu-input {
    max-width: 100%;
    height: auto;
    vertical-align: bottom;
    font-size: 14px
}

.ivu-form-item-error .ivu-transfer .ivu-input-large {
    font-size: 14px;
    padding: 6px 7px;
    height: 36px
}

.ivu-form-item-error .ivu-transfer .ivu-input-small {
    padding: 1px 7px;
    height: 24px;
    border-radius: 3px
}

.ivu-form-item-error .ivu-transfer .ivu-input-icon {
    color: #80848f
}

.ivu-form-item-validating .ivu-input-icon-validate {
    display: inline-block
}

.ivu-form-item-validating .ivu-input-icon+.ivu-input {
    padding-right: 32px
}

.ivu-input-group-append .ivu-btn,.ivu-input-group-prepend .ivu-btn {
/*    border-color: transparent;
    background-color: transparent;*/
 /*   color: inherit;*/
    margin: -5px -7px
}


</style>
