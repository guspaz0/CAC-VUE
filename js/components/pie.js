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