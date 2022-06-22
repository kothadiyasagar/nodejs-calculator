
const http = require('http') 
  

const server = http.createServer((req,res)=>{
  res.setHeader("content-type","text/HTML")
  res.end("<h1>hello world</h1>")
if (req.url == "/"){
         res.end("sagar")
}
   if(req.url==="/product"){
       res.setHeader("content-type","application/json")
        res.end(JSON.stringify([1,2,3,4,5]))
   }
var http = require('http');

// http.createServer(function (req, res) {
//   res.writeHead(200, {'Content-Type': 'text/html'});
//   //Return the url part of the request object:
//   res.write(req.url);
//   res.end();
// }).listen(8080);

  })
server.listen(8080,()=>{
    console.log("port http://localhost:8080/")

})