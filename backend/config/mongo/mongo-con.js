import mongoose from "mongoose"

export const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("Mongoose connected");
  } catch (error) {
    console.error("Failed to connect to Mongoose:", error);
  }
};

