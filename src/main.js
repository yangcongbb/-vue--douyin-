// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import { Swipe, SwipeItem } from 'vant';
import { Popup } from 'vant';
Vue.use(Popup);
Vue.use(Swipe).use(SwipeItem);



Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App,Swipe, SwipeItem,Popup},
  template: '<App/>',
})
