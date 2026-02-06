// Parallax Effect for Premium Section - Digital Silk Style
(function() {
    'use strict';

    const heroWrap = document.querySelector('.hero-bg_wrap');
    const heroSlides = document.querySelectorAll('.hero-bg_wrap-slides');

    if (!heroWrap) return;

    // Set initial rotation
    heroWrap.style.transform = 'rotate(8deg)';

    // Smooth scroll animation for columns
    let scrollPosition = 0;
    
    function animateScroll() {
        scrollPosition += 0.5;
        
        heroSlides.forEach((slide, index) => {
            const speed = index % 2 === 0 ? 1 : -1;
            const offset = (scrollPosition * speed) % 100;
            slide.style.transform = `translateY(${offset}%)`;
        });
        
        requestAnimationFrame(animateScroll);
    }

    // Start animation
    animateScroll();

    // Animate on load
    window.addEventListener('load', function() {
        heroWrap.style.opacity = '1';
    });
})();
