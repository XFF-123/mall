<template lang="">
  <div>
    <tab-bar>
      <tab-bar-item path="/home">
        <span slot="item-icon" class="iconfont icon-home"></span>
        <div slot="item-text">首页</div>
      </tab-bar-item>
      <tab-bar-item path="/category">
        <span slot="item-icon" class="iconfont icon-cascades"></span>
        <div slot="item-text">分类</div>
      </tab-bar-item>
      <tab-bar-item path="/cart">
        <span slot="item-icon" class="iconfont icon-cart"></span>
        <div slot="item-text">购物车</div>
      </tab-bar-item>
      <tab-bar-item path="/profile">
        <span slot="item-icon" class="iconfont icon-people"></span>
        <div slot="item-text">我的</div>
      </tab-bar-item>
    </tab-bar>
  </div>
</template>
<script>
  import TabBar from 'components/common/tabbar/TabBar'
  import TabBarItem from 'components/common/tabbar/TabBarItem'

  export default {
    name: 'MainTabBar',
    components: {
      TabBar,
      TabBarItem
    }
  }
</script>
<style scoped>
  .iconfont {
    font-size: 24px;
  }
  
</style>