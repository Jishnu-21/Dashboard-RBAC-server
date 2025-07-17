import express from 'express';
import UserController from '../controllers/UserController.js';
import { authenticateJWT, authorizeRoles } from '../middleware/authMiddleware.js';
const router = express.Router();

router.get('/', authenticateJWT, UserController.getUsers);
router.put('/:id', authenticateJWT, authorizeRoles(['Editor', 'Admin']), UserController.editUser);

export default router; 