import Vue from "@components/iview/iview";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import animated from 'animate.css';
// import hyPage from '@components/pageServices/pageServices';//分页组件
import "view-design/dist/styles/iview.css"; // iview样式
import "normalize.css"; // normalize.css
import "@assets/index.css";
import "@assets/styles/common.scss"; // 公共样式
import core from "@assets/js/utils/global.js"; // 挂载Vue原型上的方法


Vue.config.productionTip = false;
Vue.use(animated);
Vue.use(core);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
