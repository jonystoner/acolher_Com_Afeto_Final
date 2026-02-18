// Menu do hamburger
const hamburger = document.querySelector(".hamburger");
const navegacao = document.querySelector(".navegacao");
hamburger.addEventListener("click", () => navegacao.classList.toggle("active"));


// Botão de buca
const searchbnt = document.getElementById('search-btn');
const barraBusca = document.getElementById('barra-de-busca');
const input = document.getElementById('pesquisar');

searchbnt.addEventListener('click', () => {
    barraBusca.classList.toggle('active');

    if (barraBusca.classList.contains('active')) {
        input.focus();
    }
});
