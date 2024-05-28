import express from "express";
import { WebSocketServer } from "ws";

const app = express();
const port = 8080;

const server = app.listen(port, () => {
    console.log("server is listening...");
})
// app.listen returns us an instance of server to us

// now create a web socket server and pass serever instance in it
const wss = new WebSocketServer({ server });// insead of server here you van pass any port number

//here connection is an event
wss.on("connection", (ws) => {
    ws.on("message", (data) =>{
        console.log("data from client %s: ", data);
        ws.send("thankes buddy!!");
    })
})

