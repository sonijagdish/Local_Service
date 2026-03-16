const express = require("express");
const {
  createProvider,
  getAllProviders,
  getProviderById,
  updateProvider,
  deleteProvider,
} = require("../controllers/ProviderController");

const router = express.Router();

router.post("/post", createProvider);
router.get("/get", getAllProviders);
router.get("/:id", getProviderById);
router.put("/:id", updateProvider);
router.delete("/:id", deleteProvider);

module.exports = router;
