const mensagem = document.getElementById("mensagem");
const pontuacaoEl = document.getElementById("pontuacao");

let pontos = 0;

// função para criar um coração
function criarCoracao() {
    const coracao = document.createElement("div");
    coracao.classList.add("coracao");
    coracao.textContent = "💖";

    // posição horizontal aleatória
    coracao.style.left = Math.random() * 90 + "vw";

    // duração da queda aleatoria
    const duracao = Math.random() * 3 + 3; 
    coracao.style.animationDuration = duracao + "s";

    document.body.appendChild(coracao);

    // clique no caração
    coracao.addEventListener("click", () => {
        pontos++;
        pontuacaoEl.textContent = "💖 " +  pontos;

        mostrarMensagem();

        coracao.remove();
    });

    // remover depois que cair
    setTimeout(() => {
        coracao.remove();
    }, duracao * 1000);
}

// função para mostrar a mensagem de amor 
function mostrarMensagem() {
    mensagem.textContent = "EU TE AMO MUITÃO ❤️";
    mensagem.style.opacity = 1;

    setTimeout(() => {
        mensagem.style.opacity = 0;
    }, 1000);
}

// criar corações a cada 800ms
setInterval(criarCoracao, 800);

// senha
const senhaCorreta = "TE AMO MUITÃO ISABELLA MARTINELLI FERRAZI DE OLIVEIRA";
const entarBtn = document.getElementById("entarBtn");
const senhaInput = document.getElementById("senhaInput");
const telaSenha = document.getElementById("tela-senha");
const conteudiSite = document.getElementById("conteudo-site");
const erroMsg = document.getElementById("erroMsg");

entrarBtn.addEventListener("click", () => {
    if(senhaInput.value === senhaCorreta){
        telaSenha.style.display = "none";
        conteudoSite.style.display = "block";
        iniciarjogo();
    } else{
        erroMsg.textContent = "Senha incorreta! 😡";
    }
});