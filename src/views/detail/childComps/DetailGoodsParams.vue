<template lang="">
  <div class="goods-params" v-if="Object.keys(goodsParams).length!==0">
    <table>
      <tr v-for="(tr,index) in goodsParams.sizes[0]">
        <td v-for="(td,indey) in tr">{{td}}</td>
      </tr>
    </table>
    <table class="info-params">
      <tr v-for="(tr,index) in goodsParams.infos" :key="index">
        <td>{{tr.key}}</td>
        <td>{{tr.value}}</td>
      </tr>
    </table>
    <div class="info-img" v-if="goodsParams.image.length!==0">
      <img :src="goodsParams.image" alt="">
    </div>
  </div>
</template>
<script>
  export default {
    name: 'DetailGoodsParams',
    props: {
      goodsParams: {
        type: Object,
        default() {
          return {}
        }
      }
    },
    data() {
      return {

      }
    },
    // computed: {
    //   goodsSize: function () {
    //     if (this.goodsParams.sizes.length > 1) {
    //       let size = this.goodsParams.sizes[0]
    //       console.log(size)
    //       let goodsSize = size.map((item, index) => {
    //         item.push(this.goodsParams.sizes[1][index][1])
    //       })
    //       console.log(goodsSize)
    //       return goodsSize
    //     }

    //     else {
    //       return this.goodsParams.sizes[0]
    //     }
    //   }
    // }
  }
</script>
<style scoped>
  .goods-params {
    padding: 20px;
    font-size: 10px;
    border-bottom: 5px solid #f2f5f8;
  }

  .goods-params table {
    width: 100%;
    border: none;
    border-collapse: collapse;
    text-align: center;
  }

  .goods-params table tr td {
    height: 40px;
    border-bottom: 1px solid rgba(100, 100, 100, .1);
  }

  .info-params {
    margin-top: 10px;
  }

  .info-params tr td:first-child {
    width: 100px;
  }

  .info-params tr td:last-child {
    text-align: left;
    color: var(--color-high-text);
  }
  .info-img img{
    width: 100%;
  }
</style>