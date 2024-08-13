import { modifyTarjetaModel } from "../../models/tarjetas/index.js";

export const modifyTarjetaController = async (req, res, next) => {
  try {
    // sacar la tarjeta a tratar del body
    const { tarjetaNumero } = req.body;
    // modificamos el estado en la bbdd
    const tarjetas = await modifyTarjetaModel(tarjetaNumero);

    // responder con el resultado
    res.status(200).send({
      status: "Ok",
      message: "Tarjeta devuelta",
      data: { tarjetas },
    });
  } catch (error) {
    next(error);
  }
};
