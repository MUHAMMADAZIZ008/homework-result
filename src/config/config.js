import axios from "axios";


const request = axios.create({
    baseURL: import.meta.env.VITE_APP_URL,
})

request.interceptors.request.use((config) => {
    console.log('go');
    return config
})
request.interceptors.response.use((config) =>{
    console.log('come');
    return config
})

export default request