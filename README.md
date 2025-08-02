# 🌟 Sani Miftah - Creative Digital Storyteller Portfolio

> **Live Portfolio**: [https://sanimiftah.github.io/portfolio-website/](https://sanimiftah.github.io/portfolio-website/)

A professional, interactive portfolio showcasing my journey as a Creative Digital Storyteller & Content Strategist, featuring comprehensive animations, glassmorphism design, and cultural heritage preservation projects.

## ✨ Key Features

### 🎨 Design & User Experience
- **Glassmorphism Design**: Modern glass-effect UI with mega mendung cloud patterns
- **Comprehensive Animations**: Card hover effects, floating shapes, and smooth transitions
- **Responsive Layout**: Optimized for all devices with mobile-first approach
- **Interactive Elements**: Dynamic progress bars, smooth scrolling, and engaging hover states
- **Cultural Aesthetics**: Indonesian-inspired design elements and color schemes

### 🚀 Technical Implementation
- **Performance Optimized**: Efficient animations and optimized loading
- **SEO Friendly**: Comprehensive meta tags and semantic HTML structure
- **Cross-browser Compatible**: Tested across modern browsers
- **Accessibility**: Proper ARIA labels and keyboard navigation support

## 🛠️ Tech Stack

- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **Styling**: Tailwind CSS v2.2.19, Custom CSS animations
- **Icons**: Font Awesome v6.5.1 with fallback support
- **Features**: Intersection Observer API, CSS Grid & Flexbox, CSS Custom Properties
- **Deployment**: GitHub Pages

## 📂 Project Structure

```
portfolio-website/
│
├── index.html              # Main portfolio page
├── README.md              # Project documentation
│
└── assets/
    ├── css/
    │   └── styles.css     # Custom animations and glassmorphism effects
    ├── js/
    │   └── main.js        # Interactive functionality and scroll effects
    └── images/
        └── (portfolio assets)
```

## 🎯 Portfolio Sections

### 🏠 Hero Section
- Animated background with floating shapes
- Professional introduction with glassmorphism card
- Social links and call-to-action buttons
- Current focus on IMPACT and CareerSync AI projects

### 👤 About Section
- Personal philosophy and career journey
- Professional stats and achievements
- Skills preview with gradient icons
- Current role at Cognizant Malaysia

### 💼 Experience & Skills
- Interactive timeline of professional journey
- Comprehensive skills grid with animations
- Core competencies with hover effects
- Technical expertise across content creation and digital media

### 🌍 Impact Projects
- **IMPACT**: Social Impact Coordination Platform
- **Cultural Heritage Preservation**: Jelita Indonesia campaigns
- **CareerSync AI**: Career development platform
- **Digital Creator Empowerment**: SM-gnt talent platform

### 📧 Contact Section
- Interactive contact form with glassmorphism design
- Multiple contact methods
- Professional social media links
- Responsive layout for all devices

## 🚀 Quick Start

### Prerequisites
- Modern web browser
- Internet connection (for CDN resources)
### Local Development

1. **Clone the repository**:
   ```bash
   git clone https://github.com/sanimiftah/portfolio-website.git
   cd portfolio-website
   ```

2. **Open in browser**:
   - Simply open `index.html` in your browser, or
   - Use a local server for development:

   ```bash
   # Using Python 3
   python3 -m http.server 8000
   
   # Using Node.js live-server
   npx live-server
   
   # Using PHP
   php -S localhost:8000
   ```

3. **Visit**: `http://localhost:8000`

### Making Changes

1. **Edit content**: Update `index.html` for personal information
2. **Modify styles**: Edit `assets/css/styles.css` for custom animations
3. **Update functionality**: Modify `assets/js/main.js` for interactions
4. **Test**: Preview changes in multiple browsers and screen sizes

## 🎨 Customization Guide

### 🎯 Personal Information
Update the following sections in `index.html`:
- Hero section name and title
- About section philosophy and current focus
- Experience timeline with your professional journey
- Projects section with your featured work
- Contact information and social links

### 🌈 Visual Customization
**CSS Variables** in `assets/css/styles.css`:
```css
:root {
  --navy: #1e3a8a;
  --gradient-blue: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  --glass-bg: rgba(255, 255, 255, 0.1);
}
```

**Animation Classes**:
- `.skills-card`: Skills section animations
- `.competency-card`: Core competencies hover effects
- `.project-card`: Impact projects interactions
- `.contact-method-card`: Contact section animations
- `.contact-form`: Form submission effects

### 📊 Analytics Integration
Add tracking code before closing `</head>` tag:
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_TRACKING_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_TRACKING_ID');
</script>
```

## 📱 Responsive Features

- **Mobile-First Design**: Optimized for mobile devices
- **Flexible Grid System**: Adapts to all screen sizes
- **Touch-Friendly**: Properly sized buttons and links
- **Performance Optimized**: Efficient loading on slower connections

## ⚡ Animation System

### Card Animations
```css
.skills-card, .competency-card, .project-card, .contact-method-card {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.skills-card:hover {
  transform: translateY(-10px) scale(1.02);
}
```

### Glassmorphism Effects
- Background blur with `backdrop-filter`
- Semi-transparent backgrounds
- Subtle border highlights
- Gradient overlays

## 🌍 Deployment

### GitHub Pages (Current)
✅ **Live at**: [https://sanimiftah.github.io/portfolio-website/](https://sanimiftah.github.io/portfolio-website/)

**Setup Process**:
1. Repository created: `portfolio-website`
2. Code pushed to `main` branch
3. GitHub Pages enabled in repository settings
4. Automatic deployment on every push

### Alternative Deployment Options

**Netlify**:
1. Connect GitHub repository
2. Set build command: (none needed)
3. Set publish directory: `/` (root)
4. Deploy automatically

**Vercel**:
1. Import GitHub repository
2. Configure project settings
3. Deploy with zero configuration

**Traditional Hosting**:
- Upload files via FTP/SFTP
- Ensure `index.html` is in root directory
- Configure domain name

## 🛠️ Features Implementation

### 🎪 Comprehensive Animation System
- **Card Hover Effects**: Transform and scale animations
- **Floating Shapes**: CSS keyframe animations in hero section
- **Smooth Scrolling**: JavaScript-powered navigation
- **Progress Indicators**: Dynamic scroll progress bar

### 🎨 Glassmorphism Design
- **Background Blur**: `backdrop-filter: blur(10px)`
- **Transparency**: `rgba(255, 255, 255, 0.1)`
- **Border Highlights**: Subtle white borders
- **Gradient Overlays**: Multi-layer visual depth

### 📧 Contact Form
- **Validation**: Client-side form validation
- **Styling**: Glassmorphism design consistency
- **Accessibility**: Proper labels and focus states
- **Responsiveness**: Optimized for all devices

## 🎯 Project Highlights

### Featured Projects

1. **IMPACT** - Social Impact Coordination Platform
   - Live Demo: [https://sanimiftah.github.io/impact/](https://sanimiftah.github.io/impact/)
   - Repository: [https://github.com/sanimiftah/impact](https://github.com/sanimiftah/impact)

2. **CareerSync AI** - Career Development Platform
   - Live Demo: [https://sanimiftah.github.io/careersync-ai/](https://sanimiftah.github.io/careersync-ai/)
   - Repository: [https://github.com/sanimiftah/careersync-ai](https://github.com/sanimiftah/careersync-ai)

3. **Cultural Heritage Preservation**
   - Jelita Indonesia: [YouTube Campaign](https://youtu.be/qR0mK_97U4Q?si=ZXHW92zsyqN2M1fs)
   - Saung Angklung Udjo: [Cultural Documentation](https://youtu.be/Th3liDupxOc?si=7GPY-H4dRE3ebnJ9)

## 🤝 Contributing

While this is a personal portfolio, contributions for improvements are welcome:

1. **Fork** the repository
2. **Create** a feature branch (`git checkout -b feature/improvement`)
3. **Commit** your changes (`git commit -am 'Add improvement'`)
4. **Push** to the branch (`git push origin feature/improvement`)
5. **Create** a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📞 Contact

**Sani Miftah**
- **Portfolio**: [https://sanimiftah.github.io/portfolio-website/](https://sanimiftah.github.io/portfolio-website/)
- **Email**: sanimiftah@outlook.com
- **LinkedIn**: [https://www.linkedin.com/in/sani-miftahudin/](https://www.linkedin.com/in/sani-miftahudin/)
- **GitHub**: [https://github.com/sanimiftah](https://github.com/sanimiftah)

---

## 🌟 Acknowledgments

- **Tailwind CSS** - For the utility-first CSS framework
- **Font Awesome** - For the comprehensive icon library
- **GitHub Pages** - For free hosting and deployment
- **Cognizant Vibe Coding Week 2025** - For inspiring the IMPACT and CareerSync AI projects

---

**Built with ❤️ for technology and social impact**

### Adding New Sections
1. Add HTML structure in `index.html`
2. Style in `assets/css/styles.css`
3. Add interactivity in `assets/js/main.js`

### Animations
- Use CSS transforms for better performance
- Implement Intersection Observer for scroll-triggered animations
- Keep animations under 300ms for responsiveness

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contact

- **Email**: sanimiftah@example.com
- **LinkedIn**: [linkedin.com/in/sanimiftah](https://linkedin.com/in/sanimiftah)
- **GitHub**: [github.com/sanimiftah](https://github.com/sanimiftah)

## 🙏 Acknowledgments

- Inspired by modern web design trends
- Built during Cognizant Vibe Coding Week
- Special thanks to the open-source community

---

**⭐ If you like this portfolio, please give it a star!**

Made with ❤️ by Sani Miftah
