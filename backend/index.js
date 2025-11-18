require("dotenv").config();
const express = require("express");
const cors = require("cors");

const app = express();

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