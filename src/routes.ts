import {createRouter, createWebHashHistory, RouteRecordRaw} from "vue-router";

export const routes: Readonly<RouteRecordRaw[]> = [
    {
        path: '/',
        component: () => import('@/pages/Index.vue'),
        meta: {title: 'Index'},
        name: 'pages.index'
    },
    {
        path: '/alerts',
        component: () => import('@/pages/Alerts/Index.vue'),
        meta: {title: 'Alerts'},
        name: 'pages.alerts.index'
    },
    {
        path: '/buttons',
        component: () => import('@/pages/Buttons/Index.vue'),
        meta: {title: 'Buttons'},
        name: 'pages.buttons.index'
    },
    {
        path: '/button-groups',
        component: () => import('@/pages/Buttons/ButtonGroups.vue'),
        meta: {title: 'Button Groups'},
        name: 'pages.buttons.groups'
    },
    {
        path: '/button-close',
        component: () => import('@/pages/Buttons/CloseButton.vue'),
        meta: {title: 'Button Close'},
        name: 'pages.buttons.button-close'
    },
    {
        path: '/list-groups',
        component: () => import('@/pages/ListGroups/Index.vue'),
        meta: {title: 'List Groups'},
        name: 'pages.list-groups.index'
    }
];

export default createRouter({
    history: createWebHashHistory(),
    routes
});