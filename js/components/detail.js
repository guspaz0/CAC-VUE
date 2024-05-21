const Detail = {
    template: `<navmain></navmain>
    <div className="detail"> 
        <h3>Detalle Pokemon {{pokemon.nombre}}</h3>
    </div>
    <pie></pie>`,
    data() {
        return {
            pokemon: {nombre: 'Pikachu'}
        }
    },
    computed: {

    }
}