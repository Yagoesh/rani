import { getAllIncidenciasModel } from "../../models/incidencias/index.js";

export const getAllIncidenciasController = async (req, res, next) => {
  try {
    const [result] = await getAllIncidenciasModel();

    res.status(200).send({
      status: "Ok",
      message: "Servicios Incidencias obtenidos correctamente",
      data: { result },
    });
  } catch (error) {
    next(error);
  }
};
