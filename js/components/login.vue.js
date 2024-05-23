const login = {
    template: `<div className="container">
    <link rel="stylesheet" href="./css/login.css"/>
    <div class="container" data-aos='zoom-in' data-aos-duration='1000' aos-init aos-animate>
        <form action="/user/login" method="POST">
            <fieldset>
                <legend>
                    <label for="username">Nombre de usuario y/o Correo:</label>
                </legend>
                <input type="text" id="username" name="username"/>
            </fieldset>
            <fieldset>
                <legend>
                    <label for="password">Contraseña:</label>
                </legend>
                <input type="password" id="password" name="password"/>
            </fieldset>
            <input id="submit" name="submit" type="submit"/>
        </form>
        <p><a href="./register.html">Registrate</a></p>
    </div>
    </div>`,
    data(){
        return {

        }
    }
}