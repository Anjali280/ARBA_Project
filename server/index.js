require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());

const connectDB = require("./utils/connectDB");
const config = require("./configurations/config");
app.use(express.json());

const authRouter = require("./routers/auth-router");
const productRouter = require("./routers/product-router");
const categoryRouter = require("./routers/category-router");
app.use("/api/auth", authRouter);
app.use("/api/products", productRouter);
app.use("/api/categories", categoryRouter);

connectDB()
  .then(() => {
    console.log("Connected to database...");

    const port = config.PORT || 4000;
    app.listen(port, () => {
      console.log(`Server started at http://localhost:${port}/`);
    });
  })
  .catch((err) => {
    console.log("Error!! connecting database....");
    console.error(err.message);
  });
