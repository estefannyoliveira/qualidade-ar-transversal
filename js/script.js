const navControl = document.getElementById('nav-control');
const navList = document.querySelector('.nav-list')

function ativarMenu(event) {
    navList.classList.toggle('ativo');
}
navControl.addEventListener('click', ativarMenu);


const navListItens = document.querySelectorAll('.nav-item a');
function fecharMenu() {
    navList.classList.remove('ativo')
}

function cliqueItens(itens) {
    itens.addEventListener('click', fecharMenu)
}

navListItens.forEach(cliqueItens)