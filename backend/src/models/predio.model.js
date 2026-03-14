import { db } from "../../config/db.js";

const PredioModel = {
  findAll: async () => {
    const sql = "SELECT * FROM predio";
    const [rows] = await db.query(sql);
    return rows;
  },
  findById: async (id) => {
    const sql = "SELECT * FROM predio WHERE identificacion = ?";
    const [rows] = await db.query(sql, [id]);
    return rows;
  },
  create: async (data) => {
    const sql = "INSERT INTO predio SET ?";
    const [rows] = await db.query(sql, [data]);
    return rows;
  },
  update: async (data, id) => {
    const sql = "UPDATE predio SET ? WHERE identificacion = ?";
    const [rows] = await db.query(sql, [data, id]);
    return rows;
  },
  delete: async (id) => {
    const sql = "DELETE FROM predio WHERE identificacion = ?";
    const [rows] = await db.query(sql, [id]);
    return rows;
  },
};

export default PredioModel