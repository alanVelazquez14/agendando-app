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
        t.seña,
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

export const createTurno = async (req: Request, res: Response) => {
  try {
    const {
      rubro,
      nombre,
      fecha,
      hora,
      estado,
      comentario,
      telefono,
      seña,
      profesional_id,
    } = req.body;

    if (!rubro || !nombre || !fecha || !hora || !estado) {
      return res
        .status(400)
        .json({
          message:
            "Faltan campos obligatorios: rubro, nombre, fecha, hora o estado",
        });
    }

    const result = await pool.query(
      `
      INSERT INTO turnos (
        rubro, nombre, fecha, hora, estado, comentario, telefono, seña, profesional_id
      )
      VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)
      RETURNING *;
      `,
      [
        rubro,
        nombre,
        fecha,
        hora,
        estado,
        comentario || null,
        telefono || null,
        seña || false,
        profesional_id || null,
      ]
    );

    console.log("✅ Turno creado correctamente:", result.rows[0]);
    return res.status(201).json(result.rows[0]);
  } catch (error) {
    console.error("Error creando turno:", error);
    res.status(500).json({ message: "Error al crear el turno" });
  }
};
