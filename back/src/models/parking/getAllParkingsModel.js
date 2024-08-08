import { getPool } from "../../db/getPool.js";
export const getAllParkingsModel = async () => {
  try {
    // Crear la conexión a la base de datos.
    const pool = await getPool();

    // Obtener las parking.
    const parking = await pool.query(`SELECT * FROM parking  `);

    return parking;
  } catch (error) {
    throw error;
  }
};
