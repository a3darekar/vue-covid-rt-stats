import Vue from 'vue';
import App from './App.vue';
import '@/assets/css/tailwind.css';
import 'vue-select/dist/vue-select.css';
import vSelect from 'vue-select';
import VueApexCharts from 'vue-apexcharts';
import AxiosPlugin from 'vue-axios-cors';
import moment from 'moment';
import { ToggleButton } from 'vue-js-toggle-button';

Vue.component('faq-modal', require('./components/FaqModal.vue').default);
Vue.component('archived-modal', require('./components/ArchivedModal.vue').default);
Vue.component('pulse-loader', require('vue-spinner/src/PulseLoader.vue'));
Vue.component('ToggleButton', ToggleButton)
Vue.component('apexchart', VueApexCharts)
Vue.component("v-select", vSelect);
Vue.prototype.moment = moment
Vue.config.productionTip = false
Vue.use(AxiosPlugin);

new Vue({
	render: h => h(App)
}).$mount('#app')
