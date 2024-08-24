export default {
    template: `<h2>{{Titulo}}</h2>
    <section className="cards container">
        <article className="card" v-for="pokemon in pokeList" :key="pokemon.name">
        <span><b>{{pokemon.name}}</b> <small>#{{pokemon.id}}</small></span>
            <img v-bind:src="pokemon.img" v-bind:alt="pokemon.name" loading="lazy"/>
            <router-link v-bind:to="'/detail/'+pokemon.id">Detalle</router-link>
        </article>
    </section>`,
    data(){
        return {
            Titulo: "PokeApi",
            pokeList: null
        }
    },
    async mounted () {
        try {
            const res = await fetch('https://pokeapi.co/api/v2/pokemon')
            const data = await res.json()
            this.pokeList = data.results.map(({name,url}) => {
                let id = url.split('pokemon/')[1].slice(0,-1)
                return {id, name, url, img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
            })
        }catch(err){
            console.log(err)
        }
    },
    methods: {

    }
}