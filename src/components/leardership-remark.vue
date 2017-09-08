<template>
    <div class="list card">
      <div class="item " style="border-width: 0px 0px 1px 0px;border-style: solid;    border-color: #ddd;">
        综合评语
      </div>
      <div class="item-body" v-if="SelfLeadershipContent">
            <Row class="pg-spacing" v-for="(item, index) in SelfLeadershipContent.Remarks" v-bind:key="index">
                <Col span="4">
                    <span>{{item.RemarkName}}:</span>
                </Col>
                <Col span="20">
                    <span>{{item.Content}}</span>
                </Col>
            </Row>
      </div>
    </div>
</template>
<script>
    export default {
        name: 'LeardershipRemark',
        props: ['SelfLeadershipContent'],
        components: {
        }
    }
</script>
<style scoped>
.panel-title{
    padding: 0 0 0 0.3rem;
}
#totalScore {
    width: 20px;
}
.pg-spacing {
    padding: 5px 0;
}
span {
    font-size: 0.2rem;
}
.card {
    box-shadow: none;
}
</style>