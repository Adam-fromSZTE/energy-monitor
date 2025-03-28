import { Router } from 'express';
import { createConsumption, getConsumptions } from '../controllers/consumptionController.js';

const router = Router();

router.get('/', getConsumptions);
router.post('/', createConsumption);

export default router;
