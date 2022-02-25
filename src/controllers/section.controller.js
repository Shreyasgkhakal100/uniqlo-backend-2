const express=require("express");


const Section =require("../models/section.model")
const router=express.Router();
router.post("",async(req,res)=>{
    try{
       
         let section = await Section.create(req.body);
         
      return  res.status(201).send(section)
    }catch(err){
       return res.status(500).send({status:"Failed",message:err.message})
    }
})
router.get("",async(req,res)=>{
    
    try{
        let sections = await Section.find().lean().exec();

      return res.status(200).send({sections})
    }catch(err){
      return  res.status(500).send({status:"Failed",message:err.message})
    }
})

module.exports=router;