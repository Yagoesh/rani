// Importamos las dependencias.
import express from "express";

// Importamos los controladores.
import {
  gelAllIlunionsController,
  insertIlunionController,
} from "../controllers/ilunion/index.js";

// Creamos un router.
export const ilunionRouter = express.Router();

// obtener todas las ilunion usadas
ilunionRouter.get("/ilunion/all", gelAllIlunionsController);

// Introducir una ilunion en uso:
ilunionRouter.post("/ilunion/insert", insertIlunionController);
