import { getPool } from "../../db/getPool.js";
export const tarjetasDisponiblesModel = async () => {
  try {
    // Crear la conexión a la base de datos.
    const pool = await getPool();

    // Obtener las tarjetas.
    const tarjetas = await pool.query(
      `SELECT * FROM tarjetasEstado WHERE estado = "disponible" `
    );

    return tarjetas;
  } catch (error) {
    throw error;
  }
};
