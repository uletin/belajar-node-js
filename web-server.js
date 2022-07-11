let http = require('http')

let server = http.createServer(function(req, res){
    res.end("Hi, Selamat Datang di Node JS")
})

server.listen(8000)

console.log("Server Running on http://localhost:8000")