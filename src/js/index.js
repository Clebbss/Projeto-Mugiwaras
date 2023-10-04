const botoes = document.querySelectorAll(".botao");


const Mugiwaras = document.querySelectorAll(".Mugiwaras");


botoes.forEach((botao, indice) => {
    botao.addEventListener("click", () => {


        desselecionarBotao();
        desselecionarMugiwaras();

        botao.classList.add("selecionado");
        Mugiwaras[indice].classList.add("selecionado");
    });
});

function desselecionarMugiwaras() {
    const MugiwarasSelecionado = document.querySelector(".Mugiwaras.selecionado");
    MugiwarasSelecionado.classList.remove("selecionado");
}

function desselecionarBotao() {
    const botaoSelecionado = document.querySelector(".botao.selecionado");
    botaoSelecionado.classList.remove("selecionado");
}

