import mongoose, { Schema } from "mongoose";

const produtoschema = new Schema({
  nome: String,
  marca: String,
  date: {
    type: Date,
    default: Date.now,
  },
});

const produto = mongoose.model("produto", produtoschema);

//produto.create({ nome: "Notebook", marca: "Dell" });

produto.find({}).then((produto) => {
  console.log(produto);
});

export default produto;
