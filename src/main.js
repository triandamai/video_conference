
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import vueaxios from 'vue-axios'
import './assets/tailwind.css'

createApp(App)
.use(store)
.use(router)
.use(vueaxios,axios)
.mount('#app')


// eslint-disable-next-line
/* eslint-disable */