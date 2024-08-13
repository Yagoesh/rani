import { getPool } from "../../db/getPool.js";
export const getAllTarjetasModel = async () => {
  try {
    // Crear la conexión a la base de datos.
    const pool = await getPool();
    const [tarjetas] = await pool.query(`SELECT * FROM tarjetas;`);

    return tarjetas;
  } catch (error) {
    throw error;
  }
};
