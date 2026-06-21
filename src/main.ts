import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

const app = createApp(App)
app.mount('#app')

// Registrar Service Worker
const baseUrl = import.meta.env.BASE_URL;
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register(`${baseUrl}sw.js`)
      .then(reg => console.log('Service Worker registrado com escopo:', reg.scope))
      .catch(err => console.error('Erro ao registrar Service Worker:', err));
  });
}
