// Importamos las dependencias.
import express from "express";
import { tarjetasRouter } from "./tarjetasRoutes.js";
import { parkingRouter } from "./parkingRoutes.js";
import { ilunionRouter } from "./ilunionRouter.js";
import { aquaServiceRouter } from "./aquaServiceRouter.js";
import { incidenciasRouter } from "./incidenciasRouter.js";
import { jomarRouter } from "./jomarRouter.js";

// Creamos un router y lo exportamos.
export const router = express.Router();

router.use(tarjetasRouter);

router.use(parkingRouter);

router.use(ilunionRouter);

router.use(aquaServiceRouter);

router.use(incidenciasRouter);

router.use(jomarRouter);
