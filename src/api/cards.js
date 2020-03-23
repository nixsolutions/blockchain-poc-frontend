import api from './axios'

export default {
    getCards: () => {
        return api.get(`cards/user-parents-1`);
    },
}