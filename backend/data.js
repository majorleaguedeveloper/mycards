import bcrypt from 'bcryptjs';

export const users = [
  {
    name:"Kevin",
    email:"kevin@gmail.com",
    password: bcrypt.hashSync('123456'),
    isAdmin: true,
  },{
    name:"Vincent",
    email:"vincent@gmail.com",
    password: bcrypt.hashSync('123456'),
    isAdmin: false,
  }
]