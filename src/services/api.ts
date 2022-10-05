import axios from 'axios'

const api = axios.create({
  baseURL: 'https://megasonho-api-dev.herokuapp.com/'
})

export default api
