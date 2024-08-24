import home from './components/home.vue.js'
import Detail from './components/detail.vue.js'
import login from './components/login.vue.js'
import pokedex from './components/pokedex.vue.js'
import register from './components/register.vue.js'

const { createRouter, createWebHistory} = VueRouter

const routes = [
    {path: '/', name: 'home',component: home},
    {path: '/detail/:id', name: 'detail', component: Detail},
    {path: '/login', name: 'login',component: login},
    {path: '/pokedex', name: 'pokedex', component: pokedex},
    {path: '/sign-up', name: 'sign-up', component: register}
]

const router = createRouter({
    history: createWebHistory(),
    mode: 'history',
    routes: routes
})

export default router