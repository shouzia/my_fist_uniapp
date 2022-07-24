<template>
  <view>
    <view>{{ src }}</view>
    <VIDEO
      @getvideosrc="get_videosrc"
      scr="https://v.api.aa1.cn/api/api-dy-girl/index.php?aa1=ajdu987hrjfw"
    />
    <VIDEO
      @getvideosrc="get_videosrc"
      scr="https://v.api.aa1.cn/api/api-dy-girl/index.php?aa1=ajdu987hrjfw"
    />
    <VIDEO
      @getvideosrc="get_videosrc"
      scr="https://v.api.aa1.cn/api/api-dy-girl/index.php?aa1=ajdu987hrjfw"
    />
  </view>
</template>

<script>
import VIDEO from '@/component/video.vue'
export default {
  data() {
    return {
      src: '',
    }
  },
  components: { VIDEO },
  methods: {
    get_videosrc(e) {
      console.log(e)
      this.src = e
    },
  },
  onLoad() {
    console.log(this.baseurl)
    console.log(getApp().globalData.baseurl)
  },
}
</script>

<style>
</style>