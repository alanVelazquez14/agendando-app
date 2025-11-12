import { Router } from 'express';
import { createTurno, getTurnos } from '../controllers/turnos.controller.js';

const router = Router();
router.get('/', getTurnos);
router.post("/", createTurno);

export default router;
