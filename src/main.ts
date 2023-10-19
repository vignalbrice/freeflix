import { createApp } from 'vue'
import App from './App.vue'
import router from "@/routes/router";
import './style.css'
//Import Pinia into your config file
import { createPinia } from 'pinia'
import Tres from '@tresjs/core'


const app = createApp(App);
// use router
app.use(router);
// use pinia
app.use(createPinia());
// use Tres
app.use(Tres)

app.mount('#app')
