const { Router } = require("express");
const jwt = require("jsonwebtoken");

const config = require("config");

const Course = require("../models/course");

const User = require("../models/user");

const router = Router();

router.post("/add", async (req, res) => {
    //Функция выпинывания злодея
    const goOut = () => res.status(403).json({ message: "Нет доступа!" });

    //Проверка доступа по токену
    const { token } = req.headers;

    if (!token) return goOut();

    const parseToken = jwt.verify(token, config.get("jwtSecret"));

    if (!parseToken.isAdmin) return goOut();

    //Пользователь - админ, добавляем курс
    new Course(req.body).save();

    res.json({ message: "Курс добавлен" });
});

router.post('/edit/:id', async (req, res)=>{
    //Функция выпинывания злодея
    const goOut = () => res.status(403).json({ message: "Нет доступа!" });

    //Проверка доступа по токену
    const { token } = req.headers;

    if (!token) return goOut();

    const parseToken = jwt.verify(token, config.get("jwtSecret"));

    if (!parseToken.isAdmin) return goOut();

    //Пользователь - админ, добавляем курс
    await Course.findOneAndUpdate({link: req.params.id}, {...req.body})
    res.status(200)

    res.json({ message: "Курс изменен" });
})

router.get("/all", async (req, res) => {
    const courses = await Course.find().select(
        "courseName link backgroundImageLink courseNameColor"
    );

    res.send(JSON.stringify(courses));
});

router.get("/:id", async (req, res) => {
    const { id } = req.params;

    let course = await Course.find({ link: id });

    if (!course.length) {
        return res.status(404).json({});
    }

    course = course[0];

    const cutEgg = () => {
        course.modules = course.modules.map(({ lectures, name, duration }) => {
            return {
                name,
                duration,
                lectures: lectures.map(({ name, duration }) => ({
                    name,
                    duration,
                })),
            };
        });
    };

    const { token } = req.headers;

    if (token && token !== 'undefined') {
        const parseToken = jwt.decode(token, config.get("jwtSecret"));
        const user = (await User.findOne({ _id: parseToken.userId })) || {
            courses: [],
        };

        const isPremium =
            ~user.courses.join("").indexOf(id) ||
            user.isPremium ||
            user.isAdmin;
        !isPremium && cutEgg();
    } else {
        cutEgg();
    }

    return res.json(course);
});

module.exports = router;
