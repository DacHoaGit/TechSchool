import { createApp } from 'vue'
// import './style.css'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import 'ant-design-vue/dist/antd.css';
import 'bootstrap/dist/css/bootstrap-grid.min.css';
import 'bootstrap/dist/css/bootstrap-utilities.min.css';
import { Button,Drawer, List, Menu, Card, Table, Avatar } from 'ant-design-vue';
import axios from 'axios';
window.axios = axios;

const pinia = createPinia()
const app = createApp(App)


app.use(pinia)
app.use(router)
app.use(Button)
app.use(Drawer)
app.use(List)
app.use(Card)
app.use(Avatar)
app.use(Table)
app.use(Menu)

app.mount('#app')
