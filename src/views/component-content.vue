
<template>
    <div class="inde">
        <Row class="pd1">
            <Col span="24" class="h2" style="height: 0.5rem"><span :style="{backgroundColor: title.color}" class="title-span">{{this.title.title}}</span></Col>
            </Col>
        </Row>
        <Row class="pd1">
            <Col span="6" class="h2">目标:</Col>
            <Col span="12"><Input v-model="value" placeholder="请输入..."></Input></Col>
            <Col span="6" class="pd2">
                <Icon type="ios-plus-outline" size="30" color="#0066ff"></Icon>
                <Icon type="ios-close-outline" size="30" color="#0066ff" style="float: right"></Icon>
            </Col>
        </Row>
        <Row  class="pd1">
            <Col span="6" class="h2">衡量标准:</Col>
            <Col span="18"><Input type="textarea" v-model="value" placeholder="请输入..."></Input></Col>
        </Row>
        <Row class="pd1">
            <Col span="6" class="h2">完成情况:</Col>
            <Col span="18"><Input type="textarea" v-model="value" placeholder="请输入..."></Input></Col>
        </Row>
        <Row class="pd1">
            <Col span="6" class="h2">选择评估人:</Col>
            <Col span="18">
                <Row type="flex" justify="center" class="code-row-bg">
                    <Col span="6" >
                        <img class="icon-img" src="https://gss2.bdstatic.com/-fo3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike80%2C5%2C5%2C80%2C26/sign=7a8ee34f30fa828bc52e95b19c762a51/060828381f30e9247e29fb7b4f086e061c95f7ef.jpg" alt="">
                        <div class="icon-div">
                            <Icon type="ios-checkmark-empty" color="white" size="20" ></Icon>
                        </div>
                    </Col>
                    <Col span="6" class="icon-img"><img src="https://gss2.bdstatic.com/-fo3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike80%2C5%2C5%2C80%2C26/sign=7a8ee34f30fa828bc52e95b19c762a51/060828381f30e9247e29fb7b4f086e061c95f7ef.jpg" alt=""></Col>
                    <Col span="6" class="icon-img"><img src="https://gss2.bdstatic.com/-fo3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike80%2C5%2C5%2C80%2C26/sign=7a8ee34f30fa828bc52e95b19c762a51/060828381f30e9247e29fb7b4f086e061c95f7ef.jpg" alt=""></Col>
                </Row>
            </Col>
        </Row>
        <Row class="pd1">
            <Col span="6" class="h2">您已分发给:</Col>
            <Col span="18">jljfdls(张三);shirleyy(李四)</Col>
        </Row>
        <Row type="flex" justify="center" class="pd1 code-row-bg">
            <Col span="6" class="h2">权重:</Col>
            <Col span="4"><Input v-model="value" placeholder="请输入..."></Input></Col>
            <Col span="1" class="h3 df-info">%</Col>
            <Col span="13" class="col-center h3 df-info">（分发给实践上级需填写权重）</Col>
        </Row>
    </div>
</template>
<script>
    export default {
        props: [
            'title'
        ],
        data () {
            return {
                isShow: true,
            }
        },
        methods: {
        }
    };
</script>
<style scoped>
.title-span{color: white;transform: rotate(315deg); position: absolute;width: 1.5rem;text-align: center;left: -.65rem;top: -.17rem;}
.inde{background-color: white;border-radius: 5px;margin-top: 0.22rem;overflow: hidden}
.df{display: flex}
.df-info{ display: flex;align-items: center;}
.pd1{margin:0.22rem;}
.pd{padding: 0.22rem;}
.pd2{padding: 0 0.22rem}
.h1{font-size: 0.32rem; color: #3f3f3f}
.h2{font-size: 0.30rem; color: #5e5e5e}
/*说明信息*/
.h3{font-size: 0.24rem; color: #acacac}
.bt{border-top: 1px solid #ddd}
.icon-img{width: .77rem;height: .77rem;border: 1px solid #0066ff;border-radius: 100%;overflow: hidden;margin: 0 0.22rem}
.icon-img img{width: 100%;}
.col-center{text-align: center;}
.icon-div{background: rgb(0, 102, 255); width: 0.32rem;height: 0.32rem;align-items: center;justify-content: center;display: flex;border-radius: 100%;position: absolute;right: 0.1rem;top: 0.4rem}
</style>
