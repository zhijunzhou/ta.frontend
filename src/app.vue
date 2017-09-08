<template>
    <div>
        <v-modal ref="modal">
            <div slot="slotA">
                <div class="row" style=" align-items: center;text-align: left;">

                    <div class="col col-20"><i class="ionic ion-android-alert" style="font-size:0.60rem;color:#ff8661; "></i>
                    </div>
                    <div class="col ">
                    抱歉暂不能提交, 检测到如下原因:
                    </div>
                    <div class="col col-10">
                        &nbsp;
                    </div>
                </div>
                <div class="row" >
                    <div class="col col-20">
                       
                    </div>
                    <div class="col " style="text-align: left;font-size: 0.24rem">
                    1、 请填写完整各项信息<br>
                    2、 行为评估未选择
                    </div>
                    <div class="col col-10">
                     
                    </div>
                </div>
            </div>
            <div slot="slotB" style="text-align: center;">
                <div class="row" style=" align-items: center;">
                    <div class="col col-20">
                        &nbsp;
                    </div>
                    <div class="col col-10"><i class="ionic ion-android-alert" style="font-size:0.60rem;color:#ff8661; "></i>
                    </div>
                    <div class="col ">
                    &nbsp;&nbsp;确定要删除吗？
                    </div>
                    <div class="col col-20">
                        &nbsp;
                    </div>
                </div>
            </div>
            <div slot="slotC" style="text-align: center;">
                <div class="row" style=" align-items: center;">
                    <div class="col col-20">
                        &nbsp;
                    </div>
                    <div class="col col-10"><i class="ionic ion-android-alert" style="font-size:0.60rem;color:#ff8661; "></i>
                    </div>
                    <div class="col ">
                    &nbsp;&nbsp;确定要放弃吗？
                    </div>
                    <div class="col col-20">
                        &nbsp;
                    </div>
                </div>
                <div class="row" >
                    <div class="col col-20">
                       
                    </div>
                    <div class="col col-10">
                    </div>
                    <div class="col ">
                    &nbsp;&nbsp;放弃后不可恢复
                    </div>
                    <div class="col col-20">
                        &nbsp;
                    </div>
                </div>
            </div>
            <div slot="slotD" style="text-align: center;">
                <div class="row" style=" align-items: center;">
                    <div class="col col-20">
                        &nbsp;
                    </div>
                    <div class="col col-10"><i class="ionic ion-checkmark-circled" style="font-size:0.60rem;color:#007aff; "></i>
                    </div>
                    <div class="col " style="text-align: right;">
                    提交成功
                    </div>
                    <div class="col col-30">
                        &nbsp;
                    </div>
                </div>
            </div>
            <div slot="slotE">
                <div class="row" style=" align-items: center;text-align: left;">

                    <div class="col col-20"><i class="ionic ion-android-alert" style="font-size:0.60rem;color:#ff8661; "></i>
                    </div>
                    <div class="col ">
                    抱歉暂不能提交, 检测到如下原因:
                    </div>
                    <div class="col col-10">
                        &nbsp;
                    </div>
                </div>
                <div class="row" >
                    <div class="col col-20">
                       
                    </div>
                    <div class="col " style="text-align: left;font-size: 0.24rem">
                    1、 请填写完整各项信息<br>
                    2、 权重比例和不是100%<br>
                    3、 行为评估未选择
                    </div>
                    <div class="col col-10">
                     
                    </div>
                </div>
            </div>
        </v-modal>
        <router-view></router-view>
    </div>
</template>
<script>
    import Modal from './components/modal/Modal.vue';
    import ModalApi from './components/modal/ModalApi';
    import modalEventBind from './components/modal/ModalEventBind';
    export default {
        mixins: [ModalApi],
        components: {
            [Modal.name]: Modal
        },
        data() {
            return {

            };
        },
        mounted() {

        },
        beforeDestroy() {

        },
        methods: {
            simpleAlert() {
                this.alert('您已经升级为VIP会员');
            },
            alertNormalWithCallback() {
                this.alert('您已经升级为VIP会员', () => {
                    alert('你点击了确定');
                });
            },
            alertNormalWithTitle() {
                this.alert('您已经升级为VIP会员', '恭喜');
            },
            alertWithoutTitle: function () {
                this.alert('今天天气真好，适合出去跑步玩耍', '', function () {
                    console.log('去奥森跑步吧~');
                });
            },
            alertWithLongText() {
                this.alert('热烈欢迎产品经理张小明加入芝麻一家亲！张小明毕业于南昌大学，软件工程专业出身，曾经在搜狐等一线互联网' +
                    '公司任职，工作经验非常丰富，是即做过产品的攻城师，又是做过技术的产品！希望大家多多交流，共同学习进步！', '欢迎新同学');
            },
            alertWithSlot1() {
                this.alert({slot: 'slotA'});
            },
            alertWithSlot2() {
                this.confirm({slot: 'slotB'});
            },
            simpleConfirm() {
                this.confirm('确定删除这项任务么？', (ok) => {
                    if (ok) {
                        alert('删除成功');
                    }
                });
            },
            simplePrompt() {
                this.prompt('输入你的税前工资', '薪资计算器', (salary) => {
                    alert('你输入的数据为：' + salary);
                }, {inputType: 'number'});
            }
        },
        mounted() {
            modalEventBind(this.$refs.modal);
        },
    };
</script>