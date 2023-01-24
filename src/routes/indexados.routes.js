const express = require("express");
const patrimonioController = require("../controllers");


const routerIndexados = express.Router();

routerIndexados
  .get("/indexados",patrimonioController.pegarIndexados)
  .post("/indexados",patrimonioController.postarIndexados)
  
module.exports = routerIndexados;