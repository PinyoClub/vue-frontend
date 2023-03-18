import { createApp } from 'vue'
import { createAuth0, authGuard } from '@auth0/auth0-vue';
import { createRouter, createWebHistory } from 'vue-router';
import './style.css'
import App from './App.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', name: 'home', component: App, beforeEnter: authGuard}
  ],
  linkActiveClass: 'active'
})

const app = createApp(App);

app.use(router);
app.use(
  createAuth0({
    domain: "pinyo.eu.auth0.com",
    clientId: "B96jhwK5DaJz6bOacWNmMP8wgAztulAJ",
    authorizationParams: {
      redirect_uri: window.location.origin
    }
  })
)
app.mount('#app');
