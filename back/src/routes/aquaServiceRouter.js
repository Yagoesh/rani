// Importamos las dependencias.
import express from "express";

import {
  gelAllAquaServicesController,
  aquaServiceUsoController,
} from "../controllers/aquaService/index.js";

// Creamos un router.
export const aquaServiceRouter = express.Router();

// obtener todas las aquaService usadas
aquaServiceRouter.get("/aquaService/all", gelAllAquaServicesController);

// Introducir una aquaService en uso:
aquaServiceRouter.post("/aquaService/insert", aquaServiceUsoController);
