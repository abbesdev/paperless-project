const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const connectDB = require("./src/config/dbConnect");
const userRoutes = require("./src/routes/user");
const articleRoutes = require("./src/routes/article");
const categoryRoutes = require("./src/routes/category");

//Basic Configuration
const app = express();
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());


//MongoDB setup
connectDB();
app.use("/users", userRoutes);
app.use("/categories", categoryRoutes);
app.use("/articles", articleRoutes);


const PORT = process.env.PORT || 9090;
app.listen(PORT, (err) =>
  err ? console.log(err) : console.log(`server is running on PORT ${PORT}`)
);