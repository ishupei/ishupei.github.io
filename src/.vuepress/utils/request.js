import axios from 'axios'

/**
 * 获取API基础URL
 * 优先从环境变量VITE_API_BASE获取，如果没有则使用默认值
 */
function getApiBaseUrl() {
  // 尝试从环境变量获取
  if (import.meta.env?.VITE_API_BASE) {
    return import.meta.env.VITE_API_BASE
  }
  
  // 默认值
  return 'http://localhost:9868/'
}

/**
 * 创建axios实例
 * @type {AxiosInstance}
 */
const service = axios.create({
    baseURL: getApiBaseUrl(),
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json'
    }
})

/**
 * 封装GET请求
 * @param {string} url - 请求地址（相对路径）
 * @param {object} [params={}] - 查询参数
 * @param {object} [config={}] - 额外配置
 * @returns {Promise} 
 */
export function get(url, params = {}, config = {}) {
    return service.get(url, { params, ...config })
}

/**
 * 封装POST请求
 * @param {string} url - 请求地址
 * @param {object} [data={}] - 请求体数据
 * @param {object} [config={}] - 额外配置
 * @returns {Promise}
 */
export function post(url, data = {}, config = {}) {
    return service.post(url, data, config)
}

/**
 * 封装PUT请求
 * @param {string} url - 请求地址
 * @param {object} [data={}] - 请求体数据
 * @param {object} [config={}] - 额外配置
 * @returns {Promise}
 */
export function put(url, data = {}, config = {}) {
    return service.put(url, data, config)
}

/**
 * 封装DELETE请求
 * @param {string} url - 请求地址
 * @param {object} [params={}] - 查询参数
 * @param {object} [config={}] - 额外配置
 * @returns {Promise}
 */
export function del(url, params = {}, config = {}) {
    return service.delete(url, { params, ...config })
}

/**
 * 封装PATCH请求
 * @param {string} url - 请求地址
 * @param {object} [data={}] - 请求体数据
 * @param {object} [config={}] - 额外配置
 * @returns {Promise}
 */
export function patch(url, data = {}, config = {}) {
    return service.patch(url, data, config)
}

/**
 * 封装上传文件请求
 * @param {string} url - 请求地址
 * @param {FormData} formData - 表单数据
 * @param {object} [config={}] - 额外配置
 * @returns {Promise}
 */
export function upload(url, formData, config = {}) {
    return service.post(url, formData, {
        headers: {
            'Content-Type': 'multipart/form-data'
        },
        ...config
    })
}

/**
 * 下载文件
 * @param {string} url - 请求地址
 * @param {object} [params={}] - 查询参数
 * @param {string} [filename] - 文件名
 * @returns {Promise}
 */
export function download(url, params = {}, filename) {
    return service.get(url, {
        params,
        responseType: 'blob'
    }).then(response => {
        // 创建下载链接
        const blob = new Blob([response])
        const downloadUrl = window.URL.createObjectURL(blob)
        const link = document.createElement('a')
        link.href = downloadUrl
        link.download = filename || 'download'
        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)
        window.URL.revokeObjectURL(downloadUrl)
    })
}

// 导出原始axios实例（按需使用）
export default service

// 导出所有方法
export const request = {
    get,
    post,
    put,
    delete: del,
    patch,
    upload,
    download
}