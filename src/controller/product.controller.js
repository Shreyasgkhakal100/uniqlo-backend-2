const express = require("express");
const { create } = require("../model/product.model");
const Product = require("../model/product.model")


const router = express.Router()
router.get("",async(req,res)=>{
    try{
        let products = await Product.find();

      return res.status(200).send({products})
    }catch(err){
      return  res.status(500).send({status:"Failed",message:err.message})
    }
})

router.get("/:id",async(req,res)=>{
    try{
        let product = await Product.findById(req.params.id)
    return    res.status(200).send({product})

    }catch(err){
     return   res.status(500).send({status:"Failed",message:err.message})
    }
})

router.post("",async(req,res)=>{
    try{
       
         let product = await Product.create(req.body)
         
      return  res.status(201).send(product)
    }catch(err){
       return res.status(500).send({status:"Failed",message:err.message})
    }
})
router.patch("",async(req,res)=>{
    try{
        let product = await product.find(req.params.id)
      return  res.status(200).send({Product})

    }catch(err){
       return res.status(500).send({status:"Failed",message:err.message})
    }
})

router.delete("/:id",async(req,res)=>{
    try{
        let product = await Product.findByIdAndDelete(req.params.id);

      return  res.status(200).send({product})

    }catch(err){
      return  res.status(500).send({status:"Failed",message:err.message})
    }
})

module.exports = router;