
<template>
    <div class="inde">
        <Row class="pd">
            <Col span="24" class="h2 pb">相关评估权重分布:</Col>
        </Row>
        <Row>
            <Col span="24">
                <Row class="pd">
                    <Col span="8">
                        <Row type="flex" justify="center" class="code-row-bg">
                            <Col span="24" class="icon-img"><img src="https://gss2.bdstatic.com/-fo3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike80%2C5%2C5%2C80%2C26/sign=7a8ee34f30fa828bc52e95b19c762a51/060828381f30e9247e29fb7b4f086e061c95f7ef.jpg" alt=""></Col>
                            <Col span="24" class="col-center h3">fdsafdsa</Col>
                            <Col span="24" class="col-center h3">权重：10%</Col>
                        </Row>
                    </Col>
                    <Col span="8" >
                        <Row type="flex" justify="center" class="code-row-bg">
                            <Col span="24" class="icon-img"><img src="https://gss2.bdstatic.com/-fo3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike80%2C5%2C5%2C80%2C26/sign=7a8ee34f30fa828bc52e95b19c762a51/060828381f30e9247e29fb7b4f086e061c95f7ef.jpg" alt=""></Col>
                            <Col span="24" class="col-center h3">fdsafdsa</Col>
                            <Col span="24" class="col-center h3">权重：10%</Col>
                        </Row>
                    </Col>
                    <Col span="8" >
                        <Row type="flex" justify="center" class="code-row-bg">
                            <Col span="24" class="icon-img"><img src="https://gss2.bdstatic.com/-fo3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike80%2C5%2C5%2C80%2C26/sign=7a8ee34f30fa828bc52e95b19c762a51/060828381f30e9247e29fb7b4f086e061c95f7ef.jpg" alt=""></Col>
                            <Col span="24" class="col-center h3">fdsafdsa</Col>
                            <Col span="24" class="col-center h3">权重：10%</Col>
                        </Row>
                    </Col>
                </Row>
                <Row class="pd" v-if="isShow">
                    <Col span="8" >
                        <Row type="flex" justify="center" class="code-row-bg">
                            <Col span="24" class="icon-img"><img src="https://gss2.bdstatic.com/-fo3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike80%2C5%2C5%2C80%2C26/sign=7a8ee34f30fa828bc52e95b19c762a51/060828381f30e9247e29fb7b4f086e061c95f7ef.jpg" alt=""></Col>
                            <Col span="24" class="col-center h3">fdsafdsa</Col>
                            <Col span="24" class="col-center h3">权重：10%</Col>
                        </Row>
                    </Col>
                    <Col span="8" >
                        <Row type="flex" justify="center" class="code-row-bg">
                            <Col span="24" class="icon-img"><img src="https://gss2.bdstatic.com/-fo3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike80%2C5%2C5%2C80%2C26/sign=7a8ee34f30fa828bc52e95b19c762a51/060828381f30e9247e29fb7b4f086e061c95f7ef.jpg" alt=""></Col>
                            <Col span="24" class="col-center h3">fdsafdsa</Col>
                            <Col span="24" class="col-center h3">权重：10%</Col>
                        </Row>
                    </Col>
                    <Col span="8" >
                        <Row type="flex" justify="center" class="code-row-bg">
                            <Col span="24" class="icon-img"><img src="https://gss2.bdstatic.com/-fo3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike80%2C5%2C5%2C80%2C26/sign=7a8ee34f30fa828bc52e95b19c762a51/060828381f30e9247e29fb7b4f086e061c95f7ef.jpg" alt=""></Col>
                            <Col span="24" class="col-center h3">fdsafdsa</Col>
                            <Col span="24" class="col-center h3">权重：10%</Col>
                        </Row>
                    </Col>
                </Row>
            </Col>
            <Col span="24" class="bt col-center pd" v-if="isShow" >

                <div @click="toogle">
                         收起
                    <Icon type="chevron-up"></Icon>
                </div>

            </Col>
            <Col span="24" class="bt col-center pd" v-else @click="toogle">
                <div @click="toogle">
                         更多
                    <Icon type="chevron-down"></Icon>
                </div>
               
            </Col>
        </Row>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                isShow: false,
            }
        },
        methods: {
            toogle () {
                this.isShow? this.isShow = false: this.isShow = true;
            }
        }
    };
</script>
<style scoped>
.inde{background-color: white;border-radius: 5px;}
.pd{padding: 0.22rem;}
.h1{font-size: 0.32rem; color: #3f3f3f}
.h2{font-size: 0.30rem; color: #5e5e5e}
/*说明信息*/
.h3{font-size: 0.24rem; color: #acacac}
.bt{border-top: 1px solid #ddd}
.icon-img{width: .77rem;height: .77rem;border: 1px solid #0066ff;border-radius: 100%;overflow: hidden}
.icon-img img{width: 100%;}
.col-center{text-align: center;}
</style>
