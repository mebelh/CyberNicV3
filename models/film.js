const { Schema, model } = require("mongoose");

const filmSchema = new Schema({
    url: String,
    label: String,
});

module.exports = model("Film", filmSchema);
