// Importamos las dependencias.
import express from "express";

// Importamos los controladores.
import {
  getAllJomarController,
  insertJomarController,
} from "../controllers/jomar/index.js";

// Creamos un router.
export const jomarRouter = express.Router();

// obtener todas las ilunion usadas
jomarRouter.get("/jomar/all", getAllJomarController);

// Introducir una ilunion en uso:
jomarRouter.post("/jomar/insert", insertJomarController);
