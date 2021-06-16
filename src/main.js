import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import * as THREE from 'three';

const scene = new THREE.Scene();


createApp(App).use(store).use(router).mount('#app')
