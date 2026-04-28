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

// Accordion Familia
let secoaFamilia = document.querySelectorAll(".secao-familia");

secoaFamilia.forEach(secao => {
    secao.addEventListener("click", () => {
        secao.classList.toggle("active");
        let painel = secao.nextElementSibling;
        painel.classList.toggle("active");
    });
});

// MODAL FORMULÁRIO
const btnAbrir = document.querySelector(".fale-gente");
const overlay = document.querySelector(".contato-overlay");
const btnFechar = document.querySelector(".fechar");

btnAbrir.addEventListener("click", () => {
    overlay.classList.add("active");
});

btnFechar.addEventListener("click", () => {
    overlay.classList.remove("active");
});