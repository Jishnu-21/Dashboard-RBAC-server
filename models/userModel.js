import bcrypt from 'bcryptjs';

const users = [
  {
    id: '1',
    email: 'admin@example.com',
    password: bcrypt.hashSync('admin123', 10),
    role: 'Admin'
  },
  {
    id: '2',
    email: 'editor@example.com',
    password: bcrypt.hashSync('editor123', 10),
    role: 'Editor'
  },
  {
    id: '3',
    email: 'viewer@example.com',
    password: bcrypt.hashSync('viewer123', 10),
    role: 'Viewer'
  }
];

export default users; 