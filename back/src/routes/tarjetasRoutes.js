// Importamos las dependencias.
import express from "express";

import {
  getAllTarjetasController,
  getTarjetasDisponiblesController,
  insertTarjetaUsoController,
  modifyTarjetaController,
} from "../controllers/tarjetas/index.js";

// Creamos un router.
export const tarjetasRouter = express.Router();
// obtener todas las tarjetas usadas
tarjetasRouter.get("/tarjetas/all", getAllTarjetasController);

// obtener todas las tarjetas disponibles
tarjetasRouter.get("/tarjetas/disponibles", getTarjetasDisponiblesController);

// Introducir una tarjeta en uso:
tarjetasRouter.post("/tarjetas/insert", insertTarjetaUsoController);

// modificar una tarjetas:
tarjetasRouter.put("/tarjetas/modify", modifyTarjetaController);
