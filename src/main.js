import 'bootstrap/dist/css/bootstrap.min.css';
import { createApp } from 'vue';
import App from './App.vue';
import router from '@/router';

createApp(App).use(router).mount('#app');
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

// console.log('MODE: ', import.meta.env.MODE);
// console.log('VITE_APP_API_URL: ', import.meta.env.VITE_APP_API_URL);
