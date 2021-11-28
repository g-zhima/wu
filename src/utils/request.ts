import axios from 'axios'

const httpService = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  timeout: 5000,
})

httpService.interceptors.request.use()
httpService.interceptors.response.use()

export default httpService
