import Vue from 'vue'
import App from './App.vue'
Vue.config.productionTip = false
import icons from "v-svg-icons";
Vue.component('icon', icons)

new Vue({
    render: h => h(App),
}).$mount('#app')