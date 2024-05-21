const { createApp } = Vue

const routes = [
    {path: '/detail/:id', component: Detail}
]

const router = new VueRouter({routes})

const app = createApp({
    data(){
        return {
            mensaje: "Pokedex",
        }
    },
    components: {
        'pie': pie,
        'navmain': navmain,
        'home': home
    }
})

app.use(VueRouter)

app.mount('#app')