import mongoose from "mongoose";

// Define the experience schema
const experienceSchema = new mongoose.Schema({
  _id: { 
    type: mongoose.Schema.Types.ObjectId, 
    required: true 
  },
  name: { 
    type: String, 
    required: true 
  },
  company: { 
    type: String, 
    required: true 
  },
  interviewer: { 
    type: String, 
    required: false 
  },
  date: { 
    type: Date, 
    default: Date.now 
  },
  questions: [{ 
    type: String 
  }],
  dsa: [{ 
    type: String 
  }],
  topics: [
    {
      topic: { 
        type: String, 
        required: true 
      },
      frequency: { 
        type: Number, 
        required: true 
      }
    }
  ]
});


const experienceModel = mongoose.model("Experience", experienceSchema);

export default experienceModel;
