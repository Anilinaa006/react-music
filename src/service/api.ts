import axios from 'axios'
import type { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios'

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

// 封装请求方法
export const request = <T = any>(config: AxiosRequestConfig): Promise<T> => {
  return api(config)
}

// 封装GET请求
export const get = <T = any>(url: string, params?: any): Promise<T> => {
  return api.get(url, { params })
}

// 封装POST请求
export const post = <T = any>(url: string, data?: any): Promise<T> => {
  return api.post(url, data)
}

// 封装PUT请求
export const put = <T = any>(url: string, data?: any): Promise<T> => {
  return api.put(url, data)
}

// 封装DELETE请求
export const del = <T = any>(url: string, params?: any): Promise<T> => {
  return api.delete(url, { params })
}

export default api
