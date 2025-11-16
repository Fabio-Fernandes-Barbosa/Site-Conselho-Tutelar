   // Funções para os três cards
function showCard(id) {
    document.getElementById(`card-visible${id}`).classList.add("card-hidden");
    document.getElementById(`card-invisible${id}`).classList.remove("card-hidden");
}

function hiddenCard(id) {
    document.getElementById(`card-visible${id}`).classList.remove("card-hidden");
    document.getElementById(`card-invisible${id}`).classList.add("card-hidden");
}
let index = 0;
const slides = document.querySelectorAll('.slide');

function showSlide() {
    slides.forEach((slide, i) => {
    slide.classList.toggle('active', i === index);
});
    index = (index + 1) % slides.length;
}

setInterval(showSlide, 3000); // troca a cada 3 segundos

document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.getElementById('menu-toggle');
  const menu = document.getElementById('menu');

  if (!toggle || !menu) {
    // Um dos elementos não existe — não quebra o resto do script
    console.warn('Menu mobile: elemento #menu-toggle ou #menu não encontrado.');
    return;
  }

  toggle.addEventListener('click', () => {
    menu.classList.toggle('show');
    // opcional: trocar o ícone ☰ por ✕
    toggle.textContent = menu.classList.contains('show') ? '✕' : '☰';
  });

  // Fecha o menu clicando em qualquer link (boa prática)
  menu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      menu.classList.remove('show');
      toggle.textContent = '☰';
    });
  });
});
