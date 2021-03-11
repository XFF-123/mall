<template lang="">
  <div v-if="Object.keys(goods).length!=0" class="base-info">
    <div class="info-title">{{goods.title}}</div>
    <div class="info-price">
      <ins class="n-price">{{goods.newPrice}}</ins>
      <del class="o-price">{{goods.oldPrice}}</del>
      <small v-if="goods.discount" class="discount">{{goods.discount}}</small>
    </div>
    <div class="info-other">
      <span>{{goods.columns[0]}}</span>
      <span>{{goods.columns[1]}}</span>
      <span>
        {{goods.services[0].name}}
      </span>
    </div>
    <div class="info-service">
      <span class="info-service-item" v-for="item in goods.services.slice(1)">
        <img :src="item.icon" alt="">
        <span>{{item.name}}</span>
      </span>
    </div>
  </div>

</template>
<script>
  export default {
    name: 'DetailBaseInfo',
    props: {
      goods: {
        type: Object,
        default() {
          return {}
        }
      }
    }
  }
</script>
<style scoped>
  .base-info {
    margin-top: 10px;
    padding: 0 8px;
    border-bottom: 5px solid #f2f5f8;
  }

  .info-title {
    color: #222;
  }

  .info-price {
    margin-top: 10px;
  }

  .info-price .n-price {
    text-decoration: none;
    color: var(--color-high-text);
    font-size: 20px;
    margin-right: 8px;
  }

  .info-price .o-price {
    font-size: 13px;
    margin-right: 8px;
  }

  .info-price .discount {
    color: white;
    background-color: var(--color-tint);
    padding: 3px;
    border-radius: 10px;
  }

  .info-other {
    font-size: 13px;
    margin-top: 20px;
    display: flex;
    justify-content: space-between;
    padding-bottom: 5px;
    border-bottom: 2px solid #f2f5f8;
  }

  .info-service {
    padding: 15px 0;
    font-size: 13px;
    line-height: 20px;
    color: #222;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }

  .info-service img {
    width: 10px;
  }
</style>