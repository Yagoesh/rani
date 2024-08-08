import { ParkingsDisponibleModel } from "../../models/parking/index.js";

export const getParkingDisponiblesController = async (req, res, next) => {
  try {
    const { fecha } = req.params;
    console.log(req.body + "🚀");
    // Obtener tarjetas.
    const [parkings] = await ParkingsDisponibleModel(fecha);

    // responder con los tarjetas
    res.status(200).send({
      status: "Ok",
      message: "Todas las parkings disponibles obtenidos correctamente",
      data: { parkings },
    });
  } catch (error) {
    next(error);
  }
};
