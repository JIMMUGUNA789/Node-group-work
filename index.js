const http = require('http')
const dotenv = require('dotenv')
dotenv.config()
const server = http.createServer((req, res)=>{
    res.writeHead(200,{'Content-Type':'text/html'})
   
   res.write("<h1>hello world</h1>")
   res.end()
})
const PORT = process.env.PORT ||  3000

server.listen(PORT,()=>{
    console.log(`server running on http://localhost:${PORT}`)
})