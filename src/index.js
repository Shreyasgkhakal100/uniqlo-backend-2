const express = require("express");
require("dotenv").config();

const connect = require("./configs/db");
const User=require("./models/user.model");
const userController = require("./controllers/user.controller");
const {body}= require("express-validator");
const { register, login} = require("./controllers/auth.controller");



const app = express();

app.use(express.json());

// /register
app.post("/register",
body("email")
.notEmpty()
    .isEmail()
    .custom(async (value) => {
      const user = await User.findOne({ email: value });
      if (user) {
        throw new Error("Please enter a valid email address.");
      }
      return true;
    }),
body("password")
.notEmpty()
.isStrongPassword()
.isLength({ min: 8, max: 20 })
.custom((value) => {
  let pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
  if (pattern.test(value)) {
    return true;
  }
  throw new Error("Password must be 8-20 characters, and contain both numbers and alphabet letters optionally symbols shown here can be used: - _ . @");
}),
body("pincode").notEmpty()
.isNumeric()
.isLength({min:6,max:7})
.withMessage("Please enter only numbers."),
body("gender").notEmpty(),
body("birthday").notEmpty()
.isDate()

,register);

//login
app.post("/login",
body("email")
.notEmpty()
    .isEmail(),
body("password")
.isLength({ min: 8, max: 20 })
.custom((value) => {
  let pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
  if (pattern.test(value)) {
    return true;
  }
  throw new Error("Incorrect password");
})
,login)


app.use("/users", userController);




const port = process.env.PORT

app.listen(port, async () => {
  try {
    await connect();
  } catch (err) {
    console.error(err.message);
  }
  console.log(`Server started on port ${port}`);
});
