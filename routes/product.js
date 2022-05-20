const router = require("express").Router();

router.get("/", (req, res) => {
	res.end("Afficher tous les produits");
});

router.post("/", (req, res) => {
	res.end("Ajouter un produit");
});

router.get("/:productId", (req, res) => {
	res.end("Afficher un produit");
});

router.put("/:productId", (req, res) => {
	res.end("Modifier un produit");
});

router.delete("/:productId", (req, res) => {
	res.end("Supprimer un produit");
});

module.exports = router;
