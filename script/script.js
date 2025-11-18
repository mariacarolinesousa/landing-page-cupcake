const btnPedido = document.getElementById("btn-modal");
const modal = document.getElementById("modal");
const closeModal = document.getElementById("fechar");

//ao clicar no botão, abre o modal
btnPedido.addEventListener("click", () => {
    modal.style.display = "block";
});

closeModal.addEventListener("click", () => {
    modal.style.display = "none";
});

//se clicar no x, fecha o modal
modal.addEventListener("click", (e) => {
    if (e.target === modal) {
        modal.style.display = "none";
    }
});

//conectando o modal ao backend
document.getElementById("formPedido").addEventListener("submit", async (e) => {
    e.preventDefault();

    const dados = {
        nome: e.target.nome.value,
        telefone: e.target.telefone.value,
        pedido: e.target.pedido.value
    };

    const req = await fetch("http://localhost:3000/pedido", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(dados)
    });

    const res = await req.json();

    alert(res.message);
});