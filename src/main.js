import { createApp } from 'vue'
import App from './App.vue'
import 'remixicon/fonts/remixicon.css'
import './assets/index.css'
import './store/index'
import Store from './store/index'

const app = createApp(App)

app.use(Store);

app.mount('#app')