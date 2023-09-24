import {createRouter, createWebHashHistory, RouteRecordRaw} from "vue-router";

export const routes: Readonly<RouteRecordRaw[]> = [
    {
        path: '/',
        component: () => import('@/pages/Index.vue'),
        meta: {title: 'Index'},
        name: 'pages.index'
    },
    {
        path: '/accordions',
        component: () => import('@/pages/Accordions/Index.vue'),
        meta: {title: 'Accordions'},
        name: 'pages.accordions.index'
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
        path: '/cards',
        component: () => import('@/pages/Cards/Index.vue'),
        meta: {title: 'Cards'},
        name: 'pages.cards.index'
    },
    {
        path: '/carousels',
        component: () => import('@/pages/Caousels/Index.vue'),
        meta: {title: 'Caousels'},
        name: 'pages.caousels.index'
    },
    {
        path: '/list-groups',
        component: () => import('@/pages/ListGroups/Index.vue'),
        meta: {title: 'List Groups'},
        name: 'pages.list-groups.index'
    },
    {
        path: '/tables',
        component: () => import('@/pages/Tables/Index.vue'),
        meta: {title: 'Tables'},
        name: 'pages.tables.index'
    },
    {
        path: '/datatables',
        component: () => import('@/pages/Tables/Datatables.vue'),
        meta: {title: 'Data Table'},
        name: 'pages.tables.datatables'
    },
    {
        path: '/ui/ratio',
        component: () => import('@/pages/Ui/Ratios.vue'),
        meta: {title: 'Ratios'},
        name: 'pages.ui.ratios'
    },
    {
        path: '/ui/badges',
        component: () => import('@/pages/Ui/Badges.vue'),
        meta: {title: 'Badges'},
        name: 'pages.ui.badges'
    },
    {
        path: '/dropdowns',
        component: () => import('@/pages/Dropdowns/Index.vue'),
        meta: {title: 'Dropdowns'},
        name: 'pages.dropdowns.index'
    },
    {
        path: '/forms',
        component: () => import('@/pages/Forms/Index.vue'),
        meta: {title: 'Forms'},
        name: 'pages.forms.index'
    },
    {
        path: '/forms/autocompletes',
        component: () => import('@/pages/Forms/Autocompletes.vue'),
        meta: {title: 'Autocompletes'},
        name: 'pages.forms.autocompletes'
    },
    {
        path: '/modals',
        component: () => import('@/pages/Modals/Index.vue'),
        meta: {title: 'Modals'},
        name: 'pages.modals.index'
    },
];

export default createRouter({
    history: createWebHashHistory(),
    routes
});