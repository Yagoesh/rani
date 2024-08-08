import { getPool } from "../../db/getPool.js";
export const getAllTarjetasModel = async () => {
  try {
    console.log("nos metemos en el model");
    // Crear la conexión a la base de datos.
    console.log("creamos pool");

    const pool = await getPool();
    // Obtener las tarjetas.
    const [tarjetas] = await pool.query(`
    SELECT * FROM tarjetas;
`);
    console.log("el query se manda y nos dan las tarjetas :");
    console.log(tarjetas);

    return tarjetas;
  } catch (error) {
    throw error;
  }
};
