import { getPool } from "../../db/getPool.js";
export const insertIncidenciaModel = async (servicio, observaciones) => {
  try {
    // Crear la conexión a la base de datos.
    const pool = await getPool();

    // Obtener las parking.
    const result = await pool.query(
      `INSERT INTO incidencias (servicio , observaciones) VALUES (?, ?) `,
      [servicio, observaciones]
    );

    return result;
  } catch (error) {
    throw error;
  }
};
