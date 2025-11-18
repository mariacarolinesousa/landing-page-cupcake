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

