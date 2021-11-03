import { createRouter, createWebHashHistory } from 'vue-router'

import Home from '../views/Home'
import daybookRouter from '../modules/daybook/router'


const routes = [
    {
        path: '/',
        component: Home
    },
    {
        path: '/daybook',
        ...daybookRouter
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

export default router;