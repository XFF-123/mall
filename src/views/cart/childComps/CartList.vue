<template lang="">
  <div class="cart-list">
    <div class="cart-good" v-for="(item,index) in cartList" :key="index">
      <div class="icon" @click="iconClick(index)" :class="{checked:cartList[index].checked}" >
        <span class="iconfont icon-check" v-show="cartList[index].checked"></span>
      </div>
      <img :src="item.image" alt="">
      <div class="cart-good-info">
        <p>{{item.title}}</p>
        <p class="desc">{{item.desc}}</p>
        <div>
          <span class="price">￥{{item.price}}</span>
          <span class="count">×{{item.count}}</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>

  import { mapGetters } from 'vuex'

  export default {
    name: 'CartList',
    data() {
      return {
        currentIndext: null
      }
    },
    methods: {
      iconClick(index) {
        this.currentIndext = index
        this.$store.commit('changeChecked', index)
      }
    },
    computed: {
      ...mapGetters([
        'cartLength',
        'cartList'
      ])
    },

  }
</script>
<style scoped>
  @import '~assets/img/cart/iconfont.css';

  .iconfont {
    font-size: 14px;
  }

  .cart-list {
    width: 100vw;
  }

  .cart-good {
    height: 120px;
    border-bottom: 2px solid #f2f5f8;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
  }

  .cart-good .icon {
    height: 16px;
    width: 16px;
    border-radius: 50%;
    border: 1px solid #999;
    text-align: center;
  }

  .cart-good .checked {
    border-radius: 50%;
    background-color: var(--color-tint);
    border: none;
  }

  .cart-good .icon span {
    color: white;
    position: relative;
    top: -2px
  }

  .cart-good img {
    height: 100%;
    border-radius: 10px;
  }

  .cart-good-info {
    width: 63%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .cart-good-info p {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .cart-good-info .desc {
    color: #666666;
    font-size: 12px;
  }

  .cart-good-info .price {
    color: var(--color-high-text);
  }

  .cart-good-info .count {
    float: right;
    height: 20px;
    width: 20px;
    line-height: 19px;
    font-size: 10px;
    border: 1px solid #999;
    border-radius: 5px;
    text-align: center;
    /* background-color: #666; */
  }
</style>