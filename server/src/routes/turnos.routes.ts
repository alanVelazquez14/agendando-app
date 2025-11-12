import { Router } from 'express';
import { getTurnos } from '../controllers/turnos.controller.js';

const router = Router();
router.get('/', getTurnos);

export default router;
