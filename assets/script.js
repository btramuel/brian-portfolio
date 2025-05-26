/**
 * Modern Portfolio Website JavaScript
 * Author: Brian Tramuel
 * Enhanced with modern ES6+ features and accessibility
 */

// Utility functions
const utils = {
  // Debounce function for performance optimization
  debounce: (func, wait) => {
    let timeout;
    return function executedFunction(...args) {
      const later = () => {
        clearTimeout(timeout);
        func(...args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  },

  // Throttle function for scroll events
  throttle: (func, limit) => {
    let inThrottle;
    return function() {
      const args = arguments;
      const context = this;
      if (!inThrottle) {
        func.apply(context, args);
        inThrottle = true;
        setTimeout(() => inThrottle = false, limit);
      }
    };
  },

  // Check if element is in viewport
  isInViewport: (element) => {
    const rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  },

  // Smooth scroll to element
  smoothScrollTo: (element, offset = 0) => {
    const targetPosition = element.offsetTop - offset;
    window.scrollTo({
      top: targetPosition,
      behavior: 'smooth'
    });
  }
};

// Loading screen management
class LoadingScreen {
  constructor() {
    this.loadingElement = document.getElementById('loading-screen');
    this.init();
  }

  init() {
    // Hide loading screen after page loads
    window.addEventListener('load', () => {
      setTimeout(() => {
        this.hide();
      }, 1000);
    });
  }

  hide() {
    if (this.loadingElement) {
      this.loadingElement.classList.add('hidden');
      setTimeout(() => {
        this.loadingElement.style.display = 'none';
      }, 500);
    }
  }
}

// Theme management
class ThemeManager {
  constructor() {
    this.themeToggle = document.getElementById('theme-toggle');
    this.themeIcon = document.getElementById('theme-icon');
    this.currentTheme = localStorage.getItem('theme') || 'light';
    this.init();
  }

  init() {
    this.setTheme(this.currentTheme);
    this.bindEvents();
  }

  bindEvents() {
    if (this.themeToggle) {
      this.themeToggle.addEventListener('click', () => {
        this.toggleTheme();
      });
    }
  }

  setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    this.currentTheme = theme;
    this.updateIcon();
  }

  toggleTheme() {
    const newTheme = this.currentTheme === 'light' ? 'dark' : 'light';
    this.setTheme(newTheme);
  }

  updateIcon() {
    if (this.themeIcon) {
      this.themeIcon.className = this.currentTheme === 'light' ? 'fas fa-moon' : 'fas fa-sun';
    }
  }
}

// Navigation management
class Navigation {
  constructor() {
    this.navbar = document.getElementById('navbar');
    this.mobileToggle = document.getElementById('mobile-menu-toggle');
    this.navbarCollapse = document.getElementById('navbarNav');
    this.navLinks = document.querySelectorAll('.nav-link');
    this.hamburger = document.querySelector('.hamburger');
    this.isMenuOpen = false;
    this.init();
  }

  init() {
    this.bindEvents();
    this.handleScroll();
  }

  bindEvents() {
    // Mobile menu toggle
    if (this.mobileToggle) {
      this.mobileToggle.addEventListener('click', () => {
        this.toggleMobileMenu();
      });
    }

    // Smooth scrolling for navigation links
    this.navLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        if (targetId.startsWith('#')) {
          const targetElement = document.querySelector(targetId);
          if (targetElement) {
            utils.smoothScrollTo(targetElement, 80);
            this.setActiveLink(link);
            if (this.isMenuOpen) {
              this.toggleMobileMenu();
            }
          }
        }
      });
    });

    // Handle scroll for navbar styling and active link updates
    window.addEventListener('scroll', utils.throttle(() => {
      this.handleScroll();
      this.updateActiveLink();
    }, 100));

    // Close mobile menu when clicking outside
    document.addEventListener('click', (e) => {
      if (this.isMenuOpen && !e.target.closest('.navbar')) {
        this.toggleMobileMenu();
      }
    });
  }

  toggleMobileMenu() {
    this.isMenuOpen = !this.isMenuOpen;
    if (this.navbarCollapse) {
      this.navbarCollapse.classList.toggle('show');
    }
    if (this.hamburger) {
      this.hamburger.classList.toggle('active');
    }
    document.body.classList.toggle('menu-open');
  }

  handleScroll() {
    if (this.navbar) {
      if (window.scrollY > 100) {
        this.navbar.classList.add('scrolled');
      } else {
        this.navbar.classList.remove('scrolled');
      }
    }
  }

  updateActiveLink() {
    const sections = document.querySelectorAll('section[id]');
    const scrollPos = window.scrollY + 150;

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const sectionId = section.getAttribute('id');

      if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
        this.navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active');
          }
        });
      }
    });
  }

  setActiveLink(activeLink) {
    this.navLinks.forEach(link => link.classList.remove('active'));
    activeLink.classList.add('active');
  }
}

// Project filtering
class ProjectFilter {
  constructor() {
    this.filterButtons = document.querySelectorAll('.filter-btn');
    this.projectItems = document.querySelectorAll('.project-item');
    this.init();
  }

  init() {
    this.bindEvents();
  }

  bindEvents() {
    this.filterButtons.forEach(button => {
      button.addEventListener('click', () => {
        const filter = button.getAttribute('data-filter');
        this.setActiveFilter(button);
        this.filterProjects(filter);
      });
    });
  }

  setActiveFilter(activeButton) {
    this.filterButtons.forEach(button => button.classList.remove('active'));
    activeButton.classList.add('active');
  }

  filterProjects(filter) {
    this.projectItems.forEach(item => {
      const categories = item.getAttribute('data-category');
      
      if (filter === 'all' || categories.includes(filter)) {
        this.showProject(item);
      } else {
        this.hideProject(item);
      }
    });
  }

  showProject(item) {
    item.classList.remove('hidden');
    item.style.opacity = '0';
    item.style.transform = 'scale(0.8)';
    
    setTimeout(() => {
      item.style.transition = 'all 0.3s ease-out';
      item.style.opacity = '1';
      item.style.transform = 'scale(1)';
    }, 50);
  }

  hideProject(item) {
    item.style.transition = 'all 0.3s ease-out';
    item.style.opacity = '0';
    item.style.transform = 'scale(0.8)';
    
    setTimeout(() => {
      item.classList.add('hidden');
    }, 300);
  }
}

// Contact form management
class ContactForm {
  constructor() {
    this.form = document.getElementById('contact-form');
    this.inputs = document.querySelectorAll('.form-control');
    this.submitButton = document.querySelector('.contact-form button[type="submit"]');
    this.successMessage = document.getElementById('form-success');
    this.init();
  }

  init() {
    if (this.form) {
      this.bindEvents();
    }
  }

  bindEvents() {
    // Form submission
    this.form.addEventListener('submit', (e) => {
      e.preventDefault();
      this.handleSubmit();
    });

    // Real-time validation
    this.inputs.forEach(input => {
      input.addEventListener('blur', () => {
        this.validateField(input);
      });

      input.addEventListener('input', () => {
        this.clearFieldError(input);
      });
    });
  }

  validateField(field) {
    const value = field.value.trim();
    const fieldName = field.getAttribute('name');
    let isValid = true;
    let errorMessage = '';

    // Clear previous validation state
    this.clearFieldError(field);

    // Required field validation
    if (field.hasAttribute('required') && !value) {
      isValid = false;
      errorMessage = `${this.getFieldLabel(fieldName)} is required.`;
    }

    // Email validation
    if (fieldName === 'email' && value) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(value)) {
        isValid = false;
        errorMessage = 'Please enter a valid email address.';
      }
    }

    // Name validation
    if (fieldName === 'name' && value && value.length < 2) {
      isValid = false;
      errorMessage = 'Name must be at least 2 characters long.';
    }

    // Message validation
    if (fieldName === 'message' && value && value.length < 10) {
      isValid = false;
      errorMessage = 'Message must be at least 10 characters long.';
    }

    // Apply validation state
    if (isValid) {
      this.setFieldSuccess(field);
    } else {
      this.setFieldError(field, errorMessage);
    }

    return isValid;
  }

  validateForm() {
    let isFormValid = true;
    
    this.inputs.forEach(input => {
      if (!this.validateField(input)) {
        isFormValid = false;
      }
    });

    return isFormValid;
  }

  handleSubmit() {
    if (!this.validateForm()) {
      return;
    }

    this.setSubmitLoading(true);

    // Simulate form submission (replace with actual submission logic)
    setTimeout(() => {
      this.showSuccessMessage();
      this.resetForm();
      this.setSubmitLoading(false);
    }, 2000);

    // For actual form submission, you would do:
    // this.submitForm();
  }

  submitForm() {
    const formData = new FormData(this.form);
    
    fetch(this.form.action, {
      method: 'POST',
      body: formData
    })
    .then(response => {
      if (response.ok) {
        this.showSuccessMessage();
        this.resetForm();
      } else {
        throw new Error('Form submission failed');
      }
    })
    .catch(error => {
      console.error('Error:', error);
      this.showErrorMessage('Failed to send message. Please try again.');
    })
    .finally(() => {
      this.setSubmitLoading(false);
    });
  }

  setFieldError(field, message) {
    field.classList.add('error');
    field.classList.remove('success');
    
    const feedback = field.parentNode.querySelector('.form-feedback');
    if (feedback) {
      feedback.textContent = message;
      feedback.classList.remove('success');
    }
  }

  setFieldSuccess(field) {
    field.classList.add('success');
    field.classList.remove('error');
    
    const feedback = field.parentNode.querySelector('.form-feedback');
    if (feedback) {
      feedback.textContent = '';
      feedback.classList.add('success');
    }
  }

  clearFieldError(field) {
    field.classList.remove('error', 'success');
    
    const feedback = field.parentNode.querySelector('.form-feedback');
    if (feedback) {
      feedback.textContent = '';
      feedback.classList.remove('success');
    }
  }

  getFieldLabel(fieldName) {
    const labels = {
      name: 'Name',
      email: 'Email',
      subject: 'Subject',
      message: 'Message'
    };
    return labels[fieldName] || fieldName;
  }

  setSubmitLoading(isLoading) {
    const btnText = this.submitButton.querySelector('.btn-text');
    const btnLoading = this.submitButton.querySelector('.btn-loading');

    if (isLoading) {
      btnText.classList.add('d-none');
      btnLoading.classList.remove('d-none');
      this.submitButton.disabled = true;
    } else {
      btnText.classList.remove('d-none');
      btnLoading.classList.add('d-none');
      this.submitButton.disabled = false;
    }
  }

  showSuccessMessage() {
    if (this.successMessage) {
      this.successMessage.classList.remove('d-none');
      this.successMessage.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }

  showErrorMessage(message) {
    // You can implement error message display here
    alert(message); // Simple fallback
  }

  resetForm() {
    this.form.reset();
    this.inputs.forEach(input => {
      this.clearFieldError(input);
    });
  }
}

// Back to top functionality
class BackToTop {
  constructor() {
    this.button = document.getElementById('back-to-top');
    this.init();
  }

  init() {
    if (this.button) {
      this.bindEvents();
      this.handleScroll();
    }
  }

  bindEvents() {
    this.button.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });

    window.addEventListener('scroll', utils.throttle(() => {
      this.handleScroll();
    }, 100));
  }

  handleScroll() {
    if (window.scrollY > 300) {
      this.button.classList.add('visible');
    } else {
      this.button.classList.remove('visible');
    }
  }
}

// Scroll animations
class ScrollAnimations {
  constructor() {
    this.animatedElements = document.querySelectorAll('.project-card, .timeline-content, .experience-card, .contact-info-card');
    this.init();
  }

  init() {
    this.bindEvents();
    this.checkInitialVisibility();
  }

  bindEvents() {
    window.addEventListener('scroll', utils.throttle(() => {
      this.handleScroll();
    }, 100));
  }

  checkInitialVisibility() {
    this.animatedElements.forEach(element => {
      if (utils.isInViewport(element)) {
        this.animateElement(element);
      }
    });
  }

  handleScroll() {
    this.animatedElements.forEach(element => {
      if (utils.isInViewport(element) && !element.classList.contains('animated')) {
        this.animateElement(element);
      }
    });
  }

  animateElement(element) {
    element.classList.add('animated');
    element.style.opacity = '0';
    element.style.transform = 'translateY(30px)';
    
    setTimeout(() => {
      element.style.transition = 'all 0.6s ease-out';
      element.style.opacity = '1';
      element.style.transform = 'translateY(0)';
    }, 100);
  }
}

// Keyboard navigation
class KeyboardNavigation {
  constructor() {
    this.init();
  }

  init() {
    document.addEventListener('keydown', (e) => {
      this.handleKeyPress(e);
    });
  }

  handleKeyPress(e) {
    // ESC key - close mobile menu
    if (e.key === 'Escape') {
      const navigation = window.portfolioApp?.navigation;
      if (navigation && navigation.isMenuOpen) {
        navigation.toggleMobileMenu();
      }
    }

    // Tab navigation improvements
    if (e.key === 'Tab') {
      document.body.classList.add('keyboard-navigation');
    }
  }
}

// Main application
class PortfolioApp {
  constructor() {
    this.init();
  }

  init() {
    // Wait for DOM to be ready
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', () => {
        this.initializeComponents();
      });
    } else {
      this.initializeComponents();
    }
  }

  initializeComponents() {
    // Initialize all components
    this.loadingScreen = new LoadingScreen();
    this.themeManager = new ThemeManager();
    this.navigation = new Navigation();
    this.projectFilter = new ProjectFilter();
    this.contactForm = new ContactForm();
    this.backToTop = new BackToTop();
    this.scrollAnimations = new ScrollAnimations();
    this.keyboardNavigation = new KeyboardNavigation();

    // Add click handlers for hero scroll indicator
    this.initHeroScrollIndicator();

    // Initialize other interactive elements
    this.initInteractiveElements();

    console.log('Portfolio application initialized successfully!');
  }

  initHeroScrollIndicator() {
    const scrollIndicator = document.querySelector('.hero-scroll-indicator');
    if (scrollIndicator) {
      scrollIndicator.addEventListener('click', () => {
        const aboutSection = document.getElementById('about');
        if (aboutSection) {
          utils.smoothScrollTo(aboutSection, 80);
        }
      });
    }
  }

  initInteractiveElements() {
    // Add hover effects for project cards
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
      card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-8px)';
      });

      card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0)';
      });
    });

    // Add click handlers for social links with tracking
    const socialLinks = document.querySelectorAll('a[href*="github.com"], a[href*="linkedin.com"]');
    socialLinks.forEach(link => {
      link.addEventListener('click', () => {
        // You can add analytics tracking here
        console.log('Social link clicked:', link.href);
      });
    });
  }
}

// Initialize the application
window.portfolioApp = new PortfolioApp();

// Service Worker registration for PWA features (optional)
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    // You can register a service worker here for offline functionality
    console.log('Service Worker support detected');
  });
}

// Error handling
window.addEventListener('error', (e) => {
  console.error('Application error:', e.error);
});

// Performance monitoring
window.addEventListener('load', () => {
  // Log page load performance
  setTimeout(() => {
    const navigation = performance.getEntriesByType('navigation')[0];
    console.log('Page load time:', navigation.loadEventEnd - navigation.fetchStart, 'ms');
  }, 0);
});

// Export for potential module usage
export { PortfolioApp, utils };
