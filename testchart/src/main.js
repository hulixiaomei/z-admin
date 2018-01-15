// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
Vue.prototype.$ajax = axios

require('vue-video-player/src/custom-theme.css');
require('video.js/dist/video-js.css');
require('videojs-flash');
// require('videojs-hotkeys');
var VueVideoPlayer=require('vue-video-player');
Vue.use(VueVideoPlayer);



Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})

