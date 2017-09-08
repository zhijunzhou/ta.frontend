<template>
    <div>
        <Row type="flex" justify="center" align="middle"  ref="tabbar">
            <Col span="4" class="bg3">
                <div class="tc" @click="goback()">
                    <div class="arrow-div">
                        <Icon type="android-arrow-back" size="20" color="#acacac"></Icon>
                        
                    </div>
                    <p class="h2">返回</p>
                </div>
            </Col>
            <Col span="10" class="h2 bg1">
                <div @click="saveDraft">
                存草稿</div>
                </Col>
            <Col span="10" class="h2 bg2" @click="submit">
                提交
            </Col>
        </Row>
    </div>
</template>
<script>
    export default {
        data() {
            return {

            };
        },
        methods: {
            goback () {

            },
            saveDraft () {

            },
            submit () {
                
            }
        }
    };
</script>
<style scoped>
.index{padding: 0.22rem;background-color: #f5f5f5}
.h1{font-size: 0.32rem; color: #3f3f3f;padding-bottem:.22rem}
.h2{font-size: 0.30rem; color: #5e5e5e}
/*说明信息*/
.h3{font-size: 0.24rem; color: #acacac}
.bg1{background: #66cc66;color:white;text-align: center;height: 1rem;line-height: 1rem}
.bg2{background: #0066ff;color:white;text-align: center;height: 1rem;line-height: 1rem}
.tabbar{position: fixed;bottom: 0;left:0; width: 100%;}
.arrow-div{margin: 0 auto;border: 1px solid #acacac;border-radius: 100%;height: .44rem;width: .44rem;text-align: center}
.bg4{background: white;padding:.22rem;border-radius: 5px;}
.icon-img{width: .77rem;height: .77rem;border: 1px solid #0066ff;border-radius: 100%;overflow: hidden;}
.icon-img img{width: 100%;}
.tc{text-align: center;position: relative;top: 0.1rem;}
.span{border: 1px solid #0066ff;color:#0066ff}
.title{margin: 0.22rem 0}
.bg3{background: white;display: flex;flex-direction: column;    align-items: center;justify-content: center;height: 1rem}
</style>
