<template>
  <view class="content">
    <view v-for="itmes in person" :key="itmes.title">
      <view class="title">{{ itmes.title }}</view>
      <view class="nickename">{{ itmes.nickename }}</view>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      person: [
        { title: 'shouzi', nickename: '瘦子' },
        { title: '5+1', nickename: '5+1' },
        { title: 'wwww', nickename: 'wwww' },
      ],
    }
  },
}
</script>
<style lang="scss">
.title {
  color: $uni-color-primary;
}
.content {
  .nickename {
    color: $uni-color-warning;
  }
}
</style>
