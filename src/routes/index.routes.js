const express = require("express")
const routerIndexados = require("./indexados.routes.js")
const routerPatrimonio = require("./patrimonio.routes.js")


const routes=(app)=>{
    app.use(
        "/api",
        express.urlencoded({ extended: false }), 
        express.json(),
        routerPatrimonio,
        routerIndexados,
    )
}

module.exports = routes