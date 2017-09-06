<template>
	<div class="bar bar-footer bar-height">
        <div class="panel-width">
            <div>
                <a class="button button-icon icon ion-ios-keypad-outline"></a>
            </div>
            <div class="panel-content">
                评估
            </div>
        </div>
        <div class="panel-width">
            <div>
                <a class="button button-icon icon ion-ios-chatboxes-outline"></a>
            </div>
            <div class="panel-content">
                看自评
            </div>
        </div>
        <div class="panel-width">
            <div>
                <a class="button button-icon icon ion-android-people"></a>
            </div>
            <div class="panel-content">
                看周边
            </div>
        </div>
        <div class="bar-height save-button save-button-draft-color panel-width">
            <a class="save-button-font">存草稿</a>
        </div>
        <div class="bar-height save-button save-button-save-color panel-width">
            <a class="save-button-font">保存并返回</a>
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
<style scoped>
.bar-height{
    height:70px;
}
.panel-width{
	width:20%;
}
.panel-width div{
	text-align:center;
}
.panel-content{
	text-align:center;
	font-size:18px;
}
.save-button{
	text-align: center; 
	line-height:70px;
}
.save-button-font{
	color: white; 
	font-size: 12px;
}
.save-button-draft-color{
	background: #33CC33;
}
.save-button-save-color{
	background: #0066FF;
}
</style>