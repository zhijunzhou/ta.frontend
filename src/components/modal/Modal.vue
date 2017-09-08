<style scoped>
@charset "UTF-8";

#v-modal-wrap {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  bottom: 0;
  background-color: rgba(51, 51, 51, 0.5);
  z-index: 50;
  display: flex;
  justify-content: center;
  align-items: center;
  transform: translate3d(0, 0, 0);
}

#v-modal-dialog {
  background-color: #fff;
  width: 80%;
  height: auto;
  padding-top: 20px;
  border-radius: 4px;
  box-sizing: border-box;
  color: #919191;
  overflow: hidden;
  -webkit-user-select: none;
}

#v-modal-dialog * {
  box-sizing: border-box;
}

#v-modal-footer {
  text-align: right;
  display: flex;
  height: 50px;
  position: relative;
}

#v-modal-footer:after {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 1px;
  background: #dadada;
  transform: scaleY(0.5);
  transform-origin: top left;
}

.v-modal-btn {
  flex: 1;
  border: none;
  background-color: #ffffff;
  outline: none;
  font-size: 16px;
}

.v-modal-btn.primary {
  color: #007aff;
}

.v-modal-btn.slave {
  color: #919191;
  position: relative;
}

.v-modal-btn.slave:after {
  content: '';
  position: absolute;
  right: 0;
  top: 0;
  height: 100%;
  width: 1px;
  background: #dadada;
  transform: scaleX(0.5);
  transform-origin: top right;
}

.v-modal-btn:hover, .v-modal-btn:active {
  background-color: #eeeeee;
}

#v-modal-title {
  font-size: 16px;
  text-align: center;
  margin-bottom: 15px;
}

#v-modal-body {
  font-size: 15px;
  text-align: center;
  line-height: 22px;
  margin-bottom: 20px;
  padding: 0 20px;
  white-space: normal;
}

.v-modal-prompt-form {
  margin-top: 10px;
}

.v-modal-input {
  height: 30px;
  border: 1px solid #eaeaea;
  border-radius: 2px;
  padding: 0 5px;
  outline: none;
  text-align: center;
  background-color: #fff;
  font-size: 15px;
  display: block;
  width: 100%;
}

.v-modal-input:focus {
  border-color: #63c47d;
}

.modal-enter-active, .modal-leave-active {
  transition: opacity .2s ease;
}
.modal-enter, .modal-leave-active {
  opacity: 0
}
</style>
<template>
    <transition name="modal">
        <div id="v-modal-wrap" v-show="show">
            <div id="v-modal-dialog">
          <!--       <div id="v-modal-title" v-show="title">{{title}}</div> -->
                <div id="v-modal-body" >
                    <slot name="slotA" v-if="slot === 'slotA'  && modalId!==6"></slot>
                    <slot name="slotB" v-if="slot === 'slotB'  && modalId!==6"></slot>
                    <slot name="slotC" v-if="slot === 'slotC'  && modalId!==6"></slot>
                    <div @click="cancel()"><slot name="slotD" v-if="slot === 'slotD'  && modalId!==6" ></slot></div>
                    <slot name="slotE" v-if="slot === 'slotE' && modalId!==6"></slot>
                    <template v-if="!slot">{{message}}</template>
<!--                     <div v-if="list" @click="cancel()" style="position: relative;height: 0;top:-0.2rem;right: -2.5rem;font-size: 0.36rem;color: #007aff">
                        取消
                    </div> -->
                    <div v-if="modalId===6" style="text-align: center;font-size: 0.36rem;height: 1.00rem">
                        请选择驳回环节 
                        
                    </div>
                    <div v-if="modalId===6" style="font-size: 0.32rem">
                        <Radio-group v-model="reject" vertical size="large">
          <!--               <div class="row" v-for="lst in list"> -->
                            
                                <Radio v-for="lst in list" :label="lst" style="text-align: left;font-size: 0.36rem;height: 1.00rem"></Radio>
                            
             <!--                <Radio v-model="single" size="large">{{lst}}</Radio> -->
                      <!--   </div> -->
                        </Radio-group>
                    </div>
                </div>
                <div id="v-modal-footer" v-if="type !== 'prompt'">
                    <button class="v-modal-btn slave" @click="cancel()" v-show="type === 'confirm'">取消</button>
                    <button class="v-modal-btn primary" @click="ok()" v-show="type === 'alert'">知道了</button>
                    <button class="v-modal-btn primary" @click="ok()" v-show="type === 'confirm'">确定</button>
                </div>
            </div>
        </div>
    </transition>
</template>

<script>
    export default {
        name: 'v-modal',
        data: function() {
            return {
                reject:'',
                show: false,
                type: '',
                list:[],
                message: '',
                slot: null,
                title: '',
                callback: null,
                input: '',
                inputType: 'text',
                modalId:0
            }
        },
        methods: {
            modal: function(message, title,) {

                if (typeof message === 'string') {
                    this.message = message;
                    this.slot = null;
                } else if (typeof message === 'object' && message.slot) {

                    this.slot = message.slot;
                } else if (typeof message === 'object' ) {
                    const {modalId,data} = message;
                    console.log(modalId,data);
                    if (modalId === 6 ){
                        this.slot = null;
                        console.log(modalId,data);
                        this.modalId=modalId;
                        this.list=data;
                    }
                }
                if(this.slot === 'slotD'){
                  setTimeout(() => {
                    this.cancel();
                  }, 1000);  
                }
                console.log(message,this.list,typeof message);
                this.title = title;
                this.callback = null;
                this.input = '';
                this.show = true;
            },
            modalAlert: function(params = {}) {
                this.type = 'alert';
                this.modal(params.message, params.title == null ? '提示' : params.title);
                this.callback = params.callback;
            },
            modalConfirm: function(params = {}) {
                this.type = 'confirm';
                this.modal(params.message, params.title || '确认');
                this.callback = params.callback;
            },
            modalPrompt: function(params = {}) {
                this.type = 'prompt';
                this.modal(params.message, params.title || '输入');
                this.callback = params.callback;
                this.inputType = params.options.inputType || 'text';
                // this.$nextTick(() => {
                //     this.$refs.input.focus();
                // });
            },
            ok: function() {
                var self = this;
                this.show = false;
                
                console.log(this.modalId);
                const sendBack = this.modalId===6?self.reject:true;
                setTimeout(function() {
                    if (self.callback) {
                        self.callback(sendBack);
                    }
                }, 0);
                this.init();
            },
            cancel: function() {
                
                var self = this;
                this.show = false;
                setTimeout(function() {
                    if (self.callback) {
                        self.callback(self.type == 'prompt' ? undefined : false);
                    }

                }, 0);
                this.modalId = 0;
                this.init();
            },
            onSubmitForm: function(e) {
                e.preventDefault();
                this.ok();
                return false;
            },
            init: function(){
                // this.modalId = 0;
                // this.slot = null;
            }
        },
        mounted: function() {
            this.init();
        }
    }
</script>