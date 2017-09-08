<style scoped>
.index{padding: 0.22rem;background-color: #f5f5f5;height: 100%;overflow-x: auto;}
.h1{font-size: 0.32rem; color: #3f3f3f;padding-bottom:0.22rem;padding-top:0.35rem;}
.h2{font-size: 0.30rem; color: #5e5e5e}
/*说明信息*/
.h3{font-size: 0.24rem; color: #acacac}
.bg1{background: #66cc66;color:white;text-align: center;height: 1rem;line-height: 1rem}
.bg2{background: #0066ff;color:white;text-align: center;height: 1rem;line-height: 1rem}
.tabbar{position: fixed;bottom: 0;left:0; width: 100%;}
.arrow-div{border: 1px solid #acacac;border-radius: 100%;height: .44rem;width: .44rem;text-align: center}
.bg4{background: #ffffff;padding:.22rem;border-radius: 0.1rem;}
.icon-img{width: .77rem;height: .77rem;border: 1px solid #007aff;border-radius: 100%;overflow: hidden;}
.icon-img img{width: 100%;}
.tcc{text-align: center}
.span{border: 1px solid #007aff;color:#007aff;}
.title{margin: 0.22rem 0}
.bg3{background: #ffffff;display: flex;flex-direction: column;    align-items: center;justify-content: center;height: 1rem}
</style>
<template>
<div>
    <Row type="flex" justify="center" align="middle" class="code-row-bg bg4">
        <Col span="4" >
            <ProfilePhoto></ProfilePhoto>
        </Col>
        <Col span="14" >
            <div class="h3">
                <p>评估环节： {{MyTask.StepName}}</p>
                <p>被反馈人： {{AssessStaffBaseInfo.StaffName}}</p>
            </div>
        </Col>
        <Col span="6">
            <div class="tcc">
                <Button @click="handleClick" class="span" type="ghost" shape="circle" icon="close">放弃</Button>
            </div>
        </Col>
    </Row>
    <Row>
        <Col span="24">
            <div class="title h1">领导能力评估</div>
        </Col>
    </Row>
</div>
</template>
<script>
    import { oneOf } from '../tools.js';
    import ProfilePhoto from '../components/ProfilePhoto';
    export default {
        name: 'AssessStaffBaseInfo',
        components: {  
            ProfilePhoto
        },
        props: {
            MyTask: {
                type:Object,
                default:{}
            },
            AssessStaffBaseInfo: {
                type:Object,
                default:{}
            }
        },
        computed: {

        },
        methods: {
            handleClick (event) {
                this.$emit('click', event);
            }

        }
    };
</script>
