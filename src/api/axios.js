import Axios from 'axios'
import router from '../router'
import auth from './../helpers/auth'
import config from '../configs/index'

const axios = Axios.create({
    baseURL: config.API_BASE_URL,
});

const accessToken = auth.getToken();

if (accessToken) {
    axios.defaults.headers['Authorization'] = accessToken
}

const requestErrorHandler = (error) => {
    throw error
};

const unauthorizedErrorHandler = (error) => {
    const { response, config } = error;

    if (config.disableUnauthorizedErrorHandler) {
        throw error
    }

    if (response.status === 401) {
        auth.unauthorize();
        router.push({ name: 'login', query: { referer: router.currentRoute.fullPath } });
        return error
    }

    throw error
};

axios.interceptors.request.use(r => r, requestErrorHandler);
axios.interceptors.response.use(r => r, unauthorizedErrorHandler);

export default axios