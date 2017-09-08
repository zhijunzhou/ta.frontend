<style scoped>
.badge{
    font-weight: initial;
    padding: 0.06rem 0.03rem;
}

#index{
    height: -webkit-fill-available;
    overflow-y: auto;
    background-color: #f5f5f5;
}

.highlightdeadLineColor{
    color: #ff8661;
}
.reminderColor{
    color: #919191;
    font-size:0.24rem;
}

.card{
    margin:0.20rem 0.22rem;
    height: 1.40rem;
    box-shadow:none;
    border-radius:10px;
    overflow:auto;
}

.card .item{
    height: 1.20rem;
/*    padding-top: 0.30em;
    padding-left: 0.40em;*/
}

.list{
    padding: 0;
}

.list .item{
    border-width:0px 0px 1px 0px;
}

.ivu-tag-text{
    position: absolute;
    bottom: 13px;
}

.titlescss{
    font-size:0.32rem;
    color: #242424;
    position:absolute; 
    left:0.43rem
}

.morebar{

    height: 0.90rem;
    padding: 0.23rem 0 0 3.10rem;
}
</style>
<template>
<div>
                <div style="
                    font-size:0.32rem;
                    color: #242424;
                    position:absolute; 
                    left:0.43rem;">
                    个人待办
                </div>
               
                <div v-if="MenuListData.length" class="badge badge-assertive" style="
                    position:absolute;
                    font-size: 0.32rem;
                    top:0.30rem; 
                    margin: 0 0.20rem">
                    {{MenuListData.length}}&nbsp;
                </div>
                <div style="
                    position: absolute; 
                 
                    right:0.35rem;
                    color: #cbcbcb;" :class="{rotateIcon:!hideSubMenu}" >
                        <div v-if="hideSubMenu">
                            <i class="icon ion-chevron-down" ></i>
                        </div>
                        <div v-if="!hideSubMenu" >
                            <i class="icon ion-chevron-up"></i>
                        </div>

                </div>
</div>
</template>
<script>
    import { oneOf } from '../tools.js';

    export default {
        name: 'MenuList',
        components: {  
        },
        props: {
            MenuListData: {
                type:Array,
                default:0
            },
            hideSubMenu: {
                type:Boolean,
                default:false
            }
        },
        computed: {

        },
        methods: {

        }
    };
</script>
