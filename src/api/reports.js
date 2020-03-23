import api from './axios'

export default {
    createReport: (reportData) => {
        return api.post(`/reports/build`, reportData);
    },

    downloadReport: (reportId) => {
        return api({
            url: `/reports/download/${reportId}`,
            method: 'GET',
        })
    },

    createInBlockchain: (reportData) => {
        return api.post(`reports`, reportData);
    },

    getReportRequestForHospital: (enrollmentId) => {
        return api.get(`report-request/by-doctor-id/${enrollmentId}`);
    },

    getReportRequestForSchool: (enrollmentId) => {
        return api.get(`requests/by-kindergarten-id/${enrollmentId}`);
    },

    createRequestReport: (reportData) => {
        return api.post(`report-request`, reportData);
    },

    updateRequestStatus: (id, status) => {
        return api.put(`requests/${id}`, status);
    },

    getAllCardsForParents: (enrollmentId) => {
        return api.get(`cards/get-all-by-parent/${enrollmentId}`);
    },

    getRequestsByCardId: (cardId) => {
        return api.get(`requests/by-card-id/${cardId}`);
    },

    createRequest: (requestsData) => {
        return api.post(`requests`, requestsData);
    },

    getRequestsForParent: (enrollmentId) => {
        return api.get(`report-request/by-parents-id/${enrollmentId}`)
    },

    confirmRequest: (reportId) => {
        return api.post(`/report-request/confirmed`, reportId);
    },

    approveReportInBlockchain: (reportData) => {
        return api.post(`/reports/approve`, reportData);
    },

    updateCardInBlockchain: (cardId, cardData) => {
        return api.put(`cards/${cardId}`, cardData)
    },

    clearData: () => {
        return api.get('/root/zeroing')
    }
}