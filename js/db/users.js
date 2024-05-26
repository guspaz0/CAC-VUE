let Users = {
    db: [{   
            id: 1,
            name: 'Jhon',
            lastname: 'Doe',
            birthday: '1990-06-11',
            username: 'jdoe',
            email: 'jdoe@asd.com',
            password: 'abc123'
        },
    ],
    findOne: function (Name) {
        return this.db.find(x => x.name.toLowerCase() == name.toLowerCase())
    },
    create: function (formData) {
        let {name, lastname, birthday, username, password, email} = formData
        let id = 0
        this.db.forEach((u)=> {if (u.id > id) id = u.id})
        this.db.push({id,name,lastname, birthday, username, password, email})
    },
    login: function(user,pass) {
        let user = this.db.find(user => user.username == user || user.email == user)
        if (user) {
            if (user.password == pass) return {user, access: true}
            else return {error: 'contraseña incorrecta', user: {username: user, password: pass},access: false}
        } 
        else return {error: 'usuario o email incorrecto', user: {username: user, password: pass},access: false}
    }
}