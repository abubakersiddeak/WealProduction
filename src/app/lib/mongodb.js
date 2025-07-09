import mongoose from "mongoose";
const MONGODB_URI = process.env.MONGODB_URI;
export const connectMongodb = async () => {
  try {
    await mongoose.connect(MONGODB_URI, {
      serverSelectionTimeoutMS: 30000, // Increase timeout to 30 seconds
    });
  } catch (error) {
    console.log(error);
  }
};
