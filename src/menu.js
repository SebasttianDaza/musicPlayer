//* Declaracion de variables globales

const btn = document.getElementById('btn');
const menu = document.getElementById('sidemenu');


//* Agregar evento click al boton

btn.addEventListener('click', () => {
    changeMain();
});


const changeMain = () => {
     menu.classList.toggle('menu-expanded');
    menu.classList.toggle('menu-collapsed');

    document.body.classList.toggle('body-expanded');
}