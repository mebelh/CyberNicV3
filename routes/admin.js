const { Router } = require("express");
const path = require("path");
const jwt = require("jsonwebtoken");
const fs = require("fs");

const router = Router();

const User = require("./../models/user");
const { config } = require("process");

router.get("/users/getall", async (req, res) => {
    // Проверяем доступ пользователя через токен

    const goOut = () => res.status(403).json({ message: "Нет доступа" });

    const { token } = req.headers;

    if (!token) return goOut();

    const parseToket = jwt.verify(token, config.get("jwtSecret"));

    if (!parseToket.isAdmin) return goOut();

    const users = await User.find();
    const sentData = users.map((u) => ({
        name: u.name || u.login,
        login: u.login,
        isPremium: !!u.isPremium,
    }));
    res.json(sentData);
});

router.post("/users/toggleuserstatus", async (req, res) => {
    const { login } = req.body;

    const candidate = await User.findOne({ login });

    candidate.isPremium = !candidate.isPremium;

    await candidate.save();

    res.status(200);
});

router.get("/elbibl", (req, res) => {
    const filePath = req.url.substr(1);

    const index = path.join(
        __dirname,
        "..",
        "client",
        "src",
        "components",
        "pages",
        "ElBiblio",
        "index.html"
    );

    fs.createReadStream(index).pipe(res);
    console.log("Адрес: ", filePath);

    // res.send(fs.);
});

module.exports = router;
