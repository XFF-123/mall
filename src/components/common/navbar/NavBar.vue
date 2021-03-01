<template lang="">
  <div class="nav-bar">
    <div class="left"><slot name="left"></slot></div>
    <div class="center"><slot name="center"></slot></div>
    <div class="right"><slot name="right"></slot></div>
  </div>
</template>
<script>
export default { 
  name:'NavBar'
}
</script>
<style>
  .nav-bar{
    display: flex;
    height: 44px;
    line-height: 44px;
    /* background-color:rgb(255, 102, 153); */
    text-align: center;
    box-shadow: 0 3px 1px rgba(100, 100, 100,.1)
  }
  .left, .right{  
    width: 60px;
    /* background-color: blue; */
  }
  .center{
    flex: 1;
    /* background-color: red; */
  }
</style>