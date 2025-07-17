import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import users from '../models/userModel.js';

const JWT_SECRET = process.env.JWT_SECRET || 'supersecretkey';
const JWT_EXPIRES_IN = process.env.JWT_EXPIRES_IN || '1h';

const AuthController = {
  login: async (req, res) => {
    const { email, password } = req.body;
    const user = users.find(u => u.email === email);
    if (!user) return res.status(401).json({ message: 'Invalid credentials' });
    const valid = await bcrypt.compare(password, user.password);
    if (!valid) return res.status(401).json({ message: 'Invalid credentials' });
    const payload = {
      userId: user.id,
      role: user.role
    };
    const token = jwt.sign(payload, JWT_SECRET, { expiresIn: JWT_EXPIRES_IN });
    res.json({ token });
  },
  logout: (req, res) => {
    res.json({ message: 'Logged out successfully' });
  },
};

export default AuthController; 