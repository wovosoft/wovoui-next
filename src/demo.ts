import {createApp} from 'vue'
import "bootstrap/dist/css/bootstrap.min.css";
import './style.css'
import App from '@/App.vue'

import routes from "@/routes";

createApp(App)
    .use(routes)
    .mount('#app')
