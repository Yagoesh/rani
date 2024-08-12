import { MYSQL_DATABASE } from "../../env.js";
import { getPool } from "./getPool.js";
const initDb = async () => {
  try {
    // Obtener el pool de conexiones
    const pool = await getPool();

    console.log(MYSQL_DATABASE);

    // Poner en uso la base de datos
    console.log("Poniendo en uso la base de datos 📑");
    await pool.query(`USE ${MYSQL_DATABASE}`);
    console.log("Base de datos en uso ✅ 📑");

    // Eliminar las tablas ratings , responses , consultations , doctors_desciplines , desciplines , doctors , users si existen
    console.log(
      "Eliminando las tablas tarjetas , tarjetasEstado , parking, parkingEstado ,  ilunion ,  aquaService si existen "
    );
    await pool.query(
      "DROP TABLE IF EXISTS tarjetas , tarjetasEstado , parking, parkingEstado ,  ilunion , aquaService"
    );
    console.log("Tablas eliminadas ✅ 🗑");

    // Crear la tabla tarjetas
    console.log("Creando la tabla tarjetas 📑");
    await pool.query(`
    CREATE TABLE tarjetas (
    idUsoTarjeta VARCHAR(100) PRIMARY KEY,
  tarjetaNumero VARCHAR(50) NOT NULL,
  nombre VARCHAR(100) NOT NULL,
  departamento VARCHAR(255) NOT NULL,
  fechaEntrega DATETIME DEFAULT CURRENT_TIMESTAMP,
  fechaDevolucion DATETIME DEFAULT NULL,
  estado ENUM('entregado', 'devuelto') DEFAULT 'entregado'
);
    `);
    console.log("Tabla tarjetas creada ✅ 📑");

    // Crear la tabla tarjetasEstado
    console.log("Creando la tabla tarjetasEstado 📑");
    await pool.query(`
    CREATE TABLE tarjetasEstado (
  tarjetaNumero VARCHAR(50),
  estado ENUM('disponible', 'noDisponible')
);
    `);
    console.log("Tabla tarjetasEstado creada ✅ 📑");

    // Crear la tabla parking
    console.log("Creando la tabla parking 📑");
    await pool.query(`
    CREATE TABLE parking (
    idUsoParking VARCHAR(100)PRIMARY KEY ,
  plaza VARCHAR(50) NOT NULL ,
  email VARCHAR(100) DEFAULT NULL,
  nombre VARCHAR(255) NOT NULL,
  fechaReserva DATETIME DEFAULT CURRENT_TIMESTAMP,
  fecha DATETIME NOT NULL , 
  UNIQUE (plaza, fecha)
)
    `);
    console.log("Tabla parking creada ✅ 📑");

    // Crear la tabla parkingEstado
    console.log("Creando la tabla parkingEstado 📑");
    await pool.query(`
    CREATE TABLE parkingEstado (
  plaza VARCHAR(50),
  estado ENUM('disponible', 'noDisponible')
);
    `);
    console.log("Tabla parkingEstado creada ✅ 📑");

    // Crear la tabla ilunion
    console.log("Creando la tabla ilunion 📑");
    await pool.query(`
    CREATE TABLE ilunion (
    idIlunion INT AUTO_INCREMENT PRIMARY KEY,
  fecha DATETIME DEFAULT CURRENT_TIMESTAMP,
  servicio VARCHAR(100),
  observaciones VARCHAR(100)
);
    `);
    console.log("Tabla Ilunion creada ✅ 📑");

    // Crear la tabla AquaService
    console.log("Creando la tabla aquaService 📑");
    await pool.query(`
        CREATE TABLE aquaService (
      fecha DATETIME DEFAULT CURRENT_TIMESTAMP,
      servicio VARCHAR(100),
      observaciones VARCHAR(100)
    );
        `);
    console.log("Tabla aquaService creada ✅ 📑");

    // Crear la tabla Incidencias
    console.log("Creando la tabla incidencias 📑");
    await pool.query(`
        CREATE TABLE incidencias (
      fecha DATETIME DEFAULT CURRENT_TIMESTAMP,
      servicio VARCHAR(100),
      observaciones VARCHAR(100)
    );
        `);
    console.log("Tabla incidencias creada ✅ 📑");

    console.log("Base de datos inicializada 🚀");
    process.exit(0);
  } catch (error) {
    process.exit(1);
  }
};

initDb();
