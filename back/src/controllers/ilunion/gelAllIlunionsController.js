import { gelAllIlunionModel } from "../../models/ilunion/index.js";

export const gelAllIlunionsController = async (req, res, next) => {
  try {
    const [result] = await gelAllIlunionModel();

    // responder con los tarjetas
    res.status(200).send({
      status: "Ok",
      message: "Servicios Ilunion obtenidos correctamente",
      data: { result },
    });
  } catch (error) {
    next(error);
  }
};
