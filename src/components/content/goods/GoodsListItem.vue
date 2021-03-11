<template lang="">

  <div class="goods-item">
    <router-link :to="{
      path: '/detail/'+goodsItem.iid,
    }" tag="div">
      <img v-lazy="showImage" alt="" @load="imageLoad">
      <div class="goods-info">
        <p>{{goodsItem.title}}</p>
        <span class="price">{{goodsItem.price}}￥</span>
        <span class="collect">{{goodsItem.cfav}}</span>
      </div>
    </router-link>

  </div>
</template>
<script>
  export default {
    name: 'GoodsListItem',
    props: {
      goodsItem: {
        type: Object,
        default() {
          return {}
        }
      }
    },
    computed: {
      showImage(){
        return this.goodsItem.image || this.goodsItem.show.img
      }
    },
    methods: {
      imageLoad() {
        this.$bus.$emit('itemImageLoad')  //通过事件总线发送出去
      },
      // itemClick() {
      //   console.log('跳转到详情页')
      // }

    },
  }
</script>
<style scoped>
  .goods-item {
    padding-bottom: 5px;
    width: 48vw;
  }

  .goods-item img {
    border-radius: 5px;
    width: 100%;
  }

  .goods-info {
    font-size: 12px;
    text-align: center;
  }

  .goods-info p {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-bottom: 3px;
  }

  .goods-info .price {
    color: var(--color-high-text);
    margin-right: 20px;
  }

  .goods-info .collect {
    position: relative;
  }

  .goods-info .collect::before {
    content: '';
    position: absolute;
    left: -15px;
    top: -0.5px;
    width: 14px;
    height: 14px;
    background: url("~assets/img/common/collect.svg") 0 0/14px 14px;
  }
</style>