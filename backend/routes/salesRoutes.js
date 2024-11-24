const express = require("express");
const {
  getSales,
  addSale,
  updateSale,
  deleteSale,
} = require("../controllers/salesController");

const router = express.Router();

router.get("/", getSales); // GET all sales
router.post("/", addSale); // POST a new sale
router.put("/:id", updateSale); // PUT (update) a sale
router.delete("/:id", deleteSale); // DELETE a sale

module.exports = router;
