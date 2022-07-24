<template>
  <div>
    <video class="video" :src="scr" @click="videoSrc"></video>
    <!-- <button >123</button> -->
  </div>
</template>

<script>
export default {
  props: {
    scr: String,
  },
  methods: {
    videoSrc() {
      //   this.$emit('自定义事件名称', '要传递的参数')
      this.$emit('getvideosrc', this.scr)
    },
  },
  onLoad() {
    console.log(this.baseurl)
    console.log(getApp().globalData.baseurl)
  },
}
</script>

<style>
.video {
  width: 750rpx;
  height: 100vh;
}
</style>