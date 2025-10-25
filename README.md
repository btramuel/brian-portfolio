# Brian Tramuel's Portfolio - Simple HTML Version

This is a simplified version of your portfolio using just **HTML, CSS, and JavaScript** - no React, no build tools, no npm needed!

## 📁 Files You Need

```
simple-portfolio/
├── index.html           ← Main HTML file
├── style.css            ← All the styling
├── script.js            ← JavaScript for interactions
├── profile.jpg          ← Your profile picture
└── documents/           ← Folder for PDFs
    ├── resume.pdf
    ├── grade-tracker-project.pdf
    ├── student-stress-analysis.pdf
    ├── doordash-usability-report.pdf
    └── valet-systems.pdf
```

## 🚀 How to Use

### Option 1: Open Directly in Browser (Easiest)
1. Double-click `index.html`
2. It will open in your default browser
3. That's it! ✨

### Option 2: Use with VS Code Live Server
1. Open the `simple-portfolio` folder in VS Code
2. Install "Live Server" extension
3. Right-click `index.html` → "Open with Live Server"
4. Your site will open at `http://127.0.0.1:5500`

### Option 3: Put on GitHub Pages (Free Hosting)
1. Create a new GitHub repository
2. Upload these files to the repository
3. Go to Settings → Pages
4. Select "main" branch as source
5. Your site will be live at `https://yourusername.github.io/repo-name`

## 📂 Adding Your Assets

### Add Your Profile Picture
1. Rename your profile picture to `profile.jpg`
2. Put it in the `simple-portfolio` folder (same level as index.html)

### Add Your Documents
1. Create a `documents` folder in `simple-portfolio`
2. Add these PDF files:
   - `resume.pdf`
   - `grade-tracker-project.pdf`
   - `student-stress-analysis.pdf`
   - `doordash-usability-report.pdf`
   - `valet-systems.pdf`

## ✏️ Customizing Your Content

All your content is in the files - just edit the HTML!

### Update Projects
Open `script.js` and find the `projects` array at the top. Each project looks like this:

```javascript
{
    title: "Project Name",
    description: "Description here",
    tags: ["Tag1", "Tag2"],
    category: ["web"],  // web, java, cloud, database, ux
    links: [
        { label: "GitHub", url: "https://...", icon: "github" }
    ]
}
```

### Update Experience/Education
Open `index.html` and find the sections. Update the text directly in the HTML.

### Change Colors
Open `style.css` and edit the `:root` section at the top:

```css
:root {
    --primary: #0066ff;        /* Main color */
    --text: #1a1a1a;          /* Text color */
    --background: #ffffff;     /* Background */
}
```

## 🎨 Features Included

✅ Responsive design (works on mobile, tablet, desktop)
✅ Dark/Light mode toggle (saves preference)
✅ Smooth scrolling navigation
✅ Project filtering by category
✅ Contact form (displays success message)
✅ Mobile-friendly hamburger menu
✅ All 11 projects with PDF links
✅ Professional animations

## 🌐 Deploying to the Web

### GitHub Pages (Free & Easy)
1. Create GitHub account if you don't have one
2. Create new repository
3. Upload all files
4. Enable GitHub Pages in settings
5. Done! Your site is live

### Netlify (Alternative)
1. Go to netlify.com
2. Drag and drop the `simple-portfolio` folder
3. Your site is live instantly!

## 📧 Contact Form

The contact form currently shows a success message when submitted. To make it actually send emails, you can:
1. Use a service like Formspree.io (free)
2. Use EmailJS (free)
3. Set up your own backend

## 🔧 No Installation Required

Unlike the React version:
- ❌ No `npm install`
- ❌ No Node.js needed
- ❌ No build process
- ✅ Just open the HTML file and it works!

## 💡 Tips

- Keep all files in the same folder structure
- Don't rename `style.css` or `script.js` (or update the references in `index.html`)
- Test in different browsers (Chrome, Firefox, Safari, Edge)
- Use Chrome DevTools (F12) to test mobile view

## 🎉 You're All Set!

Your simple portfolio is ready to go. Just add your images and PDFs, and you can:
1. Open it locally in any browser
2. Upload to GitHub Pages for free hosting
3. Share the link with recruiters and employers

Good luck with your job search! 🚀
