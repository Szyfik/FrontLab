document.addEventListener('DOMContentLoaded', () => {
    // Nawigacja mobilna
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const navItems = document.querySelectorAll('.nav-links a');

    if (hamburger && navLinks) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navLinks.classList.toggle('active');
        });

        // Zamykanie menu po kliknięciu w link
        navItems.forEach(item => {
            item.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navLinks.classList.remove('active');
            });
        });

        // Zamykanie menu po kliknięciu poza nim
        document.addEventListener('click', (e) => {
            if (!hamburger.contains(e.target) && !navLinks.contains(e.target)) {
                hamburger.classList.remove('active');
                navLinks.classList.remove('active');
            }
        });
    }

    // Aktywny link w nawigacji
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    navItems.forEach(item => {
        if (item.getAttribute('href') === currentPage) {
            item.classList.add('active');
        }
    });

    let wasWide = window.innerWidth > 1200;

    function handleTileSlideIn() {
        const isNowNarrow = window.innerWidth <= 1200;
        const animatedCards = [
            document.querySelector('.features-grid .feature-card:last-child'),
            document.querySelector('.services-container .service-card:last-child'),
            document.querySelector('.skills-grid .skill-card:last-child')
        ].filter(Boolean);

        if (wasWide && isNowNarrow) {
            // Przechodzimy z szerokiego na wąski układ – uruchom animację
            animatedCards.forEach(card => {
                card.classList.remove('slide-in'); // reset
                void card.offsetWidth; // reflow
                card.classList.add('slide-in');
            });
    // Animacja ostatnich kart w siatkach (features, services, skills)
    const animatedCards = [
        document.querySelector('.features-grid .feature-card:last-child'),
        document.querySelector('.services-container .service-card:last-child'),
        document.querySelector('.skills-grid .skill-card:last-child')
    ].filter(Boolean);

    animatedCards.forEach(card => {
        if (card) console.log('Znaleziono kartę do animacji:', card);
    });

    if ('IntersectionObserver' in window) {
        const observer = new IntersectionObserver((entries, obs) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    console.log('Dodaję klasę animate-in:', entry.target);
                    entry.target.classList.add('animate-in');
                    obs.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });

        animatedCards.forEach(card => observer.observe(card));
        // Fallback: jeśli po 2s klasa nie została dodana, dodaj ją ręcznie
        setTimeout(() => {
            animatedCards.forEach(card => {
                if (!card.classList.contains('animate-in')) {
                    console.log('Fallback: dodaję animate-in po czasie:', card);
                    card.classList.add('animate-in');
                }
            });
        }, 2000);
    } else {
        // Fallback: dodaj animację od razu
        animatedCards.forEach(card => card.classList.add('animate-in'));
    }
}); 