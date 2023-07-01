import express from 'express';
import mongoose from 'mongoose';
import apiRouter from './apiRouter.js';

const app = express();
const PORT = 3001;

// Connect to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/Teleprompter')
  .then(async () => {
    console.log("\n\nThe bluetooth device is connected dah succesfalley");
  })
  .catch((error) => {
    console.error('Failed to connect to MongoDB:', error);
  });

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// API routes
app.use('/api', apiRouter);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});