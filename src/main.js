import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './assets/css/public.css';
// 引入组件库
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// 挂载
Vue.use(ElementUI)
Vue.config.productionTip = false

router.beforeEach((to,from,next)=>{
 
    next()
  
})
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
