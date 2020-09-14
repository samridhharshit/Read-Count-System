const express = require('express')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const csrf = require('csurf')
const http = require('http')
const socketIo = require('socket.io')

const sequelize = require('./database/models')

const app = express()
const port = process.env.PORT || 5000
const csrfMiddleware = csrf({ cookie: true })
const server = http.createServer(app)
const io = socketIo.listen(server)

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cookieParser())
app.use(csrfMiddleware)

app.all('*', (req, res, nxt) => {
    res.cookie("XSRF-TOKEN", req.csrfToken())
    nxt()
})

sequelize.authenticate()
    .then(() => console.log('Database connected...'))
    .catch((e) => console.log('Error: ' + e))

// managing all REST apis
app.use('/', require('./routes/index'))

// managing all socket io events
let record = []
record.clientId = [];
io.sockets.on('connection', (socket) => {
    console.log('user connected')
    socket.on('room', (room) => {
        socket.join(room)

        let clientsInRoom = io.sockets.adapter.rooms[room];
        console.log(Object.keys(clientsInRoom.sockets))

        let numClients = clientsInRoom ? Object.keys(clientsInRoom.sockets).length : 0;
        const userId = Object.keys(clientsInRoom.sockets)[Object.keys(clientsInRoom.sockets).length - 1]


        const roomIndex = record.findIndex(r => r.roomId === room)

        if (roomIndex !== -1) {
            const clientIndex = record.clientId ? record.clientId.findIndex(value => value === userId) : null
            if (clientIndex === -1) {
                record[roomIndex].clientsCount = numClients
                record[roomIndex].clientId.push(userId)
            }
        } else {
            record.push({
                roomId: room,
                clientsCount: numClients,
                clientId: [userId]
            })
        }
        console.log(record)
        console.log('Room ' + room + ' now has ' + numClients + ' client(s)');

        io.sockets.in(room).emit('updateCount', {
            removedUser: false,
            message: `users count is ${numClients} and current use id is ${userId}`,
            clientsCount: numClients,
            currentUser: userId
        })
    });

    socket.on('unmountUser',async (data) => {
        await socket.leave(data.roomId, () => {
            let clientsInRoom = io.sockets.adapter.rooms[data.roomId];

            const roomIndex = (record.length !== 0) ? record.findIndex(room => room.roomId === data.roomId) : -1
            if (roomIndex !== -1) {
                const clientIdIndex = record.clientId ? record.clientId.findIndex(value => value === data.userIdToRemove) : null
                if (clientIdIndex !== -1) {
                    record.clientId.splice(index, 1)
                    record[index].clientsCount -= 1
                }
            }

            console.log(record)
            // let numClients = clientsInRoom ? Object.keys(clientsInRoom.sockets).length : 0;

            console.log('Room ' + record.roomId + ' now has ' + record.clientsCount + ' client(s)');
            io.sockets.in(record.roomId).emit('updateCount', {
                removedUser: true,
                message: `users count is ${record.clientsCount}`,
                clientsCount: record.clientsCount
            })
        })

    })

    socket.on('disconnect', () => {
        console.log('user disconnected')
    })
})


if(process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'))
}

server.listen(port, () => console.log(`listening to port ${port}`))

module.exports = io
