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
    const userName = req.body.userName
    const password = req.body.password
    console.log(userName,password)
    const user = await User.findOne({ userName: userName, password: password });
    if (user) {
        const userData={
            userName:user.userName,
            mail:user.mail,
            phone:user.phone
        }
        console.log(userData)
        res.send (userData)
    } else {
        res.send (null)
        // Kullanıcı bulunamadı, hata döndür
    }

    //req.body içinde userName ve password gelecek 
    //Bunları db de kontrol et böyle biri var mı diye kulllanıdı varsa tüm bilgilerini sini döndür yoksa null döndür hata fırlatma db çöker

})

module.exports = router
