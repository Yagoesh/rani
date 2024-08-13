import { getAllIncidenciasModel } from "../../models/incidencias/index.js";

export const getAllIncidenciasController = async (req, res, next) => {
  try {
    // sacamos todas las incidencias de la bbdd
    const [result] = await getAllIncidenciasModel();
    // respondemos con el resultado
    res.status(200).send({
      status: "Ok",
      message: " Incidencias obtenidas correctamente",
      data: { result },
    });
  } catch (error) {
    next(error);
  }
};
