'use strict';

/* ════════════════════════════════════════════════════════════════
   PROJECTS — newest first.
   ════════════════════════════════════════════════════════════════ */
const PROJECTS = [
  {
    title: 'Book Club API',
    desc:  'A RESTful API with 10+ endpoints supporting users, books, and clubs with role-based access control. Secured with JWT authentication and bcrypt — protecting 100% of user account operations. Documented and tested with Swagger and Postman, deployed on Render.',
    tags:  ['Node.js', 'Express', 'PostgreSQL', 'Prisma', 'JWT', 'bcrypt', 'Swagger', 'Render'],
    cats:  ['backend', 'cloud'],
    cat:   'Backend',
    date:  'May 2026',
    featured: true,
    links: [{ text: 'GitHub', url: 'https://github.com/btramuel/book-club-api' }]
  },
  {
    title: 'UC Berkeley EECS Redesign',
    desc:  'Capstone project: my team and I picked apart UC Berkeley\'s EECS website — buried events, confusing acronyms, no feedback on click — mapped issues against Nielsen\'s heuristics, and rebuilt it. I led UX research and frontend. Two rounds of testing (4 on wireframes, 3 on hi-fi prototype) reshaped what we shipped: fully responsive, light/dark mode, client-side search, and a working RSVP form with inline validation.',
    tags:  ['UX Research', 'Nielsen Heuristics', 'Wireframing', 'HTML', 'CSS', 'JavaScript', 'Responsive'],
    cats:  ['ux', 'web'],
    cat:   'Capstone · UX',
    date:  'Apr 2026',
    links: []
  },
  {
    title: 'Identity & Access Service',
    desc:  'A REST API for user identity and access management with 7+ endpoints handling registration, login, and role-based permissions. Hashed passwords with bcrypt and issued JWT tokens on login — users stay signed in without sending credentials on every request. Added Zod input validation and rate limiting on login to block brute-force attempts.',
    tags:  ['Node.js', 'Express', 'PostgreSQL', 'Prisma', 'JWT', 'Zod', 'bcrypt'],
    cats:  ['backend'],
    cat:   'Backend · Security',
    date:  'Jan 2026',
    links: [{ text: 'GitHub', url: 'https://github.com/btramuel/identity-access-service' }]
  },
  {
    title: 'Cloud File Storage Service',
    desc:  'Spring Boot REST API backed by Azure Blob Storage and PostgreSQL, supporting 4+ file operations with cloud-based storage. Implemented endpoints using Spring Data JPA and Maven; validated 10+ API calls with Postman and curl.',
    tags:  ['Spring Boot', 'Azure Blob', 'PostgreSQL', 'JPA', 'Maven', 'Postman'],
    cats:  ['backend', 'cloud'],
    cat:   'Backend · Cloud',
    date:  'Dec 2025',
    links: [{ text: 'GitHub', url: 'https://github.com/btramuel/cloud-file-storage' }]
  },
  {
    title: 'Active Directory Domain Lab',
    desc:  'Configured a Windows Server 2025 Domain Controller and Windows 11 client in VMware Workstation. Set up DNS, user authentication policies, and organized accounts and groups to simulate enterprise-scale identity management.',
    tags:  ['VMware', 'Windows Server 2025', 'AD DS', 'DNS', 'IAM'],
    cats:  ['cloud'],
    cat:   'Infrastructure',
    date:  'Sep 2025',
    links: []
  },
  {
    title: 'Server Migration to Azure',
    desc:  'Migrated physical servers to Azure cloud infrastructure with secure data transfer and proper retirement of legacy hardware. Fully documented the new infrastructure setup.',
    tags:  ['Azure', 'VMware', 'Cloud Migration', 'Documentation'],
    cats:  ['cloud'],
    cat:   'Cloud',
    date:  'Aug 2024',
    links: []
  },
  {
    title: 'Cloud Portfolio Website',
    desc:  'Personal portfolio hosted on Azure Blob Storage with static site hosting, custom domain, and CDN-enabled asset delivery.',
    tags:  ['HTML', 'CSS', 'Azure Blob', 'Static Hosting'],
    cats:  ['web', 'cloud'],
    cat:   'Web · Cloud',
    date:  '2025',
    links: [{ text: 'GitHub', url: 'https://github.com/btramuel/brian-portfolio' }]
  },
  {
    title: 'Charlotte Web Pages Site',
    desc:  'Course site deployed on UNC Charlotte webspace with reusable components, form validation, and accessible design following WCAG guidelines.',
    tags:  ['HTML', 'CSS', 'JavaScript', 'WCAG'],
    cats:  ['web'],
    cat:   'Frontend',
    date:  '2024',
    links: [{ text: 'View Site', url: 'https://webpages.charlotte.edu/btramue1/itis3135/' }]
  },
  {
    title: 'Car Valet Management System',
    desc:  'Relational database for managing valet staff, vehicles, and transactions. Includes stored procedures, indexed queries, and real-time transaction tracking.',
    tags:  ['SQL', 'MySQL', 'Database Design', 'ERD'],
    cats:  ['database'],
    cat:   'Database',
    date:  '2024',
    links: [{ text: 'View Docs', url: 'documents/valet-systems.pdf' }]
  },
  {
    title: 'Student Stress Analysis',
    desc:  'Survey data analyzed using SAS and regression models to identify stress patterns among STEM students. Used Google Forms for collection and statistical modeling for inference.',
    tags:  ['SAS', 'Statistics', 'Regression'],
    cats:  ['database'],
    cat:   'Data Analysis',
    date:  '2024',
    links: [{ text: 'View Report', url: 'documents/student-stress-analysis.pdf' }]
  },
  {
    title: 'File System Simulator',
    desc:  'Java CLI application simulating file and folder management with a custom command interpreter. Supports directory creation, navigation, file operations, and full tree visualization.',
    tags:  ['Java', 'CLI', 'Data Structures', 'OOP'],
    cats:  ['backend'],
    cat:   'Java · CLI',
    date:  '2023',
    links: [{ text: 'GitHub', url: 'https://github.com/btramuel/File-System-' }]
  },
  {
    title: 'Library Management System',
    desc:  'Java book manager using ArrayLists to add, remove, search, and sort library titles via an interactive terminal UI.',
    tags:  ['Java', 'ArrayList', 'OOP', 'CLI'],
    cats:  ['backend'],
    cat:   'Java · CLI',
    date:  '2023',
    links: [{ text: 'GitHub', url: 'https://github.com/btramuel/Library-' }]
  },
  {
    title: 'Grade Tracker App',
    desc:  'Designed a grade visualization tool through a full UX cycle. Usability tests informed navigation refinements that measurably reduced user confusion and task time.',
    tags:  ['UX Design', 'Prototyping', 'Usability Testing'],
    cats:  ['ux', 'web'],
    cat:   'UX',
    date:  '2024',
    links: [{ text: 'View Docs', url: 'documents/grade-tracker-project.pdf' }]
  },
  {
    title: 'DoorDash Usability Evaluation',
    desc:  'Led SEQ/SUS testing on DoorDash ordering and navigation flows. Identified friction in customization and promo code discoverability and produced actionable design recommendations.',
    tags:  ['UX Research', 'SEQ/SUS', 'Heuristic Eval'],
    cats:  ['ux'],
    cat:   'UX Research',
    date:  '2024',
    links: [{ text: 'View Report', url: 'documents/doordash-usability-report.pdf' }]
  }
];

/* ── RENDER PROJECTS ──────────────────────────────────────── */
function renderProjects(filter) {
  const grid = document.getElementById('projectsGrid');
  if (!grid) return;

  const list = filter === 'all'
    ? PROJECTS
    : PROJECTS.filter(p => p.cats.includes(filter));

  if (list.length === 0) {
    grid.innerHTML = '<p style="color:var(--text-3); padding:2rem 0; font-size:0.9rem;">No projects in this category.</p>';
    return;
  }

  grid.innerHTML = list.map((p, i) => {
    const num = String(i + 1).padStart(2, '0');
    const tagsHTML = p.tags.map(t => `<span class="proj-tag">${t}</span>`).join('');
    const linksHTML = p.links.length
      ? `<div class="proj-links">${p.links.map(l =>
          `<a href="${l.url}" target="_blank" rel="noopener" class="proj-link">${l.text}</a>`
        ).join('')}</div>`
      : '';
    const featured = (filter === 'all' && p.featured) ? 'featured' : '';
    const featuredBadge = featured
      ? `<span class="featured-badge">★ Featured</span>`
      : '';

    return `
      <article class="proj-card ${featured}">
        <div class="proj-top">
          <div class="proj-meta-left">
            <span class="proj-num">${num}</span>
            <span class="proj-cat">${p.cat}</span>
            ${featuredBadge}
          </div>
          <span class="proj-date">${p.date || ''}</span>
        </div>
        <h3 class="proj-title">${p.title}</h3>
        <p class="proj-desc">${p.desc}</p>
        <div class="proj-tags">${tagsHTML}</div>
        ${linksHTML}
      </article>`;
  }).join('');

  // Update count display
  const allBtn = document.querySelector('.f-btn[data-filter="all"]');
  if (allBtn && filter === 'all') {
    const countEl = allBtn.querySelector('.f-count');
    if (countEl) countEl.textContent = PROJECTS.length;
  }

  reobserveReveal();
}

/* ── FILTER BUTTONS ───────────────────────────────────────── */
document.querySelectorAll('.f-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.f-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    renderProjects(btn.dataset.filter);
  });
});

/* ── THEME ────────────────────────────────────────────────── */
const themeBtn = document.getElementById('themeBtn');
const savedTheme = localStorage.getItem('theme');

if (savedTheme === 'dark') document.body.classList.add('dark');

themeBtn && themeBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  const mode = document.body.classList.contains('dark') ? 'dark' : 'light';
  localStorage.setItem('theme', mode);
});

/* ── MOBILE SIDEBAR ───────────────────────────────────────── */
const hamburger = document.getElementById('hamburger');
const sidebar = document.getElementById('sidebar');

// create backdrop element
const backdrop = document.createElement('div');
backdrop.className = 'sidebar-backdrop';
document.body.appendChild(backdrop);

function closeSidebar() {
  sidebar && sidebar.classList.remove('open');
  hamburger && hamburger.classList.remove('open');
  backdrop.classList.remove('show');
  document.body.style.overflow = '';
}

function openSidebar() {
  sidebar && sidebar.classList.add('open');
  hamburger && hamburger.classList.add('open');
  backdrop.classList.add('show');
  document.body.style.overflow = 'hidden';
}

hamburger && hamburger.addEventListener('click', () => {
  if (sidebar.classList.contains('open')) {
    closeSidebar();
  } else {
    openSidebar();
  }
});

backdrop.addEventListener('click', closeSidebar);

// Close on link click (mobile)
document.querySelectorAll('.nav-link, .resume-link').forEach(link => {
  link.addEventListener('click', () => {
    if (window.innerWidth <= 1024) closeSidebar();
  });
});

/* ── SMOOTH SCROLL ────────────────────────────────────────── */
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const href = a.getAttribute('href');
    if (href === '#') return;
    const el = document.querySelector(href);
    if (el) {
      e.preventDefault();
      const top = el.getBoundingClientRect().top + window.pageYOffset - 32;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  });
});

/* ── ACTIVE NAV LINK on scroll ───────────────────────────── */
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');

function updateActiveNav() {
  const scrollY = window.pageYOffset + 100;
  let currentId = '';

  sections.forEach(section => {
    const top = section.offsetTop;
    if (scrollY >= top) {
      currentId = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.toggle('active', link.getAttribute('href') === '#' + currentId);
  });
}

window.addEventListener('scroll', updateActiveNav, { passive: true });

/* ── SCROLL REVEAL ────────────────────────────────────────── */
const revealObs = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('in');
      revealObs.unobserve(e.target);
    }
  });
}, { threshold: 0.05, rootMargin: '0px 0px -30px 0px' });

function reobserveReveal() {
  document.querySelectorAll('.proj-card').forEach(el => {
    el.classList.add('reveal');
    revealObs.observe(el);
  });
}

function attachReveal() {
  document.querySelectorAll(
    '.exp-item, .stack-block, .lead-item, .info-card, .cert-row:not(.cert-head), .edu-item, .contact-row'
  ).forEach(el => {
    el.classList.add('reveal');
    revealObs.observe(el);
  });
}

/* ── LAST UPDATED DATE ────────────────────────────────────── */
const lastUpdated = document.getElementById('lastUpdated');
if (lastUpdated) {
  const d = new Date();
  const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  lastUpdated.textContent = `${months[d.getMonth()]} ${d.getFullYear()}`;
}

/* ── INIT ─────────────────────────────────────────────────── */
renderProjects('all');
attachReveal();
updateActiveNav();
