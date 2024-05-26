const register = {
    template: `<div className="container register">
    <h3>Formulario de registro</h3>
        <form v-on:submit="handleSubmit">
            <label for="name">Nombre:</label>
            <input id="name" type="text" name="name" v-model="name"/>
            <small v-if="errors?.name" className="error">{{errors.name}}</small>
            <label for="lastname">Apellido:</label>
            <input id="lastname" type="text" name="lastname" v-model="lastname"/>
            <small v-if="errors?.lastname" className="error">{{errors.lastname}}</small>
            <label for="email">Email:</label>
            <input id="email" type="text" name="email" v-model="email"/>
            <small v-if="errors?.email" className="error">{{errors.email}}</small>
            <label for="birthday">Fecha de nacimiento:</label>
            <input id="birthday" type="date" name="birthday" v-model="birthday"/>
            <small v-if="errors?.birthday" className="error">{{errors.birthday}}</small>
            <label for="username">Usuario:</label>
            <input id="username" type="text" name="username" v-model="username"/>
            <small v-if="errors?.username" className="error">{{errors.username}}</small>
            <input type="submit" value="Enviar">
        </form>
    </div>`,
    data() {
        return {
            form: {},
            errors: {}, 
            name: '',
            lastname: '',
            email: '',
            birthday: '',
            username: ''
        }
    },
    watch: {
        name(value) {
            this.name = value
            delete this.errors?.name
            delete this.form?.name
            if (this.name.length < 2) this.errors.name = 'El nombre debe ser mayor a 3 caracteres'
            else if (this.name.length > 20) this.errors.name = 'El nombre debe ser menor a 20 caracteres'
        }
    },
    methods: {
        handleSubmit(e){
            e.preventDefault()
            alert('sitio en construccion')
        }
    }
}