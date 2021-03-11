<template lang="">
  <div class="comment-info" v-if="Object.keys(commentInfo).length!==0">
    <div class="info-header">
      <span>用户评价</span>
      <span>更多</span>
    </div>
    <div class="info-user">
      <img :src="commentInfo.user.avatar" alt="">
      <span>{{commentInfo.user.uname}}</span>
    </div>
    <div class="info-detail">
      <p>{{commentInfo.content}}</p>
      <div class="info-other">
        <span class="date">{{commentInfo.created | showDate}}</span>
        <span>{{commentInfo.style}}</span>
      </div>
    </div>
    <div class="info-imgs">
      <img v-for="(item,index) in commentInfo.images" :src="item" alt="" :key="index">
    </div>
  </div>
</template>
<script>
  import {dateFormat} from 'commonJs/utils'
  export default {
    name: 'DetailCommentInfo',
    props: {
      commentInfo: {
        type: Object,
        default() {
          return {}
        }
      }
    },
    filters: {
      showDate(value){
        const date = new Date(value*1000)
        return dateFormat(date, "YYYY-MM-DD")
      }
    }
  }
</script>
<style scoped>
  .comment-info{
    width: 100vw;
    padding: 0 10px;
    border-bottom: 5px solid #f2f5f8;
  }
  .info-header{
    padding: 15px 0;
    border-bottom: 2px solid #f2f5f8;
  }
  .info-header span{
    color: #333;
  }
  .info-header span:last-child{
    float: right;
  }
  .info-user{
    padding: 10px 0;
    display: flex;
    align-items: center;
  }
  .info-user img{
    width: 40px;
    border-radius: 50%;
    margin-right: 10px;
  }
  .info-user span{
    font-size: 17px;
    color: #333;
  }
  .info-detail {
    font-size: 14px;
    line-height: 20px;
  }
  .info-other{
    padding: 10px 0;
  }
  .info-other .date{
    margin-right: 10px;
  }
  .info-imgs img{
    width: 60px;
    margin-bottom: 10px;
  }
</style>