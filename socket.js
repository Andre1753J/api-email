import { Server } from "socket.io";
import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

export default function setupSocket(server) {
    console.log("entrou no criar o server");
    
    const io = new Server(server, {
        cors: {
            origin: "*",
            methods: ["GET", "POST"]
        }
    });

    console.log("criou o server")

    io.on("connection", (socket) => {
        console.log("Cliente conectado");

        socket.on("teste", async (data) => {
            socket.emit({ message: "foi" })
        })
        socket.on("disconnect", () => { console.log("cliente off") })
        /* 
        
        socket.on("enviarEmail", async (data) => {
            const { destino, conteudo } = data;
 
            let transporter = nodemailer.createTransport({
                service: "gmail",
                auth: {
                    type: "OAuth2",
                    clientId: process.env.CLIENTID,
                    clientSecret: process.env.CLIENTSECRET,
                    refreshToken: process.env.REFRESHTOKEN,
                    user: "mandaemeil222@gmail.com",
                    pass: "25252525Bb"
                }
            });
 
            let mailOptions = {
                from: "mandaemeil222@gmail.com",
                to: destino,
                subject: "Assunto do Email",
                text: `${conteudo} - Enviado via WebSocket`,
                html: "<b>Mensagem via WebSocket</b>"
            };
 
            try{
                let info = await transporter.sendMail(mailOptions);
                socket.emit("emailStatus", `Email enviado: ${info.response}`);
            }catch (error) {
                console.error(error);
                socket.emit("emailStatus", `Erro ao enviar email: ${error.message}`);
            }
         });
 
         socket.on("disconnect", () => console.log("Cliente desconectado"));
         */
    });


    return io;
}
