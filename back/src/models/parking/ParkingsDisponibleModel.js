import { getPool } from "../../db/getPool.js";
export const ParkingsDisponibleModel = async (fecha) => {
  try {
    // Crear la conexión a la base de datos.
    const pool = await getPool();
    // Obtener las parking.
    const parking = await pool.query(
      `SELECT pe.plaza FROM parkingEstado pe LEFT JOIN parking p ON pe.plaza = p.plaza AND p.fecha = ? WHERE p.idUsoParking IS NULL`,
      [fecha]
    );

    return parking;
  } catch (error) {
    throw error;
  }
};
