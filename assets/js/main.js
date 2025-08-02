// Portfolio JavaScript functionality

// Project carousel functionality
let currentProject = 0;
const totalProjects = 3;

function nextProject() {
    currentProject = (currentProject + 1) % totalProjects;
    updateCarousel();
}

function prevProject() {
    currentProject = (currentProject - 1 + totalProjects) % totalProjects;
    updateCarousel();
}

function goToProject(index) {
    currentProject = index;
    updateCarousel();
}

function updateCarousel() {
    const carousel = document.getElementById('projectCarousel');
    if (carousel) {
        const translateX = -currentProject * 100;
        carousel.style.transform = `translateX(${translateX}%)`;
    }
    
    // Update indicators
    const indicators = document.querySelectorAll('.project-indicator');
    indicators.forEach((indicator, index) => {
        if (index === currentProject) {
            indicator.classList.remove('bg-orange-200');
            indicator.classList.add('bg-orange-600');
        } else {
            indicator.classList.remove('bg-orange-600');
            indicator.classList.add('bg-orange-200');
        }
    });
}

// Auto-advance carousel
function startCarouselAutoplay() {
    setInterval(() => {
        nextProject();
    }, 5000); // Auto-advance every 5 seconds
}

// Smooth scrolling for navigation links
document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const mobileMenuButton = document.getElementById('mobileMenuButton');
    const mobileMenu = document.getElementById('mobileMenu');
    
    if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', function() {
            mobileMenu.classList.toggle('hidden');
        });
        
        // Close mobile menu when clicking outside
        document.addEventListener('click', function(e) {
            if (!mobileMenuButton.contains(e.target) && !mobileMenu.contains(e.target)) {
                mobileMenu.classList.add('hidden');
            }
        });
        
        // Close mobile menu on scroll
        window.addEventListener('scroll', function() {
            mobileMenu.classList.add('hidden');
        });
    }

    // Check if FontAwesome loaded, if not use fallback
    function checkIconsLoaded() {
        const testIcon = document.createElement('i');
        testIcon.className = 'fas fa-check';
        testIcon.style.position = 'absolute';
        testIcon.style.left = '-9999px';
        document.body.appendChild(testIcon);
        
        const computedStyle = window.getComputedStyle(testIcon, ':before');
        const content = computedStyle.getPropertyValue('content');
        
        document.body.removeChild(testIcon);
        
        // If FontAwesome didn't load, add text fallbacks
        if (content === 'none' || content === '') {
            addIconFallbacks();
        }
    }
    
    function addIconFallbacks() {
        const iconMap = {
            'fa-pen-fancy': '✍',
            'fa-video': '📹',
            'fa-bullhorn': '📢',
            'fa-user-tie': '👔',
            'fa-shield-alt': '🛡',
            'fa-cogs': '⚙',
            'fa-lightbulb': '💡',
            'fa-handshake': '🤝',
            'fa-rocket': '🚀',
            'fa-heart': '❤',
            'fa-brain': '🧠',
            'fa-gem': '💎',
            'fa-star': '⭐',
            'fa-globe-asia': '🌏',
            'fa-balance-scale': '⚖',
            'fa-users-cog': '👥',
            'fa-youtube': '▶',
            'fa-github': '⚡',
            'fa-linkedin': '🔗',
            'fa-envelope': '📧',
            'fa-check': '✓',
            'fa-check-circle': '✅',
            'fa-tv': '📺',
            'fa-palette': '🎨',
            'fa-broadcast-tower': '📡',
            'fa-external-link-alt': '🔗',
            'fa-code-branch': '🌿',
            'fa-mobile-alt': '📱',
            'fa-robot': '🤖',
            'fa-landmark': '🏛',
            'fa-graduation-cap': '🎓',
            'fa-users': '👥',
            'fa-network-wired': '🌐',
            'fa-chart-line': '📈',
            'fa-chevron-left': '‹',
            'fa-chevron-right': '›',
            'fa-chevron-up': '↑',
            'fa-bars': '☰',
            'fa-paper-plane': '✈',
            'fa-award': '🏆',
            'fa-globe': '🌍'
        };
        
        // Replace all icons with emoji fallbacks
        Object.keys(iconMap).forEach(iconClass => {
            const icons = document.querySelectorAll(`.${iconClass}`);
            icons.forEach(icon => {
                icon.textContent = iconMap[iconClass];
                icon.style.fontFamily = 'inherit';
            });
        });
    }
    
    // Check icons after a short delay to allow FontAwesome to load
    setTimeout(checkIconsLoaded, 1000);
    // Get all navigation links
    const navLinks = document.querySelectorAll('a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 80; // Account for fixed nav height
                
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
                
                // Close mobile menu if open
                const mobileMenu = document.getElementById('mobileMenu');
                if (mobileMenu) {
                    mobileMenu.classList.add('hidden');
                }
            }
        });
    });
    
    // Initialize animations
    initializeAnimations();
    
    // Initialize form handling
    initializeContactForm();
    
    // Initialize scroll effects
    initializeScrollEffects();
    
    // Start carousel autoplay
    startCarouselAutoplay();
    
    // Initialize back to top button
    initializeBackToTop();
    
    // Initialize progress bar
    initializeProgressBar();
});

// Initialize back to top button
function initializeBackToTop() {
    const backToTopButton = document.getElementById('backToTop');
    
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            backToTopButton.classList.remove('opacity-0', 'pointer-events-none');
            backToTopButton.classList.add('opacity-100');
        } else {
            backToTopButton.classList.add('opacity-0', 'pointer-events-none');
            backToTopButton.classList.remove('opacity-100');
        }
    });
    
    backToTopButton.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// Initialize progress bar
function initializeProgressBar() {
    const progressBar = document.getElementById('progressBar');
    
    window.addEventListener('scroll', () => {
        const totalHeight = document.body.scrollHeight - window.innerHeight;
        const progress = (window.pageYOffset / totalHeight) * 100;
        progressBar.style.width = progress + '%';
    });
}

// Animation initialization
function initializeAnimations() {
    // Intersection Observer for fade-in animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Observe all sections
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        observer.observe(section);
    });
    
    // Animate skill progress bars
    animateProgressBars();
}

// Progress bar animation
function animateProgressBars() {
    const progressBars = document.querySelectorAll('.progress-bar');
    
    const progressObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const bar = entry.target;
                const width = bar.style.width || '0%';
                bar.style.width = '0%';
                
                setTimeout(() => {
                    bar.style.width = width;
                    bar.style.transition = 'width 2s ease-in-out';
                }, 200);
                
                progressObserver.unobserve(bar);
            }
        });
    });
    
    progressBars.forEach(bar => {
        progressObserver.observe(bar);
    });
}

// Contact form handling
function initializeContactForm() {
    const form = document.querySelector('#contact form');
    
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(form);
            const name = formData.get('name');
            const email = formData.get('email');
            const message = formData.get('message');
            
            // Basic validation
            if (!name || !email || !message) {
                showNotification('Please fill in all fields', 'error');
                return;
            }
            
            if (!isValidEmail(email)) {
                showNotification('Please enter a valid email address', 'error');
                return;
            }
            
            // Simulate form submission
            const submitBtn = form.querySelector('button[type="submit"]');
            const originalText = submitBtn.innerHTML;
            
            submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin mr-2"></i>Sending...';
            submitBtn.disabled = true;
            
            // Simulate API call
            setTimeout(() => {
                showNotification('Thank you! Your message has been sent successfully.', 'success');
                form.reset();
                
                submitBtn.innerHTML = originalText;
                submitBtn.disabled = false;
            }, 2000);
        });
    }
}

// Email validation
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Notification system
function showNotification(message, type = 'info') {
    // Remove existing notifications
    const existingNotifications = document.querySelectorAll('.notification');
    existingNotifications.forEach(notification => notification.remove());
    
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification fixed top-4 right-4 z-50 p-4 rounded-lg shadow-lg max-w-sm transform transition-all duration-300 translate-x-full`;
    
    // Set colors based on type
    const colors = {
        success: 'bg-green-500 text-white',
        error: 'bg-red-500 text-white',
        info: 'bg-orange-500 text-white'
    };
    
    notification.className += ` ${colors[type] || colors.info}`;
    notification.innerHTML = `
        <div class="flex items-center">
            <span class="flex-1">${message}</span>
            <button onclick="this.parentElement.parentElement.remove()" class="ml-4 text-white hover:text-gray-200">
                <i class="fas fa-times"></i>
            </button>
        </div>
    `;
    
    // Add to page
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.classList.remove('translate-x-full');
    }, 100);
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        notification.classList.add('translate-x-full');
        setTimeout(() => notification.remove(), 300);
    }, 5000);
}

// Scroll effects
function initializeScrollEffects() {
    let lastScrollTop = 0;
    const nav = document.querySelector('nav');
    
    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        // Hide/show navigation on scroll
        if (scrollTop > lastScrollTop && scrollTop > 100) {
            // Scrolling down
            nav.style.transform = 'translateY(-100%)';
        } else {
            // Scrolling up
            nav.style.transform = 'translateY(0)';
        }
        
        lastScrollTop = scrollTop;
        
        // Add scroll effect to navigation
        if (scrollTop > 50) {
            nav.classList.add('shadow-lg');
        } else {
            nav.classList.remove('shadow-lg');
        }
    });
}

// Typing animation for hero text
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

// Initialize typing animation when page loads
window.addEventListener('load', function() {
    const heroTitle = document.querySelector('#home h1');
    if (heroTitle) {
        const originalText = heroTitle.textContent;
        typeWriter(heroTitle, originalText, 50);
    }
});

// Parallax effect for hero section
window.addEventListener('scroll', function() {
    const scrolled = window.pageYOffset;
    const parallax = document.querySelector('#home');
    
    if (parallax) {
        const speed = scrolled * 0.5;
        parallax.style.transform = `translateY(${speed}px)`;
    }
});

// Theme toggle (for future dark mode implementation)
function toggleTheme() {
    const body = document.body;
    body.classList.toggle('dark-mode');
    
    // Save preference
    const isDark = body.classList.contains('dark-mode');
    localStorage.setItem('dark-mode', isDark);
}

// Load theme preference
function loadThemePreference() {
    const isDark = localStorage.getItem('dark-mode') === 'true';
    if (isDark) {
        document.body.classList.add('dark-mode');
    }
}

// Initialize theme on page load
document.addEventListener('DOMContentLoaded', loadThemePreference);

// Keyboard navigation
document.addEventListener('keydown', function(e) {
    // ESC key closes mobile menu
    if (e.key === 'Escape') {
        const mobileMenu = document.getElementById('mobileMenu');
        mobileMenu.classList.add('hidden');
    }
});

// Performance optimization: Lazy loading for images
function initializeLazyLoading() {
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => {
        imageObserver.observe(img);
    });
}

// Initialize lazy loading
document.addEventListener('DOMContentLoaded', initializeLazyLoading);

// Console message for visitors
console.log(`
🚀 Welcome to Sani Miftah's Portfolio!

Interested in the code? Check out the repository:
https://github.com/sanimiftah

Or view my featured project CareerSync AI:
https://sanimiftah.github.io/careersync-ai/

Let's connect and build something amazing together! 💻✨
`);
