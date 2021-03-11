<template lang="">
  <div id="">
    <nav-bar>
      <div slot="left" class="back" @click="backClick"><img src="~assets/img/common/back.svg" alt=""></div>
      <div class="title" slot="center">
        <span v-for="(item,index) in title" :class="{active:index===currentIndex}" @click="itemClick(index)">{{item}}</span>
      </div>
    </nav-bar>
  </div>
</template>
<script>
import NavBar from 'components/common/navbar/NavBar'
export default {
  name: 'DetailNavBar',
  components: {
    NavBar,
  },
  data() {
    return {
      title: ['商品','参数','评论','推荐'],
      currentIndex : 0
    }
  },
  methods: {
    itemClick(index){
      this.currentIndex = index;
      this.$emit('itemClick',index)
    },
    backClick(){
      this.$router.back()
    }
  },
}
</script>
<style scoped>
  .back img{
    margin-top: 11px;
    /* width: 20px; */
  }
  .title span:not(:nth-child(1)){
    padding-left: 15px;
  }
  .active{
    color: var(--color-high-text);
  }
</style>