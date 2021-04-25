import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/css/scq.css';

import * as echarts from 'echarts';
import 'echarts/extension/bmap/bmap'
// require('echarts/extension/bmap/bmap');
Vue.prototype.$echarts = echarts
import chartsOptions from './utils/chartsOptions.json';
import {updateData} from './utils/chartEvent';
Vue.prototype.$chartsOptions = chartsOptions
Vue.prototype.c_updateData = updateData


import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);



Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
