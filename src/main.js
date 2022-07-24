import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false
// Vue自带全局变量
Vue.prototype.baseurl="www.baidu.com";

App.mpType = 'app'

const app = new Vue({
  ...App
})
app.$mount()
