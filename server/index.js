const express = require('express');
const env = require('dotenv');
const { WebSocketServer } = require('ws');

const app = express(); 
env.config();
const PORT = process.env.PORT;

app.use(express.static("../client")); // frontend connect

const server = app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
// Create an instance of WebSocketServer(wss) using the same express server (server) instance.
// This allows WebSocketServer (wss) and Express(server) to share the same port.

const wss = new WebSocketServer({ server });

wss.on("connection", (ws) => {
    // 'connection' is an event triggered when a client connects to the WebSocket server.
    // 'ws' represents the WebSocket object for the connected client.

    ws.on("message", (data) => {
        // 'message' is an event triggered when the server receives a message from the client.

        console.log("%s", data);
    });
    ws.send("Connected bhai !"); 
});
