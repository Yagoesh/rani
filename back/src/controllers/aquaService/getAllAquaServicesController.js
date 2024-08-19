import { getAllAquaServicesModel } from "../../models/aquaService/index.js";

export const getAllAquaServicesController = async (req, res, next) => {
  try {
    // sacar de la bbdd todos los servicios AquaService
    const [result] = await getAllAquaServicesModel();

    // responder con el resultado
    res.status(200).send({
      status: "Ok",
      message: "Servicios AquaService obtenidos correctamente",
      data: { result },
    });
  } catch (error) {
    next(error);
  }
};
