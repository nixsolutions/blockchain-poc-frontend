import api from './axios'

export default {
    login: (credentials) => {
        return api.post(`/users/login`, credentials, {
            disableUnauthorizedErrorHandler: true
        });
    },
}