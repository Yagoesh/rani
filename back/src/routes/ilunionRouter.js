// Importamos las dependencias.
import express from "express";

// Importamos los controladores.
import {
  getAllIlunionsController,
  insertIlunionController,
} from "../controllers/ilunion/index.js";

// Creamos un router.
export const ilunionRouter = express.Router();

// obtener todas las ilunion usadas
ilunionRouter.get("/ilunion/all", getAllIlunionsController);

// Introducir una ilunion en uso:
ilunionRouter.post("/ilunion/insert", insertIlunionController);
