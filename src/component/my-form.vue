<template>
  <view>
    <view class="title"> 标题 </view>
    <h1>123</h1>
    <view>
      <slot></slot>
    </view>
  </view>
</template>

<script>
export default {
  // 组件生命周期
  mounted() {
    console.log('组件挂载完毕')
  },
}
</script>

<style>
.title {
  font-size: 40px;
  text-align: center;
}
</style>