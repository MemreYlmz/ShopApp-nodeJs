const express = require("express")
const app = express()
const mongoose = require("mongoose")
const dotenv  = require('dotenv').config({ path: `${__dirname}/.env` })
const cors = require('cors');

const productsRouter = require("./routes/products")
const homeRouter = require("./routes/home")
const usersRouter = require("./routes/users")
const shoppingCardsRouter = require("./routes/shoppingCards")

//.env user info
const url =dotenv.parsed.url ;
//Mİddleware
app.use(express.json())
const corsOptions = {
    origin: 'http://localhost:3000', // React uygulamanızın çalıştığı URL
  };
  
  app.use(cors(corsOptions));
//Routers
app.use("/api/products" ,productsRouter);
app.use("/api/users",usersRouter)
app.use("/api/shoppingCards",shoppingCardsRouter)
app.use("/", homeRouter);





(async () => {
    try {
        await mongoose.connect(url);
        console.log("MongoDB'ye başarıyla bağlanıldı");
    } catch (err) {
        console.error("MongoDB'ye bağlanırken bir hata oluştu:", err);
    }
})();



console.log("ANANI SİKEYİM")
app.listen(3001 , ()=>{
    console.log("aa")
})