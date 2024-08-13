import { getAllParkingsModel } from "../../models/parking/index.js";

export const gelAllParkingsController = async (req, res, next) => {
  try {
    // Obtener parkings
    const [parkings] = await getAllParkingsModel();

    // responder con los parkings
    res.status(200).send({
      status: "Ok",
      message: "Todos los parkings obtenidos correctamente",
      data: { parkings },
    });
  } catch (error) {
    next(error);
  }
};
