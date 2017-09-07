<template>
    <div v-if="crd">		
      <div class="item item-body" style="height: auto">
        <Row class="pg-spacing">
            <Col span="12">
                <span class="font-level2-title">评估人:</span>
                <span class="font-level2-content">{{crd.DashedAssessorName}}</span>
            </Col>        
            <Col span="12">
                <span>权重:</span>
                <span class="font-level2-content">{{crd.AssessorProp + "%"}}</span>
            </Col>
        </Row>
        <Row class="pg-spacing">
            <Col span="12">
                <span>评分:</span>
                <span class="font-level2-content">{{crd.SumTotal}}</span>
            </Col>        
            <Col span="12">
                <span>评级:</span>
                <span class="font-level2-content">{{crd.AssessLevelName}}</span>
            </Col>
        </Row>
        <Row class="pg-spacing">
            <Col>
                <span>评语:</span>
                <span class="font-level2-content">{{crd.Remark}}</span>
            </Col>
        </Row>
      </div>			
    </div>
</template>
<script>    
    export default {
        name: 'DashedAssessMent',
        props: ['crd']
    }
</script>
<style scoped>
.pg-spacing {
	padding: 5px 0;
}
span {
    font-size: 0.2rem;
}
</style>
