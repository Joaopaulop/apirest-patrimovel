const mongoose = require("mongoose");
const indexadosSchema = mongoose.Schema({
    indexadosId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "patrimonio",
        required: true,
      },
  });

  const indexadosModel = mongoose.model("indexados", indexadosSchema);

module.exports = indexadosModel;