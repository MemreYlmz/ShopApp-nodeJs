const mongoose = require("mongoose")

const userSchema = mongoose.Schema({
    userName : String,
    password : Number,
    phone : Number,
    mail : String
})

module.exports = mongoose.model("User",userSchema)

