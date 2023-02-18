const express = require("express")
const mongoose = require("mongoose")
const { MONGO_USER, MONGO_PASSWORD, MONGO_IP, MONGO_PORT } = require("./config/config")

const postRouter = require("./routes/postRoutes");
const userRouter = require("./routes/userRoutes");


const app = express();

const mongoURL = `mongodb://${MONGO_USER}:${MONGO_PASSWORD}@${MONGO_IP}:${MONGO_PORT}/?authSource=admin`;
// mongoose.connect("mongodb://zach:easypassword1@mongo/?authSource=admin")
//     .then(() => console.log("successfully connected to DB"))
//     .catch((e) => console.log(e));

const connectWithRetry = () => {
    mongoose.connect("mongodb://zach:easypassword1@mongo/?authSource=admin")
    .then(() => console.log("successfully connected to DB"))
    .catch((e) => console.log(e));
    setTimeout(connectWithRetry, 5000);
}

connectWithRetry();
app.use(express.json());
app.get("/", (req, res) => {
    res.send("<H2>Home Page</H2>");
})

app.use("/api/v1/posts", postRouter);
app.use("/api/v1/users", userRouter);
const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`listening on port ${port}`))