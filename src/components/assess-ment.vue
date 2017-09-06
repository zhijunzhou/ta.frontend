<template>
	<div class="item item-body" style="height: auto" v-if="zhongHePingGuCard">
        <div>
            <div class="box">
                <div style="float:left;">
                    <span>评分:</span>
                </div>
                <div class="ivu-input-number-input-wrap" style="float:left; padding: 0 0 0 0.2rem;">
                    <input type="number" class="ivu-input-number-input" name="pingFen" v-model="zhongHePingGuCard.DirectTotalScore">
                </div>                
            </div>
            <div class="box">
                <div style="float:left;">
                    <span>权重:</span>
                </div>
                <div style="float:left; padding: 0 0 0 0.2rem;">
                    <span>{{zhongHePingGuCard.QuanZhong + "%"}}</span>
                </div>
            </div>
            <p class="clr"> </p>
        </div>
        <div>
            <div class="box">
                <div style="float:left;">
                    <span>综合评分:</span>
                </div>
                <div style="float:left; padding: 0 0 0 0.2rem;">
                    <span class="font-level2-content">{{zhongHePingGuCard.SumTotal}}</span>
                </div>
            </div>
            <p class="clr"> </p>
        </div>
        <div>
            <div class="box">
                <div style="float:left;">
                    <span>综合评级:</span>
                </div>
                <div style="float:left; padding: 0 0 0 0.2rem;">
                    <Rate v-model="zhongHePingGuCard.rateValue" ></Rate>
                    <div>{{zhongHePingGuCard.AssessLevelName}}</div>
                </div>
            </div>
            <p class="clr"> </p>
        </div>
        <div>
            <div class="box">
                <div style="float:left;">
                    <span>综合评语:</span>
                </div>
                <div style="float:left; padding: 0 0 0 0.2rem;">
                    <Input style="width: 4.0rem;" v-model="zhongHePingGuCard.Remark" type="textarea" :rows="4" placeholder="请输入...">
                    </Input>
                </div>
            </div>
            <p class="clr"> </p>
        </div>
        <div>{{zhongHePingGuCard.OwnerName}}</div>
        <div>{{zhongHePingGuCard.ownerRemark}}</div>
      </div>
</template>
<script>
	export default {
        name: 'AssessMent',
        props: ['zhongHePingGuCard'],
        components: {
        }
    }
</script>