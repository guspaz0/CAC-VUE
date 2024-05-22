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
    {path: '/detail/:id', component: Detail},
    {path: '/login', component: login},
    {path: '/pokedex', component: pokedex}
]

const router = createRouter({
    history: createWebHistory(),
    routes: routes
})



app.use(router)

app.mount('#app')