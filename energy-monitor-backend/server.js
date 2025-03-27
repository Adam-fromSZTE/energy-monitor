/* eslint-disable no-console */
/* eslint-disable no-undef */
import cors from 'cors';
import express from 'express';
import helmet from 'helmet';
import connectDB from './config/db.js';
import gasRoutes from './routes/consumption/gasRoutes.js';

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use(cors());
app.use(helmet());

// Routes register
app.use('/api/gas', gasRoutes);

// Hibakezelő middleware
app.use((err, req, res, next) => {
	console.error(err.stack);
	res.status(500).send('Something broke!');
});

// 404 handler
app.use((req, res) => {
	res.status(404).json({ message: 'Resource not found' });
});

app.use(
	cors({
		origin: process.env.CLIENT_URL || 'http://localhost:3000',
		methods: ['GET', 'POST', 'PUT', 'DELETE'],
	}),
);

// Basic route
app.get('/', (req, res) => {
	res.send('Energy Monitor API is running');
});

if (!process.env.MONGO_URI) {
	console.error('❌ MONGO_URI environment változó hiányzik');
	process.exit(1);
}

// MongoDB connection
await connectDB();

// Start
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
