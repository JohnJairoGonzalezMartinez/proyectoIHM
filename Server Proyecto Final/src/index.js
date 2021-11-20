const express = require('express')
const app = express()
const http = require('http')
const server = http.createServer(app)
const { Server } = require("socket.io")
const io = new Server(server, {
    cors: {
        origin: "*"
    }
})
const cors = require('cors')

io.on('connection', (socket) => {});

server.listen(3000, () => {
    console.log('listening on *:3000')
})

app.use( express.json() )
app.use( cors() )

/*
const { Board, Sensor } = require("johnny-five");
const board = new Board();

board.on("ready", () => {
    const rotationPot = new Sensor({pin: "A3",freq: 1000});
    const sizePot = new Sensor({pin: "A4",freq: 1000});

    rotationPot.on("data", async () => { 
        const value = rotationPot.scaleTo(-10, 10)
        console.log( 'ROTATION POT : ', value );
        io.emit('move', {
            movement: value * 0.02,
        });

    });

    sizePot.on("data", async () => { 
        const value = sizePot.scaleTo(-10, 10)
        console.log( 'SIZE POT : ', value );
        io.emit('size', {
            scale: value * 0.05,
        });

    });

});

var keypress = require('keypress');
keypress(process.stdin);
process.stdin.on('keypress', function (ch, key) {
    let texture = ''
    switch(key.name){
        case 'up': texture = 'src/img1.jpg'; break;
        case 'down': texture = 'src/img2.jpg'; break;
        case 'left': texture = 'src/img3.jpg'; break;
        case 'right': texture = 'src/img4.jpg'; break;
        default: return
    }
    io.emit('texture', {
        texture
    })
});
process.stdin.setRawMode(true);
process.stdin.resume();
*/

io.on( 'connection', (socket)=>{
    console.log('CONNECTED');
    io.emit('saludo', "BUENA BUENA")

    socket.on( 'speed', (message)=>{
        console.log( message.speed );
        //TODO: Controlar velocidad carrito
    })

    socket.on( 'direction', (message)=>{
        console.log( message.direction );
        //TODO: Controlar direccion
    })
})



app.get( "/",  (req, res) => {
    res.sendFile('index.html' , { root: "./src/serve/"})
})

app.get( "/src/:source", (req, res) =>{
    const {source} = req.params
    res.sendFile(source , { root: "./src/serve/"})
})