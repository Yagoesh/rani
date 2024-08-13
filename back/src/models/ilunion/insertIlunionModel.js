import { getPool } from "../../db/getPool.js";
export const insertIlunionModel = async (servicio, observaciones) => {
  try {
    // Crear la conexión a la base de datos.
    const pool = await getPool();

    const result = await pool.query(
      `INSERT INTO ilunion (servicio , observaciones) VALUES (?, ?) `,
      [servicio, observaciones]
    );

    return result;
  } catch (error) {
    throw error;
  }
};
