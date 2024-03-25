const mongoose = require("mongoose")

const shoppingCardSchema = mongoose.Schema({
    userId : Number,
    productId: Array
}) 

module.exports = mongoose.model("ShoppingCard",shoppingCardSchema)