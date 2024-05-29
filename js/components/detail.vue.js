const Detail = {
    template: `<div className="container detail"> 
        <button v-on:click="goBack" className="button">Volver</button>
        <h3 v-if="errors.notfound">{{errors.notfound}}</h3>
        <div v-else="pokemon" className="detail" v-bind:style="'background-color:'+backgrounds[pokemon.types[0].type.name] || defaultBackground">
            <h3>Detalle Pokemon #{{id}}</h3>
            <img v-bind:src="image" v-bind:alt="pokemon.name" loading="lazy"/>
            <span>            
                <p><b>Nombre:</b> {{pokemon.name}}</p>
                <p><b>peso:</b> {{pokemon.weight/10}} Kg</p>
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
            id: this.$route.params.id,
            backgrounds: {
                fire: 'orange',
                electric: 'yellow',
                bug: 'lime',
                grass: 'green',
                poison: 'purple',
                water: 'turquoise',
                psychic: 'gold',
                normal: 'lightgray',
                dragon: 'orange',
                flying: 'lightgray',
                rock: 'gray',
                ground: 'brown',
                fairy: 'pink',
                fighting: 'lightgray',
                ice: 'lightblue',
                dark: 'slategray'
            },
            defaultBackground: 'lightgray',
            errors: {}
        }
    },
    async created () {
        this.handleDetail()
    },
    methods: {
        handleDetail: async function() {
            try {
                const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${this.id}/`)
                if (res.status == 404) this.errors.notfound = 'Pokemon No encontrado'
                const data = await res.json()
                this.pokemon = data
                this.image = data.sprites.other.dream_world.front_default
            }catch(err){
                console.log(err)
            }
        },
        goBack() {
            router.go(-1)
        }
    }
}