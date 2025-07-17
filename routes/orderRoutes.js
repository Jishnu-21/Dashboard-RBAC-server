import express from 'express';
import OrderController from '../controllers/OrderController.js';
import { authenticateJWT, authorizeRoles } from '../middleware/authMiddleware.js';
const router = express.Router();

router.get('/', authenticateJWT, OrderController.getOrders);
router.put('/:id', authenticateJWT, authorizeRoles(['Editor', 'Admin']), OrderController.editOrder);

export default router; 