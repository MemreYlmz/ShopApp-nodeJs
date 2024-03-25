const mongoose = require("mongoose")

const productSchema = mongoose.Schema({
    productName:String,
    productPrice:Number,
    productImg:String

})

module.exports= mongoose.model("Product",productSchema); //model