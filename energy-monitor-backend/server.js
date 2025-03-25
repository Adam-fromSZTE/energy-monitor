// server.js
import express from "express";
import cors from "cors";
import connectDB from "./config/db.js";

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use(cors());

// MongoDB connection
await connectDB();

// Basic route
app.get("/", (req, res) => {
  res.send("Energy Monitor API is running");
});

// Start
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
