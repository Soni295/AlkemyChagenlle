import axios from 'axios'
const baseURL = 'http://challenge-react.alkemy.org'
const baseURLJPH = 'https://jsonplaceholder.typicode.com/posts'

export const LoginApi = axios.create({baseURL})
export const JPHApi = axios.create({baseURL:baseURLJPH})
