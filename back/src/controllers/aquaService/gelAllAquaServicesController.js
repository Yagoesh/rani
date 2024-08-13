import { gelAllAquaServicesModel } from "../../models/aquaService/index.js";

export const gelAllAquaServicesController = async (req, res, next) => {
  try {
    // sacar de la bbdd todos los servicios AquaService
    const [result] = await gelAllAquaServicesModel();

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
