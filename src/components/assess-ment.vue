<template>
    <div class="item item-body" v-if="summaryData">        
        <cur-leader-assess-ment :cardData="summaryData"></cur-leader-assess-ment>
        <leader-assess-ments :cardData="summaryData"></leader-assess-ments>
    </div>
</template>
<script>
import CurLeaderAssessMent from './cur-leader-assess-ment'
import LeaderAssessMents from './leader-assess-ments'

export default {
    name: 'AssessMent',
    props: ['summaryData'],
    components: {
        CurLeaderAssessMent,
        LeaderAssessMents
    }
}
</script>