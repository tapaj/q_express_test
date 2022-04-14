"use strict";

const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");

const commonRoutes = require("./routes/common.routes");

dotenv.config();

const port = process.env.PORT || 3000;
const app = express();

app.use(morgan("dev"));
app.use("/api", commonRoutes);

app.listen(port, () => {
    console.log(`Express API started successfully on port ${port}`);
});
