document.addEventListener('DOMContentLoaded', () => {
    // --- 1. Mobile Menu Logic ---
    const menu = document.querySelector('#mobile-menu');
    const menuLinks = document.querySelector('.nav-menu');

    if (menu) {
        menu.addEventListener('click', () => {
            menu.classList.toggle('is-active');
            menuLinks.classList.toggle('active');
        });
    }

    // --- 2. Scroll Reveal Logic (FIX FOR GONE PROJECTS) ---
    const revealElements = document.querySelectorAll('.reveal');

    const revealOnScroll = () => {
        const windowHeight = window.innerHeight;
        revealElements.forEach(el => {
            const elementTop = el.getBoundingClientRect().top;
            const revealPoint = 150; // Trigger when 150px into view
            
            if (elementTop < windowHeight - revealPoint) {
                el.classList.add('active');
            }
        });
    };

    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll(); // Run once on load to show elements already in view

    // --- 3. Modal Gallery Logic ---
    const modal = document.getElementById('project-modal');
    const modalGrid = document.getElementById('modal-gallery-grid');
    const closeBtn = document.querySelector('.modal-close');
    const projectCards = document.querySelectorAll('.card[data-gallery]');

    projectCards.forEach(card => {
        card.addEventListener('click', () => {
            const images = card.getAttribute('data-gallery').split(',');
            modalGrid.innerHTML = '';
            
            images.forEach(src => {
                const img = document.createElement('img');
                img.src = src.trim();
                modalGrid.appendChild(img);
            });

            modal.style.display = 'block';
            document.body.style.overflow = 'hidden'; 
        });
    });

    if (closeBtn) {
        closeBtn.addEventListener('click', () => {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        });
    }

    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });
});