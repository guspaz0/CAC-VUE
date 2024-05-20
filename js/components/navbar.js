const Navbar = {
    template: `<navbar className="navbar">
        <img src="" alt="🌎"/>
        <span>{{Titulo}} 🌎</span>
        <ul>
            <li v-for="list in listasNav">
                <a href={{list.href}}>{{list.nombre}}</a>
            </li>
        </ul>
    </navbar>`,
    data(){
        return {
            Titulo: "PokeApi",
            listasNav: [
                {href: '/', nombre: 'Inicio'},
                {href: '/pokedex', nombre: 'Pokedex'},
                {href: '/login', nombre: 'Iniciar Sesion'}
            ]
        }
    },
}