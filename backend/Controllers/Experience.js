
import Experience from "../models/Experience.js"; // Make sure this import path matches your file structure
import mongoose from "mongoose";

// Create a new interview experience
export const createquestion = async (req, res) => {
  console.log('Interview experience request body:', req.body); // Log request body for debugging
  
  // Create a new experience instance based on the received data
  const experience = new Experience({
    ...req.body,
    _id: new mongoose.Types.ObjectId(), // Set a new ObjectId for _id
  });

  try {
    await experience.save();
    res.status(201).json({ message: 'Experience saved successfully!' });
  } catch (error) {
    console.error('Failed to save experience:', error); // Logs the full error

    // Check if it's a validation error
    if (error.name === 'ValidationError') {
      return res.status(400).json({ message: 'Validation error', error: error.message });
    }

    // If it's a MongoDB unique error (duplicate PRN)
    if (error.code === 11000) {
      return res.status(409).json({ message: 'Duplicate field error', error: error.message });
    }

    // General error response
    res.status(500).json({ message: 'Failed to save experience', error: error.message });
  }
};

// Fetch all interview experiences
export const getquestion = async (req, res) => {
  try {
    const experiences = await Experience.find({});
    res.status(200).json(experiences);
  } catch (error) {
    console.error('Error fetching experiences:', error); // Log the full error
    res.status(500).json({ message: 'Failed to fetch experiences', error: error.message });
  }
};

export const getquestionbyid=async (req, res) => {
    try {
      const experience = await Experience.findById(req.params.id);
      if (!experience) {
        return res.status(404).json({ message: 'Experience not found' });
      }
      res.status(200).json(experience);
    } catch (error) {
      console.error('Error fetching experience by ID:', error.message);
      res.status(500).json({ message: 'Failed to fetch experience', error: error.message });
    }
  }