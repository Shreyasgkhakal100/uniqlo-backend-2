const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");


//User schema
const userSchema = new mongoose.Schema({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    pincode: { type: String, required: true },
    birthday: { type: Date, required: true },
    gender: { type: String, required: true ,default:"unselect"},
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

//pre save hook and hashing the password using bcryptjs
userSchema.pre("save", function (next) {
  if (!this.isModified("password")) return next();

 
  var hash = bcrypt.hashSync(this.password, 8);
  this.password = hash;
  return next();
});

//Check password while login 
userSchema.methods.checkPassword = function (password) {
  return bcrypt.compareSync(password, this.password);
};

const User = mongoose.model("user", userSchema);

module.exports = User;