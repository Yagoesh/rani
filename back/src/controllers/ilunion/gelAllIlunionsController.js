import { gelAllIlunionModel } from "../../models/ilunion/index.js";

export const gelAllIlunionsController = async (req, res, next) => {
  try {
    // sacar el la bbdd todos los servicios Ilunion
    const [result] = await gelAllIlunionModel();

    // responder con los resultados
    res.status(200).send({
      status: "Ok",
      message: "Servicios Ilunion obtenidos correctamente",
      data: { result },
    });
  } catch (error) {
    next(error);
  }
};
