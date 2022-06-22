
const {Router}=require("express")

const groceryRouter = Router()

groceryRouter.get("/",(req,res)=>{
    res.send("data")
})

module.exports=groceryRouter