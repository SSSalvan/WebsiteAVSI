document.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('#mobile-menu');
    const menuLinks = document.querySelector('.nav-menu');
    const navItems = document.querySelectorAll('.nav-menu li');

    // 1. Fungsi Navigasi Mobile
    menu.addEventListener('click', () => {
        menu.classList.toggle('is-active');
        menuLinks.classList.toggle('active');

        // Efek staggered (muncul satu per satu) pada link menu
        navItems.forEach((link, index) => {
            if (link.style.transitionDelay) {
                link.style.transitionDelay = '';
            } else {
                link.style.transitionDelay = `${(index * 0.1) + 0.2}s`;
            }
        });
    });

    // 2. Efek "Loading" Scroll (Intersection Observer)
    const revealElements = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, { threshold: 0.1 });

    revealElements.forEach(el => observer.observe(el));
});