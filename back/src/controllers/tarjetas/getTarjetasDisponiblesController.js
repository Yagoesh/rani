import { tarjetasDisponiblesModel } from "../../models/tarjetas/index.js";

export const getTarjetasDisponiblesController = async (req, res, next) => {
  try {
    // Obtener tarjetas.
    const [tarjetas] = await tarjetasDisponiblesModel();
    console.log(tarjetas);
    // responder con los tarjetas
    res.status(200).send({
      status: "Ok",
      message: "Todas las tarjetas disponibles obtenidos correctamente",
      data: { tarjetas },
    });
  } catch (error) {
    next(error);
  }
};
