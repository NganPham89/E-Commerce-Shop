const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");

const authRoute = require("./routes/auth")
const userRoute = require("./routes/user")

dotenv.config();
mongoose
    .connect(process.env.MONGO_URL)
    .then(() => console.log("DB connection is successful."))
    .catch(error => console.log(error));

app.use(express.json());
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);

app.listen(process.env.PORT || 3001, () => {
    console.log("Listening to port 3001.")
})