const express=require("express");


const Category =require("../models/category.model");
const router=express.Router();
router.post("",async(req,res)=>{
    try{
       
         let category = await Category.create(req.body);
         
      return  res.status(201).send(category)
    }catch(err){
       return res.status(500).send({status:"Failed",message:err.message})
    }
})
router.get("",async(req,res)=>{
    
    try{
        let categories = await Category.find().lean().exec();

      return res.status(200).send({categories})
    }catch(err){
      return  res.status(500).send({status:"Failed",message:err.message})
    }
})

// For adding any other category or sub-category
router.patch("/:id",async(req,res)=>{
    try{
       
         let category = await Category.findByIdAndUpdate(req.params.id,req.body,{new:true});
         
      return  res.status(201).send(category)
    }catch(err){
       return res.status(500).send({status:"Failed",message:err.message})
    }
})

module.exports=router;