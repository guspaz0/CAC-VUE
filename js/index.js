const { createApp } = Vue

const navbar = {
    template: `<p>Este es el header {{mensaje}}</p>`,
    data(){
        return {
            mensaje: "mensaje header"
        }
    },
}
const pie = {
    template: `<p>
        Este es el footer {{mensaje}}
    </p>`,
    data(){
        return {
            mensaje: "mensaje footer"
        }
    }
}


createApp({
    data(){
        return {
            mensaje: "probando VUE.js",
            curso: "CAC full stack JAVA 2024 comision 24117",
            alumno: "Gustavo Rodolfo Paz"
        }
    },
    components: {
        'pie': pie,
        'navbar': navbar
    }
}).mount('#app')