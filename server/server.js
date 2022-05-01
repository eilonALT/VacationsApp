import express from "express";
import cors from 'cors'
import http from 'http'
import { Server } from 'socket.io';
import { vacationRouter } from "./controllers/vacation-controller.js";
import { UsersRouter } from "./controllers/users-controller.js";
const app = express();
app.use(express.json())
app.use(cors())

const server = http.createServer(app);

app.use('/api', vacationRouter)
app.use('/api', UsersRouter)

const io = new Server(server,
    {
        cors: {
            origin: 'http://localhost:3000',
            methods: 'GET, POST, PUT, DELETE'
        }
    }
);

io.on('connection', (socket) => {
    console.log(`New user connected with id: ${socket.id}`)

    socket.on('change', (data) => {
        socket.broadcast.emit('changed', data)
    })

    socket.on('disconnect', () => {
        console.log(`User disconnected with id: ${socket.id}`)
    })
})

server.listen(5000, () => {
    console.log('Server is running on port 5000')
})