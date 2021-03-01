<template>
  <div class="tab-bar-item">
    <router-link :to="path" tag="div">
      <slot name="item-icon"></slot>
      <slot name="item-text"></slot>
    </router-link>

    <!-- <span class="iconfont icon-home"></span>
      <div>首页</div> -->
  </div>
</template>

<script>
  export default {
    name: "TabBarItem",
    props: {
      path: String
    }
  }
</script>

<style>
  @import "../../../assets/img/tabbar/iconfont.css";

  .tab-bar-item {
    flex: 1;
    text-align: center;
    height: 49px;
    margin-top: 3px;
  }

  .iconfont {
    font-size: 24px;
  }

  .tab-bar-item div {
    font-size: 10px;
  }
  .router-link-active{
    color: var(--color-tint);
  }
</style>