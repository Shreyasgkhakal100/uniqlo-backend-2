const express = require("express");
const Product = require("../models/product.model")



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

router.get("", async (req, res)=>{
  try{
    const products = await Product.find({category: req.query.cat}).lean().exec();

    if(!products){
      return res.status(401).send("No Products Available Uder This Category");
    }

    return res.status(200).send({products});

  }catch(err){
    return res.status(500).send(err.message)
  }
})

module.exports = router;