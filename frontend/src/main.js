// src/main.js
import './assets/main.css';
import { createApp } from 'vue';
import App from './App.vue';
import router from './router'; // Impor router
import animateOnScroll from './directives/animateOnScroll'; // <-- Impor

const app = createApp(App);
app.directive('animate-on-scroll', animateOnScroll); // <-- Daftarkan
app.use(router); // Gunakan router
app.mount('#app');
