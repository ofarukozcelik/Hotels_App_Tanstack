const express = require("express");
const {
  getAllRecipes,
  getRecipe,
  createRecipe,
  deleteRecipe,
} = require("../controllers/recipeController");
const { controlId } = require("../middleware");

// Router > server js dosyası dışında route tanımı yapmamıza olanak sağlar
const router = express.Router();

// Oluşturduğumuz router'ın yollarını ve çalışacak fonksiyonlarını tanımlama
router.route("/api/places")
  .get(getAllRecipes)
  .post(createRecipe);

router
  .route("/api/place/:id")
  .get(controlId, getRecipe)
  .delete(controlId, deleteRecipe);

// Serverda kullanmak için export et
module.exports = router;
