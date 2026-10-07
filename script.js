'use strict';

// projects live here so adding one is just adding an object.
// cats: security | infra | cloud | software | data | ux
// status: 'In progress' shows a badge, leave it off when done
const PROJECTS = [
  {
    title: 'Active Directory Detection Lab',
    stack: 'Windows Server 2025, Active Directory, PowerShell, DNS, VMware Workstation',
    date: '2025 – now',
    status: 'In progress',
    featured: true,
    cats: ['security', 'infra'],
    desc: 'An enterprise-style AD environment I can break and fix on purpose: a Windows Server 2025 domain controller and a domain-joined Windows 11 client in VMware Workstation, with an OU structure, users, and security groups modeled on a small company. A PowerShell provisioning script builds the domain and has an optional flag that seeds common misconfigurations to hunt down. Documented with a README and a Mermaid topology diagram so anyone can rebuild it.',
    learned: 'How AD actually fits together (DNS, OUs vs. groups, authentication flow) and how to write lab docs that read like an engineering deliverable.',
    links: [] // add the repo once it's public
  },
  {
    title: 'IAM Access-Hygiene Audit',
    stack: 'PowerShell, Active Directory module (RSAT)',
    date: 'Aug 2026',
    featured: true,
    cats: ['security', 'infra'],
    desc: 'A read-only PowerShell tool that runs the access review an IAM team does on a schedule. It finds stale and never-logged-on accounts, disabled accounts still sitting in the directory, and privileged group membership resolved through nested groups, then flags the worst case: stale or disabled accounts that still hold admin rights. Outputs a CSV and a color-coded console summary, with a seed script to generate test data in a lab.',
    learned: 'Why LastLogonDate lags real activity by up to two weeks, and why nested groups are where hidden admin rights live.',
    links: [] // add the repo once it's public
  },
  {
    title: 'Phishing & Smishing Analyzer',
    stack: 'Python (standard library)',
    date: 'Aug 2026',
    featured: true,
    cats: ['security', 'software'],
    desc: 'A Python triage tool for suspicious email (.eml) and text messages. Checks for From / Reply-To / Return-Path mismatches, reads SPF, DKIM, and DMARC results, and analyzes every link. Both analyzers share one link-analysis module, which catches lookalike domains like paypa1.com with homoglyph normalization. Standard library only.',
    learned: 'Testing the SMS version exposed a lookalike-domain check that only worked by accident in the email version. Fixing it in the shared module fixed both.',
    links: [] // add the repo once it's public
  },
  {
    title: 'Digital Forensic Examinations',
    stack: 'Autopsy, The Sleuth Kit, ExifTool, ewfverify, Windows registry',
    date: 'Fall 2026',
    featured: true,
    cats: ['security'],
    desc: 'Two court-style forensic reports from my graduate forensics course, each answering an investigator\'s questions from E01 disk images. On a seized thumb drive, I carved three deleted photos and used their EXIF and GPS data to tie them to an iPhone 6s and a specific campus building. On a Windows 7 laptop, I rebuilt a suspect\'s timeline from email, IE WebCache history, registry hives, and downloads, including searches for anti-forensics tools and a CCleaner download. Every image was hash-verified and every finding cross-checked with a second toolset.',
    learned: 'Pinning down time zones before trusting any timestamp, and writing findings so a non-technical reader (or a court) can follow them.',
    links: [
      { text: 'Laptop exam (PDF)', url: 'documents/forensics-monarch-laptop-exam.pdf' },
      { text: 'Thumb drive exam (PDF)', url: 'documents/forensics-thumb-drive-exam.pdf' }
    ]
  },
  {
    title: 'Identity & Access Service',
    stack: 'Node.js, Express, PostgreSQL, Prisma, JWT, bcrypt, Zod',
    date: 'Jan 2026',
    cats: ['security', 'software'],
    desc: 'A REST API for identity and access management with registration, login, and role-based permissions. Passwords hashed with bcrypt, JWTs issued on login, Zod input validation, and rate limiting on the login route to slow down brute-force attempts.',
    links: [{ text: 'GitHub', url: 'https://github.com/btramuel/identity-access-service' }]
  },
  {
    title: 'Panthers Library Management System',
    stack: 'Node.js, Express 5, PostgreSQL, JWT, bcrypt',
    date: 'Spring 2026',
    cats: ['software', 'security'],
    desc: 'Full-stack library system built with a team of five, where I wrote most of the backend. Users register, browse the catalog, and borrow or return books. JWT auth with an admin-only middleware layer, bcrypt hashing with an enforced password policy, and deactivated accounts blocked at login. Borrowing and returning run inside database transactions with rollback, so a failed checkout never leaves inventory counts out of sync. Also enforces a 3-book limit and supports pagination, genre filters, and sorting.',
    links: [{ text: 'GitHub', url: 'https://github.com/ssuther6-ops/ITIS3300-Panthers' }]
  },
  {
    title: 'Applied Cryptography Labs',
    stack: 'Python, CyberChef, AES, HMAC, RSA, Diffie-Hellman',
    date: 'Fall 2026',
    cats: ['security', 'software'],
    desc: 'Hands-on labs from my graduate security course. I wrote a length-extension attack that forges a valid token against SHA256(secret || message), then showed the same forgery fails against HMAC. I also built a stateful man-in-the-middle interceptor where Mallory decrypts and rewrites a message in transit, and worked through which encrypt-and-MAC schemes actually give confidentiality and integrity, plus RSA, Diffie-Hellman, and salted password KDFs.',
    links: [
      { text: 'Length-extension attack', url: 'https://github.com/btramuel/LabHM_LengthExtension' },
      { text: 'MITM interceptor', url: 'https://github.com/btramuel/Lab04Final_Interceptor' }
    ]
  },
  {
    title: 'Proton VPN Usability Study',
    stack: 'Moderated think-aloud testing, SEQ, SUS',
    date: '2026',
    cats: ['ux', 'security'],
    desc: 'Four-person usability study of Proton VPN with 12 participants ranging from first-time to experienced VPN users. Across six tasks, the kill switch was the clear problem: lowest SEQ score, most errors, and slowest time, and several people who turned it on still could not say what it did. Our main takeaway was the gap between feeling secure (green banner, lock icon) and actually being protected.',
    links: [{ text: 'Report (PDF)', url: 'documents/proton-vpn-usability-study.pdf' }]
  },
  {
    title: 'Proton Pass Heuristic Evaluation',
    stack: "Nielsen's heuristics, severity rating",
    date: '2026',
    cats: ['ux', 'security'],
    desc: "Five-person evaluation of a password manager across its desktop app, web app, and browser extension on Mac and Windows. We found about ten issues and rated each on Nielsen's 0–4 scale. The worst were security problems wearing a UX costume: credentials deleted with no confirmation, vault moves with no undo in shared vaults, and a toolbar icon that looks the same whether the vault is locked or not.",
    links: [{ text: 'Report (PDF)', url: 'documents/proton-pass-heuristic-evaluation.pdf' }]
  },
  {
    title: 'Rust Battleship',
    stack: 'Rust, networking',
    date: 'Fall 2026',
    status: 'In progress',
    cats: ['software'],
    desc: 'Online two-player Battleship built in Rust with a team of four for ITCS 5102. We picked Rust for its memory safety and its growing use in security tooling. Final presentation is November 16.',
    links: [{ text: 'GitHub', url: 'https://github.com/btramuel/Rust-BattleShip' }]
  },
  {
    title: 'Server Migration to Azure',
    stack: 'Azure, VMware',
    date: 'Aug 2024',
    cats: ['cloud', 'infra'],
    desc: 'Part of my Mecklenburg County internship: moved physical servers to Azure with secure data transfer, retired the old hardware properly, and documented the new setup.',
    links: []
  },
  {
    title: 'Cloud File Storage Service',
    stack: 'Spring Boot, Azure Blob Storage, PostgreSQL, Maven',
    date: 'Dec 2025',
    cats: ['cloud', 'software'],
    desc: 'Spring Boot REST API backed by Azure Blob Storage and PostgreSQL for uploading, listing, downloading, and deleting files. Built with Spring Data JPA and Maven, tested with Postman and curl.',
    links: [{ text: 'GitHub', url: 'https://github.com/btramuel/cloud-file-storage' }]
  },
  {
    title: 'Book Club API',
    stack: 'Node.js, Express, PostgreSQL, Prisma, Docker, Swagger, Render',
    date: 'May 2026',
    cats: ['software', 'cloud'],
    desc: 'REST API with 10+ endpoints for users, books, and clubs, with role-based access control and JWT + bcrypt auth. Containerized with Docker, documented with Swagger, deployed on Render.',
    links: [{ text: 'GitHub', url: 'https://github.com/btramuel/book-club-api' }]
  },
  {
    title: 'UC Berkeley EECS Redesign',
    stack: 'UX research, HTML, CSS, JavaScript',
    date: 'Apr 2026',
    cats: ['ux'],
    desc: 'Capstone: my team audited the EECS site against Nielsen\'s heuristics and rebuilt it. I led UX research and frontend. Two rounds of usability testing shaped the final responsive build with dark mode, search, and a validated RSVP form.',
    links: [{ text: 'Case study', url: 'https://webpages.charlotte.edu/btramue1/itis3135/case-study/index.html' }]
  },
  {
    title: 'Planner App UX Research',
    stack: 'Think-aloud testing, SEQ, SUS, focus groups, co-design',
    date: 'Fall 2025',
    cats: ['ux', 'data'],
    desc: 'Semester-long research project with a team of five on why planner apps fail people who struggle with big tasks. We ran moderated think-aloud usability tests on Todoist with SEQ and SUS scoring, then focus groups, personas, and journey maps, then co-design sessions where participants sketched their ideal planner. I ran my own participant sessions, built a persona and journey map, and covered competitor usability problems and market opportunities for the final poster.',
    links: [{ text: 'Final report (PDF)', url: 'documents/planner-app-ux-research.pdf' }]
  },
  {
    title: 'Car Valet Management System',
    stack: 'MySQL, SQL, ERD',
    date: '2024',
    cats: ['data'],
    desc: 'Relational database for valet staff, vehicles, and transactions, with stored procedures and indexed queries.',
    links: [{ text: 'Documentation (PDF)', url: 'documents/valet-systems.pdf' }]
  },
  {
    title: 'Student Stress Analysis',
    stack: 'SAS, regression',
    date: '2024',
    cats: ['data'],
    desc: 'Survey of STEM students analyzed in SAS with regression models to find what drives stress.',
    links: [{ text: 'Report (PDF)', url: 'documents/student-stress-analysis.pdf' }]
  },
  {
    title: 'File System Simulator',
    stack: 'Java',
    date: '2023',
    cats: ['software'],
    desc: 'Java command-line app with its own command interpreter for creating, navigating, and managing files and folders, plus tree view.',
    links: [{ text: 'GitHub', url: 'https://github.com/btramuel/File-System-' }]
  },
  {
    title: 'Grade Tracker App',
    stack: 'Prototyping, usability testing',
    date: '2024',
    cats: ['ux'],
    desc: 'Grade visualization tool designed through a full UX cycle. Usability tests drove navigation changes that cut task time.',
    links: [{ text: 'Documentation (PDF)', url: 'documents/grade-tracker-project.pdf' }]
  },
  {
    title: 'DoorDash Usability Evaluation',
    stack: 'SEQ, SUS, heuristic evaluation',
    date: '2024',
    cats: ['ux'],
    desc: 'Ran SEQ and SUS testing on DoorDash ordering flows and found friction in item customization and promo codes.',
    links: [{ text: 'Report (PDF)', url: 'documents/doordash-usability-report.pdf' }]
  }
];

const list = document.getElementById('projectList');

function projectHTML(p, showFeatured) {
  const badge = p.status ? `<span class="badge">${p.status}</span>` : '';
  const learned = p.learned
    ? `<p class="proj-learned"><strong>What I learned:</strong> ${p.learned}</p>`
    : '';
  const links = p.links.length
    ? `<div class="proj-links">${p.links.map(l =>
        `<a href="${l.url}" target="_blank" rel="noopener">${l.text}</a>`).join('')}</div>`
    : '';
  const cls = showFeatured && p.featured ? 'proj is-featured' : 'proj';

  return `
    <article class="${cls}">
      <div class="proj-top">
        <h3 class="proj-title">${p.title}${badge}</h3>
        <span class="proj-date">${p.date}</span>
      </div>
      <p class="proj-desc">${p.desc}</p>
      ${p.stack ? `<p class="proj-stack">Built with ${p.stack}</p>` : ''}
      ${learned}
      ${links}
    </article>`;
}

function render(filter) {
  const items = filter === 'all' ? PROJECTS : PROJECTS.filter(p => p.cats.includes(filter));
  // only call out featured ones on the "All" view, otherwise it's noisy
  list.innerHTML = items.length
    ? items.map(p => projectHTML(p, filter === 'all')).join('')
    : '<p class="empty">Nothing in this category yet.</p>';
}

document.querySelectorAll('.filter').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.filter').forEach(b => {
      b.classList.remove('is-on');
      b.setAttribute('aria-pressed', 'false');
    });
    btn.classList.add('is-on');
    btn.setAttribute('aria-pressed', 'true');
    render(btn.dataset.filter);
  });
});

// theme toggle. no saved choice = follow the OS
const themeBtn = document.getElementById('themeBtn');

function currentTheme() {
  const set = document.documentElement.dataset.theme;
  if (set) return set;
  return matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

themeBtn.addEventListener('click', () => {
  const next = currentTheme() === 'dark' ? 'light' : 'dark';
  document.documentElement.dataset.theme = next;
  try { localStorage.setItem('theme', next); } catch (e) {}
});

render('all');
