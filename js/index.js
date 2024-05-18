const { createApp } = Vue
const footer = require('./components/footer')
const header = require('./components/header')


createApp({
    data(){
        return {
            mensaje: "probando VUE.js",
            curso: "CAC full stack JAVA 2024 comision 24117",
            alumno: "Gustavo Rodolfo Paz"
        }
    },
    components: {
        'footer': footer,
        'header': header
    }
}).mount('#app')