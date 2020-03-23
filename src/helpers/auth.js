const getToken = () => {
    return localStorage.getItem('token')
};

const isAuthorized = () => {
    return !!getToken()
};

const authorize = (token) => {
    return localStorage.setItem('token', token)
};

const unauthorize = () => {
    return localStorage.removeItem('token')
};

const setRole = (role) => {
    return localStorage.setItem('role', role)
};

const getRole = () => {
    return localStorage.getItem('role')
};

const removeRole = () => {
    return localStorage.removeItem('role')
};

const setEnrollmentId = (enrollmentId) => {
    return localStorage.setItem('enrollmentId', enrollmentId)
};

const getEnrollmentId = () => {
    return localStorage.getItem('enrollmentId')
};

const removeEnrollmentId = () => {
    return localStorage.removeItem('enrollmentId')
};

export default {
    getToken,
    isAuthorized,
    authorize,
    unauthorize,
    setRole,
    getRole,
    removeRole,
    setEnrollmentId,
    getEnrollmentId,
    removeEnrollmentId
}