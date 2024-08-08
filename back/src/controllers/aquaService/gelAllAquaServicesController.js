import { gelAllAquaServicesModel } from "../../models/aquaService/index.js";

export const gelAllAquaServicesController = async (req, res, next) => {
  try {
    const [result] = await gelAllAquaServicesModel();

    // responder con los tarjetas
    res.status(200).send({
      status: "Ok",
      message: "Servicios AquaService obtenidos correctamente",
      data: { result },
    });
  } catch (error) {
    next(error);
  }
};
