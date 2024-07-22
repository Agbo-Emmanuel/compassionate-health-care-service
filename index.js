const openMenu = document.getElementById('open');
const closeMenu = document.getElementById('close');
const menu = document.getElementById('menu');



openMenu.addEventListener('click', () => {
    openMenu.style.display = "none";
    closeMenu.style.display = "flex";
    menu.style.display = "flex";
});

closeMenu.addEventListener('click', () => {
    closeMenu.style.display = "none";
    openMenu.style.display = "flex";
    menu.style.display = "none";
});