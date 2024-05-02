const http = require('http')
const fs = require('fs')
const url = require('url')
const StringDecoder = require("string_decoder")
const util = require('util')
const formidable = require('formidable')
const port = 3000

const server = http.createServer(function(req, res) {
    res.writeHead(200, "OK", { 'Content-Type': 'text/html' })
    let path = url.parse(req.url, true)
    let count = document.getElementById("adv-count").innerHTML
    console.log(count)
    res.write(util.inspect())
    res.write(data)
    res.end()
})

server.listen(port, function(error){
    if (error){
        console.log('Something went wrong', error)
    } else {
        console.log('Server is listening on port ' + port)
    }
})