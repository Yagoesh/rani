import { getPool } from "../../db/getPool.js";
export const insertTarjetaModel = async (
  idUsoTarjeta,
  tarjetaNumero,
  nombre,
  departamento
) => {
  try {
    // Crear la conexión a la base de datos.
    const pool = await getPool();

    const [result] = await pool.query(
      `INSERT INTO tarjetas (idUsoTarjeta , tarjetaNumero, nombre , departamento) VALUES (?,?,?,?)`,
      [idUsoTarjeta, tarjetaNumero, nombre, departamento]
    );
    await pool.query(
      `Update tarjetasEstado SET estado = "noDisponible" WHERE tarjetaNumero = ? `,
      [tarjetaNumero]
    );

    return result;
  } catch (error) {
    throw error;
  }
};
