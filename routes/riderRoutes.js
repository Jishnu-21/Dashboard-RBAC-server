import express from 'express';
import RiderController from '../controllers/RiderController.js';
import { authenticateJWT, authorizeRoles } from '../middleware/authMiddleware.js';
const router = express.Router();

router.get('/', authenticateJWT, RiderController.getRiders);
router.put('/:id', authenticateJWT, authorizeRoles(['Editor', 'Admin']), RiderController.editRider);
router.delete('/:id', authenticateJWT, authorizeRoles(['Admin']), RiderController.deleteRider);

export default router; 