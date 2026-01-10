document.addEventListener('DOMContentLoaded', () => {
    // 1. NAVIGATION & MOBILE MENU
    const menuToggle = document.querySelector('#mobile-menu');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', () => {
            menuToggle.classList.toggle('is-active');
            navMenu.classList.toggle('active');
        });

        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                menuToggle.classList.remove('is-active');
                navMenu.classList.remove('active');
            });
        });
    }

    // 2. REVEAL ON SCROLL (MOBILE-OPTIMIZED)
    const revealElements = document.querySelectorAll('.reveal');

    const revealOptions = {
        threshold: 0.01,
        rootMargin: "0px 0px -10px 0px"
    };

    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target);
            }
        });
    }, revealOptions);

    revealElements.forEach(el => {
        if (window.innerWidth <= 768) {
            el.classList.add('active');
        } else {
            revealObserver.observe(el);
        }
    });

    // 3. MODAL GALLERY LOGIC
    const modal = document.getElementById('project-modal');
    const modalGrid = document.getElementById('modal-gallery-grid');
    const closeBtn = document.querySelector('.modal-close');
    const projectCards = document.querySelectorAll('.card[data-gallery]');

    if (modal && modalGrid) {
        projectCards.forEach(card => {
            card.addEventListener('click', () => {
                const imageData = card.getAttribute('data-gallery');
                if (!imageData) return;

                const images = imageData.split(',');
                modalGrid.innerHTML = '';
                
                images.forEach(src => {
                    const img = document.createElement('img');
                    img.src = src.trim();
                    img.loading = "lazy"; 
                    modalGrid.appendChild(img);
                });

                modal.style.display = 'block';
                document.body.style.overflow = 'hidden'; 
            });
        });

        const closeModal = () => {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        };

        if (closeBtn) closeBtn.addEventListener('click', closeModal);

        window.addEventListener('click', (e) => {
            if (e.target === modal) closeModal();
        });
        
        window.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && modal.style.display === 'block') closeModal();
        });
    }
});