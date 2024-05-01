window.addEventListener('scroll', function() {
    const header = document.querySelector('.header2');
    if (window.scrollY > 0) { // Si se ha hecho scroll hacia abajo
        header.classList.add('fixed-nav'); // Añadir la clase para la barra de navegación fija
    } else {
        header.classList.remove('fixed-nav'); // Quitar la clase si volvemos arriba
    }
});