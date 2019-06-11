// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import VeeValidate from 'vee-validate';
import moment from 'moment';
import store from './store';
import App from './App';
import router from './router';

/* eslint-disable */
Vue.config.productionTip = false;
Vue.use(VeeValidate);
// Filtro para exibir a data no formato correto
Vue.filter('formatDate', function (value) {
  if (value) {
    return moment(String(value)).format('DD/MM/YYYY');
  }
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>',
});
