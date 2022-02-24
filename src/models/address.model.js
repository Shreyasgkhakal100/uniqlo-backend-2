const mongoose = require("mongoose");

const addressSchema = new mongoose.Schema(
  {
    first_name: { type: String, required: true },
    last_name: { type: String, required: true },
    pincode: { type: String, required: true },
    add_details1: { type: String, required: true },
    add_details2: { type: String, required: false },
    city: { type: String, required: true },
    state: { type: String, required: true },
    mobile_no: { type: String, required: true },
    user_id: {type: mongoose.Schema.Types.ObjectId, ref: "User", required: true},
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const Address = mongoose.model("address", addressSchema);

module.exports = Address;
