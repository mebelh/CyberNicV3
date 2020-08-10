const { Router } = require("express");
const jwt = require("jsonwebtoken");

const config = require("config");

const Course = require("../models/course");

const User = require("../models/user");

const router = Router();

router.post("/add", async (req, res) => {
    const adminToken = (await User.findOne({ login: "admin" })).password;

    if (req.body.token.toString() === adminToken.toString()) {
        const {
            courseName,
            link,
            courseNameColor,
            backgroundColor,
            backgroundImageLink,
            linkOnTrialVideo,
            shortDescription,
            description,
            modules,
        } = req.body;
        const newCourse = new Course({
            courseName,
            link,
            courseNameColor,
            backgroundColor,
            backgroundImageLink,
            linkOnTrialVideo,
            shortDescription,
            description,
            modules,
        });
        await newCourse.save();
    } else {
        res.redirect("/auth/login");
    }
});

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

    if (token) {
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
