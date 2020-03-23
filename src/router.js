import Vue from 'vue'
import Router from 'vue-router'
import guardMiddleware from "./router/guardMiddleware";
import roleMiddleware from "./router/roleMiddleware";

import {role} from './roles/role'

import Dashboard from "./views/dashboards/Dashboard";
import Login from "./views/auth/Login";
import Schools from "./views/schools/Schools";
import InnerSchool from "./views/schools/InnerSchool";
import Hospitals from "./views/hospitals/Hospitals";
import InnerHospital from "./views/hospitals/InnerHospital";
import MyPatients from "./views/patients/MyPatients";
import Reports from "./views/reports/Reports";
import Application from "./views/application/Application";
import Notifications from "./views/notifications/Notifications";
import MyChildren from "./views/children/MyChildren";
import ChildProfile from "./views/children/ChildProfile";

Vue.use(Router);

const router = new Router({
    mode: 'history',
    routes: [
        {
            path: '/login',
            component: Login,
            name: 'login',
            meta: { onlyGuests: true, redirect: { name: 'dashboard' }, role: [] },
        },
        {
            path: '/',
            component: Dashboard,
            name: 'dashboard',
            meta: { requiresAuth: true, redirect: { name: 'login' },  role: [] },

        },
        {
            path: '/schools',
            component: Schools,
            name: 'schools',
            meta: { requiresAuth: true, redirect: { name: 'login' }, role: [role.parents]},
        },
        {
            path: '/school-inner',
            component: InnerSchool,
            name: 'school-inner',
            meta: { requiresAuth: true, redirect: { name: 'login' }, role: [role.parents] },
        },
        {
            path: '/hospitals',
            component: Hospitals,
            name: 'hospitals',
            meta: { requiresAuth: true, redirect: { name: 'login' }, role: [role.parents] },
        },
        {
            path: '/hospitals-inner',
            component: InnerHospital,
            name: 'hospitals-inner',
            meta: { requiresAuth: true, redirect: { name: 'login' }, role: [ role.parents] },
        },
        {
            path: '/my-patient',
            component: MyPatients,
            name: 'myPatient',
            meta: { requiresAuth: true, redirect: { name: 'login' }, role: [role.hospital] },
        },
        {
            path: '/patient/:id',
            component: ChildProfile,
            name: 'patient',
            meta: { requiresAuth: true, redirect: { name: 'login' }, role: [role.hospital] },
        },
        {
            path: '/reports',
            component: Reports,
            name: 'reports',
            meta: { requiresAuth: true, redirect: { name: 'login' }, role: [role.hospital, role.parents] },
        },
        {
            path: '/application',
            component: Application,
            name: 'application',
            meta: { requiresAuth: true, redirect: { name: 'login' }, role: [role.kindergarten] },
        },
        {
            path: '/notifications',
            component: Notifications,
            name: 'notifications',
            meta: { requiresAuth: true, redirect: { name: 'login' }, role: [role.parents] },
        },
        {
            path: '/my-children',
            component: MyChildren,
            name: 'myChildren',
            meta: { requiresAuth: true, redirect: { name: 'login' }, role: [role.parents] },
        },
        {
            path: '/my-children/:id',
            component: ChildProfile,
            name: 'child',
            meta: { requiresAuth: true, redirect: { name: 'login' }, role: [role.parents, role.hospital] },
            props: true
        },
    ]

});

router.beforeEach(guardMiddleware);
router.beforeEach(roleMiddleware);

export default router