"use strict";

const express = require("express");
const router = express.Router();

const commonController = require("../controller/common.controller");

router.get("/", commonController.status);

module.exports = router;
