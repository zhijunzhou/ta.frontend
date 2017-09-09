<!-- 综合评估 -->
<template>
    <div class="item item-body" v-if="assessStaffRemark">        
        <cur-leader-assess-ment :assessStaffRemark="assessStaffRemark" :DashedAssessResultList="DashedAssessResultList" :AssessStaffBaseInfo="AssessStaffBaseInfo" :AssessPackageSetting="AssessPackageSetting"></cur-leader-assess-ment>
        <div  v-for="(item, index) in otherAssessStaffRemarkList" v-bind:key="index" v-if="item">
            <leader-assess-ments :assessStaffRemark="item"></leader-assess-ments>
        </div>
    </div>
</template>
<script>
import CurLeaderAssessMent from './cur-leader-assess-ment'
import LeaderAssessMents from './leader-assess-ments'

export default {
    name: 'AssessMent',
    props: ['assessStaffRemark','otherAssessStaffRemarkList','DashedAssessResultList','AssessStaffBaseInfo','AssessPackageSetting'],
    components: {
        CurLeaderAssessMent,
        LeaderAssessMents
    }
}
</script>