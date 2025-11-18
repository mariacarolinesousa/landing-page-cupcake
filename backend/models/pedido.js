const mongoose = require("mongoose");

const PedidoSchema = new mongoose.Schema({
    nome: String,
    telefone: Number,
    pedido: String,
    data: {
        type: Data,
        default: Date.now
    }
});

module.exports = mongoose.model("Pedido", PedidoSchema);

await transporter.sendMail({
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_DESTINO,
    subject: "Novo pedido de cupcake!",
    html:  `
    <h2>Novo Pedido Recebido!</h2>
    <p><strong>Nome:</strong> ${nome}</p>
    <p><strong>Telefone:</strong> ${telefone}</p>
    <p><strong>Pedido:</strong> ${pedido}</p>
    <p><strong>Data:</strong> ${new Date()}</p>
  `
})