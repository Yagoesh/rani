import { getPool } from "../../db/getPool.js";
export const insertParkingModel = async (
  idUsoParking,
  plaza,
  email,
  nombre,
  fecha
) => {
  try {
    // Crear la conexión a la base de datos.
    const pool = await getPool();

    // Obtener las parking.
    const parking = await pool.query(
      `INSERT INTO parking (idUsoParking , plaza ,email ,  nombre , fecha) VALUES (?,?,?,? , ?) `,
      [idUsoParking, plaza, email, nombre, fecha]
    );
    await pool.query(
      ` UPDATE parkingEstado SET estado = "noDisponible" WHERE plaza = ?`,
      [plaza]
    );

    return parking;
  } catch (error) {
    throw error;
  }
};
