document.addEventListener('DOMContentLoaded', function() {
    // Simple navigation toggle for mobile
    const navTrigger = document.querySelector('.nav-trigger');
    const siteNav = document.querySelector('.site-nav');

    if (navTrigger) {
        navTrigger.addEventListener('change', function() {
            siteNav.classList.toggle('open', this.checked);
        });
    }

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});