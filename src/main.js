import { createApp } from 'vue';
import App from './App.vue';
import router from './plugins/router';
import './style.css';

if (localStorage.getItem('theme') === 'dark') {
  document.documentElement.classList.add('dark');
}

const app = createApp(App);

app.use(router);
app.mount('#app');
