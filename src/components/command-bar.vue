<template>
	<div class="bar bar-footer" style="height:70px;">
        <div style="width:20%">
            <div style="text-align:center;">
                <a class="button button-icon icon ion-ios-keypad-outline"></a>
            </div>
            <div style="text-align:center; font-size:18px;">
                评估
            </div>
        </div>
        <div style="width:20%">
            <div  style="text-align:center;">
                <a class="button button-icon icon ion-settings"></a>
            </div>
            <div style="text-align:center;font-size:18px;">
                看自评
            </div>
        </div>
        <div style="width:20%">
            <div style="text-align:center;">
                <a class="button button-icon icon ion-settings"></a>
            </div>
            <div style="text-align:center;font-size:18px;">
                看周边
            </div>
        </div>
        <div style="width:20%; height: 70px; background: #33CC33; text-align: center; line-height:70px;">
            <a style="color: white; font-size: 13px;}">存草稿</a>
        </div>
        <div style="width:20%;height:70px;background-color:#0066FF; text-align: center; line-height:70px;">
            <a style="color: white; font-size: 13px;}">保存并返回</a>
        </div>
    </div>
</template>
<script>
	export default{
		name:'CommandBar',
		props: [],
		components:{

		}
	}
</script>