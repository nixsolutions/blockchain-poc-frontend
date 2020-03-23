import authHelper from './../helpers/auth'

export default (to, from, next) => {
    const { role } = to.meta;

    if (role.length && !role.includes(authHelper.getRole())) {
        return next({ path: '/' });
    }

    next()
}