import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VModal from 'vue-js-modal'
import {ClientTable} from 'vue-tables-2'
import JsonExcel from 'vue-json-excel'
import JsonCsv from 'vue-json-csv'
import VueSpinners from 'vue-spinners'
require('./assets/styles/query.css')

Vue.config.productionTip = false;
Vue.use(VModal);
Vue.use(ClientTable);
Vue.component('downloadExcel', JsonExcel);
Vue.component('downloadCsv', JsonCsv);
Vue.use(VueSpinners);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
