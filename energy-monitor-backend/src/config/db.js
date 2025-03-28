/* eslint-disable no-undef */
import dotenv from 'dotenv';
import mongoose from 'mongoose';

dotenv.config();

const connectDB = async () => {
	try {
		if (!process.env.MONGODB_URI) {
			throw new Error('MONGODB_URI environment variable is missing');
		}

		const conn = await mongoose.connect(process.env.MONGODB_URI);
		console.log(`✅ MongoDB connected: ${conn.connection.host}`);
	} catch (error) {
		throw new Error(`❌ Error: ${error.message}`);
	}
};

export default connectDB;
