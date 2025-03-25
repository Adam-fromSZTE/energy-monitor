export const setGas = app.post("/gas", async (req, res) => {
  try {
    const newData = new GasData(req.body);
    await newData.save();
    res.status(201).json(newData);
  } catch (error) {
    res.status(500).json({ message: "Error saving gas data", error });
  }
});

export const getGas = app.get("/gas", async (req, res) => {
  try {
    const data = await GasData.find();
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: "Error fetching gas data", error });
  }
});
