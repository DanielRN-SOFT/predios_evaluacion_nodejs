import mysql from "mysql2/promise";
import dotenv from "dotenv";

dotenv.config();
let cnx;

try {
  cnx = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    port: process.env.DB_PORT,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
  });
  const conexion = await cnx.getConnection();
  console.log("Conexion a la base de datos");
  conexion.release();
} catch (error) {
  console.log(error);
}

export const db = cnx;
