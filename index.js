import { Server } from "socket.io";
import express from "express";
import http from "http";
import setupSocket from "./socket.js";

const app = express();
const server = http.createServer(app);

setupSocket(server); // Inicia WebSockets

server.listen(9000, () => console.log("Servidor rodando na porta 9000"));
