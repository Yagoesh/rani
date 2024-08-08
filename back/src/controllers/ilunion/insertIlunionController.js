import { insertIlunionModel } from "../../models/ilunion/index.js";

export const insertIlunionController = async (req, res, next) => {
  try {
    const { servicio, observaciones } = req.body;
    const [result] = await insertIlunionModel(servicio, observaciones);

    // responder con los tarjetas
    res.status(200).send({
      status: "Ok",
      message: "Servicio Ilunion añadido correctamente",
      data: { result },
    });
  } catch (error) {
    next(error);
  }
};
