<template lang="">
  <div class="bottom-bar">
    <div class="bar-item bar-left">
      <div>
        <span class="iconfont icon-service"></span>
        <span class="text">客服</span>
      </div>
      <div>
        <span class="iconfont icon-shop"></span>
        <span class="text">店铺</span>
      </div>
      <div>
        <span class="iconfont icon-favor"></span>
        <span class="text">收藏</span>
      </div>
    </div>
    <div class="bar-item bar-right">
      <div class="cart" @click="addToCart">加入购物车</div>
      <div class="buy">购买</div>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'DetailBottomBar',
    methods: {
      addToCart(){
        this.$emit('addToCart')
      }
    },
  }
</script>
<style>
  @import "~assets/img/detail/bottom_bar/iconfont.css";

  .bottom-bar {
    height: 52px;
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    align-items: center;
    text-align: center;
  }
  .bar-item {
    display: flex;
    flex: 1;
  }

  .bar-item>div {
    flex: 1;
  }

  .bar-left .text{
    display: block;
    font-size: 10px;
  }
  .iconfont {
    font-size: 24px;
  }
  .icon-service{
    color: var(--color-high-text);
  }
  .bar-right div{
    height: 100%;
    line-height: 52px
  }
  .cart {
    background: orange;
    color: #333;
  }

  .buy {
    background: var(--color-tint);
    color: white;
  }
</style>