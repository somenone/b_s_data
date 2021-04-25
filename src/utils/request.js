import axios from 'axios'
import Vue from 'vue';

// import {Notify} from 'vant';

// import { Notification, MessageBox, Message } from 'element-ui'
// import store from '@/store'
// import router from '@/router'
// import {avoidLogin} from "@/api/login";
// import { getToken, setToken, removeToken } from '@/utils/auth'
axios.defaults.headers['Content-Type'] = 'application/json;charset=utf-8'
// axios.defaults.headers['Content-Type'] = 'multipart/form-data'
// 创建axios实例
const service = axios.create({
  baseURL: "",
  // 超时
  timeout: 30000
})
// request拦截器
service.interceptors.request.use(
  config => {
    // config.headers['token'] = localStorage.getItem('token') // 让每个请求携带自定义token 请根据实际情况自行修改
    // config.headers['token'] = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJudWxsIiwiY2FsbGVyIjoiY2FsbGVyLWFwaSIsImV4cCI6MTYxODA3NTMwNCwidXNlciI6IntcInBhcmFtVXNlclwiOlwiXCIsXCJwYXNzd29yZFwiOlwiMDRBQjI2ODY5NzE1ODMyMFwiLFwiZGVwdFBhcmVudElkc1wiOltdLFwiaWRcIjoxLFwiam9iTnVtXCI6XCJcIixcIm5pY2tOYW1lXCI6XCLotoXnuqfnrqHnkIblkZhcIixcImlzQWRtaW5cIjp0cnVlLFwiZGF0YUNvZGVcIjpbXSxcInBvc0lkc1wiOltdLFwiZGVwdE5pY2tOYW1lXCI6XCJcIixcImRlcHRDaGlsZHJlbklkc1wiOltdLFwidXBkYXRlRGF0ZVwiOjE2MTgwNjQ0MjUwMDAsXCJ1cGRhdGVQd2REYXRlXCI6MTYxODA2NDQyNTAwMCxcIm9wZW5JZFwiOlwiXCIsXCJkZXNjcmlwdGlvblwiOlwiXCIsXCJlbmFibGVkXCI6dHJ1ZSxcInVzZXJDb2RlXCI6XCJcIixcImlzVGVuYW50QWRtaW5cIjp0cnVlLFwibG9naW5XYXlcIjpcIlwiLFwiZW1haWxcIjpcIlwiLFwidG9rZW5Db2RlXCI6XCI3ODI0YzY4OC1iZGMzLTRkMTktYmI3MS0yZDhhODg3NDlmNjBcIixcInNleFwiOlwiXCIsXCJtb2JpbGVcIjpcIueUteivnVwiLFwidXBkYXRlVXNlclwiOlwic2FcIixcInJvbGVJZHNcIjpbXSxcImhlYWRJbWdVcmxcIjpcIlwiLFwidGVuYW50SWRcIjoxLFwiY3JlYXRlVXNlclwiOlwiXCIsXCJpc0RlbFwiOmZhbHNlLFwidXNlcm5hbWVcIjpcInNhXCJ9IiwiaWF0IjoxNjE4MDY0NTA0fQ.44vSv0-sI_GaHQ44u29LyrGfMcY3gSAPAYmU6g50FTY'
    return config
  },
  error => {
    console.log(error)
  }
)

// 响应拦截器
service.interceptors.response.use(res => {
    return res.data
  },
  error => {

  }
)

export default service

