<template>
    <div class="item item-body" v-if="assessStaffRemark">        
        <cur-leader-assess-ment :assessStaffRemark="assessStaffRemark" :DashedAssessResultList="DashedAssessResultList"></cur-leader-assess-ment>
        <leader-assess-ments :assessStaffRemark="assessStaffRemark"></leader-assess-ments>
    </div>
</template>
<script>
import CurLeaderAssessMent from './cur-leader-assess-ment'
import LeaderAssessMents from './leader-assess-ments'

export default {
    name: 'AssessMent',
    props: ['assessStaffRemark','DashedAssessResultList'],
    components: {
        CurLeaderAssessMent,
        LeaderAssessMents
    }
}
</script>