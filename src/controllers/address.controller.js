const express = require("express");

const authenticate = require("../middlewares/authenticate");

const Address = require("../models/address.model");

const router = express.Router();
//Address create request
router.post("/", authenticate, async (req, res) => {
    try{
        
        const newAddress = await Address.create({
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            pincode: req.body.pincode,
            add_details1: req.body.add_details1,
            add_details2: req.body.add_details2,
            city: req.body.city,
            state: req.body.state,
            mobile_no: req.body.mobile_no,
            user_id: req.user._id
        });

        res.status(201).send({msg: "Address created successfully", address: newAddress});
    }catch(err){
        return res.status(500).send(err.message);
    }
})
//for updating address
router.patch("/", authenticate, async (req, res) => {
    try{

        const updatedAddress = await Address.findOneAndUpdate({_id: req.query.address_id, user_id: req.user._id}, req.body, {new: true});
        if(!updatedAddress){
            return res.status(404).send({msg: "Address not found"});
        }

        return res.status(200).send({msg: "Address updated successfully", address: updatedAddress});

    }catch(err){
        return res.status(500).send(err.message);
    }
})
router.get("", async (req,res)=>{
    try{
    const address=await Address.find().lean().exec();
    res.send(address);
    }catch(err){
        res.status(500).send(err.message)
    }

})

module.exports = router;