import Vue from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';
import Nav from '@/components/Nav.vue';
import Layout from '@/components/Layout.vue';
import Icon from '@/components/Icon.vue';

Vue.config.productionTip = false;

Vue.component('Nav', Nav);
Vue.component('Layout', Layout);
Vue.component('Icon', Icon);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');

window.onload = function () {
  setTimeout(function () {
    window.scrollTo(0, 500);
  }, 0);
};

if (document.documentElement.clientWidth > 500) {
  window.alert('请使用手机打开本页面，以保证浏览效果');
  const img = document.createElement('img');
  const cover = document.createElement('div');
  img.src = './qrcode.png';
  img.style.position = 'fixed';
  img.style.left = '50%';
  img.style.top = '50%';
  img.style.transform = 'translate(-50%,-50%)';
  img.style.boxShadow = '0 0 10px rgba(0,0,0,0.25)';
  cover.style.position = 'fixed';
  cover.style.top = '0';
  cover.style.left = '0';
  cover.style.right = '0';
  cover.style.bottom = '0';
  cover.style.height = '100vh';
  cover.style.width = '500px';
  cover.style.marginLeft = '50%';
  cover.style.transform = 'translate(-50%)';
  cover.style.background = 'rgba(0, 0, 0, 0.5)';
  document.body.appendChild(cover);
  document.body.appendChild(img);
  cover.onclick = function () {
    img.style.display = 'none';
    cover.style.display = 'none';
  };
}
