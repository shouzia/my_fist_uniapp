<template>
  <view class="content">
    <view class="rpx">750rpx整个屏幕</view>
    <view class="vw">100vw整个宽度</view>
    <view class="sass">132</view>
  </view>
</template>

<script>
export default {}
</script>

<style lang="scss">
.rpx {
  /* 750rpx整个屏幕 */
  width: 750rpx;
  height: 100rpx;
  background-color: red;
}
.vw {
  width: 100vw;
  height: 100vh;
  background-color: greenyellow;
}
.content {
  .sass {
    background-color: $uni-color-primary;
    color: $uni-color-warning;
  }
}
</style>
