/*
 * @Author: 王鑫
 * @Description:
 * @Date: 2022-06-30 10:31:46
 */
import axios from 'axios';

const service = axios.create({
  baseURL: import.meta.env.BASE_URL,
  timeout: 60000,
  withCredentials: true,
  headers: {
    Accept: 'application/json, text/plain, */*',
    'Content-Type': 'application/json',
    'X-Requested-With': 'XMLHttpRequest'
  },
});

export default service;
