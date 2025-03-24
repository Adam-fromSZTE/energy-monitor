import express from "express";
import Consumption from "../models/consumptionModel.js";

const router = express.Router();

// 🔹 Adat felvétele
router.post("/", async (req, res) => {
  try {
    const { type, amount } = req.body;
    const newConsumption = new Consumption({ type, amount });
    await newConsumption.save();
    res.status(201).json(newConsumption);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// 🔹 Összes adat lekérése
router.get("/", async (req, res) => {
  try {
    const data = await Consumption.find({});
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// 🔹 Adat törlése
router.delete("/:id", async (req, res) => {
  try {
    await Consumption.findByIdAndDelete(req.params.id);
    res.json({ message: "Adat törölve" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;
