<template>
    <div class="item item-avatar">
        <img src="mcfly.jpg">
        <div>{{staffName}} &nbsp;&nbsp;<Tags type="border" color="blue" style="">
                晋级
            </Tags>
        </div>
        <Rate v-model="remarkRate" disabled style="font-size:0.32rem"></Rate>
        <span style="
            position: relative;
            top: 0.05rem;
            right: 0.10rem;
            font-size: 0.10rem;
            ">
            {{remarkName}}  
            
            </span>
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
    
    export default {
        name: 'AssessStaffBaseInfo',
        props: ['staffName', 'remarkName', 'remarkRate'],
        components: {
            Tags
        }
    }
</script>
