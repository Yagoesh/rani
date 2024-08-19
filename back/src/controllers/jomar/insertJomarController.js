import { insertJomarModel } from "../../models/jomar/index.js";

export const insertJomarController = async (req, res, next) => {
  try {
    // sacamos del body los inputs
    const { servicio, observaciones } = req.body;
    // introducimos el servicio en la bbdd
    const [result] = await insertJomarModel(servicio, observaciones);

    // responder con el resultado
    res.status(200).send({
      status: "Ok",
      message: "Servicio Jomar añadido correctamente",
      data: { result },
    });
  } catch (error) {
    next(error);
  }
};
