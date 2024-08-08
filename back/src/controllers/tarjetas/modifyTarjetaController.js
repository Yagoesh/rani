import { modifyTarjetaModel } from "../../models/tarjetas/index.js";

export const modifyTarjetaController = async (req, res, next) => {
  try {
    const { tarjetaNumero } = req.body;
    // Obtener tarjetas.
    const tarjetas = await modifyTarjetaModel(tarjetaNumero);

    // responder con los tarjetas
    res.status(200).send({
      status: "Ok",
      message: "Tarjeta devuelta",
      data: { tarjetas },
    });
  } catch (error) {
    next(error);
  }
};
