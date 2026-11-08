import axios from 'axios'

const api = axios.create({
  baseURL: 'http://localhost:3004/api/chat',
  headers: {
    'Content-Type': 'application/json',
  },
})

export default api