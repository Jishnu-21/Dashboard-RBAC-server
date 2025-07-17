import users from '../models/userModel.js';

const UserController = {
  getUsers: (req, res) => {
    res.json(users.map(u => ({ id: u.id, email: u.email, role: u.role })));
  },
  editUser: (req, res) => {
    const { id } = req.params;
    const { role } = req.body;
    const user = users.find(u => u.id === id);
    if (!user) return res.status(404).json({ message: 'User not found' });
    user.role = role;
    res.json({ message: 'User updated', user });
  }
};

export default UserController; 