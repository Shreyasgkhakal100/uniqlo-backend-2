const mongoose = require("mongoose");


const productSchema = new mongoose.Schema({

    image:{type:String,required:true},
    name :{type:String,required:true},
    price:{type:Number,required:true},
    size:{type:String,required:true},
    description:{type:String,required:true},
    category:{type:String,required:true}

},{
    versionKey:false,
    timestamps:true,
})
module.exports =mongoose.model("product",productSchema)