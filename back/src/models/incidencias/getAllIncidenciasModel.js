import { getPool } from "../../db/getPool.js";
export const getAllIncidenciasModel = async () => {
  try {
    // Crear la conexión a la base de datos.
    const pool = await getPool();

    // Obtener las parking.
    const result = await pool.query(`SELECT * FROM incidencias`);

    return result;
  } catch (error) {
    throw error;
  }
};
