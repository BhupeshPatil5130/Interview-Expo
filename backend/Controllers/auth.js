import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from '../models/user.js';

export const createuser = async (req, res) => {
  const { firstName, lastName, prn, password, branch, yearOfPassing } = req.body;

  try {
    // Hash the password before saving
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user instance
    const newUser = new User({
      firstName,
      lastName,
      prn,
      password: hashedPassword,
      branch,
      yearOfPassing,
    });

    // Save the new user to the database
    await newUser.save();
    res.status(201).json({ message: 'User created successfully!' });
  } catch (error) {
    res.status(400).json({ message: 'Error creating user: ' + error.message });
  }
};

export const checkuser = async (req, res) => {
  const { prn, password } = req.body;

  try {
    // Find the user by PRN (primary reference number)
    const user = await User.findOne({ prn });
    if (!user) {
      return res.status(401).json({ message: 'Invalid credentials!' });
    }

    // Compare the entered password with the hashed password in the database
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: 'Invalid credentials!' });
    }

    // Generate JWT token with a 1-hour expiration
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

    // Send the token in the response
    res.status(200).json({ token });
  } catch (error) {
    res.status(500).json({ message: 'Error logging in: ' + error.message });
  }
};
