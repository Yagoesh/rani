// Importamos las dependencias.
import express from "express";
import {
  gelAllParkingsController,
  getParkingDisponiblesController,
  insertParkingController,
} from "../controllers/parking/index.js";

// Creamos un router.
export const parkingRouter = express.Router();

// obtener todas las parking usadas
parkingRouter.get("/parking/all", gelAllParkingsController);

// obtener todas las tarjetas disponibles
parkingRouter.get(
  "/parking/disponibles/:fecha",
  getParkingDisponiblesController
);

// Introducir una parking en uso:
parkingRouter.post("/parking/insert", insertParkingController);
