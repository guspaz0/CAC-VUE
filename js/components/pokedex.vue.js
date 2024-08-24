export default {
    template: `<div className="container-pokedex">
        <div>
            <form>
                <div>
                    <label for="search">Ingresar nombre o Id:</label>
                    <input id="search" type="search" name="search" v-model="search"/> 
                    <small v-if="errors.search" className="error">{{errors.search}}</small>
                </div>
                <input @click="handleSearch" type="submit" value="Enviar">
            </form>
            <span className="pagination"> 
                <button v-on:click="prevPage();" id="prevPage">Anterior</button>
                <button v-on:click="nextPage();" id="nextPage">Siguiente</button>
                <small>pagina <b>{{this.$route.query.page}}</b> de <b>{{maxPage}}</b> mostrando <b>{{perPage}}</b> elementos por pagina</small>
            </span>
        </div>
        <div v-if="results.length > 0" className="cards container">
            <article className="card" v-for="pokemon in results" :key="pokemon.name">
                <span><b>{{pokemon.name}}</b> <small>#{{pokemon.id}}</small></span>
                <img v-bind:src="pokemon.img" v-bind:alt="pokemon.name" loading="lazy"/>
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
            perPage: 20,
            search: null,
            errors: {}
        }
    },
    watch: {
        search(value) {
            delete this.errors.search
            let onlyLetters = /^[A-z]+$/
            let onlyNumbers = /^[0-9]+$/
            if (!onlyLetters.test(value) && !onlyNumbers.test(value)) this.errors.search= 'Solo letras(Nombre) o numero(Id), NO los dos'
            else if (value.length >= 2) this.search = value.toLowerCase()
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
        },
        async handleSearch(name){
            try {
                name.preventDefault()
                this.$router.push({name: 'detail', params: {id: this.search}})
            } catch (error) {
                console.log(error)
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