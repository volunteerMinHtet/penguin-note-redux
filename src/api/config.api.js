import axios from 'axios'
import Constants from 'expo-constants'

const { SERVER_API_URL } = Constants.manifest.extra

const API = axios.create({
    // baseURL: `${SERVER_API_URL}`
    baseURL: `https://jsonplaceholder.typicode.com`
});

export default API