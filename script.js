// Projects Data
const projects = [
    {
        title: "Charlotte Web Pages Site",
        description: "Deployed and maintained course site on UNC Charlotte webspace with reusable components, validation, and accessible design.",
        tags: ["HTML", "CSS", "JavaScript"],
        category: ["web"],
        links: [
            { label: "View Site", url: "https://webpages.charlotte.edu/btramue1/itis3135/", icon: "link" }
        ]
    },
    {
        title: "Virtual Machine Lab: Active Directory Domain",
        description: "Built Windows Server 2025 and Windows 11 VMs in VMware Workstation; configured AD DS and prepared domain join workflow.",
        tags: ["VMware", "Windows Server 2025", "AD DS"],
        category: ["cloud"]
    },
    {
        title: "File System Simulator",
        description: "Java CLI application that simulates file and folder management with a custom command line interface. Users can create directories and files, navigate folders, and view the full tree structure.",
        tags: ["Java", "CLI", "File System"],
        category: ["java"],
        links: [
            { label: "GitHub", url: "https://github.com/btramuel/File-System-", icon: "github" }
        ]
    },
    {
        title: "Server Migration Project",
        description: "Migrated physical servers to Azure cloud infrastructure, ensuring secure data transfer, retiring legacy hardware, and documenting the complete infrastructure setup.",
        tags: ["Azure", "VMware", "Cloud Migration"],
        category: ["cloud"]
    },
    {
        title: "Student Stress Analysis",
        description: "Analyzed survey data using SAS and regression models to identify stress patterns among STEM students. Used Google Forms for data collection and statistical analysis.",
        tags: ["SAS", "Data Analysis", "Statistics"],
        category: ["database"],
        links: [
            { label: "View Report", url: "documents/student-stress-analysis.pdf", icon: "file" }
        ]
    },
    {
        title: "Car Valet Management System",
        description: "Created a comprehensive database system for managing valet staff, vehicles, and transactions. Implemented SQL queries and stored procedures for tracking and real-time updates.",
        tags: ["SQL", "MySQL", "Database Design"],
        category: ["database"],
        links: [
            { label: "View Documentation", url: "documents/valet-systems.pdf", icon: "file" }
        ]
    },
    {
        title: "Cloud Portfolio Website",
        description: "Built and deployed a personal portfolio website hosted on Azure Blob Storage with static site hosting. Organized project assets and implemented modern web design.",
        tags: ["HTML", "CSS", "Azure Blob"],
        category: ["web", "cloud"],
        links: [
            { label: "GitHub", url: "https://github.com/btramuel/brian-portfolio", icon: "github" }
        ]
    },
    {
        title: "Library Management System",
        description: "Book manager with Java ArrayLists to add, remove, and search titles via a simple UI.",
        tags: ["Java", "ArrayList", "Management System"],
        category: ["java"],
        links: [
            { label: "GitHub", url: "https://github.com/btramuel/Library-", icon: "github" }
        ]
    },
    {
        title: "Grade Tracker App",
        description: "Designed a grade visualization tool; usability tests informed nav refinements to reduce confusion.",
        tags: ["UX", "Prototype", "Testing"],
        category: ["ux", "web"],
        links: [
            { label: "View Documentation", url: "documents/grade-tracker-project.pdf", icon: "file" }
        ]
    },
    {
        title: "DoorDash Usability Evaluation",
        description: "Led SEQ/SUS testing on ordering/navigation; improved customization flow and promo code discoverability.",
        tags: ["UX Research", "SEQ/SUS", "Usability"],
        category: ["ux"],
        links: [
            { label: "View Report", url: "documents/doordash-usability-report.pdf", icon: "file" }
        ]
    },
    {
        title: "Planner App Focus Group Study",
        description: "Facilitated focus groups; translated pain points into actionable features for a task management MVP.",
        tags: ["Focus Groups", "Qual Research", "Product Insights"],
        category: ["ux"]
    }
];

// Render Projects
function renderProjects(filter = 'all') {
    const grid = document.getElementById('projectsGrid');
    grid.innerHTML = '';

    const filtered = filter === 'all' 
        ? projects 
        : projects.filter(p => p.category.includes(filter));

    filtered.forEach(project => {
        const card = document.createElement('div');
        card.className = 'project-card';
        
        const linksHTML = project.links 
            ? `<div class="project-links">
                ${project.links.map(link => `
                    <a href="${link.url}" target="_blank" rel="noopener noreferrer" class="project-link">
                        ${link.icon === 'github' ? '🔗 GitHub' : link.icon === 'file' ? '📄 ' + link.label : '🔗 ' + link.label}
                    </a>
                `).join('')}
               </div>`
            : '';

        card.innerHTML = `
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            <div class="project-tags">
                ${project.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
            </div>
            ${linksHTML}
        `;
        
        grid.appendChild(card);
    });
}

// Filter Projects
document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        renderProjects(btn.dataset.filter);
    });
});

// Theme Toggle
const themeToggle = document.getElementById('themeToggle');
const savedTheme = localStorage.getItem('theme') || 'light';
document.body.classList.toggle('dark-mode', savedTheme === 'dark');

themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    const theme = document.body.classList.contains('dark-mode') ? 'dark' : 'light';
    localStorage.setItem('theme', theme);
});

// Mobile Menu
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const navLinks = document.getElementById('navLinks');

mobileMenuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Close mobile menu when clicking a link
navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

// Navbar Scroll Effect
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 50);
});

// Contact Form
const contactForm = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(contactForm);
    const data = Object.fromEntries(formData);
    
    // Show success message (you can integrate with a real backend here)
    formMessage.className = 'form-message success';
    formMessage.textContent = 'Thank you for your message! I\'ll get back to you soon.';
    
    // Reset form
    contactForm.reset();
    
    // Hide message after 5 seconds
    setTimeout(() => {
        formMessage.style.display = 'none';
    }, 5000);
});

// Initialize
renderProjects();
