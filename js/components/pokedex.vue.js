const pokedex = {
    template: `<div className="container-pokedex">
        <div>
            <form>
                <label for="search">Buscar:</label>
                <input type="search" name="search"/>
            </form>
            <span className="pagination"> 
                <button v-on:click="prevPage();" id="prevPage">Anterior</button>
                <button v-on:click="nextPage();" id="nextPage">Siguiente</button>
                <small>pagina {{page}} de {{maxPage}} mostrando {{perPage}}</small>
            </span>
        </div>
        <div className="cards-container">
            <article className="card" v-for="pokemon in results" :key="pokemon.name">
                <b>{{pokemon.name}}</b>
                <img v-bind:src="pokemon.img" v-bind:alt="pokemon.name"/>
                <router-link v-bind:to="'/detail/'+pokemon.url.split('pokemon/')[1].slice(0,-1)">Detalle</router-link>
            </article>
        </div>
    </div>`,
    data(){
        return {
            results: [],
            page: 0,
            maxPage: null,
            perPage: 20
        }
    },
    methods: {
        nextPage() {
            if (this.page >= 0) this.page += 1;
            this.handlePage()
        },
        prevPage() {
            if (this.page >= 1)  this.page -= 1;
            this.handlePage()
        },
        async handlePage() {
            try {
                const res = await fetch(`https://pokeapi.co/api/v2/pokemon/?offset=${this.page*this.perPage}&limit=${this.perPage}`)
                const data = await res.json()
                this.results = data.results.map(({name,url}) => {
                    return {name, url, img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${url.split('pokemon/')[1].slice(0,-1)}.png`}
                })
                this.maxPage = Math.floor(data.count/this.perPage)
            }catch(err){
                console.log(err)
            }
        }
    },
    computed: {

    },
    created(){
        this.handlePage()
    }
}