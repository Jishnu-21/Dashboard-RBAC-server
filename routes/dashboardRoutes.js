import express from 'express';
import DashboardController from '../controllers/DashboardController.js';
import { authenticateJWT } from '../middleware/authMiddleware.js';
const router = express.Router();

router.get('/', authenticateJWT, DashboardController.getDashboard);

export default router; 