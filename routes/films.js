const { Router } = require("express");

const router = Router();

const Film = require("../models/film");

router.get("/all", async (req, res) => {
    const films = await Film.find();
    console.log(films);
    res.json(JSON.stringify(films));
});

module.exports = router;
