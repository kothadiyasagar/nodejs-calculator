
const express = require('express')
const fs = require('fs');
const app = express()

app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.get('/',(req,res)=>{
    res.write("hello")
    res.end("world")
})
app.get('/product',(req,res)=>{
  fs.readFile("./db.json","utf-8",(err,data)=>{
      res.setHeader("content-type","application/json")
      res.end(data)
  })
})
app.post('/product',(req,res)=>{
   fs.readFile("./db.json","utf-8",(err,data)=>{
       console.log(data)
      const parsed= JSON.parse(data)
        parsed.product=[...parsed.product,req.body];

       fs.writeFile("./db.json",JSON.stringify(parsed),{encoding:"utf-8"},()=>{
          res.status(201).send("product created")
    })
   })
 console.log(req.body)
 res.end("sagar")

})
app.delete("/product/:id",(req,res)=>{
    const {id} = req.params
    fs.readFile("./db.json","utf-8",(err,data)=>{
        console.log(data)
       const parsed= JSON.parse(data)
         parsed.product=parsed.product.filter((el)=> el.id!==id)
 
        fs.writeFile("./db.json",JSON.stringify(parsed),{encoding:"utf-8"},()=>{
           res.end("product deleted")
     })
    })
})

app.all("*",(req,res)=>{
    res.status(404).send("Not Found")
})
app.listen(3080,()=>{
    console.log("http://localhost:3080/")
    

})