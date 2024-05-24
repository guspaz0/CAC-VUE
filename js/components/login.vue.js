const login = {
    template: `<div className="container">
    <link rel="stylesheet" href="./css/login.css"/>
    <div class="container" data-aos='zoom-in' data-aos-duration='1000' aos-init aos-animate>
        <form action="/user/login" method="POST" v-on:submit="handleSubmit">
            <fieldset>
                <legend>
                    <label for="username">Nombre de usuario y/o Correo:</label>
                </legend>
                <input v-on:input="validateForm('username')" type="text" id="username" name="username"/>
            </fieldset>
            <fieldset>
                <legend>
                    <label for="password">Contraseña:</label>
                </legend>
                <input v-on:input="validateForm('password')" type="password" id="password" name="password"/>
            </fieldset>
            <input id="submit" name="submit" type="submit"/>
        </form>
        <p><a href="./register.html">Registrate</a></p>
    </div>
    </div>`,
    data(){
        return {
            errors: {},
        }
    },
    methods: {
        validateForm(input){
            const {username, password} = document.querySelector('form')
            let regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (this.errors[input]) {
                delete this.errors[input]
                if (document.querySelector(`small#error${input}`)) document.querySelector(`small#error${input}`).remove()
            }
            switch(input) {
                case 'username':
                    if (username.value.length < 2) this.errors.username = "el nombre de usuario debe tener mas de 3 digitos"
                    else if(!regex.test(username.value)) this.errors.username = "debe ser un email valido"
                    break
                case 'password':
                    if (password.value.length == 0) this.errors.password = "el campo no puede estar vacio"
                    break
                default:
                    break
            }
            if (this.errors[input]) {
                let errorTag = `<small id="error${input}" class="error">${this.errors[input]}</small>`
                document.querySelector(`input[name='${input}']`).insertAdjacentHTML('afterend', errorTag)
            }
        },
        handleSubmit(e){
            e.preventDefault()
            Array.from(document.querySelector('form')).forEach(input => this.validateForm(input.name));
            if (Object.keys(this.errors).length > 0) alert('corregir los errores del formulario')
            else alert('Sitio en construccion')
        }
    }
}