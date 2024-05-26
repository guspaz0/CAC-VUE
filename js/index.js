const { createApp } = Vue
const { createRouter, createWebHistory} = VueRouter

const app = createApp({
    data(){
        return {
            mensaje: "Pokedex",
        }
    },
    components: {
        'navmain': navmain,
        'pie': pie
    }
})

const routes = [
    {path: '/', component: home},
    {path: '/detail/:id', name: 'detail', component: Detail},
    {path: '/login', name: 'login',component: login},
    {
        path: '/pokedex', 
        name: 'Pokedex', 
        //props: (route) => ({page: route.query.page}),
        component: pokedex
    },
    {path: '/sign-up', name: 'sign-up', component: register}
]

const router = createRouter({
    history: createWebHistory(),
    mode: 'history',
    routes: routes
})



app.use(router)

app.mount('#app')