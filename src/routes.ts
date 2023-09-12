import {createRouter, createWebHashHistory, RouteRecordRaw} from "vue-router";

export const routes: Readonly<RouteRecordRaw[]> = [
    {
        path: '/',
        component: () => import('@/pages/Index.vue'),
        meta: {title: 'Index'},
        name: 'pages.index'
    },
    {
        path: '/buttons',
        component: () => import('@/pages/Buttons/Index.vue'),
        meta: {title: 'Buttons'},
        name: 'pages.index'
    }
];

export default createRouter({
    history: createWebHashHistory(),
    routes
});