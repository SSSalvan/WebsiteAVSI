document.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('#mobile-menu');
    const menuLinks = document.querySelector('.nav-menu');
    const allLinks = document.querySelectorAll('.nav-link, .btn-primary');

    // Toggle menu
    menu.addEventListener('click', () => {
        menu.classList.toggle('is-active');
        menuLinks.classList.toggle('active');
    });

    // Menutup menu saat salah satu link diklik
    allLinks.forEach(link => {
        link.addEventListener('click', () => {
            menu.classList.remove('is-active');
            menuLinks.classList.remove('active');
        });
    });
});