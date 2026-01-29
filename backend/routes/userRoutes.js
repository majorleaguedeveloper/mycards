
import express from 'express';
import bcrypt from 'bcryptjs';
import expressAsyncHandler from 'express-async-handler';
import User from '../models/userModel.js';
import { generateToken } from '../utils.js';


const router = express.Router();

router.post( 
  '/signin',
  expressAsyncHandler(async (req, res) => {
    const user = await User.findOne({ email: req.body.email });
    if (user && bcrypt.compareSync(req.body.password, user.password)) {
      res.send({
        _id: user._id,
        name: user.name,
        email: user.email,
        token: generateToken(user) 
      });
    } else {
      res.status(401).send({ message: 'Invalid email or password' });
    }
  })
);

router.post(
  '/signup',
  expressAsyncHandler(async (req, res) => {
    if (!req.body.name || !req.body.email || !req.body.password) {
      return res.status(400).send({ message: 'Name, email, and password are required' });
    }
    const userExists = await User.findOne({ email: req.body.email });
    if (userExists) {
      return res.status(400).send({ message: 'User already exists' });
    }
    const newUser = new User({
      name: req.body.name,
      email: req.body.email,
      password: bcrypt.hashSync(req.body.password),
    });
    const user = await newUser.save();
    res.send({
      _id: user._id,
      name: user.name,
      email: user.email,
      token: generateToken(user),
    });
  })
);

export default router; 
