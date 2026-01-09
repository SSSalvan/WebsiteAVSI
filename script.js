document.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('#mobile-menu');
    const menuLinks = document.querySelector('.nav-menu');
    const navItems = document.querySelectorAll('.nav-menu li');

    // Toggle Navigasi Mobile
    if (menu) {
        menu.addEventListener('click', () => {
            menu.classList.toggle('is-active');
            menuLinks.classList.toggle('active');

            // Animasi masuk satu-persatu untuk menu item
            navItems.forEach((link, index) => {
                if (link.style.transitionDelay) {
                    link.style.transitionDelay = '';
                } else {
                    link.style.transitionDelay = `${(index * 0.1) + 0.2}s`;
                }
            });
        });
    }

    // Animasi Reveal saat Scroll (Loading Effect)
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