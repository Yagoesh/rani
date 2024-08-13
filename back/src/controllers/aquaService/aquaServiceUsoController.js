import { aquaServiceUsoModel } from "../../models/aquaService/index.js";

export const aquaServiceUsoController = async (req, res, next) => {
  try {
    // sacamos del body los dos inputs
    const { servicio, observaciones } = req.body;
    // introducimos servicio y observaciones en la bbdd
    const [result] = await aquaServiceUsoModel(servicio, observaciones);
    // enviamos el resultado
    res.status(200).send({
      status: "Ok",
      message: "Servicio AquaService añadido correctamente",
      data: { result },
    });
  } catch (error) {
    next(error);
  }
};
