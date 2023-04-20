import axios from 'axios'

const service = axios.create({
  baseURL: 'https://api.openai.com',
  timeout: 8000,
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${import.meta.env.VITE_OPENAI_API_KEY}`,
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
