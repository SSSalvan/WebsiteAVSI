document.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('#mobile-menu');
    const menuLinks = document.querySelector('.nav-menu');
    const allLinks = document.querySelectorAll('.nav-link, .btn-primary');
    // Tambahkan ini di bawah kode toggle menu yang sudah ada
    const navLinks = document.querySelectorAll('.nav-link, .nav-menu .btn');

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            const menu = document.querySelector('#mobile-menu');
            const menuLinks = document.querySelector('.nav-menu');
            
            menu.classList.remove('is-active');
            menuLinks.classList.remove('active');
        });
    });

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