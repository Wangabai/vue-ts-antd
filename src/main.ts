/*
 * @Author: 王鑫
 * @Description:
 * @Date: 2022-06-30 09:57:48
 */
import { createApp } from 'vue';
import router from './router';
import ant from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
import App from './App.vue';
import axios from 'axios';
import VueAxios from 'vue-axios';

createApp(App).use(router).use(ant).use(VueAxios, axios).mount('#app');
