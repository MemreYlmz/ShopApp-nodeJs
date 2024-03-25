const express = require("express")
const router = express.Router()
const User = require("../models/user")

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

module.exports = router
