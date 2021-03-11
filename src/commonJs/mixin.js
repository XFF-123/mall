import {debounce} from './utils'
import BackTop from 'components/content/backTop/BackTop'

export const itemListenerMixin = {
  data(){
    return{
      itemImgListener: null
    }
  },
  mounted() {
    //防抖操作
    const refresh = debounce(this.$refs.scroll.refresh, 200)
    //对监听的事件进行保存
    this.itemImgListener = ()=>{refresh()}
    //监听item中图片加载完成  (时间总线)
    this.$bus.$on('itemImageLoad', this.itemImgListener)
  }
} 

export const backTopMixin = {
  components: {
    BackTop,
  },
  data() {
    return {
      isShowBackTop: false,
    }
  },
  methods: {
    backClick(){
      this.$refs.scroll.scrollTo(0,0)
    }
  },
}