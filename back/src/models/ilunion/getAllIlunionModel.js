import { getPool } from "../../db/getPool.js";
export const gelAllIlunionModel = async () => {
  try {
    // Crear la conexión a la base de datos.
    const pool = await getPool();

    const result = await pool.query(`SELECT * FROM ilunion`);

    return result;
  } catch (error) {
    throw error;
  }
};
