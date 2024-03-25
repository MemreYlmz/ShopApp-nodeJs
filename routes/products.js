const express = require("express")
const router = express.Router()

const Product =require("../models/product")



router.get("/" , async (req,res) => {
    const products = await Product.find()
    res.send(products)
})

router.post("/", async (req,res)=>{
        const product = new Product ({
        productName: req.body.productName,
        productPrice:req.body.productPrice,
        productImg:req.body.productImg
    })
    try{
        const result =  await product.save()
        res.send(result)
      }
      catch (err){
          console.log(err)
      }
})


module.exports = router