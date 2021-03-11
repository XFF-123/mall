<template lang="">
  <div class="bottom-bar">
    <div class="bar-left">
      <div class="selectAll" @click="iconClick">
        <div class="icon" :class="{checked:isSelectAll}">
          <span class="iconfont icon-check" v-show="isSelectAll"></span>
        </div>
        <span class="text">全选</span>
      </div>
      <div>合计: ¥{{totalPrice}}</div>
    </div>
    <span class="tobuy">结算({{checkLength}})</span>
  </div>
</template>
<script>
  import { mapGetters } from 'vuex'

  export default {
    name: 'CartBottomBar',
    data() {
      return {
      }
    },
    computed: {
      ...mapGetters(['cartLength', 'cartList']),
      totalPrice() {
        return this.cartList.filter(item => item.checked)
          .reduce((total, i) => total += i.price * i.count, 0)
          .toFixed(2)
      },
      checkLength() {
        return this.cartList.filter(item => item.checked).length
      },
      isSelectAll() {
        if (this.cartLength == 0) {
          return false
        } else {
          return this.cartList.every(item => item.checked)
        }
      }
    },
    methods: {
      iconClick() {
        if (this.isSelectAll) {
          this.cartList.forEach(item => item.checked = false)
        } else {
          this.cartList.forEach(item => item.checked = true)
        }
      }
    },
  }
</script>
<style scoped>
  .icon-check {
    font-size: 14px;
    position: relative;
    top: -2px;
    color: white;
  }

  .bottom-bar {
    height: 49px;
    width: 100%;
    background-color: #f6f6f6;
    position: absolute;
    bottom: 49px;
    display: flex;
    align-items: center;
  }

  .bottom-bar .bar-left {
    margin-right: auto;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .bottom-bar .bar-left>div {
    margin-left: 10px;
  }

  .selectAll {
    display: flex;
    align-items: center;
  }

  .selectAll .icon {
    height: 16px;
    width: 16px;
    border-radius: 50%;
    border: 1px solid #999;
    text-align: center;
    margin-right: 5px;
  }

  .selectAll .checked {
    background-color: var(--color-tint);
    border: none;
  }

  .selectAll .text {
    font-size: 14px;
  }

  .tobuy {
    width: 90px;
    height: 49px;
    line-height: 49px;
    background-color: var(--color-tint);
    text-align: center;
    color: white;

  }
</style>