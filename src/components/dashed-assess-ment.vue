<!-- 相关评估带权重 -->
<template>
  <div>
    <Row class="pg-spacing">
        <Col span="12">
            <span class="font-level2-title">评估人:</span>
            <span class="h3">{{crd.DashedAssessorName}}</span>
        </Col>        
        <Col span="12">
            <span>权重:</span>
            <span class="h3">{{crd.AssessorProp + "%"}}</span>
        </Col>
    </Row>
    <Row class="pg-spacing">
        <Col span="12" v-if="AssessPackageSetting.IsDashedScoreWithProp === true">
            <span>评分:</span>
            <span class="h3">{{crd.SumTotal}}</span>
        </Col>        
        <Col span="12">
            <span>评级:</span>
            <span class="h3">{{crd.AssessLevelName}}</span>
        </Col>
    </Row>
    <Row class="pg-spacing" v-if="AssessPackageSetting.IsDashedAssessorRemarkWithProp === true">
        <Col>
            <span>评语:</span>
            <span class="h3">{{crd.Remark}}</span>
        </Col>
    </Row>
  </div>
</template>
<script>    
    export default {
        name: 'DashedAssessMent',
        props: ['crd','AssessPackageSetting']
    }
</script>
<style scoped>
.pg-spacing {
	padding: 5px 0;
}
span {
    font-size: 0.2rem;
}
.h3{font-size: 0.2rem; color: #acacac;}
</style>
