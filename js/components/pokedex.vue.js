const pokedex = {
    template: `<hr></hr>
    <footer class="mainfooter">
        <span>{{titulo}}</span>
        <span>{{curso}}</span>
        <span>Autor: {{alumno}}</span>
    </footer>`,
    data(){
        return {
            titulo: "PokeApi",
            curso: "CAC full stack JAVA 2024 comision 24117",
            alumno: "Gustavo Rodolfo Paz"
        }
    }
}