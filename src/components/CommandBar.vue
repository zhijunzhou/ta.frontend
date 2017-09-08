<style>
.index{padding: 0.22rem;background-color: #f5f5f5}
.h1{font-size: 0.32rem; color: #3f3f3f;padding-bottom:0.22rem}
.h2{font-size: 0.30rem; color: #5e5e5e}
/*说明信息*/
.h3{font-size: 0.24rem; color: #acacac}
.bg1{background: #66cc66;color:white;text-align: center;height: 1rem;line-height: 1rem}
.bg2{background: #0066ff;color:white;text-align: center;height: 1rem;line-height: 1rem}
.tabbar{position: fixed;bottom: 0;left:0; width: 100%;}
.arrow-div{margin: 0 auto;border: 1px solid #acacac;border-radius: 100%;height: .44rem;width: .44rem;text-align: center}
.bg4{background: white;padding:.22rem;border-radius: 5px;}
.icon-img{width: .77rem;height: .77rem;border: 1px solid #0066ff;border-radius: 100%;overflow: hidden;}
.icon-img img{width: 100%;}
.tc{text-align: center;position: relative;top: 0.1rem;}
.span{border: 1px solid #0066ff;color:#0066ff}
.title{margin: 0.22rem 0}
.bg3{background: white;display: flex;flex-direction: column;    align-items: center;justify-content: center;height: 1rem}
</style>

<template>
    <div class="footer" >
      <span style="width:1.50rem; height:1.00rem; background-color:#ffffff; color:#acacac; text-align:center; color:#acacac;font-size:0.30rem; padding-top:0.52rem; position:fixed; bottom:0rem; display:inline;" @click="goback">
      <div style="transform:rotate(180deg); width:0.30rem; position: fixed; left:0.56rem; bottom:0.40rem;"><i class="icon ion-log-in" ></i></div>返回</span>
      <span style="width:3.00rem; height:1.00rem; background-color:#53cd51; text-align:center; color:#fff;font-size:0.30rem; padding-top:0.33rem; position:fixed; bottom:0px; margin-left:1.50rem; " @click="saveDraft">存草稿</span>
      <span style="width:3.00rem; height:1.00rem; background-color:#007aff; text-align:center; color:#fff;font-size:0.30rem; padding-top:0.33rem; position:fixed; bottom:0px; margin-left:4.5rem; " @click="submit">提交</span>
    </div>   
</template>
<script>
    export default {

        data() {
            return {

            };
        },
        methods: {
            goback () {

            },
            saveDraft () {

            },
            submit () {
                
            }
        }
    };
</script>
