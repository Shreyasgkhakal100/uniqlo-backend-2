const express = require("express");
const Product = require("../models/product.model")

const router = express.Router()

//Controllers for products

const router = express.Router()


// router.get("/:id",async(req,res)=>{
//     try{
//         let product = await Product.findById(req.params.id)
//     return    res.status(200).send({product})

//     }catch(err){
//      return   res.status(500).send({status:"Failed",message:err.message})
//     }
// })

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

    const filter = {};
    if(req.query.gender){
      filter["gender"]=req.query.gender;
    }

    if(req.query.cat){
      filter["category"]= req.query.cat;
    }
    // console.log(filter);

    const products = await Product.find(filter).lean().exec();
    const products = await Product.find({category: req.query.cat}).lean().exec();

    if(!products){
      return res.status(401).send("No Products Available Uder This Category");
    }

    return res.status(200).send({products});

  }catch(err){
    return res.status(500).send(err.message)
  }
})


// router.get("", async (req, res)=>{
  
//   try{
//     const page = req.query.page || 1;
    
//     const size = req.query.size || 10;
//     const query = {category: req.query.cat};
//     const products = await Product.find() 
//     .skip((page - 1) * size) 
//     .limit(size)
//     .lean()
//     .exec();

//     if(!products){
//       return res.status(401).send("No Products Available Uder This Category");
//     }

//     return res.status(200).send({products});

//   }catch(err){
//     return res.status(500).send(err.message)
//   }
// })

module.exports = router;