const navmain = {
    template: `<nav className="navbar">
        <img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/i/483c7856-9321-4e36-be55-657e6b503164/d5tyrqg-fcbb2428-7327-47fd-a31c-0ca7286169ba.png" alt="🌎" loading="lazy"/>
        <h1>{{Titulo}} 🌎</h1>
        <ul>
            <li v-for="list in listasNav">
                <router-link v-bind:to="list.href">{{list.nombre}}</router-link>
            </li>
        </ul>
    </nav>
    <hr></hr>`,
    data(){
        return {
            Titulo: "PokeApi",
            listasNav: [
                {href: '/', nombre: 'Inicio'},
                {href: '/pokedex', nombre: 'pokedex'},
                {href: '/login', nombre: 'Iniciar Sesion'}
            ]
        }
    },
    created(){
        this.$router.push({name: 'home', path: '/'})
    }
}