import './assets/main.css'
import './assets/tailwind.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { useStateStore } from '@/stores/global/stateStore.js'
import { useAlertStore } from '@/stores/global/alertStore.js'

import App from './App.vue'
import router from './router'

import { library } from '@fortawesome/fontawesome-svg-core'
/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
/* import specific icons */
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
library.add(fas, far, fab)

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.provide('state', useStateStore())

app.config.globalProperties.alert = useAlertStore()

app.component('font-awesome-icon', FontAwesomeIcon)
app.mount('#app')
