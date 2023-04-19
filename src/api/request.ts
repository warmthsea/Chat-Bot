import axios from 'axios'
import { key } from '../../key'

const service = axios.create({
  baseURL: 'https://api.openai.com',
  timeout: 8000,
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${key}`,
  },
})

service.interceptors.request.use((config) => {
  return config
})

service.interceptors.response.use(
  (response) => {
    return response.data
  },
  (error) => {
    return Promise.reject(error)
  },
)

export default service
