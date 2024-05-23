const Detail = {
    template: `<div className="container-detail"> 
        <h3>Detalle Pokemon #{{id}}</h3>
        <div className="detail">
            <img v-bind:src="image" v-bind:alt="pokemon.name"/>
            <span>            
                <p><b>Nombre:</b> {{pokemon.name}}</p>
                <p><b>peso:</b> {{pokemon.weight}} Kg</p>
                <p>
                    <b>tipo:</b> 
                    <ul>
                        <li v-for="type in pokemon.types">
                            {{type.type.name}}
                        </li>
                    </ul>
                </p>
            </span>
        </div>
    </div>`,
    data() {
        return {
            pokemon: null,
            image: null,
            id: this.$route.params.id
        }
    },
    async created () {
        this.handleDetail()
    },
    methods: {
        handleDetail: async function() {
            try {
                const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${this.id}/`)
                const data = await res.json()
                this.pokemon = data
                this.image = data.sprites.other.dream_world.front_default
            }catch(err){
                console.log(err)
            }
        }
    }
}