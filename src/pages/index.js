import Vue from 'vue'
import App from './App.vue'
import store from '@/store'
import router from './router'
import '@/assets/css/reset.css'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);
new Vue({
    el:'#app',
    router,
    store,
    render: h => h(App),
});