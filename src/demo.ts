import {createApp} from 'vue'
import './styles/tailwind.css'
import './styles/bootstrap-compat.css'
import './style.css'
import App from '@/App.vue'

import routes from "@/routes";

createApp(App)
    .use(routes)
    .mount('#app')
