<template>
  <view>
    <view data-title="11" @click="btnclick(1, $event)">123</view>
    <view data-title="12" @click="btnclick(2, $event)">1234</view>
    <button data-title="123" @click="btnclick('爱你', $event)">123</button>
  </view>
</template>

<script>
export default {
  methods: {
    btnclick(number, e) {
      console.log('我是瘦子!!!')
      console.log(number)
      console.log(e.currentTarget.dataset.title)
    },
  },
}
</script>

<style>
</style>