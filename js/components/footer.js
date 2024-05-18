const footer = {
    template: `<p>
        Este es el footer {{mensaje}}
    </p>`,
    data(){
        return {
            mensaje: "mensaje footer"
        }
    }
}

module.exports = footer