const { Router } = require("express");

const path = require("path");

const fs = require("fs");

const router = Router();

const User = require("./../models/user");

router.get("/users/getall", async (req, res) => {
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
