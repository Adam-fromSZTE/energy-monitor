import express from "express";
import connectDB from "./config/db.js";
import consumptionRoutes from "./routes/consumptionRoutes.js";

const app = express();
connectDB();

app.use(express.json()); // JSON adatok kezelése
app.use("/api/consumption", consumptionRoutes);

app.listen(5000, () => {
  console.log("🚀 Server running on port 5000");
});