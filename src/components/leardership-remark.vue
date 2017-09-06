<template>
    <div class="list card">
      <div class="item " style="border-width: 0px 0px 1px 0px;border-style: solid;    border-color: #ddd;">
        综合评语
      </div>
      <div class="item-body">
        <div v-for="zh in zongHePingYu" class="row" style="padding: 0.15rem 0 ">
            <div class="col col-20" style="padding-left: 0 ">
                {{zh.RemarkName}} &nbsp;&nbsp;&nbsp;&nbsp;:
            </div>
            <div class="col col-80">
                {{zh.Content}}
            </div>
        </div>
      </div>
    </div>
</template>
<script>

    export default {
        name: 'LeardershipRemark',
        props: ['zongHePingYu'],
        components: {
        }
    }
</script>