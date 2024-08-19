import { getAllIlunionModel } from "../../models/ilunion/index.js";

export const getAllIlunionsController = async (req, res, next) => {
  try {
    // sacar el la bbdd todos los servicios Ilunion
    const [result] = await getAllIlunionModel();

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
