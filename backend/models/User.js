import mongoose from "mongoose";


const userSchema = new mongoose.Schema({
    firstName: { 
      type: String, 
      required: true 
    },
    lastName: { 
      type: String, 
      required: true 
    },
    prn: { 
      type: Number, 
      unique: true, 
      required: true 
    },
    password: { 
      type: String, 
      required: true 
    },
    branch: { 
      type: String, 
      required: true 
    },
    yearOfPassing: { 
      type: Number, 
      required: true 
    }
  });

const userModel = mongoose.model("User", userSchema);

export default userModel;
