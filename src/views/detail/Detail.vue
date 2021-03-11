<template lang="">
  <div id="detail">
    <detail-nav-bar id="detail-nav" @itemClick='titleClick' ref="nav" />
    <scroll class="content" ref="scroll" @scroll="contentScroll" :probeType="3">
      <detail-swiper :topImages="topImages" />
      <detail-base-info :goods="goods" :shop="shop" />
      <detail-shop-info :shop="shop" />
      <detail-goods-info :detailInfo='detailInfo' @imgLoad="imgLoad" />
      <detail-goods-params ref="params" :goodsParams="goodsParams" />
      <detail-comment-info ref="comment" :commentInfo="commentInfo" />
      <goods-list ref="recommend" :goods="recommends" />
    </scroll>
    <detail-bottom-bar @addToCart='addToCart' />
    <back-top @click.native="backClick" v-show="isShowBackTop"/>
  </div>
</template>
<script>
  import DetailNavBar from './childComps/DetailNavBar'
  import DetailSwiper from './childComps/DetailSwiper'
  import DetailBaseInfo from './childComps/DetailBaseInfo'
  import DetailShopInfo from './childComps/DetailShopInfo'
  import DetailGoodsInfo from './childComps/DetailGoodsInfo'
  import DetailGoodsParams from './childComps/DetailGoodsParams'
  import DetailCommentInfo from './childComps/DetailCommentInfo'
  import DetailBottomBar from './childComps/DetailBottomBar'


  import Scroll from 'components/common/scroll/Scroll'
  import GoodsList from 'components/content/goods/GoodsList'
  // import Toast from 'components/common/toast/Toast'

  import { getDetail, Goods, Shop, GoodsParams, getRecommend } from 'network/detail'
  import { itemListenerMixin, backTopMixin } from 'commonJs/mixin'

  import {mapActions} from 'vuex'

  export default {
    name: "Detail",
    components: {
      DetailNavBar,
      DetailSwiper,
      DetailBaseInfo,
      DetailShopInfo,
      DetailGoodsInfo,
      DetailGoodsParams,
      DetailCommentInfo,
      DetailBottomBar,
      Scroll,
      GoodsList,
      // Toast
    },
    mixins: [itemListenerMixin, backTopMixin],
    data() {
      return {
        iid: null,
        topImages: [],
        goods: {},
        shop: {},
        detailInfo: {},
        goodsParams: {},
        commentInfo: {},
        recommends: [],
        themeTopYs: [],
        currentIndex: 0,
        // message: '',
        // show: false

      }
    },
    created() {
      //保存传入的iid
      this.iid = this.$route.params.iid
      //根据iid发送网络请求
      getDetail(this.iid).then(res => {
        // console.log(res)
        const data = res.result
        //获取顶部的图片轮播数据
        this.topImages = data.itemInfo.topImages
        //获取商品信息
        this.goods = new Goods(data.itemInfo, data.columns, data.shopInfo.services)
        //获取店铺信息
        this.shop = new Shop(data.shopInfo)
        //获取商品详细信息
        this.detailInfo = data.detailInfo
        //获取商品参数
        this.goodsParams = new GoodsParams(data.itemParams.info, data.itemParams.rule)
        //获取评论
        if (data.rate.cRate != 0) {
          this.commentInfo = data.rate.list[0]
        }
      })

      // this.$nextTick(() => {
      //   //根据最新的数据，对应的dom是已经被渲染出来了，但是图片依然没有加载完成
      //   this.themeTopYs = [];
      //   this.themeTopYs.push(0);
      //   this.themeTopYs.push(this.$refs.params.$el.offsetTop)
      //   this.themeTopYs.push(this.$refs.comment.$el.offsetTop)
      //   this.themeTopYs.push(this.$refs.recommend.$el.offsetTop)
      //   console.log(this.themeTopYs)
      // })

      //请求推荐数据
      getRecommend().then(res => {
        this.recommends = res.data.list
      })


    },
    updated() {

    },
    destroyed() {
      this.$bus.$off('itemImageLoad', this.itemImgListener)
    },
    methods: {
      ...mapActions(['addCart']),
      imgLoad() {
        this.$refs.scroll.refresh();
        this.themeTopYs = [];
        this.themeTopYs.push(0);
        this.themeTopYs.push(this.$refs.params.$el.offsetTop)
        this.themeTopYs.push(this.$refs.comment.$el.offsetTop)
        this.themeTopYs.push(this.$refs.recommend.$el.offsetTop)
        this.themeTopYs.push(Number.MAX_VALUE)//hask方法：以空间换时间
        // console.log(this.themeTopYs)
      },
      titleClick(index) {
        this.$refs.scroll.scrollTo(0, -this.themeTopYs[index], 0)
      },
      contentScroll(position) {
        const positionY = -position.y
        // console.log(positionY)
        let length = this.themeTopYs.length

        // 普通方法
        // for (let i=0; i<length; i++) {
        //   if (this.currentIndex !== i && ((i < length - 1 && positionY >= this.themeTopYs[i] && positionY < this.themeTopYs[i + 1]) || (i === length - 1 && positionY >= this.themeTopYs[i]))) {
        //     this.currentIndex = i
        //     this.$refs.nav.currentIndex = this.currentIndex
        //   }
        // }

        //hask方法: 以空间换时间
        for (let i = 0; i < length - 1; i++) {
          if (this.currentIndex !== i && (i < length - 1 && positionY >= this.themeTopYs[i] && positionY < this.themeTopYs[i + 1])) {
            this.currentIndex = i
            this.$refs.nav.currentIndex = this.currentIndex
          }
        }

        //是否显示回到顶部
        if (positionY > 1000) {
          this.isShowBackTop = true
        } else {
          this.isShowBackTop = false
        }
      },
      addToCart() {
        //1.获取购物车需要显示的信息
        const product = {}
        product.image = this.topImages[0]
        product.title = this.goods.title
        product.desc = this.goods.desc
        product.price = this.goods.realPrice
        product.iid = this.iid
        product.count = 0
        product.checked = false
        //2.将商品添加到购物车中(1.Promise 2.mapActions)
        // this.$store.dispatch('addCart',product).then(res=>{
        //   console.log(res)
        // })
        this.addCart(product).then(res=>{
          // this.show = true;
          // this.message = res;
          // setTimeout(()=>{
          //   this.show = false;
          //   this.message = ''
          // },1500)
          // console.log(res)

          this.$toast.show(res)
          
          
        })

        //添加到购物车成功
      }
    },
  }
</script>
<style scoped>
  #detail {
    position: relative;
    background-color: var(--color-background);
    height: 100vh;
    z-index: 9;
  }

  .detail-nav {
    position: relative;
    background-color: var(--color-background);
    z-index: 9;
  }

  .content {
    overflow: hidden;
    position: absolute;
    top: 44px;
    bottom: 52px;
    left: 0;
    right: 0;
    /* height: calc(100%-44px); */
  }
</style>