const { Router } = require("express");

const router = Router();

const Film = require("../models/film");

router.post("/add", async (req, res) => {
    const film = new Film(req.body);
    await film.save();
});

router.get("/all", async (req, res) => {
    const films = await Film.find();
    res.json(films);
});

module.exports = router;
