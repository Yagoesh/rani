import { aquaServiceUsoModel } from "../../models/aquaService/index.js";

export const aquaServiceUsoController = async (req, res, next) => {
  try {
    const { servicio, observaciones } = req.body;
    const [result] = await aquaServiceUsoModel(servicio, observaciones);

    // responder con los tarjetas
    res.status(200).send({
      status: "Ok",
      message: "Servicio AquaService añadido correctamente",
      data: { result },
    });
  } catch (error) {
    next(error);
  }
};
