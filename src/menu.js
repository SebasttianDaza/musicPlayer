
/**
 * //* Declaracion de variables globales
 * @var {btn} variable que almacena el boton de cambio de pagina
 * @var {menu} variable que almacena el menu
 * @var {icon} variable que almacena el icono del menu
 */

const btn = document.getElementById("menu-btn");
const menu = document.getElementById('sidemenu');
const icon = document.getElementById('icon');


//* Agregar evento click al boton

btn.addEventListener('click', () => {
    changeMain();
});



//* Function para hacer interactivo el menu

const changeMain = () => {
    //* Cambiar el estilo del menu
    menu.classList.toggle('active'); 
    
    //* Cambiar el icono del menu
    if (icon.classList.contains('bi-circle')) {
        icon.classList.replace('bi-circle', 'bi-circle-fill');
    } else {
        icon.classList.replace('bi-circle-fill', 'bi-circle');
    }
    
}