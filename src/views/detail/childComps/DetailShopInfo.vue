<template lang="">
  <div class="shop-info">
    <div class="shop-top">
      <img :src="shop.logo" alt="">
      <span class="title">{{shop.name}}</span>
    </div>
    <div class="shop-middle">
      <div class="shop-middle-left">
        <div class="sells-count">
          <div>{{sellsCount}}</div>
          <small>总销量</small>
        </div>
        <div class="goods-count">
          <div>{{shop.goodsCount}}</div>
          <small>全部宝贝</small>
        </div>
      </div>
      <div class="shop-middle-right">
        <table>
          <tr v-for="(item,index) in shop.score">
            <td>{{item.name}}</td>
            <td class="score" :class="{'score-better': item.isBetter}">{{item.score}}</td>
            <td class="is-better" :class="{'good-bad': item.isBetter}"><span>{{item.isBetter?'高':'低'}}</span></td>
          </tr>
        </table>
      </div>
    </div>
    <div class="shop-bottom">
      进店逛逛
    </div>
  </div>
</template>
<script>
  export default {
    name: 'DetailShopInfo',
    props: {
      shop: {
        type: Object,
        default() {
          return {}
        }
      }
    },
    computed: {
      sellsCount: function(){
        return (this.shop.sells<10000? this.shop.sells:(this.shop.sells/10000).toFixed(1))+'万'
      }
    }
  }
</script>
<style scoped>
  .shop-info {
    padding: 20px 10px;
    border-bottom: 4px solid #f2f5f8;
  }

  .shop-top {
    display: flex;
    align-items: center;
  }

  .shop-top img {
    width: 50px;
    border-radius: 50%;
    margin-right: 10px;
  }
  .shop-middle{
    font-size: 14px;
    display: flex;
    justify-content:space-evenly;
    align-items: center;
  }
  .shop-middle-left{
    display: flex;
    text-align: center;
    align-items: center;
    border-right: 2px solid rgb(197, 197, 197);
  }
  .shop-middle-left>div{
    margin-right: 20px;
  }
  .shop-middle-left small{
    font-size: 14px;
  }
  .shop-middle-left>div>div{
    font-size: 18px;
    margin-bottom: 5px;

  }

  table{
    border-spacing: 6px 10px;
  }
  .shop-bottom{
    width: 120px;
    background-color: rgb(230, 224, 224);
    padding: 5px;
    text-align: center;
    margin: 0 auto;
    border-radius: 10px;
    font-size: 14px;
    margin-top: 10px;
  }
  .score{
    color: green;
  }
  .is-better{
    background-color: green;
    color: white;
  }
  .score-better{
    color: red;
  }
  .good-bad{
    background-color: red;
  }
  
</style>