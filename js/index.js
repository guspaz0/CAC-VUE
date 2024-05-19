const { createApp } = Vue

const Navbar = {
    template: `<navbar>
        <img src="" alt="🌎"/>
        <span>{{Titulo}} 🌎</span>
        <ul>
            <li><a href="/">Inicio</a></li>
            <li><a href="/login">Iniciar sesion</a></li>
            <li><a href="/home">Home</a></li>
        </ul>
    </navbar>`,
    data(){
        return {
            Titulo: "API del clima"
        }
    },
}
const pie = {
    template: `<p>
        <span>{{titulo}}</span>
        <span>{{curso}}</span>
        <span>Autor: {{alumno}}</span>
    </p>`,
    data(){
        return {
            titulo: "mensaje footer",
            curso: "CAC full stack JAVA 2024 comision 24117",
            alumno: "Gustavo Rodolfo Paz"
        }
    }
}


createApp({
    data(){
        return {
            mensaje: "Informacion meteorologica",
        }
    },
    components: {
        'pie': pie,
        'navbar': Navbar
    }
}).mount('#app')