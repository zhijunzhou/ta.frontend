<template>
    <div class="item item-avatar">
        <profile-photo photoPath='mcfly.jpg' index='1' :choose="choose"></profile-photo>
        <div>{{staffName}} &nbsp;&nbsp;
            <Tags type="border" color="blue" style="">
                晋级
            </Tags>
        </div>
        <assess-level :remarkName="remarkName" :remarkRate="remarkRate"></assess-level>
        <Tags type="border" color="blue" style="
            position:absolute; 
            top:0.54rem; 
            right: 0.40rem; 
            ">
            <i class="icon ion-reply"></i> 驳回
        </Tags>
    </div>
</template>
<script>
    import Tags from '../components/tag.vue';
    import AssessLevel from '../components/assess-level';
    import ProfilePhoto from '../components/profile-photo';

    export default {
        name: 'AssessStaffBaseInfo',
        props: ['staffName', 'remarkName', 'remarkRate'],
        components: {
            Tags,
            AssessLevel,
            ProfilePhoto
        },
        methods: {
            choose() {}
        }
    }
</script>
