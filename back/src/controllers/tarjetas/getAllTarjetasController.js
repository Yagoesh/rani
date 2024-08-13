import { getAllTarjetasModel } from "../../models/tarjetas/index.js";

export const getAllTarjetasController = async (req, res, next) => {
  try {
    // Obtener tarjetas.
    const tarjetas = await getAllTarjetasModel();
    // responder con los tarjetas
    res.status(200).send({
      status: "Ok",
      message: "Todas las tarjetas obtenidos correctamente",
      data: { tarjetas },
    });
  } catch (error) {
    next(error);
  }
};
