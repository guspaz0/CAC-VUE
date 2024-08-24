export default {
    template: `<div class="container login" data-aos='zoom-in' data-aos-duration='1000' aos-init aos-animate>
    <h3>Inicio de sesion</h3>
        <form action="/user/login" method="POST" v-on:submit="handleSubmit">
            <fieldset>
                <legend>
                    <label for="username">Nombre de usuario y/o Correo:</label>
                </legend>
                <input v-model="username" type="text" id="username" name="username"/>
                <small v-if="errors?.username" className="error">{{errors.username}}</small>
            </fieldset>
            <fieldset>
                <legend>
                    <label for="password">Contraseña:</label>
                </legend>
                <input v-model="password" type="password" id="password" name="password"/>
                <small v-if="errors?.password" className="error">{{errors.password}}</small>
            </fieldset>
            <label for="submit"></label>
            <input id="submit" name="submit" type="submit" value="Enviar"/>
        </form>
        <p><router-link to="/sign-up">Registrate</router-link></p>
    </div>`,
    data(){
        return {
            errors: {},
            username: '',
            password: '',
            form: {}
        }
    },
    watch: {
        username(value){
            let regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            this.username = value
            delete this.errors.username
            delete this.form.username
            if (this.username.length < 2) this.errors.username = "el nombre de usuario debe tener mas de 3 digitos"
            else if(!regex.test(username.value)) this.errors.username = "debe ser un email valido"
            if (!this.errors.username) this.form.username = value
        },
        password(value){
            this.password = value
            delete this.errors.password
            delete this.form.password
            if (this.password.length == 0) this.errors.password = "el campo no puede estar vacio"
            if(!this.errors.password) this.form.username = value
        },
    },
    methods: {
        handleSubmit(e){
            e.preventDefault()
            if (Object.keys(this.errors).length > 0) alert('corregir los errores del formulario')
            else if (Object.keys(this.form).length == 0) alert('completar el formulario por favor')
            else alert('Sitio en construccion')
        }
    }
}