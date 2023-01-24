require("dotenv").config()

const express = require("express");
const cors = require("cors");
const db = require("./src/config/index.js");
const routes = require("./src/routes/index.routes.js");
const swaggerUI = require("swagger-ui-express");

var util= require('util');
var encoder = new util.TextEncoder('utf-8');


const app = express();
const PORT = process.env.PORT||8080

app.use(cors())
routes(app);
app.listen(PORT,()=>{
    console.log(`Servidor rodando na porta ${PORT}` ) 
})


db.on("error",console.error.bind("Houver um erro ao conectar o banco de dados"));



app.use("/", swaggerUI.serve, swaggerUI.setup(require("./swagger.json")));

db.once("open", ()=>{
    console.log("Conexão com banco de dados feita com sucesso");
})


module.exports = app