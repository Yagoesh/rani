import { insertTarjetaModel } from "../../models/tarjetas/index.js";

export const insertTarjetaUsoController = async (req, res, next) => {
  try {
    const { tarjetaNumero, nombre, departamento } = req.body;

    //  para el idUsoTarjeta
    const idUsoTarjeta = crypto.randomUUID();

    // Introducir tarjeta
    const result = await insertTarjetaModel(
      idUsoTarjeta,
      tarjetaNumero,
      nombre,
      departamento
    );

    // responder con el resultado
    res.status(200).send({
      status: "Ok",
      message: "Tarjeta entregada correctamente",
      data: { result },
    });
  } catch (error) {
    next(error);
  }
};
