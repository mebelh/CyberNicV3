const express = require("express");
const path = require("path");

const config = require("config");

const app = express();
const session = require("express-session");
const mongoose = require("mongoose");
const MongoStore = require("connect-mongodb-session")(session);
const bodyParser = require("body-parser");

const coursesRoute = require("./routes/courses");
const authRoute = require("./routes/auth");

const MONGO_URI = config.get("mongoUri");

const userMiddleware = require("./middleware/user");

const store = new MongoStore({
    uri: MONGO_URI,
    collection: "sessions",
});

const PORT = config.get("port") || 3000;

app.set("view engine", "hbs");
app.set("views", "views");

app.use(express.static(path.join(__dirname, "public")));
app.use(express.static(path.join(__dirname, "views", "img")));

app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.json());

app.use(
    session({
        secret: "hgydl dsjg,da17",
        resave: true,
        saveUninitialized: true,
        store,
    })
);

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
});

app.use(userMiddleware);

app.use("/courses", coursesRoute);
app.use("/auth", authRoute);

// const User = require("./models/user");
// const bcrypt = require("bcrypt");

const start = async () => {
    try {
        mongoose.connect(MONGO_URI, {
            useUnifiedTopology: true,
            useNewUrlParser: true,
            useFindAndModify: false,
        });
        // const admin = await User.findOne({ login: "admin" });
        // if (!admin) {
        //     const user = new User({
        //         login: "admin",
        //         password: await bcrypt.hash("admin", 12),
        //         isAdmin: true,
        //     });
        //     await user.save();
        // }
        app.listen(PORT, () => {
            console.log(`Server has been started on ${PORT}.`);
        });
    } catch (e) {
        if (e) {
            console.log(e);
            process.exit(1);
        }
    }
};
start();
