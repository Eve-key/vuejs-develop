import Vue from 'vue'
import Office from '../../Office.vue'

Vue.config.productionTip = false

new Vue({
  render: (h: any) => h(Office),
}).$mount('#office')