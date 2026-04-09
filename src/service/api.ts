import axios from 'axios'
import type { AxiosInstance, AxiosResponse } from 'axios'

// 创建axios实例
const api: AxiosInstance = axios.create({
  baseURL: 'http://localhost:3000',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json'
  }
})

// 请求拦截器
api.interceptors.request.use(
  (config) => {
    // 可以在这里添加token等认证信息
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

// 响应拦截器
api.interceptors.response.use(
  (response: AxiosResponse) => {
    // 统一处理响应数据
    return response.data
  },
  (error) => {
    // 统一处理错误
    console.error('API Error:', error)
    return Promise.reject(error)
  }
)

export default api
