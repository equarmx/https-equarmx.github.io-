import Vue from 'vue'
import Vuelidate from 'vuelidate'
import Multiselect from 'vue-multiselect'
import App from './App.vue'

Vue.use(Vuelidate, Multiselect);
Vue.config.productionTip = false;

new Vue({
  render: function (h) { return h(App) },
}).$mount('#app');
