<template>
  <view class="content">
    <view v-for="(itmes, index) in person" :key="itmes.title">
      <view class="title" v-if="index % 2 == 0"
        >{{ itmes.title }}----{{ index % 2 == 0 }}</view
      >
      <view class="nickename" v-show="index % 2 == 0">{{
        itmes.nickename
      }}</view>
    </view>

    <view>{{ CNmoney }}</view>

    <view>
      <view v-for="itmes in titleFilter" :key="itmes.title">{{
        itmes.title
      }}</view>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      person: [
        { title: 'shouzi', nickename: '瘦子' },
        { title: '吴佳怡', nickename: '5+1' },
        { title: '张嘉琪', nickename: 'zjq' },
      ],
      money: 10000,
    }
  },
  computed: {
    CNmoney() {
      return '￥' + this.money
    },
    titleFilter() {
      return this.person.filter((v) => v.title == 'shouzi')
    },
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