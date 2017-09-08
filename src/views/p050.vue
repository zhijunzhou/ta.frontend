<style scoped>
.index{padding: 0.22rem;background-color: #f5f5f5}
.h1{font-size: 0.32rem; color: #3f3f3f;padding-bottem:.22rem}
.h2{font-size: 0.30rem; color: #5e5e5e}
/*说明信息*/
.h3{font-size: 0.24rem; color: #acacac}
.bg1{background: #66cc66;color:white;text-align: center;height: 1rem;line-height: 1rem}
.bg2{background: #0066ff;color:white;text-align: center;height: 1rem;line-height: 1rem}
.tabbar{position: absolute;bottom: 0;left:0; width: 100%;}
.arrow-div{border: 1px solid #acacac;border-radius: 100%;height: .44rem;width: .44rem;text-align: center}
.bg3{background: white;display: flex;flex-direction: column;    align-items: center;justify-content: center;height: 1rem}

</style>
<template>
<div>
    <div :style="{height: boxHeight +'px',overflowX: 'hidden'}">
        <div class="index">
            <Row>
                <Col span="24" class="h1">一、业绩评估</Col>
            </Row>
            <component-top></component-top>
            <component-content :title="tag[0]"></component-content>
            <component-content :title="tag[1]"></component-content>
            <contribution></contribution>
            <assessment></assessment>
            <comment></comment>
            <declare></declare>
            
        </div>
    </div>
    <Row type="flex" justify="center" align="middle" class="tabbar" ref="tabbar">
            <Col span="4" class="bg3">
                <div class="arrow-div"><Icon type="android-arrow-back" size="20" color="#acacac"></Icon></div>
                <div class="h2">返回</div>
            </Col>
            <Col span="10" class="h2 bg1">
                <div>
                存草稿</div>
                </Col>
            <Col span="10" class="h2 bg2">
                提交
            </Col>
        </Row>
</div>
</template>
<script>
import componentTop from './component-top'
import componentContent from './component-content'
import contribution from './contribution'
import assessment from './assessment'
import comment from './comment'
import declare from './declare'

    export default {
        created () {
            this.$nextTick(() => {
                console.log(this.$refs.tabbar)
                this.tabbarH = this.$refs.tabbar.$el.clientHeight;
                this.boxHeight = document.documentElement.clientHeight - this.tabbarH;
            })
           
        },
        components: {
            'component-top': componentTop,
            'component-content': componentContent,
            contribution,assessment,comment,declare
        },
        data () {
            return{
                boxHeight: null,
                tabbarH: null,
                tag: [
                    {title: '业务', color: '#0066ff'},
                    {title: '管理',color: '#66cc66'}
                ]
            }
        },
        methods: {
            handleStart() {
                this.$Modal.info({
                    title: 'Bravo',
                    content: 'Now, enjoy the convenience of iView.'
                });
            }
        },
    };
</script>