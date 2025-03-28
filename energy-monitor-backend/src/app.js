// src/app.ts
import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import connectDB from './config/db.js';
import consumptionRoutes from './routes/consumptionRoutes.js';

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

connectDB();

// Routes
app.use('/api/consumptions', consumptionRoutes);

export default app;
