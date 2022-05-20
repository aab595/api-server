const router = require("express").Router();

router.get("/", (req, res) => {
	res.end("Afficher tous les clients");
});

router.post("/", (req, res) => {
	res.end("Ajouter un client");
});

router.get("/:clientId", (req, res) => {
	res.end("Afficher un client");
});

router.put("/:clientId", (req, res) => {
	res.end("Modifier un client");
});

router.delete("/:clientId", (req, res) => {
	res.end("Supprimer un client");
});

module.exports = router;
