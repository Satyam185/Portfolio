// Initialize Lucide icons
lucide.createIcons();

// Mobile menu functionality
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const mobileNav = document.getElementById('mobileNav');
const menuIcon = document.getElementById('menuIcon');
const closeIcon = document.getElementById('closeIcon');

mobileMenuBtn.addEventListener('click', () => {
    mobileNav.classList.toggle('active');
    
    if (mobileNav.classList.contains('active')) {
        menuIcon.style.display = 'none';
        closeIcon.style.display = 'block';
        mobileNav.style.display = 'block';
    } else {
        menuIcon.style.display = 'block';
        closeIcon.style.display = 'none';
        mobileNav.style.display = 'none';
    }
});

// Close mobile menu when clicking on links
document.querySelectorAll('.mobile-nav-link').forEach(link => {
    link.addEventListener('click', () => {
        mobileNav.classList.remove('active');
        menuIcon.style.display = 'block';
        closeIcon.style.display = 'none';
        mobileNav.style.display = 'none';
    });
});

// Navbar scroll effect
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Smooth scrolling for navigation links
function scrollToSection(selector) {
    const element = document.querySelector(selector);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
}

// Add click event listeners to navigation links
document.querySelectorAll('.nav-link, .mobile-nav-link').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const href = link.getAttribute('href');
        scrollToSection(href);
    });
});

// Particles animation for hero section
function createParticles() {
    const particlesContainer = document.getElementById('particles');
    const particleCount = 50;
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 6 + 's';
        particle.style.animationDuration = (Math.random() * 4 + 4) + 's';
        particlesContainer.appendChild(particle);
    }
}

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animated');
            
            // Animate skill bars
            if (entry.target.classList.contains('skill-category')) {
                const skillBars = entry.target.querySelectorAll('.skill-progress');
                skillBars.forEach((bar, index) => {
                    setTimeout(() => {
                        const width = bar.getAttribute('data-width');
                        bar.style.width = width + '%';
                    }, index * 200);
                });
            }
        }
    });
}, observerOptions);

// Observe elements for animation
function observeElements() {
    const elementsToAnimate = document.querySelectorAll(
        '.section-header, .about-content, .skill-category, .project-card, .timeline-item, .contact-content, .feature-card'
    );
    
    elementsToAnimate.forEach(el => {
        el.classList.add('animate-on-scroll');
        observer.observe(el);
    });
}

// Contact form handling
/*const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(contactForm);
    const data = Object.fromEntries(formData);
    
    // Here you would typically send the data to a server
    console.log('Form submitted:', data);
    
    // Show success message (you can customize this)
    alert('Thank you for your message! I\'ll get back to you soon.');
    
    // Reset form
    contactForm.reset();
});*/

// Typing effect for hero title
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Add hover effects to project cards
function addProjectHoverEffects() {
    const projectCards = document.querySelectorAll('.project-card');
    
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0) scale(1)';
        });
    });
}

// Add hover effects to buttons
function addButtonHoverEffects() {
    const buttons = document.querySelectorAll('.btn');
    
    buttons.forEach(button => {
        button.addEventListener('mouseenter', () => {
            if (button.classList.contains('btn-primary')) {
                button.style.transform = 'translateY(-2px)';
                button.style.boxShadow = '0 10px 25px rgba(59, 130, 246, 0.3)';
            } else if (button.classList.contains('btn-secondary')) {
                button.style.transform = 'translateY(-2px)';
                button.style.borderColor = '#ffffff';
                button.style.color = '#ffffff';
            }
        });
        
        button.addEventListener('mouseleave', () => {
            button.style.transform = 'translateY(0)';
            button.style.boxShadow = 'none';
            if (button.classList.contains('btn-secondary')) {
                button.style.borderColor = '#6b7280';
                button.style.color = '#d1d5db';
            }
        });
    });
}

// Add social link hover effects
function addSocialHoverEffects() {
    const socialLinks = document.querySelectorAll('.social-link');
    
    socialLinks.forEach(link => {
        link.addEventListener('mouseenter', () => {
            link.style.transform = 'scale(1.2) rotate(360deg)';
            link.style.color = '#ffffff';
        });
        
        link.addEventListener('mouseleave', () => {
            link.style.transform = 'scale(1) rotate(0deg)';
            link.style.color = '#9ca3af';
        });
    });
}

// Scroll indicator animation
function animateScrollIndicator() {
    const scrollIndicator = document.querySelector('.scroll-indicator');
    
    if (scrollIndicator) {
        setInterval(() => {
            scrollIndicator.style.animation = 'none';
            setTimeout(() => {
                scrollIndicator.style.animation = 'bounce 2s infinite';
            }, 10);
        }, 3000);
    }
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Initialize particles
    createParticles();
    
    // Initialize animations
    observeElements();
    
    // Initialize hover effects
    addProjectHoverEffects();
    addButtonHoverEffects();
    addSocialHoverEffects();
    
    // Initialize scroll indicator animation
    animateScrollIndicator();
    
    // Re-initialize Lucide icons after dynamic content
    lucide.createIcons();
});

// Handle window resize
window.addEventListener('resize', () => {
    // Close mobile menu on resize
    if (window.innerWidth > 768) {
        mobileNav.classList.remove('active');
        menuIcon.style.display = 'block';
        closeIcon.style.display = 'none';
        mobileNav.style.display = 'none';
    }
});

// Add loading animation
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease';
    
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});

// Parallax effect for hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const parallax = document.querySelector('.hero-background');
    
    if (parallax) {
        const speed = scrolled * 0.5;
        parallax.style.transform = `translateY(${speed}px)`;
    }
});

// Add active state to navigation links based on scroll position
function updateActiveNavLink() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link, .mobile-nav-link');
    
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (window.scrollY >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
}

window.addEventListener('scroll', updateActiveNavLink);

// Add CSS for active nav links
const style = document.createElement('style');
style.textContent = `
    .nav-link.active,
    .mobile-nav-link.active {
        color: #ffffff !important;
    }
    
    .nav-link.active::after {
        width: 100% !important;
    }
`;
document.head.appendChild(style);
//for resume downlod

function downloadResume() {
    const link = document.createElement('a');
    link.href = 'Satyam_resume..pdf'; // Make sure the path is correct
    link.download = 'Satyam_resume..pdf'; // You can change the file name here
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}
// sending email

