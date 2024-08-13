import { getPool } from "../../db/getPool.js";
export const modifyTarjetaModel = async (tarjetaNumero) => {
  try {
    // Crear la conexión a la base de datos.
    const pool = await getPool();

    await pool.query(
      `Update tarjetas SET estado = "devuelto" , fechaDevolucion = CURRENT_TIMESTAMP WHERE tarjetaNumero = ? `,
      [tarjetaNumero]
    );
    const result = await pool.query(
      `UPDATE tarjetasEstado SET estado = "disponible"  WHERE tarjetaNumero = ? `,
      [tarjetaNumero]
    );

    return result;
  } catch (error) {
    throw error;
  }
};
