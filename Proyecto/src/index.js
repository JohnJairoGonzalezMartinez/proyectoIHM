const express = require('express')
const app = express()
const http = require('http')
const server = http.createServer(app)
const { Server } = require("socket.io")
const io = new Server(server)

io.on('connection', (socket) => {});

server.listen(3000, () => {
    console.log('listening on *:3000')
})

app.use( express.json() )

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})





app.post( "/move", (req, res) =>{
    io.emit('move', req.body); 
    res.send('ok')
})

app.get( "/",  (req, res) => {    
    res.sendFile('/index.html' , { root: "./src/"})
})

app.get( "/OrbitControls.js", (req, res) =>{
    res.sendFile('/OrbitControls.js' , { root: "./src/"})
})

app.get( "/three.module.js", (req, res) =>{
    res.sendFile('/three.module.js' , { root: "./src/"})
})

app.get( "/three.module.js", (req, res) =>{
    res.sendFile('/three.module.js' , { root: "./src/"})
})

app.get( "/img1.jpg", (req, res) =>{
    res.sendFile('/img1.jpg' , { root: "./src/"})
})