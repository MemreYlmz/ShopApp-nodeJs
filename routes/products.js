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
        productCategory: req.body.productCategory,
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

router.put("/:id", async function(req, res) {
    try {
        const id = req.params.id;
        const updatedProduct = await Product.findByIdAndUpdate(id, req.body, { new: true });
        res.send(updatedProduct);
    } catch (err) {
        console.error(err);
        res.status(500).send("Ürün güncellenirken bir hata oluştu.");
    }
});


module.exports = router