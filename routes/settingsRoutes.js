import express from 'express';
import SettingsController from '../controllers/SettingsController.js';
import { authenticateJWT, authorizeRoles } from '../middleware/authMiddleware.js';
const router = express.Router();

router.get('/', authenticateJWT, authorizeRoles(['Admin']), SettingsController.getSettings);

export default router; 