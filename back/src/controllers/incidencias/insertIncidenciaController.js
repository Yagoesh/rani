import { insertIncidenciaModel } from "../../models/incidencias/index.js";

export const insertIncidenciaController = async (req, res, next) => {
  try {
    const { servicio, observaciones } = req.body;
    const [result] = await insertIncidenciaModel(servicio, observaciones);

    // responder con los tarjetas
    res.status(200).send({
      status: "Ok",
      message: "Servicio Incidencia añadido correctamente",
      data: { result },
    });
  } catch (error) {
    next(error);
  }
};
