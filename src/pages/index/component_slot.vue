<template>
  <view>
    <my-form>
      <input type="text" />
      <checkbox value="1231" />
      <radio />
    </my-form>
  </view>
</template>

<script>
import myForm from '@/component/my-form'
export default {
  components: {
    myForm,
  },
  // 页面生命周期
  onLoad() {
    console.log('界面加载完毕')
  },
  onShow() {
    console.log('界面被看到')
  },
}
</script>

<style>
</style>