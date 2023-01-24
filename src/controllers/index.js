const indexadosModel = require("../models/indexados")
const patrimonioModel = require("../models/Patrimonio")

class patrimonioController{
    static async pegarPatrimonio(req,res){
        try {
            const getAllData = await patrimonioModel.find()
            res.status(200).send(getAllData)
        } catch (error) {
            res.status(500).send("Não foi possível buscar o patrimonio")
        }
    }

    static async postarPatrimonio(req,res){
        const data = {
            descricao: req.body?.descricao,
            localizacao: req.body?.localizacao,
            QuantidadeObservacao: req.body?.QuantidadeObservacao,
            QuantidadeIndexados:req.body?.QuantidadeIndexados
        }
        const patrimonioRegistra = new patrimonioModel(data)
        try {
            await patrimonioRegistra.save()
            res.status(201).send("Patrimonio cadastrado")
        } catch (error) {
            res.status(500).send("Erro ao cadastrar patrimonio")
        }
    }

    static async postarIndexados(req,res){
        const data = {
            indexadosId : req.body?.indexadosId
        }
        const patrimonioRegistra = new indexadosModel(data)
        try {
            await patrimonioRegistra.save()
            res.status(201).send("Patrimonio indexados!")
        } catch (error) {
            res.status(500).send("Erro ao cadastrar indexados")
        }
    }


    static async pegarIndexados(req,res){
        try {
            const indexadosAll = await indexadosModel
              .find()
              .populate({ path: "indexadosId", select: "_id localizacao descricao" })
              .exec();
            res.status(200).send(indexadosAll);
          } catch (error) {
            res.status(500).send("Não foi possível buscar o patrimonio indexado") 
          }
    }
}

module.exports = patrimonioController

