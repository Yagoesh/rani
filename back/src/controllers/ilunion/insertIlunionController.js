import { insertIlunionModel } from "../../models/ilunion/index.js";

export const insertIlunionController = async (req, res, next) => {
  try {
    // sacamos del body los inputs
    const { servicio, observaciones } = req.body;
    // introducimos el servicio en la bbdd
    const [result] = await insertIlunionModel(servicio, observaciones);

    // responder con el resultado
    res.status(200).send({
      status: "Ok",
      message: "Servicio Ilunion añadido correctamente",
      data: { result },
    });
  } catch (error) {
    next(error);
  }
};
