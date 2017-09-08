<style>

</style>
<template>
<div style="width: 100%; height: 12.44rem; background-color: #eeeeee;">
        <Input style="font-size: 0.24rem; color: #acacac; width:7.06rem; margin:0.6rem 0.22rem 0 0.22rem;":maxlength="500"  :rows="12" :autosize="{minRows: 12,maxRows: 22}" type="textarea" placeholder="有什么意见或建议？告诉我们。" v-model="feedbackvalue" >      
        </Input>
        <div style="height:0.3rem; width:auto; font-size:0.24rem;  color:#acacac; margin-top:-0.55rem; position:absolute; right:0.43rem;" >{{feedbackvalue.length}}/500</div>
        <Footers>
            <span style="width:1.50rem; height:1.00rem; background-color:#ffffff; color:#acacac; text-align:center; color:#acacac;font-size:0.30rem; padding-top:0.52rem; position:fixed; bottom:0rem; left:0rem; display:inline;" @click="goToUrl('/')">
                    <div style="transform:rotate(180deg); width:0.30rem; position: fixed; left:0.56rem; bottom:0.40rem;"><i class="icon ion-log-in" ></i></div>返回
            </span>
                
            <span style="width:6.00rem; height:1.00rem; background-color:#007aff; text-align:center; color:#fff;font-size:0.30rem; padding-top:0.33rem; position:fixed; bottom:0px; margin-left:1.5rem; " @click="submit(text)">提交</span>
        </Footers>
</div>
        
</template>
<script>

    import QACard from '../components/QACard.vue';
    import Footers from '../components/footer.vue';
    import ModalApi from '../components/modal/ModalApi';

    export default {
        mixins: [ModalApi],
        data(){
            return{
                url:'/',
                feedbackvalue:"",

            }
        },
        components:{

        },
        methods: {
            goToUrl:function(url) {
                this.$router.push(url);
            },
            submit:function(text){
                this.prompt({slot: 'slotD'});
            },
            getTextLength:function(text){

            },
            
        },
        mounted () {
        }
    };
</script>