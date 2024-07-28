const express = require("express");
const cors = require("cors");
const recipeRoutes = require("./routes/recipeRoutes");

const app = express();

// İstekteki json verisini işler
app.use(express.json());

// Cors hatalarını önleyen middleware
app.use(cors());

// Route tanımı yap
app.use(recipeRoutes);

// Dinlenecek portu belirle
app.listen(4001, () => {
  console.log("Server 4001 portunu dinlemeye başladı");
});
