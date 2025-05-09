document.addEventListener('DOMContentLoaded', () => {
    // Kluczowe słowa do podkreślenia gradientem
    const highlightWords = [
        'przyszłość', 'startup', 'startupu', 'MVP', 'usługi', 'AI', 'wizytówka', 'kontakt', 'portfolio',
        'regulamin', 'polityka', 'web', 'dev', 'nowoczesne', 'wsparcie', 'realizacje',
        'projekt', 'zamów', 'premium', 'full-stack', 'utrzymanie', 'aktualizacje', 'mnie', '14', 'dni'
    ];

    document.querySelectorAll('h1').forEach(h1 => {
        const text = h1.textContent;
        h1.textContent = '';
        const words = text.split(' ');
        words.forEach((word, i) => {
            // Sprawdzamy czy słowo jest do podkreślenia (ignorujemy wielkość liter)
            const cleanWord = word.replace(/[^\wąćęłńóśźżĄĆĘŁŃÓŚŹŻ-]/gi, '').toLowerCase();
            // Specjalny przypadek: '14 dni' razem
            if (i < words.length - 1 && (cleanWord === '14' && words[i+1].replace(/[^\wąćęłńóśźżĄĆĘŁŃÓŚŹŻ-]/gi, '').toLowerCase() === 'dni')) {
                const span = document.createElement('span');
                span.textContent = word + ' ' + words[i+1];
                span.className = 'gradient-text';
                h1.appendChild(span);
                if (i < words.length - 2) h1.appendChild(document.createTextNode(' '));
                // Pomijamy następne słowo ('dni')
                words[i+1] = '';
                return;
            }
            if (highlightWords.includes(cleanWord)) {
                const span = document.createElement('span');
                span.textContent = word;
                span.className = 'gradient-text';
                h1.appendChild(span);
            } else if (word !== '') {
                h1.appendChild(document.createTextNode(word));
            }
            if (i < words.length - 1 && words[i+1] !== '') {
                h1.appendChild(document.createTextNode(' '));
            }
        });
    });
    
    // Hamburger menu
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    
    if (hamburger && navLinks) {
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            hamburger.classList.toggle('active');
        });
    }
    
    // Smooth scroll dla linków nawigacyjnych
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                // Zamknij menu mobilne po kliknięciu
                if (navLinks.classList.contains('active')) {
                    navLinks.classList.remove('active');
                    hamburger.classList.remove('active');
                }
            }
        });
    });
    
    // Animacja przy scrollowaniu
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
            }
        });
    }, observerOptions);
    
    // Obserwuj sekcje do animacji
    document.querySelectorAll('section').forEach(section => {
        section.classList.add('fade-in');
        observer.observe(section);
    });
    
    // 3D tilt effect dla kart
    const cards = document.querySelectorAll('.package-card');
    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = (y - centerY) / 10;
            const rotateY = (centerX - x) / 10;
            
            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`;
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
        });
    });
    
    // Dynamiczne pola formularza
    const projectType = document.getElementById('projectType');
    const dynamicFields = document.querySelector('.dynamic-fields');
    
    if (projectType && dynamicFields) {
        projectType.addEventListener('change', () => {
            const type = projectType.value;
            dynamicFields.innerHTML = '';
            
            switch (type) {
                case 'landing':
                    addField('pages', 'Liczba podstron', 'number');
                    addField('features', 'Główne funkcje', 'textarea');
                    break;
                case 'webapp':
                    addField('users', 'Szacowana liczba użytkowników', 'number');
                    addField('integrations', 'Wymagane integracje', 'textarea');
                    break;
                case 'fullstack':
                    addField('backend', 'Preferowane technologie backend', 'text');
                    addField('database', 'Typ bazy danych', 'text');
                    addField('scale', 'Planowana skala', 'select', [
                        'Startup (do 1000 użytkowników)',
                        'Średni biznes (do 10000 użytkowników)',
                        'Enterprise (powyżej 10000 użytkowników)'
                    ]);
                    break;
            }
        });
    }
    
    function addField(id, label, type, options = null) {
        const formGroup = document.createElement('div');
        formGroup.className = 'form-group';
        
        const labelElement = document.createElement('label');
        labelElement.setAttribute('for', id);
        labelElement.textContent = label;
        
        let input;
        if (type === 'select' && options) {
            input = document.createElement('select');
            options.forEach(option => {
                const optionElement = document.createElement('option');
                optionElement.value = option;
                optionElement.textContent = option;
                input.appendChild(optionElement);
            });
        } else {
            input = document.createElement(type === 'textarea' ? 'textarea' : 'input');
            input.type = type;
        }
        
        input.id = id;
        input.name = id;
        input.required = true;
        
        formGroup.appendChild(labelElement);
        formGroup.appendChild(input);
        dynamicFields.appendChild(formGroup);
    }
}); 