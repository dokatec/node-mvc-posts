import { Router } from "express";
import { index, create } from "../src/controllers/postController.js";

const routes = new Router();

routes.get("/", index);
routes.post("/add", create);

export default routes;
