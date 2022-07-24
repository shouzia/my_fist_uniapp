<template>
  <view>
    <view>{{ title }}</view>
    <!-- 标签使用数据 -->
    <view :data-title="title">{{ title }}</view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      title: '我是瘦子',
    }
  },
}
</script>

<style>
</style>