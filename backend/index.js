import express from 'express';
import dotenv from 'dotenv';
import dbconn from './dbConnect/dbConnection.js';
import cors from 'cors';
import user from "./routes/userRoutes.js";
import ai from "./routes/aiRoutes.js";
import http from 'http';
import { Server } from 'socket.io';

const port = 4000 || process.env.PORT;
const app = express(); 

dotenv.config(); 
app.use(cors());       
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Import Routes
app.use("/api/v1/auth", user);
app.use("/api/v1/ai-call", ai);
app.use("/uploads", express.static("uploads"));

app.get("/", (req, res) => {
    res.send("Hello World");   
});
 
const server = http.createServer(app);
const io = new Server(server, {
        cors: { 
            origin: "http://localhost:3000",
            methods: ["GET", "POST"]
        } 
});

io.on("connection", (socket) => {

    socket.emit("me", socket.id);

    socket.on("disconnect", () => {
        socket.broadcast.emit("callEnded");
    }
    );

    socket.on("callUser", (data) => {
        io.to(data.userToCall).emit("callUser", { signal: data.signalData, from: data.from, name: data.name });
    })
    
    socket.on("answerCall", (data) => {
        io.to(data.to).emit("callAccepted", {signal : data.signal, callerName: data.callerName});   
    });

}); 
server.listen(port, () => {
    dbconn(); // Connect to DB
    console.log("Connected to DB");
    console.log(`Server running on port ${port}`);
});     