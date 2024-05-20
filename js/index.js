const { createApp } = Vue

createApp({
    data(){
        return {
            mensaje: "Pokedex",
        }
    },
    components: {
        'pie': pie,
        'navbar': Navbar,
        'home': home
    }
}).mount('#app')