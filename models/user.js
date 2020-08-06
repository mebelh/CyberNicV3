const { Schema, model } = require("mongoose");

const UserSchema = new Schema({
    name: String,
    login: String,
    isAdmin: Boolean,
    isPremium: {
        type: Boolean,
        default: false,
    },
    password: String,
    courses: [
        {
            courseId: String,
        },
    ],
});

module.exports = model("User", UserSchema);
