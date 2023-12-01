import './assets/main.css'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-icons/font/bootstrap-icons.css"
import "bootstrap"
import router from './router'
import store from './store'
import VueAxios from 'vue-axios'
import axios from 'axios'

import { createApp } from 'vue'
import App from './App.vue'


createApp(App).use(router).use(store).use(VueAxios, axios).mount('#app')