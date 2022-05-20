const express = require("express");

const app = express();

const productRoutes = require("./routes/product.js");
const clientRoutes = require("./routes/client.js");
const orderRoutes = require("./routes/order.js");

app.get("/", (req, res) => {
	res.end("Welcome to my first API");
});

// product's routes
app.use("/product", productRoutes);
// client's routes
app.use("/client", clientRoutes);
// order's routes
app.use("/order", orderRoutes);

app.listen(3000, () => {
	console.log("Le serveur est en cours d'exécution");
});
