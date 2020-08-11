const { Router } = require("express");

const jwt = require("jsonwebtoken");
const config = require("config");

const router = Router();

const Film = require("../models/film");

router.post("/add", async (req, res) => {
    const goOut = () => res.status(403).json({ message: "Нет доступа!" });

    const { token } = req.headers;

    if (!token) return goOut();

    const parseToken = await jwt.verify(token, config.get("jwtSecret"));

    if (!parseToken.isAdmin) return goOut();

    const film = new Film(req.body);
    await film.save();
});

router.get("/all", async (req, res) => {
    const films = await Film.find();
    res.json(films);
});

module.exports = router;
