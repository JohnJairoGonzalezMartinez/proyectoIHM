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

const { Board, Sensor } = require("johnny-five");
const board = new Board();

board.on("ready", () => {
    const potentiometer = new Sensor({
        pin: "A3",
        freq: 1000
    });     

    let lastValue = 0

    potentiometer.on("data", async () => { 
        const value = potentiometer.scaleTo(-10, 10)
        io.emit('move', {
            movement: value * 0.02,
        });
        console.log( "Readed Value:", value )
  });
});

app.get( "/",  (req, res) => {    
    res.sendFile('index.html' , { root: "./src/serve/"})
})

app.get( "/OrbitControls.js", (req, res) =>{
    res.sendFile('/OrbitControls.js' , { root: "./src/serve/"})
})

app.get( "/three.module.js", (req, res) =>{
    res.sendFile('/three.module.js' , { root: "./src/serve/"})
})

app.get( "/three.module.js", (req, res) =>{
    res.sendFile('/three.module.js' , { root: "./src/serve/"})
})

app.get( "/img1.jpg", (req, res) =>{
    res.sendFile('/img1.jpg' , { root: "./src/serve/"})
})