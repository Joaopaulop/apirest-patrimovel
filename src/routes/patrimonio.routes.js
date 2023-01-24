const express = require("express");
const patrimonioController = require("../controllers");


const routerPatrimonio = express.Router();

routerPatrimonio
  .get("/patrimonio",patrimonioController.pegarPatrimonio)
  .post("/patrimonio",patrimonioController.postarPatrimonio)
  
module.exports = routerPatrimonio;