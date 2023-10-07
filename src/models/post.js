import mongoose, { Schema } from "mongoose";

const postschema = new Schema({
  titulo: String,
  mensagem: String,
  date: {
    type: Date,
    default: Date.now,
  },
});

const post = mongoose.model("post", postschema);

/** 
post.create({
  titulo: "meu novo post",
  mensagem: "estudando node com mongoose para o blog post",
});
*/

/** 
produto.find({}).then((produto) => {
  console.log(produto);
});
*/

export default post;
