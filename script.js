// === PROJECTS DATA ===
const projects = [
    {
        title: "Cloud File Storage Service",
        description: "Built a Spring Boot REST API with Azure Blob Storage and PostgreSQL supporting 4+ file operations with cloud-based storage. Implemented RESTful endpoints using Spring Data JPA and Maven, validating 10+ API calls with Postman and curl.",
        tags: ["Spring Boot", "Azure Blob", "PostgreSQL", "REST API", "Maven"],
        category: ["cloud", "java"],
        catLabel: "Cloud + Backend",
        date: "Dec 2025"
    },
    {
        title: "Identity & Access Management System",
        description: "Built a JWT-based authentication system with role-based access control supporting 2+ roles and 3+ permissions. Secured 5+ REST endpoints, blocking unauthorized access during testing, and stored credentials/roles in PostgreSQL.",
        tags: ["Spring Boot", "Spring Security", "JWT", "PostgreSQL", "RBAC"],
        category: ["java", "cloud"],
        catLabel: "Security + Backend",
        date: "Oct 2025"
    },
    {
        title: "Active Directory Domain Lab",
        description: "Configured an Active Directory environment with a Windows Server 2025 Domain Controller and Windows 11 client in VMware. Set up DNS, user authentication policies, and organized user accounts to simulate enterprise-scale identity management.",
        tags: ["VMware", "Windows Server 2025", "AD DS", "DNS", "IAM"],
        category: ["cloud"],
        catLabel: "Cloud",
        date: "Sep 2025"
    },
    {
        title: "Charlotte Web Pages Site",
        description: "Deployed and maintained a course site on UNC Charlotte webspace with reusable components, form validation, and accessible design following WCAG guidelines.",
        tags: ["HTML", "CSS", "JavaScript"],
        category: ["web"],
        catLabel: "Web",
        links: [{ label: "View Site →", url: "https://webpages.charlotte.edu/btramue1/itis3135/" }]
    },
    {
        title: "Server Migration to Azure",
        description: "Migrated physical servers to Azure cloud infrastructure, ensuring secure data transfer, retiring legacy hardware, and fully documenting the new infrastructure setup.",
        tags: ["Azure", "VMware", "Cloud Migration", "Documentation"],
        category: ["cloud"],
        catLabel: "Cloud"
    },
    {
        title: "Student Stress Analysis",
        description: "Analyzed survey data using SAS and regression models to identify stress patterns among STEM students. Used Google Forms for data collection and statistical modeling.",
        tags: ["SAS", "Statistics", "Regression", "Data Analysis"],
        category: ["database"],
        catLabel: "Data",
        links: [{ label: "View Report →", url: "documents/student-stress-analysis.pdf" }]
    },
    {
        title: "Car Valet Management System",
        description: "Comprehensive relational database system for managing valet staff, vehicles, and transactions. Includes stored procedures, indexed queries, and real-time transaction tracking.",
        tags: ["SQL", "MySQL", "Database Design", "ERD"],
        category: ["database"],
        catLabel: "Database",
        links: [{ label: "View Docs →", url: "documents/valet-systems.pdf" }]
    },
    {
        title: "Cloud Portfolio Website",
        description: "Built and deployed a personal portfolio hosted on Azure Blob Storage with static site hosting, custom domain, and CDN-enabled asset delivery.",
        tags: ["HTML", "CSS", "Azure Blob", "Static Hosting"],
        category: ["web", "cloud"],
        catLabel: "Web + Cloud",
        links: [{ label: "GitHub →", url: "https://github.com/btramuel/brian-portfolio" }]
    },
    {
        title: "File System Simulator",
        description: "Java CLI application that simulates file and folder management with a custom command interpreter. Supports directory creation, navigation, file operations, and full tree visualization.",
        tags: ["Java", "CLI", "Data Structures"],
        category: ["java"],
        catLabel: "Java",
        links: [{ label: "GitHub →", url: "https://github.com/btramuel/File-System-" }]
    },
    {
        title: "Library Management System",
        description: "Java-based book manager using ArrayLists to add, remove, search, and sort library titles via an interactive terminal UI with persistent data structures.",
        tags: ["Java", "ArrayList", "OOP", "CLI"],
        category: ["java"],
        catLabel: "Java",
        links: [{ label: "GitHub →", url: "https://github.com/btramuel/Library-" }]
    },
    {
        title: "Grade Tracker App",
        description: "Designed a grade visualization and tracking tool through a full UX cycle. Usability tests informed navigation refinements that measurably reduced user confusion and task time.",
        tags: ["UX Design", "Prototyping", "Usability Testing"],
        category: ["ux", "web"],
        catLabel: "UX",
        links: [{ label: "View Docs →", url: "documents/grade-tracker-project.pdf" }]
    },
    {
        title: "DoorDash Usability Evaluation",
        description: "Led SEQ/SUS testing on DoorDash ordering and navigation flows. Identified friction in customization and promo code discoverability; produced actionable design recommendations.",
        tags: ["UX Research", "SEQ/SUS", "Heuristic Eval"],
        category: ["ux"],
        catLabel: "UX Research",
        links: [{ label: "View Report →", url: "documents/doordash-usability-report.pdf" }]
    }
];

// === RENDER PROJECTS ===
const catColors = {
    Web: "#5b7fff", Cloud: "#a78bfa", Java: "#34d399",
    "Web + Cloud": "#f472b6", Data: "#fb923c",
    Database: "#38bdf8", UX: "#facc15", "UX Research": "#facc15"
};

function renderProjects(filter = 'all') {
    const grid = document.getElementById('projectsGrid');
    grid.innerHTML = '';

    const filtered = filter === 'all'
        ? projects
        : projects.filter(p => p.category.includes(filter));

    filtered.forEach((project, i) => {
        const card = document.createElement('div');
        card.className = 'project-card';
        card.style.animationDelay = `${i * 0.06}s`;

        const color = catColors[project.catLabel] || '#5b7fff';

        const linksHTML = project.links
            ? `<div class="project-links">
                ${project.links.map(link => `
                    <a href="${link.url}" target="_blank" rel="noopener noreferrer" class="project-link">
                        ${link.label}
                    </a>
                `).join('')}
               </div>`
            : '';

        card.innerHTML = `
            <div class="project-cat-badge" style="color:${color}">
                <span style="width:6px;height:6px;background:${color};border-radius:50%;display:inline-block"></span>
                ${project.catLabel}
            </div>
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

// === FILTERS ===
document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        renderProjects(btn.dataset.filter);
    });
});

// === THEME TOGGLE ===
const themeToggle = document.getElementById('themeToggle');
const savedTheme = localStorage.getItem('theme') || 'dark';
if (savedTheme === 'light') document.body.classList.add('light-mode');

themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('light-mode');
    localStorage.setItem('theme', document.body.classList.contains('light-mode') ? 'light' : 'dark');
});

// === MOBILE MENU ===
const mobileBtn = document.getElementById('mobileMenuBtn');
const navLinks = document.getElementById('navLinks');

mobileBtn.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('open');
    mobileBtn.classList.toggle('open', isOpen);
    document.body.style.overflow = isOpen ? 'hidden' : '';
});

navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('open');
        mobileBtn.classList.remove('open');
        document.body.style.overflow = '';
    });
});

// === NAVBAR SCROLL ===
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 40);
}, { passive: true });

// === SCROLL REVEAL ===
const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            revealObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

document.querySelectorAll('.exp-item, .skill-block, .edu-item, .about-bio, .about-edu, .contact-info, .contact-form, .lead-card').forEach(el => {
    el.classList.add('scroll-reveal');
    revealObserver.observe(el);
});

// === SKILL BARS ANIMATION ===
const skillBarsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Bars animate via CSS once visible
            entry.target.querySelectorAll('.skill-bar').forEach(bar => {
                bar.style.setProperty('--pct', bar.style.getPropertyValue('--pct'));
            });
            skillBarsObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.3 });

const skillsSection = document.getElementById('skills');
if (skillsSection) skillBarsObserver.observe(skillsSection);

// Reset skill bar widths initially, animate on view
document.querySelectorAll('.skill-bar').forEach(bar => {
    const target = bar.style.getPropertyValue('--pct');
    bar.style.setProperty('--pct-target', target);
    bar.style.setProperty('--pct', '0%');
});

const barObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.querySelectorAll('.skill-bar').forEach((bar, i) => {
                setTimeout(() => {
                    bar.style.setProperty('--pct', bar.style.getPropertyValue('--pct-target'));
                }, i * 80);
            });
            barObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.2 });

document.querySelectorAll('.skill-list').forEach(list => barObserver.observe(list));

// === CUSTOM CURSOR ===
const cursor = document.getElementById('cursor');
const cursorFollower = document.getElementById('cursorFollower');

if (cursor && cursorFollower) {
    let mx = 0, my = 0, fx = 0, fy = 0;

    document.addEventListener('mousemove', (e) => {
        mx = e.clientX;
        my = e.clientY;
        cursor.style.left = mx + 'px';
        cursor.style.top = my + 'px';
    }, { passive: true });

    function animateFollower() {
        fx += (mx - fx) * 0.12;
        fy += (my - fy) * 0.12;
        cursorFollower.style.left = fx + 'px';
        cursorFollower.style.top = fy + 'px';
        requestAnimationFrame(animateFollower);
    }
    animateFollower();

    const hoverEls = document.querySelectorAll('a, button, .filter-btn, .skill-tag, .stag');
    hoverEls.forEach(el => {
        el.addEventListener('mouseenter', () => cursorFollower.classList.add('hovering'));
        el.addEventListener('mouseleave', () => cursorFollower.classList.remove('hovering'));
    });
}

// === CONTACT FORM ===
document.getElementById('contactForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const msg = document.getElementById('formMessage');
    msg.className = 'form-message success';
    msg.textContent = '✓ Message sent! I\'ll be in touch soon.';
    e.target.reset();
    setTimeout(() => { msg.style.display = 'none'; msg.className = 'form-message'; }, 6000);
});

// === SMOOTH SCROLL ===
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

// === INIT ===
renderProjects();
