import mongoose from 'mongoose';

export const connectMongoDB = async () => {
  try {
    const mongodbUrl = process.env.MONGO_URL;
    await mongoose.connect(mongodbUrl);
    console.log('✅ MongoDB connection established successfully');
  } catch (error) {
    console.error('❌ Failed to connect to MongoDB:', error.message);
    process.exit(1);
  }
};
