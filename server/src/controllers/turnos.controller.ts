import { Request, Response } from "express";
import pool from "../database/db.js";

export const getTurnos = async (req: Request, res: Response) => {
  try {
    const result = await pool.query(`
      SELECT 
        t.id,
        t.rubro,
        t.nombre,
        t.fecha,
        t.hora,
        t.estado,
        t.comentario,
        t.telefono,
        t.sena,
        t.profesional_id,
        p.nombre AS profesional_nombre
      FROM turnos t
      LEFT JOIN profesionales p ON t.profesional_id = p.id
      ORDER BY t.fecha, t.hora;
    `);

    res.status(200).json(result.rows);
  } catch (error) {
    console.error("Error obteniendo turnos:", error);
    res.status(500).json({ message: "Error al obtener los turnos" });
  }
};
