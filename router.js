const http = require('http')
/**
 * 
 * @param {http.IncomingMessage} req 
 * @param {http.ServerResponse} res 
 */
const router = (req, res)=>{
    if (req.url==="/students"){
        const student=[
            {
                name:"John",
            },
            {
                name:"mwangi"
            }
        ]
        res.writeHead(200,{'Content-Type':'Application/json'})
   
   res.write(JSON.stringify(student))
   res.end()
    }
    else{
        res.writeHead(200,{'Content-Type':'text/html'})
   
        res.write("<h1>Not found 404</h1>")
        
        res.end()

    }
    
}
module.exports = router