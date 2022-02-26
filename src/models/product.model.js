const mongoose = require("mongoose");

//product schema

const productSchema = new mongoose.Schema(
  {
    image: { type: String, required: true },
    name: { type: String, required: true },
    price: { type: Number, required: true },
    size: { type: String, required: true },
    description: { type: String, required: true },
    gender: { type: String, required: true },
    category: { type: String, required: false },
    exclusive: { type: String, required: false },
    striked_price: { type: String, required: false },
    star: { type: String, required: false },
    // category:{type:mongoose.Schema.Types.ObjectId,ref:"categories",required:false},
    // section_id:{type:mongoose.Schema.Types.ObjectId,ref:"sections",required:false},
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

module.exports =mongoose.model("product",productSchema)