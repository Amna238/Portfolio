// ====== Dark/Light Mode Toggle ======
        const themeToggle = document.getElementById('themeToggle');
        const html = document.documentElement;

        // Check for saved theme preference
        const currentTheme = localStorage.getItem('theme') || 'light';
        html.setAttribute('data-theme', currentTheme);

        // Update icon based on theme
        if (currentTheme === 'dark') {
            themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
        } else {
            themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
        }

        // Toggle theme
        themeToggle.addEventListener('click', () => {
            const newTheme = html.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
            html.setAttribute('data-theme', newTheme);
            localStorage.setItem('theme', newTheme);
            
            // Update icon
            themeToggle.innerHTML = newTheme === 'dark' ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
        });

        // ====== Mobile Navigation Toggle ======
        const hamburger = document.querySelector('.hamburger');
        const navLinks = document.querySelector('.nav-links');
        
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            hamburger.classList.toggle('active');
        });
        
        // Close mobile menu when clicking a link
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
                hamburger.classList.remove('active');
            });
        });

        // ====== GSAP Animations ======
        gsap.registerPlugin(ScrollTrigger);
        
        // Hero section animation
        gsap.to('.hero-content h1', {
            opacity: 1,
            x: 0,
            duration: 1,
            ease: 'power3.out'
        });
        
        gsap.to('.hero-content h2', {
            opacity: 1,
            x: 0,
            duration: 1,
            delay: 0.3,
            ease: 'power3.out'
        });
        
        gsap.to('.hero-content p', {
            opacity: 1,
            y: 0,
            duration: 1,
            delay: 0.6,
            ease: 'power3.out'
        });
        
        gsap.to('.hero-img img', {
            opacity: 1,
            x: 0,
            duration: 1,
            delay: 0.9,
            ease: 'power3.out'
        });
        
        // About section animation
        gsap.utils.toArray('.about-text p').forEach((p, i) => {
            gsap.to(p, {
                scrollTrigger: {
                    trigger: p,
                    start: 'top 80%',
                },
                opacity: 1,
                y: 0,
                duration: 0.8,
                delay: i * 0.2,
                ease: 'power2.out'
            });
        });
        
        gsap.utils.toArray('.detail-card').forEach((card, i) => {
            gsap.to(card, {
                scrollTrigger: {
                    trigger: card,
                    start: 'top 80%',
                },
                opacity: 1,
                y: 0,
                duration: 0.8,
                delay: i * 0.2,
                ease: 'power2.out'
            });
        });
        
        // Skills section animation
        gsap.utils.toArray('.skill').forEach((skill, i) => {
            gsap.to(skill, {
                scrollTrigger: {
                    trigger: skill,
                    start: 'top 80%',
                },
                opacity: 1,
                y: 0,
                duration: 0.6,
                delay: i * 0.1,
                ease: 'power2.out'
            });
        });
        
        // Certificates section animation
        gsap.utils.toArray('.certificate-card').forEach((card, i) => {
            gsap.to(card, {
                scrollTrigger: {
                    trigger: card,
                    start: 'top 80%',
                },
                opacity: 1,
                y: 0,
                duration: 0.8,
                delay: i * 0.2,
                ease: 'power2.out'
            });
        });
        
        // Resume section animation
        gsap.utils.toArray('.resume-item').forEach((item, i) => {
            gsap.to(item, {
                scrollTrigger: {
                    trigger: item,
                    start: 'top 80%',
                },
                opacity: 1,
                y: 0,
                duration: 0.8,
                delay: i * 0.2,
                ease: 'power2.out'
            });
        });
        
        // Projects section animation
        gsap.utils.toArray('.project-card').forEach((card, i) => {
            gsap.to(card, {
                scrollTrigger: {
                    trigger: card,
                    start: 'top 80%',
                },
                opacity: 1,
                y: 0,
                duration: 0.8,
                delay: i * 0.2,
                ease: 'power2.out'
            });
        });
        
        // Contact section animation
        gsap.to('.contact-form', {
            scrollTrigger: {
                trigger: '.contact-container',
                start: 'top 80%',
            },
            opacity: 1,
            x: 0,
            duration: 0.8,
            ease: 'power2.out'
        });
        
        gsap.to('.contact-info', {
            scrollTrigger: {
                trigger: '.contact-container',
                start: 'top 80%',
            },
            opacity: 1,
            x: 0,
            duration: 0.8,
            ease: 'power2.out'
        });