const { Router } = require("express");
const router = Router();
const bcrypt = require("bcrypt");
const config = require("config");
const jwt = require("jsonwebtoken");

const User = require("../models/user");

// Атворизация

router.post("/login", async (req, res) => {
    const { login, password } = req.body;

    const candidate = await User.findOne({ login });

    if (!candidate) {
        return res.status(404).json({ ok: false });
    }

    const areSame = await bcrypt.compare(
        password.toString(),
        candidate.password.toString()
    );

    if (!areSame) {
        return res.status(401).json({
            message: "Неверные данные при авторизации. Попробуйте еще раз.",
        });
    }

    const { name, isAdmin, isPremium } = candidate;

    const token = await jwt.sign(
        {
            userId: candidate.id,
            isAdmin,
            isPremium: isPremium || isAdmin,
        },
        config.get("jwtSecret")
    );

    return res.json({
        token,
        userId: candidate.id,
        name: name || login,
        isAdmin,
    });
});

router.post("/register", async (req, res) => {
    try {
        const { login, name, password, repeat } = req.body;

        const candidate = await User.findOne({ login });
        if (candidate) {
            //Логин занят
            res.json({ message: "Что то пошло не так..." }).redirect(
                "/auth/register"
            );
        }
        // else if (password !== repeat) {
        // console.log(password + "  ||| " + repeat);
        //Пароли не совпадают
        // res.redirect("/auth/login#register");
        // }
        else {
            const hashPassword = await bcrypt.hash(password, 10);
            const user = new User({
                login,
                password: hashPassword,
                name,
                courses: [],
            });

            //Успешная регистрация

            await user.save();

            res.json({ message: "Успешная авторизация" }).redirect("/");
        }
    } catch (e) {
        console.log(e);
    }
});

module.exports = router;
