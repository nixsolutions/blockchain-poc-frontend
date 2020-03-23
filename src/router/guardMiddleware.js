import authHelper from './../helpers/auth'

export default (to, from, next) => {
    const onlyGuests = to.matched.some(m => m.meta.onlyGuests);
    const requiresAuth = to.matched.some(m => m.meta.requiresAuth);

    const redirect = to.matched.reduceRight((redirect, m) => {
        return redirect || m.meta.redirect
    }, false);

    if (onlyGuests && authHelper.isAuthorized()) {
        return next(redirect || '/')
    }

    if (requiresAuth && !authHelper.isAuthorized()) {
        return next(redirect || { name: 'login' })
    }

    next()
}