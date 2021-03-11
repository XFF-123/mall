<template lang="">
  <div class="good-info" v-if="Object.keys(detailInfo).length!=0">
    <div class="info-desc">
      <div class="start"></div>
      <div class="desc">{{detailInfo.desc}}</div>
      <div class="end"></div>
    </div>
    <div class="info-key">{{detailInfo.detailImage[0].key}}</div>
    <div class="info-list">
      <img v-for="(item,index) in detailInfo.detailImage[0].list" :src="item" alt="" @load="imgLoad">
    </div>
  </div>
</template>
<script>
export default {
  name: 'DetailGoodsInfo',
  props: {
    detailInfo: {
      type: Object,
      default(){
        return {}
      }
    }
  },
  data() {
    return {
      counter: 0,
      imgLength: 0
    }
  },
  methods: {
    imgLoad(){
      if(++this.counter===this.imgLength){
        this.$emit('imgLoad')
      }
    }
  },
  watch: {
    detailInfo(){
      this.imgLength = this.detailInfo.detailImage[0].list.length
    }
  }
}
</script>
<style scoped>
  .good-info{
    padding: 10px;
    border-bottom: 5px solid #f2f5f8;
  }
  .info-desc .start, .info-desc .end{
    height: 1px;
    width: 30%;
    background-color: #a3a3a5;
    position: relative;
  }
  .info-desc .end{
    float: right;
  }
  .info-desc .start::before, .info-desc .end::after{
    content: '';
    position: absolute;
    width: 5px;
    height: 5px;
    background-color: #333;
    bottom: 0;
  }
  .info-desc .end::after{
    right: 0;
  }
  .info-desc .desc{
    padding: 10px;
  }
  .info-key{
    padding: 10px;
    color: #333;
  }
  .info-list img{
    width:100%;
  }
</style>