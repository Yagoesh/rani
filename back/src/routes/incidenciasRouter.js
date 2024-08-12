// Importamos las dependencias.
import express from "express";

// Importamos los controladores.

import {
  getAllIncidenciasController,
  insertIncidenciaController,
} from "../controllers/incidencias/index.js";

// Creamos un router.
export const incidenciasRouter = express.Router();

// obtener todas las incidencias usadas
incidenciasRouter.get("/incidencias/all", getAllIncidenciasController);

// Introducir una incidencias en uso:
incidenciasRouter.post("/incidencias/insert", insertIncidenciaController);
