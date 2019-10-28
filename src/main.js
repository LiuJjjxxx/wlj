import Vue from 'vue'
import App from './App'
import Vuex from 'vuex'
import VueRouer from 'vue-router'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'

import '../static/css/reset.css'
import dashboard from 'components/dashboard/dashboard'
import 'font-awesome/css/font-awesome.css'
import '../lib/mui-master/dist/css/mui.css'
import theme from '../static/js/echart-theme/purple-passion.js'
import theme_two from '../static/js/echart-theme/blue-science.js'

// rouer.1手动安装 Rouer
Vue.use(ElementUI);
Vue.use(VueRouer)
Vue.use(Vuex)


const store = new Vuex.Store({
  state: {
    count: 0,
    color: ['#325B69', '#698570', '#AE5548', '#6D9EA8', '#9CC2B0', '#C98769']
  }
});

//rouer.2配置路由
const router = new VueRouer({
  routes: [  {
    path: '/dashboard',
    component: dashboard
  },
 ],
  linkActiveClass: 'active'
})
new Vue({
  //router.3 挂载
  router,
  store,
  template: '<App>',
  components: {
    App
  },
  data: {
    eventHub: new Vue(),
    charts: []
  }
}).$mount('#app')

router.push('dashboard')
