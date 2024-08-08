import { insertParkingModel } from "../../models/parking/index.js";
import { dateFormat } from "../../utils/formatDate.js";
import { sentParkingEmailUtil } from "../../utils/sendParkingEmailUtil.js";

export const insertParkingController = async (req, res, next) => {
  try {
    const { plaza, email, nombre, fecha } = req.body;

    const idUsoParking = crypto.randomUUID();
    // Obtener tarjetas.
    const [result] = await insertParkingModel(
      idUsoParking,
      plaza,
      email,
      nombre,
      fecha
    );

    // const date = formatDate(fecha);
    const date = dateFormat(fecha);

    const asunto = "Confirmacion Plaza reservada en KRUK";

    const texto = `<p>Estimado/a ${nombre} ,</p> <p>Nos complace confirmar la reserva de su plaza de parking para el día <strong>${date} </strong>. Le asignamos la plaza ${plaza} <p>Detalles de la reserva:</p>  <ul>   <li><strong>Fecha:</strong> ${date}</li>       <li><strong>Ubicación:</strong> calle xxxxxxxxx </li>    </ul>        <p>Si tiene alguna pregunta o necesita realizar algún cambio en su reserva, no dude en ponerse en contacto con nosotros.</p>    <p>Muchas Gracias <p>Atentamente,</p>    <p> Yago <br>Conserjería<br>      KRUK España<br>       XXXXXXX<br>     XXXXXXXXXXX </p>`;

    sentParkingEmailUtil(email, asunto, texto);
    // responder con los tarjetas
    res.status(200).send({
      status: "Ok",
      message: `Plaza ${plaza} asignada correctamente`,
      data: { result },
    });
  } catch (error) {
    next(error);
  }
};
