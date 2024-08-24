import navmain from './components/nav.vue.js'
import pie from './components/nav.vue.js'
import router from './router.js'

const { createApp } = Vue

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

app.use(router)

app.mount('#app')