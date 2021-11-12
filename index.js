const http = require('http')
const dotenv = require('dotenv')
const router = require('./router')
dotenv.config()
const server = http.createServer(router)
const PORT = process.env.PORT ||  3000

server.listen(PORT,()=>{
    console.log(`server running on http://localhost:${PORT}`)
})