import { Request, Response } from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import pool from "../database/db.js";

export const register = async (req: Request, res: Response) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password)
      return res.status(400).json({ message: "Faltan datos" });

    const exists = await pool.query("SELECT * FROM users WHERE email = $1", [
      email,
    ]);

    if (exists.rows.length > 0)
      return res.status(400).json({ message: "Email ya registrado" });

    const hashed = await bcrypt.hash(password, 10);

    await pool.query(
      "INSERT INTO users (name, email, password) VALUES ($1, $2, $3)",
      [name, email, hashed]
    );

    res.status(201).json({ message: "Usuario registrado" });
  } catch (err: any) {
    console.error(err);
    res.status(500).json({ message: "Error en el servidor" });
  }
};

export const login = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    if (!email || !password)
      return res.status(400).json({ message: "Faltan datos" });

    // 1. Buscar usuario
    const result = await pool.query("SELECT * FROM users WHERE email = $1", [
      email,
    ]);

    if (result.rows.length === 0)
      return res.status(400).json({ message: "Credenciales inválidas" });

    const user = result.rows[0];

    // 2. Comparar contraseña
    const match = await bcrypt.compare(password, user.password);

    if (!match)
      return res.status(400).json({ message: "Credenciales inválidas" });

    // 3. Generar token
    const token = jwt.sign(
      { userId: user.id },
      process.env.JWT_SECRET as string,
      { expiresIn: "1d" }
    );

    return res.json({
      token,
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
      },
    });
  } catch (err) {
    console.error("LOGIN ERROR:", err);
    return res.status(500).json({ message: "Error en el servidor" });
  }
};
