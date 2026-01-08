// Menunggu hingga dokumen selesai dimuat
document.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('#mobile-menu');
    const menuLinks = document.querySelector('.nav-menu');

    // Fungsi untuk toggle menu saat hamburger diklik
    menu.addEventListener('click', function() {
        menu.classList.toggle('is-active');
        menuLinks.classList.toggle('active');
    });

    // Opsional: Menutup menu secara otomatis saat salah satu link diklik
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            menu.classList.remove('is-active');
            menuLinks.classList.remove('active');
        });
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('#mobile-menu');
    const menuLinks = document.querySelector('.nav-menu');
    const navItems = document.querySelectorAll('.nav-menu li');

    // 1. Mobile Menu Toggle with Staggered Links
    menu.addEventListener('click', function() {
        menu.classList.toggle('is-active');
        menuLinks.classList.toggle('active');

        navItems.forEach((link, index) => {
            // Adds a slight delay to each menu item for a 'wave' effect
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.transitionDelay = `${index * 0.1 + 0.2}s`;
            }
        });
    });

    // 2. Scroll Reveal Observer (The "Loading" Effect)
    const revealElements = document.querySelectorAll('.reveal');
    
    const revealOnScroll = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, { threshold: 0.1 }); // Trigger when 10% of the card is visible

    revealElements.forEach(el => revealOnScroll.observe(el));
});