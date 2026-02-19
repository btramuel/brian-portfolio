'use strict';

// ── PROJECT DATA ──────────────────────────────────────────────────────────────
const PROJECTS = [
  {
    title: 'Cloud File Storage Service',
    desc:  'Built a Spring Boot REST API backed by Azure Blob Storage and PostgreSQL, supporting 4+ file operations. Implemented endpoints using Spring Data JPA and Maven; validated 10+ API calls with Postman and curl.',
    tags:  ['Spring Boot', 'Azure Blob', 'PostgreSQL', 'REST API', 'Maven', 'Postman'],
    cats:  ['backend', 'cloud'],
    color: '#5b7fff',
    label: 'Backend · Cloud',
    date:  'Dec 2025',
    links: []
  },
  {
    title: 'Identity & Access Management System',
    desc:  'Built a JWT-based authentication system with role-based access control (RBAC), supporting 2+ roles and 3+ permissions. Secured 5+ REST endpoints and stored user credentials and roles in PostgreSQL.',
    tags:  ['Spring Boot', 'Spring Security', 'JWT', 'RBAC', 'PostgreSQL', 'Postman'],
    cats:  ['backend', 'cloud'],
    color: '#a855f7',
    label: 'Security · Backend',
    date:  'Oct 2025',
    links: []
  },
  {
    title: 'Active Directory Domain Lab',
    desc:  'Configured a Windows Server 2025 Domain Controller and Windows 11 client in VMware Workstation. Set up DNS, user authentication policies, and organized user accounts and groups to simulate enterprise-scale identity management.',
    tags:  ['VMware', 'Windows Server 2025', 'AD DS', 'DNS', 'IAM'],
    cats:  ['cloud'],
    color: '#22d3ee',
    label: 'Cloud · Infrastructure',
    date:  'Sep 2025',
    links: []
  },
  {
    title: 'Server Migration to Azure',
    desc:  'Migrated physical servers to Azure cloud infrastructure, ensuring secure data transfer and retiring legacy hardware. Fully documented the new infrastructure setup.',
    tags:  ['Azure', 'VMware', 'Cloud Migration', 'Documentation'],
    cats:  ['cloud'],
    color: '#22d3ee',
    label: 'Cloud',
    links: []
  },
  {
    title: 'Charlotte Web Pages Site',
    desc:  'Deployed and maintained a course site on UNC Charlotte webspace with reusable components, form validation, and accessible design following WCAG guidelines.',
    tags:  ['HTML', 'CSS', 'JavaScript'],
    cats:  ['web'],
    color: '#34d399',
    label: 'Web',
    links: [{ text: 'View Site →', url: 'https://webpages.charlotte.edu/btramue1/itis3135/' }]
  },
  {
    title: 'Cloud Portfolio Website',
    desc:  'Built and deployed a personal portfolio hosted on Azure Blob Storage with static site hosting, custom domain, and CDN-enabled asset delivery.',
    tags:  ['HTML', 'CSS', 'Azure Blob', 'Static Hosting'],
    cats:  ['web', 'cloud'],
    color: '#34d399',
    label: 'Web · Cloud',
    links: [{ text: 'GitHub →', url: 'https://github.com/btramuel/brian-portfolio' }]
  },
  {
    title: 'Car Valet Management System',
    desc:  'Relational database system for managing valet staff, vehicles, and transactions. Includes stored procedures, indexed queries, and real-time transaction tracking.',
    tags:  ['SQL', 'MySQL', 'Database Design', 'ERD'],
    cats:  ['database'],
    color: '#fb923c',
    label: 'Database',
    links: [{ text: 'View Docs →', url: 'documents/valet-systems.pdf' }]
  },
  {
    title: 'Student Stress Analysis',
    desc:  'Analyzed survey data using SAS and regression models to identify stress patterns among STEM students. Used Google Forms for data collection and statistical modeling.',
    tags:  ['SAS', 'Statistics', 'Regression', 'Data Analysis'],
    cats:  ['database'],
    color: '#fb923c',
    label: 'Data',
    links: [{ text: 'View Report →', url: 'documents/student-stress-analysis.pdf' }]
  },
  {
    title: 'File System Simulator',
    desc:  'Java CLI application simulating file and folder management with a custom command interpreter. Supports directory creation, navigation, file operations, and full tree visualization.',
    tags:  ['Java', 'CLI', 'Data Structures', 'OOP'],
    cats:  ['backend'],
    color: '#5b7fff',
    label: 'Java',
    links: [{ text: 'GitHub →', url: 'https://github.com/btramuel/File-System-' }]
  },
  {
    title: 'Library Management System',
    desc:  'Java-based book manager using ArrayLists to add, remove, search, and sort library titles via an interactive terminal UI.',
    tags:  ['Java', 'ArrayList', 'OOP', 'CLI'],
    cats:  ['backend'],
    color: '#5b7fff',
    label: 'Java',
    links: [{ text: 'GitHub →', url: 'https://github.com/btramuel/Library-' }]
  },
  {
    title: 'Grade Tracker App',
    desc:  'Designed a grade visualization and tracking tool through a full UX cycle. Usability tests informed navigation refinements that measurably reduced user confusion and task time.',
    tags:  ['UX Design', 'Prototyping', 'Usability Testing'],
    cats:  ['ux', 'web'],
    color: '#facc15',
    label: 'UX',
    links: [{ text: 'View Docs →', url: 'documents/grade-tracker-project.pdf' }]
  },
  {
    title: 'DoorDash Usability Evaluation',
    desc:  'Led SEQ/SUS testing on DoorDash ordering and navigation flows. Identified friction in customization and promo code discoverability; produced actionable design recommendations.',
    tags:  ['UX Research', 'SEQ/SUS', 'Heuristic Eval'],
    cats:  ['ux'],
    color: '#facc15',
    label: 'UX Research',
    links: [{ text: 'View Report →', url: 'documents/doordash-usability-report.pdf' }]
  }
];

// ── RENDER PROJECTS ───────────────────────────────────────────────────────────
function renderProjects(filter) {
  const grid = document.getElementById('projectsGrid');
  if (!grid) return;

  const list = filter === 'all'
    ? PROJECTS
    : PROJECTS.filter(p => p.cats.includes(filter));

  grid.innerHTML = list.map((p, i) => {
    const tagsHTML = p.tags.map(t => `<span class="proj-tag">${t}</span>`).join('');
    const linksHTML = p.links.length
      ? `<div class="proj-links">${p.links.map(l => `<a href="${l.url}" target="_blank" rel="noopener" class="proj-link">${l.text}</a>`).join('')}</div>`
      : '';
    const dateHTML = p.date ? `<span style="font-family:var(--f-mono);font-size:.65rem;color:var(--text3)">${p.date}</span>` : '';

    return `
      <div class="proj-card" style="animation-delay:${i * 0.055}s">
        <div class="proj-label" style="color:${p.color}">
          <span class="proj-label-dot" style="background:${p.color}"></span>
          ${p.label}
          ${dateHTML}
        </div>
        <h3>${p.title}</h3>
        <p>${p.desc}</p>
        <div class="proj-tags">${tagsHTML}</div>
        ${linksHTML}
      </div>`;
  }).join('');
}

// ── FILTER BUTTONS ────────────────────────────────────────────────────────────
document.querySelectorAll('.f-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.f-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    renderProjects(btn.dataset.filter);
    reobserveReveal();
  });
});

// ── THEME ─────────────────────────────────────────────────────────────────────
const themeBtn = document.getElementById('themeBtn');
if (localStorage.getItem('theme') === 'light') document.body.classList.add('light');

themeBtn && themeBtn.addEventListener('click', () => {
  document.body.classList.toggle('light');
  localStorage.setItem('theme', document.body.classList.contains('light') ? 'light' : 'dark');
});

// ── NAV SCROLL ────────────────────────────────────────────────────────────────
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar && navbar.classList.toggle('scrolled', window.scrollY > 40);
}, { passive: true });

// ── MOBILE MENU ───────────────────────────────────────────────────────────────
const hamburger = document.getElementById('hamburger');
const navLinks  = document.getElementById('navLinks');

hamburger && hamburger.addEventListener('click', () => {
  const open = navLinks.classList.toggle('open');
  hamburger.classList.toggle('open', open);
  document.body.style.overflow = open ? 'hidden' : '';
});

navLinks && navLinks.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => {
    navLinks.classList.remove('open');
    hamburger && hamburger.classList.remove('open');
    document.body.style.overflow = '';
  });
});

// ── SMOOTH SCROLL ─────────────────────────────────────────────────────────────
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const el = document.querySelector(a.getAttribute('href'));
    if (el) { e.preventDefault(); el.scrollIntoView({ behavior: 'smooth', block: 'start' }); }
  });
});

// ── SCROLL REVEAL ─────────────────────────────────────────────────────────────
const revealObs = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); revealObs.unobserve(e.target); } });
}, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

function reobserveReveal() {
  document.querySelectorAll('.proj-card').forEach(el => {
    el.classList.add('reveal');
    revealObs.observe(el);
  });
}

function attachReveal() {
  document.querySelectorAll('.exp-card, .skill-card, .lead-card, .edu-card, .contact-link, .about-left, .about-right').forEach(el => {
    el.classList.add('reveal');
    revealObs.observe(el);
  });
}

// ── SKILL BAR ANIMATION ───────────────────────────────────────────────────────
const barObs = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.querySelectorAll('.bar-fill').forEach((fill, i) => {
        const w = fill.dataset.w;
        setTimeout(() => { fill.style.width = w + '%'; }, i * 70);
      });
      barObs.unobserve(e.target);
    }
  });
}, { threshold: 0.25 });

document.querySelectorAll('.bar-list').forEach(el => barObs.observe(el));

// ── CUSTOM CURSOR ─────────────────────────────────────────────────────────────
const cur  = document.getElementById('cursor');
const ring = document.getElementById('cursorRing');
if (cur && ring) {
  let mx = 0, my = 0, rx = 0, ry = 0;
  document.addEventListener('mousemove', e => { mx = e.clientX; my = e.clientY; cur.style.left = mx + 'px'; cur.style.top = my + 'px'; }, { passive: true });
  (function loop() {
    rx += (mx - rx) * 0.11;
    ry += (my - ry) * 0.11;
    ring.style.left = rx + 'px';
    ring.style.top  = ry + 'px';
    requestAnimationFrame(loop);
  })();
  document.querySelectorAll('a, button, .f-btn, .chip, .stag').forEach(el => {
    el.addEventListener('mouseenter', () => ring.classList.add('hov'));
    el.addEventListener('mouseleave', () => ring.classList.remove('hov'));
  });
}

// ── CONTACT FORM ─────────────────────────────────────────────────────────────
const form    = document.getElementById('contactForm');
const formMsg = document.getElementById('formMsg');
form && form.addEventListener('submit', e => {
  e.preventDefault();
  formMsg.className = 'form-msg ok';
  formMsg.textContent = '✓ Message received! I\'ll be in touch soon.';
  form.reset();
  setTimeout(() => { formMsg.className = 'form-msg'; }, 7000);
});

// ── INIT ─────────────────────────────────────────────────────────────────────
renderProjects('all');
attachReveal();
setTimeout(reobserveReveal, 50);
