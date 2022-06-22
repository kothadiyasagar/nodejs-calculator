const express = require("express")
const groceryRouter= require("../midellwer/groceries.route")
const app = express()
const cors = require("cors")
  app.use(express.urlencoded({extended:true}))
  app.use(express.json())
  app.use(cors())
app.use((req,res,next)=>{
    console.log("Route",req.url,"Method:",req.method,"At:",new Date())
    next()
})

app.use((req,res,next)=>{
    if(!req.headers["apikey"]){
       return  res.status(401).send("user not allow")
    }
    next()
})
app.use("/sagar",groceryRouter)

app.listen(8080)