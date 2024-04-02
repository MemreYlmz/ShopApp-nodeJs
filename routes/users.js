const express = require("express")
const router = express.Router()
const User = require("../models/user")
const { route } = require("./products")

router.get("/" ,async (req,res)=>{
    const users = await User.find()
    res.send(users)
})

router.post("/", async(req,res)=>{

    const user = new User({
        userName : req.body.userName,
        password : req.body.password,
        phone : req.body.phone,
        mail : req.body.mail
    })
    try{
        const result =  await user.save()
        res.send(result)
      }
      catch (err){
          console.log(err)
      }
})

router.post("/checkUser" , async(req,res)=>{

    //req.body içinde userName ve password gelecek 
    //Bunları db de kontrol et böyle biri var mı diye kulllanıdı varsa tüm bilgilerini sini döndür yoksa null döndür hata fırlatma db çöker

})

module.exports = router
