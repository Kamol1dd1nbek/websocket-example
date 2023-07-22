const WebSocket = require("ws");
const dotenv = require('dotenv').config();

const server = new WebSocket.Server({ port: 3000 }, () => {
    console.log(`Chat has started`);
});

server.on("connection", (ws) => {
    console.log("New user connected");

    ws.on("message", (message) => {
        if (message == "/exit") {
            ws.close();
        } else {
            server.clients.forEach((client) => {
                if (client.readyState == WebSocket.OPEN) {
                    client.send(message.toString());
                }
            });
        }
    });
    ws.send("Welcome to chat 👋");
});