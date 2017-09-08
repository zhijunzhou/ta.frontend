<template>
	<div class="bar bar-footer bar-height">
        <Row type="flex">
            <Col span="4" class="text-center bar-item">
                <a>
                    <Row>
                        <Col><i class="button button-icon icon ion-ios-keypad-outline"></i></Col>
                        <Col>评估</Col>
                    </Row>
                </a>
            </Col>
            <Col span="4" class="text-center bar-item">
                <a>
                    <Row>
                        <Col><i class="button button-icon icon ion-ios-chatboxes-outline"></i></Col>
                        <Col>看自评</Col>
                    </Row>
                </a>
            </Col>
            <Col span="4" class="text-center bar-item">
                <a>
                    <Row>
                        <Col><i class="button button-icon icon ion-android-people"></i></Col>
                        <Col>看周边</Col>
                    </Row>
                </a>
            </Col>
            <Col span="6" class="text-center text-nowarp ct-btn btn-draft">
                <a class="text-white" @click="saveDraft">
                   存草稿
                </a>
            </Col>
            <Col span="6" class="text-center text-nowrap ct-btn btn-save">
                <a class="text-white" @click="save">
                    保存并返回
                </a>
            </Col>
        </Row>
    </div>
</template>
<script>
	export default{
		name:'CommandBar',
		props: ['saveDraft','save'],
		components:{

		}
	}
</script>
<style scoped>
.bar-height{
    height:1.3rem;
    padding: 0;
    background-color: #fff;
    border-top: 1px solid #eee;
    border-bottom: 1px solid #eee;
}
.bar-item {
    padding-top: 0.15rem;
    padding-bottom: 0.15rem;
}
.ivu-row-flex {
    width: 100%;
}
.text-white {
    color: white;
}
.text-black {
    color: black;
}
.ct-btn {
    line-height: 1.3rem;
}
.btn-draft {
    background-color: #33CC33
}
.btn-draft a {
    font-size: 0.3rem;
}
.btn-save {
    background-color: #0066FF;
}
.btn-save a {
    font-size: 0.26rem;
}
.panel-width{
	width:20%;
}
.panel-width div{
	text-align:center;
}
.panel-content{
	text-align:center;
	font-size:0.3rem;
}
</style>