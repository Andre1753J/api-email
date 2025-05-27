import express from "express";
import http from "http";
import setupSocket from "./socket.js";

const app = express();
const server = http.createServer(app);

setupSocket(server); // Inicia WebSockets

server.listen(8080, () => console.log("Servidor rodando na porta 8080"));
