import axios from "axios";

const api = axios.create({
    baseURL: 'http://192.168.18.64:8000/api/V1/'
});

export default api;