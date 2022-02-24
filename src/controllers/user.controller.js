const express = require("express");
const User = require("../models/user.model");

const router = express.Router();


router.get("",async(req,res)=>{
    try{
        let users=await User.find().lean().exec();
        res.send(users)
    }catch(err){
        res.status(500).send(err.message)
    }
})
router.get("/:id",async(req,res)=>{
    try{
        let users=await User.find(req.params.id).lean().exec();
        res.send(users)
    }catch(err){
        res.status(500).send(err.message)
    }
})
router.patch("/:id",async(req,res)=>{
    try{
        let users=await User.findByIdAndUpdate(req.params.id,req.body,{new:true}).lean().exec();
        res.send(users)
    }catch(err){
        res.status(500).send(err.message)
    }
})
router.delete("/:id",async(req,res)=>{
    try{
        let users=await User.findByIdAndDelete(req.params.id,req.body,{new:true}).lean().exec();
        res.send(users)
    }catch(err){
        res.status(500).send(err.message)
    }
})
module.exports = router;