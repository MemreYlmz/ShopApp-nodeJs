const express = require("express")
const router = express.Router()

const ShoppingCard = require("../models/shoppingCard")

router.get("/",(req,res)=>{
    const shoppingCards = ShoppingCard.find()
    res.send(shoppingCards)
})

router.post("/",(req,res)=>{

    const shoppingCard = new ShoppingCard({
        userId : req.body.userId,
        productId: req.body.productId
    })
})

module.exports = router
