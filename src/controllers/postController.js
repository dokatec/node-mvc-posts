import post from "../models/post.js";

export async function index(request, response) {
  await post.find({}).then((post) => {
    return response.render("index", { post });
  });
}

export async function create(request, response) {
  const { titulo, mensagem } = request.body;

  await post.create({
    titulo,
    mensagem,
  });
  return response.redirect("/");
}
