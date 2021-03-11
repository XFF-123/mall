<template>
  <div class="toast" v-show="isshow">
    <div>{{message}}</div>
  </div>
</template>

<script>
export default {
  name: 'Toast',
  data () {
    return {
      isshow: false,
      message: ''
    }
  },
  methods: {
    show (message, duration=2000) {
      this.isshow = true
      this.message = message
      //  ! 这里这个玩意可以注意一下 就是说  setTimeOut 是要右一个retur的  只是一个function是没有输出值这个东西的
      setTimeout(() => {
        this.isshow = false
        this.message = ''
      }, duration)
    }
  }
}
</script>

<style scoped>
 .toast {
   position: fixed;
   top: 50%;
   left: 50%;
   transform: translate(-50%,-50%);
   padding: 8px 10px;
   color: white;
   background-color: rgba(0, 0, 0, .75);
   border-radius: 10px;
   z-index: 9999;
 }
</style>