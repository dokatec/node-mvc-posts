import express from "express";
import routes from "./src/routes.js";
import mongoose from "mongoose";
import bodyParser from "body-parser";

main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/post");
}

const app = express();

app.set(express.json());
app.set(express.urlencoded({ extended: false }));

app.set("view engine", "ejs");
app.set("views", "src/views");

app.use(express.static("src/public"));
app.use(bodyParser());
app.use(routes);

app.listen(3000, () => {
  console.log("Servidor Online");
});
