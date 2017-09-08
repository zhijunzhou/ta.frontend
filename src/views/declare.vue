 <style scoped>
.index{background-color: #f5f5f5}
.title{font-size: 0.32rem; color: #3f3f3f;padding-bottem:.22rem}
.h1{font-size: 0.32rem; color: #3f3f3f;padding-bottem:.22rem}
.h2{font-size: 0.30rem; color: #5e5e5e}
/*说明信息*/
.h3{font-size: 0.24rem; color: #acacac}
.pd{padding:.11rem 0.22rem;}
.inde{background-color: white;border-radius: 5px;margin-top: 0.22rem}
.upload{color: #0066ff;border: 1px solid #0066ff;}
.tac{text-align: center}
.bb{border-bottom: 1px solid #ddd;margin-bottom: .22rem}
.color{color: #ff3333}
</style>
<template>
    <div>
        <Row class="inde">
            <Col span="24">
                <div class="title h1 pd">职级申报</div>
            </Col>
            <RadioGroup v-model="single" @on-change="changeRadio">
                <Col span="24">
                    <Radio label="我要进行申报。" class="h2 pd"></Radio>
                    <p class="h3 color pd">注：职级申报需上传申报附件，请移步PC端完善此操作</p>
                </Col>
                <Col span="24">
                    <Radio label="本次暂不申报，保持原职级/职位" class="h2 pd"></Radio>
                </Col>
            </RadioGroup>
            <!-- <RadioGroup v-model="single">
            <Row class="pd">
                <Col span="4">
                    <div class="title h2 tac">
                        <Radio></Radio>
                    </div>
                </Col>
                <Col span="20">
                    <div class="title">
                        <p class="h3">我要进行申报。</p> 
                        <p class="h3 color">注：职级申报需上传申报附件，请移步PC端完善此操作</p>
                    </div>
                </Col>
            </Row>
            <Row class="pd">
                <Col span="4">
                    <div class="title h2 tac">
                        <Radio ></Radio>
                    </div>
                </Col>
                <Col span="20">
                    <div class="title">
                        <p class="h3">本次暂不申报，保持原职级/职位</p>
                    </div>
                </Col>
            </Row>
            </RadioGroup> -->
        </Row>
    </div>
</template>
<script>
    export default {
        data () {
            return{
                single: "我要进行申报。"
            }
        },
        methods: {
            changeRadio () {
                console.log(this.single);
            }
        }
    };
</script>