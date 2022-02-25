const mongoose = require("mongoose");

//category schema

const categorySchema = new mongoose.Schema({

   category:{type:String,required:true},
   subcategory:{type:String,required:true}

},{
    versionKey:false,
    timestamps:true,
})
module.exports =mongoose.model("product",productSchema)