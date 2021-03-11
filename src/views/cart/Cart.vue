<template lang="">
  <div class="cart">
    <nav-bar class="cart-nav">
      <div slot="center">购物车({{cartLength}})</div>
    </nav-bar>
    <scroll class="content" ref="scroll">
      <cart-list/>
    </scroll>
    <cart-bottom-bar/>
  </div>
</template>

<script>
  import NavBar from 'components/common/navbar/NavBar'
  import CartList from './childComps/CartList'
  import CartBottomBar from './childComps/CartBottomBar'

  import Scroll from 'components/common/scroll/Scroll'


  import { mapGetters } from 'vuex'

  export default {
    name: 'Cart',
    components: {
      NavBar,
      CartList,
      CartBottomBar,
      Scroll
    },
    computed: {
      ...mapGetters(['cartLength', 'cartList'])
    },
    activated() {
      this.$refs.scroll.refresh()
    },

  }
</script>
<style scoped>
  .cart {
    height: 100vh;
    position: relative;
  }

  .cart-nav {
    background-color: var(--color-tint);
    color: white;
  }

  .content {
    background: #ffffff;
    position: absolute;
    overflow: hidden;
    top: 44px;
    bottom: 91px;
    right: 0;
    left: 0;
  }
</style>