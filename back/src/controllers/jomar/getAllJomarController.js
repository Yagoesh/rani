import { getAllJomarModel } from "../../models/jomar/index.js";

export const getAllJomarController = async (req, res, next) => {
  try {
    // sacar el la bbdd todos los servicios Ilunion
    const [result] = await getAllJomarModel();

    // responder con los resultados
    res.status(200).send({
      status: "Ok",
      message: "Servicios Jomar obtenidos correctamente",
      data: { result },
    });
  } catch (error) {
    next(error);
  }
};
