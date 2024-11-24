const db = require("../firebase/firestore");

// Get all sales
exports.getSales = async (req, res) => {
  try {
    const snapshot = await db.collection("sales").get();
    const sales = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    res.status(200).json(sales);
  } catch (err) {
    res
      .status(500)
      .json({ error: "Failed to fetch sales", message: err.message });
  }
};

// Add a new sale
exports.addSale = async (req, res) => {
  try {
    const sale = req.body;
    const docRef = await db.collection("sales").add(sale);
    res.status(201).json({ id: docRef.id, ...sale });
  } catch (err) {
    res.status(500).json({ error: "Failed to add sale", message: err.message });
  }
};

// Update a sale
exports.updateSale = async (req, res) => {
  try {
    const { id } = req.params;
    const sale = req.body;
    await db.collection("sales").doc(id).update(sale);
    res.status(200).json({ id, ...sale });
  } catch (err) {
    res
      .status(500)
      .json({ error: "Failed to update sale", message: err.message });
  }
};

// Delete a sale
exports.deleteSale = async (req, res) => {
  try {
    const { id } = req.params;
    await db.collection("sales").doc(id).delete();
    res.status(200).json({ message: "Sale deleted successfully" });
  } catch (err) {
    res
      .status(500)
      .json({ error: "Failed to delete sale", message: err.message });
  }
};
