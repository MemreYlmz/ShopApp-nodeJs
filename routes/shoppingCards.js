const express = require("express")
const router = express.Router()

const ShoppingCard = require("../models/shoppingCard")

router.get("/",(req,res)=>{
    const shoppingCards = ShoppingCard.find()
    res.send(shoppingCards)
})

router.post("/",async(req,res)=>{

    const shoppingCard = new ShoppingCard({
        userId : req.body.userId,
        productId: req.body.productId
    })
    try{
        const result =  await shoppingCard.save()
        res.send(result)
      }
      catch (err){
          console.log(err)
      }
})

module.exports = router
