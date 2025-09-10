// Modern Portfolio JavaScript

// Navigation functionality
document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
        });
    }
    
    // Close mobile menu when clicking on links
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (navMenu) {
                navMenu.classList.remove('active');
            }
        });
    });
    
    // Set active navigation link based on current page
    setActiveNavLink();
    
    // Animate progress bars when they come into view
    animateProgressBars();
    
    // Add scroll animations
    addScrollAnimations();
});

// Set active navigation link
function setActiveNavLink() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        const href = link.getAttribute('href');
        
        if ((currentPage === 'index.html' || currentPage === '') && href === 'index.html') {
            link.classList.add('active');
        } else if (href === currentPage) {
            link.classList.add('active');
        }
    });
}

// Animate progress bars
function animateProgressBars() {
    const progressBars = document.querySelectorAll('.progress-bar');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const progressBar = entry.target;
                const targetWidth = progressBar.getAttribute('data-width');
                if (targetWidth) {
                    setTimeout(() => {
                        progressBar.style.width = targetWidth + '%';
                    }, 500);
                }
            }
        });
    }, {
        threshold: 0.5
    });
    
    progressBars.forEach(bar => {
        observer.observe(bar);
    });
}

// Add scroll animations
function addScrollAnimations() {
    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-fade-in');
            }
        });
    }, {
        threshold: 0.1
    });
    
    animatedElements.forEach(el => {
        observer.observe(el);
    });
}

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Button click handlers
function handleEmailClick() {
    window.location.href = 'mailto:tjsdn4037@naver.com';
}

function handleGithubClick() {
    window.open('https://github.com/LIMSEONU', '_blank');
}

function handleDownloadResume() {
    // In a real application, this would trigger a file download
    alert('이력서 다운로드 기능은 실제 파일이 준비되면 작동합니다.');
}

// Audio/Video error handling
document.addEventListener('DOMContentLoaded', function() {
    const audioElements = document.querySelectorAll('audio');
    const videoElements = document.querySelectorAll('video');
    
    [...audioElements, ...videoElements].forEach(element => {
        element.addEventListener('error', function() {
            const parent = this.closest('.card-content');
            if (parent) {
                const errorMsg = document.createElement('p');
                errorMsg.textContent = '미디어 파일을 로드할 수 없습니다.';
                errorMsg.className = 'text-muted text-center';
                parent.appendChild(errorMsg);
                this.style.display = 'none';
            }
        });
    });
});

// Add loading states for buttons
function addButtonLoadingStates() {
    const buttons = document.querySelectorAll('.btn');
    
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            if (!this.classList.contains('loading')) {
                this.classList.add('loading');
                setTimeout(() => {
                    this.classList.remove('loading');
                }, 1000);
            }
        });
    });
}

// Initialize all features
document.addEventListener('DOMContentLoaded', function() {
    addButtonLoadingStates();
});