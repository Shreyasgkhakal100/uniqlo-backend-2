const express = require("express");
const User = require("../models/user.model");

const authenticate = require("../middlewares/authenticate");

const router = express.Router();


router.get("", async (req, res) => {
  try {
    let users = await User.find().lean().exec();
    res.send(users);
  } catch (err) {
    res.status(500).send(err.message);
  }
});
module.exports = router;