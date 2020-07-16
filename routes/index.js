const express = require("express");
const router = express.Router();

const homeController = require("../controller/homeController");

router.get("/", homeController.home);
router.use("/files", require("./files"));
module.exports = router;
