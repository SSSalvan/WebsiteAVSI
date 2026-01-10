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

    // 2. REVEAL ON SCROLL
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
    const modalName = document.getElementById('modal-project-name');
    const closeBtn = document.querySelector('.modal-close');
    const projectCards = document.querySelectorAll('.card[data-gallery]');

    if (modal && modalGrid) {
        // Function to open the modal and lock scroll
        const openModal = (card) => {
            const imageData = card.getAttribute('data-gallery');
            const titleText = card.querySelector('h3').innerText;
            
            if (!imageData) return;

            modalName.innerText = titleText;
            modalGrid.innerHTML = '';
            
            const images = imageData.split(',');
            images.forEach(src => {
                const img = document.createElement('img');
                img.src = src.trim();
                img.loading = "lazy";
                modalGrid.appendChild(img);
            });

            modal.style.display = 'block';
            
            // LOCKS THE SCROLL using the class we made
            document.body.classList.add('modal-open'); 
        };

        // Function to close the modal and unlock scroll
        const closeModal = () => {
            modal.style.display = 'none';
            
            // UNLOCKS THE SCROLL
            document.body.classList.remove('modal-open'); 
        };

        // Attach listeners once
        projectCards.forEach(card => {
            card.addEventListener('click', () => openModal(card));
        });

        if (closeBtn) closeBtn.addEventListener('click', closeModal);

        window.addEventListener('click', (e) => {
            if (e.target === modal) closeModal();
        });

        window.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && modal.style.display === 'block') closeModal();
        });
    }
});