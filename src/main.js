// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import store from './store'
import router from './router'
import localforage from 'localforage'

window.$ = window.jQuery = require('jquery');
require('bootstrap-sass');

window.axios = require('axios');
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
window.axios.defaults.baseURL = 'http://lms.app/api'

localforage.config({
    driver: localforage.LOCALSTORAGE,
    storeName: 'portal'
})

store.dispatch('auth/setToken').then(() => {
    store.dispatch('auth/fetchUser').catch(() => {
        store.dispatch('auth/clearAuth')
        router.replace({ name: 'login' })
    })
}).catch(() => {
    store.dispatch('auth/clearAuth')
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  	el: '#app',
  	store,
  	router,
  	template: '<App/>',
  	components: { App },
})