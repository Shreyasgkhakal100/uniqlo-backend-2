const mongoose = require("mongoose");

module.exports = () => {
  return mongoose.connect("mongodb+srv://srvsuman:srvsuman@cluster0.dcmkv.mongodb.net/pre-uniqlo-clone?retryWrites=true&w=majority");
};
