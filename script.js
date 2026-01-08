document.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('#mobile-menu');
    const menuLinks = document.querySelector('.nav-menu');
    const navItems = document.querySelectorAll('.nav-menu li');

    // 1. Mobile Menu Toggle Logic
    const toggleMenu = () => {
        menu.classList.toggle('is-active');
        menuLinks.classList.toggle('active');

        // Staggered Link Animation
        navItems.forEach((link, index) => {
            if (link.style.transitionDelay) {
                link.style.transitionDelay = '';
            } else {
                // Adds 0.1s delay between each item
                link.style.transitionDelay = `${(index * 0.1) + 0.2}s`;
            }
        });
    };

    menu.addEventListener('click', toggleMenu);

    // Close menu when clicking a link
    document.querySelectorAll('.nav-link, .btn').forEach(n => n.addEventListener('click', () => {
        menu.classList.remove('is-active');
        menuLinks.classList.remove('active');
        navItems.forEach(item => item.style.transitionDelay = '');
    }));

    // 2. Scroll Reveal Observer (The "Loading" Animation)
    const revealElements = document.querySelectorAll('.reveal');
    
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                // Optional: Stop observing once shown
                // revealObserver.unobserve(entry.target); 
            }
        });
    }, { 
        threshold: 0.15, // Trigger when 15% of element is visible
        rootMargin: '0px 0px -50px 0px' // Triggers slightly before it enters screen
    });

    revealElements.forEach(el => revealObserver.observe(el));
});