require("dotenv").config();
const express = require("express");
const cors = require("cors");

const app = express();

const mongoose = require("mongoose")

const pedido = require("./models/pedido");
app.post("/pedido", async (req, res) => {
    try {
        const { nome, telefone, pedido } = req.body

        //Salvando no banco
        const novoPedido = await pedido.create({ nome, telefone, pedido });
        res.json({ ok: true, message: "Pedido recebido!", pedido: novoPedido});
    } catch (error) {
        res.status(500).json({ ok: false, error})
    }
});

mongoose
.connect(process.env.MONGODB_URI)
.then(() => console.log("Conectado ao MongoDB!"))
.catch(err => console.log("Erro MongoDB:", err));
//permite JSON no body
app.use(express.json());

//Permite requisições no seu front
app.use(cors());

app.get("/", (req, res) => {
    res.send("Servidor Funcionando!");
});

app.listen(3000, () => {
    console.log("Backend rodando na porta 3000")
});

//configurando o servidor de email
const nodemailer = require("nodemailer");
const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
});