import 'bootstrap/dist/css/bootstrap.min.css'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueAxios from 'vue-axios'
import axios from 'axios'
import 'bootstrap/dist/js/bootstrap.js'
import 'bootstrap/dist/css/bootstrap.css'
import Vue3EasyDataTable from 'vue3-easy-data-table'
import 'vue3-easy-data-table/dist/style.css'
/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faHeart, faHeartCrack } from '@fortawesome/free-solid-svg-icons'

library.add(faHeart, faHeartCrack)

createApp(App).use(store).use(VueAxios, axios).use(router).component('font-awesome-icon', FontAwesomeIcon).component('EasyDataTable', Vue3EasyDataTable).mount('#app')
