const mongoose = require("mongoose");

//section schema

const sectionSchema = new mongoose.Schema({
type:{type:String,required:true,default:"women"}
    

},{
    versionKey:false,
    timestamps:true,
})
module.exports =mongoose.model("sections",sectionSchema)