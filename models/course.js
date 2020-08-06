const { Schema, model } = require("mongoose");

const CourseSchema = new Schema({
    courseName: String,
    link: String,
    backgroundImageLink: String,
    courseNameColor: {
        type: String,
        default: "#000",
    },
    backgroundColor: {
        type: String,
        default: "#000",
    },
    linkOnTrialVideo: String,
    shortDescription: String,
    description: String,
    modules: [
        {
            name: String,
            duration: String,
            lectures: [{ name: String, duration: String, link: String }],
        },
    ],
});

module.exports = model("Course", CourseSchema);
