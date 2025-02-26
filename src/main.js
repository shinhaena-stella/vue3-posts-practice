import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { createApp } from 'vue';
import App from './App.vue';
import router from '@/router';
// import globalComponents from '@/plugins/global-components';
import globalDirectives from '@/plugins/global-directives';
import dayjs from './plugins/dayjs';
// const app = createApp(App);
// app.use(funcPlugins);
// app.use(objPlugins);

createApp(App).use(globalDirectives).use(dayjs).use(router).mount('#app');
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

// console.log('MODE: ', import.meta.env.MODE);
// console.log('VITE_APP_API_URL: ', import.meta.env.VITE_APP_API_URL);
