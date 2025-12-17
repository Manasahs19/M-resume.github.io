document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth' });
                }
            });
        });

        // Scroll animations
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -100px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.animation = 'fadeInUp 0.8s ease forwards';
                }
            });
        }, observerOptions);

        document.querySelectorAll('.project-card, .skill-card').forEach(el => {
            observer.observe(el);
        });
         document.querySelectorAll('a[href^="#"]').forEach(link => {
        link.addEventListener("click", function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute("href"))
                .scrollIntoView({ behavior: "smooth" });
        });
    });