 <style scoped>
.index{padding: 0.22rem;background-color: #f5f5f5}
.h1{font-size: 0.32rem; color: #3f3f3f;padding-bottem:.22rem}
.h2{font-size: 0.30rem; color: #5e5e5e}
/*说明信息*/
.h3{font-size: 0.24rem; color: #acacac}
.pd{padding:.11rem 0.22rem;}
.inde{background-color: white;border-radius: 5px;margin: 0.22rem 0}
.upload{color: #0066ff;border: 1px solid #0066ff;}
.tar{text-align: right}
</style>
<template>
    <div class="inde">
        <Row>
            <Col span="24" class="h1">
                <div class="h1 pd">其他价值贡献:</div>
            </Col>
            <Col span="24" class="h3 pd">
                <Input v-model="value6" type="textarea" :rows="4" placeholder="请输入..."></Input>
            </Col>
        </Row>
        <Row type="flex">
            <Col span="12" class="h1">
                <div class="h2 pd">上传附件:</div>
            </Col>
            <Col span="12" class="tar">
                <div class="h3 pd">
                    <Upload action="" >
                        <Button type="ghost" class="upload">上传附件</Button>
                    </Upload>
                </div>
            </Col>
        </Row>
    </div>
</template>
<script>
    export default {
        data () {
            return{
            }
        },
        methods: {
            handleStart() {
            }
        }
    };
</script>