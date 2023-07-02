import { createApp } from 'vue'
import i18n from './i18n'
import store from './store'
import { router } from './router'
import VueProgressBar from '@aacassandra/vue3-progressbar'
import VueClickAway from 'vue3-click-away'
import VueLazyLoad from 'vue3-lazyload'
import VueScrollTo from 'vue-scrollto'
import mdiVue from 'mdi-vue/v3'
import { filters } from './filter'
import { icons } from './icons'
import App from './App.vue'

import './mystyles.scss'

const app = createApp(App)
  .use(store)
  .use(router)
  .use(VueProgressBar)
  .use(VueClickAway)
  .use(VueLazyLoad, {
    // Do not log errors, if image does not exist
    log: false
  })
  .use(VueScrollTo)
  .use(mdiVue, {
    icons: icons
  })
  .use(i18n)

app.config.globalProperties.$filters = filters
app.mount('#app')
