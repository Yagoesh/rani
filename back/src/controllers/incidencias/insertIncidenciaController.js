import { insertIncidenciaModel } from "../../models/incidencias/index.js";

export const insertIncidenciaController = async (req, res, next) => {
  try {
    // sacamos del body los inputs
    const { servicio, observaciones } = req.body;
    // introducimos la incidencia en la bbdd
    const [result] = await insertIncidenciaModel(servicio, observaciones);

    // responder con el resultado
    res.status(200).send({
      status: "Ok",
      message: "Incidencia añadida correctamente",
      data: { result },
    });
  } catch (error) {
    next(error);
  }
};
