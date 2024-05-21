const home = {
    template: `<h2>{{Titulo}}</h2>
    <section className="cards-container">
        <article className="card" v-for="pokemon in pokeList" :key="pokemon.name">
            <b>{{pokemon.name}}</b>
            <img v-bind:src="pokemon.img" v-bind:alt="pokemon.name"/>
            <a v-bind:href="pokemon.url">Detalle</a>
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
                return {name, url, img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${url.split('pokemon/')[1].slice(0,-1)}.png`}
            })
        }catch(err){
            console.log(err)
        }
    },
    methods: {

    }
}