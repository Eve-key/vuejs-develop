import Vue from 'vue'
import App from '../../App.vue'

Vue.config.productionTip = false

// 複数インスタンスをmain.ts内で定義できない為、各htmlファイル内に
// 存在するid(この場合app,office)ごとにmain.tsファイルを作成
new Vue({
    render: (h: any) => h(App),
}).$mount('#app')