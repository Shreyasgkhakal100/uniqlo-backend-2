const mongoose = require("mongoose");

module.exports = ()=>{
    mongoose.connect("mongodb+srv://srvsuman:srvsuman@cluster0.dcmkv.mongodb.net/uniqlo-clone")
}