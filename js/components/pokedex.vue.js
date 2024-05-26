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
                <small>pagina <b>{{this.$route.query.page}}</b> de <b>{{maxPage}}</b> mostrando <b>{{perPage}}</b> elementos por pagina</small>
            </span>
        </div>
        <div v-if="results.length > 0" className="cards container">
            <article className="card" v-for="pokemon in results" :key="pokemon.name">
                <b>#{{pokemon.id}} {{pokemon.name}}</b>
                <img v-bind:src="pokemon.img" v-bind:alt="pokemon.name"/>
                <router-link v-bind:to="'/detail/'+pokemon.id">Detalle</router-link>
            </article>
        </div>
        <div v-else="results.length == 0" className="cards-container"> Error al hacer la peticion del API</div>

    </div>`,
    data(){
        return {
            results: [],
            page: null,
            maxPage: null,
            perPage: 20
        }
    },
    methods: {
        nextPage() {
            if (this.$route.query.page >= 0) {
                this.$router.push({name: 'pokedex', query: {page: this.page+1}})
            }
        },
        prevPage() {
            if (this.$route.query.page  >= 1)  {
                this.$router.push({name: 'pokedex', query: {page: this.page-1}})
            }
        },
        async handlePage(page) {
            try {
                const res = await fetch(`https://pokeapi.co/api/v2/pokemon/?offset=${+page*this.perPage}&limit=${this.perPage}`)
                const data = await res.json()
                this.maxPage = Math.floor(data.count/this.perPage)
                this.results = data.results.map(({name,url}) => {
                    let id = url.split('pokemon/')[1].slice(0,-1)
                    return {id, name, url, img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
                })
            }catch(err){
                console.log(err)
            }
        }
    },
    created(){
        if (!this.$route.query.hasOwnProperty('page')) {
            this.$router.push({name: 'pokedex', query: {page: 0}})
            this.page = 0
            this.handlePage(this.page)
        } else {
            this.page = +this.$route.query.page
            this.handlePage(this.page)
        }
    },
    updated(){
        if (this.page != +this.$route.query?.page) {
            this.page = this.$route.query?.page? +this.$route.query.page : 0;
            this.handlePage(this.page)
        }
    }
}