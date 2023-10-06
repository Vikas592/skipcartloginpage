import axios from 'axios'

const customAxios = axios.create({
    baseURL: 'http://localhost:4000',
    timeout: 1000,
});

customAxios.interceptors.request.use(request => {
    if (request.method === 'POST') {
        request.headers = {
            ...request.headers,
            'Content-Type': 'application/json'
        };
    }
    return request;
});

customAxios.interceptors.response.use(response => response,
    error => {
        console.log(error.message);
        return error;
    });

export default customAxios;