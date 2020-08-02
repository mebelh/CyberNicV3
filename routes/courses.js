const { Router } = require("express");

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
        res.redirect("http://localhost:3000/auth/login");
    }
});

router.get("/all", async (req, res) => {
    const courses = await Course.find();
    res.send(
        JSON.stringify(
            courses.map(
                ({
                    courseName,
                    link,
                    backgroundImageLink,
                    courseNameColor,
                }) => ({
                    courseName,
                    link,
                    backgroundImageLink,
                    courseNameColor,
                })
            )
        )
    );
});

router.get("/:id/:userLogin", async (req, res) => {
    const { id, userLogin } = req.params;

    const course = await Course.find({ link: id });

    const user = (await User.findOne({ login: userLogin })) || { courses: [] };

    if (course.length) {
        const isPremium = ~user.courses.join("").indexOf(id);
        res.send(
            isPremium
                ? JSON.stringify(...course)
                : JSON.stringify(...course, (key, val) => {
                      if (key === "modules")
                          return val.map(({ lectures, name, duration }) => {
                              return {
                                  name,
                                  duration,
                                  lectures: lectures.map(
                                      ({ name, duration }) => ({
                                          name,
                                          duration,
                                      })
                                  ),
                              };
                          });
                      return val;
                  })
        );
    } else {
        res.send(JSON.stringify({}));
    }

    // }
});

module.exports = router;
