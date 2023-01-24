const mongoose = require("mongoose");
const patrimonioSchema = mongoose.Schema({
    localizacao:{type:String, require:true },
    descricao:{type:String, require:true },
    QuantidadeObservacao:{type:Number,require:false},
    QuantidadeIndexados:{type:Number,require:false}
  });

  const patrimonioModel = mongoose.model("patrimonio", patrimonioSchema);

module.exports = patrimonioModel;