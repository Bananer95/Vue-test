import { createApp } from 'vue';
import { createPinia } from 'pinia';

import App from './App.vue';
import router from './router';
import MyModal from './components/MyModal.vue';

import './assets/main.css';

const app = createApp(App);

app.use(createPinia());
app.component('my-modal', MyModal);
app.use(router);
app.mount('#app');
