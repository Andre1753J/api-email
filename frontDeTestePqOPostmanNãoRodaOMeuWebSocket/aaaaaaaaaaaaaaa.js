// client.js
import { io } from "socket.io-client";

const socket = io("http://localhost:9000");

socket.on("connect", () => {
    console.log("Conectado ao servidor Socket.IO!");
    socket.emit("teste", { message: "Olá do cliente Node.js!" });
});

socket.on("message", (data) => {
    console.log("Mensagem do servidor:", data);
});

// Se o seu servidor emitir { message: "foi" } no evento 'teste'
socket.on("teste", (data) => {
    console.log("Evento 'teste' recebido do servidor:", data);
});

socket.on("disconnect", () => {
    console.log("Desconectado do servidor.");
});

socket.on("connect_error", (error) => {
    console.error("Erro de conexão:", error.message);
});