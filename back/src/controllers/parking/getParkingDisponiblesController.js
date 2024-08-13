import { ParkingsDisponibleModel } from "../../models/parking/index.js";

export const getParkingDisponiblesController = async (req, res, next) => {
  try {
    // sacamos la fecha de params
    const { fecha } = req.params;

    // Obtener plazas disponibles esa fecha
    const [parkings] = await ParkingsDisponibleModel(fecha);

    // responder con las plazas
    res.status(200).send({
      status: "Ok",
      message: "Todas las parkings disponibles obtenidas correctamente",
      data: { parkings },
    });
  } catch (error) {
    next(error);
  }
};
